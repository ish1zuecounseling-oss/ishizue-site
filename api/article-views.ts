/**
 * api/article-views.ts — 運営者用:記事ごとの閲覧数を GA4 から取得する Vercel 関数
 *
 * 認証方式: Vercel の OIDC 連携 + Google Cloud の Workload Identity 連携
 *   (サービスアカウントの秘密鍵は使わない。Vercel が発行する一時的な身分証を Google の一時トークンに交換する)
 *
 * 必要な環境変数(Vercel の Settings → Environment Variables で設定):
 *   GCP_PROJECT_NUMBER                       … Google Cloud のプロジェクト番号(数字)
 *   GCP_WORKLOAD_IDENTITY_POOL_ID            … Workload Identity プールのID(例: vercel)
 *   GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID   … プロバイダのID(例: vercel)
 *   GCP_SERVICE_ACCOUNT_EMAIL                … サービスアカウントのメールアドレス
 *   GA4_PROPERTY_ID                          … GA4 のプロパティID(数字のみ。G-から始まる測定IDではない)
 *   ADMIN_VIEW_KEY                           … このページを開くための閲覧キー(自分で決めた文字列)
 *
 * 呼び出し: GET /api/article-views?days=28   ヘッダー x-admin-key: <閲覧キー>
 */

import { timingSafeEqual } from "node:crypto"

type Req = { method?: string; query: Record<string, string | string[] | undefined>; headers: Record<string, string | string[] | undefined> }
type Res = { status: (code: number) => Res; json: (body: unknown) => void; setHeader: (k: string, v: string) => void }

const ALLOWED_DAYS = [7, 28, 90]

type GcpConfig = { projectNumber: string; poolId: string; providerId: string; serviceAccount: string }

/** Vercel の OIDC トークン → Google の一時トークン → サービスアカウントのアクセストークン */
async function getAccessToken(oidcToken: string, cfg: GcpConfig): Promise<string> {
  // 1) Security Token Service で、Vercel のトークンを Google の連携トークンに交換
  const sts = await fetch("https://sts.googleapis.com/v1/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
      audience: `//iam.googleapis.com/projects/${cfg.projectNumber}/locations/global/workloadIdentityPools/${cfg.poolId}/providers/${cfg.providerId}`,
      scope: "https://www.googleapis.com/auth/cloud-platform",
      requestedTokenType: "urn:ietf:params:oauth:token-type:access_token",
      subjectTokenType: "urn:ietf:params:oauth:token-type:jwt",
      subjectToken: oidcToken,
    }),
  })
  const stsData = (await sts.json()) as { access_token?: string; error_description?: string; error?: string }
  if (!sts.ok || !stsData.access_token) throw new Error("sts: " + (stsData.error_description ?? stsData.error ?? sts.status))

  // 2) サービスアカウントになりすまして(権限借用)、GA4 読み取り用のトークンを発行
  const iam = await fetch(
    `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${encodeURIComponent(cfg.serviceAccount)}:generateAccessToken`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${stsData.access_token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ scope: ["https://www.googleapis.com/auth/analytics.readonly"] }),
    }
  )
  const iamData = (await iam.json()) as { accessToken?: string; error?: { message?: string } }
  if (!iam.ok || !iamData.accessToken) throw new Error("iamcredentials: " + (iamData.error?.message ?? iam.status))
  return iamData.accessToken
}

function keyMatches(given: string, expected: string): boolean {
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

type Ga4Row = { dimensionValues: { value: string }[]; metricValues: { value: string }[] }

/* ---- GA4 Data API の呼び出し(同時数の制限・結果の一時保存・クォータ超過時の再試行) ----
 * GA4 Data API は、1つのプロパティで同時に処理できるリクエストが10本まで。超えると
 * "Exhausted concurrent requests quota" になる。そのため
 *   1. 同時に飛ばす数を GA4_MAX_CONCURRENT 本までに絞る(順番待ちさせる)
 *   2. 同じ問い合わせは GA4_CACHE_TTL_MS のあいだ結果を使い回す(同時に来た同じ問い合わせは1本にまとめる)
 *   3. 429 / 503 / クォータ超過のときは、待ち時間を倍にしながら再試行する
 * 手入力の値・LINE・Redis は、この一時保存の対象外(毎回取り直す)。 */
const GA4_MAX_CONCURRENT = 4
const GA4_CACHE_TTL_MS = 5 * 60_000
const GA4_CACHE_MAX = 200
const GA4_RETRIES = 3
let ga4Active = 0
const ga4Waiters: (() => void)[] = []
const ga4Cache = new Map<string, { at: number; rows: Ga4Row[] }>()
const ga4Inflight = new Map<string, Promise<Ga4Row[]>>()

/** 同時実行数の枠を1つ使って fn を実行する。枠が空くまで待つ(空いた枠は待っている人に直接渡す) */
async function ga4Slot<T>(fn: () => Promise<T>): Promise<T> {
  if (ga4Active >= GA4_MAX_CONCURRENT) await new Promise<void>((resolve) => ga4Waiters.push(resolve))
  else ga4Active++
  try {
    return await fn()
  } finally {
    const next = ga4Waiters.shift()
    if (next) next()
    else ga4Active--
  }
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))
const ga4Retryable = (status: number, message: string) =>
  status === 429 || status === 503 || /quota|exhausted|concurrent|rate.?limit|too many/i.test(message)

async function ga4Fetch(token: string, propertyId: string, body: unknown): Promise<Ga4Row[]> {
  for (let attempt = 0; ; attempt++) {
    const out = await ga4Slot(async () => {
      const r = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const data = (await r.json().catch(() => ({}))) as { rows?: Ga4Row[]; error?: { message?: string } }
      return { ok: r.ok, status: r.status, rows: data.rows ?? [], message: data.error?.message ?? "" }
    })
    if (out.ok) return out.rows
    if (attempt < GA4_RETRIES && ga4Retryable(out.status, out.message)) {
      // 枠を手放してから待つ(0.6秒→1.2秒→2.4秒+ばらつき)
      await sleep(600 * 2 ** attempt + Math.random() * 300)
      continue
    }
    throw new Error("GA4: " + (out.message || out.status))
  }
}

async function ga4(token: string, propertyId: string, body: unknown): Promise<Ga4Row[]> {
  const key = propertyId + "|" + JSON.stringify(body)
  const hit = ga4Cache.get(key)
  if (hit && Date.now() - hit.at < GA4_CACHE_TTL_MS) return hit.rows
  const running = ga4Inflight.get(key)
  if (running) return running
  const p = ga4Fetch(token, propertyId, body)
    .then((rows) => {
      if (ga4Cache.size >= GA4_CACHE_MAX) {
        const oldest = ga4Cache.keys().next().value
        if (oldest !== undefined) ga4Cache.delete(oldest)
      }
      ga4Cache.set(key, { at: Date.now(), rows })
      return rows
    })
    .finally(() => { ga4Inflight.delete(key) })
  ga4Inflight.set(key, p)
  return p
}

export default async function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store")
  res.setHeader("X-Robots-Tag", "noindex")

  const {
    GA4_PROPERTY_ID, ADMIN_VIEW_KEY,
    GCP_PROJECT_NUMBER, GCP_WORKLOAD_IDENTITY_POOL_ID, GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID, GCP_SERVICE_ACCOUNT_EMAIL,
  } = process.env
  if (!GA4_PROPERTY_ID || !ADMIN_VIEW_KEY || !GCP_PROJECT_NUMBER || !GCP_WORKLOAD_IDENTITY_POOL_ID || !GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID || !GCP_SERVICE_ACCOUNT_EMAIL) {
    res.status(500).json({ error: "not_configured", message: "環境変数が設定されていません" })
    return
  }

  const given = req.headers["x-admin-key"]
  if (typeof given !== "string" || !keyMatches(given, ADMIN_VIEW_KEY)) {
    res.status(401).json({ error: "unauthorized", message: "閲覧キーが違います" })
    return
  }

  const daysRaw = Number(Array.isArray(req.query.days) ? req.query.days[0] : req.query.days)
  const days = ALLOWED_DAYS.includes(daysRaw) ? daysRaw : 28

  try {
    // Vercel の関数では、OIDC トークンがリクエストヘッダーで渡される
    const headerToken = req.headers["x-vercel-oidc-token"]
    const oidcToken = (typeof headerToken === "string" ? headerToken : "") || process.env.VERCEL_OIDC_TOKEN || ""
    if (!oidcToken) {
      res.status(500).json({ error: "no_oidc", message: "VercelのOIDC連携が有効になっていません" })
      return
    }
    const token = await getAccessToken(oidcToken, {
      projectNumber: GCP_PROJECT_NUMBER,
      poolId: GCP_WORKLOAD_IDENTITY_POOL_ID,
      providerId: GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID,
      serviceAccount: GCP_SERVICE_ACCOUNT_EMAIL,
    })
    const body = {
      // 今の期間と、その直前の同じ長さの期間を比べる
      dateRanges: [
        { startDate: `${days}daysAgo`, endDate: "yesterday", name: "current" },
        { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo`, name: "previous" },
      ],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "userEngagementDuration" }],
      dimensionFilter: { filter: { fieldName: "pagePath", stringFilter: { matchType: "BEGINS_WITH", value: "/articles/" } } },
      limit: 2000,
    }
    let rows: Ga4Row[]
    try {
      rows = await ga4(token, GA4_PROPERTY_ID, body)
    } catch (e) {
      res.status(502).json({ error: "ga4", message: e instanceof Error ? e.message.replace(/^GA4: /, "") : "unknown" })
      return
    }

    // 2つの期間を指定すると、dimensionValues の最後に dateRange の名前が付く
    const map = new Map<string, { views: number; users: number; engagementSec: number; prevViews: number }>()
    for (const row of rows) {
      const rawPath = row.dimensionValues[0].value
      const range = row.dimensionValues[row.dimensionValues.length - 1].value
      const path = rawPath.split("?")[0].replace(/\/$/, "")
      const cur = map.get(path) ?? { views: 0, users: 0, engagementSec: 0, prevViews: 0 }
      const views = Number(row.metricValues[0].value) || 0
      if (range === "previous") {
        cur.prevViews += views
      } else {
        cur.views += views
        cur.users += Number(row.metricValues[1].value) || 0
        cur.engagementSec += Number(row.metricValues[2].value) || 0
      }
      map.set(path, cur)
    }

    res.status(200).json({
      days,
      fetchedAt: new Date().toISOString(),
      rows: [...map.entries()].map(([path, v]) => ({ path, ...v })),
    })
  } catch (e) {
    res.status(502).json({ error: "fetch_failed", message: e instanceof Error ? e.message : "unknown" })
  }
}

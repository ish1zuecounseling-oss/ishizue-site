/**
 * api/ops-dashboard.ts — 運営ダッシュボード用のデータをまとめて返す Vercel 関数
 *
 * 取得元
 *   - GA4 Data API      : 月別ユーザー・流入元、LINEクリック、チェック完了、記事ごとの閲覧とイベント、サイト内検索語
 *   - Search Console API: 記事ごとの表示回数・クリック・平均順位・検索語句、URLごとのGoogle登録状況
 *
 * 認証は api/article-views.ts と同じ(Vercel OIDC → Workload Identity → サービスアカウント)。
 * Search Console は、サービスアカウントを Search Console のユーザーに追加し、
 * Google Cloud で「Google Search Console API」を有効にすると取れるようになる。未設定のあいだは gsc.ok=false を返す。
 *
 * 呼び出し
 *   GET /api/ops-dashboard?days=28                ヘッダー x-admin-key: <閲覧キー>
 *   GET /api/ops-dashboard?inspect=<記事のURL>     … その1件のGoogle登録状況だけを返す
 *
 * 環境変数: article-views.ts と同じもの。GSC_SITE_URL は任意(未設定なら自動で探す)。
 *   LINE_CHANNEL_ACCESS_TOKEN  … LINE Messaging API のチャネルアクセストークン(友だち数・ターゲットリーチの取得用)
 *   KV_REST_API_URL / KV_REST_API_TOKEN(または UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN)
 *                              … 手入力項目の保存先(Vercel の Storage で Upstash Redis をつなぐと自動で入る)
 *
 *   POST /api/ops-dashboard  本文 { manual: {...} }  … 手入力項目を保存する
 */

import { timingSafeEqual } from "node:crypto"

type Req = { method?: string; body?: unknown; query: Record<string, string | string[] | undefined>; headers: Record<string, string | string[] | undefined> }
type Res = { status: (code: number) => Res; json: (body: unknown) => void; setHeader: (k: string, v: string) => void }

const ALLOWED_DAYS = [7, 28, 90]
const SITE_HOST = "ishizue-counseling.jp"
// LINEへのクリックとして数えるイベント(サイト内の各ボタン)と、チェック完了
const EVENT_REGEX = "check_complete|line_cta_click|line_click_from_check|[a-z_]*_line_click"

type GcpConfig = { projectNumber: string; poolId: string; providerId: string; serviceAccount: string }

async function getAccessToken(oidcToken: string, cfg: GcpConfig): Promise<string> {
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

  const iam = await fetch(
    `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${encodeURIComponent(cfg.serviceAccount)}:generateAccessToken`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${stsData.access_token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        scope: ["https://www.googleapis.com/auth/analytics.readonly", "https://www.googleapis.com/auth/webmasters.readonly"],
      }),
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

/** 日本時間の日付(YYYY-MM-DD)。offsetDays日前 */
function jstDate(offsetDays = 0): string {
  const d = new Date(Date.now() + 9 * 3600_000 - offsetDays * 86400_000)
  return d.toISOString().slice(0, 10)
}
/** 日本時間で、今月を含めて n か月前の1日 */
function jstMonthStart(monthsBack: number): string {
  const now = new Date(Date.now() + 9 * 3600_000)
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - monthsBack, 1))
  return d.toISOString().slice(0, 10)
}

function normPath(p: string): string {
  return p.split("?")[0].split("#")[0].replace(/\/$/, "") || "/"
}

type Ga4Row = { dimensionValues: { value: string }[]; metricValues: { value: string }[] }

async function ga4(token: string, propertyId: string, body: unknown): Promise<Ga4Row[]> {
  const r = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const data = (await r.json()) as { rows?: Ga4Row[]; error?: { message?: string } }
  if (!r.ok) throw new Error("GA4: " + (data.error?.message ?? r.status))
  return data.rows ?? []
}

const num = (v: string | undefined) => Number(v) || 0

/* ------------------------------ Search Console ------------------------------ */

async function gscFetch(token: string, url: string, body?: unknown) {
  const r = await fetch(url, {
    method: body ? "POST" : "GET",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = (await r.json().catch(() => ({}))) as Record<string, unknown> & { error?: { message?: string } }
  if (!r.ok) throw new Error(data.error?.message ?? `Search Console ${r.status}`)
  return data
}

/** 権限のあるプロパティの中から、このサイトのものを選ぶ(ドメインプロパティを優先) */
async function findGscSite(token: string): Promise<string> {
  if (process.env.GSC_SITE_URL) return process.env.GSC_SITE_URL
  const data = (await gscFetch(token, "https://searchconsole.googleapis.com/webmasters/v3/sites")) as {
    siteEntry?: { siteUrl: string; permissionLevel: string }[]
  }
  const sites = (data.siteEntry ?? []).filter((s) => s.siteUrl.includes(SITE_HOST) && s.permissionLevel !== "siteUnverifiedUser")
  const pick = sites.find((s) => s.siteUrl.startsWith("sc-domain:")) ?? sites[0]
  if (!pick) throw new Error("Search Console にこのサイトの権限がありません(サービスアカウントをユーザーに追加してください)")
  return pick.siteUrl
}

type GscRow = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }

async function gscQuery(token: string, site: string, body: unknown): Promise<GscRow[]> {
  const data = (await gscFetch(
    token,
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
    body
  )) as { rows?: GscRow[] }
  return data.rows ?? []
}


/* ------------------------------ LINE(友だち数) ------------------------------ */

type LineInsight = { date: string; followers: number; targetedReaches: number; blocks: number }

/** yyyyMMdd(日本時間)の時点の友だち数。まだ集計前なら null */
async function lineFollowers(token: string, yyyymmdd: string): Promise<LineInsight | null> {
  const r = await fetch(`https://api.line.me/v2/bot/insight/followers?date=${yyyymmdd}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const d = (await r.json().catch(() => ({}))) as { status?: string; followers?: number; targetedReaches?: number; blocks?: number; message?: string }
  if (!r.ok) throw new Error("LINE: " + (d.message ?? r.status))
  if (d.status !== "ready") return null
  return { date: yyyymmdd, followers: d.followers ?? 0, targetedReaches: d.targetedReaches ?? 0, blocks: d.blocks ?? 0 }
}

/** 日本時間で、n か月前の月末(yyyyMMdd)。n=1 で先月末 */
function jstMonthEnd(monthsBack: number): string {
  const now = new Date(Date.now() + 9 * 3600_000)
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - monthsBack + 1, 0))
  return d.toISOString().slice(0, 10).replace(/-/g, "")
}

async function getLine() {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN
  if (!token) return { ok: false, message: "LINE_CHANNEL_ACCESS_TOKEN が未設定です" }
  try {
    // 最新:昨日(当日分は翌日に集計されるため、なければ一昨日)
    const latest = (await lineFollowers(token, jstDate(1).replace(/-/g, ""))) ?? (await lineFollowers(token, jstDate(2).replace(/-/g, "")))
    // 各月末(先月末〜6か月前の月末)
    const ends = await Promise.all([1, 2, 3, 4, 5, 6].map(async (n) => {
      const date = jstMonthEnd(n)
      const v = await lineFollowers(token, date).catch(() => null)
      return v ? { month: date.slice(0, 6), ...v } : null
    }))
    return { ok: true, latest, monthEnds: ends.filter(Boolean) }
  } catch (e) {
    return { ok: false, message: e instanceof Error ? e.message : "unknown" }
  }
}

/* ------------------------------ 手入力項目の保存 ------------------------------ */

const MANUAL_KEY = "ishizue:ops-manual"

function kvConfig(): { url: string; token: string } | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? { url, token } : null
}

async function getManual() {
  const kv = kvConfig()
  if (!kv) return { ok: false, message: "保存先(Upstash Redis)が未接続です" }
  try {
    const r = await fetch(`${kv.url}/get/${encodeURIComponent(MANUAL_KEY)}`, { headers: { Authorization: `Bearer ${kv.token}` } })
    const d = (await r.json()) as { result?: string | null; error?: string }
    if (!r.ok) throw new Error(d.error ?? String(r.status))
    return { ok: true, data: d.result ? JSON.parse(d.result) : {} }
  } catch (e) {
    return { ok: false, message: e instanceof Error ? e.message : "unknown" }
  }
}

/** 保存する値を、想定した形だけに絞る(数値・真偽値・短い文字列) */
function sanitizeManual(input: unknown) {
  const src = (input && typeof input === "object" ? input : {}) as Record<string, unknown>
  const numMap = (v: unknown, keyRe: RegExp) => {
    const out: Record<string, number> = {}
    if (v && typeof v === "object") {
      for (const [k, n] of Object.entries(v as Record<string, unknown>)) {
        const x = Number(n)
        if (keyRe.test(k) && Number.isFinite(x) && x >= 0 && x < 100000) out[k] = Math.round(x)
      }
    }
    return out
  }
  const checklist: Record<string, boolean> = {}
  if (src.checklist && typeof src.checklist === "object") {
    for (const [k, v] of Object.entries(src.checklist as Record<string, unknown>)) {
      if (/^[a-z_]{1,30}$/.test(k)) checklist[k] = v === true
    }
  }
  const waiting = Number(src.waiting)
  return {
    igPosts: numMap(src.igPosts, /^\d{4}-\d{2}-\d{2}$/),       // 週の月曜日 → 投稿数
    igLineAdds: numMap(src.igLineAdds, /^\d{6}$/),              // yyyyMM → Instagram経由のLINE登録数
    checklist,
    waiting: Number.isFinite(waiting) && waiting >= 0 && waiting < 10000 ? Math.round(waiting) : 0,
    note: typeof src.note === "string" ? src.note.slice(0, 500) : "",
    snapshots: {} as Record<string, { checklistDone: number; waiting: number }>,
    updatedAt: new Date().toISOString(),
  }
}

/** LINEで「待つ」と返信した人数(api/line-webhook.ts が記録) */
/** LINEで「待つ」と返信した人(api/line-webhook.ts が記録)。人数と、各月末時点の累計 */
async function getWaitingFromLine(): Promise<{ count: number; byMonthEnd: Record<string, number> } | null> {
  const kv = kvConfig()
  if (!kv) return null
  try {
    const r = await fetch(kv.url, {
      method: "POST",
      headers: { Authorization: `Bearer ${kv.token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["HGETALL", "ishizue:waiting"]),
    })
    const d = (await r.json()) as { result?: string[] }
    if (!r.ok) return null
    const list = d.result ?? []
    const times: number[] = []
    for (let i = 1; i < list.length; i += 2) {
      const t = Date.parse(list[i])
      if (Number.isFinite(t)) times.push(t)
    }
    // 日本時間の月末(翌月1日0時)より前に返信した人を、その月末の累計として数える
    const byMonthEnd: Record<string, number> = {}
    for (let n = 0; n <= 6; n++) {
      const now = new Date(Date.now() + 9 * 3600_000)
      const start = Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - n, 1)
      const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - n + 1, 1) - 9 * 3600_000
      const ym = new Date(start).toISOString().slice(0, 7).replace("-", "")
      byMonthEnd[ym] = times.filter((t) => t < next).length
    }
    return { count: times.length, byMonthEnd }
  } catch {
    return null
  }
}

async function saveManual(input: unknown) {
  const kv = kvConfig()
  if (!kv) throw new Error("保存先(Upstash Redis)が未接続です")
  const value = sanitizeManual(input)
  // 月ごとの記録(推移用):これまでの記録を引き継ぎ、今月分を上書きする
  const prev = await getManual()
  const prevSnaps = (prev.ok && prev.data && typeof prev.data === "object" ? (prev.data as { snapshots?: unknown }).snapshots : undefined) ?? {}
  if (prevSnaps && typeof prevSnaps === "object") {
    for (const [k, v] of Object.entries(prevSnaps as Record<string, { checklistDone?: unknown; waiting?: unknown }>)) {
      if (/^\d{6}$/.test(k) && v && typeof v === "object") {
        value.snapshots[k] = { checklistDone: Number(v.checklistDone) || 0, waiting: Number(v.waiting) || 0 }
      }
    }
  }
  const ym = jstDate(0).slice(0, 7).replace("-", "")
  // 9(開業待ち)は LINE の記録から自動で出すので、ここでは 8 のチェックリストだけ記録する
  value.snapshots[ym] = { checklistDone: Object.values(value.checklist).filter(Boolean).length, waiting: 0 }
  const r = await fetch(`${kv.url}/set/${encodeURIComponent(MANUAL_KEY)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${kv.token}` },
    body: JSON.stringify(value),
  })
  if (!r.ok) throw new Error("保存に失敗しました(" + r.status + ")")
  return value
}

/* ---------------------------------- handler --------------------------------- */

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

  /* ---- 手入力項目の保存 ---- */
  if (req.method === "POST") {
    try {
      const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as { manual?: unknown } | undefined
      const saved = await saveManual(body?.manual)
      res.status(200).json({ ok: true, data: saved })
    } catch (e) {
      res.status(400).json({ ok: false, message: e instanceof Error ? e.message : "unknown" })
    }
    return
  }

  const q1 = (k: string) => { const v = req.query[k]; return Array.isArray(v) ? v[0] : v }
  const daysRaw = Number(q1("days"))
  const days = ALLOWED_DAYS.includes(daysRaw) ? daysRaw : 28

  let token: string
  try {
    const headerToken = req.headers["x-vercel-oidc-token"]
    const oidcToken = (typeof headerToken === "string" ? headerToken : "") || process.env.VERCEL_OIDC_TOKEN || ""
    if (!oidcToken) {
      res.status(500).json({ error: "no_oidc", message: "VercelのOIDC連携が有効になっていません" })
      return
    }
    token = await getAccessToken(oidcToken, {
      projectNumber: GCP_PROJECT_NUMBER,
      poolId: GCP_WORKLOAD_IDENTITY_POOL_ID,
      providerId: GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID,
      serviceAccount: GCP_SERVICE_ACCOUNT_EMAIL,
    })
  } catch (e) {
    res.status(502).json({ error: "auth_failed", message: e instanceof Error ? e.message : "unknown" })
    return
  }

  /* ---- 1件だけGoogle登録状況を調べる ---- */
  const inspect = q1("inspect")
  if (inspect) {
    try {
      const u = new URL(inspect)
      if (!u.hostname.endsWith(SITE_HOST)) throw new Error("このサイトのURLではありません")
      const site = await findGscSite(token)
      const data = (await gscFetch(token, "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
        inspectionUrl: u.toString(),
        siteUrl: site,
        languageCode: "ja",
      })) as { inspectionResult?: { indexStatusResult?: Record<string, string> } }
      const r = data.inspectionResult?.indexStatusResult ?? {}
      res.status(200).json({
        ok: true,
        verdict: r.verdict ?? "",
        coverageState: r.coverageState ?? "",
        lastCrawlTime: r.lastCrawlTime ?? "",
        googleCanonical: r.googleCanonical ?? "",
      })
    } catch (e) {
      res.status(200).json({ ok: false, message: e instanceof Error ? e.message : "unknown" })
    }
    return
  }

  const eventFilter = { filter: { fieldName: "eventName", stringFilter: { matchType: "FULL_REGEXP", value: EVENT_REGEX } } }
  const articleFilter = { filter: { fieldName: "pagePath", stringFilter: { matchType: "BEGINS_WITH", value: "/articles/" } } }
  const monthStart = jstMonthStart(5) // 今月を含めて6か月分
  const range = { startDate: `${days}daysAgo`, endDate: "yesterday" }

  try {
    const [monthlyUsers, monthlyEvents, monthlyChannels, articleViews, articleEvents, monthlySources] = await Promise.all([
      ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [{ startDate: monthStart, endDate: "today" }],
        dimensions: [{ name: "yearMonth" }],
        metrics: [{ name: "activeUsers" }, { name: "newUsers" }, { name: "screenPageViews" }],
      }),
      ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [{ startDate: monthStart, endDate: "today" }],
        dimensions: [{ name: "yearMonth" }, { name: "eventName" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: eventFilter,
      }),
      ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [{ startDate: monthStart, endDate: "today" }],
        dimensions: [{ name: "yearMonth" }, { name: "sessionDefaultChannelGroup" }],
        metrics: [{ name: "activeUsers" }],
      }),
      ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [
          { ...range, name: "current" },
          { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo`, name: "previous" },
        ],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "userEngagementDuration" }],
        dimensionFilter: articleFilter,
        limit: 2000,
      }),
      ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [range],
        dimensions: [{ name: "pagePath" }, { name: "eventName" }],
        metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
        dimensionFilter: { andGroup: { expressions: [eventFilter, articleFilter] } },
        limit: 5000,
      }),
      // 流入元の中身(どのサイト・サービスから来たか)
      ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [{ startDate: monthStart, endDate: "today" }],
        dimensions: [{ name: "yearMonth" }, { name: "sessionDefaultChannelGroup" }, { name: "sessionSource" }],
        metrics: [{ name: "activeUsers" }],
        orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
        limit: 300,
      }),
    ])

    /* 月別 */
    type Month = {
      month: string; users: number; newUsers: number; pageViews: number
      lineClicks: number; lineByEvent: Record<string, number>
      checkCompleteUsers: number; lineFromCheckUsers: number; channels: Record<string, number>
      sources: Record<string, Record<string, number>>
    }
    const months = new Map<string, Month>()
    const m = (ym: string) => {
      let v = months.get(ym)
      if (!v) { v = { month: ym, users: 0, newUsers: 0, pageViews: 0, lineClicks: 0, lineByEvent: {}, checkCompleteUsers: 0, lineFromCheckUsers: 0, channels: {}, sources: {} }; months.set(ym, v) }
      return v
    }
    for (const r of monthlyUsers) {
      const v = m(r.dimensionValues[0].value)
      v.users = num(r.metricValues[0].value); v.newUsers = num(r.metricValues[1].value); v.pageViews = num(r.metricValues[2].value)
    }
    for (const r of monthlyEvents) {
      const v = m(r.dimensionValues[0].value)
      const ev = r.dimensionValues[1].value
      const count = num(r.metricValues[0].value)
      const users = num(r.metricValues[1].value)
      if (ev === "check_complete") v.checkCompleteUsers = users
      else {
        v.lineClicks += count
        v.lineByEvent[ev] = (v.lineByEvent[ev] ?? 0) + count
        if (ev === "line_click_from_check") v.lineFromCheckUsers = users
      }
    }
    for (const r of monthlyChannels) {
      const v = m(r.dimensionValues[0].value)
      v.channels[r.dimensionValues[1].value] = num(r.metricValues[0].value)
    }
    for (const r of monthlySources) {
      const v = m(r.dimensionValues[0].value)
      const ch = r.dimensionValues[1].value
      ;(v.sources[ch] ??= {})[r.dimensionValues[2].value] = num(r.metricValues[0].value)
    }

    /* 記事別 */
    type Article = {
      path: string; views: number; users: number; engagementSec: number; prevViews: number
      lineClicks: number; checkCompletes: number; lineFromCheckUsers: number
      gsc?: { clicks: number; impressions: number; position: number; queries: { q: string; clicks: number; impressions: number; position: number }[] }
    }
    const arts = new Map<string, Article>()
    const a = (p: string) => {
      const key = normPath(p)
      let v = arts.get(key)
      if (!v) { v = { path: key, views: 0, users: 0, engagementSec: 0, prevViews: 0, lineClicks: 0, checkCompletes: 0, lineFromCheckUsers: 0 }; arts.set(key, v) }
      return v
    }
    for (const r of articleViews) {
      const v = a(r.dimensionValues[0].value)
      const rangeName = r.dimensionValues[r.dimensionValues.length - 1].value
      if (rangeName === "previous") v.prevViews += num(r.metricValues[0].value)
      else {
        v.views += num(r.metricValues[0].value)
        v.users += num(r.metricValues[1].value)
        v.engagementSec += num(r.metricValues[2].value)
      }
    }
    for (const r of articleEvents) {
      const v = a(r.dimensionValues[0].value)
      // チェック完了は「人数」で数える(10/10以前は項目をタップするたびに送信されていたため、回数だと水増しになる)
      if (r.dimensionValues[1].value === "check_complete") v.checkCompletes += num(r.metricValues[1].value)
      else {
        v.lineClicks += num(r.metricValues[0].value)
        if (r.dimensionValues[1].value === "line_click_from_check") v.lineFromCheckUsers += num(r.metricValues[1].value)
      }
    }

    /* Search Console(未設定なら ok:false で返す) */
    let gsc: { ok: boolean; message?: string; site?: string; startDate?: string; endDate?: string; totals?: { clicks: number; impressions: number } } = { ok: false }
    try {
      const site = await findGscSite(token)
      const endDate = jstDate(3) // Search Console は2〜3日遅れで確定する
      const startDate = jstDate(3 + days - 1)
      const base = { startDate, endDate, dataState: "final" }
      const [pages, pageQueries] = await Promise.all([
        gscQuery(token, site, { ...base, dimensions: ["page"], rowLimit: 1000 }),
        gscQuery(token, site, { ...base, dimensions: ["page", "query"], rowLimit: 5000 }),
      ])
      let clicks = 0, impressions = 0
      for (const r of pages) {
        clicks += r.clicks; impressions += r.impressions
        let path: string
        try { path = normPath(new URL(r.keys[0]).pathname) } catch { continue }
        if (!path.startsWith("/articles/")) continue
        const v = a(path)
        v.gsc = { clicks: r.clicks, impressions: r.impressions, position: Math.round(r.position * 10) / 10, queries: [] }
      }
      for (const r of pageQueries) {
        let path: string
        try { path = normPath(new URL(r.keys[0]).pathname) } catch { continue }
        const v = arts.get(path)
        if (!v?.gsc) continue
        v.gsc.queries.push({ q: r.keys[1], clicks: r.clicks, impressions: r.impressions, position: Math.round(r.position * 10) / 10 })
      }
      for (const v of arts.values()) {
        if (v.gsc) v.gsc.queries = v.gsc.queries.sort((x, y) => y.impressions - x.impressions).slice(0, 8)
      }
      gsc = { ok: true, site, startDate, endDate, totals: { clicks, impressions } }
    } catch (e) {
      gsc = { ok: false, message: e instanceof Error ? e.message : "unknown" }
    }

    /* サイト内検索で入力された言葉(GA4に search_term を登録していないと取れない) */
    let siteSearch: { ok: boolean; message?: string; terms?: { term: string; count: number }[] }
    try {
      const rows = await ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [range],
        dimensions: [{ name: "customEvent:search_term" }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: { filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: "site_search" } } },
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
        limit: 50,
      })
      siteSearch = {
        ok: true,
        terms: rows
          .map((r) => ({ term: r.dimensionValues[0].value, count: num(r.metricValues[0].value) }))
          .filter((t) => t.term && t.term !== "(not set)"),
      }
    } catch (e) {
      siteSearch = { ok: false, message: e instanceof Error ? e.message : "unknown" }
    }

    /* チェックの結果レベル別(GA4に level を登録していないと取れない) */
    let checkLevels: { ok: boolean; message?: string; rows?: { path: string; level: string; completes: number; lines: number }[] }
    try {
      const rows = await ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [range],
        dimensions: [{ name: "pagePath" }, { name: "customEvent:level" }, { name: "eventName" }],
        metrics: [{ name: "totalUsers" }],
        dimensionFilter: { filter: { fieldName: "eventName", inListFilter: { values: ["check_complete", "line_click_from_check"] } } },
        limit: 2000,
      })
      const map = new Map<string, { path: string; level: string; completes: number; lines: number }>()
      for (const r of rows) {
        const path = normPath(r.dimensionValues[0].value)
        const level = r.dimensionValues[1].value
        if (!level || level === "(not set)") continue
        const k = path + "|" + level
        const v = map.get(k) ?? { path, level, completes: 0, lines: 0 }
        if (r.dimensionValues[2].value === "check_complete") v.completes += num(r.metricValues[0].value)
        else v.lines += num(r.metricValues[0].value)
        map.set(k, v)
      }
      checkLevels = { ok: true, rows: [...map.values()] }
    } catch (e) {
      checkLevels = { ok: false, message: e instanceof Error ? e.message : "unknown" }
    }

    const [line, manual, waitingLine] = await Promise.all([getLine(), getManual(), getWaitingFromLine()])

    res.status(200).json({
      days,
      line,
      manual,
      waitingLine,
      fetchedAt: new Date().toISOString(),
      months: [...months.values()].sort((x, y) => x.month.localeCompare(y.month)),
      articles: [...arts.values()],
      gsc,
      siteSearch,
      checkLevels,
    })
  } catch (e) {
    res.status(502).json({ error: "fetch_failed", message: e instanceof Error ? e.message : "unknown" })
  }
}

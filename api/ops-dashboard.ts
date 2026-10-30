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

/** LINEステップ配信(2026年11月版)。配信リンクの utm_campaign と、配信を始めた日 */
const STEP_CAMPAIGN = "welcome_7day_2026_11"
const STEP_START = "2026-10-29"

/** タイトルを変えた記事。since = 変更の翌日(この日から集計する) */
const TITLE_TESTS = [
  { path: "/articles/self-value-unknown", since: "2026-10-30" },
  { path: "/articles/exhausted-by-being-nice", since: "2026-10-30" },
]
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
/** LINEの友だち数の統計。取れなかったときは理由(status またはエラー)を返す */
async function lineFollowers(token: string, yyyymmdd: string): Promise<{ v: LineInsight | null; reason?: string }> {
  const r = await fetch(`https://api.line.me/v2/bot/insight/followers?date=${yyyymmdd}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const d = (await r.json().catch(() => ({}))) as { status?: string; followers?: number; targetedReaches?: number; blocks?: number; message?: string }
  if (!r.ok) return { v: null, reason: `${r.status} ${d.message ?? ""}`.trim() }
  if (d.status !== "ready") return { v: null, reason: d.status ?? "unknown" }
  return { v: { date: yyyymmdd, followers: d.followers ?? 0, targetedReaches: d.targetedReaches ?? 0, blocks: d.blocks ?? 0 } }
}

/** 日本時間で、n か月前の月末(yyyyMMdd)。n=1 で先月末 */
function jstMonthEnd(monthsBack: number): string {
  const now = new Date(Date.now() + 9 * 3600_000)
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - monthsBack + 1, 0))
  return d.toISOString().slice(0, 10).replace(/-/g, "")
}

/** 毎日の記録(ダッシュボードを開いたときに、その日に取れた数字を残す)。LINEから過去の月末が取れないときの代わりに使う */
const LINE_DAILY_KEY = "ishizue:line-daily"

async function kv(cmd: (string | number)[]): Promise<unknown> {
  const c = kvConfig()
  if (!c) return null
  const r = await fetch(c.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${c.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
  })
  if (!r.ok) return null
  return ((await r.json()) as { result?: unknown }).result ?? null
}

async function getLine() {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN
  if (!token) return { ok: false, message: "LINE_CHANNEL_ACCESS_TOKEN が未設定です" }
  try {
    // 最新:昨日(当日分は翌日に集計されるため、なければ一昨日)
    let latest = (await lineFollowers(token, jstDate(1).replace(/-/g, ""))).v
    if (!latest) latest = (await lineFollowers(token, jstDate(2).replace(/-/g, ""))).v

    // これまでの毎日の記録を読み、最新を書き足す
    const daily = new Map<string, LineInsight>()
    try {
      const raw = (await kv(["HGETALL", LINE_DAILY_KEY])) as string[] | null
      for (let i = 0; raw && i < raw.length; i += 2) {
        try { const v = JSON.parse(raw[i + 1]) as LineInsight; if (/^\d{8}$/.test(raw[i])) daily.set(raw[i], v) } catch { /* skip */ }
      }
      if (latest) { daily.set(latest.date, latest); await kv(["HSET", LINE_DAILY_KEY, latest.date, JSON.stringify(latest)]) }
    } catch { /* 記録がなくても続ける */ }

    // 各月末(先月末〜6か月前の月末)。同時に投げると断られることがあるので、1つずつ取る
    const ends: (LineInsight & { month: string; source: "line" | "record" })[] = []
    const issues: { month: string; reason: string }[] = []
    for (const n of [1, 2, 3, 4, 5, 6]) {
      const date = jstMonthEnd(n)
      const month = date.slice(0, 6)
      const got = await lineFollowers(token, date).catch((e) => ({ v: null, reason: e instanceof Error ? e.message : "error" }))
      if (got.v) { ends.push({ month, ...got.v, source: "line" }); continue }
      // 代わりに、その月の最後の5日間の記録のうち一番遅い日を使う(月の途中の記録は月末とみなさない)
      const from = month + String(Number(date.slice(6)) - 4).padStart(2, "0")
      const rec = [...daily.keys()].filter((k) => k >= from && k <= date).sort().pop()
      if (rec) { ends.push({ month, ...(daily.get(rec) as LineInsight), source: "record" }); continue }
      issues.push({ month, reason: got.reason ?? "unknown" })
    }
    return { ok: true, latest, monthEnds: ends, issues, dailyCount: daily.size }
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
    plan: undefined as Plan | undefined,
    updatedAt: new Date().toISOString(),
  }
}

/** 年間計画の前提(ダッシュボードの「年間計画」タブで入力)。null は「実績の値を使う」/「未設定」 */
type Plan = {
  annualTarget: number; unitPrice: number; sessionsPerClient: number; sessionsPerMonth: number
  friendToClient: number; clickToAdd: number | null; userToClick: number | null
  capacity: number | null; launchMonth: string | null; expenseRate: number; updatedAt: string
}

function sanitizePlan(input: unknown): Plan {
  const src = (input && typeof input === "object" ? input : {}) as Record<string, unknown>
  const n = (v: unknown, min: number, max: number, def: number) => {
    const x = Number(v)
    return Number.isFinite(x) && x >= min && x <= max ? x : def
  }
  const opt = (v: unknown, min: number, max: number) => {
    if (v === null || v === undefined || v === "") return null
    const x = Number(v)
    return Number.isFinite(x) && x >= min && x <= max ? x : null
  }
  return {
    annualTarget: Math.round(n(src.annualTarget, 0, 100000000, 4000000)),
    unitPrice: Math.round(n(src.unitPrice, 1000, 100000, 10000)),
    sessionsPerClient: n(src.sessionsPerClient, 1, 100, 6),
    sessionsPerMonth: n(src.sessionsPerMonth, 0.5, 8, 2),
    friendToClient: n(src.friendToClient, 0.001, 1, 0.05),
    clickToAdd: opt(src.clickToAdd, 0.01, 1),
    userToClick: opt(src.userToClick, 0.0001, 1),
    capacity: opt(src.capacity, 1, 500),
    expenseRate: n(src.expenseRate, 0, 0.9, 0.2),
    launchMonth: typeof src.launchMonth === "string" && /^\d{4}-\d{2}$/.test(src.launchMonth) ? src.launchMonth : null,
    updatedAt: new Date().toISOString(),
  }
}

/** 年間計画の前提だけを保存する(ほかの手入力項目はそのまま残す) */
async function savePlan(input: unknown) {
  const kv = kvConfig()
  if (!kv) throw new Error("保存先(Upstash Redis)が未接続です")
  const prev = await getManual()
  const base = (prev.ok && prev.data && typeof prev.data === "object" ? prev.data : {}) as Record<string, unknown>
  const value = { ...base, plan: sanitizePlan(input) }
  const r = await fetch(`${kv.url}/set/${encodeURIComponent(MANUAL_KEY)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${kv.token}` },
    body: JSON.stringify(value),
  })
  if (!r.ok) throw new Error("保存に失敗しました(" + r.status + ")")
  return value
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
  // 年間計画の前提は別の画面で保存するので、これまでの値を引き継ぐ
  const prevPlan = prev.ok && prev.data && typeof prev.data === "object" ? (prev.data as { plan?: unknown }).plan : undefined
  if (prevPlan && typeof prevPlan === "object") value.plan = prevPlan as Plan
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
      const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as { manual?: unknown; plan?: unknown } | undefined
      const saved = body?.plan !== undefined ? await savePlan(body.plan) : await saveManual(body?.manual)
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
  /* ---- 「ユーザー」タブ用のデータ(どんな人が来て、どう動いているか) ---- */
  if (q1("view") === "users") {
    try {
      const range = { startDate: `${days}daysAgo`, endDate: "yesterday" }
      const run = (body: Record<string, unknown>) => ga4(token, GA4_PROPERTY_ID, { dateRanges: [range], ...body })
      const lineFilter = { filter: { fieldName: "eventName", stringFilter: { matchType: "FULL_REGEXP", value: "line_cta_click|line_click_from_check|[a-z_]*_line_click" } } }
      const [summary, newRet, device, region, dayHour, landing, transitions, articleUsers, checkUsers, lineUsers, lineByDevice] = await Promise.all([
        run({ metrics: [{ name: "activeUsers" }, { name: "newUsers" }, { name: "sessions" }, { name: "screenPageViews" }, { name: "userEngagementDuration" }, { name: "engagementRate" }] }),
        run({ dimensions: [{ name: "newVsReturning" }], metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }, { name: "userEngagementDuration" }] }),
        run({ dimensions: [{ name: "deviceCategory" }], metrics: [{ name: "activeUsers" }, { name: "engagementRate" }] }),
        run({ dimensions: [{ name: "region" }], metrics: [{ name: "activeUsers" }], orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }], limit: 12 }),
        run({ dimensions: [{ name: "dayOfWeek" }, { name: "hour" }], metrics: [{ name: "sessions" }], limit: 200 }),
        run({ dimensions: [{ name: "landingPage" }], metrics: [{ name: "sessions" }, { name: "engagementRate" }, { name: "screenPageViewsPerSession" }], orderBys: [{ metric: { metricName: "sessions" }, desc: true }], limit: 20 }),
        run({
          dimensions: [{ name: "pageReferrer" }, { name: "pagePath" }], metrics: [{ name: "screenPageViews" }],
          dimensionFilter: { filter: { fieldName: "pageReferrer", stringFilter: { matchType: "CONTAINS", value: SITE_HOST } } },
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }], limit: 1000,
        }),
        run({ metrics: [{ name: "activeUsers" }], dimensionFilter: { filter: { fieldName: "pagePath", stringFilter: { matchType: "BEGINS_WITH", value: "/articles/" } } } }),
        run({ metrics: [{ name: "totalUsers" }], dimensionFilter: { filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: "check_complete" } } } }),
        run({ metrics: [{ name: "totalUsers" }], dimensionFilter: lineFilter }),
        run({ dimensions: [{ name: "deviceCategory" }], metrics: [{ name: "totalUsers" }, { name: "eventCount" }], dimensionFilter: lineFilter }),
      ])
      const m0 = (rows: Ga4Row[], i = 0) => num(rows[0]?.metricValues[i]?.value)
      // サイト内の移動(前のページ → 次のページ)。同じページの再読み込みは除く
      const pairs = new Map<string, number>()
      for (const r of transitions) {
        let from: string
        try { from = normPath(new URL(r.dimensionValues[0].value).pathname) } catch { continue }
        const to = normPath(r.dimensionValues[1].value)
        if (from === to || to.startsWith("/admin")) continue
        const k = from + " " + to
        pairs.set(k, (pairs.get(k) ?? 0) + num(r.metricValues[0].value))
      }
      res.status(200).json({
        days,
        fetchedAt: new Date().toISOString(),
        summary: {
          users: m0(summary, 0), newUsers: m0(summary, 1), sessions: m0(summary, 2), pageViews: m0(summary, 3),
          engagementSec: m0(summary, 4), engagementRate: m0(summary, 5),
        },
        newVsReturning: newRet.map((r) => ({ type: r.dimensionValues[0].value, users: num(r.metricValues[0].value), sessions: num(r.metricValues[1].value), pageViews: num(r.metricValues[2].value), engagementSec: num(r.metricValues[3].value) })),
        devices: device.map((r) => {
          const dev = r.dimensionValues[0].value
          const l = lineByDevice.find((x) => x.dimensionValues[0].value === dev)
          return { device: dev, users: num(r.metricValues[0].value), engagementRate: num(r.metricValues[1].value), lineUsers: l ? num(l.metricValues[0].value) : 0, lineClicks: l ? num(l.metricValues[1].value) : 0 }
        }),
        regions: region.map((r) => ({ region: r.dimensionValues[0].value, users: num(r.metricValues[0].value) })),
        dayHour: dayHour.map((r) => ({ day: Number(r.dimensionValues[0].value), hour: Number(r.dimensionValues[1].value), sessions: num(r.metricValues[0].value) })),
        landing: landing.map((r) => ({ path: normPath(r.dimensionValues[0].value), sessions: num(r.metricValues[0].value), engagementRate: num(r.metricValues[1].value), pagesPerSession: num(r.metricValues[2].value) })),
        transitions: [...pairs.entries()].sort((a, b) => b[1] - a[1]).slice(0, 25).map(([k, v]) => { const [from, to] = k.split(" "); return { from, to, views: v } }),
        funnel: { users: m0(summary, 0), articleUsers: m0(articleUsers), checkUsers: m0(checkUsers), lineUsers: m0(lineUsers) },
      })
    } catch (e) {
      res.status(502).json({ error: "fetch_failed", message: e instanceof Error ? e.message : "unknown" })
    }
    return
  }

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
    let gsc: { ok: boolean; message?: string; site?: string; startDate?: string; endDate?: string; totals?: { clicks: number; impressions: number }; queries?: { q: string; clicks: number; impressions: number; position: number; prevPosition: number | null; page: string | null }[] } = { ok: false }
    try {
      const site = await findGscSite(token)
      const endDate = jstDate(3) // Search Console は2〜3日遅れで確定する
      const startDate = jstDate(3 + days - 1)
      const base = { startDate, endDate, dataState: "final" }
      const prevBase = { startDate: jstDate(3 + days * 2 - 1), endDate: jstDate(3 + days), dataState: "final" }
      const [pages, pageQueries, queries, prevQueries] = await Promise.all([
        gscQuery(token, site, { ...base, dimensions: ["page"], rowLimit: 1000 }),
        gscQuery(token, site, { ...base, dimensions: ["page", "query"], rowLimit: 5000 }),
        gscQuery(token, site, { ...base, dimensions: ["query"], rowLimit: 1000 }),
        gscQuery(token, site, { ...prevBase, dimensions: ["query"], rowLimit: 1000 }),
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
      // 語句ごとの一覧(表示回数の多い順)。順位は語句全体の平均、記事はその語句で一番表示された記事
      const prevPos = new Map(prevQueries.map((r) => [r.keys[0], r.position]))
      const topPage = new Map<string, { path: string; imp: number }>()
      for (const r of pageQueries) {
        let path: string
        try { path = normPath(new URL(r.keys[0]).pathname) } catch { continue }
        const cur = topPage.get(r.keys[1])
        if (!cur || r.impressions > cur.imp) topPage.set(r.keys[1], { path, imp: r.impressions })
      }
      const queryList = queries
        .map((r) => ({
          q: r.keys[0],
          clicks: r.clicks,
          impressions: r.impressions,
          position: Math.round(r.position * 10) / 10,
          prevPosition: prevPos.has(r.keys[0]) ? Math.round((prevPos.get(r.keys[0]) as number) * 10) / 10 : null,
          page: topPage.get(r.keys[0])?.path ?? null,
        }))
        .sort((x, y) => y.impressions - x.impressions)
      gsc = { ok: true, site, startDate, endDate, totals: { clicks, impressions }, queries: queryList }
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

    /* LINEステップ配信(2026年11月版)から来た訪問。配信リンクの utm_content=day1〜7 で分ける */
    let lineStep: { ok: boolean; message?: string; since?: string; rows?: { day: string; sessions: number; users: number; engagedSessions: number }[] }
    try {
      const rows = await ga4(token, GA4_PROPERTY_ID, {
        dateRanges: [{ startDate: STEP_START, endDate: "today" }],
        dimensions: [{ name: "sessionManualAdContent" }],
        metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "engagedSessions" }],
        dimensionFilter: { filter: { fieldName: "sessionCampaignName", stringFilter: { matchType: "EXACT", value: STEP_CAMPAIGN } } },
        limit: 50,
      })
      lineStep = {
        ok: true,
        since: STEP_START,
        rows: rows.map((r) => ({ day: r.dimensionValues[0].value, sessions: num(r.metricValues[0].value), users: num(r.metricValues[1].value), engagedSessions: num(r.metricValues[2].value) })),
      }
    } catch (e) {
      lineStep = { ok: false, message: e instanceof Error ? e.message : "unknown" }
    }

    /* タイトルを変えた記事の、変更後の検索の数字(変更の翌日から、確定している日まで) */
    let titleTests: { ok: boolean; message?: string; rows?: { path: string; since: string; until: string; days: number; clicks: number; impressions: number; position: number }[] }
    try {
      const site = await findGscSite(token)
      const until = jstDate(3)
      const rows = await Promise.all(TITLE_TESTS.map(async (t) => {
        const days = Math.round((Date.parse(until) - Date.parse(t.since)) / 86400000) + 1
        if (days < 1) return { path: t.path, since: t.since, until, days: 0, clicks: 0, impressions: 0, position: 0 }
        const r = await gscQuery(token, site, {
          startDate: t.since, endDate: until, dataState: "final", dimensions: ["page"],
          dimensionFilterGroups: [{ filters: [{ dimension: "page", operator: "contains", expression: t.path }] }],
          rowLimit: 10,
        })
        const own = r.filter((x) => { try { return normPath(new URL(x.keys[0]).pathname) === t.path } catch { return false } })
        const clicks = own.reduce((n, x) => n + x.clicks, 0)
        const impressions = own.reduce((n, x) => n + x.impressions, 0)
        const position = impressions ? own.reduce((n, x) => n + x.position * x.impressions, 0) / impressions : 0
        return { path: t.path, since: t.since, until, days, clicks, impressions, position: Math.round(position * 10) / 10 }
      }))
      titleTests = { ok: true, rows }
    } catch (e) {
      titleTests = { ok: false, message: e instanceof Error ? e.message : "unknown" }
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
      lineStep,
      titleTests,
    })
  } catch (e) {
    res.status(502).json({ error: "fetch_failed", message: e instanceof Error ? e.message : "unknown" })
  }
}

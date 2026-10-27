// src/pages/admin/ArticleViews.tsx
// 運営者用 — 記事ごとの閲覧数(GA4 から取得)
// ルーティング: <Route path="/admin/views" element={<ArticleViews />} />
// データ取得: /api/article-views(閲覧キーがないと数字は返らない)

import { useEffect, useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { articles } from "../../data/articles"

const KEY_STORAGE = "ishizue_views_key"
const SAGE = "#7C9A8A"
const INK = "#2C1F14"

type ApiRow = { path: string; views: number; users: number; engagementSec: number; prevViews: number }
type ApiResult = { days: number; fetchedAt: string; rows: ApiRow[] }
type Row = ApiRow & { title: string; date: string; thinker: boolean }
type SortKey = "views" | "change" | "date"
type Scope = "all" | "normal" | "thinker"

function readKey(): string {
  try { return localStorage.getItem(KEY_STORAGE) ?? "" } catch { return "" }
}
function saveKey(k: string) {
  try { k ? localStorage.setItem(KEY_STORAGE, k) : localStorage.removeItem(KEY_STORAGE) } catch { /* noop */ }
}

function fmtTime(sec: number): string {
  if (!isFinite(sec) || sec <= 0) return "—"
  const m = Math.floor(sec / 60)
  const s = Math.round(sec % 60)
  return `${m}:${String(s).padStart(2, "0")}`
}

function changeLabel(cur: number, prev: number): { text: string; color: string } {
  if (prev === 0 && cur === 0) return { text: "—", color: "#a8a29e" }
  if (prev === 0) return { text: "新規", color: "#0369a1" }
  const pct = Math.round(((cur - prev) / prev) * 100)
  if (pct === 0) return { text: "±0%", color: "#a8a29e" }
  return pct > 0 ? { text: `+${pct}%`, color: "#047857" } : { text: `${pct}%`, color: "#b91c1c" }
}

function KeyGate({ onSubmit, error }: { onSubmit: (k: string) => void; error: string }) {
  const [v, setV] = useState("")
  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ background: "#F7F3EA" }}>
      <div className="w-full max-w-xs space-y-3">
        <p className="text-sm text-stone-600">運営者用ページです。閲覧キーを入力してください。</p>
        <input
          type="password" value={v} autoFocus
          onChange={(e) => setV(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && v) onSubmit(v) }}
          className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none"
          placeholder="閲覧キー"
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
        <button onClick={() => v && onSubmit(v)} className="w-full py-2.5 rounded-xl text-sm text-white" style={{ background: SAGE }}>開く</button>
      </div>
    </div>
  )
}

export default function ArticleViews() {
  const [key, setKey] = useState(readKey)
  const [days, setDays] = useState(28)
  const [data, setData] = useState<ApiResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [scope, setScope] = useState<Scope>("all")
  const [sort, setSort] = useState<SortKey>("views")
  const [q, setQ] = useState("")

  useEffect(() => {
    if (!key) return
    let alive = true
    setLoading(true)
    setError("")
    fetch(`/api/article-views?days=${days}`, { headers: { "x-admin-key": key } })
      .then(async (r) => {
        const body = await r.json().catch(() => ({}))
        if (r.status === 401) { saveKey(""); if (alive) { setKey(""); setError("閲覧キーが違います") } return }
        if (!r.ok) throw new Error(body.message ?? `エラー(${r.status})`)
        saveKey(key)
        if (alive) setData(body as ApiResult)
      })
      .catch((e) => { if (alive) setError(e instanceof Error ? e.message : "取得に失敗しました") })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [key, days])

  // サイトの全記事と GA4 の数字を突き合わせる(閲覧0の記事も出す)
  const rows: Row[] = useMemo(() => {
    const byPath = new Map<string, ApiRow>((data?.rows ?? []).map((r) => [r.path, r]))
    return articles
      .filter((a) => a.path.startsWith("/articles/"))
      .map((a) => {
        const r = byPath.get(a.path)
        return {
          path: a.path,
          title: a.title,
          date: (a as { updatedAt?: string }).updatedAt ?? "",
          thinker: a.path.startsWith("/articles/thinker-"),
          views: r?.views ?? 0,
          users: r?.users ?? 0,
          engagementSec: r?.engagementSec ?? 0,
          prevViews: r?.prevViews ?? 0,
        }
      })
  }, [data])

  const shown = useMemo(() => {
    const kw = q.trim()
    const list = rows.filter((r) =>
      (scope === "all" || (scope === "thinker" ? r.thinker : !r.thinker)) &&
      (!kw || r.title.includes(kw) || r.path.includes(kw))
    )
    const diff = (r: Row) => r.views - r.prevViews
    return list.sort((a, b) =>
      sort === "views" ? b.views - a.views :
      sort === "change" ? diff(b) - diff(a) :
      b.date.localeCompare(a.date)
    )
  }, [rows, scope, sort, q])

  if (!key) return <KeyGate onSubmit={(k) => setKey(k)} error={error} />

  const total = shown.reduce((n, r) => n + r.views, 0)
  const prevTotal = shown.reduce((n, r) => n + r.prevViews, 0)
  const zero = shown.filter((r) => r.views === 0).length
  const totalChange = changeLabel(total, prevTotal)

  const chip = (active: boolean) =>
    active ? { background: SAGE, color: "white", borderColor: SAGE } : { borderColor: "#d6d3d1", color: "#57534e" }

  return (
    <div className="min-h-screen" style={{ background: "#F7F3EA" }}>
      <Helmet>
        <title>記事の閲覧数(運営者用)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] tracking-[0.2em] text-stone-500">記事の閲覧数 ｜ 運営者用</p>
          <button onClick={() => { saveKey(""); setKey(""); setData(null) }} className="text-[11px] text-stone-400 underline">キーを消す</button>
        </div>

        {/* 期間 */}
        <div className="flex gap-2 mb-3 text-xs">
          {[7, 28, 90].map((d) => (
            <button key={d} onClick={() => setDays(d)} className="px-3 py-1.5 rounded-full border" style={chip(days === d)}>
              直近{d}日
            </button>
          ))}
        </div>

        {/* 合計 */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-white rounded-xl border border-stone-200 p-3">
            <p className="text-[10px] text-stone-500">閲覧数(合計)</p>
            <p className="text-lg font-medium" style={{ color: INK }}>{loading ? "…" : total.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl border border-stone-200 p-3">
            <p className="text-[10px] text-stone-500">前の{days}日との比較</p>
            <p className="text-lg font-medium" style={{ color: totalChange.color }}>{loading ? "…" : totalChange.text}</p>
          </div>
          <div className="bg-white rounded-xl border border-stone-200 p-3">
            <p className="text-[10px] text-stone-500">閲覧0の記事</p>
            <p className="text-lg font-medium" style={{ color: INK }}>{loading ? "…" : `${zero}本`}</p>
          </div>
        </div>

        {/* 絞り込み・並べ替え */}
        <input
          type="search" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="タイトルで絞り込む(例:燃え尽き)"
          className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-sm mb-2 focus:outline-none"
        />
        <div className="flex flex-wrap gap-1.5 mb-2 text-xs">
          {([["all", "すべて"], ["normal", "通常の記事"], ["thinker", "偉人・学者"]] as [Scope, string][]).map(([v, l]) => (
            <button key={v} onClick={() => setScope(v)} className="px-3 py-1 rounded-full border" style={chip(scope === v)}>{l}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4 text-xs items-center">
          <span className="text-stone-400">並べ替え:</span>
          {([["views", "閲覧数"], ["change", "増えた順"], ["date", "新しい記事"]] as [SortKey, string][]).map(([v, l]) => (
            <button key={v} onClick={() => setSort(v)} className="px-3 py-1 rounded-full border" style={chip(sort === v)}>{l}</button>
          ))}
          <span className="ml-auto text-stone-400">{shown.length}本</span>
        </div>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

        {/* 一覧 */}
        <div className="space-y-2">
          {shown.map((r, i) => {
            const ch = changeLabel(r.views, r.prevViews)
            return (
              <div key={r.path} className="bg-white rounded-xl border border-stone-200 px-3 py-2.5">
                <div className="flex items-start gap-3">
                  <span className="text-[11px] text-stone-400 w-6 flex-shrink-0 pt-0.5 text-right">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <a href={r.path} target="_blank" rel="noopener noreferrer" className="block text-[13px] leading-snug hover:underline" style={{ color: INK }}>
                      {r.title}
                    </a>
                    <p className="text-[10px] text-stone-400 mt-1">
                      公開/更新 {r.date || "—"} ／ 閲覧者 {r.users.toLocaleString()} ／ 平均閲覧時間 {fmtTime(r.users ? r.engagementSec / r.users : 0)}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-medium" style={{ color: INK }}>{loading ? "…" : r.views.toLocaleString()}</p>
                    <p className="text-[10px]" style={{ color: ch.color }}>{loading ? "" : ch.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {data && (
          <p className="text-[10px] text-stone-400 mt-4">
            GA4から取得:{new Date(data.fetchedAt).toLocaleString("ja-JP")} ／ 期間は昨日までの{data.days}日間。比較は、その直前の同じ日数との比較です。
          </p>
        )}
      </div>
    </div>
  )
}

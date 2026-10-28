// src/pages/admin/OpsDashboard.tsx
// 運営者用 — 運営ダッシュボード(開業判断の目安・月別推移・記事ごとの数字・サイト内検索語)
// ルーティング: <Route path="/admin/dashboard" element={<OpsDashboard />} />
// データ取得: /api/ops-dashboard(閲覧キーは /admin/views と共通)

import { useEffect, useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { articles } from "../../data/articles"

const KEY_STORAGE = "ishizue_views_key"
const SAGE = "#7C9A8A"
const INK = "#2C1F14"
const BG = "#F7F3EA"

/* 開業判断の目標値(11/1の振り返りで見直す) */
const TARGET_USERS = 1500
const TARGET_LINE = 35
const TARGET_CHECK_RATE = 0.05

type Month = {
  month: string; users: number; newUsers: number; pageViews: number
  lineClicks: number; lineByEvent: Record<string, number>
  checkCompleteUsers: number; lineFromCheckUsers: number; channels: Record<string, number>
}
type Query = { q: string; clicks: number; impressions: number; position: number }
type ApiArticle = {
  path: string; views: number; users: number; engagementSec: number; prevViews: number
  lineClicks: number; checkCompletes: number
  gsc?: { clicks: number; impressions: number; position: number; queries: Query[] }
}
type ApiResult = {
  days: number; fetchedAt: string; months: Month[]; articles: ApiArticle[]
  gsc: { ok: boolean; message?: string; site?: string; startDate?: string; endDate?: string; totals?: { clicks: number; impressions: number } }
  siteSearch: { ok: boolean; message?: string; terms?: { term: string; count: number }[] }
}
type Row = ApiArticle & { title: string; date: string; thinker: boolean }
type Tab = "launch" | "articles" | "search"
type SortKey = "views" | "change" | "line" | "impressions" | "position"

const LINE_EVENT_LABEL: Record<string, string> = {
  line_cta_click: "記事内のLINEボタン",
  line_click_from_check: "チェック結果",
  contact_line_click: "お問い合わせ欄",
  status_bar_line_click: "受付状況バー",
  status_section_line_click: "受付状況の案内",
  sent_modal_line_click: "送信完了画面",
  guide_line_click: "ご利用の流れ",
  closing_line_click: "トップ最下部",
  approach_line_click: "トップ(アプローチ)",
  ai_assistant_line_click: "AIアシスタント",
}

function readKey(): string {
  try { return localStorage.getItem(KEY_STORAGE) ?? "" } catch { return "" }
}
function saveKey(k: string) {
  try { k ? localStorage.setItem(KEY_STORAGE, k) : localStorage.removeItem(KEY_STORAGE) } catch { /* noop */ }
}
const fmt = (n: number) => n.toLocaleString("ja-JP")
const pct = (n: number) => `${(n * 100).toFixed(1)}%`
const monthLabel = (ym: string) => `${Number(ym.slice(4))}月`

function fmtTime(sec: number): string {
  if (!isFinite(sec) || sec <= 0) return "—"
  const total = Math.round(sec)
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`
}
function changeLabel(cur: number, prev: number): { text: string; color: string } {
  if (prev === 0 && cur === 0) return { text: "—", color: "#a8a29e" }
  if (prev === 0) return { text: "新規", color: "#0369a1" }
  const p = Math.round(((cur - prev) / prev) * 100)
  if (p === 0) return { text: "±0%", color: "#a8a29e" }
  return p > 0 ? { text: `+${p}%`, color: "#047857" } : { text: `${p}%`, color: "#b91c1c" }
}

function KeyGate({ onSubmit, error }: { onSubmit: (k: string) => void; error: string }) {
  const [v, setV] = useState("")
  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ background: BG }}>
      <div className="w-full max-w-xs space-y-3">
        <p className="text-sm text-stone-600">運営者用ページです。閲覧キーを入力してください。</p>
        <input
          type="password" value={v} autoFocus autoComplete="off"
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

/** 目標に対する達成状況のカード */
function GoalCard({ no, title, value, sub, goal, met, note }: {
  no: number; title: string; value: string; sub?: string; goal: string; met: boolean | null; note?: string
}) {
  const badge = met === null
    ? { text: "未接続", bg: "#f5f5f4", color: "#78716c" }
    : met ? { text: "達成", bg: "#dcfce7", color: "#166534" } : { text: "未達", bg: "#fef3c7", color: "#92400e" }
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-3">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[11px] text-stone-500 leading-snug">{no}. {title}</p>
        <span className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: badge.bg, color: badge.color }}>{badge.text}</span>
      </div>
      <p className="text-lg font-medium mt-1" style={{ color: INK }}>{value}</p>
      {sub && <p className="text-[11px] text-stone-500">{sub}</p>}
      <p className="text-[10px] text-stone-400 mt-1">目標:{goal}</p>
      {note && <p className="text-[10px] text-stone-400 mt-0.5">{note}</p>}
    </div>
  )
}

export default function OpsDashboard() {
  const [key, setKey] = useState(readKey)
  const [days, setDays] = useState(28)
  const [data, setData] = useState<ApiResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [tab, setTab] = useState<Tab>("launch")
  const [sort, setSort] = useState<SortKey>("views")
  const [q, setQ] = useState("")
  const [scope, setScope] = useState<"all" | "normal" | "thinker">("all")
  const [zeroOnly, setZeroOnly] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [inspect, setInspect] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!key) return
    let alive = true
    setLoading(true)
    setError("")
    fetch(`/api/ops-dashboard?days=${days}`, { headers: { "x-admin-key": key } })
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

  /* 記事一覧:サイトの全記事に数字を突き合わせる(閲覧0も出す) */
  const rows: Row[] = useMemo(() => {
    const byPath = new Map<string, ApiArticle>((data?.articles ?? []).map((r) => [r.path, r] as [string, ApiArticle]))
    return articles
      .filter((a) => a.path.startsWith("/articles/"))
      .map((a) => {
        const r = byPath.get(a.path)
        return {
          path: a.path, title: a.title,
          date: (a as { updatedAt?: string }).updatedAt ?? "",
          thinker: a.path.startsWith("/articles/thinker-"),
          views: r?.views ?? 0, users: r?.users ?? 0, engagementSec: r?.engagementSec ?? 0, prevViews: r?.prevViews ?? 0,
          lineClicks: r?.lineClicks ?? 0, checkCompletes: r?.checkCompletes ?? 0, gsc: r?.gsc,
        }
      })
  }, [data])

  const base = useMemo(() => {
    const kw = q.trim()
    return rows.filter((r) =>
      (scope === "all" || (scope === "thinker" ? r.thinker : !r.thinker)) &&
      (!kw || r.title.includes(kw) || r.path.includes(kw) || (r.gsc?.queries ?? []).some((x) => x.q.includes(kw)))
    )
  }, [rows, scope, q])

  const shown = useMemo(() => {
    const list = zeroOnly ? base.filter((r) => r.views === 0) : [...base]
    const pos = (r: Row) => r.gsc?.position ?? 999
    return list.sort((a, b) =>
      sort === "views" ? b.views - a.views :
      sort === "change" ? (b.views - b.prevViews) - (a.views - a.prevViews) :
      sort === "line" ? b.lineClicks - a.lineClicks || b.views - a.views :
      sort === "impressions" ? (b.gsc?.impressions ?? 0) - (a.gsc?.impressions ?? 0) :
      pos(a) - pos(b)
    )
  }, [base, zeroOnly, sort])

  if (!key) return <KeyGate onSubmit={(k) => setKey(k)} error={error} />

  const chip = (active: boolean) =>
    active ? { background: SAGE, color: "white", borderColor: SAGE } : { borderColor: "#d6d3d1", color: "#57534e" }

  /* ---- 月別 ---- */
  const months = data?.months ?? []
  const cur = months[months.length - 1]
  const done = months.slice(0, -1) // 締まった月
  const last = done[done.length - 1]
  const last2 = done.slice(-2)
  const checkRate = (mo?: Month) => (mo && mo.checkCompleteUsers ? mo.lineFromCheckUsers / mo.checkCompleteUsers : 0)
  const dayOfMonth = Number(new Date(Date.now() + 9 * 3600_000).toISOString().slice(8, 10))

  const runInspect = async (path: string) => {
    setInspect((s) => ({ ...s, [path]: "確認中…" }))
    try {
      const r = await fetch(`/api/ops-dashboard?inspect=${encodeURIComponent("https://www.ishizue-counseling.jp" + path)}`, { headers: { "x-admin-key": key } })
      const b = await r.json()
      const text = b.ok
        ? `${b.verdict === "PASS" ? "登録済み" : "未登録"}(${b.coverageState || "—"})${b.lastCrawlTime ? ` ／ 最終クロール ${new Date(b.lastCrawlTime).toLocaleDateString("ja-JP")}` : ""}`
        : `確認できません:${b.message ?? "エラー"}`
      setInspect((s) => ({ ...s, [path]: text }))
    } catch {
      setInspect((s) => ({ ...s, [path]: "確認できませんでした" }))
    }
  }

  const downloadCsv = () => {
    const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`
    const header = ["path", "title", "views", "prev_views", "users", "avg_engagement_sec", "line_clicks", "check_completes", "gsc_impressions", "gsc_clicks", "gsc_position", "top_query", "date"]
    const lines = shown.map((r) => [
      r.path, r.title, r.views, r.prevViews, r.users, r.users ? Math.round(r.engagementSec / r.users) : 0,
      r.lineClicks, r.checkCompletes, r.gsc?.impressions ?? "", r.gsc?.clicks ?? "", r.gsc?.position ?? "", r.gsc?.queries[0]?.q ?? "", r.date,
    ].map(esc).join(","))
    const blob = new Blob(["﻿" + [header.join(","), ...lines].join("\n")], { type: "text/csv;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ops-articles-${days}d${zeroOnly ? "-zero" : ""}-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const totalViews = base.reduce((n, r) => n + r.views, 0)
  const totalLine = base.reduce((n, r) => n + r.lineClicks, 0)
  const zeroCount = base.filter((r) => r.views === 0).length

  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <Helmet>
        <title>運営ダッシュボード(運営者用)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] tracking-[0.2em] text-stone-500">運営ダッシュボード ｜ 運営者用</p>
          <button onClick={() => { saveKey(""); setKey(""); setData(null) }} className="text-[11px] text-stone-400 underline">キーを消す</button>
        </div>

        {/* タブ */}
        <div className="flex gap-1.5 mb-4 text-xs">
          {([["launch", "開業判断"], ["articles", "記事ごと"], ["search", "検索された言葉"]] as [Tab, string][]).map(([v, l]) => (
            <button key={v} onClick={() => setTab(v)} className="px-3.5 py-1.5 rounded-full border" style={chip(tab === v)}>{l}</button>
          ))}
        </div>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        {loading && !data && <p className="text-sm text-stone-500">読み込み中…</p>}

        {/* ===================== 開業判断 ===================== */}
        {tab === "launch" && data && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <GoalCard
                no={1} title="サイト月間ユーザー"
                value={last2.length ? last2.map((mo) => `${monthLabel(mo.month)} ${fmt(mo.users)}`).join(" ／ ") : "—"}
                sub={cur ? `今月(${dayOfMonth}日まで)${fmt(cur.users)}人` : undefined}
                goal={`${fmt(TARGET_USERS)}人以上を2か月連続`}
                met={last2.length === 2 ? last2.every((mo) => mo.users >= TARGET_USERS) : false}
              />
              <GoalCard
                no={2} title="LINEボタンのクリック(サイト全体)"
                value={last ? `${monthLabel(last.month)} ${fmt(last.lineClicks)}件` : "—"}
                sub={cur ? `今月(${dayOfMonth}日まで)${fmt(cur.lineClicks)}件` : undefined}
                goal={`月${TARGET_LINE}件以上`}
                met={last ? last.lineClicks >= TARGET_LINE : false}
              />
              <GoalCard
                no={3} title="チェック結果→LINE"
                value={last ? `${monthLabel(last.month)} ${pct(checkRate(last))}` : "—"}
                sub={last ? `完了${fmt(last.checkCompleteUsers)}人中 ${fmt(last.lineFromCheckUsers)}人` : undefined}
                goal={`${TARGET_CHECK_RATE * 100}%以上`}
                met={last ? checkRate(last) >= TARGET_CHECK_RATE : false}
                note={cur ? `今月 ${pct(checkRate(cur))}(${fmt(cur.lineFromCheckUsers)}/${fmt(cur.checkCompleteUsers)}人)` : undefined}
              />
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-3">
              <p className="text-[11px] text-stone-500 mb-2">まだ自動で取れていない項目</p>
              <ul className="text-[12px] text-stone-600 space-y-1 leading-relaxed">
                <li>4・5. LINEターゲットリーチ(累計80人・月+12人)——LINEとの接続が次の段階</li>
                <li>6・7. Instagram投稿(週3回×8週)・Instagram経由のLINE登録(月5人)——月1回の手入力欄を追加予定</li>
                <li>8. 受け皿チェックリスト ／ 9. 開業待ちの人(3人)——手入力欄を追加予定</li>
              </ul>
            </div>

            {/* 月別推移 */}
            <div>
              <p className="text-xs font-medium text-stone-600 mb-2">月ごとの推移</p>
              <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
                <table className="w-full text-[12px] text-stone-700 min-w-[520px]">
                  <thead>
                    <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                      <th className="text-left font-normal px-3 py-2">月</th>
                      <th className="text-right font-normal px-2">ユーザー</th>
                      <th className="text-right font-normal px-2">うち新規</th>
                      <th className="text-right font-normal px-2">閲覧</th>
                      <th className="text-right font-normal px-2">LINEクリック</th>
                      <th className="text-right font-normal px-2">チェック完了</th>
                      <th className="text-right font-normal px-3">結果→LINE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {months.map((mo, i) => (
                      <tr key={mo.month} className="border-b border-stone-50 last:border-0">
                        <td className="px-3 py-2">{monthLabel(mo.month)}{i === months.length - 1 && <span className="text-[10px] text-stone-400">(途中)</span>}</td>
                        <td className="text-right px-2">{fmt(mo.users)}</td>
                        <td className="text-right px-2">{fmt(mo.newUsers)}</td>
                        <td className="text-right px-2">{fmt(mo.pageViews)}</td>
                        <td className="text-right px-2">{fmt(mo.lineClicks)}</td>
                        <td className="text-right px-2">{fmt(mo.checkCompleteUsers)}</td>
                        <td className="text-right px-3">{pct(checkRate(mo))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 流入元 */}
            <div>
              <p className="text-xs font-medium text-stone-600 mb-2">流入元(ユーザー数)</p>
              <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
                <table className="w-full text-[12px] text-stone-700 min-w-[420px]">
                  <thead>
                    <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                      <th className="text-left font-normal px-3 py-2">流入元</th>
                      {months.map((mo) => <th key={mo.month} className="text-right font-normal px-3">{monthLabel(mo.month)}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(new Set<string>(months.flatMap((mo) => Object.keys(mo.channels))))
                      .sort((a, b) => (cur?.channels[b] ?? 0) - (cur?.channels[a] ?? 0))
                      .map((ch) => (
                        <tr key={ch} className="border-b border-stone-50 last:border-0">
                          <td className="px-3 py-2">{ch}</td>
                          {months.map((mo) => <td key={mo.month} className="text-right px-3">{fmt(mo.channels[ch] ?? 0)}</td>)}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* LINEクリックの内訳 */}
            <div>
              <p className="text-xs font-medium text-stone-600 mb-2">LINEクリックの内訳(どのボタンから)</p>
              <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
                <table className="w-full text-[12px] text-stone-700 min-w-[420px]">
                  <thead>
                    <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                      <th className="text-left font-normal px-3 py-2">ボタン</th>
                      {months.map((mo) => <th key={mo.month} className="text-right font-normal px-3">{monthLabel(mo.month)}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(new Set<string>(months.flatMap((mo) => Object.keys(mo.lineByEvent)))).map((ev) => (
                      <tr key={ev} className="border-b border-stone-50 last:border-0">
                        <td className="px-3 py-2">{LINE_EVENT_LABEL[ev] ?? ev}</td>
                        {months.map((mo) => <td key={mo.month} className="text-right px-3">{fmt(mo.lineByEvent[ev] ?? 0)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ===================== 記事ごと ===================== */}
        {tab === "articles" && (
          <div>
            <div className="flex gap-2 mb-3 text-xs">
              {[7, 28, 90].map((d) => (
                <button key={d} onClick={() => setDays(d)} className="px-3 py-1.5 rounded-full border" style={chip(days === d)}>直近{d}日</button>
              ))}
            </div>

            {data && !data.gsc.ok && (
              <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3">
                Search Console 未接続のため、検索の数字は表示されません。({data.gsc.message})
              </p>
            )}

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-white rounded-xl border border-stone-200 p-3">
                <p className="text-[10px] text-stone-500">閲覧数</p>
                <p className="text-lg font-medium" style={{ color: INK }}>{loading ? "…" : fmt(totalViews)}</p>
              </div>
              <div className="bg-white rounded-xl border border-stone-200 p-3">
                <p className="text-[10px] text-stone-500">記事からのLINE</p>
                <p className="text-lg font-medium" style={{ color: INK }}>{loading ? "…" : fmt(totalLine)}</p>
              </div>
              <button onClick={() => setZeroOnly((z) => !z)} className="text-left rounded-xl border p-3" style={{ background: zeroOnly ? "#ecf3ef" : "white", borderColor: zeroOnly ? SAGE : "#e7e5e4" }}>
                <p className="text-[10px] text-stone-500">閲覧0{zeroOnly ? "(表示中)" : ""}</p>
                <p className="text-lg font-medium" style={{ color: INK }}>{loading ? "…" : `${zeroCount}本`}</p>
              </button>
            </div>

            <input
              type="search" value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="タイトル・検索語句で絞り込む(例:燃え尽き)"
              className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-sm mb-2 focus:outline-none"
            />
            <div className="flex flex-wrap gap-1.5 mb-2 text-xs">
              {([["all", "すべて"], ["normal", "通常の記事"], ["thinker", "偉人・学者"]] as ["all" | "normal" | "thinker", string][]).map(([v, l]) => (
                <button key={v} onClick={() => setScope(v)} className="px-3 py-1 rounded-full border" style={chip(scope === v)}>{l}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4 text-xs items-center">
              <span className="text-stone-400">並べ替え:</span>
              {([["views", "閲覧数"], ["change", "増えた順"], ["line", "LINE"], ["impressions", "検索表示"], ["position", "検索順位"]] as [SortKey, string][]).map(([v, l]) => (
                <button key={v} onClick={() => setSort(v)} className="px-3 py-1 rounded-full border" style={chip(sort === v)}>{l}</button>
              ))}
              <button onClick={downloadCsv} disabled={!data || loading} className="px-3 py-1 rounded-full border" style={{ borderColor: "#d6d3d1", color: "#57534e", opacity: !data || loading ? 0.4 : 1 }}>CSVで保存</button>
              <span className="ml-auto text-stone-400">{shown.length}本</span>
            </div>

            <div className="space-y-2">
              {shown.map((r, i) => {
                const ch = changeLabel(r.views, r.prevViews)
                const isOpen = open === r.path
                return (
                  <div key={r.path} className="bg-white rounded-xl border border-stone-200 px-3 py-2.5">
                    <div className="flex items-start gap-3">
                      <span className="text-[11px] text-stone-400 w-6 flex-shrink-0 pt-0.5 text-right">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <a href={r.path} target="_blank" rel="noopener noreferrer" className="block text-[13px] leading-snug hover:underline" style={{ color: INK }}>{r.title}</a>
                        <p className="text-[10px] text-stone-400 mt-1">
                          閲覧者 {fmt(r.users)} ／ 平均 {fmtTime(r.users ? r.engagementSec / r.users : 0)}
                          {r.lineClicks > 0 && <> ／ <span style={{ color: "#047857" }}>LINE {r.lineClicks}</span></>}
                          {r.checkCompletes > 0 && <> ／ チェック完了 {r.checkCompletes}</>}
                        </p>
                        <p className="text-[10px] text-stone-400">
                          {r.gsc ? <>検索:表示 {fmt(r.gsc.impressions)} ／ クリック {fmt(r.gsc.clicks)} ／ 平均 {r.gsc.position}位</> : data?.gsc.ok ? "検索:表示なし" : null}
                        </p>
                        <button onClick={() => setOpen(isOpen ? null : r.path)} className="text-[10px] underline mt-1" style={{ color: SAGE }}>
                          {isOpen ? "閉じる" : "詳しく"}
                        </button>
                        {isOpen && (
                          <div className="mt-2 border-t border-stone-100 pt-2 space-y-2">
                            <p className="text-[10px] text-stone-400">公開/更新 {r.date || "—"} ／ {r.path}</p>
                            {r.gsc && r.gsc.queries.length > 0 && (
                              <div>
                                <p className="text-[10px] text-stone-500 mb-1">この記事が表示された検索語句</p>
                                <ul className="text-[11px] text-stone-600 space-y-0.5">
                                  {r.gsc.queries.map((x) => (
                                    <li key={x.q}>
                                      <span>{x.q}</span>
                                      <span className="text-stone-400 text-[10px] ml-2">表示{x.impressions}・クリック{x.clicks}・{x.position}位</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="flex items-center gap-2 flex-wrap">
                              <button onClick={() => runInspect(r.path)} className="text-[10px] px-2.5 py-1 rounded-full border" style={{ borderColor: "#d6d3d1", color: "#57534e" }}>Googleの登録状況を確認</button>
                              {inspect[r.path] && <span className="text-[10px] text-stone-500">{inspect[r.path]}</span>}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-medium" style={{ color: INK }}>{loading ? "…" : fmt(r.views)}</p>
                        <p className="text-[10px]" style={{ color: ch.color }}>{loading ? "" : ch.text}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ===================== 検索された言葉 ===================== */}
        {tab === "search" && data && (
          <div className="space-y-5">
            <div>
              <p className="text-xs font-medium text-stone-600 mb-1">サイト内の検索欄で入力された言葉(直近{days}日)</p>
              {!data.siteSearch.ok ? (
                <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  GA4に「search_term」がカスタム定義として登録されていないため表示できません。登録した日以降の分から表示されます。
                </p>
              ) : (data.siteSearch.terms ?? []).length === 0 ? (
                <p className="text-[12px] text-stone-500">まだデータがありません。</p>
              ) : (
                <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-50">
                  {(data.siteSearch.terms ?? []).map((t) => (
                    <div key={t.term} className="flex justify-between px-3 py-2 text-[12px] text-stone-700">
                      <span>{t.term}</span><span className="text-stone-400">{t.count}回</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="text-xs font-medium text-stone-600 mb-1">Google検索で表示された語句(上位)</p>
              {!data.gsc.ok ? (
                <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">Search Console 未接続です。</p>
              ) : (
                <>
                  <p className="text-[10px] text-stone-400 mb-2">
                    {data.gsc.startDate}〜{data.gsc.endDate}(Search Console は2〜3日遅れ)／ 合計 表示 {fmt(data.gsc.totals?.impressions ?? 0)}・クリック {fmt(data.gsc.totals?.clicks ?? 0)}
                  </p>
                  <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-50">
                    {Object.values(
                      rows.flatMap((r) => r.gsc?.queries ?? []).reduce<Record<string, Query>>((acc, x) => {
                        const p = acc[x.q]
                        acc[x.q] = p
                          ? { q: x.q, clicks: p.clicks + x.clicks, impressions: p.impressions + x.impressions, position: Math.min(p.position, x.position) }
                          : { ...x }
                        return acc
                      }, {})
                    )
                      .sort((a, b) => b.impressions - a.impressions)
                      .slice(0, 40)
                      .map((x) => (
                        <div key={x.q} className="flex justify-between gap-2 px-3 py-2 text-[12px] text-stone-700">
                          <span className="truncate">{x.q}</span>
                          <span className="text-stone-400 flex-shrink-0 text-[11px]">表示{fmt(x.impressions)}・クリック{x.clicks}・最高{x.position}位</span>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {data && (
          <p className="text-[10px] text-stone-400 mt-6">
            取得:{new Date(data.fetchedAt).toLocaleString("ja-JP")} ／ 月の数字は日本時間の暦月、記事ごとの数字は昨日までの{data.days}日間(比較はその直前の同じ日数)。
          </p>
        )}
      </div>
    </div>
  )
}

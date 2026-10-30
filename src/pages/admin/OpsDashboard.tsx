// src/pages/admin/OpsDashboard.tsx
// 運営者用 — 運営ダッシュボード(開業判断の目安・月別推移・記事ごとの数字・サイト内検索語)
// ルーティング: <Route path="/admin/dashboard" element={<OpsDashboard />} />
// データ取得: /api/ops-dashboard(閲覧キーは /admin/views と共通)

import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react"
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
const TARGET_REACH = 80
const TARGET_REACH_GAIN = 12
const TARGET_IG_PER_WEEK = 3
const TARGET_IG_WEEKS = 8
const TARGET_IG_LINE = 5
const TARGET_WAITING = 3
const CHECKLIST: [string, string][] = [
  ["fee", "料金・初回の扱い"],
  ["booking", "予約と決済の流れ"],
  ["terms", "利用規約・キャンセルポリシー"],
  ["online", "オンライン面談環境"],
  ["records", "記録様式"],
  ["emergency", "緊急時対応フロー"],
]

/** 日本時間の今日を基準に、n週前の月曜日(YYYY-MM-DD) */
function mondayOf(weeksBack: number): string {
  const now = new Date(Date.now() + 9 * 3600_000)
  const dow = (now.getUTCDay() + 6) % 7 // 月曜=0
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - dow - weeksBack * 7))
  return d.toISOString().slice(0, 10)
}
/** 日本時間で n か月前の yyyyMM */
function monthKey(monthsBack: number): string {
  const now = new Date(Date.now() + 9 * 3600_000)
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - monthsBack, 1))
  return d.toISOString().slice(0, 7).replace("-", "")
}
/** Instagram:週3回以上の週が何週続いているか(今週は達成していれば数える) */
function igStreak(posts: Record<string, number>): number {
  let n = 0
  for (let w = 0; w < 60; w++) {
    const v = posts[mondayOf(w)] ?? 0
    if (v >= TARGET_IG_PER_WEEK) n++
    else if (w === 0) continue // 今週はまだ途中
    else break
  }
  return n
}

type Month = {
  month: string; users: number; newUsers: number; pageViews: number
  lineClicks: number; lineByEvent: Record<string, number>
  checkCompleteUsers: number; lineFromCheckUsers: number; channels: Record<string, number>
  sources?: Record<string, Record<string, number>>
}
type Query = { q: string; clicks: number; impressions: number; position: number }
type ApiArticle = {
  path: string; views: number; users: number; engagementSec: number; prevViews: number
  lineClicks: number; checkCompletes: number; lineFromCheckUsers: number
  gsc?: { clicks: number; impressions: number; position: number; queries: Query[] }
}
type ApiResult = {
  days: number; fetchedAt: string; months: Month[]; articles: ApiArticle[]
  gsc: { ok: boolean; message?: string; site?: string; startDate?: string; endDate?: string; totals?: { clicks: number; impressions: number } }
  siteSearch: { ok: boolean; message?: string; terms?: { term: string; count: number }[] }
  line?: { ok: boolean; message?: string; latest?: LineInsight | null; monthEnds?: (LineInsight & { month: string })[] }
  manual?: { ok: boolean; message?: string; data?: Manual }
  waitingLine?: { count: number; byMonthEnd: Record<string, number> } | null
  checkLevels?: { ok: boolean; message?: string; rows?: { path: string; level: string; completes: number; lines: number }[] }
}
type LineInsight = { date: string; followers: number; targetedReaches: number; blocks: number }
type Manual = {
  igPosts?: Record<string, number>; igLineAdds?: Record<string, number>
  checklist?: Record<string, boolean>; waiting?: number; note?: string; updatedAt?: string
  snapshots?: Record<string, { checklistDone: number; waiting: number }>
}
type Row = ApiArticle & { title: string; date: string; thinker: boolean }
type Tab = "launch" | "users" | "todo" | "articles" | "search"
type SortKey = "views" | "change" | "line" | "impressions" | "position"

/** GA4の流入元(デフォルト チャネル グループ)の日本語名と説明 */
const CHANNEL_INFO: Record<string, [string, string]> = {
  "Organic Search": ["検索(自然)", "Google・Yahoo!などの検索結果から"],
  "Direct": ["直接・不明", "URLの直接入力、ブックマーク、LINEやメールアプリ内のリンクなど、どこから来たか分からないもの"],
  "Referral": ["他サイトのリンク", "noteなど、ほかのWebサイトに貼られたリンクから"],
  "Organic Social": ["SNS(投稿・プロフィール)", "Instagram・X・Facebookなどの投稿やプロフィールのリンクから(広告以外)"],
  "Paid Social": ["SNS広告", "Meta広告など、SNSの有料広告から"],
  "Paid Search": ["検索広告", "Google広告など、検索結果の有料広告から"],
  "Display": ["ディスプレイ広告", "Webサイト上のバナー広告から"],
  "Email": ["メール", "メールマガジンなどのリンクから"],
  "Organic Video": ["動画サイト", "YouTubeなどの動画サービスから"],
  "AI Assistant": ["AI(ChatGPTなど)", "ChatGPT・Gemini・Perplexityなど、AIの回答に表示されたリンクから"],
  "Unassigned": ["分類できず", "GA4がどこにも分類できなかったもの(計測用の印の付け方が不完全なリンクなど)"],
  "Cross-network": ["Google広告(複数面)", "検索・YouTubeなどに横断して出る広告から"],
  "Affiliates": ["アフィリエイト", "成果報酬型の紹介リンクから"],
  "Organic Shopping": ["ショッピング", "ショッピングサイトから"],
  "SMS": ["SMS", "ショートメッセージのリンクから"],
}
/** 流入元の中身(sessionSource)をわかりやすい名前に */
function sourceLabel(src: string): string {
  const s = src.toLowerCase()
  const map: [RegExp, string][] = [
    [/^\(direct\)$/, "直接(参照元なし)"], [/google/, "Google"], [/yahoo/, "Yahoo!"], [/bing/, "Bing"],
    [/duckduckgo/, "DuckDuckGo"], [/instagram|^ig$/, "Instagram"], [/^t\.co$|twitter|^x\.com/, "X(Twitter)"],
    [/facebook|^fb$/, "Facebook"], [/line/, "LINE"], [/note\.com/, "note"], [/chatgpt|openai/, "ChatGPT"],
    [/perplexity/, "Perplexity"], [/gemini/, "Gemini"], [/copilot/, "Copilot"], [/claude/, "Claude"],
  ]
  const hit = map.find(([re]) => re.test(s))
  return hit ? `${hit[1]}(${src})` : src
}

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

/** 達成率のリング(円グラフ) */
function ProgressRing({ ratio }: { ratio: number | null }) {
  const size = 56, stroke = 6, r = (size - stroke) / 2, c = 2 * Math.PI * r
  const p = ratio === null ? 0 : Math.max(0, Math.min(1, ratio))
  const done = ratio !== null && ratio >= 1
  const color = done ? "#4d8a63" : SAGE
  const label = ratio === null ? "—" : `${Math.floor(Math.max(0, ratio) * 100)}%`
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}
      role="img" aria-label={ratio === null ? "未接続" : `達成率 ${label}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#ece6dc" strokeWidth={stroke} />
        {p > 0 && (
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
            strokeLinecap="round" strokeDasharray={`${c * p} ${c}`} />
        )}
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-medium"
        style={{ color: ratio === null ? "#a8a29e" : done ? "#2f6b45" : INK }}>
        {done ? "達成" : label}
      </span>
    </div>
  )
}

/** 目標に対する達成状況のカード(ratio = 実績 ÷ 目標。未接続は null) */
function GoalCard({ no, title, value, sub, goal, ratio, note }: {
  no: number; title: string; value: string; sub?: string; goal: string; ratio: number | null; note?: string
}) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] text-stone-500 leading-snug">{no}. {title}</p>
          <p className="text-lg font-medium mt-1" style={{ color: INK }}>{value}</p>
        </div>
        <ProgressRing ratio={ratio} />
      </div>
      {sub && <p className="text-[11px] text-stone-500 mt-0.5">{sub}</p>}
      <p className="text-[10px] text-stone-400 mt-1">目標:{goal}</p>
      {note && <p className="text-[10px] text-stone-400 mt-0.5">{note}</p>}
    </div>
  )
}


/* ------------------------------ 改善候補 ------------------------------ */

/** 掲載順位ごとのクリック率の目安(一般的な傾向をもとにした控えめな値) */
function benchCtr(pos: number): number {
  if (pos <= 1.5) return 0.25
  if (pos <= 2.5) return 0.15
  if (pos <= 3.5) return 0.1
  if (pos <= 4.5) return 0.08
  if (pos <= 5.5) return 0.06
  if (pos <= 10) return 0.04
  return 0.015
}
const LEVEL_LABEL: Record<string, string> = { low: "軽め", mid: "中くらい", high: "強め", severe: "とても強い" }

type Cand = { row: Row; reason: string; score: number }

function CandList({ title, desc, items, empty }: { title: string; desc: string; items: Cand[]; empty: string }) {
  const [all, setAll] = useState(false)
  const list = all ? items : items.slice(0, 8)
  return (
    <div>
      <p className="text-xs font-medium text-stone-700">{title}<span className="text-stone-400 font-normal ml-1">{items.length}本</span></p>
      <p className="text-[11px] text-stone-500 mb-2 leading-relaxed">{desc}</p>
      {items.length === 0 ? (
        <p className="text-[12px] text-stone-400 mb-1">{empty}</p>
      ) : (
        <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100">
          {list.map(({ row, reason }) => (
            <div key={row.path} className="px-3 py-2">
              <a href={row.path} target="_blank" rel="noopener noreferrer" className="block text-[12px] leading-snug hover:underline" style={{ color: INK }}>{row.title}</a>
              <p className="text-[10px] text-stone-500 mt-0.5">{reason}</p>
            </div>
          ))}
          {items.length > 8 && (
            <button onClick={() => setAll((a) => !a)} className="w-full text-[11px] py-2 underline" style={{ color: SAGE }}>
              {all ? "8本だけ表示" : `残り${items.length - 8}本も表示`}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function TodoPanel({ rows, data, days, setDays, chip }: {
  rows: Row[]; data: ApiResult; days: number; setDays: (d: number) => void
  chip: (active: boolean) => { background?: string; color: string; borderColor: string }
}) {
  const k = days / 28 // 期間に合わせて基準をのばし縮みさせる
  const today = Date.now()
  const ageDays = (d: string) => (d ? (today - new Date(d).getTime()) / 86400_000 : 999)

  const titleFix: Cand[] = rows
    .filter((r) => r.gsc && r.gsc.position <= 10 && r.gsc.impressions >= 200 * k)
    .map((r) => {
      const g = r.gsc!
      const expected = g.impressions * benchCtr(g.position)
      const ctr = g.impressions ? g.clicks / g.impressions : 0
      return { row: r, score: expected - g.clicks, reason: `平均${g.position}位・表示${fmt(g.impressions)}回でクリック率${pct(ctr)}(目安${pct(benchCtr(g.position))})→ 改善すれば +${Math.round(expected - g.clicks)}クリック程度` }
    })
    .filter((c) => c.score >= 10 * k && c.row.gsc!.clicks < c.row.gsc!.impressions * benchCtr(c.row.gsc!.position) * 0.6)
    .sort((a, b) => b.score - a.score)

  const pushUp: Cand[] = rows
    .filter((r) => r.gsc && r.gsc.position > 8 && r.gsc.position <= 20 && r.gsc.impressions >= 100 * k)
    .map((r) => ({
      row: r, score: r.gsc!.impressions,
      reason: `平均${r.gsc!.position}位・表示${fmt(r.gsc!.impressions)}回${r.gsc!.queries[0] ? `・主な語句「${r.gsc!.queries[0].q}」` : ""}`,
    }))
    .sort((a, b) => b.score - a.score)

  const lineFix: Cand[] = rows
    .filter((r) => !r.thinker && r.views >= 40 * k && r.lineClicks === 0)
    .map((r) => ({ row: r, score: r.views, reason: `閲覧${fmt(r.views)}回でLINEクリック0${r.checkCompletes ? `・チェック完了${r.checkCompletes}人` : ""}` }))
    .sort((a, b) => b.score - a.score)

  const tidy: Cand[] = rows
    .filter((r) => !r.thinker && ageDays(r.date) > 60 && r.views <= 1 && (r.gsc?.impressions ?? 0) < 10)
    .map((r) => ({ row: r, score: ageDays(r.date), reason: `公開/更新 ${r.date}・閲覧${r.views}・検索表示${r.gsc?.impressions ?? 0}` }))
    .sort((a, b) => b.score - a.score)

  // チェックごとの結果→LINE
  const checks = rows
    .filter((r) => r.checkCompletes > 0)
    .sort((a, b) => b.checkCompletes - a.checkCompletes)
  const levels = data.checkLevels?.ok ? data.checkLevels.rows ?? [] : []

  return (
    <div className="space-y-6">
      <div className="flex gap-2 text-xs">
        {[7, 28, 90].map((d) => (
          <button key={d} onClick={() => setDays(d)} className="px-3 py-1.5 rounded-full border" style={chip(days === d)}>直近{d}日</button>
        ))}
      </div>

      {/* チェック別 */}
      <div>
        <p className="text-xs font-medium text-stone-700">チェックごとの結果→LINE</p>
        <p className="text-[11px] text-stone-500 mb-2 leading-relaxed">完了した人のうち、結果画面からLINEに進んだ人の割合。目標は5%。完了が多いのに率が低いチェックほど、結果画面を直す効果が大きくなります。</p>
        {checks.length === 0 ? (
          <p className="text-[12px] text-stone-400">この期間のチェック完了はありません。</p>
        ) : (
          <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100">
            {checks.map((r) => {
              const rate = r.checkCompletes ? r.lineFromCheckUsers / r.checkCompletes : 0
              const lv = levels.filter((x) => x.path === r.path && x.completes > 0)
              return (
                <div key={r.path} className="px-3 py-2">
                  <div className="flex items-start justify-between gap-3">
                    <a href={r.path} target="_blank" rel="noopener noreferrer" className="text-[12px] leading-snug hover:underline" style={{ color: INK }}>{r.title}</a>
                    <span className="text-[12px] font-medium flex-shrink-0" style={{ color: rate >= TARGET_CHECK_RATE ? "#047857" : "#b45309" }}>{pct(rate)}</span>
                  </div>
                  <p className="text-[10px] text-stone-500 mt-0.5">完了{fmt(r.checkCompletes)}人 ／ LINE{fmt(r.lineFromCheckUsers)}人</p>
                  {lv.length > 0 && (
                    <p className="text-[10px] text-stone-400 mt-0.5">
                      {lv.map((x) => `${LEVEL_LABEL[x.level] ?? x.level} ${x.lines}/${x.completes}人`).join(" ／ ")}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        )}
        {!data.checkLevels?.ok && (
          <p className="text-[10px] text-stone-400 mt-1">結果のレベル別(軽め・強めなど)は、GA4に「level」をカスタム定義として登録すると、その日以降の分から表示されます。</p>
        )}
      </div>

      <CandList
        title="タイトル・説明文を見直す"
        desc="上位に表示されているのに、順位のわりにクリックされていない記事。検索結果で読みたくなるタイトルと説明文に直すと、順位はそのままでも読者が増えます。"
        items={titleFix}
        empty={data.gsc.ok ? "該当なし" : "Search Console 未接続"}
      />
      <CandList
        title="あと一押しで1ページ目"
        desc="平均8〜20位で、ある程度表示されている記事。主な検索語句に答える段落の追加や、関連記事からのリンクで1ページ目を狙えます。"
        items={pushUp}
        empty={data.gsc.ok ? "該当なし" : "Search Console 未接続"}
      />
      <CandList
        title="LINEへの導線を見直す"
        desc="よく読まれているのに、LINEクリックが0の記事(偉人シリーズは除く)。記事の途中や最後の案内の置き方・文言を見直す候補です。"
        items={lineFix}
        empty="該当なし"
      />
      <CandList
        title="統合・整理の候補"
        desc="公開から2か月以上たっても、閲覧も検索表示もほとんどない記事(偉人シリーズは除く)。似た記事への統合か、テーマの見直しを検討します。"
        items={tidy}
        empty="該当なし"
      />
      <p className="text-[10px] text-stone-400">基準は直近{days}日の数字から自動で判定しています。目安なので、最終判断は内容を見て行ってください。</p>
    </div>
  )
}


/* ------------------------------ 手入力の項目 ------------------------------ */

function ManualEditor({ manual, adminKey, onSaved }: {
  manual?: { ok: boolean; message?: string; data?: Manual }
  adminKey: string
  onSaved: (m: Manual) => void
}) {
  const [draft, setDraft] = useState<Manual>(manual?.data ?? {})
  const [status, setStatus] = useState("")
  const [open, setOpen] = useState(false)
  useEffect(() => { setDraft(manual?.data ?? {}) }, [manual?.data])

  if (!manual?.ok) {
    return (
      <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
        手入力項目の保存先が未接続です(Vercel の Storage で Upstash Redis をこのプロジェクトにつなぐと使えます)。{manual?.message ? `(${manual.message})` : ""}
      </p>
    )
  }

  const weeks = Array.from({ length: 9 }, (_, i) => mondayOf(i))
  const months = [0, 1, 2, 3].map(monthKey)
  const setNum = (field: "igPosts" | "igLineAdds", k: string, v: string) =>
    setDraft((d) => ({ ...d, [field]: { ...(d[field] ?? {}), [k]: Math.max(0, Number(v) || 0) } }))
  const inputCls = "w-16 px-2 py-1 rounded-lg border border-stone-300 text-right text-sm bg-white"

  const save = async () => {
    setStatus("保存中…")
    try {
      const r = await fetch("/api/ops-dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ manual: draft }),
      })
      const b = await r.json()
      if (!r.ok || !b.ok) throw new Error(b.message ?? `エラー(${r.status})`)
      onSaved(b.data as Manual)
      setStatus("保存しました")
    } catch (e) {
      setStatus(e instanceof Error ? `保存できませんでした:${e.message}` : "保存できませんでした")
    }
  }

  return (
    <div className="bg-white rounded-xl border border-stone-200">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-3 py-2.5 text-left">
        <span className="text-xs font-medium text-stone-700">手入力の項目を更新する(6〜8)</span>
        <span className="text-[11px]" style={{ color: SAGE }}>{open ? "閉じる" : "開く"}</span>
      </button>
      {open && (
        <div className="px-3 pb-3 space-y-4 border-t border-stone-100 pt-3">
          <div>
            <p className="text-[11px] text-stone-500 mb-1.5">6. Instagramの投稿回数(週ごと・月曜はじまり)</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5">
              {weeks.map((w, i) => (
                <label key={w} className="flex items-center justify-between gap-2 text-[12px] text-stone-600">
                  <span>{Number(w.slice(5, 7))}/{Number(w.slice(8))}〜{i === 0 ? "(今週)" : ""}</span>
                  <input type="number" inputMode="numeric" min={0} className={inputCls}
                    value={draft.igPosts?.[w] ?? ""} onChange={(e) => setNum("igPosts", w, e.target.value)} />
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] text-stone-500 mb-1.5">7. Instagram経由のLINE登録(月ごと・LINE公式アカウントの「友だち追加経路」で確認)</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {months.map((m, i) => (
                <label key={m} className="flex items-center justify-between gap-2 text-[12px] text-stone-600">
                  <span>{monthLabel(m)}{i === 0 ? "(今月)" : ""}</span>
                  <input type="number" inputMode="numeric" min={0} className={inputCls}
                    value={draft.igLineAdds?.[m] ?? ""} onChange={(e) => setNum("igLineAdds", m, e.target.value)} />
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] text-stone-500 mb-1.5">8. 受け皿チェックリスト</p>
            <div className="space-y-1">
              {CHECKLIST.map(([k, l]) => (
                <label key={k} className="flex items-center gap-2 text-[12px] text-stone-700">
                  <input type="checkbox" checked={!!draft.checklist?.[k]}
                    onChange={(e) => setDraft((d) => ({ ...d, checklist: { ...(d.checklist ?? {}), [k]: e.target.checked } }))} />
                  {l}
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] text-stone-500 mb-1">メモ</p>
            <textarea rows={2} maxLength={500} className="w-full px-2 py-1.5 rounded-lg border border-stone-300 text-[12px] bg-white"
              value={draft.note ?? ""} onChange={(e) => setDraft((d) => ({ ...d, note: e.target.value }))} />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={save} className="px-4 py-2 rounded-full text-xs text-white" style={{ background: SAGE }}>保存する</button>
            <span className="text-[11px] text-stone-500">{status}</span>
          </div>
          {manual.data?.updatedAt && (
            <p className="text-[10px] text-stone-400">最終更新:{new Date(manual.data.updatedAt).toLocaleString("ja-JP")}</p>
          )}
        </div>
      )}
    </div>
  )
}

/* ------------------------------ 達成率の推移 ------------------------------ */

/** その日を含む週の月曜日(YYYY-MM-DD) */
function mondayOfDate(ymd: string): string {
  const d = new Date(ymd + "T00:00:00Z")
  const dow = (d.getUTCDay() + 6) % 7
  d.setUTCDate(d.getUTCDate() - dow)
  return d.toISOString().slice(0, 10)
}
/** 月末時点で、週3回以上の週が何週続いていたか */
function igStreakAt(posts: Record<string, number>, ymd: string, inProgress: boolean): number {
  let n = 0
  const start = new Date(mondayOfDate(ymd) + "T00:00:00Z")
  for (let w = 0; w < 60; w++) {
    const d = new Date(start.getTime() - w * 7 * 86400_000).toISOString().slice(0, 10)
    const v = posts[d] ?? 0
    if (v >= TARGET_IG_PER_WEEK) n++
    else if (w === 0 && inProgress) continue
    else break
  }
  return n
}
function lastDayOf(ym: string): string {
  const y = Number(ym.slice(0, 4)), m = Number(ym.slice(4))
  return new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10)
}

function AchievementTrend({ data }: { data: ApiResult }) {
  const months = data.months.map((m) => m.month)
  const curYm = monthKey(0)
  const manualOk = !!data.manual?.ok
  const md: Manual = data.manual?.data ?? {}
  const reachEnd = (ym: string): number | undefined =>
    ym === curYm ? data.line?.latest?.targetedReaches : data.line?.monthEnds?.find((x) => x.month === ym)?.targetedReaches
  const prevYm = (ym: string) => {
    const y = Number(ym.slice(0, 4)), m = Number(ym.slice(4))
    const d = new Date(Date.UTC(y, m - 2, 1))
    return d.toISOString().slice(0, 7).replace("-", "")
  }
  const mo = (ym: string) => data.months.find((x) => x.month === ym)

  type Cell = number | null
  const rows: { label: string; cells: Cell[] }[] = [
    { label: "1. 月間ユーザー(2か月連続)", cells: months.map((ym) => {
      const a = mo(ym), b = mo(prevYm(ym))
      if (!a) return null
      return (b ? Math.min(a.users, b.users) : a.users) / TARGET_USERS
    }) },
    { label: "2. LINEボタンのクリック", cells: months.map((ym) => (mo(ym)?.lineClicks ?? 0) / TARGET_LINE) },
    { label: "3. チェック結果→LINE", cells: months.map((ym) => {
      const m = mo(ym); return m && m.checkCompleteUsers ? (m.lineFromCheckUsers / m.checkCompleteUsers) / TARGET_CHECK_RATE : 0
    }) },
    { label: "4. LINEリーチ(累計)", cells: months.map((ym) => {
      const v = reachEnd(ym); return data.line?.ok && v !== undefined ? v / TARGET_REACH : null
    }) },
    { label: "5. LINEリーチの純増", cells: months.map((ym) => {
      const a = reachEnd(ym), b = reachEnd(prevYm(ym))
      return data.line?.ok && a !== undefined && b !== undefined ? Math.max(0, a - b) / TARGET_REACH_GAIN : null
    }) },
    { label: "6. Instagram投稿(週3回×8週)", cells: months.map((ym) =>
      manualOk ? igStreakAt(md.igPosts ?? {}, ym === curYm ? new Date(Date.now() + 9 * 3600_000).toISOString().slice(0, 10) : lastDayOf(ym), ym === curYm) / TARGET_IG_WEEKS : null) },
    { label: "7. Instagram経由のLINE登録", cells: months.map((ym) => manualOk && md.igLineAdds?.[ym] !== undefined ? md.igLineAdds[ym] / TARGET_IG_LINE : null) },
    { label: "8. 受け皿チェックリスト", cells: months.map((ym) => {
      if (!manualOk) return null
      if (ym === curYm) return CHECKLIST.filter(([k]) => md.checklist?.[k]).length / CHECKLIST.length
      const snap = md.snapshots?.[ym]; return snap ? snap.checklistDone / CHECKLIST.length : null
    }) },
    { label: "9. 開業待ちの人", cells: months.map((ym) => {
      if (!manualOk) return null
      if (!data.waitingLine) return null
      const v = ym === curYm ? data.waitingLine.count : data.waitingLine.byMonthEnd[ym]
      return v === undefined ? null : v / TARGET_WAITING
    }) },
  ]
  // 総合:1〜8の達成率(100%で頭打ち)の平均。記録のない項目は0%として数える
  const overall: Cell[] = months.map((_, i) => {
    const vals = rows.slice(0, 8).map((r) => Math.min(1, Math.max(0, r.cells[i] ?? 0)))
    return vals.reduce((a, b) => a + b, 0) / vals.length
  })

  const cellStyle = (v: Cell) => {
    if (v === null) return { background: "#faf8f4", color: "#c4bdb3" }
    const p = Math.max(0, Math.min(1, v))
    if (p >= 1) return { background: "#4d8a63", color: "white" }
    const alpha = 0.08 + p * 0.5
    return { background: `rgba(124,154,138,${alpha.toFixed(2)})`, color: INK }
  }
  const text = (v: Cell) => (v === null ? "—" : v >= 1 ? "達成" : `${Math.floor(Math.max(0, v) * 100)}%`)

  // 総合の推移(折れ線)
  const W = 320, H = 90, padX = 24, padY = 14
  const xs = (i: number) => padX + (months.length <= 1 ? 0 : (i * (W - padX * 2)) / (months.length - 1))
  const ys = (v: number) => H - padY - v * (H - padY * 2)
  const pts = overall.map((v, i) => `${xs(i)},${ys(v ?? 0)}`).join(" ")

  return (
    <div>
      <p className="text-xs font-medium text-stone-600 mb-1">達成率の推移</p>
      <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">
        各月の「実績 ÷ 目標」。今月は途中経過。8は手入力を保存した月から記録されます(9はLINEの記録から自動)。総合は1〜8の平均(100%で頭打ち)です。
      </p>

      <div className="bg-white rounded-xl border border-stone-200 p-3 mb-2">
        <p className="text-[11px] text-stone-500 mb-1">総合(1〜8の平均)</p>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md" role="img" aria-label="総合達成率の推移">
          {[0, 0.5, 1].map((g) => (
            <g key={g}>
              <line x1={padX} x2={W - padX} y1={ys(g)} y2={ys(g)} stroke="#ece6dc" strokeWidth={1} />
              <text x={2} y={ys(g) + 3} fontSize={8} fill="#a8a29e">{g * 100}%</text>
            </g>
          ))}
          <polyline points={pts} fill="none" stroke={SAGE} strokeWidth={2} strokeLinejoin="round" />
          {overall.map((v, i) => (
            <g key={i}>
              <circle cx={xs(i)} cy={ys(v ?? 0)} r={3} fill={SAGE} />
              <text x={xs(i)} y={ys(v ?? 0) - 6} fontSize={8} textAnchor="middle" fill={INK}>{Math.round((v ?? 0) * 100)}%</text>
              <text x={xs(i)} y={H - 2} fontSize={8} textAnchor="middle" fill="#a8a29e">{monthLabel(months[i])}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
        <table className="w-full text-[11px] min-w-[560px]">
          <thead>
            <tr className="text-[10px] text-stone-500 border-b border-stone-100">
              <th className="text-left font-normal px-3 py-2 sticky left-0 bg-white">項目</th>
              {months.map((ym) => (
                <th key={ym} className="font-normal px-1 text-center">{monthLabel(ym)}{ym === curYm && <span className="text-stone-400">(途中)</span>}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-stone-50 last:border-0">
                <td className="px-3 py-1.5 text-stone-600 whitespace-nowrap sticky left-0 bg-white">{r.label}</td>
                {r.cells.map((v, i) => (
                  <td key={i} className="px-1 py-1">
                    <div className="rounded-md text-center py-1" style={cellStyle(v)}>{text(v)}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ------------------------------ 流入元の表 ------------------------------ */

function ChannelTable({ months, cur }: { months: Month[]; cur?: Month }) {
  const [open, setOpen] = useState<string | null>(null)
  const channels = Array.from(new Set<string>(months.flatMap((mo) => Object.keys(mo.channels))))
    .sort((a, b) => (cur?.channels[b] ?? 0) - (cur?.channels[a] ?? 0))
  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
      <table className="w-full text-[12px] text-stone-700 min-w-[460px]">
        <thead>
          <tr className="text-[10px] text-stone-500 border-b border-stone-100">
            <th className="text-left font-normal px-3 py-2 sticky left-0 bg-white">流入元</th>
            {months.map((mo) => <th key={mo.month} className="text-right font-normal px-3">{monthLabel(mo.month)}</th>)}
          </tr>
        </thead>
        <tbody>
          {channels.map((ch) => {
            const info = CHANNEL_INFO[ch]
            const isOpen = open === ch
            const srcs = Array.from(new Set<string>(months.flatMap((mo) => Object.keys(mo.sources?.[ch] ?? {}))))
              .map((src) => ({ src, total: months.reduce((n, mo) => n + (mo.sources?.[ch]?.[src] ?? 0), 0) }))
              .sort((a, b) => b.total - a.total)
              .slice(0, 6)
            return (
              <Fragment key={ch}>
                <tr onClick={() => setOpen(isOpen ? null : ch)} className="border-b border-stone-50 cursor-pointer hover:bg-stone-50">
                  <td className="px-3 py-2 sticky left-0 bg-white">
                    <span>{info ? info[0] : ch}</span>
                    <span className="text-[10px] text-stone-400 ml-1">{ch}</span>
                    <span className="text-[10px] ml-1" style={{ color: SAGE }}>{isOpen ? "▲" : "▼"}</span>
                  </td>
                  {months.map((mo) => <td key={mo.month} className="text-right px-3">{fmt(mo.channels[ch] ?? 0)}</td>)}
                </tr>
                {isOpen && (
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <td colSpan={months.length + 1} className="px-3 py-2">
                      <p className="text-[11px] text-stone-600 mb-1.5">{info ? info[1] : "GA4の分類名です。"}</p>
                      {srcs.length > 0 ? (
                        <table className="text-[11px] text-stone-600">
                          <thead>
                            <tr className="text-[10px] text-stone-400">
                              <th className="text-left font-normal pr-3">具体的な参照元</th>
                              {months.map((mo) => <th key={mo.month} className="text-right font-normal pl-3">{monthLabel(mo.month)}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {srcs.map(({ src }) => (
                              <tr key={src}>
                                <td className="pr-3 py-0.5">{sourceLabel(src)}</td>
                                {months.map((mo) => <td key={mo.month} className="text-right pl-3 text-stone-500">{fmt(mo.sources?.[ch]?.[src] ?? 0)}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p className="text-[10px] text-stone-400">内訳はありません。</p>
                      )}
                    </td>
                  </tr>
                )}
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/* ------------------------------ ユーザー ------------------------------ */

type UsersData = {
  days: number
  summary: { users: number; newUsers: number; sessions: number; pageViews: number; engagementSec: number; engagementRate: number }
  newVsReturning: { type: string; users: number; sessions: number; pageViews: number; engagementSec: number }[]
  devices: { device: string; users: number; engagementRate: number }[]
  regions: { region: string; users: number }[]
  dayHour: { day: number; hour: number; sessions: number }[]
  landing: { path: string; sessions: number; engagementRate: number; pagesPerSession: number }[]
  transitions: { from: string; to: string; views: number }[]
  funnel: { users: number; articleUsers: number; checkUsers: number; lineUsers: number }
}

const PREF: Record<string, string> = {
  Hokkaido: "北海道", Aomori: "青森", Iwate: "岩手", Miyagi: "宮城", Akita: "秋田", Yamagata: "山形", Fukushima: "福島",
  Ibaraki: "茨城", Tochigi: "栃木", Gunma: "群馬", Saitama: "埼玉", Chiba: "千葉", Tokyo: "東京", Kanagawa: "神奈川",
  Niigata: "新潟", Toyama: "富山", Ishikawa: "石川", Fukui: "福井", Yamanashi: "山梨", Nagano: "長野", Gifu: "岐阜",
  Shizuoka: "静岡", Aichi: "愛知", Mie: "三重", Shiga: "滋賀", Kyoto: "京都", Osaka: "大阪", Hyogo: "兵庫", Nara: "奈良",
  Wakayama: "和歌山", Tottori: "鳥取", Shimane: "島根", Okayama: "岡山", Hiroshima: "広島", Yamaguchi: "山口",
  Tokushima: "徳島", Kagawa: "香川", Ehime: "愛媛", Kochi: "高知", Fukuoka: "福岡", Saga: "佐賀", Nagasaki: "長崎",
  Kumamoto: "熊本", Oita: "大分", Miyazaki: "宮崎", Kagoshima: "鹿児島", Okinawa: "沖縄",
}
const DEVICE_LABEL: Record<string, string> = { mobile: "スマホ", desktop: "パソコン", tablet: "タブレット" }
const PAGE_LABEL: Record<string, string> = {
  "/": "トップページ", "/articles": "記事一覧", "/profile": "プロフィール", "/for-helpers": "支援職の方へ(LP)",
  "/ai-assistant": "AIで整理", "/privacy": "プライバシーポリシー", "/terms": "利用規約", "/tokusho": "特定商取引法の表記",
}
const titleMap = new Map(articles.map((a) => [a.path, a.title.replace(/【公認心理師[^】]*】/, "").replace(/[｜|].*$/, "").trim()]))
const pageTitle = (p: string) => PAGE_LABEL[p] ?? titleMap.get(p) ?? p

function Bar({ label, value, max, right, strong }: { label: string; value: number; max: number; right: string; strong?: boolean }) {
  return (
    <div>
      <div className="flex justify-between gap-2 text-[12px] mb-0.5">
        <span className="truncate" style={{ color: INK, fontWeight: strong ? 600 : 400 }}>{label}</span>
        <span className="text-stone-500 flex-shrink-0">{right}</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: "#f0ebe3" }}>
        <div style={{ width: `${max ? Math.max(2, (value / max) * 100) : 0}%`, height: 6, borderRadius: 3, background: SAGE }} />
      </div>
    </div>
  )
}

function Section({ title, desc, children }: { title: string; desc?: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium text-stone-700">{title}</p>
      {desc && <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">{desc}</p>}
      <div className="bg-white rounded-xl border border-stone-200 p-3">{children}</div>
    </div>
  )
}

function UsersPanel({ adminKey, chip }: { adminKey: string; chip: (active: boolean) => { background?: string; color: string; borderColor: string } }) {
  const [days, setDays] = useState(28)
  const [d, setD] = useState<UsersData | null>(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")

  useEffect(() => {
    let alive = true
    setLoading(true); setErr("")
    fetch(`/api/ops-dashboard?view=users&days=${days}`, { headers: { "x-admin-key": adminKey } })
      .then(async (r) => {
        const b = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(b.message ?? `エラー(${r.status})`)
        if (alive) setD(b as UsersData)
      })
      .catch((e) => { if (alive) setErr(e instanceof Error ? e.message : "取得に失敗しました") })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [days, adminKey])

  const s = d?.summary
  const perUser = (n: number, u: number) => (u ? n / u : 0)
  const NR: Record<string, string> = { new: "はじめて来た人", returning: "2回目以降の人" }

  // 曜日×時間帯(4時間ごと)
  const DAYS = ["日", "月", "火", "水", "木", "金", "土"]
  const blocks = [0, 4, 8, 12, 16, 20]
  const grid = DAYS.map((_, day) => blocks.map((h) => (d?.dayHour ?? []).filter((x) => x.day === day && x.hour >= h && x.hour < h + 4).reduce((n, x) => n + x.sessions, 0)))
  const gridMax = Math.max(1, ...grid.flat())

  const f = d?.funnel
  const steps = f ? [
    { label: "サイトに来た", n: f.users },
    { label: "記事を読んだ", n: f.articleUsers },
    { label: "チェックを最後までした", n: f.checkUsers },
    { label: "LINEのボタンを押した", n: f.lineUsers },
  ] : []

  return (
    <div className="space-y-5">
      <div className="flex gap-2 text-xs">
        {[7, 28, 90].map((n) => (
          <button key={n} onClick={() => setDays(n)} className="px-3 py-1.5 rounded-full border" style={chip(days === n)}>直近{n}日</button>
        ))}
      </div>
      {err && <p className="text-sm text-red-600">{err}</p>}
      {loading && !d && <p className="text-sm text-stone-500">読み込み中…</p>}

      {d && s && (
        <>
          {/* 概要 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              ["ユーザー", `${fmt(s.users)}人`, `うち新規 ${pct(perUser(s.newUsers, s.users))}`],
              ["1人あたりの閲覧", `${perUser(s.pageViews, s.users).toFixed(1)}ページ`, `訪問 ${fmt(s.sessions)}回`],
              ["1人あたりの滞在", fmtTime(perUser(s.engagementSec, s.users)), "実際に画面を見ていた時間"],
              ["しっかり見た訪問", pct(s.engagementRate), "10秒以上・2ページ以上など"],
            ].map(([t, v, sub]) => (
              <div key={t} className="bg-white rounded-xl border border-stone-200 p-3">
                <p className="text-[10px] text-stone-500">{t}</p>
                <p className="text-lg font-medium" style={{ color: INK }}>{v}</p>
                <p className="text-[10px] text-stone-400">{sub}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-medium text-stone-500 tracking-wider pt-1">どんな人が来ているか</p>

          <Section title="はじめての人と、2回目以降の人" desc="2回目以降の人が増えると、サイトを覚えて戻ってきてくれる人が増えている、ということです。">
            <div className="space-y-3">
              {d.newVsReturning.filter((x) => NR[x.type]).map((x) => (
                <div key={x.type}>
                  <Bar label={NR[x.type]} value={x.users} max={Math.max(...d.newVsReturning.map((y) => y.users))} right={`${fmt(x.users)}人`} />
                  <p className="text-[10px] text-stone-400 mt-0.5">1人あたり {perUser(x.pageViews, x.users).toFixed(1)}ページ ／ 滞在 {fmtTime(perUser(x.engagementSec, x.users))}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Section title="使っている端末">
              <div className="space-y-2">
                {d.devices.map((x) => (
                  <div key={x.device}><Bar label={DEVICE_LABEL[x.device] ?? x.device} value={x.users} max={s.users}
                    right={`${pct(perUser(x.users, d.devices.reduce((n, y) => n + y.users, 0)))}(${fmt(x.users)}人)`} /></div>
                ))}
              </div>
            </Section>
            <Section title="地域(上位)">
              <div className="space-y-2">
                {d.regions.filter((x) => x.region && x.region !== "(not set)").slice(0, 8).map((x) => (
                  <div key={x.region}><Bar label={PREF[x.region] ?? x.region} value={x.users} max={d.regions[0]?.users ?? 1} right={`${fmt(x.users)}人`} /></div>
                ))}
              </div>
            </Section>
          </div>

          <Section title="よく見られる曜日・時間帯" desc="訪問の回数。色が濃いほど多い時間帯です。記事やLINEの配信時間を決める目安になります。">
            <div className="overflow-x-auto">
              <table className="text-[10px] text-stone-500 w-full">
                <thead>
                  <tr><th className="w-6"></th>{blocks.map((h) => <th key={h} className="font-normal pb-1">{h}時</th>)}</tr>
                </thead>
                <tbody>
                  {grid.map((row, i) => (
                    <tr key={i}>
                      <td className="pr-1 text-right">{DAYS[i]}</td>
                      {row.map((v, j) => (
                        <td key={j} className="p-0.5">
                          <div className="rounded text-center py-1.5" title={`${DAYS[i]} ${blocks[j]}〜${blocks[j] + 4}時 ${v}回`}
                            style={{ background: `rgba(124,154,138,${(0.06 + (v / gridMax) * 0.85).toFixed(2)})`, color: v / gridMax > 0.55 ? "white" : INK }}>
                            {v || ""}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <p className="text-[11px] font-medium text-stone-500 tracking-wider pt-1">どう動いているか</p>

          <Section title="LINEまでの流れ" desc="それぞれの行動をした人数(同じ期間内)。順番どおりに進んだ人だけを数えたものではないので、目安として見てください。">
            <div className="space-y-2.5">
              {steps.map((st, i) => (
                <div key={st.label}>
                  <Bar label={st.label} value={st.n} max={steps[0].n || 1} right={`${fmt(st.n)}人${i > 0 ? `(前の段の${pct(perUser(st.n, steps[i - 1].n))})` : ""}`} strong={i === steps.length - 1} />
                </div>
              ))}
            </div>
          </Section>

          <Section title="入口になっているページ" desc="最初に開かれたページ。「しっかり見た」は、すぐ帰らずに読まれた訪問の割合です。">
            <div className="divide-y divide-stone-100">
              {d.landing.filter((x) => x.path && x.path !== "(not set)").slice(0, 15).map((x) => (
                <div key={x.path} className="py-1.5 flex items-start justify-between gap-3">
                  <a href={x.path} target="_blank" rel="noopener noreferrer" className="text-[12px] leading-snug hover:underline min-w-0" style={{ color: INK }}>{pageTitle(x.path)}</a>
                  <span className="text-[10px] text-stone-400 flex-shrink-0 text-right">{fmt(x.sessions)}回<br />しっかり{pct(x.engagementRate)}・{x.pagesPerSession.toFixed(1)}ページ</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="次に読まれているページ" desc="サイトの中で、あるページから別のページへ移った回数。よく使われている道すじです。">
            {d.transitions.length === 0 ? <p className="text-[12px] text-stone-400">データがありません</p> : (
              <div className="divide-y divide-stone-100">
                {d.transitions.slice(0, 20).map((x) => (
                  <div key={x.from + x.to} className="py-1.5 flex items-start justify-between gap-3">
                    <p className="text-[12px] leading-snug min-w-0" style={{ color: INK }}>
                      <span className="text-stone-500">{pageTitle(x.from)}</span>
                      <span className="text-stone-400"> → </span>
                      {pageTitle(x.to)}
                    </p>
                    <span className="text-[10px] text-stone-400 flex-shrink-0">{fmt(x.views)}回</span>
                  </div>
                ))}
              </div>
            )}
          </Section>
        </>
      )}
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
          lineClicks: r?.lineClicks ?? 0, checkCompletes: r?.checkCompletes ?? 0, lineFromCheckUsers: r?.lineFromCheckUsers ?? 0, gsc: r?.gsc,
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

  /* ---- 4〜9(LINE・手入力) ---- */
  const lineLatest = data?.line?.latest ?? null
  const reachAt = (ym: string) => data?.line?.monthEnds?.find((x) => x.month === ym)?.targetedReaches
  const endLast = reachAt(monthKey(1)), endPrev = reachAt(monthKey(2))
  const reachGainLast = endLast !== undefined && endPrev !== undefined ? endLast - endPrev : null
  const reachGainCur = lineLatest && endLast !== undefined ? lineLatest.targetedReaches - endLast : null
  const manualOk = !!data?.manual?.ok
  const manualData: Manual = data?.manual?.data ?? {}
  const igPosts = manualData.igPosts ?? {}
  const igLineAdds = manualData.igLineAdds ?? {}
  const streak = igStreak(igPosts)
  const checklistDone = CHECKLIST.filter(([k]) => manualData.checklist?.[k]).length
  const waitingOk = !!data?.waitingLine
  const waiting = data?.waitingLine?.count ?? 0
  const met: boolean[] = [
    last2.length === 2 && last2.every((mo) => mo.users >= TARGET_USERS),
    !!last && last.lineClicks >= TARGET_LINE,
    !!last && checkRate(last) >= TARGET_CHECK_RATE,
    (lineLatest?.targetedReaches ?? 0) >= TARGET_REACH,
    (reachGainLast ?? 0) >= TARGET_REACH_GAIN,
    streak >= TARGET_IG_WEEKS,
    (igLineAdds[monthKey(1)] ?? 0) >= TARGET_IG_LINE,
    checklistDone === CHECKLIST.length,
  ]
  const metCount = met.filter(Boolean).length
  const launchReady = metCount === 8 || waiting >= TARGET_WAITING

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
        <div className="flex flex-wrap gap-1.5 mb-4 text-xs">
          {([["launch", "開業判断"], ["users", "ユーザー"], ["todo", "改善候補"], ["articles", "記事ごと"], ["search", "検索された言葉"]] as [Tab, string][]).map(([v, l]) => (
            <button key={v} onClick={() => setTab(v)} className="px-3.5 py-1.5 rounded-full border" style={chip(tab === v)}>{l}</button>
          ))}
        </div>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        {loading && !data && <p className="text-sm text-stone-500">読み込み中…</p>}

        {/* ===================== 開業判断 ===================== */}
        {tab === "launch" && data && (
          <div className="space-y-5">
            <div className="rounded-xl p-3 border" style={{ background: launchReady ? "#dcfce7" : "white", borderColor: launchReady ? "#86efac" : "#e7e5e4" }}>
              <p className="text-[11px] text-stone-500">開始の判断(1〜8すべて達成、または9を達成で開始)</p>
              <p className="text-base font-medium mt-0.5" style={{ color: INK }}>
                {launchReady ? "開始の目安に到達しています" : `1〜8のうち ${metCount}/8 達成 ／ 9は ${waiting}/${TARGET_WAITING}人`}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <GoalCard
                no={1} title="サイト月間ユーザー"
                value={last2.length ? last2.map((mo) => `${monthLabel(mo.month)} ${fmt(mo.users)}`).join(" ／ ") : "—"}
                sub={cur ? `今月(${dayOfMonth}日まで)${fmt(cur.users)}人` : undefined}
                goal={`${fmt(TARGET_USERS)}人以上を2か月連続`}
                ratio={last2.length === 2 ? Math.min(...last2.map((mo) => mo.users)) / TARGET_USERS : (last ? last.users / TARGET_USERS : 0)}
              />
              <GoalCard
                no={2} title="LINEボタンのクリック(サイト全体)"
                value={last ? `${monthLabel(last.month)} ${fmt(last.lineClicks)}件` : "—"}
                sub={cur ? `今月(${dayOfMonth}日まで)${fmt(cur.lineClicks)}件` : undefined}
                goal={`月${TARGET_LINE}件以上`}
                ratio={last ? last.lineClicks / TARGET_LINE : 0}
              />
              <GoalCard
                no={3} title="チェック結果→LINE"
                value={last ? `${monthLabel(last.month)} ${pct(checkRate(last))}` : "—"}
                sub={last ? `完了${fmt(last.checkCompleteUsers)}人中 ${fmt(last.lineFromCheckUsers)}人` : undefined}
                goal={`${TARGET_CHECK_RATE * 100}%以上`}
                ratio={last ? checkRate(last) / TARGET_CHECK_RATE : 0}
                note={cur ? `今月 ${pct(checkRate(cur))}(${fmt(cur.lineFromCheckUsers)}/${fmt(cur.checkCompleteUsers)}人)` : undefined}
              />
              <GoalCard
                no={4} title="LINEターゲットリーチ(累計)"
                value={lineLatest ? `${fmt(lineLatest.targetedReaches)}人` : "—"}
                sub={lineLatest ? `友だち${fmt(lineLatest.followers)}人・ブロック${fmt(lineLatest.blocks)}(${lineLatest.date.slice(4, 6)}/${lineLatest.date.slice(6)}時点)` : undefined}
                goal={`${TARGET_REACH}人以上`}
                ratio={data.line?.ok ? (lineLatest?.targetedReaches ?? 0) / TARGET_REACH : null}
                note={data.line?.ok ? undefined : "LINE未接続"}
              />
              <GoalCard
                no={5} title="LINEターゲットリーチの純増"
                value={reachGainLast !== null ? `${monthLabel(monthKey(1))} ${reachGainLast >= 0 ? "+" : ""}${reachGainLast}人` : "—"}
                sub={reachGainCur !== null ? `今月 ${reachGainCur >= 0 ? "+" : ""}${reachGainCur}人` : undefined}
                goal={`月+${TARGET_REACH_GAIN}人以上`}
                ratio={data.line?.ok ? Math.max(0, reachGainLast ?? 0) / TARGET_REACH_GAIN : null}
                note={data.line?.ok ? undefined : "LINE未接続"}
              />
              <GoalCard
                no={6} title="Instagram投稿(週3回以上)"
                value={`${streak}週連続`}
                sub={`今週 ${igPosts[mondayOf(0)] ?? 0}回 ／ 先週 ${igPosts[mondayOf(1)] ?? 0}回`}
                goal={`週${TARGET_IG_PER_WEEK}回を${TARGET_IG_WEEKS}週継続`}
                ratio={manualOk ? streak / TARGET_IG_WEEKS : null}
                note={manualOk ? undefined : "保存先未接続"}
              />
              <GoalCard
                no={7} title="Instagram経由のLINE登録"
                value={`${monthLabel(monthKey(1))} ${igLineAdds[monthKey(1)] ?? 0}人`}
                sub={`今月 ${igLineAdds[monthKey(0)] ?? 0}人`}
                goal={`月${TARGET_IG_LINE}人以上`}
                ratio={manualOk ? (igLineAdds[monthKey(1)] ?? 0) / TARGET_IG_LINE : null}
                note={manualOk ? undefined : "保存先未接続"}
              />
              <GoalCard
                no={8} title="受け皿チェックリスト"
                value={`${checklistDone}/${CHECKLIST.length}項目`}
                sub={CHECKLIST.filter(([k]) => !manualData.checklist?.[k]).map(([, l]) => l).slice(0, 2).join("・") || undefined}
                goal="6項目すべて完了"
                ratio={manualOk ? checklistDone / CHECKLIST.length : null}
                note={manualOk ? undefined : "保存先未接続"}
              />
              <GoalCard
                no={9} title="開業待ちの人"
                value={`${waiting}人`}
                sub="LINEで「待つ」と返信した人(ブロックした人は除く)"
                goal={`${TARGET_WAITING}人以上(達成すれば1〜8に関係なく開始)`}
                ratio={waitingOk ? waiting / TARGET_WAITING : null}
                note={waitingOk ? undefined : "保存先未接続"}
              />
            </div>

            <ManualEditor
              manual={data.manual}
              adminKey={key}
              onSaved={(m) => setData((d) => (d ? { ...d, manual: { ok: true, data: m } } : d))}
            />

            <AchievementTrend data={data} />

            {/* 月別推移 */}
            <div>
              <p className="text-xs font-medium text-stone-600 mb-2">月ごとの推移</p>
              <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
                <table className="w-full text-[12px] text-stone-700 min-w-[600px]">
                  <thead>
                    <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                      <th className="text-left font-normal px-3 py-2">月</th>
                      <th className="text-right font-normal px-2">ユーザー</th>
                      <th className="text-right font-normal px-2">うち新規</th>
                      <th className="text-right font-normal px-2">閲覧</th>
                      <th className="text-right font-normal px-2">LINEクリック</th>
                      <th className="text-right font-normal px-2">チェック完了</th>
                      <th className="text-right font-normal px-2">結果→LINE</th>
                      <th className="text-right font-normal px-3">LINEリーチ(月末)</th>
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
                        <td className="text-right px-2">{pct(checkRate(mo))}</td>
                        <td className="text-right px-3">{(() => { const v = i === months.length - 1 ? lineLatest?.targetedReaches : reachAt(mo.month); return v === undefined ? "—" : fmt(v) })()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 流入元 */}
            <div>
              <p className="text-xs font-medium text-stone-600 mb-1">流入元(ユーザー数)</p>
              <p className="text-[10px] text-stone-400 mb-2">行を押すと、説明と、具体的にどのサイト・サービスから来たかが出ます。</p>
              <ChannelTable months={months} cur={cur} />
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

        {/* ===================== ユーザー ===================== */}
        {tab === "users" && <UsersPanel adminKey={key} chip={chip} />}

        {/* ===================== 改善候補 ===================== */}
        {tab === "todo" && data && <TodoPanel rows={rows} data={data} days={days} setDays={setDays} chip={chip} />}

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
                          {r.checkCompletes > 0 && <> ／ チェック完了 {r.checkCompletes}人</>}
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

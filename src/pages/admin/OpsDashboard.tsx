// src/pages/admin/OpsDashboard.tsx
// 運営者用 — 運営ダッシュボード(開業判断の目安・月別推移・記事ごとの数字・サイト内検索語)
// ルーティング: <Route path="/admin/dashboard" element={<OpsDashboard />} />
// データ取得: /api/ops-dashboard(閲覧キーは /admin/views と共通)

import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react"
import { Helmet } from "react-helmet-async"
import { articles } from "../../data/articles"
// 統合で消した記事の転送先(検索の数字に古いURLが残っている間、転送先の記事名で表示するため)
// @ts-ignore -- JSON の読み込み(Vite が対応。redirects だけを取り込む)
import { redirects as VERCEL_REDIRECTS } from "../../../vercel.json"

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
/**
 * 判断から外している(保留中の)項目の番号。
 * 療養中は Instagram を運用しないため 6・7 を保留にしている(2026-10-30)。
 * Instagram を再開したら [] に戻すと、元の「1〜8すべて」の判定に戻る。
 */
const HELD_GOALS: number[] = [6, 7]
const HELD_REASON = "療養中は保留"
const ACTIVE_GOALS = [1, 2, 3, 4, 5, 6, 7, 8].filter((n) => !HELD_GOALS.includes(n))
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
type GscQuery = Query & { prevPosition: number | null; page: string | null }
type ApiArticle = {
  path: string; views: number; users: number; engagementSec: number; prevViews: number
  lineClicks: number; checkCompletes: number; lineFromCheckUsers: number
  gsc?: { clicks: number; impressions: number; position: number; queries: Query[] }
}
type ApiResult = {
  days: number; fetchedAt: string; months: Month[]; articles: ApiArticle[]
  gsc: { ok: boolean; message?: string; site?: string; startDate?: string; endDate?: string; totals?: { clicks: number; impressions: number }; queries?: GscQuery[] }
  siteSearch: { ok: boolean; message?: string; terms?: { term: string; count: number }[] }
  line?: { ok: boolean; message?: string; latest?: LineInsight | null; monthEnds?: (LineInsight & { month: string; source?: string })[]; issues?: { month: string; reason: string }[]; dailyCount?: number }
  manual?: { ok: boolean; message?: string; data?: Manual }
  waitingLine?: { count: number; byMonthEnd: Record<string, number> } | null
  checkLevels?: { ok: boolean; message?: string; rows?: { path: string; level: string; completes: number; lines: number }[] }
  monthlyRecord?: Record<string, { users: number; lineClicks: number; reach: number | null; followers: number | null }>
  lineStep?: { ok: boolean; message?: string; since?: string; rows?: { day: string; sessions: number; users: number; engagedSessions: number }[] }
  titleTests?: { ok: boolean; message?: string; rows?: { path: string; since: string; until: string; days: number; clicks: number; impressions: number; position: number; before?: { clicks: number; impressions: number; position: number; days: number } }[] }
}
type LineInsight = { date: string; followers: number; targetedReaches: number; blocks: number }
type Manual = {
  igPosts?: Record<string, number>; igLineAdds?: Record<string, number>
  checklist?: Record<string, boolean>; waiting?: number; note?: string; updatedAt?: string
  snapshots?: Record<string, { checklistDone: number; waiting: number }>
  plan?: Plan
}
type Plan = {
  annualTarget: number; unitPrice: number; sessionsPerClient: number; sessionsPerMonth: number
  friendToClient: number; clickToAdd: number | null; userToClick: number | null
  capacity: number | null; launchMonth: string | null; expenseRate?: number; employmentIncome?: number; updatedAt?: string
}
type Row = ApiArticle & { title: string; date: string; thinker: boolean }
type Tab = "launch" | "plan" | "users" | "todo" | "articles" | "search" | "feedback"
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
function ProgressRing({ ratio, held = false }: { ratio: number | null; held?: boolean }) {
  const size = 56, stroke = 6, r = (size - stroke) / 2, c = 2 * Math.PI * r
  const p = ratio === null ? 0 : Math.max(0, Math.min(1, ratio))
  const done = ratio !== null && ratio >= 1
  const color = done ? "#4d8a63" : SAGE
  const label = ratio === null ? "—" : `${Math.floor(Math.max(0, ratio) * 100)}%`
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}
      role="img" aria-label={held ? "保留中" : ratio === null ? "未接続" : `達成率 ${label}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#ece6dc" strokeWidth={stroke} />
        {p > 0 && !held && (
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
            strokeLinecap="round" strokeDasharray={`${c * p} ${c}`} />
        )}
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-medium"
        style={{ color: held || ratio === null ? "#a8a29e" : done ? "#2f6b45" : INK }}>
        {held ? "保留" : done ? "達成" : label}
      </span>
    </div>
  )
}

/** 目標に対する達成状況のカード(ratio = 実績 ÷ 目標。未接続は null) */
function GoalCard({ no, title, value, sub, goal, ratio, note }: {
  no: number; title: string; value: string; sub?: string; goal: string; ratio: number | null; note?: string
}) {
  const held = HELD_GOALS.includes(no)
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-3" style={held ? { opacity: 0.55 } : undefined}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] text-stone-500 leading-snug">{no}. {title}</p>
          <p className="text-lg font-medium mt-1" style={{ color: INK }}>{value}</p>
        </div>
        <ProgressRing ratio={ratio} held={held} />
      </div>
      {sub && <p className="text-[11px] text-stone-500 mt-0.5">{sub}</p>}
      <p className="text-[10px] text-stone-400 mt-1">目標:{goal}</p>
      {held ? <p className="text-[10px] text-stone-400 mt-0.5">{HELD_REASON}(開始の判断から外しています)</p>
        : note && <p className="text-[10px] text-stone-400 mt-0.5">{note}</p>}
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
const LEVEL_LABEL: Record<string, string> = { low: "軽め", mid: "中くらい", high: "強め", severe: "とても強い", p0: "消耗の中", p1: "休養", p2: "整理", p3: "再構築", p4: "維持" }

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
  // 総合:1〜8のうち保留していない項目の達成率(100%で頭打ち)の平均。記録のない項目は0%として数える
  const overall: Cell[] = months.map((_, i) => {
    const vals = rows.slice(0, 8).filter((_, k) => !HELD_GOALS.includes(k + 1)).map((r) => Math.min(1, Math.max(0, r.cells[i] ?? 0)))
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
        各月の「実績 ÷ 目標」。今月は途中経過。8は手入力を保存した月から記録されます(9はLINEの記録から自動)。総合は1〜8のうち保留中を除いた項目の平均(100%で頭打ち)です。
      </p>

      <div className="bg-white rounded-xl border border-stone-200 p-3 mb-2">
        <p className="text-[11px] text-stone-500 mb-1">総合({ACTIVE_GOALS.join("・")}の平均)</p>
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
            {rows.map((r, ri) => (
              <tr key={r.label} className="border-b border-stone-50 last:border-0" style={HELD_GOALS.includes(ri + 1) ? { opacity: 0.5 } : undefined}>
                <td className="px-3 py-1.5 text-stone-600 whitespace-nowrap sticky left-0 bg-white">{r.label}{HELD_GOALS.includes(ri + 1) && <span className="text-[10px] text-stone-400">(保留)</span>}</td>
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
  devices: { device: string; users: number; engagementRate: number; lineUsers?: number; lineClicks?: number }[]
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
const DEVICE_LABEL: Record<string, string> = { mobile: "スマホ", desktop: "パソコン", tablet: "タブレット", "smart tv": "テレビ" }
const PAGE_LABEL: Record<string, string> = {
  "/": "トップページ", "/articles": "記事一覧", "/profile": "プロフィール", "/for-helpers": "支援職の方へ(LP)",
  "/ai-assistant": "AIで整理", "/privacy": "プライバシーポリシー", "/terms": "利用規約", "/tokusho": "特定商取引法の表記",
}
const titleMap = new Map(articles.map((a) => [a.path, a.title.replace(/【公認心理師[^】]*】/, "").replace(/[｜|].*$/, "").trim()]))
const redirectMap = new Map<string, string>(
  ((VERCEL_REDIRECTS ?? []) as { source: string; destination: string }[])
    .filter((r) => !r.source.includes(":") && !r.source.includes("("))
    .map((r) => [r.source.replace(/\/$/, ""), r.destination.replace(/\/$/, "")]),
)
const pageTitle = (p: string): string => {
  const own = PAGE_LABEL[p] ?? titleMap.get(p)
  if (own) return own
  const to = redirectMap.get(p.replace(/\/$/, ""))
  if (to) return `${PAGE_LABEL[to] ?? titleMap.get(to) ?? to}(統合前のURL)`
  return p
}

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
            <Section title="使っている端末" desc="下の小さい数字は「しっかり見た訪問」の割合と、LINEボタンを押した人の割合。パソコンだけLINEの割合が低ければ、QRコード画面で止まっている可能性があります。">
              <div className="space-y-2">
                {d.devices.map((x) => (
                  <div key={x.device}><Bar label={DEVICE_LABEL[x.device] ?? x.device} value={x.users} max={s.users}
                    right={`${pct(perUser(x.users, d.devices.reduce((n, y) => n + y.users, 0)))}(${fmt(x.users)}人)`} />
                    {x.users >= 20 && <p className="text-[10px] text-stone-400 mt-0.5">しっかり見た訪問 {pct(x.engagementRate)} ／ LINEボタン {fmt(x.lineUsers ?? 0)}人({pct(perUser(x.lineUsers ?? 0, x.users))})</p>}</div>
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

/* ------------------------------ サイトに加えた変更 ------------------------------ */
/** 数字が動いたときに、どの変更が効いたかを読み違えないための記録(新しいものが上) */
const CHANGE_LOG: { date: string; text: string }[] = [
  { date: "2026-10-30", text: "目標を「2027年12月に受付再開」に設定(年間計画タブの「再開までの道のり」)" },
  { date: "2026-10-30", text: "タイトル変更:見捨てられ不安チェック／バーンアウトチェック(検索語を先頭に)。燃え尽きの初期症状の記事の上部にチェックへの案内" },
  { date: "2026-10-30", text: "新しいチェック「空虚感チェック」を公開(空虚感の記事からリンク)" },
  { date: "2026-10-30", text: "全ページの下に「サイトの不具合・ご意見を送る」を追加(届いた内容は「ご意見」タブ)" },
  { date: "2026-10-30", text: "新しいチェック「燃え尽き 回復段階チェック」を公開(回復期間の記事からリンク)" },
  { date: "2026-10-30", text: "見出し追加:共感しすぎて疲れる(情動感染・情動伝染)／メサイア症候群(症状・病気かどうか・メサイヤ表記)" },
  { date: "2026-10-30", text: "パソコンで見ている人に、右下へLINE登録のQRコードを表示(友だち追加経路は「QRコード」で数える)" },
  { date: "2026-10-30", text: "スマホ表示の修正(トップのお知らせ帯・押しにくいリンクを押しやすく)" },
  { date: "2026-10-29", text: "LINEの新しいステップ配信(7日間・2026年11月版)を開始" },
  { date: "2026-10-29", text: "タイトル変更:自己価値とは？／優しすぎる人ほど壊れる理由" },
  { date: "2026-10-29", text: "チェック結果の文面を、受付休止中の内容(LINE案内)に変更" },
  { date: "2026-10-28", text: "チェック結果のボタンをお問い合わせ→LINEに変更、チェックの計測(完了・LINE)を全チェックに追加" },
  { date: "2026-10-28", text: "似た内容の記事を統合(39本を削除し、主要記事へ転送)" },
  { date: "2026-10-10", text: "チェック完了の数え方を修正(これより前は多めに出ている)" },
]

function ChangeLog() {
  const [open, setOpen] = useState(false)
  const list = open ? CHANGE_LOG : CHANGE_LOG.slice(0, 4)
  return (
    <div>
      <p className="text-xs font-medium text-stone-600 mb-1">サイトに加えた変更</p>
      <p className="text-[10px] text-stone-400 mb-2">数字が動いたときは、その少し前に何を変えたかを見てください。効果が出るまで2〜3週間かかることが多いです。</p>
      <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100">
        {list.map((c, i) => (
          <div key={i} className="px-3 py-2 flex gap-3 text-[12px]">
            <span className="text-stone-400 flex-shrink-0 tabular-nums">{c.date.slice(5).replace("-", "/")}</span>
            <span className="text-stone-700 leading-snug">{c.text}</span>
          </div>
        ))}
        {CHANGE_LOG.length > 4 && (
          <button type="button" onClick={() => setOpen(!open)} className="w-full px-3 py-2 text-[11px] text-stone-500 text-left">
            {open ? "閉じる" : `すべて見る(${CHANGE_LOG.length}件)`}
          </button>
        )}
      </div>
    </div>
  )
}

/* ------------------------------ LINEボタンと友だち追加 ------------------------------ */
function LineAddTable({ data, months }: { data: ApiResult; months: Month[] }) {
  const curYm = months[months.length - 1]?.month
  const at = (ym: string) => (ym === curYm ? data.line?.latest ?? undefined : data.line?.monthEnds?.find((x) => x.month === ym))
  const prevYm = (ym: string) => {
    const y = Number(ym.slice(0, 4)), m = Number(ym.slice(4))
    return m === 1 ? `${y - 1}12` : `${y}${String(m - 1).padStart(2, "0")}`
  }
  const cols = months.map((mo) => {
    const now = at(mo.month), before = at(prevYm(mo.month))
    const adds = now && before ? now.followers - before.followers : undefined
    const blocks = now && before ? now.blocks - before.blocks : undefined
    return { mo, adds, blocks }
  })
  const show = (v: number | undefined) => (v === undefined ? "—" : fmt(v))
  return (
    <div>
      <p className="text-xs font-medium text-stone-600 mb-1">LINEボタンと友だち追加</p>
      <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">
        ボタンが押された回数に対して、実際に友だち追加された数。追加には、サイト以外(QRコード・LINE内の検索など)からの分も含みます。
        「追加」が「押された回数」よりずっと少なければ、押したあとにやめている人が多いということです。
      </p>
      <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
        <table className="w-full text-[12px] text-stone-700 min-w-[420px]">
          <thead>
            <tr className="text-[10px] text-stone-500 border-b border-stone-100">
              <th className="text-left font-normal px-3 py-2"></th>
              {cols.map((c) => <th key={c.mo.month} className="text-right font-normal px-3">{monthLabel(c.mo.month)}{c.mo.month === curYm && <span className="text-stone-400">(途中)</span>}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-stone-50">
              <td className="px-3 py-2">LINEボタンが押された回数</td>
              {cols.map((c) => <td key={c.mo.month} className="text-right px-3">{fmt(c.mo.lineClicks)}</td>)}
            </tr>
            <tr className="border-b border-stone-50">
              <td className="px-3 py-2">友だち追加された数</td>
              {cols.map((c) => <td key={c.mo.month} className="text-right px-3">{show(c.adds)}</td>)}
            </tr>
            <tr className="border-b border-stone-50">
              <td className="px-3 py-2">ブロックされた数</td>
              {cols.map((c) => <td key={c.mo.month} className="text-right px-3">{show(c.blocks)}</td>)}
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium">押された回数あたりの追加</td>
              {cols.map((c) => <td key={c.mo.month} className="text-right px-3 font-medium">{c.adds === undefined || !c.mo.lineClicks ? "—" : pct(c.adds / c.mo.lineClicks)}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
      {(data.line?.issues ?? []).length > 0 && (
        <p className="text-[10px] text-stone-500 mt-1.5 leading-relaxed">
          LINEから月末の数字が取れなかった月:{(data.line?.issues ?? []).map((x) => `${monthLabel(x.month)}(${x.reason})`).join("、")}。
          今後はダッシュボードを開いた日の数字を毎日記録して(現在{data.line?.dailyCount ?? 0}日分)、取れない月末の代わりに使います。11月以降の月から埋まっていきます。
        </p>
      )}
    </div>
  )
}

/* ------------------------------ ステップ配信 ------------------------------ */
function LineStepTable({ data }: { data: ApiResult }) {
  const st = data.lineStep
  const rows = st?.rows ?? []
  const byDay = (d: string) => rows.find((r) => r.day === d)
  const days = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"]
  const other = rows.filter((r) => !days.includes(r.day)).reduce((n, r) => n + r.sessions, 0)
  return (
    <div>
      <p className="text-xs font-medium text-stone-600 mb-1">ステップ配信から来た人(7日間・2026年11月版)</p>
      <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">
        配信のリンクからサイトに来た数({st?.since?.slice(5).replace("-", "/") ?? "10/29"}以降の合計)。何日目で来なくなるか、どの回がよく読まれるかの目安です。
      </p>
      {!st?.ok ? (
        <p className="text-[12px] text-stone-400">取得できませんでした{st?.message ? `(${st.message})` : ""}</p>
      ) : (
        <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
          <table className="w-full text-[12px] text-stone-700 min-w-[420px]">
            <thead>
              <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                <th className="text-left font-normal px-3 py-2"></th>
                {days.map((d) => <th key={d} className="text-right font-normal px-2">{d.replace("day", "")}日目</th>)}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-50">
                <td className="px-3 py-2">来た人</td>
                {days.map((d) => <td key={d} className="text-right px-2">{fmt(byDay(d)?.users ?? 0)}</td>)}
              </tr>
              <tr>
                <td className="px-3 py-2">しっかり見た</td>
                {days.map((d) => { const r = byDay(d); return <td key={d} className="text-right px-2">{r && r.sessions ? pct(r.engagedSessions / r.sessions) : "—"}</td> })}
              </tr>
            </tbody>
          </table>
          {other > 0 && <p className="text-[10px] text-stone-400 px-3 pb-2">日目がわからない訪問 {fmt(other)}回</p>}
        </div>
      )}
    </div>
  )
}

/* ------------------------------ タイトル変更の効果 ------------------------------ */
/** 変更前の数字(変更前28日間の Search Console) */
const TITLE_BASELINE: Record<string, { label: string; impressions: number; clicks: number; days: number }> = {
  "/articles/self-value-unknown": { label: "自己価値とは？", impressions: 965, clicks: 42, days: 28 },
  "/articles/exhausted-by-being-nice": { label: "優しすぎる人ほど壊れる理由", impressions: 1682, clicks: 58, days: 28 },
}

function TitleTests({ data }: { data: ApiResult }) {
  const tt = data.titleTests
  return (
    <div>
      <p className="text-xs font-medium text-stone-600 mb-1">タイトル変更の効果</p>
      <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">
        変更前の28日間と、変更後の1日あたりの数字を比べます。検索の数字は3日ほど遅れて確定し、14日分たまるまでは判断しません。
      </p>
      {!tt?.ok ? (
        <p className="text-[12px] text-stone-400">取得できませんでした{tt?.message ? `(${tt.message})` : ""}</p>
      ) : (
        <div className="space-y-2">
          {(tt.rows ?? []).map((r) => {
            const hand = TITLE_BASELINE[r.path]
            // 変更前の数字:手で控えた値があればそれを、なければ自動で取った変更前28日間を使う
            const b = hand ?? (r.before ? { label: pageTitle(r.path), impressions: r.before.impressions, clicks: r.before.clicks, days: r.before.days } : null)
            if (!b || !b.impressions) return null
            const bi = b.impressions / b.days, bc = b.clicks / b.days, bctr = b.clicks / b.impressions
            const ai = r.days ? r.impressions / r.days : 0, ac = r.days ? r.clicks / r.days : 0, actr = r.impressions ? r.clicks / r.impressions : 0
            const diff = (a: number, base: number) => (base ? `${a >= base ? "+" : ""}${Math.round(((a - base) / base) * 100)}%` : "")
            return (
              <div key={r.path} className="bg-white rounded-xl border border-stone-200 p-3">
                <div className="flex justify-between gap-2 mb-2">
                  <a href={r.path} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium hover:underline" style={{ color: INK }}>{b.label}</a>
                  <span className="text-[10px] text-stone-400 flex-shrink-0">{r.days < 1 ? `${r.since.slice(5).replace("-", "/")}に変更・まだデータなし` : `${r.since.slice(5).replace("-", "/")}〜 ${r.days}日分${r.days < 14 ? "(判断はまだ早い)" : ""}`}</span>
                </div>
                {r.days >= 1 && (
                  <table className="w-full text-[11px] text-stone-600">
                    <thead><tr className="text-[10px] text-stone-400"><th className="text-left font-normal">1日あたり</th><th className="text-right font-normal">変更前</th><th className="text-right font-normal">変更後</th><th className="text-right font-normal">差</th></tr></thead>
                    <tbody>
                      <tr><td>表示回数</td><td className="text-right">{bi.toFixed(1)}</td><td className="text-right">{ai.toFixed(1)}</td><td className="text-right">{diff(ai, bi)}</td></tr>
                      <tr><td>クリック</td><td className="text-right">{bc.toFixed(2)}</td><td className="text-right">{ac.toFixed(2)}</td><td className="text-right">{diff(ac, bc)}</td></tr>
                      <tr><td>クリック率</td><td className="text-right">{pct(bctr)}</td><td className="text-right">{pct(actr)}</td><td className="text-right">{diff(actr, bctr)}</td></tr>
                      <tr><td>平均順位</td><td className="text-right">{!hand && r.before?.position ? r.before.position.toFixed(1) : "—"}</td><td className="text-right">{r.position ? r.position.toFixed(1) : "—"}</td><td></td></tr>
                    </tbody>
                  </table>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* ------------------------------ Googleで検索された言葉 ------------------------------ */
type QSort = "impressions" | "clicks" | "position" | "up"

function posStyle(p: number): { background: string; color: string } {
  if (p <= 3) return { background: "#7C9A8A", color: "#fff" }
  if (p <= 10) return { background: "#dbe6df", color: INK }
  if (p <= 20) return { background: "#f3ead9", color: INK }
  return { background: "#f0ebe3", color: "#8a8178" }
}

function GscQueries({ data, chip }: { data: ApiResult; chip: (active: boolean) => { background?: string; color: string; borderColor: string } }) {
  const [sort, setSort] = useState<QSort>("impressions")
  const [q, setQ] = useState("")
  const [band, setBand] = useState<"all" | "top10" | "near" | "far">("all")
  const [limit, setLimit] = useState(50)
  const g = data.gsc
  if (!g.ok) return <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">Search Console 未接続です。</p>
  const all = g.queries ?? []
  const ranked = new Map(all.map((x, i) => [x.q, i + 1])) // 表示回数の多い順の番号
  let list = all.filter((x) => !q || x.q.includes(q.trim()))
  if (band === "top10") list = list.filter((x) => x.position <= 10)
  if (band === "near") list = list.filter((x) => x.position > 10 && x.position <= 20)
  if (band === "far") list = list.filter((x) => x.position > 20)
  const delta = (x: GscQuery) => (x.prevPosition === null ? null : x.prevPosition - x.position) // プラス = 上がった
  list = [...list].sort((a, b) => {
    if (sort === "clicks") return b.clicks - a.clicks || b.impressions - a.impressions
    if (sort === "position") return a.position - b.position
    if (sort === "up") return (delta(b) ?? -999) - (delta(a) ?? -999)
    return b.impressions - a.impressions
  })
  const counts = {
    top10: all.filter((x) => x.position <= 10).length,
    near: all.filter((x) => x.position > 10 && x.position <= 20).length,
  }
  return (
    <div>
      <p className="text-xs font-medium text-stone-600 mb-1">Googleで検索された言葉と順位</p>
      <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">
        {g.startDate}〜{g.endDate}(2〜3日遅れ)。「表示」は、その言葉で検索されてこのサイトが結果に出た回数で、検索ボリュームの目安です
        (順位が低い言葉は、実際の検索数より少なく出ます)。順位は期間中の平均、▲▼は直前の同じ日数との比較です。
      </p>
      <div className="flex flex-wrap gap-1.5 mb-2 text-[11px]">
        {([["impressions", "表示の多い順"], ["clicks", "クリックの多い順"], ["position", "順位の高い順"], ["up", "順位が上がった順"]] as [QSort, string][]).map(([v, l]) => (
          <button key={v} onClick={() => setSort(v)} className="px-2.5 py-1 rounded-full border" style={chip(sort === v)}>{l}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2 text-[11px]">
        {([["all", `すべて(${all.length})`], ["top10", `1ページ目 1〜10位(${counts.top10})`], ["near", `あと少し 11〜20位(${counts.near})`], ["far", "21位以下"]] as ["all" | "top10" | "near" | "far", string][]).map(([v, l]) => (
          <button key={v} onClick={() => setBand(v)} className="px-2.5 py-1 rounded-full border" style={chip(band === v)}>{l}</button>
        ))}
      </div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="言葉で絞り込む(例:バーンアウト)"
        className="w-full mb-2 px-3 py-2 text-[12px] rounded-lg border border-stone-200 bg-white" />
      <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100">
        {list.length === 0 && <p className="px-3 py-3 text-[12px] text-stone-400">該当する言葉がありません</p>}
        {list.slice(0, limit).map((x) => {
          const d = delta(x)
          return (
            <div key={x.q} className="px-3 py-2 flex items-start gap-2.5">
              <span className="text-[10px] text-stone-400 w-6 text-right pt-1 flex-shrink-0 tabular-nums">{ranked.get(x.q)}</span>
              <span className="text-[11px] font-medium rounded-md px-1.5 py-0.5 flex-shrink-0 tabular-nums text-center min-w-[42px]" style={posStyle(x.position)}>
                {x.position.toFixed(1)}位
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] leading-snug" style={{ color: INK }}>
                  {x.q}
                  {d !== null && Math.abs(d) >= 1 && (
                    <span className="ml-1.5 text-[10px]" style={{ color: d > 0 ? "#4f7a63" : "#b0654a" }}>{d > 0 ? "▲" : "▼"}{Math.abs(d).toFixed(1)}</span>
                  )}
                  {x.prevPosition === null && <span className="ml-1.5 text-[10px] text-stone-400">新規</span>}
                </p>
                <p className="text-[10px] text-stone-400 truncate">
                  表示 {fmt(x.impressions)} ・ クリック {fmt(x.clicks)}{x.page ? ` ・ ${pageTitle(x.page)}` : ""}
                </p>
              </div>
            </div>
          )
        })}
        {list.length > limit && (
          <button type="button" onClick={() => setLimit(limit + 50)} className="w-full px-3 py-2 text-[11px] text-stone-500">もっと見る(残り{list.length - limit})</button>
        )}
      </div>
    </div>
  )
}

/* ------------------------------ 年間計画 ------------------------------ */
const PLAN_DEFAULT: Plan = {
  annualTarget: 4000000, unitPrice: 10000, sessionsPerClient: 6, sessionsPerMonth: 2,
  friendToClient: 0.05, clickToAdd: null, userToClick: null, capacity: null, launchMonth: null, expenseRate: 0.2, employmentIncome: 0,
}

/** 今のサイトの実績(直近の締まった月)から、転換率を出す */
function planActuals(data: ApiResult) {
  const ms = data.months
  const full = ms.length >= 2 ? ms[ms.length - 2] : ms[ms.length - 1]
  const prevYm = (ym: string) => { const y = +ym.slice(0, 4), m = +ym.slice(4); return m === 1 ? `${y - 1}12` : `${y}${String(m - 1).padStart(2, "0")}` }
  const curYm = ms[ms.length - 1]?.month
  const at = (ym: string) => (ym === curYm ? data.line?.latest ?? undefined : data.line?.monthEnds?.find((x) => x.month === ym))
  // 友だち追加 ÷ ボタンが押された回数(データのある月を合算)
  let adds = 0, clicks = 0
  for (const mo of ms.slice(0, -1)) {
    const a = at(mo.month), b = at(prevYm(mo.month))
    if (a && b) { adds += a.followers - b.followers; clicks += mo.lineClicks }
  }
  const lastAdds = full ? (() => { const a = at(full.month), b = at(prevYm(full.month)); return a && b ? a.followers - b.followers : null })() : null
  return {
    month: full?.month,
    users: full?.users ?? 0,
    lineClicks: full?.lineClicks ?? 0,
    adds: lastAdds,
    clickToAdd: clicks > 0 ? Math.min(1, adds / clicks) : null,
    userToClick: full && full.users ? full.lineClicks / full.users : null,
  }
}

/* 年間計画:1年目の月ごとの売上(棒)と、月の平均目標(点線) */
function PlanRevenueChart({ rows, target, label }: { rows: { i: number; revenue: number; sessions: number }[]; target: number; label: (i: number) => string }) {
  const [hover, setHover] = useState<number | null>(null)
  const W = 360, H = 180, L = 40, R = 8, T = 14, B = 26
  const monthly = target / 12
  const max = Math.max(monthly, ...rows.map((r) => r.revenue)) * 1.12
  const step = max > 600000 ? 200000 : max > 300000 ? 100000 : 50000
  const ticks = Array.from({ length: Math.floor(max / step) + 1 }, (_, k) => k * step)
  const y = (v: number) => T + (H - T - B) * (1 - v / max)
  const bw = (W - L - R) / rows.length
  const h = hover !== null ? rows[hover] : null
  return (
    <div className="relative">
      <div className="flex gap-4 text-[10px] text-stone-500 mb-1">
        <span className="inline-flex items-center gap-1"><span style={{ width: 10, height: 10, borderRadius: 2, background: SAGE, display: "inline-block" }} />月の売上の見込み</span>
        <span className="inline-flex items-center gap-1"><span style={{ width: 14, borderTop: `1.5px dashed ${INK}`, display: "inline-block" }} />月の平均目標 {Math.round(monthly / 10000)}万円</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="1年目の月ごとの売上の見込み">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#ece6dc" strokeWidth={1} />
            <text x={L - 4} y={y(t) + 3} textAnchor="end" fontSize={9} fill="#a8a29e">{t === 0 ? "0" : `${t / 10000}万`}</text>
          </g>
        ))}
        {rows.map((r, k) => {
          const x = L + k * bw + 1, w = bw - 2, top = y(r.revenue), base = y(0)
          const hh = Math.max(0, base - top), rr = Math.min(4, w / 2, hh)
          return (
            <g key={r.i} onMouseEnter={() => setHover(k)} onMouseLeave={() => setHover(null)} onClick={() => setHover(k)} style={{ cursor: "pointer" }}>
              <rect x={L + k * bw} y={T} width={bw} height={H - T - B} fill="transparent" />
              <path d={`M${x},${base} V${top + rr} Q${x},${top} ${x + rr},${top} H${x + w - rr} Q${x + w},${top} ${x + w},${top + rr} V${base} Z`}
                fill={SAGE} opacity={hover === null || hover === k ? 1 : 0.45} />
              {(k === 0 || (k + 1) % 3 === 0) && (
                <text x={x + w / 2} y={H - B + 13} textAnchor="middle" fontSize={9} fill="#a8a29e">{label(r.i).replace("か月目", "")}</text>
              )}
            </g>
          )
        })}
        <line x1={L} x2={W - R} y1={y(monthly)} y2={y(monthly)} stroke={INK} strokeWidth={1.2} strokeDasharray="4 3" />
        <line x1={L} x2={W - R} y1={y(0)} y2={y(0)} stroke="#d6d0c6" strokeWidth={1} />
      </svg>
      {h && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white border border-stone-200 rounded-lg shadow-sm px-2.5 py-1.5 text-[11px] pointer-events-none whitespace-nowrap" style={{ color: INK }}>
          <span className="text-stone-500">{label(h.i)}</span> 売上 {fmt(Math.round(h.revenue / 1000) * 1000)}円 ・ 面談 {Math.round(h.sessions)}回
        </div>
      )}
    </div>
  )
}

/* 年間計画:今の実績が、必要な数のどこまで来ているか */
function PlanGapBars({ items }: { items: { label: string; now: number | null; need: number; unit: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((it) => {
        const r = it.now === null ? null : Math.min(1, it.now / it.need)
        return (
          <div key={it.label}>
            <div className="flex justify-between gap-2 text-[12px] mb-1">
              <span style={{ color: INK }}>{it.label}</span>
              <span className="text-stone-500 flex-shrink-0">
                {it.now === null ? "実績なし" : `${fmt(it.now)} / ${fmt(Math.ceil(it.need))}${it.unit}`}
                {r !== null && <span className="ml-1.5 font-medium" style={{ color: INK }}>{(r * 100).toFixed(r < 0.1 ? 1 : 0)}%</span>}
              </span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: "#f0ebe3" }} role="img" aria-label={`${it.label} 達成 ${r === null ? "不明" : Math.round(r * 100) + "%"}`}>
              {r !== null && <div style={{ width: `${Math.max(1.5, r * 100)}%`, height: 8, borderRadius: 4, background: SAGE }} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* 年間計画:月ごとの実績が「毎月必要な数」の何%か(小さなグラフを3つ並べる) */
function PlanProgressMini({ title, series, need, unit }: { title: string; series: { month: string; value: number | null; partial: boolean }[]; need: number; unit: string }) {
  const [hover, setHover] = useState<number | null>(null)
  const W = 150, H = 92, L = 26, R = 4, T = 8, B = 16
  const ratios = series.map((x) => (x.value === null ? null : x.value / need))
  const mx = Math.max(0.01, ...ratios.map((r) => r ?? 0)) * 1.2
  const stepPct = mx > 0.5 ? 0.25 : mx > 0.2 ? 0.1 : mx > 0.1 ? 0.05 : mx > 0.04 ? 0.02 : 0.01
  const ticks = Array.from({ length: Math.floor(mx / stepPct) + 1 }, (_, k) => k * stepPct)
  const y = (v: number) => T + (H - T - B) * (1 - v / mx)
  const bw = (W - L - R) / series.length
  const h = hover !== null ? series[hover] : null
  return (
    <div className="relative">
      <p className="text-[11px] mb-0.5" style={{ color: INK }}>{title}</p>
      <p className="text-[10px] text-stone-400 mb-1 h-4">
        {h ? `${monthLabel(h.month)}${h.partial ? "(途中)" : ""}:${h.value === null ? "—" : `${fmt(h.value)}${unit}(${pct(h.value / need)})`}` : `必要 ${fmt(Math.ceil(need))}${unit}/月`}
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`${title}の、必要な数に対する割合の推移`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#ece6dc" strokeWidth={1} />
            <text x={L - 3} y={y(t) + 3} textAnchor="end" fontSize={8} fill="#a8a29e">{Math.round(t * 100)}%</text>
          </g>
        ))}
        {series.map((x, k) => {
          const r = ratios[k]
          const bx = L + k * bw + 2, w = bw - 4, base = y(0)
          const top = r === null ? base : y(r), hh = base - top, rr = Math.min(3, w / 2, hh)
          return (
            <g key={x.month} onMouseEnter={() => setHover(k)} onMouseLeave={() => setHover(null)} onClick={() => setHover(k)} style={{ cursor: "pointer" }}>
              <rect x={L + k * bw} y={T} width={bw} height={H - T - B} fill="transparent" />
              {r !== null && hh > 0 && (
                <path d={`M${bx},${base} V${top + rr} Q${bx},${top} ${bx + rr},${top} H${bx + w - rr} Q${bx + w},${top} ${bx + w},${top + rr} V${base} Z`}
                  fill={SAGE} opacity={x.partial ? 0.4 : hover === null || hover === k ? 1 : 0.6} />
              )}
              <text x={bx + w / 2} y={H - 4} textAnchor="middle" fontSize={8} fill="#a8a29e">{Number(x.month.slice(4))}月</text>
            </g>
          )
        })}
        <line x1={L} x2={W - R} y1={y(0)} y2={y(0)} stroke="#d6d0c6" strokeWidth={1} />
      </svg>
    </div>
  )
}

/** 直近の締まった月どうしの伸び率(月あたり)から、必要な数に届く月数を見込む */
function monthsToReach(values: number[], need: number): { growth: number; months: number } | null {
  const v = values.filter((x) => x > 0)
  if (v.length < 2) return null
  const first = v[0], last = v[v.length - 1], n = v.length - 1
  const growth = Math.pow(last / first, 1 / n) - 1
  if (last >= need) return { growth, months: 0 }
  if (growth <= 0) return { growth, months: Infinity }
  return { growth, months: Math.log(need / last) / Math.log(1 + growth) }
}

/* ------------------------------ 再開までの道のり(2027年12月再開の月ごとの目標) ------------------------------ */
/** 2026-10-30 に決めた計画。数字を変えるときはここを直す(実績はダッシュボードが自動で入れる) */
const ROADMAP_GOAL = "2027年12月に受付を再開(2027年11月末までに開業判断の基準をそろえる)"
const ROADMAP: { ym: string; users: number; clicks: number; addRate: number; net: number; reach: number }[] = [
  { ym: "202611", users: 1450, clicks: 16, addRate: 0.42, net: 4, reach: 21 },
  { ym: "202612", users: 1500, clicks: 18, addRate: 0.45, net: 5, reach: 26 },
  { ym: "202701", users: 1520, clicks: 19, addRate: 0.46, net: 6, reach: 32 },
  { ym: "202702", users: 1550, clicks: 21, addRate: 0.48, net: 6, reach: 38 },
  { ym: "202703", users: 1600, clicks: 22, addRate: 0.5, net: 7, reach: 45 },
  { ym: "202704", users: 1620, clicks: 24, addRate: 0.5, net: 8, reach: 53 },
  { ym: "202705", users: 1650, clicks: 25, addRate: 0.5, net: 8, reach: 61 },
  { ym: "202706", users: 1700, clicks: 27, addRate: 0.5, net: 9, reach: 70 },
  { ym: "202707", users: 1720, clicks: 28, addRate: 0.5, net: 10, reach: 80 },
  { ym: "202708", users: 1750, clicks: 30, addRate: 0.5, net: 10, reach: 90 },
  { ym: "202709", users: 1800, clicks: 32, addRate: 0.5, net: 11, reach: 101 },
  { ym: "202710", users: 1800, clicks: 34, addRate: 0.5, net: 12, reach: 113 },
  { ym: "202711", users: 1800, clicks: 35, addRate: 0.5, net: 12, reach: 125 },
]
const ROADMAP_CHECKPOINTS: Record<string, string> = {
  "202612": "ボタン→友だち追加が45%に届いているか。届いていなければ、登録までの流れを見直す",
  "202703": "リーチの純増が月+7人を超えているか。下回っていれば、Instagramを始める時期を相談する",
  "202707": "リーチ累計80人(開業判断4)に届いているか",
  "202711": "開業判断1・2・3・4・5・8がそろっているか → 12月に再開",
}

function prevYmOf(ym: string) { const y = +ym.slice(0, 4), m = +ym.slice(4); return m === 1 ? `${y - 1}12` : `${y}${String(m - 1).padStart(2, "0")}` }

function Roadmap({ data }: { data: ApiResult }) {
  const [hover, setHover] = useState<number | null>(null)
  const rec = data.monthlyRecord ?? {}
  const curYm = data.months[data.months.length - 1]?.month ?? ""
  // 実績:GA4/LINE の今の数字を優先し、なければ保存した月ごとの記録
  const actual = (ym: string) => {
    const mo = data.months.find((m) => m.month === ym)
    const r = rec[ym]
    const end = ym === curYm ? data.line?.latest ?? undefined : data.line?.monthEnds?.find((x) => x.month === ym)
    const prevEnd = data.line?.monthEnds?.find((x) => x.month === prevYmOf(ym))
    const reach = end?.targetedReaches ?? r?.reach ?? null
    const prevReach = prevEnd?.targetedReaches ?? rec[prevYmOf(ym)]?.reach ?? null
    const followers = end?.followers ?? r?.followers ?? null
    const prevFollowers = prevEnd?.followers ?? rec[prevYmOf(ym)]?.followers ?? null
    const users = mo?.users ?? r?.users ?? null
    const clicks = mo?.lineClicks ?? r?.lineClicks ?? null
    const adds = followers !== null && prevFollowers !== null ? followers - prevFollowers : null
    return {
      users, clicks, reach,
      net: reach !== null && prevReach !== null ? reach - prevReach : null,
      addRate: adds !== null && clicks ? Math.min(1, adds / clicks) : null,
    }
  }
  const rows = ROADMAP.map((p) => ({ p, a: p.ym > curYm ? null : actual(p.ym), partial: p.ym === curYm, future: p.ym > curYm }))
  // 今の進み具合:最新の(締まった or 途中の)月のリーチ累計を、その月の予定と比べる
  const latestRow = [...rows].reverse().find((r) => r.a && r.a.reach !== null)
  const startReach = data.line?.monthEnds?.find((x) => x.month === "202610")?.targetedReaches ?? rec["202610"]?.reach ?? 17
  const status = (() => {
    if (!latestRow || !latestRow.a || latestRow.a.reach === null) return { text: "11月の実績が入ると、進み具合が出ます", color: "#78716c" }
    const plan = latestRow.p.reach, act = latestRow.a.reach
    const gained = act - startReach, planned = plan - startReach
    const r = planned > 0 ? gained / planned : 1
    if (act >= plan) return { text: `予定どおり、または前倒しです(${monthLabel(latestRow.p.ym)} 予定${plan}人 → 実績${act}人)`, color: "#4f7a63" }
    if (r >= 0.8) return { text: `少し遅れています(${monthLabel(latestRow.p.ym)} 予定${plan}人 → 実績${act}人)`, color: "#b45309" }
    return { text: `遅れています(${monthLabel(latestRow.p.ym)} 予定${plan}人 → 実績${act}人)。このままだと再開が後ろにずれます`, color: "#b0654a" }
  })()

  // グラフ:リーチ累計の予定(点線)と実績(線)
  const W = 360, H = 170, L = 30, R = 8, T = 10, B = 24
  const xs = ["202610", ...ROADMAP.map((p) => p.ym)]
  const planPts = [startReach, ...ROADMAP.map((p) => p.reach)]
  const actPts = xs.map((ym, i) => (i === 0 ? startReach : ym > curYm ? null : actual(ym).reach))
  const max = Math.max(...planPts, ...actPts.filter((v): v is number => v !== null)) * 1.1
  const x = (i: number) => L + (W - L - R) * (i / (xs.length - 1))
  const y = (v: number) => T + (H - T - B) * (1 - v / max)
  const ticks = [0, 40, 80, 120].filter((t) => t <= max)
  const actLine = actPts.map((v, i) => (v === null ? null : `${x(i)},${y(v)}`)).filter(Boolean).join(" ")
  const cell = (plan: string, act: string | null, ok: boolean | null, partial: boolean) => (
    <>
      <span className="text-stone-400">{plan}</span>
      <span className="mx-0.5 text-stone-300">/</span>
      <span style={{ color: act === null ? "#d6d3d1" : ok === null || partial ? INK : ok ? "#4f7a63" : "#b0654a", fontWeight: act === null ? 400 : 600 }}>{act ?? "—"}</span>
    </>
  )

  return (
    <div>
      <p className="text-xs font-medium text-stone-600 mb-1">再開までの道のり</p>
      <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">目標:{ROADMAP_GOAL}。足りない年収は雇用で補う前提です。</p>
      <div className="bg-white rounded-xl border border-stone-200 p-3 space-y-3">
        <p className="text-[12px] font-medium leading-relaxed" style={{ color: status.color }}>{status.text}</p>

        <div>
          <div className="flex gap-4 text-[10px] text-stone-500 mb-1">
            <span className="inline-flex items-center gap-1"><span style={{ width: 14, borderTop: `1.5px dashed ${INK}`, display: "inline-block" }} />リーチ累計の予定</span>
            <span className="inline-flex items-center gap-1"><span style={{ width: 14, height: 2, background: SAGE, display: "inline-block" }} />実績</span>
          </div>
          <div className="relative">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="LINEリーチ累計の予定と実績">
              {ticks.map((t) => (
                <g key={t}>
                  <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#ece6dc" />
                  <text x={L - 4} y={y(t) + 3} textAnchor="end" fontSize={9} fill="#a8a29e">{t}</text>
                </g>
              ))}
              <line x1={L} x2={W - R} y1={y(80)} y2={y(80)} stroke="#c2410c" strokeOpacity={0.35} strokeDasharray="2 3" />
              <text x={L + 2} y={y(80) - 3} fontSize={8} fill="#c2410c" fillOpacity={0.7}>開業判断の基準 80人</text>
              <polyline points={planPts.map((v, i) => `${x(i)},${y(v)}`).join(" ")} fill="none" stroke={INK} strokeWidth={1.2} strokeDasharray="4 3" />
              {actLine && <polyline points={actLine} fill="none" stroke={SAGE} strokeWidth={2} strokeLinejoin="round" />}
              {actPts.map((v, i) => v === null ? null : <circle key={i} cx={x(i)} cy={y(v)} r={4} fill={SAGE} stroke="#fff" strokeWidth={2} />)}
              {xs.map((ym, i) => (
                <g key={ym}>
                  {((i % 3 === 0 && i < xs.length - 2) || i === xs.length - 1) && <text x={x(i)} y={H - 6} textAnchor={i === xs.length - 1 ? "end" : "middle"} fontSize={9} fill="#a8a29e">{`${ym.slice(2, 4)}/${Number(ym.slice(4))}`}</text>}
                  <rect x={x(i) - 12} y={T} width={24} height={H - T - B} fill="transparent" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onClick={() => setHover(i)} />
                </g>
              ))}
            </svg>
            {hover !== null && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white border border-stone-200 rounded-lg shadow-sm px-2.5 py-1.5 text-[11px] pointer-events-none whitespace-nowrap" style={{ color: INK }}>
                {monthLabel(xs[hover])} 予定 {planPts[hover]}人 ・ 実績 {actPts[hover] ?? "—"}{actPts[hover] !== null ? "人" : ""}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto -mx-3 px-3">
          <table className="w-full text-[11px] text-stone-700 min-w-[460px]">
            <thead>
              <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                <th className="text-left font-normal py-1.5">月</th>
                <th className="text-right font-normal px-1">リーチ累計</th>
                <th className="text-right font-normal px-1">リーチ純増</th>
                <th className="text-right font-normal px-1">LINEボタン</th>
                <th className="text-right font-normal px-1">ボタン→追加</th>
                <th className="text-right font-normal pl-1">ユーザー</th>
              </tr>
              <tr className="text-[9px] text-stone-400"><td colSpan={6} className="pb-1">予定 / 実績(緑は予定以上、赤は予定未満)</td></tr>
            </thead>
            <tbody>
              {rows.map(({ p, a, partial, future }) => (
                <tr key={p.ym} className="border-b border-stone-50 last:border-0" style={partial ? { background: "rgba(124,154,138,0.06)" } : undefined}>
                  <td className="py-1.5 whitespace-nowrap">{`${p.ym.slice(2, 4)}年${Number(p.ym.slice(4))}月`}{partial && <span className="text-[9px] text-stone-400">(途中)</span>}</td>
                  <td className="text-right px-1 whitespace-nowrap">{cell(String(p.reach), a?.reach != null ? String(a.reach) : null, a?.reach != null ? a.reach >= p.reach : null, partial)}</td>
                  <td className="text-right px-1 whitespace-nowrap">{cell(`+${p.net}`, a?.net != null ? `${a.net >= 0 ? "+" : ""}${a.net}` : null, a?.net != null ? a.net >= p.net : null, partial)}</td>
                  <td className="text-right px-1 whitespace-nowrap">{cell(String(p.clicks), a?.clicks != null ? String(a.clicks) : null, a?.clicks != null ? a.clicks >= p.clicks : null, partial)}</td>
                  <td className="text-right px-1 whitespace-nowrap">{cell(pct(p.addRate).replace(".0", ""), a?.addRate != null ? pct(a.addRate).replace(".0", "") : null, a?.addRate != null ? a.addRate >= p.addRate : null, partial)}</td>
                  <td className="text-right pl-1 whitespace-nowrap">{cell(fmt(p.users), a?.users != null ? fmt(a.users) : null, a?.users != null ? a.users >= p.users : null, partial)}</td>
                </tr>
              ))}
              {rows.length > 0 && rows.every((r) => r.future) && (
                <tr><td colSpan={6} className="py-2 text-[10px] text-stone-400">11月から実績が入ります。</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div>
          <p className="text-[11px] font-medium text-stone-600 mb-1">途中の確認ポイント</p>
          <div className="space-y-1">
            {Object.entries(ROADMAP_CHECKPOINTS).map(([ym, t]) => (
              <p key={ym} className="text-[11px] leading-relaxed" style={{ color: ym <= curYm ? INK : "#78716c" }}>
                <span className="inline-block w-[52px] text-stone-400">{`${ym.slice(2, 4)}年${Number(ym.slice(4))}月`}</span>{t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PlanPanel({ data, adminKey, onSaved }: { data: ApiResult; adminKey: string; onSaved: (m: Manual) => void }) {
  const saved = data.manual?.data?.plan
  const [p, setP] = useState<Plan>({ ...PLAN_DEFAULT, ...(saved ?? {}) })
  const [status, setStatus] = useState("")
  const act = planActuals(data)

  const clickToAdd = p.clickToAdd ?? act.clickToAdd ?? 0.4
  const userToClick = p.userToClick ?? act.userToClick ?? 0.01
  const D = p.sessionsPerClient / p.sessionsPerMonth // 1人が通う月数
  const ramp = Array.from({ length: 12 }, (_, i) => Math.min(i + 1, D)) // 各月の「継続中の人数 ÷ 毎月の新規」
  const sessionsYear = p.annualTarget / p.unitPrice
  const N = sessionsYear / (p.sessionsPerMonth * ramp.reduce((a, b) => a + b, 0)) // 毎月必要な新規の相談者
  const friends = N / p.friendToClient
  const clicks = friends / clickToAdd
  const users = clicks / userToClick
  const steadySessions = N * p.sessionsPerClient
  const rows = ramp.map((r, i) => {
    const active = N * r, sessions = active * p.sessionsPerMonth
    return { i, active, sessions, revenue: sessions * p.unitPrice }
  })
  let cum = 0
  const monthName = (i: number) => {
    if (!p.launchMonth) return `${i + 1}か月目`
    const [y, m] = p.launchMonth.split("-").map(Number)
    const d = new Date(y, m - 1 + i, 1)
    return `${d.getFullYear() % 100}年${d.getMonth() + 1}月`
  }
  const peak = Math.max(...rows.map((r) => r.sessions))
  const over = p.capacity !== null && peak > p.capacity
  const times = (need: number, now: number) => (now > 0 ? `${(need / now).toFixed(need / now >= 10 ? 0 : 1)}倍` : "—")

  const set = (k: keyof Plan, v: string, scale = 1) => {
    const x = v === "" ? null : Number(v) / scale
    setP((d) => ({ ...d, [k]: x === null || Number.isNaN(x) ? (k in PLAN_DEFAULT && PLAN_DEFAULT[k] === null ? null : d[k]) : x }))
  }
  const save = async () => {
    setStatus("保存中…")
    try {
      const r = await fetch("/api/ops-dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ plan: p }),
      })
      const b = await r.json()
      if (!r.ok || !b.ok) throw new Error(b.message ?? "保存に失敗しました")
      onSaved(b.data as Manual)
      setStatus("保存しました")
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "保存に失敗しました")
    }
  }

  const field = (label: string, k: keyof Plan, opts: { unit?: string; scale?: number; step?: string; hint?: string; placeholder?: string; type?: string } = {}) => {
    const v = p[k]
    const shown = v === null || v === undefined ? "" : opts.scale ? +(Number(v) * opts.scale).toFixed(2) : v
    return (
      <label className="block">
        <span className="text-[11px] text-stone-600">{label}</span>
        <span className="flex items-center gap-1.5 mt-0.5">
          <input
            type={opts.type ?? "number"} step={opts.step ?? "any"} inputMode="decimal"
            value={shown as string | number} placeholder={opts.placeholder}
            onChange={(e) => opts.type === "month" ? setP((d) => ({ ...d, launchMonth: e.target.value || null })) : set(k, e.target.value, opts.scale ?? 1)}
            className="w-full px-2.5 py-1.5 text-[13px] rounded-lg border border-stone-200 bg-white"
          />
          {opts.unit && <span className="text-[11px] text-stone-500 flex-shrink-0">{opts.unit}</span>}
        </span>
        {opts.hint && <span className="text-[10px] text-stone-400 leading-snug block mt-0.5">{opts.hint}</span>}
      </label>
    )
  }

  return (
    <div className="space-y-5">
      <Roadmap data={data} />

      {/* 結論 */}
      <div className="bg-white rounded-xl border border-stone-200 p-4">
        <p className="text-[11px] text-stone-500">年間売上 {fmt(p.annualTarget)}円 を1年目で出すには、毎月これだけ必要です</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
          {[
            ["新規の相談者", `${N.toFixed(1)}人`, null],
            ["LINE友だち追加", `${Math.ceil(friends)}人`, act.adds],
            ["LINEボタンが押される", `${Math.ceil(clicks)}回`, act.lineClicks],
            ["サイトのユーザー", `${fmt(Math.ceil(users))}人`, act.users],
          ].map(([t, v, now]) => (
            <div key={t as string} className="rounded-lg p-2.5" style={{ background: "#f7f3ea" }}>
              <p className="text-[10px] text-stone-500">{t}</p>
              <p className="text-[17px] font-medium" style={{ color: INK }}>{v}</p>
              <p className="text-[10px] text-stone-400">
                {now === null ? "今の実績:—" : `今 ${fmt(now as number)} → ${times(Number(String(v).replace(/[^\d.]/g, "")), now as number)}`}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-stone-600 mt-2">
          経費({pct(p.expenseRate ?? 0.2)})を引いた手元のもうけ:年 約{fmt(Math.round(p.annualTarget * (1 - (p.expenseRate ?? 0.2)) / 10000))}万円
          {(p.employmentIncome ?? 0) > 0 && <>　＋ 雇用の年収 {fmt(Math.round((p.employmentIncome ?? 0) / 10000))}万円 ＝ <strong>合計 約{fmt(Math.round((p.annualTarget * (1 - (p.expenseRate ?? 0.2)) + (p.employmentIncome ?? 0)) / 10000))}万円</strong></>}
        </p>
        <p className="text-[10px] text-stone-400 mt-1 leading-relaxed">
          「今」は {act.month ? monthLabel(act.month) : "直近の月"} の実績。1年目は相談者が少しずつ積み上がるので、2年目以降の毎月の面談は約{Math.round(steadySessions)}回({fmt(Math.round(steadySessions * p.unitPrice))}円/月)になります。
        </p>
        {over && (
          <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-2">
            面談が多い月で約{Math.round(peak)}回になり、上限の月{p.capacity}回を超えます。単価を上げるか、目標を下げる必要があります。
          </p>
        )}
      </div>

      {/* 今どこまで来ているか */}
      <div>
        <p className="text-xs font-medium text-stone-600 mb-1">今どこまで来ているか</p>
        <p className="text-[10px] text-stone-400 mb-2">{act.month ? monthLabel(act.month) : "直近の月"}の実績 ÷ 毎月必要な数。</p>
        <div className="bg-white rounded-xl border border-stone-200 p-3">
          <PlanGapBars items={[
            { label: "サイトのユーザー", now: act.users, need: users, unit: "人" },
            { label: "LINEボタンが押される", now: act.lineClicks, need: clicks, unit: "回" },
            { label: "LINE友だち追加", now: act.adds, need: friends, unit: "人" },
            { label: "新規の相談者", now: null, need: N, unit: "人" },
          ]} />
        </div>
      </div>

      {/* 現在比の推移 */}
      {(() => {
        const ms = data.months.slice(-4)
        const curYm = data.months[data.months.length - 1]?.month
        const prevYm = (ym: string) => { const yy = +ym.slice(0, 4), mm = +ym.slice(4); return mm === 1 ? `${yy - 1}12` : `${yy}${String(mm - 1).padStart(2, "0")}` }
        const at = (ym: string) => (ym === curYm ? data.line?.latest ?? undefined : data.line?.monthEnds?.find((x) => x.month === ym))
        const addsOf = (ym: string) => { const a = at(ym), b = at(prevYm(ym)); return a && b ? a.followers - b.followers : null }
        const ser = (f: (m: Month) => number | null) => ms.map((m) => ({ month: m.month, value: f(m), partial: m.month === curYm }))
        const usersSer = ser((m) => m.users), clicksSer = ser((m) => m.lineClicks), addsSer = ser((m) => addsOf(m.month))
        const full = (xs: { value: number | null; partial: boolean }[]) => xs.filter((x) => !x.partial && x.value !== null).map((x) => x.value as number)
        const reach = monthsToReach(full(usersSer).slice(-3), users)
        const reachText = (() => {
          if (!reach) return null
          if (reach.months === 0) return "すでに届いています"
          if (!Number.isFinite(reach.months)) return "今の伸び方では届きません"
          const mm = Math.ceil(reach.months)
          const d = new Date(); d.setMonth(d.getMonth() + mm)
          return `約${mm}か月後(${d.getFullYear()}年${d.getMonth() + 1}月ごろ)`
        })()
        return (
          <div>
            <p className="text-xs font-medium text-stone-600 mb-1">現在比の推移(毎月必要な数の何%まで来たか)</p>
            <p className="text-[10px] text-stone-400 mb-2">薄い棒は今月(途中)。棒を押すと実数が出ます。開業判断の目標とは別に、売上目標から逆算した「必要な数」と比べています。</p>
            <div className="bg-white rounded-xl border border-stone-200 p-3">
              <div className="grid grid-cols-3 gap-2">
                <PlanProgressMini title="サイトのユーザー" series={usersSer} need={users} unit="人" />
                <PlanProgressMini title="LINEボタン" series={clicksSer} need={clicks} unit="回" />
                <PlanProgressMini title="LINE友だち追加" series={addsSer} need={friends} unit="人" />
              </div>
              {reach && reachText && (
                <p className="text-[11px] text-stone-600 mt-3 leading-relaxed">
                  サイトのユーザーは直近、月{(reach.growth * 100).toFixed(0)}%ずつ伸びています。このペースが続くと、必要な{fmt(Math.ceil(users))}人に届くのは<strong>{reachText}</strong>。
                  <span className="text-[10px] text-stone-400 block mt-0.5">検索流入の伸びはいずれ鈍るので、楽観的な見込みです。</span>
                </p>
              )}
            </div>
          </div>
        )
      })()}

      {/* 何を動かすと楽になるか */}
      <div>
        <p className="text-xs font-medium text-stone-600 mb-1">どの数字を良くすると、必要なユーザーが減るか</p>
        <p className="text-[10px] text-stone-400 mb-2">それぞれ1つだけ良くした場合の、毎月必要なサイトのユーザー数。</p>
        <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100 text-[12px]">
          {[
            ["今の前提のまま", users],
            [`ユーザー→LINEボタン ${pct(userToClick)} → ${pct(userToClick * 2)}`, users / 2],
            [`ボタン→友だち追加 ${pct(clickToAdd)} → ${pct(Math.min(1, clickToAdd * 1.5))}`, users / (Math.min(1, clickToAdd * 1.5) / clickToAdd)],
            [`友だち→相談 ${pct(p.friendToClient)} → ${pct(p.friendToClient * 2)}`, users / 2],
            [`1人あたりの回数 ${p.sessionsPerClient}回 → ${p.sessionsPerClient + 2}回`, (() => {
              const D2 = (p.sessionsPerClient + 2) / p.sessionsPerMonth
              const N2 = sessionsYear / (p.sessionsPerMonth * Array.from({ length: 12 }, (_, i) => Math.min(i + 1, D2)).reduce((a, b) => a + b, 0))
              return N2 / p.friendToClient / clickToAdd / userToClick
            })()],
          ].map(([l, v]) => (
            <div key={l as string} className="px-3 py-2 flex justify-between gap-3">
              <span className="text-stone-700">{l}</span>
              <span className="text-stone-500 flex-shrink-0">{fmt(Math.ceil(v as number))}人/月</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-stone-400 mt-1.5 leading-relaxed">
          サイトの検索流入だけでは届かない差は、Instagram・広告など別の入口からのLINE登録で埋めることになります(その分は「LINE友だち追加」の数で見ます)。
        </p>
      </div>

      {/* 月ごとの推移 */}
      <div>
        <p className="text-xs font-medium text-stone-600 mb-1">1年目の月ごとの推移(目安)</p>
        <p className="text-[10px] text-stone-400 mb-2">毎月 {N.toFixed(1)}人ずつ新しい相談者が来て、1人が約{D.toFixed(1)}か月通う前提。棒を押すと金額が出ます。</p>
        <div className="bg-white rounded-xl border border-stone-200 p-3 mb-2">
          <PlanRevenueChart rows={rows} target={p.annualTarget} label={monthName} />
        </div>
        <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
          <table className="w-full text-[12px] text-stone-700 min-w-[420px]">
            <thead>
              <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                <th className="text-left font-normal px-3 py-2">月</th>
                <th className="text-right font-normal px-2">通っている人</th>
                <th className="text-right font-normal px-2">面談</th>
                <th className="text-right font-normal px-2">売上</th>
                <th className="text-right font-normal px-3">累計</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                cum += r.revenue
                return (
                  <tr key={r.i} className="border-b border-stone-50 last:border-0">
                    <td className="px-3 py-1.5">{monthName(r.i)}</td>
                    <td className="text-right px-2">{r.active.toFixed(1)}人</td>
                    <td className="text-right px-2" style={{ color: p.capacity !== null && r.sessions > p.capacity ? "#b0654a" : undefined }}>{Math.round(r.sessions)}回</td>
                    <td className="text-right px-2">{fmt(Math.round(r.revenue / 1000) * 1000)}円</td>
                    <td className="text-right px-3">{fmt(Math.round(cum / 1000) * 1000)}円</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 段階目標 */}
      <div>
        <p className="text-xs font-medium text-stone-600 mb-1">段階目標(月の面談件数ごと)</p>
        <p className="text-[10px] text-stone-400 mb-2">事業計画のシートと同じ考え方。その件数を1年続けた場合の数字です。</p>
        <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
          <table className="w-full text-[12px] text-stone-700 min-w-[380px]">
            <thead>
              <tr className="text-[10px] text-stone-500 border-b border-stone-100">
                <th className="text-left font-normal px-3 py-2">月の件数</th>
                <th className="text-right font-normal px-2">年間売上</th>
                <th className="text-right font-normal px-2">手元のもうけ</th>
                <th className="text-right font-normal px-3">通っている人</th>
              </tr>
            </thead>
            <tbody>
              {[5, 10, 20, 30, 40].map((n) => {
                const rev = n * p.unitPrice * 12
                const hit = rev >= p.annualTarget
                return (
                  <tr key={n} className="border-b border-stone-50 last:border-0" style={hit ? { background: "rgba(124,154,138,0.08)" } : undefined}>
                    <td className="px-3 py-1.5">{n}件{p.capacity !== null && n > p.capacity && <span className="text-[10px] text-[#b0654a]">(上限超え)</span>}</td>
                    <td className="text-right px-2">{fmt(Math.round(rev / 10000))}万円{hit && <span className="text-[10px] text-stone-400">(目標以上)</span>}</td>
                    <td className="text-right px-2">{fmt(Math.round((rev * (1 - (p.expenseRate ?? 0.2))) / 10000))}万円</td>
                    <td className="text-right px-3">約{Math.ceil(n / p.sessionsPerMonth)}人</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 前提 */}
      <div>
        <p className="text-xs font-medium text-stone-600 mb-1">前提(変えると上の数字がすぐ変わります)</p>
        <p className="text-[10px] text-stone-400 mb-2 leading-relaxed">
          「仮」の数字は、開業後の実績が出たら置き換えてください。空欄の項目は、今のサイトの実績を使います。
        </p>
        <div className="bg-white rounded-xl border border-stone-200 p-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {field("年間の売上目標", "annualTarget", { unit: "円", step: "100000" })}
          {field("面談1回あたりの平均単価", "unitPrice", { unit: "円", step: "500", hint: "仮:30分8,000円と60分12,000円の中間。メールカウンセリングも含めた平均で考える" })}
          {field("1人あたりの平均の面談回数", "sessionsPerClient", { unit: "回", step: "1", hint: "仮:初回から終わるまでの合計" })}
          {field("1人あたりの月の面談回数", "sessionsPerMonth", { unit: "回/月", step: "0.5", hint: "仮:隔週なら2" })}
          {field("LINE友だちが相談に申し込む割合", "friendToClient", { unit: "%", scale: 100, step: "0.5", hint: "仮:新しく友だちになった人のうち、いずれ申し込む人の割合" })}
          {field("LINEボタン→友だち追加の割合", "clickToAdd", { unit: "%", scale: 100, step: "1", placeholder: act.clickToAdd !== null ? `実績 ${(act.clickToAdd * 100).toFixed(0)}` : "実績なし(40で計算)", hint: "空欄なら実績(LINEの友だち増加÷ボタンが押された回数)" })}
          {field("サイトのユーザー→LINEボタンの割合", "userToClick", { unit: "%", scale: 100, step: "0.1", placeholder: act.userToClick !== null ? `実績 ${(act.userToClick * 100).toFixed(2)}` : "実績なし(1で計算)", hint: "空欄なら直近の月の実績" })}
          {field("雇用の年収(額面)", "employmentIncome", { unit: "円", step: "100000", hint: "開業しても足りない分を雇用で補う場合に入れると、合計の年収が出ます" })}
          {field("経費率", "expenseRate", { unit: "%", scale: 100, step: "1", hint: "事業計画のシートと同じ20%を初期値に" })}
          {field("月に受けられる面談の上限", "capacity", { unit: "回", step: "1", placeholder: "未設定", hint: "決まったら入れると、超える月に印がつきます" })}
          {field("開業(再開)した月", "launchMonth", { type: "month", hint: "決まるまでは「1か月目」で表示" })}
        </div>
        <div className="flex items-center gap-3 mt-2">
          <button type="button" onClick={save} className="px-4 py-2 rounded-lg text-[12px] font-medium" style={{ background: INK, color: "#fff" }}>前提を保存</button>
          <button type="button" onClick={() => setP({ ...PLAN_DEFAULT })} className="text-[11px] text-stone-500 underline">はじめの値に戻す</button>
          <span className="text-[11px] text-stone-500">{status}</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ ご意見 ------------------------------ */
type FeedbackItem = { id: string; at: string; category: string; text: string; page: string; device: string; done: boolean }
const FB_CATEGORY: Record<string, string> = { display: "表示がおかしい", link: "リンクが開かない", content: "内容の誤り", other: "その他" }
const FB_DEVICE: Record<string, string> = { mobile: "スマホ", tablet: "タブレット", desktop: "パソコン", unknown: "不明" }

function FeedbackPanel({ adminKey, onOpenCount }: { adminKey: string; onOpenCount?: (n: number) => void }) {
  const [items, setItems] = useState<FeedbackItem[] | null>(null)
  const [err, setErr] = useState("")
  const [showDone, setShowDone] = useState(false)

  useEffect(() => {
    let alive = true
    fetch("/api/ops-dashboard?view=feedback", { headers: { "x-admin-key": adminKey } })
      .then((r) => r.json())
      .then((b) => { if (!alive) return; if (!b.ok) throw new Error(b.message ?? "取得に失敗しました"); setItems(b.items as FeedbackItem[]) })
      .catch((e) => { if (alive) setErr(e instanceof Error ? e.message : "取得に失敗しました") })
    return () => { alive = false }
  }, [adminKey])

  const toggle = async (it: FeedbackItem) => {
    setItems((xs) => xs?.map((x) => (x.id === it.id ? { ...x, done: !x.done } : x)) ?? null)
    try {
      await fetch("/api/ops-dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ feedbackDone: it.id, done: !it.done }),
      })
    } catch {
      setItems((xs) => xs?.map((x) => (x.id === it.id ? { ...x, done: it.done } : x)) ?? null)
    }
  }

  // 対応済みに切り替えたら、タブの数字もすぐ合わせる
  useEffect(() => { if (items) onOpenCount?.(items.filter((x) => !x.done).length) }, [items, onOpenCount])

  if (err) return <p className="text-sm text-red-600">{err}</p>
  if (!items) return <p className="text-sm text-stone-500">読み込み中…</p>
  const open = items.filter((x) => !x.done)
  const list = showDone ? items : open
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-stone-600">未対応 {open.length}件 ／ 全{items.length}件</p>
        <label className="text-[11px] text-stone-500 flex items-center gap-1.5">
          <input type="checkbox" checked={showDone} onChange={(e) => setShowDone(e.target.checked)} />対応済みも表示
        </label>
      </div>
      <p className="text-[10px] text-stone-400 leading-relaxed">
        全ページの下の「サイトの不具合・ご意見を送る」から届いた内容です(匿名・返信不可)。新しいものから500件まで残ります。
      </p>
      {list.length === 0 && <p className="text-[12px] text-stone-400 bg-white rounded-xl border border-stone-200 p-4">{items.length === 0 ? "まだ届いていません" : "未対応のものはありません"}</p>}
      {list.map((it) => (
        <div key={it.id} className="bg-white rounded-xl border border-stone-200 p-3" style={it.done ? { opacity: 0.55 } : undefined}>
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <div className="text-[10px] text-stone-500 leading-relaxed">
              <span className="inline-block px-2 py-0.5 rounded-full mr-1.5" style={{ background: "#f0ebe3", color: INK }}>{FB_CATEGORY[it.category] ?? it.category}</span>
              {new Date(it.at).toLocaleString("ja-JP", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" })} ・ {FB_DEVICE[it.device] ?? it.device}
            </div>
            <button type="button" onClick={() => toggle(it)} className="text-[11px] px-2.5 py-1 rounded-full border flex-shrink-0"
              style={it.done ? { borderColor: "#d6d3d1", color: "#78716c" } : { borderColor: SAGE, color: "#fff", background: SAGE }}>
              {it.done ? "未対応に戻す" : "対応済みにする"}
            </button>
          </div>
          <p className="text-[13px] leading-relaxed whitespace-pre-wrap break-words" style={{ color: INK }}>{it.text}</p>
          <a href={it.page} target="_blank" rel="noopener noreferrer" className="text-[11px] text-stone-500 underline underline-offset-2 mt-1.5 inline-block break-all">{pageTitle(it.page)}</a>
        </div>
      ))}
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

  // 未対応のご意見の数(タブに数字を出す)。ダッシュボードを開いたときと、5分ごとに確かめる
  const [fbOpen, setFbOpen] = useState(0)
  useEffect(() => {
    if (!key) return
    let alive = true
    const load = () => fetch("/api/ops-dashboard?view=feedback", { headers: { "x-admin-key": key } })
      .then((r) => r.json())
      .then((b) => { if (alive && b.ok) setFbOpen((b.items as { done: boolean }[]).filter((x) => !x.done).length) })
      .catch(() => { /* 数字が出ないだけで、ほかには影響させない */ })
    load()
    const t = window.setInterval(load, 5 * 60 * 1000)
    return () => { alive = false; window.clearInterval(t) }
  }, [key])

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
  // 保留中の項目(HELD_GOALS)は判断から外す
  const metCount = ACTIVE_GOALS.filter((n) => met[n - 1]).length
  const launchReady = metCount === ACTIVE_GOALS.length || waiting >= TARGET_WAITING

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
        <title>{fbOpen > 0 ? `(${fbOpen}) ` : ""}運営ダッシュボード(運営者用)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] tracking-[0.2em] text-stone-500">運営ダッシュボード ｜ 運営者用</p>
          <button onClick={() => { saveKey(""); setKey(""); setData(null) }} className="text-[11px] text-stone-400 underline">キーを消す</button>
        </div>

        {/* タブ */}
        <div className="flex flex-wrap gap-1.5 mb-4 text-xs">
          {([["launch", "開業判断"], ["plan", "年間計画"], ["users", "ユーザー"], ["todo", "改善候補"], ["articles", "記事ごと"], ["search", "検索された言葉"], ["feedback", "ご意見"]] as [Tab, string][]).map(([v, l]) => (
            <button key={v} onClick={() => setTab(v)} className="relative px-3.5 py-1.5 rounded-full border" style={chip(tab === v)}>
              {l}
              {v === "feedback" && fbOpen > 0 && (
                <span aria-label={`未対応 ${fbOpen}件`} className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold leading-[18px] text-center text-white" style={{ background: "#c2410c" }}>
                  {fbOpen > 99 ? "99+" : fbOpen}
                </span>
              )}
            </button>
          ))}
        </div>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        {loading && !data && <p className="text-sm text-stone-500">読み込み中…</p>}

        {/* ===================== 開業判断 ===================== */}
        {tab === "launch" && data && (
          <div className="space-y-5">
            <div className="rounded-xl p-3 border" style={{ background: launchReady ? "#dcfce7" : "white", borderColor: launchReady ? "#86efac" : "#e7e5e4" }}>
              <p className="text-[11px] text-stone-500">開始の判断({ACTIVE_GOALS.join("・")}をすべて達成、または9を達成で開始{HELD_GOALS.length > 0 ? `。${HELD_GOALS.join("・")}は${HELD_REASON}` : ""})</p>
              <p className="text-base font-medium mt-0.5" style={{ color: INK }}>
                {launchReady ? "開始の目安に到達しています" : `${ACTIVE_GOALS.length}項目のうち ${metCount}/${ACTIVE_GOALS.length} 達成 ／ 9は ${waiting}/${TARGET_WAITING}人`}
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

            <ChangeLog />

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

            <LineAddTable data={data} months={months} />

            <LineStepTable data={data} />

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

        {/* ===================== 年間計画 ===================== */}
        {tab === "plan" && data && (
          <PlanPanel data={data} adminKey={key} onSaved={(m) => setData((d) => (d ? { ...d, manual: { ok: true, data: m } } : d))} />
        )}

        {/* ===================== ご意見 ===================== */}
        {tab === "feedback" && <FeedbackPanel adminKey={key} onOpenCount={setFbOpen} />}

        {/* ===================== ユーザー ===================== */}
        {tab === "users" && <UsersPanel adminKey={key} chip={chip} />}

        {/* ===================== 改善候補 ===================== */}
        {tab === "todo" && data && <div className="mb-5"><TitleTests data={data} /></div>}
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
            <GscQueries data={data} chip={chip} />

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

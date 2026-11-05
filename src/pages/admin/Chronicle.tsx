// src/pages/admin/Chronicle.tsx
// 管理画面 — 成長の書
// ルーティング: <Route path="/admin/chronicle" element={<Chronicle />} />

import { useState, useCallback, type CSSProperties } from 'react'
import { Helmet } from 'react-helmet-async'
import { LEVELS, type LevelData } from '../../data/chronicleData'
import { refsFor, STRENGTH_LABEL, type TaskRefs, type RefKind, type Ref, type Verify, type Strength } from '../../data/chronicleRefs'
import { DailyPageBlock, loadDaily, saveDaily, cleanDaily, type DailyStore } from './ChronicleDaily'
import { INDICATORS, type IndKey, EXAMINER_PROMPTS, EXAMINER_NAMES, EXAM_REQUIRED } from '../../data/chronicleExaminers'

// ── パスワード設定 ──────────────────────────────────────
// 自分用・非公開ページなので簡易実装。変更はこの1行だけ。
const ADMIN_PASS = 'ishizue'

// ── ローカルストレージ ──────────────────────────────────
const STORAGE_KEY = 'ishizue_chronicle_v1'

type CheckState = Record<string, Record<string, boolean>>

function loadState(): CheckState {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveState(s: CheckState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  } catch { /* quota exceeded etc. */ }
}

// ── 等級ごとの振り返り(完全習得したときに書く) ──────────────
const REFLECTION_KEY = 'ishizue_chronicle_reflections_v1'
type Reflection = { learned: string; remaining: string; apply: string; updatedAt: string }
type Reflections = Record<string, Reflection>
const REFLECTION_FIELDS: { key: 'learned' | 'remaining' | 'apply'; label: string; hint: string }[] = [
  { key: 'learned', label: '習得できたこと', hint: '何ができるようになったか' },
  { key: 'remaining', label: '課題として残ったこと', hint: 'まだ難しいこと・揺れやすい場面' },
  { key: 'apply', label: '実践への活用', hint: '実際の面談でどう活かすか' },
]

function loadReflections(): Reflections {
  try {
    return JSON.parse(localStorage.getItem(REFLECTION_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveReflections(r: Reflections) {
  try {
    localStorage.setItem(REFLECTION_KEY, JSON.stringify(r))
  } catch { /* quota exceeded etc. */ }
}

const fmtDate = (iso: string) => {
  try { return new Date(iso).toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' }) } catch { return '' }
}

// ── 本試験の結果(試験官プロンプトで受験し、結果を自分で記録する) ──
const EXAM_KEY = 'ishizue_chronicle_exam_v1'
type ExamResult = 'pass' | 'retry' | 'hold' | 'practice'
// logic / sense … 試験官がつけた点数(0〜100)。現在地を見るためのもので、合否には使わない
// ind … 面接全体の6指標(0〜4 または 'na'=観察なし)。indq … 根拠の発言の引用。どちらも振り返り用で、合否・2軸の点数には使わない
type IndValue = number | 'na'
type ExamRecord = { result: ExamResult; date: string; memo: string; logic?: number; sense?: number; ind?: Partial<Record<IndKey, IndValue>>; indq?: Partial<Record<IndKey, string>> }
type ExamRecords = Record<string, ExamRecord[]>
const EXAM_LABEL: Record<ExamResult, string> = { pass: '合格', retry: '再挑戦', hold: '判定保留', practice: '練習' }
const toInd = (v: unknown): IndValue | undefined => v === 'na' ? 'na' : typeof v === 'number' && Number.isInteger(v) && v >= 0 && v <= 4 ? v : undefined
function cleanInd(raw: unknown): { ind?: ExamRecord['ind']; indq?: ExamRecord['indq'] } {
  if (!raw || typeof raw !== 'object') return {}
  const r = raw as Record<string, unknown>
  const ind: Partial<Record<IndKey, IndValue>> = {}, indq: Partial<Record<IndKey, string>> = {}
  for (const d of INDICATORS) {
    const v = toInd((r.ind as Record<string, unknown> | undefined)?.[d.key]); if (v !== undefined) ind[d.key] = v
    const q = (r.indq as Record<string, unknown> | undefined)?.[d.key]; if (typeof q === 'string' && q.trim()) indq[d.key] = q.slice(0, 500)
  }
  return { ind: Object.keys(ind).length ? ind : undefined, indq: Object.keys(indq).length ? indq : undefined }
}
// 試験官の結果の【6指標】ブロックを読み取る
function parseIndBlock(text: string): { ind: Partial<Record<IndKey, IndValue>>; indq: Partial<Record<IndKey, string>> } {
  const ind: Partial<Record<IndKey, IndValue>> = {}, indq: Partial<Record<IndKey, string>> = {}
  for (const line of text.split(/\r?\n/)) {
    const m = line.trim().replace(/^[-・*]\s*/, '').match(/^(.+?)\s*[:：]\s*(観察なし|[0-4０-４])\s*(?:[|｜]\s*(.*))?$/)
    if (!m) continue
    const d = INDICATORS.find(x => x.name === m[1].trim())
    if (!d) continue
    ind[d.key] = m[2] === '観察なし' ? 'na' : Number(m[2].replace(/[０-４]/, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)))
    const q = (m[3] ?? '').trim().replace(/^「|」$/g, '')
    if (q) indq[d.key] = q.slice(0, 500)
  }
  return { ind, indq }
}
const toScore = (v: unknown): number | undefined => {
  const n = typeof v === 'number' ? v : typeof v === 'string' && v.trim() !== '' ? Number(v) : NaN
  return Number.isFinite(n) && n >= 0 && n <= 100 ? Math.round(n) : undefined
}

function loadExams(): ExamRecords {
  try {
    return JSON.parse(localStorage.getItem(EXAM_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveExams(r: ExamRecords) {
  try {
    localStorage.setItem(EXAM_KEY, JSON.stringify(r))
  } catch { /* quota exceeded etc. */ }
}

const examPassed = (exams: ExamRecords, lvId: string) => (exams[lvId] ?? []).some(r => r.result === 'pass')

// ── ヘルパー ───────────────────────────────────────────
function countAll(lv: LevelData) {
  return Object.values(lv.tasks).flat().length
}

// 今の課題として定義されているものだけを数える(課題を入れ替えたときに、古い記録が数に混ざらないように)
function countDone(lv: LevelData, state: CheckState) {
  const saved = state[lv.id] ?? {}
  return Object.entries(lv.tasks).reduce(
    (n, [cat, items]) => n + items.filter((_, i) => saved[`${cat}_${i}`]).length,
    0,
  )
}

// 等級の達成：課題がすべてチェック済みで、本試験が必要な等級は合格も記録されていること
function levelComplete(lv: LevelData, state: CheckState, exams: ExamRecords) {
  const tasksDone = countDone(lv, state) === countAll(lv)
  return tasksDone && (!EXAM_REQUIRED.includes(lv.id) || examPassed(exams, lv.id))
}

// ── 記録の書き出し・読み込み(ブラウザのデータが消えたときのための控え) ──
function exportState(s: CheckState, reflections: Reflections, exams: ExamRecords, daily: DailyStore) {
  const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' })
  const blob = new Blob([JSON.stringify({ app: 'ishizue_chronicle', version: 4, savedAt: new Date().toISOString(), state: s, reflections, exams, daily: { pages: daily.pages, sched: daily.sched } }, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `seichou-no-sho-${today}.json`
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function parseImported(text: string): { state: CheckState; reflections: Reflections | null; exams: ExamRecords | null; daily: DailyStore | null } | null {
  try {
    const raw = JSON.parse(text)
    // 振り返り(version 2 以降)。形が合わないものは読み飛ばす
    let reflections: Reflections | null = null
    if (raw && typeof raw === 'object' && raw.reflections && typeof raw.reflections === 'object' && !Array.isArray(raw.reflections)) {
      reflections = {}
      for (const [lv, r] of Object.entries(raw.reflections as Record<string, unknown>)) {
        if (!r || typeof r !== 'object') continue
        const o = r as Record<string, unknown>
        const str = (v: unknown) => (typeof v === 'string' ? v.slice(0, 5000) : '')
        reflections[lv] = { learned: str(o.learned), remaining: str(o.remaining), apply: str(o.apply), updatedAt: str(o.updatedAt) }
      }
    }
    const st = raw && typeof raw === 'object' && 'state' in raw ? raw.state : raw
    if (!st || typeof st !== 'object' || Array.isArray(st)) return null
    const out: CheckState = {}
    for (const [lv, tasks] of Object.entries(st as Record<string, unknown>)) {
      if (!tasks || typeof tasks !== 'object' || Array.isArray(tasks)) return null
      out[lv] = {}
      for (const [k, v] of Object.entries(tasks as Record<string, unknown>)) out[lv][k] = v === true
    }
    // 本試験の記録(version 3 以降)
    let exams: ExamRecords | null = null
    if (raw && typeof raw === 'object' && raw.exams && typeof raw.exams === 'object' && !Array.isArray(raw.exams)) {
      exams = {}
      for (const [lv, list] of Object.entries(raw.exams as Record<string, unknown>)) {
        if (!Array.isArray(list)) continue
        exams[lv] = list
          .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object')
          .filter(x => x.result === 'pass' || x.result === 'retry' || x.result === 'hold' || x.result === 'practice')
          .map(x => ({ result: x.result as ExamResult, date: typeof x.date === 'string' ? x.date.slice(0, 40) : '', memo: typeof x.memo === 'string' ? x.memo.slice(0, 2000) : '', logic: toScore(x.logic), sense: toScore(x.sense), ...cleanInd(x) }))
      }
    }
    // 今日の一頁(version 4 以降)
    const daily = raw && typeof raw === 'object' && raw.daily ? cleanDaily(raw.daily) : null
    return { state: out, reflections, exams, daily }
  } catch {
    return null
  }
}

// ── サブコンポーネント ─────────────────────────────────

function Monologue({ text }: { text: string }) {
  return (
    <div style={{
      background: '#080502',
      borderTop: '1px solid #2a1f0e',
      borderBottom: '2px solid #6b4f28',
      padding: '18px 24px',
      position: 'relative',
    }}>
      {(['tl','tr','bl','br'] as const).map(pos => (
        <span key={pos} style={{
          position: 'absolute',
          fontSize: 12, color: '#6b4f28', lineHeight: 1,
          top: pos.startsWith('t') ? 6 : undefined,
          bottom: pos.startsWith('b') ? 6 : undefined,
          left: pos.endsWith('l') ? 8 : undefined,
          right: pos.endsWith('r') ? 8 : undefined,
        }}>✦</span>
      ))}
      <div style={{
        fontSize: 13, lineHeight: 2.1,
        color: '#c9aa70', textAlign: 'center',
        fontStyle: 'italic', letterSpacing: '0.04em',
        padding: '2px 12px',
      }}>
        {text.split('\n').map((line, i) => <div key={i}>{line}</div>)}
      </div>
    </div>
  )
}

function BlockTitle({ children }: { children: string }) {
  return (
    <div style={{
      fontSize: 9, letterSpacing: '0.25em', color: '#6b4f28',
      marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ flex: 1, borderBottom: '1px solid #3d2a1266', display: 'block' }} />
      {children}
      <span style={{ flex: 1, borderBottom: '1px solid #3d2a1266', display: 'block' }} />
    </div>
  )
}

function MasteryBlock({ conditions }: { conditions: string[] }) {
  return (
    <div style={{
      borderBottom: '1px solid #1a1208',
      padding: '16px 20px',
      background: '#0d0a05',
    }}>
      <BlockTitle>習得条件</BlockTitle>
      {conditions.map((c, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'flex-start', gap: 8,
          padding: '5px 4px',
          fontSize: 12, lineHeight: 1.65, color: '#a08050',
        }}>
          <span style={{ color: '#c9933a', flexShrink: 0, fontSize: 10, marginTop: 3 }}>◆</span>
          <span>{c}</span>
        </div>
      ))}
    </div>
  )
}

function SupportBlock({ supports }: { supports: LevelData['supports'] }) {
  return (
    <div style={{
      borderBottom: '1px solid #1a1208',
      padding: '16px 20px',
      background: '#0f0b05',
    }}>
      <BlockTitle>習得へのサポート</BlockTitle>
      {supports.map((s, i) => (
        <div key={i} style={{
          background: '#0d0a05',
          border: '1px solid #2a1f0e',
          borderRadius: 2,
          padding: '12px 14px',
          marginBottom: i < supports.length - 1 ? 8 : 0,
          fontSize: 12, lineHeight: 1.75, color: '#a08050',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: 9, letterSpacing: '0.15em',
            background: '#2a1f0e', color: '#c9933a',
            padding: '2px 8px', borderRadius: 1,
            marginBottom: 6,
          }}>{s.cat}</div>
          {/* body は <b> タグを含むため dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: s.body }} />
        </div>
      ))}
    </div>
  )
}

interface TasksBlockProps {
  lv: LevelData
  state: CheckState
  unlocked: boolean
  onToggle: (lvId: string, key: string) => void
}

function TasksBlock({ lv, state, unlocked, onToggle }: TasksBlockProps) {
  return (
    <div style={{ padding: '16px 20px 20px', background: '#0d0a05' }}>
      {Object.entries(lv.tasks).map(([cat, items]) => (
        <div key={cat}>
          <div style={{
            fontSize: 9, letterSpacing: '0.22em', color: '#6b4f28',
            margin: '12px 0 6px',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {cat}
            <span style={{ flex: 1, borderBottom: '1px solid #3d2a1233' }} />
          </div>
          {items.map((item, i) => {
            const key = `${cat}_${i}`
            const checked = !!(state[lv.id]?.[key])
            // TaskItem か string かを両対応
            const label = typeof item === 'string' ? item : item.label
            const answer = typeof item === 'string' ? '' : (item.answer || '')
            const answerKey = `${lv.id}_${cat}_${i}_ans`
            return (
              <TaskRow
                key={key}
                id={answerKey}
                label={label}
                answer={answer}
                sources={refsFor(lv.id, cat, i)}
                checked={checked}
                unlocked={unlocked}
                accent={lv.accent}
                onToggle={() => unlocked && onToggle(lv.id, key)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

// ── 根拠資料(熟読用) ──────────────────────────────────
const KIND_COLOR: Record<RefKind, string> = { '法令': '#c9933a', '公的資料': '#7aa0c9', '倫理綱領': '#b08ad0', '研究': '#7ab88a', '専門書': '#a08a6a' }

const VERIFY_COLOR: Record<Verify, string> = { '本文確認': '#9fc98a', '所在確認': '#c9a96e', '未確認': '#8a7d70' }
const STRENGTH_COLOR: Record<Strength, string> = { A: '#c9933a', B: '#7ab88a', C: '#7aa0c9', D: '#9a9086' }

// リンク先で何が読めるか
type Access = 'full' | 'abstract' | 'none'
function access(r: Ref): Access { return !r.u ? 'none' : r.free ? 'full' : 'abstract' }
const ACCESS: Record<Access, { label: string; c: string }> = {
  full: { label: '無料で本文を読める', c: '#9fc98a' },
  abstract: { label: 'リンク先は要旨・書誌のみ', c: '#c9a96e' },
  none: { label: 'リンクなし(書籍)', c: '#8a7d70' },
}

function StartBox({ st, accent }: { st: NonNullable<TaskRefs['start']>; accent: string }) {
  const r = st.r
  return (
    <div style={{ border: `1px solid ${accent}88`, background: '#120d06', borderRadius: 3, padding: '8px 10px', marginBottom: 10 }}>
      <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#9fc98a', marginBottom: 4 }}>▶ まず読む{st.min ? `(約${st.min}分)` : ''}</div>
      <div style={{ fontSize: 11.5, lineHeight: 1.7 }}>
        {r.u
          ? <a href={r.u} target="_blank" rel="noopener noreferrer" style={{ color: '#e6c98a', textDecoration: 'underline', textUnderlineOffset: 2 }}>{r.t}</a>
          : <span style={{ color: '#e6c98a' }}>{r.t}</span>}
      </div>
      {st.where && <div style={{ fontSize: 11, color: '#c9b48a', marginTop: 2 }}>📍 {st.where}</div>}
      <div style={{ fontSize: 11, color: '#d8c7a4', marginTop: 4, lineHeight: 1.7 }}>この課題との関係：{st.why}</div>
    </div>
  )
}

function RefItem({ r }: { r: Ref; key?: number }) {
  return (
    <li style={{ marginBottom: 7, lineHeight: 1.7 }}>
      <span style={{ display: 'inline-block', fontSize: 9, color: '#0a0702', background: KIND_COLOR[r.k], borderRadius: 2, padding: '0 5px', marginRight: 6, verticalAlign: 1 }}>{r.k}</span>
      {r.u
        ? <a href={r.u} target="_blank" rel="noopener noreferrer" style={{ color: '#e6c98a', textDecoration: 'underline', textUnderlineOffset: 2 }}>{r.t}</a>
        : <span style={{ color: '#e6c98a' }}>{r.t}</span>}
      <span style={{ fontSize: 9, color: VERIFY_COLOR[r.v], border: `1px solid ${VERIFY_COLOR[r.v]}`, borderRadius: 2, padding: '0 4px', marginLeft: 6, verticalAlign: 1, whiteSpace: 'nowrap' }}>{r.v}</span>
      <span style={{ fontSize: 9, color: '#0a0702', background: ACCESS[access(r)].c, borderRadius: 2, padding: '0 4px', marginLeft: 4, verticalAlign: 1, whiteSpace: 'nowrap' }}>{ACCESS[access(r)].label}</span>
      {(r.where || r.min) && (
        <div style={{ fontSize: 10.5, color: '#c9b48a', marginLeft: 2 }}>
          {r.where && <>📍 {r.where}</>}{r.min ? <>{r.where ? '　' : ''}⏱ 約{r.min}分</> : null}
        </div>
      )}
      {r.read && <div style={{ fontSize: 10.5, color: '#8a7350', marginLeft: 2 }}>読みどころ：{r.read}</div>}
      {r.cite && <div style={{ fontSize: 10, color: '#a08a6a', marginLeft: 2 }}>※ {r.cite}</div>}
    </li>
  )
}

// 無料で読める資料 → 本文確認済み の順で先頭に並べる(同じ条件なら元の順)
function sortRefs(list: Ref[]): Ref[] {
  const score = (r: Ref) => (r.free && r.u ? 0 : 2) + (r.v === '本文確認' ? 0 : 1)
  return list.map((r, i) => ({ r, i })).sort((a, b) => score(a.r) - score(b.r) || a.i - b.i).map(x => x.r)
}

function SourceList({ data, accent }: { data: TaskRefs; accent: string }) {
  const refs = sortRefs(data.refs)
  const see = data.see ? sortRefs(data.see) : []
  const freeCount = [...refs, ...see].filter(r => r.free && r.u).length
  return (
    <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px dashed ${accent}55` }}>
      <div style={{ fontSize: 10, letterSpacing: '0.15em', color: accent, marginBottom: 6 }}>📚 関連資料と根拠の強さ</div>
      <div style={{ fontSize: 11, marginBottom: 8, color: '#d8c7a4' }}>
        <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, color: '#0a0702', background: STRENGTH_COLOR[data.level], borderRadius: 2, padding: '0 6px', marginRight: 6 }}>根拠 {data.level}</span>
        {STRENGTH_LABEL[data.level]}
      </div>
      {data.start
        ? <StartBox st={data.start} accent={accent} />
        : <p style={{ fontSize: 10.5, color: '#8a7350', margin: '0 0 8px' }}>この課題には、ネットで短時間に読める本文を確かめた資料がまだありません。下の書籍・要旨から始めてください。</p>}
      {freeCount > 0 && (
        <div style={{ fontSize: 10.5, color: '#9fc98a', marginBottom: 6 }}>🌐 ネットで無料で読める資料 {freeCount}件(上から順に読むのがおすすめ)</div>
      )}
      {data.note && (
        <div style={{ fontSize: 11, lineHeight: 1.8, color: '#d8b070', background: '#1a1208', border: '1px solid #3d2a12', borderRadius: 3, padding: '6px 9px', marginBottom: 8 }}>
          ⚠ {data.note}
        </div>
      )}
      {refs.length > 0
        ? <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{refs.map((r, i) => <RefItem key={i} r={r} />)}</ul>
        : <p style={{ fontSize: 11, color: '#8a7350', margin: '0 0 6px' }}>この課題の文言を直接支える資料はありません。</p>}
      {see.length > 0 && (
        <>
          <div style={{ fontSize: 10, color: '#8a7350', margin: '8px 0 4px' }}>参考(関連はあるが、課題の文言を直接は支えない)</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 0.85 }}>{see.map((r, i) => <RefItem key={i} r={r} />)}</ul>
        </>
      )}
    </div>
  )
}

// ── TaskRow: チェック行 + 答え折りたたみ ─────────────────
interface TaskRowProps {
  id: string
  label: string
  answer: string
  checked: boolean
  unlocked: boolean
  accent: string
  onToggle: () => void
  sources?: TaskRefs
}

function TaskRow({ id, label, answer, sources, checked, unlocked, accent, onToggle }: TaskRowProps) {
  const [ansOpen, setAnsOpen] = useState(false)
  const hasAnswer = answer.trim().length > 0

  return (
    <div style={{ borderBottom: '1px solid #1a140833', paddingBottom: 2, marginBottom: 1 }}>
      {/* チェック行 */}
      <div
        style={{
          display: 'flex', alignItems: 'flex-start', gap: 9,
          padding: '6px 3px 4px',
          cursor: unlocked ? 'pointer' : 'default',
          borderRadius: 2,
          opacity: unlocked ? 1 : 0.4,
          transition: 'background 0.1s',
        }}
        onClick={() => unlocked && onToggle()}
        onMouseEnter={e => unlocked && (e.currentTarget.style.background = '#1a1208')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        {/* チェックボックス */}
        <div style={{
          width: 16, height: 16, flexShrink: 0, marginTop: 2,
          border: `1.5px solid ${checked ? '#c9933a' : '#3d2a12'}`,
          background: checked ? '#8a6030' : '#080502',
          borderRadius: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.15s',
          fontSize: 10, color: '#f5d080', fontWeight: 700, lineHeight: 1,
        }}>
          {checked ? '✓' : ''}
        </div>
        {/* ラベル */}
        <div style={{
          flex: 1,
          fontSize: 12, lineHeight: 1.65,
          color: checked ? '#4a3820' : '#a08050',
          textDecoration: checked ? 'line-through' : 'none',
          transition: 'color 0.15s',
        }}>
          {label}
        </div>
        {/* 答えを見るボタン */}
        {hasAnswer && unlocked && (
          <button
            onClick={e => { e.stopPropagation(); setAnsOpen(v => !v) }}
            style={{
              flexShrink: 0,
              fontSize: 9, letterSpacing: '0.08em',
              color: ansOpen ? accent : '#6a5030',
              background: ansOpen ? `${accent}22` : '#1a140855',
              border: `1px solid ${ansOpen ? accent : '#3d2a1244'}`,
              borderRadius: 3, padding: '2px 6px',
              cursor: 'pointer', lineHeight: 1.6,
              transition: 'all 0.15s',
              marginTop: 1,
            }}
          >
            {ansOpen ? '閉じる' : '答えを見る'}
          </button>
        )}
      </div>

      {/* 答えパネル */}
      {hasAnswer && ansOpen && (
        <div style={{
          margin: '2px 6px 8px 25px',
          padding: '10px 14px',
          background: '#0c0905',
          border: `1px solid ${accent}44`,
          borderLeft: `3px solid ${accent}`,
          borderRadius: '0 4px 4px 0',
          fontSize: 11.5,
          color: '#b09060',
          lineHeight: 1.85,
          letterSpacing: '0.03em',
        }}>
          {answer}
          {sources && <SourceList data={sources} accent={accent} />}
        </div>
      )}
    </div>
  )
}

// ── 試験官(ロールプレイ試験のプロンプト) ─────────────────────
// 6指標の現在地:6指標を記録した直近3回について、指標ごとに観察できた回だけで平均する(観察なしは数値を出さない)
function IndicatorNow({ records }: { records: ExamRecord[] }) {
  const recent = records.filter(r => r.ind && Object.keys(r.ind).length > 0).slice(-3)
  if (recent.length === 0) return null
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ fontSize: 10.5, color: '#c9a96e', marginBottom: 2 }}>6指標の現在地(6指標を記録した直近{recent.length}回)</div>
      <p style={{ fontSize: 10, color: '#7a6040', margin: '0 0 4px', lineHeight: 1.6 }}>人を評価する点数ではなく、次に何を練習するかを見つけるための目安です。総合点は出しません。</p>
      {INDICATORS.map(d => {
        const vals = recent.map(r => r.ind?.[d.key])
        const nums = vals.filter((v): v is number => typeof v === 'number')
        const avg = nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : undefined
        const c = d.axis === 'ロジック' ? '#9fc98a' : '#c98a9f'
        return (
          <div key={d.key} style={{ display: 'grid', gridTemplateColumns: '92px 1fr 92px', gap: 6, alignItems: 'center', fontSize: 10.5, color: '#b09a74', marginBottom: 3 }}>
            <span style={{ color: c }}>{d.name}</span>
            <div style={{ height: 8, background: '#1a1208', borderRadius: 2, overflow: 'hidden' }}>
              {avg !== undefined && <div style={{ width: `${(avg / 4) * 100}%`, height: '100%', background: c }} />}
            </div>
            <span style={{ textAlign: 'right' }}>
              {avg !== undefined ? `${avg.toFixed(1)} / 4` : '観察なし'}
              <span style={{ display: 'block', fontSize: 9, color: '#7a6040' }}>{vals.map(v => v === undefined ? '–' : v === 'na' ? 'な' : v).join('→')}</span>
            </span>
          </div>
        )
      })}
      <p style={{ fontSize: 9.5, color: '#7a6040', margin: '2px 0 0' }}>右下の数字は古い順の記録(な=観察なし、–=未入力)。平均は観察できた回だけで出しています。</p>
    </div>
  )
}

// 点数の推移(新しい順に最大8件を横棒で並べる)
function ScoreTrend({ records }: { records: ExamRecord[] }) {
  const scored = records.filter(r => r.logic !== undefined || r.sense !== undefined).slice(-8)
  if (scored.length === 0) return null
  const bar = (v: number | undefined, c: string) => (
    <div style={{ flex: 1, height: 8, background: '#1a1208', borderRadius: 2, overflow: 'hidden' }}>
      {v !== undefined && <div style={{ width: `${v}%`, height: '100%', background: c }} />}
    </div>
  )
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ fontSize: 10.5, color: '#c9a96e', marginBottom: 4 }}>現在地(点数の推移・新しい順)<span style={{ marginLeft: 8, color: '#9fc98a' }}>■ ロジック</span><span style={{ marginLeft: 6, color: '#c98a9f' }}>■ 感覚</span></div>
      {[...scored].reverse().map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 34px', gap: 6, alignItems: 'center', fontSize: 10, color: '#8a7350', marginBottom: 3 }}>
          <span>{fmtDate(r.date).slice(0, 10)}{r.result === 'practice' ? ' 練' : ''}</span>
          <div style={{ display: 'grid', gap: 2 }}>{bar(r.logic, '#9fc98a')}{bar(r.sense, '#c98a9f')}</div>
          <span style={{ textAlign: 'right' }}>{r.logic ?? '—'}/{r.sense ?? '—'}</span>
        </div>
      ))}
      <p style={{ fontSize: 10, color: '#7a6040', margin: '4px 0 0', lineHeight: 1.6 }}>AIの点数は同じ回答でも数点〜十数点ぶれることがあります。1回の上下より、数回分の傾向で見てください。</p>
    </div>
  )
}

function ExaminerBlock({ lv, records, onAdd, onRemove }: { lv: LevelData; records: ExamRecord[]; onAdd: (r: ExamRecord) => void; onRemove: (i: number) => void }) {
  const prompt = EXAMINER_PROMPTS[lv.id]
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const [memo, setMemo] = useState('')
  const [logic, setLogic] = useState('')
  const [sense, setSense] = useState('')
  const [indText, setIndText] = useState('')
  const [ind, setInd] = useState<Partial<Record<IndKey, IndValue>>>({})
  const [indq, setIndq] = useState<Partial<Record<IndKey, string>>>({})
  const [indOpen, setIndOpen] = useState(false)
  const required = EXAM_REQUIRED.includes(lv.id)
  const passed = records.some(r => r.result === 'pass')
  if (!prompt) return null
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setMsg('コピーしました。AIチャットに貼り付けて送り、続けて「練習開始」か「試験開始」と送ってください。')
    } catch {
      setShow(true)
      setMsg('自動でコピーできませんでした。下の枠の文章を長押しして、すべて選択・コピーしてください。')
    }
  }
  const btn: CSSProperties = { fontSize: 11, color: '#c9a96e', background: 'transparent', border: '1px solid #6b4f28', borderRadius: 4, padding: '5px 10px', cursor: 'pointer' }
  return (
    <div style={{ borderTop: '1px solid #2a1f0e', background: '#0b0804', padding: '14px 20px' }}>
      <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: 13, fontWeight: 700, color: lv.accent, letterSpacing: '0.08em', marginBottom: 6 }}>
        🎭 試験官「{EXAMINER_NAMES[lv.id]}」(ロールプレイ試験)
      </div>
      {required && (
        <p style={{ fontSize: 11, lineHeight: 1.7, marginBottom: 8, color: passed ? '#9fc98a' : '#e6b555' }}>
          {passed ? '✓ 本試験に合格済み(この等級の達成条件の一つ)' : 'この等級は、本試験の合格も達成条件です。'}
        </p>
      )}
      <p style={{ fontSize: 11, color: '#8a6a3a', lineHeight: 1.8, marginBottom: 10 }}>
        プロンプトをAIチャットに貼り付けて送り、「練習開始」(ヒントあり・合否なし)か「試験開始」(合否あり)と送ると始まります。「終了」で口頭試問と判定に進みます。判定は「達成・一部達成・未達・判定不能」の4つです。あわせて「ロジック」と「感覚」の2つの点数(各100点)が出ます。点数は現在地を見るためのもので、合否には使いません。実在のクライアントの情報は書き込まないでください。
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button type="button" onClick={copy} style={{ ...btn, color: '#0a0702', background: '#c9933a', border: 'none', fontWeight: 700 }}>プロンプトをコピー</button>
        <button type="button" onClick={() => setShow(v => !v)} style={btn}>{show ? '閉じる' : '中身を見る'}</button>
      </div>
      {msg && <p role="status" style={{ marginTop: 8, fontSize: 11, color: '#c9a96e', lineHeight: 1.7 }}>{msg}</p>}
      {show && (
        <textarea readOnly value={prompt} rows={14} onFocus={e => e.currentTarget.select()}
          style={{ marginTop: 10, width: '100%', boxSizing: 'border-box', background: '#080502', color: '#cdb98f', border: '1px solid #3d2a12', borderRadius: 4, padding: '8px 10px', fontSize: 11.5, lineHeight: 1.7, fontFamily: 'inherit' }} />
      )}

      {/* 本試験の結果の記録 */}
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px dashed #3d2a12' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#c9a96e', marginBottom: 6 }}>結果と点数を記録する</div>
        <p style={{ fontSize: 10.5, color: '#8a6a3a', lineHeight: 1.7, marginBottom: 6 }}>
          本試験は判定を、練習は点数だけを記録できます(練習の記録は合否に数えません)。点数は試験官の結果の「点数のまとめ」から写してください。メモには講評の要点などを。実在の情報は書かないでください。
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
          {([['ロジック', logic, setLogic], ['感覚', sense, setSense]] as const).map(([label, v, set]) => (
            <label key={label} style={{ fontSize: 11, color: '#c9a96e' }}>
              {label}
              <input type="number" inputMode="numeric" min={0} max={100} value={v} onChange={e => set(e.target.value)} placeholder="0〜100"
                style={{ width: 72, marginLeft: 6, background: '#080502', color: '#e6d5b0', border: '1px solid #3d2a12', borderRadius: 4, padding: '4px 6px', fontSize: 12 }} />
              <span style={{ marginLeft: 3 }}>/ 100</span>
            </label>
          ))}
        </div>
        <button type="button" onClick={() => setIndOpen(v => !v)} style={{ ...btn, marginBottom: 6 }}>{indOpen ? '6指標の入力を閉じる' : '面接全体の6指標を入力する'}</button>
        {indOpen && (
          <div style={{ border: '1px solid #3d2a12', borderRadius: 4, padding: '8px 10px', marginBottom: 8 }}>
            <p style={{ fontSize: 10.5, color: '#8a6a3a', lineHeight: 1.7, margin: '0 0 6px' }}>試験官の結果の【6指標】の6行を貼り付けて「読み取る」を押すか、下で直接選んでください。観察なしは欠点ではありません。</p>
            <textarea value={indText} onChange={e => setIndText(e.target.value)} rows={3} placeholder={'【6指標】\n見立て: 3 |「…」\n…'}
              style={{ width: '100%', boxSizing: 'border-box', background: '#080502', color: '#e6d5b0', border: '1px solid #3d2a12', borderRadius: 4, padding: '6px 9px', fontSize: 11.5, lineHeight: 1.6, fontFamily: 'inherit' }} />
            <button type="button" style={{ ...btn, marginTop: 4 }} onClick={() => {
              const r = parseIndBlock(indText)
              const n = Object.keys(r.ind).length
              if (n === 0) { window.alert('6指標の行を読み取れませんでした。「見立て: 3 |「引用」」の形か確かめてください。'); return }
              setInd(r.ind); setIndq(r.indq)
            }}>読み取る</button>
            {INDICATORS.map(d => (
              <div key={d.key} style={{ marginTop: 6 }}>
                <label style={{ fontSize: 11, color: d.axis === 'ロジック' ? '#9fc98a' : '#c98a9f' }}>
                  {d.name}
                  <select value={ind[d.key] === undefined ? '' : String(ind[d.key])}
                    onChange={e => { const v = e.target.value; setInd(o => { const n = { ...o }; if (v === '') delete n[d.key]; else n[d.key] = v === 'na' ? 'na' : Number(v); return n }) }}
                    style={{ marginLeft: 6, background: '#080502', color: '#e6d5b0', border: '1px solid #3d2a12', borderRadius: 4, fontSize: 11.5 }}>
                    <option value="">未入力</option><option value="na">観察なし</option>
                    {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </label>
                <input value={indq[d.key] ?? ''} onChange={e => setIndq(o => ({ ...o, [d.key]: e.target.value.slice(0, 500) }))} placeholder="根拠の発言(引用)"
                  style={{ display: 'block', width: '100%', boxSizing: 'border-box', marginTop: 2, background: '#080502', color: '#cdb98f', border: '1px solid #2a1f0e', borderRadius: 4, padding: '3px 7px', fontSize: 11 }} />
              </div>
            ))}
          </div>
        )}
        <textarea value={memo} onChange={e => setMemo(e.target.value)} rows={2} maxLength={2000} placeholder="例:例外の延長への対応が「一部達成」。代わりの手段を先に示す。"
          style={{ width: '100%', boxSizing: 'border-box', background: '#080502', color: '#e6d5b0', border: '1px solid #3d2a12', borderRadius: 4, padding: '6px 9px', fontSize: 12, lineHeight: 1.7, fontFamily: 'inherit', resize: 'vertical' }} />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 6 }}>
          {(['pass', 'retry', 'hold', 'practice'] as ExamResult[]).map(r => (
            <button key={r} type="button" style={btn}
              onClick={() => {
                const lg = toScore(logic), sn = toScore(sense)
                if ((logic.trim() !== '' && lg === undefined) || (sense.trim() !== '' && sn === undefined)) { window.alert('点数は0〜100の数字で入れてください。'); return }
                const hasInd = Object.keys(ind).length > 0
                if (r === 'practice' && lg === undefined && sn === undefined && !hasInd) { window.alert('練習の記録には、点数か6指標を少なくとも一つ入れてください。'); return }
                const what = r === 'practice' ? '練習の点数' : `本試験の結果「${EXAM_LABEL[r]}」`
                if (!window.confirm(`${what}を記録します。よろしいですか？`)) return
                const q = Object.fromEntries(Object.entries(indq).filter(([, v]) => typeof v === 'string' && v.trim())) as ExamRecord['indq']
                onAdd({ result: r, date: new Date().toISOString(), memo: memo.trim(), logic: lg, sense: sn, ind: hasInd ? { ...ind } : undefined, indq: q && Object.keys(q).length ? q : undefined })
                setMemo(''); setLogic(''); setSense(''); setInd({}); setIndq({}); setIndText(''); setIndOpen(false)
              }}>
              {r === 'practice' ? '練習の点数として記録' : `本試験「${EXAM_LABEL[r]}」として記録`}
            </button>
          ))}
        </div>
        <ScoreTrend records={records} />
        <IndicatorNow records={records} />
        {records.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0' }}>
            {records.map((r, i) => ({ r, i })).reverse().map(({ r, i }) => (
              <li key={i} style={{ fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.7, padding: '5px 0', borderBottom: '1px solid #1a1208' }}>
                <span style={{ color: r.result === 'pass' ? '#9fc98a' : r.result === 'retry' ? '#e6b555' : r.result === 'practice' ? '#7aa0c9' : '#9a9086', fontWeight: 700, marginRight: 8 }}>{EXAM_LABEL[r.result]}</span>
                <span style={{ color: '#7a6040' }}>{fmtDate(r.date)}</span>
                {(r.logic !== undefined || r.sense !== undefined) && (
                  <span style={{ marginLeft: 8, color: '#c9b48a' }}>ロジック {r.logic ?? '—'}・感覚 {r.sense ?? '—'}</span>
                )}
                {r.ind && (
                  <details style={{ fontSize: 10.5, color: '#b09a74' }}>
                    <summary style={{ cursor: 'pointer' }}>6指標:{INDICATORS.map(d => `${d.name} ${r.ind?.[d.key] === undefined ? '–' : r.ind[d.key] === 'na' ? '観察なし' : r.ind[d.key]}`).join('・')}</summary>
                    {INDICATORS.filter(d => r.indq?.[d.key]).map(d => <div key={d.key}>{d.name}:「{r.indq?.[d.key]}」</div>)}
                  </details>
                )}
                {r.memo && <div style={{ whiteSpace: 'pre-wrap', color: '#b09a74' }}>{r.memo}</div>}
                <button type="button" onClick={() => { if (window.confirm('この記録を削除しますか？')) onRemove(i) }}
                  style={{ fontSize: 10, color: '#6b5030', background: 'transparent', border: 'none', textDecoration: 'underline', cursor: 'pointer', padding: 0, marginLeft: 10 }}>削除</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function ReflectionBlock({ lv, value, onSave }: { lv: LevelData; value?: Reflection; onSave: (r: Reflection) => void }) {
  const [editing, setEditing] = useState(!value)
  const [draft, setDraft] = useState({ learned: value?.learned ?? '', remaining: value?.remaining ?? '', apply: value?.apply ?? '' })
  const box: CSSProperties = { borderTop: '1px solid #2a1f0e', background: '#0c0904', padding: '16px 20px' }
  const head = (
    <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: 13, fontWeight: 700, color: lv.accent, letterSpacing: '0.08em', marginBottom: 10 }}>
      振り返りの記
      {value?.updatedAt && <span style={{ fontSize: 10, fontWeight: 400, color: '#7a6040', marginLeft: 10 }}>{fmtDate(value.updatedAt)} 記</span>}
    </div>
  )
  if (!editing && value) {
    return (
      <div style={box}>
        {head}
        {REFLECTION_FIELDS.map(f => (
          <div key={f.key} style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#8a6a3a', marginBottom: 3 }}>{f.label}</div>
            <div style={{ fontSize: 13, lineHeight: 1.9, color: '#d8c7a4', whiteSpace: 'pre-wrap' }}>{value[f.key] || '—'}</div>
          </div>
        ))}
        <button type="button" onClick={() => setEditing(true)}
          style={{ fontSize: 11, color: '#c9a96e', background: 'transparent', border: '1px solid #6b4f28', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}>
          書き直す
        </button>
      </div>
    )
  }
  return (
    <div style={box}>
      {head}
      <p style={{ fontSize: 11, color: '#8a6a3a', lineHeight: 1.8, marginBottom: 12 }}>
        この等級で得たものを、自分の言葉で残しておきましょう。空欄があっても保存できます。
      </p>
      {REFLECTION_FIELDS.map(f => (
        <label key={f.key} style={{ display: 'block', marginBottom: 12 }}>
          <span style={{ display: 'block', fontSize: 11, letterSpacing: '0.1em', color: '#c9a96e', marginBottom: 4 }}>
            {f.label}<span style={{ color: '#6b5030', marginLeft: 8, letterSpacing: 0 }}>{f.hint}</span>
          </span>
          <textarea value={draft[f.key]} onChange={e => setDraft(d => ({ ...d, [f.key]: e.target.value }))} rows={3} maxLength={2000}
            style={{ width: '100%', boxSizing: 'border-box', background: '#080502', color: '#e6d5b0', border: '1px solid #3d2a12', borderRadius: 4, padding: '8px 10px', fontSize: 13, lineHeight: 1.8, fontFamily: 'inherit', resize: 'vertical' }} />
        </label>
      ))}
      <div style={{ display: 'flex', gap: 10 }}>
        <button type="button" onClick={() => { onSave({ ...draft, updatedAt: new Date().toISOString() }); setEditing(false) }}
          style={{ fontSize: 12, color: '#0a0702', background: '#c9933a', border: 'none', borderRadius: 4, padding: '6px 14px', cursor: 'pointer', fontWeight: 700 }}>
          記録する
        </button>
        {value && (
          <button type="button" onClick={() => { setDraft({ learned: value.learned, remaining: value.remaining, apply: value.apply }); setEditing(false) }}
            style={{ fontSize: 11, color: '#8a6a3a', background: 'transparent', border: '1px solid #3d2a12', borderRadius: 4, padding: '6px 12px', cursor: 'pointer' }}>
            やめる
          </button>
        )}
      </div>
    </div>
  )
}

interface LevelCardProps {
  lv: LevelData
  idx: number
  state: CheckState
  unlocked: boolean
  onToggle: (lvId: string, key: string) => void
  reflection?: Reflection
  onSaveReflection: (lvId: string, r: Reflection) => void
  exams: ExamRecords
  onAddExam: (lvId: string, r: ExamRecord) => void
  onRemoveExam: (lvId: string, i: number) => void
}

function LevelCard({ lv, idx, state, unlocked, onToggle, reflection, onSaveReflection, exams, onAddExam, onRemoveExam }: LevelCardProps) {
  const [open, setOpen] = useState(false)
  const total = countAll(lv)
  const done = countDone(lv, state)
  const pct = Math.round((done / total) * 100)
  const tasksDone = done === total
  const allDone = levelComplete(lv, state, exams)
  const waitingExam = tasksDone && !allDone

  return (
    <div style={{ borderBottom: '1px solid #1a1208' }}>
      {/* ヘッダー */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'grid',
          gridTemplateColumns: '5px 60px 1fr auto',
          alignItems: 'stretch',
          cursor: 'pointer',
          background: '#0d0a05',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#130e06')}
        onMouseLeave={e => (e.currentTarget.style.background = '#0d0a05')}
      >
        {/* アクセントライン */}
        <div style={{ background: lv.accent }} />

        {/* アイコン */}
        <div style={{
          width: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          borderRight: '1px solid #1a1208',
          padding: '14px 0',
          color: lv.accent,
          background: allDone ? lv.light : '#0a0702',
          transition: 'background 0.3s',
        }}>
          {lv.icon}
        </div>

        {/* メタ情報 */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.18em', color: lv.accent, marginBottom: 3 }}>
            {lv.num}　·　{lv.title}
          </div>
          <div style={{
            fontFamily: "'Shippori Mincho', serif",
            fontSize: 16, fontWeight: 700, letterSpacing: '0.08em',
            color: allDone ? lv.accent : '#e6b555',
            marginBottom: 4,
          }}>
            {lv.name}
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#7a6040' }}>
            {done} / {total} 項目習得
          </div>
        </div>

        {/* 右側 */}
        <div style={{
          padding: '14px 18px 14px 10px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-end', justifyContent: 'center',
          gap: 5,
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: lv.accent }}>{pct}%</div>
          <div style={{
            width: 72, height: 4,
            background: '#1a1208', border: '0.5px solid #3d2a12',
            borderRadius: 1, overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', borderRadius: 1,
              background: lv.accent,
              width: `${pct}%`,
              transition: 'width 0.6s ease',
            }} />
          </div>
          <div style={{
            fontSize: 9, color: '#5a4020',
            transform: open ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.22s',
          }}>▶</div>
        </div>
      </div>

      {/* ボディ（開閉） */}
      {open && (
        <div style={{ background: '#100c06' }}>
          <Monologue text={lv.monologue} />
          <MasteryBlock conditions={lv.masteryConditions} />
          <SupportBlock supports={lv.supports} />
          <TasksBlock lv={lv} state={state} unlocked={unlocked} onToggle={onToggle} />
          {waitingExam && (
            <div style={{ borderTop: '1px solid #2a1f0e', background: '#0b0804', padding: '12px 20px', fontSize: 12, lineHeight: 1.8, color: '#e6b555' }}>
              課題はすべてチェック済みです。この等級の達成には、あと本試験の合格が必要です。
            </div>
          )}
          {unlocked && <ExaminerBlock lv={lv} records={exams[lv.id] ?? []} onAdd={r => onAddExam(lv.id, r)} onRemove={i => onRemoveExam(lv.id, i)} />}

          {/* 達成バナー */}
          {allDone && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#080502',
              borderTop: '2px solid #c9933a',
              padding: '14px 20px',
            }}>
              <div style={{
                fontSize: 26, color: '#e6b555',
                animation: 'cc-pulse 2s ease-in-out infinite',
              }}>★</div>
              <div>
                <div style={{
                  fontFamily: "'Shippori Mincho', serif",
                  fontSize: 14, fontWeight: 700,
                  color: '#e6b555', letterSpacing: '0.08em',
                }}>
                  {lv.name}　完全習得
                </div>
                <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#8a6a3a', marginTop: 3 }}>
                  ― 「{lv.title}」の称号を獲得 ―
                </div>
              </div>
            </div>
          )}

          {/* 振り返り(完全習得した等級だけ) */}
          {tasksDone && <ReflectionBlock lv={lv} value={reflection} onSave={r => onSaveReflection(lv.id, r)} />}

          {/* ロック表示 */}
          {!unlocked && (
            <div style={{
              borderTop: '1px solid #1a1208',
              padding: 16, textAlign: 'center',
              fontSize: 11, letterSpacing: '0.1em',
              color: '#3d2a12', background: '#0a0702',
            }}>
              ── 前の等級を完全習得すると解放される ──
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── メインコンポーネント ───────────────────────────────

export default function Chronicle() {
  // パスワード認証（sessionStorage = タブを閉じるまで有効）
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('cc_auth') === ADMIN_PASS
  )
  const [pw, setPw] = useState('')
  const [pwErr, setPwErr] = useState(false)

  if (!authed) {
    return (
      <>
        <Helmet>
          <title>管理ページ | こころの相談室 いしずえ</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div style={{
          minHeight: '100vh', background: '#0a0702',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Noto Serif JP', serif",
        }}>
          <div style={{
            background: '#0d0a05', border: '1px solid #3d2a12',
            borderRadius: 4, padding: '40px 32px', width: '100%', maxWidth: 320,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 20, color: '#e6b555', letterSpacing: '0.2em', marginBottom: 8 }}>
              ✦
            </div>
            <div style={{
              fontFamily: "'Shippori Mincho', serif",
              fontSize: 14, color: '#c9933a', letterSpacing: '0.15em', marginBottom: 24,
            }}>
              成長の書
            </div>
            <input
              type="password"
              value={pw}
              placeholder="パスワード"
              onChange={e => { setPw(e.target.value); setPwErr(false) }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (pw === ADMIN_PASS) {
                    sessionStorage.setItem('cc_auth', ADMIN_PASS)
                    setAuthed(true)
                  } else {
                    setPwErr(true)
                    setPw('')
                  }
                }
              }}
              style={{
                width: '100%', padding: '10px 14px',
                background: '#080502', border: `1px solid ${pwErr ? '#8a3a3a' : '#3d2a12'}`,
                borderRadius: 2, color: '#c9933a', fontSize: 14,
                fontFamily: "'Noto Serif JP', serif",
                outline: 'none', textAlign: 'center',
                letterSpacing: '0.2em',
              }}
              autoFocus
            />
            {pwErr && (
              <div style={{ fontSize: 11, color: '#8a3a3a', marginTop: 8, letterSpacing: '0.1em' }}>
                パスワードが違います
              </div>
            )}
            <button
              onClick={() => {
                if (pw === ADMIN_PASS) {
                  sessionStorage.setItem('cc_auth', ADMIN_PASS)
                  setAuthed(true)
                } else {
                  setPwErr(true)
                  setPw('')
                }
              }}
              style={{
                marginTop: 16, width: '100%',
                padding: '10px', background: '#2a1f0e',
                border: '1px solid #6b4f28', borderRadius: 2,
                color: '#c9933a', fontSize: 12, letterSpacing: '0.2em',
                cursor: 'pointer', fontFamily: "'Noto Serif JP', serif",
              }}
            >
              入る
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>成長の書 | こころの相談室 いしずえ</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ChronicleInner />
    </>
  )
}

// 認証後の本体（Chronicle のロジックを分離）
function ChronicleInner() {
  const [checkState, setCheckState] = useState<CheckState>(loadState)

  const handleToggle = useCallback((lvId: string, key: string) => {
    setCheckState(prev => {
      const next = {
        ...prev,
        [lvId]: { ...prev[lvId], [key]: !prev[lvId]?.[key] },
      }
      saveState(next)
      return next
    })
  }, [])

  const [reflections, setReflections] = useState<Reflections>(loadReflections)
  const handleSaveReflection = useCallback((lvId: string, r: Reflection) => {
    setReflections(prev => {
      const next = { ...prev, [lvId]: r }
      saveReflections(next)
      return next
    })
  }, [])
  const [exams, setExams] = useState<ExamRecords>(loadExams)
  const handleAddExam = useCallback((lvId: string, r: ExamRecord) => {
    setExams(prev => {
      const next = { ...prev, [lvId]: [...(prev[lvId] ?? []), r] }
      saveExams(next)
      return next
    })
  }, [])
  const handleRemoveExam = useCallback((lvId: string, i: number) => {
    setExams(prev => {
      const next = { ...prev, [lvId]: (prev[lvId] ?? []).filter((_, j) => j !== i) }
      saveExams(next)
      return next
    })
  }, [])
  const [daily, setDaily] = useState<DailyStore>(loadDaily)
  const handleDaily = useCallback((d: DailyStore) => { saveDaily(d); setDaily(d) }, [])
  const [ioMsg, setIoMsg] = useState('')
  const handleImport = async (file: File | undefined) => {
    if (!file) return
    if (file.size > 1_000_000) { setIoMsg('ファイルが大きすぎます。書き出したファイルを選んでください。'); return }
    const next = parseImported(await file.text())
    if (!next) { setIoMsg('読み込めませんでした。書き出したファイルを選んでください。'); return }
    const parts = ['チェック状態', next.reflections ? '振り返り' : '', next.exams ? '本試験の記録' : '', next.daily ? '今日の一頁の記録' : ''].filter(Boolean).join('と')
    const msg = `今の${parts}を、このファイルの内容で置きかえます(ファイルに入っていないものは今のまま残します)。よろしいですか？`
    if (!window.confirm(msg)) return
    saveState(next.state)
    setCheckState(next.state)
    if (next.reflections) { saveReflections(next.reflections); setReflections(next.reflections) }
    if (next.exams) { saveExams(next.exams); setExams(next.exams) }
    if (next.daily) { saveDaily(next.daily); setDaily(next.daily) }
    setIoMsg('読み込みました。')
  }

  const unlockedIds = LEVELS.filter((_, idx) => idx === 0 || levelComplete(LEVELS[idx - 1], checkState, exams)).map(l => l.id)
  const totalAll = LEVELS.reduce((s, lv) => s + countAll(lv), 0)
  const doneAll = LEVELS.reduce((s, lv) => s + countDone(lv, checkState), 0)
  const globalPct = Math.round((doneAll / totalAll) * 100)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;700&family=Noto+Serif+JP:wght@400;500;700&display=swap');
        @keyframes cc-pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#0a0702',
        fontFamily: "'Noto Serif JP', serif",
        color: '#c9933a',
        padding: '20px 12px 60px',
      }}>
        <div style={{
          maxWidth: 760, margin: '0 auto',
          border: '2px solid #6b4f28',
          borderRadius: 2,
          background: '#0d0a05',
          position: 'relative',
        }}>
          {/* 内枠 */}
          <div style={{
            position: 'absolute', inset: 6,
            border: '1px solid #3d2a12',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* ヘッダー */}
          <header style={{
            background: '#080502',
            borderBottom: '2px solid #6b4f28',
            padding: '28px 24px 20px',
            textAlign: 'center',
            position: 'relative', zIndex: 1,
          }}>
            {[['top:8px;left:10px','tl'],['top:8px;right:10px','tr'],['bottom:8px;left:10px','bl'],['bottom:8px;right:10px','br']].map(([s]) => (
              <span key={s} style={{
                position: 'absolute', fontSize: 18, color: '#6b4f28', lineHeight: 1,
                top: s.includes('top') ? 8 : undefined,
                bottom: s.includes('bottom') ? 8 : undefined,
                left: s.includes('left') ? 10 : undefined,
                right: s.includes('right') ? 10 : undefined,
              }}>✦</span>
            ))}
            <div style={{
              fontFamily: "'Shippori Mincho', serif",
              fontSize: 26, fontWeight: 700, letterSpacing: '0.3em', color: '#e6b555',
            }}>
              COUNSELOR　CHRONICLE
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.4em', color: '#6b4f28', marginTop: 4 }}>
              ONLINE COUNSELING MASTERY RECORD
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#8a6a3a', marginTop: 8 }}>
              ― オンラインカウンセリング　成長の書 ―
            </div>
          </header>

          {/* グローバルプログレス */}
          <div style={{
            background: '#0a0702',
            borderBottom: '1px solid #2a1f0e',
            padding: '12px 24px',
            display: 'flex', alignItems: 'center', gap: 14,
            position: 'relative', zIndex: 1,
          }}>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: '#8a6a3a', whiteSpace: 'nowrap' }}>
              総習得度
            </div>
            <div style={{
              flex: 1, height: 8,
              background: '#1a1208',
              border: '1px solid #3d2a12',
              borderRadius: 1, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: 1,
                background: 'linear-gradient(to right, #8a6030, #e6b555)',
                width: `${globalPct}%`,
                transition: 'width 1s cubic-bezier(.4,0,.2,1)',
              }} />
            </div>
            <div style={{ fontSize: 10, color: '#c9933a', minWidth: 52, textAlign: 'right' }}>
              {doneAll} / {totalAll}
            </div>
          </div>

          {/* 今日の一頁(毎日の学習) */}
          <DailyPageBlock levels={LEVELS} unlockedIds={unlockedIds} store={daily} onChange={handleDaily} examLists={Object.values(exams)} />

          {/* 等級カード群 */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {LEVELS.map((lv, idx) => {
              const prevDone = idx === 0 || levelComplete(LEVELS[idx - 1], checkState, exams)
              return (
                <LevelCard
                  key={lv.id}
                  lv={lv}
                  idx={idx}
                  state={checkState}
                  unlocked={prevDone}
                  onToggle={handleToggle}
                  reflection={reflections[lv.id]}
                  onSaveReflection={handleSaveReflection}
                  exams={exams}
                  onAddExam={handleAddExam}
                  onRemoveExam={handleRemoveExam}
                />
              )
            })}
          </div>

          {/* 振り返りの記録(これまでの等級をまとめて読む) */}
          {LEVELS.some(lv => reflections[lv.id]) && (
            <details style={{ borderTop: '2px solid #3d2a12', background: '#0c0904', padding: '14px 24px', position: 'relative', zIndex: 1 }}>
              <summary style={{ cursor: 'pointer', fontFamily: "'Shippori Mincho', serif", fontSize: 14, fontWeight: 700, color: '#e6b555', letterSpacing: '0.08em' }}>
                振り返りの記録を読む({LEVELS.filter(lv => reflections[lv.id]).length}等級)
              </summary>
              {LEVELS.filter(lv => reflections[lv.id]).map(lv => {
                const r = reflections[lv.id]
                return (
                  <div key={lv.id} style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #2a1f0e' }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.12em', color: lv.accent, marginBottom: 6 }}>
                      {lv.num}　{lv.name}{r.updatedAt && <span style={{ color: '#7a6040', marginLeft: 8 }}>{fmtDate(r.updatedAt)}</span>}
                    </div>
                    {REFLECTION_FIELDS.map(f => (
                      <div key={f.key} style={{ marginBottom: 8 }}>
                        <div style={{ fontSize: 10, color: '#8a6a3a', letterSpacing: '0.1em' }}>{f.label}</div>
                        <div style={{ fontSize: 13, lineHeight: 1.9, color: '#d8c7a4', whiteSpace: 'pre-wrap' }}>{r[f.key] || '—'}</div>
                      </div>
                    ))}
                  </div>
                )
              })}
            </details>
          )}

          {/* フッター */}
          <footer style={{
            borderTop: '2px solid #3d2a12',
            padding: '12px 24px',
            textAlign: 'center',
            fontSize: 10, letterSpacing: '0.15em', color: '#3d2a12',
            background: '#080502',
            position: 'relative', zIndex: 1,
          }}>
            ― チェック状態・振り返り・本試験の記録はこのブラウザに自動保存されます ―
            <div style={{ marginTop: 10, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', letterSpacing: '0.05em' }}>
              <button type="button" onClick={() => { exportState(checkState, reflections, exams, daily); setIoMsg('書き出しました。ファイルを大切に保管してください。') }}
                style={{ fontSize: 11, color: '#c9a96e', background: 'transparent', border: '1px solid #6b4f28', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}>
                記録を書き出す(控え)
              </button>
              <label style={{ fontSize: 11, color: '#c9a96e', border: '1px solid #6b4f28', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}>
                控えから読み込む
                <input type="file" accept="application/json,.json" style={{ display: 'none' }}
                  onChange={e => { handleImport(e.target.files?.[0]); e.target.value = '' }} />
              </label>
            </div>
            {ioMsg && <p role="status" style={{ marginTop: 6, fontSize: 11, color: '#8a7350', letterSpacing: '0.05em' }}>{ioMsg}</p>}
          </footer>
        </div>
      </div>
    </>
  )
} // ChronicleInner

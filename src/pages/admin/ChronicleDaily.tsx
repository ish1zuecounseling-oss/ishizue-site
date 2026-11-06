// src/pages/admin/ChronicleDaily.tsx
// 成長の書 — 毎日の学習「今日の一頁」
//
// ① 思い出す(答えを隠して自分の言葉で書く→答えを確かめる→自己評価)
// ② 一言ロールプレイ(試験官の確認項目のセリフに1〜2文で返す→見るポイントと見比べる)
// ③ 読む(任意:その課題の「まず読む」1か所)
// 最後に「今日、次に意識すること」を一言。
// 「1だけやる」(約2分)も正式な1頁として記録する。
//
// この記録は、合否・等級の達成率・6指標の採点には一切使わない(振り返りと出題の順番にだけ使う)。
// 進み具合は連続日数ではなく累計の頁数で表し、休んでもリセットしない。

import { useMemo, useState, type CSSProperties } from 'react'
import type { LevelData } from '../../data/chronicleData'
import { refsFor, DAILY_REFS } from '../../data/chronicleRefs'
import { DAILY_SCENES, INDICATORS, type IndKey } from '../../data/chronicleExaminers'
import { TALK, TALK_TYPES, SCENE_TALK, findTalk, type TalkEntry } from '../../data/chronicleTalk'

// ── 出題の間隔(日)。使ってみて調整するときはここを変える ──
export const DAILY_INTERVALS = {
  not: 3,     // 「まだ」 → 2〜3日後
  half: 5,    // 「半分」 → 4〜5日後
  ok: 7,      // 「言えた」の1回目 → 7日後
  okGrow: 2,  // 「言えた」が続いたら、前回の間隔 × この倍率
  okMax: 60,  // 間隔の上限
}
// 累計の頁数で増える「しるし」
const MARKS = [1, 10, 30, 50, 100, 200, 365]

export type Rating = 'ok' | 'half' | 'not'
const RATING_LABEL: Record<Rating, string> = { ok: '言えた', half: '半分', not: 'まだ' }
export interface DailyPage {
  date: string          // 学習日(日本時間 YYYY-MM-DD)
  at: string            // 書き込んだ時刻(ISO)
  mode: 'full' | 'mini' // 通常の一頁 / 1だけやる
  task: string          // 課題のキー(等級id:カテゴリ:番号)
  recall: string        // 思い出す練習で書いた文章
  rating?: Rating
  scene?: string        // 一言ロールプレイの場面id
  reply?: string        // ロールプレイで書いた返答
  read?: boolean        // 「まず読む」を読んだか
  next?: string         // 今日、次に意識すること
}
interface Sched { due: string; interval: number; last: Rating }
export interface DailyStore {
  pages: DailyPage[]
  sched: Record<string, Sched>
  today?: { date: string; task: string; scene?: string; shift: number }
}

const DAILY_KEY = 'ishizue_chronicle_daily_v1'
export function loadDaily(): DailyStore {
  try {
    const raw = JSON.parse(localStorage.getItem(DAILY_KEY) || '{}')
    return cleanDaily(raw) ?? { pages: [], sched: {} }
  } catch {
    return { pages: [], sched: {} }
  }
}
export function saveDaily(d: DailyStore) {
  try { localStorage.setItem(DAILY_KEY, JSON.stringify(d)) } catch { /* quota exceeded etc. */ }
}
const str = (v: unknown, n: number) => (typeof v === 'string' ? v.slice(0, n) : '')
const isDate = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)
/** 読み込んだデータの形をそろえる(書き出したファイルの読み込みにも使う) */
export function cleanDaily(raw: unknown): DailyStore | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const r = raw as Record<string, unknown>
  const pages: DailyPage[] = Array.isArray(r.pages) ? r.pages
    .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object' && isDate((x as Record<string, unknown>).date) && typeof (x as Record<string, unknown>).task === 'string')
    .map(x => ({
      date: x.date as string, at: str(x.at, 40), mode: x.mode === 'mini' ? 'mini' as const : 'full' as const, task: str(x.task, 200),
      recall: str(x.recall, 3000),
      rating: x.rating === 'ok' || x.rating === 'half' || x.rating === 'not' ? x.rating : undefined,
      scene: typeof x.scene === 'string' ? x.scene.slice(0, 40) : undefined,
      reply: typeof x.reply === 'string' ? x.reply.slice(0, 2000) : undefined,
      read: x.read === true ? true : undefined,
      next: typeof x.next === 'string' ? x.next.slice(0, 300) : undefined,
    })) : []
  const sched: Record<string, Sched> = {}
  if (r.sched && typeof r.sched === 'object') {
    for (const [k, v] of Object.entries(r.sched as Record<string, unknown>)) {
      const s = v as Record<string, unknown>
      if (s && isDate(s.due) && typeof s.interval === 'number' && (s.last === 'ok' || s.last === 'half' || s.last === 'not')) sched[k.slice(0, 200)] = { due: s.due, interval: s.interval, last: s.last }
    }
  }
  return { pages, sched }
}

// ── 日付・乱数 ──
const todayJst = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' })
function addDays(d: string, n: number) {
  const t = new Date(`${d}T00:00:00Z`); t.setUTCDate(t.getUTCDate() + n)
  return t.toISOString().slice(0, 10)
}
function seeded(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619) }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000 }
}

// ── 6指標の傾向(出題の参考にするだけ) ──
const IND_WORDS: Record<IndKey, string[]> = {
  mitate: ['アセスメント', '見立て', '仮説', 'フォーミュレーション', 'BPS', 'バイオサイコ', '主訴'],
  konkyo: ['守秘', '通告', '医療行為', 'リスク', '希死念慮', 'リファー', '安全', '倫理', '外部資源'],
  kouzou: ['フロー', '終結', '記録', '契約', '目標', 'セッション終了', '宿題', '進み具合'],
  kanjo: ['共感', '受容', '感情', 'リフレクション', '受け止め', '評価せず'],
  kankei: ['ラプチャー', '関係', 'ペース', '返信', '依存', '間を置く'],
  jibun: ['逆転移', '動揺', 'バイアス', '価値観', 'イライラ', '自分の限界'],
}
type IndRecord = { ind?: Partial<Record<IndKey, number | 'na'>> }
function weakIndicator(examLists: IndRecord[][]): IndKey | undefined {
  const recent = examLists.flat().filter(r => r.ind && Object.keys(r.ind).length).slice(-3)
  let best: { k: IndKey; avg: number } | undefined
  for (const d of INDICATORS) {
    const nums = recent.map(r => r.ind?.[d.key]).filter((v): v is number => typeof v === 'number')
    if (!nums.length) continue
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length
    if (avg < 3 && (!best || avg < best.avg)) best = { k: d.key, avg }
  }
  return best?.k
}

// ── 出題 ──
interface TaskRef { key: string; lv: LevelData; cat: string; i: number; label: string; answer: string }
function taskList(levels: LevelData[]): TaskRef[] {
  return levels.flatMap(lv => Object.entries(lv.tasks).flatMap(([cat, items]) =>
    items.map((t, i) => ({ key: `${lv.id}:${cat}:${i}`, lv, cat, i, label: t.label, answer: t.answer }))))
}
function pickTask(date: string, tasks: TaskRef[], store: DailyStore, weak: IndKey | undefined, exclude: string[]): string | undefined {
  if (!tasks.length) return undefined
  const rnd = seeded(`${date}:${exclude.join(',')}`)
  const pool = tasks.filter(t => !exclude.includes(t.key))
  const list = pool.length ? pool : tasks
  // 1. 再出題の日が来ているもの(いちばん古いものから)
  const due = list.filter(t => store.sched[t.key] && store.sched[t.key].due <= date)
    .sort((a, b) => store.sched[a.key].due.localeCompare(store.sched[b.key].due))
  if (due.length) return due[0].key
  // 2. まだ出ていない課題(等級を一通り経験できるように)。6指標の傾向は4割だけ参考にする
  const unseen = list.filter(t => !store.sched[t.key])
  if (unseen.length) {
    let cand = unseen
    if (weak && rnd() < 0.4) {
      const w = unseen.filter(t => IND_WORDS[weak].some(k => t.label.includes(k)))
      if (w.length) cand = w
    }
    return cand[Math.floor(rnd() * cand.length)].key
  }
  // 3. すべて出題済みで期日前なら、期日がいちばん近いもの
  return [...list].sort((a, b) => store.sched[a.key].due.localeCompare(store.sched[b.key].due))[0].key
}
function pickScene(date: string, lvIds: string[], shift: number, lastScene?: string) {
  const list = DAILY_SCENES.filter(s => lvIds.includes(s.lvId))
  if (!list.length) return undefined
  const pool = list.length > 1 ? list.filter(s => s.id !== lastScene) : list
  const rnd = seeded(`scene:${date}`)
  return pool[(Math.floor(rnd() * pool.length) + shift) % pool.length]
}
function nextSched(prev: Sched | undefined, rating: Rating, date: string): Sched {
  const I = DAILY_INTERVALS
  const interval = rating === 'not' ? I.not : rating === 'half' ? I.half
    : prev?.last === 'ok' ? Math.min(I.okMax, Math.round(prev.interval * I.okGrow)) : I.ok
  return { due: addDays(date, interval), interval, last: rating }
}

// ── トーク集の表示 ──
export function TalkCard({ e, lvName, note }: { e: TalkEntry; lvName: string; note?: string }) {
  return (
    <div style={{ border: '1px solid #2a3d2a', borderRadius: 4, padding: '7px 10px', background: '#0d120b', marginTop: 6 }}>
      <div style={{ fontSize: 10.5, color: '#9fc98a' }}>トーク集 {lvName} #{e.n} {e.title}{e.self ? '(自分への言葉)' : ''}{note ? ` ・${note}` : ''}</div>
      <ul style={{ margin: '4px 0 0', paddingLeft: 16, fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.8 }}>
        {e.lines.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
      {e.byType && (
        <details style={{ marginTop: 4 }}>
          <summary style={{ fontSize: 10.5, color: '#9fc98a', cursor: 'pointer' }}>反応タイプ別({e.self ? '相手がこう反応したときの自分' : '相手がこう反応したら'})</summary>
          <ul style={{ margin: '4px 0 0', paddingLeft: 16, fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.8 }}>
            {TALK_TYPES.map(t => <li key={t.id}><span style={{ color: '#9fc98a' }}>{t.label}:</span>{e.byType![t.id]}</li>)}
          </ul>
        </details>
      )}
    </div>
  )
}

// ── 見た目 ──
export const box: CSSProperties = { borderBottom: '1px solid #2a1f0e', background: '#0b0804', padding: '16px 20px', position: 'relative', zIndex: 1 }
export const btn: CSSProperties = { fontSize: 11.5, color: '#c9a96e', background: 'transparent', border: '1px solid #6b4f28', borderRadius: 4, padding: '6px 12px', cursor: 'pointer' }
export const primary: CSSProperties = { ...btn, color: '#0a0702', background: '#c9933a', border: 'none', fontWeight: 700 }
export const area: CSSProperties = { width: '100%', boxSizing: 'border-box', background: '#080502', color: '#e6d5b0', border: '1px solid #3d2a12', borderRadius: 4, padding: '7px 10px', fontSize: 12.5, lineHeight: 1.7, fontFamily: 'inherit', resize: 'vertical' }
export const stepHead: CSSProperties = { fontSize: 11, letterSpacing: '0.12em', color: '#e6b555', margin: '14px 0 6px' }
export const quiet: CSSProperties = { fontSize: 10.5, color: '#8a6a3a', lineHeight: 1.7 }

export function DailyPageBlock({ levels, unlockedIds, store, onChange, examLists }: {
  levels: LevelData[]; unlockedIds: string[]; store: DailyStore; onChange: (d: DailyStore) => void; examLists: IndRecord[][]
}) {
  const date = todayJst()
  const tasks = useMemo(() => taskList(levels.filter(l => unlockedIds.includes(l.id))), [levels, unlockedIds])
  const [mode, setMode] = useState<null | 'full' | 'mini'>(null)
  const [recall, setRecall] = useState('')
  const [shown, setShown] = useState(false)
  const [rating, setRating] = useState<Rating | undefined>()
  const [reply, setReply] = useState('')
  const [lookShown, setLookShown] = useState(false)
  const [read, setRead] = useState(false)
  const [next, setNext] = useState('')
  const [histOpen, setHistOpen] = useState(false)
  const [whyOpen, setWhyOpen] = useState(false)
  const [talkOpen, setTalkOpen] = useState(false)

  const total = store.pages.length
  const doneToday = store.pages.filter(p => p.date === date).length
  const earned = MARKS.filter(m => total >= m)
  const nextMark = MARKS.find(m => total < m)

  // 今日の出題(日付が同じあいだは固定。書き込んだら次の課題に進む)
  const today = store.today && store.today.date === date ? store.today : undefined
  const lastTask = store.pages[store.pages.length - 1]?.task
  const lastScene = [...store.pages].reverse().find(p => p.scene)?.scene
  const taskKey = today?.task && tasks.some(t => t.key === today.task) ? today.task
    : pickTask(date, tasks, store, weakIndicator(examLists), [lastTask, ...store.pages.filter(p => p.date === date).map(p => p.task)].filter(Boolean) as string[])
  const task = tasks.find(t => t.key === taskKey)
  const shift = today?.shift ?? 0
  const scene = pickScene(date, unlockedIds, shift, lastScene)
  const src = task ? refsFor(task.lv.id, task.cat, task.i) : undefined
  const prevPage = task ? [...store.pages].reverse().find(p => p.task === task.key) : undefined

  const reset = () => { setMode(null); setTalkOpen(false); setRecall(''); setShown(false); setRating(undefined); setReply(''); setLookShown(false); setRead(false); setNext('') }
  const start = (m: 'full' | 'mini') => {
    if (!task) return
    if (!today || today.task !== task.key) onChange({ ...store, today: { date, task: task.key, scene: scene?.id, shift } })
    setMode(m)
  }
  const otherScene = () => onChange({ ...store, today: { date, task: taskKey ?? '', scene: undefined, shift: shift + 1 } })
  const save = () => {
    if (!task || !mode) return
    const page: DailyPage = {
      date, at: new Date().toISOString(), mode, task: task.key, recall: recall.trim(), rating,
      scene: mode === 'full' && scene ? scene.id : undefined,
      reply: mode === 'full' && reply.trim() ? reply.trim() : undefined,
      read: mode === 'full' && read ? true : undefined,
      next: next.trim() || undefined,
    }
    const sched = rating ? { ...store.sched, [task.key]: nextSched(store.sched[task.key], rating, date) } : store.sched
    onChange({ pages: [...store.pages, page], sched, today: undefined })
    reset()
  }

  if (!tasks.length) return null
  return (
    <section style={box} aria-label="今日の一頁">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: 15, fontWeight: 700, color: '#e6b555', letterSpacing: '0.1em' }}>📖 今日の一頁</div>
        <div style={{ fontSize: 11, color: '#c9a96e' }}>
          これまでに書いた頁 <b style={{ fontSize: 15, color: '#e6b555' }}>{total}</b>
          {doneToday > 0 && <span style={{ marginLeft: 8, color: '#9fc98a' }}>今日 {doneToday}頁</span>}
        </div>
      </div>
      <div style={{ fontSize: 12, color: '#e6b555', margin: '4px 0 2px', letterSpacing: '0.2em' }} aria-label={`しるし ${earned.length}個`}>
        {MARKS.map(m => <span key={m} title={`${m}頁`} style={{ opacity: total >= m ? 1 : 0.18, marginRight: 4 }}>✦</span>)}
      </div>
      <p style={quiet}>
        {nextMark ? `あと${nextMark - total}頁で、次のしるし(${nextMark}頁)。` : 'すべてのしるしがそろいました。'}
        休んでも頁は減りません。この記録は合否や達成率には使いません。
      </p>

      {!mode && task && (
        <>
          <p style={{ fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.8, margin: '8px 0' }}>
            今日の課題:<span style={{ color: task.lv.accent }}>{task.lv.num} {task.lv.name}</span>・{task.cat}
            {store.sched[task.key] && <span style={{ ...quiet, marginLeft: 6 }}>(前回:{RATING_LABEL[store.sched[task.key].last]})</span>}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" style={primary} onClick={() => start('full')}>今日の一頁をはじめる(5〜10分)</button>
            <button type="button" style={btn} onClick={() => start('mini')}>1だけやる(約2分)</button>
          </div>
        </>
      )}

      {mode && task && (
        <div style={{ marginTop: 8 }}>
          {/* ① 思い出す */}
          <div style={stepHead}>① 思い出す{mode === 'mini' && '(1だけやる)'}</div>
          <p style={{ fontSize: 12.5, color: '#e6d5b0', lineHeight: 1.8, margin: '0 0 6px' }}>{task.label}</p>
          <p style={quiet}>答えを見る前に、自分の言葉で書いてみてください。{mode === 'mini' ? '一言だけでかまいません。' : '間違えてもかまいません(思い出そうとすること自体が学習になります)。'}</p>
          <textarea value={recall} onChange={e => setRecall(e.target.value)} rows={mode === 'mini' ? 2 : 4} maxLength={3000} style={area} aria-label="自分の言葉での答え" />
          {!shown
            ? <button type="button" style={{ ...btn, marginTop: 6 }} onClick={() => setShown(true)}>答えを見る</button>
            : (
              <div style={{ marginTop: 8, border: '1px solid #3d2a12', borderRadius: 4, padding: '8px 10px', background: '#120d06' }}>
                <div style={{ fontSize: 10, color: '#c9a96e', marginBottom: 4 }}>答え</div>
                <div style={{ fontSize: 12, color: '#d8c7a4', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{task.answer}</div>
                {prevPage && (
                  <div style={{ marginTop: 8, paddingTop: 6, borderTop: '1px dashed #3d2a12', fontSize: 11, color: '#b09a74', lineHeight: 1.7 }}>
                    前回({prevPage.date})のあなたの答え{prevPage.rating && `・${RATING_LABEL[prevPage.rating]}`}:{prevPage.recall || '(書かずに確認)'}
                  </div>
                )}
                {TALK[task.key] && (
                  <div style={{ marginTop: 8 }}>
                    <button type="button" style={{ ...btn, padding: '4px 10px', fontSize: 11 }} onClick={() => setTalkOpen(v => !v)}>{talkOpen ? 'トーク集を閉じる' : 'この課題のトーク集を見る'}</button>
                    {talkOpen && <TalkCard e={TALK[task.key]} lvName={task.lv.num} />}
                  </div>
                )}
                <div style={{ fontSize: 10.5, color: '#c9a96e', margin: '8px 0 4px' }}>自分の答えはどうでしたか(次に出る時期が決まります)</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {(['ok', 'half', 'not'] as Rating[]).map(r => (
                    <button key={r} type="button" onClick={() => setRating(r)} aria-pressed={rating === r}
                      style={{ ...btn, ...(rating === r ? { background: '#3d2a12', color: '#e6b555' } : {}) }}>{RATING_LABEL[r]}</button>
                  ))}
                </div>
              </div>
            )}

          {/* ② 一言ロールプレイ */}
          {mode === 'full' && shown && scene && (
            <>
              <div style={stepHead}>② 一言ロールプレイ</div>
              <p style={quiet}>{scene.client}</p>
              <p style={{ fontSize: 12.5, color: '#e6d5b0', lineHeight: 1.8, margin: '4px 0 6px' }}>場面:{scene.cue}</p>
              {scene.heavy && <p style={{ ...quiet, color: '#d8b070' }}>重いテーマの場面です。今日はつらいと感じたら、別の場面にしてください。</p>}
              <textarea value={reply} onChange={e => setReply(e.target.value)} rows={3} maxLength={2000} style={area} placeholder="クライアントに返す言葉を1〜2文で" aria-label="ロールプレイの返答" />
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 6 }}>
                {!lookShown && <button type="button" style={btn} onClick={() => setLookShown(true)}>見るポイントと見比べる</button>}
                <button type="button" style={btn} onClick={otherScene}>別の場面にする</button>
              </div>
              {lookShown && (
                <div style={{ marginTop: 8, border: '1px solid #3d2a12', borderRadius: 4, padding: '8px 10px', background: '#120d06', fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.8 }}>
                  <div style={{ fontSize: 10, color: '#c9a96e' }}>見るポイント(試験官の基準・{scene.title})</div>
                  {scene.look}
                  <div style={{ ...quiet, marginTop: 4 }}>正解の言い回しは一つではありません。見るポイントの行動が入っているかで見比べてください。</div>
                </div>
              )}
              {lookShown && (() => {
                const fixed = (SCENE_TALK[scene.id] ?? []).filter(k => TALK[k])
                const auto = reply.trim().length >= 8 ? findTalk(reply, unlockedIds, 2, fixed) : []
                const lvOf = (k: string) => levels.find(l => l.id === k.split(':')[0])?.num ?? ''
                return (
                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 10.5, color: '#c9a96e' }}>この場面のトーク集</div>
                    {fixed.map(k => <div key={k}><TalkCard e={TALK[k]} lvName={lvOf(k)} /></div>)}
                    {auto.length > 0 && (
                      <>
                        <div style={{ fontSize: 10.5, color: '#c9a96e', marginTop: 10 }}>あなたの返答に近い言い回し(自動で探した候補)</div>
                        {auto.map(r => <div key={r.key}><TalkCard e={r.entry} lvName={lvOf(r.key)} /></div>)}
                      </>
                    )}
                    <p style={{ ...quiet, marginTop: 4 }}>{auto.length > 0 ? '下の候補は、書いた言葉に含まれる語からの機械的な推定です。合わないこともあります。' : reply.trim().length >= 8 ? '書いた返答に近い言い回しは、ほかに見つかりませんでした。' : ''}</p>
                  </div>
                )
              })()}
            </>
          )}

          {/* ③ 読む(任意) */}
          {mode === 'full' && shown && src?.start && (
            <>
              <div style={stepHead}>③ 読む(任意{src.start.min ? `・約${src.start.min}分` : ''})</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.8 }}>
                {src.start.r.u
                  ? <a href={src.start.r.u} target="_blank" rel="noopener noreferrer" style={{ color: '#e6c98a', textDecoration: 'underline', textUnderlineOffset: 2 }}>{src.start.r.t}</a>
                  : <span style={{ color: '#e6c98a' }}>{src.start.r.t}</span>}
                {src.start.where && <div style={{ color: '#c9b48a' }}>📍 {src.start.where}</div>}
                <div style={{ color: '#d8c7a4' }}>この課題との関係:{src.start.why}</div>
              </div>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 11.5, color: '#c9a96e' }}>
                <input type="checkbox" checked={read} onChange={e => setRead(e.target.checked)} /> 読んだ
              </label>
            </>
          )}

          {/* 今日、次に意識すること */}
          {shown && (
            <>
              <div style={stepHead}>今日、次に意識すること(一言{mode === 'mini' ? '・任意' : ''})</div>
              <input value={next} onChange={e => setNext(e.target.value.slice(0, 300))} placeholder="例:感情を推測して終わらず、本人に確かめる"
                style={{ ...area, padding: '6px 10px' }} aria-label="今日、次に意識すること" />
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                <button type="button" style={primary} onClick={save}>この頁を書き込む</button>
                <button type="button" style={btn} onClick={() => { if (window.confirm('書いた内容を消して、やめますか？')) reset() }}>やめる</button>
              </div>
            </>
          )}
        </div>
      )}

      {/* これまでの頁 */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
        {total > 0 && <button type="button" style={btn} onClick={() => setHistOpen(v => !v)}>{histOpen ? 'これまでの頁を閉じる' : 'これまでの頁を見返す'}</button>}
        <button type="button" style={btn} onClick={() => setWhyOpen(v => !v)}>{whyOpen ? '根拠を閉じる' : 'この学習法の根拠'}</button>
      </div>
      {histOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
          {[...store.pages].reverse().slice(0, 60).map((p, i) => {
            const t = tasks.find(x => x.key === p.task) ?? taskList(levels).find(x => x.key === p.task)
            const sc = DAILY_SCENES.find(s => s.id === p.scene)
            return (
              <li key={i} style={{ borderBottom: '1px solid #1a1208', padding: '6px 0' }}>
                <details>
                  <summary style={{ cursor: 'pointer', fontSize: 11.5, color: '#d8c7a4' }}>
                    <span style={{ color: '#7a6040' }}>{p.date}</span>
                    {p.mode === 'mini' && <span style={{ color: '#7aa0c9', marginLeft: 6 }}>1だけ</span>}
                    {p.rating && <span style={{ color: '#e6b555', marginLeft: 6 }}>{RATING_LABEL[p.rating]}</span>}
                    <span style={{ marginLeft: 6 }}>{t ? t.label.slice(0, 34) : '(今はない課題)'}…</span>
                  </summary>
                  <div style={{ fontSize: 11, color: '#b09a74', lineHeight: 1.8, marginTop: 4, whiteSpace: 'pre-wrap' }}>
                    <div>自分の答え:{p.recall || '(書かずに確認)'}</div>
                    {sc && <div>場面:{sc.cue}</div>}
                    {p.reply && <div>返した言葉:{p.reply}</div>}
                    {p.read && <div>「まず読む」を読んだ</div>}
                    {p.next && <div>次に意識すること:{p.next}</div>}
                  </div>
                </details>
              </li>
            )
          })}
        </ul>
      )}
      {whyOpen && (
        <div style={{ marginTop: 8, fontSize: 11, color: '#b09a74', lineHeight: 1.8 }}>
          <p style={{ color: '#d8b070', margin: '0 0 6px' }}>⚠ {DAILY_REFS.note}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {DAILY_REFS.refs.map((r, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {r.u ? <a href={r.u} target="_blank" rel="noopener noreferrer" style={{ color: '#e6c98a', textDecoration: 'underline' }}>{r.t}</a> : <span style={{ color: '#e6c98a' }}>{r.t}</span>}
                <span style={{ fontSize: 9, marginLeft: 6, border: '1px solid #8a7d70', borderRadius: 2, padding: '0 4px' }}>{r.v}</span>
                {(r.where || r.min) && <div style={{ color: '#c9b48a' }}>{r.where && `📍 ${r.where}`}{r.min ? `　⏱ 約${r.min}分` : ''}</div>}
                {r.read && <div>読みどころ:{r.read}</div>}
                {r.cite && <div style={{ fontSize: 10 }}>※ {r.cite}</div>}
              </li>
            ))}
          </ul>
          <p style={quiet}>出題の間隔:まだ→{DAILY_INTERVALS.not}日後、半分→{DAILY_INTERVALS.half}日後、言えた→{DAILY_INTERVALS.ok}日後(続けて言えたら間隔を{DAILY_INTERVALS.okGrow}倍に、最長{DAILY_INTERVALS.okMax}日)。同じ課題は続けて出しません。</p>
        </div>
      )}
    </section>
  )
}

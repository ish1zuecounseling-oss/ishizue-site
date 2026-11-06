// src/pages/admin/ChroniclePilot.tsx
// 成長の書 — 試作練習(7項目フォーマット・5課題)
//
// トーク集の言い回しを、3段階の練習に組み込む。
//   段階1 例文を見ながら(7項目とトーク集を全部見て答える)
//   段階2 例文を見ずに(人物・職種だけ変えた場面。観察・仮説・返答を書いてから見比べ、固定の4点で評価)
//   段階3 想定外の反応(相手の返しに合わせて対応を直す。見比べて、同じ4点で評価)
// 記録は「再現性(段階2)」「応用力(段階3)」「判断の根拠(観察 / 仮説)」に分けて残す。
// 段階の差をそのまま成長とは読まない(場面を覚えただけでも良くなるため)。
// 答え合わせは自己採点にしない。採点用の文章をコピーしてAIの試験官に採点してもらい、結果を貼り付けて読み取る(本試験と同じやり方)。
// この記録は、合否・等級の達成率・6指標の採点には使わない。
//
// 画面の見た目は役割ごとに色とラベルを分ける(練習問題=金 / トーク集=緑 / 回答欄=白 / 答え合わせ=青)。
// 1画面でやることは1つ。長い説明は折りたたむ。

import { useState, type CSSProperties, type ReactNode } from 'react'
import { PILOT, PILOT_EVAL, PILOT_ANCHORS, type PilotEvalId, type PilotTask, type PilotKind } from '../../data/chroniclePilot'
import { TALK } from '../../data/chronicleTalk'
import { TalkCard, box, btn, primary, area, quiet } from './ChronicleDaily'

type Mark = 'ok' | 'half' | 'not'
const MARKS: Mark[] = ['ok', 'half', 'not']
const MARK_LABEL: Record<Mark, string> = { ok: 'できた', half: '半分', not: 'まだ' }
type Evals = Partial<Record<PilotEvalId, Mark>>
type Quotes = Partial<Record<PilotEvalId, string>>
type By = 'ai' | 'self'
/** 1つの段階の採点。by=だれがつけたか(AIの試験官 / 自分)、note=AIの【安全】【次の一歩】 */
interface Score { e: Evals; q: Quotes; by?: By; note?: string }
const EMPTY: Score = { e: {}, q: {} }

export interface PilotRecord {
  date: string
  at: string
  key: string
  stage: 1 | 2 | 3       // どの段階まで進んだか
  r1?: string; m1?: Mark  // 段階1の返答(m1 は以前の自己評価。今は使わない)
  e1?: Evals; q1?: Quotes; by1?: By; n1?: string
  obs?: string; hyp?: string // 判断の根拠(段階2)
  r2?: string; e2?: Evals; q2?: Quotes; by2?: By; n2?: string // 再現性
  r3?: string; e3?: Evals; q3?: Quotes; by3?: By; n3?: string // 応用力
  memo?: string
}
export interface PilotStore { records: PilotRecord[] }

const PILOT_KEY = 'ishizue_chronicle_pilot_v1'
const todayJst = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' })
const s = (v: unknown, n: number) => (typeof v === 'string' && v ? v.slice(0, n) : undefined)
const mark = (v: unknown): Mark | undefined => (v === 'ok' || v === 'half' || v === 'not' ? v : undefined)
const evals = (v: unknown): Evals | undefined => {
  if (!v || typeof v !== 'object') return undefined
  const out: Evals = {}
  for (const p of PILOT_EVAL) { const m = mark((v as Record<string, unknown>)[p.id]); if (m) out[p.id] = m }
  return Object.keys(out).length ? out : undefined
}
const quotes = (v: unknown): Quotes | undefined => {
  if (!v || typeof v !== 'object') return undefined
  const out: Quotes = {}
  for (const p of PILOT_EVAL) { const q = s((v as Record<string, unknown>)[p.id], 300); if (q) out[p.id] = q }
  return Object.keys(out).length ? out : undefined
}
const by = (v: unknown): By | undefined => (v === 'ai' || v === 'self' ? v : undefined)

/** 読み込んだデータの形をそろえる(書き出したファイルの読み込みにも使う) */
export function cleanPilot(raw: unknown): PilotStore | null {
  if (!raw || typeof raw !== 'object' || !Array.isArray((raw as Record<string, unknown>).records)) return null
  const keys = new Set(PILOT.map(p => p.key))
  const records = ((raw as Record<string, unknown>).records as unknown[])
    .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object')
    .filter(x => typeof x.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x.date) && typeof x.key === 'string' && keys.has(x.key))
    .map(x => ({
      date: x.date as string, at: s(x.at, 40) ?? '', key: x.key as string,
      stage: (x.stage === 3 ? 3 : x.stage === 2 ? 2 : 1) as 1 | 2 | 3,
      r1: s(x.r1, 2000), m1: mark(x.m1), e1: evals(x.e1), q1: quotes(x.q1), by1: by(x.by1), n1: s(x.n1, 600),
      obs: s(x.obs, 1000), hyp: s(x.hyp, 1000),
      r2: s(x.r2, 2000), e2: evals(x.e2), q2: quotes(x.q2), by2: by(x.by2), n2: s(x.n2, 600),
      r3: s(x.r3, 2000), e3: evals(x.e3), q3: quotes(x.q3), by3: by(x.by3), n3: s(x.n3, 600), memo: s(x.memo, 500),
    }))
  return { records }
}
export function loadPilot(): PilotStore {
  try { return cleanPilot(JSON.parse(localStorage.getItem(PILOT_KEY) || '{}')) ?? { records: [] } } catch { return { records: [] } }
}
export function savePilot(d: PilotStore) {
  try { localStorage.setItem(PILOT_KEY, JSON.stringify(d)) } catch { /* quota exceeded etc. */ }
}

const evalSummary = (e?: Evals) => {
  if (!e) return '未評価'
  const c = MARKS.map(m => [m, PILOT_EVAL.filter(p => e[p.id] === m).length] as const).filter(([, n]) => n > 0)
  return c.map(([m, n]) => `${MARK_LABEL[m]}${n}`).join('・') || '未評価'
}


// ── 役割ごとの見た目 ──
type Role = 'problem' | 'talk' | 'answer' | 'check'
const ROLE: Record<Role, { label: string; color: string; bg: string }> = {
  problem: { label: '練習問題', color: '#e6b555', bg: '#140e05' },
  talk: { label: 'トーク集(ヒント)', color: '#9fc98a', bg: '#0d120b' },
  answer: { label: '回答欄', color: '#f0e6d0', bg: '#100c07' },
  check: { label: '答え合わせ', color: '#8fb8e8', bg: '#0a0f16' },
}
function Card({ role, children, sub }: { role: Role; children: ReactNode; sub?: string }) {
  const r = ROLE[role]
  return (
    <div role="region" aria-label={r.label} style={{ border: `1px solid ${r.color}55`, borderLeft: `4px solid ${r.color}`, borderRadius: 6, background: r.bg, padding: '10px 12px', marginTop: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: '#0a0702', background: r.color, borderRadius: 10, padding: '1px 9px' }}>{r.label}</span>
        {sub && <span style={{ fontSize: 10.5, color: r.color }}>{sub}</span>}
      </div>
      {children}
    </div>
  )
}
const txt: CSSProperties = { margin: 0, fontSize: 12, color: '#d8c7a4', lineHeight: 1.8 }
const List = ({ items }: { items: string[] }) => (
  <ul style={{ margin: '2px 0 0', paddingLeft: 16, fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.8 }}>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>
)
function More({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details style={{ marginTop: 6 }}>
      <summary style={{ fontSize: 12, color: '#c9a96e', cursor: 'pointer', padding: '4px 0' }}>{title}</summary>
      <div style={{ paddingLeft: 4 }}>{children}</div>
    </details>
  )
}
function Bubble({ who, text, mine }: { who: string; text: string; mine?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: mine ? 'flex-end' : 'flex-start', marginTop: 6 }}>
      <div style={{ maxWidth: '88%' }}>
        <div style={{ fontSize: 10, color: '#8a6a3a', textAlign: mine ? 'right' : 'left' }}>{who}</div>
        <div style={{ fontSize: 13, lineHeight: 1.7, color: mine ? '#d8c7a4' : '#f0e6d0', background: mine ? '#1c160c' : '#2a1f0e', border: '1px solid #3d2a12', borderRadius: mine ? '10px 10px 2px 10px' : '10px 10px 10px 2px', padding: '7px 11px' }}>{text}</div>
      </div>
    </div>
  )
}
/** 課題の種類ごとの言葉(相談者に返す / 後進などに説明する / 自分にかける) */
const KIND: Record<PilotKind, { ans: string; hint: string; hint3: string; f1: string; f1h: string; f2: string; f2h: string; t1: string; t2: string; t3: string; note?: string }> = {
  client: {
    ans: '相談者に返す言葉', hint: '実際に送る文を、そのまま1〜3文で書きます。説明や感想ではなく、相談者へのセリフです。', hint3: 'この返事を受けて、実際に送る文を1〜3文で',
    f1: '相談者が言ったこと・様子', f1h: '見たまま・書かれたままの事実だけ。例:「〜」と書いてきた、返事が急に短くなった',
    f2: 'そこから考えたこと(仮説)', f2h: 'まだ決めつけない見立て。例:〜と感じたのかもしれない',
    t1: 'トーク集を見ながら、相談者に返す言葉を書きます。', t2: 'トーク集は隠れています。別の相談者に、自分の言葉で返します。', t3: '相談者が思いがけない返事をしました。それに合わせて、言葉を直します。',
  },
  explain: {
    ans: '相手に伝える説明', hint: '実際に話す言葉で、1〜4文。専門用語は言いかえます。', hint3: 'この反応を受けて、実際に話す言葉で1〜4文',
    f1: '相手が言ったこと・つまずいていそうな点', f1h: '見たまま・聞いたままに。例:「〜」と聞いてきた。〜と〜を同じものだと思っていそう',
    f2: '何がわかっていないかの見立て(仮説)', f2h: 'まだ決めつけない見立て。例:〜の区別がついていないのかもしれない',
    t1: 'トーク集を見ながら、相手に伝える説明を書きます。', t2: 'トーク集は隠れています。別の質問に、自分の言葉で説明します。', t3: '相手が思いがけない反応をしました。それに合わせて、説明を直します。',
    note: '4つの観点の「相談者」は、説明する相手と読みかえます。',
  },
  self: {
    ans: '自分にかける言葉と、次にすること', hint: '心の中で自分に言う一文と、次に何をするか(しないか)を書きます。', hint3: 'このことを受けて、自分にかける言葉と次にすること',
    f1: '自分の中で起きたこと', f1h: '気持ち・体の感じ・したくなったことを、見たままに。例:胸がざわついて、すぐ返事をしたくなった',
    f2: 'それがどこから来ているかの見立て(仮説)', f2h: 'まだ決めつけない見立て。例:自分が〜だったころと重ねているのかもしれない',
    t1: 'トーク集を見ながら、自分にかける言葉と次にすることを書きます。', t2: 'トーク集は隠れています。別の場面で、自分の言葉で書きます。', t3: '思いがけないことが起きました。それに合わせて、言葉と行動を直します。',
    note: '4つの観点は、「相談者の発言」を「場面で起きたこと」、「必要な確認」を「SVや記録などの必要な手当て」、「対応を直す」を「自分の行動を直す」と読みかえます。',
  },
}

function Scene({ sc, who }: { sc: { sit: string; say?: string }; who: string }) {
  return (
    <>
      <p style={{ ...txt, fontSize: 11.5, color: '#c9b48a' }}>{sc.sit}</p>
      {sc.say && <Bubble who={who} text={`「${sc.say}」`} />}
    </>
  )
}
/** 回答欄の1つの入力。何を書くかを見出しで、書き方の例を下に */
function Field({ n, label, hint, value, onChange, rows = 3 }: { n?: string; label: string; hint: string; value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ fontSize: 12, color: '#f0e6d0', fontWeight: 700 }}>{n && <span style={{ color: '#e6b555', marginRight: 4 }}>{n}</span>}{label}</div>
      <div style={{ fontSize: 10.5, color: '#8a6a3a', margin: '1px 0 4px' }}>{hint}</div>
      <textarea aria-label={label} style={area} rows={rows} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  )
}
function Todo({ children }: { children: string }) {
  return <div style={{ fontSize: 12.5, color: '#f0e6d0', background: '#2a1f0e', borderRadius: 4, padding: '7px 10px', marginTop: 10 }}><span style={{ color: '#e6b555', fontWeight: 700 }}>やること:</span>{children}</div>
}

function MarkButtons({ value, onChange, label }: { value?: Mark; onChange: (m: Mark) => void; label: string }) {
  return (
    <div role="group" aria-label={label} style={{ display: 'inline-flex', gap: 4, flexWrap: 'wrap' }}>
      {MARKS.map(m => (
        <button key={m} type="button" aria-pressed={value === m} onClick={() => onChange(m)}
          style={{ ...btn, padding: '3px 10px', fontSize: 11, ...(value === m ? { background: '#8fb8e8', color: '#0a0702', borderColor: '#8fb8e8', fontWeight: 700 } : {}) }}>{MARK_LABEL[m]}</button>
      ))}
    </div>
  )
}
function Checks({ value, onChange }: { value: Evals; onChange: (e: Evals) => void }) {
  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ fontSize: 11.5, color: '#8fb8e8', fontWeight: 700 }}>自分でつける(毎回この4つ)</div>
      {PILOT_EVAL.map((p, i) => (
        <div key={p.id} style={{ padding: '6px 0', borderBottom: '1px dashed #1e2a38' }}>
          <div style={{ fontSize: 12, color: '#d8c7a4', marginBottom: 4 }}>{i + 1}. {p.label}</div>
          <MarkButtons label={p.label} value={value[p.id]} onChange={m => onChange({ ...value, [p.id]: m })} />
        </div>
      ))}
    </div>
  )
}
// ── 採点(AIの試験官) ──
// サイトから外部AIには送らない。採点用の文章をコピーして、本人がAIチャットに貼る(本試験と同じやり方)。
const SHORT: Record<PilotEvalId, string> = { grasp: '発言を捉える', fact: '事実と仮説', check: '必要な確認', adapt: '対応を直す' }
const STAGE_DESC = {
  1: '段階1(トーク集のお手本を見ながら答える)',
  2: '段階2(お手本を見ずに、段階1から人物・職種だけを変えた場面で答える)',
  3: '段階3(段階2の返答に、相談者が思いがけない返事をした。それに合わせて答え直す)',
} as const
interface Answers { r1?: string; obs?: string; hyp?: string; r2?: string; r3?: string }

export function buildScorePrompt(t: PilotTask, stage: 1 | 2 | 3, a: Answers): string {
  const sc = stage === 1 ? t.scene1 : t.scene2
  const lines: string[] = []
  lines.push('あなたは、カウンセラー育成の練習を採点する試験官です。下の練習問題に対する学習者の答えを、決まった4つの観点だけで採点してください。')
  lines.push('', '## 採点のきまり',
    '- 書かれた言葉だけを見て判断する。学習者の人柄・能力・経験を推測して評価しない',
    '- 4つの観点は、それぞれ独立して採点する',
    '- 各観点は「できた」「半分」「まだ」のどれか。書かれた内容から判断できないときは「判断できない」',
    '- 各観点に、根拠にした学習者の言葉を「」で短く引用し、理由を一文で書く',
    '- お手本と言い回しが違っても、観点を満たしていれば「できた」にしてよい。お手本どおりでも、場面に合っていなければ「できた」にしない',
    '- 安全に関わる明らかな問題(話題をそらす、約束だけで済ませる、危険の見落としなど)があれば【安全】に一文で書く。なければ「なし」',
    '- 下の「出力形式」以外は書かない(前置き・まとめ・励ましは不要)')
  const K = KIND[t.kind]
  if (K.note) lines.push(`- ${K.note}`)
  lines.push('', '## 練習問題', `課題:${t.lv} ${t.title}`, `課題のねらい:${t.purpose}`, `段階:${STAGE_DESC[stage]}`, `学習者が書くもの:${t.ask}`, `場面:${sc.sit}`)
  if (sc.say) lines.push(`${t.who}:「${sc.say}」`)
  if (stage === 3) { lines.push(`学習者の段階2の答え:「${a.r2 || '(なし)'}」`, `思いがけない反応(${t.twistWho}):${t.twist}`) }
  lines.push('', '## 学習者の答え')
  if (stage === 1) lines.push(`${K.ans}:「${a.r1 || ''}」`)
  if (stage === 2) lines.push(`①${K.f1}(事実として書いたもの):${a.obs || '(未記入)'}`, `②${K.f2}:${a.hyp || '(未記入)'}`, `③${K.ans}:「${a.r2 || ''}」`)
  if (stage === 3) lines.push(`${K.ans}:「${a.r3 || ''}」`)
  lines.push('', '## 採点の観点と目安')
  PILOT_EVAL.forEach((p, i) => {
    const an = PILOT_ANCHORS[p.id]
    lines.push(`${i + 1}. ${p.label}${p.id === 'fact' && stage === 2 ? '(①事実と②仮説の書き分けも見る)' : ''}`,
      `   できた:${an.ok}`, `   半分:${an.half}`, `   まだ:${an.not}`)
  })
  lines.push('', '## 参考(採点のためだけに使う。学習者には見せていない場合がある)',
    `お手本の言い回し:${t.phrases.join(' / ')}`, `この課題で特に見る点:${t.look.join(' / ')}`,
    `考え方の手順:観察=${t.observe.obs} / 仮説=${t.observe.hyp} / 確認=${t.observe.check} / 対応=${t.observe.act}`)
  if (stage === 3) lines.push(`相手の反応がちがうときの言い回し:${t.apply.join(' / ')}`)
  lines.push('', '## 出力形式(この形のまま)', '【採点】')
  PILOT_EVAL.forEach((p, i) => lines.push(`${i + 1}. ${SHORT[p.id]}:(できた・半分・まだ・判断できない のどれか1つ)|「引用」|理由を一文で`))
  lines.push('【安全】なし', '【次の一歩】次に意識するとよいことを一文で')
  return lines.join('\n')
}

/** AIの採点結果を読み取る。4点のうち1つも読めなければ null */
export function parseScore(text: string): Score | null {
  const e: Evals = {}; const q: Quotes = {}
  const val: Record<string, Mark | undefined> = { 'できた': 'ok', '半分': 'half', 'まだ': 'not', '判断できない': undefined }
  let found = 0
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*[*#\-\s]*([1-4１-４])\s*[.．、)）]\s*[^:：|｜]*[:：]\s*\**\s*(できた|半分|まだ|判断できない)\s*\**\s*[|｜]?\s*(.*)$/)
    if (!m) continue
    const n = Number(m[1].replace(/[１-４]/, c => String(c.charCodeAt(0) - 0xFF10))) - 1
    const id = PILOT_EVAL[n]?.id
    if (!id) continue
    found++
    const mk = val[m[2]]
    if (mk) e[id] = mk
    const rest = m[3].replace(/[|｜]/g, ' ').replace(/\*\*/g, '').trim()
    if (rest) q[id] = rest.slice(0, 300)
  }
  if (!found) return null
  const safety = text.match(/【安全】\s*[:：]?\s*(.+)/)?.[1]?.trim()
  const next = text.match(/【次の一歩】\s*[:：]?\s*(.+)/)?.[1]?.trim()
  const note = [safety && safety !== 'なし' ? `安全:${safety}` : '', next ? `次の一歩:${next}` : ''].filter(Boolean).join(' / ').slice(0, 600) || undefined
  return { e, q, by: 'ai', note }
}

function ScoreBox({ prompt, value, onChange, stage, note }: { prompt: string; value: Score; onChange: (v: Score) => void; stage: 1 | 2 | 3; note?: string }) {
  const [pasted, setPasted] = useState('')
  const [info, setInfo] = useState('')
  const [showPrompt, setShowPrompt] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(prompt); setInfo('コピーしました。AIチャット(Claude など)に貼り付けて送ってください。') }
    catch { setShowPrompt(true); setInfo('自動でコピーできませんでした。下の枠の文章を長押しして、すべて選択・コピーしてください。') }
  }
  const read = () => {
    const r = parseScore(pasted)
    if (!r) { setInfo('採点結果を読み取れませんでした。AIの返事を、【採点】から【次の一歩】まで全部貼り付けてください。'); return }
    onChange(r); setInfo('読み取りました。')
  }
  const done = value.by === 'ai' && Object.keys(value.e).length + Object.keys(value.q).length > 0
  const stepN = (n: string) => <span style={{ display: 'inline-block', minWidth: 18, height: 18, lineHeight: '18px', textAlign: 'center', borderRadius: 9, background: '#8fb8e8', color: '#0a0702', fontSize: 11, fontWeight: 700, marginRight: 6 }}>{n}</span>
  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ fontSize: 12, color: '#8fb8e8', fontWeight: 700 }}>AIの試験官に採点してもらう(段階{stage})</div>
      <div style={{ fontSize: 10.5, color: '#8a6a3a', margin: '2px 0 6px' }}>毎回同じ4つの観点と目安で採点します。{note ? `${note}` : ''}答えに実在の相談者の情報は書かないでください。</div>
      <div style={{ fontSize: 12, color: '#d8c7a4', lineHeight: 1.9 }}>
        <div>{stepN('1')}<button type="button" style={primary} onClick={copy}>採点用の文章をコピー</button></div>
        <div>{stepN('2')}AIチャットに貼り付けて送る</div>
        <div>{stepN('3')}返ってきた採点を、下に貼り付ける</div>
      </div>
      {showPrompt && <textarea readOnly aria-label="採点用の文章" style={{ ...area, fontSize: 11, marginTop: 4 }} rows={6} value={prompt} onFocus={e => e.currentTarget.select()} />}
      <textarea aria-label="AIの採点結果" style={{ ...area, marginTop: 6 }} rows={4} value={pasted} onChange={e => setPasted(e.target.value)} placeholder="【採点】1. 発言を捉える:できた|「…」|… のような返事を、そのまま貼り付けます" />
      <div style={{ marginTop: 6 }}><button type="button" style={btn} disabled={!pasted.trim()} onClick={read}>採点結果を読み取る</button></div>
      {info && <div role="status" style={{ fontSize: 11, color: '#9fc98a', marginTop: 4 }}>{info}</div>}

      {done && (
        <div style={{ marginTop: 8 }}>
          {PILOT_EVAL.map((p, i) => {
            const m = value.e[p.id]
            return (
              <div key={p.id} style={{ padding: '6px 0', borderBottom: '1px dashed #1e2a38' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'baseline' }}>
                  <span style={{ fontSize: 12, color: '#d8c7a4' }}>{i + 1}. {p.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#0a0702', background: m ? (m === 'ok' ? '#8fb8e8' : m === 'half' ? '#c9a96e' : '#a9a08a') : '#3d2a12', borderRadius: 3, padding: '1px 8px', whiteSpace: 'nowrap' }}>{m ? MARK_LABEL[m] : '判断できない'}</span>
                </div>
                {value.q[p.id] && <div style={{ fontSize: 11, color: '#a9a08a', lineHeight: 1.6, marginTop: 2 }}>{value.q[p.id]}</div>}
              </div>
            )
          })}
          {value.note && <div style={{ fontSize: 11.5, color: '#f0e6d0', marginTop: 6, lineHeight: 1.7 }}>{value.note}</div>}
        </div>
      )}
      <More title="AIを使えないとき(自分でつける)">
        <Checks value={value.by === 'self' ? value.e : {}} onChange={e => onChange({ e, q: {}, by: 'self' })} />
      </More>
    </div>
  )
}

function Model({ t }: { t: PilotTask }) {
  return (
    <>
      {t.phrases.map((x, i) => <p key={i} style={{ ...txt, fontSize: 12.5, color: '#f0e6d0', marginTop: 2 }}>{x}</p>)}
      <p style={{ ...txt, fontSize: 11, color: '#a9a08a', marginTop: 4 }}>なぜこの言葉か:{t.why}</p>
    </>
  )
}
const Observe = ({ t }: { t: PilotTask }) => (
  <List items={[`観察:${t.observe.obs}`, `仮説:${t.observe.hyp}`, `確認:${t.observe.check}`, `対応:${t.observe.act}`]} />
)
const STAGES = ['見ながら', '見ずに', '想定外'] as const
const LVS = [...new Set(PILOT.map(p => p.lv))]
/** 1つの段階の採点を、記録の形に入れる */
function pack(n: 1 | 2 | 3, sc: Score): Partial<PilotRecord> {
  const e = Object.keys(sc.e).length ? sc.e : undefined
  const q = Object.keys(sc.q).length ? sc.q : undefined
  const b = e || q ? sc.by : undefined
  if (n === 1) return { e1: e, q1: q, by1: b, n1: sc.note }
  if (n === 2) return { e2: e, q2: q, by2: b, n2: sc.note }
  return { e3: e, q3: q, by3: b, n3: sc.note }
}
const BY_LABEL: Record<By, string> = { ai: 'AIの採点', self: '自分でつけた' }
function ScoreLine({ e, q, b, n }: { e?: Evals; q?: Quotes; b?: By; n?: string }) {
  if (!e && !q) return null
  return (
    <div style={{ paddingLeft: 8, borderLeft: '2px solid #1e2a38', margin: '2px 0 4px' }}>
      <div style={{ color: '#8fb8e8' }}>{b ? BY_LABEL[b] : '採点'}</div>
      {PILOT_EVAL.map(x => (
        <div key={x.id}>{x.label}:{e?.[x.id] ? MARK_LABEL[e[x.id]!] : '—'}{q?.[x.id] ? `(${q[x.id]})` : ''}</div>
      ))}
      {n && <div>{n}</div>}
    </div>
  )
}

export function PilotBlock({ store, onChange }: { store: PilotStore; onChange: (d: PilotStore) => void }) {
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState<string | null>(null)
  const [stage, setStage] = useState<1 | 2 | 3>(1)
  const [r1, setR1] = useState(''); const [cmp1, setCmp1] = useState(false); const [s1, setS1] = useState<Score>(EMPTY)
  const [obs, setObs] = useState(''); const [hyp, setHyp] = useState(''); const [r2, setR2] = useState('')
  const [cmp2, setCmp2] = useState(false); const [s2, setS2] = useState<Score>(EMPTY)
  const [r3, setR3] = useState(''); const [cmp3, setCmp3] = useState(false); const [s3, setS3] = useState<Score>(EMPTY)
  const [memo, setMemo] = useState('')
  const [msg, setMsg] = useState('')
  const [histOpen, setHistOpen] = useState(false)
  const [selLv, setSelLv] = useState(LVS[0])

  const t = PILOT.find(p => p.key === key)
  const talk = t ? TALK[t.key] : undefined
  const K = KIND[t?.kind ?? 'client']

  const reset = (k: string | null) => {
    setKey(k); setStage(1); setR1(''); setCmp1(false); setS1(EMPTY); setObs(''); setHyp(''); setR2(''); setCmp2(false); setS2(EMPTY)
    setR3(''); setCmp3(false); setS3(EMPTY); setMemo('')
  }
  const go = (n: 1 | 2 | 3) => { setStage(n); if (typeof window !== 'undefined') document.getElementById('pilot-top')?.scrollIntoView({ block: 'start' }) }
  const save = (reached: 1 | 2 | 3) => {
    if (!t) return
    const rec: PilotRecord = {
      date: todayJst(), at: new Date().toISOString(), key: t.key, stage: reached,
      r1: r1.trim() || undefined, ...pack(1, s1),
      obs: reached >= 2 ? obs.trim() || undefined : undefined, hyp: reached >= 2 ? hyp.trim() || undefined : undefined,
      r2: reached >= 2 ? r2.trim() || undefined : undefined, ...(reached >= 2 ? pack(2, s2) : {}),
      r3: reached === 3 ? r3.trim() || undefined : undefined, ...(reached === 3 ? pack(3, s3) : {}),
      memo: memo.trim() || undefined,
    }
    onChange({ records: [...store.records, rec] })
    setMsg(`${t.lv}「${t.title}」を段階${reached}まで記録しました。`)
    reset(null)
  }
  const byTask = (k: string) => store.records.filter(r => r.key === k)
  const answers: Answers = { r1: r1.trim(), obs: obs.trim(), hyp: hyp.trim(), r2: r2.trim(), r3: r3.trim() }
  const endBtn = (n: 1 | 2) => <button type="button" style={btn} onClick={() => save(n)}>ここで記録して終える</button>

  return (
    <section aria-label="試作練習" style={box} id="pilot-top">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 13, color: '#e6b555', letterSpacing: '0.08em' }}>試作練習({PILOT.length}課題)</div>
          <div style={quiet}>トーク集を使って、言葉を選ぶ練習をします{store.records.length ? `・記録 ${store.records.length} 回` : ''}</div>
        </div>
        <button type="button" style={btn} aria-expanded={open} onClick={() => { setOpen(!open); setMsg('') }}>{open ? '閉じる' : '開く'}</button>
      </div>

      {open && (
        <div style={{ marginTop: 10 }}>
          {msg && <div role="status" style={{ fontSize: 12, color: '#9fc98a', marginBottom: 8 }}>{msg}</div>}

          {/* 課題の選択 */}
          {!t && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 12 }}>
                {[['1', '見ながら', 'トーク集を見て答える'], ['2', '見ずに', '別の相談者に自分の言葉で'], ['3', '想定外', '思いがけない返事に答え直す']].map(([n, a, b]) => (
                  <div key={n} style={{ border: '1px solid #3d2a12', borderRadius: 6, padding: '6px 8px', background: '#100c07' }}>
                    <div style={{ fontSize: 11, color: '#e6b555', fontWeight: 700 }}>段階{n} {a}</div>
                    <div style={{ fontSize: 10.5, color: '#a9a08a', lineHeight: 1.5 }}>{b}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, color: '#f0e6d0', marginBottom: 6 }}>練習する課題を選んでください</div>
              <div role="tablist" aria-label="等級" style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
                {LVS.map(lv => (
                  <button key={lv} type="button" role="tab" aria-selected={selLv === lv} onClick={() => setSelLv(lv)}
                    style={{ ...btn, padding: '4px 10px', fontSize: 11, ...(selLv === lv ? { background: '#c9933a', color: '#0a0702', borderColor: '#c9933a', fontWeight: 700 } : {}) }}>
                    {lv}<span style={{ fontSize: 9.5, marginLeft: 3 }}>({PILOT.filter(x => x.lv === lv).length})</span>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {PILOT.filter(p => p.lv === selLv).map(p => {
                  const n = byTask(p.key).length
                  return (
                    <button key={p.key} type="button" onClick={() => { reset(p.key); setMsg('') }}
                      style={{ ...btn, textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', color: '#f0e6d0' }}>
                      <span style={{ flex: 1, fontSize: 12 }}>{p.title}</span>
                      {p.kind !== 'client' && <span style={{ fontSize: 10, color: '#9fc98a', border: '1px solid #3d5a32', borderRadius: 3, padding: '0 5px', whiteSpace: 'nowrap' }}>{p.kind === 'explain' ? '説明' : '自分'}</span>}
                      {n > 0 && <span style={{ fontSize: 10.5, color: '#8a6a3a', whiteSpace: 'nowrap' }}>{n}回</span>}
                    </button>
                  )
                })}
              </div>
              <p style={{ ...quiet, marginTop: 6 }}>「説明」は後進などに説明する課題、「自分」は自分にかける言葉の課題です。</p>
              <More title="この練習について">
                <p style={quiet}>
                  練習の仕組みの試作で、臨床能力を証明するものではありません。希死念慮・安全計画の内容は、専門資料とSVで確認を続けます。
                  重いテーマを含むので、体調に合わせて段階1だけで終えてもかまいません。この記録は合否・達成率・6指標には使いません。
                </p>
              </More>
            </>
          )}

          {t && (
            <div>
              {/* 課題名と進み具合 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 13, color: '#f0e6d0' }}><span style={{ color: '#e6b555' }}>{t.lv}</span> {t.title}</div>
                <button type="button" style={{ ...btn, padding: '3px 9px', fontSize: 10.5 }} onClick={() => reset(null)}>課題を選び直す</button>
              </div>
              <div aria-label="進み具合" style={{ display: 'flex', gap: 4, marginTop: 8 }}>
                {STAGES.map((name, i) => {
                  const n = i + 1
                  return (
                    <span key={n} aria-current={stage === n ? 'step' : undefined} style={{ flex: 1, textAlign: 'center', fontSize: 10.5, padding: '4px 0', borderRadius: 3, fontWeight: stage === n ? 700 : 400, color: stage === n ? '#0a0702' : stage > n ? '#c9a96e' : '#6b5a3a', background: stage === n ? '#c9933a' : stage > n ? '#2a1f0e' : 'transparent', border: '1px solid #3d2a12' }}>
                      {stage > n ? '✓ ' : ''}段階{n} {name}
                    </span>
                  )
                })}
              </div>

              {/* ── 段階1 ── */}
              {stage === 1 && (
                <>
                  <Todo>{K.t1}</Todo>
                  <Card role="problem" sub={`書くもの:${t.ask}`}>
                    <Scene sc={t.scene1} who={t.who} />
                  </Card>
                  <Card role="talk" sub="見ながら答えてかまいません">
                    <More title="お手本の言い回し"><Model t={t} /></More>
                    {t.avoid.length > 0 && <More title="避けたい言い方"><List items={t.avoid} /></More>}
                    <More title="考え方の手順(観察 → 仮説 → 確認 → 対応)"><Observe t={t} /></More>
                    <More title="相手の反応がちがうとき"><List items={t.apply} /></More>
                    {talk && <More title="この課題のトーク集(全文)"><TalkCard e={talk} lvName={t.lv} /></More>}
                  </Card>
                  <Card role="answer">
                    <Field label={K.ans} hint={K.hint} value={r1} onChange={setR1} />
                    {!cmp1 && <div style={{ marginTop: 8 }}><button type="button" style={primary} disabled={!r1.trim()} onClick={() => setCmp1(true)}>書けたら、答え合わせへ</button></div>}
                  </Card>
                  {cmp1 && (
                    <Card role="check">
                      <ScoreBox stage={1} note={K.note} prompt={buildScorePrompt(t, 1, answers)} value={s1} onChange={setS1} />
                      <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                        <button type="button" style={primary} onClick={() => go(2)}>次へ:段階2(見ずに)</button>
                        {endBtn(1)}
                      </div>
                    </Card>
                  )}
                </>
              )}

              {/* ── 段階2 ── */}
              {stage === 2 && (
                <>
                  <Todo>{K.t2}</Todo>
                  <Card role="problem" sub={`書くもの:${t.ask}`}>
                    <Scene sc={t.scene2} who={t.who} />
                    <p style={{ ...quiet, marginTop: 6 }}>段階1から、人物と職種だけを変えた場面です(難しさは同じ)。</p>
                  </Card>
                  <Card role="answer" sub="上から順に3つ書きます">
                    <Field n="①" label={K.f1} hint={K.f1h} value={obs} onChange={setObs} rows={2} />
                    <Field n="②" label={K.f2} hint={K.f2h} value={hyp} onChange={setHyp} rows={2} />
                    <Field n="③" label={K.ans} hint={K.hint} value={r2} onChange={setR2} />
                    {!cmp2 && <div style={{ marginTop: 8 }}><button type="button" style={primary} disabled={!r2.trim()} onClick={() => setCmp2(true)}>書けたら、答え合わせへ</button></div>}
                  </Card>
                  {cmp2 && (
                    <>
                      <Card role="check">
                        <More title="お手本の言い回しと比べる"><Model t={t} /></More>
                        <More title="考え方の手順と比べる(①②の見直し)"><Observe t={t} /></More>
                        <More title="この課題で特に見る点"><List items={t.look} /></More>
                        <ScoreBox stage={2} note={K.note} prompt={buildScorePrompt(t, 2, answers)} value={s2} onChange={setS2} />
                        <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                          <button type="button" style={primary} onClick={() => go(3)}>次へ:段階3(想定外)</button>
                          {endBtn(2)}
                        </div>
                      </Card>
                    </>
                  )}
                </>
              )}

              {/* ── 段階3 ── */}
              {stage === 3 && (
                <>
                  <Todo>{K.t3}</Todo>
                  <Card role="problem" sub="やり取りの続き">
                    <p style={{ ...txt, fontSize: 11.5, color: '#c9b48a' }}>{t.scene2.sit}</p>
                    {t.scene2.say && <Bubble who={t.who} text={`「${t.scene2.say}」`} />}
                    {r2.trim() && <Bubble who="あなた(段階2の答え)" text={r2.trim()} mine />}
                    <Bubble who={t.twistWho} text={t.twist} />
                  </Card>
                  <Card role="answer">
                    <Field label={K.ans} hint={K.hint3} value={r3} onChange={setR3} />
                    {!cmp3 && <div style={{ marginTop: 8 }}><button type="button" style={primary} disabled={!r3.trim()} onClick={() => setCmp3(true)}>書けたら、答え合わせへ</button></div>}
                  </Card>
                  {cmp3 && (
                    <Card role="check">
                      <div style={{ fontSize: 11.5, color: '#8fb8e8', fontWeight: 700 }}>相手の反応がちがうときの言い回し</div>
                      <List items={t.apply} />
                      <More title="この課題で特に見る点"><List items={t.look} /></More>
                      {talk?.byType && <More title="トーク集:反応タイプ別"><TalkCard e={talk} lvName={t.lv} /></More>}
                      <ScoreBox stage={3} note={K.note} prompt={buildScorePrompt(t, 3, answers)} value={s3} onChange={setS3} />
                      <Field label="ひとことメモ(なくてもよい)" hint="詰まったところ、お手本がないと出てこなかった言葉など" value={memo} onChange={setMemo} rows={2} />
                      <div style={{ marginTop: 12 }}><button type="button" style={primary} onClick={() => save(3)}>記録して終える</button></div>
                    </Card>
                  )}
                </>
              )}

              <More title="根拠資料">
                <p style={{ ...txt, fontSize: 11, marginTop: 2 }}>この課題のねらい:{t.purpose}</p>
                <List items={t.refs} />
              </More>
            </div>
          )}

          {/* 記録 */}
          {!t && store.records.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <button type="button" style={{ ...btn, padding: '3px 9px', fontSize: 10.5 }} aria-expanded={histOpen} onClick={() => setHistOpen(!histOpen)}>
                {histOpen ? '記録を閉じる' : `これまでの記録(${store.records.length})`}
              </button>
              {histOpen && (
                <div style={{ marginTop: 6 }}>
                  <p style={quiet}>段階の差をそのまま成長とは読みません。再現性(段階2)・応用力(段階3)・判断の根拠(①事実 / ②仮説)を分けて見ます。</p>
                  {[...store.records].reverse().slice(0, 30).map((r, i) => {
                    const p = PILOT.find(x => x.key === r.key)
                    return (
                      <details key={`${r.at}-${i}`} style={{ borderBottom: '1px dashed #2a1f0e', padding: '4px 0' }}>
                        <summary style={{ fontSize: 11, color: '#d8c7a4', cursor: 'pointer' }}>
                          {r.date} {p?.lv} {p?.title} ・段階{r.stage}まで
                          {r.stage >= 2 && ` ・再現性:${evalSummary(r.e2)}`}{r.stage === 3 && ` ・応用力:${evalSummary(r.e3)}`}
                        </summary>
                        <div style={{ fontSize: 11, color: '#c9b48a', lineHeight: 1.8, padding: '4px 0 4px 10px' }}>
                          {r.r1 && <div>段階1:{r.r1}</div>}
                          <ScoreLine e={r.e1} q={r.q1} b={r.by1} n={r.n1} />
                          {(r.obs || r.hyp) && <div>判断の根拠:①事実「{r.obs ?? '—'}」/ ②仮説「{r.hyp ?? '—'}」</div>}
                          {r.r2 && <div>段階2:{r.r2}</div>}
                          <ScoreLine e={r.e2} q={r.q2} b={r.by2} n={r.n2} />
                          {r.r3 && <div>段階3:{r.r3}</div>}
                          <ScoreLine e={r.e3} q={r.q3} b={r.by3} n={r.n3} />
                          {r.memo && <div>メモ:{r.memo}</div>}
                        </div>
                      </details>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

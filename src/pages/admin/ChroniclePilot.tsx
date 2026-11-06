// src/pages/admin/ChroniclePilot.tsx
// 成長の書 — 試作練習(7項目フォーマット・5課題)
//
// トーク集の言い回しを、3段階の練習に組み込む。
//   段階1 例文を見ながら(7項目とトーク集を全部見て答える)
//   段階2 例文を見ずに(人物・職種だけ変えた場面。観察・仮説・返答を書いてから見比べ、固定の4点で評価)
//   段階3 想定外の反応(相手の返しに合わせて対応を直す。見比べて、同じ4点で評価)
// 記録は「再現性(段階2)」「応用力(段階3)」「判断の根拠(観察 / 仮説)」に分けて残す。
// 段階の差をそのまま成長とは読まない(場面を覚えただけでも良くなるため)。
// この記録は、合否・等級の達成率・6指標の採点には使わない。
//
// 画面の見た目は役割ごとに色とラベルを分ける(練習問題=金 / トーク集=緑 / 回答欄=白 / 答え合わせ=青)。
// 1画面でやることは1つ。長い説明は折りたたむ。

import { useState, type CSSProperties, type ReactNode } from 'react'
import { PILOT, PILOT_EVAL, type PilotEvalId, type PilotTask } from '../../data/chroniclePilot'
import { TALK } from '../../data/chronicleTalk'
import { TalkCard, box, btn, primary, area, quiet } from './ChronicleDaily'

type Mark = 'ok' | 'half' | 'not'
const MARKS: Mark[] = ['ok', 'half', 'not']
const MARK_LABEL: Record<Mark, string> = { ok: 'できた', half: '半分', not: 'まだ' }
type Evals = Partial<Record<PilotEvalId, Mark>>

export interface PilotRecord {
  date: string
  at: string
  key: string
  stage: 1 | 2 | 3       // どの段階まで進んだか
  r1?: string; m1?: Mark  // 段階1の返答と自己評価
  obs?: string; hyp?: string // 判断の根拠(段階2)
  r2?: string; e2?: Evals    // 再現性
  r3?: string; e3?: Evals    // 応用力
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
      r1: s(x.r1, 2000), m1: mark(x.m1), obs: s(x.obs, 1000), hyp: s(x.hyp, 1000),
      r2: s(x.r2, 2000), e2: evals(x.e2), r3: s(x.r3, 2000), e3: evals(x.e3), memo: s(x.memo, 500),
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
function Scene({ sc }: { sc: { sit: string; say?: string } }) {
  return (
    <>
      <p style={{ ...txt, fontSize: 11.5, color: '#c9b48a' }}>{sc.sit}</p>
      {sc.say && <Bubble who="相談者" text={`「${sc.say}」`} />}
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
      <div style={{ fontSize: 11.5, color: '#8fb8e8', fontWeight: 700 }}>自分の答えをチェック(毎回この4つ)</div>
      {PILOT_EVAL.map((p, i) => (
        <div key={p.id} style={{ padding: '6px 0', borderBottom: '1px dashed #1e2a38' }}>
          <div style={{ fontSize: 12, color: '#d8c7a4', marginBottom: 4 }}>{i + 1}. {p.label}</div>
          <MarkButtons label={p.label} value={value[p.id]} onChange={m => onChange({ ...value, [p.id]: m })} />
        </div>
      ))}
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

export function PilotBlock({ store, onChange }: { store: PilotStore; onChange: (d: PilotStore) => void }) {
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState<string | null>(null)
  const [stage, setStage] = useState<1 | 2 | 3>(1)
  const [r1, setR1] = useState(''); const [cmp1, setCmp1] = useState(false); const [m1, setM1] = useState<Mark | undefined>()
  const [obs, setObs] = useState(''); const [hyp, setHyp] = useState(''); const [r2, setR2] = useState('')
  const [cmp2, setCmp2] = useState(false); const [e2, setE2] = useState<Evals>({})
  const [r3, setR3] = useState(''); const [cmp3, setCmp3] = useState(false); const [e3, setE3] = useState<Evals>({})
  const [memo, setMemo] = useState('')
  const [msg, setMsg] = useState('')
  const [histOpen, setHistOpen] = useState(false)

  const t = PILOT.find(p => p.key === key)
  const talk = t ? TALK[t.key] : undefined

  const reset = (k: string | null) => {
    setKey(k); setStage(1); setR1(''); setCmp1(false); setM1(undefined); setObs(''); setHyp(''); setR2(''); setCmp2(false); setE2({})
    setR3(''); setCmp3(false); setE3({}); setMemo('')
  }
  const go = (n: 1 | 2 | 3) => { setStage(n); if (typeof window !== 'undefined') document.getElementById('pilot-top')?.scrollIntoView({ block: 'start' }) }
  const save = (reached: 1 | 2 | 3) => {
    if (!t) return
    const rec: PilotRecord = {
      date: todayJst(), at: new Date().toISOString(), key: t.key, stage: reached,
      r1: r1.trim() || undefined, m1,
      obs: reached >= 2 ? obs.trim() || undefined : undefined, hyp: reached >= 2 ? hyp.trim() || undefined : undefined,
      r2: reached >= 2 ? r2.trim() || undefined : undefined, e2: reached >= 2 && Object.keys(e2).length ? e2 : undefined,
      r3: reached === 3 ? r3.trim() || undefined : undefined, e3: reached === 3 && Object.keys(e3).length ? e3 : undefined,
      memo: memo.trim() || undefined,
    }
    onChange({ records: [...store.records, rec] })
    setMsg(`${t.lv}「${t.title}」を段階${reached}まで記録しました。`)
    reset(null)
  }
  const byTask = (k: string) => store.records.filter(r => r.key === k)
  const endBtn = (n: 1 | 2) => <button type="button" style={btn} onClick={() => save(n)}>ここで記録して終える</button>

  return (
    <section aria-label="試作練習" style={box} id="pilot-top">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 13, color: '#e6b555', letterSpacing: '0.08em' }}>試作練習(5課題)</div>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {PILOT.map(p => {
                  const n = byTask(p.key).length
                  return (
                    <button key={p.key} type="button" onClick={() => { reset(p.key); setMsg('') }}
                      style={{ ...btn, textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', color: '#f0e6d0' }}>
                      <span style={{ fontSize: 10.5, color: '#0a0702', background: '#c9933a', borderRadius: 3, padding: '1px 6px', fontWeight: 700 }}>{p.lv}</span>
                      <span style={{ flex: 1, fontSize: 12 }}>{p.title}</span>
                      {n > 0 && <span style={{ fontSize: 10.5, color: '#8a6a3a' }}>{n}回</span>}
                    </button>
                  )
                })}
              </div>
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
                  <Todo>トーク集を見ながら、相談者に返す言葉を書きます。</Todo>
                  <Card role="problem" sub={`書くもの:${t.ask}`}>
                    <Scene sc={t.scene1} />
                  </Card>
                  <Card role="talk" sub="見ながら答えてかまいません">
                    <More title="お手本の言い回し"><Model t={t} /></More>
                    <More title="避けたい言い方"><List items={t.avoid} /></More>
                    <More title="考え方の手順(観察 → 仮説 → 確認 → 対応)"><Observe t={t} /></More>
                    <More title="相手の反応がちがうとき"><List items={t.apply} /></More>
                    {talk && <More title="この課題のトーク集(全文)"><TalkCard e={talk} lvName={t.lv} /></More>}
                  </Card>
                  <Card role="answer">
                    <Field label="相談者に返す言葉" hint="実際に送る文を、そのまま1〜3文で書きます。説明や感想ではなく、相談者へのセリフです。" value={r1} onChange={setR1} />
                    {!cmp1 && <div style={{ marginTop: 8 }}><button type="button" style={primary} disabled={!r1.trim()} onClick={() => setCmp1(true)}>書けたら、答え合わせへ</button></div>}
                  </Card>
                  {cmp1 && (
                    <Card role="check">
                      <div style={{ fontSize: 12, color: '#d8c7a4' }}>トーク集のお手本と比べて、大事なところが入っていましたか？</div>
                      <div style={{ marginTop: 6 }}><MarkButtons label="段階1の自己評価" value={m1} onChange={setM1} /></div>
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
                  <Todo>トーク集は隠れています。別の相談者に、自分の言葉で返します。</Todo>
                  <Card role="problem" sub={`書くもの:${t.ask}`}>
                    <Scene sc={t.scene2} />
                    <p style={{ ...quiet, marginTop: 6 }}>段階1から、人物と職種だけを変えた場面です(難しさは同じ)。</p>
                  </Card>
                  <Card role="answer" sub="上から順に3つ書きます">
                    <Field n="①" label="相談者が言ったこと・様子" hint="見たまま・書かれたままの事実だけ。例:「〜」と書いてきた、返事が急に短くなった" value={obs} onChange={setObs} rows={2} />
                    <Field n="②" label="そこから考えたこと(仮説)" hint="まだ決めつけない見立て。例:〜と感じたのかもしれない" value={hyp} onChange={setHyp} rows={2} />
                    <Field n="③" label="相談者に返す言葉" hint="実際に送る文を、そのまま1〜3文で" value={r2} onChange={setR2} />
                    {!cmp2 && <div style={{ marginTop: 8 }}><button type="button" style={primary} disabled={!r2.trim()} onClick={() => setCmp2(true)}>書けたら、答え合わせへ</button></div>}
                  </Card>
                  {cmp2 && (
                    <>
                      <Card role="check">
                        <More title="お手本の言い回しと比べる"><Model t={t} /></More>
                        <More title="考え方の手順と比べる(①②の見直し)"><Observe t={t} /></More>
                        <More title="この課題で特に見る点"><List items={t.look} /></More>
                        <div style={{ marginTop: 10 }}><Checks value={e2} onChange={setE2} /></div>
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
                  <Todo>相談者が思いがけない返事をしました。それに合わせて、言葉を直します。</Todo>
                  <Card role="problem" sub="やり取りの続き">
                    <p style={{ ...txt, fontSize: 11.5, color: '#c9b48a' }}>{t.scene2.sit}</p>
                    {t.scene2.say && <Bubble who="相談者" text={`「${t.scene2.say}」`} />}
                    {r2.trim() && <Bubble who="あなた(段階2の答え)" text={r2.trim()} mine />}
                    <Bubble who="相談者" text={t.twist} />
                  </Card>
                  <Card role="answer">
                    <Field label="相談者に返す言葉" hint="この返事を受けて、実際に送る文を1〜3文で" value={r3} onChange={setR3} />
                    {!cmp3 && <div style={{ marginTop: 8 }}><button type="button" style={primary} disabled={!r3.trim()} onClick={() => setCmp3(true)}>書けたら、答え合わせへ</button></div>}
                  </Card>
                  {cmp3 && (
                    <Card role="check">
                      <div style={{ fontSize: 11.5, color: '#8fb8e8', fontWeight: 700 }}>相手の反応がちがうときの言い回し</div>
                      <List items={t.apply} />
                      <More title="この課題で特に見る点"><List items={t.look} /></More>
                      {talk?.byType && <More title="トーク集:反応タイプ別"><TalkCard e={talk} lvName={t.lv} /></More>}
                      <div style={{ marginTop: 10 }}><Checks value={e3} onChange={setE3} /></div>
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
                          {r.r1 && <div>段階1{r.m1 ? `(${MARK_LABEL[r.m1]})` : ''}:{r.r1}</div>}
                          {(r.obs || r.hyp) && <div>判断の根拠:①事実「{r.obs ?? '—'}」/ ②仮説「{r.hyp ?? '—'}」</div>}
                          {r.r2 && <div>段階2:{r.r2}</div>}
                          {r.e2 && <div>{PILOT_EVAL.map(x => `${x.label}=${r.e2?.[x.id] ? MARK_LABEL[r.e2[x.id]!] : '—'}`).join(' / ')}</div>}
                          {r.r3 && <div>段階3:{r.r3}</div>}
                          {r.e3 && <div>{PILOT_EVAL.map(x => `${x.label}=${r.e3?.[x.id] ? MARK_LABEL[r.e3[x.id]!] : '—'}`).join(' / ')}</div>}
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

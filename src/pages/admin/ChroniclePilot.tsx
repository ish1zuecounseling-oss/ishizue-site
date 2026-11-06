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

import { useState } from 'react'
import { PILOT, PILOT_EVAL, type PilotEvalId, type PilotTask } from '../../data/chroniclePilot'
import { TALK } from '../../data/chronicleTalk'
import { TalkCard, box, btn, primary, area, stepHead, quiet } from './ChronicleDaily'

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

function MarkButtons({ value, onChange, label }: { value?: Mark; onChange: (m: Mark) => void; label: string }) {
  return (
    <div role="group" aria-label={label} style={{ display: 'inline-flex', gap: 4, flexWrap: 'wrap' }}>
      {MARKS.map(m => (
        <button key={m} type="button" aria-pressed={value === m} onClick={() => onChange(m)}
          style={{ ...btn, padding: '3px 9px', fontSize: 10.5, ...(value === m ? { background: '#3d2a12', color: '#e6b555' } : {}) }}>{MARK_LABEL[m]}</button>
      ))}
    </div>
  )
}

function EvalBlock({ value, onChange, stage }: { value: Evals; onChange: (e: Evals) => void; stage: 2 | 3 }) {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ fontSize: 10.5, color: '#c9a96e', marginBottom: 4 }}>段階{stage}の評価(毎回この4点だけを見る)</div>
      {PILOT_EVAL.map(p => (
        <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap', padding: '3px 0', borderBottom: '1px dashed #2a1f0e' }}>
          <span style={{ fontSize: 11.5, color: '#d8c7a4' }}>{p.label}</span>
          <MarkButtons label={p.label} value={value[p.id]} onChange={m => onChange({ ...value, [p.id]: m })} />
        </div>
      ))}
    </div>
  )
}

const List = ({ items }: { items: string[] }) => (
  <ul style={{ margin: '2px 0 0', paddingLeft: 16, fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.8 }}>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>
)
const Label = ({ children }: { children: string }) => <div style={{ fontSize: 10.5, color: '#c9a96e', margin: '8px 0 2px' }}>{children}</div>

function Observe({ t }: { t: PilotTask }) {
  return <List items={[`観察:${t.observe.obs}`, `仮説:${t.observe.hyp}`, `確認:${t.observe.check}`, `対応:${t.observe.act}`]} />
}

export function PilotBlock({ store, onChange }: { store: PilotStore; onChange: (d: PilotStore) => void }) {
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState<string | null>(null)
  const [stage, setStage] = useState<1 | 2 | 3>(1)
  const [r1, setR1] = useState(''); const [m1, setM1] = useState<Mark | undefined>()
  const [obs, setObs] = useState(''); const [hyp, setHyp] = useState(''); const [r2, setR2] = useState('')
  const [cmp2, setCmp2] = useState(false); const [e2, setE2] = useState<Evals>({})
  const [r3, setR3] = useState(''); const [cmp3, setCmp3] = useState(false); const [e3, setE3] = useState<Evals>({})
  const [memo, setMemo] = useState('')
  const [msg, setMsg] = useState('')
  const [histOpen, setHistOpen] = useState(false)

  const t = PILOT.find(p => p.key === key)
  const talk = t ? TALK[t.key] : undefined

  const reset = (k: string | null) => {
    setKey(k); setStage(1); setR1(''); setM1(undefined); setObs(''); setHyp(''); setR2(''); setCmp2(false); setE2({})
    setR3(''); setCmp3(false); setE3({}); setMemo('')
  }
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

  return (
    <section aria-label="試作練習" style={box}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 13, color: '#e6b555', letterSpacing: '0.08em' }}>試作練習(7項目・5課題)</div>
          <div style={quiet}>トーク集の言い回しを、3段階で練習します。例文を見ながら → 見ずに → 想定外の反応に合わせて直す。記録 {store.records.length} 回</div>
        </div>
        <button type="button" style={btn} aria-expanded={open} onClick={() => { setOpen(!open); setMsg('') }}>{open ? '閉じる' : '開く'}</button>
      </div>

      {open && (
        <div style={{ marginTop: 10 }}>
          {msg && <div role="status" style={{ fontSize: 11.5, color: '#9fc98a', marginBottom: 8 }}>{msg}</div>}

          {!t && (
            <>
              <div style={{ fontSize: 11.5, color: '#c9a96e', marginBottom: 6 }}>練習する課題を選んでください</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {PILOT.map(p => {
                  const n = byTask(p.key).length
                  return (
                    <button key={p.key} type="button" style={{ ...btn, textAlign: 'left' }} onClick={() => { reset(p.key); setMsg('') }}>
                      {p.lv} {p.title}{n ? `(記録 ${n} 回)` : ''}
                    </button>
                  )
                })}
              </div>
              <p style={{ ...quiet, marginTop: 8 }}>
                練習の仕組みの試作で、臨床能力を証明するものではありません。希死念慮・安全計画の内容は、専門資料とSVで確認を続けます。
                重いテーマを含むので、体調に合わせて段階1だけで終えてもかまいません。この記録は合否・達成率・6指標には使いません。
              </p>
            </>
          )}

          {t && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 12.5, color: '#e6d5b0' }}>{t.lv} {t.title}</div>
                <button type="button" style={{ ...btn, padding: '3px 9px', fontSize: 10.5 }} onClick={() => reset(null)}>課題の選択に戻る</button>
              </div>
              <div aria-label="進み具合" style={{ display: 'flex', gap: 4, margin: '8px 0 2px' }}>
                {[1, 2, 3].map(n => (
                  <span key={n} style={{ flex: 1, textAlign: 'center', fontSize: 10, padding: '3px 0', borderRadius: 3, color: stage === n ? '#0a0702' : '#8a6a3a', background: stage === n ? '#c9933a' : stage > n ? '#3d2a12' : 'transparent', border: '1px solid #3d2a12' }}>
                    段階{n}{n === 1 ? ' 見ながら' : n === 2 ? ' 見ずに' : ' 想定外'}
                  </span>
                ))}
              </div>

              {/* 段階1 */}
              {stage === 1 && (
                <>
                  <div style={stepHead}>段階1 例文を見ながら</div>
                  <Label>① 課題の目的</Label>
                  <p style={{ margin: 0, fontSize: 11.5, color: '#d8c7a4', lineHeight: 1.8 }}>{t.purpose}</p>
                  <Label>② 観察ポイント(観察 → 仮説 → 確認 → 対応)</Label>
                  <Observe t={t} />
                  <Label>③ 言い回しと、選ぶ理由</Label>
                  <List items={[...t.phrases, `理由:${t.why}`]} />
                  <Label>④ 避けたい対応と、その理由</Label>
                  <List items={t.avoid} />
                  <Label>⑤ 状況別の応用</Label>
                  <List items={t.apply} />
                  {talk && <div><TalkCard e={talk} lvName={t.lv} note="この課題のトーク集" /></div>}
                  <Label>場面</Label>
                  <p style={{ margin: 0, fontSize: 12, color: '#e6d5b0', lineHeight: 1.8 }}>{t.scene1}</p>
                  <textarea aria-label="段階1の返答" style={{ ...area, marginTop: 6 }} rows={3} value={r1} onChange={e => setR1(e.target.value)} placeholder="この場面で、あなたならどう返しますか(例文を見ながらでかまいません)" />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 10.5, color: '#c9a96e' }}>自己評価</span>
                    <MarkButtons label="段階1の自己評価" value={m1} onChange={setM1} />
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                    <button type="button" style={primary} onClick={() => setStage(2)}>段階2へ(例文を隠す)</button>
                    <button type="button" style={btn} onClick={() => save(1)}>段階1で記録して終える</button>
                  </div>
                </>
              )}

              {/* 段階2 */}
              {stage === 2 && (
                <>
                  <div style={stepHead}>段階2 例文を見ずに(場面を変えて)</div>
                  <p style={quiet}>トーク集と例文は隠しています。場面は人物・職種だけを変えてあり、難しさと面接の回数は同じです。答える前に、観察したことと仮説を分けて書きます。</p>
                  <Label>場面</Label>
                  <p style={{ margin: 0, fontSize: 12, color: '#e6d5b0', lineHeight: 1.8 }}>{t.scene2}</p>
                  <Label>観察したこと(相手の言葉・様子。事実だけ)</Label>
                  <textarea aria-label="観察したこと" style={area} rows={2} value={obs} onChange={e => setObs(e.target.value)} />
                  <Label>仮説(まだ決めつけない見立て)</Label>
                  <textarea aria-label="仮説" style={area} rows={2} value={hyp} onChange={e => setHyp(e.target.value)} />
                  <Label>あなたの返答</Label>
                  <textarea aria-label="段階2の返答" style={area} rows={3} value={r2} onChange={e => setR2(e.target.value)} />
                  {!cmp2 && <div style={{ marginTop: 8 }}><button type="button" style={primary} onClick={() => setCmp2(true)} disabled={!r2.trim()}>見比べる</button></div>}
                  {cmp2 && (
                    <>
                      <Label>② 観察ポイント</Label>
                      <Observe t={t} />
                      <Label>③ 言い回し</Label>
                      <List items={[...t.phrases, `理由:${t.why}`]} />
                      <Label>この課題で見るポイント</Label>
                      <List items={t.look} />
                      <EvalBlock stage={2} value={e2} onChange={setE2} />
                      <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                        <button type="button" style={primary} onClick={() => setStage(3)}>段階3へ(想定外の反応)</button>
                        <button type="button" style={btn} onClick={() => save(2)}>段階2で記録して終える</button>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* 段階3 */}
              {stage === 3 && (
                <>
                  <div style={stepHead}>段階3 想定外の反応</div>
                  <p style={quiet}>あなたの段階2の返答に、相手がこう返しました。状況を捉え直して、対応を直してください。</p>
                  {r2.trim() && <div style={{ fontSize: 11, color: '#8a6a3a', lineHeight: 1.7 }}>あなた:{r2.trim()}</div>}
                  <div style={{ fontSize: 12.5, color: '#e6d5b0', margin: '4px 0 6px' }}>相手:{t.twist}</div>
                  <textarea aria-label="段階3の返答" style={area} rows={3} value={r3} onChange={e => setR3(e.target.value)} />
                  {!cmp3 && <div style={{ marginTop: 8 }}><button type="button" style={primary} onClick={() => setCmp3(true)} disabled={!r3.trim()}>見比べる</button></div>}
                  {cmp3 && (
                    <>
                      <Label>⑤ 状況別の応用</Label>
                      <List items={t.apply} />
                      {talk?.byType && <div><TalkCard e={talk} lvName={t.lv} note="反応タイプ別も参照" /></div>}
                      <Label>この課題で見るポイント</Label>
                      <List items={t.look} />
                      <EvalBlock stage={3} value={e3} onChange={setE3} />
                      <Label>メモ(詰まったところ、例文がないと出てこなかった言葉)</Label>
                      <textarea aria-label="メモ" style={area} rows={2} value={memo} onChange={e => setMemo(e.target.value)} />
                      <div style={{ marginTop: 10 }}><button type="button" style={primary} onClick={() => save(3)}>記録する</button></div>
                    </>
                  )}
                </>
              )}

              <Label>⑦ 根拠資料</Label>
              <List items={t.refs} />
            </div>
          )}

          {/* 記録 */}
          {store.records.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <button type="button" style={{ ...btn, padding: '3px 9px', fontSize: 10.5 }} aria-expanded={histOpen} onClick={() => setHistOpen(!histOpen)}>
                {histOpen ? '記録を閉じる' : `記録を見る(${store.records.length})`}
              </button>
              {histOpen && (
                <div style={{ marginTop: 6 }}>
                  <p style={quiet}>段階の差をそのまま成長とは読みません。再現性(段階2)・応用力(段階3)・判断の根拠(観察 / 仮説)を分けて見ます。</p>
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
                          {(r.obs || r.hyp) && <div>判断の根拠:観察「{r.obs ?? '—'}」/ 仮説「{r.hyp ?? '—'}」</div>}
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

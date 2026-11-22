// src/pages/admin/ChronicleSvai.tsx
// 成長の書 — SVAI（振り返りの補助）：プロンプトのコピー、SVAI ログ、次の練習
// 仕様：SVAI 再設計仕様 第2.2版 6-1（記録は2つの軸で、最小限に）
import { useState, type CSSProperties } from 'react'
import { SVAI_PROMPTS, SVAI_VERSION, type SvaiPromptKey } from '../../data/chronicleSvai'

// ── 型と保存 ─────────────────────────────────────────

export const SVAI_SCENES = ['実践', '練習', '試験', '学習'] as const
// モード1は AI サービスの確認が済むまで出さないため、方法の選択肢にも入れない
export const SVAI_METHODS = ['モード2', 'モード3', '手動'] as const
export type SvaiScene = typeof SVAI_SCENES[number]
export type SvaiMethod = typeof SVAI_METHODS[number]

export interface SvaiLog {
  id: string
  ym: string            // 年月だけ(YYYY-MM)。日付は残さない
  scene: SvaiScene
  method: SvaiMethod
  task: string          // 関係する課題
  type: string          // 型(任意)
  adopted: string       // 本人が採用した気づき(本人が書く)
  next: string          // 次に試すこと(本人が選んだもの)
  ai: string            // AIの提案(参考)
  at: string            // 保存した時刻(並べ替え用)
}
export type NextStatus = '練習中' | '確かめた'
export interface NextPractice { id: string; text: string; source: string; status: NextStatus; at: string }
export interface SvaiStore { logs: SvaiLog[]; next: NextPractice[] }

const SVAI_KEY = 'ishizue_chronicle_svai_v1'
const LIM = 300
const MAX_LOGS = 500
const MAX_NEXT = 200
const EMPTY_STORE: SvaiStore = { logs: [], next: [] }

const str = (v: unknown, n = LIM) => (typeof v === 'string' ? v.trim().slice(0, n) : '')
const isYm = (v: string) => /^\d{4}-(0[1-9]|1[0-2])$/.test(v)
const newId = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`

/** 書き出しファイルや localStorage から読んだものを、形と長さを確かめて取り込む。形が合わないものは読み飛ばす */
export function cleanSvai(raw: unknown): SvaiStore | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const o = raw as Record<string, unknown>
  if (!Array.isArray(o.logs) && !Array.isArray(o.next)) return null
  const logs: SvaiLog[] = (Array.isArray(o.logs) ? o.logs : [])
    .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x))
    .map(x => ({
      id: str(x.id, 40) || newId(), ym: str(x.ym, 7),
      scene: str(x.scene, 4) as SvaiScene, method: str(x.method, 4) as SvaiMethod,
      task: str(x.task), type: str(x.type, 60), adopted: str(x.adopted), next: str(x.next), ai: str(x.ai),
      at: str(x.at, 40),
    }))
    .filter(x => isYm(x.ym) && (SVAI_SCENES as readonly string[]).includes(x.scene) && (SVAI_METHODS as readonly string[]).includes(x.method))
    .slice(0, MAX_LOGS)
  const next: NextPractice[] = (Array.isArray(o.next) ? o.next : [])
    .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x))
    .map(x => ({ id: str(x.id, 40) || newId(), text: str(x.text), source: str(x.source, 120), status: (x.status === '確かめた' ? '確かめた' : '練習中') as NextStatus, at: str(x.at, 40) }))
    .filter(x => x.text !== '')
    .slice(0, MAX_NEXT)
  // 中身があったのに1件も読めなかった(形が違うファイル)ときは、今の記録を消さないよう null を返す
  const rawCount = (Array.isArray(o.logs) ? o.logs.length : 0) + (Array.isArray(o.next) ? o.next.length : 0)
  if (rawCount > 0 && logs.length + next.length === 0) return null
  return { logs, next }
}
export function loadSvai(): SvaiStore {
  try { return cleanSvai(JSON.parse(localStorage.getItem(SVAI_KEY) || '{}')) ?? EMPTY_STORE } catch { return EMPTY_STORE }
}
export function saveSvai(d: SvaiStore) {
  try { localStorage.setItem(SVAI_KEY, JSON.stringify(d)) } catch { /* quota exceeded etc. */ }
}

// ── 【SVAIログ】の貼り付け読み込み ────────────────────────
// 読み込むのは、年月・場面・方法・関係する課題・型・AIの提案(参考)だけ。
// 「本人が採用した気づき」「次に試すこと」は、AI の出力からは読み込まない(本人が書く欄のため)。

export interface ParsedLog { ym?: string; scene?: SvaiScene; method?: SvaiMethod; task?: string; type?: string; ai?: string }
export interface ParseResult { ok: boolean; value: ParsedLog; problems: string[] }

const blankish = (v: string) => v === '' || /^[（(].*[)）]$/.test(v) || /^[-—―ー]$/.test(v)

export function parseSvaiLog(text: string): ParseResult {
  const problems: string[] = []
  const value: ParsedLog = {}
  const lines = text.replace(/\r/g, '').split('\n')
  const head = lines.find(l => l.includes('【SVAIログ】'))
  if (!head) return { ok: false, value, problems: ['【SVAIログ】の行が見つかりません。SVAI の出力の「記録用の行」を、そのまま貼り付けてください。'] }
  const fields: Record<string, string> = {}
  for (const part of head.slice(head.indexOf('【SVAIログ】') + '【SVAIログ】'.length).split(/[|｜]/)) {
    const m = part.match(/^\s*([^:：]+?)\s*[:：]\s*(.*?)\s*$/)
    if (m) fields[m[1].trim()] = m[2].trim()
  }
  const ymRaw = (fields['年月'] ?? '').replace(/\s/g, '')
  const ymM = ymRaw.match(/^(\d{4})[-/年](\d{1,2})月?$/)
  if (ymM && Number(ymM[2]) >= 1 && Number(ymM[2]) <= 12) value.ym = `${ymM[1]}-${ymM[2].padStart(2, '0')}`
  else if (!blankish(ymRaw)) problems.push(`年月「${ymRaw}」は読めませんでした(例:2026-11)。`)
  const sc = fields['場面'] ?? ''
  if ((SVAI_SCENES as readonly string[]).includes(sc)) value.scene = sc as SvaiScene
  else if (/[／/]/.test(sc)) problems.push('場面は、SVAI の出力では選ばれていません。下で選んでください。')
  else if (!blankish(sc)) problems.push(`場面「${sc.slice(0, 30)}」は、実践・練習・試験・学習のどれでもないため読み込みませんでした。下で選んでください。`)
  const me = (fields['方法'] ?? '').replace(/\s/g, '')
  if ((SVAI_METHODS as readonly string[]).includes(me)) value.method = me as SvaiMethod
  else if (me === 'モード1') problems.push('方法「モード1」は、今は使えません(AI サービスの確認が済むまで準備中)。')
  else if (!blankish(me)) problems.push(`方法「${me.slice(0, 30)}」は読めませんでした。下で選んでください。`)
  const task = fields['関係する課題'] ?? ''
  if (!blankish(task)) value.task = task.slice(0, LIM)
  const type = fields['型'] ?? ''
  if (!blankish(type)) value.type = type.slice(0, 60)
  const aiLine = lines.find(l => /AIの提案（参考）\s*[:：]/.test(l) || /AIの提案\(参考\)\s*[:：]/.test(l))
  if (aiLine) {
    const v = aiLine.replace(/^.*?AIの提案[（(]参考[)）]\s*[:：]\s*/, '').trim()
    if (!blankish(v)) value.ai = v.slice(0, LIM)
  }
  const ok = Object.keys(value).length > 0
  if (!ok && problems.length === 0) problems.push('読み込める項目がありませんでした。')
  return { ok, value, problems }
}

// ── 画面 ─────────────────────────────────────────────

const currentYm = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' }).slice(0, 7)
const label: CSSProperties = { display: 'block', fontSize: 11, color: '#c9a96e', margin: '8px 0 3px' }
const input: CSSProperties = { width: '100%', boxSizing: 'border-box', background: '#080502', color: '#e8d9b8', border: '1px solid #3d2a12', borderRadius: 4, padding: '7px 9px', fontSize: 14, fontFamily: 'inherit' }
const btn: CSSProperties = { fontSize: 12, color: '#c9a96e', background: 'transparent', border: '1px solid #6b4f28', borderRadius: 4, padding: '7px 12px', cursor: 'pointer' }
const btnMain: CSSProperties = { ...btn, color: '#0a0702', background: '#c9933a', border: 'none', fontWeight: 700 }
const note: CSSProperties = { fontSize: 11, color: '#8a6a3a', lineHeight: 1.8, margin: '4px 0' }

function PromptCopy({ k, title, desc }: { k: SvaiPromptKey; title: string; desc: string }) {
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const text = SVAI_PROMPTS[k]
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setMsg('コピーしました。新しい AI チャットに貼り付けて送ってください。1つの会話では1つのモードだけを使います。')
    } catch {
      setShow(true)
      setMsg('自動でコピーできませんでした。下の枠の文章を長押しして、すべて選択・コピーしてください。')
    }
  }
  return (
    <div style={{ border: '1px solid #3d2a12', borderRadius: 4, padding: '10px 12px', marginTop: 8, background: '#0b0804' }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#e6b555' }}>{title}</div>
      <p style={note}>{desc}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button type="button" onClick={copy} style={btnMain}>プロンプトをコピー</button>
        <button type="button" onClick={() => setShow(v => !v)} style={btn}>{show ? '閉じる' : '中身を見る'}</button>
      </div>
      {msg && <p role="status" style={{ ...note, color: '#c9a96e' }}>{msg}</p>}
      {show && (
        <textarea readOnly value={text} rows={12} onFocus={e => e.currentTarget.select()} aria-label={`${title}のプロンプト`}
          style={{ ...input, marginTop: 8, fontSize: 11.5, lineHeight: 1.6, color: '#cdb98f' }} />
      )}
    </div>
  )
}

type Form = { ym: string; scene: SvaiScene | ''; method: SvaiMethod | ''; task: string; type: string; adopted: string; next: string; ai: string }
const emptyForm = (): Form => ({ ym: currentYm(), scene: '', method: '', task: '', type: '', adopted: '', next: '', ai: '' })

export function SvaiBlock({ store, onChange }: { store: SvaiStore; onChange: (d: SvaiStore) => void }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Form>(emptyForm)
  const [paste, setPaste] = useState('')
  const [pasteMsg, setPasteMsg] = useState<string[]>([])
  const [msg, setMsg] = useState('')
  const [nextText, setNextText] = useState('')
  const [nextSource, setNextSource] = useState('')
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm(f => ({ ...f, [k]: v }))

  const readPaste = () => {
    const r = parseSvaiLog(paste)
    if (!r.ok) { setPasteMsg(r.problems); return }
    // 本人が書く2つの欄(採用した気づき・次に試すこと)は、読み込みで上書きしない
    setForm(f => ({
      ...f,
      ym: r.value.ym ?? f.ym, scene: r.value.scene ?? f.scene, method: r.value.method ?? f.method,
      task: r.value.task ?? f.task, type: r.value.type ?? f.type, ai: r.value.ai ?? f.ai,
    }))
    setPasteMsg(['読み込みました。内容を確かめ、「本人が採用した気づき」「次に試すこと」を自分の言葉で書いてから保存してください。', ...r.problems])
  }

  const saveLog = () => {
    const problems: string[] = []
    if (!isYm(form.ym)) problems.push('年月を「2026-11」の形で入れてください。')
    if (!form.scene) problems.push('場面を選んでください。')
    if (!form.method) problems.push('方法を選んでください。')
    if (problems.length) { setMsg(problems.join(' ')); return }
    const log: SvaiLog = {
      id: newId(), ym: form.ym, scene: form.scene as SvaiScene, method: form.method as SvaiMethod,
      task: form.task.trim().slice(0, LIM), type: form.type.trim().slice(0, 60), adopted: form.adopted.trim().slice(0, LIM),
      next: form.next.trim().slice(0, LIM), ai: form.ai.trim().slice(0, LIM), at: new Date().toISOString(),
    }
    onChange({ ...store, logs: [log, ...store.logs].slice(0, MAX_LOGS) })
    setForm(emptyForm()); setPaste(''); setPasteMsg([])
    setMsg('保存しました。')
  }
  const removeLog = (id: string) => {
    if (!window.confirm('この記録を消します。よろしいですか？')) return
    onChange({ ...store, logs: store.logs.filter(l => l.id !== id) })
  }
  const addNext = (text: string, source: string) => {
    const t = text.trim().slice(0, LIM)
    if (!t) return
    onChange({ ...store, next: [{ id: newId(), text: t, source: source.trim().slice(0, 120), status: '練習中' as NextStatus, at: new Date().toISOString() }, ...store.next].slice(0, MAX_NEXT) })
  }
  const toggleNext = (id: string) => onChange({ ...store, next: store.next.map(n => n.id === id ? { ...n, status: n.status === '練習中' ? '確かめた' : '練習中' } : n) })
  const removeNext = (id: string) => {
    if (!window.confirm('この「次の練習」を消します。よろしいですか？')) return
    onChange({ ...store, next: store.next.filter(n => n.id !== id) })
  }

  return (
    <section aria-label="SVAI(振り返りの補助)" style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid #2a1f0e', padding: '16px 20px', background: '#0a0702' }}>
      <button type="button" onClick={() => setOpen(v => !v)} aria-expanded={open}
        style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', color: '#e6b555', fontFamily: "'Shippori Mincho', serif", fontSize: 15, fontWeight: 700, letterSpacing: '0.08em' }}>
        🪞 SVAI(振り返りの補助) <span style={{ fontSize: 11, color: '#8a6a3a', fontWeight: 400 }}>{open ? '閉じる' : `開く(記録 ${store.logs.length} 件・次の練習 ${store.next.filter(n => n.status === '練習中').length} 件)`}</span>
      </button>
      {open && (
        <div style={{ marginTop: 10 }}>
          {/* はじめに読む文 */}
          <div role="note" style={{ border: '1px solid #6b4f28', borderRadius: 4, padding: '10px 12px', background: '#120d06' }}>
            <p style={{ ...note, color: '#e8d9b8', fontSize: 12 }}>SVAI は人の SV の代わりではありません。練習と振り返りの補助で、能力の判定はしません。</p>
            <p style={{ ...note, color: '#e8d9b8', fontSize: 12 }}>実際の相談記録や、相談者の情報は入れないでください。安全に関わることは、人の SV と組織の手順につないでください。</p>
            <p style={{ ...note, color: '#e8d9b8', fontSize: 12 }}>入力した内容は、使う AI のサービス側で扱われます。</p>
          </div>

          {/* プロンプト */}
          <div style={{ marginTop: 12, fontSize: 12, color: '#c9a96e', letterSpacing: '0.08em' }}>プロンプト(文面:{SVAI_VERSION})</div>
          <div style={{ border: '1px dashed #3d2a12', borderRadius: 4, padding: '10px 12px', marginTop: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#8a6a3a' }}>SVAI モード1(面談記録の振り返り)：準備中</div>
            <p style={note}>AI サービスの学習利用・保存・削除・アクセスに関する確認が済むまで、利用できません。</p>
          </div>
          <PromptCopy k="mode2" title="SVAI モード2(ロープレ訓練)" desc="架空の場面だけで練習します。本試験の会話や問題文、実際の相談者の情報は入れません。合否や点数は出しません。" />
          <PromptCopy k="mode3" title="SVAI モード3(自己観察)" desc="自分自身の体験(体・気持ち・引っぱられたこと)だけを扱います。相談記録は入れません。" />

          {/* SVAI ログ */}
          <div style={{ marginTop: 16, fontSize: 12, color: '#c9a96e', letterSpacing: '0.08em' }}>SVAI ログを残す</div>
          <p style={note}>名前、面談の発言、相談者の属性、同意の記録は書かないでください。日付は年月だけにします。SVAI を使わない振り返りも「手動」として残せます。</p>
          <details style={{ marginTop: 4 }}>
            <summary style={{ fontSize: 12, color: '#c9a96e', cursor: 'pointer', padding: '4px 0' }}>SVAI の出力の【SVAIログ】の行を貼り付けて読み込む</summary>
            <textarea value={paste} onChange={e => setPaste(e.target.value)} rows={4} aria-label="【SVAIログ】の行を貼り付け"
              placeholder="【SVAIログ】年月: 2026-11 | 場面: 練習 | 方法: モード2 | 関係する課題: … | 型: …&#10;AIの提案（参考）: …" style={{ ...input, marginTop: 6, fontSize: 12 }} />
            <p style={note}>読み込むのは、年月・場面・方法・関係する課題・型・AIの提案だけです。「本人が採用した気づき」「次に試すこと」は読み込みません(自分の言葉で書く欄です)。読み込んだだけでは保存しません。</p>
            <button type="button" onClick={readPaste} style={btn}>読み込む</button>
            {pasteMsg.length > 0 && <div role="status">{pasteMsg.map((m, i) => <p key={i} style={{ ...note, color: i === 0 && m.startsWith('読み込みました') ? '#9fc98a' : '#e6b555' }}>{m}</p>)}</div>}
          </details>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0 10px' }}>
            <label style={label}>年月<input type="month" value={form.ym} onChange={e => set('ym', e.target.value)} style={input} /></label>
            <label style={label}>場面
              <select value={form.scene} onChange={e => set('scene', e.target.value as Form['scene'])} style={input}>
                <option value="">選ぶ</option>{SVAI_SCENES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
            <label style={label}>方法
              <select value={form.method} onChange={e => set('method', e.target.value as Form['method'])} style={input}>
                <option value="">選ぶ</option>{SVAI_METHODS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
            <label style={label}>型(任意)<input value={form.type} onChange={e => set('type', e.target.value)} maxLength={60} style={input} /></label>
          </div>
          <label style={label}>関係する課題<input value={form.task} onChange={e => set('task', e.target.value)} maxLength={LIM} style={input} /></label>
          <label style={label}>本人が採用した気づき(自分の言葉で1行)<input value={form.adopted} onChange={e => set('adopted', e.target.value)} maxLength={LIM} style={input} /></label>
          <label style={label}>次に試すこと(自分で選んだもの)<input value={form.next} onChange={e => set('next', e.target.value)} maxLength={LIM} style={input} /></label>
          <label style={label}>AIの提案(参考。採用しなかった場合も残してよい)<input value={form.ai} onChange={e => set('ai', e.target.value)} maxLength={LIM} style={input} /></label>
          <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" onClick={saveLog} style={btnMain}>保存する</button>
            <button type="button" onClick={() => { setForm(emptyForm()); setMsg(''); setPasteMsg([]) }} style={btn}>入力を消す</button>
          </div>
          {msg && <p role="status" style={{ ...note, color: msg === '保存しました。' ? '#9fc98a' : '#e6b555' }}>{msg}</p>}

          {store.logs.length > 0 && (
            <details style={{ marginTop: 12 }}>
              <summary style={{ fontSize: 12, color: '#c9a96e', cursor: 'pointer', padding: '4px 0' }}>これまでの SVAI ログ({store.logs.length} 件。記録の量は能力の証明ではありません)</summary>
              {store.logs.map(l => (
                <div key={l.id} style={{ borderTop: '1px dashed #3d2a12', padding: '8px 0', fontSize: 12, color: '#d8c7a4', lineHeight: 1.7 }}>
                  <div style={{ color: '#c9a96e' }}>{l.ym}|場面:{l.scene}|方法:{l.method}{l.task && `|課題:${l.task}`}{l.type && `|型:${l.type}`}</div>
                  {l.adopted && <div>本人が採用した気づき:{l.adopted}</div>}
                  {l.next && <div>次に試すこと:{l.next}</div>}
                  {l.ai && <div style={{ color: '#8a6a3a' }}>AIの提案(参考):{l.ai}</div>}
                  <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
                    {l.next && <button type="button" onClick={() => addNext(l.next, `SVAI ログ ${l.ym}`)} style={{ ...btn, fontSize: 11, padding: '4px 8px' }}>次の練習に移す</button>}
                    <button type="button" onClick={() => removeLog(l.id)} style={{ ...btn, fontSize: 11, padding: '4px 8px' }}>消す</button>
                  </div>
                </div>
              ))}
            </details>
          )}

          {/* 次の練習 */}
          <div style={{ marginTop: 16, fontSize: 12, color: '#c9a96e', letterSpacing: '0.08em' }}>次の練習</div>
          <p style={note}>試験の再挑戦課題や、SVAI ログの「次に試すこと」を、練習の課題として残します。</p>
          <label style={label}>課題の文<input value={nextText} onChange={e => setNextText(e.target.value)} maxLength={LIM} style={input} /></label>
          <label style={label}>出どころ(例:Lv.2 本試験 2026-11 チェックポイント3)<input value={nextSource} onChange={e => setNextSource(e.target.value)} maxLength={120} style={input} /></label>
          <button type="button" onClick={() => { addNext(nextText, nextSource); setNextText(''); setNextSource('') }} style={{ ...btn, marginTop: 8 }}>追加する</button>
          {store.next.length > 0 && (
            <div style={{ marginTop: 8 }}>
              {store.next.map(n => (
                <div key={n.id} style={{ borderTop: '1px dashed #3d2a12', padding: '8px 0', fontSize: 12, color: n.status === '確かめた' ? '#8a6a3a' : '#d8c7a4', lineHeight: 1.7 }}>
                  <div>{n.status === '確かめた' ? '✓ ' : '・'}{n.text}</div>
                  {n.source && <div style={{ fontSize: 11, color: '#8a6a3a' }}>出どころ:{n.source}</div>}
                  <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
                    <button type="button" onClick={() => toggleNext(n.id)} style={{ ...btn, fontSize: 11, padding: '4px 8px' }}>{n.status === '練習中' ? '確かめた にする' : '練習中 に戻す'}</button>
                    <button type="button" onClick={() => removeNext(n.id)} style={{ ...btn, fontSize: 11, padding: '4px 8px' }}>消す</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

/** 段階6:今日の一頁・試作練習に、「次の練習」(練習中のもの)を思い出せるよう小さく表示する。
 *  表示だけで、ここからは変更しない(追加・確かめた・削除は SVAI の欄で行う)。練習中が0件なら何も出さない */
export function NextPracticeReminder({ items, max = 3 }: { items: NextPractice[]; max?: number }) {
  const open = items.filter(n => n.status === '練習中')
  if (open.length === 0) return null
  return (
    <div role="note" aria-label="次の練習" style={{ border: '1px solid #3d2a12', borderLeft: '3px solid #c9933a', borderRadius: 4, padding: '8px 10px', margin: '8px 0', background: '#0b0804' }}>
      <div style={{ fontSize: 11, color: '#c9a96e', letterSpacing: '0.08em' }}>次の練習(練習中 {open.length} 件)</div>
      <ul style={{ margin: '4px 0 0', paddingLeft: 16, fontSize: 12, color: '#d8c7a4', lineHeight: 1.7 }}>
        {open.slice(0, max).map(n => <li key={n.id}>{n.text}</li>)}
      </ul>
      {open.length > max && <div style={{ fontSize: 11, color: '#8a6a3a' }}>ほか {open.length - max} 件</div>}
      <div style={{ fontSize: 11, color: '#8a6a3a', marginTop: 2 }}>追加・「確かめた」への切り替えは、SVAI の欄で行います。</div>
    </div>
  )
}

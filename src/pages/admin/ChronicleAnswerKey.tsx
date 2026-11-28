// src/pages/admin/ChronicleAnswerKey.tsx
// 運営者用 — 成長の書 Lv.1 の模範解答・対応例(管理者・採点者用)
// ルーティング: <Route path="/admin/chronicle-key" element={<ChronicleAnswerKey />} />
// データ取得: /api/chronicle-answer-key(閲覧キーは /admin/views・/admin/dashboard と共通)
//
// 本文は API からだけ受け取る。画面の JavaScript には本文を入れない(受験者の画面・試験官プロンプトに混ざらないようにするため)。
// 受験者の画面(/admin/chronicle)からは、このページへのリンクを置かない。

import { Fragment, useEffect, useState, type ReactNode } from "react"
import { Helmet } from "react-helmet-async"

const KEY_STORAGE = "ishizue_views_key"
const SAGE = "#7C9A8A"
const INK = "#2C1F14"
const BG = "#F7F3EA"

type Part = { title: string; markdown: string }
type AnswerKey = { level: string; version: string; date: string; status: string; parts: Part[] }

function readKey(): string {
  try { return localStorage.getItem(KEY_STORAGE) ?? "" } catch { return "" }
}
function saveKey(k: string) {
  try { k ? localStorage.setItem(KEY_STORAGE, k) : localStorage.removeItem(KEY_STORAGE) } catch { /* noop */ }
}

/* ---- Markdown の表示(資料で使っている書き方だけ:見出し・段落・箇条書き・表・引用・太字・コード) ---- */

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*|`([^`]+)`/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1] !== undefined) out.push(<strong key={i++} style={{ color: INK }}>{m[1]}</strong>)
    else out.push(<code key={i++} style={{ background: "#efe9dc", padding: "0 3px", borderRadius: 3, fontSize: "0.92em" }}>{m[2]}</code>)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

const cells = (line: string) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim())
const isSep = (line: string) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/.test(line)

type ListItem = { depth: number; text: string }

function renderList(items: ListItem[], key: string): ReactNode {
  // 字下げ(2文字ごと)で入れ子にする
  const build = (start: number, depth: number): [ReactNode[], number] => {
    const nodes: ReactNode[] = []
    let i = start
    while (i < items.length && items[i].depth >= depth) {
      if (items[i].depth > depth) {
        const [kids, next] = build(i, items[i].depth)
        nodes.push(<ul key={`${key}-n${i}`} style={{ margin: "2px 0 2px 1.1em", paddingLeft: 0, listStyle: "circle" }}>{kids}</ul>)
        i = next
        continue
      }
      const it = items[i]
      let j = i + 1
      let child: ReactNode = null
      if (j < items.length && items[j].depth > depth) {
        const [kids, next] = build(j, items[j].depth)
        child = <ul style={{ margin: "2px 0 2px 1.1em", paddingLeft: 0, listStyle: "circle" }}>{kids}</ul>
        j = next
      }
      nodes.push(<li key={`${key}-${i}`} style={{ margin: "3px 0" }}>{inline(it.text)}{child}</li>)
      i = j
    }
    return [nodes, i]
  }
  const [nodes] = build(0, items[0]?.depth ?? 0)
  return <ul key={key} style={{ margin: "6px 0 10px 1.1em", paddingLeft: 0, listStyle: "disc" }}>{nodes}</ul>
}

function Markdown({ text }: { text: string }) {
  const lines = text.replace(/\r\n/g, "\n").split("\n")
  const out: ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }
    const h = /^(#{1,4})\s+(.*)$/.exec(line)
    if (h) {
      const lv = h[1].length
      const size = [0, 20, 17, 15, 14][lv]
      out.push(<div key={i} role="heading" aria-level={lv} style={{ fontSize: size, fontWeight: 700, color: INK, margin: lv <= 2 ? "26px 0 8px" : "16px 0 6px", paddingBottom: lv === 2 ? 4 : 0, borderBottom: lv === 2 ? `1px solid ${SAGE}55` : "none" }}>{inline(h[2])}</div>)
      i++
      continue
    }
    if (line.trim().startsWith("|") && i + 1 < lines.length && isSep(lines[i + 1])) {
      const head = cells(line)
      const rows: string[][] = []
      i += 2
      while (i < lines.length && lines[i].trim().startsWith("|")) { rows.push(cells(lines[i])); i++ }
      out.push(
        <div key={`t${i}`} style={{ overflowX: "auto", margin: "8px 0 12px", WebkitOverflowScrolling: "touch" }}>
          <table style={{ borderCollapse: "collapse", fontSize: 12.5, lineHeight: 1.6, minWidth: head.length > 2 ? 520 : undefined, width: "100%" }}>
            <thead><tr>{head.map((c, k) => <th key={k} style={{ textAlign: "left", background: "#e9e2d2", border: "1px solid #d6ccb8", padding: "5px 7px", verticalAlign: "top" }}>{inline(c)}</th>)}</tr></thead>
            <tbody>{rows.map((r, ri) => <tr key={ri}>{head.map((_, k) => <td key={k} style={{ border: "1px solid #d6ccb8", padding: "5px 7px", verticalAlign: "top", background: "#fffdf8" }}>{inline(r[k] ?? "")}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      )
      continue
    }
    if (/^>\s?/.test(line)) {
      const buf: string[] = []
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, "")); i++ }
      out.push(
        <blockquote key={`q${i}`} style={{ margin: "8px 0 12px", padding: "8px 12px", borderLeft: `3px solid ${SAGE}`, background: "#eef2ee", fontSize: 13.5, lineHeight: 1.8 }}>
          {buf.map((b, k) => (b.trim() ? <p key={k} style={{ margin: "2px 0" }}>{inline(b)}</p> : null))}
        </blockquote>,
      )
      continue
    }
    if (/^\s*- /.test(line)) {
      const items: ListItem[] = []
      while (i < lines.length && /^\s*- /.test(lines[i])) {
        const m = /^(\s*)- (.*)$/.exec(lines[i])!
        items.push({ depth: Math.floor(m[1].length / 2), text: m[2] })
        i++
      }
      out.push(renderList(items, `l${i}`))
      continue
    }
    const buf: string[] = []
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|\s*- |\|)/.test(lines[i])) { buf.push(lines[i]); i++ }
    if (!buf.length) { buf.push(lines[i]); i++ }
    out.push(<p key={`p${i}`} style={{ margin: "6px 0 10px" }}>{buf.map((b, k) => <Fragment key={k}>{k > 0 && <br />}{inline(b)}</Fragment>)}</p>)
  }
  return <>{out}</>
}

/* ---- 画面 ---- */

function KeyGate({ onSubmit, error }: { onSubmit: (k: string) => void; error: string }) {
  const [v, setV] = useState("")
  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ background: BG }}>
      <div className="w-full max-w-xs space-y-3">
        <p className="text-sm text-stone-600">運営者用ページです(採点者用の資料)。閲覧キーを入力してください。</p>
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

export default function ChronicleAnswerKey() {
  const [key, setKey] = useState(readKey)
  const [data, setData] = useState<AnswerKey | null>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [part, setPart] = useState(0)

  useEffect(() => {
    if (!key) return
    let alive = true
    setLoading(true)
    setError("")
    fetch("/api/chronicle-answer-key?level=lv1", { headers: { "x-admin-key": key } })
      .then(async (r) => {
        if (r.status === 401) { saveKey(""); if (alive) { setKey(""); setError("閲覧キーが違います") } return }
        if (!r.ok) { if (alive) setError("資料を読み込めませんでした(" + r.status + ")"); return }
        const j = (await r.json()) as AnswerKey
        if (alive) setData(j)
      })
      .catch(() => { if (alive) setError("資料を読み込めませんでした(通信エラー)") })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [key])

  const head = (
    <Helmet>
      <title>成長の書 模範解答(採点者用)</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  )

  if (!key) return <>{head}<KeyGate onSubmit={(k) => { saveKey(k); setKey(k) }} error={error} /></>

  return (
    <div className="min-h-screen" style={{ background: BG, color: "#3b2f25" }}>
      {head}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "20px 16px 60px", fontSize: 14, lineHeight: 1.85 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.1em", color: SAGE, marginBottom: 4 }}>運営者用 ・ 採点者用の資料</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: INK }}>成長の書 Lv.1 模範解答・対応例</div>
        <p style={{ fontSize: 12, color: "#7a6a58", margin: "6px 0 12px" }}>
          受験者には見せない資料です。判定の基準は試験官プロンプトの「見るポイント」で、この資料はそれを具体化したものです。
          {data && <> 版：{data.version}({data.date})。{data.status}</>}
        </p>
        {loading && <p className="text-sm text-stone-500">読み込み中…</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {data && (
          <>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "6px 0 10px", position: "sticky", top: 0, background: BG, padding: "6px 0", zIndex: 1 }}>
              {data.parts.map((p, k) => (
                <button key={k} type="button" onClick={() => { setPart(k); window.scrollTo(0, 0) }}
                  style={{ fontSize: 12.5, padding: "6px 12px", borderRadius: 999, border: `1px solid ${SAGE}`, background: part === k ? SAGE : "#fff", color: part === k ? "#fff" : SAGE }}>
                  {p.title}
                </button>
              ))}
            </div>
            <Markdown text={data.parts[part]?.markdown ?? ""} />
          </>
        )}
      </div>
    </div>
  )
}

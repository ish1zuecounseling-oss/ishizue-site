// src/pages/admin/StaffSearch.tsx
// 運営者用 — 記事本文検索(面談中に記事や引用をすぐ引くためのページ)
// ルーティング: <Route path="/admin/search" element={<StaffSearch />} />
// 検索データ: ビルド時に scripts/generateSearchIndex.ts が dist/admin/search-index.json を作る
// 言い換え辞書: src/data/searchSynonyms.ts

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { Helmet } from "react-helmet-async"
import { SEARCH_SYNONYMS } from "../../data/searchSynonyms"

// 自分用ページの簡易パスワード(Chronicle と同じ)
const ADMIN_PASS = "ishizue"
const AUTH_KEY = "ishizue_staff_search_auth"

declare function gtag(...args: unknown[]): void

type Doc = { p: string; t: string; b: string }
type Hit = { doc: Doc; score: number; exact: number; matched: string[]; snippets: string[] }

const SAGE = "#7C9A8A"
const INK = "#2C1F14"

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/** 検索語から、言い換え辞書で広げた語の一覧を作る(先頭は入力そのもの) */
function expandTerms(q: string): string[] {
  const terms = new Set<string>([q])
  if (q.length >= 2) {
    for (const group of SEARCH_SYNONYMS) {
      if (group.some((t) => q.includes(t) || t.includes(q))) group.forEach((t) => terms.add(t))
    }
  }
  return [...terms]
}

function countOf(text: string, term: string) {
  let n = 0
  let i = text.indexOf(term)
  while (i >= 0) { n++; i = text.indexOf(term, i + term.length) }
  return n
}

function makeSnippets(body: string, terms: string[], max = 3): string[] {
  const out: string[] = []
  for (const line of body.split("\n")) {
    const hitTerm = terms.find((t) => line.includes(t))
    if (!hitTerm) continue
    if (line.length <= 120) out.push(line)
    else {
      const i = line.indexOf(hitTerm)
      const s = Math.max(0, i - 50)
      out.push((s > 0 ? "…" : "") + line.slice(s, i + hitTerm.length + 60) + "…")
    }
    if (out.length >= max) break
  }
  return out
}

function highlight(text: string, terms: string[]): ReactNode[] {
  const sorted = [...terms].sort((a, b) => b.length - a.length)
  const re = new RegExp("(" + sorted.map(escapeRe).join("|") + ")", "g")
  return text.split(re).map((part, i) =>
    sorted.includes(part)
      ? <mark key={i} style={{ background: "#F3E3B5", color: INK, padding: "0 1px", borderRadius: 2 }}>{part}</mark>
      : <span key={i}>{part}</span>
  )
}

function Gate({ onOk }: { onOk: () => void }) {
  const [pw, setPw] = useState("")
  const [err, setErr] = useState(false)
  const submit = () => {
    if (pw === ADMIN_PASS) {
      try { localStorage.setItem(AUTH_KEY, ADMIN_PASS) } catch { /* noop */ }
      onOk()
    } else setErr(true)
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ background: "#F7F3EA" }}>
      <div className="w-full max-w-xs space-y-3">
        <p className="text-sm text-stone-600">運営者用ページです</p>
        <input
          type="password" value={pw} autoFocus
          onChange={(e) => { setPw(e.target.value); setErr(false) }}
          onKeyDown={(e) => { if (e.key === "Enter") submit() }}
          className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none"
          placeholder="パスワード"
        />
        {err && <p className="text-xs text-red-600">パスワードが違います</p>}
        <button onClick={submit} className="w-full py-2.5 rounded-xl text-sm text-white" style={{ background: SAGE }}>開く</button>
      </div>
    </div>
  )
}

export default function StaffSearch() {
  const [authed, setAuthed] = useState(() => {
    try { return localStorage.getItem(AUTH_KEY) === ADMIN_PASS } catch { return false }
  })
  const [docs, setDocs] = useState<Doc[] | null>(null)
  const [loadErr, setLoadErr] = useState(false)
  const [input, setInput] = useState("")
  const [q, setQ] = useState("")
  const [onlyThinkers, setOnlyThinkers] = useState(false)
  const missTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!authed || docs) return
    fetch("/admin/search-index.json")
      .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json() })
      .then((d: Doc[]) => setDocs(d))
      .catch(() => setLoadErr(true))
  }, [authed, docs])

  // 入力が落ち着いてから検索する
  useEffect(() => {
    const t = setTimeout(() => setQ(input.trim()), 250)
    return () => clearTimeout(t)
  }, [input])

  const terms = useMemo(() => (q ? expandTerms(q) : []), [q])

  const hits: Hit[] = useMemo(() => {
    if (!docs || !q) return []
    const res: Hit[] = []
    for (const doc of docs) {
      if (onlyThinkers && !doc.p.startsWith("/articles/thinker-")) continue
      const text = doc.t + "\n" + doc.b
      const matched = terms.filter((t) => text.includes(t))
      if (matched.length === 0) continue
      const exact = countOf(text, q)
      const others = matched.filter((t) => t !== q).reduce((n, t) => n + countOf(text, t), 0)
      res.push({ doc, exact, matched, score: exact * 10 + others + (doc.t.includes(q) ? 20 : 0), snippets: makeSnippets(doc.b, terms) })
    }
    return res.sort((a, b) => b.score - a.score).slice(0, 60)
  }, [docs, q, terms, onlyThinkers])

  // 0件だった語を記録する(辞書に足す候補)
  useEffect(() => {
    if (missTimer.current) clearTimeout(missTimer.current)
    if (!docs || q.length < 2 || hits.length > 0) return
    missTimer.current = setTimeout(() => {
      try { gtag("event", "staff_search_miss", { search_term: q }) } catch { /* noop */ }
    }, 1500)
  }, [docs, q, hits.length])

  if (!authed) return <Gate onOk={() => setAuthed(true)} />

  const expanded = terms.filter((t) => t !== q)

  return (
    <div className="min-h-screen" style={{ background: "#F7F3EA" }}>
      <Helmet>
        <title>本文検索(運営者用)</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="sticky top-0 z-10 pb-3 pt-1" style={{ background: "#F7F3EA" }}>
          <p className="text-[11px] tracking-[0.2em] text-stone-500 mb-2">本文検索 ｜ 運営者用</p>
          <input
            type="search" value={input} autoFocus
            onChange={(e) => setInput(e.target.value)}
            placeholder="例:自己否定、他責、疲弊"
            className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-base focus:outline-none focus:border-stone-500"
            aria-label="本文を検索"
          />
          <div className="flex items-center gap-2 mt-2 text-xs">
            <button
              onClick={() => setOnlyThinkers(false)}
              className="px-3 py-1 rounded-full border"
              style={!onlyThinkers ? { background: SAGE, color: "white", borderColor: SAGE } : { borderColor: "#d6d3d1", color: "#57534e" }}
            >すべての記事</button>
            <button
              onClick={() => setOnlyThinkers(true)}
              className="px-3 py-1 rounded-full border"
              style={onlyThinkers ? { background: SAGE, color: "white", borderColor: SAGE } : { borderColor: "#d6d3d1", color: "#57534e" }}
            >偉人・学者シリーズのみ</button>
            {docs && <span className="ml-auto text-stone-400">{docs.length}記事</span>}
          </div>
          {q && expanded.length > 0 && (
            <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">言い換えでも検索:{expanded.join("・")}</p>
          )}
        </div>

        {loadErr && <p className="text-sm text-red-600">検索データを読み込めませんでした。デプロイ後に再読み込みしてください。</p>}
        {!docs && !loadErr && <p className="text-sm text-stone-500">読み込み中…</p>}

        {docs && q && (
          <p className="text-xs text-stone-500 mb-3">{hits.length === 0 ? "見つかりませんでした(この語は記録され、辞書に追加する候補になります)" : `${hits.length}件`}</p>
        )}

        <div className="space-y-3">
          {hits.map((h) => (
            <div key={h.doc.p} className="bg-white rounded-xl border border-stone-200 p-4">
              <a href={h.doc.p} target="_blank" rel="noopener noreferrer" className="block text-sm font-medium leading-snug hover:underline" style={{ color: INK }}>
                {highlight(h.doc.t, terms)}
              </a>
              <p className="text-[11px] text-stone-400 mt-1">
                {h.exact > 0 ? `「${q}」${h.exact}件` : "言い換えで一致"} ／ {h.matched.slice(0, 5).join("・")}
              </p>
              {h.snippets.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {h.snippets.map((s, i) => (
                    <li key={i} className="text-[13px] text-stone-600 leading-relaxed pl-3 border-l-2 border-stone-200">{highlight(s, terms)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

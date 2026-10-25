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
type Hit = { doc: Doc; score: number; exacts: number[]; matched: string[]; snippets: string[] }
type Group = { word: string; terms: string[] }

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

/** 複数語のときは、多くの語を含む行を優先して抜き出す */
function makeSnippets(body: string, groups: Group[], max = 3): string[] {
  const cands: { line: string; n: number; idx: number; term: string }[] = []
  body.split("\n").forEach((line, idx) => {
    const hitGroups = groups.filter((g) => g.terms.some((t) => line.includes(t)))
    if (hitGroups.length === 0) return
    const term = hitGroups[0].terms.find((t) => line.includes(t))!
    cands.push({ line, n: hitGroups.length, idx, term })
  })
  return cands
    .sort((a, b) => b.n - a.n || a.idx - b.idx)
    .slice(0, max)
    .sort((a, b) => a.idx - b.idx)
    .map(({ line, term }) => {
      if (line.length <= 120) return line
      const i = line.indexOf(term)
      const st = Math.max(0, i - 50)
      return (st > 0 ? "…" : "") + line.slice(st, i + term.length + 60) + "…"
    })
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

  // スペース(全角・半角)で区切った語は、すべてを含む記事だけを出す(AND検索)
  const groups: Group[] = useMemo(
    () => q.split(/[\s\u3000]+/).filter(Boolean).map((w) => ({ word: w, terms: expandTerms(w) })),
    [q]
  )
  const terms = useMemo(() => [...new Set(groups.flatMap((g) => g.terms))], [groups])
  const words = groups.map((g) => g.word)

  const docText = (doc: Doc) => doc.t + "\n" + doc.b
  const inScope = (doc: Doc) => !onlyThinkers || doc.p.startsWith("/articles/thinker-")

  const hits: Hit[] = useMemo(() => {
    if (!docs || groups.length === 0) return []
    const res: Hit[] = []
    for (const doc of docs) {
      if (!inScope(doc)) continue
      const text = docText(doc)
      if (!groups.every((g) => g.terms.some((t) => text.includes(t)))) continue
      const matched = terms.filter((t) => text.includes(t))
      const exacts = groups.map((g) => countOf(text, g.word))
      const others = matched.filter((t) => !words.includes(t)).reduce((n, t) => n + countOf(text, t), 0)
      const titleBonus = words.filter((w) => doc.t.includes(w)).length * 20
      const allExact = exacts.every((n) => n > 0) ? 30 : 0
      const score = exacts.reduce((a, b) => a + b, 0) * 10 + others + titleBonus + allExact
      res.push({ doc, exacts, matched, score, snippets: makeSnippets(doc.b, groups) })
    }
    return res.sort((a, b) => b.score - a.score)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docs, groups, terms, onlyThinkers])

  // 複数語で0件のとき、語ごとの件数を出す(どの組み合わせがきついかの目安)
  const perWord: { word: string; n: number }[] = useMemo(() => {
    if (!docs || groups.length < 2 || hits.length > 0) return []
    return groups.map((g) => ({
      word: g.word,
      n: docs.filter((d) => inScope(d) && g.terms.some((t) => docText(d).includes(t))).length,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docs, groups, hits.length, onlyThinkers])

  // 0件だった語を記録する(辞書に足す候補)。組み合わせで0件になっただけの語は記録しない
  useEffect(() => {
    if (missTimer.current) clearTimeout(missTimer.current)
    if (!docs || q.length < 2 || hits.length > 0) return
    const missWords = groups.length < 2 ? [q] : perWord.filter((w) => w.n === 0).map((w) => w.word)
    if (missWords.length === 0) return
    missTimer.current = setTimeout(() => {
      for (const w of missWords) {
        try { gtag("event", "staff_search_miss", { search_term: w }) } catch { /* noop */ }
      }
    }, 1500)
  }, [docs, q, groups, hits.length, perWord])

  if (!authed) return <Gate onOk={() => setAuthed(true)} />

  const expansions = groups
    .map((g) => ({ word: g.word, extra: g.terms.filter((t) => t !== g.word) }))
    .filter((e) => e.extra.length > 0)

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
            placeholder="例:自己否定 他責(スペースで区切ると両方を含む記事)"
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
          {q && expansions.length > 0 && (
            <div className="text-[11px] text-stone-500 mt-2 leading-relaxed space-y-0.5">
              {expansions.map((e) => (
                <p key={e.word}>「{e.word}」は言い換えでも検索:{e.extra.join("・")}</p>
              ))}
            </div>
          )}
        </div>

        {loadErr && <p className="text-sm text-red-600">検索データを読み込めませんでした。デプロイ後に再読み込みしてください。</p>}
        {!docs && !loadErr && <p className="text-sm text-stone-500">読み込み中…</p>}

        {docs && q && (
          <div className="text-xs text-stone-500 mb-3">
            {hits.length > 0 && <p>{hits.length}件{hits.length > 60 && "(関連の強い上位60件を表示)"}</p>}
            {hits.length === 0 && groups.length < 2 && <p>見つかりませんでした(この語は記録され、辞書に追加する候補になります)</p>}
            {hits.length === 0 && groups.length >= 2 && (
              <p>
                すべてを含む記事はありませんでした。語ごとの件数:
                {perWord.map((w) => `「${w.word}」${w.n}件`).join(" ／ ")}
                {perWord.some((w) => w.n === 0) && "(0件の語は記録され、辞書に追加する候補になります)"}
              </p>
            )}
          </div>
        )}

        <div className="space-y-3">
          {hits.slice(0, 60).map((h) => (
            <div key={h.doc.p} className="bg-white rounded-xl border border-stone-200 p-4">
              <a href={h.doc.p} target="_blank" rel="noopener noreferrer" className="block text-sm font-medium leading-snug hover:underline" style={{ color: INK }}>
                {highlight(h.doc.t, terms)}
              </a>
              <p className="text-[11px] text-stone-400 mt-1">
                {groups.map((g, i) => (h.exacts[i] > 0 ? `「${g.word}」${h.exacts[i]}件` : `「${g.word}」は言い換えで一致`)).join(" ／ ")}
                {" ／ "}{h.matched.slice(0, 6).join("・")}
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

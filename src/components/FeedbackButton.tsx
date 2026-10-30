// src/components/FeedbackButton.tsx
// サイトの不具合・ご意見を送る(フッターの小さなリンク → 入力欄)
// ・名前やメールアドレスは聞かない。送信元のページと端末の種類だけ自動で付ける
// ・相談の窓口と誤解されないよう、返信できないこと・緊急時の窓口を入力欄の上に書く
// ・保存先は api/feedback.ts(一覧は運営ダッシュボードの「ご意見」タブ)

import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { X } from "lucide-react"

const CATEGORIES: [string, string][] = [
  ["display", "表示がおかしい"],
  ["link", "リンクが開かない"],
  ["content", "内容の誤り"],
  ["other", "その他"],
]

function deviceType(): string {
  if (typeof window === "undefined") return "unknown"
  const w = window.innerWidth
  const coarse = window.matchMedia?.("(pointer: coarse)").matches
  if (coarse && w < 768) return "mobile"
  if (coarse) return "tablet"
  return "desktop"
}

/**
 * variant="footer":フッター用の小さなリンク(全ページ)
 * variant="article":記事の本文のすぐ下に置く、一行の案内つきのリンク(記事・チェックのページ)
 */
export default function FeedbackButton({ variant = "footer" }: { variant?: "footer" | "article" }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState("display")
  const [text, setText] = useState("")
  const [website, setWebsite] = useState("") // 機械による送信を見分けるための、見えない欄
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [message, setMessage] = useState("")
  const openedAt = useRef(0)

  useEffect(() => {
    if (!open) return
    openedAt.current = Date.now()
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const reset = () => { setText(""); setCategory("display"); setStatus("idle"); setMessage("") }

  const send = async () => {
    if (text.trim().length < 2) { setStatus("error"); setMessage("内容を入力してください"); return }
    setStatus("sending"); setMessage("")
    try {
      const r = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, text, page: pathname, device: deviceType(), website, elapsed: Date.now() - openedAt.current }),
      })
      const b = (await r.json().catch(() => ({}))) as { ok?: boolean; message?: string }
      if (!r.ok || !b.ok) throw new Error(b.message ?? "送信に失敗しました")
      setStatus("done")
      try { (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "feedback_submit", { category }) } catch { /* noop */ }
    } catch (e) {
      setStatus("error"); setMessage(e instanceof Error ? e.message : "送信に失敗しました")
    }
  }

  if (pathname.startsWith("/admin")) return null

  return (
    <>
      {variant === "article" ? (
        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 rounded-xl border border-dashed border-stone-300 text-xs text-stone-500">
          <span>表示がおかしい・リンクが開かない・内容に誤りがある、などに気づいたら</span>
          <button
            type="button"
            onClick={() => { reset(); setOpen(true) }}
            className="py-1 font-medium text-stone-700 underline underline-offset-2 hover:text-stone-900"
          >
            お知らせください(匿名・1分)
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => { reset(); setOpen(true) }}
          className="py-1.5 text-xs text-stone-400 hover:text-stone-700 underline underline-offset-2"
        >
          サイトの不具合・ご意見を送る
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 p-0 sm:p-4" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="サイトの不具合・ご意見を送る"
            className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-5 max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={() => setOpen(false)} aria-label="閉じる" className="absolute top-3 right-3 p-2 text-stone-400 hover:text-stone-700">
              <X className="w-4 h-4" />
            </button>

            {status === "done" ? (
              <div className="py-6 text-center">
                <p className="text-sm font-medium text-stone-800 mb-2">送信しました。ありがとうございます。</p>
                <p className="text-xs text-stone-500 leading-relaxed">いただいた内容は、サイトの修正に使わせていただきます。</p>
                <button type="button" onClick={() => setOpen(false)} className="mt-5 px-5 py-2 rounded-lg text-sm border border-stone-300 text-stone-700">閉じる</button>
              </div>
            ) : (
              <>
                <p className="text-sm font-medium text-stone-800 mb-1 pr-8">サイトの不具合・ご意見を送る</p>
                <p className="text-[11px] text-stone-500 leading-relaxed mb-3">
                  表示の崩れやリンク切れ、内容の誤りなどを教えてください。匿名で送れます。<strong>返信はできません。</strong>
                </p>
                <p className="text-[11px] text-stone-600 leading-relaxed mb-4 p-2.5 rounded-lg" style={{ background: "#fbf7ef", border: "1px solid #ece3d3" }}>
                  ここではご相談は受け付けていません。つらい気持ちを今すぐ誰かに話したいときは、
                  よりそいホットライン(0120-279-338・24時間)やこころの健康相談統一ダイヤル(0570-064-556)をご利用ください。
                </p>

                <p className="text-xs text-stone-600 mb-1.5">種類</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {CATEGORIES.map(([k, l]) => (
                    <button key={k} type="button" onClick={() => setCategory(k)} aria-pressed={category === k}
                      className="px-3 py-1.5 rounded-full text-xs border"
                      style={category === k ? { background: "#7C9A8A", color: "#fff", borderColor: "#7C9A8A" } : { background: "#fff", color: "#57534e", borderColor: "#e7e5e4" }}>
                      {l}
                    </button>
                  ))}
                </div>

                <label className="block text-xs text-stone-600 mb-1.5" htmlFor="fb-text">内容(500字まで)</label>
                <textarea
                  id="fb-text"
                  value={text}
                  onChange={(e) => setText(e.target.value.slice(0, 500))}
                  rows={5}
                  placeholder="例:チェックの結果ボタンが押せない、〇〇のリンク先が開かない など"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 focus:outline-none focus:border-stone-400"
                />
                <p className="text-[10px] text-stone-400 text-right">{text.length}/500</p>

                {/* 見えない欄(人は入力しない) */}
                <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

                <p className="text-[10px] text-stone-400 leading-relaxed mt-1 mb-3">
                  見ていたページ({pathname})と端末の種類(スマホ・パソコンなど)を一緒に送ります。お名前や連絡先は書かないでください。
                </p>

                {status === "error" && <p className="text-xs text-red-600 mb-2">{message}</p>}
                <button type="button" onClick={send} disabled={status === "sending"}
                  className="w-full py-2.5 rounded-lg text-sm font-medium text-white disabled:opacity-60" style={{ background: "#2C1F14" }}>
                  {status === "sending" ? "送信中…" : "送信する"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

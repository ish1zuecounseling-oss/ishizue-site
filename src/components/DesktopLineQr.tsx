// src/components/DesktopLineQr.tsx
// パソコンで見ている人向けの「スマホで読み取るLINE登録」カード(右下に小さく表示)
// ・パソコンではLINEボタンがほぼ押されない(職場PCで読む人が多い)ため、手元のスマホで登録できるようにする
// ・幅1024px以上かつマウス操作の端末だけに表示。スマホ・タブレットには出さない
// ・少しスクロールしてから表示。×で閉じると、そのブラウザでは7日間出さない
// ・QRはリンクにしていない(クリック計測に混ざらないように)。効果は LINE 公式アカウントの「友だち追加経路」で見る

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { X } from "lucide-react"
import { ACCEPTING_NEW_CLIENTS } from "../data/siteStatus"

const HIDE_KEY = "ishizue:qr-hide-until"
const HIDE_DAYS = 7

function hiddenByUser(): boolean {
  try {
    const v = Number(localStorage.getItem(HIDE_KEY) ?? 0)
    return v > Date.now()
  } catch { return false }
}

export default function DesktopLineQr() {
  const { pathname } = useLocation()
  const [eligible, setEligible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [closed, setClosed] = useState(hiddenByUser)

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)")
    const update = () => setEligible(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  const show = eligible && scrolled && !closed && !pathname.startsWith("/admin")

  useEffect(() => {
    if (!show) return
    try { (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "desktop_line_qr_view") } catch { /* noop */ }
  }, [show])

  if (!show) return null

  const close = () => {
    setClosed(true)
    try { localStorage.setItem(HIDE_KEY, String(Date.now() + HIDE_DAYS * 86400000)) } catch { /* noop */ }
    try { (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "desktop_line_qr_close") } catch { /* noop */ }
  }

  return (
    <aside
      aria-label="スマホでLINE登録"
      className="fixed right-5 bottom-5 z-30 w-[220px] bg-white border border-stone-200 rounded-2xl shadow-lg p-4"
    >
      <button
        type="button"
        onClick={close}
        aria-label="閉じる"
        className="absolute top-1.5 right-1.5 p-1.5 text-stone-400 hover:text-stone-700"
      >
        <X className="w-3.5 h-3.5" />
      </button>
      <p className="text-[12px] font-medium text-stone-800 mb-1 pr-4">スマホでLINE登録</p>
      <p className="text-[10px] text-stone-500 leading-relaxed mb-2.5">
        スマホのカメラで読み取ると、友だち追加できます。
        {ACCEPTING_NEW_CLIENTS ? "状態タイプ別の解説が届きます。" : "受付再開のお知らせと、状態タイプ別の解説が届きます。"}
      </p>
      <img src="/line-qr.svg" alt="LINE友だち追加のQRコード" width={120} height={120} className="mx-auto block" />
      <p className="text-[10px] text-stone-400 text-center mt-2">登録だけでもOK・いつでも解除可</p>
    </aside>
  )
}

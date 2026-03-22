// ishizue-site/src/components/Layout.tsx

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { to: "/", label: "ホーム" },
  { to: "/articles", label: "心理記事" },
  { to: "/profile", label: "カウンセラー" },
  { to: "/articles/helper-counseling", label: "支援職カウンセリング" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // メニューを開いているときはスクロール禁止
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="bg-[#FAFAF8] min-h-screen text-stone-800">

      {/* ================================
          Header
      ================================ */}
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group">
            {/* マーク */}
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#7C9A8A]/20 flex items-center justify-center group-hover:bg-[#7C9A8A]/30 transition">
              <svg className="w-3.5 h-3.5 text-[#7C9A8A]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </span>
            {/* テキスト */}
            <div className="leading-tight">
              <p className="font-serif text-sm sm:text-base tracking-wide text-stone-900">
                こころの相談室 いしずえ
              </p>
              <p className="text-[10px] text-stone-400 tracking-widest hidden sm:block">
                COUNSELING OFFICE ISHIZUE
              </p>
            </div>
          </Link>

          {/* ── PC Nav ── */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-3 py-1.5 rounded-md transition-colors duration-150 ${
                  isActive(to)
                    ? "text-stone-900 font-medium"
                    : "text-stone-500 hover:text-stone-800 hover:bg-stone-50"
                }`}
              >
                {label}
                {/* アクティブインジケーター */}
                {isActive(to) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#7C9A8A]"
                  />
                )}
              </Link>
            ))}

            {/* CTAボタン */}
            <Link
              to="/#contact"
              className="ml-3 inline-flex items-center gap-1.5 bg-stone-900 text-white text-xs px-4 py-2 rounded-full font-medium hover:bg-[#3D3D3B] transition shadow-sm hover:shadow-md"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.862 9.862 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              相談する
            </Link>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-stone-100 transition"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-stone-700 origin-center transition-all"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-px bg-stone-700"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-stone-700 origin-center transition-all"
            />
          </button>
        </div>
      </header>

      {/* ================================
          Mobile Menu（フルスクリーン）
      ================================ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-white flex flex-col"
          >
            {/* ヘッダー部分の高さ確保 */}
            <div className="h-16 border-b border-stone-100 flex items-center px-5">
              <p className="font-serif text-sm text-stone-400 tracking-wide">
                MENU
              </p>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV_LINKS.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={to}
                    className={`flex items-center justify-between py-4 border-b border-stone-100 text-xl font-medium tracking-tight ${
                      isActive(to) ? "text-[#7C9A8A]" : "text-stone-800"
                    }`}
                  >
                    {label}
                    <svg className="w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}

              {/* モバイルCTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.1 }}
                className="mt-8"
              >
                <Link
                  to="/#contact"
                  className="flex items-center justify-center gap-2 bg-stone-900 text-white py-4 rounded-2xl font-medium text-base tracking-wide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.862 9.862 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  相談について問い合わせる
                </Link>
              </motion.div>
            </nav>

            {/* 下部情報 */}
            <div className="px-8 py-6 text-xs text-stone-400">
              © 2026 こころの相談室 いしずえ
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================
          Page Content
      ================================ */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.main>

      {/* ================================
          Footer
      ================================ */}
      <footer className="bg-[#F5F4F1] border-t border-stone-200 mt-24">
        <div className="max-w-5xl mx-auto px-5 py-14">

          {/* 3カラム */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

            {/* ── ブランド ── */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#7C9A8A]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#7C9A8A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <p className="font-serif text-sm text-stone-800 tracking-wide">
                  こころの相談室 いしずえ
                </p>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                公認心理師によるカウンセリング。<br />
                支援職・対人援助職の方を中心に、<br />
                こころの整理をサポートします。
              </p>
            </div>

            {/* ── ナビ ── */}
            <div>
              <p className="text-[10px] tracking-widest text-stone-400 uppercase mb-4">
                Navigation
              </p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── お問い合わせ ── */}
            <div>
              <p className="text-[10px] tracking-widest text-stone-400 uppercase mb-4">
                Contact
              </p>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                初回のご相談は無料です。<br />
                お気軽にお問い合わせください。
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-1.5 text-xs border border-stone-300 text-stone-700 px-4 py-2 rounded-full hover:bg-white hover:border-stone-400 transition"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                お問い合わせフォームへ
              </Link>
            </div>
          </div>

          {/* コピーライト */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-400">
            <p>© 2026 こころの相談室 いしずえ. All rights reserved.</p>
            <p className="text-[10px] tracking-wider">
              COUNSELING OFFICE ISHIZUE
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}

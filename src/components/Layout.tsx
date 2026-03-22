import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // 🔥 スクロールで影
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔥 ページ遷移でモバイルメニュー閉じる
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className="bg-[#fdfcfb] min-h-screen text-stone-800">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur transition
        ${scrolled ? "bg-white/80 shadow-md border-b border-stone-200" : "bg-white/80"}`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="font-serif text-lg tracking-wide">
            こころの相談室 いしずえ
          </Link>

          {/* PC Menu */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Link to="/" className="hover:text-stone-900 transition">
              ホーム
            </Link>
            <Link to="/articles" className="hover:text-stone-900 transition">
              心理記事
            </Link>
            <Link to="/profile" className="hover:text-stone-900 transition">
              カウンセラー
            </Link>
            <Link
              to="/articles/helper-counseling"
              className="hover:text-stone-900 transition"
            >
              支援職カウンセリング
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl active:scale-95 transition"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <nav className="flex flex-col p-4 gap-4 text-sm">
              <Link to="/">ホーム</Link>
              <Link to="/articles">心理記事</Link>
              <Link to="/profile">カウンセラー</Link>
              <Link to="/articles/helper-counseling">
                支援職カウンセリング
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page Content（🔥 アニメーション） */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="border-t border-stone-200 mt-20 py-8 text-center text-sm text-stone-500">
        © 2026 こころの相談室 いしずえ
      </footer>
    </div>
  )
}

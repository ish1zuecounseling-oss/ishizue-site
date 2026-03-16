import { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#fdfcfb] min-h-screen text-stone-800">

      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo */}
          <Link to="/" className="font-serif text-lg tracking-wide">
            こころの相談室 いしずえ
          </Link>

          {/* PC Menu */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Link to="/" className="hover:text-stone-900">ホーム</Link>
            <Link to="/articles" className="hover:text-stone-900">心理記事</Link>
            <Link to="/profile" className="hover:text-stone-900">カウンセラー</Link>
            <Link to="/articles/helper-counseling" className="hover:text-stone-900">
              支援職カウンセリング
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-stone-200">
            <nav className="flex flex-col p-4 gap-4 text-sm">

              <Link to="/" onClick={()=>setOpen(false)}>
                ホーム
              </Link>

              <Link to="/articles" onClick={()=>setOpen(false)}>
                心理記事
              </Link>

              <Link to="/profile" onClick={()=>setOpen(false)}>
                カウンセラー
              </Link>

              <Link to="/helper-counseling" onClick={()=>setOpen(false)}>
                支援職カウンセリング
              </Link>

            </nav>
          </div>
        )}

      </header>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 mt-20 py-8 text-center text-sm text-stone-500">
        © 2026 こころの相談室 いしずえ
      </footer>

    </div>
  );
}

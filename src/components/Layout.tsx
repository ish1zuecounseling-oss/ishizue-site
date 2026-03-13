import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <nav className="max-w-5xl mx-auto flex gap-6 text-sm">
          <Link to="/" className="font-semibold">
            ホーム
          </Link>

          <Link to="/articles">
            心理記事
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t text-center text-sm text-gray-500 py-10">
        © 2026 こころの相談室 いしずえ
      </footer>

    </div>
  );
}

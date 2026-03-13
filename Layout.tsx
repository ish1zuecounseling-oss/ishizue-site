import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6">
        <Link to="/" className="font-semibold text-lg">
          こころの相談室 いしずえ
        </Link>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10 border-t">
        © 2026 こころの相談室 いしずえ
      </footer>

    </div>
  );
}

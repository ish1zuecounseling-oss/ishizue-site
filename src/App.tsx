import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Profile from "./pages/Profile"
import ScrollToTop from "./components/ScrollToTop"

// 記事の自動ルーティング
const articlePages = import.meta.glob("./pages/Articles/*.tsx", { eager: true })

function App() {
  const articleRoutes = Object.entries(articlePages).map(
    ([path, module]: any) => {
      const name = path
        .replace("./pages/Articles/", "")
        .replace(".tsx", "")
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "")

      const Component = module.default

      return (
        <Route
          key={name}
          path={`/articles/${name}`}
          element={<Component />}
        />
      )
    }
  )

  return (
    <BrowserRouter>
      {/* 🔥 スクロールトップ制御 */}
      <ScrollToTop />

      {/* 🔥 共通レイアウト */}
      <Layout>
        <Routes>
          {/* メインページ */}
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<Profile />} />

          {/* 記事ページ（自動生成） */}
          {articleRoutes}

          {/* 404対策（プロっぽさUP） */}
          <Route path="*" element={<div className="p-10 text-center">ページが見つかりません</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

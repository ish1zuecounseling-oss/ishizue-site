/**
 * App.tsx
 * こころの相談室 いしずえ
 */

import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Home as HomeIcon } from "lucide-react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/ScrollToTop";

/* -------------------------------------------------------------------------- */
/*  記事の自動ルーティング                                                       */
/* -------------------------------------------------------------------------- */

type ArticleModule = { default: React.ComponentType };

const articlePages = import.meta.glob<ArticleModule>("./pages/Articles/*.tsx", { eager: true });

/**
 * ファイル名 → URLスラッグ変換
 * BurnOut.tsx      → burn-out
 * SecondaryTrauma  → secondary-trauma
 * FAQ              → faq（連続大文字はまとめて小文字化）
 */
function fileNameToSlug(filePath: string): string {
  const base = filePath
    .replace("./pages/Articles/", "")
    .replace(".tsx", "");

  return base
    // 連続する大文字（例: "FAQ" → "faq"）は先にまとめて処理
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    // 小文字の後に大文字が来たらハイフン挿入（例: "BurnOut" → "Burn-Out"）
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

/* -------------------------------------------------------------------------- */
/*  404 Not Found ページ — Home.tsx / Profile.tsx と統一デザイン               */
/* -------------------------------------------------------------------------- */

function NotFound() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen">
      {/* ダーク背景ヘッダー（Profile.tsx・Articles.tsx と同じトーン） */}
      <section className="relative bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8FAF9F] font-medium">
              404 Not Found
            </span>
            <h1
              className="text-4xl md:text-5xl font-light text-white tracking-wide leading-[1.5]"
              style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
            >
              ページが見つかりません
            </h1>
            <p className="text-stone-400 text-sm md:text-base leading-[2] max-w-md mx-auto">
              お探しのページ（<code className="text-stone-500 text-xs bg-stone-900 px-2 py-0.5 rounded">{location.pathname}</code>）は存在しないか、移動した可能性があります。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 案内セクション */}
      <section className="py-16 md:py-20 px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto space-y-10"
        >
          {/* よく使われるページへのリンク */}
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8FAF9F] font-medium">
              こちらをお探しですか
            </p>
            <div className="space-y-2.5">
              {[
                { to: "/",         label: "トップページ",        sub: "サービス概要・お問い合わせ" },
                { to: "/profile",  label: "プロフィール",         sub: "松本龍児（公認心理師）について" },
                { to: "/articles", label: "心理記事",             sub: "支援職のための構造的な視点" },
              ].map(({ to, label, sub }) => (
                <Link
                  key={to}
                  to={to}
                  className="group flex items-center justify-between gap-4 px-5 py-4 bg-white border border-stone-100 rounded-2xl hover:border-[#8FAF9F]/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <p
                      className="text-stone-800 text-sm font-medium group-hover:text-stone-900 transition-colors"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {label}
                    </p>
                    <p className="text-stone-400 text-xs mt-0.5">{sub}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#8FAF9F] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTAボタン */}
          <div className="text-center space-y-3 pt-2 border-t border-stone-100">
            <p
              className="text-stone-600 text-sm leading-[2]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              相談のお問い合わせはトップページのフォームから受け付けています。
            </p>
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-stone-800 transition-all shadow-md"
            >
              まず、話してみる（初回メール無料）
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-stone-400 text-xs">1回のみでもOK ／ 勧誘なし</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  App                                                                        */
/* -------------------------------------------------------------------------- */

function App() {
  const articleRoutes = Object.entries(articlePages).map(([path, module]) => {
    const slug = fileNameToSlug(path);
    const Component = module.default;
    return (
      <Route
        key={slug}
        path={`/articles/${slug}`}
        element={<Component />}
      />
    );
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* メインページ */}
          <Route path="/"         element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile"  element={<Profile />} />

          {/* 記事ページ（自動生成） */}
          {articleRoutes}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

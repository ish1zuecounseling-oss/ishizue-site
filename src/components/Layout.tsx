/**
 * Layout.tsx
 * こころの相談室 いしずえ
 * アクセントカラー #8FAF9F に統一 / Home.tsx・Profile.tsx・Articles.tsx との整合
 */

import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

/** アクセントカラー — 全ページで統一 */
const SAGE = "#8FAF9F";
const SAGE_DARK = "#7a9d8e";

const NAV_LINKS = [
  { to: "/",         label: "ホーム" },
  { to: "/articles", label: "心理記事" },
  { to: "/profile",  label: "カウンセラー" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Contact セクションへのスムーズスクロール。
 * ・ホームにいる場合 → 即スクロール
 * ・別ページにいる場合 → /#contact に遷移させ、ScrollToTop が走った後
 *   MutationObserver で #contact が DOM に現れるのを待ってからスクロール。
 *   setTimeout の固定遅延よりも確実。
 */
function scrollToContact(
  currentPath: string,
  navigate: ReturnType<typeof useNavigate>
) {
  const tryScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  if (currentPath === "/") {
    tryScroll();
    return;
  }

  navigate("/");

  // #contact が描画されるまで MutationObserver で待機（最大 2 秒）
  const timeout = window.setTimeout(() => observer.disconnect(), 2000);
  const observer = new MutationObserver(() => {
    if (tryScroll()) {
      observer.disconnect();
      clearTimeout(timeout);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                             */
/* -------------------------------------------------------------------------- */

/** ロゴマーク — 「いしずえ（礎）」をイメージしたシンプルな幾何形 */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      {/* 台形（礎石のイメージ） */}
      <path
        d="M5 20 L10 10 L18 10 L23 20 Z"
        fill={SAGE}
        opacity="0.25"
      />
      {/* 上部の小石 */}
      <rect x="11" y="6" width="6" height="5" rx="1.5" fill={SAGE} opacity="0.55" />
      {/* 土台のライン */}
      <rect x="4" y="21" width="20" height="2.5" rx="1.25" fill={SAGE} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Layout                                                                     */
/* -------------------------------------------------------------------------- */

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* スクロール検知 */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ページ遷移でモバイルメニューを閉じる */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* モバイルメニュー open 中はスクロールをロック */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (path: string) => location.pathname === path;

  const handleContactClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setOpen(false);
      scrollToContact(location.pathname, navigate);
    },
    [location.pathname, navigate]
  );

  return (
    <div className="bg-white min-h-screen text-stone-800">

      {/* ================================================================
          HEADER
      ================================================================ */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 transition-shadow duration-300 ${
          scrolled ? "shadow-sm shadow-stone-900/5" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 h-16">

          {/* ロゴ */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="こころの相談室 いしずえ トップへ"
            style={{ WebkitTapHighlightColor: "transparent", minHeight: "44px", minWidth: "44px" }}
          >
            {/* 筆書きロゴ画像 */}
            <img
              src="/logo.png"
              alt="いしずえ ロゴ"
              className="flex-shrink-0 transition-opacity group-hover:opacity-75"
              style={{ height: "36px", width: "auto", pointerEvents: "none" }}
            />
            <div className="leading-tight">
              <p
                className="text-sm sm:text-base tracking-wide text-stone-900 font-medium"
                style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
              >
                こころの相談室 いしずえ
              </p>
              <p className="text-[10px] text-stone-400 tracking-widest hidden sm:block">
                COUNSELING OFFICE ISHIZUE
              </p>
            </div>
          </Link>

          {/* デスクトップ ナビ */}
          <nav className="hidden md:flex items-center gap-0.5 text-sm" aria-label="メインナビゲーション">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-3.5 py-2 rounded-lg transition-colors duration-150 ${
                  isActive(to)
                    ? "text-stone-900 font-medium"
                    : "text-stone-500 hover:text-stone-800 hover:bg-stone-50"
                }`}
              >
                {label}
                {isActive(to) && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: SAGE }}
                  />
                )}
              </Link>
            ))}

            {/* CTA */}
            <button
              type="button"
              onClick={handleContactClick}
              className="ml-3 inline-flex items-center gap-1.5 text-white text-xs px-4 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
              style={{ backgroundColor: SAGE }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = SAGE_DARK; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = SAGE; }}
              aria-label="お問い合わせフォームへ"
            >
              <MessageCircle className="w-3 h-3" aria-hidden="true" />
              相談する
            </button>
          </nav>

          {/* モバイル ハンバーガー */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-stone-100 transition"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block w-5 h-px bg-stone-700 origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
              className="block w-5 h-px bg-stone-700"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block w-5 h-px bg-stone-700 origin-center"
            />
          </button>
        </div>
      </header>

      {/* ================================================================
          MOBILE MENU
          — ダーク系のトーンで全ページのヒーロー背景と温度感を合わせる
      ================================================================ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-[#1A110A] flex flex-col"
          >
            {/* モバイルメニュー ヘッダー */}
            <div className="h-16 border-b border-stone-800 flex items-center justify-between px-5">
              <p
                className="text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ color: SAGE }}
              >
                Menu
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="メニューを閉じる"
                className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-white transition"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 2l12 12M14 2L2 14" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* ナビリンク */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-0" aria-label="モバイルナビゲーション">
              {NAV_LINKS.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={to}
                    className={`flex items-center justify-between py-5 border-b border-stone-800 text-xl font-light tracking-wide transition-colors ${
                      isActive(to) ? "text-white" : "text-stone-400 hover:text-white"
                    }`}
                    style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
                  >
                    <span>
                      {isActive(to) && (
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full mr-3 mb-0.5"
                          style={{ backgroundColor: SAGE }}
                          aria-hidden="true"
                        />
                      )}
                      {label}
                    </span>
                    <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}

              {/* モバイル CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.12, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="w-full flex items-center justify-center gap-2 text-stone-900 py-4 rounded-2xl font-medium text-base tracking-wide transition-opacity hover:opacity-90"
                  style={{ backgroundColor: SAGE }}
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  まず、話してみる（初回無料）
                </button>
                <p className="text-center text-stone-600 text-xs mt-2">勧誘なし ／ 1回のみでもOK</p>
              </motion.div>
            </nav>

            <div className="px-8 py-6 text-xs text-stone-700">
              © こころの相談室 いしずえ
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================================
          PAGE CONTENT
      ================================================================ */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      {/* ================================================================
          FOOTER
      ================================================================ */}
      <footer className="bg-stone-50 mt-0 border-t-[3px]" style={{ borderColor: SAGE }}>
        <div className="max-w-5xl mx-auto px-5 py-14">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

            {/* ブランド */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/logo.png"
                  alt="いしずえ ロゴ"
                  style={{ height: "28px", width: "auto" }}
                />
                <p
                  className="text-sm text-stone-800 tracking-wide font-medium"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  こころの相談室 いしずえ
                </p>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                公認心理師によるカウンセリング。<br />
                支援職・対人援助職の方を中心に、<br />
                こころの整理をサポートします。
              </p>
            </div>

            {/* ナビ */}
            <div>
              <p className="text-[10px] tracking-[0.25em] text-stone-400 uppercase mb-4">Navigation</p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-stone-500 hover:text-stone-900 transition-colors underline-offset-2 hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* お問い合わせ */}
            <div>
              <p className="text-[10px] tracking-[0.25em] text-stone-400 uppercase mb-4">Contact</p>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                初回のご相談は無料です。<br />
                お気軽にお問い合わせください。
              </p>
              <button
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center gap-1.5 text-xs border border-stone-200 text-stone-600 px-4 py-2 rounded-full hover:bg-white hover:border-stone-300 transition-all"
              >
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
                お問い合わせフォームへ
              </button>
              <p className="text-stone-400 text-[10px] mt-2 leading-relaxed">
                ish1zue.counseling@gmail.com
              </p>
            </div>
          </div>

          {/* コピーライト */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
            <p>© こころの相談室 いしずえ. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a
                href="https://x.com/ish1zue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X（旧Twitter）"
                className="text-stone-400 hover:text-stone-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ishizue_counseling/?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-stone-400 hover:text-stone-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
            <p className="text-[10px] tracking-wider">COUNSELING OFFICE ISHIZUE</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

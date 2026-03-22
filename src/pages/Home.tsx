/**
 * こころの相談室 いしずえ - ホームページコンポーネント
 * TypeScript+React, Tailwind CSS, framer-motion, lucide-react, react-router-dom 想定
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Monitor, CheckCircle2, Clock, Mail, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

// framer-motionを動的インポートする例（パフォーマンス最適化）
// import dynamic from 'next/dynamic';
// const MotionDiv = dynamic(() => import('framer-motion'), { ssr: false });

const Home: React.FC = React.memo(() => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // ESCキーでモーダルやメニューを閉じる (アクセシビリティ)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveModal(null);
      setMobileMenuOpen(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // モーダルが開いたらフォーカスを当てる (簡易フォーカストラップ)
  useEffect(() => {
    if (activeModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [activeModal]);

  return (
    <>
      {/** <!-- SEO用: <Head> */}
      {/* TODO: Headでタイトル・メタ・canonicalを設定 (例: React HelmetやNext.js <Head> を利用) */}
      {/* <title>支援職向けオンラインカウンセリング | こころの相談室 いしずえ</title> */}
      {/* <meta name="description" content="公認心理師による支援者支援に特化したオンラインカウンセリングサイトです。" /> */}
      {/* <link rel="canonical" href="https://example.com/" /> */}
      {/* Content-Security-Policy例: default-src 'self'; img-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; */}
      {/* 構造化データJSON-LD例 */}
      {/* <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "こころの相談室 いしずえ",
              "url": "https://example.com/",
              "logo": "https://example.com/favicon.png"
            }
          `}
      </script> */}

      {/* スキップリンク */}
      <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600">
        メインコンテンツへスキップ
      </a>

      {/* ナビゲーション */}
      <nav className="px-6 py-4 border-b bg-white" aria-label="メインナビゲーション">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3" aria-label="トップページへ">
            <img
              src="/favicon.png"
              alt="いしずえ ロゴ"
              className="h-8 w-8"
              width={32} height={32}
            />
            <div className="text-lg font-medium tracking-wider text-stone-900">
              こころの相談室（いしずえ）
            </div>
          </Link>
          {/* モバイル用ハンバーガーメニュー */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-stone-500"
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <Menu className="w-6 h-6" />
          </button>
          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest text-stone-500">
            <a href="#about" className="hover:text-stone-900 transition-colors">当相談室について</a>
            <a href="#services" className="hover:text-stone-900 transition-colors">ご相談</a>
            <Link to="/articles" className="hover:text-stone-900 transition-colors">心理記事</Link>
            <a href="#guide" className="hover:text-stone-900 transition-colors">ご利用案内</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">お問い合わせ</a>
          </div>
        </div>
        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-white p-4 rounded shadow-md">
            <a href="#about" className="block px-2 py-2 hover:bg-stone-100 rounded">当相談室について</a>
            <a href="#services" className="block px-2 py-2 hover:bg-stone-100 rounded">ご相談</a>
            <Link to="/articles" className="block px-2 py-2 hover:bg-stone-100 rounded">心理記事</Link>
            <a href="#guide" className="block px-2 py-2 hover:bg-stone-100 rounded">ご利用案内</a>
            <a href="#contact" className="block px-2 py-2 hover:bg-stone-100 rounded">お問い合わせ</a>
          </div>
        )}
      </nav>

      {/* メインコンテンツ */}
      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-40 pb-32 px-6 min-h-[90vh] flex items-center bg-stone-50">
          {/* 背景画像 */}
          <img
            src="/hero.jpg"
            alt="カウンセリングをイメージした静かな空間"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920} height={1280}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-100/40"></div>
          {/* コンテンツ */}
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div>
              <div className="mb-12">
                <div className="inline-block px-4 py-1 border rounded-full mb-8 bg-white/50 backdrop-blur-sm">
                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-stone-600 uppercase font-medium">
                    公認心理師による支援者支援
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-medium tracking-[0.1em] mb-4 text-stone-900 leading-tight">
                  支援職のためのカウンセリング<br />
                  こころの相談室 いしずえ
                </h1>
                <p className="text-stone-600 tracking-[0.15em] md:tracking-[0.3em] mb-12 italic font-light">
                  ― 支援する人の、土台を整える ―
                </p>
              </div>
              <div className="max-w-2xl mx-auto space-y-6 text-left text-stone-700 leading-relaxed text-base md:text-lg bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20 shadow-sm">
                <p>
                  礎（いしずえ）とは、土台のこと。支援する立場にいる人は、
                  感情労働の中で知らず知らずのうちに自分自身を後回しにしてしまうことがあります。
                </p>
                <p>
                  ここは「弱さを吐き出す場所」ではなく、思考・役割・負荷を構造的に整理し、
                  持続可能な状態へ整え直すための時間です。
                </p>
                <p className="font-medium text-stone-900">
                  消耗を減らし、支援を続けられる土台を再設計します。
                </p>
              </div>
              <div className="mt-16">
                <a
                  href="#contact"
                  className="inline-flex items-center px-12 py-5 bg-stone-900 text-stone-50 text-sm tracking-[0.2em] hover:bg-stone-800 transition-all rounded-full shadow-xl"
                >
                  お問い合わせ
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO導線 (記事紹介) */}
        <section className="py-16 px-6 bg-stone-50 text-center">
          <p className="text-stone-600 mb-6">
            福祉・医療・教育などの対人援助職で起こりやすい「バーンアウト（燃え尽き）」について解説しています。
          </p>
          <h2 className="text-xl font-medium mb-4">支援職の燃え尽きについて</h2>
          <Link to="/articles/helper-burnout" className="text-stone-800 underline hover:text-stone-900">
            支援職のバーンアウトについて詳しく読む
          </Link>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div className="space-y-12">
              <div>
                <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">About</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">当相談室について</h2>
              </div>
              <div className="space-y-8 text-stone-600 leading-relaxed text-base md:text-lg">
                <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl mb-12">
                  <img
                    src="/concept.jpg"
                    alt="積み上げられた石（土台の象徴）"
                    className="w-full h-full object-cover"
                    width={1920} height={1036}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p>
                  支援する立場にいる人ほど、自分のことは後回しに、そして孤独になりがちです。
                  教育、医療、福祉、心理職。誰かの人生に伴走する方々が、自分自身の「いしずえ」を疎かにしてしまうと、
                  支援そのものが揺らいでしまいます。
                </p>
                <p>
                  当相談室では、支援者支援に特化したオンラインカウンセリングを行っています。
                </p>
                <p className="border-l-2 border-stone-200 pl-6 italic">
                  持続可能であるための整理の時間を提供します。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ご相談 */}
        <section id="services" className="py-24 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <motion.div className="space-y-16">
              <div className="text-center">
                <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Consultation</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">このようなご相談</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <ul className="space-y-4">
                    {[
                      "頭が休まらない",
                      "役割と本音のズレを感じる",
                      "自己否定が強くなっている",
                      "燃え尽きの予兆がある",
                      "責任感が強く頼れない",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-stone-600">
                        <div className="w-1.5 h-1.5 bg-stone-300 rounded-full mr-4"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-stone-200 shadow-lg">
                  <h3 className="text-lg font-medium mb-4 text-stone-800">構造整理型アプローチ</h3>
                  <p className="text-stone-600 leading-relaxed">
                    感情の整理だけでなく、思考・役割・負荷の「見える化」を重視します。
                    現状を構造的に捉え直すことで、漠然とした不安や疲弊の正体を明らかにしていきます。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div className="space-y-16">
              <div className="text-center">
                <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Features</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">カウンセリングの特徴</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "支援者支援に特化",
                    desc: "対人援助職特有の葛藤や、二次受傷、燃え尽きのリスクを理解した専門的なサポートを提供します。",
                    icon: <ShieldCheck className="w-6 h-6 text-stone-400" />,
                  },
                  {
                    title: "オンライン対応（透明性重視）",
                    desc: "Google Meetを使用します。必要に応じてリアルタイム字幕機能を活用することがあります（同意制）。",
                    icon: <Monitor className="w-6 h-6 text-stone-400" />,
                  },
                  {
                    title: "消耗を減らす優先",
                    desc: "無理な自己改善よりも、まずは「消耗を減らすこと」を最優先に、持続可能な働き方を考えます。",
                    icon: <CheckCircle2 className="w-6 h-6 text-stone-400" />,
                  },
                ].map((feature, i) => (
                  <div key={i} className="p-6 md:p-8 rounded-2xl border border-stone-100 hover:border-stone-200 transition-colors">
                    <div className="mb-6">{feature.icon}</div>
                    <h3 className="text-lg font-medium mb-4">{feature.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 構造整理型カウンセリング */}
        <section className="py-24 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto space-y-10">
            <motion.div className="space-y-10">
              <h2 className="text-2xl font-medium tracking-wider text-center">
                構造整理型カウンセリングとは
              </h2>
              <div className="text-stone-600 leading-relaxed text-base md:text-lg space-y-8">
                <p>感情の共感だけで終わらせません。</p>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 space-y-2">
                  <p>・役割の過剰化</p>
                  <p>・責任の抱え込み</p>
                  <p>・思考のループ</p>
                  <p>・境界の曖昧さ</p>
                </div>
                <div className="bg-stone-100/50 p-6 rounded-xl border border-stone-200 text-sm md:text-base">
                  <p className="font-medium text-stone-800 mb-2">
                    例）「管理職として部下を支えながら、自分は誰にも相談できない状態」
                  </p>
                  <p className="text-stone-500">→ 役割過剰 × 責任の抱え込み × 境界の曖昧さ</p>
                  <p className="text-stone-500">→ 優先順位再設計</p>
                </div>
                <p>これらを言語化・可視化し、負荷の構造を整理します。</p>
                <div className="pt-8 border-t border-stone-200">
                  <h3 className="text-sm font-medium text-stone-900 mb-6 tracking-widest uppercase text-center">
                    支援の進め方
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { text: "面談は1回60分", icon: <Clock className="w-4 h-4" /> },
                      { text: "2週間単位のサイクル", icon: <Clock className="w-4 h-4" /> },
                      { text: "オンライン完結", icon: <Monitor className="w-4 h-4" /> },
                      { text: "文字起こし活用（同意の上）", icon: <ShieldCheck className="w-4 h-4" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/50 p-4 rounded-xl border border-stone-100">
                        <span className="text-stone-400">{item.icon}</span>
                        <span className="text-sm text-stone-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-medium text-stone-800 text-center pt-4">
                  目的は「強くなること」ではなく、消耗を減らすこと。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 運営者プロフィール */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div className="space-y-12">
              <div className="text-center">
                <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Profile</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">運営者プロフィール</h2>
              </div>
              <div className="bg-stone-50/30 p-6 md:p-16 rounded-3xl border border-stone-100 space-y-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-stone-100 pb-10">
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-sm">
                    <img
                      src="/profile.jpg"
                      alt="松本 龍児 近影"
                      className="w-full h-full object-cover"
                      width={500} height={500}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center md:text-left pt-4">
                    <h3 className="text-2xl font-medium text-stone-900 mb-2">松本 龍児</h3>
                    <p className="text-stone-500 text-sm md:text-base">構造整理型カウンセラー｜支援者支援特化</p>
                  </div>
                </div>
                <div className="text-stone-700 leading-relaxed space-y-8 text-base md:text-lg">
                  <p>
                    現場で出会った支援者の疲弊や孤立を目の当たりにし、
                    支援する側が立ち止まれる場の必要性を感じました。
                  </p>
                  <p>
                    対人援助職として現場に携わる中で、
                    「支援する側が疲弊し、土台から崩れていく構造」に強い問題意識を持つようになりました。
                  </p>
                  <p>
                    支援者は責任・役割・感情労働を日常的に抱えています。
                    その負荷は、本人の努力不足ではなく、構造上の問題であることが多くあります。
                  </p>
                  <p>
                    私は感情の共感だけで終わらせるのではなく、
                    思考の癖、役割過多、責任の抱え込み、期待とのズレなどを整理し、
                    「消耗を減らす設計」に立ち戻る支援を行っています。
                  </p>
                  <div className="pt-8 border-t border-stone-100">
                    <h4 className="text-xs font-medium text-stone-400 mb-4 tracking-[0.3em] uppercase">活動歴</h4>
                    <p className="text-stone-600 text-sm md:text-base">
                      医療・福祉・教育領域での実務経験を経て、個別面談・ケース支援・支援者支援に従事。現在はオンラインを中心に活動。
                    </p>
                  </div>
                  <div className="pt-6 border-t border-stone-100 text-center">
                    <p className="font-medium text-stone-900 mb-2">強くなることを目指すのではなく、</p>
                    <p className="text-xl text-stone-900">持続可能な状態に戻すこと。</p>
                    <p className="mt-6 text-stone-600">支援を続けられる土台を整えることが、私の役割です。</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ご利用案内 */}
        <section id="guide" className="py-24 px-6 bg-stone-900 text-stone-50">

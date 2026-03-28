/**
 * Profile.tsx
 * こころの相談室 いしずえ — Home.tsx統一デザイン版
 */

import { type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, ShieldCheck, BookOpen, Heart, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AudioPlayer from "../components/AudioPlayer";

/* -------------------------------------------------------------------------- */
/*  Animation — Home.tsx と同一定義                                             */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* -------------------------------------------------------------------------- */
/*  Copy                                                                       */
/* -------------------------------------------------------------------------- */

const consultThemes = [
  { icon: <ShieldCheck className="w-4 h-4" />, label: "支援職の燃え尽き（バーンアウト）" },
  { icon: <Heart className="w-4 h-4" />,        label: "感情労働による疲労・二次受傷" },
  { icon: <Users className="w-4 h-4" />,        label: "支援者の境界線（バウンダリー）" },
  { icon: <Minus className="w-3 h-3" />,        label: "役割過剰・責任の抱え込み" },
  { icon: <Minus className="w-3 h-3" />,        label: "対人援助職のストレス・消耗" },
  { icon: <Minus className="w-3 h-3" />,        label: "不安・抑うつ傾向・対人関係の悩み" },
  { icon: <Minus className="w-3 h-3" />,        label: "継続して支援に携わるための土台作り" },
] as const;

const qualifications = [
  { label: "資格",     value: "公認心理師" },
  { label: "経験年数", value: "障害福祉分野での相談支援業務　15年" },
  { label: "支援実績", value: "個別カウンセリング　累計300名以上 ／ 6,000時間以上" },
  { label: "活動領域", value: "医療・福祉・教育領域での実務経験" },
  { label: "理論的背景", value: "CBT・ACT・動機づけ面接（MI）・BPSモデル・トラウマインフォームドケア・セルフコンパッション・SDT" },
] as const;

const approachPoints = [
  {
    title: "感情の共感だけで終わらせない",
    desc:  "思考の癖、役割過多、責任の抱え込みを整理し、「消耗を減らす設計」に立ち戻る支援を行っています。",
  },
  {
    title: "構造として見る",
    desc:  "BPSモデル・トラウマインフォームドケアを基盤に、個人責任化を避けた視点を大切にしています。",
  },
  {
    title: "あなたの決定権を尊重する",
    desc:  "CBT・ACT・動機づけ面接（MI）を統合的に用い、相談者が自分のペースで選択できる支援を一貫して重視しています。",
  },
  {
    title: "うまく話せなくても大丈夫",
    desc:  "整理されていない状態のままで来てください。何が負担なのかを一緒に言葉にすることが、この時間の目的です。",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Sub-components — Home.tsx と同一スタイル                                   */
/* -------------------------------------------------------------------------- */

function SectionLabel({ en, ja, light = false }: { en: string; ja: string; light?: boolean }) {
  return (
    <div className="space-y-2">
      <span className={`block text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium ${light ? "text-stone-500" : "text-[#8FAF9F]"}`}>
        {en}
      </span>
      <h2
        className={`text-xl md:text-3xl font-light tracking-wide md:tracking-wider leading-snug ${light ? "text-stone-100" : "text-stone-900"}`}
        style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
      >
        {ja}
      </h2>
    </div>
  );
}

function BlockQuote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-[#8FAF9F] pl-4 md:pl-6 py-1 text-stone-700">
      {children}
    </div>
  );
}

/* 画像フォールバック — Home.tsx と同一 */
function SafeImg({ src, alt, className, fallbackBg = "bg-stone-200", ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { fallbackBg?: string }) {
  return (
    <img
      src={src} alt={alt} className={className}
      onError={(e) => {
        const el = e.currentTarget;
        el.style.display = "none";
        const parent = el.parentElement;
        if (parent) parent.classList.add(fallbackBg);
      }}
      {...rest}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Main                                                                       */
/* -------------------------------------------------------------------------- */

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>プロフィール｜松本 龍児（公認心理師）｜こころの相談室 いしずえ</title>
        <meta
          name="description"
          content="障害福祉15年・累計300名以上6,000時間以上の支援経験を持つ公認心理師・松本龍児のプロフィール。支援職の燃え尽きに特化した構造整理型カウンセリング。"
        />
        {/* Person スキーマ — Googleに「松本龍児＝いしずえ」と伝える */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "松本 龍児",
            "alternateName": "まつもと りゅうじ",
            "jobTitle": "公認心理師",
            "description": "障害福祉分野15年・累計300名以上6,000時間以上の支援経験を持つ公認心理師。支援職の燃え尽き・消耗に特化した構造整理型カウンセリングを提供。",
            "url": "https://ishizue-site-ker9.vercel.app/profile",
            "image": "https://ishizue-site-ker9.vercel.app/profile.jpg",
            "sameAs": [
              "https://x.com/ish1zue",
              "https://www.instagram.com/ishizue_counseling/"
            ],
            "worksFor": {
              "@type": "ProfessionalService",
              "name": "こころの相談室 いしずえ",
              "url": "https://ishizue-site-ker9.vercel.app",
              "description": "支援職・対人援助職の燃え尽き・消耗を構造的に整理するカウンセリングサービス",
              "areaServed": "JP",
              "serviceType": "心理カウンセリング"
            },
            "knowsAbout": [
              "支援職カウンセリング",
              "バーンアウト支援",
              "共感疲労",
              "感情労働",
              "認知行動療法",
              "ACT",
              "動機づけ面接",
              "トラウマインフォームドケア"
            ],
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "国家資格",
              "name": "公認心理師"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "大阪府",
              "addressLocality": "大阪市",
              "addressCountry": "JP"
            }
          }
        `}</script>
      </Helmet>

      {/* Home.tsx と同一の背景色・フォント */}
      <div className="bg-white min-h-screen text-stone-800">

        {/* ================================================================
            HERO — ダーク背景・2カラム（Home.tsxのヒーローと統一感）
        ================================================================ */}
        <section className="relative bg-stone-950 overflow-hidden">
          {/* 背景テクスチャ */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28">
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="flex flex-col md:flex-row md:items-center md:gap-14 lg:gap-20"
            >
              {/* 左: コピー */}
              <div className="space-y-5 flex-1 min-w-0">
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#8FAF9F] font-medium">Profile</span>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-3">
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide leading-[1.4]"
                    style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
                  >
                    松本 龍児
                  </h1>
                  <p className="text-stone-400 text-sm md:text-base tracking-wide">
                    公認心理師 ／ 構造整理型カウンセラー・支援者支援専門
                  </p>
                </motion.div>

                {/* 実績バッジ */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {["障害福祉15年", "累計300名以上", "6,000時間以上"].map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-[11px] tracking-[0.1em] text-white/75"
                    >
                      {b}
                    </span>
                  ))}
                </motion.div>

                {/* キャッチフレーズ */}
                <motion.div variants={fadeUp}>
                  <p className="text-stone-300 text-sm md:text-base leading-[2] max-w-lg">
                    支援職という役割の構造が、消耗を生み出しています。<br />
                    感情を吐き出す場所ではなく、<span className="text-stone-100">整理して、持続可能な状態に戻す</span>ための時間を作ること。それがこのカウンセリングです。
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Link
                    to="/#contact"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-stone-900 text-sm font-medium tracking-[0.06em] rounded-full hover:bg-stone-100 transition-all shadow-lg"
                  >
                    まず、話してみる（初回メール無料）
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* 右: 顔写真（デスクトップのみ） */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex flex-col items-center gap-4 flex-shrink-0 mt-8 md:mt-0"
              >
                <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl ring-1 ring-white/10">
                  <SafeImg
                    src="/profile.jpg"
                    alt="松本 龍児 — 公認心理師"
                    className="w-full h-full object-cover object-top"
                    fallbackBg="bg-stone-700"
                  />
                </div>
                {/* 名前・肩書き */}
                <div className="text-center space-y-1">
                  <p className="text-white text-sm font-medium tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>松本 龍児</p>
                  <p className="text-stone-400 text-xs">公認心理師 ／ 構造整理型カウンセラー</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            AUDIO — 音声プレイヤー（コンパクトに整理）
        ================================================================ */}
        <section className="py-12 md:py-14 px-5 md:px-6 bg-[#F7F6F3] border-b border-stone-200">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={stagger}
              className="space-y-4"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#8FAF9F]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">
                  音声で聴く — プロフィール紹介
                </span>
              </motion.div>
              <motion.div variants={fadeUp}>
                <AudioPlayer src="/audio/Profile.mp3" />
              </motion.div>
              <motion.p variants={fadeUp} className="text-stone-400 text-xs">
                ※ テキストと同じ内容を音声でお届けしています
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            STORY — なぜこの仕事をしているのか
        ================================================================ */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }} variants={stagger}
              className="space-y-10 md:space-y-14"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel en="Story" ja="なぜ、支援職の支援をしているのか" />
              </motion.div>

              <motion.div variants={fadeUp}>
                {/* モバイル: 縦積み / デスクトップ: 2カラム */}
                <div className="flex flex-col md:grid md:grid-cols-[160px_1fr] gap-8 md:gap-12 items-start">

                  {/* 写真 + バッジ（モバイルでは中央揃え） */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                      <SafeImg
                        src="/profile.jpg"
                        alt="松本 龍児"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        fallbackBg="bg-stone-200"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-base font-medium text-stone-900 tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        松本 龍児
                      </p>
                      <p className="text-stone-400 text-xs mt-1">公認心理師</p>
                    </div>
                  </div>

                  {/* 本文 */}
                  <div
                    className="text-stone-600 leading-[2.1] text-sm md:text-base space-y-6"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    <p>
                      15年間、障害福祉の現場で支援者として働いてきました。
                      300名以上、6,000時間を超える支援の中でずっと気になっていたことがあります。
                    </p>

                    <BlockQuote>
                      <p className="text-stone-800 font-medium text-base md:text-lg leading-[1.8]">
                        支援者自身が、誰にも頼れていない。
                      </p>
                    </BlockQuote>

                    <p>
                      責任を抱え、感情を押し込め、疲弊しながらも「自分が弱いから」と思い込んでいる人を、
                      何度も目の前で見てきました。
                    </p>

                    <p>
                      正直に言えば、かつての私自身もそうでした。「支援する側が頼ってはいけない」という
                      無言の圧力を感じながら、気づかないふりをしていた時期があります。
                    </p>

                    <p>
                      それは弱さではなく、<strong className="text-stone-900 font-medium">構造の問題</strong>です。
                      支援職という役割の構造が、消耗を生み出している。そう気づいたとき、
                      私が次にやるべきことが見えました。
                    </p>

                    {/* 未来像ボックス */}
                    <div className="pt-4 border-t border-stone-200">
                      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100">
                        <p className="text-stone-700 text-sm md:text-base leading-[2]">
                          セッション後に多くの方から聞く言葉があります。<br />
                          <strong className="text-stone-900">「なぜしんどいのかが、やっとわかった」</strong><br />
                          原因が見えると、自分を責めるのをやめられます。<br />
                          それが、持続可能な支援者に戻るための最初の一歩です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            THEMES — 主な相談テーマ（bg-stone-50 で息継ぎ）
        ================================================================ */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }} variants={stagger}
              className="space-y-10 md:space-y-12"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel en="Themes" ja="主な相談テーマ" />
                <p className="text-stone-500 text-sm mt-3 leading-relaxed">
                  以下に限らず、支援職に携わる方からのご相談はすべてお受けしています。
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {consultThemes.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-stone-100 text-stone-700 text-sm"
                  >
                    <span className="text-[#8FAF9F] flex-shrink-0">{icon}</span>
                    {label}
                  </div>
                ))}
              </motion.div>

              {/* 中間CTA */}
              <motion.div variants={fadeUp} className="text-center pt-2">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-stone-800 transition-all shadow-md"
                >
                  今の状態を整理してみる（初回無料）
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <p className="text-stone-400 text-xs mt-2">まとまっていなくても大丈夫です</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            APPROACH — カウンセリングで大切にしていること
        ================================================================ */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }} variants={stagger}
              className="space-y-10 md:space-y-12"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel en="Approach" ja="カウンセリングで大切にしていること" />
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {approachPoints.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="p-5 md:p-6 rounded-2xl border border-stone-100 bg-stone-50 space-y-2"
                  >
                    <p
                      className="text-stone-800 font-medium text-sm md:text-base leading-snug"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {title}
                    </p>
                    <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </motion.div>

              {/* 理論的背景ボックス */}
              <motion.div variants={fadeUp}>
                <div className="p-5 md:p-7 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">理論的背景</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "BPSモデル",
                      "トラウマインフォームドケア",
                      "CBT（認知行動療法）",
                      "ACT",
                      "動機づけ面接（MI）",
                      "セルフコンパッション",
                      "SDT（自己決定理論）",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white border border-stone-200 text-stone-600 text-xs rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            QUALIFICATIONS — 資格・経歴（ダーク背景で締め）
        ================================================================ */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-stone-950">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }} variants={stagger}
              className="space-y-10 md:space-y-12"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel en="Qualifications" ja="資格・経歴" light />
              </motion.div>

              <motion.div variants={fadeUp}>
                <dl className="divide-y divide-stone-800">
                  {qualifications.map(({ label, value }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:gap-10 py-5">
                      <dt className="text-stone-500 text-xs tracking-[0.15em] uppercase font-medium shrink-0 w-28 mb-1 sm:mb-0 pt-0.5">
                        {label}
                      </dt>
                      <dd className="text-stone-200 text-sm leading-relaxed">{value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            CLOSING — 締めコピー + CTA（Home.tsxのClosingと同構造）
        ================================================================ */}
        <section className="py-16 md:py-20 px-5 md:px-6 bg-white border-t border-stone-100">
          <div className="max-w-xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={stagger}
            className="max-w-xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-3">
              <p
                className="text-stone-800 text-xl md:text-2xl font-light leading-[1.9]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                強くなることを目指すのではなく、<br />
                <span className="text-[#8FAF9F]">持続可能な状態に戻すこと。</span>
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                支援を続けられる土台を整えることが、私の役割です。
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              <BlockQuote>
                <p
                  className="text-stone-700 text-sm md:text-base leading-[2]"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  限界まで耐えてから動くより、<br />
                  予兆を感じているうちに整理する方が、ずっと楽です。<br />
                  <span className="text-stone-900 font-medium">今日が、そのタイミングかもしれません。</span>
                </p>
              </BlockQuote>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-2">
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-stone-800 transition-all shadow-md"
              >
                松本に、今の状態を整理してもらう（無料）
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-stone-400 text-xs">
                1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可
              </p>
            </motion.div>

            {/* ホームへ戻るリンク */}
            <motion.div variants={fadeUp}>
              <Link
                to="/"
                className="text-xs text-stone-400 hover:text-stone-600 transition-colors underline underline-offset-2"
              >
                ← トップページに戻る
              </Link>
            </motion.div>
          </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}

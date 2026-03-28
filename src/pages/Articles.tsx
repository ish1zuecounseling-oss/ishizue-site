/**
 * Articles.tsx
 * こころの相談室 いしずえ — Home.tsx / Profile.tsx 統一デザイン版
 */

import { motion, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles";

/* -------------------------------------------------------------------------- */
/*  Animation — Home.tsx / Profile.tsx と同一定義                              */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Articles() {
  return (
    <>
      <Helmet>
        <title>心理記事｜支援職のための構造的な視点｜こころの相談室 いしずえ</title>
        <meta
          name="description"
          content="支援職・対人援助職が抱えやすい心理的負担について、構造的な視点から整理した記事一覧。燃え尽き・二次受傷・役割過剰など。"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="bg-white min-h-screen">

        {/* ================================================================
            HEADER — ダーク背景でProfile.tsxのヒーローと同じトーン
        ================================================================ */}
        <section className="relative bg-stone-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-5 max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#8FAF9F] font-medium">
                  Articles
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-3">
                <h1
                  className="text-3xl md:text-4xl font-light text-white tracking-wide leading-[1.5]"
                  style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
                >
                  心理記事
                </h1>
                <p className="text-stone-300 text-sm md:text-base leading-[2] max-w-lg">
                  支援職・対人援助職が抱えやすい心理的負担について、<br className="hidden md:block" />
                  構造的な視点から整理しています。
                </p>
              </motion.div>

              {/* バッジ */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {["燃え尽き・バーンアウト", "二次受傷", "役割過剰", "境界線"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.08] text-[11px] tracking-[0.08em] text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            ARTICLES LIST
        ================================================================ */}
        <section
          className="py-16 md:py-24 px-5 md:px-6"
          itemScope
          itemType="https://schema.org/CollectionPage"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={stagger}
              className="space-y-4"
            >
              {articles.map((article) => (
                <motion.div key={article.path} variants={fadeUp}>
                  <Link
                    to={article.path}
                    className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white border border-stone-100 rounded-2xl p-5 md:p-7 hover:border-[#8FAF9F]/50 hover:shadow-md transition-all duration-300"
                    itemScope
                    itemType="https://schema.org/Article"
                  >
                    {/* アイコン */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#8FAF9F]"
                      style={{ background: "rgba(143,175,159,0.1)" }}
                      aria-hidden="true"
                    >
                      <BookOpen className="w-5 h-5" />
                    </div>

                    {/* テキスト */}
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <h2
                        className="text-base md:text-lg font-medium text-stone-800 group-hover:text-stone-900 leading-snug transition-colors"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}
                        itemProp="name"
                      >
                        {article.title}
                      </h2>
                      <p
                        className="text-stone-500 text-sm leading-[1.8] line-clamp-2"
                        itemProp="description"
                      >
                        {article.description}
                      </p>
                    </div>

                    {/* 矢印 */}
                    <div className="flex-shrink-0 hidden md:flex items-center text-stone-300 group-hover:text-[#8FAF9F] transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    {/* モバイル用フッター */}
                    <div className="flex items-center justify-between text-xs text-stone-400 md:hidden pt-1 border-t border-stone-100">
                      <span>記事を読む</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* 記事が0件の場合 */}
            {articles.length === 0 && (
              <div className="text-center py-20 text-stone-400 text-sm">
                記事は準備中です。
              </div>
            )}
          </div>
        </section>

        {/* ================================================================
            CTA — カウンセリングへの導線（記事を読んだ後の行動を促す）
        ================================================================ */}
        <section className="py-14 px-5 md:px-6 bg-stone-50 border-t border-stone-100">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-xl mx-auto text-center space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <p
                className="text-stone-800 text-lg md:text-xl font-light leading-[1.9]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                記事を読んで、自分のことかもと思ったら。
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                言葉にならなくてもいい。「なんとなくしんどい」という感覚だけで、十分です。
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-2">
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-stone-800 transition-all shadow-md"
              >
                まず、話してみる（初回メール無料）
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-stone-400 text-xs">1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                to="/"
                className="text-xs text-stone-400 hover:text-stone-600 transition-colors underline underline-offset-2"
              >
                ← トップページに戻る
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </>
  );
}

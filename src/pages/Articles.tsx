/**
 * Articles.tsx
 * こころの相談室 いしずえ
 * カテゴリ分け表示版 — セルフチェック優先・タブ切り替え
 */

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ClipboardList } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles";

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const SAGE = "#8FAF9F";

type Category = { id: string; label: string; keywords: string[]; isCheck?: boolean };

const CATEGORIES: Category[] = [
  { id: "check",    label: "セルフチェック",    keywords: ["check"],                             isCheck: true },
  { id: "burnout",  label: "バーンアウト",       keywords: ["burnout", "burn-out"] },
  { id: "empathy",  label: "共感疲労・二次受傷", keywords: ["empathy", "secondary", "compassion"] },
  { id: "boundary", label: "境界線・抱え込み",   keywords: ["boundary", "overwork"] },
  { id: "job",      label: "職種別",             keywords: ["nurse", "caregiver", "teacher", "school", "welfare"] },
  { id: "recovery", label: "回復・ケア",         keywords: ["recovery", "rest", "coping", "stress", "care"] },
  { id: "other",    label: "その他",             keywords: [] },
];

function getCategoryId(path: string): string {
  const p = path.toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.id === "other") continue;
    if (cat.keywords.some((kw) => p.includes(kw))) return cat.id;
  }
  return "other";
}

function ArticleCard({ article, isCheck }: { article: { title: string; path: string; description: string }; isCheck?: boolean }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        to={article.path}
        className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 bg-white border border-stone-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300"
        style={{ borderColor: "" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${SAGE}80`; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
        itemScope itemType="https://schema.org/Article"
      >
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${SAGE}${isCheck ? "22" : "0e"}`, color: SAGE }}
          aria-hidden="true"
        >
          {isCheck ? <ClipboardList className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <h2
            className="text-sm md:text-base font-medium text-stone-800 group-hover:text-stone-900 leading-snug transition-colors"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
            itemProp="name"
          >
            {article.title}
          </h2>
          <p className="text-stone-400 text-xs md:text-sm leading-[1.8] line-clamp-2" itemProp="description">
            {article.description}
          </p>
        </div>
        <div className="flex-shrink-0 hidden md:flex items-center text-stone-300 group-hover:text-[#8FAF9F] transition-colors">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
        <div className="flex items-center justify-between text-xs text-stone-400 md:hidden pt-1 border-t border-stone-100">
          <span>記事を読む</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </Link>
    </motion.div>
  );
}

function CategorySection({ category, items }: { category: Category; items: typeof articles }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-[10px] tracking-[0.25em] uppercase font-medium px-3 py-1 rounded-full"
          style={{ color: SAGE, background: `${SAGE}12`, border: `1px solid ${SAGE}40` }}
        >
          {category.label}
        </span>
        <span className="text-xs text-stone-400">{items.length}本</span>
      </div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger}
        className="space-y-3"
      >
        {items.map((a) => <ArticleCard key={a.path} article={a} isCheck={category.isCheck} />)}
      </motion.div>
    </div>
  );
}

const TABS = [
  { id: "all",   label: "すべて" },
  { id: "check", label: "セルフチェック" },
  { id: "theme", label: "テーマ別" },
] as const;
type TabId = typeof TABS[number]["id"];

export default function Articles() {
  const [activeTab, setActiveTab] = useState<TabId>("all");

  const categorized = CATEGORIES.map((cat) => ({
    category: cat,
    items: articles.filter((a) =>
      cat.id === "other"
        ? !CATEGORIES.filter((c) => c.id !== "other").some((c) => c.keywords.some((kw) => a.path.toLowerCase().includes(kw)))
        : getCategoryId(a.path) === cat.id
    ),
  }));

  const checkItems = categorized.find((c) => c.category.id === "check")?.items ?? [];
  const otherCats  = categorized.filter((c) => c.category.id !== "check");

  return (
    <>
      <Helmet>
        <title>心理記事｜支援職のための構造的な視点｜こころの相談室 いしずえ</title>
        <meta name="description" content="支援職・対人援助職が抱えやすい心理的負担について、構造的な視点から整理した記事一覧。燃え尽き・二次受傷・役割過剰など。" />
      </Helmet>

      <div className="bg-white min-h-screen">

        {/* HEADER */}
        <section className="relative bg-stone-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-5 max-w-2xl">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: SAGE }}>Articles</span>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide leading-[1.5]" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
                  心理記事
                </h1>
                <p className="text-stone-300 text-sm md:text-base leading-[2] max-w-lg">
                  支援職・対人援助職が抱えやすい心理的負担について、<br className="hidden md:block" />
                  構造的な視点から整理しています。
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {["燃え尽き・バーンアウト", "二次受傷", "役割過剰", "境界線", "セルフチェック"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.08] text-[11px] tracking-[0.08em] text-white/65">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ARTICLES */}
        <section className="py-12 md:py-20 px-5 md:px-6" itemScope itemType="https://schema.org/CollectionPage">
          <div className="max-w-4xl mx-auto">

            {/* セルフチェック導線バナー */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="mb-10 p-5 md:p-6 rounded-2xl"
              style={{ background: `${SAGE}07`, border: `1px solid ${SAGE}50` }}
            >
              <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1.5" style={{ color: SAGE }}>
                まず今の状態を確認したい方はこちらから
              </p>
              <p className="text-stone-600 text-sm leading-[1.8] mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                バーンアウト・共感疲労・感情労働の消耗度をセルフチェックで確認できます。
              </p>
              <div className="flex flex-wrap gap-2">
                {checkItems.slice(0, 3).map((a) => (
                  <Link
                    key={a.path} to={a.path}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-stone-200 bg-white text-stone-600 hover:border-[#8FAF9F]/50 hover:text-stone-800 transition-all"
                  >
                    <ClipboardList className="w-3 h-3" style={{ color: SAGE }} />
                    {a.title.split("｜")[0].replace(/セルフチェック|チェック/g, "").trim() || a.title.split("｜")[0]}
                  </Link>
                ))}
                {checkItems.length > 3 && (
                  <button
                    onClick={() => setActiveTab("check")}
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-stone-200 bg-white text-stone-400 hover:text-stone-600 transition-all"
                  >
                    他{checkItems.length - 3}本 →
                  </button>
                )}
              </div>
            </motion.div>

            {/* タブ */}
            <div className="flex gap-0 mb-8 border-b border-stone-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
                    activeTab === tab.id ? "text-stone-900" : "border-transparent text-stone-400 hover:text-stone-600"
                  }`}
                  style={activeTab === tab.id ? { borderBottomColor: SAGE } : {}}
                >
                  {tab.label}
                  <span className="ml-1.5 text-xs text-stone-400">
                    {tab.id === "all"   ? articles.length : ""}
                    {tab.id === "check" ? checkItems.length : ""}
                    {tab.id === "theme" ? articles.length - checkItems.length : ""}
                  </span>
                </button>
              ))}
            </div>

            {/* すべて */}
            {activeTab === "all" && (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-3">
                {articles.map((a) => (
                  <ArticleCard key={a.path} article={a} isCheck={getCategoryId(a.path) === "check"} />
                ))}
              </motion.div>
            )}

            {/* セルフチェック */}
            {activeTab === "check" && (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-3">
                {checkItems.map((a) => <ArticleCard key={a.path} article={a} isCheck />)}
              </motion.div>
            )}

            {/* テーマ別 */}
            {activeTab === "theme" && (
              <div>
                {otherCats.map(({ category, items }) => (
                  <CategorySection key={category.id} category={category} items={items} />
                ))}
              </div>
            )}

            {articles.length === 0 && (
              <div className="text-center py-20 text-stone-400 text-sm">記事は準備中です。</div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-5 md:px-6 bg-stone-50 border-t border-stone-100">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-xl mx-auto text-center space-y-6">
            <motion.div variants={fadeUp} className="space-y-2">
              <p className="text-stone-800 text-lg md:text-xl font-light leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
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
              <Link to="/" className="text-xs text-stone-400 hover:text-stone-600 transition-colors underline underline-offset-2">
                ← トップページに戻る
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </>
  );
}

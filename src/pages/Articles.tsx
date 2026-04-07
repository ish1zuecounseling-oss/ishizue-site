/**
 * Articles.tsx
 * こころの相談室 いしずえ
 * 3層構造版 — 消耗テーマ / 境界線・人間関係 / キャリア危機 + セルフチェック優先
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
  visible: { transition: { staggerChildren: 0.05 } },
};

const SAGE = "#8FAF9F";

/* -------------------------------------------------------------------------- */
/*  3層カテゴリ定義                                                             */
/* -------------------------------------------------------------------------- */

type Layer = {
  id:       string;
  label:    string;
  desc:     string;
  sections: Section[];
};

type Section = {
  id:       string;
  label:    string;
  keywords: string[];
  isCheck?: boolean;
};

const LAYERS: Layer[] = [
  {
    id:    "exhaustion",
    label: "消耗を理解する",
    desc:  "支援職の消耗がなぜ起きるのか、構造的な視点から整理した記事",
    sections: [
      { id: "check",          label: "セルフチェック",   keywords: ["check"],                              isCheck: true },
      { id: "burnout",        label: "バーンアウト",      keywords: ["burnout", "burn-out", "signs"] },
      { id: "compassion",     label: "共感疲労・二次受傷",keywords: ["empathy", "secondary", "compassion", "fatigue"] },
      { id: "emotional_labor",label: "感情労働",          keywords: ["emotional-labor", "labor-fatigue", "emotional-fatigue", "labor"] },
      { id: "rest",           label: "休息・回復",         keywords: ["rest", "recovery", "self-care", "coping"] },
    ],
  },
  {
    id:    "relationship",
    label: "抱え込み・境界線・職場",
    desc:  "断れない・職場の人間関係・境界線の曖昧さによる消耗を整理した記事",
    sections: [
      { id: "boundary",    label: "境界線・抱え込み", keywords: ["boundary", "overwork", "sacrifice", "involve"] },
      { id: "workplace",   label: "職場・人間関係",   keywords: ["workplace", "team", "boss", "harassment", "claim", "colleague", "human"] },
      { id: "counseling",  label: "カウンセリング",   keywords: ["counseling", "counselling"] },
      { id: "job_specific",label: "職種別",           keywords: ["nurse", "caregiver", "teacher", "school", "welfare", "nursery", "social-worker"] },
    ],
  },
  {
    id:    "career",
    label: "辞めたい・続けられない",
    desc:  "辞めたい・休職・復職・キャリアの壁に直面している方への記事",
    sections: [
      { id: "quit",    label: "辞めたい・退職",  keywords: ["quit", "resign", "leave-job", "guilty-leave"] },
      { id: "absence", label: "休職・復職",      keywords: ["absence", "return", "leave", "休職", "復職"] },
      { id: "career",  label: "キャリア・閉塞感",keywords: ["career", "transfer", "repeat", "closure", "suitable"] },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  ユーティリティ                                                              */
/* -------------------------------------------------------------------------- */

function matchSection(path: string, section: Section): boolean {
  const p = path.toLowerCase();
  return section.keywords.some((kw) => p.includes(kw));
}

function getArticlesForSection(section: Section) {
  return articles.filter((a) => matchSection(a.path, section));
}

function getUnclassified(): typeof articles {
  const allSections = LAYERS.flatMap((l) => l.sections);
  return articles.filter((a) =>
    !allSections.some((s) => matchSection(a.path, s))
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                             */
/* -------------------------------------------------------------------------- */

function ArticleCard({ article, isCheck }: { article: typeof articles[0]; isCheck?: boolean }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        to={article.path}
        className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-5 bg-white border border-stone-100 rounded-xl p-4 md:p-5 hover:shadow-sm transition-all duration-200"
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${SAGE}70`; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
        itemScope itemType="https://schema.org/Article"
      >
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${SAGE}${isCheck ? "20" : "0d"}`, color: SAGE }}
          aria-hidden="true"
        >
          {isCheck ? <ClipboardList className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
        </div>
        <div className="flex-1 min-w-0 space-y-0.5">
          <h3
            className="text-sm font-medium text-stone-800 group-hover:text-stone-900 leading-snug transition-colors"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
            itemProp="name"
          >
            {article.title}
          </h3>
          <p className="text-stone-400 text-xs leading-relaxed line-clamp-1 hidden md:block" itemProp="description">
            {article.description}
          </p>
        </div>
        <ArrowRight className="flex-shrink-0 w-4 h-4 text-stone-300 group-hover:text-[#8FAF9F] group-hover:translate-x-0.5 transition-all hidden md:block" />
      </Link>
    </motion.div>
  );
}

function SectionBlock({ section }: { section: Section }) {
  const items = getArticlesForSection(section);
  if (items.length === 0) return null;
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className="text-[10px] tracking-[0.22em] uppercase font-medium px-2.5 py-1 rounded-full"
          style={{ color: SAGE, background: `${SAGE}10`, border: `1px solid ${SAGE}35` }}
        >
          {section.label}
        </span>
        <span className="text-xs text-stone-400">{items.length}本</span>
      </div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger}
        className="space-y-2"
      >
        {items.map((a) => <ArticleCard key={a.path} article={a} isCheck={section.isCheck} />)}
      </motion.div>
    </div>
  );
}

function LayerBlock({ layer }: { layer: Layer }) {
  const totalCount = layer.sections.reduce((n, s) => n + getArticlesForSection(s).length, 0);
  if (totalCount === 0) return null;
  return (
    <div id={`layer-${layer.id}`} className="mb-16 scroll-mt-20">
      <div className="mb-6 pb-4 border-b border-stone-100">
        <div className="flex items-baseline gap-3 mb-1">
          <h2
            className="text-lg md:text-xl font-medium text-stone-900"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            {layer.label}
          </h2>
          <span className="text-xs text-stone-400">{totalCount}本</span>
        </div>
        <p className="text-stone-500 text-sm">{layer.desc}</p>
      </div>
      {layer.sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tabs                                                                       */
/* -------------------------------------------------------------------------- */

const TABS = [
  { id: "theme", label: "テーマ別" },
  { id: "all",   label: "すべて" },
] as const;
type TabId = typeof TABS[number]["id"];

/* -------------------------------------------------------------------------- */
/*  Main                                                                       */
/* -------------------------------------------------------------------------- */

export default function Articles() {
  const [activeTab, setActiveTab] = useState<TabId>("theme");

  const checkSection = LAYERS[0].sections.find((s) => s.id === "check");
  const checkItems   = checkSection ? getArticlesForSection(checkSection) : [];
  const unclassified = getUnclassified();

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

              {/* テーマ別ジャンプリンク */}
              <motion.div variants={fadeUp} className="pt-1 space-y-2">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">今の悩みから探す</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "消耗を理解する",         layerId: "exhaustion" },
                    { label: "抱え込み・境界線・職場", layerId: "relationship" },
                    { label: "辞めたい・続けられない", layerId: "career" },
                  ].map(({ label, layerId }) => (
                    <a
                      key={layerId}
                      href={`#layer-${layerId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("theme");
                        setTimeout(() => {
                          const el = document.getElementById(`layer-${layerId}`);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }, 50);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/25 bg-white/[0.1] text-[11px] tracking-[0.05em] text-white/80 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {label}
                    </a>
                  ))}
                </div>
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
              style={{ background: `${SAGE}07`, border: `1px solid ${SAGE}45` }}
            >
              <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1.5" style={{ color: SAGE }}>
                まず今の状態を確認したい方はこちら
              </p>
              <p className="text-stone-600 text-sm leading-[1.8] mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                バーンアウト・共感疲労・感情労働の消耗度をセルフチェックで確認できます。
              </p>
              <div className="flex flex-wrap gap-2">
                {checkItems.slice(0, 4).map((a) => (
                  <Link
                    key={a.path} to={a.path}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-stone-200 bg-white text-stone-600 hover:text-stone-900 transition-all"
                    style={{ borderColor: "", }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${SAGE}60`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
                  >
                    <ClipboardList className="w-3 h-3" style={{ color: SAGE }} />
                    {a.title.split("｜")[0].replace(/セルフチェック|チェック/g, "").trim()}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* タブ */}
            <div className="flex gap-0 mb-10 border-b border-stone-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
                    activeTab === tab.id ? "text-stone-900" : "border-transparent text-stone-400 hover:text-stone-600"
                  }`}
                  style={activeTab === tab.id ? { borderBottomColor: SAGE } : {}}
                >
                  {tab.label}
                  {tab.id === "all" && <span className="ml-1.5 text-xs text-stone-400">{articles.length}</span>}
                </button>
              ))}
            </div>

            {/* テーマ別（3層構造） */}
            {activeTab === "theme" && (
              <div>
                {LAYERS.map((layer) => <LayerBlock key={layer.id} layer={layer} />)}
                {/* 未分類 */}
                {unclassified.length > 0 && (
                  <div className="mb-16">
                    <div className="mb-6 pb-4 border-b border-stone-100">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h2 className="text-lg font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                          その他
                        </h2>
                        <span className="text-xs text-stone-400">{unclassified.length}本</span>
                      </div>
                    </div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="space-y-2">
                      {unclassified.map((a) => <ArticleCard key={a.path} article={a} />)}
                    </motion.div>
                  </div>
                )}
              </div>
            )}

            {/* すべて */}
            {activeTab === "all" && (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-2">
                {articles.map((a) => <ArticleCard key={a.path} article={a} />)}
              </motion.div>
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

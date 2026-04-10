/**
 * ArticleLayout.tsx
 * こころの相談室 いしずえ
 * アクセントカラー #8FAF9F に統一 / Layout.tsx・Home.tsx と整合
 */

import { useCallback } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, Calendar, User, MessageCircle } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import AudioPlayer from "./AudioPlayer";
import ArticleSchema from "./ArticleSchema";
import RandomArticles from "./RandomArticles";
import { pillarMap } from "../lib/pillarMap";
import { articles } from "../data/articles";
import { BookOpen } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const SAGE = "#8FAF9F";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type FaqItem = { q: string; a: string };

type Props = {
  title:       string;
  description: string;
  url:         string;
  date:        string;
  audio?:      string;
  tags?:       string[];
  faq?:        FaqItem[];
  children:    React.ReactNode;
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (typeof node === "object" && "props" in (node as object)) {
    return extractText((node as React.ReactElement).props?.children);
  }
  return "";
}

function estimateReadingTime(node: React.ReactNode): number {
  const text = extractText(node);
  const chars = text.replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(chars / 400)); // 日本語: 400字/分
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    year: "numeric", month: "long", day: "numeric",
  });
}

/**
 * Contact セクションへのスムーズスクロール。
 * Layout.tsx と同一の実装。
 */
function scrollToContact(navigate: ReturnType<typeof useNavigate>) {
  const tryScroll = () => {
    const el = document.getElementById("contact");
    if (el) { el.scrollIntoView({ behavior: "smooth" }); return true; }
    return false;
  };

  navigate("/");

  const timeout = window.setTimeout(() => observer.disconnect(), 2000);
  const observer = new MutationObserver(() => {
    if (tryScroll()) { observer.disconnect(); clearTimeout(timeout); }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ArticleLayout({
  title, description, url, date, audio, tags = [], faq = [], children,
}: Props) {
  const path = url.replace(/.*\/articles/, "");
  const readingTime = estimateReadingTime(children);
  const navigate = useNavigate();

  const handleContactClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContact(navigate);
  }, [navigate]);

  return (
    <>
      {/* ============================================================
          SEO — canonical / Breadcrumb / Person / FAQ Schema
      ============================================================ */}
      <ArticleSchema title={title} description={description} url={url} date={date} />

      <Helmet>
        {/* ① canonical — preview URLによる重複評価を防止 */}
        <link rel="canonical" href={url} />
      </Helmet>

      {/* ② Breadcrumb Schema — 検索結果にパンくずを表示させる */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "ホーム",
                "item": "https://www.ishizue-counseling.jp/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "心理記事",
                "item": "https://www.ishizue-counseling.jp/articles",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": url,
              },
            ],
          }),
        }}
      />

      {/* ③ Person Schema — 全記事に著者を明示（E-E-A-T強化） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "松本 龍児",
            "alternateName": "まつもと りゅうじ",
            "jobTitle": "公認心理師",
            "url": "https://www.ishizue-counseling.jp/profile",
            "image": "https://www.ishizue-counseling.jp/profile.jpg",
            "sameAs": [
              "https://x.com/ish1zue",
              "https://www.instagram.com/ishizue_counseling/",
              "https://note.com/ryuji_ishizue",
            ],
            "worksFor": {
              "@type": "ProfessionalService",
              "name": "こころの相談室 いしずえ",
              "url": "https://www.ishizue-counseling.jp",
            },
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "国家資格",
              "name": "公認心理師",
            },
            "knowsAbout": [
              "共感疲労", "バーンアウト", "感情労働", "二次受傷",
              "支援職カウンセリング", "境界線", "認知行動療法", "ACT",
              "動機づけ面接", "トラウマインフォームドケア",
            ],
          }),
        }}
      />

      {/* ④ FAQ Schema — faq props がある記事のみ出力 */}
      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faq.map(({ q, a }) => ({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": a,
                },
              })),
            }),
          }}
        />
      )}

      <div className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20 text-stone-700 leading-loose">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            itemScope
            itemType="https://schema.org/Article"
          >

            {/* ============================================================
                HEADER
            ============================================================ */}
            <header className="mb-14">

              {/* Schema hidden metas */}
              <meta itemProp="headline"          content={title} />
              <meta itemProp="datePublished"     content={date} />
              <meta itemProp="dateModified"      content={date} />
              <meta itemProp="mainEntityOfPage"  content={url} />
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="松本 龍児" />
              </div>
              <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="こころの相談室 いしずえ" />
              </div>

              {/* パンくず */}
              <Breadcrumbs title={title} />

              {/* カテゴリタグ */}
              <div className="mt-4 mb-5">
                <span
                  className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium border rounded-full px-3 py-1"
                  style={{ color: SAGE, borderColor: `${SAGE}60` }}
                >
                  心理コラム
                </span>
              </div>

              {/* タイトル */}
              <h1
                className="text-2xl sm:text-3xl font-medium mb-6 text-stone-900 leading-snug tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
                itemProp="name"
              >
                {title}
              </h1>

              {/* メタ情報バー */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 mb-6">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{ background: `${SAGE}22` }}
                  >
                    <User className="w-3 h-3" style={{ color: SAGE }} aria-hidden="true" />
                  </span>
                  <span className="text-stone-500 font-medium">松本 龍児</span>
                  <span className="text-stone-300">｜公認心理師</span>
                </div>

                <span className="text-stone-200" aria-hidden="true">·</span>

                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-300" aria-hidden="true" />
                  <time dateTime={date}>{formatDate(date)}</time>
                </div>

                <span className="text-stone-200" aria-hidden="true">·</span>

                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-300" aria-hidden="true" />
                  <span>約 {readingTime} 分で読めます</span>
                </div>
              </div>

              {/* 音声プレイヤー */}
              {audio && <AudioPlayer src={audio} />}

              {/* リード文 — Home.tsx の BlockQuote と同一スタイル */}
              <p
                className="text-stone-600 text-base sm:text-lg leading-[1.9] py-1"
                style={{
                  borderLeft: `2px solid ${SAGE}`,
                  paddingLeft: "1.25rem",
                }}
                itemProp="description"
              >
                {description}
              </p>

              {/* 区切り装飾 */}
              <div className="mt-10 flex items-center gap-2.5" aria-hidden="true">
                <div className="flex-1 h-px bg-gradient-to-r from-stone-200 to-transparent" />
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${SAGE}80` }} />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                <span className="w-1 h-1 rounded-full bg-stone-100" />
              </div>
            </header>

            {/* ============================================================
                BODY — article-body クラスで index.css のスタイルを適用
            ============================================================ */}
            <div className="article-body" itemProp="articleBody">
              {children}
            </div>

            {/* ============================================================
                CTA（CV導線）
            ============================================================ */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              {/* 区切り */}
              <div className="flex items-center gap-3 mb-10" aria-hidden="true">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
              </div>

              {/* CTA カード */}
              <div
                className="relative overflow-hidden rounded-2xl border shadow-md px-7 md:px-10 py-10 text-center"
                style={{
                  background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)",
                  borderColor: `${SAGE}33`,
                }}
              >
                {/* 背景装飾円 */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
                  style={{ backgroundColor: `${SAGE}08` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ backgroundColor: `${SAGE}08` }}
                  aria-hidden="true"
                />

                {/* アイコン */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5"
                  style={{ backgroundColor: `${SAGE}22` }}
                >
                  <MessageCircle className="w-5 h-5" style={{ color: SAGE }} aria-hidden="true" />
                </div>

                <h2
                  className="text-lg sm:text-xl font-medium mb-3 text-stone-900 leading-snug"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  一人で抱え込まず、<br className="sm:hidden" />整理する時間をつくりませんか
                </h2>

                <p className="text-stone-500 text-sm leading-relaxed mb-7 max-w-sm mx-auto">
                  支援職の負担や葛藤について、落ち着いて整理する場として
                  カウンセリングをご利用いただけます。
                </p>

                <a
                  href="/#contact"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-md group"
                >
                  松本に、今の状態を整理してもらう（無料）
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </a>

                <p className="text-xs text-stone-400 mt-4">
                  1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可
                </p>
              </div>
            </motion.section>

            {/* ============================================================
                著者カード
            ============================================================ */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-14 flex items-start gap-4 bg-stone-50 rounded-2xl border border-stone-100 p-5"
            >
              {/* アバター */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-stone-200 shadow-sm">
                <img
                  src="/profile.jpg"
                  alt="松本 龍児"
                  className="w-full h-full object-cover object-top"
                  width={56}
                  height={56}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const p = e.currentTarget.parentElement;
                    if (p) p.classList.add("bg-stone-200");
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p
                    className="text-sm font-medium text-stone-900"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    松本 龍児
                  </p>
                  <span className="text-xs text-stone-400 bg-white border border-stone-100 rounded-full px-2 py-0.5">
                    公認心理師
                  </span>
                </div>
                <p className="text-xs text-stone-400 mb-2">
                  こころの相談室 いしずえ｜支援者支援専門
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mb-3">
                  障害福祉分野で15年、累計300名以上・6,000時間以上の支援に携わる。
                  CBT・ACT・MIなどを統合的に用い、支援職の消耗・燃え尽きに特化したカウンセリングを提供。
                </p>
                <Link
                  to="/profile"
                  className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:underline underline-offset-2"
                  style={{ color: SAGE }}
                >
                  プロフィール詳細を見る
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            {/* ============================================================
                王様記事（タグから自動表示）
            ============================================================ */}
            {(() => {
              const currentPath = path.startsWith("/articles") ? path : `/articles${path}`;
              const seen = new Set<string>();
              const prioritySlugs = tags
                .flatMap((tag) => pillarMap[tag] || [])
                .filter((s) => { if (seen.has(s)) return false; seen.add(s); return true; });
              const ordered = prioritySlugs
                .map((slug) => articles.find((a) => a.path === slug))
                .filter((a): a is NonNullable<typeof a> => !!a && a.path !== currentPath);

              if (ordered.length === 0) return null;
              return (
                <div className="mt-10 mb-2 p-5 rounded-2xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.3)" }}>
                  <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>
                    まず読んでほしい記事
                  </p>
                  <div className="space-y-2">
                    {ordered.map((a) => (
                      <a
                        key={a.path}
                        href={a.path}
                        className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 transition-colors group"
                      >
                        <BookOpen className="w-4 h-4 flex-shrink-0" style={{ color: "#8FAF9F" }} />
                        <span className="group-hover:underline underline-offset-2">{a.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* ============================================================
                監修情報（YMYL対策・全記事共通）
            ============================================================ */}
            <div className="mt-14 p-5 rounded-2xl border border-stone-100 bg-stone-50">
              <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>
                監修情報
              </p>
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border border-stone-200"
                  style={{ background: "rgba(143,175,159,0.15)" }}
                >
                  <img
                    src="/profile.jpg"
                    alt="松本 龍児"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    松本 龍児（まつもと りゅうじ）
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    公認心理師 ／ こころの相談室 いしずえ 代表<br />
                    障害福祉分野15年・累計300名以上6,000時間以上の支援経験。
                    支援職の燃え尽き・共感疲労に特化した「構造整理型カウンセリング」を提供。
                  </p>
                  <p className="text-[11px] text-stone-400 pt-1">
                    ※ 本記事は心理的な理解を深めるための情報提供を目的としており、医療行為・診断に代わるものではありません。気になる症状がある場合は専門機関にご相談ください。
                  </p>
                </div>
              </div>
            </div>

            {/* ============================================================
                Prev / Next ナビ — 回遊率向上
            ============================================================ */}
            {(() => {
              const currentIndex = articles.findIndex((a) => a.path === path || a.path === `/articles${path}`);
              if (currentIndex < 0) return null;
              const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
              const next = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
              if (!prev && !next) return null;
              return (
                <div className="mt-10 pt-8 border-t border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {prev && (
                    <Link
                      to={prev.path}
                      className="group flex flex-col gap-1 p-4 rounded-xl border border-stone-100 hover:shadow-sm transition-all"
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${SAGE}60`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
                    >
                      <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: SAGE }}>← 前の記事</span>
                      <span className="text-sm text-stone-700 group-hover:text-stone-900 leading-snug transition-colors line-clamp-2"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        {prev.title}
                      </span>
                    </Link>
                  )}
                  {next && (
                    <Link
                      to={next.path}
                      className="group flex flex-col gap-1 p-4 rounded-xl border border-stone-100 hover:shadow-sm transition-all md:text-right"
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${SAGE}60`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
                    >
                      <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: SAGE }}>次の記事 →</span>
                      <span className="text-sm text-stone-700 group-hover:text-stone-900 leading-snug transition-colors line-clamp-2"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        {next.title}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })()}

            {/* ============================================================
                関連記事（意味ベース優先 → フォールバック: ランダム）
            ============================================================ */}
            <div className="mt-8 pt-8 border-t border-stone-100">
              {(() => {
                // タグから意味ベースで関連記事を取得
                const currentPath = path.startsWith("/articles") ? path : `/articles${path}`;
                const tagSlugs = tags.flatMap((tag) => pillarMap[tag] || []);
                const tagArticles = [...new Set(tagSlugs)]
                  .map((slug) => articles.find((a) => a.path === slug))
                  .filter((a): a is NonNullable<typeof a> => !!a && a.path !== currentPath)
                  .slice(0, 3);

                // タグ関連記事が足りない場合はランダムで補完
                const needed = 3 - tagArticles.length;
                const randomFill = needed > 0
                  ? articles
                      .filter((a) => a.path !== currentPath && !tagArticles.some((t) => t.path === a.path))
                      .sort(() => Math.random() - 0.5)
                      .slice(0, needed)
                  : [];

                const related = [...tagArticles, ...randomFill];
                if (related.length === 0) return null;

                return (
                  <>
                    <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-4" style={{ color: SAGE }}>
                      {tagArticles.length > 0 ? "あわせて読みたい記事" : "他の記事"}
                    </p>
                    <div className="space-y-2">
                      {related.map((a) => (
                        <Link
                          key={a.path}
                          to={a.path}
                          className="group flex items-center gap-3 p-3 rounded-xl border border-stone-100 hover:shadow-sm transition-all"
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${SAGE}55`; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
                        >
                          <BookOpen className="w-4 h-4 flex-shrink-0" style={{ color: SAGE }} />
                          <span className="text-sm text-stone-700 group-hover:text-stone-900 leading-snug transition-colors line-clamp-2"
                            style={{ fontFamily: "'Noto Serif JP', serif" }}>
                            {a.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>

          </motion.article>
        </div>
      </div>
    </>
  );
}

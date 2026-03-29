/**
 * ArticleLayout.tsx
 * こころの相談室 いしずえ
 * アクセントカラー #8FAF9F に統一 / Layout.tsx・Home.tsx と整合
 */

import { useCallback } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Calendar, User, MessageCircle, BookOpen } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import AudioPlayer from "./AudioPlayer";
import ArticleSchema from "./ArticleSchema";
import RandomArticles from "./RandomArticles";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const SAGE = "#8FAF9F";

/* -------------------------------------------------------------------------- */
/*  チェック記事への導線データ                                                    */
/* -------------------------------------------------------------------------- */

const checkArticles = [
  {
    path: "/articles/helper-empathy-check",
    label: "共感疲労チェック",
    desc: "20項目で今の状態を確認",
  },
  {
    path: "/articles/helper-burnout-check",
    label: "バーンアウトチェック",
    desc: "燃え尽きのサインを確認",
  },
  {
    path: "/articles/helper-emotional-labor-check",
    label: "感情労働の消耗度チェック",
    desc: "感情の疲れを数値で確認",
  },
  {
    path: "/articles/helper-workplace-stress-check",
    label: "職場ストレスチェック",
    desc: "職場環境のリスクを確認",
  },
  {
    path: "/articles/helper-quit-timing-check",
    label: "辞め時チェック",
    desc: "転職・退職を考えるサイン",
  },
];

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type Props = {
  title:       string;
  description: string;
  url:         string;
  date:        string;
  audio?:      string;
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
  return Math.max(1, Math.ceil(chars / 400));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ja-JP", {
    year: "numeric", month: "long", day: "numeric",
  });
}

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
  title, description, url, date, audio, children,
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
      {/* SEO */}
      <ArticleSchema title={title} description={description} url={url} date={date} />

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

              <Breadcrumbs title={title} />

              <div className="mt-4 mb-5">
                <span
                  className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium border rounded-full px-3 py-1"
                  style={{ color: SAGE, borderColor: `${SAGE}60` }}
                >
                  心理コラム
                </span>
              </div>

              <h1
                className="text-2xl sm:text-3xl font-medium mb-6 text-stone-900 leading-snug tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
                itemProp="name"
              >
                {title}
              </h1>

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

              {audio && <AudioPlayer src={audio} />}

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

              <div className="mt-10 flex items-center gap-2.5" aria-hidden="true">
                <div className="flex-1 h-px bg-gradient-to-r from-stone-200 to-transparent" />
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${SAGE}80` }} />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                <span className="w-1 h-1 rounded-full bg-stone-100" />
              </div>
            </header>

            {/* ============================================================
                BODY
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
              <div className="flex items-center gap-3 mb-10" aria-hidden="true">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl border shadow-md px-7 md:px-10 py-10 text-center"
                style={{
                  background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)",
                  borderColor: `${SAGE}33`,
                }}
              >
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
                次の行動ブロック — チェック記事への導線
            ============================================================ */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-14"
            >
              <div className="border border-stone-100 rounded-2xl p-6 md:p-8 bg-stone-50">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-stone-400" aria-hidden="true" />
                  <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-stone-400">
                    今の状態をチェックする
                  </p>
                </div>
                <p
                  className="text-stone-700 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  記事を読んで「自分に当てはまるかも」と感じたら、<br className="hidden sm:block" />
                  セルフチェックで今の状態を確認してみましょう。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {checkArticles.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="group flex items-center justify-between gap-3 px-4 py-3 bg-white border border-stone-100 rounded-xl hover:border-stone-200 hover:shadow-sm transition-all duration-200"
                    >
                      <div>
                        <p className="text-sm font-medium text-stone-700 group-hover:text-stone-900 transition-colors leading-snug">
                          {item.label}
                        </p>
                        <p className="text-xs text-stone-400 mt-0.5">{item.desc}</p>
                      </div>
                      <ArrowRight
                        className="w-3.5 h-3.5 flex-shrink-0 text-stone-300 group-hover:text-stone-500 group-hover:translate-x-0.5 transition-all"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
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
                おすすめ記事（ランダム）
            ============================================================ */}
            <div className="mt-16 pt-10 border-t border-stone-100">
              <RandomArticles currentPath={path} count={3} />
            </div>

          </motion.article>
        </div>
      </div>
    </>
  );
}

// ishizue-site/src/components/ArticleLayout.tsx

import { useCallback } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import Breadcrumbs from "./Breadcrumbs"
import AudioPlayer from "./AudioPlayer"
import ArticleSchema from "./ArticleSchema"
import RandomArticles from "./RandomArticles"

type Props = {
  title: string
  description: string
  url: string
  date: string
  audio?: string
  children: React.ReactNode
}

// 読了時間を推定（children の文字数から）
function estimateReadingTime(node: React.ReactNode): number {
  const text = extractText(node)
  const chars = text.replace(/\s/g, "").length
  return Math.max(1, Math.ceil(chars / 400)) // 日本語: 400字/分
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (!node) return ""
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (typeof node === "object" && "props" in (node as any)) {
    return extractText((node as any).props?.children)
  }
  return ""
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function ArticleLayout({
  title,
  description,
  url,
  date,
  audio,
  children,
}: Props) {
  const path = url.replace(/.*\/articles/, "")
  const readingTime = estimateReadingTime(children)
  const navigate = useNavigate()

  // /#contact へのスクロール遷移（記事ページ → ホームの#contact）
  const handleContactClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    navigate("/")
    setTimeout(() => {
      const el = document.getElementById("contact")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }, [navigate])

  return (
    <>
      {/* SEO */}
      <ArticleSchema
        title={title}
        description={description}
        url={url}
        date={date}
      />

      {/* ページ全体の背景 */}
      <div className="min-h-screen bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20 text-stone-700 leading-loose">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            itemScope
            itemType="https://schema.org/Article"
          >
            {/* =====================
                HEADER
            ===================== */}
            <header className="mb-14">
              {/* Schema hidden metas */}
              <meta itemProp="headline" content={title} />
              <meta itemProp="datePublished" content={date} />
              <meta itemProp="dateModified" content={date} />
              <meta itemProp="mainEntityOfPage" content={url} />
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
                <span className="inline-block text-xs tracking-widest text-[#7C9A8A] uppercase font-medium border border-[#7C9A8A]/40 rounded-full px-3 py-1">
                  心理コラム
                </span>
              </div>

              {/* タイトル */}
              <h1
                className="text-2xl sm:text-3xl md:text-[2rem] font-semibold mb-6 text-stone-900 tracking-tight leading-snug"
                itemProp="name"
              >
                {title}
              </h1>

              {/* メタ情報バー */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 mb-6">
                {/* 著者 */}
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#7C9A8A]/20 inline-flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#7C9A8A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" />
                    </svg>
                  </span>
                  <span className="text-stone-500 font-medium">松本 龍児</span>
                  <span className="text-stone-300">｜公認心理師</span>
                </div>

                {/* セパレーター */}
                <span className="text-stone-200">·</span>

                {/* 日付 */}
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={date}>{formatDate(date)}</time>
                </div>

                {/* セパレーター */}
                <span className="text-stone-200">·</span>

                {/* 読了時間 */}
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>約 {readingTime} 分で読めます</span>
                </div>
              </div>

              {/* 音声プレイヤー */}
              {audio && (
                <AudioPlayer src={audio} />
              )}

              {/* リード文 */}
              <p
                className="text-stone-600 text-base sm:text-lg leading-[1.9] border-l-4 border-[#7C9A8A]/40 pl-4 py-1"
                itemProp="description"
              >
                {description}
              </p>

              {/* 区切り装飾 */}
              <div className="mt-10 flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-stone-200 to-transparent" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#7C9A8A]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-stone-100" />
              </div>
            </header>

            {/* =====================
                BODY
            ===================== */}
            <div
              className={[
                "space-y-7 text-[0.97rem] sm:text-base text-stone-700 leading-[2.1]",
                "[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-stone-800 [&_h2]:mt-12 [&_h2]:mb-4",
                "[&_h2]:border-l-4 [&_h2]:border-[#7C9A8A] [&_h2]:pl-4",
                "[&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-stone-800 [&_h3]:mt-8 [&_h3]:mb-3",
                "[&_h3]:flex [&_h3]:items-center [&_h3]:gap-2",
                "[&_h3]:before:content-[''] [&_h3]:before:w-4 [&_h3]:before:h-px [&_h3]:before:bg-[#7C9A8A]",
                "[&_p]:text-stone-700 [&_p]:leading-[2.05]",
                "[&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:marker:text-[#7C9A8A]",
                "[&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:list-decimal [&_ol]:marker:text-[#7C9A8A]",
                "[&_blockquote]:border-l-4 [&_blockquote]:border-[#7C9A8A]/50 [&_blockquote]:pl-5",
                "[&_blockquote]:text-stone-500 [&_blockquote]:italic [&_blockquote]:my-6",
                "[&_strong]:text-stone-900 [&_strong]:font-semibold",
                "[&_a]:text-[#7C9A8A] [&_a]:underline [&_a]:underline-offset-2",
              ].join(" ")}
              itemProp="articleBody"
            >
              {children}
            </div>

            {/* =====================
                CTA（CV導線）
            ===================== */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              {/* 区切り */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F7F5] via-white to-[#EFF4F1] border border-[#7C9A8A]/20 shadow-md px-8 py-10 text-center">

                {/* 背景装飾 */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#7C9A8A]/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#7C9A8A]/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                {/* アイコン */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7C9A8A]/15 mb-5">
                  <svg className="w-6 h-6 text-[#7C9A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.862 9.862 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>

                <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900 leading-snug">
                  一人で抱え込まず、<br className="sm:hidden" />整理する時間をつくりませんか
                </h2>

                <p className="text-stone-500 text-sm leading-relaxed mb-7 max-w-sm mx-auto">
                  支援職の負担や葛藤について、落ち着いて整理する場として
                  カウンセリングをご利用いただけます。
                </p>

                <a
                  href="/#contact"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 bg-stone-900 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#3D3D3B] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  相談について問い合わせる
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <p className="text-xs text-stone-400 mt-4">
                  ※ 初回のご相談は無料です
                </p>

              </div>
            </motion.section>

            {/* =====================
                著者カード
            ===================== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-14 flex items-start gap-4 bg-white rounded-xl border border-stone-100 shadow-sm p-5"
            >
              {/* アバター */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7C9A8A]/20 flex items-center justify-center text-[#7C9A8A] font-semibold text-sm">
                松
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">松本 龍児</p>
                <p className="text-xs text-stone-400 mb-1">公認心理師 ／ こころの相談室 いしずえ</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  医療・福祉・教育の現場での支援経験をもとに、こころの仕組みや関わり方について発信しています。
                </p>
              </div>
            </motion.div>

            {/* =====================
                おすすめ記事（ランダム）
            ===================== */}
            <div className="mt-16 pt-10 border-t border-stone-100">
              <RandomArticles currentPath={path} count={3} />
            </div>

          </motion.article>
        </div>
      </div>
    </>
  )
}

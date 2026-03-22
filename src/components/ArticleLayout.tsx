import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Breadcrumbs from "./Breadcrumbs"
import AudioPlayer from "./AudioPlayer"
import ArticleSchema from "./ArticleSchema"
import RelatedArticles from "./RelatedArticles"

type Props = {
  title: string
  description: string
  url: string
  date: string
  audio?: string
  children: React.ReactNode
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

  return (
    <>
      {/* SEO */}
      <ArticleSchema
        title={title}
        description={description}
        url={url}
        date={date}
      />

      <div className="max-w-3xl mx-auto px-6 py-24 text-stone-700 leading-loose">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          itemScope
          itemType="https://schema.org/Article"
        >
          {/* =========================
              HEADER
          ========================= */}
          <header className="mb-16">
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

            <Breadcrumbs title={title} />

            <h1 className="text-3xl md:text-4xl font-medium mb-6 text-stone-900 tracking-tight">
              {title}
            </h1>

            {audio && <AudioPlayer src={audio} />}

            <p className="text-stone-600 text-lg mt-6" itemProp="description">
              {description}
            </p>

            <div className="h-px w-24 bg-stone-300 mt-8" />
          </header>

          {/* =========================
              BODY
          ========================= */}
          <div className="space-y-6" itemProp="articleBody">
            {children}
          </div>

          {/* =========================
              CTA（CV導線）
          ========================= */}
          <section className="mt-20 text-center">
            <div className="max-w-lg mx-auto bg-white border border-stone-200 rounded-2xl px-6 py-8 shadow-sm">

              <h2 className="text-lg font-medium mb-3 text-stone-900">
                一人で抱え込まず、整理する時間をつくりませんか
              </h2>

              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                支援職の負担や葛藤について、落ち着いて整理する場として
                カウンセリングをご利用いただけます。
              </p>

              <Link
                to="/#contact"
                className="inline-block bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-700 transition shadow-md hover:shadow-lg"
              >
                相談について問い合わせる
              </Link>

            </div>
          </section>

          {/* =========================
              内部リンク（SEO）
          ========================= */}
          <div className="mt-20">
            <RelatedArticles currentPath={path} />
          </div>
        </motion.article>
      </div>
    </>
  )
}

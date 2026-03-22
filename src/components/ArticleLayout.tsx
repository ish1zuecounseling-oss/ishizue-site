import { motion } from "framer-motion"
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
      {/* SEO構造化データ */}
      <ArticleSchema
        title={title}
        description={description}
        url={url}
        date={date}
      />

      <div className="article-container">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="article-body"
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

            <h1 className="mb-6">{title}</h1>

            {audio && <AudioPlayer src={audio} />}

            <p
              className="text-stone-600 text-lg mt-6"
              itemProp="description"
            >
              {description}
            </p>

            <div className="divider" />
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
          <section className="mt-24 text-center">
            <div className="card max-w-xl mx-auto">
              <h2 className="text-xl mb-4">
                一人で抱え込まず、整理する時間をつくりませんか
              </h2>
              <p className="text-stone-600 mb-6">
                支援職の負担や葛藤について、落ち着いて整理する場として
                カウンセリングをご利用いただけます。
              </p>
              <a
                href="/#contact"
                className="inline-block bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition"
              >
                相談について問い合わせる
              </a>
            </div>
          </section>

          {/* =========================
              内部リンク強化
          ========================= */}
          <div className="mt-20">
            <RelatedArticles currentPath={path} />
          </div>
        </motion.article>
      </div>
    </>
  )
}

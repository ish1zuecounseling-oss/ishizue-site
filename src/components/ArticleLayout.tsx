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
  return (
    <>
      {/* SEO */}
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
          {/* Header */}
          <header className="mb-16">
            <meta itemProp="headline" content={title} />
            <meta itemProp="datePublished" content={date} />

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

          {/* Body */}
          <div className="space-y-6">{children}</div>

          {/* CTA */}
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

          {/* Related */}
          <div className="mt-20">
            <RelatedArticles currentPath={url.replace(/.*\/articles/, "")} />
          </div>
        </motion.article>
      </div>
    </>
  )
}

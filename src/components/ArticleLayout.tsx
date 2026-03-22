import { motion } from "framer-motion"
import AudioPlayer from "./AudioPlayer"
import Breadcrumbs from "./Breadcrumbs"
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

export default function ArticleLayout({
  title,
  description,
  url,
  date,
  audio,
  children,
}: Props) {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900">

      <ArticleSchema
        title={title}
        description={description}
        url={url}
        date={date}
      />

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="article-container"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Header */}
        <header className="mb-16">
          <meta itemProp="headline" content={title} />
          <meta itemProp="datePublished" content={date} />

          <Breadcrumbs title={title} />

          <h1 className="mb-8">
            {title}
          </h1>

          {audio && <AudioPlayer src={audio} />}

          <p className="text-stone-600 text-lg mt-6">
            {description}
          </p>

          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>

        {/* Body */}
        <section className="article-body space-y-6">
          {children}
        </section>

        {/* Footer（関連記事） */}
        <div className="mt-20">
          <RandomArticles count={2} />
        </div>
      </motion.main>
    </div>
  )
}

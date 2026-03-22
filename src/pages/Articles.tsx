import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { articles } from "../data/articles"

export default function Articles() {
  return (
    <div className="min-h-screen bg-stone-50">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-24"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="mb-6">心理記事</h1>

          <p className="text-stone-600 max-w-xl mx-auto leading-relaxed">
            支援職・対人援助職が抱えやすい心理的負担について、
            構造的な視点から整理しています。
          </p>

          <div className="h-px w-24 bg-stone-300 mx-auto mt-10" />
        </header>

        {/* Articles */}
        <section className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.path}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={article.path}
                className="group block bg-white border border-stone-200 rounded-2xl p-6 md:p-8 transition hover:shadow-md hover:border-stone-300"
              >
                {/* Title */}
                <h2 className="text-lg md:text-xl mb-2 group-hover:text-stone-900 transition">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="mt-4 flex justify-between items-center text-xs text-stone-400">
                  <span>記事を読む</span>
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </motion.main>
    </div>
  )
}

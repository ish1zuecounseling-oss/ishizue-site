import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
<motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="max-w-3xl mx-auto px-6 py-24"
  itemScope
  itemType="https://schema.org/CollectionPage"
>
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-medium mb-6">
            心理記事
          </h1>

          <p className="text-stone-600">
            支援職・対人援助職が抱えやすい心理的負担について、
            基本的な概念を整理しています。
          </p>

          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>

        <section className="space-y-8">

          {articles.map((article) => (
            <Link
              key={article.path}
              to={article.path}
className="block bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-400 hover:shadow-md transition"
            >
              <h2 className="text-xl font-medium mb-2">
                {article.title}
              </h2>

              <p className="text-stone-600">
                {article.description}
              </p>
            </Link>
          ))}

        </section>

      </motion.main>
    </div>
  );
}

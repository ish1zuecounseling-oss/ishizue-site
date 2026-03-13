import { motion } from "motion/react";
import { Link } from "react-router-dom";
import RelatedArticles from "../components/RelatedArticles"

export default function Articles() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6 py-24"
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

          <Link
            to="/emotional-labor"
            className="block bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-400 transition"
          >
            <h2 className="text-xl font-medium mb-2">
              感情労働とは
            </h2>
            <p className="text-stone-600">
              支援職で求められる感情のコントロールについて解説します。
            </p>
          </Link>

          <Link
            to="/helper-trauma"
            className="block bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-400 transition"
          >
            <h2 className="text-xl font-medium mb-2">
              二次受傷（共感疲労）とは
            </h2>
            <p className="text-stone-600">
              他者の苦しみに触れ続けることで起こる心理的影響について。
            </p>
          </Link>

          <Link
            to="/helper-boundary"
            className="block bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-400 transition"
          >
            <h2 className="text-xl font-medium mb-2">
              支援職の境界線（バウンダリー）
            </h2>
            <p className="text-stone-600">
              支援関係の中で重要になる心理的な境界線について。
            </p>
          </Link>

          <Link
            to="/helper-burnout"
            className="block bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-400 transition"
          >
            <h2 className="text-xl font-medium mb-2">
              支援職のバーンアウト
            </h2>
            <p className="text-stone-600">
              長期的な心理的疲労としてのバーンアウトについて。
            </p>
          </Link>

        </section>

      </motion.main>

    </div>
  );
}
</main>

<RelatedArticles />

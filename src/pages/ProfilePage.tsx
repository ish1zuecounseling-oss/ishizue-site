import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-serif text-[#3c3c3c]">
      <main className="max-w-3xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-4xl font-light mb-10 text-center">
            カウンセラープロフィール
          </h1>

          <div className="space-y-6 text-lg leading-relaxed">

            <p>
              現場で出会った支援者の疲弊や孤立を目の当たりにし、
              支援する側が立ち止まれる場の必要性を感じました。
            </p>

            <p>
              福祉・医療・教育などの対人援助の現場では、
              責任・役割・感情労働を日常的に抱えることが少なくありません。
            </p>

            <p>
              支援する側が疲弊してしまうと、
              その人自身の生活や仕事の土台が揺らいでしまいます。
            </p>

            <h2 className="text-2xl mt-10">構造整理型カウンセリング</h2>

            <p>
              支援者の疲労は本人の努力不足ではなく、
              構造上の問題であることも多くあります。
            </p>

            <p>
              思考の癖、役割の抱え込み、責任の過剰化、
              周囲からの期待とのズレなどを整理し、
              消耗を減らす設計に戻ることを大切にしています。
            </p>

            <h2 className="text-2xl mt-10">主な相談テーマ</h2>

            <ul className="space-y-2">
              <li>・支援職の燃え尽き（バーンアウト）</li>
              <li>・感情労働による疲労</li>
              <li>・支援者の境界線（バウンダリー）</li>
              <li>・二次受傷（支援者のトラウマ）</li>
              <li>・対人援助職のストレス</li>
            </ul>

            <h2 className="text-2xl mt-10">活動歴</h2>

            <p>
              医療・福祉・教育領域での実務経験を経て、
              個別面談・ケース支援・支援者支援に従事。
              現在はオンラインを中心に活動しています。
            </p>

            <div className="text-center mt-12">
              <a
                href="/#contact"
                className="inline-block bg-[#5a5a40] text-white px-8 py-4 rounded-full hover:bg-[#4a4a30] transition"
              >
                相談について問い合わせる
              </a>
            </div>

          </div>

        </motion.div>

      </main>
    </div>
  );
}

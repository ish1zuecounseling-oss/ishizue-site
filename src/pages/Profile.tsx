import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-serif text-[#3c3c3c]">

      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
<h1 className="text-4xl font-light mb-2 text-center">
  支援職専門カウンセラー
</h1>

<p className="text-center text-lg text-[#6a6a5a] mb-10">
  松本 龍児
</p>
        </motion.div>

        {/* 共感 */}
        <section className="mb-12 space-y-5 text-lg leading-relaxed">
          <p>
            福祉・医療・教育などの現場で働く支援職の方から、
            「仕事の責任の重さや感情の負担を誰にも話せない」
            という相談を受けることがあります。
          </p>

          <p>
            人を支える仕事は大きな意味がある一方で、
            知らないうちに心の疲れを抱え込んでしまうこともあります。
          </p>

          <p>
            この相談室では、支援職の方が安心して
            気持ちを整理できる場所を大切にしています。
          </p>
        </section>

        {/* 専門領域 */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 font-medium">
            主な相談テーマ
          </h2>

          <ul className="space-y-3 text-lg">
            <li>・支援職の燃え尽き（バーンアウト）</li>
            <li>・感情労働による疲労</li>
            <li>・支援者の境界線（バウンダリー）</li>
            <li>・二次受傷（支援者のトラウマ）</li>
            <li>・対人援助職のストレス</li>
          </ul>
        </section>

        {/* カウンセリング姿勢 */}
        <section className="mb-12 space-y-5 text-lg leading-relaxed">
          <h2 className="text-2xl mb-4 font-medium">
            カウンセリングで大切にしていること
          </h2>

          <p>
            カウンセリングでは、問題を急いで解決するよりも、
            今感じていることを丁寧に整理することを大切にしています。
          </p>

          <p>
            「うまく話せないかもしれない」という状態でも大丈夫です。
            安心して話せる時間を一緒に作っていきます。
          </p>
        </section>

        {/* 経歴 */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 font-medium">
            経歴
          </h2>

          <ul className="space-y-3 text-lg">
            <li>・福祉分野での相談支援</li>
            <li>・対人援助職のメンタルヘルス相談</li>
            <li>・心理相談の実務経験</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <p className="text-lg mb-8">
            一人で抱え込まず、気持ちを整理する場として
            カウンセリングを利用することもできます。
          </p>

          <a
            href="/#contact"
            className="inline-block bg-[#5a5a40] text-white px-8 py-4 rounded-full hover:bg-[#4a4a30] transition"
          >
            相談について問い合わせる
          </a>
        </section>

      </main>
    </div>
  );
}

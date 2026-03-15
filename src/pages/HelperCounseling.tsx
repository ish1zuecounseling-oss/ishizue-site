import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RelatedArticles from "../components/RelatedArticles"
import AudioPlayer from "../components/AudioPlayer"

export default function HelperCounseling() {
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
          <h1 className="text-4xl font-light mb-4">
            支援職のためのカウンセリング
          </h1>
          <AudioPlayer src="/audio/Helper-Counseling" />

          <p className="text-lg text-[#6a6a5a]">
            支援する側が立ち止まれる場所として
          </p>
        </motion.div>

        {/* Problem */}
        <section className="mb-14 space-y-6 text-lg leading-relaxed">
          <p>
            福祉・医療・教育などの対人援助の現場では、
            利用者やクライアントの人生に深く関わることが多くあります。
          </p>

          <p>
            そのため責任の重さや感情労働の負担を抱えながら、
            日々仕事を続けている方も少なくありません。
          </p>

          <p>
            例えばこのような悩みはありませんか。
          </p>

          <ul className="space-y-2">
            <li>・仕事の責任が重く感じる</li>
            <li>・利用者のことが頭から離れない</li>
            <li>・仕事の疲れが抜けない</li>
            <li>・誰にも弱音を吐けない</li>
            <li>・支援を続けることに不安がある</li>
          </ul>
        </section>

        {/* Structure */}
        <section className="mb-14 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-medium">
            支援者の疲労は「構造」から生まれることがあります
          </h2>

          <p>
            支援職の疲労は、本人の努力不足ではなく
            構造上の問題から生まれることも多くあります。
          </p>

          <p>
            例えば
          </p>

          <ul className="space-y-2">
            <li>・役割の抱え込み</li>
            <li>・責任の過剰化</li>
            <li>・期待とのズレ</li>
            <li>・感情労働の蓄積</li>
          </ul>

          <p>
            カウンセリングでは、
            これらの状況を整理しながら
            消耗の少ない状態に戻ることを目指します。
          </p>
        </section>

        {/* Counseling */}
        <section className="mb-14 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-medium">
            カウンセリングで行うこと
          </h2>

          <ul className="space-y-3">
            <li>・今の状況の整理</li>
            <li>・思考や役割の構造の確認</li>
            <li>・消耗を減らす視点の整理</li>
          </ul>

          <p>
            強くなることを目指すのではなく、
            持続可能な状態に戻すことを大切にしています。
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <p className="text-lg mb-8">
            一人で抱え込まず、
            気持ちを整理する場として利用することもできます。
          </p>

          <Link
            to="/#contact"
            className="inline-block bg-[#5a5a40] text-white px-8 py-4 rounded-full hover:bg-[#4a4a30] transition"
          >
            相談について問い合わせる
          </Link>
        </section>

        <RelatedArticles />
      </main>
    </div>
  );
}

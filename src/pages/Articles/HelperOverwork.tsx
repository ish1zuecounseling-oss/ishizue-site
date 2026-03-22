import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RelatedArticles from "../../components/RelatedArticles";
import AudioPlayer from "../../components/AudioPlayer";
import ArticleSchema from "../../components/ArticleSchema";
import Breadcrumbs from "../../components/Breadcrumbs";
import RandomArticles from "../../components/RandomArticles";

export default function HelperOverwork() {
  return (

    <div className="bg-[#fdfcfb] min-h-screen font-serif text-[#3c3c3c]">

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 py-20"
        itemScope
        itemType="https://schema.org/Article"
      >
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Breadcrumbs title="支援職が仕事を抱え込みやすい理由とは" />

          <h1 className="text-4xl font-light mb-4" itemProp="headline">
            支援職が仕事を抱え込みやすい理由とは
          </h1>

          <AudioPlayer src="/audio/helper-overwork.mp3" />

          <p className="text-lg text-[#6a6a5a]" itemProp="description">
            感情労働・共感疲労・境界線から考える
          </p>
        </motion.div>

        {/* Conclusion */}
        <section className="mb-16 space-y-6 text-lg leading-relaxed">
          <p>
            支援職が仕事を抱え込みやすい理由とは、
            「人を助けたいという強い動機」と「感情労働や共感疲労」、
            そして「境界線の曖昧さ」が重なることで起こる現象です。
          </p>

          <p>
            対人援助職では、利用者の人生に深く関わることが多く、
            「自分が何とかしなければ」という意識が強まりやすくなります。
          </p>
        </section>

        {/* Concept */}
        <section className="mb-16 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-medium">
            支援職が抱え込みやすくなる背景
          </h2>

          <p>
            「抱え込み」とは、本来分担できる仕事や感情的な負担を
            一人で引き受け続けてしまう状態を指します。
          </p>

          <p>
            支援職には以下のような特徴があります。
          </p>

          <ul className="space-y-2">
            <li>・利用者の困難に日常的に触れる</li>
            <li>・助けたいという思いが強い</li>
            <li>・成果や終わりが見えにくい</li>
          </ul>

          <p>
            こうした環境は、責任感を高める一方で
            「どこまでが自分の役割か」を曖昧にしやすくします。
          </p>
        </section>

        {/* Example */}
        <section className="mb-16 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-medium">
            現場で起こりやすいこと
          </h2>

          <p>
            支援の現場では、次のような状態が起こりやすくなります。
          </p>

          <ul className="space-y-2">
            <li>・利用者の問題を自分のことのように感じる</li>
            <li>・断ることに罪悪感がある</li>
            <li>・本来の業務以上に対応してしまう</li>
            <li>・仕事が終わっても頭から離れない</li>
            <li>・誰にも頼らず一人で抱えてしまう</li>
          </ul>

          <p>
            こうした状態が続くと、
            疲労や消耗に気づきにくくなります。
          </p>
        </section>

        {/* Structure */}
        <section className="mb-16 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-medium">
            抱え込みを生む心理的な構造
          </h2>

          <p>
            支援職の抱え込みは、個人の問題というよりも
            心理的な構造から生まれることが多いと考えられます。
          </p>

          <h3 className="text-xl mt-6">■ 感情労働</h3>
          <p>
            自分の感情を調整しながら関わる仕事であり、
            見えにくい疲労が蓄積しやすくなります。
          </p>

          <h3 className="text-xl mt-6">■ 共感疲労（二次受傷）</h3>
          <p>
            他者の苦しみに共感し続けることで、
            自分自身も消耗してしまう状態です。
          </p>

          <h3 className="text-xl mt-6">■ 境界線（バウンダリー）</h3>
          <p>
            自分と他者の責任を分ける線のことで、
            これが曖昧になると抱え込みが起こりやすくなります。
          </p>
        </section>

        {/* Summary */}
        <section className="mb-14 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-medium">
            まとめ
          </h2>

          <p>
            支援職が仕事を抱え込みやすい背景には、
            次のような要因があります。
          </p>

          <ul className="space-y-2">
            <li>・強い責任感や援助動機</li>
            <li>・感情労働による疲労</li>
            <li>・共感疲労による巻き込まれ</li>
            <li>・境界線の曖昧さ</li>
          </ul>

          <p>
            これらは努力不足ではなく、
            支援職の構造から自然に生じるものです。
          </p>

          <p>
            だからこそ、
            「どこまで関わるか」を見直すことが、
            長く支援を続けるために重要になります。
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <p className="text-lg mb-8">
            一人で抱え込まず、
            状況を整理することから始めることもできます。
          </p>

          <Link
            to="/#contact"
            className="inline-block bg-[#5a5a40] text-white px-8 py-4 rounded-full hover:bg-[#4a4a30] transition"
          >
            相談について問い合わせる
          </Link>
        </section>

        <RandomArticles currentPath="/articles/helper-overwork" count={2} />

      </motion.main>
    </div>
  );
}

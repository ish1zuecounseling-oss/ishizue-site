import { motion } from "motion/react";
import { Link } from "react-router-dom";
import RelatedArticles from "../../components/RelatedArticles";
import AudioPlayer from "../../components/AudioPlayer";
import ArticleSchema from "../../components/ArticleSchema";
import Breadcrumbs from "../../components/Breadcrumbs";
import RandomArticles from "../../components/RandomArticles";

export default function HelperStressCoping() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6 py-24 text-stone-700 leading-loose"
        itemScope
        itemType="https://schema.org/Article"
      >
        <header className="mb-16">
          <meta itemProp="headline" content="支援職のストレス対処とは｜共感疲労・境界線・感情労働から理解するケアの方法" />
          <meta itemProp="datePublished" content="2026-03-22" />

          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="松本 龍児" />
          </div>

          <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="いしずえカウンセリング" />
          </div>

          <div className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-medium">
            Workplace Psychology
          </div>

          <Breadcrumbs title="支援職のストレス対処とは" />

          <h1 className="text-3xl md:text-4xl font-medium mb-8 text-stone-900 tracking-tight">
            支援職のストレス対処とは｜共感疲労・境界線・感情労働から理解するケアの方法
          </h1>

          <AudioPlayer src="/audio/helper-stress.mp3" />

          <p className="text-stone-600 text-lg">
            支援職のストレス対処とは、共感疲労・感情労働・境界線といった心理的負担の仕組みを理解し、
            適切に距離を取りながら関わる力のことを指します。
            対人援助職のストレスは個人の問題ではなく、構造的に生じやすいものです。
          </p>

          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>

        <section className="space-y-6">

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            支援職のストレスとは何か
          </h2>

          <p>
            支援職のストレスとは、利用者との関わりの中で生じる心理的負担の蓄積を指します。
            特に以下の3つの要素が関係します。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
            <p>・共感疲労（二次受傷）</p>
            <p>・感情労働</p>
            <p>・境界線（バウンダリー）の曖昧さ</p>
          </div>

          <p className="mb-10">
            これらは対人援助職において自然に生じるものであり、
            特別な問題ではなく「起こりやすい構造」として理解することが重要です。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            なぜストレスが生じるのか
          </h2>

          <p>
            支援職では、人の感情や困難に深く関わることが求められます。
            そのため、次のような状況が重なりやすくなります。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
            <p>・他者の感情に継続的に触れる</p>
            <p>・成果が見えにくい</p>
            <p>・責任感が強くなりやすい</p>
            <p>・感情をコントロールし続ける必要がある</p>
          </div>

          <p className="mb-10">
            こうした要素が積み重なることで、気づかないうちに疲労が蓄積していきます。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            現場で起こりやすいこと
          </h2>

          <p>
            支援現場では、以下のような状態が見られることがあります。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
            <p>・利用者の問題を自分のことのように抱える</p>
            <p>・断ることに罪悪感を感じる</p>
            <p>・仕事が終わっても考え続けてしまう</p>
            <p>・「自分が何とかしなければ」と感じる</p>
          </div>

          <p className="mb-10">
            こうした状態は、多くの支援職が経験するものであり、
            個人の資質ではなく職業特性による影響と考えられます。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            心理的な背景（構造理解）
          </h2>

          <p>
            支援職のストレスは、いくつかの心理的要因が重なって生じます。
          </p>

          <h3 className="text-xl font-medium mt-10 mb-4 text-stone-900">
            感情労働
          </h3>
          <p>
            本来の感情とは別に、専門職として求められる感情を表現し続けることです。
            このズレが蓄積すると消耗感につながります。
          </p>

          <h3 className="text-xl font-medium mt-10 mb-4 text-stone-900">
            共感疲労（二次受傷）
          </h3>
          <p>
            他者のつらさに共感し続けることで、自分自身にもストレス反応が起こる状態です。
            共感性の高さと関係しています。
          </p>

          <h3 className="text-xl font-medium mt-10 mb-4 text-stone-900">
            境界線（バウンダリー）
          </h3>
          <p>
            自分と相手の責任や感情を区別するための心理的な線引きです。
            これが曖昧になると、過剰に抱え込みやすくなります。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            まとめ
          </h2>

          <p>
            支援職のストレスには、次のような要因が関係しています。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
            <p>・共感疲労（二次受傷）</p>
            <p>・感情労働</p>
            <p>・境界線（バウンダリー）の曖昧さ</p>
          </div>

          <p className="mb-10">
            これらを理解することで、「なぜ疲れるのか」が整理されます。
            支援職においては、自分自身もケアの対象として捉える視点が、
            長く支援を続けるための重要な要素となります。
          </p>

        </section>

        <div className="mt-20">
          <RandomArticles currentPath="/articles/helper-stress-coping" count={2} />
        </div>

      </motion.main>
    </div>
  );
}

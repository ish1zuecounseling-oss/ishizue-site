import { motion } from "motion/react";
import RelatedArticles from "../../components/RelatedArticles";
import AudioPlayer from "../../components/AudioPlayer";
import Breadcrumbs from "../../components/Breadcrumbs";
import RandomArticles from "../../components/RandomArticles";

export default function HelperTrauma() {
  return (
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-6 py-24 text-stone-700 leading-loose"
        >
<header className="mb-16">
<Breadcrumbs title="二次受傷（共感疲労）とは" />
<h1 className="text-3xl md:text-4xl font-medium mb-8 text-stone-900 tracking-tight">
  二次受傷（共感疲労）とは
</h1>
  <AudioPlayer src="/audio/helper-trauma.mp3" />
<p className="text-stone-600 text-lg">
  支援職が抱えやすい心理的負荷として知られる「二次受傷」について整理します。
</p>

          <p className="text-stone-600 text-lg">
            支援職では、誰かの苦しみや困難に日常的に向き合います。
            その過程で、本人が直接体験していなくても心理的な負荷を受けることがあります。
            こうした現象は「二次受傷（Secondary Trauma）」と呼ばれます。
          </p>

          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>

        <section className="space-y-6">

          <p>
            二次受傷とは、他者のトラウマ体験や苦しみに継続的に触れることで、
            支援者自身が心理的な影響を受ける現象を指します。
          </p>

          <p>
            医療・福祉・心理・教育などの対人援助職では、
            利用者の深い苦しみや困難に日常的に向き合うため、
            この影響を受ける可能性が高いと言われています。
          </p>

          <p className="mb-10">
            本人は「仕事だから」と思っていても、
            心の中では負荷が蓄積していることがあります。
          </p>


          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            二次受傷のサイン
          </h2>

          <p>
            二次受傷は急に現れるわけではなく、
            徐々に影響が積み重なることがあります。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
            <p>・仕事の内容が頭から離れない</p>
            <p>・利用者の話を思い出して眠れない</p>
            <p>・感情的に疲れやすくなる</p>
            <p>・共感すること自体が負担に感じる</p>
          </div>

          <p className="mb-10">
            こうした状態が続くと、
            知らないうちに心身の疲労が蓄積していくことがあります。
          </p>


          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            共感疲労との関係
          </h2>

          <p>
            二次受傷と似た概念に「共感疲労（Compassion Fatigue）」があります。
          </p>

          <p>
            共感疲労とは、他者に共感し続けることによって
            感情的エネルギーが消耗してしまう状態を指します。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10">
            <p className="font-medium text-stone-900 mb-4">
              支援職では次のような構造が重なりやすいと言われています。
            </p>

            <ul className="space-y-2">
              <li>・強い感情に継続的に触れる</li>
              <li>・責任感が強い</li>
              <li>・相談できる環境が少ない</li>
              <li>・役割が増え続ける</li>
            </ul>
          </div>

          <p className="mb-10">
            こうした状況では、
            支援すること自体が心理的な負荷になってしまうこともあります。
          </p>


          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            支援を続けるための整理
          </h2>

          <p>
            二次受傷は、個人の弱さによって起こるものではありません。
          </p>

          <p>
            多くの場合、支援の構造そのものに負荷が含まれています。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10">
            <p className="font-medium mb-4 text-stone-900">
              例えば次のような整理が役立つことがあります。
            </p>

            <ul className="space-y-2">
              <li>・役割の境界線を見直す</li>
              <li>・責任の範囲を整理する</li>
              <li>・心理的距離の取り方を言語化する</li>
            </ul>
          </div>

          <p className="mb-10">
            支援を続けるためには、
            支援する側の土台を整えることも重要になります。
          </p>

        </section>

          {/* 🔥 ランダムおすすめ（文言強化済み） */}
          <RandomArticles currentPath="/articles/emotional-labor" count={2} />

        </motion.main>
      </div>
  );
}

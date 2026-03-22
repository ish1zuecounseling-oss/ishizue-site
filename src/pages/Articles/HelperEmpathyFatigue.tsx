import { motion } from "motion/react";
import AudioPlayer from "../../components/AudioPlayer";
import RelatedArticles from "../../components/RelatedArticles";
import ArticleSchema from "../../components/ArticleSchema";
import Breadcrumbs from "../../components/Breadcrumbs";
import RandomArticles from "../../components/RandomArticles";

export default function HelperFatigue() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
<motion.main
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-3xl mx-auto px-6 py-24 text-stone-700 leading-loose"
  itemScope
  itemType="https://schema.org/Article"
>

        <header className="mb-16">
          <div className="text-xs uppercase tracking-widest text-stone-400 mb-4">
            Workplace Psychology
          </div>
<Breadcrumbs title="支援職が疲れる理由とは" />
<h1
  className="text-3xl md:text-4xl font-medium mb-8 text-stone-900"
  itemProp="headline"
>
  支援職が疲れる理由とは
</h1>
          <AudioPlayer src="/audio/helper-fatigue.mp3" />

<p className="text-stone-600 text-lg" itemProp="description">
  支援職が疲れる理由とは、他者の問題や感情に長期間向き合うことによって、
  心理的・感情的な負荷が積み重なることにあります。
  対人援助の仕事には、感情労働や共感疲労など特有の負担が存在します。
</p>

          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>

        <section className="space-y-6">

          <h2 className="text-2xl font-medium text-stone-900">
            支援職の疲労とは
          </h2>

          <p>
            福祉職や相談員、カウンセラーなどの対人援助職は、
            人の困難や苦しさに関わる仕事です。
          </p>

          <p>
            そのため、身体的な忙しさだけではなく、
            心理的な負担が蓄積しやすい特徴があります。
          </p>

          <h2 className="text-2xl font-medium mt-16 text-stone-900">
            現場で起こりやすいこと
          </h2>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-2">

            <p>・利用者の問題を自分のことのように感じてしまう</p>
            <p>・断ることに罪悪感を感じる</p>
            <p>・仕事が終わっても気持ちが切り替わらない</p>
            <p>・責任を抱え込みやすい</p>

          </div>

          <h2 className="text-2xl font-medium mt-16 text-stone-900">
            心理的な背景
          </h2>

          <p>
            支援職の疲労には、対人援助の構造が関係しています。
          </p>

          <p>
            たとえば、感情を調整しながら働く「感情労働」、
            利用者の苦しさに共感することで生じる「共感疲労」、
            そして支援者と利用者の境界線（バウンダリー）の問題などです。
          </p>

          <h2 className="text-2xl font-medium mt-16 text-stone-900">
            まとめ
          </h2>

          <p>
            支援職が疲れる背景には、
            対人援助という仕事に伴う心理的負荷があります。
          </p>

          <p>
            感情労働、共感疲労、境界線の問題などの構造を理解することは、
            支援を長く続けるための重要な視点になります。
          </p>

        </section>
          {/* 🔥 ランダムおすすめ（文言強化済み） */}
          <RandomArticles currentPath="/articles/emotional-labor" count={2} />

</motion.main>
</div>
);
}

import { motion } from "motion/react";
import AudioPlayer from "../../components/AudioPlayer";
import RelatedArticles from "../../components/RelatedArticles";
import ArticleSchema from "../../components/ArticleSchema";
import Breadcrumbs from "../../components/Breadcrumbs";
import RandomArticles from "../../components/RandomArticles";

export default function HelperRestImportance() {
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

          <Breadcrumbs title="支援職が休むことの重要性とは" />

          <h1
            className="text-3xl md:text-4xl font-medium mb-8 text-stone-900"
            itemProp="headline"
          >
            支援職が休むことの重要性とは
          </h1>

          <AudioPlayer src="/audio/helper-rest-importance.mp3" />

          <p className="text-stone-600 text-lg" itemProp="description">
            支援職が休むことの重要性とは、心身の回復を通じて安定した支援を継続するために不可欠な要素です。
            対人援助の現場では、感情労働や共感疲労による負荷が蓄積しやすく、
            意図的に休むことが支援の質を守ることにつながります。
          </p>

          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>

        <section className="space-y-6">

          <h2 className="text-2xl font-medium text-stone-900">
            支援職が休むことの重要性
          </h2>

          <p>
            福祉職や相談員、カウンセラーなどの対人援助職にとって、
            休むことは単なる休息ではなく、支援を継続するための重要なスキルの一つです。
          </p>

          <p>
            人の問題や感情に関わり続ける仕事だからこそ、
            心理的なエネルギーを回復する時間が必要になります。
          </p>

          <h2 className="text-2xl font-medium mt-16 text-stone-900">
            現場で起こりやすいこと
          </h2>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <p>・体調が悪くても無理に出勤してしまう</p>
            <p>・休みの日でも利用者のことが頭から離れない</p>
            <p>・「自分がいないと回らない」と感じる</p>
            <p>・休むことに罪悪感を抱く</p>
          </div>

          <h2 className="text-2xl font-medium mt-16 text-stone-900">
            心理的な背景
          </h2>

          <p>
            支援職が休みにくくなる背景には、対人援助特有の心理的構造があります。
          </p>

          <p>
            たとえば、感情を調整しながら働く「感情労働」、
            他者の苦しみに共感することで生じる「共感疲労」、
            そして支援者と利用者の境界線（バウンダリー）の曖昧さなどです。
          </p>

          <p>
            休むことは、これらによって消耗したエネルギーを回復し、
            支援者としての安定性を取り戻すための重要なプロセスでもあります。
          </p>

          <h2 className="text-2xl font-medium mt-16 text-stone-900">
            まとめ
          </h2>

          <p>
            支援職が休むことの重要性には、次のような要因が関係しています。
          </p>

          <p>
            ・感情労働による消耗<br />
            ・共感疲労の蓄積<br />
            ・境界線の揺らぎ
          </p>

          <p>
            休むことは支援を止めることではなく、
            支援を続けるための準備とも言えます。
          </p>

        </section>

        {/* 関連記事 */}
        <RelatedArticles
          currentPath="/articles/helper-rest-importance"
          category="support"
        />

        {/* ランダム記事 */}
        <RandomArticles
          currentPath="/articles/helper-rest-importance"
          count={2}
        />

        {/* 構造化データ */}
        <ArticleSchema
          title="支援職が休むことの重要性とは"
          description="支援職が休むことの重要性について、感情労働・共感疲労・境界線の観点からわかりやすく解説します。"
          url="https://ishizue-site.vercel.app/articles/helper-rest-importance"
        />

      </motion.main>
    </div>
  );
}

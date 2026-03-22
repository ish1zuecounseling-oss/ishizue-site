import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import RelatedArticles from "../../components/RelatedArticles"
import AudioPlayer from "../../components/AudioPlayer"
import ArticleSchema from "../../components/ArticleSchema"
import Breadcrumbs from "../../components/Breadcrumbs"
import RandomArticles from "../../components/RandomArticles"
export default function HelperBurnoutSigns() {
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
          {/* SEO */}
          <meta
            itemProp="headline"
            content="バーンアウトの前兆（サイン）とは｜支援職が気づきたい心と体の変化"
          />
          <meta itemProp="datePublished" content="2026-03-21" />
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="松本 龍児" />
          </div>
          <div
            itemProp="publisher"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="name" content="いしずえカウンセリング" />
          </div>
          <div className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-medium">
            Workplace Psychology
          </div>
          <Breadcrumbs title="バーンアウトの前兆（サイン）とは" />
          <h1 className="text-3xl md:text-4xl font-medium mb-8 text-stone-900 tracking-tight">
            バーンアウトの前兆（サイン）とは｜支援職が気づきたい心と体の変化
          </h1>
          <AudioPlayer src="/audio/helper-burnout-signs.mp3" />
          <p className="text-stone-600 text-lg">
            バーンアウトの前兆（サイン）とは、
            心身のエネルギーが徐々に消耗していく過程で現れる小さな変化の積み重ねです。
            支援職では気づきにくい形で進行することが多く、早めに違和感を捉えることが重要になります。
          </p>
          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>
        <section className="space-y-6">
          <p>
            バーンアウトは突然起こるものではなく、
            徐々に進行していくプロセスの中で形成されます。
          </p>
          <p>
            特に対人援助職では、
            日常的に他者の問題や感情に関わるため、
            自分自身の疲労に気づきにくい傾向があります。
          </p>
          <p className="mb-10">
            そのため「少し疲れているかもしれない」という段階で立ち止まることが、
            長く支援を続けるための重要なポイントになります。
          </p>
          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            バーンアウトの前兆として現れやすいサイン
          </h2>
          <p>現場では、次のような変化が見られることがあります。</p>
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
            <p>利用者の話に対して感情が動きにくくなる</p>
            <p>仕事が終わっても頭の中でケースが離れない</p>
            <p>断ることに強い罪悪感を感じる</p>
            <p>小さなミスに強く落ち込む</p>
            <p>朝起きること自体が負担に感じる</p>
            <p>やりがいを感じにくくなる</p>
          </div>
          <p className="mb-10">
            これらは一つひとつは大きな問題に見えないかもしれませんが、
            積み重なることで大きな消耗へとつながります。
          </p>
          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            なぜ気づきにくいのか
          </h2>
          <p>
            支援職は「相手を優先する」ことが求められる場面が多く、
            自分の状態を後回しにしやすい傾向があります。
          </p>
          <p>
            また責任感の強さや使命感があるほど、
            「まだ大丈夫」と無理を続けてしまうことも少なくありません。
          </p>
          <p className="mb-10">
            その結果、気づいたときには
            すでに大きく消耗しているという状況が起こりやすくなります。
          </p>
          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            心理的な背景（構造）
          </h2>
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-4">
            <div>
              <p className="font-medium text-stone-900">感情労働</p>
              <p>
                感情を調整しながら関わることで、
                内面とのズレが蓄積しやすくなります。
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">共感疲労（二次受傷）</p>
              <p>
                他者の苦しみに触れ続けることで、
                自分自身の心理的負担も増加します。
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                境界線（バウンダリー）の曖昧さ
              </p>
              <p>
                相手の問題を自分の問題のように抱え込み、
                責任が過剰になりやすくなります。
              </p>
            </div>
          </div>
          <p className="mb-10">
            これらの要素が重なることで、
            徐々にエネルギーが消耗し、前兆として現れてきます。
          </p>
          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            小さな違和感に気づくこと
          </h2>
          <p>
            バーンアウトは「ある日突然起こるもの」ではなく、
            小さな違和感の積み重ねの結果として現れます。
          </p>
          <p>
            そのため、
            「最近少し疲れているかもしれない」といった感覚を
            無視しないことが重要になります。
          </p>
          <p className="mb-10">
            自分の状態を振り返ることは、
            支援を長く続けるための基盤とも言えるでしょう。
          </p>
        </section>
        {/* 関連記事 */}
        <div className="mt-20">
          <RelatedArticles currentPath="/articles/helper-burnout-signs" />
        </div>
        {/* ランダム記事 */}
        <div className="mt-12">
          <RandomArticles
            currentPath="/articles/helper-burnout-signs"
            count={2}
          />
        </div>
      </motion.main>
    </div>
  )
}

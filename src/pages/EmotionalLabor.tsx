/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import RelatedArticles from "../components/RelatedArticles"
import AudioPlayer from "../components/AudioPlayer"
import ArticleSchema from "../components/ArticleSchema";

export default function EmotionalLabor() {
  return (
    <ArticleSchema
  title="感情労働とは ― 支援職が消耗しやすい理由"
  description="支援職で起こりやすい感情労働と心理的消耗の構造について整理します。"
  url="https://ishizue-site-ker9.vercel.app/emotional-labor"
  date="2026-03-16"
/>
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
          <meta itemProp="headline" content="感情労働とは ― 支援職が消耗しやすい理由" />
<meta itemProp="datePublished" content="2026-03-16" />
<meta itemProp="author" content="松本 龍児" />
          <div className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-medium">
            Workplace Psychology
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-10 text-stone-900 tracking-tight">
            感情労働とは ― 支援職が消耗しやすい理由
          </h1>
          <AudioPlayer src="/audio/emotional-labor.mp3" />
          <p className="text-stone-600 mb-10 text-lg">
          支援職では、仕事の中で自分の感情をコントロールする場面が多くあります。
          こうした働き方は「感情労働」と呼ばれ、消耗の原因になることがあります。
          ここでは、支援職と感情労働の関係について整理します。
            </p>
          <div className="h-px w-24 bg-stone-300 mb-8" />
        </header>

        <section className="space-y-6">
          <p>
            感情労働とは、仕事の中で自分の感情をコントロールしながら働くことを求められる労働のことを指します。
          </p>

          <p>
            医療、福祉、教育、心理職などの対人援助職では、業務の中で「感情の管理」が日常的に求められます。
          </p>

          <p className="mb-10">
            相手の感情を受け止めながら、冷静さや専門職としての態度を維持する必要があるため、気づかないうちに心身の消耗が積み重なりやすい働き方でもあります。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            感情労働が生まれる背景
          </h2>

          <p>
            感情労働という概念は、社会学者アーリー・ホックシールドによって提唱されました。
          </p>

          <p>
            接客業やサービス業でよく語られますが、実際には支援職の方が感情労働の負荷は大きいと言われることがあります。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10">
            <p className="font-medium mb-4 text-stone-900">例えば支援職では次のような場面があります。</p>
            <ul className="space-y-3 text-stone-600">
              <li>・強い感情を抱える利用者に対応する</li>
              <li>・怒りや不安を受け止める</li>
              <li>・冷静さを保ちながら関係を維持する</li>
              <li>・個人的な感情を表に出さない</li>
            </ul>
          </div>

          <p className="mb-10">
            こうした状況では、表面的には落ち着いて対応していても、内側では強い負荷がかかり続けていることがあります。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            支援職が疲弊しやすい理由
          </h2>

          <p>
            支援職が疲弊しやすいのは、単に忙しいからではありません。
          </p>

          <p>
            感情労働に加えて、次のような構造が重なることが多いためです。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2 text-stone-600">
            <p>・責任の抱え込み</p>
            <p>・役割の過剰化</p>
            <p>・相談できる相手の少なさ</p>
            <p>・境界線の曖昧さ</p>
          </div>

          <p className="mb-10">
            このような状態が続くと、疲労感だけでなく、思考のループや自己否定感につながることもあります。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            感情労働とうまく付き合うために
          </h2>

          <p>
            感情労働そのものを完全になくすことはできません。
          </p>

          <p>
            しかし、負荷の構造を整理することで、消耗を減らすことは可能です。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10">
            <p className="font-medium mb-4 text-stone-900">例えば次のような整理です。</p>
            <ul className="space-y-3 text-stone-600">
              <li>・役割の優先順位を見直す</li>
              <li>・抱え込みすぎている責任を整理する</li>
              <li>・境界線を言語化する</li>
            </ul>
          </div>

          <p className="mb-10">
            問題は個人の弱さではなく、構造の問題であることも少なくありません。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            支援する人の土台を整える
          </h2>

          <p>
            支援職は、誰かの人生に伴走する仕事です。
          </p>

          <p>
            しかし、支援する側の土台が揺らいでしまうと、支援そのものが続けにくくなります。
          </p>

          <p className="mb-10">
            持続可能な状態を取り戻すためには、思考や役割、負荷の構造を整理する時間が必要になることがあります。
          </p>
        </section>

<RelatedArticles currentPath="/emotional-labor" />

</motion.main>
</div>
</>
);
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import RelatedArticles from "../components/RelatedArticles";
import AudioPlayer from "../components/AudioPlayer"
import ArticleSchema from "../components/ArticleSchema";

export default function HelperBoundary() {
  return (
    <>
<ArticleSchema
  title="支援職の境界線（バウンダリー）とは"
  description="支援職で重要とされる心理的境界線（バウンダリー）について整理します。"
  url="https://ishizue-site-ker9.vercel.app/articles/helper-boundary"
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
          <meta itemProp="headline" content="支援職の境界線（バウンダリー）とは" />
<meta itemProp="datePublished" content="2026-03-16" />
<div itemProp="author" itemScope itemType="https://schema.org/Person">
<meta itemProp="name" content="松本 龍児" />
</div>

<div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
<meta itemProp="name" content="いしずえカウンセリング" />
</div>
          <div className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-medium">
            Workplace Psychology
          </div>

          <h1 className="text-3xl md:text-4xl font-medium mb-8 text-stone-900 tracking-tight">
            支援職の境界線（バウンダリー）とは
          </h1>
          <AudioPlayer src="/audio/helper-boundary.mp3" />

          <p className="text-stone-600 text-lg">
            支援職では、相手に寄り添うことが重要とされます。
            しかし、寄り添うことと「抱え込むこと」は同じではありません。
            その違いを整理する概念として、心理職では「境界線（バウンダリー）」が重要になります。
          </p>

          <div className="h-px w-24 bg-stone-300 mt-8" />
        </header>

        <section className="space-y-6">

          <p>
            バウンダリーとは、自分と相手の責任や感情の範囲を区別するための
            心理的な境界線を指します。
          </p>

          <p>
            対人援助職では「相手を支えたい」という思いが強くなるほど、
            この境界線が曖昧になりやすいと言われています。
          </p>

          <p className="mb-10">
            境界線が曖昧になると、
            支援する側が必要以上の責任や感情を抱え込んでしまうことがあります。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            境界線が曖昧になると起こりやすいこと
          </h2>

          <p>
            境界線が曖昧な状態では、次のような負担が生まれやすくなります。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
            <p>・利用者の問題を自分の責任のように感じてしまう</p>
            <p>・断ることに強い罪悪感を感じる</p>
            <p>・仕事が終わっても気持ちが切り替わらない</p>
            <p>・役割が増え続けてしまう</p>
          </div>

          <p className="mb-10">
            このような状態が続くと、
            心理的な疲労が蓄積しやすくなります。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            境界線は「距離を取ること」ではない
          </h2>

          <p>
            バウンダリーという言葉から、
            「冷たく距離を取ること」を想像する人もいます。
          </p>

          <p>
            しかし実際には、境界線とは
            相手との関係を保つための整理でもあります。
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10">
            <p className="font-medium mb-4 text-stone-900">
              境界線を整理するとは、例えば次のようなことです。
            </p>

            <ul className="space-y-2">
              <li>・自分の役割の範囲を理解する</li>
              <li>・相手の課題と自分の課題を区別する</li>
              <li>・責任の境界を言語化する</li>
            </ul>
          </div>

          <p className="mb-10">
            こうした整理は、支援関係を長く続けるための
            土台にもなります。
          </p>

          <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
            支援を続けるための境界線
          </h2>

          <p>
            支援職は、誰かの困難に長期的に関わる仕事です。
          </p>

          <p>
            そのためには、
            支援する側が消耗しすぎない状態を保つことも重要になります。
          </p>

          <p className="mb-10">
            境界線を整理することは、
            支援を続けるための環境を整えることにもつながります。
          </p>

        </section>

<div className="mt-20">
  <RelatedArticles currentPath="/helper-boundary" />
</div>

</motion.main>
</div>
</>
);
}

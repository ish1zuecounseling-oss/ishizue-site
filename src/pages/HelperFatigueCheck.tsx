import { motion } from "motion/react";
import RelatedArticles from "../components/RelatedArticles";
import AudioPlayer from "../components/AudioPlayer";
import ArticleSchema from "../components/ArticleSchema";

export default function EmpathyFatigueCheck() {
  return (
    <>
      <ArticleSchema
        title="共感疲労セルフチェック｜支援職のための20項目"
        description="支援職の共感疲労を確認する20項目セルフチェック。福祉職・相談員・心理職など対人援助職の心理的疲労を整理します。"
        url="https://ishizue-site-ker9.vercel.app/helper-fatigue"
        date="2026-03-16"
      />

      <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-6 py-24 text-stone-700 leading-loose"
        >
          <header className="mb-16">
            <h1 className="text-3xl md:text-4xl font-medium mb-8 text-stone-900 tracking-tight">
              共感疲労セルフチェック
            </h1>

            <p className="text-stone-600 text-lg">
              支援職では、利用者の苦しみや困難に長く寄り添うことで、
              心理的な疲労が蓄積することがあります。
            </p>

            <AudioPlayer src="/audio/empathy-fatigue.mp3" />

            <p className="text-stone-600 text-lg">
              こうした状態は心理学では「共感疲労（Compassion Fatigue）」と呼ばれ、
              対人援助職に起こりやすい心理的負荷として知られています。
            </p>

            <div className="h-px w-24 bg-stone-300 mt-8" />
          </header>

          <section className="space-y-6">
            <p>
              福祉職・心理職・相談員などの支援職は、
              人の悩みや困難に深く関わる仕事です。
            </p>

            <p>
              そのため、本人が直接体験していなくても、
              利用者の苦しみに触れ続けることで心理的な疲労が
              蓄積することがあります。
            </p>

            <p className="mb-10">
              以下は支援職のための共感疲労セルフチェックです。
              最近の状態を振り返りながら確認してみてください。
            </p>

            <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
              共感疲労セルフチェック（20項目）
            </h2>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-2">
              <p>・利用者の問題が仕事後も頭から離れない</p>
              <p>・帰宅しても気持ちが仕事モードのままである</p>
              <p>・利用者のことを考えて眠れないことがある</p>
              <p>・仕事の疲れが以前より抜けにくくなった</p>
              <p>・利用者のつらい話を聞くと気持ちが重くなる</p>
              <p>・「自分が何とかしなければ」と感じることが多い</p>
              <p>・支援がうまくいかないと無力感を感じる</p>
              <p>・利用者の問題を自分の責任のように感じる</p>
              <p>・断ることに罪悪感を感じる</p>
              <p>・仕事のことを家族や友人に話すことが増えた</p>
              <p>・以前よりイライラしやすくなった</p>
              <p>・小さなことで疲れを感じやすい</p>
              <p>・利用者の問題に感情的に引き込まれる</p>
              <p>・ニュースや出来事を利用者と重ねてしまう</p>
              <p>・人の悩みを聞くことがしんどいと感じる</p>
              <p>・仕事へのモチベーションが下がってきた</p>
              <p>・自分の感情が麻痺しているように感じる</p>
              <p>・以前より共感することが難しくなった</p>
              <p>・休んでも疲れが回復しにくい</p>
              <p>・支援の仕事を続けられないかもしれないと感じる</p>
            </div>

            <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
              チェック結果の目安
            </h2>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10 space-y-4">
              <p>
                <strong>0〜5項目</strong><br />
                共感疲労の可能性は比較的低い状態です。
              </p>

              <p>
                <strong>6〜10項目</strong><br />
                心理的疲労が蓄積している可能性があります。
              </p>

              <p>
                <strong>11項目以上</strong><br />
                共感疲労が強くなっている可能性があります。
              </p>
            </div>

            <p className="mb-10">
              このチェックは診断ではなく、
              自分の状態に気づくための目安として考えてください。
            </p>

            <h2 className="text-2xl font-medium mt-16 mb-6 text-stone-900">
              支援職に起こる心理的背景
            </h2>

            <p>
              支援職の疲労には、いくつかの心理的要因が関係しています。
            </p>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm my-10">
              <p className="font-medium text-stone-900 mb-4">
                支援職では次のような構造が重なりやすいと言われています。
              </p>

              <ul className="space-y-2">
                <li>・感情労働による心理的消耗</li>
                <li>・共感疲労（二次受傷）</li>
                <li>・支援関係の境界線の難しさ</li>
              </ul>
            </div>

            <p className="mb-10">
              支援の仕事は人の人生に深く関わる大切な仕事です。
              その一方で、支援者自身の心にも負担がかかりやすい特徴があります。
            </p>

            <p className="mb-10">
              支援を続けるためには、利用者のケアだけでなく、
              支援する側の心を守る視点も重要になります。
            </p>
          </section>

          <div className="mt-20">
            <RelatedArticles currentPath="/helper-fatigue" />
          </div>
        </motion.main>
      </div>
    </>
  );
}

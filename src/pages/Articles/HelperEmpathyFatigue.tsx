import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta, { LineCtaSmall } from "../../components/LineCta"

export default function HelperEmpathyFatigue() {
  return (
    <ArticleLayout
      title="共感疲労とは何か｜なぜ優しい人ほど消耗するのか【支援職向け】"
      description="共感疲労とは、他者の苦しみに共感し続けることで生じる心理的・感情的・身体的な消耗状態です。なぜ支援職に起きやすいのか、感情労働・二次受傷との違いを含めて解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-empathy-fatigue"
      date="2026-03-22"
      audio="/audio/helper-fatigue.mp3"
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自分が弱いから疲れるのかも」と思っている支援職の方へ。それは弱さではなく、構造の問題です。
      </p>

      <p>
        支援職が消耗するのは、意志が弱いからでも、向いていないからでもありません。
        <strong>他者の苦しみに共感し続けるという仕事の構造</strong>が、消耗を生み出しています。
      </p>
      <p>
        この記事では、共感疲労が「なぜ起きるのか」「なぜ優しい人ほど消耗するのか」を整理します。
      </p>

      <h2>まずチェック：今の状態を確認する</h2>
      <ul className="space-y-1">
        <li>・仕事後も利用者のことが頭から離れない</li>
        <li>・以前より感情が動きにくくなった、または過敏になった</li>
        <li>・休んでも疲れが回復しない</li>
        <li>・「自分のせいだ」という感覚がずっとある</li>
      </ul>
      <p>→ 2つ以上当てはまる場合、共感疲労が進んでいる可能性があります。</p>

      <LineCtaSmall />

      <p className="text-sm text-stone-500">
        詳しく確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <h2>共感疲労とは何か</h2>
      <p>
        共感疲労（Compassion Fatigue）とは、支援者が他者の苦しみ・痛み・トラウマに
        継続的に共感することで生じる、心理的・感情的・身体的な消耗状態のことです。
      </p>
      <p>
        二次受傷（Secondary Traumatic Stress）とも呼ばれ、
        自分が直接体験したわけではなく、<strong>他者の苦しみへの共感を通じて生じる傷つき</strong>という点が特徴です。
      </p>
      <p>
        神経科学的な観点から見ると、他者の苦痛に共感するとき、
        脳内では自分が苦痛を感じているときと類似した反応が起きることがわかっています。
        つまり、共感し続けることは、ある意味で<strong>自分も苦痛を感じ続けること</strong>に近い状態です。
      </p>

      <h2>どんな状態として現れるか</h2>
      <div className="card space-y-3">
        <div>
          <p className="text-sm font-medium text-stone-800 mb-1">感情・思考の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・仕事が終わっても利用者のことが頭から離れない</li>
            <li>・感情が麻痺している、または些細なことで崩れる</li>
            <li>・以前感じていたやりがいが薄れてきた</li>
            <li>・「また何かあったら」という不安が続く</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-stone-800 mb-1">身体・行動の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・休んでも疲れが回復しない</li>
            <li>・睡眠障害・頭痛・胃腸の不調</li>
            <li>・仕事を休むことへの強い罪悪感</li>
            <li>・利用者への関心・共感が低下してきた</li>
          </ul>
        </div>
      </div>

      <h2>なぜ「優しい人」ほど消耗するのか</h2>
      <p>
        共感疲労が深刻になりやすい人には、共通したパターンがあります。
        共感疲労が起きる背景の構造については、<Link to="/articles/compassion-fatigue-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">原因の記事</Link>で詳しく整理しています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「相手のために」が強い人ほどなりやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の苦しみに真剣に向き合い、「自分が何とかしなければ」と感じるほど、
          相手の感情を自分の中に引き受けやすくなります。
          共感する力が強いほど、消耗も深くなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「弱音を言えない」という規範</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者が弱音を言うべきではない」という職場文化や内在化された規範が、
          消耗のサインに気づくことを妨げます。
          「この程度で相談するのは甘え」という感覚が、消耗をさらに深めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">やりがいが消耗を隠す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「利用者の役に立てた」という充足感が、疲れの自覚を遅らせます。
          「やりがいがあるから大丈夫」と思っているうちに、
          気づいたときには深く消耗しているというパターンが多い。
        </p>
      </div>

      <h2>感情労働・バーンアウト・二次受傷との違い</h2>
      <div className="card">
        <div className="space-y-4 text-sm">
          {[
            { term: "感情労働", desc: "感情を「仕事の道具」として使い続けること。笑顔を保ちながら内側では別の感情がある状態。消耗の土台になる。" },
            { term: "共感疲労", desc: "他者の苦しみへの共感を通じて生じる消耗。感情労働の結果として生まれやすい。「二次受傷」とも呼ばれる。" },
            { term: "バーンアウト", desc: "燃え尽き症候群。長期の消耗の末に、意欲・感情・体力が枯渇した状態。共感疲労が悪化すると移行しやすい。" },
          ].map(({ term, desc }) => (
            <div key={term} className="flex gap-3">
              <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-20 pt-0.5">{term}</span>
              <p className="text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>共感疲労は「回復できる」</h2>
      <p>
        共感疲労は、適切な対処をすれば回復できます。
        ただし「ただ休む」だけでは不十分で、
        <strong>消耗の構造を理解したうえで、自分に合ったアプローチをとること</strong>が重要です。
      </p>
      <p>
        早い段階で気づいて対処するほど、回復は早くなります。
        「まだ大丈夫」と思っているうちに整理しておくことが、
        長く支援を続けるための現実的な力になります。
      </p>

      {/* CV導線 */}
      <p className="text-sm text-stone-600 leading-relaxed mb-4 pl-4 border-l-2 border-stone-200">ここまで読んで「少し当てはまるかも」と感じた方は、一度整理してみることが回復の入口になることがあります。</p>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-2">「なぜ消耗するのか」を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          このまま一人で抱え続けると、回復ではなく「消耗に慣れてしまう」ことがあります。<br />
          消耗の構造を外から整理することで、何が起きているかが見えてきます。
          支援職として働く中での消耗を前提にした相談を行っています。
        </p>
        <a
          href="/#contact"
          className="block text-center py-2.5 rounded-xl text-sm font-medium text-white"
          style={{ background: "#7EB8A4", textDecoration: "none" }}
        >
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      {/* 内部リンク */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">共感疲労クラスター——あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ① 共感疲労チェック（20項目・3分）——今の状態を確認する
          </Link>
          <Link to="/articles/compassion-fatigue-causes" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ② 共感疲労の原因7つ——なぜ支援職がなりやすいのか
          </Link>
          <Link to="/articles/compassion-fatigue-coping" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ③ 共感疲労の対処法7つ——今日からできるケア
          </Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ④ 共感疲労からの回復方法——長期的な回復プロセス
          </Link>
          <Link to="/articles/helper-boundary" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → バウンダリー（境界線）とは——断れない支援職の対処法
          </Link>
        </div>
      </div>

    </ArticleLayout>
  )
}

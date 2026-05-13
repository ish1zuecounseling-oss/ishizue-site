import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function Article_always_adjusting_to_others() {
  return (
    <ArticleLayout
      title="人に合わせすぎてしんどいのはなぜ？仕事で消耗する人の共通点"
      description="人に合わせすぎてしんどい——それは性格ではなく、他人軸・感情労働・ワーキングモデルという構造から起きています。消耗の原因と抜け出す方向を解説します。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/always-adjusting-to-others"
      date="2026-05-13"
      tags={["boundary", "burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「また相手に合わせてしまった」「自分がどうしたいのかわからない」——人に合わせすぎてしんどいのは、意志の弱さではなく構造から起きています。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな状態はありますか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・「自分はどうしたいか」より「相手はどうしたいか」を先に考える</li>
          <li>・相手の意見に自分の意見を合わせてしまう</li>
          <li>・本当は嫌なのに「大丈夫です」と言ってしまう</li>
          <li>・人といる間ずっと緊張していて、帰宅後どっと疲れる</li>
          <li>・「自分の意見を言う」ことへの強い抵抗がある</li>
        </ul>
      </div>

      <h2>なぜこうなるのか</h2>
      <p>人に合わせすぎる状態は、「他人軸」と呼ばれる構造から来ています。自分の感覚や欲求より、相手の期待・反応を優先してしまうパターンです。これはワーキングモデルという幼少期から形成された対人前提が関係しています。</p>

      <div className="card mt-4">
        <p className="text-sm text-stone-600 leading-[1.9]">
          この状態は、<strong>感情労働</strong>という構造から説明できます。
          仕事の中で感情をコントロールし続けることで、心身の消耗が積み重なっていきます。
        </p>
        <a href="/articles/emotional-labor-what-pillar"
          className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2 block mt-2">
          → 感情労働とは？仕事で消耗する構造と回復の考え方
        </a>
      </div>

      <h2>背景にある構造</h2>
      <p className="text-sm text-stone-600 leading-[1.9]">
        消耗が続く背景には、いくつかの構造的な理由があります。
      </p>

      <div className="space-y-3 mt-4">
        <div className="card">
          <p className="text-sm font-medium text-stone-700 mb-1">
            <Link to="/articles/boundary-what" className="underline underline-offset-2">境界線（バウンダリー）の消耗</Link>
          </p>
          <p className="text-sm text-stone-600 leading-[1.9]">
            「どこまでが自分の責任か」が曖昧になり、相手の感情を抱え込みやすくなります。
          </p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-stone-700 mb-1">
            <Link to="/articles/other-axis-what" className="underline underline-offset-2">他人軸の強化</Link>
          </p>
          <p className="text-sm text-stone-600 leading-[1.9]">
            自分の感覚より相手の期待を優先するパターンが、消耗を止まらなくさせます。
          </p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-stone-700 mb-1">
            <Link to="/articles/working-model" className="underline underline-offset-2">ワーキングモデル（構造の根本）</Link>
          </p>
          <p className="text-sm text-stone-600 leading-[1.9]">
            「こう振る舞わないと受け入れてもらえない」という前提が無意識に作動しています。
          </p>
        </div>
      </div>

      <LineCtaImpostor />

      <h2>回復の方向</h2>
      <p>
        「もっと頑張らなければ」ではなく、<strong>なぜこうなっているのかを構造から理解すること</strong>が最初の一歩です。
      </p>
      <div className="card text-sm text-stone-600 leading-[1.9]">
        <p>・消耗の構造を整理する→ <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2">感情労働とは？</Link></p>
        <p>・境界線の消耗を整理する→ <Link to="/articles/boundary-what" className="underline underline-offset-2">境界線とは？</Link></p>
        <p>・他人軸の構造を整理する→ <Link to="/articles/other-axis-what" className="underline underline-offset-2">他人軸とは？</Link></p>
        <p>・状態を確認する→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2">共感疲労チェック（20項目）</Link></p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          消耗の構造を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「なぜこんなに疲れるのか」を構造から整理することで、消耗を減らす方向が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["https://www.ishizue-counseling.jp/articles/always-adjusting-to-others"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
      </div>
    </ArticleLayout>
  )
}

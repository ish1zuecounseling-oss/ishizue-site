import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function Article() {
  return (
    <ArticleLayout
      title="人に合わせすぎてしんどいのはなぜ？仕事で消耗する人の特徴"
      description="人に合わせすぎてしんどい——それは性格ではなく、他人軸・感情労働・ワーキングモデルという構造から起きています。消耗の原因と抜け出す方向を解説します。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/always-adjusting-to-others"
      date="2026-05-13"
      tags={["boundary", "burnout", "compassion"]}
    >
      {/* 冒頭フック */}
      <div className="mb-5 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.3)" }}>
        <p className="text-sm text-stone-700 leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「また相手に合わせてしまった」「自分がどうしたいのかわからない」
そう感じていませんか？
        </p>
        <p className="text-xs text-stone-500 mt-2">人に合わせすぎてしんどいのは、意志の弱さではなく構造から起きています。</p>
      </div>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな状態はありますか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・「自分はどうしたいか」より「相手はどうしたいか」を先に考える</li>
          <li>・相手の意見に自分の意見を合わせてしまう</li>
          <li>・本当は嫌なのに「大丈夫です」と言ってしまう</li>
          <li>・人といる間ずっと緊張していて、帰宅後どっと疲れる</li>
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

      {/* 中盤チェックリスト */}
      <div className="my-6 p-4 rounded-xl border border-stone-200 bg-stone-50">
        <p className="text-xs font-medium text-stone-600 mb-2">ここまで読んで、こんな感覚ありませんか？</p>
        <ul className="text-xs space-y-1.5 text-stone-600">
          <li>・「自分の意見を言う」ことへの強い抵抗がある</li>
          <li>・断った後、罪悪感が長く続く</li>
          <li>・「本当はどうしたいか」を聞かれると答えられない</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">→ 2つ以上当てはまる場合、消耗が進んでいる可能性があります。</p>
      </div>

      <h2>背景にある構造</h2>
      <div className="space-y-3">
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

      {/* LINE前振り */}
      <p className="text-sm text-stone-500 leading-relaxed mt-6 mb-2">
        この状態は、放っておくと「自分の感覚がさらにわからなくなる」ことがあります。段階ごとに整理した内容をLINEで送っています。
      </p>

      <LineCtaImpostor />

      <h2>回復の方向</h2>
      <p>
        「もっと頑張らなければ」ではなく、<strong>なぜこうなっているのかを構造から理解すること</strong>が最初の一歩です。
      </p>
      <div className="card text-sm text-stone-600 space-y-1.5">
        <p>→ <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2">感情労働とは？消耗する構造を整理する</Link></p>
        <p>→ <Link to="/articles/boundary-what" className="underline underline-offset-2">境界線とは？抱え込みの構造を整理する</Link></p>
        <p>→ <Link to="/articles/other-axis-what" className="underline underline-offset-2">他人軸とは？抜け出せない理由を整理する</Link></p>
        <p>→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2">共感疲労チェック（20項目・3分）</Link></p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          消耗の構造を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「なぜこんなに疲れるのか」を構造から整理することで、消耗を減らす方向が見えてきます。
          まだ決めなくていいです。
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

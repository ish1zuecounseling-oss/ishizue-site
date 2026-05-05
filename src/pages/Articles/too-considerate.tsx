import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function TooConsiderate() {
  return (
    <ArticleLayout
      title="人に気を遣いすぎて疲れる｜「気を遣う人」が消耗する構造と回復"
      description="「人に気を遣いすぎて疲れる」「相手の反応が気になって仕方ない」——これは繊細さではなく自己機能・他人軸・感情労働の消耗から起きています。構造と回復方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/too-considerate"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「気を遣いすぎる」のは優しさではなく、消耗の構造かもしれません。
      </p>

      <p>
        「人といると疲れる」「相手の機嫌が気になって仕方ない」「無意識に空気を読んでしまう」——
        これは繊細すぎる性格の問題ではありません。
        <strong>「気を遣いすぎて疲れる」状態には、自己機能・他人軸・感情労働という明確な構造があります。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・相手が少し不機嫌だと「自分のせいかも」と思ってしまう</li>
          <li>・複数人いる場所では常に全員の様子を確認している</li>
          <li>・「嫌われたくない」という感覚が常にある</li>
          <li>・人といた後に強い疲労感・消耗感がある</li>
          <li>・一人になってやっと「ほっとする」感覚がある</li>
        </ul>
      </div>

      <h2>「気を遣いすぎる」が起きる仕組み</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 他者感情の常時モニタリング</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「相手が今どう感じているか」「場の空気はどうか」を常にアンテナを張って確認し続けています。
          これは脳にとって高コストな作業であり、<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>の主な原因になります。
          このアンテナは仕事が終わっても自動的にはオフになりません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「嫌われることへの恐れ」が動機になっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「気を遣う」ことの動機が「相手を大切にしたい」ではなく「嫌われたくない」になっているとき、
          それは<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>・<Link to="/articles/anxious-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">見捨てられ不安</Link>から来ています。
          自分のニーズより他者の評価を優先し続けることで消耗します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情の抑圧が続く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「本当は嫌だけど」「本当は疲れているけど」という感情を抑えて「感じよくいること」を続けると、
          <Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>の消耗が深まります。
          自分の感情がわからなくなることもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 境界線が薄い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「どこまでが自分の責任か」「相手の感情は相手のもの」という<Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線</Link>が薄いと、
          相手の感情・問題が自分に流れ込んできます。
          「一人になってほっとする」のは、一人のときだけ境界線が機能するからです。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        自己機能の状態を確認→ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link>
      </p>

      <LineCtaSmall />

      <h2>「気を遣いすぎる」から回復するために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「相手の感情は相手のもの」を練習する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手が不機嫌でも「自分のせいではないかもしれない」と考える習慣が、常時モニタリングの消耗を減らします。
          「相手の感情の責任を自分が負う必要はない」という境界線の感覚を少しずつ育てます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「アンテナをオフにする時間」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一人でいる時間・自然の中の時間・スマートフォンを置く時間など、
          「他者の感情を読まなくていい環境」を意識的に作ることが回復を助けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「気を遣うことの動機」を確認する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「相手を大切にしたいから」と「嫌われたくないから」は動機が違います。
          「嫌われたくない」が主な動機のとき、<Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>・<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>が関与している可能性があります。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「人といると疲れる」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">気を遣いすぎる構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜこんなに人に気を遣ってしまうのか」——消耗の構造を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/too-considerate"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

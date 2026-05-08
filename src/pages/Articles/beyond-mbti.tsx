import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function BeyondMbti() {
  return (
    <ArticleLayout
      title="MBTIを超えた自己理解｜「タイプ名」の先にある消耗パターンと回復方法"
      description="「INFJです」で終わると回復につながりません。タイプ診断の先にある、自分の疲れ方・消耗パターン・回復方法の理解が本当の自己理解です。"
      url="https://www.ishizue-counseling.jp/articles/beyond-mbti"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        MBTI診断を受けた。タイプがわかった。でも「で、どうすればいいの？」となっていませんか？タイプ名を知ることと、消耗から回復することは別の話です。この記事では、<strong>タイプの先にある自分の取扱説明書の作り方</strong>を解説します。
      </p>

      <p>
        MBTIやその周辺の認知機能論は、「なぜ自分はこう感じるのか」「なぜこのパターンで消耗するのか」を
        言語化する入口として価値があります。
        しかし<strong>「タイプラベルで終わる」使い方では、回復につながりません。</strong>
      </p>
      <p>
        MBTIの先に何があるか——それが「自分の取扱説明書」を作ることです。
      </p>

      <h2>MBTIが有用な理由と限界</h2>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">有用な面</p>
          <ul className="text-stone-600 space-y-1">
            <li>・「なぜ自分はこう感じるのか」への言語化</li>
            <li>・「自分だけがおかしい」という孤立感の緩和</li>
            <li>・消耗パターン・強みの傾向を理解するヒント</li>
            <li>・自己理解の入口・対話のきっかけ</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">限界</p>
          <ul className="text-stone-600 space-y-1">
            <li>・科学的性格検査としての信頼性には議論がある</li>
            <li>・疲弊・消耗状態では「本来のタイプ」が出にくい</li>
            <li>・「タイプだから仕方ない」という固定化になりやすい</li>
            <li>・恋愛相性・陽キャ陰キャなど表面的な使い方に流れやすい</li>
          </ul>
        </div>
      </div>

      <h2>タイプの先にある問い</h2>
      <p>
        MBTIをタイプラベルで終わらせず、以下の問いに変換することで自己理解が深まります。
      </p>

      <div className="card space-y-3 text-sm">
        {[
          { from: "「INFJです」", to: "「なぜ人の感情を読みすぎて消耗するのか」" },
          { from: "「考えすぎるタイプ」", to: "「どんなときにNi-Tiループに入るのか」" },
          { from: "「疲れやすいタイプ」", to: "「どの種類の消耗が蓄積しやすいのか」" },
          { from: "「共感力が高い」", to: "「共感が消耗になるときと、ならないときの違いは何か」" },
        ].map(({ from, to }) => (
          <div key={from} className="flex gap-3 items-start">
            <span className="text-stone-400 text-xs flex-shrink-0 mt-1">{from}</span>
            <span className="text-[#8FAF9F] text-xs flex-shrink-0 mt-1">→</span>
            <span className="text-stone-700 text-xs">{to}</span>
          </div>
        ))}
      </div>

      <h2>「自分の取扱説明書」を作るための視点</h2>
      <p>
        本当の自己理解とは「タイプ名を知ること」ではなく、
        <strong>「自分がどのパターンで消耗し、どうすれば回復するかを知ること」</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分の消耗パターンを知る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          どんな状況で消耗しやすいか・どんな感情が出やすいか・どんなループに入るか——
          これが「取扱説明書」の消耗の章です。
          <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下の症状</Link>・<Link to="/articles/ni-ti-loop" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">Ni-Tiループ</Link>・<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>などが手がかりになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自分の回復パターンを知る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          どんな活動・環境・関係が回復を助けるか——これが「取扱説明書」の回復の章です。
          「思考より感覚が必要」「一人時間が必要」「安全な対話が必要」など、
          人によって回復パターンは異なります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「今どの状態にいるか」を把握する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          タイプは固定ですが、機能の状態は変化します。
          「今どの機能が過活動か」「今どの機能が消耗しているか」を把握することが、
          現在地に合ったセルフケアにつながります。
          <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>や<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>が手がかりになります。
        </p>
      </div>

      <h2>「自分の取扱説明書」が整うと何が変わるか</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・消耗のサインに早く気づけるようになる</p>
        <p>・「また消耗した」という自己批判より「今この状態にある」という観察ができる</p>
        <p>・自分に合ったセルフケアを選べるようになる</p>
        <p>・他者との違いを「優劣」ではなく「傾向の違い」として扱えるようになる</p>
        <p>・「自分がおかしい」ではなく「この構造が消耗を生んでいる」と理解できる</p>
      </div>

      <LineCtaSmall />

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「自分の取扱説明書」を一緒に作りたいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己理解と回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ消耗するのか」「どうすれば回復するのか」——タイプラベルの先にある自己理解を一緒に整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="mbti" exclude={["/articles/beyond-mbti"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はMBTIを自己理解のモデルとして活用しています。MBTIは科学的性格検査ではなく自己理解のためのフレームワークであり、特定のタイプへの断定には使用していません。公認心理師・障害福祉15年の臨床経験をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

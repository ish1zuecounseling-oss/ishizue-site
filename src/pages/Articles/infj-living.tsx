import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "INFJは本当に珍しいのですか？",
    a: "MBTI統計では人口比率が低いとされていますが、これはMBTI受検者・自己申告ベースのデータです。「INFJが多く見える」のは、INFJの説明文が生きづらさを感じている人の悩みを言語化しやすいため、その層が集まりやすいからという面もあります。",
  },
  {
    q: "INFJが生きづらいのは性格の問題ですか？",
    a: "性格の問題ではありません。INFJとされる認知スタイル（全体を直観で把握・感情で調整する）は、現代社会の構造（即時成果・効率・数値化）と噛み合いにくい面があります。「自分がおかしい」のではなく、「構造的な摩擦がある」という理解の方が実務的です。",
  },
  {
    q: "INFJと共感疲労の関係は？",
    a: "INFJとされる方は他者の感情を読む・意味を深く考える傾向が強く、感情労働・共感疲労が起きやすい構造があります。ただしこれはMBTIタイプに限らず、「高感受性×責任感×対人援助職」の組み合わせで起きることが多いです。",
  },
]

export default function InfjLiving() {
  return (
    <ArticleLayout
      title="INFJは本当に生きづらいのか｜生きづらさの正体と自己理解への入口"
      description="INFJが生きづらいとされる理由・なぜINFJは疲れやすいのか・共感疲労や脳疲労との関係。MBTIを自己理解の入口として活用しながら、本質的な回復につなげる視点を解説します。"
      url="https://www.ishizue-counseling.jp/articles/infj-living"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「INFJだから生きづらい」ではなく「なぜ生きづらいのか」を理解することが、回復の入口になります。
      </p>

      <p>
        MBTI診断で「INFJ」と出た人の多くが、「やっと自分のことが説明された気がした」と感じます。
        共感しすぎる・考えすぎる・理想と現実のギャップに苦しむ・一人になりたくなる——
        これらの言語化は、長年「自分がおかしい」と感じてきた人にとって大きな安堵になります。
      </p>
      <p>
        ただし重要なのは、<strong>「INFJだから生きづらい」ではなく「なぜ生きづらいのか」を理解すること</strong>です。
        MBTIはラベルではなく、自己理解の入口として使うとき最も価値があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">INFJとされる方に多い悩み</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・人の感情を読みすぎて消耗する</li>
          <li>・理想が高く、現実とのギャップに苦しむ</li>
          <li>・深く考えすぎて行動できないことがある</li>
          <li>・人と深く関わりたいが、消耗するので一人になりたくなる</li>
          <li>・「自分が何をしたいかわからない」感覚がある</li>
          <li>・支援職・対人援助職に就いている方が多い</li>
        </ul>
      </div>

      <h2>INFJが生きづらいとされる理由</h2>
      <p>
        INFJの認知スタイルは大まかに「全体を直観で把握し（Ni）、感情・人間関係で調整する（Fe）」という傾向です。
        この組み合わせが現代社会と噛み合いにくい面があります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 「全体を把握しようとする」が消耗になる</p>
          <p className="text-stone-600 leading-[1.9]">全体の意味・本質・パターンを直観で把握しようとする傾向（Ni）は、常に「深く考え続ける」状態を生みやすいです。<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>・<Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>と深く関連します。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 「他者の感情で調整する」が消耗になる</p>
          <p className="text-stone-600 leading-[1.9]">他者の感情を読んで場を調整する傾向（Fe）は、<Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎて疲れる</Link>・<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働の蓄積</Link>を生みやすいです。「自分の感情より相手の感情が先に来る」という<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>のパターンと関連します。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 身体感覚・現在感覚が後回しになりやすい</p>
          <p className="text-stone-600 leading-[1.9]">思考・直観・感情処理が優位になると、「今ここの身体感覚」が後回しになりがちです。「頭でわかるのに感じられない」「疲れているのに止まれない」という<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>のサインと深く関連します。</p>
        </div>
      </div>

      <h2>「INFJだから」より重要なこと</h2>
      <p>
        「INFJだから生きづらい」という説明は一定の安堵をもたらしますが、そこで止まると回復につながりにくいです。
        より実務的な理解は、
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>「高感受性 × 高責任感 × 対人援助 × 過集中」の組み合わせが、現代社会と噛み合いにくい</strong>
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          という理解です。これはINFJに限らず、この組み合わせを持つ人全般に起きます。
          タイプラベルより「どの機能が過活動で、どの機能が消耗しているか」を理解する方が、回復につながります。
        </p>
      </div>
      <p className="text-sm text-stone-500">
        詳しく→ <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは何か</Link> ／ <Link to="/articles/ni-ti-loop" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">Ni-Tiループとは何か</Link>
      </p>

      <LineCtaSmall />

      <h2>生きづらさを回復に変えるために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① MBTIを「ラベル」ではなく「地図」として使う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「私はINFJだからこう」という固定化より、「今どの機能が過負荷になっているか」「どこで消耗しているか」を理解するツールとして使うことが実務的です。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 思考より感覚を優先する時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">考えすぎる傾向が強い場合、「考えること」より「感じること」に意識を向ける時間が回復を助けます。<Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは感覚</Link>を参照してください。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「自分がおかしい」から「構造的摩擦がある」へ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">生きづらさを「自分の欠陥」として処理することは、自己批判を深めます。「この特性と社会構造の間に摩擦がある」という理解が、自己批判を緩め、環境調整への視点を開きます。</p>
      </div>

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「なぜ生きづらいのか」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">生きづらさの構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">「考えすぎる」「疲れやすい」「人に合わせすぎる」——その背景にある消耗の構造を外から整理することで、回復の入口が見えてきます。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="mbti" exclude={["/articles/infj-living"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はMBTIを自己理解のモデルとして活用しています。MBTIは科学的性格検査というより自己理解のためのフレームワークであり、「絶対にこのタイプだからこう」という断定には使用していません。公認心理師・障害福祉15年の臨床経験をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

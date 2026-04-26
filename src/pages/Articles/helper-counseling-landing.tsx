import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperCounselingLanding() {
  return (
    <ArticleLayout
      title="カウンセリングを考えている方へ｜受ける前に知っておきたいこと"
      description="「カウンセリングって意味あるの？」「何を話せばいいの？」——その不安、ここで全部答えます。支援職専門のカウンセリングで、何が起きるかをそのまま書きました。"
      url="https://www.ishizue-counseling.jp/articles/helper-counseling-landing"
      date="2026-04-26"
      tags={["counseling", "burnout", "boundary"]}
    >

      {/* 入口：不安を先取りする */}
      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        このページは、「カウンセリングを受けようか迷っている」という方に向けて書いています。<br />
        説得しようとしているのではありません。判断材料を渡します。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんなことを考えていませんか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・カウンセリングって、本当に意味があるのか</li>
          <li>・何を話せばいいのかわからない</li>
          <li>・「その程度のことで」と思われそうで怖い</li>
          <li>・行って変わらなかったらどうしよう</li>
          <li>・お金と時間をかける価値があるか判断できない</li>
        </ul>
      </div>

      <p>
        この不安は自然です。そして全部、答えられます。
      </p>

      {/* ① 不安の言語化 */}
      <h2 id="concerns">よくある不安と、正直な回答</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">Q. カウンセリングって、本当に効果がありますか？</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          正直に言うと、「全員に効く」とは言えません。<br />
          ただ、「今の状態を一人で抱えている」という構造は、ほぼ確実に変わります。
          誰かに話すこと、言語化すること、整理されること——
          これ自体に意味があります。「解決策を出してもらう」ではなく、
          「自分の状態を外に出す」場として考えてみてください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">Q. 何を話せばいいかわかりません</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「何を話せばいいかわからない」という状態のまま来てもらって大丈夫です。<br />
          最初は「最近しんどいです」だけで十分です。
          そこから一緒に整理していきます。
          準備する必要はありません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">Q. 「この程度でカウンセリングは大げさ」と思われませんか？</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          思われません。<br />
          「重症の人だけが行く場所」というイメージは、現実とズレています。
          限界になる前に来る方が、回復が早く、変化も起きやすい。
          「そこまでじゃないかもしれない」と思いながら来る方が、実は多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">Q. 話して、変わるんですか？</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          1回で劇的に変わることは、正直少ない。<br />
          でも「自分が何に苦しんでいるかが見えてくる」ことは、ほぼ毎回起きます。
          見えてくると、対処できる。対処できると、少し楽になる。
          その積み重ねです。
        </p>
      </div>

      {/* ② 向いている人・向いていない人 */}
      <h2 id="who">向いている人・そうでない人</h2>
      <p>
        正直に書きます。
      </p>

      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="p-4 rounded-xl" style={{ background: "#f0f7f4", border: "1px solid #c5ddd5" }}>
          <p className="text-xs font-medium mb-2" style={{ color: "#8FAF9F" }}>こんな方に向いています</p>
          <ul className="text-xs text-stone-600 space-y-1.5">
            <li>・消耗の原因を言語化したい</li>
            <li>・「辞める・続ける」を整理したい</li>
            <li>・自己批判のパターンを変えたい</li>
            <li>・一人で抱え込むことに限界を感じている</li>
            <li>・職場に話せる人がいない</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
          <p className="text-xs font-medium mb-2" style={{ color: "#9f3a3a" }}>向いていない場合</p>
          <ul className="text-xs text-stone-600 space-y-1.5">
            <li>・「解決策だけ教えてほしい」という方<br /><span className="text-stone-400">（コンサルではなくカウンセリングです）</span></li>
            <li>・「話すだけで意味ない」と確信している方<br /><span className="text-stone-400">（まず合わないかもしれません）</span></li>
            <li>・緊急の危機状態にある方<br /><span className="text-stone-400">（まず医療機関への受診を）</span></li>
          </ul>
        </div>
      </div>

      {/* ③ 実際に何が起きるか */}
      <h2 id="what-happens">実際に何が起きるか</h2>
      <p>
        ブラックボックスにしたくないので、そのまま書きます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">最初のセッションで起きること</p>
        <ol className="text-sm text-stone-600 space-y-2 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>1.</span>今どんな状態かを聞きます（10〜15分）</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>2.</span>話の中から「何が重なっているか」を一緒に整理します</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>3.</span>今の状態に名前がつくと、少し楽になることが多いです</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>4.</span>「次に何ができるか」を考えます（できないときは無理しません）</li>
        </ol>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">このカウンセリングの特徴</p>
        <ul className="text-sm text-stone-600 space-y-1.5 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>支援職専門——介護・看護・福祉・相談支援の現場を知った上で話を聞きます</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「あるある」を説明しなくていい——職場の構造を理解しているので、背景から話せます</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>CBT・ACT・MIをベースに、構造整理型のアプローチをします</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>勧誘しません。1回のみでも大丈夫です</li>
        </ul>
      </div>

      {/* ④ よくある誤解 */}
      <h2 id="myths">カウンセリングへの誤解</h2>

      <div className="my-4 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <div className="space-y-3">
          {[
            { myth: "カウンセリングは「弱い人」が行くもの", truth: "消耗の構造に気づいて、早めに動いている人が行くものです" },
            { myth: "話すだけで何も変わらない", truth: "「話す」こと自体が、脳の処理を助けます。言語化で整理され、見えなかったものが見えます" },
            { myth: "カウンセラーに依存してしまいそう", truth: "「あなた自身が整理できるようになること」がゴールです。依存を目指していません" },
          ].map(item => (
            <div key={item.myth} className="p-3 rounded-lg bg-white border border-stone-200">
              <p className="text-[10px] text-stone-400 mb-1">誤解</p>
              <p className="text-xs text-stone-500 line-through mb-1">{item.myth}</p>
              <p className="text-xs font-medium text-stone-700">{item.truth}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ⑤ cotreeへの導線も追加 */}
      <h2 id="options">相談の選択肢</h2>

      <div className="flex flex-col gap-3 mb-6">
        <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
          <p className="text-xs font-medium mb-1" style={{ color: "#8FAF9F" }}>まず試してみたい方</p>
          <p className="text-sm font-medium text-stone-800 mb-1">cotreeでのメールカウンセリング</p>
          <p className="text-xs text-stone-500 mb-2">
            文章を書いて送るだけ。いつでも・どこでも。まずここから始める方も多いです。
          </p>
          <a
            href="https://cotree.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2 rounded-lg text-xs font-medium text-white"
            style={{ background: "#8FAF9F", textDecoration: "none" }}
          >
            cotreeでメールカウンセリングを見る
          </a>
        </div>

        <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
          <p className="text-xs font-medium mb-1" style={{ color: "#2C1F14" }}>直接話したい方</p>
          <p className="text-sm font-medium text-stone-800 mb-1">いしずえカウンセリング（初回無料）</p>
          <p className="text-xs text-stone-500 mb-3">
            支援職15年・300名以上の相談経験。
            「まだ決めなくていい」「1回だけでもOK」です。
          </p>
          <a
            href="/#contact"
            className="block text-center py-2.5 rounded-lg text-sm font-medium text-white"
            style={{ background: "#2C1F14", textDecoration: "none" }}
          >
            まず話してみる（初回無料）
          </a>
          <p className="text-[10px] text-stone-400 text-center mt-1.5">
            ※申し込み後もキャンセル可 ／ 勧誘なし
          </p>
        </div>
      </div>

      {/* まだ迷っている方へ */}
      <div className="p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-sm font-medium text-stone-700 mb-2">まだ迷っている方へ</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-3">
          それで大丈夫です。まず記事を読んで、自分の状態を知るところから始めましょう。
        </p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-fatigue-diagnosis" className="text-xs text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 疲れのタイプ診断（10問）
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-xs text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労チェック（20問）
          </Link>
          <Link to="/articles/helper-self-blame-landing" className="text-xs text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 自分を責めてしまう方へ
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        ※松本龍児（公認心理師）。支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験。CBT・ACT・MI・トラウマインフォームドケアを活用した「構造整理型カウンセリング」を実施しています。
      </p>

    </ArticleLayout>
  )
}

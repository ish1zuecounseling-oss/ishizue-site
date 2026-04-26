import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperSelfBlameLanding() {
  return (
    <ArticleLayout
      title="支援職が自分を責めてしまう理由｜その責め方、本当に必要ですか"
      description="「自分が悪い」「もっとできたはず」——支援職は自分を責めやすい構造の中にいます。性格の問題ではなく、構造の問題です。このページで、その仕組みに気づいてみてください。"
      url="https://www.ishizue-counseling.jp/articles/helper-self-blame-landing"
      date="2026-04-26"
      tags={["burnout", "compassion", "boundary"]}
    >

      {/* ① 共感（深めに） */}
      <div className="mb-6 p-4 rounded-xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 leading-relaxed mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          何かあるたびに「自分のせいだ」と感じてしまう方へ。
        </p>
        <p className="text-xs text-stone-400 leading-relaxed">
          支援職は、人の役に立つことが評価される仕事です。<br />
          その中で、自分を責めることが"当たり前"になっているケースは少なくありません。
        </p>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        このページは、「また自分を責めてしまった」と気づいている方に向けて書いています。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-3" style={{ color: "#92400e" }}>こんなことはありますか？</p>
        <ul className="text-xs space-y-2" style={{ color: "#b45309" }}>
          <li>・何か問題があると、まず「自分が悪かったのでは」と考える</li>
          <li>・うまくいっても「たまたま」「運が良かっただけ」と思う</li>
          <li>・失敗したとき、他の人より長く、強く引きずる</li>
          <li>・「あのとき違う対応をしていれば」が頭から離れない</li>
          <li>・「自分はこの仕事に向いていないのかもしれない」と思うことがある</li>
          <li>・休もうとすると「サボっている」「甘えている」という感覚が出る</li>
        </ul>
      </div>

      <p>
        読んでいて、少し苦しくなりませんでしたか。
      </p>
      <p>
        それだけ、この感覚があなたの日常に染み込んでいるということです。
      </p>

      {/* ② 構造の言語化 */}
      <h2 id="structure">これは「性格」ではなく「構造」の問題です</h2>
      <p>
        「自分を責めやすい」のは、あなたの性格が弱いからではありません。
        支援職には、自責が習慣化しやすい<strong>構造的な理由</strong>があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「他責」が許されにくい職場規範</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職では「利用者のために」という価値観が強く根づいています。
          「あの利用者が難しい」「制度が悪い」と言うことが、
          プロとして許されない雰囲気がある。
          だから問題が起きたとき、矛先が自分に向かいやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 評価軸が「人への貢献」になりやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役に立てたか」「助けられたか」——
          支援職の自己評価は、他者への貢献度と結びつきやすい。
          貢献できなかった瞬間が、そのまま自己否定につながります。
          「できた」は当然で、「できなかった」だけが残ります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「もっとできるはず」という完璧主義</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職を選ぶ人は、他者への責任感が強い傾向があります。
          その責任感が「まだ足りない」「もっとできるはず」という内側の声になり、
          現実の自分との差が自責を生み続けます。
        </p>
      </div>

      {/* ③ 転換ポイント */}
      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-base font-medium text-stone-100 leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          その責め方、本当にあなたに必要でしょうか。
        </p>
        <p className="text-sm text-stone-400 leading-relaxed mt-3">
          責めることが「成長のため」「次に活かすため」なら意味があります。<br />
          でも、責め続けることで何かが改善されているか——<br />
          少しだけ、立ち止まって考えてみてください。
        </p>
      </div>

      {/* ④ ミニ体験 */}
      <h2 id="exercise">1分でできる体験</h2>
      <p>
        今から小さな実験をしてみてください。読むだけで大丈夫です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">ステップ① 最近の「失敗」を1つ思い出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事でうまくいかなかったこと、後悔していること——
          何か1つ、頭に浮かべてみてください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">ステップ② 「同じことを、同僚がしたとしたら？」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          信頼している同僚が、まったく同じことをしたとします。<br />
          あなたはその人に、どんな言葉をかけますか？<br /><br />
          「仕方ないよ」「あなただけじゃない」「よくやっている」——<br />
          おそらく、自分に言う言葉とは違うはずです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">ステップ③ その差に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他の人には優しく言える言葉を、自分には言えていない。<br />
          その差が、「自分への厳しさ」の正体です。<br /><br />
          これは道徳的な問題ではありません。
          長年の習慣と、支援職という環境が作り出した反応パターンです。
        </p>
      </div>

      {/* ⑤ バランス提示 */}
      <h2 id="balance">責めることが悪いわけではない</h2>
      <p>
        自分を振り返り、反省することは大切です。
        問題は、その「責め方」が過剰になっているときです。
      </p>

      <div className="my-4 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-xs font-medium text-stone-700 mb-2">適切な振り返りと、過剰な自責の違い</p>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <p className="text-[10px] font-medium mb-1" style={{ color: "#8FAF9F" }}>適切な振り返り</p>
            <ul className="text-[10px] text-stone-600 space-y-1">
              <li>・何が起きたかを見る</li>
              <li>・次にどうするかを考える</li>
              <li>・一定時間で終わる</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <p className="text-[10px] font-medium mb-1" style={{ color: "#9f3a3a" }}>過剰な自責</p>
            <ul className="text-[10px] text-stone-600 space-y-1">
              <li>・「自分がダメだから」で終わる</li>
              <li>・何日も引きずる</li>
              <li>・次への行動が出てこない</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-stone-500 mt-2">
          過剰な自責は、回復を妨げます。消耗を深め、バーンアウトのリスクを高めます。
        </p>
      </div>

      {/* ⑥ ゆるい出口 */}
      <h2 id="next">次の一歩（自分で選んでください）</h2>
      <p className="text-sm text-stone-600 mb-4">
        無理に変える必要はありません。ただ、「知っておく」ことが変化の入口になります。
      </p>

      <div className="flex flex-col gap-3 mb-6">
        <Link
          to="/articles/helper-self-compassion-check"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
        >
          <p className="text-xs font-medium mb-1" style={{ color: "#8FAF9F" }}>第一歩として</p>
          <p className="text-sm font-medium text-stone-800">自分を責めすぎているか確認する（8場面チェック）</p>
          <p className="text-xs text-stone-500 mt-1">セルフ・コンパッション反応チェック → 今の自分のパターンを知る</p>
        </Link>

        <Link
          to="/articles/helper-self-compassion-behavior"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
        >
          <p className="text-xs font-medium mb-1" style={{ color: "#8FAF9F" }}>もう少し知りたい方へ</p>
          <p className="text-sm font-medium text-stone-800">自分への優しさを行動として実践する方法</p>
          <p className="text-xs text-stone-500 mt-1">セルフ・コンパッション → 今日からできる具体的な行動</p>
        </Link>

        <div className="block p-4 rounded-xl border border-stone-200 bg-stone-50">
          <p className="text-xs font-medium mb-1 text-stone-400">一人で整理が難しい場合は</p>
          <p className="text-sm font-medium text-stone-700 mb-2">支援職専門カウンセリングに相談する</p>
          <p className="text-xs text-stone-500 mb-3">
            「また自分を責めてしまった」が続いているなら、
            その背景にあるパターンを一緒に整理することができます。
          </p>
          <a
            href="/#contact"
            style={{ display: "block", background: "#7EB8A4", color: "#fff", borderRadius: "8px", padding: "10px 16px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", textAlign: "center" }}
          >
            一度話してみる（初回無料）
          </a>
          <p className="text-[10px] text-stone-400 text-center mt-1.5">勧誘なし ／ 1回のみでもOK ／ 支援職15年・公認心理師</p>
        </div>
      </div>

      <p className="text-xs text-stone-400 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。
      </p>

    </ArticleLayout>
  )
}

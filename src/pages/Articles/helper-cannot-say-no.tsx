import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperCannotSayNo() {
  return (
    <ArticleLayout
      title="断れない人の特徴7つ｜なぜNOが言えないのか、支援職に多い理由と抜け出し方"
      description="頼まれると断れない、引き受けてから後悔する——それは意志の弱さではありません。「断れない」状態になりやすい7つの特徴と、支援職に多い構造的な理由を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-cannot-say-no"
      date="2026-04-26"
      tags={["boundary", "burnout", "compassion"]}
    >

      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        頼まれると断れない、と感じている方へ。
      </p>

      <p>
        本当は余裕がないのに、「いいですよ」と引き受けてしまう。<br />
        あとで後悔するのに、その場では断れない。
      </p>
      <p>
        支援職の方ほど、こうした状態に陥りやすい傾向があります。<br />
        それは意志の弱さではなく、<strong>そうなりやすい構造がある</strong>ためです。
      </p>

      <h2 id="seven-traits">断れない人の特徴7つ</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">① 相手を優先することが当たり前になっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「困っている人を助けるべき」という前提が強く、
          自分のキャパシティより相手のニーズが先に来る。
          断ることが「例外」ではなく、引き受けることが「デフォルト」になっています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">② 断ることに強い罪悪感がある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          NOと言う＝相手を傷つける、という感覚が強い。
          断った後に「申し訳なかった」「冷たかったかもしれない」という後悔が続く。
          罪悪感が、次の「引き受け」を呼びます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">③ 評価を下げたくない気持ちがある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いい人でいたい」「信頼を失いたくない」「断ったら嫌われるかもしれない」——
          他者からの評価が、断る・断らないの判断に大きく影響しています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">④ 自分の限界に気づきにくい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情を抑えて仕事をしてきた結果、
          「疲れている」「もう無理」というサインが見えにくくなっています。
          気づいたときには抱え込みすぎている——という状態になりやすい。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">⑤ 頼まれると反射的に引き受けてしまう</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          考える前に「はい」と言ってしまう。
          断るかどうかを考える時間がない、あるいは、
          「少し考えてから返事する」ことへの申し訳なさがある。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">⑥ 自分の優先順位が後回しになっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の時間・体力・感情を後回しにすることが習慣になっている。
          「自分のことは後でいい」という感覚が強く、
          気づいたときには自分のためにできることが何もない状態になっています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">⑦ 断り方が分からない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「どう言えばいいか分からない」がブレーキになっている。
          断り方のレパートリーがないと、
          引き受けるか・完全に拒絶するかの二択になってしまいます。
          その二択が、断ることをさらに難しくします。
        </p>
      </div>

      <h2 id="why-helpers">なぜ支援職ほど断れなくなるのか</h2>
      <p>
        支援職には、断れない状態になりやすい構造があります。
      </p>

      <div className="my-4 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <ul className="text-sm text-stone-600 space-y-2">
          <li className="flex items-start gap-2">
            <span style={{ color: "#8FAF9F" }}>・</span>
            <span>人の役に立つことが評価される職場文化</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: "#8FAF9F" }}>・</span>
            <span>困っている人を優先することが「プロ」とされる規範</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: "#8FAF9F" }}>・</span>
            <span>「断わることへの罪悪感」が職業的な責任感と結びつきやすい</span>
          </li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">
          その結果、「断わらないこと」が正しい行動として長年強化されてきた可能性があります。
        </p>
      </div>

      <h2 id="consequences">そのまま続けるとどうなるか</h2>

      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>仕事量が増え続け、回復する時間がなくなる</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>疲れが抜けない状態が慢性化する</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>イライラ・無力感・感情の麻痺が出てくる</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>「人と関わること自体がしんどい」状態になる</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">
          これはバーンアウト・共感疲労のプロセスと重なります。
        </p>
      </div>

      <h2 id="first-step">まず最初にやるべきこと</h2>
      <p>
        いきなり断れるようになる必要はありません。
      </p>

      <div className="my-4 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「引き受ける前に、一度止まる」
        </p>
        <p className="text-xs text-stone-400 leading-relaxed">
          頼まれた瞬間に「はい」と言わず、<br />
          「少し確認してから返事します」と言うだけでいい。<br /><br />
          この一歩が、断ることへの最初の練習になります。
        </p>
      </div>

      <h2 id="deeper">それでも難しいと感じる場合</h2>
      <p>
        断れない背景には、複数の要素が絡んでいることがあります。
      </p>

      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>自分を責めやすいパターンがある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>感情を抑え込むことが習慣になっている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>すでに疲れが深く蓄積している</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">
          これらが重なっているとき、断る練習だけでは変わりにくくなります。
          まず今の状態を整理することが先です。
        </p>
      </div>

      {/* 3方向分岐 */}
      <h2 id="next">今の状態に近いものから読んでみてください</h2>

      <div className="flex flex-col gap-3 mb-6">
        <Link
          to="/articles/helper-self-blame-landing"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
          style={{ textDecoration: "none" }}
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#8FAF9F" }}>
            断れない＋自分を責めてしまう方へ
          </p>
          <p className="text-sm font-medium text-stone-800">「また自分のせいだ」が止まらない方へ</p>
          <p className="text-xs text-stone-500 mt-1">自責のパターンを整理するページ</p>
        </Link>

        <Link
          to="/articles/helper-fatigue-diagnosis"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
          style={{ textDecoration: "none" }}
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#d97706" }}>
            断れない＋疲れが取れない方へ
          </p>
          <p className="text-sm font-medium text-stone-800">その疲れ、3タイプのどれ？（10問診断）</p>
          <p className="text-xs text-stone-500 mt-1">脳疲労・感情疲労・バーンアウトのどれか確認する</p>
        </Link>

        <Link
          to="/articles/helper-want-to-quit-landing"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
          style={{ textDecoration: "none" }}
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#9f3a3a" }}>
            断れない＋すでに限界に近い方へ
          </p>
          <p className="text-sm font-medium text-stone-800">仕事を辞めたいと思ったときに読むページ</p>
          <p className="text-xs text-stone-500 mt-1">辞めるべきかどうかを整理する3つの視点</p>
        </Link>
      </div>

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。
      </p>

      <ArticleBottomCTA
        links={[
          { label: "疲れのタイプを診断する（10問）",         path: "/articles/helper-fatigue-diagnosis" },
          { label: "自分を責めてしまう方へ",                 path: "/articles/helper-self-blame-landing" },
          { label: "断り方の具体的な方法を見る",             path: "/articles/helper-boundary-how-to" },
        ]}
      />
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "バウンダリー（境界線）とは何ですか?",
    a: "バウンダリーとは、自分と相手の責任や感情の範囲を区別するための心理的な境界線のことです。「どこまでが自分の役割・責任で、どこからが相手のものか」を分ける線です。対人援助職では「相手を支えたい」という思いが強くなるほど、この境界線が曖昧になりやすく、利用者の問題を自分の責任のように抱え込んでしまいます。",
  },
  {
    q: "境界線を引くのは「冷たいこと」ではないですか?",
    a: "冷たさではありません。バウンダリーという言葉から「距離を取る・突き放す」を想像する人もいますが、実際は逆です。境界線とは、相手との関係を長く保つための整理です。境界が曖昧なまま抱え込み続けると、消耗して支援が続けられなくなります。適切な境界線は、冷たさではなく「長く誠実に関わり続けるための技術」です。",
  },
  {
    q: "境界線が曖昧だと、どんなことが起きますか?",
    a: "①利用者の問題を自分の責任のように感じる、②断ることに強い罪悪感を感じる、③仕事が終わっても気持ちが切り替わらない、④役割が際限なく増え続ける、といった負担が生まれます。これが続くと心理的な疲労が蓄積し、共感疲労やバーンアウトにつながることがあります。",
  },
  {
    q: "どうすれば境界線を引けるようになりますか?",
    a: "①自分の役割の範囲を理解する、②相手の課題と自分の課題を区別する、③責任の境界を言語化する、という整理から始めます。「今日の支援は終わった」という心理的な区切りを意識的に持つことも助けになります。ただ、頭で分かっていても罪悪感が強くて引けない場合は、その罪悪感の構造自体を専門家と整理することが近道になることがあります。",
  },
];

export default function HelperBoundary() {
  return (
    <ArticleLayout
      title="支援職の境界線（バウンダリー）とは｜抱え込みすぎる人のための引き方【公認心理師】"
      description="「寄り添う」と「抱え込む」は違います。支援職が消耗しないための心理的境界線（バウンダリー）とは何か、なぜ曖昧になるのか、どう引くのかを公認心理師が解説。境界線は冷たさではなく、長く支援を続けるための技術です。"
      url="https://www.ishizue-counseling.jp/articles/helper-boundary"
      date="2026-03-16"
      audio="/audio/helper-boundary.mp3"
      tags={["boundary", "compassion"]}
      faq={FAQ_ITEMS}
    >

      {/* ▼ 監修者ボックス */}
      <div className="my-4 p-4 rounded-2xl border border-stone-200 bg-white">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
            <span className="text-[10px] text-stone-500 tracking-wider">監修</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-stone-800 mb-0.5">公認心理師による解説</p>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              障害福祉15年・カウンセリング累計300名以上の臨床経験／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        支援職では、相手に寄り添うことが重要とされます。
        しかし、寄り添うことと「抱え込むこと」は同じではありません。
        その違いを整理する概念として、心理職では「境界線（バウンダリー）」が重要になります。
      </p>
      <p>
        バウンダリーとは、自分と相手の責任や感情の範囲を区別するための
        心理的な境界線を指します。
      </p>
      <p>
        対人援助職では「相手を支えたい」という思いが強くなるほど、
        この境界線が曖昧になりやすいと言われています。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        バウンダリーの一般的な定義は<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線（バウンダリー）とは</Link>に、具体的な引き方の手順は<Link to="/articles/helper-boundary-how-to" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バウンダリーの作り方</Link>にまとめています。この記事は「支援職が抱え込みすぎる構造」に焦点を当てます。
      </p>

      <h2>境界線が曖昧になると起こりやすいこと</h2>
      <p>
        境界線が曖昧な状態では、次のような負担が生まれやすくなります。
      </p>
      <div className="card space-y-2">
        <p>利用者の問題を自分の責任のように感じてしまう</p>
        <p>断ることに強い罪悪感を感じる</p>
        <p>仕事が終わっても気持ちが切り替わらない</p>
        <p>役割が増え続けてしまう</p>
      </div>
      <p>
        このような状態が続くと、心理的な疲労が蓄積しやすくなります。
        これは<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>や<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群</Link>の温床にもなります。
      </p>

      <h2>境界線は「距離を取ること」ではない</h2>
      <p>
        バウンダリーという言葉から、
        「冷たく距離を取ること」を想像する人もいます。
      </p>
      <p>
        しかし実際には、境界線とは
        相手との関係を保つための整理でもあります。
      </p>
      <div className="card">
        <p className="font-medium mb-4">
          境界線を整理するとは、例えば次のようなことです。
        </p>
        <ul className="space-y-2">
          <li>自分の役割の範囲を理解する</li>
          <li>相手の課題と自分の課題を区別する</li>
          <li>責任の境界を言語化する</li>
        </ul>
      </div>
      <p>
        こうした整理は、支援関係を長く続けるための土台にもなります。
      </p>

      <h2>なぜ「断れない」のか——罪悪感の構造</h2>
      <p>
        境界線を引こうとしても、「断ると相手に悪い」「自分が我慢すればいい」という罪悪感が作動して、
        うまく引けないことがあります。これは意志の弱さではなく、構造的な背景があります。
      </p>
      <p>
        「自分が役に立っている間だけ、ここにいていい」という<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">条件付き自己価値</Link>や、
        「相手の反応に自分の安全がかかっている」という対人パターンが背景にあると、
        境界線を引くこと自体が「危険」に感じられます。
        頭で「引けばいい」とわかっていても引けないのは、こうした構造があるからです。
      </p>

      <h2>支援を続けるための境界線</h2>
      <p>
        支援職は、誰かの困難に長期的に関わる仕事です。
      </p>
      <p>
        そのためには、支援する側が消耗しすぎない状態を保つことも重要になります。
      </p>
      <p>
        境界線を整理することは、
        支援を続けるための環境を整えることにもつながります。
      </p>

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「頭ではわかっているのに、罪悪感で境界線が引けない」——その構造の整理が、いしずえの得意とするところです。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「抱え込みすぎてしまう」支援職の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          境界線が引けないのは、冷たくなれないほど誠実だからです。なぜ引けないのか、その構造を専門家と一緒に整理することで、無理なく境界線を保てるようになっていきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="boundary" exclude={["/articles/helper-boundary"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

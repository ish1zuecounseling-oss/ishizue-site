import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "カントの「人を単に手段として扱うな」とは、どういう意味ですか?",
    a: "カントが『人倫の形而上学の基礎づけ』(1785年)で示した道徳の原則です。人は誰でも、それ自体が大切にされるべき存在(目的)であり、誰かの目的を果たすための道具(手段)としてだけ扱ってはならない、という考えです。ポイントは「単に」という言葉で、人の力を借りること自体は否定されていません。相手を道具としてしか見ないことが問題とされます。",
  },
  {
    q: "この原則は、自分自身にも当てはまるのですか?",
    a: "はい。カントは原則の中で「あなた自身の人格においても、他のすべての人の人格においても」とはっきり書いています。他人を道具として扱ってはいけないのと同じように、自分自身を、目的を果たすための道具としてだけ扱うことも、人格を軽んじることになります。カントは、自分自身に対する義務についても詳しく論じています。",
  },
  {
    q: "カントの「尊厳」とは何ですか?",
    a: "カントは、すべてのものは「価格」をもつか「尊厳」をもつかのどちらかだと述べました。価格をもつものは、同じ値打ちの別のものと取り替えがききます。尊厳をもつものは、どんな価格も超えていて、取り替えがききません。人間は尊厳をもつ存在であり、役に立つかどうかで値打ちが決まるものではない、という考えです。",
  },
  {
    q: "職場で「便利な人」として使われている気がします。どうすればいいですか?",
    a: "まず、引き受けている仕事を書き出し、本来の担当ではないもの、断れずに引き受けたものを見える形にしてください。そのうえで、すべてを一度に断るのではなく、一つずつ「今回は難しいです」と伝える練習から始めます。一人で状況を変えるのが難しい場合は、上司や外部の相談窓口に相談することも、自分を大切にする行動の一つです。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerKantDignity() {
  return (
    <ArticleLayout
      title="あなた自身も「手段」ではない｜カントの「人格の尊厳」から読む、支援職の自己犠牲【公認心理師】"
      description="「あなた自身の人格においても、他のすべての人の人格においても、人間を単に手段としてではなく、常に同時に目的として扱え」——カントのこの原則は、利用者だけでなく支援者自身にも向けられています。自分を使い潰してしまう支援職の自己犠牲を、カントの「尊厳」から公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-kant-dignity"
      date="2026-10-17"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ カント
      </p>

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
        「あの人に頼めば断らないから」と、仕事が集まってくる。
        シフトの穴を埋め、急な対応を引き受け、自分の休憩は後回しにする。
        利用者の尊厳は大切にしているのに、自分のことは、まるで消耗品のように扱っている——。
      </p>
      <p>
        支援の仕事は、人を「人として」大切にする仕事です。
        その考え方の土台を作った哲学者の一人が、ドイツの<strong>イマヌエル・カント</strong>です。
        そしてカントは、その原則が<strong>自分自身にも向けられている</strong>ことを、はっきり書いています。
      </p>

      <h2>カントと『人倫の形而上学の基礎づけ』</h2>
      <p>
        カント(1724–1804)は、近代哲学を代表するドイツの哲学者です。
        生まれ故郷のケーニヒスベルク(現在のロシア領カリーニングラード)からほとんど離れることなく、
        規則正しい生活を送りながら、認識、道徳、美について巨大な体系を築きました。
      </p>
      <p>
        道徳について書いた『人倫の形而上学の基礎づけ』(1785年)で、
        カントは、どんな状況でも守られるべき道徳の原則を示そうとしました。
        その中に、今日の人権や医療・福祉の倫理の土台となる一文があります。
      </p>

      <h2>「単に手段としてではなく、常に同時に目的として」</h2>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          あなた自身の人格においても、他のすべての人の人格においても、
          人間性を、常に同時に目的として扱い、決して単に手段としてのみ扱わないように行為せよ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          カント『人倫の形而上学の基礎づけ』(ドイツ語原典より筆者訳)
        </p>
      </div>
      <p>
        この一文には、見落とされがちな大切な言葉が二つあります。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「単に」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          カントは、人が誰かの役に立つこと自体を否定していません。
          働くことも、助け合うことも、ある意味では互いに「手段」になることです。
          問題は、<strong>手段としてだけ</strong>扱い、その人がそれ自体として大切な存在であることを忘れることです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「あなた自身の人格においても」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          この原則は、他人をどう扱うかだけの話ではありません。
          <strong>自分自身を、単なる道具として扱うことも、同じように人格を軽んじること</strong>だとカントは言っています。
        </p>
      </div>

      <h2>「価格」と「尊厳」</h2>
      <p>
        カントは同じ本の中で、人間がなぜ手段としてだけ扱われてはならないのかを、こう説明しています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          すべてのものは、価格をもつか、尊厳をもつかのどちらかである。
          価格をもつものは、同じ値打ちの別のものと取り替えることができる。
          これに対し、あらゆる価格を超えていて、取り替えのきかないものは、尊厳をもつ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同書(ドイツ語原典より筆者訳)
        </p>
      </div>
      <p>
        「役に立つ」という値打ちは、いわば価格です。
        もっと役に立つ人が現れれば、取り替えがききます。
        けれど人間そのものは、役に立つかどうかとは関係なく、取り替えのきかない<strong>尊厳</strong>をもっている。
        これが、支援の現場で利用者の尊厳を守るときの考え方の根っこです。
      </p>

      <h2>支援職に置き換えると——自分だけが例外になっている</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分を「価格」でしか見ていない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者のことは尊厳ある存在として見ているのに、自分のことは「どれだけ役に立ったか」という価格でしか見ていない。
          役に立てない日は、自分には値打ちがないように感じる。
          (この構造は<Link to="/articles/self-value-unknown" className={linkCls}>条件つき自己価値</Link>の記事で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自分を「便利な道具」として差し出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頼まれれば断らず、空いた穴を埋め、休憩も休日も差し出す。
          それが続くと、周りもいつしか「あの人なら大丈夫」とあなたを便利な道具のように扱いはじめます。
          (<Link to="/articles/helper-cannot-say-no" className={linkCls}>支援職が断れない理由</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分を使い潰すことを「美徳」だと思っている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己犠牲は、支援の世界ではしばしば称賛されます。
          けれどカントの原則に照らせば、自分を単なる手段として使い潰すことは、美徳ではなく、
          <strong>自分の人格を軽んじること</strong>になります。
          (<Link to="/articles/helper-stop-self-sacrifice" className={linkCls}>自己犠牲をやめたいと感じたとき</Link>も参考になります)
        </p>
      </div>
      <p>
        カントは、他人への義務だけでなく、<strong>自分自身に対する義務</strong>についても詳しく論じ、
        自分を卑屈に扱い、人格を貶めることを戒めています。
        自分を大切にすることは、わがままではなく、カントにとっては道徳の一部だったのです。
      </p>

      <LineCtaFatigue />

      <h2>よくある誤解と、この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誤解:人の役に立つこと自体が良くない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          カントは、誰かの役に立つことを否定していません。
          大切なのは「単に」手段にならないこと。
          役に立ちながらも、<strong>自分がそれ自体として大切な存在であること</strong>を忘れない、ということです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:「べき」を増やす読み方にしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          カントの倫理は、義務を重んじる厳格なものです。
          そのまま読むと、「自分を大切にすべきなのに、できていない」と、かえって自分を責める材料になりかねません。
          この記事では、カントの原則を<strong>自分を大切にしてよい根拠</strong>として読んでいます。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分が「単に手段」になっている場面を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頼まれたから引き受けた、断ると気まずいから引き受けた、という仕事を書き出してみます。
          どこで自分が「便利な道具」になっているかが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 利用者に向けている言葉を、自分にも向ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          疲れている利用者に「休んでいいんですよ」と言うように、自分にも同じ言葉をかけてみます。
          利用者に認めている尊厳を、<strong>自分にだけ認めない理由はありません</strong>。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 一つだけ、引き受けない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          今週、本来の担当ではない頼まれごとを一つだけ「今回は難しいです」と伝えてみます。
          自分を手段としてだけ扱わない、小さな練習です。
        </p>
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">この記事とつながるテーマ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-stop-self-sacrifice" className={linkCls}>支援職の自己犠牲をやめたいと感じたとき</Link></li>
          <li>・<Link to="/articles/helper-cannot-say-no" className={linkCls}>支援職が断れない理由</Link></li>
          <li>・<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link></li>
          <li>・<Link to="/articles/thinker-rogers-conditions-of-worth" className={linkCls}>「役に立つ自分」にしか価値を感じられない理由(ロジャーズから読む)</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">自分のことを、後回しにし続けてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          あなた自身が、大切にされる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          役に立つかどうかとは関係なく、あなたの話を聴く時間です。自分を使い潰してしまう構造を、責めずに一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-kant-dignity"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインのドイツ語原典(Grundlegung zur Metaphysik der Sitten, 1785)から筆者が翻訳したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

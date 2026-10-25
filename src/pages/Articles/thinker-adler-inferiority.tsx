import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "アドラーの「劣等感」とは、悪いものですか?",
    a: "悪いものではありません。アドラーは、劣等感は誰もが持つ自然な感情であり、人が成長しようとする原動力になると考えました。問題になるのは、劣等感を理由に課題から逃げる「劣等コンプレックス」や、劣等感を隠すために自分を大きく見せようとする「優越コンプレックス」のような形をとったときです。",
  },
  {
    q: "「課題の分離」はアドラー本人の言葉ですか?",
    a: "「課題の分離」という言葉は、日本ではアドラー心理学の解説書を通じて広く知られるようになりました。アドラー本人の著作にも、その行動の結末を最終的に引き受けるのは誰かを考える発想は見られますが、この言葉の形でまとまった理論として示されているわけではありません。この記事では、アドラー自身の中心概念である劣等感と共同体感覚を中心に扱っています。",
  },
  {
    q: "アドラーの「共同体感覚」とは何ですか?",
    a: "自分は他者とつながっていて、共同体の一員として居場所がある、という感覚のことです。アドラーはこれを心の健康の目安と考えました。ただし、共同体感覚は「自分を犠牲にして他者に尽くすこと」ではありません。自分も共同体の一員として大切にされる存在であることが前提です。",
  },
  {
    q: "支援職の仕事で「役に立てない自分」がつらいとき、アドラーの考えは役に立ちますか?",
    a: "役に立つかもしれません。アドラーの視点で見ると、「役に立てない自分には価値がない」という感覚は、劣等感を「役に立つこと」だけで埋めようとしている状態と考えられます。人の価値は役に立つかどうかだけで決まるわけではない、という共同体感覚の考え方が、その思い込みを緩める手がかりになります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerAdlerInferiority() {
  return (
    <ArticleLayout
      title="「役に立てない自分」が怖い理由｜アドラーの「劣等感」と「共同体感覚」から読む、支援職の頑張りすぎ【公認心理師】"
      description="アドラーは、劣等感は誰もが持つ成長の原動力だと考えました。しかし劣等感を「役に立つこと」だけで埋めようとすると、支援職は頑張りすぎから抜け出せなくなります。劣等感、共同体感覚、そして日本で広く知られる「課題の分離」の正しい位置づけを、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-adler-inferiority"
      date="2026-10-18"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ アルフレッド・アドラー
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
        同僚はてきぱきと仕事をこなしているのに、自分は時間がかかる。
        先輩のようにうまく利用者と話せない。
        だから、せめて誰よりも多く引き受けよう、誰よりも遅くまで残ろう——。
      </p>
      <p>
        「自分は足りない」という感覚を、頑張りで埋め続ける。
        この心の動きを、100年以上前に体系的に説明した精神科医がいます。
        <strong>アルフレッド・アドラー</strong>です。
      </p>

      <h2>アドラーと「個人心理学」</h2>
      <p>
        アドラー(1870–1937)は、オーストリアのウィーンで活動した精神科医です。
        一時はフロイトの研究グループに加わっていましたが、考え方の違いから離れ、
        独自の「個人心理学(アドラー心理学)」を打ち立てました。
        ウィーンで子どもの教育相談所を数多く開くなど、教育や福祉の現場にも深く関わった人です。
      </p>
      <p>
        日本では『嫌われる勇気』などの解説書を通じて広く知られるようになりましたが、
        アドラー自身の理論の中心にあるのは、<strong>劣等感</strong>と<strong>共同体感覚</strong>という二つの考え方です。
      </p>

      <h2>劣等感は、誰にでもある成長の原動力</h2>
      <p>
        アドラーは、人は誰でも「自分は足りない」という感覚、つまり<strong>劣等感</strong>を持っていると考えました。
        子どもは大人に比べて小さく、無力です。その感覚を乗り越えようとする力が、人を成長させる。
        劣等感そのものは、悪いものではなく、<strong>より良くなろうとする原動力</strong>だというのです。
      </p>
      <p>
        問題になるのは、劣等感がゆがんだ形をとったときです。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">劣等感がゆがむ2つの形</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>劣等コンプレックス</strong>:「自分はどうせ〜だから」と、劣等感を課題から逃げる理由にしてしまう</li>
          <li>・<strong>優越コンプレックス</strong>:劣等感を隠すために、自分を実際より大きく見せようとする</li>
        </ul>
      </div>
      <p>
        アドラーは、人が劣等感をどう扱うかに、その人の生き方のスタイル(ライフスタイル)が表れると考えました。
      </p>

      <h2>支援職に置き換えると——「役に立つこと」で劣等感を埋める</h2>
      <p>
        支援職に多いのは、劣等感を<strong>「役に立つこと」で埋めようとする</strong>形です。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 引き受けることで、足りなさを補う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分は能力が足りないと感じているから、量で補おうとする。
          誰よりも多く引き受け、断らず、休まない。
          頑張りが劣等感の埋め合わせになっているので、止まることができません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「役に立てない自分」が怖い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          役に立っている間は、劣等感を感じずにいられる。
          だからこそ、役に立てない場面——利用者がよくならない、ミスをした、休まざるを得ない——が強い恐怖になります。
          (<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link>で扱っている構造です)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 比べて、さらに足りなさを感じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同僚と比べて自分の足りなさを確かめ、さらに頑張る。
          劣等感が成長の原動力ではなく、<strong>終わりのない自己否定の燃料</strong>になってしまっている状態です。
          (<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link>もあわせてどうぞ)
        </p>
      </div>

      <h2>共同体感覚——「役に立つこと」だけが居場所ではない</h2>
      <p>
        アドラーは、心の健康の目安として<strong>共同体感覚</strong>を挙げました。
        自分は他者とつながっていて、共同体の一員として居場所がある、という感覚です。
      </p>
      <p>
        ここで大切なのは、共同体感覚は<strong>自分を犠牲にして他者に尽くすことではない</strong>という点です。
        自分も共同体の一員であり、他者と同じように大切にされる存在である。
        その感覚があるから、無理なく他者に関心を向けられるのです。
      </p>
      <p>
        「役に立っているときだけ、ここにいていい」と感じているなら、
        それは共同体感覚ではなく、<strong>条件つきの居場所</strong>です。
        役に立てない日も、ここにいていい——その感覚を取り戻すことが、頑張りすぎから抜け出す土台になります。
        (<Link to="/articles/thinker-rogers-conditions-of-worth" className={linkCls}>ロジャーズの「価値の条件」の回</Link>ともつながる考え方です)
      </p>

      <LineCtaFatigue />

      <h2>「課題の分離」について</h2>
      <p>
        日本でアドラー心理学といえば、「課題の分離」を思い浮かべる人が多いでしょう。
        その行動の結果を最終的に引き受けるのは誰かを考え、他人の課題に踏み込みすぎない、という考え方です。
      </p>
      <p>
        ただ、「課題の分離」という言葉は、主に日本の解説書を通じて広まったもので、
        アドラー本人の著作でこの言葉のまとまった理論が示されているわけではありません。
        また、支援の仕事は<strong>他人の課題に関わること</strong>そのものです。
        「それはあなたの課題です」と突き放すための言葉として使うと、支援の本質を見失います。
      </p>
      <p>
        支援職にとっての使い方は、<strong>相手の課題を自分が背負い込まないための線引き</strong>として持っておくことです。
        境界線の考え方としては、
        <Link to="/articles/thinker-epictetus-control" className={linkCls}>エピクテトスの「自分次第のもの」</Link>がその源流にあたります。
      </p>

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">わかりやすさの裏で、単純化されやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          アドラー心理学は、わかりやすい言葉で広まったぶん、「トラウマは存在しない」「すべては自分の選択」などと
          極端に単純化して紹介されることがあります。
          過去のつらい経験の影響や、職場の構造的な問題を、本人の心構えだけの問題にしてしまわないよう注意が必要です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 劣等感を「燃料」にしている場面に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分は足りないから、もっと引き受けなきゃ」と思った瞬間に気づいたら、
          「今、劣等感で動いている」と心の中で言葉にしてみます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 比べる相手を「過去の自分」にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同僚と比べる代わりに、半年前、1年前の自分と比べてみます。
          アドラーにとって、劣等感は他人に勝つためではなく、自分が成長するためのものでした。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 役に立たない場で、居場所を感じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何も求められない場——家族や友人との時間、趣味の集まり——で、ただそこにいることを味わいます。
          役に立たなくても居場所がある、という感覚を、少しずつ体で覚えていきます。
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
          <li>・<Link to="/articles/low-self-esteem-why" className={linkCls}>自己肯定感が低い原因</Link></li>
          <li>・<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link></li>
          <li>・<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-horney-shoulds" className={linkCls}>「〜すべき」に追い詰められる理由(ホーナイから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分は足りない」と頑張り続けてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          役に立つかどうかと関係のない時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          劣等感を頑張りで埋めてきた歴史を、責めずに一緒に整理します。足りなさを証明し続けなくていい場所です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-adler-inferiority"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はアドラーの理論の主要な概念を筆者がまとめたもので、特定の翻訳書からの引用は行っていません。思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

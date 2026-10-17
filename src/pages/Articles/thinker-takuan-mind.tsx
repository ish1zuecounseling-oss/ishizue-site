import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "沢庵の『不動智神妙録』とは、どんな本ですか?",
    a: "江戸時代初期の禅僧・沢庵宗彭が、将軍家の剣術指南役だった柳生宗矩に宛てて書いたとされる書簡です。剣の道と禅の心を重ね合わせ、心をどこにも止めずに自由に働かせることの大切さを説いています。剣術書として読まれてきましたが、心の使い方についての教えとして、現代でも広く読まれています。",
  },
  {
    q: "「不動智」とは、心を動かさないことですか?",
    a: "逆です。沢庵の言う「不動」は、心が固まって動かないことではなく、何か一つのものに心が止まらず、とらわれないことを指します。心がどこにも引っかからないからこそ、どんな動きにも自由に応じられる。その状態を、揺らがないという意味で「不動」と呼んでいます。",
  },
  {
    q: "沢庵の教えは、マインドフルネスと同じですか?",
    a: "同じではありませんが、重なるところがあります。どちらも、一つの考えに心がとらわれた状態に気づき、注意を広く柔らかく保つことを大切にします。マインドフルネスが現代の心理療法として体系化された方法であるのに対し、沢庵の教えは禅と剣術の文脈から生まれた心の在り方です。",
  },
  {
    q: "仕事のことが頭から離れず眠れない日が続いています。どうすればいいですか?",
    a: "一時的なものなら、仕事と生活を切り替える合図を作る、考えを紙に書き出すといった工夫が役立ちます。ただ、眠れない日が2週間以上続く、日中の生活に支障が出ているといった場合は、心身が限界に近いサインのことがあります。医療機関や専門家に相談してください。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerTakuanMind() {
  return (
    <ArticleLayout
      title="心を一か所に止めない｜沢庵『不動智神妙録』から読む、仕事のことが頭から離れない支援職【公認心理師】"
      description="「心をどこに置くか。どこにも置かなければ、心は全身に行き渡る」——江戸時代の禅僧・沢庵が剣の達人に説いた心の使い方は、一人の利用者のことが頭から離れない支援職の悩みにそのまま重なります。『不動智神妙録』を手がかりに、反芻から抜け出す方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-takuan-mind"
      date="2026-10-17"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 沢庵宗彭
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
        今日の面談で、あの利用者に言った一言が引っかかっている。
        夕飯を食べていても、子どもと話していても、気がつくとその場面に戻っている。
        布団に入っても、「別の言い方があったのでは」と考え続けてしまう——。
      </p>
      <p>
        心が一つのことに止まって、離れなくなる。
        この状態を、約400年前に一人の禅僧が見事に言い表しています。
        <strong>沢庵宗彭</strong>です。
      </p>

      <h2>沢庵と『不動智神妙録』</h2>
      <p>
        沢庵(1573–1646)は、江戸時代初期の臨済宗の僧です。
        幕府の宗教政策に異を唱えて流罪になったこともありますが、のちに三代将軍家光の信頼を得て、江戸に東海寺を開きました。
        たくあん漬けの名前の由来になったという言い伝えでも知られています。
      </p>
      <p>
        『不動智神妙録』は、将軍家の剣術指南役・柳生宗矩に宛てて書いたとされる書簡です。
        剣の勝負で心をどう使うかを、禅の教えから説いたもので、
        剣術の世界を超えて、心の使い方の古典として読み継がれてきました。
      </p>

      <h2>「心をどこに置くか」</h2>
      <p>
        沢庵はこう問いかけます。剣を交えるとき、心をどこに置けばいいのか(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          相手の体の動きに心を置けば、相手の動きに心を取られる。
          相手の刀に心を置けば、刀に心を取られる。
          相手を斬ろうと思うことに心を置けば、そのことに心を取られる。
          自分の刀に心を置けば、自分の刀に心を取られる。<br />
          では、どこにも置かなければどうなるか。
          心は体いっぱいに行き渡り、手が要るときは手が、足が要るときは足が、自在に働く。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          沢庵『不動智神妙録』より(原文をもとに筆者が現代語訳・要約)
        </p>
      </div>
      <p>
        心がどこか一か所に止まると、そこに心を取られ、ほかが見えなくなる。
        沢庵は、心が一か所に止まらず、どこにも引っかからない状態を<strong>「不動智」</strong>と呼びました。
        「不動」とは、心が固まって動かないことではなく、<strong>何にもとらわれないから揺らがない</strong>という意味です。
      </p>

      <h2>「心は水のように、氷のようにではなく」</h2>
      <p>
        沢庵は、とらわれのない心と、とらわれた心の違いを、水と氷にたとえています(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          本来の心は、水のように一か所にとどまらない。
          とらわれた心は、氷のように固まっている。
          氷では手も顔も洗えない。
          氷を溶かして水にし、どこへでも流れるようにすれば、何でも洗うことができる。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同書より(原文をもとに筆者が現代語訳・要約)
        </p>
      </div>
      <p>
        一つの考えに凍りついた心は、目の前のことに使えなくなる。
        溶けて流れる心だけが、そのつど必要なところに届く——。
        400年前の言葉ですが、現代の心理学が「反芻」と呼ぶ状態の説明として、驚くほど的確です。
      </p>

      <h2>支援職に置き換えると——止まった心、凍った心</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 一人の利用者に心が止まる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気がかりな利用者のことで頭がいっぱいになると、ほかの利用者の小さな変化に気づけなくなります。
          沢庵の言う「心を取られる」状態です。
          一人を大切に思う気持ちが、かえって全体を見えにくくしてしまいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 失敗の場面に心が凍る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          うまくいかなかった対応を、何度も頭の中で再生してしまう。
          これは反省ではなく、心が氷のように固まった<strong>反芻</strong>です。
          考えるほど次の一手が見えにくくなるのは、そのためです。
          (<Link to="/articles/helper-rumination" className={linkCls}>仕事のことが頭から離れない</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事に心を置いたまま家に帰る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          帰宅しても、心は職場に止まったまま。
          家族といても、体はここにあるのに、心はここにない。
          休んでも疲れが取れないのは、心が休んでいないからです。
          (<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>休みの日も休まらない</Link>もあわせてどうぞ)
        </p>
      </div>

      <LineCtaFatigue />

      <h2>よくある誤解と、この教えの限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誤解:「心を止めない」=気にかけない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心をどこにも置かないとは、無関心になることではありません。
          どこにも止まらないからこそ、必要な場面で、必要なところに心が届く。
          利用者を気にかけることと、その人のことで心が凍りつくことは、別のことです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:すぐにできるものではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          沢庵の教えは、剣の達人に向けて、長い修行を前提に書かれたものです。
          「とらわれないようにしよう」と思うほど、そのことにとらわれるのが心の性質でもあります。
          まずは<strong>「今、心が止まっている」と気づけること</strong>を目標にしてください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「どこに心を取られているか」に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同じ場面が頭の中で再生されはじめたら、「今、〇〇さんのことに心が止まっている」と心の中で言葉にします。
          名前をつけるだけで、氷が少し溶けはじめます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 体に心を行き渡らせる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          沢庵は、心が体いっぱいに行き渡る状態を説きました。
          足の裏が床に触れている感覚、呼吸で胸がふくらむ感覚に、少しのあいだ注意を向けてみます。
          考えから体へ注意を移すと、止まっていた心が流れはじめます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 気がかりは、紙に預けて帰る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          帰る前に、気になっていることを紙に書き、「続きは明日、ここから考える」と一行添えます。
          心に置いたまま帰るのではなく、<strong>紙に置いて帰る</strong>ことで、家に心を持ち帰れるようになります。
          (<Link to="/articles/cannot-sleep-thinking-work" className={linkCls}>眠れない・仕事のことが頭から離れない</Link>もあわせてどうぞ)
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
          <li>・<Link to="/articles/helper-rumination" className={linkCls}>仕事のことが頭から離れない</Link></li>
          <li>・<Link to="/articles/cannot-sleep-thinking-work" className={linkCls}>眠れない・仕事のことが頭から離れない(反芻思考)</Link></li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link></li>
          <li>・<Link to="/articles/thinker-nietzsche-abyss" className={linkCls}>深淵をのぞく時(ニーチェから読む)</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">仕事のことが、頭から離れない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          凍りついた考えを、話しながら溶かしていく時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          一人で考え続けると、同じところを回りがちです。言葉にして外に出すと、止まっていた心が少しずつ流れはじめます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-takuan-mind"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインの原典(沢庵『不動智神妙録』)をもとに筆者が現代語訳・要約したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "レヴィナスの「顔」とは何ですか?",
    a: "フランスの哲学者エマニュエル・レヴィナスが用いた概念で、目や鼻といった見た目のことではなく、他者が私に向かって現れ、呼びかけてくる、その無防備なあり方のことです。レヴィナスは、他者の顔が「私を見捨てないでくれ」と訴えかけるように、私に責任を呼び起こすと考えました。",
  },
  {
    q: "レヴィナスの言う「責任」とは、どんなものですか?",
    a: "レヴィナスは、私たちは他者に対して、見返りを求めることのできない、終わりのない責任を負っていると考えました。それは自分で選んで引き受けるより前に、他者の顔に出会ったときにすでに課されている責任です。この考え方は、ケアや医療、福祉の倫理を考えるうえで大きな影響を与えています。",
  },
  {
    q: "レヴィナスの「第三者」とは何ですか?",
    a: "目の前の他者だけでなく、そのほかにも他者がいる、という事実を指す言葉です。目の前の一人に対しては無限の責任があっても、ほかにも応えるべき人がいる以上、比べ、測り、配分することが必要になる。レヴィナスは、第三者の存在から「正義」の問題が生まれると考えました。",
  },
  {
    q: "目の前の利用者に応えきれない自分を責めてしまいます。",
    a: "レヴィナスの考えでは、他者への責任は本来、限りのないものです。だからこそ、応えきれないと感じるのは、責任感が欠けているからではなく、責任を真剣に受け止めているからとも言えます。そのうえで、ほかの利用者、同僚、そして自分自身の生活を守るために限界を設けることは、責任の放棄ではなく、レヴィナスの言う「正義」の側面でもあります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerLevinasFace() {
  return (
    <ArticleLayout
      title="なぜ支援職は、応えずにいられないのか｜レヴィナスの「顔」と「第三者」から読む、無限の責任と境界線【公認心理師】"
      description="哲学者エマニュエル・レヴィナスは、他者の「顔」は私に終わりのない責任を呼び起こすと考えました。目の前の利用者に応えずにいられない支援職の倫理の根っこと、ほかにも応えるべき人がいるという「第三者」から生まれる、境界線の意味を公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-levinas-face"
      date="2026-10-24"
      tags={["compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ エマニュエル・レヴィナス
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
        勤務時間が終わっても、困った顔をした利用者を前にすると、帰れない。
        「今日はここまで」と言うべきだとわかっていても、その顔を見ると言葉が出てこない。
        応えなければ、自分が見捨てたことになる気がする——。
      </p>
      <p>
        なぜ私たちは、目の前の人に応えずにいられないのか。
        この問いに、哲学の言葉で最も深く向き合った一人が、フランスの哲学者<strong>エマニュエル・レヴィナス</strong>です。
      </p>

      <h2>エマニュエル・レヴィナス——他者から始まる哲学</h2>
      <p>
        レヴィナス(1906–1995)は、リトアニアに生まれたユダヤ系の哲学者で、のちにフランスで活躍しました。
        第二次世界大戦中は捕虜収容所で過ごし、故郷に残った家族の多くを失っています。
        人間が他者を抹殺することさえできてしまうという経験を背景に、
        レヴィナスは<strong>他者に対する責任</strong>を哲学の中心に据えました。
      </p>
      <p>
        主著『全体性と無限』(1961年)などで展開されたその思想は難解ですが、
        医療、看護、福祉など、ケアの倫理を考える分野に大きな影響を与えています。
        この記事では、その中心にある考え方を、筆者の言葉でできるだけ平易に紹介します。
      </p>

      <h2>他者の「顔」が、責任を呼び起こす</h2>
      <p>
        レヴィナスの言う<strong>「顔」</strong>は、目や鼻といった見た目のことではありません。
        他者が私の前に現れ、無防備なままこちらに向かってくる、そのあり方のことです。
      </p>
      <p>
        レヴィナスによれば、他者の顔は、何も言わなくても<strong>「私を見捨てないでくれ」と訴えかけてくる</strong>。
        そして私は、その訴えに応える責任を、自分で選ぶより前に、すでに負わされている。
        この責任は、見返りを期待できるものではなく、果たしきることのできない、終わりのないものだとレヴィナスは考えました。
      </p>
      <p>
        さらにレヴィナスは、他者は決して私の理解の中に収まりきらない、とも考えました。
        私がどれだけ相手を理解したつもりでも、相手はいつも、私の想像を超えた存在であり続けます。
      </p>

      <h2>支援職に置き換えると——応えずにいられない理由</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 顔を前にすると、断れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          困っている利用者の顔を前にして、「できません」と言えない。
          それは気が弱いからではなく、レヴィナスの言う、他者の顔から呼び起こされる責任を、真剣に受け止めているからかもしれません。
          支援職の「応えずにいられない」気持ちは、ケアの倫理の根っこにあるものです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 責任には終わりがない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          レヴィナスの考えでは、他者への責任は、どこまで応えても果たしきれないものです。
          だからこそ、責任を真剣に受け止める人ほど、「まだ足りない」と感じ続け、疲れ果てていきます。
          (<Link to="/articles/compassion-fatigue-complete" className={linkCls}>共感疲労の全体像</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 相手を「わかったつもり」になる危うさ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援では、利用者をアセスメントし、理解しようとします。
          けれどレヴィナスに従えば、相手は私の理解に収まりきらない存在です。
          「この人はこういう人だ」と決めつけることは、相手の他者性を見失うことにもなります。
        </p>
      </div>

      <h2>「第三者」——無限の責任と、正義</h2>
      <p>
        ここで、支援職にとって大切な、レヴィナスのもう一つの考えがあります。
        <strong>第三者</strong>です。
      </p>
      <p>
        目の前の一人に対しては、終わりのない責任がある。
        けれど現実には、私の前には<strong>ほかにも他者がいる</strong>。
        ほかの利用者、その家族、同僚、そして自分の家族。
        すべての人に応えなければならない以上、目の前の一人だけに無限に応えることはできません。
      </p>
      <p>
        レヴィナスは、第三者の存在によって、<strong>比べ、測り、配分すること</strong>——つまり<strong>正義</strong>の問題が生まれると考えました。
        ここに、支援職が境界線を引くことの、倫理的な意味があります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          勤務時間を守ること、対応の範囲を決めること、ほかの職員に引き継ぐこと。
          それらは、目の前の人への責任を放棄することではなく、
          <strong>ほかにも応えるべき人がいるという現実に対する、正義の側面</strong>なのです。
          (<Link to="/articles/boundary-what" className={linkCls}>境界線とは</Link>もあわせてどうぞ)
        </p>
      </div>

      <LineCtaCompassion />

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">レヴィナスの思想は、ここで扱った以上に深く難しい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          レヴィナスの哲学は難解で、研究者の間でもさまざまな解釈があります。
          この記事では、支援職の経験に関わる部分を、筆者の理解でできるだけ平易に紹介しています。
          関心のある方は、解説書や研究書にもあたってみてください。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「無限の責任」を、自己犠牲の理由にしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          レヴィナスの責任論を「どこまでも応えるべきだ」とだけ読むと、自己犠牲を正当化することになりかねません。
          第三者と正義の考えを合わせて読むことで、限界を設けることもまた倫理の一部だと理解できます。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「応えずにいられない」気持ちを、否定しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          断れない自分を「弱い」と責める前に、それが他者への責任を真剣に受け止めている証でもあることを認めます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 線を引くとき、「第三者」を思い出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今日はここまで」と言うのがつらいとき、明日会うほかの利用者や、待っている家族を思い出します。
          線を引くことは、その人たちへの責任でもあります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「わかったつもり」を一つ手放す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「この人はこういう人」と決めつけている利用者がいれば、自分の知らない一面があるかもしれない、と考えてみます。
          (<Link to="/articles/thinker-socrates-midwife" className={linkCls}>ソクラテスの「無知の知」の回</Link>も参考になります)
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
          <li>・<Link to="/articles/boundary-what" className={linkCls}>境界線とは</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className={linkCls}>共感疲労(コンパッション・ファティーグ)の全体像</Link></li>
          <li>・<Link to="/articles/thinker-derrida-hospitality" className={linkCls}>すべてを受け入れたいのに、条件がある(デリダから読む)</Link></li>
          <li>・<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>人類を愛するほど、隣の人を愛せない(ドストエフスキーから読む)</Link></li>
          <li>・<Link to="/articles/thinker-saint-exupery-bond" className={linkCls}>関わった時間が、その人を大切にする(サン＝テグジュペリから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">応えきれない自分を、責めている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          責任と限界のあいだを、一緒に考える時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          応えたい気持ちを否定せずに、どこに線を引けば続けられるのかを、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/thinker-levinas-face"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はレヴィナスの哲学の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。解釈には諸説があります。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

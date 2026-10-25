import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "西田幾多郎の「純粋経験」とは何ですか?",
    a: "『善の研究』(1911年)の中心にある考え方で、「これは何だ」「自分が感じている」といった考えや判断が加わる前の、ありのままの経験のことです。たとえば音楽に聴き入っているとき、聴いている自分と音楽が分かれていない瞬間があります。西田は、そうした経験こそが最も根本的な実在だと考えました。",
  },
  {
    q: "純粋経験は、マインドフルネスと同じですか?",
    a: "同じではありませんが、重なるところがあります。マインドフルネスは、今この瞬間の体験に、評価や判断を加えずに注意を向ける心理的な方法です。西田の純粋経験は、それより広く、世界や自己のあり方そのものを問う哲学の概念です。ただ、「判断を加える前の体験に立ち返る」という点では、通じ合う部分があります。",
  },
  {
    q: "「経験あって個人あるのである」とは、どういう意味ですか?",
    a: "『善の研究』の序文にある言葉で、まず個人がいて、その個人が経験するのではなく、まず経験があって、そこから個人が成り立ってくる、という意味です。自分というものを、経験をする主体としてではなく、経験の中から生まれてくるものとしてとらえ直す、西田の哲学の出発点を示しています。",
  },
  {
    q: "『善の研究』は、初めてでも読めますか?",
    a: "文語調の文章で、哲学の専門用語も多いため、最初は難しく感じるかもしれません。第1編「純粋経験」の冒頭だけでも、西田の考え方の入口に触れることができます。解説書や現代語訳から入るのも一つの方法です。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerNishidaPureExperience() {
  return (
    <ArticleLayout
      title="考える前の、ありのままの経験｜西田幾多郎『善の研究』の「純粋経験」から読む、評価し続けて疲れる支援職【公認心理師】"
      description="「色を見、音を聞く刹那、これは何であるという判断すら加わらない前」——西田幾多郎は、考えや判断が加わる前の経験を「純粋経験」と呼びました。利用者も自分も評価し続けて疲れてしまう支援職が、判断の外にある時間を取り戻す方法を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-nishida-pure-experience"
      date="2026-10-18"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 西田幾多郎
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
        利用者の様子を見ては、「今日は調子が悪そうだ」「この対応でよかったか」と考える。
        帰り道でも、「あの言い方はまずかった」「自分はまだまだだ」と振り返る。
        景色を見ても、音楽を聴いても、頭の中ではずっと何かを評価している——。
      </p>
      <p>
        支援職は、評価し、判断することが仕事の一部です。
        けれど、それが一日中止まらなくなると、心は休む場所を失います。
        そんなとき手がかりになるのが、日本を代表する哲学者、<strong>西田幾多郎</strong>の言葉です。
      </p>

      <h2>西田幾多郎と『善の研究』</h2>
      <p>
        西田幾多郎(1870–1945)は、石川県に生まれた哲学者です。
        京都大学で教え、のちに「京都学派」と呼ばれる哲学の流れの中心となりました。
        京都の「哲学の道」は、西田が思索しながら歩いたことにちなんで名づけられたと言われています。
      </p>
      <p>
        最初の著書『善の研究』(1911年)は、西洋哲学と東洋の思想、
        そして西田自身の長年の参禅の経験を背景に書かれた本で、日本で最初の独創的な哲学書とも評されています。
        その出発点にあるのが、<strong>純粋経験</strong>という考え方です。
      </p>

      <h2>「毫も思慮分別を加えない、真に経験其儘の状態」</h2>
      <p>
        『善の研究』は、次の一節から始まります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          経験するというのは事実其儘に知るの意である。全く自己の細工を棄てて、事実に従うて知るのである。
          純粋というのは、普通に経験といっている者もその実は何らかの思想を交えているから、
          毫も思慮分別を加えない、真に経験其儘の状態をいうのである。
          たとえば、色を見、音を聞く刹那、未だこれが外物の作用であるとか、我がこれを感じているとかいうような考のないのみならず、
          この色、この音は何であるという判断すら加わらない前をいうのである。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          西田幾多郎『善の研究』第1編第1章「純粋経験」(原文を新字体・現代仮名遣いに改めて引用)
        </p>
      </div>
      <p>
        少し難しいので、現代の言葉にしてみます。
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          ふだん「経験」と呼んでいるものには、たいてい何かしらの考えが混ざっている。
          純粋経験とは、そうした考えや判断をまったく加えない、ありのままの経験のことだ。
          たとえば色を見たり音を聞いたりしたその瞬間、
          「外から来た刺激だ」とか「自分が感じている」とかいう考えはもちろん、
          「これは何色だ」「これは何の音だ」という判断さえ、まだ加わっていない——その状態をいう。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          筆者による現代語訳
        </p>
      </div>
      <p>
        夕焼けに見とれて、我を忘れる。好きな音楽に聴き入って、時間を忘れる。
        そのとき、見ている自分と夕焼け、聴いている自分と音楽は、分かれていません。
        <strong>評価も判断も始まる前の、ただ経験している瞬間</strong>。
        西田は、それこそが最も確かな現実だと考えました。
      </p>

      <h2>「経験あって個人あるのである」</h2>
      <p>
        西田は『善の研究』の序文で、さらにこう書いています。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          個人あって経験あるにあらず、経験あって個人あるのである。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同書「序」(原文を新字体・現代仮名遣いに改めて引用)
        </p>
      </div>
      <p>
        私たちはふつう、「まず自分がいて、その自分が経験する」と考えます。
        西田はそれを逆にしました。<strong>まず経験があり、そこから自分というものが成り立ってくる</strong>。
        自分は、経験を外から評価する裁判官ではなく、経験の中から生まれてくるものだ、というのです。
      </p>

      <h2>支援職に置き換えると——評価が止まらない疲れ</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 経験が、いつも判断越しになる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          アセスメント、記録、振り返り。支援職は、目の前のことを判断し、言葉にすることを求められ続けます。
          それが習慣になると、仕事の外でも、景色も食事も人との会話も、判断越しにしか経験できなくなります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自分自身を、評価し続ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今日の自分は何点だったか」と、自分を外から採点し続ける。
          西田の言葉を借りれば、経験の中にいるのではなく、経験を外から裁く裁判官になってしまっている状態です。
          (<Link to="/articles/thinker-horney-shoulds" className={linkCls}>ホーナイの「べき」の専制</Link>ともつながる疲れ方です)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 体の感覚が、判断に埋もれる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頭の中が判断でいっぱいだと、体が発しているサインに気づけなくなります。
          (<Link to="/articles/thinker-ikemi-alexisomia" className={linkCls}>池見酉次郎の「失体感症」の回</Link>もあわせてどうぞ)
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">西田の哲学は、ここで扱った以上に深く難しい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          純粋経験は、西田の壮大な哲学体系の出発点にすぎません。
          この記事では、そのごく入口を、日々の疲れを見直す手がかりとして読んでいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">判断をやめることが目的ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の仕事には、的確な判断が欠かせません。
          大切なのは判断を捨てることではなく、<strong>判断の外にある時間も持つこと</strong>です。
          判断し続けるだけの一日は、心にとって休みのない一日です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 5秒だけ、判断せずに感じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          温かい飲み物を手に取ったとき、5秒だけ、その温かさと香りをそのまま感じてみます。
          「おいしい」「熱い」と言葉にする前の感覚に、少しだけとどまってみる練習です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 我を忘れる時間を、予定に入れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          散歩、音楽、料理、手仕事など、気づいたら時間がたっていたという経験ができることを、意識して週に一度入れます。
          (<Link to="/articles/thinker-takuan-mind" className={linkCls}>沢庵の「心を止めない」の回</Link>も参考になります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 帰り道は、採点をお休みする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          帰り道に今日の自分を採点しはじめたら、「振り返りは明日の朝にする」と決めて、
          目に入る景色や、足が地面を踏む感覚に注意を戻します。
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
          <li>・<Link to="/articles/thinker-ikemi-alexisomia" className={linkCls}>体の声が聞こえなくなるとき(池見酉次郎から読む)</Link></li>
          <li>・<Link to="/articles/thinker-takuan-mind" className={linkCls}>心を一か所に止めない(沢庵から読む)</Link></li>
          <li>・<Link to="/articles/body-stays-tense" className={linkCls}>なぜ休んでも緊張が抜けないのか</Link></li>
          <li>・<Link to="/articles/helper-rumination" className={linkCls}>仕事のことが頭から離れない</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">自分を採点し続けて、疲れている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          評価されない場所で、話をする時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          ここでは、あなたを採点しません。うまく話そうとしなくていい場所で、今感じていることをそのまま言葉にしていきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-nishida-pure-experience"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインの原典(西田幾多郎『善の研究』1911年)を新字体・現代仮名遣いに改めたもので、現代語訳は筆者によるものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

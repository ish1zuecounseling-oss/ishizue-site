import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "ラッセルの『幸福論』は、どんな本ですか?",
    a: "イギリスの哲学者バートランド・ラッセルが1930年に出版した本(原題 The Conquest of Happiness)です。前半で不幸の原因(退屈、疲労、ねたみ、罪の意識、世間の目への恐れなど)を、後半で幸福をもたらすもの(熱意、愛情、仕事、私心のない興味など)を論じています。哲学書というより、日常の悩みに向けた実践的な本として読まれています。",
  },
  {
    q: "ラッセルは、疲れの原因をどう考えていましたか?",
    a: "ラッセルは、現代人の疲れの多くは体の疲れではなく、神経の疲れであり、その大きな原因は「心配」だと考えました。仕事そのものより、仕事についての心配が人を疲れさせる。だから、考えるべきときに集中して考え、それ以外のときは考えないようにする心の習慣が大切だと説いています。",
  },
  {
    q: "「自分の仕事が非常に重要だと思い込むのは、神経衰弱が近づいている兆候だ」とは、どういう意味ですか?",
    a: "ラッセルが『幸福論』の疲労についての章で述べた趣旨の言葉です。自分がいないと仕事が回らない、休めば大変なことになる、と感じはじめたら、それは仕事が本当に重要だからではなく、心身が限界に近づいているサインかもしれない、という警告です。",
  },
  {
    q: "休みの日も仕事の心配が止まりません。どうすればいいですか?",
    a: "ラッセルのすすめは、心配ごとについて考える時間を決め、その時間に集中して考え、それ以外の時間は考えないようにすることです。また、仕事と関係のない興味を持つことも勧めています。それでも心配が止まらず眠れない状態が続く場合は、心身の不調のサインのことがあるので、専門家に相談してください。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerRussellFatigue() {
  return (
    <ArticleLayout
      title="「自分がいないと回らない」は疲れのサイン｜ラッセル『幸福論』から読む、心配で疲れる支援職【公認心理師】"
      description="哲学者バートランド・ラッセルは『幸福論』で、現代人の疲れの多くは仕事そのものではなく「心配」から来ると考え、自分の仕事が非常に重要だと思い込むことを、神経の疲れが近づいている兆候だと述べました。休めない支援職の疲れと心の習慣を、公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-russell-fatigue"
      date="2026-10-21"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ バートランド・ラッセル
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
        有給休暇をとっても、休んでいる気がしない。
        「自分がいないと、あの利用者の対応はどうなるだろう」
        「急な連絡が来たら、誰が判断するんだろう」。
        結局、休みの日にも職場のことを考え、スマホの通知を気にしてしまう——。
      </p>
      <p>
        体は休んでいるのに、疲れが取れない。
        その理由を、90年以上前に明快に説明した哲学者がいます。
        イギリスの<strong>バートランド・ラッセル</strong>です。
      </p>

      <h2>バートランド・ラッセルと『幸福論』</h2>
      <p>
        ラッセル(1872–1970)は、イギリスの哲学者・数学者です。
        論理学や数学の基礎を築いた研究で知られ、1950年にはノーベル文学賞を受賞しました。
        平和運動にも生涯をかけて取り組んだ人物です。
      </p>
      <p>
        そのラッセルが1930年に書いたのが、<strong>『幸福論』(原題 The Conquest of Happiness)</strong>です。
        難しい哲学ではなく、普通の人が日常で感じる不幸の原因と、幸福になるための心の習慣を、率直な言葉で論じた本です。
        その中に、<strong>疲労</strong>についての章があります。
      </p>

      <h2>人を疲れさせるのは、仕事ではなく「心配」</h2>
      <p>
        ラッセルは、現代の人々が感じている疲れの多くは、体を使ったことによる疲れではなく、
        <strong>神経の疲れ</strong>だと考えました。
        そして、その大きな原因は<strong>心配</strong>にあると言います。
      </p>
      <p>
        仕事そのものより、仕事についての心配が、人をすり減らす。
        夜、布団に入ってからも、解決できない問題について考え続ける。
        考えても何も変わらないのに、考えることをやめられない——。
        ラッセルは、こうした心配のくり返しこそが、人を最も疲れさせると見ていました。
      </p>
      <p>
        ラッセルのすすめはシンプルです。
        <strong>考えるべきときに、集中して考える。それ以外のときは、考えない。</strong>
        問題について十分に考え、決めたら、あとは心から追い出す。
        この心の習慣を身につけることで、神経の疲れはずいぶん減らせる、というのです。
      </p>

      <h2>「自分の仕事が非常に重要だ」という思い込み</h2>
      <p>
        同じ章で、ラッセルは支援職にとって耳の痛い指摘をしています。
        その趣旨を要約すると、次のようになります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          神経が限界に近づいていることを示す兆候の一つは、自分の仕事がとてつもなく重要で、
          休みをとれば大変なことが起きると思い込むことである。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          B. ラッセル『幸福論』疲労の章より、趣旨を筆者が要約
        </p>
      </div>
      <p>
        「自分がいないと回らない」「休んだら利用者に迷惑がかかる」。
        そう感じるのは、責任感が強いからだけではないかもしれません。
        ラッセルの見方では、それは<strong>心身の疲れが限界に近づいているサイン</strong>でもあるのです。
        (<Link to="/articles/helper-signs-to-rest" className={linkCls}>支援職が休むべきサインとは</Link>もあわせてどうぞ)
      </p>

      <h2>支援職に置き換えると——「心配」で休めない</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 休みの日にも、心配が仕事をしている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          体は家にいても、頭の中では利用者のこと、職場のことが回り続けている。
          ラッセルの言う神経の疲れは、休みの日にも積み重なっていきます。
          (<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「休むと迷惑がかかる」と思い込む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の不在がどれほどの影響をもたらすかを、実際より大きく見積もってしまう。
          休むことへの罪悪感が強いほど、疲れは抜けにくくなります。
          (<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない</Link>も参考になります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事以外の関心がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ラッセルは、仕事と関係のない<strong>私心のない興味</strong>を持つことが、心を休ませると考えました。
          頭が仕事のことだけで占められていると、心配から離れる場所がありません。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">本当に人が足りない職場もある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の現場では、実際に人手が足りず、一人が休むと業務が回らないこともあります。
          その場合、「思い込み」の問題ではなく、職場の体制の問題です。
          自分の心の習慣を見直すことと、体制について声を上げることは、両方必要です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「考えない」は、言うほど簡単ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心配をやめようと思っても、なかなかやめられないのが人の心です。
          ラッセルのすすめは、意志の力でねじ伏せることではなく、考える時間と考えない時間を分ける、という習慣づくりとして試してみてください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「心配する時間」を決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事の心配について考える時間を、たとえば夕方の15分と決めます。
          その時間に集中して考え、必要なことはメモに書き出します。
          それ以外の時間に心配が浮かんだら、「それは夕方に考える」と脇に置きます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自分の不在の影響を、現実的に見積もる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分が1日休んだら、実際に何が起こるかを紙に書いてみます。
          書き出すと、多くのことは誰かが対応できるか、翌日に回せることに気づきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事と無関係な興味を一つ育てる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          歴史、植物、星、料理など、仕事とまったく関係のないことに関心を向けてみます。
          ラッセルの言う「私心のない興味」が、心配から心を離す場所になります。
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
          <li>・<Link to="/articles/helper-signs-to-rest" className={linkCls}>支援職が休むべきサインとは</Link></li>
          <li>・<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない</Link></li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link></li>
          <li>・<Link to="/articles/thinker-kross-chatter" className={linkCls}>頭の中の反省会が止まらない(イーサン・クロスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-takuan-mind" className={linkCls}>心を一か所に止めない(沢庵から読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">休んでも疲れが取れない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          頭の中の心配を、いったん外に出す時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          一人で抱えている心配を言葉にすると、考えるべきことと手放してよいことが見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-russell-fatigue"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はラッセル『幸福論』の考え方を筆者が要約したもので、一部は趣旨の要約として示しています。邦訳に『ラッセル幸福論』(岩波文庫ほか)があります。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

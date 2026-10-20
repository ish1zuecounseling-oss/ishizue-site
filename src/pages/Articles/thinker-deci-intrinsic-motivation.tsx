import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "エドワード・デシの「自己決定理論」とは何ですか?",
    a: "アメリカの心理学者エドワード・デシとリチャード・ライアンが体系化した、人のやる気についての理論です。人には「自律性(自分で選んでいる感覚)」「有能感(うまくできている感覚)」「関係性(人とつながっている感覚)」という3つの基本的な欲求があり、これらが満たされると、内側から湧くやる気(内発的動機づけ)が保たれるとされます。",
  },
  {
    q: "報酬がやる気を下げるというのは本当ですか?",
    a: "デシは1970年代の実験で、もともと楽しんでいたパズルに報酬を与えると、報酬がなくなったあとの自由時間に、そのパズルに取り組む時間が減ることを示しました。報酬そのものが悪いわけではありませんが、報酬や評価が「やらされている」という感覚を強めると、内側からのやる気が損なわれることがある、という発見です。",
  },
  {
    q: "やりがいを感じられなくなったのは、自分の気持ちの問題ですか?",
    a: "必ずしもそうではありません。自己決定理論の視点では、やりがいは本人の気持ちだけで決まるのではなく、自分で選べる余地があるか、手応えを感じられるか、人とつながっているかという環境の条件に大きく左右されます。やりがいが失われたときは、自分を責める前に、この3つのどれが欠けているかを見てみてください。",
  },
  {
    q: "自己決定理論は、利用者への支援にも使えますか?",
    a: "使えます。自己決定理論は、教育や医療、福祉の分野でも広く応用されています。利用者自身が選べる余地をつくる、小さな成功を一緒に確かめる、安心できる関係を築く——これらは、利用者の内側からの意欲を支えるための、理論に裏づけられた関わり方です。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerDeciIntrinsicMotivation() {
  return (
    <ArticleLayout
      title="やりがいがすり減っていく理由｜エドワード・デシの「内発的動機づけ」と自己決定理論から読む、支援職のやらされ感【公認心理師】"
      description="心理学者エドワード・デシは、報酬や管理が「やりたい」という内側からのやる気を損なうことを実験で示し、人には自律性・有能感・関係性という3つの欲求があると考えました。好きで選んだ仕事なのに、やらされ感ばかりになっていく支援職の状態を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-deci-intrinsic-motivation"
      date="2026-10-20"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ エドワード・デシ
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
        人の役に立ちたくて、この仕事を選んだ。
        最初のころは、利用者と話す時間が楽しかった。
        けれど今は、記録、加算の要件、監査対応、ノルマ。
        気がつけば、「やりたいこと」ではなく「やらなければならないこと」をこなす毎日になっている——。
      </p>
      <p>
        好きで選んだ仕事なのに、やりがいがすり減っていく。
        この変化を、実験で明らかにした心理学者がいます。
        アメリカの<strong>エドワード・デシ</strong>です。
      </p>

      <h2>エドワード・デシと自己決定理論</h2>
      <p>
        デシ(1942年生まれ)は、アメリカのロチェスター大学で研究を続けてきた心理学者です。
        同僚のリチャード・ライアンとともに、人のやる気についての理論<strong>「自己決定理論」</strong>を体系化しました。
        この理論は、教育、医療、スポーツ、職場など、幅広い分野で応用されています。
      </p>
      <p>
        デシの研究の出発点は、1970年代に行った、ある実験でした。
      </p>

      <h2>報酬が、やる気を下げることがある</h2>
      <p>
        デシは、大学生に立体パズルを解いてもらう実験を行いました。
        一方のグループには、パズルを解くたびに報酬を払い、もう一方のグループには払いませんでした。
        その後、実験者が席を外し、学生たちが自由に過ごせる時間をつくって、様子を観察しました。
      </p>
      <p>
        すると、<strong>報酬をもらっていたグループのほうが、自由時間にパズルに取り組む時間が短くなった</strong>のです。
        もともと楽しんでいたことでも、報酬のために「やらされる」ものになると、
        自分から進んでやる気持ちが弱まってしまう——デシはこう考えました。
      </p>
      <p>
        このやる気を、デシは<strong>内発的動機づけ</strong>と呼びました。
        誰かに言われたからでも、報酬のためでもなく、それ自体が楽しい、意味があると感じるから取り組む、内側から湧くやる気です。
      </p>

      <h2>やる気を支える3つの欲求</h2>
      <p>
        デシとライアンは、内発的動機づけが保たれるには、3つの基本的な欲求が満たされる必要があると考えました。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>自律性</strong>:自分で選び、自分で決めている感覚</li>
          <li>・<strong>有能感</strong>:うまくできている、手応えがあるという感覚</li>
          <li>・<strong>関係性</strong>:人とつながり、受け入れられているという感覚</li>
        </ul>
      </div>
      <p>
        この3つが満たされている環境では、人は自分から意欲的に取り組みます。
        逆に、どれかが欠けると、やる気は「やらされ感」に変わっていきます。
      </p>

      <h2>支援職に置き換えると——3つの欲求が削られる職場</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自律性が削られる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          細かいマニュアル、加算の要件、上からの指示。
          自分の判断で利用者に関わる余地が少なくなるほど、仕事は「自分で選んだもの」から「やらされるもの」に変わっていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 有能感が感じにくい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の成果は、すぐには目に見えません。
          どれだけ頑張っても、利用者がよくなっているのかわからない。
          手応えのなさが続くと、自分は役に立っていないと感じるようになります。
          (<Link to="/articles/work-meaning-lost" className={linkCls}>「働く意味がわからない」状態が続くとき</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 関係性が薄れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足で同僚と話す時間がない。困ったときに相談できる相手がいない。
          チームの中で孤立すると、仕事の意欲も支えを失います。
        </p>
      </div>
      <p>
        やりがいがすり減ったとき、多くの支援職は「自分の気持ちが弱くなった」と考えがちです。
        けれど自己決定理論の視点では、問題は気持ちではなく、<strong>3つの欲求を満たせない環境</strong>にあることが少なくありません。
      </p>

      <LineCtaFatigue />

      <h2>この理論の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">報酬そのものが悪いわけではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          デシの研究は、「報酬はいらない」という意味ではありません。
          正当な給料や評価は、働く人を支える大切なものです。
          問題は、報酬や評価が<strong>人を管理する手段</strong>として使われ、自分で選んでいる感覚を奪うときです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">環境を変えるには、個人の工夫だけでは足りない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自律性や関係性は、職場の仕組みや人員配置に大きく左右されます。
          個人でできる工夫には限りがあり、環境そのものを見直すことも必要です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① どの欲求が欠けているかを点検する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自律性・有能感・関係性のうち、今いちばん満たされていないのはどれかを考えてみます。
          やりがいの低下を「自分の弱さ」ではなく「欠けている条件」として見ることが、最初の一歩です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「自分で選べる小さな部分」を探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          決められた業務の中でも、声のかけ方、記録の書き方、関わる順番など、自分で選べる部分を一つ見つけます。
          小さな選択でも、自律性の感覚は少しずつ戻ってきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 小さな手応えを書き留める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今日は〇〇さんが笑った」「話を最後まで聞けた」など、小さな手応えを一行書き留めます。
          見えにくい成果を見える形にすることで、有能感を取り戻していきます。
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
          <li>・<Link to="/articles/work-meaning-lost" className={linkCls}>「働く意味がわからない」状態が続くとき</Link></li>
          <li>・<Link to="/articles/helper-career-stagnation" className={linkCls}>支援職が感じるキャリア閉塞感との向き合い方</Link></li>
          <li>・<Link to="/articles/thinker-csikszentmihalyi-flow" className={linkCls}>仕事が退屈か、不安か(チクセントミハイから読む)</Link></li>
          <li>・<Link to="/articles/thinker-frankl-existential-vacuum" className={linkCls}>休日になると心が空っぽになる理由(フランクルから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">やりがいを見失いかけている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          この仕事を選んだ理由を、もう一度見つめる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何が欠けていて、何がまだ残っているのか。やりがいがすり減った理由を、責めずに一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-deci-intrinsic-motivation"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はデシらの研究と自己決定理論の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。邦訳に『人を伸ばす力——内発と自律のすすめ』(新曜社)があります。本記事は心理学の理論を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

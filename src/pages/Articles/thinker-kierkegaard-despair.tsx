import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "キルケゴールの『死に至る病』とは、どんな本ですか?",
    a: "デンマークの思想家キルケゴールが1849年に「アンチ・クリマクス」という筆名で出した著作です。「死に至る病」とは絶望のことで、人が自分自身との関係を見失っている状態を、いくつもの形に分けて分析しています。実存主義の源流とされ、のちの哲学や心理療法にも大きな影響を与えました。",
  },
  {
    q: "「死に至る病」は、自殺や死について書かれた本ですか?",
    a: "いいえ。ここでの「死」は肉体の死ではありません。キルケゴールは、絶望を「死ぬことさえできない苦しみ」、つまり自分自身から逃れることも、自分自身になることもできずにいる状態として描いています。もし今、強い絶望感や「消えてしまいたい」という気持ちが続いている場合は、本を読むより先に、医療機関や相談窓口に話してください。",
  },
  {
    q: "キルケゴールの「絶望」は、うつ病のことですか?",
    a: "同じではありません。キルケゴールの絶望は、気分の落ち込みではなく、「自分が自分であること」との関係のゆがみを指す哲学的な概念です。本人が平気だと感じていても絶望している場合がある、という点が特徴です。気分の落ち込みや不眠、食欲の変化などが続く場合は、うつ病などの可能性もあるため、医療機関に相談してください。",
  },
  {
    q: "キルケゴールとロジャーズには、どんなつながりがありますか?",
    a: "来談者中心療法を創始したカール・ロジャーズは、著書『On Becoming a Person』の中でキルケゴールの「本当の自分自身であろうと欲することは、まさに絶望の反対である」という言葉を引き、それを心理療法が目指す方向として説明しています。キルケゴールの哲学は、ロジャーズを通して現代のカウンセリングにも受け継がれています。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerKierkegaardDespair() {
  return (
    <ArticleLayout
      title="「平気です」の奥にある絶望｜キルケゴール『死に至る病』から読む、自分を見失う3つの形【公認心理師】"
      description="キルケゴールは『死に至る病』で、本人が気づかない絶望、自分であろうとしない絶望、自分だけで自分を支えようとする絶望を描きました。合わせすぎ、抱え込み、「平気です」が口ぐせの支援職が自分を見失っていく構造を、公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-kierkegaard-despair"
      date="2026-10-15"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ キルケゴール
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
        「大丈夫?」と聞かれれば、「平気です」と答える。
        頼まれれば引き受け、求められる役割はきちんとこなす。
        職場では「しっかりした人」と言われている。
        ——それなのに、ふと一人になったとき、<strong>自分が何を感じているのか、何がしたいのか</strong>がわからない。
      </p>
      <p>
        こうした「自分を見失っている状態」を、170年以上前に誰よりも細かく分析した思想家がいます。
        デンマークの<strong>セーレン・キルケゴール</strong>です。
      </p>

      <h2>キルケゴールと『死に至る病』</h2>
      <p>
        キルケゴール(1813–1855)は、デンマークのコペンハーゲンで生まれ育った思想家です。
        「人間一般」ではなく、<strong>「この私が、どう生きるか」</strong>を問い続けたことから、
        実存主義の源流とされています。
        42歳で亡くなるまでに、いくつもの筆名を使い分けて膨大な著作を残しました。
      </p>
      <p>
        『死に至る病』(1849年)は、その代表作の一つです。
        「死に至る病」とは、<strong>絶望</strong>のこと。
        ここでの「死」は肉体の死ではなく、自分自身から逃れることも、自分自身になることもできずにいる、
        終わりのない苦しみを指しています。
      </p>
      <p>
        キルケゴールにとって「自己」とは、固定した「もの」ではありません。
        <strong>自分が自分自身とどう関わっているか、という関係そのもの</strong>です。
        絶望とは、この関係がゆがんでいる状態だ——というのが、本の出発点です。
      </p>

      <h2>絶望の3つの形</h2>
      <p>
        キルケゴールは絶望をいくつもの形に分けていますが、支援職の悩みに重なるのは次の3つです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分が絶望していることに気づいていない絶望</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          キルケゴールは、これが<strong>最もありふれた絶望</strong>だと言います。
          本人は「別に平気」「特に困っていない」と感じている。
          けれど実際には、自分が自分であることを、とうに手放してしまっている状態です。
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          支援職に置き換えるなら、「平気です」が口ぐせになり、疲れも不満も感じなくなっている状態です。
          (<Link to="/articles/feeling-nothing" className={linkCls}>何も感じない</Link>の記事で扱っている状態とも重なります)
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 絶望して、自分自身であろうとしない絶望(弱さの絶望)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分であることがつらいので、別の誰かになろうとする絶望です。
          周りの期待や役割に自分を合わせ、それになりきることで、自分であることから逃げようとします。
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          支援職に置き換えるなら、「いい職員」「頼れる人」という役割に自分を合わせ続け、
          役割を外すと何も残らないように感じる状態です。
          (<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link>の記事もあわせてどうぞ)
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 絶望して、自分自身であろうとする絶望(反抗の絶望)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一見、②の反対に見えます。自分の力だけで自分を作り上げ、自分を支えようとする絶望です。
          キルケゴールは、人は自分の力だけでは自分を成り立たせられないと考えました。
          だからこそ、<strong>誰の助けも借りずに自分を支えようとすること</strong>も、また絶望の一つの形になります。
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          支援職に置き換えるなら、人を助けることはできても、自分が助けられることは受け入れられない状態です。
          全部を自分で抱え込み、弱音を吐けません。
          (<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群</Link>の構造とよく似ています)
        </p>
      </div>

      <h2>「自分を失うことは、静かに起こる」</h2>
      <p>
        キルケゴールは、①の気づかない絶望について、こんな趣旨のことを書いています(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          最も大きな危険、つまり自分自身を失うことは、世の中ではまるで何事もないかのように、静かに起こりうる。
          腕や足や財産を失えば、誰でもすぐに気づくのに。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          キルケゴール『死に至る病』第1編より(デンマーク語原典をもとに筆者が要約・翻訳)
        </p>
      </div>
      <p>
        さらに、自分を失った人はかえって世の中でうまくやっていける、とも述べています。
        周りに合わせ、波風を立てない人は、むしろ評価されるからです。
      </p>
      <p>
        支援の現場で「しっかりした人」と評価されている人ほど、
        この静かな喪失に気づきにくいのは、そのためです。
        <strong>評価されていることと、自分が自分であることは、別の問題</strong>なのです。
      </p>

      <LineCtaFatigue />

      <h2>キルケゴールからロジャーズへ</h2>
      <p>
        キルケゴールの考えは、現代のカウンセリングにも受け継がれています。
        来談者中心療法を創始した心理学者<strong>カール・ロジャーズ</strong>は、
        著書『On Becoming a Person』の中でキルケゴールの次の言葉を引いています。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          本当の自分自身であろうと欲することは、まさに絶望の反対である。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          キルケゴール『死に至る病』より(筆者訳)。ロジャーズが同書の章題「本当の自分自身であること」とともに引用
        </p>
      </div>
      <p>
        ロジャーズは、人が「こうでなければ認められない」という条件(価値の条件)を取り込むことで、
        本当の自分から離れていくと考えました。
        キルケゴールが「絶望」と呼んだものを、ロジャーズは心理学の言葉で説明し直したと言えます。
        (この「価値の条件」は<Link to="/articles/self-value-unknown" className={linkCls}>条件つき自己価値</Link>の記事で詳しく扱っています)
      </p>

      <h2>よくある誤解と、この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誤解:「絶望」=気分の落ち込み</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          キルケゴールの絶望は、気分の問題ではありません。明るく元気に見える人も、絶望している場合があります。
          逆に、気分の落ち込みや不眠が続く場合は、哲学ではなく医療の領域です。早めに専門家に相談してください。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:キルケゴールの答えは信仰にある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          キルケゴールは、絶望から抜け出す道を、キリスト教の信仰の中に見ていました。
          この記事では、その分析の部分を現代の支援職の悩みに置き換えて読んでいます。
          信仰の部分まで含めて読みたい方は、原典にあたってみてください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「平気です」の前に、一拍おく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          反射的に「平気です」と答える前に、心の中で「本当は?」と自分に聞いてみます。
          答えが出なくても構いません。<strong>自分に問いを向けること</strong>が、気づかない絶望から半歩出る入口です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割の外の自分に、時間を渡す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職員でも、家族の世話役でもない時間を、短くても持ちます。
          その時間に<Link to="/articles/what-do-i-want" className={linkCls}>自分は何をしたいのか</Link>を少しずつ探していくと、役割と自分の境目が見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 助けられることを、自分に許す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          キルケゴールによれば、自分の力だけで自分を支えようとすることも絶望の一つの形です。
          頼ること、相談することは、弱さではなく、<strong>自分であり続けるための一つの方法</strong>です。
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
          <li>・<Link to="/articles/self-value-unknown" className={linkCls}>自分の価値がわからない(条件つき自己価値)</Link></li>
          <li>・<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link></li>
          <li>・<Link to="/articles/feeling-nothing" className={linkCls}>何も感じない</Link></li>
          <li>・<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群(救世主症候群)とは</Link></li>
          <li>・<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>人類を愛するほど、隣の人を愛せない(ドストエフスキーから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「平気です」と言い続けてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          役割を外した自分の声を、一緒に聞く時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何を感じているのか、何がしたいのか。一人では見えにくい自分の声を、責めずに整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-kierkegaard-despair"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインのデンマーク語原典(Sygdommen til Døden, 1849)をもとに筆者が要約・翻訳したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。強い絶望感や「消えてしまいたい」という気持ちが続くときは、医療機関や相談窓口に相談してください。
      </div>
    </ArticleLayout>
  )
}

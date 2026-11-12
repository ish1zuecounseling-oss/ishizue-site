import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "闘争・逃走・凍りつきは、トラウマがある人だけに起こるのですか？",
    a: "いいえ。脅威を感じたときの体の反応として、誰にでも起こりうるものです。強い恐怖だけでなく、職場での叱責、利用者からの強い言葉、緊張する場面など、日常的なストレスでも似た反応が出ることがあります。過去の出来事が関係している場合もありますが、症状だけで「トラウマがある」と決めることはできません。",
  },
  {
    q: "会議や面談で頭が真っ白になるのも、凍りつき反応ですか？",
    a: "近い面はありますが、断定はできません。強い緊張の中で、注意が狭まって動けなくなったり、言葉が出なくなったりすることは、凍りつき（フリーズ）の研究で扱われている現象と重なります。ただし、睡眠不足や疲労、不安、体調など、ほかの要因も関わるため、この記事だけで判断はできません。",
  },
  {
    q: "「ポリヴェーガル理論」で説明されている反応と同じですか？",
    a: "この記事では、ポリヴェーガル理論を前提にしていません。この理論は臨床の現場で広く使われている一方で、神経科学の研究者から根拠への批判も出ており、評価が分かれています。ここでは、動物と人間の研究で扱われてきた「闘争・逃走・凍りつき」の整理にとどめています。",
  },
  {
    q: "体が固まる状態が続くとき、どうすればいいですか？",
    a: "睡眠、食事、休息といった土台を整えること、安心できる場や人を確保すること、緊張が続く環境を調整することが基本です。それでも動悸、息苦しさ、強い不安、眠れない状態が続くときは、身体の病気を除外する意味でも、医療機関に相談してください。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function FightFlightFreeze() {
  return (
    <ArticleLayout
      title="闘争・逃走・凍りつき反応とは？｜支援職が職場で体が固まる理由"
      description="強い緊張や脅威のとき、人の体は闘争・逃走・凍りつきという反応をとります。研究で分かっていること、職場で起こりやすい形、ポリヴェーガル理論をめぐる評価の分かれ方、体が固まるときの整え方を、支援職向けに整理します。"
      url="https://www.ishizue-counseling.jp/articles/fight-flight-freeze"
      date="2026-11-12"
      tags={["self-function", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        言い返したい。逃げ出したい。それとも、何も言えずに固まってしまう。
        その反応は、性格ではなく、体が脅威に対してとる方法の一つかもしれません。
      </p>

      <p>
        厳しく叱責されたとき、緊急の対応が重なったとき、利用者から強い言葉を向けられたとき。
        頭ではわかっているのに、言葉が出ない。体が動かない。あとから「なぜあの場で何も言えなかったのか」と自分を責める。
        支援職の相談では、こうした場面がよく語られます。
      </p>
      <p>
        この記事では、脅威を感じたときの体の反応として知られる<strong>闘争・逃走・凍りつき</strong>を、
        研究をもとに整理します。体が固まることを<strong>弱さではなく、体の仕組みとして理解する</strong>ことが目的です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな経験はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・叱責や緊急対応のとき、頭が真っ白になって動けなくなった</li>
          <li>・強い言葉を向けられると、体が固まって反論できない</li>
          <li>・イライラして、つい強い口調になってしまう</li>
          <li>・その場から逃げたくなる、休憩室に駆け込みたくなる</li>
          <li>・あとから動悸や震えが出る</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed mt-2">
          ※これは診断のためのチェックではありません。
        </p>
      </div>

      <h2>闘争・逃走・凍りつきとは</h2>
      <p>
        脅威を感じたとき、人を含む動物の体は、素早く反応するために自動的に切り替わります。
        生理学者Cannonは、危険に対して体が「闘うか逃げるか」に備える反応を記述しました（Cannon, 1929）。
        のちの研究では、これに加えて<strong>凍りつき（フリーズ）</strong>が、重要な反応として扱われています。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">闘争（ファイト）</p>
          <p className="text-stone-600 leading-[1.9]">
            脅威に向かう反応。怒り、苛立ち、言い返す、強い口調になる、といった形で出やすい。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">逃走（フライト）</p>
          <p className="text-stone-600 leading-[1.9]">
            脅威から離れる反応。その場を離れたい、避けたい、不安で落ち着かない、といった形で出やすい。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">凍りつき（フリーズ）</p>
          <p className="text-stone-600 leading-[1.9]">
            動きや声が止まり、固まる反応。頭が真っ白になる、言葉が出ない、体が動かない、といった形で出やすい。
          </p>
        </div>
      </div>

      <h2>凍りつきは「何もしていない」のではない</h2>
      <p>
        Roelofsは、凍りつきを「行動の停止」ではなく、
        <strong>次の行動に備えるための状態</strong>として整理しています（Roelofs, 2017）。
        人や動物は、脅威を見つけると動きを止めて注意を向け、状況を見極めたうえで、闘うか逃げるかを選びます。
        その途中で、動きが止まって見える時間があるのです。
      </p>
      <p>
        つまり、体が固まることは意志の弱さや無能さの証拠ではなく、
        脅威に対する<strong>自動的な反応のひとつ</strong>です。
        あとから「なぜ言い返せなかったのか」と自分を責める必要はありません。
      </p>

      <h2>職場で起こりやすい形</h2>
      <p>
        闘争・逃走・凍りつきは、命の危険だけでなく、人間関係や評価への脅威でも起こりえます。
        支援職の職場では、たとえば次のような場面があります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p>・上司や同僚からの強い叱責、威圧的な態度</p>
        <p>・利用者や家族からの強い言葉、クレーム</p>
        <p>・緊急対応が重なり、判断を迫られる場面</p>
        <p>・「失敗できない」という緊張が長く続く状況</p>
      </div>
      <p>
        こうした場面が続くと、体は常に身構えた状態になりやすくなります。
        <Link to="/articles/always-tense" className={LINK}>いつも緊張している</Link>、
        <Link to="/articles/body-stays-tense" className={LINK}>体の緊張が抜けない</Link>と感じる背景に、
        脅威への反応が続いている可能性もあります（ただし原因はほかにもあります）。
      </p>

      <h2>「ポリヴェーガル理論」について</h2>
      <p>
        闘争・逃走・凍りつきを説明する枠組みとして、ポリヴェーガル理論が紹介されることがあります。
        臨床の現場では広く使われている一方で、神経科学の研究者からは、
        理論が前提にしている神経の仕組みの根拠について批判も出ています（例：Grossman &amp; Taylor, 2007）。
        評価が分かれているため、この記事では<strong>この理論を前提とせず</strong>、
        動物と人間の研究で扱われてきた反応の整理にとどめています。
      </p>

      <h2>体が固まるときの整え方</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 土台を整える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          睡眠不足、疲労、空腹は、脅威への反応を強めやすくします。
          <Link to="/articles/burnout-recovery-methods" className={LINK}>回復の基本</Link>として、睡眠・食事・休息を先に確保します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「いま、反応が出ている」と気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          動悸、息が浅い、肩が上がる、手が冷たい。
          体のサインに気づくことで、「自分がダメだから」ではなく「体が身構えている」と捉え直しやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 緊張が続く環境を見直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          個人の工夫だけでは限界があります。叱責が続く、相談できる人がいない、といった環境が背景にあるなら、
          <Link to="/articles/helper-organization-unsafe" className={LINK}>職場の安全感</Link>の視点で整理することが必要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 安心できる場や人を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          緊張を解く場所が一つでもあると、体は切り替えやすくなります。
          <Link to="/articles/safe-base" className={LINK}>安全基地</Link>の考え方が参考になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 身体の病気や強い症状は、医療機関へ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          動悸、息苦しさ、めまい、強い不安、眠れない状態が続くときは、
          心理的な要因だけで説明せず、身体の病気を除外する意味でも医療機関に相談してください。
          <Link to="/articles/psychosomatic-what" className={LINK}>心身症</Link>の記事も参考になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどい気持ちが強いとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          過去の出来事が突然よみがえる、強い恐怖が続く、「消えてしまいたい」「死にたい」という気持ちが出ているときは、
          一人で抱えず、話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/always-tense" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ いつも緊張している</a>
          <a href="/articles/body-stays-tense" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 体の緊張が抜けない</a>
          <a href="/articles/safety-makes-sleepy" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 安心すると眠くなるのはなぜ？</a>
        </div>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          体が固まる場面を、外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どんな場面で、どんな反応が出て、何が緊張を続けさせているのか。
          診断ではなく、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/fight-flight-freeze"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Cannon, W. B. (1929). Bodily Changes in Pain, Hunger, Fear and Rage (2nd ed.). Appleton.／
        Roelofs, K. (2017). Freeze for action: Neurobiological mechanisms in animal and human freezing. Philosophical Transactions of the Royal Society B, 372(1718), 20160206.／
        Grossman, P., &amp; Taylor, E. W. (2007). Toward understanding respiratory sinus arrhythmia: Relations to cardiac vagal tone, evolution and biobehavioral functions. Biological Psychology, 74(2), 263–285.
        ※反応の現れ方には個人差があり、この記事の内容で自分や他人の状態を判断することはできません。
        本記事は研究を支援職向けに整理したもので、医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の研究をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

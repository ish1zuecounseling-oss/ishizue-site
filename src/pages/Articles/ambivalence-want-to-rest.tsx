import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "「頑張りたい」と「休みたい」の両方があるのは、優柔不断だからですか？",
    a: "いいえ。相反する気持ちが同時にあることは、大切なものが複数あるときに自然に起こります。研究でも、人は嬉しさと悲しさのような相反する感情を同時に抱くことがあると報告されています（Larsen et al., 2001）。決められないことと、気持ちが両方あることは別の話です。",
  },
  {
    q: "どちらが「本当の気持ち」なのでしょうか？",
    a: "どちらも本当の気持ちであることが多いです。「頑張りたい」は仕事や相手を大事に思う気持ち、「休みたい」は自分の限界を知らせるサインとして、それぞれ別の役割を持っています。片方を偽物として切り捨てるより、それぞれが何を守ろうとしているのかを見るほうが、整理が進みます。",
  },
  {
    q: "結局、休むべきか頑張るべきか、この記事で決められますか？",
    a: "この記事で結論を出すことはできません。決めるための材料（それぞれの気持ちが守ろうとしているもの、いまの消耗の深さ、現実の条件）を整理する方法をお伝えします。強いしんどさが続いているときは、一人で決めようとせず、医療機関や専門家に相談してください。",
  },
  {
    q: "「内的家族システム（IFS）」のように、心を複数のパーツに分けて考える方法は効果があるのですか？",
    a: "心の中の複数の声に注目する考え方は、心理療法の世界で使われてきました。ただ、この記事は特定の療法を勧めるものではありません。『気持ちが一つに決まらないのは自然』という視点を、日常の整理に使う目的でお伝えしています。療法ごとの有効性については、研究の質や対象に差があるため、断定はしません。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function AmbivalenceWantToRest() {
  return (
    <ArticleLayout
      title="「頑張りたい」と「休みたい」が同時にあるとき｜支援職が矛盾する気持ちを整理する方法"
      description="頑張りたいのに休みたい、辞めたいのに辞められない。相反する気持ちは、どちらかが偽物なのではなく、それぞれが何かを守っているサインです。両価性（アンビバレンス）の研究をもとに、支援職が矛盾する気持ちを整理する手順を解説します。"
      url="https://www.ishizue-counseling.jp/articles/ambivalence-want-to-rest"
      date="2026-11-12"
      tags={["self-function", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        休みたい。でも、利用者や同僚のことを考えると休めない。
        どちらの気持ちも本物で、どちらにも決められないまま、日が過ぎていく。
      </p>

      <p>
        支援職の相談で、とても多いのがこの状態です。
        「もう限界かもしれない」と思う一方で、「ここで投げ出したら無責任だ」とも思う。
        休む方向に気持ちが傾くと罪悪感が出て、頑張る方向に傾くと体が悲鳴を上げる。
        そのあいだを行き来しているうちに、<strong>決められないこと自体が、さらに消耗を生んでいく</strong>ことがあります。
      </p>
      <p>
        この記事では、相反する気持ちが同時に存在するのは「おかしいこと」ではない、という前提から、
        気持ちを整理するための手順を紹介します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・「休みたい」と思うたびに、「でも…」と自分で打ち消している</li>
          <li>・休みの日に休めず、休まないと決めても頭の中で言い合いが続く</li>
          <li>・辞めるか続けるかを、毎日のように考えて決まらない</li>
          <li>・決められない自分を「弱い」「優柔不断」と責めている</li>
        </ul>
      </div>

      <h2>相反する気持ちは「おかしなこと」ではない</h2>
      <p>
        心理学では、同じ対象に対して相反する気持ちを同時に持つことを<strong>両価性（アンビバレンス）</strong>と呼びます。
        変化を求める場面（仕事を変える、生活習慣を変える）では、動機づけ面接の分野で
        「両価性は変化の途中にある自然な状態」として扱われてきました（Miller & Rollnick, 2013）。
      </p>
      <p>
        また、嬉しさと悲しさのような相反する感情が同時に起こることは、実験でも確かめられています。
        映画の感動的な場面や、卒業のような出来事では、人は両方の感情を同時に感じることがあります（Larsen et al., 2001）。
        つまり「頑張りたい」と「休みたい」が同時にあるのは、気持ちが壊れているからではなく、
        <strong>大切なものが複数あるから</strong>と考えるほうが実態に近いのです。
      </p>

      <h2>それぞれの気持ちは、何を守っているのか</h2>
      <p>
        相反する気持ちを整理するとき、「どちらが正しいか」を決めようとすると行き詰まります。
        先に見たいのは、<strong>それぞれの気持ちが何を守ろうとしているか</strong>です。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">「頑張りたい」側が守っていること（例）</p>
          <p className="text-stone-600 leading-[1.9]">
            利用者や同僚への責任、仕事への誇り、評価や居場所、「役に立つ自分」でいること。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「休みたい」側が守っていること（例）</p>
          <p className="text-stone-600 leading-[1.9]">
            体力や睡眠、これ以上すり減らない自分、長く続けられる働き方、家族や自分の生活。
          </p>
        </div>
      </div>

      <p>
        どちらも「あなたにとって大事なもの」を守ろうとしています。
        片方を「甘え」「無責任」と切り捨てると、切り捨てられた側はいなくなるのではなく、
        <strong>体の不調や、突然の限界として別の形で出てくる</strong>ことがあります。
        これが、<Link to="/articles/helper-cannot-rest-on-days-off" className={LINK}>休みの日に休めない</Link>状態の背景にあることも少なくありません。
      </p>

      <h2>矛盾する気持ちを整理する4つのステップ</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ1　両方の気持ちを、そのまま書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「頑張りたい」「休みたい」を、評価せずに紙に並べて書きます。
          「でも」「だから」を付けず、「頑張りたい気持ちがある」「休みたい気持ちがある」と、並列で書くのがコツです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ2　それぞれが「守っているもの」を書く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          上の例を参考に、「この気持ちは、自分の何を守ろうとしているか」を一言ずつ書きます。
          すぐに出なくても構いません。「何を失うのが怖いか」を考えると出てきやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ3　「どちらを選ぶか」ではなく「どちらも守る方法」を探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          全部休むか、全部続けるかの二択に見えるとき、実際は中間の選択肢が見えなくなっています。
          業務量を減らす、期間を区切って休む、頼れる部分を頼る、休暇を取る日を先に決める。
          小さな調整でも、両方の気持ちが守っているものを少しずつ守ることができます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ4　いまの消耗の深さを確かめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          眠れない、食欲が落ちた、涙が出る、何も感じない、出勤前に体が動かない。
          こうしたサインがあるときは、「どう整理するか」より先に、体と心を守ることが優先です。
          <Link to="/articles/burnout-recovery-methods" className={LINK}>バーンアウトからの回復</Link>や、
          必要なら医療機関への相談を検討してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどい気持ちが強いとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「消えてしまいたい」「死にたい」という気持ちが出ているときは、この記事を読み進めるより先に、
          話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <h2>「心の中の複数の声」という見方について</h2>
      <p>
        気持ちが一つにまとまらないとき、心の中に複数の「声」や「立場」があると考える方法があります。
        たとえば内的家族システム（IFS）では、心を複数の部分（パーツ）の集まりとして捉え、
        どの部分も否定せずに理解することを目指します。
        日常の整理で使うなら、「頑張りたい私」と「休みたい私」が会議をしているところを、
        <strong>少し外から眺めている</strong>という使い方がわかりやすいと思います。
      </p>
      <p className="text-sm text-stone-500 leading-relaxed">
        ※IFSなど特定の心理療法の効果は、研究の質や対象に差があり、この記事で優劣や効果を断定するものではありません。
        日常の整理のための「見方」としての紹介です。
      </p>

      <h2>支援職の場合に、とくに起こりやすいこと</h2>
      <p>
        支援職は、「自分の限界より相手のニーズを優先する」ことが仕事の中で求められやすい職種です。
        そのため、「休みたい」を口にすること自体に罪悪感がつきやすく、
        <Link to="/articles/over-adaptation" className={LINK}>過剰適応</Link>や
        <Link to="/articles/too-considerate" className={LINK}>気を遣いすぎる</Link>状態と結びつくこともあります。
        「休みたい」が出てくる前に、自分で打ち消してしまう習慣がついている人も多いです。
      </p>
      <p>
        まずは、「休みたい」と感じたこと自体を、評価せずに認めるところから始めてみてください。
        それが、<Link to="/articles/what-do-i-want" className={LINK}>自分が本当は何を望んでいるのか</Link>に気づく入口になります。
      </p>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/emotion-suppression-vs-processing" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情を抑えることと、整理することの違い</a>
          <a href="/articles/what-do-i-want" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 自分が何をしたいか分からない</a>
          <a href="/articles/helper-cannot-rest-on-days-off" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 休みの日に休めない</a>
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
          矛盾する気持ちを、外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どちらが正しいかを決めるのではなく、それぞれの気持ちが何を守っているのか、
          現実の条件の中で何ができるのかを、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/ambivalence-want-to-rest"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Larsen, J. T., McGraw, A. P., &amp; Cacioppo, J. T. (2001). Can people feel happy and sad at the same time? Journal of Personality and Social Psychology, 81(4), 684–696.／
        Miller, W. R., &amp; Rollnick, S. (2013). Motivational Interviewing: Helping People Change (3rd ed.). Guilford Press.／
        Schwartz, R. C. (1995). Internal Family Systems Therapy. Guilford Press.
        ※本記事は両価性に関する研究や心理療法の考え方を支援職向けに整理したもので、特定の療法の効果を保証するものではありません。
        医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の文献をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

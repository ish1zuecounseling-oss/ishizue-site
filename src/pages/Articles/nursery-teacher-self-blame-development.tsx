import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "かみつきやだだこねは、保育士の関わりが悪いからですか？",
    a: "多くの場合、そうとは言えません。自我が育ち、したいこととできることのあいだで揺れる時期には、かみつきやだだこねが見られることがあります。もちろん環境や関わりが影響することはありますが、「起きた＝自分の保育が悪い」とは直結しません。人数や配置、場面の切り替えなど、個人の力だけでは変えにくい要因も重なります。",
  },
  {
    q: "発達の目安に当てはまらない子は、問題があるということですか？",
    a: "いいえ。目安は、多くの子が通る道すじを示したもので、個人差があります。目安から外れていることだけで、遅れや障害があると判断することはできません。気になる様子が続くときは、園内で共有し、必要に応じて保護者や専門機関（保健センター、児童発達支援など）と相談しながら進めます。診断や評価は、保育士が単独で行うものではありません。",
  },
  {
    q: "子どもの発達を学ぶほど、「見逃したのでは」と不安になります。",
    a: "知識が増えるほど、気づく場面が増えると同時に、「もっと早く気づけたのでは」という不安も増えやすくなります。気づけなかったことと、責任とは別です。気づいたときに共有し、相談できる体制があること自体が、子どもを守る力になります。一人で抱えるほど、不安は大きくなります。",
  },
  {
    q: "この記事の内容で、子どもの発達について判断できますか？",
    a: "できません。この記事は、保育士が自責で消耗しにくくなるための見方を整理したもので、子どもの発達の評価や診断に代わるものではありません。個々の子どもについては、園の方針、保護者、専門機関と一緒に考えてください。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function NurseryTeacherSelfBlameDevelopment() {
  return (
    <ArticleLayout
      title="「自分の保育が悪いのかも」と思ってしまう保育士へ｜子どもの「困った行動」と発達の目安"
      description="かみつき、だだこね、汚い言葉、人見知り、言葉のつかえ。子どもの姿を「自分の保育のせい」と受け取って消耗する保育士が、発達の目安をどう使えば自責を減らせるかを、感情労働と帰属の視点から整理します。目安を「ものさし」にしすぎない注意点も扱います。"
      url="https://www.ishizue-counseling.jp/articles/nursery-teacher-self-blame-development"
      date="2026-11-14"
      tags={["emotional_labor", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        あの子がまた噛んだ。止められなかった自分が悪い気がする。
      </p>

      <p>
        保育の仕事は、子どもの姿のひとつひとつを、自分の関わりの結果として受け取りやすい仕事です。
        かみつきが起きれば「見ていなかった」、だだこねが続けば「うまく受け止められなかった」、
        言葉が出にくい子がいれば「自分の声かけが足りなかった」。
        そう考えるほど、仕事が終わっても頭の中で振り返りが止まらなくなります。
      </p>
      <p>
        この記事では、<strong>子どもの発達の目安</strong>を知ることが、保育士の自責をどう和らげるのかを整理します。
        同時に、<strong>目安をものさしにしすぎると、別の苦しさが生まれる</strong>ことも扱います。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・子どもがトラブルを起こすと、まず「自分のせい」と考える</li>
          <li>・保護者への報告のとき、子どもの姿を説明するより先に謝ってしまう</li>
          <li>・帰宅後も、その日の子どもの行動を何度も思い返す</li>
          <li>・発達のことを学ぶほど、「見逃したのでは」という不安が増える</li>
          <li>・同僚と比べて、「自分だけうまくいっていない」と感じる</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed mt-2">
          ※診断のためのチェックではありません。
        </p>
      </div>

      <h2>なぜ、保育士は自責になりやすいのか</h2>
      <p>
        ひとつ目は、仕事の性質です。保育は、子どもの感情や行動を受け止め、整える役割を日々担います。
        社会学者ホックシールド（1983）が名づけた<strong>感情労働</strong>に近い面があり、
        自分の感情を置いたまま、相手の感情に応じ続ける負荷がかかります。
        <Link to="/articles/emotional-labor-what-pillar" className={LINK}>感情労働</Link>の記事も参考になります。
      </p>
      <p>
        ふたつ目は、出来事の原因をどこに置くかです。Weiner（1985）の帰属理論では、
        結果の原因を「自分の内側にあり、自分で変えられるもの」と考えるほど、罪悪感や自責の感情が強まりやすいとされます。
        子どもの行動の原因を「自分の関わり」に置く習慣があると、起きたことのほとんどが自責につながります。
        <Link to="/articles/helper-self-blame" className={LINK}>支援職が自分を責めてしまう</Link>背景とも重なります。
      </p>

      <h2>発達の目安は、「原因を広げて見る」ための道具になる</h2>
      <p>
        自治体などが保育者向けに示している、年齢ごとの言葉や情緒の発達の目安
        （この記事では、犬山市の「0歳児～5歳児の言葉に関する目安となる姿一覧」を参考にしました）を見ると、
        <strong>保育士が「困った」と感じる姿の多くが、発達の途中にあるもの</strong>として整理されています。
        次の表は、その考え方を、保育士が受け取りがちな意味と合わせて整理し直したものです。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">乳児期：人見知り・後追い・夜泣き</p>
          <p className="text-stone-600 leading-[1.9]">
            保育士が受け取りがちな意味：「慣れてもらえていない」「自分に愛着を持ってもらえていない」。<br />
            目安の見方：特定の人への愛着が育つ過程で、人見知りや後追いが見られる時期がある、とされています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">2〜3歳前後：「いや」「じぶんで」・だだこね・かみつき</p>
          <p className="text-stone-600 leading-[1.9]">
            保育士が受け取りがちな意味：「受け止め方が悪い」「見ていなかった」。<br />
            目安の見方：自我が育ち、要求や主張が強まる一方で、言葉で伝えきれずに手や口が出ることがある時期、とされています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">3歳前後：汚い言葉・言葉のつかえ</p>
          <p className="text-stone-600 leading-[1.9]">
            保育士が受け取りがちな意味：「家庭や自分の指導のせい」「自分の声かけが悪い」。<br />
            目安の見方：言葉が急に増える時期には、汚い言葉を試す姿や、言葉のつかえ（一次性吃音と呼ばれるもの）が現れることがある、とされています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">3〜5歳：葛藤の中での指吸い・頼るものを持ち歩く</p>
          <p className="text-stone-600 leading-[1.9]">
            保育士が受け取りがちな意味：「不安にさせている」「見守りが足りない」。<br />
            目安の見方：「できる・できない」で揺れる時期に、気持ちを支えるために見られる姿として整理されています。
          </p>
        </div>
      </div>

      <p className="text-sm text-stone-500 leading-relaxed">
        ※上の整理は、保育現場向けの資料の一般的な内容を踏まえたものです。個々の子どもの原因を説明するものではありません。
      </p>

      <p>
        つまり、同じ出来事でも、<strong>「自分の関わりの結果」だけでなく「発達の途中の姿」という見方を加える</strong>ことで、
        原因が自分だけに集まらなくなります。これが、目安を使って自責を和らげる、ということです。
      </p>

      <h2>ただし、目安は「ものさし」にしすぎない</h2>
      <p>
        目安は、多くの子が通る道すじを示したもので、<strong>個人差が前提</strong>です。保育所保育指針でも、
        一人ひとりの発達の過程に応じた保育が求められています。
        目安を、できている・できていないを測るものさしとして使うと、次の苦しさが生まれます。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p>・目安から外れている子に、「何かあるのでは」と過敏になる</p>
        <p>・「この時期にこれができていないのは、自分の保育のせい」と、新しい自責の材料にしてしまう</p>
        <p>・保護者に、確かめきれていない判断を伝えてしまう</p>
      </div>
      <p>
        気になる姿が続くときは、<strong>一人で判断せず、園内で共有する</strong>ことが基本です。
        必要に応じて、保護者の了解のもと、保健センターや児童発達支援などの専門機関につなぎます。
        診断や評価は、保育士が単独で行うものではありません。
        言葉のつかえが気になる場合も、本人に言い直しを求めず、最後まで待つ関わりが一般的に勧められますが、
        続くときは専門機関に相談してください。
      </p>

      <h2>自責の振り返りを、4つの問いに分けてみる</h2>
      <p>
        帰宅後に出来事を思い返すとき、一つの問いに「自分のせい」だけを入れず、次の4つに分けて考えます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 何が起きたか（事実）</p>
          <p className="text-stone-600 leading-[1.9]">いつ、どこで、誰が、何をしたか。評価を入れずに書きます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 子どもの発達から見ると、どんな姿か</p>
          <p className="text-stone-600 leading-[1.9]">この年齢の目安では、どんな意味を持ちうるか。「発達の途中の姿かもしれない」と一度置いてみます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 環境や体制は、どうだったか</p>
          <p className="text-stone-600 leading-[1.9]">人数、配置、時間帯、場面の切り替え。個人の力だけで変えにくい部分を、分けて見ます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 自分にできることは何か</p>
          <p className="text-stone-600 leading-[1.9]">責めるのではなく、次にできる小さな工夫と、共有・相談することを決めます。</p>
        </div>
      </div>

      <p>
        ③で見えてくる体制の問題は、<strong>個人の努力では解決しにくい</strong>ものです。
        配置や人手が足りないまま、一人で背負い続けると、
        <Link to="/articles/nursery-teacher-limit" className={LINK}>限界を感じる</Link>状態につながりやすくなります。
        <Link to="/articles/nursery-teacher-relationship-stress" className={LINK}>職場の人間関係</Link>のしんどさと重なることもあります。
      </p>

      <h2>自分の感情を、置き去りにしない</h2>
      <p>
        子どもの感情を受け止め続ける仕事では、自分の悔しさや不安、疲れを扱う時間が取りにくくなります。
        「今日は、あの場面がつらかった」と、短く言葉にしておくだけでも、翌日に持ち越す負荷が変わります。
        同僚と共有できる場があれば、自責の矛先が自分一人から分散します。
        <Link to="/articles/teacher-burnout" className={LINK}>教員のバーンアウト</Link>の記事も、近い状況を扱っています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどさが強いときは、無理に続けない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          眠れない、朝に体が動かない、子どもの前で涙が出る、何も感じにくい、といった状態が続くときは、
          医療機関や専門家に相談してください。
          「消えてしまいたい」「死にたい」という気持ちが出ているときは、話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/nursery-teacher-limit" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 保育士が限界を感じる理由</a>
          <a href="/articles/helper-self-blame" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 支援職が自分を責めてしまう理由</a>
          <a href="/articles/emotional-labor-what-pillar" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情労働とは</a>
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
          子どもの姿を、全部自分のせいにしてしまうとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どの場面で自責になり、何が個人の力では変えにくい部分なのか。
          診断ではなく、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/nursery-teacher-self-blame-development"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed break-all">
        参考文献：Hochschild, A. R. (1983). The Managed Heart: Commercialization of Human Feeling. University of California Press.／
        Weiner, B. (1985). An attributional theory of achievement motivation and emotion. Psychological Review, 92(4), 548–573.／
        犬山市「0歳児～5歳児の言葉に関する目安となる姿一覧（資料1）」（作成年度の記載なし。資料中の参考文献は2014年3月の犬山市カリキュラム）.
        https://www.city.inuyama.aichi.jp/_res/projects/default_project/_page_/001/005/793/30-3shiryou1.pdf／
        厚生労働省「保育所保育指針」.
        ※発達の目安は多くの子が通る道すじを示したもので、個人差があります。個々の子どもの評価・診断を行うものではありません。
        本記事は資料と研究を保育士向けに整理したもので、医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の文献をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

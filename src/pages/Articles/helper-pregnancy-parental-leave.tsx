import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "妊娠を職場に報告するのが怖いです。どう伝えればいいですか?",
    a: "まず、報告への恐れは「職場を大切に思っている証拠」であって、後ろめたいことをするわけではない、という前提を確認してください。伝え方のポイントは、「すみません」から始めないことです。妊娠の報告は謝罪ではなく、安全管理とシフト調整のための業務上の共有です。身体を使う支援の現場では、早めの報告があなたと赤ちゃんの安全を守ります。「ご相談があります。妊娠がわかりました。今後の業務について調整をお願いしたいです」——事実と依頼を、謝らずに伝えるので十分です。",
  },
  {
    q: "「人手不足なのに、申し訳ない」という気持ちが消えません。",
    a: "その罪悪感は、あなたの優しさと責任感の裏返しです。ただ、構造を見てください。一人が抜けると回らなくなるのは、あなたの妊娠の問題ではなく、一人抜けた程度で破綻する人員配置——つまり経営・制度側の課題です。職場の人員体制を整える責任は事業者にあり、職員のライフイベントを「穴」にしない設計をするのも事業者の仕事です。あなたが背負うべき荷物と、組織が背負うべき荷物を、分けて考えてください。",
  },
  {
    q: "男性です。育休を取りたいのですが、言い出せません。",
    a: "福祉・介護・教育の現場では「男性の育休の前例がない」「人手不足なのに男が休むのか」という空気が残っている職場もあり、言い出しにくさには現実的な背景があります。その上で——育児休業は性別に関係なく法律で保障された権利であり、取得を理由とする不利益な扱いは認められていません。そして、あなたが取ることが、職場に「前例」を作ります。後に続く誰かのための道になる、という意味も持っています。取得の意思は、議論ではなく「予定の共有」として、早めに・具体的な時期とともに伝えるのが現実的です。",
  },
  {
    q: "育休からの復帰が不安です。時短勤務で迷惑をかけるのではと思ってしまいます。",
    a: "育休復帰の不安は、①ブランクへの不安（現場の変化についていけるか）、②時短や急な休みへの罪悪感、③仕事と育児の両立への不安、が重なったものです。大切なのは、復帰を「元の100%の自分に戻ること」と定義しないことです。働き方が変わるのは当然で、それは後退ではなく、新しい形を作るプロセスです。時短も子の看護休暇も、制度として用意された正規の働き方であり、「迷惑」ではありません。なお、メンタル不調による休職からの復職の怖さは構造が異なるため、別の記事で扱っています。",
  },
  {
    q: "つわりがつらいのに、休むことに罪悪感があります。",
    a: "つわりは気合いでコントロールできるものではなく、医学的なケアの対象です。妊娠中の体調に応じた勤務の配慮（夜勤や身体負担の大きい業務の調整など）は、制度上認められたものであり、わがままではありません。支援職は「自分が我慢すれば回る」という思考が習慣になりやすい仕事ですが、妊娠中のあなたが守るべき最優先は、あなた自身と赤ちゃんです。我慢が美徳になる場面ではありません。体調がつらいときは、医師に相談し、職場に調整を求めてください。",
  },
]

export default function HelperPregnancyParentalLeave() {
  return (
    <ArticleLayout
      title="支援職の妊娠・育休｜「妊娠して迷惑かも」と感じてしまうあなたへ【公認心理師】"
      description="妊娠がわかって、嬉しさより先に「職場にどう言おう」が浮かんだ——看護師・介護士・保育士・福祉職に多い、妊娠・育休への罪悪感。それはあなたの性格ではなく、人手不足とケア役割の構造が生む感情です。男性育休の取りにくさ、育休復帰の不安まで、公認心理師が整理します。"
      url="https://www.ishizue-counseling.jp/articles/helper-pregnancy-parental-leave"
      date="2026-06-11"
      tags={["self-function", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        おめでたいはずの出来事に、罪悪感が伴ってしまう——それはあなたの性格の問題ではなく、現場の構造が生む感情です。
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
        妊娠がわかった。嬉しいはずなのに、最初に浮かんだのは
        「職場に、どう言おう」だった。
      </p>

      <p>
        ただでさえ人手が足りないシフト。夜勤、入浴介助、移乗、送迎。
        自分が抜けたら、現場はどうなるんだろう。
        「おめでとう」より先に、「人員どうしよう」という空気が流れる気がして、怖い。
        ——あるいは、男性で育休を取りたいけれど、言い出せずにいる。
      </p>

      <p>
        この記事は、そんな<strong>「妊娠・育休への罪悪感」</strong>を扱います。
        先に結論を言うと、この罪悪感はあなたの性格や考えすぎから来るものではありません。
        <strong>人手不足の構造と、支援職特有の役割意識</strong>が生み出す、構造的な感情です。
        構造が見えると、背負わなくていい荷物が見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな気持ちはありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・妊娠の報告を考えると、嬉しさより緊張と申し訳なさが先に立つ</li>
          <li>・「人手不足なのに」と、自分を責めてしまう</li>
          <li>・つわりがつらくても、「これくらいで」と我慢してしまう</li>
          <li>・夜勤や身体介助の調整をお願いすることに、罪悪感がある</li>
          <li>・（男性で）育休を取りたいが、前例がなく言い出せない</li>
          <li>・育休復帰後、時短で働くことに「迷惑をかける」と感じている</li>
        </ul>
      </div>

      <h2>なぜ「妊娠=迷惑」と感じてしまうのか——3つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① ギリギリの人員配置——構造の問題が、個人の罪悪感にすり替わる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「一人抜けたら回らない」——その感覚は、現場の実態として正しいかもしれません。
          でも、立ち止まって見てください。
          <strong>一人のライフイベントで破綻する人員体制は、あなたの問題ではなく、設計の問題</strong>です。
          職員が妊娠・出産・介護・病気で抜けることは、組織運営の「想定内」であるべきことで、
          そこに備えるのは事業者の責任です。
          構造の穴を、個人の罪悪感で埋めさせられている——
          この「個人化」のからくりは、<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">キャパシティを超えた業務を「自分のせい」にしない</Link>で詳しく扱っています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「支える側」に慣れすぎて、「支えられる側」になれない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は毎日、人を支え、配慮し、調整する側にいます。
          その役割が長いほど、<strong>自分が配慮される側に回ることへの、強烈な居心地の悪さ</strong>が生まれます。
          「お互い様」と人には言えるのに、自分が受け取る番になると受け取れない——
          これは<Link to="/articles/cannot-depend-on-others" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">人に頼れない</Link>構造と地続きです。
          妊娠・育休は、その「受け取れなさ」が一気に表面化するライフイベントなのです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 身体を使う仕事との、物理的な衝突</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          夜勤、移乗、入浴介助、感染リスク——支援の現場は、妊娠中の身体と物理的にぶつかる業務が多い仕事です。
          だから「配慮のお願い」が避けられず、その回数の分だけ罪悪感が積み上がる。
          でも、妊娠中の業務調整は「わがまま」ではなく、<strong>制度上認められた、安全管理の一部</strong>です。
          あなたが調整を求めることは、権利の行使であると同時に、
          母子の安全という、現場の誰も損なわれない目的のための正当な手続きです。
        </p>
      </div>

      <h2>男性支援職の育休——「前例がない」の壁</h2>
      <p>
        福祉・介護・教育の現場で働く男性が育休を取ろうとすると、
        「男性で取った人がいない」「この人手不足で?」という空気に直面することがあります。
        言い出せない背景には、この現実があります。
      </p>
      <p>
        その上で、押さえておきたいことが2つあります。
        ひとつ、<strong>育児休業は性別に関係なく法律で保障された権利</strong>であり、
        取得を理由とした不利益な扱いは認められていません。
        ふたつ、<strong>あなたが取ることが、前例になる</strong>ということ。
        最初の一人には、最初の一人にしかできない仕事があります。
        あなたの育休は、あなたの家族のためであると同時に、
        この業界で後に続く誰かのための、道になります。
      </p>

      <LineCtaFatigue />

      <h2>罪悪感との付き合い方</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 罪悪感を、「優しさの裏返し」として理解する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場のことを何も考えない人は、この罪悪感を抱きません。
          あなたが苦しいのは、同僚と利用者を気遣う力があるからです。
          まず、その優しさ自体は否定しないでください。
          ただし、優しさが「自分を後回しにする理由」になったとき、それは荷物に変わります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「迷惑」ではなく「お互い様の順番」と捉える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          あなたはこれまで、誰かの産休・病欠・介護をカバーしてきたはずです。
          そして復帰後は、また誰かをカバーする側に戻ります。
          今回は、あなたが受け取る順番が来ただけ。
          「お互い様」は、受け取る番を引き受けて初めて、本当のお互い様になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 報告・依頼を、「すみません」から始めない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          妊娠の報告も、育休の取得も、業務調整の依頼も、謝罪事項ではありません。
          「すみません」から始めるたびに、脳は「自分は悪いことをしている」という前提を強化します。
          「ご相談があります」「共有です」から始める——小さな言葉の選択が、罪悪感の積み上げを止めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 制度を使うことは、後輩への道を作ること</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          産休・育休・時短・看護休暇——制度は、使われることで職場の文化になります。
          あなたが堂々と使うことは、数年後に同じ場面を迎える後輩が、
          あなたほど苦しまずに済む環境を作ることでもあります。
        </p>
      </div>

      <h2>育休復帰の不安——「元の100%」に戻ろうとしない</h2>
      <p>
        育休が近づくと、今度は復帰の不安が顔を出します。
        ブランクへの不安、現場の変化についていけるかという焦り、
        時短勤務や子どもの急な発熱で「また迷惑をかける」という先回りの罪悪感。
      </p>
      <p>
        ここで大事なのは、復帰を<strong>「元の100%の自分に戻ること」と定義しない</strong>ことです。
        働き方が変わるのは、後退ではありません。時短も看護休暇も、制度として用意された正規の働き方です。
        復帰は「新しい形を作るプロセス」であって、減点の始まりではない。
        その前提に立てるかどうかで、復帰後の消耗が大きく変わります。
      </p>
      <p className="text-sm text-stone-600">
        なお、バーンアウトや適応障害による<strong>休職からの復職</strong>の怖さは、これとは構造が異なります
        （「また崩れるのでは」という再発への恐れが核になります）。
        そちらは<Link to="/articles/helper-return-to-work-fear" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職が復職を怖いと感じる理由</Link>で扱っています。
      </p>

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
        <p className="font-medium text-stone-700 mb-2">「受け取れなさ」の構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">キャパシティを超えた業務を「自分のせい」にしない</Link></li>
          <li>・<Link to="/articles/cannot-depend-on-others" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">人に頼れない——支えられる側になれない構造</Link></li>
          <li>・<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職が断れない理由</Link></li>
          <li>・<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸で生きてしまう理由</Link></li>
          <li>・<Link to="/articles/helper-return-to-work-fear" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">復職が怖いと感じる理由（休職からの復職）</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「受け取る側になれない」構造は、妊娠・育休の場面でいちばん強く表面化します。
          10項目で相性を確認できます（合わないと出たら別の選択肢も案内しています）。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「妊娠・育休の罪悪感を、一人で抱えている」方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          受け取る側になる練習を、一緒に
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          ずっと支える側だったあなたが、支えられる側になる——その移行には、思った以上のエネルギーが要ります。罪悪感の正体を構造から整理して、堂々と制度を使えるあなたへ。大切な時期を、自分を責めずに過ごすために。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/helper-pregnancy-parental-leave"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。産休・育休・母性健康管理などの制度の詳細や手続きは、職場の担当部署、労働局、自治体の窓口でご確認ください。
      </div>
    </ArticleLayout>
  )
}

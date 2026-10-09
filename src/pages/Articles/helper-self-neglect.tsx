import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "セルフネグレクトとは何ですか?",
    a: "セルフネグレクト(自己放任)は、本来は高齢者福祉などの領域で使われる言葉で、生活の中で本来行うべきことを行わない、または行えないために、自分の心身の安全や健康が脅かされる状態を指します。法的な定義はありません。この記事では、支援職が他者のケアを優先するあまり、自分の体調管理・休息・受診を後回しにし続ける状態を、同じ言葉で捉えています。",
  },
  {
    q: "支援職のセルフネグレクトは、ただの「頑張りすぎ」とどう違いますか?",
    a: "頑張りすぎは一時的な状態でも起こりますが、セルフネグレクトは「自分の不調に気づいても、手当てをしないことが当たり前になっている」状態です。目安は、体調が悪いのに受診を何度も先延ばしにしている、休むことに強い罪悪感がある、食事や睡眠を削ることが習慣になっている、といったことが長く続いているかどうかです。",
  },
  {
    q: "セルフネグレクトは体の症状として出ることがありますか?",
    a: "あります。休息や受診が後回しになると、ストレスによる負荷が体に積み重なり、喉の違和感やつかえ感、胃腸の不調、頭痛、不眠などとして表れることがあります。発症や経過にストレスが深く関わる体の病気は「心身症」と呼ばれます。ただし、体の症状がある場合は、まず医療機関で体の病気がないかを確かめることが先です。",
  },
  {
    q: "自分を後回しにしてしまうのは、性格の問題ですか?",
    a: "性格の問題ではありません。支援の仕事は相手の必要を優先することが中心にあり、その習慣が自分の生活にまで広がりやすい構造があります。さらに「役に立っているときだけ価値がある」という条件付き自己価値が強いと、休むことや自分のケアに時間を使うことが「価値を失うこと」のように感じられ、後回しが止まりにくくなります。",
  },
  {
    q: "どうすれば抜け出せますか?",
    a: "「もっと自分を大切にしよう」と意識だけで変えようとしても、多くの場合は続きません。まず不調を事実として記録して気づく力を取り戻すこと、受診や休息を仕事の予定と同じように先に予定に入れてしまうこと、そして一人で抱えずに誰かに状態を話すことが、現実的な出発点になります。",
  },
  {
    q: "受診するならどこに行けばいいですか?",
    a: "体の症状がある場合は、まずその症状に合った診療科(喉の症状なら耳鼻咽喉科、胃腸なら内科・消化器内科など)で体の病気がないかを確認してください。検査で異常が見つからず、ストレスとの関係が疑われる場合は、心療内科への相談が選択肢になります。気分の落ち込みや意欲の低下が続いている場合は、心療内科・精神科を受診してください。",
  },
]

export default function HelperSelfNeglect() {
  return (
    <ArticleLayout
      title="支援職のセルフネグレクト｜自分の不調を後回しにし続ける心理と、体に出るサイン【公認心理師】"
      description="利用者の体調には気づけるのに、自分の不調は後回し——それは支援職に起きやすい「セルフネグレクト」かもしれません。自分のケアを後回しにし続ける構造(条件付き自己価値・気づく力の低下)と、喉の違和感や胃腸の不調など体に出るサイン、抜け出す方向を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-self-neglect"
      date="2026-10-09"
      tags={["burnout", "self-function", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        利用者の小さな体調の変化には気づけるのに、自分の不調はいつも後回し。
        それは、支援の現場で見てきた「セルフネグレクト」を、あなた自身がしているのかもしれません。
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
        体調が悪いのに、受診を何度も先延ばしにしている。
        食事を抜くことや、睡眠を削ることが当たり前になっている。
        休みの日に休むことに、なぜか罪悪感がある——。
      </p>
      <p>
        もし思い当たるなら、それは<strong>意志の弱さでも、頑張りが足りないことでもありません</strong>。
        支援職には、相手のケアを優先する習慣が自分の生活にまで広がり、
        <strong>自分のケアだけが置き去りになる構造</strong>があります。
        この記事では、その状態を「支援職のセルフネグレクト」として整理し、体に出るサインと抜け出す方向を解説します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 体の症状がある方は、まず医療機関で体の病気がないかを確かめてください。この記事は心理的な側面の解説であり、診断や治療に代わるものではありません。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・セルフネグレクトの本来の意味と、支援職に起きる形</li>
          <li>・支援職が自分を後回しにし続ける<strong>4つの構造</strong></li>
          <li>・喉の違和感・胃腸の不調など、<strong>体に出るサイン</strong>(心身症との関係)</li>
          <li>・抜け出すための<strong>現実的な4つの方向</strong></li>
        </ul>
      </nav>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・体調が悪くても「まだ大丈夫」と受診を先延ばしにしている</li>
          <li>・利用者や同僚の体調には気づくのに、自分の不調には気づきにくい</li>
          <li>・食事を抜く、睡眠を削ることが習慣になっている</li>
          <li>・休むこと、自分のために時間を使うことに罪悪感がある</li>
          <li>・喉や胃、頭など、体のどこかの不調が長く続いている</li>
          <li>・「自分のことは後でいい」が口ぐせになっている</li>
        </ul>
      </div>

      <h2>セルフネグレクトとは——支援の現場で見てきた言葉</h2>
      <p>
        セルフネグレクト(自己放任)は、本来は高齢者福祉などの領域で使われてきた言葉です。
        生活の中で本来行うべきことを行わない、または行えないために、
        <strong>自分の心身の安全や健康が脅かされる状態</strong>を指します。法的な定義はありませんが、
        支援の現場では「見過ごしてはいけない状態」として扱われてきました。
      </p>
      <p>
        支援職の多くは、この状態にある人に気づき、手を差し伸べる側にいます。
        ところが、同じ支援職が、自分自身については受診を先延ばしにし、休息を削り、不調を見ないふりをしている——
        そんなことが珍しくありません。
        この記事では、支援職が<strong>自分のケアを後回しにし続ける状態</strong>を、この言葉を借りて捉えます。
      </p>

      <h2>支援職が自分を後回しにし続ける4つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「相手が先」が、生活全体に広がる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の仕事は、相手の必要を自分の必要より先に置くことが中心にあります。
          仕事の中では大切なこの姿勢が、勤務時間の外にまで広がると、
          「自分のことは後でいい」が生活全体の基本になっていきます。
          本当の感情を抑えて相手に合わせる<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>が長く続くほど、この傾向は強まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休むことが「価値を失うこと」に感じられる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役に立っているときだけ、自分には価値がある」——この<strong>条件付き自己価値</strong>が強いと、
          休むこと、受診のために仕事を抜けることが、自分の価値を手放すことのように感じられます。
          だから不調に気づいても、手当てより仕事が優先されてしまいます。
          この構造は<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「自分の価値がわからない(条件付き自己価値)」</Link>でくわしく解説しています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分の不調に「気づく力」が弱っている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他者の状態を読み取ることに神経を使い続けると、自分の状態をモニターする働きが使われないまま弱っていきます。
          その結果、限界を超えてから初めて「疲れていた」と気づく、ということが起きます。
          この働きは自己機能の一つで、<Link to="/articles/self-function-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能チェック</Link>で今の状態を確かめられます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「支援する側は、助けを求めない」という思い込み</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人を支える立場にいると、自分が支えられる側になることに強い抵抗が生まれます。
          「この程度で相談するのは大げさ」「自分で何とかすべき」と感じ、
          不調を誰にも話さないまま抱え込みます(<Link to="/articles/why-support-workers-cannot-ask-for-help" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職が助けを求められない理由</Link>)。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>体に出るサイン——後回しにされた負荷は、体が引き受ける</h2>
      <p>
        自分のケアが後回しになっても、負荷そのものは消えません。
        休息や手当てで解消されなかった負荷は、しばしば<strong>体の症状</strong>として表れます。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・喉の違和感、何かが詰まっているようなつかえ感</p>
        <p>・胃の痛み、胃もたれ、下痢や便秘を繰り返す</p>
        <p>・頭痛、肩や首のこわばり</p>
        <p>・寝つけない、夜中に目が覚める</p>
        <p>・動悸や息苦しさ</p>
      </div>
      <p>
        体の病気のうち、発症や経過にストレスなどの心理社会的な要因が深く関わるものは<strong><Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症</Link></strong>と呼ばれます。
        心身症は「気のせい」ではなく、実際に体に起きている不調です。
        同時に、これらの症状は体の病気が原因で起きることもあるため、
        <strong>まず医療機関で体の病気がないかを確かめる</strong>ことが出発点になります。
      </p>
      <p>
        筆者自身も、仕事を優先して自分の不調を後回しにし続けた結果、体に症状が出た経験があります。
        体のサインは、「もう後回しにはできない」という、自分からの最後の通知なのかもしれません。
      </p>
      <p className="text-sm text-stone-500">
        体の緊張が抜けない仕組みは→ <Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link>
      </p>

      <h2>抜け出すための4つの方向</h2>
      <p>
        「もっと自分を大切にしよう」と意識だけで変えようとしても、多くの場合は続きません。
        後回しが<strong>習慣と構造</strong>で起きている以上、変えるのも習慣と構造の側からです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 不調を「事実」として書き留める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「喉の違和感が3日続いている」「今週は2回、夜中に目が覚めた」——評価を交えず、事実だけを記録します。
          気づく力が弱っているときほど、記録が「見ないふり」を防いでくれます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 受診と休息を、先に予定に入れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「時間ができたら行く」は、たいてい来ません。受診や休息を、仕事の予定と同じように先に予定表に入れてしまいます。
          気持ちが追いつくのを待たずに、仕組みで守る方法です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 休む理由を、役割に求めない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「良い支援を続けるために休む」と考えるのは、最初の一歩としては助けになります。
          ただ、その先で目指したいのは、<strong>役に立つためでなくても、自分の体を手当てしていい</strong>という感覚です。
          あなたの体は、仕事の道具である前に、あなた自身のものです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 一人で抱えない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分を後回しにする習慣は長い時間をかけて身についたものなので、一人で気づき、一人で変えるのは難しいものです。
          家族、信頼できる同僚、医療やカウンセリングなど、「自分の状態を話せる場所」を一つ持つことが、何よりの土台になります。
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
        <p className="font-medium text-stone-700 mb-2">構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症とは——ストレスが体に出るしくみ</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない(条件付き自己価値・根っこ)</Link></li>
          <li>・<Link to="/articles/why-support-workers-cannot-ask-for-help" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職が助けを求められない理由</Link></li>
          <li>・<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link></li>
          <li>・<Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフケアが効かない理由</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/self-function-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能チェック(20項目)</Link></li>
          <li>・<Link to="/articles/self-value-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">条件付き自己価値チェック(24問)</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          自分を後回しにする習慣は、支える側だった人ほど一人では気づきにくいものです。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/helper-self-neglect"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

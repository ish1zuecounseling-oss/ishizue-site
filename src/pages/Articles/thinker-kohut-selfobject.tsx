import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "コフートの「自己対象」とは何ですか?",
    a: "精神分析家ハインツ・コフートが提唱した概念で、自分という感覚(自己)をまとまりのある、生き生きとしたものとして保つために、心の中で支えとして働く他者や関係のことです。認めてくれる人、頼れる理想の人、自分と同じだと感じられる仲間などが、自己対象として働きます。",
  },
  {
    q: "自己対象には、どんな種類がありますか?",
    a: "コフートは主に3つの働きを挙げています。自分を認め、映し返してくれる「鏡映」、尊敬し、その強さに支えられる「理想化」、自分と同じような存在がいると感じられる「双子(分身)」です。人は生涯を通じて、こうした関係を必要とし続けるとコフートは考えました。",
  },
  {
    q: "大人になっても、人に支えてもらう必要があるのですか?",
    a: "コフートは、人は大人になっても自己対象を必要とし続けると考えました。自立とは誰の支えもいらなくなることではなく、成熟した形で支え合えるようになることだ、というのが自己心理学の考え方です。支えを求めることは、未熟さではありません。",
  },
  {
    q: "コフートの理論は、このサイトの「自己機能」とどう関係していますか?",
    a: "このサイトで扱っている「自己機能(感じる・望む・選ぶ力)」は、自分という感覚がしっかり働いているかどうかに注目した考え方です。コフートの自己心理学は、その自己がどのように支えられ、どんなときに弱まるのかを説明する理論の一つとして、背景にある考え方と重なります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerKohutSelfobject() {
  return (
    <ArticleLayout
      title="支える人にも、支えが要る｜コフートの「自己対象」から読む、自分が空っぽになっていく支援職【公認心理師】"
      description="精神分析家コフートは、人は生涯を通じて、自分を認め、支え、仲間だと感じさせてくれる関係(自己対象)を必要とすると考えました。人を支え続けるうちに自分が空っぽになっていく支援職の状態と、支える人自身が支えを得る意味を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-kohut-selfobject"
      date="2026-10-21"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ハインツ・コフート
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
        利用者の話を聴き、気持ちを受け止め、「大丈夫ですよ」と支える。
        毎日それを続けているうちに、ふと気づく。
        自分の話を聴いてくれる人が、どこにもいない。
        自分が何を感じているのか、だんだんわからなくなってきた——。
      </p>
      <p>
        人を支え続ける人の心は、何によって支えられているのか。
        この問いに答える手がかりをくれるのが、精神分析家<strong>ハインツ・コフート</strong>の「自己対象」という考え方です。
      </p>

      <h2>ハインツ・コフートと自己心理学</h2>
      <p>
        コフート(1913–1981)は、オーストリアのウィーンに生まれ、ナチスの台頭を受けてアメリカへ渡った精神分析家です。
        シカゴで長く臨床と研究を続け、<strong>自己心理学</strong>と呼ばれる新しい精神分析の流れを築きました。
      </p>
      <p>
        コフートが注目したのは、「自分は自分だ」というまとまった感覚、つまり<strong>自己</strong>が、
        どのようにして育ち、保たれ、ときに崩れていくのかということでした。
        そして、自己は一人で保てるものではなく、<strong>周りの人との関係によって支えられている</strong>と考えたのです。
      </p>

      <h2>自己対象——自分を支えてくれる関係</h2>
      <p>
        コフートは、自己をまとまりのある、生き生きとしたものとして保つ働きをする他者や関係を、
        <strong>自己対象</strong>と呼びました。
        その主な働きは、次の3つです(筆者による要約)。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>鏡映</strong>:自分を認め、「それでいい」と映し返してくれる関係</li>
          <li>・<strong>理想化</strong>:尊敬でき、その強さや落ち着きに支えられる関係</li>
          <li>・<strong>双子(分身)</strong>:「自分と同じだ」と感じられる仲間がいる関係</li>
        </ul>
      </div>
      <p>
        赤ちゃんは、母親の笑顔に映し返されることで、自分がここにいていいと感じます。
        子どもは、頼れる大人の落ち着きに支えられて、不安を乗り越えます。
        そしてコフートは、<strong>人は大人になっても、こうした関係を生涯必要とし続ける</strong>と考えました。
      </p>
      <p>
        自己対象の支えが足りなくなると、自分という感覚は弱まり、
        空っぽになったり、ばらばらになったりするように感じられます。
      </p>

      <h2>支援職に置き換えると——支える側ばかりで、支えられていない</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 支援職は、利用者の「自己対象」になっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の話を受け止め、「よくがんばっていますね」と映し返す。
          落ち着いた態度で、不安な利用者を支える。
          支援職は日々、利用者にとっての鏡映や理想化の役割を担っています。
          それは、自分の心の力を相手に貸し出している状態でもあります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② けれど、自分の自己対象がいない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分を認めてくれる人、頼れる先輩、同じ悩みを分かち合える仲間。
          支える側に立ち続けるうちに、自分を支える関係が手薄になっていきます。
          (<Link to="/articles/thinker-doi-amae" className={linkCls}>土居健郎の「甘え」の回</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分が空っぽになっていく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支えを貸し出し続け、自分は支えられない状態が続くと、
          自分が何を感じ、何を望んでいるのかがわからなくなっていきます。
          これは、このサイトで扱っている<strong>自己機能の低下</strong>と重なる状態です。
          (<Link to="/articles/self-function-what" className={linkCls}>自己機能とは?支援職に多い自己機能低下</Link>で詳しく扱っています)
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">感じる・望む・選ぶ力がどのくらい働いているか、20項目で確かめられます。</p>
        <Link to="/articles/self-function-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ 自己機能チェック20項目</Link>
      </div>

      <LineCtaFatigue />

      <h2>支援職にとっての「双子」——同じ仕事をする仲間</h2>
      <p>
        3つの自己対象のうち、支援職にとってとくに大切なのが<strong>双子(分身)</strong>の関係かもしれません。
        支援の仕事のしんどさは、同じ仕事をしている人にしかわかりにくいものです。
        「わかる、私もそうだった」と言ってくれる仲間がいるだけで、自分という感覚は支えられます。
      </p>
      <p>
        スーパービジョンや事例検討、同僚との振り返りは、技術を学ぶ場であると同時に、
        <strong>支援者が自己対象を得る場</strong>でもあります。
        (<Link to="/articles/helper-supervision-compassion-fatigue" className={linkCls}>スーパービジョンは意味ある?</Link>も参考になります)
      </p>

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">コフートの理論は、もともと専門的な治療理論</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己心理学は、精神分析の臨床から生まれた専門的な理論で、ここで紹介したのはそのごく一部です。
          この記事では、支援職が自分の状態を理解するための手がかりとして、自己対象の考え方を取り出しています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">支えを求めることは、依存ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          コフートの考えでは、支えを必要とすることは未熟さではありません。
          成熟とは、誰の支えもいらなくなることではなく、互いに支え合える関係を持てるようになることです。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分の「自己対象」を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分を認めてくれる人、頼れる人、同じ悩みを分かち合える人を、それぞれ思い浮かべて書き出します。
          空欄が多いところが、今の自分に足りていない支えです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 同じ仕事をする仲間と話す時間を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          業務連絡ではなく、「最近しんどいこと」を話せる同業の仲間との時間を、意識して持ちます。
          職場の外の勉強会や交流の場でも構いません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分を映し返してもらう場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の話を聴いて、「それはしんどかったですね」と受け止めてもらえる場所を一つ持ちます。
          支援者が支えられることは、支援を続けるための土台です。
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
          <li>・<Link to="/articles/self-function-complete" className={linkCls}>自己機能とは(感じる・望む・選ぶ力)</Link></li>
          <li>・<Link to="/articles/self-function-check" className={linkCls}>自己機能チェック20項目</Link></li>
          <li>・<Link to="/articles/helper-supervision-compassion-fatigue" className={linkCls}>スーパービジョンは意味ある?</Link></li>
          <li>・<Link to="/articles/thinker-doi-amae" className={linkCls}>人の甘えは受け止められるのに、自分は甘えられない(土居健郎から読む)</Link></li>
          <li>・<Link to="/articles/thinker-winnicott-false-self" className={linkCls}>「いい職員」を演じ続けて、自分がわからなくなる(ウィニコットから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">支え続けて、自分が空っぽになってきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          今度は、あなたが支えられる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          支援職15年の経験から、支える側のしんどさを、同じ目線で受け止めます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-kohut-selfobject"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はコフートの自己心理学の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。本記事は理論を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

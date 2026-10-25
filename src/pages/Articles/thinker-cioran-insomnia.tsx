import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "シオランとは、どんな人ですか?",
    a: "ルーマニア出身で、のちにパリで暮らした思想家エミール・シオラン(1911–1995)です。短い断章(アフォリズム)の形で、人間の苦しみや孤独、不安を鋭く書きました。若いころから長く不眠に苦しみ、その経験が自分の思想の出発点になったと語っています。",
  },
  {
    q: "夜に考えごとをすると、悪いほうへ考えてしまうのはなぜですか?",
    a: "夜は疲れがたまり、脳の働きも昼間とは変わっています。研究者の間では、深夜に起きていると物事を否定的に捉えやすく、衝動的な考えも強まりやすいのではないかという仮説も提唱されています。夜中に浮かぶ暗い考えは、昼間に同じことを考えたときより、実際以上に重く感じられやすいのです。",
  },
  {
    q: "この記事は、シオランの思想をすすめるものですか?",
    a: "いいえ。シオランの著作には、生きることへの深い疑いや絶望が書かれています。この記事では、その思想を肯定したりすすめたりするのではなく、彼が語った「不眠の経験」を手がかりに、夜の思考との付き合い方を考えています。",
  },
  {
    q: "眠れない夜に、消えてしまいたいと思うことがあります。",
    a: "その気持ちを一人で抱えないでください。こころの健康相談統一ダイヤル(0570-064-556)や、よりそいホットライン(0120-279-338)など、電話で話を聴いてもらえる窓口があります。厚生労働省の「まもろうよ こころ」のページでは、電話やSNSの相談先を探せます。眠れない状態が続く場合は、医療機関にも相談してください。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerCioranInsomnia() {
  return (
    <ArticleLayout
      title="眠れない夜の考えを、信じすぎない｜シオランの「不眠」から読む、夜に深まる支援職の思考【公認心理師】"
      description="思想家シオランは、若いころからの長い不眠が自分の思考を形づくったと語りました。夜勤明けや眠れない夜に、仕事や自分のことを暗いほうへ考えてしまう支援職へ、夜の思考が持つ特徴と、その考えを信じすぎないための付き合い方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-cioran-insomnia"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ エミール・シオラン
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
        夜中の3時、ふと目が覚める。
        天井を見つめていると、今日の失敗、明日の不安、この仕事を続けていけるのかという問いが、次々に浮かんでくる。
        昼間なら気にならないことが、夜にはとても重大なことに思える——。
      </p>
      <p>
        眠れない夜の思考は、なぜこんなにも暗くなるのか。
        生涯にわたって不眠とともに生き、夜の思考を書き続けた思想家がいます。
        <strong>エミール・シオラン</strong>です。
      </p>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-xs text-stone-600 leading-relaxed">
          この記事は、シオランの思想そのものをすすめるものではありません。彼の著作には生きることへの深い絶望も書かれていますが、ここでは「不眠」と「夜の思考」に焦点を絞っています。
          今、つらい気持ちが強い方は、記事の最後にある相談先も参考にしてください。
        </p>
      </div>

      <h2>シオラン——不眠から生まれた思想家</h2>
      <p>
        シオラン(1911–1995)は、ルーマニアに生まれ、20代でフランスに渡り、のちにフランス語で書いた思想家です。
        長い論文ではなく、短い断章(アフォリズム)の形で、人間の苦しみや孤独、不安を鋭く描きました。
      </p>
      <p>
        シオランは若いころから、何年にもわたる激しい不眠に苦しみました。
        晩年のインタビューでは、眠れない夜に街をさまよい歩いた経験を語り、
        <strong>その不眠こそが、自分の考え方を根本から形づくった</strong>と振り返っています。
        眠れない夜が続くと、世界の見え方そのものが変わってしまう——シオランの書いたものは、その記録でもあります。
      </p>

      <h2>夜の思考は、昼の思考と違う</h2>
      <p>
        シオランの経験は、極端なものに見えるかもしれません。
        けれど、夜に考えることが昼とは違う色を帯びるのは、誰にでも起こることです。
      </p>
      <p>
        夜は、一日の疲れがたまり、周りに話す相手もいません。
        研究者の間では、深夜に起きていると、物事を否定的に捉えやすくなり、
        衝動的な考えも強まりやすいのではないか、という仮説も提唱されています。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">夜の思考に起こりやすいこと(筆者による整理)</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・小さな失敗が、取り返しのつかないことのように思える</li>
          <li>・将来のことを、悪い方向にばかり想像してしまう</li>
          <li>・自分という人間全体に、否定的な結論を出してしまう</li>
          <li>・考えが同じところをぐるぐる回り、抜け出せなくなる</li>
        </ul>
      </div>
      <p>
        シオランの言葉を借りるまでもなく、<strong>夜の思考は、昼の思考より暗く、重く感じられやすい</strong>のです。
      </p>

      <h2>支援職に置き換えると——夜に深まる仕事の思考</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 夜勤明け・不規則な勤務</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          夜勤や不規則な勤務が続くと、睡眠のリズムが乱れ、夜の思考に巻き込まれやすくなります。
          (<Link to="/articles/helper-night-shift-mental-health" className={linkCls}>夜勤・不規則勤務が支援職のメンタルに与える影響</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 布団の中の反省会</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          昼間の利用者対応を、夜の布団の中で何度も思い返してしまう。
          夜の思考は、反省を「自分はダメだ」という結論に変えやすくします。
          (<Link to="/articles/cannot-sleep-thinking-work" className={linkCls}>眠れない・仕事のことが頭から離れない</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 夜に、大きな決断をしてしまう</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「もう辞めよう」「自分には向いていない」。
          夜中に出した結論は、朝になると違って見えることがよくあります。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>夜の考えを、信じすぎない</h2>
      <p>
        シオランは、不眠の夜に浮かぶ考えを書き続けました。
        けれど私たちは、それを逆の方向から使うことができます。
        <strong>夜に浮かぶ考えは、昼の考えとは違う。だから、夜の考えをそのまま信じすぎない</strong>。
      </p>
      <p>
        夜中に出した結論は、いったん保留にして、朝の自分にもう一度確かめてもらう。
        それだけで、夜の思考に振り回されることが少し減ります。
        (<Link to="/articles/thinker-pyrrho-epoche" className={linkCls}>ピュロンの「判断保留」の回</Link>も参考になります)
      </p>

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">シオランの思想を、手本にしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          シオランは、不眠と絶望から鋭い言葉を生み出しましたが、その生き方や考え方を手本にする必要はありません。
          この記事は、彼の経験を、夜の思考に気づくための手がかりとして使っています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">不眠が続くときは、医療の領域</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          眠れない日が2週間以上続く、日中の生活に支障が出ている、気分の落ち込みが続く場合は、
          心身の不調のサインです。思想ではなく、医療機関や専門家の助けを借りてください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 夜中の結論は、朝まで保留する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          夜中に「もうダメだ」と思ったら、「これは夜の考え。朝にもう一度考える」と心の中で言います。
          大きな決断は、夜にはしないと決めておきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 浮かんだ考えを、紙に預ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          枕元にメモを置き、頭から離れない考えを書き出します。
          書いたら「続きは明日」と区切りをつけ、考えるのをいったん紙に任せます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 眠れないときは、布団を出る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          眠れないまま布団の中で考え続けると、布団が「考えごとの場所」になってしまいます。
          しばらく眠れないときは、いったん布団を出て、暗めの明かりの下で静かに過ごし、眠気が来てから戻ります。
        </p>
      </div>

      <div className="my-6 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm font-medium text-stone-700 mb-1.5">つらい気持ちが強いときの相談先</p>
        <ul className="text-sm text-stone-600 leading-[1.9] space-y-1">
          <li>・こころの健康相談統一ダイヤル:0570-064-556</li>
          <li>・よりそいホットライン:0120-279-338</li>
          <li>・厚生労働省「まもろうよ こころ」(電話・SNSの相談先を探せます)</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">一人で抱えず、話を聴いてもらえる場所を使ってください。</p>
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
          <li>・<Link to="/articles/cannot-sleep-thinking-work" className={linkCls}>眠れない・仕事のことが頭から離れない(反芻思考)</Link></li>
          <li>・<Link to="/articles/helper-night-shift-mental-health" className={linkCls}>夜勤・不規則勤務が支援職のメンタルに与える影響</Link></li>
          <li>・<Link to="/articles/thinker-kross-chatter" className={linkCls}>頭の中の反省会が止まらない(イーサン・クロスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-pyrrho-epoche" className={linkCls}>「きっとこう思われている」を手放す(ピュロンから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">眠れない夜が続いている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          夜に一人で考えていることを、昼に話す時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          夜に重くなる考えも、昼に誰かと話すと違って見えることがあります。医療機関との併用も歓迎です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-cioran-insomnia"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はシオランの不眠の経験についての語りを筆者が要約したもので、著作からの直接の引用は行っていません。本記事は思想家の経験を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

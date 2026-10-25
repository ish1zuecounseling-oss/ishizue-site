import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ウパニシャッドとは何ですか?",
    a: "古代インドで成立した哲学的な文献の総称です。古いものは紀元前7〜6世紀ごろにさかのぼるとされ、インド哲学の源流の一つとされています。「本当の自己とは何か」という問いを中心に、師と弟子の対話や、たとえ話の形で教えが語られています。",
  },
  {
    q: "「同じ木にとまる2羽の鳥」とは、どんなたとえですか?",
    a: "ムンダカ・ウパニシャッドなどに出てくるたとえで、同じ木に2羽の鳥がとまっていて、1羽は木の実を食べ、もう1羽は食べずにそれを眺めている、というものです。実を食べる鳥は、喜びや苦しみを味わいながら生きる自分、眺める鳥は、それを静かに見ている自分を表すと解釈されています。",
  },
  {
    q: "「汝はそれなり」とは、どういう意味ですか?",
    a: "チャーンドーギヤ・ウパニシャッドで、父が息子に繰り返し語る言葉です。一人ひとりの奥にある本当の自己(アートマン)は、世界の根源(ブラフマン)と一つである、という教えを表しています。この記事では宗教的な教えとしてではなく、役割や評価の奥にある自分を見つめる手がかりとして読んでいます。",
  },
  {
    q: "「見ている自分」を意識するのは、心理学でも使われる考え方ですか?",
    a: "はい。現代の心理療法の中にも、考えや感情に巻き込まれている自分と、それに気づいている自分を区別し、気づいている側に立つ練習を取り入れているものがあります。ウパニシャッドの思想とは成り立ちが異なりますが、自分を少し離れたところから見るという点で通じるところがあります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerUpanishadWitness() {
  return (
    <ArticleLayout
      title="役割を演じる自分と、それを見ている自分｜ウパニシャッドの「2羽の鳥」から読む、役割に飲み込まれる支援職【公認心理師】"
      description="古代インドのウパニシャッドには、同じ木にとまる2羽の鳥のたとえがあります。1羽は実を食べ、もう1羽はそれを静かに見ている。職員、家族の世話役と、いくつもの役割に飲み込まれて自分を見失う支援職へ、「見ている自分」に立ち戻る方法を公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-upanishad-witness"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ウパニシャッド
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
        職場では「頼れる職員」、家では「しっかり者」、親の前では「いい子」。
        一日中、何かの役割を演じている。
        褒められれば舞い上がり、責められれば落ち込み、気づけば一日中、感情に振り回されている。
        「本当の自分」がどこにいるのか、わからない——。
      </p>
      <p>
        役割と感情の渦の中で、自分を見失いそうになるとき。
        古代インドの人々が残した、あるたとえ話が手がかりになります。
        <strong>ウパニシャッド</strong>に出てくる、「2羽の鳥」の話です。
      </p>

      <h2>ウパニシャッド——「本当の自己」を問い続けた古代の哲学</h2>
      <p>
        ウパニシャッドは、古代インドで成立した哲学的な文献の総称です。
        古いものは紀元前7〜6世紀ごろにさかのぼるとされ、インド哲学の源流の一つになっています。
      </p>
      <p>
        その中心にある問いは、<strong>「本当の自己とは何か」</strong>です。
        体でも、心の動きでも、社会的な役割でもない、その奥にある自己——アートマン——を、
        師と弟子の対話やたとえ話を通して探っています。
      </p>

      <h2>同じ木にとまる、2羽の鳥</h2>
      <p>
        ムンダカ・ウパニシャッドには、こんなたとえが出てきます(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          仲のよい2羽の鳥が、同じ木にとまっている。
          1羽は、甘い木の実を食べている。
          もう1羽は、食べることなく、ただそれを眺めている。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ムンダカ・ウパニシャッド 3.1.1 より(原典をもとに筆者訳・要約)
        </p>
      </div>
      <p>
        実を食べている鳥は、喜びや苦しみを味わいながら生きている自分を表すと解釈されます。
        役割を演じ、褒められて喜び、責められて落ち込む——そんな、日々の経験の中にいる自分です。
      </p>
      <p>
        もう1羽の、ただ眺めている鳥は、<strong>それを静かに見ている自分</strong>です。
        喜びにも苦しみにも巻き込まれず、ただ、今何が起きているのかを見ている。
        ウパニシャッドは、この「見ている自分」こそが、本当の自己に近いものだと考えました。
      </p>
      <p>
        そして大切なのは、2羽が<strong>同じ木にとまっている</strong>ことです。
        見ている自分は、どこか遠くにいるのではありません。
        実を食べている自分のすぐそばに、いつもいるのです。
      </p>

      <h2>「汝はそれなり」——役割の奥にある自分</h2>
      <p>
        チャーンドーギヤ・ウパニシャッドには、父が息子に、水に溶けた塩のたとえなどを使って、
        本当の自己について教える場面があります。
        父は話の最後に、繰り返しこう告げます。<strong>「汝はそれなり」</strong>。
      </p>
      <p>
        宗教的には、一人ひとりの奥にある自己が、世界の根源と一つであることを表す言葉です。
        この記事ではそれを、<strong>役割や評価の奥に、それらに左右されない自分がいる</strong>という意味で受け取ってみます。
        「頼れる職員」も「しっかり者」も、あなたの一部ではあっても、あなたのすべてではありません。
      </p>

      <h2>支援職に置き換えると——実を食べる鳥ばかりになる</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 役割と自分が、区別できなくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は、職員としての役割に深く入り込む仕事です。
          役割を演じ続けるうちに、役割の評価が、そのまま自分の価値のように感じられていきます。
          (<Link to="/articles/thinker-winnicott-false-self" className={linkCls}>ウィニコットの「偽りの自己」の回</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情の渦に、巻き込まれ続ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の苦しみ、同僚との摩擦、上司の評価。
          実を食べる鳥のように、一つひとつの出来事を全身で味わい続けていると、心は休む間がありません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 見ている自分が、いなくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          忙しさの中で、「今、自分は疲れている」「今、苛立っている」と気づく余裕がなくなる。
          見ている鳥がいなくなると、自分の状態に気づけないまま、限界まで走り続けてしまいます。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">宗教的な教えを、そのまま勧めるものではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ウパニシャッドは、インドの宗教と哲学の伝統の中で読まれてきた文献で、その解釈にはさまざまな立場があります。
          この記事では、特定の宗教的な実践を勧めるのではなく、たとえ話を、自分を見つめ直す手がかりとして読んでいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「見ている自分」は、感情を消すことではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          見ている自分に立つことは、喜びや悲しみを感じなくなることではありません。
          感じながら、それに気づいている。2羽の鳥は、どちらも同じ木にいます。
          どちらか一方だけになる必要はないのです。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「今、〜している」と実況する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情が大きく動いたとき、「今、自分は苛立っている」「今、焦っている」と、心の中で実況してみます。
          実況しているのが、眺めている鳥です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割を一つずつ脱ぐ時間を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          帰宅後や寝る前に、「今日の職員としての役割はおしまい」と心の中で区切りをつけます。
          役割を脱いだあとに残る自分を、少しだけ感じてみます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 1日の終わりに、少し離れて振り返る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          今日の出来事を、自分を外から眺めるように振り返ります。
          (<Link to="/articles/thinker-kross-chatter" className={linkCls}>イーサン・クロスの「自分と距離をとる話し方」の回</Link>も参考になります)
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
          <li>・<Link to="/articles/thinker-winnicott-false-self" className={linkCls}>「いい職員」を演じ続けて、自分がわからなくなる(ウィニコットから読む)</Link></li>
          <li>・<Link to="/articles/thinker-nishida-pure-experience" className={linkCls}>考える前の、ありのままの経験(西田幾多郎から読む)</Link></li>
          <li>・<Link to="/articles/thinker-krishnamurti-comparison" className={linkCls}>比べるのをやめて、ただ観る(クリシュナムルティから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">役割の中で、自分を見失いかけている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          役割を下ろして、自分を見つめる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          職員でも、世話役でもないあなたの話を聴きます。少し離れたところから、一緒に今の自分を眺めてみましょう。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-upanishad-witness"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインの原典(ムンダカ・ウパニシャッド、チャーンドーギヤ・ウパニシャッド)をもとに筆者が翻訳・要約したものです。本記事は思想を手がかりに支援職の心理を解説するもので、特定の宗教的実践を勧めるものではなく、医学的な診断や治療に代わるものでもありません。
      </div>
    </ArticleLayout>
  )
}

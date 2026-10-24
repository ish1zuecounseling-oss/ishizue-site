import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaQuit } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "『方丈記』とは、どんな作品ですか?",
    a: "鎌倉時代のはじめ、1212年に鴨長明が書いた随筆です。前半では、大火、竜巻、遷都、飢饉、大地震といった災害を通して、世の中のはかなさを描きます。後半では、出家した長明が、一丈四方(約3メートル四方)の小さな庵で暮らす日々を綴っています。『枕草子』『徒然草』と並ぶ日本三大随筆の一つです。",
  },
  {
    q: "「方丈」とはどういう意味ですか?",
    a: "「一丈四方」のことで、一辺が約3メートルの正方形の広さを指します。長明は晩年、この広さの小さな庵を建てて暮らしました。組み立て式で、車に積んで運べるほど簡素なものだったと書かれています。",
  },
  {
    q: "支援職を辞めたいと思う自分は、弱いのでしょうか?",
    a: "弱いわけではありません。辞めたいという気持ちは、今の働き方や環境に無理が生じているサインとして受け止めることができます。すぐに辞めるかどうかを決める必要はなく、まずは何がつらいのかを整理することから始めるのがおすすめです。",
  },
  {
    q: "辞める前に、何をしておけばいいですか?",
    a: "衝動的に辞める前に、休職や部署異動、勤務時間の調整など、段階的な選択肢がないか確認しておくと安心です。心身の不調がある場合は、医療機関を受診しておくことも大切です。一人で決めきれないときは、信頼できる人やカウンセラーに話しながら整理していくことができます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerChomeiHojoki() {
  return (
    <ArticleLayout
      title="苦しいときは休め、元気なら使え｜鴨長明『方丈記』から読む、支援職を「降りる」選択肢の持ち方【公認心理師】"
      description="鴨長明は『方丈記』で、出世の道を絶たれたあと、小さな庵で「苦しいときは休ませ、元気なときは使う」暮らしを送ったことを綴りました。支援職を辞めたい、降りたいと感じながら、そう思う自分を責めてしまう人に向けて、「降りる選択肢」を持つことの意味を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-chomei-hojoki"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 鴨長明
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
        「もう辞めたい」と思う。
        でも、利用者さんの顔が浮かぶ。人手が足りないのもわかっている。
        ここまで積み上げてきたものを手放したら、自分には何も残らないような気がする。
        そして、辞めたいと思う自分を、また責めてしまう——。
      </p>
      <p>
        約800年前、思い描いていた道を絶たれ、すべてを手放して小さな庵に移り住んだ人がいます。
        『方丈記』の作者、<strong>鴨長明(かものちょうめい)</strong>です。
      </p>

      <h2>鴨長明とはどんな人か</h2>
      <p>
        鴨長明(1155ごろ–1216)は、平安時代の終わりから鎌倉時代のはじめを生きた歌人・随筆家です。
        京都の下鴨神社で神職を務める家に生まれましたが、若くして父を亡くし、後ろ盾を失いました。
      </p>
      <p>
        和歌と琵琶にすぐれ、後鳥羽院に認められて宮中の和歌所に仕えるまでになります。
        ところが50歳ごろ、念願だった神社の神職に就く話が、一族の反対によってつぶれてしまいます。
        長明はその後まもなく出家し、やがて京都の郊外、日野の山中に、一丈四方(約3メートル四方)の小さな庵を建てて暮らしはじめました。
      </p>
      <p>
        その庵で1212年に書かれたのが<strong>『方丈記』</strong>です。
        長明は生涯のうちに、京の大火、竜巻、都の移転、飢饉、大地震を目の当たりにしてきました。
      </p>

      <h2>「ゆく河の流れは絶えずして」</h2>
      <p>
        『方丈記』は、あまりにも有名な一文から始まります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          ゆく河の流れは絶えずして、しかも、もとの水にあらず。
          よどみに浮かぶうたかたは、かつ消えかつ結びて、久しくとどまりたる例なし。
          世の中にある人とすみかと、またかくのごとし。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          鴨長明『方丈記』冒頭より
        </p>
      </div>
      <p>
        川の流れは絶えないが、流れている水は、もとの水ではない。
        よどみに浮かぶ泡は、消えては生まれ、長くとどまることはない。
        世の中の人と住まいも、これと同じだ——。
      </p>
      <p>
        どんな立場も、職場も、人間関係も、ずっと同じ形ではいられない。
        今いる場所が「すべて」に見えるときほど、この言葉は、少し引いた目線を取り戻させてくれます。
      </p>

      <h2>「苦しいときは休ませ、元気なときは使う」</h2>
      <p>
        庵での暮らしを描いた後半には、こんな一節があります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          身、心の苦しみを知れれば、苦しむ時は休めつ、まめなれば使ふ。
          使ふとても、たびたび過ぐさず。もの憂しとても、心を動かす事なし。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          鴨長明『方丈記』より
        </p>
      </div>
      <p>
        現代語にすると、おおよそ次のような意味です(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          心は体のつらさをわかっているから、つらいときは休ませ、元気なときは使う。
          使うといっても、度を越すことはない。気が進まないときも、それで心を乱すことはない。
        </p>
      </div>
      <p>
        長明は、庵の暮らしでは召使いを置かず、必要なことは自分の手足でこなしていました。
        そして、それについてこうも書いています。
        「疲れないわけではないが、<strong>人を従わせたり、人に気をつかったりするよりは気楽だ</strong>」。
      </p>
      <p>
        体を使う疲れより、人に気をつかう疲れのほうが重い。
        宮中で人間関係にもまれてきた長明の、実感のこもった言葉です。
      </p>

      <h2>支援職に置き換えると——「降りる」ことへの怖さ</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 辞めたいと思う自分を責める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「利用者さんを見捨てるのか」「みんな頑張っているのに」。
          辞めたいという気持ちを、無責任さや弱さとして受け止めてしまいます。
          (<Link to="/articles/helper-want-to-quit-landing" className={linkCls}>支援職を辞めたいと思ったときに読むページ</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 降りたら、自分には何も残らない気がする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長く支援の仕事を続けてきた人ほど、仕事が自分の価値のほとんどを占めています。
          だから、役割を降りることが、自分を失うことのように感じられます。
          (<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ いちばん重いのは、人に気をつかう疲れ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          業務量そのものより、利用者、家族、同僚、上司への気づかいに消耗している。
          長明の言う「人を顧みる」疲れは、支援職の疲れの中心にあるものです。
        </p>
      </div>

      <h2>「降りる選択肢」を持っておく</h2>
      <p>
        長明は、すべてを捨てたわけではありませんでした。
        方丈の庵には、琴と琵琶を一つずつ置き、一人で弾いて楽しんでいたと書いています。
        役割を降りても、好きなものや自分らしさは、ちゃんと残っていたのです。
      </p>
      <p>
        大切なのは、実際に辞めるかどうかよりも、
        <strong>「降りる道もある」と知っていること</strong>です。
        逃げ道がまったくないと感じる状態は、それだけで人を追いつめます。
        降りる選択肢を持っているからこそ、今の場所にとどまるかどうかを、落ち着いて選べるようになります。
        (<Link to="/articles/helper-career-decision" className={linkCls}>続けるか、離れるかで迷っているときに読むページ</Link>も参考になります)
      </p>

      <LineCtaQuit />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">降りれば解決する、とは限らない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          『方丈記』の最後で、長明は自分に問いかけます。
          「草庵を愛するも、とがとす。閑寂に着するも、障りなるべし」——小さな庵を愛することも、静けさにこだわることも、また一つのとらわれではないか、と。
          場所を変えても、心のとらわれがすべて消えるわけではないことを、長明自身が認めています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">現実には、生活と段階的な選択肢がある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長明のように、すべてを手放して暮らすことは、多くの人にとって現実的ではありません。
          辞める前に、休職、異動、勤務時間の調整など、段階的な選択肢を確認しておくことが大切です。
          (<Link to="/articles/helper-leave-of-absence-hesitation" className={linkCls}>支援職が休職するか迷うとき</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">仕事ではなく、生きることから降りたくなったら</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「消えてしまいたい」「生きているのがつらい」と感じるときは、一人で抱えずに、すぐに誰かに話してください。
          よりそいホットライン(0120-279-338・24時間無料)や、いのちの電話でも相談できます。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「今日の体と心」に、1から10で点数をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          朝、自分のしんどさを1〜10で点数にします。
          長明のように、つらい日は少し手を抜き、元気な日に動く。自分の状態に合わせて使い方を変える練習です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 疲れの中身を「体の疲れ」と「気づかいの疲れ」に分ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          今日疲れた場面を書き出し、体を動かした疲れか、人に気をつかった疲れかに分けてみます。
          どちらが多いかがわかると、何を減らせばいいかが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事以外の「琵琶」を一つ思い出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長明にとっての琴や琵琶のように、役割と関係なく好きだったものを一つ思い出し、少しだけ触れてみます。
          仕事を降りても残る自分の一部を、確かめておくためです。
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
          <li>・<Link to="/articles/helper-want-to-quit-landing" className={linkCls}>支援職を辞めたいと思ったときに読むページ</Link></li>
          <li>・<Link to="/articles/helper-quit-timing-check" className={linkCls}>辞め時チェック(12項目)</Link></li>
          <li>・<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link></li>
          <li>・<Link to="/articles/thinker-bachelard-house" className={linkCls}>家は、夢想をかくまう(バシュラールから読む)</Link></li>
          <li>・<Link to="/articles/thinker-zhuangzi-useless" className={linkCls}>役に立つ木から、切られていく(荘子から読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">辞めたい気持ちと、責める気持ちの間で迷っている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          決める前に、まず整理する
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          辞めるか続けるかを急いで決める必要はありません。何がつらいのかを、一緒に言葉にしていきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-chomei-hojoki"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、著作権の保護期間が満了している『方丈記』(1212年)の原文と、筆者による現代語訳です。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

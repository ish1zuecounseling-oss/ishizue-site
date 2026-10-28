import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "荘子の「無用の用」とは、どういう意味ですか?",
    a: "一見役に立たないものが、実は大切な働きをしている、という考え方です。『荘子』人間世篇では、役に立つ木ほど切られ、役に立たない木ほど長生きして大木になると語られます。役に立つかどうかという一つの物差しだけで、ものや人の価値を測ることへの問いかけです。",
  },
  {
    q: "荘子と老子は、どう違うのですか?",
    a: "どちらも「道家」と呼ばれる中国古代の思想の流れに属し、まとめて「老荘思想」と呼ばれます。老子が国の治め方を含めて簡潔な言葉で語るのに対し、荘子は寓話やたとえ話を多く使い、個人がとらわれから自由になることに重きを置いているのが特徴です。",
  },
  {
    q: "「役に立たなくていい」と言われても、仕事は休めません。",
    a: "荘子の言葉は、仕事を投げ出せという意味ではありません。役に立つことが自分の価値のすべてになっていないか、見直すための視点です。仕事では役に立ちつつ、役に立たない時間や関係を生活の中に残しておくことが、長く働き続ける支えになります。",
  },
  {
    q: "役に立っていないと、自分には価値がないと感じてしまいます。",
    a: "支援職には、人の役に立つことで自分の価値を確かめてきた人が少なくありません。その感覚が強すぎると、休むことや頼ることに罪悪感が生まれます。この感じ方は性格の問題ではなく、長年の働き方の中で身についたものです。一人で変えにくいときは、カウンセリングで整理することもできます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerZhuangziUseless() {
  return (
    <ArticleLayout
      title="役に立つ木から、切られていく｜荘子「無用の用」から読む、役に立つことでしか自分を認められない支援職へ【公認心理師】"
      description="古代中国の思想家・荘子は「人はみな役に立つものの役立ちを知っているが、役に立たないものの役立ちを知らない」と語りました。役に立つことでしか自分の価値を感じられず、頼まれるほど削られていく支援職に向けて、「無用の用」の意味と日常での生かし方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-zhuangzi-useless"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 荘子
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
        頼まれると断れない。
        気づけば、職場の困りごとはみんな自分のところに来る。
        「あの人に任せれば大丈夫」と言われるたびに、少しうれしくて、少し苦しい。
        そして休みの日、何もしていない自分に、なぜか落ち着かない——。
      </p>
      <p>
        役に立っているときだけ、自分には価値があると感じられる。
        そんな人に読んでほしいのが、2300年以上前の中国の思想家、
        <strong>荘子(そうし)</strong>の「無用の用」という考え方です。
      </p>

      <h2>荘子とはどんな人か</h2>
      <p>
        荘子は、紀元前4世紀ごろ、中国の戦国時代を生きた思想家です。名は周(しゅう)。
        老子とともに「老荘思想」と呼ばれる道家の代表的な人物です。
        若いころ、漆の木を育てる園の小役人をしていたと伝えられています。
      </p>
      <p>
        ある国の王が、荘子を大臣に迎えようと使者を送ったことがありました。
        荘子は、「立派な箱に納められて祀られる亀の甲羅になるより、泥の中で尾を引きずってでも生きている亀でいたい」と答え、断ったといいます。
        世の中で「役に立つ」とされる地位に、自分を差し出さなかった人でした。
      </p>
      <p>
        書物『荘子』は、荘子本人の思想に近いとされる「内篇」と、のちの弟子たちが書き加えたとされる「外篇」「雑篇」からなります。
        寓話やたとえ話が多く、読み物としても親しまれてきました。
      </p>

      <h2>「人はみな、役に立たないものの役立ちを知らない」</h2>
      <p>
        『荘子』人間世篇は、次のような言葉で締めくくられます(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          山の木は、役に立つから自ら切られることを招き、灯火の油は、燃えるから自らを焼く。
          肉桂は食べられるから伐られ、漆は使えるから幹を裂かれる。
          人はみな、役に立つものの役立ちは知っているが、役に立たないものの役立ちは知らない。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          『荘子』人間世篇より(漢文原文から筆者訳)
        </p>
      </div>
      <p>
        役に立つものは、役に立つからこそ使われ、削られ、消耗していく。
        荘子は、「役に立つこと」が、そのものを守るとは限らないと見抜いていました。
      </p>

      <h2>役に立たない大木の話</h2>
      <p>
        同じ人間世篇には、こんな寓話があります。
        腕のいい大工が旅の途中、神社に立つ巨大な木を見かけます。
        見物人が群がるほどの大木でしたが、大工は見向きもせずに通り過ぎました。
        弟子が理由を尋ねると、「あれは使いものにならない木だ。船にすれば沈み、棺にすればすぐ腐り、柱にすれば虫が食う。役に立たないから、あれほど長生きしたのだ」と答えます。
      </p>
      <p>
        その夜、大工の夢に木が現れて、こう語ります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          私は長いあいだ、役に立たないものであろうと努めてきた。
          死にかけたこともあったが、ようやくそれを手に入れ、それが私の大きな役立ちとなった。
          もし私が役に立つ木だったなら、ここまで大きくなれただろうか。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          『荘子』人間世篇より(漢文原文から筆者訳)
        </p>
      </div>
      <p>
        実のなる木は、実が熟すたびに枝を折られ、寿命をまっとうできない。
        けれど役に立たない木は、誰にも切られず、旅人に木陰を与えるほどに育った。
        「役に立たないこと」が、この木の生き方を守ったのです。
      </p>
      <p>
        別の篇では、使い道のない大木を嘆く友人に、荘子はこう勧めています。
        「何もない広い野原に植えて、そのそばをぶらぶら歩き、その下で寝転んだらいい」。
        役に立たないものは、何かに使われるのではなく、休むための場所になるのです。
      </p>

      <h2>支援職に置き換えると——「役に立つ」から削られていく</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① できる人のところに、仕事が集まる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気がきく、頼みやすい、断らない。そういう人ほど、仕事や相談が集まります。
          漆の木が使えるから裂かれるように、役に立つ人ほど削られていく構図があります。
          (<Link to="/articles/helper-cannot-say-no" className={linkCls}>支援職が「No」と言えない理由</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役に立っていない自分を、認められない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人の役に立つことで、自分の価値を確かめてきた。
          だから、役に立てない日や、誰かに頼る場面になると、自分がいていい理由がわからなくなる。
          (<Link to="/articles/value-from-being-useful" className={linkCls}>役に立つことでしか価値を感じられない</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 休むこと、遊ぶことに罪悪感がある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何も生み出さない時間は「無駄」に思える。
          けれど、木陰のように人を休ませるのは、何かに使われていない時間や場所です。
          役に立たない時間がないと、心は回復する場所を失います。
        </p>
      </div>

      <h2>価値の土台は、「役に立つ」の外にある</h2>
      <p>
        『荘子』外物篇には、こんなやりとりもあります。
        論敵の恵子に「君の話は役に立たない」と言われた荘子は、こう返します。
        「大地は広いが、人が使っているのは足を置く場所だけだ。では、足の下以外の土を、底の底まで掘り崩してしまったら、その足場はまだ役に立つだろうか」。
        恵子が「役に立たない」と答えると、荘子は「それなら、役に立たないものの役立ちも明らかだろう」と結びます。
      </p>
      <p>
        仕事で役に立っている部分は、足を置いている場所にあたります。
        それを支えているのは、雑談、趣味、ぼんやりする時間、何の役にも立たない友人との関係といった、
        一見「使われていない」部分です。
        そこを削り続けると、役に立つ部分そのものが崩れていきます。
      </p>
      <p>
        心理学でも、自分の価値が仕事や成果だけに結びついている状態は、
        失敗や休職のときに大きく揺らぎやすいと考えられています。
        (<Link to="/articles/value-from-being-useful" className={linkCls}>支援職の幸福感は、貢献からだけでは生まれない</Link>も参考になります)
      </p>

      <LineCtaCompassion />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">荘子は、社会から降りる道を選べた</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          荘子は地位を断り、世の中から距離をとる生き方を選びました。
          けれど現実には、生活のために働き、役割を果たすことも必要です。
          「役に立たなくなれ」ではなく、「役に立つことだけを価値にしない」という読み方が現実的です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">負担の偏りは、心構えでは解決しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          できる人に仕事が集まり続けるのは、本人の考え方だけでなく、職場の仕組みの問題でもあります。
          業務の配分は、上司や組織と話し合って見直す必要があります。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「役に立たなかった時間」を一つ書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一日の終わりに、誰の役にも立たなかったけれど心地よかった時間を一つ書きます。
          空を見た、好きな曲を聴いた、猫をなでた。そういう時間が、あなたの足場を支えています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 頼まれごとを、一つだけ保留する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          すぐに引き受けず、「確認して返事します」と一度保留してみます。
          役に立つ自分をいつでも差し出さないことが、自分を削りすぎない練習になります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 目的のない散歩をする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          荘子が勧めたように、ただぶらぶら歩いてみます。
          健康のためでも、気分転換のためでもなく、何の目的もない時間として過ごすのがポイントです。
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
          <li>・<Link to="/articles/value-from-being-useful" className={linkCls}>役に立つことでしか価値を感じられない</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className={linkCls}>自分の価値がわからない</Link></li>
          <li>・<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link></li>
          <li>・<Link to="/articles/thinker-diogenes-currency" className={linkCls}>世間の価値の物差しを疑う(ディオゲネスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-fromm-art-of-loving" className={linkCls}>与えることと愛すること(フロムから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">役に立っていないと、落ち着かない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          何の役にも立たなくていい時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          ここでは、誰かの役に立つ必要はありません。役に立つことでしか自分を認められない理由を、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-zhuangzi-useless"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、著作権の保護期間が満了している漢文原典『荘子』(人間世篇)から筆者が翻訳したものです。そのほかの寓話(秋水篇・逍遙遊篇・外物篇)は筆者による要約です。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

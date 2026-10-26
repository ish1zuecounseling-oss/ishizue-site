import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "アリストテレスの「中庸」とは、どういう意味ですか?",
    a: "多すぎることと少なすぎることの両方を避け、その場にふさわしい「ちょうどよさ」を選ぶことです。たとえば勇気は、臆病と無謀の間にあります。ただし、単純な真ん中や「ほどほど」のことではなく、時・相手・目的・やり方に応じて、そのつど見極めるものだとアリストテレスは考えました。",
  },
  {
    q: "『ニコマコス倫理学』とは、どんな本ですか?",
    a: "古代ギリシャの哲学者アリストテレスの講義をまとめたとされる倫理学の書です。人が幸福に生きるとはどういうことか、そのためにどんな性格(徳)を育てればよいかが論じられています。書名の「ニコマコス」は、アリストテレスの父、あるいは息子の名前に由来するといわれています。",
  },
  {
    q: "支援職が怒りを感じるのは、いけないことですか?",
    a: "いけないことではありません。アリストテレスは、怒るべきことに怒らないのも、怒りすぎるのと同じように偏りだと考えました。大切なのは、怒りを感じないことではなく、何に対して、どの程度、どう表すかです。怒りが強く続く場合は、疲れがたまっているサインのこともあります。",
  },
  {
    q: "自分にとっての「ちょうどいい関わり方」がわかりません。",
    a: "最初からわかる人はいません。アリストテレスも、徳は行為を繰り返す中で身につくものだと述べています。関わりすぎたと感じた場面、引きすぎたと感じた場面をふり返り、少しずつ調整していくことで、自分なりの「ちょうどよさ」が見えてきます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerAristotleMean() {
  return (
    <ArticleLayout
      title="思いやりにも「ちょうどいい量」がある｜アリストテレス『ニコマコス倫理学』の中庸から読む、与えすぎてしまう支援職へ【公認心理師】"
      description="アリストテレスは、恐れや怒り、憐れみには多すぎも少なすぎもあり、しかるべき時に、しかるべき相手に、しかるべき仕方で感じることが徳だと説きました。思いやりを注ぎすぎて消耗する支援職に向けて、「中庸」の考え方と、自分にとっての適量の見つけ方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-aristotle-mean"
      date="2026-10-26"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ アリストテレス
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
        利用者さんのために、できることは全部したい。
        頼まれていないことまで引き受けて、気づけば自分の時間も気力も残っていない。
        かといって、少し引いてみると「冷たくなったのでは」と自分を責めてしまう——。
      </p>
      <p>
        思いやりは、多ければ多いほどいいのだろうか。
        この問いに、2300年以上前に答えを出そうとした哲学者がいます。
        <strong>アリストテレス</strong>です。
      </p>

      <h2>アリストテレスとはどんな人か</h2>
      <p>
        アリストテレス(紀元前384–322)は、古代ギリシャの哲学者です。
        17歳でアテネに出てプラトンの学園に学び、のちに若き日のアレクサンドロス大王の家庭教師も務めました。
        自分の学園「リュケイオン」を開き、論理学、生物学、政治学、詩学など、あらゆる分野の学問の土台を築いた人物です。
      </p>
      <p>
        人がよく生きるとはどういうことかを論じたのが、<strong>『ニコマコス倫理学』</strong>です。
        その中心にあるのが、「中庸(メソテース)」という考え方です。
      </p>

      <h2>「しかるべき時に、しかるべき仕方で感じる」</h2>
      <p>
        アリストテレスは、感情そのものを良い・悪いで分けませんでした。
        問題は、その量とタイミングだと考えたのです(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          恐れること、大胆になること、欲すること、怒ること、憐れむこと——
          総じて快や苦を感じることには、多すぎることも少なすぎることもあり、そのどちらもよくない。
          しかるべき時に、しかるべき事柄について、しかるべき人々に対して、しかるべき目的のために、
          しかるべき仕方で感じること。それが中間であり、最善であり、徳にふさわしいことである。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          アリストテレス『ニコマコス倫理学』第2巻第6章より(ギリシャ語原文から筆者訳)
        </p>
      </div>
      <p>
        ここには「憐れむこと」も含まれています。
        相手を思いやる気持ちでさえ、多すぎれば偏りになる。
        アリストテレスにとって、よい人とは感情を消した人ではなく、
        <strong>感情の量とタイミングを、その場にふさわしく選べる人</strong>でした。
      </p>

      <h2>「ちょうどいい量」は、人によって違う</h2>
      <p>
        アリストテレスは、中間は単純な真ん中ではないとも述べています。
        有名なレスラーのミロンにとっての適量の食事は、運動を始めたばかりの人には多すぎる。
        <strong>ちょうどよさは、その人にとってのちょうどよさ</strong>だというのです。
      </p>
      <p>
        支援の関わり方も同じです。
        同僚がこなしている関わりの量が、今のあなたにとっても適量とは限りません。
        体力、経験、家庭の状況、その時期の疲れ具合によって、ちょうどいい量は変わります。
      </p>

      <h2>支援職に置き換えると——思いやりの「多すぎ」と「少なすぎ」</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 与えすぎて、自分が空になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頼まれていないことまで先回りし、勤務時間外の連絡にも応じる。
          思いやりが「多すぎ」に傾くと、相手のためのつもりが、自分を削り続けることになります。
          (<Link to="/articles/helper-empathy-overload" className={linkCls}>共感しすぎて疲れる理由</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 疲れきって、何も感じなくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          与えすぎが続いた先で、今度は相手に何も感じなくなる。
          これは「少なすぎ」への揺り戻しです。どちらの端も、もともとの思いやりの深さとは関係なく起こります。
          (<Link to="/articles/compassion-fatigue-complete" className={linkCls}>共感疲労とは</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 怒るべきことに、怒れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          理不尽な扱いを受けても、「支援者なのだから」と怒りを飲み込む。
          アリストテレスは、怒るべきことに怒らないのも、怒りすぎるのと同じ偏りだと考えました。
        </p>
      </div>

      <h2>自分の資源を手入れするのは、人を助け続けるため</h2>
      <p>
        アリストテレスは、怒りについてもこう書いています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          しかるべき事柄について、しかるべき人々に対して、
          さらにしかるべき仕方で、しかるべき時に、しかるべき間だけ怒る人は、称賛される。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          アリストテレス『ニコマコス倫理学』第4巻第5章より(ギリシャ語原文から筆者訳)
        </p>
      </div>
      <p>
        また、人に気前よく与える徳についての章では、気前のよい人は自分の財産をおろそかにしない、と述べています。
        それによって、人を助け続けられるようにするためだ、と。
      </p>
      <p>
        支援職に置き換えれば、<strong>自分の体力や時間、気持ちの余裕を手入れすることは、わがままではなく、支援を続けるための条件</strong>です。
        すべてを差し出して空になってしまえば、もう誰も助けられなくなります。
        (<Link to="/articles/helper-stop-self-sacrifice" className={linkCls}>支援職の自己犠牲をやめたいと感じたとき</Link>も参考になります)
      </p>

      <LineCtaCompassion />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「ちょうどよさ」を決めるのは、個人だけではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足の職場では、一人ひとりが「適量」を守ろうとしても、業務量そのものが適量を超えていることがあります。
          関わりの量の調整は、個人の心がけだけでなく、職場全体で考える必要があります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">中庸は「ほどほどに妥協すること」ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          中庸を「いつも控えめに」と読むと、必要な場面で十分に関わることまでためらってしまいます。
          危機的な場面では深く関わることが「しかるべき量」になることもあります。大切なのは、場面ごとに見極めることです。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「今日は与えすぎた／引きすぎた」を一言で記録する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一日の終わりに、関わりが多すぎた場面と少なすぎた場面を一つずつ思い出します。
          責めるためではなく、自分の偏りの傾向を知るための記録です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 引き受ける前に「しかるべき」を3つ確かめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頼まれごとを受ける前に、「今、自分がすることか(時)」「自分がすべき相手か(人)」「このやり方でいいか(仕方)」を確かめます。
          一つでも引っかかれば、保留にしてかまいません。
          (<Link to="/articles/helper-boundary-how-to" className={linkCls}>支援職のバウンダリーの引き方</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分の「資源」を一つ手入れする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          睡眠、食事、一人の時間など、支援を続けるための自分の資源を一つ選び、今週はそれを優先します。
          人を助け続けるための準備だと考えてください。
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
          <li>・<Link to="/articles/helper-empathy-overload" className={linkCls}>共感しすぎて疲れる理由</Link></li>
          <li>・<Link to="/articles/helper-stop-self-sacrifice" className={linkCls}>支援職の自己犠牲をやめたいと感じたとき</Link></li>
          <li>・<Link to="/articles/helper-irritated-at-client" className={linkCls}>利用者にイライラしてしまう</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-zhuangzi-useless" className={linkCls}>役に立つ木から、切られていく(荘子から読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">与えすぎて、空になりかけている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          あなたにとっての「ちょうどいい量」を一緒に
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どこで与えすぎ、どこで引きすぎているのか。関わり方の偏りを、責めずに整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-aristotle-mean"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、著作権の保護期間が満了しているギリシャ語原典『ニコマコス倫理学』から筆者が翻訳したものです。ミロンの例と気前のよさの章(第4巻第1章)は筆者による要約です。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

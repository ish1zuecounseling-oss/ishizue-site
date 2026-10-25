import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "エピクテトスの「自分次第のもの」とは何ですか?",
    a: "古代ローマのストア派の哲学者エピクテトスが『提要(エンケイリディオン)』の冒頭で示した区別です。判断、意欲、欲求、嫌悪といった自分の心の働きは「自分次第のもの」、体、財産、評判、地位など自分の外にあるものは「自分次第でないもの」とされます。前者に力を注ぎ、後者に執着しないことが心の平静につながると説きました。",
  },
  {
    q: "エピクテトスと認知行動療法には、どんな関係がありますか?",
    a: "『提要』の「人を不安にさせるのは物事そのものではなく、物事についての考え(判断)である」という言葉は、論理療法を創始したアルバート・エリスが自らの源流の一つとして挙げたことで知られています。出来事そのものではなく、その受け取り方が感情を左右するという考えは、認知行動療法の土台と重なります。",
  },
  {
    q: "アドラーの「課題の分離」とは同じ考え方ですか?",
    a: "よく似た発想ですが、同じものではありません。エピクテトスは「自分の心の働き」と「それ以外」を区別し、アドラー心理学の解説で知られる「課題の分離」は「自分の課題」と「他者の課題」を区別します。どちらも、自分が引き受けるべきでないものを手放すための考え方として、境界線の源流と言えます。",
  },
  {
    q: "「自分次第でないものは受け入れよ」は、理不尽な職場も我慢しろということですか?",
    a: "そうではありません。職場の環境は自分ひとりでは決められませんが、声を上げる、相談する、異動や転職を考えるといった「自分の行動」は自分次第のものです。エピクテトスの区別は、変えられないものに消耗しないための考え方であって、不当な扱いに黙って耐えるための理屈ではありません。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerEpictetusControl() {
  return (
    <ArticleLayout
      title="変えられないものに消耗しない｜エピクテトスの「自分次第のもの」から読む、支援職の境界線【公認心理師】"
      description="「物事のうち、あるものは自分次第であり、あるものは自分次第ではない」——奴隷出身の哲学者エピクテトスの言葉は、境界線(バウンダリー)の考え方の源流です。利用者の選択、回復、周りの評価まで背負ってしまう支援職が、自分の領分を取り戻す方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-epictetus-control"
      date="2026-10-17"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ エピクテトス
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
        利用者が、また同じ失敗をくり返した。
        何度も話し合ったのに、家族は方針に納得してくれない。
        上司は、こちらの苦労をわかってくれない。
        ——そのたびに、自分の力が足りないせいだと感じて、夜まで頭から離れない。
      </p>
      <p>
        支援職は、自分では決められないことまで、自分の責任として背負いがちです。
        この重さを下ろすための考え方を、2000年近く前に、ある哲学者が残しています。
        奴隷として生まれた哲学者、<strong>エピクテトス</strong>です。
      </p>

      <h2>エピクテトス——奴隷出身の哲学者</h2>
      <p>
        エピクテトス(50年ごろ–135年ごろ)は、古代ローマ時代のストア派の哲学者です。
        現在のトルコにあたる地域で奴隷として生まれ、足に障害がありました。
        のちに自由の身となり、哲学の学校を開いて多くの弟子を育てました。
      </p>
      <p>
        本人は著作を残していませんが、弟子のアッリアノスが講義を書きとめた『語録』と、
        その要点をまとめた『提要(エンケイリディオン)』が今に伝わっています。
        自分の身体も人生も思いどおりにならない境遇で、
        それでも心の自由をどう保つかを考え抜いた人です。
      </p>

      <h2>「あるものは自分次第であり、あるものは自分次第ではない」</h2>
      <p>
        『提要』は、次の一節から始まります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          物事のうち、あるものは私たち次第であり、あるものは私たち次第ではない。
          私たち次第であるのは、判断、意欲、欲求、嫌悪、つまり私たち自身の働きのすべてである。
          私たち次第でないのは、身体、財産、評判、地位、つまり私たち自身の働きでないもののすべてである。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          エピクテトス『提要』1(ギリシャ語原典をもとに筆者訳)
        </p>
      </div>
      <p>
        エピクテトスによれば、苦しみの多くは、<strong>自分次第でないものを、自分次第であるかのように扱う</strong>ことから生まれます。
        他人の考えや結果を思いどおりにしようとすれば、必ずどこかで行き詰まり、心は乱されます。
      </p>

      <h2>支援職に置き換えると——背負わなくていいもの</h2>
      <p>
        支援の仕事に、エピクテトスの区別を当てはめてみます。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自分次第のもの</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・どれだけ準備し、どれだけ丁寧に関わるか</li>
          <li>・何を伝え、何を伝えないかの判断</li>
          <li>・困ったときに相談するかどうか</li>
          <li>・自分の限界をどこに置くか</li>
        </ul>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自分次第でないもの</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・利用者が何を選び、どう生きるか</li>
          <li>・支援の結果、相手が回復するかどうか</li>
          <li>・家族や同僚、上司が自分をどう評価するか</li>
          <li>・職場の人員配置や制度そのもの</li>
        </ul>
      </div>
      <p>
        こうして並べると、私たちが夜まで悩んでいることの多くが、
        <strong>「自分次第でないもの」の側</strong>にあることに気づきます。
        利用者の選択も、回復も、周りの評価も、最終的には自分の手の外にあります。
      </p>
      <p>
        これは、無責任になれということではありません。
        自分次第のもの、つまり<strong>自分の関わり方には全力を注ぎ、結果は相手と状況に委ねる</strong>ということです。
        これが、支援における境界線(バウンダリー)の考え方そのものです。
        (<Link to="/articles/boundary-what" className={linkCls}>境界線とは</Link>で基本の構造を解説しています)
      </p>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">自分次第でないものまで背負っていないか、境界線の状態を確かめられます。</p>
        <Link to="/articles/boundary-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ 境界線チェック15項目(無料セルフ診断)</Link>
      </div>

      <h2>「人を乱すのは、物事ではなく、物事についての考えである」</h2>
      <p>
        『提要』には、もう一つよく知られた言葉があります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          人を乱すのは、物事そのものではなく、物事についての考えである。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          エピクテトス『提要』5(ギリシャ語原典をもとに筆者訳)
        </p>
      </div>
      <p>
        利用者が同じ失敗をくり返したこと自体ではなく、
        「自分の支援が悪かったからだ」という<strong>考え</strong>が、私たちを苦しめています。
        この言葉は、論理療法の創始者アルバート・エリスが自らの源流の一つとして挙げたことでも知られ、
        出来事の受け取り方に目を向ける認知行動療法の考え方と重なります。
      </p>

      <LineCtaFatigue />

      <h2>よくある誤解と、この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誤解:「自分次第でないものは、どうでもいい」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          エピクテトスは、他人や結果を気にかけるなとは言っていません。
          気にかけながらも、<strong>それを自分の心の平静の条件にしない</strong>、ということです。
          利用者の回復を願うことと、回復しないことで自分を責め続けることは、別のことです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:白か黒かでは分けられないものもある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          現代のストア哲学の研究者の中には、「完全に自分次第のもの」と「まったく自分次第でないもの」の間に、
          <strong>「影響はできるが、決められはしないもの」</strong>があると指摘する人もいます。
          職場の環境や相手との関係はここに入ります。
          声を上げる、相談するといった働きかけは自分次第ですが、その結果は委ねるしかありません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:理不尽を受け入れる理屈にしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「変えられないものは受け入れよ」は、不当な扱いや過重な業務に黙って耐えるための言葉ではありません。
          異動を願い出る、記録を残す、外部に相談する——<strong>自分の行動として選べることは、まだ残っています</strong>。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 悩みを2つの列に分けて書く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          今頭から離れないことを書き出し、「自分次第」「自分次第でない」の2列に振り分けます。
          迷うものは「影響はできる」の3列目に置いても構いません。
          紙の上で分けるだけで、背負っている重さが目に見えるようになります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「自分次第」の列にだけ、次の一手を書く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「次の面談では、ここを確認する」「明日、主任に相談する」など、自分の行動だけを書きます。
          自分次第でない列には、何も書かなくて大丈夫です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 結果ではなく、関わり方で一日を振り返る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今日は利用者がよくならなかった」ではなく、「今日は丁寧に話を聞けた」と、自分次第の部分で一日を締めくくります。
          (<Link to="/articles/helper-helplessness" className={linkCls}>「何とかしてあげたいのにできない」無力感</Link>もあわせてどうぞ)
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
          <li>・<Link to="/articles/boundary-check" className={linkCls}>境界線チェック15項目</Link></li>
          <li>・<Link to="/articles/boundary-what" className={linkCls}>境界線とは</Link></li>
          <li>・<Link to="/articles/helper-boundary-how-to" className={linkCls}>支援職のバウンダリーの引き方</Link></li>
          <li>・<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群(救世主症候群)とは</Link></li>
          <li>・<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>人類を愛するほど、隣の人を愛せない(ドストエフスキーから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">背負わなくていいものまで、背負ってきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自分の領分を、一緒に整理する時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どこまでが自分の責任で、どこからが手放していいものか。一人では見えにくい線を、一緒に引き直していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-epictetus-control"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインのギリシャ語原典(Encheiridion)をもとに筆者が翻訳したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

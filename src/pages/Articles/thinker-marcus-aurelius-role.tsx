import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "マルクス・アウレリウスの『自省録』とは、どんな本ですか?",
    a: "2世紀のローマ皇帝マルクス・アウレリウスが、ギリシャ語で書き残した個人的な手記です。人に読ませるためではなく、自分自身に言い聞かせるために書かれたもので、原題は「自分自身へ」という意味です。戦争や疫病に追われる日々の中で、怒りや疲れとどう向き合うかが繰り返し書かれています。",
  },
  {
    q: "ストア哲学とは何ですか?",
    a: "古代ギリシャで生まれ、ローマで広まった哲学の流れです。自分の力で変えられることと変えられないことを区別し、変えられることに力を注ぐことを重んじました。マルクス・アウレリウスは、奴隷出身の哲学者エピクテトスの教えから大きな影響を受けています。",
  },
  {
    q: "仕事の役割が抜けず、家でも「支援者」のままです。",
    a: "対人援助の仕事では、相手の様子をうかがい、先回りして動く習慣が身につきやすく、それが家庭や友人関係にまで持ち込まれることがあります。役割を脱ぐための合図を決める、仕事と関係のない自分の時間や関係を持つ、といった工夫が役立ちます。それでも切り替えられない状態が続くときは、疲れがたまっているサインのこともあります。",
  },
  {
    q: "理不尽な相手にも「相手は知らないだけ」と我慢すべきですか?",
    a: "いいえ。マルクス・アウレリウスの言葉は、相手への怒りに振り回されないための心構えであって、暴言やハラスメントを我慢する理由にはなりません。理不尽な言動が続くときは、記録を残し、上司や相談窓口に共有するなど、職場として対応してもらうことが大切です。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerMarcusAureliusRole() {
  return (
    <ArticleLayout
      title="「皇帝」の色に染まるな｜マルクス・アウレリウス『自省録』から読む、役割に飲み込まれそうな支援職・管理職へ【公認心理師】"
      description="ローマ皇帝マルクス・アウレリウスは、自分に宛てた手記『自省録』に「皇帝になりきってしまわぬよう、その色に染まらぬよう気をつけよ」と書きました。支援者や管理職という役割が抜けなくなり、弱音を吐けなくなっている支援職に向けて、役割と自分の間に余白をつくる方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-marcus-aurelius-role"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ マルクス・アウレリウス
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
        休みの日に家族と出かけても、つい周りの人の様子を観察してしまう。
        友人の愚痴を聞いていると、いつの間にか「面談」のような聞き方になっている。
        職場ではリーダーとして弱音を吐けず、家に帰っても、気持ちの切り替え方がわからない——。
      </p>
      <p>
        役割が、自分そのものになってしまう。
        そんな状態に、約1900年前に自分で気づき、手記に書きとめていた人がいます。
        ローマ皇帝<strong>マルクス・アウレリウス</strong>です。
      </p>

      <h2>マルクス・アウレリウスとはどんな人か</h2>
      <p>
        マルクス・アウレリウス(121–180)は、161年から180年までローマ帝国を治めた皇帝です。
        「五賢帝」の最後の一人に数えられ、ストア哲学を学んだ「哲人皇帝」として知られています。
      </p>
      <p>
        ただ、その在位は穏やかなものではありませんでした。
        帝国では疫病が広がり、北の国境では異民族との戦争が続きました。
        晩年の多くを戦地の陣営で過ごし、最後は遠征の途中で亡くなっています。
      </p>
      <p>
        そんな日々の中で、彼が自分に向けて書き続けたギリシャ語の手記が<strong>『自省録』</strong>です。
        原題は「自分自身へ」という意味で、人に見せるための本ではありませんでした。
        怒り、疲れ、人づきあいの難しさに向き合う、一人の人間の独り言が残されています。
      </p>

      <h2>「皇帝になりきってしまうな」</h2>
      <p>
        『自省録』の第6巻に、こんな一節があります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          皇帝になりきってしまわぬよう、その色に染まらぬよう、気をつけよ。
          それは実際に起こることなのだから。
          (中略)素朴で、善良で、飾らない自分を保て。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          マルクス・アウレリウス『自省録』第6巻30節より(ギリシャ語原文から筆者訳)
        </p>
      </div>
      <p>
        ローマで最も大きな権力を持つ立場にいながら、彼は、その役割に自分が飲み込まれることを恐れていました。
        「皇帝」という色に染まりきってしまえば、もともとの自分が見えなくなる。
        だからこそ、手記の中で何度も、役割の下にいる自分に呼びかけたのです。
      </p>

      <h2>支援職に置き換えると——「支援者」の色に染まる</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 仕事の目線が、生活の中まで入り込む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手の表情を読む、先回りして動く、困っている人を放っておけない。
          仕事で身につけた目線が、家族や友人との関係にまで持ち込まれ、どこにいても休めなくなります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 立場があるほど、弱音を吐けない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          リーダー、サービス管理責任者、主任。
          「支える側」の立場が重くなるほど、自分が支えられる場所はなくなっていきます。
          (<Link to="/articles/helper-manager-fatigue" className={linkCls}>支援職の管理職がしんどい理由</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 役割以外の自分が、わからなくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事の自分が大きくなりすぎると、休日に何をしたいのか、何が好きだったのかが思い出せなくなる。
          その状態では、仕事でつまずいたとき、自分全体が崩れてしまいやすくなります。
          (<Link to="/articles/self-complexity" className={linkCls}>自己複雑性とは何か</Link>で詳しく扱っています)
        </p>
      </div>

      <h2>朝のうちに、心の準備をしておく</h2>
      <p>
        マルクス・アウレリウスは、人づきあいの難しさにも悩まされていました。
        第2巻の冒頭には、こう書かれています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          朝のうちに、自分に言っておけ。
          今日わたしは、おせっかいな人、恩知らずな人、横柄な人、ずるい人、ねたみ深い人、人づきあいの悪い人に出会うだろう。
          (中略)わたしたちは、協力し合うために生まれてきたのだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          マルクス・アウレリウス『自省録』第2巻1節より(ギリシャ語原文から筆者訳)
        </p>
      </div>
      <p>
        理不尽な人に出会うことは、あらかじめ予想しておける。
        予想していれば、出会ったときに不意を打たれて心を乱されることが少なくなる。
        そのうえで、人と協力し合うことをあきらめない。
        皇帝という立場にあっても、彼は人を見下すのではなく、同じ人間として向き合おうとしていました。
      </p>

      <h2>いつでも、自分の内に退くことができる</h2>
      <p>
        第4巻には、休むことについての、よく知られた一節があります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          人は、田舎や海辺や山に、引きこもる場所を求める。
          (中略)だが、望みさえすれば、いつでも自分自身の内に退くことができる。
          自分の魂の中ほど、静かで、煩いのない場所はないのだから。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          マルクス・アウレリウス『自省録』第4巻3節より(ギリシャ語原文から筆者訳)
        </p>
      </div>
      <p>
        遠くへ旅に出られないときでも、役割を一時的に脱いで、自分自身に戻る時間はつくれる。
        彼にとって『自省録』を書くことそのものが、その「退く場所」だったのかもしれません。
        誰にも見せない手記の中でだけ、彼は皇帝ではなく、一人の人間でいられたのです。
      </p>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「耐えよ」と読むと、働きすぎにつながる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          マルクス・アウレリウスは、戦地で亡くなるまで皇帝の務めを果たし続けました。
          ストア哲学を「どんな状況でも耐えるための教え」と読むと、限界を超えて働き続ける理由になってしまいます。
          この記事では、役割と自分の間に余白をつくるための言葉として読んでいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">理不尽を我慢する理由にはしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          理不尽な人を予想しておくことは、心を守る工夫です。
          けれど、暴言やハラスメントまで受け流す必要はありません。それは個人ではなく、職場として対応すべき問題です。
          (<Link to="/articles/helper-harassment-gray-zone" className={linkCls}>支援職のハラスメントのグレーゾーン</Link>も参考になります)
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 役割を脱ぐ合図を決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          名札を外す、制服を脱ぐ、職場の門を出る。
          そのときに「ここからは支援者ではない」と心の中で一言つぶやいて、役割を置いて帰ります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 朝、今日の「難しい場面」を一つ予想しておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          出勤前に、今日起こりそうな難しい場面を一つだけ思い浮かべ、どう受け止めるかを考えておきます。
          不意を打たれないだけで、消耗はかなり減ります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 誰にも見せない「自分宛てのメモ」を書く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          寝る前に3行だけ、誰にも見せないメモを書きます。
          役割としてではなく、一人の人間として今日どう感じたかを書くのがポイントです。
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
          <li>・<Link to="/articles/helper-manager-fatigue" className={linkCls}>支援職の管理職がしんどい理由</Link></li>
          <li>・<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link></li>
          <li>・<Link to="/articles/self-complexity" className={linkCls}>自己複雑性とは何か</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-winnicott-false-self" className={linkCls}>本当の自分と偽りの自分(ウィニコットから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">役割を下ろせる場所がない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          支援者でも、管理職でもない時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          ここでは、誰かを支える役割を下ろして話せます。役割と自分の境目を、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-marcus-aurelius-role"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、著作権の保護期間が満了しているギリシャ語原典『自省録』から筆者が翻訳したもので、一部を省略しています。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

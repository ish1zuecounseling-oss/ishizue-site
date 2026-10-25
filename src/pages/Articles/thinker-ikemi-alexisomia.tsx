import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "池見酉次郎とは、どんな人ですか?",
    a: "日本の心身医学の基礎を築いた医師です(1915–1999)。九州大学に日本で初めての心療内科を開設し、「心療内科」という診療科の名前を広めた人物として知られています。心と体を切り離さずに診る「全人的医療」を提唱し、「日本の心身医学の父」と呼ばれています。",
  },
  {
    q: "「失体感症」とは何ですか?",
    a: "池見らが提唱した概念で、自分の体の感覚(疲れ、空腹、緊張、痛みなど)に気づきにくい状態を指します。感情に気づき言葉にすることが難しい「失感情症(アレキシサイミア)」とあわせて、心身症になりやすい人の特徴として論じられました。医学的な診断名ではなく、体の声に気づきにくい傾向を説明するための概念です。",
  },
  {
    q: "失体感症と失感情症(アレキシサイミア)はどう違いますか?",
    a: "失感情症は、自分の感情に気づいたり言葉にしたりすることが難しい状態で、アメリカの精神科医シフネオスが提唱しました。失体感症は、それに対して体の感覚への気づきにくさに注目した概念です。池見は、心身症の人では、感情だけでなく体の感覚への気づきも鈍っていることが多いと考えました。",
  },
  {
    q: "体の不調が続いていますが、ストレスのせいでしょうか?",
    a: "ストレスが関係していることもありますが、体の病気が隠れていることもあります。まずは内科などで体の検査を受け、必要に応じて心療内科に相談してください。体の病気がないとわかったうえで、ストレスとの関係を見ていくのが、心身医学の基本的な考え方です。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerIkemiAlexisomia() {
  return (
    <ArticleLayout
      title="体の声が聞こえなくなるとき｜池見酉次郎の「失体感症」から読む、不調を後回しにする支援職【公認心理師】"
      description="日本の心身医学の父・池見酉次郎は、心身症になりやすい人は、感情だけでなく体の感覚にも気づきにくくなっていると考え、これを「失体感症」と呼びました。疲れや痛みに気づかないまま働き続ける支援職の心身の状態を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-ikemi-alexisomia"
      date="2026-10-18"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 池見酉次郎
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
        昼ごはんを食べたかどうか、思い出せない。
        肩が石のように固いのに、言われるまで気づかなかった。
        胃の痛みが続いているけれど、忙しくて「そのうち治る」と放っている——。
      </p>
      <p>
        人の体調にはすぐ気づくのに、自分の体の声は聞こえなくなっている。
        この状態に名前をつけた医師がいます。
        日本の心身医学の父、<strong>池見酉次郎</strong>です。
      </p>

      <h2>池見酉次郎と日本の心身医学</h2>
      <p>
        池見酉次郎(1915–1999)は、九州大学で活躍した医師です。
        体の病気を体だけでなく、心や生活、人間関係とのつながりの中で診る<strong>心身医学</strong>を日本に根づかせ、
        1960年代に九州大学に日本で初めての心療内科を開設しました。
        「心療内科」という診療科の名前が広く知られるようになったのも、池見の働きによるところが大きいとされます。
      </p>
      <p>
        池見は、病気だけを見るのではなく、<strong>その人全体を診る「全人的医療」</strong>を提唱しました。
        胃が痛む人の、胃だけでなく、働き方や気持ちの抱え方まで含めて理解しようとしたのです。
      </p>

      <h2>「失体感症」——体の感覚に気づきにくい状態</h2>
      <p>
        1970年代、アメリカの精神科医シフネオスは、心身症の患者には
        <strong>自分の感情に気づき、言葉にすることが難しい人</strong>が多いことに注目し、
        これを「アレキシサイミア(失感情症)」と名づけました。
      </p>
      <p>
        池見は、これをさらに一歩進めます。
        心身症になりやすい人は、感情だけでなく、<strong>体の感覚にも気づきにくくなっている</strong>のではないか。
        疲れ、空腹、緊張、痛み——本来なら体が発しているサインが、本人に届いていない。
        池見らはこの状態を<strong>「失体感症(アレキシソミア)」</strong>と呼びました。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">失体感症に見られやすいこと</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・疲れていても、限界まで疲れに気づかない</li>
          <li>・空腹や満腹の感覚がはっきりしない</li>
          <li>・肩こりや緊張を、人に言われて初めて自覚する</li>
          <li>・痛みや不調を「気のせい」「たいしたことない」と打ち消す</li>
          <li>・休むべきタイミングが、自分ではわからない</li>
        </ul>
      </div>
      <p>
        体の声が聞こえないまま無理を続けると、ある日、体のほうがはっきりした症状として訴えはじめます。
        胃腸の不調、頭痛、のどの詰まり、動悸——いわゆる<strong>心身症</strong>です。
        (<Link to="/articles/psychosomatic-what" className={linkCls}>心身症とは</Link>で基本の仕組みを解説しています)
      </p>

      <h2>支援職に置き換えると——人の体には敏感、自分の体には鈍感</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 注意がいつも「外」に向いている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は、利用者の顔色や小さな変化に注意を向け続ける仕事です。
          注意が外に向き続けるぶん、自分の体の内側に向ける注意が、どんどん少なくなっていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 体のサインを「打ち消す」習慣</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          忙しい現場では、疲れや痛みに気づいても「今はそれどころではない」と打ち消すことがくり返されます。
          打ち消すことが習慣になると、やがてサインそのものに気づかなくなっていきます。
          (<Link to="/articles/helper-self-neglect" className={linkCls}>支援職のセルフネグレクト</Link>で扱っている状態です)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 緊張が「普通」になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          常に気を張っている状態が続くと、緊張していることが当たり前になり、ゆるんだ状態がどんなものかわからなくなります。
          (<Link to="/articles/body-stays-tense" className={linkCls}>なぜ休んでも緊張が抜けないのか</Link>もあわせてどうぞ)
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">体が出しているサインを、20項目で確かめてみませんか。</p>
        <Link to="/articles/psychosomatic-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ ストレスによる体の症状チェック20項目</Link>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">体の症状を、すべて「心の問題」にしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心身医学は、心と体のつながりを大切にしますが、体の病気を見落とさないことが大前提です。
          不調が続くときは、まず体の検査を受けてください。
          そのうえで、ストレスや働き方との関係を見ていくのが、池見が築いた心身医学の基本です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">失体感症は、診断名ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          失体感症は、体の声に気づきにくい傾向を説明するための概念で、病名として診断されるものではありません。
          「自分は失体感症だ」と決めつけるためではなく、自分の体との付き合い方を見直すきっかけとして使ってください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 1日3回、体に注意を向ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          朝・昼・帰宅後の3回、「肩」「お腹」「呼吸」に10秒ずつ注意を向けてみます。
          良い悪いを判断せず、<strong>今どんな感じがするか</strong>を確かめるだけで十分です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 体のサインを書き留める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頭痛、胃の不調、肩の張りなどに気づいたら、日付とその日の出来事を一行書き留めます。
          続けると、どんな日に体が訴えるのか、心と体のつながりが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「打ち消す」前に、一度だけ認める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          疲れや痛みに気づいたとき、「たいしたことない」と打ち消す前に、
          「今、疲れている」と一度だけ言葉にします。気づいたサインを、なかったことにしない練習です。
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
          <li>・<Link to="/articles/psychosomatic-what" className={linkCls}>心身症とは</Link></li>
          <li>・<Link to="/articles/psychosomatic-check" className={linkCls}>ストレスによる体の症状チェック20項目</Link></li>
          <li>・<Link to="/articles/helper-self-neglect" className={linkCls}>支援職のセルフネグレクト</Link></li>
          <li>・<Link to="/articles/body-stays-tense" className={linkCls}>なぜ休んでも緊張が抜けないのか</Link></li>
          <li>・<Link to="/articles/thinker-nishida-pure-experience" className={linkCls}>考える前の、ありのままの経験(西田幾多郎から読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">自分の不調を、後回しにしてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          体の声を、一緒に聞き直す時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          体が出しているサインと、心の状態のつながりを、責めずに一緒に整理していきます。医療機関との併用も歓迎です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/thinker-ikemi-alexisomia"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は池見酉次郎らの心身医学の考え方を筆者がまとめたもので、著作からの直接の引用は行っていません。思想と理論を手がかりに支援職の心身の状態を解説するもので、医学的な診断や治療に代わるものではありません。体の不調が続く場合は、医療機関を受診してください。
      </div>
    </ArticleLayout>
  )
}

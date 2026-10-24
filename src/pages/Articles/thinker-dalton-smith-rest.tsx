import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "ソンドラ・ダルトン＝スミスとは、どんな人ですか?",
    a: "アメリカの内科医で、2017年の著書『Sacred Rest』で、休息を7つの種類に分けて考える枠組みを提唱しました。医師として多くの患者を診る中で、よく眠っているのに疲れが取れない人が多いことに気づき、睡眠以外の休息に目を向けるようになったと語っています。",
  },
  {
    q: "7つの休息とは何ですか?",
    a: "身体的な休息、精神的な休息、感覚的な休息、創造的な休息、感情的な休息、社会的な休息、スピリチュアルな休息の7つです。それぞれの内容と支援職にとっての意味は、「支援職が知っておきたい休息に必要な要素とは」の記事で詳しく解説しています。",
  },
  {
    q: "「休息の赤字」とは、どういう意味ですか?",
    a: "この記事で使っている言葉で、ダルトン＝スミスの考え方を表したものです。必要な種類の休息が足りないまま消耗が続いている状態のことで、どれだけ眠っても、足りていない種類の休息を補わない限り、疲れは取れないという考え方です。",
  },
  {
    q: "7つの休息は、科学的に証明されているのですか?",
    a: "7つの休息は、医師としての臨床経験から生まれた考え方の枠組みで、大規模な研究によって検証されたものではありません。ただ、自分の疲れがどこから来ているのかを点検する手がかりとして、多くの人に役立てられています。疲れが長く続く場合は、体の病気が隠れていないかも医療機関で確認してください。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerDaltonSmithRest() {
  return (
    <ArticleLayout
      title="寝ても疲れが取れないのは、休息の「種類」が足りないから｜ダルトン＝スミスの「7つの休息」から読む、支援職の休息の赤字【公認心理師】"
      description="内科医ソンドラ・ダルトン＝スミスは、睡眠をとっても疲れが取れないのは、必要な種類の休息が足りていないからだと考え、休息を7つに分けて捉えました。眠っても回復しない支援職が、自分に足りない休息を見つけるための考え方を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-dalton-smith-rest"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ソンドラ・ダルトン＝スミス
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
        休日に10時間眠った。それなのに、月曜の朝も体が重い。
        有給休暇をとって家でゆっくりしたのに、心はまったく休まった気がしない。
        「こんなに休んでいるのに、なぜ疲れが取れないのか」——。
      </p>
      <p>
        この疑問に、医師の立場から一つの答えを示した人がいます。
        アメリカの内科医、<strong>ソンドラ・ダルトン＝スミス</strong>です。
      </p>

      <h2>ダルトン＝スミスと『Sacred Rest』</h2>
      <p>
        ダルトン＝スミスは、アメリカの内科医です。
        多くの患者を診る中で、<strong>十分に眠っているのに疲れが取れない</strong>と訴える人が多いことに気づきました。
        彼女自身も、仕事と家庭の両立の中で、眠っても回復しない疲れを経験していたといいます。
      </p>
      <p>
        そこから彼女は、休息は睡眠だけではないと考え、
        2017年の著書<strong>『Sacred Rest』</strong>で、休息を7つの種類に分けて捉える枠組みを示しました。
      </p>

      <h2>休息は、睡眠だけではない</h2>
      <p>
        ダルトン＝スミスの考えの中心にあるのは、
        <strong>疲れにはいろいろな種類があり、それぞれに合った休息が必要だ</strong>という視点です。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">7つの休息(筆者による要約)</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>身体的な休息</strong>:睡眠、体をゆるめるストレッチなど</li>
          <li>・<strong>精神的な休息</strong>:考え続ける頭を止める時間</li>
          <li>・<strong>感覚的な休息</strong>:画面、音、光などの刺激から離れること</li>
          <li>・<strong>創造的な休息</strong>:自然や芸術に触れて、心が動くこと</li>
          <li>・<strong>感情的な休息</strong>:本音を出せる、取りつくろわなくていい時間</li>
          <li>・<strong>社会的な休息</strong>:消耗する関係から離れ、元気をくれる人と過ごすこと</li>
          <li>・<strong>スピリチュアルな休息</strong>:自分より大きなものとのつながりや、意味を感じること</li>
        </ul>
      </div>
      <p>
        どれだけ眠っても、たとえば感情的な休息が足りていなければ、疲れは残り続けます。
        この記事では、必要な種類の休息が足りないまま消耗が続いている状態を、<strong>「休息の赤字」</strong>と呼んでみます。
        それぞれの休息を支援職がどうとればよいかは、
        <Link to="/articles/helper-rest-types" className={linkCls}>支援職が知っておきたい「休息に必要な要素」とは</Link>で詳しく解説しています。
      </p>

      <h2>支援職に置き換えると——足りないのは、睡眠以外の休息</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情的な休息の赤字</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は一日中、穏やかで温かい自分を演じています。
          本音を出せる場所がないと、どれだけ眠っても、感情の疲れは回復しません。
          (<Link to="/articles/thinker-hochschild-feeling-rules" className={linkCls}>ホックシールドの「感情規則」の回</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 社会的な休息の赤字</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事でも家でも、誰かのために人と関わり続けている。
          与えるだけでなく、元気をもらえる関係が足りていないと、人と会うこと自体が疲れになっていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 精神的な休息の赤字</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休日も仕事のことが頭から離れない。体は横になっていても、頭は働き続けています。
          (<Link to="/articles/thinker-russell-fatigue" className={linkCls}>ラッセルの「心配による疲れ」の回</Link>も参考になります)
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">研究で検証された分類ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          7つの休息は、医師としての臨床経験から生まれた考え方の枠組みで、大規模な研究によって検証されたものではありません。
          正解を示すものではなく、<strong>自分の疲れを点検するための手がかり</strong>として使ってください。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">疲れが続くときは、体の確認も</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休息の種類を工夫しても疲れが取れない場合は、体の病気や、うつ状態などが隠れていることもあります。
          医療機関での確認も忘れないでください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 7つの中で、一番足りないものを選ぶ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          7つの休息を眺めて、「これが一番足りていない」と感じるものを一つだけ選びます。
          全部を一度に補おうとせず、まず一つに絞ります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② その休息を、15分だけとる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情的な休息なら、本音を話せる人に電話する。感覚的な休息なら、スマホを置いて静かな場所で過ごす。
          選んだ休息を、今週15分だけ予定に入れます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 休んだあとの変化を確かめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          その休息をとったあと、疲れ方がどう変わったかを確かめます。
          変化を感じられたら、それが今のあなたに必要な休息です。
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
          <li>・<Link to="/articles/helper-rest-types" className={linkCls}>支援職が知っておきたい「休息に必要な要素」とは(7つの休息の詳しい解説)</Link></li>
          <li>・<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない</Link></li>
          <li>・<Link to="/articles/thinker-holmes-time" className={linkCls}>いつも時間が足りない支援職へ(キャシー・ホームズから読む)</Link></li>
          <li>・<Link to="/articles/thinker-bachelard-house" className={linkCls}>家は、夢想をかくまう(バシュラールから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">休んでも疲れが取れない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          足りない休息を、一緒に見つける時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何に疲れていて、どんな休息が足りていないのか。本音を話せる場所として使ってください。それ自体が、感情的な休息になります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-dalton-smith-rest"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はダルトン＝スミスの著作の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。「休息の赤字」は本記事での表現です。本記事は医師の提唱した枠組みを手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

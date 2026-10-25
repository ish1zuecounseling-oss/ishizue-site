import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ホックシールドとは、どんな人ですか?",
    a: "アメリカの社会学者アーリー・ラッセル・ホックシールド(1940年生まれ)です。1983年の著書『管理される心(The Managed Heart)』で「感情労働」という概念を提唱し、感情社会学という分野を切り開きました。共働き家庭の家事・育児の負担を描いた『セカンド・シフト』でも知られています。",
  },
  {
    q: "「感情規則」とは何ですか?",
    a: "ある場面で「どんな感情を、どのくらい感じるべきか」を定める、社会の暗黙のルールのことです。たとえば「お葬式では悲しむべき」「結婚式では喜ぶべき」といったものです。ホックシールドは、仕事の場では、この感情規則が会社や職業によって定められ、働く人に求められていることを明らかにしました。",
  },
  {
    q: "感情労働と、このサイトの感情労働の記事は何が違いますか?",
    a: "感情労働の意味や具体例、表層演技と深層演技の違いなど、基本の整理は「感情労働とは」の記事で扱っています。この記事では、感情労働という言葉を生んだホックシールド自身の問題意識、つまり「感情規則」と「その感情は誰のものか」という問いに焦点を当てています。",
  },
  {
    q: "感情を抑えて働くのがつらいとき、どうすればいいですか?",
    a: "まず、仕事で求められている感情と、自分が実際に感じている感情を分けて認識することが大切です。そのうえで、仕事の外に、求められた感情ではなく自分の本当の感情を出せる場所を持ってください。感情が動かない、何も感じないといった状態が続く場合は、燃え尽きや感情の麻痺が進んでいるサインのことがあります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerHochschildFeelingRules() {
  return (
    <ArticleLayout
      title="「笑顔も仕事のうち」が心を削る理由｜ホックシールド『管理される心』の「感情規則」から読む、支援職の感情労働【公認心理師】"
      description="「感情労働」という言葉を生んだ社会学者ホックシールドは、仕事が人に「どんな感情を感じるべきか」まで求めていることを明らかにしました。感情規則に合わせ続けるうちに、自分の本当の気持ちがわからなくなる支援職の消耗を、公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-hochschild-feeling-rules"
      date="2026-10-20"
      tags={["compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ アーリー・ホックシールド
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
        理不尽なことを言われても、笑顔で「申し訳ありません」と頭を下げる。
        利用者の前では、どんなに疲れていても穏やかな声で話す。
        悲しんでいる家族の前では、悲しそうな顔をする——。
      </p>
      <p>
        支援の仕事は、体や頭だけでなく、<strong>感情</strong>を使う仕事です。
        そのことに初めて名前をつけたのが、アメリカの社会学者<strong>アーリー・ラッセル・ホックシールド</strong>です。
      </p>

      <h2>ホックシールドと『管理される心』</h2>
      <p>
        ホックシールド(1940年生まれ)は、カリフォルニア大学バークレー校で教えた社会学者です。
        1983年の著書『管理される心(The Managed Heart)』で、航空会社の客室乗務員などへの聞き取り調査をもとに、
        働く人が仕事の一部として自分の感情を管理している実態を描き出しました。
      </p>
      <p>
        彼女はこれを<strong>感情労働</strong>と名づけます。
        給料と引き換えに、仕事にふさわしい感情を表に出し、ときには心の中まで作り変えること。
        この言葉は、のちに看護や介護、教育など、ケアの仕事を理解するための基本的な概念になりました。
        (感情労働の意味や表層演技・深層演技の違いは、<Link to="/articles/emotional-labor-what-pillar" className={linkCls}>感情労働とは</Link>で整理しています)
      </p>

      <h2>「感情規則」——感じるべき感情が決められている</h2>
      <p>
        ホックシールドの考えの中心にあるのが、<strong>感情規則</strong>という考え方です。
        私たちはふだん、場面ごとに「どんな感情を、どのくらい感じるべきか」という暗黙のルールに従っています。
        お葬式では悲しむべきで、結婚式では喜ぶべきだ、というように。
      </p>
      <p>
        ホックシールドが明らかにしたのは、仕事の場では、
        この感情規則が<strong>会社や職業によって定められ、働く人に求められている</strong>ということでした。
        客室乗務員は、乗客に対して常に温かく、怒らず、楽しそうでいることを求められます。
        それは振る舞いだけでなく、感情そのものへの要求でした。
      </p>

      <h2>支援職に置き換えると——支援の現場の感情規則</h2>
      <p>
        支援の現場にも、言葉にされない感情規則がたくさんあります。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・利用者には、いつも温かく、穏やかであるべき</li>
          <li>・どんなに理不尽なことを言われても、怒ってはいけない</li>
          <li>・利用者を嫌いになってはいけない</li>
          <li>・つらい場面でも、動揺を見せてはいけない</li>
          <li>・家族の悲しみには、同じように心を寄せるべき</li>
        </ul>
      </div>
      <p>
        どれも、支援の質を支える大切な姿勢です。
        けれど、これらは規則として働くとき、<strong>自分が実際に感じている感情</strong>と食い違いはじめます。
        苛立っているのに穏やかに、疲れているのに温かく。
        その食い違いを埋め続けることが、感情労働の消耗です。
      </p>

      <h2>「その感情は、誰のものか」</h2>
      <p>
        ホックシールドが最も深く問題にしたのは、感情を管理し続けた先に起こることでした。
        仕事のために感情を作り変えることがくり返されると、
        人は<strong>自分の本当の感情がどれなのか、わからなくなっていく</strong>。
        仕事で浮かべている笑顔と、自分の喜びとの区別がつかなくなる。
      </p>
      <p>
        本来は自分のものだった感情が、仕事の道具として管理され、会社のものになっていく——。
        ホックシールドは、これを感情の「商品化」として描きました。
      </p>
      <p>
        支援職が、休みの日にも何も感じられない、自分が何を感じているのかわからないと感じるとき、
        それはこの過程の行き着いた姿かもしれません。
        (<Link to="/articles/feeling-nothing" className={linkCls}>何も感じない・感情が動かない原因</Link>もあわせてどうぞ)
      </p>

      <LineCtaFatigue />

      <h2>セカンド・シフト——家に帰っても続く感情労働</h2>
      <p>
        ホックシールドは、のちの著書『セカンド・シフト』(1989年)で、
        共働き家庭で、仕事を終えたあとに家事や育児という<strong>「第二の勤務」</strong>が待っている現実を描きました。
      </p>
      <p>
        支援職にとって、これは他人事ではありません。
        職場で一日中感情を使ったあと、家に帰れば家族のケアが待っている。
        親の介護をしながら働く支援職も少なくありません。
        感情労働は、職場を出ても終わらないことがあるのです。
      </p>

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ケアの仕事は、商業サービスとは違う面もある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ホックシールドの研究は、航空会社などの商業サービスを主な対象にしていました。
          支援の仕事には、相手との関係そのものに意味があり、心から湧く思いやりもあります。
          すべての感情の調整を「搾取」と見る必要はありません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">感情の調整には、消耗しやすいものとそうでないものがある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          その後の研究では、本心と違う表情を表面だけ作る調整のほうが、燃え尽きと結びつきやすいとする報告があります。
          感情を使うことそのものより、<strong>本心とのずれが大きいまま続くこと</strong>が消耗の中心だと考えられます。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 職場の感情規則を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分が職場で「感じるべき」「見せるべき」と思っている感情を書き出します。
          言葉にすると、自分が従っている規則と、自分の本当の感情との距離が見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 帰り道に「本当はどう感じたか」を一つ確かめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事の帰りに、「今日、本当はどう感じていたか」を一つだけ思い出します。
          「あのとき、本当は腹が立っていた」と認めるだけで、感情を自分のもとに取り戻す練習になります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情規則のない場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          怒っても、泣いても、つまらなそうにしていてもいい場所と相手を持ちます。
          感情を規則から解放できる時間が、感情労働の回復には欠かせません。
          (<Link to="/articles/nurse-emotional-labor-hard" className={linkCls}>看護師の感情労働がしんどい理由</Link>も参考になります)
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
          <li>・<Link to="/articles/emotional-labor-what-pillar" className={linkCls}>感情労働とは(意味・具体例・表層演技と深層演技)</Link></li>
          <li>・<Link to="/articles/nurse-emotional-labor-hard" className={linkCls}>看護師の感情労働がしんどい理由</Link></li>
          <li>・<Link to="/articles/feeling-nothing" className={linkCls}>何も感じない・感情が動かない原因</Link></li>
          <li>・<Link to="/articles/thinker-horney-shoulds" className={linkCls}>「〜すべき」に追い詰められる理由(ホーナイから読む)</Link></li>
          <li>・<Link to="/articles/thinker-weil-attention" className={linkCls}>注意は、最も稀で純粋な寛大さ(ヴェイユから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">自分の気持ちが、わからなくなってきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          感じるべき感情ではなく、本当の感情を話せる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          ここには、守らなければならない感情規則はありません。怒りも疲れも、そのまま話してください。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/thinker-hochschild-feeling-rules"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はホックシールドの著作の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。邦訳に『管理される心——感情が商品になるとき』(世界思想社)があります。本記事は理論を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

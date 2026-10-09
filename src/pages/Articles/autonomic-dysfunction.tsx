import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自律神経失調症は正式な病名ですか?",
    a: "正式な病名ではありません。自律神経のバランスの乱れによって起こるさまざまな症状をまとめて呼ぶ言葉で、確立した診断基準はありません。体に異常が見つからず、明らかな精神疾患もない場合に、暫定的にこの呼び方が使われることがあります。国際的な分類では「身体表現性自律神経機能不全」がこれに近いとされています。正式な病名ではなくても、症状がつらいことに変わりはありません。",
  },
  {
    q: "自律神経失調症とうつ病はどう違いますか?",
    a: "だるさ・不眠・食欲の変化など、症状の一部が重なります。うつ病では、気分の落ち込みや、以前楽しめたことに興味が持てない状態が2週間以上続くことが中心になります。「自律神経失調症」と言われていても、実際にはうつ病や不安症が背景にあることもあるため、気分の落ち込みが続く場合は心療内科・精神科に相談してください。",
  },
  {
    q: "何科を受診すればいいですか?",
    a: "まずは内科で、似た症状を起こす体の病気(甲状腺の病気や貧血など)がないかを確認するのが安心です。体の病気がなく、ストレスとの関わりが疑われる場合は心療内科へ。気分の落ち込みや強い不安がある場合は、心療内科・精神科が相談先になります。",
  },
  {
    q: "自律神経失調症は治りますか?",
    a: "背景にあるストレスや生活リズムの乱れが整うと、症状が軽くなることは多くあります。ただし、自律神経は意志の力で切り替えられるものではないため、「早く治そう」と焦るほど緊張が続くこともあります。原因となっている働き方や環境を見直しながら、時間をかけて整えていくのが現実的です。",
  },
  {
    q: "仕事は続けたほうがいいですか?休んだほうがいいですか?",
    a: "症状の重さや職場の状況によって異なるため、一般論では決められません。仕事の負荷が症状の大きな原因になっている場合は、休養や業務の調整が必要になることもあります。自己判断で無理を続けず、主治医と相談して決めてください。",
  },
  {
    q: "カウンセリングは役立ちますか?",
    a: "体の治療や薬の判断は医師の領分です。そのうえで、症状の背景にある「気を張り続ける働き方」「自分を後回しにする習慣」「休めない思い込み」などの構造を整理することは、カウンセリングが役立つ部分です。医療とカウンセリングは並行して使えます。",
  },
]

export default function AutonomicDysfunction() {
  return (
    <ArticleLayout
      title="自律神経失調症とは｜ストレスで体がつらいとき、支援職がまず確かめたいこと【公認心理師】"
      description="だるさ、動悸、めまい、不眠——「自律神経失調症」と言われたけれど、正式な病名ではないと聞いて戸惑っていませんか。言葉の意味、うつ病や体の病気との見分け方と受診の順番、支援職の自律神経が乱れやすい理由と整える方向を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/autonomic-dysfunction"
      date="2026-10-09"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        正式な病名ではない、と言われても、体のつらさは本物です。
        名前より先に、確かめておきたいことがあります。
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
        だるさが抜けない。動悸やめまいがする。夜に眠れない。
        病院で「自律神経が乱れていますね」「自律神経失調症でしょう」と言われたけれど、
        はっきりした説明はなかった——。
      </p>
      <p>
        自律神経失調症は<strong>正式な病名ではありません</strong>が、症状は実際に体に起きています。
        大切なのは、<strong>まず似た症状を起こす病気がないかを確かめること</strong>、
        そのうえで症状の背景にあるストレスや働き方の側を手当てすることです。
        この記事では、言葉の意味、受診の順番、支援職の自律神経が乱れやすい理由と整える方向を整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 体の症状がある方は、まず医療機関を受診してください。この記事は心理的な側面からの解説であり、診断や治療に代わるものではありません。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・自律神経失調症という言葉の意味(なぜ「正式な病名ではない」のか)</li>
          <li>・名前より先に<strong>確かめたい3つのこと</strong>と受診の順番</li>
          <li>・支援職の自律神経が<strong>乱れやすい3つの理由</strong></li>
          <li>・心理面から整えていく方向</li>
        </ul>
      </nav>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな症状が続いていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・休んでもだるさや疲れが抜けない</li>
          <li>・動悸、息苦しさ、めまいがある</li>
          <li>・頭痛や肩こりが慢性的に続く</li>
          <li>・胃の不調、吐き気、下痢や便秘を繰り返す</li>
          <li>・寝つけない、夜中に目が覚める</li>
          <li>・ささいなことでイライラする、気持ちが落ち着かない</li>
        </ul>
      </div>

      <h2>自律神経失調症とは——症状をまとめて呼ぶ言葉</h2>
      <p>
        自律神経は、心臓や胃腸、体温、呼吸など、意識しなくても体を動かしている神経です。
        活動モードにする<strong>交感神経</strong>と、休息モードにする<strong>副交感神経</strong>が、
        状況に応じて切り替わることで体を保っています。
      </p>
      <p>
        自律神経失調症は、このバランスが崩れて起こる<strong>さまざまな症状をまとめて呼ぶ言葉</strong>です。
        確立した診断基準はなく、体の検査で異常が見つからず、明らかな精神疾患もない場合に、
        暫定的にこの呼び方が使われることがあります。国際的な分類では「身体表現性自律神経機能不全」がこれに近いとされています。
      </p>
      <p>
        つまり「自律神経失調症」は、原因を特定した病名というより、
        <strong>「今の不調の多くは自律神経の乱れから来ているようだ」という状態の呼び名</strong>です。
        だからこそ、名前で安心して終わりにせず、その奥を確かめることが大切になります。
      </p>

      <h2>名前より先に、確かめたい3つのこと</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 似た症状を起こす体の病気がないか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          動悸、だるさ、汗、気分の波などは、甲状腺の病気や貧血など、体の病気でも起こります。
          まずは内科で、体の病気がないかを確認しておくと安心です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② うつ病や不安症が隠れていないか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          だるさや不眠はうつ病でもよく表れ、動悸や息苦しさは不安症やパニック症でも起こります。
          気分の落ち込み、楽しめない感覚、強い不安が続いている場合は、心療内科・精神科に相談してください
          (<Link to="/articles/helper-depression-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職うつチェック</Link>で目安を確認できます)。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 体の側の変化(年齢・ホルモン)がないか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          更年期など、ホルモンの変化によって自律神経が乱れやすい時期もあります。
          思い当たる場合は、婦人科などその分野の診療科への相談も選択肢になります。
        </p>
      </div>

      <p className="text-sm text-stone-600">
        体の病気がなく、ストレスとの関わりが疑われる場合は、心療内科が相談先になります
        (<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何科に相談すればいいか</Link>)。
        ストレスが体に出る状態の全体像は
        <Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症とは</Link>
        で整理しています。
      </p>

      <LineCtaFatigue />

      <h2>支援職の自律神経が乱れやすい3つの理由</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 気を張り続ける現場で、交感神経が下がりきらない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          急な対応、予測できない言動、常に周囲を見ている必要がある現場では、体は「いつでも動ける」状態を保とうとします。
          勤務が終わっても活動モードが下がりきらず、休むための副交感神経に切り替わりにくくなります
          (<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link>)。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 夜勤・不規則な勤務で、体のリズムが崩れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自律神経は、睡眠や食事の時間といった一日のリズムと深く結びついています。
          夜勤やシフトで寝る時間・起きる時間が日によって変わると、切り替えのタイミングそのものが乱れやすくなります
          (<Link to="/articles/helper-night-shift-mental-health" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">夜勤・不規則勤務とメンタル</Link>)。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 体は休んでいても、頭が仕事から離れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          帰宅後も利用者のことや、あの対応でよかったのかを考え続けていると、体は休んでいても神経は休めません。
          そのうえ、自分の不調を後回しにする習慣があると、乱れが長引きます
          (<Link to="/articles/cannot-sleep-thinking-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事のことが頭から離れない</Link>
          ／<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link>)。
        </p>
      </div>

      <h2>心理面から整えていく方向</h2>
      <p>
        自律神経は、意志の力でオン・オフできるスイッチではありません。
        「早く整えなければ」と焦るほど、緊張が続くこともあります。
        目指すのは、無理に切り替えることではなく、<strong>体が自然に休息モードへ戻れる時間と環境を増やす</strong>ことです。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<strong>リズムの軸を一つ決める</strong>:勤務が不規則でも、「起きたら光を浴びる」など毎日続けられる習慣を一つ持つ</p>
        <p>・<strong>仕事から離れる区切りを作る</strong>:帰り道や着替えなど、「ここで仕事は終わり」という合図を決める</p>
        <p>・<strong>「何も起きない時間」を確保する</strong>:連絡が来ない、誰にも気を遣わない時間が、休息モードへの入口になる</p>
        <p>・<strong>不調を後回しにしない</strong>:受診や休息を、仕事の予定と同じように先に入れる</p>
        <p>・<strong>一人で抱えない</strong>:責められず、評価されずに話せる関係は、神経が緩みやすい環境のひとつ</p>
      </div>
      <p>
        自律神経の乱れは、それだけ長く気を張り、周りのために動き続けてきた体の反応でもあります。
        体を責めるのではなく、そこまで追い込んできた働き方や環境の側を、少しずつ見直していくことが回復の土台になります。
      </p>

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
        <p className="font-medium text-stone-700 mb-2">ストレスが体に出るしくみ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症とは——ストレスが体に出るしくみ</Link></li>
          <li>・<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link></li>
          <li>・<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link></li>
          <li>・<Link to="/articles/always-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">常に気が張っている</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">受診・チェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何科に相談すればいいか</Link></li>
          <li>・<Link to="/articles/helper-depression-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職うつチェック(15項目)</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          体の治療と並行して、気を張り続けてきた働き方の構造を整理することができます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/autonomic-dysfunction"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成した一般向けの解説です。医学的な診断・治療ではありません。体の症状がある場合は、まず医療機関を受診してください。
      </div>
    </ArticleLayout>
  )
}

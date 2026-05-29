import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "バーンアウトしたとき、まず何をすればいいですか?",
    a: "最初にすべきは「頑張り直すこと」でも「原因を即座に解決すること」でもありません。まず①これ以上消耗しないことを優先する(早く帰る・一つ断る等の小さな変化から)、②状態を言葉にして誰かに伝える、③睡眠障害や強い抑うつ感があれば医療機関に相談する、④回復のゴールを小さく設定する、が基本です。「元通りに戻る」を目標にすると圧倒されるので、「今日の小さな一歩」を目標にします。",
  },
  {
    q: "「休めばいい」と言われても、仕事を休めません",
    a: "人員不足・担当ケース・責任感から休めない状況は現実にあります。完全に休むことが難しくても、「今日は早く帰る」「一つの仕事を断る」という小さな変化から始められます。まず「これ以上消耗を増やさない」ことが、回復の前提です。並行して、産業医や上司への相談で業務調整ができないか検討してください。",
  },
  {
    q: "「回復しようとしているのに回復できない」のはなぜですか?",
    a: "バーンアウトが一定以上進行すると、通常の休息だけでは回復が追いつかないことがあります。また、認知機能・判断力の低下も症状の一つで、「何をすればいいかわからない」という混乱自体がバーンアウトのサインです。焦りはストレスホルモンを分泌させ神経系の緊張を維持するため、かえって回復を妨げます。回復は波があるのが自然です。",
  },
  {
    q: "また同じことを繰り返すのではないかと不安です",
    a: "再発予防は「回復の後半」に位置づけるのが現実的です。消耗している段階で「二度とバーンアウトしないように」と考えると、自己批判が深まり、かえって回復を妨げます。まずは目の前の消耗を止め、心身を安定させることが先。再発予防の取り組みは、ある程度回復が進んでから、消耗を生んだ構造を整理する形で行うのが効果的です。",
  },
];

export default function HelperBurnoutWhatToDo() {
  return (
    <ArticleLayout
      title="支援職のバーンアウト、どうしたらいい？｜「燃え尽きた」と感じたときの最初の一歩"
      description="バーンアウトしたとき、まず何をすればいいのか。段階的な回復の理解と、「どうしたらいい」という問いへの現実的な答えを整理します。"
      url="https://www.ishizue-counseling.jp/articles/helper-burnout-what-to-do"
      date="2026-03-29"
      audio="/audio/helper-burnout-what-to-do.mp3"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >

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
        支援職のバーンアウトに直面したとき、最初にすべきことは「頑張り直すこと」でも「原因を特定して
        即座に解決すること」でもありません。まず自分がバーンアウトの状態にあることを認め、
        消耗した心身を安定させることが最初の一歩です。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        この記事では「まず何をするか」に焦点を当てます。回復の全体像は<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link>、段階的なプロセスは<Link to="/articles/helper-burnout-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウトからの回復方法</Link>、バーンアウト全体の構造は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>にまとめています。
      </p>

      <p>
        現場でこんな声を聞くことがあります。
      </p>
      <div className="card space-y-2">
        <p>「燃え尽きた感じがするけど、どうすればいいのかわからなくて途方に暮れている」</p>
        <p>「バーンアウトだと思うけど、仕事は休めないし、どこに相談すればいいかもわからない」</p>
        <p>「回復したいのに、何をしても回復している気がしない」</p>
        <p>「もう一度やる気を取り戻せるのか、自信がない」</p>
        <p>「誰かに助けてほしいのに、助けを求めることすら疲れてしまった」</p>
      </div>

      <h2>バーンアウトとは何か：定義と背景</h2>
      <p>
        バーンアウト（Burnout）とは、長期にわたる過負荷によって心身のエネルギーが枯渇し、
        仕事への意欲・感情・達成感が失われていく状態のことです。心理学者マスラックの研究では、
        バーンアウトは以下の3つの中核症状として整理されています。
      </p>
      <ul className="space-y-2">
        <li>情緒的消耗感：感情的なエネルギーが枯渇した状態。「もう何も感じられない」「関わる気力がない」という感覚</li>
        <li>脱人格化：利用者や仕事に対して冷淡・無関心になる状態。作業的にこなしているという感覚</li>
        <li>個人的達成感の低下：「自分には何もできない」という無力感・自己効力感の喪失</li>
      </ul>
      <p>
        これらは「支援者として失格」の証拠ではなく、長期的な過負荷によって生じる心理的・生理的な反応です。
        WHO（世界保健機関）は2019年にバーンアウトを「職業上の現象」として位置づけており、
        個人の問題ではなく職業環境の問題として理解されています。
        なぜ起きるのかは<Link to="/articles/burnout-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の原因</Link>で詳しく解説しています。
      </p>

      <h2>現場で起こること：バーンアウトの「どうしたらいい」が生まれる場面</h2>
      <h3>■ 「回復しようとしているのに、回復できない」</h3>
      <p>
        休もうとしても休めない・休んでも回復しない・何をしても「元に戻った気がしない」という状態が続く。
        これはバーンアウトが一定以上進行した状態の特徴であり、通常の休息だけでは回復が追いつかないことを
        示しています。
      </p>
      <h3>■ 「何から手をつければいいかわからない」</h3>
      <p>
        バーンアウトの状態では、認知機能・判断力・問題解決能力が低下することがあります。「何をすればいいか
        わからない」という混乱は、バーンアウトの症状のひとつでもあります。
      </p>
      <h3>■ 「仕事は休めない」という現実との板挟み</h3>
      <p>
        人員不足・担当ケース・職場への責任感から、休むことができない状態が続く。「休めばいい」という
        一般的なアドバイスが、現実的な選択肢として感じられない状況があります。
      </p>
      <h3>■ 「また同じことを繰り返すのではないか」という不安</h3>
      <p>
        以前にも似たような消耗を経験し、一度回復したのにまたバーンアウトしてしまった。
        「回復しても、またここに戻ってくるのではないか」という不安が、回復への意欲を削ぐことがあります。
        繰り返す場合は<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link>も参照してください。
      </p>
      <h3>■ 「助けを求めることすら疲れた」</h3>
      <p>
        相談する気力もない・誰に話せばいいかわからない・話してもわかってもらえないかもしれないという感覚が
        重なり、孤立の中で「どうしたらいい」という問いを一人で抱えている状態があります。
      </p>

      <h2>心理的背景：バーンアウトからの回復を理解する</h2>
      <h3>■ バーンアウト回復の段階的な理解</h3>
      <p>
        バーンアウトからの回復は、段階的なプロセスをたどります。第1段階として消耗しきった状態から心身を
        安定させること、第2段階としてバーンアウトに至った経緯を自己批判なく理解すること、第3段階として
        「少し楽だった」という小さな体験を積み重ねること、第4段階として仕事への関わり方を以前とは違う形で
        作り直していくことが関係しています。
      </p>
      <h3>■ 焦りが回復を妨げる理由</h3>
      <p>
        「早く元に戻らなければ」という焦りは逆効果になることがあります。焦りそのものがストレスホルモンの
        分泌を促し、神経系の緊張を維持させます。回復は直線的ではなく、波のある経過をたどります。
        「良くなったと思ったら翌日また落ち込む」という経過は異常ではなく、回復の過程での自然な揺らぎです。
      </p>
      <h3>■ 神経系の回復という視点</h3>
      <p>
        バーンアウトは、心の問題だけでなく自律神経系の過負荷とも関連しています。神経系を安全モードに
        戻すためには意志の力だけでは難しく、身体への働きかけが重要です。ゆっくりとした呼吸・自然の中での
        散歩・安心できる場所での安静など、一見「大したことない」ように思える活動が、神経系の回復に
        重要な役割を果たします。
      </p>
      <h3>■ 「一人でどうにかしなければ」という信念の問い直し</h3>
      <p>
        他者を支援することを仕事としている人ほど、自分が支援を受けることへの抵抗が強くなりやすい傾向があります。
        スーパービジョン・カウンセリング・信頼できる人への相談など、自分が受け取る側になる体験が、
        孤立した消耗から抜け出す助けになります。
      </p>

      <h2>バーンアウトしたとき、具体的にどうしたらいいか</h2>
      <h3>① まず「これ以上消耗しない」を優先する</h3>
      <p>
        回復のための行動を始める前に、まず「現在の消耗をこれ以上増やさない」ことが最優先です。
        完全に休むことが難しい場合でも「今日は早く帰る」「一つの仕事を断る」という小さな変化から
        始めることができます。
      </p>
      <h3>② 状態を言葉にして誰かに伝える</h3>
      <p>
        信頼できる人に「今、かなり消耗している」と伝えることが重要です。言葉にすること自体が、
        孤立から「一人ではない」という感覚を取り戻す助けになります。
      </p>
      <h3>③ 医療的なサポートを検討する</h3>
      <p>
        睡眠障害・食欲の著しい変化・強い抑うつ感・希死念慮などがある場合は、かかりつけ医・心療内科・
        精神科への相談を優先することが重要です。バーンアウトとうつ病は重なることが多く、医療的なサポートが
        回復を大きく助けることがあります。どこに行くか迷う場合は<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link>を参照してください。
      </p>
      <h3>④ 「回復のゴール」を小さく設定する</h3>
      <p>
        「元通りに戻ること」を目標にすると、回復の遠さに圧倒されることがあります。「今日は少し早く寝る」
        「今日は一つだけ楽しいことをする」という小さな目標が、達成感の積み重ねを生み、回復の感覚を育てます。
      </p>
      <h3>⑤ 再発予防を「回復の後半」に位置づける</h3>
      <p>
        消耗している段階での「二度とバーンアウトしないようにしなければ」という焦りは、自己批判を深めることが
        多くあります。再発予防は、ある程度回復が進んでからのほうが現実的な取り組みができます。
      </p>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>段階的な回復の理解：一度に大きく変わるのではなく、安定→理解→小さな回復→再構築という段階をたどる</li>
        <li>焦りが回復を妨げる：「早く戻らなければ」という焦りがストレスとなり、神経系の回復を遅らせる</li>
        <li>神経系への働きかけ：意志だけでなく、身体を通じた神経系の安定化が回復の土台になる</li>
        <li>支援される体験を持つ：一人で解決しようとせず、支援を受ける体験が孤立した消耗から抜け出す助けになる</li>
        <li>小さなゴールの積み重ね：「元通りに戻ること」より「今日の小さな一歩」を目標にすることが現実的な回復につながる</li>
      </ul>
      <p>
        「どうしたらいい」という問いを持てたなら、それはすでに回復への大切な一歩です。
        その問いを一人で抱えず、まず誰かに「今、しんどい」と伝えることが、次の一歩になるかもしれません。
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

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「どうしたらいいかわからない」という状態こそ、外から整理することが助けになります。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「どうしたらいいかわからない」方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          こころの相談室いしずえでは、バーンアウト・共感疲労・感情労働の消耗でお悩みの支援職・対人援助職の方のご相談を承っています。「どうしたらいいかわからない」という状態でも、まずお話だけでもお気軽にどうぞ。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/helper-burnout-what-to-do"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

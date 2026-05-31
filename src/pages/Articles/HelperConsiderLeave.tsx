import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function HelperConsiderLeave() {
  return (
    <ArticleLayout
      title="支援職が休職したくなる｜休む前に整理したいこと・判断のタイミング"
      description="支援職で「もう休まないと限界かも」と感じたとき、まず整理したいこと。休職の判断基準・休む前にやっておくこと・休職中の過ごし方を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-consider-leave"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「もう休まないと限界かも」と感じたなら、それは重要なサインです。
      </p>

      <p>
        支援職として働く中で「休職したい」「もう動けない」という感覚が出てきたとき、
        それは弱さではなく、<strong>消耗が限界に近づいているサイン</strong>です。
        休職は「逃げ」ではありません。消耗を回復させ、支援を長く続けるための選択肢です。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        この記事は「休職するかどうか」の判断に焦点を当てます。そもそも燃え尽きとは何か、その全体像は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>にまとめています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態が続いていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・朝、仕事に行けない・行きたくない状態が続いている</li>
          <li>・<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2">眠れない</Link>・食欲がない状態が2週間以上続いている</li>
          <li>・<Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2">感情が麻痺</Link>して何も感じられなくなってきた</li>
          <li>・「消えてしまいたい」という気持ちがある</li>
          <li>・身体症状（頭痛・胃腸の不調・動悸）が続いている</li>
        </ul>
      </div>

      <h2>すぐに医療機関を受診すべきサイン</h2>
      <div className="card" style={{ borderLeft: "3px solid #9f3a3a" }}>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>死にたい・消えてしまいたいという気持ちがある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>動悸・過呼吸・強い身体症状がある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>2週間以上、眠れない・食欲がない状態が続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>日常生活（食事・入浴・外出）が困難になっている</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">該当する場合は心療内科・精神科の受診を優先してください。</p>
      </div>


      <h2>支援職が休職を先延ばしにしやすい理由</h2>
      <p>
        「限界かもしれない」と感じながらも、休職に踏み切れない支援職は多いです。
        その背景には、支援職特有の構造的な理由があります。
      </p>
      <div className="card space-y-3 text-sm text-stone-600">
        <div>
          <p className="font-medium text-stone-700 mb-1">「利用者を置いて休めない」</p>
          <p className="leading-[1.9]">「自分が休んだら誰がこの人を支援するのか」という感覚が、休むことを妨げます。しかし消耗した状態で続ける支援は質が下がります。あなたが回復することが、利用者への最善の支援につながります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「人手不足で抜けづらい」</p>
          <p className="leading-[1.9]">職場の人手不足が「自分が抜けると職場が回らない」という感覚を生みます。ただしあなたが完全に壊れてしまった方が、職場への影響は大きくなります。早めに休む方が、長期的には職場のためにもなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「自分より大変な人がいる」</p>
          <p className="leading-[1.9]">「この程度で休むのは甘え」「もっと大変な人がいる」という比較が、自分の消耗を過小評価させます。消耗の深さは他人との比較ではなく、自分の状態で判断するものです。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「支援者だから耐えるべき」</p>
          <p className="leading-[1.9]">「支援職は強くなければならない」「弱音は言えない」という職場文化・自己規範が、休むことへの強い抵抗感を生みます。しかし支援者も人間であり、消耗します。耐え続けることが美徳ではありません。</p>
        </div>
      </div>

      <h2>休職を検討するタイミングの目安</h2>
      <div className="card space-y-3 text-sm">
        {[
          { label: "セルフケアで対処できる段階", desc: "疲れを感じるが休日に少し回復する。環境調整・セルフケアが先。" },
          { label: "休職を検討する段階", desc: "休日も回復しない・朝が動けない・感情が平坦になってきた。医師への相談が必要。" },
          { label: "休職が必要な段階", desc: "日常生活に支障が出ている・強い身体症状・消えたいという気持ちがある。医師の診断のもと休職が必要。" },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-3">
            <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-32">{label}</span>
            <p className="text-stone-600">{desc}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaSmall />

      <h2>休職前に整理しておくこと</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① まず医療機関を受診する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">休職には医師の診断書が必要です。心療内科・精神科を受診し、今の状態を医師に伝えてください。「休職したい」と伝えることは正当な相談です。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「休職＝負け」という感覚を手放す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">消耗した状態で支援を続けることは、利用者・自分・職場の誰の利益にもなりません。回復のために休むことは、長期的に支援を続けるための責任ある選択です。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「辞める・続ける」の判断は休職後でいい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">消耗が深い状態での判断は後悔につながりやすいです。まず休職して回復させてから、改めて判断することをおすすめします。詳しくは<Link to="/articles/helper-want-to-quit" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職を辞めたい</Link>も参照してください。</p>
      </div>

      <h2>休職中の過ごし方</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「ただ休む」だけでは回復しないことがある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">休職初期は「休むこと」が最優先です。ただし中程度以上の消耗の場合、ただ休むだけでは回復が遅れることがあります。カウンセリング・医療・環境調整を組み合わせることが回復を早めます。</p>
        <p className="text-sm text-stone-500 mt-2">詳しく→ <Link to="/articles/compassion-fatigue-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労の回復期間</Link> ／ <Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休んでも回復しないとき</Link></p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">休職を迷っている段階でも相談できます。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">「休むべきか」を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">「休職すべきか・続けるべきか」——今の状態を外から整理することで、判断の精度が上がります。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/helper-consider-leave"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。休職の判断には必ず医師への相談が必要です。
      </div>
    </ArticleLayout>
  )
}

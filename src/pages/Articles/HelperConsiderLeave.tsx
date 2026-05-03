import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function CompassionFatigueVsDepression() {
  return (
    <ArticleLayout
      title="共感疲労とうつ病の違い｜症状・原因・対処法を支援職向けに解説"
      description="共感疲労とうつ病はどう違うのか。症状の類似点・違い・見分け方・どちらの場合も共通する対処法を支援職向けに解説します。長期化するとうつ病に移行することも。"
      url="https://www.ishizue-counseling.jp/articles/compassion-fatigue-vs-depression"
      date="2026-05-03"
      tags={["compassion", "burnout"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「共感疲労なのか、うつ病なのか、自分でもわからない」——この記事でその違いを整理します。
      </p>

      <p>
        共感疲労とうつ病は症状が重なる部分が多く、自分でも区別しにくいことがあります。
        ただし<strong>原因・回復のアプローチ・医療的な対処の必要性</strong>に違いがあるため、
        理解しておくことが重要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">どちらの可能性もある：こんな状態</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・気力・意欲が低下している</li>
          <li>・眠れない・疲れが取れない</li>
          <li>・仕事に行くのがつらい</li>
          <li>・感情が平坦になってきた</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">→ 症状だけでは区別が難しく、専門家の判断が必要な場合があります。</p>
      </div>

      <h2>共感疲労とうつ病の比較</h2>

      <div className="card">
        <div className="space-y-4 text-sm">
          {[
            {
              item: "主な原因",
              cf: "他者の苦しみへの継続的な共感・感情労働の蓄積",
              dep: "様々なストレス要因・脳内の神経伝達物質の変化など",
            },
            {
              item: "仕事との関係",
              cf: "仕事・支援場面と強く結びついている",
              dep: "仕事だけでなく、生活全般に影響が及ぶ",
            },
            {
              item: "休日の状態",
              cf: "仕事を離れると少し楽になる傾向がある",
              dep: "休日でも回復しにくく、全般的な落ち込みが続く",
            },
            {
              item: "感情の状態",
              cf: "感情麻痺・無感覚・または感情の引きずり",
              dep: "持続的な気分の落ち込み・喜びの喪失（アンヘドニア）",
            },
            {
              item: "医療的対処",
              cf: "軽〜中程度なら環境調整・カウンセリングで回復可能なことも",
              dep: "医療機関での診断・治療が必要なことが多い",
            },
          ].map(({ item, cf, dep }) => (
            <div key={item}>
              <p className="text-xs font-medium text-stone-400 mb-1">{item}</p>
              <div className="flex gap-3">
                <div className="flex-1 p-2 rounded-lg bg-stone-50">
                  <p className="text-xs text-[#8FAF9F] font-medium mb-0.5">共感疲労</p>
                  <p className="text-stone-600 text-xs leading-relaxed">{cf}</p>
                </div>
                <div className="flex-1 p-2 rounded-lg bg-stone-50">
                  <p className="text-xs text-stone-400 font-medium mb-0.5">うつ病</p>
                  <p className="text-stone-600 text-xs leading-relaxed">{dep}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          ※ 両者は重なり合って現れることが多く、自己判断が難しい場合は専門家への相談が必要です。
        </p>
      </div>

      <h2>共感疲労が長期化するとうつ病に移行することがある</h2>
      <p>
        共感疲労を放置して消耗が深まると、うつ病に移行するリスクがあります。
        「仕事を離れると少し楽」という状態から、「休日でも全く回復しない」「何も楽しめない」という状態に変わってきたとき、
        うつ病への移行が起きている可能性があります。
      </p>
      <p className="text-sm text-stone-500">
        共感疲労の放置リスクについて→ <Link to="/articles/compassion-fatigue-high-score" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">チェックで高スコアだった方へ</Link>
      </p>


      <h2>「共感疲労だと思っていたら、うつ状態が進んでいた」ということもある</h2>
      <p>
        支援職に多いパターンの一つが、共感疲労だと思って放置していたら、
        いつの間にかうつ状態が深まっていたというケースです。
      </p>
      <div className="card space-y-3 text-sm text-stone-600">
        <div>
          <p className="font-medium text-stone-700 mb-1">支援職だから「まだ働ける」で放置しやすい</p>
          <p className="leading-[1.9]">「利用者の方が大変」「この程度で受診するのは大げさ」という感覚が、受診を遅らせます。しかし消耗は放置するほど深まり、回復に必要な時間が長くなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">真面目な人ほど受診が遅れる</p>
          <p className="leading-[1.9]">責任感が強く、「休んではいけない」「弱音は言えない」という規範を持つ支援職ほど、限界まで動き続けてしまいます。受診するタイミングが遅くなればなるほど、回復期間も長くなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「仕事を離れたら楽」が通用しなくなってきたら注意</p>
          <p className="leading-[1.9]">共感疲労の初期は「仕事を離れると少し楽になる」という感覚がありますが、うつ状態が深まると休日でも回復しなくなります。この変化が起きてきたときが、受診を検討するタイミングです。</p>
        </div>
      </div>
      <p>
        「共感疲労かうつかわからない」という状態自体が、専門家への相談が必要なサインです。
        自己判断で放置せず、心療内科・精神科への相談をおすすめします。
      </p>

      <h2>医療機関への相談を優先すべきサイン</h2>
      <div className="card" style={{ borderLeft: "3px solid #9f3a3a" }}>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>死にたい・消えてしまいたいという気持ちがある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>2週間以上、気分の落ち込みや意欲低下が続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>日常生活（食事・入浴・外出）に支障が出ている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>「共感疲労かうつかわからない」と感じている</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">自己判断より専門家の診断を優先してください。心療内科・精神科への相談をおすすめします。</p>
      </div>

      <h2>どちらの場合も共通する対処の方向性</h2>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・消耗の構造を理解する（原因を特定する）</p>
        <p>・「ただ休む」だけでなく、回復の種類を意識する</p>
        <p>・一人で抱えず、外部サポートを活用する</p>
        <p>・早めに動くほど、回復期間が短くなる</p>
      </div>
      <p className="text-sm text-stone-500">
        回復の進め方→ <Link to="/articles/compassion-fatigue-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労の回復期間</Link> ／ <Link to="/articles/compassion-fatigue-medical-support" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何科に相談すべきか</Link>
      </p>

      <LineCtaSmall />

      <h2>よくある質問</h2>

      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">共感疲労とうつ病は同時に起きますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">はい、重なり合って起きることがあります。共感疲労が長期化することでうつ状態に移行することもあります。症状が重なっている場合は自己判断が難しいため、専門家への相談が重要です。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">カウンセリングと医療機関、どちらに行けばいいですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">死にたい気持ち・強い身体症状・日常生活への支障がある場合は医療機関（心療内科・精神科）を優先してください。「状態を整理したい・話を聞いてもらいたい」という段階ではカウンセリングが選択肢になります。迷う場合はまず医療機関への相談をおすすめします。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">共感疲労はうつ病より軽い状態ですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">軽い・重いという比較ではなく、原因と性質が異なります。共感疲労も放置すると深刻化し、長期的な消耗・バーンアウト・うつ病への移行につながることがあります。早めに対処することが重要です。</div>
      </details>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「共感疲労かうつかわからない」と感じているとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">今の状態を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">「自分の状態が何なのかわからない」——外から整理することで、次に何をすべきかが見えてきます。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/compassion-fatigue-vs-depression"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と共感疲労・うつ病に関する心理学的知見をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

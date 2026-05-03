import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function EmpathyFatigueVsSecondaryTrauma() {
  return (
    <ArticleLayout
      title="二次受傷とは？｜支援職に起きる症状・共感疲労・PTSDとの違いと対処法"
      description="二次受傷（Secondary Traumatic Stress）とは、他者のトラウマへの関与でPTSD様症状が現れる状態です。共感疲労・バーンアウト・うつとの違い、症状・対処法を支援職向けに解説します。"
      url="https://www.ishizue-counseling.jp/articles/empathy-fatigue-vs-secondary-trauma"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「二次受傷」という言葉を聞いたことはあるけれど、共感疲労と何が違うのかわからない——そんな方へ向けて整理します。
      </p>

      <div className="card">
        <p className="text-sm text-stone-700 mb-2"><strong>二次受傷とは：</strong><br />他者のトラウマ体験に継続的に触れることで、支援者自身にPTSD様症状（侵入・回避・過覚醒）が現れる状態。</p>
        <p className="text-sm text-stone-700"><strong>共感疲労との違い：</strong><br />共感疲労は感情労働全般の疲弊、二次受傷はトラウマへの暴露色が強い。重なり合うことが多い。</p>
      </div>

      <p>
        <strong>二次受傷（Secondary Traumatic Stress）とは、他者のトラウマ体験に継続的に関わることで、支援者自身がトラウマ反応に似た症状を示す状態です。</strong>
        自分が直接体験したわけではなく、クライアントや利用者の苦しみを通じて間接的に生じます。
      </p>
      <p>
        看護師・介護士・スクールカウンセラー・児童福祉職・DV支援員・訪問看護師など、他者の深刻な体験に継続的に関わる職種で起きやすく、
        適切な対処をすれば回復できます。
      </p>

      <h2>まずチェック：今の状態を確認する</h2>
      <ul className="space-y-1">
        <li>・利用者のつらい話が、仕事後も頭から離れない</li>
        <li>・特定のケースや話題を「思い出したくない」と感じる</li>
        <li>・常に緊張しているような感覚、または眠れない状態が続いている</li>
        <li>・以前より人の苦しみに共感しにくくなった</li>
      </ul>
      <p>→ 2つ以上当てはまる場合、二次受傷または共感疲労のサインである可能性があります。</p>
      <p className="text-sm text-stone-500">
        詳しく確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <h2>二次受傷と共感疲労の違い</h2>
      <p>
        この2つは混同されやすいですが、概念の焦点が少し異なります。
      </p>

      <div className="card">
        <div className="space-y-4 text-sm">
          {[
            {
              term: "二次受傷（STS）",
              focus: "トラウマへの暴露",
              desc: "クライアントのトラウマ体験（虐待・暴力・事故・死など）に継続的に関わることで生じるトラウマ反応。PTSDと類似した症状（侵入・回避・過覚醒）が現れる。",
              origin: "Figley（1995）",
            },
            {
              term: "共感疲労（CF）",
              focus: "共感の疲弊",
              desc: "他者の苦しみに継続的に共感することで生じる心理的・感情的・身体的な消耗。トラウマ的な内容だけでなく、日常的な感情労働の蓄積でも起きる。",
              origin: "Figley（1995）",
            },
          ].map(({ term, focus, desc, origin }) => (
            <div key={term} className="flex gap-3">
              <div className="flex-shrink-0 w-28">
                <p className="text-xs font-medium text-[#8FAF9F]">{term}</p>
                <p className="text-xs text-stone-400">{focus}</p>
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed">{desc}</p>
                <p className="text-xs text-stone-400 mt-1">{origin}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          ※ 二次受傷は共感疲労の一部として含まれる場合と、別概念として扱われる場合があります。研究者によって定義が異なります。
        </p>
      </div>

      <p>
        実践的には、<strong>トラウマ的な内容（虐待・暴力・死・事故など）に継続的に関わる支援職では「二次受傷」、感情労働全般の蓄積には「共感疲労」</strong>という使い分けが一般的です。
        ただし両者は重なり合って現れることが多く、明確に区別できないことも多いです。
      </p>

      <h2>二次受傷の症状：3つの軸</h2>
      <p>
        二次受傷の症状はPTSDと類似しており、以下の3軸で現れます。
      </p>

      <div className="card space-y-4">
        <div>
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">① 侵入症状</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・利用者のつらい話・場面が繰り返し頭に浮かぶ</li>
            <li>・夢に出てくる</li>
            <li>・ふとしたときにフラッシュバックのように思い出される</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">② 回避症状</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・特定のケースや話題を考えたくない・避けたくなる</li>
            <li>・仕事のことを話したくない</li>
            <li>・感情が麻痺している、または感じなくなってきた</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">③ 過覚醒症状</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・常に何かに備えているような緊張感がある</li>
            <li>・些細な刺激に強く反応する</li>
            <li>・眠りが浅い・夜中に目が覚める</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-stone-500 mt-2">
        ※ これらの症状がPTSDと類似していることから、二次受傷は「代理トラウマ（Vicarious Trauma）」とも呼ばれます。
      </p>

      <h2>二次受傷・共感疲労・バーンアウト・うつの違い</h2>

      <div className="card">
        <div className="space-y-3 text-sm">
          {[
            { term: "二次受傷", cause: "他者のトラウマへの暴露", key: "侵入・回避・過覚醒（PTSD様症状）" },
            { term: "共感疲労", cause: "継続的な共感・感情労働", key: "感情的消耗・感覚の麻痺・意欲低下" },
            { term: "バーンアウト", cause: "長期の職業的過負荷", key: "情緒的消耗・脱人格化・達成感低下" },
            { term: "うつ病・適応障害", cause: "様々なストレス要因", key: "気分・意欲・機能の全般的低下（医療的診断が必要）" },
          ].map(({ term, cause, key }) => (
            <div key={term} className="flex gap-3 text-xs">
              <span className="flex-shrink-0 font-medium text-[#8FAF9F] w-20">{term}</span>
              <span className="text-stone-500 w-32 flex-shrink-0">{cause}</span>
              <span className="text-stone-600">{key}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          ※ これらは重なり合って現れることが多く、明確に区別できないことが一般的です。
        </p>
      </div>

      <h2>なぜ支援職は二次受傷しやすいのか｜原因と背景</h2>
      <p>
        神経科学的な観点から見ると、他者の苦痛に共感するとき、
        脳内では自分が苦痛を感じているときと類似した反応が起きることがわかっています。
        支援職が感じる「あの場面が頭から離れない」「なぜか重い気持ちが続く」という感覚は、
        この神経系レベルの反応の結果です。
      </p>
      <p>
        さらに、以下の構造が二次受傷を深めやすくします：
      </p>
      <div className="card space-y-2">
        <p className="text-sm text-stone-600">・深刻なトラウマ事例（虐待・暴力・死など）への継続的な関与</p>
        <p className="text-sm text-stone-600">・「助けたい」という強い使命感による感情的巻き込まれ</p>
        <p className="text-sm text-stone-600">・「弱音を言えない」という職場文化による孤立</p>
        <p className="text-sm text-stone-600">・スーパービジョンや相談の場がない環境</p>
      </div>

      <h2>二次受傷の対処法と回復のポイント</h2>
      <p>
        二次受傷は適切な対処をすれば回復できます。
        ただし「ただ休む」だけでは不十分で、消耗の構造を理解した上で取り組むことが重要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">今日からできること</p>
        <ul className="text-sm text-stone-600 space-y-2">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「今日、自分が揺れた場面」を3行だけ書き出す（外在化）</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>仕事とプライベートの「切り替え儀式」を作る</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>信頼できる同僚・スーパーバイザーに話す場所を持つ</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「感情規則のない時間」を意識的に作る</li>
        </ul>
      </div>

      <p className="text-sm text-stone-500">
        対処法を詳しく→ <Link to="/articles/compassion-fatigue-coping" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労の対処法7つ</Link> ／ <Link to="/articles/compassion-fatigue-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">回復方法</Link>
      </p>

      <h2>専門家への相談を検討するサイン</h2>
      <div className="card" style={{ borderLeft: "3px solid #9f3a3a" }}>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>侵入症状・回避・過覚醒が2週間以上続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>日常生活や仕事に支障が出ている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>眠れない・食欲がない状態が続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>死にたい・消えてしまいたいという気持ちがある</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">該当する場合は、カウンセリングより先に医療機関（心療内科・精神科）の受診を優先してください。</p>
      </div>

      <h2>よくある質問</h2>

      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">二次受傷とうつ病の違いは何ですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">二次受傷はトラウマ的な体験への関与が主な原因で、侵入症状・回避・過覚醒という特定のパターンが現れます。うつ病は気分・意欲・機能の全般的な低下が特徴です。ただし両者は重なり合って現れることも多く、うつ状態に至ることもあります。医療機関での診断が必要な場合はうつ病として診断されることがあります。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">二次受傷は治りますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">適切な対処をすれば回復できます。ただし「ただ休む」だけでは不十分で、消耗の構造を理解した上で取り組むことが重要です。早めに気づいて対処するほど、回復に必要な期間が短くなる傾向があります。深刻な場合は専門家のサポートが回復を早めます。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">PTSDとの違いは何ですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">PTSDは自分が直接体験したトラウマから生じます。二次受傷（STS）は他者のトラウマへの関与を通じて間接的に生じます。症状は非常に類似していますが、原因の「直接性」が異なります。二次受傷はこのことから「代理トラウマ」とも呼ばれます。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">支援職以外でも二次受傷は起きますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">はい。他者の深刻な体験に継続的に関わるすべての人に起きえます。ただし、看護師・介護士・スクールカウンセラー・児童福祉職・DV支援員・訪問看護師など、トラウマ的な内容に日常的に接する職種は特にリスクが高いとされています。</div>
      </details>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>二次受傷とは他者のトラウマへの関与によるPTSD様反応。共感疲労と重なり合う概念</li>
        <li>症状は侵入・回避・過覚醒の3軸で現れる</li>
        <li>バーンアウト・うつとも重なりやすく、明確な区別より「今の自分の状態」を理解することが先決</li>
        <li>適切な対処で回復できる。早めに気づいて対処するほど回復が早い</li>
      </ul>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">相談するか迷っている段階でも大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">「自分の状態を整理したい」と感じたとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          二次受傷・共感疲労の状態にあるとき、一人での整理には限界があります。
          消耗の構造を外から整理することで、何が起きているかが見えてきます。
          支援職として働く中での消耗を前提にした相談を行っています。
        </p>
        <a
          href="/#contact"
          className="block text-center py-2.5 rounded-xl text-sm font-medium text-white"
          style={{ background: "#7EB8A4", textDecoration: "none" }}
        >
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      {/* 内部リンク */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労とは｜症状・原因・診断・対処法・回復を総合解説（ピラー記事）
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労チェック（20項目・3分）
          </Link>
          <Link to="/articles/compassion-fatigue-diagnosis" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労の診断——状態を理解するための視点
          </Link>
          <Link to="/articles/compassion-fatigue-coping" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労の対処法7つ
          </Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、
        二次受傷・共感疲労に関する心理学的知見（Figley, 1995; Stamm, 2010ほか）をもとに作成しています。
      </div>

    </ArticleLayout>
  )
}

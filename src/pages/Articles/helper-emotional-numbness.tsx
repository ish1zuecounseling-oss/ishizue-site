import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function HelperEmotionalNumbness() {
  return (
    <ArticleLayout
      title="感情が麻痺している｜支援職に多い感情麻痺の原因と回復のアプローチ"
      description="利用者の話に心が動かなくなった、以前のように感じられない——支援職に多い感情麻痺の原因・状態・回復方法を解説します。これは冷たくなったのではなく、消耗のサインです。"
      url="https://www.ishizue-counseling.jp/articles/helper-emotional-numbness"
      date="2026-05-03"
      tags={["compassion", "burnout", "check"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「利用者の話を聞いても、何も感じなくなった」——これは冷たくなったのではありません。消耗のサインです。
      </p>

      <p>
        <strong>感情が麻痺している状態とは、以前は感じられていた共感・やりがい・喜びが薄れ、感情的な反応が鈍くなった状態です。</strong>
        支援職・医療職・介護職に多く見られ、共感疲労・二次受傷の代表的な症状の一つです。
      </p>
      <p>
        「自分は冷たい人間になってしまった」「支援職に向いていないのかも」と感じることがありますが、
        これは性格や適性の問題ではなく、<strong>感情的エネルギーが枯渇した状態</strong>から起きています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態に心当たりはありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・利用者の話を聞いても、以前のように心が動かない</li>
          <li>・やりがいや「この仕事をしていて良かった」という感覚が薄れた</li>
          <li>・感情が麻痺している感じがする</li>
          <li>・逆に、些細なことで急に感情が崩れることがある</li>
        </ul>
      </div>

      <h2>なぜ感情が麻痺するのか</h2>
      <p>
        感情麻痺は、感情的エネルギーが限界を超えたときに起きる<strong>脳の防御反応</strong>です。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">感情労働の過剰な蓄積</p>
          <p className="text-stone-600 leading-[1.9]">感情を「仕事の道具」として管理し続けることで、感情的エネルギーが枯渇します。充電されないまま使い続けた結果、感情系のシステムが「省エネモード」に入ります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">神経系の慢性的な過負荷</p>
          <p className="text-stone-600 leading-[1.9]">慢性的なストレス状態では、前頭葉の機能が低下し、感情処理のシステムが正常に機能しなくなります。「感じられなくなる」のは脳レベルの変化です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">自己保護としての麻痺</p>
          <p className="text-stone-600 leading-[1.9]">深刻な苦しみに継続的に関わるとき、脳は「これ以上感じると壊れる」という判断で感情を遮断することがあります。これは病気ではなく、適応的な反応です。</p>
        </div>
      </div>

      <h2>「麻痺」と「過敏」が繰り返される理由</h2>
      <p>
        感情麻痺の状態にある方の多くが、
        「麻痺しているのに、小さなことで急に泣いたり怒ったりする」という経験をします。
      </p>
      <p>
        これは感情系が「麻痺」と「過敏」を繰り返している状態です。
        感情のダムが満杯になると、小さな刺激で溢れ出します。
        どちらも同じ消耗のサインです。
      </p>

      <p className="text-sm text-stone-500">
        今の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>感情麻痺からの回復：段階的なアプローチ</h2>
      <p>
        感情麻痺の回復には、「感情を無理に取り戻そうとしない」ことが重要です。
        焦って感情を取り戻そうとすることが、かえって回復を遅らせます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① まず「感じなくていい」を許可する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「感じられない自分はおかしい」という自己批判をやめることが最初の一歩です。
          感情麻痺は弱さではなく、消耗への適応です。
          「今は感じなくていい」と自分に許可を出すことが、神経系の緊張を少し緩めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「感情規則のない時間」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事中は感情を常に管理しています。
          仕事を離れたら「感情を管理しなくていい場所・時間」を意識的に作ることが、
          感情的エネルギーの回復を助けます。
          泣いても、笑っても、何も感じなくてもOKな時間です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 身体感覚から入る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情麻痺の状態では、感情より先に身体感覚が回復しやすいです。
          温かいお風呂・好きな食べ物・自然の中での散歩など、
          身体が「心地よい」と感じることから始めることが、感情系の回復につながります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 安心できる関係の中で少しずつ話す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情は安全な関係の中でゆっくり解凍されます。
          信頼できる人・カウンセラーとの対話が、感情麻痺の回復を助けます。
          「うまく話せなくていい」「まとまっていなくていい」——外に出す場所を持つことが大切です。
        </p>
      </div>

      <h2>医療機関への相談を検討するサイン</h2>
      <div className="card" style={{ borderLeft: "3px solid #9f3a3a" }}>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>感情麻痺の状態が数ヶ月続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>日常生活・仕事に大きな支障が出ている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>死にたい・消えてしまいたいという気持ちがある</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">該当する場合は、心療内科・精神科の受診を優先してください。</p>
      </div>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「感じられない自分がおかしい」と思わなくていいです。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">感情麻痺の状態を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          感情麻痺の背景にある消耗の構造を外から整理することが、回復の入口になります。
          支援職として働く中での消耗を前提にした相談を行っています。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      {/* 内部リンク */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目・3分）</Link>
          <Link to="/articles/helper-client-stuck-in-head" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 利用者の話が頭から離れない——侵入症状の原因と対処</Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労からの回復方法</Link>
          <Link to="/articles/empathy-fatigue-vs-secondary-trauma" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 二次受傷とは？｜共感疲労・PTSDとの違い</Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、共感疲労・感情労働に関する心理学的知見をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

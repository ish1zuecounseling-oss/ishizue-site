import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function NurseCompassionFatigue() {
  return (
    <ArticleLayout
      title="看護師の共感疲労｜なぜ看護職はなりやすいのか・症状・対処法を解説"
      description="看護師に多い共感疲労の症状・原因・対処法を解説します。夜勤・感情労働・死への関与など看護職特有の消耗構造と、今日からできる回復のアプローチ。"
      url="https://www.ishizue-counseling.jp/articles/nurse-compassion-fatigue"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「患者さんのことが頭から離れない」「感情が麻痺してきた気がする」——それは看護師に多い共感疲労のサインです。
      </p>

      <p>
        看護師は共感疲労が起きやすい職種の筆頭です。
        患者の苦痛・死・家族の悲嘆に継続的に関わりながら、
        感情を「仕事の道具」として管理し続ける感情労働の負荷が重なります。
      </p>
      <p>
        この記事では、<strong>看護職に特有の共感疲労の構造と、今日からできる対処</strong>を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな看護師の方へ</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・患者さんの状態が気になって、休日も頭から離れない</li>
          <li>・以前は感じていたやりがいが薄れてきた</li>
          <li>・夜勤明けでも気持ちが切り替わらない</li>
          <li>・感情が麻痺している、または些細なことで崩れやすくなった</li>
        </ul>
      </div>

      <h2>看護師が共感疲労になりやすい理由</h2>
      <p>
        共感疲労は意志の弱さや看護職への適性不足ではありません。
        <strong>看護という仕事の構造そのもの</strong>が、消耗を生み出しています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">看護職特有の消耗構造</p>
        <div className="space-y-3 text-sm text-stone-600">
          <div>
            <p className="font-medium text-stone-700">① 死・苦痛・悲嘆への継続的な関与</p>
            <p className="leading-[1.9]">患者の死・臨終の場面・家族の悲嘆に繰り返し立ち会うことで、二次受傷（PTSD様反応）が蓄積しやすい環境にあります。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">② 感情規則の強さ</p>
            <p className="leading-[1.9]">「プロとして動揺を見せてはいけない」という規範が、内側の感情を抑圧し続けることにつながります。感情を「管理する」ことのコストが蓄積します。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">③ 夜勤による自律神経の慢性的な乱れ</p>
            <p className="leading-[1.9]">不規則な生活リズムは神経系の回復を妨げます。共感疲労の回復には神経系の安定が必要ですが、夜勤がその妨げになります。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">④ 人手不足・業務過多</p>
            <p className="leading-[1.9]">1人あたりの患者数が多く、十分に関わりたくても関われない状況が無力感と消耗を深めます。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">⑤ 弱音を言えない文化</p>
            <p className="leading-[1.9]">「看護師なのだから耐えるべき」という規範が、消耗のサインに気づくことを妨げます。</p>
          </div>
        </div>
      </div>

      <h2>看護師に多い共感疲労の症状</h2>

      <div className="card space-y-3">
        <div>
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">仕事中・仕事後に出やすいサイン</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・<a href="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">患者の状態が気になって勤務時間外も頭から離れない</a></li>
            <li>・特定の患者やケースを思い出したくない</li>
            <li>・患者の死の場面がフラッシュバックする</li>
            <li>・夜勤明けでも気持ちが休まらない</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">感情・意欲の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・以前感じていたやりがいが薄れてきた</li>
            <li>・患者に共感できなくなってきた（または過度に感情移入する）</li>
            <li>・仕事に行くのがつらくなってきた</li>
            <li>・「もう看護師を続けられないかも」と感じることがある</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">身体・睡眠の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・休んでも疲れが回復しない</li>
            <li>・眠れない・夢で仕事の場面が出てくる</li>
            <li>・頭痛・胃腸の不調・動悸が続いている</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-stone-500">
        今の状態を詳しく確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>看護師の共感疲労：今日からできる対処</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 勤務後の「切り替え儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          着替え・シャワー・決まった音楽など、「仕事モードを終える合図」を作ることが、
          神経系の切り替えを助けます。ルーティン化することで効果が安定します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「書き出す」習慣をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今日の自分が揺れた場面」「気になっていること」を3行だけ書き出す。
          正しく書かなくていい。頭の中から外に出すことで、脳の処理負荷が軽くなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「話せる場所」を一つ持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同僚・先輩・スーパーバイザーなど、仕事の消耗を安全に話せる場所を意識的に持つことが、
          孤立した消耗からの回復を助けます。
          職場内で難しい場合は、外部のカウンセリングが選択肢になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 夜勤後の「回復時間」を設計する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          夜勤明けは身体・神経系ともに消耗しています。
          「すぐに予定を入れない」「最低4〜6時間の睡眠を確保する」など、
          夜勤後の回復時間を意識的に確保することが慢性的な消耗を防ぎます。
        </p>
      </div>

      <h2>看護師が「限界サイン」を見逃しやすい理由</h2>
      <p>
        看護師は共感疲労が深まっても「まだ仕事はできている」という状態が続くことが多いです。
        これは、<strong>高い使命感と責任感が消耗のサインを覆い隠す</strong>からです。
      </p>
      <p>
        「この程度で弱音を言うのは甘え」という感覚自体が、消耗のサインです。
        消耗している自分に気づけたなら、それはすでに大切な一歩です。
      </p>

      <h2>医療機関への相談を検討するサイン</h2>
      <div className="card" style={{ borderLeft: "3px solid #9f3a3a" }}>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>症状が2週間以上続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>休職・異動を考えている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>死にたい・消えてしまいたいという気持ちがある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>動悸・過呼吸・強い身体症状がある</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">
          該当する場合は、カウンセリングより先に心療内科・精神科の受診を優先してください。
        </p>
      </div>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">相談するか迷っている段階でも大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">看護職の消耗を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「職場では弱音を言えない」「でもこのままでいいとも思えない」——
          看護職として働く中での消耗を前提にした相談を行っています。
          うまく話せなくても大丈夫です。
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
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労チェック（20項目・3分）
          </Link>
          <Link to="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労とは｜症状・原因・診断・対処法・回復を総合解説
          </Link>
          <Link to="/articles/empathy-fatigue-vs-secondary-trauma" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 二次受傷とは？｜共感疲労・PTSDとの違い
          </Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労からの回復方法
          </Link>
          <Link to="/articles/compassion-fatigue-medical-support" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労は何科に相談すべきか
          </Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、
        共感疲労・二次受傷に関する心理学的知見をもとに作成しています。
        医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

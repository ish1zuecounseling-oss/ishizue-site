import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function SchoolCounselorCompassionFatigue() {
  return (
    <ArticleLayout
      title="スクールカウンセラーの共感疲労｜子どもの話を聞き続ける疲弊と回復"
      description="スクールカウンセラーに多い共感疲労の症状・原因・対処法。子どものトラウマ・虐待・不登校に継続的に関わることで生じる消耗の構造と、今日からできる回復のアプローチ。"
      url="https://www.ishizue-counseling.jp/articles/school-counselor-compassion-fatigue"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「子どもの話を聞くのが怖くなってきた」「帰宅後も相談内容が頭から離れない」——スクールカウンセラーに多い消耗のサインです。
      </p>

      <p>
        スクールカウンセラーは、共感疲労・二次受傷が起きやすい職種です。
        不登校・いじめ・家庭問題・虐待・自傷など、重いテーマに日常的に関わりながら、
        学校という組織の中で孤立しやすい構造にあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんなスクールカウンセラーの方へ</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・<a href="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">相談内容が頭から離れず、帰宅後も考え続けてしまう</a></li>
          <li>・子どもの深刻な話を聞くことが怖くなってきた</li>
          <li>・「自分が何とかしなければ」という感覚が強く、消耗している</li>
          <li>・学校の中で相談できる相手がいなくて孤立感がある</li>
        </ul>
      </div>

      <h2>スクールカウンセラーが消耗しやすい理由</h2>

      <div className="card">
        <div className="space-y-3 text-sm text-stone-600">
          <div>
            <p className="font-medium text-stone-700">① 重いテーマへの継続的な関与</p>
            <p className="leading-[1.9]">虐待・自傷・家庭崩壊・いじめ・トラウマなど、重い内容に日常的に関わります。PTSDと類似した二次受傷が蓄積しやすい環境です。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">② 学校組織の中での孤立</p>
            <p className="leading-[1.9]">守秘義務があるため相談内容を職員室で話せません。「みんなは普通に過ごしているのに、自分だけ重い話を聞いている」という孤立感が消耗を深めます。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">③ 非常勤・短時間勤務の構造的問題</p>
            <p className="leading-[1.9]">週1〜2日という勤務形態では、継続的なスーパービジョンを受けにくく、自分の消耗を整理する時間・場所を持ちにくい状況があります。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">④ 「何とかしなければ」という使命感</p>
            <p className="leading-[1.9]">「この子の話を聞けるのは自分だけ」という感覚が、境界線を曖昧にし、抱え込みを深めます。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">⑤ 成果が見えにくいことへの無力感</p>
            <p className="leading-[1.9]">子どもの状況が改善しないとき、「自分の力不足」と感じやすい。成果が見えにくい仕事の性質が、消耗と無力感を深めます。</p>
          </div>
        </div>
      </div>

      <h2>スクールカウンセラーに多い共感疲労・二次受傷の症状</h2>

      <div className="card space-y-3">
        <div>
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">侵入症状</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・相談内容が帰宅後も繰り返し頭に浮かぶ</li>
            <li>・夢の中で相談場面が出てくる</li>
            <li>・子どもの言葉や表情がフラッシュバックする</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">回避・消耗</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・子どもの話を聞くことが怖くなってきた（<a href="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</a>のサインかもしれません）</li>
            <li>・重い相談のある日が憂鬱になってきた</li>
            <li>・以前感じていた「子どもの力になりたい」という気持ちが薄れた</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">過覚醒・緊張</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・「また深刻な話が来るかも」という緊張が続いている</li>
            <li>・勤務日の朝、気持ちが重い</li>
            <li>・休日でも「あの子は大丈夫かな」と気になってしまう</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-stone-500">
        今の状態を確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link> ／ <Link to="/articles/secondary-trauma-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次受傷チェック（15項目）</Link>
      </p>

      <LineCtaSmall />

      <h2>スクールカウンセラーの共感疲労：対処のポイント</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① スーパービジョンを定期的に受ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スクールカウンセラーが孤立しやすい最大の理由は、スーパービジョンの機会が少ないことです。
          外部のスーパーバイザーやカウンセリング仲間との定期的な話し合いの場を意識的に確保することが、消耗の予防になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 勤務終了時の「切り替え儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          学校を出るときに「今日の相談はここで終わり」と意識的に切り替える儀式を作ることが、
          侵入症状の予防になります。着替え・深呼吸・決まった音楽など、何でも構いません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「できること・できないこと」を整理する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スクールカウンセラーにできることには限界があります。
          「自分の役割の範囲」を意識的に明確にし、範囲外のことについては他機関への連携を積極的に活用することが、抱え込みを防ぎます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自分の消耗を「記録する」習慣</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          勤務後に「今日の自分が揺れた場面」を3行だけ書き出す。
          感情を外在化することが、侵入症状と自己批判のループを緩めます。
        </p>
      </div>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「誰かに話せる場所がない」と感じているなら。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">スクールカウンセラーの消耗を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          学校の中では話せない消耗を、外から整理する場所があります。
          スクールカウンセラー・教育現場での支援職の消耗を前提にした相談を行っています。
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
          <Link to="/articles/secondary-trauma-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 二次受傷チェック（15項目）——侵入・回避・過覚醒を確認
          </Link>
          <Link to="/articles/empathy-fatigue-vs-secondary-trauma" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 二次受傷とは？｜共感疲労・PTSDとの違い
          </Link>
          <Link to="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労とは｜症状・原因・診断・対処法・回復を総合解説
          </Link>
          <Link to="/articles/helper-boundary" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → バウンダリー（境界線）とは——断れない支援職の対処法
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

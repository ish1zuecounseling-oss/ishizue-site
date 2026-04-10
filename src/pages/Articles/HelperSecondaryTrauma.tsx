import ArticleLayout from "../../components/ArticleLayout"

export default function HelperSecondaryTrauma() {
  return (
    <ArticleLayout
      title="二次受傷（共感疲労）とは"
      description="支援職が抱えやすい心理的負荷である二次受傷（共感疲労）について、その構造と背景を整理します。"
      url="https://www.ishizue-counseling.jp/articles/helper-secondary-trauma"
      date="2026-03-22"
      audio="/audio/helper-trauma.mp3"
    >
      <p>
        支援職では、誰かの苦しみや困難に日常的に向き合います。
        その過程で、本人が直接体験していなくても心理的な負荷を受けることがあります。
        こうした現象は「二次受傷（Secondary Trauma）」と呼ばれます。
      </p>

      <p>
        二次受傷とは、他者のトラウマ体験や苦しみに継続的に触れることで、
        支援者自身が心理的な影響を受ける現象を指します。
      </p>

      <p>
        医療・福祉・心理・教育などの対人援助職では、
        利用者の深い苦しみや困難に日常的に向き合うため、
        この影響を受ける可能性が高いと言われています。
      </p>

      <h2>二次受傷のサイン</h2>

      <p>
        二次受傷は急に現れるわけではなく、
        徐々に影響が積み重なることがあります。
      </p>

      <div className="card space-y-2">
        <p>仕事の内容が頭から離れない</p>
        <p>利用者の話を思い出して眠れない</p>
        <p>感情的に疲れやすくなる</p>
        <p>共感すること自体が負担に感じる</p>
      </div>

      <h2>共感疲労との関係</h2>

      <p>
        二次受傷と似た概念に「共感疲労（Compassion Fatigue）」があります。
      </p>

      <p>
        共感疲労とは、他者に共感し続けることによって
        感情的エネルギーが消耗してしまう状態を指します。
      </p>

      <div className="card">
        <p className="font-medium mb-4">
          支援職では次のような構造が重なりやすいと言われています。
        </p>
        <ul className="space-y-2">
          <li>強い感情に継続的に触れる</li>
          <li>責任感が強い</li>
          <li>相談できる環境が少ない</li>
          <li>役割が増え続ける</li>
        </ul>
      </div>

      <h2>支援を続けるための整理</h2>

      <p>
        二次受傷は、個人の弱さによって起こるものではありません。
      </p>

      <p>
        多くの場合、支援の構造そのものに負荷が含まれています。
      </p>

      <div className="card">
        <p className="font-medium mb-4">
          例えば次のような整理が役立つことがあります。
        </p>
        <ul className="space-y-2">
          <li>役割の境界線を見直す</li>
          <li>責任の範囲を整理する</li>
          <li>心理的距離の取り方を言語化する</li>
        </ul>
      </div>

      <p>
        支援を続けるためには、
        支援する側の土台を整えることも重要になります。
      </p>
    </ArticleLayout>
  )
}

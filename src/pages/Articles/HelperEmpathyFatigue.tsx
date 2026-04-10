import ArticleLayout from "../../components/ArticleLayout"

export default function HelperFatigue() {
  return (
    <ArticleLayout
      title="支援職が疲れる理由とは"
      description="支援職が疲れやすい背景には、感情労働や共感疲労などの構造的な要因があります。その仕組みを整理します。"
      url="https://www.ishizue-counseling.jp/articles/helper-empathy-fatigue"
      date="2026-03-22"
      audio="/audio/helper-fatigue.mp3"
    >
      <h2>支援職の疲労とは</h2>

      <p>
        福祉職や相談員、カウンセラーなどの対人援助職は、
        人の困難や苦しさに関わる仕事です。
      </p>

      <p>
        そのため、身体的な忙しさだけではなく、
        心理的な負担が蓄積しやすい特徴があります。
      </p>

      <h2>現場で起こりやすいこと</h2>

      <div className="card space-y-2">
        <p>利用者の問題を自分のことのように感じてしまう</p>
        <p>断ることに罪悪感を感じる</p>
        <p>仕事が終わっても気持ちが切り替わらない</p>
        <p>責任を抱え込みやすい</p>
      </div>

      <h2>心理的な背景</h2>

      <p>
        支援職の疲労には、対人援助の構造が関係しています。
      </p>

      <p>
        たとえば、感情を調整しながら働く「感情労働」、
        利用者の苦しさに共感することで生じる「共感疲労」、
        そして支援者と利用者の境界線（バウンダリー）の問題などです。
      </p>

      <h2>まとめ</h2>

      <p>
        支援職が疲れる背景には、
        対人援助という仕事に伴う心理的負荷があります。
      </p>

      <p>
        感情労働、共感疲労、境界線の問題などの構造を理解することは、
        支援を長く続けるための重要な視点になります。
      </p>
    </ArticleLayout>
  )
}

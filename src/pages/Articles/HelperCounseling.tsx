import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperCounseling() {
  return (
    <ArticleLayout
      title="支援職のためのカウンセリング"
      description="支援する側が立ち止まれる場所として、構造整理の視点からカウンセリングの役割を解説します。"
      url="https://ishizue-site-ker9.vercel.app/articles/helper-counseling"
      date="2026-03-22"
      audio="/audio/helper-counseling.mp3"
    >
      {/* Problem */}
      <p>
        福祉・医療・教育などの対人援助の現場では、
        利用者やクライアントの人生に深く関わることが多くあります。
      </p>

      <p>
        そのため責任の重さや感情労働の負担を抱えながら、
        日々仕事を続けている方も少なくありません。
      </p>

      <p>例えばこのような悩みはありませんか。</p>

      <div className="card">
        <ul className="space-y-2">
          <li>・仕事の責任が重く感じる</li>
          <li>・利用者のことが頭から離れない</li>
          <li>・仕事の疲れが抜けない</li>
          <li>・誰にも弱音を吐けない</li>
          <li>・支援を続けることに不安がある</li>
        </ul>
      </div>

      {/* Structure */}
      <h2>支援者の疲労は「構造」から生まれることがあります</h2>

      <p>
        支援職の疲労は、本人の努力不足ではなく
        構造上の問題から生まれることも多くあります。
      </p>

      <p>例えば次のような要素です。</p>

      <div className="card space-y-2">
        <p>・役割の抱え込み</p>
        <p>・責任の過剰化</p>
        <p>・期待とのズレ</p>
        <p>・感情労働の蓄積</p>
      </div>

      <p>
        こうした状態を整理せずに続けてしまうと、
        <Link to="/articles/helper-burnout" className="text-blue-600 underline mx-1">
          バーンアウト
        </Link>
        につながることもあります。
      </p>

      {/* Counseling */}
      <h2>カウンセリングで行うこと</h2>

      <p>
        カウンセリングでは、感情をただ吐き出すだけではなく、
        状況を構造的に整理することを重視します。
      </p>

      <div className="card">
        <ul className="space-y-2">
          <li>・今の状況の整理</li>
          <li>・思考や役割の構造の確認</li>
          <li>・消耗を減らす視点の整理</li>
        </ul>
      </div>

      <p>
        強くなることを目指すのではなく、
        持続可能な状態に戻すことを大切にしています。
      </p>

      {/* Closing */}
      <h2>支援する人のための時間</h2>

      <p>
        支援職は、誰かのために動き続ける仕事です。
      </p>

      <p>
        だからこそ、自分自身の状態を整える時間を
        意識的に持つことが必要になることがあります。
      </p>

      <p>
        一人で抱え込まず、
        状況を整理する場としてカウンセリングを活用することも
        一つの選択肢です。
      </p>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function EmotionalLabor() {
  return (
    <ArticleLayout
      title="感情労働とは ― 支援職が消耗しやすい理由"
      description="支援職で起こりやすい感情労働と心理的消耗の構造について整理します。"
      url="https://ishizue-site-ker9.vercel.app/articles/emotional-labor"
      date="2026-03-16"
      audio="/audio/emotional-labor.mp3"
    >
      <p>
        感情労働とは、仕事の中で自分の感情をコントロールしながら働くことを求められる労働のことを指します。
      </p>

      <p>
        医療、福祉、教育、心理職などの対人援助職では、業務の中で「感情の管理」が日常的に求められます。
      </p>

      <p>
        相手の感情を受け止めながら、冷静さや専門職としての態度を維持する必要があるため、気づかないうちに心身の消耗が積み重なりやすい働き方でもあります。
      </p>

      <h2>感情労働が生まれる背景</h2>

      <p>
        感情労働という概念は、社会学者アーリー・ホックシールドによって提唱されました。
      </p>

      <p>
        接客業やサービス業でよく語られますが、実際には支援職の方が感情労働の負荷は大きいと言われることがあります。
      </p>

      <div className="card">
        <p className="font-medium mb-4">例えば支援職では次のような場面があります。</p>
        <ul className="space-y-2">
          <li>・強い感情を抱える利用者に対応する</li>
          <li>・怒りや不安を受け止める</li>
          <li>・冷静さを保ちながら関係を維持する</li>
          <li>・個人的な感情を表に出さない</li>
        </ul>
      </div>

      <p>
        こうした状況では、表面的には落ち着いて対応していても、内側では強い負荷がかかり続けていることがあります。
      </p>

      <h2>支援職が疲弊しやすい理由</h2>

      <p>
        支援職が疲弊しやすいのは、単に忙しいからではありません。
      </p>

      <p>
        感情労働に加えて、次のような構造が重なることが多いためです。
      </p>

      <div className="card space-y-2">
        <p>・責任の抱え込み</p>
        <p>・役割の過剰化</p>
        <p>・相談できる相手の少なさ</p>
        <p>・境界線の曖昧さ</p>
      </div>

      <p>
        こうした構造が積み重なることで、
        <Link to="/articles/helper-burnout" className="text-blue-600 underline mx-1">
          バーンアウト
        </Link>
        につながることもあります。
      </p>

      <h2>感情労働とうまく付き合うために</h2>

      <p>
        感情労働そのものを完全になくすことはできません。
      </p>

      <p>
        しかし、負荷の構造を整理することで、消耗を減らすことは可能です。
      </p>

      <div className="card">
        <p className="font-medium mb-4">例えば次のような整理です。</p>
        <ul className="space-y-2">
          <li>・役割の優先順位を見直す</li>
          <li>・抱え込みすぎている責任を整理する</li>
          <li>・境界線を言語化する</li>
        </ul>
      </div>

      <p>
        また、
        <Link to="/articles/helper-boundary" className="text-blue-600 underline mx-1">
          境界線（バウンダリー）
        </Link>
        を整理することも重要な視点になります。
      </p>

      <h2>支援する人の土台を整える</h2>

      <p>
        支援職は、誰かの人生に伴走する仕事です。
      </p>

      <p>
        しかし、支援する側の土台が揺らいでしまうと、支援そのものが続けにくくなります。
      </p>

      <p>
        持続可能な状態を取り戻すためには、思考や役割、負荷の構造を整理する時間が必要になることがあります。
      </p>
    </ArticleLayout>
  )
}

import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const checkItems = [
  "職場に行くことへの憂鬱感が、週に何度もある",
  "上司や同僚との関係でストレスを感じることが多い",
  "自分の仕事量が多すぎて、キャパオーバーになっている",
  "職場での自分の意見や提案が、ほとんど通らないと感じる",
  "不公平な扱いや評価を受けていると感じることがある",
  "職場でのコミュニケーションに疲れを感じる",
  "休憩や休暇を取りにくい雰囲気がある",
  "職場でのハラスメント（言動・態度）を経験したことがある",
  "チームや組織の方針に、納得できないことが多い",
  "自分だけが頑張っていると感じることがある",
  "職場の問題を誰かに相談できる環境がない",
  "仕事でミスをすることへの恐怖感が強い",
  "職場にいると、常に緊張感や警戒感がある",
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 3) return "low"
  if (score <= 7) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "職場ストレスは比較的コントロールできている状態です",
    color: "result-low",
    message:
      "今のところ職場環境は安定しています。ただし支援職の職場は状況が変わりやすいため、日頃からストレスサインを意識しておくことが大切です。",
    links: [
      { href: "/articles/helper-stress-coping", text: "自分に合ったストレスコーピングを見つける" },
      { href: "/articles/helper-boundary", text: "境界線の引き方｜利用者を思いすぎていませんか" },
      { href: "/articles/helper-rest-importance", text: "休むことの大切さ｜支援職のための休息の考え方" },
    ],
    cta: null,
  },
  mid: {
    label: "職場ストレスが蓄積している可能性があります",
    color: "result-mid",
    message:
      "職場環境からのストレスが積み重なっています。今の状況を一人で解決しようとせず、状況を整理してみることが大切です。環境的な要因が大きい場合、個人のセルフケアだけでは限界があります。",
    links: [
      { href: "/articles/helper-workplace-relations", text: "職場の人間関係ストレス｜疲れたときの対処法" },
      { href: "/articles/helper-boss-relation", text: "上司との関係ストレス｜支援職に多い権威関係の心理" },
      { href: "/articles/helper-cannot-say-no", text: "「No」と言えない支援職の心理｜断り方の練習方法" },
    ],
    cta: null,
  },
  high: {
    label: "職場ストレスが深刻な状態の可能性があります",
    color: "result-high",
    message:
      "多くのストレス要因が重なっています。この状況はあなた個人の問題ではなく、職場環境の問題が大きい可能性があります。一人で抱え込まず、外部のサポートを活用することを検討してください。",
    links: [
      { href: "/articles/helper-harassment", text: "ハラスメントのグレーゾーン｜どう判断すればいい？" },
      { href: "/articles/helper-overwork", text: "支援職の過重労働とメンタルへの影響" },
      { href: "/articles/helper-counseling-resistance", text: "カウンセリングへの抵抗感｜受けていいか迷う人へ" },
    ],
    cta: {
      href: "/contact",
      text: "支援職専門カウンセリングに相談する",
    },
  },
}

export default function HelperWorkplaceStressCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(13).fill(false))

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score = checked.filter(Boolean).length
  const level = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / 13) * 100)

  return (
    <ArticleLayout
      title="職場ストレスチェック｜支援職のための13項目"
      description="介護・福祉・保育などの支援職に多い職場ストレスをセルフチェック。人間関係・業務量・ハラスメントなど、今の職場環境を客観的に確認しましょう。"
      url="https://ishizue-site-ker9.vercel.app/articles/helper-workplace-stress-check"
      date="2026-03-29"
      audio="/audio/helper-workplace-stress-check.mp3"
    >
<p>
        支援職の仕事は、利用者との関わりだけでなく、職場環境そのものからも強いストレスを受けることがあります。
      </p>
      <p>
        人間関係・業務量・職場の文化など、さまざまな要因が重なりやすいのが支援職の特徴です。
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      <h2>職場ストレスチェック（13項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">{score}<span className="score-total"> / 13</span></span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 3 ? "bar-low" : score <= 7 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      <div className="checklist">
        {checkItems.map((text, i) => (
          <div
            key={i}
            className={`check-item${checked[i] ? " checked" : ""}`}
            onClick={() => toggle(i)}
            role="checkbox"
            aria-checked={checked[i]}
            tabIndex={0}
            onKeyDown={(e) => e.key === " " && toggle(i)}
          >
            <div className="checkbox"><div className="checkmark" /></div>
            <p className="item-text">{text}</p>
          </div>
        ))}
      </div>

      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 13項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>
          <p className="next-section-label">次のステップ</p>
          {result.links.map((link) => (
            <a key={link.href} href={link.href} className="next-link">
              {link.text}<span className="next-link-arrow">→</span>
            </a>
          ))}
          {result.cta && (
            <a href={result.cta.href} className="cta-button">{result.cta.text} →</a>
          )}
        </div>
      )}

      <h2>職場ストレスを見過ごしやすい理由</h2>
      <div className="card">
        <p className="font-medium mb-4">支援職が職場ストレスに気づきにくい背景として、次のことが挙げられます。</p>
        <ul className="space-y-2">
          <li>「利用者のことを優先すべき」という意識が強い</li>
          <li>「この職場はどこもこんなもの」という諦め</li>
          <li>弱音を言いにくい職場文化</li>
          <li>ストレスを感じること自体への罪悪感</li>
        </ul>
      </div>
      <p>
        職場のストレスはあなたの心の問題ではなく、環境の問題であることがほとんどです。
      </p>
      <p>
        自分の状態を客観的に知ることが、適切な対処への第一歩になります。
      </p>
      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>
    </ArticleLayout>
  )
}

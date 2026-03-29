import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const checkItems = [
  "仕事中、自分の本音の感情を押し殺していることが多い",
  "利用者の前では常に笑顔や穏やかさを保つよう努力している",
  "怒りや悲しみを感じても、表に出さないようにしている",
  "感情をコントロールすることに、エネルギーを使い果たす感覚がある",
  "仕事が終わると、感情的に「空っぽ」になる感覚がある",
  "プライベートでも感情が出にくくなってきた",
  "人と話すこと自体が面倒に感じることが増えた",
  "利用者の前での「笑顔」と、本当の自分の気持ちにギャップを感じる",
  "感情を出さないようにするのが、当たり前になってしまっている",
  "仕事中に「本当の自分」を見失うような感覚がある",
  "帰宅後、何も感じられない・無気力な時間が増えた",
  "感情労働の疲れを、周囲に理解してもらえないと感じる",
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
    label: "感情労働の消耗は比較的少ない状態です",
    color: "result-low",
    message:
      "今のところ感情の消耗は抑えられています。ただし感情労働は蓄積するものです。自分の感情に気づく習慣を持ち続けることが大切です。",
    links: [
      { href: "/articles/helper-rest-types", text: "支援職のための休み方の種類｜ただ寝るだけでは回復しない" },
      { href: "/articles/helper-boundary", text: "境界線の引き方｜利用者を思いすぎていませんか" },
      { href: "/articles/helper-stress-coping", text: "自分に合ったストレスコーピングを見つける" },
    ],
    cta: null,
  },
  mid: {
    label: "感情労働による消耗が蓄積している可能性があります",
    color: "result-mid",
    message:
      "感情を抑え続けることによる疲労が蓄積しています。「感情を出さない」ことが当たり前になりすぎると、自分の本音に気づけなくなっていきます。意識的に感情を解放する時間が必要です。",
    links: [
      { href: "/articles/emotional-labor", text: "感情労働とは｜支援職が知るべき消耗のメカニズム" },
      { href: "/articles/helper-burnout", text: "バーンアウトとは｜支援職に起こる燃え尽きの正体" },
      { href: "/articles/helper-rest-types", text: "支援職のための休み方の種類" },
    ],
    cta: null,
  },
  high: {
    label: "感情労働の消耗が深刻な状態の可能性があります",
    color: "result-high",
    message:
      "感情を抑え続けることで、自分自身の感覚が麻痺しはじめているかもしれません。この状態は放置すると回復に時間がかかります。専門的なサポートを受けることを検討してください。",
    links: [
      { href: "/articles/emotional-labor", text: "感情労働とは｜支援職が知るべき消耗のメカニズム" },
      { href: "/articles/helper-burnout-recovery", text: "バーンアウトから回復するには" },
      { href: "/articles/helper-counseling-resistance", text: "カウンセリングへの抵抗感｜受けていいか迷う人へ" },
    ],
    cta: {
      href: "/contact",
      text: "支援職専門カウンセリングに相談する",
    },
  },
}

export default function HelperEmotionalLaborCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(12).fill(false))

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
  const barPct = Math.round((score / 12) * 100)

  return (
    <ArticleLayout
      title="感情労働の消耗度チェック｜支援職のための12項目"
      description="感情を抑えることで消耗していませんか？支援職に多い感情労働の疲れをセルフチェックで確認し、次のケアにつなげましょう。"
      url="https://ishizue-site-ker9.vercel.app/articles/helper-emotional-labor-check"
      date="2026-03-29"
      audio="/audio/helper-emotional-labor-check.mp3"
    >
      <style>{`
        .score-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .score-label { font-size: 0.875rem; color: #888; }
        .score-number { font-size: 1.5rem; font-weight: 600; color: #222; }
        .score-total { font-size: 0.875rem; color: #aaa; font-weight: 400; }
        .bar-bg { background: #f0f0f0; border-radius: 99px; height: 6px; overflow: hidden; margin-bottom: 1.5rem; }
        .bar-fill { height: 100%; border-radius: 99px; transition: width 0.3s ease, background-color 0.3s ease; }
        .bar-low { background-color: #4caf7d; }
        .bar-mid { background-color: #f5a623; }
        .bar-high { background-color: #e05252; }
        .checklist { border: 1px solid #ececec; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; }
        .check-item { display: flex; align-items: flex-start; gap: 12px; padding: 13px 16px; cursor: pointer; border-bottom: 1px solid #f5f5f5; transition: background 0.1s; user-select: none; }
        .check-item:last-child { border-bottom: none; }
        .check-item:hover { background: #fafafa; }
        .check-item.checked { background: #f7fbff; }
        .checkbox { width: 20px; height: 20px; min-width: 20px; border: 1.5px solid #ddd; border-radius: 5px; margin-top: 1px; display: flex; align-items: center; justify-content: center; transition: all 0.15s; background: #fff; }
        .check-item.checked .checkbox { background: #3b82f6; border-color: #3b82f6; }
        .checkmark { display: none; width: 10px; height: 6px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px); }
        .check-item.checked .checkmark { display: block; }
        .item-text { font-size: 0.9375rem; line-height: 1.6; color: #333; transition: color 0.15s; margin: 0; }
        .check-item.checked .item-text { color: #999; }
        .result-box { border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 1.5rem; border: 1.5px solid; }
        .result-low { background: #f0faf5; border-color: #a8dfc4; }
        .result-mid { background: #fffbf0; border-color: #fad58a; }
        .result-high { background: #fff5f5; border-color: #f5b8b8; }
        .result-score-label { font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 0.4rem; }
        .result-low .result-score-label { color: #2d8a5e; }
        .result-mid .result-score-label { color: #b07d1a; }
        .result-high .result-score-label { color: #c0392b; }
        .result-title { font-size: 1.0625rem; font-weight: 600; margin: 0 0 0.75rem; color: #222; }
        .result-message { font-size: 0.9rem; line-height: 1.75; color: #555; margin: 0; }
        .next-section-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #aaa; margin: 1.5rem 0 0.75rem; }
        .next-link { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border: 1px solid #ececec; border-radius: 8px; text-decoration: none; color: #333; font-size: 0.9rem; margin-bottom: 8px; background: #fff; transition: background 0.1s, border-color 0.1s; }
        .next-link:hover { background: #f9f9f9; border-color: #ddd; }
        .next-link-arrow { color: #bbb; font-size: 1rem; flex-shrink: 0; margin-left: 8px; }
        .cta-button { display: block; width: 100%; padding: 14px 20px; margin-top: 12px; background: #2c5f9e; color: #fff; border: none; border-radius: 8px; font-size: 0.9375rem; font-weight: 600; text-align: center; cursor: pointer; text-decoration: none; transition: background 0.15s; }
        .cta-button:hover { background: #1e4a7e; }
        .disclaimer { font-size: 0.8125rem; color: #aaa; line-height: 1.6; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
      `}</style>

      <p>
        支援職では、自分の感情を抑えながら利用者に寄り添うことが日常的に求められます。
        こうした「感情を管理する労働」を感情労働と呼びます。
      </p>
      <p>
        感情労働の消耗は、体の疲れとは違い、自分では気づきにくいのが特徴です。
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      <h2>感情労働の消耗度チェック（12項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">{score}<span className="score-total"> / 12</span></span>
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
            <p className="result-score-label">{score}項目 / 12項目</p>
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

      <h2>感情労働が支援職に与える影響</h2>
      <div className="card">
        <p className="font-medium mb-4">感情労働の消耗が続くと、次のような影響が出やすくなります。</p>
        <ul className="space-y-2">
          <li>感情の麻痺・無気力感</li>
          <li>共感力の低下（利用者への関心が薄れる）</li>
          <li>バーンアウトへの移行</li>
          <li>プライベートでの人間関係への影響</li>
        </ul>
      </div>
      <p>
        感情労働の消耗は、意識的にケアしないと回復しにくいのが特徴です。
      </p>
      <p>
        「感情を持たないようにする」のではなく、「感情を安全に出せる場所を持つ」ことが回復の鍵になります。
      </p>
      <p className="disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>
    </ArticleLayout>
  )
}

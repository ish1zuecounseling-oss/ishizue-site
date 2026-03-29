import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const checkItems = [
  "利用者の問題が仕事後も頭から離れない",
  "帰宅しても気持ちが仕事モードのままである",
  "利用者のことを考えて眠れないことがある",
  "仕事の疲れが以前より抜けにくくなった",
  "利用者のつらい話を聞くと気持ちが重くなる",
  "「自分が何とかしなければ」と感じることが多い",
  "支援がうまくいかないと無力感を感じる",
  "利用者の問題を自分の責任のように感じる",
  "断ることに罪悪感を感じる",
  "仕事のことを家族や友人に話すことが増えた",
  "以前よりイライラしやすくなった",
  "小さなことで疲れを感じやすい",
  "利用者の問題に感情的に引き込まれる",
  "ニュースや出来事を利用者と重ねてしまう",
  "人の悩みを聞くことがしんどいと感じる",
  "仕事へのモチベーションが下がってきた",
  "自分の感情が麻痺しているように感じる",
  "以前より共感することが難しくなった",
  "休んでも疲れが回復しにくい",
  "支援の仕事を続けられないかもしれないと感じる",
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 5) return "low"
  if (score <= 10) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "比較的安定している状態です",
    color: "result-low",
    message:
      "今のうちにセルフケアの習慣を整えておくことが、長く働き続けるための土台になります。まずは自分の回復パターンを知ることから始めてみましょう。",
    links: [
      { href: "/articles/helper-rest-importance", text: "休むことの大切さ｜支援職のための休息の考え方" },
      { href: "/articles/helper-stress-coping", text: "自分に合ったストレスコーピングを見つける" },
      { href: "/articles/helper-boundary", text: "境界線の引き方｜利用者を思いすぎていませんか" },
    ],
    cta: null,
  },
  mid: {
    label: "疲労が蓄積している可能性があります",
    color: "result-mid",
    message:
      "心のサインが出はじめています。バーンアウトに進む前に、今の状態を整理してみましょう。一人で抱え込まず、まず自分の状態を知ることが大切です。",
    links: [
      { href: "/articles/helper-burnout", text: "バーンアウトとは｜支援職に起こる燃え尽きの正体" },
      { href: "/articles/helper-burnout-signs", text: "バーンアウトのサインを見逃さないために" },
      { href: "/articles/helper-empathy-fatigue", text: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
    ],
    cta: null,
  },
  high: {
    label: "共感疲労が強くなっている可能性があります",
    color: "result-high",
    message:
      "一人で抱えるには限界を超えているかもしれません。今感じている苦しさは、あなたが弱いからではなく、支援職として真剣に向き合ってきた証です。専門的なサポートを検討する時期です。",
    links: [
      { href: "/articles/helper-burnout-recovery", text: "バーンアウトから回復するには" },
      { href: "/articles/helper-counseling-resistance", text: "カウンセリングへの抵抗感｜受けていいか迷う人へ" },
    ],
    cta: {
      href: "/contact",
      text: "支援職専門カウンセリングに相談する",
    },
  },
}

export default function EmpathyFatigueCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(20).fill(false))

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
  const barPct = Math.round((score / 20) * 100)

  return (
    <ArticleLayout
      title="共感疲労セルフチェック｜支援職のための20項目"
      description="支援職に起こりやすい共感疲労（Compassion Fatigue）の状態を確認するためのセルフチェックです。"
      url="https://ishizue-site-ker9.vercel.app/articles/helper-empathy-check"
      date="2026-03-22"
      audio="/audio/helper-fatigue-check.mp3"
    >
      <style>{`
        .check-intro {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .score-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .score-label {
          font-size: 0.875rem;
          color: #888;
        }
        .score-number {
          font-size: 1.5rem;
          font-weight: 600;
          color: #222;
        }
        .score-total {
          font-size: 0.875rem;
          color: #aaa;
          font-weight: 400;
        }
        .bar-bg {
          background: #f0f0f0;
          border-radius: 99px;
          height: 6px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .bar-fill {
          height: 100%;
          border-radius: 99px;
          transition: width 0.3s ease, background-color 0.3s ease;
        }
        .bar-low { background-color: #4caf7d; }
        .bar-mid { background-color: #f5a623; }
        .bar-high { background-color: #e05252; }
        .checklist {
          border: 1px solid #ececec;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 13px 16px;
          cursor: pointer;
          border-bottom: 1px solid #f5f5f5;
          transition: background 0.1s;
          user-select: none;
        }
        .check-item:last-child {
          border-bottom: none;
        }
        .check-item:hover {
          background: #fafafa;
        }
        .check-item.checked {
          background: #f7fbff;
        }
        .checkbox {
          width: 20px;
          height: 20px;
          min-width: 20px;
          border: 1.5px solid #ddd;
          border-radius: 5px;
          margin-top: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          background: #fff;
        }
        .check-item.checked .checkbox {
          background: #3b82f6;
          border-color: #3b82f6;
        }
        .checkmark {
          display: none;
          width: 10px;
          height: 6px;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #fff;
          transform: rotate(-45deg) translateY(-1px);
        }
        .check-item.checked .checkmark {
          display: block;
        }
        .item-text {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #333;
          transition: color 0.15s;
          margin: 0;
        }
        .check-item.checked .item-text {
          color: #999;
        }
        .result-box {
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
          border: 1.5px solid;
        }
        .result-low {
          background: #f0faf5;
          border-color: #a8dfc4;
        }
        .result-mid {
          background: #fffbf0;
          border-color: #fad58a;
        }
        .result-high {
          background: #fff5f5;
          border-color: #f5b8b8;
        }
        .result-score-label {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }
        .result-low .result-score-label { color: #2d8a5e; }
        .result-mid .result-score-label { color: #b07d1a; }
        .result-high .result-score-label { color: #c0392b; }
        .result-title {
          font-size: 1.0625rem;
          font-weight: 600;
          margin: 0 0 0.75rem;
          color: #222;
        }
        .result-message {
          font-size: 0.9rem;
          line-height: 1.75;
          color: #555;
          margin: 0;
        }
        .next-section-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #aaa;
          margin: 1.5rem 0 0.75rem;
        }
        .next-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border: 1px solid #ececec;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          font-size: 0.9rem;
          margin-bottom: 8px;
          background: #fff;
          transition: background 0.1s, border-color 0.1s;
        }
        .next-link:hover {
          background: #f9f9f9;
          border-color: #ddd;
        }
        .next-link-arrow {
          color: #bbb;
          font-size: 1rem;
          flex-shrink: 0;
          margin-left: 8px;
        }
        .cta-button {
          display: block;
          width: 100%;
          padding: 14px 20px;
          margin-top: 12px;
          background: #2c5f9e;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 0.9375rem;
          font-weight: 600;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.15s;
        }
        .cta-button:hover {
          background: #1e4a7e;
        }
        .disclaimer {
          font-size: 0.8125rem;
          color: #aaa;
          line-height: 1.6;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f0;
        }
      `}</style>

      <p>
        支援職では、利用者の苦しみや困難に長く寄り添うことで、
        心理的な疲労が蓄積することがあります。
      </p>
      <p>
        こうした状態は心理学では「共感疲労（Compassion Fatigue）」と呼ばれ、
        対人援助職に起こりやすい心理的負荷として知られています。
      </p>
      <p>
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      <h2>共感疲労セルフチェック（20項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 20</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 5 ? "bar-low" : score <= 10 ? "bar-mid" : "bar-high"}`}
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
            <div className="checkbox">
              <div className="checkmark" />
            </div>
            <p className="item-text">{text}</p>
          </div>
        ))}
      </div>

      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 20項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          <p className="next-section-label">次のステップ</p>

          {result.links.map((link) => (
            <a key={link.href} href={link.href} className="next-link">
              {link.text}
              <span className="next-link-arrow">→</span>
            </a>
          ))}

          {result.cta && (
            <a href={result.cta.href} className="cta-button">
              {result.cta.text} →
            </a>
          )}
        </div>
      )}

      <h2>支援職に起こる心理的背景</h2>
      <div className="card">
        <p className="font-medium mb-4">
          支援職では次のような構造が重なりやすいとされています。
        </p>
        <ul className="space-y-2">
          <li>感情労働による心理的消耗</li>
          <li>共感疲労（二次受傷）</li>
          <li>境界線（バウンダリー）の曖昧さ</li>
        </ul>
      </div>
      <p>
        支援の仕事は人の人生に深く関わる大切な仕事です。
      </p>
      <p>
        その一方で、支援者自身の心にも負担がかかりやすい特徴があります。
      </p>
      <p>
        支援を続けるためには、
        利用者だけでなく「支援する側のケア」も重要になります。
      </p>

      <p className="disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>
    </ArticleLayout>
  )
}

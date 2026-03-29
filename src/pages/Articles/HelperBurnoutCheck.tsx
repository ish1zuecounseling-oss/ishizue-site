import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const checkItems = [
  "以前は好きだった仕事に、やりがいを感じなくなった",
  "朝、仕事に行くのがつらいと感じることが増えた",
  "利用者や同僚に対して、以前より冷たくなったと感じる",
  "仕事をこなすだけで精一杯で、丁寧にできていない気がする",
  "休日も仕事のことが頭から離れず、休めた気がしない",
  "小さなミスや指摘で、強く落ち込むようになった",
  "達成感や手応えをほとんど感じられなくなった",
  "職場の人と話すのが億劫になってきた",
  "感情が平坦になり、喜怒哀楽が薄くなった気がする",
  "「どうせ何をやっても変わらない」と感じることがある",
  "体の疲れがとれず、慢性的にだるい",
  "集中力や判断力が低下していると感じる",
  "仕事上の責任を果たすことへの恐怖や回避感がある",
  "利用者のことを「面倒だ」と感じてしまい、自己嫌悪になる",
  "職場での自分の存在価値がわからなくなってきた",
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 4) return "low"
  if (score <= 9) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "今のところバーンアウトのリスクは低い状態です",
    color: "result-low",
    message:
      "現時点では安定しています。ただし支援職は消耗が蓄積しやすい仕事です。今のうちにセルフケアの習慣を整えておくことが予防につながります。",
    links: [
      { href: "/articles/helper-rest-importance", text: "休むことの大切さ｜支援職のための休息の考え方" },
      { href: "/articles/helper-stress-coping", text: "自分に合ったストレスコーピングを見つける" },
      { href: "/articles/helper-boundary", text: "境界線の引き方｜利用者を思いすぎていませんか" },
    ],
    cta: null,
  },
  mid: {
    label: "バーンアウトの初期サインが出ている可能性があります",
    color: "result-mid",
    message:
      "疲労や消耗のサインが積み重なっています。今の状態を放置すると、回復に時間がかかる本格的なバーンアウトに進む可能性があります。まず自分の状態を正直に見つめてみましょう。",
    links: [
      { href: "/articles/helper-burnout", text: "バーンアウトとは｜支援職に起こる燃え尽きの正体" },
      { href: "/articles/helper-burnout-signs", text: "バーンアウトのサインを見逃さないために" },
      { href: "/articles/helper-burnout-recovery", text: "バーンアウトから回復するには" },
    ],
    cta: null,
  },
  high: {
    label: "バーンアウトが進んでいる可能性があります",
    color: "result-high",
    message:
      "多くのサインが当てはまっています。これはあなたが弱いからではなく、限界まで頑張ってきた結果です。一人で抱え込まず、専門的なサポートを受けることを強くお勧めします。",
    links: [
      { href: "/articles/helper-burnout-recovery", text: "バーンアウトから回復するには" },
      { href: "/articles/helper-burnout-vs-depression", text: "バーンアウトとうつの違い｜見分け方を知っておく" },
      { href: "/articles/helper-counseling-resistance", text: "カウンセリングへの抵抗感｜受けていいか迷う人へ" },
    ],
    cta: {
      href: "/contact",
      text: "支援職専門カウンセリングに相談する",
    },
  },
}

export default function HelperBurnoutCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(15).fill(false))

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
  const barPct = Math.round((score / 15) * 100)

  return (
    <ArticleLayout
      title="バーンアウト（燃え尽き症候群）セルフチェック｜支援職のための15項目"
      description="介護・福祉・保育士など支援職に多いバーンアウトの状態を確認するセルフチェックです。当てはまる項目を選んで、今の状態を把握しましょう。"
      url="https://ishizue-site-ker9.vercel.app/articles/helper-burnout-check"
      date="2026-03-29"
      audio="/audio/helper-burnout-check.mp3"
    >
      <style>{`
        .check-intro { font-size: 0.95rem; color: #666; margin-bottom: 1.5rem; line-height: 1.7; }
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
        支援職では、長期間にわたって感情を使い続けることで、徐々に心のエネルギーが枯渇していきます。
        これを「バーンアウト（燃え尽き症候群）」と呼びます。
      </p>
      <p>
        バーンアウトは突然起こるのではなく、じわじわと進行するのが特徴です。
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      <h2>バーンアウトセルフチェック（15項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">{score}<span className="score-total"> / 15</span></span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 4 ? "bar-low" : score <= 9 ? "bar-mid" : "bar-high"}`}
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
            <p className="result-score-label">{score}項目 / 15項目</p>
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

      <h2>バーンアウトが支援職に起こりやすい理由</h2>
      <div className="card">
        <p className="font-medium mb-4">支援職には次のような特有のリスク要因があります。</p>
        <ul className="space-y-2">
          <li>感情労働による継続的な心理的消耗</li>
          <li>成果が見えにくい・報われにくい仕事構造</li>
          <li>「助けなければ」という責任感の強さ</li>
          <li>人手不足による業務過多</li>
        </ul>
      </div>
      <p>
        バーンアウトは意志の弱さや能力不足が原因ではありません。
        真剣に仕事と向き合ってきたからこそ起こる消耗です。
      </p>
      <p>
        早めに気づき、適切なケアをすることで回復は可能です。
      </p>
      <p className="disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>
    </ArticleLayout>
  )
}

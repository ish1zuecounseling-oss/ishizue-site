import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const checkItems = [
  "仕事を辞めたいと思うことが、週に何度もある",
  "職場に行く理由が、義務感や惰性だけになっている",
  "以前感じていた仕事へのやりがいを、ほとんど思い出せない",
  "心身の不調（不眠・頭痛・食欲不振など）が続いている",
  "「あと〇年だけ我慢しよう」と期限を決めて耐えている",
  "職場環境が改善される見込みを感じられない",
  "今の職場にいることで、自分が変わっていく気がして怖い",
  "休日も仕事のことを考えて、ゆっくり休めていない",
  "自分の成長やキャリアが、今の職場では望めないと感じる",
  "信頼できる人に「辞めた方がいい」と言われたことがある",
  "身体的な限界（出勤できない・涙が止まらない等）を感じたことがある",
  "今の仕事を続けることで、利用者への支援の質が落ちていると感じる",
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
    label: "今すぐ辞める必要はないかもしれませんが、気持ちを整理する時期です",
    color: "result-low",
    message:
      "「辞めたい」という気持ちはあるものの、今すぐ決断を急ぐ状況ではない可能性があります。まずは今感じている不満や疲れの原因を整理してみましょう。",
    links: [
      { href: "/articles/helper-career-burnout", text: "辞めたい・続けるか悩む｜支援職のキャリア判断の前に" },
      { href: "/articles/helper-burnout", text: "バーンアウトとは｜支援職に起こる燃え尽きの正体" },
      { href: "/articles/helper-stress-coping", text: "自分に合ったストレスコーピングを見つける" },
    ],
    cta: null,
  },
  mid: {
    label: "転職・退職を真剣に検討すべき時期に来ている可能性があります",
    color: "result-mid",
    message:
      "複数のサインが重なっています。「もう少し我慢すれば」と先延ばしにすることで、心身の回復が遅れるリスクがあります。自分の気持ちと向き合い、選択肢を整理してみましょう。",
    links: [
      { href: "/articles/helper-career-burnout", text: "辞めたい・続けるか悩む｜支援職のキャリア判断の前に" },
      { href: "/articles/helper-quit-guilt", text: "支援職を辞めることへの罪悪感｜手放すための心理整理" },
      { href: "/articles/helper-career-dead-end", text: "福祉職のキャリア閉塞感｜「ここにいていいのか」と感じたら" },
    ],
    cta: null,
  },
  high: {
    label: "心身を守るために、今すぐ行動を起こすことが必要な状態です",
    color: "result-high",
    message:
      "多くの限界サインが出ています。「利用者に申し訳ない」「迷惑をかけたくない」という気持ちは理解できますが、今一番大切にすべきはあなた自身の心と体です。一人で抱え込まず、まず誰かに話してみましょう。",
    links: [
      { href: "/articles/helper-quit-guilt", text: "支援職を辞めることへの罪悪感｜手放すための心理整理" },
      { href: "/articles/helper-burnout-recovery", text: "バーンアウトから回復するには" },
      { href: "/articles/helper-counseling-resistance", text: "カウンセリングへの抵抗感｜受けていいか迷う人へ" },
    ],
    cta: {
      href: "/contact",
      text: "支援職専門カウンセリングに相談する",
    },
  },
}

export default function HelperQuitTimingCheck() {
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
      title="辞め時チェック｜支援職が転職・退職を考えるべきサイン12項目"
      description="「辞めたいけど、辞めていいのか分からない」支援職のための辞め時チェック。今の状態を客観的に確認して、次の一歩を考えましょう。"
      url="https://www.ishizue-counseling.jp/articles/helper-quit-timing-check"
      date="2026-03-29"
      audio="/audio/helper-quit-timing-check.mp3"
    >
<p>
        「辞めたい」という気持ちはあるけれど、「本当に辞めていいのか」「もう少し頑張れるのか」が分からない。
        そう感じている支援職の方は少なくありません。
      </p>
      <p>
        このチェックは、今の自分の状態を客観的に確認するためのものです。
        当てはまると感じる項目をタップしてください。
      </p>

      <h2>辞め時セルフチェック（12項目）</h2>

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

      <h2>「辞める」は逃げではない</h2>
      <div className="card">
        <p className="font-medium mb-4">支援職が退職をためらう理由として、よく聞かれるものがあります。</p>
        <ul className="space-y-2">
          <li>「利用者に申し訳ない」という罪悪感</li>
          <li>「自分だけ逃げていいのか」という感覚</li>
          <li>「他の仕事に就けるか不安」というキャリアへの不安</li>
          <li>「もう少し頑張れば変わるかも」という期待</li>
        </ul>
      </div>
      <p>
        こうした感情はとても自然なものです。しかし、自分の心身を犠牲にし続けることは、
        長期的には利用者や職場への貢献にもつながりません。
      </p>
      <p>
        「辞める」という選択は、自分の人生を守るための大切な判断です。
      </p>
      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        転職・退職の判断については、専門家への相談もあわせてご検討ください。
      </p>
    </ArticleLayout>
  )
}

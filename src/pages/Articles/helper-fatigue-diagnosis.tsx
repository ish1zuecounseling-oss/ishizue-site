import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

const questions = [
  { id: 1, text: "朝起きた時点で、すでに疲れている感じがある" },
  { id: 2, text: "休日でも疲れが回復しない、または回復が遅くなった" },
  { id: 3, text: "人と関わることが、以前よりしんどくなった" },
  { id: 4, text: "利用者・患者のことが、仕事後も頭から離れない" },
  { id: 5, text: "「自分が何とかしなければ」という感覚が強い" },
  { id: 6, text: "以前感じていたやりがいや喜びが、薄れてきた" },
  { id: 7, text: "イライラしやすくなった、または逆に何も感じなくなった" },
  { id: 8, text: "集中力が落ち、ミスや忘れが増えた" },
  { id: 9, text: "「もう限界かもしれない」と思うことがある" },
  { id: 10, text: "仕事のことを考えるだけで、気持ちが重くなる" },
]

type FatigueType = "brain" | "emotional" | "burnout" | null

function getType(answers: boolean[]): FatigueType {
  const score = answers.filter(Boolean).length
  if (score === 0) return null
  // 感情系（Q3-Q7）が多い場合は感情疲労
  const emotionalScore = [2, 3, 4, 5, 6].filter(i => answers[i]).length
  if (score >= 7 || answers[8]) return "burnout"
  if (emotionalScore >= 3) return "emotional"
  return "brain"
}

const results = {
  brain: {
    label: "脳疲労タイプ",
    color: "#8FAF9F",
    bg: "#f0f7f4",
    border: "#c5ddd5",
    description: "情報過多や睡眠不足による脳の疲労が蓄積している状態です。適切な休息と情報量のコントロールで回復しやすい段階です。",
    detail: [
      "処理しきれない情報が脳に負荷をかけている",
      "「休んだつもり」でも脳が休めていない可能性がある",
      "生活習慣の調整で回復できる段階",
    ],
    cta: {
      strength: "weak",
      primary: { label: "脳疲労の回復方法を見る", path: "/articles/helper-brain-fatigue" },
      secondary: { label: "脳疲労チェック（詳細版）", path: "/articles/helper-brain-fatigue-check" },
    },
    warning: null,
  },
  emotional: {
    label: "感情疲労タイプ",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    description: "感情労働・共感疲労による消耗が蓄積している状態です。支援職に特有の疲れ方で、「ただ休む」だけでは回復しにくい段階です。",
    detail: [
      "感情を管理し続けることによる消耗が蓄積している",
      "共感疲労が始まっている可能性がある",
      "消耗の構造を理解して対処することが必要",
    ],
    cta: {
      strength: "mid",
      primary: { label: "今の共感疲労の程度を確認する", path: "/articles/helper-empathy-check" },
      secondary: { label: "「自分を責めてしまう」に当てはまる方へ", path: "/articles/helper-self-blame-landing" },
    },
    warning: null,
  },
  burnout: {
    label: "バーンアウト危険域",
    color: "#9f3a3a",
    bg: "#fef2f2",
    border: "#fecaca",
    description: "バーンアウト（燃え尽き症候群）に近い、または既に入っている可能性があります。この状態で頑張り続けると、回復に時間がかかる可能性があります。",
    detail: [
      "情緒的消耗感が限界に近づいている",
      "感情の麻痺・脱人格化が始まっている可能性",
      "一人での回復に限界がある段階",
    ],
    cta: {
      strength: "strong",
      primary: { label: "今の状態を整理してみる（初回無料）", path: "/#contact" },
      secondary: { label: "辞めるべきか迷っている方はこちら", path: "/articles/helper-want-to-quit-landing" },
    },
    warning: "この状態で頑張り続けると、回復に時間がかかる可能性があります。",
  },
}

export default function HelperFatigueDiagnosis() {
  const [answers, setAnswers] = useState<boolean[]>(new Array(10).fill(false))
  const [submitted, setSubmitted] = useState(false)

  const toggle = (i: number) => {
    if (submitted) return
    setAnswers(prev => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score = answers.filter(Boolean).length
  const type = getType(answers)
  const result = type ? results[type] : null

  return (
    <ArticleLayout
      title="その疲れ、3タイプのどれ？｜支援職のための疲れの原因診断"
      description="「休んでも疲れが取れない」——その疲れには種類があります。脳疲労・感情疲労・バーンアウトの3タイプを10問で診断し、あなたに合った対処法に導きます。"
      url="https://www.ishizue-counseling.jp/articles/helper-fatigue-diagnosis"
      date="2026-04-26"
      tags={["burnout", "compassion", "check"]}
    >

      {/* 共感（入口） */}
      <p>
        「寝ても疲れが抜けない」「休日でも回復しない」「仕事のことを考えるだけで重くなる」——<br />
        その疲れ、<strong>種類によって対処法が変わります</strong>。
      </p>
      <p>
        支援職の疲れには大きく3つのタイプがあります。
        10問に答えるだけで、今の状態に合った対処法がわかります。
      </p>

      {/* 3タイプの説明 */}
      <div className="my-4 grid grid-cols-3 gap-2">
        {[
          { type: "脳疲労", color: "#8FAF9F", desc: "情報過多・休息不足" },
          { type: "感情疲労", color: "#d97706", desc: "共感疲労・感情労働" },
          { type: "バーンアウト", color: "#9f3a3a", desc: "燃え尽き・限界域" },
        ].map(t => (
          <div key={t.type} className="p-3 rounded-xl text-center" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
            <p className="text-[10px] font-medium" style={{ color: t.color }}>{t.type}</p>
            <p className="text-[9px] text-stone-500 mt-0.5">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* 診断 */}
      <h2>診断（10問）</h2>
      <p className="text-sm text-stone-600 mb-4">当てはまるものをすべて選んでください。</p>

      {/* スコアバー */}
      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">{score}<span className="score-total"> / 10</span></span>
      </div>
      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{
            width: `${score * 10}%`,
            background: score <= 3 ? "#8FAF9F" : score <= 6 ? "#d97706" : "#9f3a3a",
          }}
        />
      </div>

      <div className="checklist">
        {questions.map((q, i) => (
          <div
            key={q.id}
            className={`check-item${answers[i] ? " checked" : ""}${submitted ? " pointer-events-none" : ""}`}
            onClick={() => toggle(i)}
            role="checkbox"
            aria-checked={answers[i]}
            tabIndex={0}
            onKeyDown={(e) => e.key === " " && toggle(i)}
          >
            <div className="checkbox"><div className="checkmark" /></div>
            <p className="item-text">{q.text}</p>
          </div>
        ))}
      </div>

      {/* 結果表示 */}
      {score > 0 && result && (
        <div className="mt-6">
          {/* タイプ判定 */}
          <div
            className="p-5 rounded-2xl mb-4"
            style={{ background: result.bg, border: `1px solid ${result.border}` }}
          >
            <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-1" style={{ color: result.color }}>
              診断結果
            </p>
            <p className="text-lg font-bold mb-2" style={{ color: result.color }}>
              {result.label}
            </p>
            <p className="text-sm text-stone-700 leading-relaxed mb-3">
              {result.description}
            </p>
            <ul className="space-y-1">
              {result.detail.map(d => (
                <li key={d} className="flex items-start gap-2 text-xs text-stone-600">
                  <span style={{ color: result.color }}>・</span>{d}
                </li>
              ))}
            </ul>
            {result.warning && (
              <div className="mt-3 p-3 rounded-lg" style={{ background: "#fff1f1", border: "1px solid #fecaca" }}>
                <p className="text-xs font-medium" style={{ color: "#9f3a3a" }}>⚠️ {result.warning}</p>
              </div>
            )}
          </div>

          {/* CTA（タイプ別） */}
          <div
            className="p-5 rounded-2xl"
            style={{ background: type === "burnout" ? "#2C1F14" : "#f5f0eb", border: type === "burnout" ? "none" : "1px solid #e8ddd4" }}
          >
            <p
              className="text-sm font-medium mb-3"
              style={{ color: type === "burnout" ? "#f5f0eb" : "#2C1F14", fontFamily: "'Noto Serif JP', serif" }}
            >
              {type === "brain" && "まず取り組むべきこと"}
              {type === "emotional" && "今の状態を深く確認する"}
              {type === "burnout" && "一人で抱え込まないでください"}
            </p>

            {/* プライマリCTA */}
            {result.cta.primary.path.startsWith("/articles") ? (
              <Link
                to={result.cta.primary.path}
                className="block text-center py-3 rounded-xl text-sm font-medium text-white mb-2 transition-all"
                style={{ background: result.color, textDecoration: "none" }}
              >
                {result.cta.primary.label}
              </Link>
            ) : (
              <a
                href={result.cta.primary.path}
                className="block text-center py-3 rounded-xl text-sm font-medium text-white mb-2"
                style={{ background: "#7EB8A4", textDecoration: "none" }}
              >
                {result.cta.primary.label}
              </a>
            )}

            {/* セカンダリCTA */}
            <Link
              to={result.cta.secondary.path}
              className="block text-center py-2.5 rounded-xl text-xs font-medium transition-all"
              style={{
                background: type === "burnout" ? "rgba(255,255,255,0.1)" : "white",
                color: type === "burnout" ? "#a8967e" : "#6b5a45",
                border: type === "burnout" ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e8ddd4",
                textDecoration: "none",
              }}
            >
              {result.cta.secondary.label}
            </Link>

            {type === "burnout" && (
              <p className="text-[10px] text-stone-500 text-center mt-2">
                ※まだ決めなくてOKです。今の状態を言語化するだけでもOKです。
              </p>
            )}
          </div>
        </div>
      )}

      {/* 3タイプの詳細説明 */}
      <h2>3つの疲れタイプとその特徴</h2>

      <div className="card">
        <p className="text-sm font-medium mb-2" style={{ color: "#8FAF9F" }}>タイプA：脳疲労</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          情報過多・睡眠不足・マルチタスクによる脳の機能低下です。
          「頭が回らない」「集中できない」「休んでも疲れが取れない気がする」が特徴。
          生活習慣の改善と、意識的なデジタルデトックスで回復しやすい段階です。
        </p>
        <p className="text-xs text-stone-500 mt-2">
          → <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2">脳疲労の回復方法を読む</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium mb-2" style={{ color: "#d97706" }}>タイプB：感情疲労（支援職特有）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情労働・共感疲労による消耗です。
          「人の話を聞くのがしんどくなった」「やりがいが薄れた」「仕事モードが抜けない」が特徴。
          「ただ休む」だけでは回復しにくく、消耗の構造を理解した対処が必要です。
        </p>
        <p className="text-xs text-stone-500 mt-2">
          → <Link to="/articles/helper-empathy-check" className="underline underline-offset-2">共感疲労チェックで今の状態を確認する</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium mb-2" style={{ color: "#9f3a3a" }}>タイプC：バーンアウト危険域</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽き症候群に近い、または既に入っている可能性のある状態です。
          「何も感じない」「限界かもしれない」「回復しない」が特徴。
          一人での回復には限界があります。外部のサポートを活用することが必要な段階です。
        </p>
        <p className="text-xs text-stone-500 mt-2">
          → <Link to="/articles/helper-want-to-quit-landing" className="underline underline-offset-2">辞めるべきか迷っている方へ</Link>
        </p>
      </div>

      <p className="check-disclaimer text-xs text-stone-400 mt-4">
        この診断は医学的な診断ではありません。今の状態に気づくための目安として活用してください。
      </p>

    </ArticleLayout>
  )
}

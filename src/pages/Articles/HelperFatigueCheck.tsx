import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

// ----------------------------------------------------------------
// Types & Constants
// ----------------------------------------------------------------
type Answer = "always" | "sometimes" | "rarely" | "never" | null

const ANSWER_OPTIONS: { value: Answer; label: string; score: number }[] = [
  { value: "always",    label: "よくある",      score: 3 },
  { value: "sometimes", label: "ときどきある",  score: 2 },
  { value: "rarely",    label: "あまりない",     score: 1 },
  { value: "never",     label: "ほとんどない",  score: 0 },
]

const CATEGORIES = [
  {
    label: "身体的消耗",
    description: "からだのサイン",
    color: "blue",
    items: [
      "休日明けでも、疲れが取れていない感覚がある",
      "睡眠が浅い、または夜中に目が覚めることが増えた",
      "頭痛・肩こり・胃の不調など、身体の不調が慢性化している",
      "朝、仕事に向かう前から身体が重く、気力がわかない",
      "食欲の変化（食べられない、または食べすぎる）がある",
      "仕事から帰ると、何もできないまま時間が過ぎることが多い",
      "以前より体調を崩しやすくなった、または回復に時間がかかる",
    ],
  },
  {
    label: "感情的消耗",
    description: "こころのサイン",
    color: "rose",
    items: [
      "利用者・患者・相談者の話を聞いた後、気持ちが重くなる",
      "以前は感じていた感動や喜びが、薄れてきた気がする",
      "些細なことでイライラしたり、涙が出やすくなった",
      "感情が麻痺しているような、何も感じられないような感覚がある",
      "仕事が終わっても、頭や気持ちが切り替わらない",
      "ふとしたときに、相手の言葉や場面が頭に浮かんでくる",
    ],
  },
  {
    label: "関係性の消耗",
    description: "つながりのサイン",
    color: "amber",
    items: [
      "プライベートでも人と関わることがしんどく感じる",
      "同僚・家族に対して、素っ気ない態度をとってしまうことがある",
      "支援している相手に対して、以前より冷淡になっている気がする",
      "誰かに相談したいのに、話せる相手がいないと感じる",
      "職場の人間関係に消耗して、支援そのものへの気力が残らない",
      "一人でいたい・関わりたくないという気持ちが強くなっている",
    ],
  },
  {
    label: "使命感・意味の消耗",
    description: "意味のサイン",
    color: "teal",
    items: [
      "この仕事を続ける意味が、最近わからなくなってきた",
      "「どうせ変わらない」「自分がやっても意味がない」と思うことが増えた",
      "以前は感じていた仕事へのやりがいや使命感が、薄れている",
      "「もう辞めたい」という気持ちが、以前より頻繁に浮かぶ",
      "自分が消耗していることに対して、罪悪感を感じる",
      "支援がうまくいかないとき、強く自分を責めてしまう",
    ],
  },
]

const TOTAL_ITEMS = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0)
const MAX_SCORE = TOTAL_ITEMS * 3

const COLOR_MAP: Record<string, {
  bg: string; border: string; text: string; bar: string; tag: string; selectedBtn: string
}> = {
  blue:  { bg: "bg-blue-50",   border: "border-blue-200",  text: "text-blue-700",  bar: "bg-blue-400",  tag: "bg-blue-100 text-blue-700",   selectedBtn: "bg-blue-600 text-white border-blue-600" },
  rose:  { bg: "bg-rose-50",   border: "border-rose-200",  text: "text-rose-700",  bar: "bg-rose-400",  tag: "bg-rose-100 text-rose-700",   selectedBtn: "bg-rose-600 text-white border-rose-600" },
  amber: { bg: "bg-amber-50",  border: "border-amber-200", text: "text-amber-700", bar: "bg-amber-400", tag: "bg-amber-100 text-amber-700",  selectedBtn: "bg-amber-600 text-white border-amber-600" },
  teal:  { bg: "bg-teal-50",   border: "border-teal-200",  text: "text-teal-700",  bar: "bg-teal-400",  tag: "bg-teal-100 text-teal-700",   selectedBtn: "bg-teal-600 text-white border-teal-600" },
}

function getResult(score: number) {
  if (score <= 25) {
    return {
      label: "比較的安定した状態です",
      labelColor: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      barColor: "bg-emerald-400",
      message: "今のところ、大きな消耗のサインは少ない状態です。支援職の疲れは気づきにくいという特徴があります。定期的にセルフチェックを続けることが助けになります。",
      advice: [
        "引き続き自己ケアの習慣を意識しましょう",
        "定期的にセルフチェックで状態を確認しましょう",
        "休息の「質」にも目を向けてみましょう",
      ],
      cvBlock: null,
    }
  } else if (score <= 49) {
    return {
      label: "消耗のサインが出はじめています",
      labelColor: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      barColor: "bg-amber-400",
      message: "いくつかの領域で消耗のサインが見られます。「まだ大丈夫」と感じやすい段階ですが、この時期こそ意識的な休息と振り返りが大切です。一人で抱え込まないことが回復の鍵になります。",
      advice: [
        "意識的に休息の時間を確保しましょう",
        "信頼できる同僚やスーパーバイザーに話す機会を持ちましょう",
        "消耗のサインが強い領域を優先的にケアしましょう",
      ],
      cvBlock: {
        heading: "今の状態、一度整理してみませんか",
        body: "「まだ大丈夫」と思いながら、じわじわと消耗していることがあります。早めに気づいて整理するほど、回復しやすくなります。",
        buttonText: "支援職専門カウンセリングに相談する（初回無料）",
        href: "/#contact",
        sub: "勧誘なし ／ 1回のみでもOK ／ 送った後もキャンセル可",
      },
    }
  } else {
    return {
      label: "かなりの負荷がかかっています",
      labelColor: "text-rose-700",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      barColor: "bg-rose-400",
      message: "複数の領域にわたって消耗のサインが強く出ています。一人で抱え込まず、信頼できる人への相談や専門家へのサポートを検討することをおすすめします。",
      advice: [
        "スーパーバイザーや信頼できる同僚に早めに相談しましょう",
        "必要であればカウンセリングや医療機関への相談も選択肢です",
        "「自分が苦しいことへの罪悪感」を手放し、まず自分を労わることを優先してください",
      ],
      cvBlock: {
        heading: "一人で抱え込まなくていい",
        body: "「相談するほどじゃないかも」と思う気持ちは自然です。でもその感覚自体が、ケアラー疲労のサインであることが多いです。支援職専門のカウンセリングで、今の状態を整理してみましょう。",
        buttonText: "松本に、今の状態を整理してもらう（初回無料）",
        href: "/#contact",
        sub: "支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK",
      },
    }
  }
}

export default function HelperFatigueCheck() {
  const [answers, setAnswers] = useState<Answer[]>(Array(TOTAL_ITEMS).fill(null))
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (index: number, value: Answer) => {
    const next = [...answers]
    next[index] = value
    setAnswers(next)
    setSubmitted(false)
  }

  const answeredCount = answers.filter((a) => a !== null).length
  const allAnswered = answeredCount === TOTAL_ITEMS

  const totalScore = answers.reduce((sum, a) => {
    return sum + (ANSWER_OPTIONS.find((o) => o.value === a)?.score ?? 0)
  }, 0)

  const result = getResult(totalScore)
  const totalPct = Math.round((totalScore / MAX_SCORE) * 100)

  let offset = 0
  const categoryScores = CATEGORIES.map((cat) => {
    const scores = cat.items.map((_, i) => {
      const ans = answers[offset + i]
      return ANSWER_OPTIONS.find((o) => o.value === ans)?.score ?? 0
    })
    offset += cat.items.length
    const score = scores.reduce((a, b) => a + b, 0)
    const max = cat.items.length * 3
    return { label: cat.label, color: cat.color, score, max, pct: Math.round((score / max) * 100) }
  })

  const handleReset = () => {
    setAnswers(Array(TOTAL_ITEMS).fill(null))
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <ArticleLayout
      title="ケアラー疲労セルフチェック｜支援職・対人援助職のための25項目診断"
      description="ケアラー疲労（支援者疲労）の消耗度を、身体・感情・関係性・意味の4軸・25項目で確認できるセルフチェックです。福祉職・看護師・介護士・相談員・教員など支援する立場の方向けです。"
      url="https://ishizue-site-ker9.vercel.app/articles/helper-fatigue-check"
      date="2026-04-01"
    >
      <p>
        ケアラー疲労（支援者疲労）とは、福祉職・看護師・介護士・相談員・教員など、
        「支援する立場にある人」が継続的な関わりの中で蓄積していく、
        身体的・感情的・関係的・意味的な消耗のことです。
      </p>
      <p>
        支援者の疲れは「弱さ」や「向いていない証拠」ではありません。
        支援という仕事の構造そのものから生まれるものです。
        まず「今の自分の状態を知ること」が、回復への出発点になります。
      </p>
      <p>
        以下の25項目のセルフチェックで、4つの軸から消耗の状態を確認してみてください。
      </p>

      <h2>ケアラー疲労とは何か</h2>
      <p>
        ケアラー疲労は、共感疲労・バーンアウト・感情労働の消耗などを包括する概念です。
        「支援する人（helper / caregiver）」であれば、職種を問わず起こりえます。
      </p>
      <p>
        身体・感情・関係性・意味という4つの領域で消耗が進み、
        それぞれが互いに影響し合いながら悪化していく傾向があります。
      </p>

      <h2>ケアラー疲労セルフチェック：25項目</h2>
      <p>最近1〜2ヶ月の状態を振り返りながら、各項目に回答してください。</p>

      {/* チェックリスト */}
      {(() => {
        let globalIdx = 0
        return CATEGORIES.map((cat) => {
          const colors = COLOR_MAP[cat.color]
          const startIdx = globalIdx
          globalIdx += cat.items.length
          return (
            <div key={cat.label} style={{ marginBottom: "2rem" }}>
              <div className={`flex items-center gap-3 rounded-xl px-4 py-3 mb-4 ${colors.bg} ${colors.border} border`}>
                <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${colors.tag}`}>{cat.label}</span>
                <span className="text-xs text-gray-500">{cat.description}</span>
              </div>
              <div className="space-y-3">
                {cat.items.map((item, i) => {
                  const idx = startIdx + i
                  const currentAnswer = answers[idx]
                  return (
                    <div key={idx} className={`rounded-xl p-4 border transition-all ${currentAnswer !== null ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200"}`}>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                        <span className={`font-bold mr-2 ${colors.text}`}>Q{idx + 1}.</span>
                        {item}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {ANSWER_OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleAnswer(idx, opt.value)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${currentAnswer === opt.value ? colors.selectedBtn + " shadow-sm" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-800"}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
      })()}

      {/* 進捗・送信 */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", marginTop: "1.5rem" }}>
        <p className="text-sm text-gray-500">回答済み：{answeredCount} / {TOTAL_ITEMS} 項目</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-teal-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(answeredCount / TOTAL_ITEMS) * 100}%` }} />
        </div>
        <button
          onClick={() => {
            setSubmitted(true)
            setTimeout(() => { document.getElementById("result-section")?.scrollIntoView({ behavior: "smooth" }) }, 100)
          }}
          disabled={!allAnswered}
          className={`mt-3 px-10 py-3 rounded-full font-semibold text-sm transition-all ${allAnswered ? "bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          {allAnswered ? "結果を確認する" : "全項目に回答してください"}
        </button>
      </div>

      {/* 結果セクション */}
      {submitted && allAnswered && (
        <div id="result-section" style={{ marginTop: "2rem" }}>
          <h2>チェック結果</h2>

          {/* 総合判定 */}
          <div className={`rounded-2xl p-6 mb-6 border-2 ${result.bgColor} ${result.borderColor}`}>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className={`text-xl font-bold ${result.labelColor}`}>{result.label}</span>
              <span className="text-gray-400 text-sm">総合スコア：{totalScore} / {MAX_SCORE}（{totalPct}%）</span>
            </div>
            <div className="w-full bg-white/60 rounded-full h-2 mb-4">
              <div className={`h-2 rounded-full transition-all duration-700 ${result.barColor}`} style={{ width: `${totalPct}%` }} />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">{result.message}</p>
            <ul className="space-y-2">
              {result.advice.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* CV導線 */}
          {result.cvBlock && (
            <div style={{
              background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)",
              border: "1.5px solid rgba(143,175,159,0.35)",
              borderRadius: "14px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}>
              <p style={{ fontWeight: 600, fontSize: "1rem", color: "#222", marginBottom: "0.6rem" }}>{result.cvBlock.heading}</p>
              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}>{result.cvBlock.body}</p>
              <a href={result.cvBlock.href} style={{ display: "inline-block", background: "#1c1917", color: "#fff", borderRadius: "99px", padding: "13px 24px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", marginBottom: "0.6rem" }}>
                {result.cvBlock.buttonText}
              </a>
              <p style={{ fontSize: "0.75rem", color: "#aaa", margin: 0 }}>{result.cvBlock.sub}</p>
            </div>
          )}

          {/* 領域別スコア */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-5">領域別の消耗度</h3>
            <div className="space-y-5">
              {categoryScores.map((cat) => {
                const colors = COLOR_MAP[cat.color]
                const level = cat.pct >= 67 ? "高め" : cat.pct >= 34 ? "中程度" : "低め"
                const levelColor = cat.pct >= 67 ? "text-rose-600" : cat.pct >= 34 ? "text-amber-600" : "text-emerald-600"
                return (
                  <div key={cat.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.tag}`}>{cat.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold ${levelColor}`}>{level}</span>
                        <span className="text-xs text-gray-400">{cat.score} / {cat.max}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className={`h-2.5 rounded-full transition-all duration-700 ${colors.bar}`} style={{ width: `${cat.pct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-5 leading-relaxed">
              ※ スコアが高い領域ほど、その軸での消耗が強く出ています。特に「高め」の領域を優先的にケアすることが助けになります。
            </p>
          </div>

          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            ※このチェックリストは医療的な診断ツールではありません。気になる症状が2週間以上続く場合は、かかりつけ医・心療内科・精神科への相談もご検討ください。
          </p>
          <button onClick={handleReset} className="text-sm text-teal-600 underline hover:text-teal-800 transition-colors">
            もう一度チェックする
          </button>
        </div>
      )}

      <h2>なぜ「支援する人」は消耗しやすいのか</h2>
      <p>
        対人援助職は、感情をコントロールしながら働く「感情労働」を日常的に行っています。
        「つらくても穏やかに」という状態が続くと、自分の感情と表に出す感情の間にズレが生まれ、内側から静かに消耗していきます。
      </p>
      <p>
        支援者が相手の苦しみに共感し続けることで、自分自身も二次的に傷つく「共感疲労（二次受傷）」が生じることがあります。
        共感することは支援の核心ですが、蓄積すると感情の麻痺や過剰反応につながります。
      </p>
      <p>
        消耗に気づくこと自体が、回復への第一歩になります。
        自分を責めるより、まず「今の自分にはどんなケアが必要か」を問うことが、長く支援を続けるための土台になります。
      </p>

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>
    </ArticleLayout>
  )
}

import { useState, useEffect } from "react"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  データ定義                                                                  */
/* -------------------------------------------------------------------------- */

type Trait = "O" | "C" | "E" | "A" | "N"

const QUESTIONS: { id: number; trait: Trait; text: string }[] = [
  { id:  1, trait: "A", text: "波風を立てるくらいなら、自分が我慢すればいいと思うことが多い" },
  { id:  2, trait: "N", text: "他人の何気ない一言や、場の不穏な空気を過敏に察知して疲れてしまう" },
  { id:  3, trait: "C", text: "予定が狂ったり、サボったりすることに強い罪悪感がある" },
  { id:  4, trait: "O", text: "今の日常を捨てて、全く新しい世界へ行きたいという衝動がある" },
  { id:  5, trait: "E", text: "予定が空白だと、得体の知れない不安や焦りを感じることがある" },
  { id:  6, trait: "A", text: "他人の感情や要求を優先しすぎて、「自分がどうしたいか」がわからなくなる" },
  { id:  7, trait: "N", text: "まだ起きていない未来のトラブルを想像して、一人で消耗することが多い" },
  { id:  8, trait: "C", text: "自分の心身が疲れていても、決めたルールやタスクを優先してしまう" },
  { id:  9, trait: "O", text: "一つの場所や反復作業に留まり続けることに、息苦しさを感じる" },
  { id: 10, trait: "E", text: "一人で静かに自分と向き合う時間が、実は少し怖い（または避けている）" },
]

const CHOICES = [
  { value: 5, label: "非常に当てはまる" },
  { value: 4, label: "やや当てはまる" },
  { value: 3, label: "どちらとも言えない" },
  { value: 2, label: "あまり当てはまらない" },
  { value: 1, label: "全く当てはまらない" },
]

type Scores = Record<Trait, number>

/* -------------------------------------------------------------------------- */
/*  タイプ定義                                                                  */
/* -------------------------------------------------------------------------- */

type ResultType = {
  title: string
  sub:   string
  color: string
  body:  string
  reframe: string
}

function getResult(scores: Scores): ResultType {
  const { O, C, E, A, N } = scores

  // 複合型（A高×N高）：先回り防衛型
  if (A >= 7 && N >= 7) return {
    title: "先回り防衛型",
    sub:   "察しすぎて、自分が消耗している",
    color: "#c084fc",
    body:  "他者の感情を瞬時に察知し、波風を立てないために自分が動いてしまう。その優しさは本物ですが、その繰り返しがあなたの心をじわじわと削っています。「察しても、すぐ動かない」という一歩の余白が、あなたに必要な処方箋です。",
    reframe: "あなたの敏感さは弱さではありません。ただ、その感度に「境界線」を引く練習が必要な時期にきています。",
  }
  // C高×N高：完璧主義消耗型
  if (C >= 7 && N >= 7) return {
    title: "完璧主義消耗型",
    sub:   "「ちゃんとしなければ」が止まらない",
    color: "#fb923c",
    body:  "高い誠実性と不安の高さが重なり、「もっとやれるはず」「まだ足りない」という感覚が消えません。頑張りの基準が自分の外ではなく内側にある分、終わりが見えにくく、慢性的な疲弊につながりやすいです。",
    reframe: "ルールを守る力は、あなたの誠実さの証です。ただ、そのルールを「自分にも適用しすぎていないか」を一度問い直してみましょう。",
  }
  // A高×C高：自己犠牲型
  if (A >= 7 && C >= 7) return {
    title: "自己犠牲型",
    sub:   "「やらなければ」が「やりたい」に見える",
    color: "#7EB8A4",
    body:  "責任感と協調性の高さから、断ることへの罪悪感が強く、気づけば自分の限界を超えて動いています。「できる人」と見られることへの誇りが、休むことへのブレーキになっていませんか。",
    reframe: "あなたが誰かのために動ける力は本物です。ただ、その力を「自分自身にも向ける」練習が今最も必要なことです。",
  }
  // O高：変化渇望型
  if (O >= 7) return {
    title: "変化渇望型",
    sub:   "今ここにいることへの息苦しさ",
    color: "#60a5fa",
    body:  "好奇心と変化への衝動が強く、現状維持に強い違和感を感じます。「もっと別の場所に、別の自分があるはず」という感覚は、創造性の源でもありますが、今いる場所での小さな充足を見えにくくさせることがあります。",
    reframe: "その「ここではない感覚」は、あなたの感度の高さから来ています。逃げではなく、探求です。ただ、今ここにある小さな意味も、見失わないでください。",
  }
  // N高：感受性消耗型
  if (N >= 7) return {
    title: "感受性消耗型",
    sub:   "感じすぎることで、先に疲れてしまう",
    color: "#f472b6",
    body:  "感情のアンテナが非常に敏感で、他者の感情や場の空気をリアルタイムで受信し続けています。その敏感さは人の痛みに寄り添える力ですが、同時に自分の感情との境界が曖昧になりやすく、気づかないうちに消耗しています。",
    reframe: "あなたの感受性は、誰かの「わかってもらえた」という体験を生む力です。その力を守るために、「受信をオフにする時間」を意識的に作りましょう。",
  }
  // E低：内向き再充電型
  if (E <= 4) return {
    title: "内向き再充電型",
    sub:   "一人の時間でしか、本当に回復できない",
    color: "#94a3b8",
    body:  "外向的な活動よりも、一人で静かに過ごす時間に充電を感じます。社会の「コミュニケーション重視」の空気の中で、自分のペースを守ることに疲れていることはありませんか。",
    reframe: "あなたの「一人でいたい」という感覚は、孤独ではなく自己回復のシグナルです。その必要を、もっと堂々と満たしてよいのです。",
  }
  // バランス型
  return {
    title: "バランス移行型",
    sub:   "今、何かが変わろうとしている",
    color: "#a78bfa",
    body:  "特定の傾向に偏らず、複数の側面を持ち合わせています。今のあなたは、これまでの自分の在り方が少しずつ合わなくなってきているサインかもしれません。それは成長の前触れです。",
    reframe: "「どれが自分かわからない」という感覚は、混乱ではなくアップデートの途中です。今の揺らぎを、丁寧に観察してみてください。",
  }
}

/* -------------------------------------------------------------------------- */
/*  レーダーチャート（SVG）                                                     */
/* -------------------------------------------------------------------------- */

function RadarChart({ scores }: { scores: Scores }) {
  const cx = 120, cy = 120, r = 80
  const axes: { trait: Trait; label: string; color: string; angle: number }[] = [
    { trait: "O", label: "開放性",  color: "#60a5fa", angle: -90 },
    { trait: "C", label: "誠実性",  color: "#fb923c", angle: -18 },
    { trait: "E", label: "外向性",  color: "#94a3b8", angle: 54  },
    { trait: "A", label: "協調性",  color: "#7EB8A4", angle: 126 },
    { trait: "N", label: "神経症傾向", color: "#c084fc", angle: 198 },
  ]

  const toXY = (angle: number, val: number, maxVal = 10) => {
    const rad = (angle * Math.PI) / 180
    const ratio = val / maxVal
    return { x: cx + r * ratio * Math.cos(rad), y: cy + r * ratio * Math.sin(rad) }
  }

  const points = axes.map((a) => toXY(a.angle, scores[a.trait]))
  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ")
  const grids = [2, 4, 6, 8, 10].map((v) =>
    axes.map((a) => toXY(a.angle, v)).map((p) => `${p.x},${p.y}`).join(" ")
  )

  return (
    <svg viewBox="0 0 240 240" style={{ width: "100%", maxWidth: "260px", margin: "0 auto", display: "block" }}>
      {grids.map((pts, i) => (
        <polygon key={i} points={pts} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
      ))}
      {axes.map((a) => {
        const end = toXY(a.angle, 10)
        return <line key={a.trait} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      })}
      <polygon points={polygon} fill="rgba(126,184,164,0.18)" stroke="#7EB8A4" strokeWidth="1.5" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill={axes[i].color} />
      ))}
      {axes.map((a) => {
        const pos = toXY(a.angle, 10 + 2.5)
        const anchor = a.angle > 90 && a.angle < 270 ? "end" : a.angle === -90 || a.angle === 270 ? "middle" : "start"
        return (
          <text key={a.trait} x={pos.x} y={pos.y} textAnchor={anchor} dominantBaseline="middle"
            style={{ fontSize: "9px", fill: a.color, fontFamily: "sans-serif", fontWeight: 700 }}>
            {a.label}
          </text>
        )
      })}
      {points.map((p, i) => {
        const score = scores[axes[i].trait]
        return (
          <text key={axes[i].trait + "s"} x={p.x} y={p.y - 8}
            textAnchor="middle"
            style={{ fontSize: "9px", fill: "#f1f5f9", fontFamily: "sans-serif", fontWeight: 600 }}>
            {score}
          </text>
        )
      })}
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Widget                                                                     */
/* -------------------------------------------------------------------------- */

type Step = "welcome" | "question" | "loading" | "result"

function BigFiveWidget() {
  const [step,      setStep]      = useState<Step>("welcome")
  const [currentQ,  setCurrentQ]  = useState(0)
  const [answers,   setAnswers]    = useState<Record<number, number>>({})
  const [selected,  setSelected]  = useState<number | null>(null)
  const [loadingDot, setLoadingDot] = useState(0)

  // ローディングアニメーション
  useEffect(() => {
    if (step !== "loading") return
    const t = setInterval(() => setLoadingDot(d => (d + 1) % 4), 500)
    const done = setTimeout(() => { setStep("result"); clearInterval(t) }, 2500)
    return () => { clearInterval(t); clearTimeout(done) }
  }, [step])

  const calcScores = (): Scores => {
    const s: Scores = { O: 0, C: 0, E: 0, A: 0, N: 0 }
    QUESTIONS.forEach((q) => { s[q.trait] += answers[q.id] ?? 0 })
    return s
  }

  const handleAnswer = (val: number) => {
    if (selected !== null) return
    setSelected(val)
    const q = QUESTIONS[currentQ]
    const next = { ...answers, [q.id]: val }
    setAnswers(next)
    setTimeout(() => {
      setSelected(null)
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1)
      } else {
        setStep("loading")
      }
    }, 350)
  }

  const scores  = calcScores()
  const result  = step === "result" ? getResult(scores) : null
  const q       = QUESTIONS[currentQ]
  const progress = ((currentQ + (step === "result" || step === "loading" ? QUESTIONS.length : 0)) / QUESTIONS.length) * 100

  const traitColors: Record<Trait, string> = {
    O: "#60a5fa", C: "#fb923c", E: "#94a3b8", A: "#7EB8A4", N: "#c084fc"
  }
  const traitLabels: Record<Trait, string> = {
    O: "開放性", C: "誠実性", E: "外向性", A: "協調性", N: "感受性"
  }

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px", padding: "28px 22px",
      color: "#e2e8f0", fontFamily: "system-ui, sans-serif",
      marginBottom: "2rem",
    }}>

      {/* WELCOME */}
      {step === "welcome" && (
        <div style={{ textAlign: "center" as const }}>
          <p style={{ fontSize: "11px", color: "#7EB8A4", letterSpacing: "0.15em", marginBottom: "12px", fontWeight: 600 }}>
            いしずえ版 ビッグファイブ診断
          </p>
          <h2 style={{ fontSize: "clamp(18px,4vw,24px)", fontWeight: 400, lineHeight: 1.7,
            color: "#f1f5f9", marginBottom: "14px", fontFamily: "'Noto Serif JP', serif" }}>
            あなたの「長所」は、<br />
            <span style={{ color: "#7EB8A4" }}>どんな消耗を隠していますか？</span>
          </h2>
          <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.85, marginBottom: "24px" }}>
            社会を生き抜くために身につけた5つの傾向。<br />
            その傾向が、今のあなたをどう消耗させているかを<br />
            10問で丁寧に紐解きます。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "24px", flexWrap: "wrap" as const }}>
            {(["開放性","誠実性","外向性","協調性","感受性"] as const).map((l, i) => (
              <span key={i} style={{ fontSize: "11px", padding: "3px 10px",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "99px", color: "#64748b" }}>{l}</span>
            ))}
          </div>
          <button onClick={() => setStep("question")} style={{
            padding: "14px 36px", background: "#7EB8A4", color: "#fff",
            border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.04em",
          }}>
            診断を始める（全10問）
          </button>
          <p style={{ fontSize: "11px", color: "#334155", marginTop: "10px" }}>所要時間 約3分</p>
        </div>
      )}

      {/* QUESTION */}
      {step === "question" && (
        <div>
          {/* プログレスバー */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontSize: "11px", color: traitColors[q.trait], fontWeight: 600 }}>
                {traitLabels[q.trait]}
              </span>
              <span style={{ fontSize: "11px", color: "#475569" }}>{currentQ + 1} / {QUESTIONS.length}</span>
            </div>
            <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "2px" }}>
              <div style={{ height: "100%", width: `${((currentQ + 1) / QUESTIONS.length) * 100}%`,
                background: traitColors[q.trait], borderRadius: "2px", transition: "width 0.4s ease" }} />
            </div>
          </div>

          {/* 設問 */}
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.05)",
            borderLeft: `3px solid ${traitColors[q.trait]}`,
            borderRadius: "12px", marginBottom: "18px", minHeight: "80px",
            display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "16px", color: "#f1f5f9", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif" }}>
              {q.text}
            </p>
          </div>

          {/* 選択肢 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {CHOICES.map((c) => {
              const isSelected = selected === c.value
              return (
                <button key={c.value} onClick={() => handleAnswer(c.value)}
                  disabled={selected !== null}
                  style={{
                    padding: "12px 16px",
                    background: isSelected ? traitColors[q.trait] + "25" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isSelected ? traitColors[q.trait] + "60" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "10px", cursor: selected !== null ? "default" : "pointer",
                    display: "flex", alignItems: "center", gap: "10px",
                    transition: "all 0.15s ease",
                  }}>
                  <div style={{
                    width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
                    background: isSelected ? traitColors[q.trait] : "transparent",
                    border: `2px solid ${isSelected ? traitColors[q.trait] : "rgba(255,255,255,0.2)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {isSelected && <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  <span style={{ fontSize: "14px", color: isSelected ? "#f1f5f9" : "#94a3b8" }}>
                    <span style={{ color: traitColors[q.trait], fontWeight: 600, marginRight: "6px" }}>{c.value}</span>
                    {c.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* 戻るボタン */}
          {currentQ > 0 && (
            <button onClick={() => { setCurrentQ(currentQ - 1); setSelected(null) }}
              style={{ marginTop: "14px", background: "none", border: "none",
                color: "#475569", fontSize: "12px", cursor: "pointer", textDecoration: "underline" }}>
              ← 前の質問に戻る
            </button>
          )}
        </div>
      )}

      {/* LOADING */}
      {step === "loading" && (
        <div style={{ textAlign: "center" as const, padding: "2rem 0" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid #7EB8A4",
            margin: "0 auto 20px",
            animation: "spin 1s linear infinite",
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: "16px", color: "#94a3b8", letterSpacing: "0.1em" }}>
            あなたの傾向を解析中{"．".repeat(loadingDot + 1)}
          </p>
        </div>
      )}

      {/* RESULT */}
      {step === "result" && result && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* タイプ */}
          <div style={{ padding: "20px", background: result.color + "18",
            border: `1px solid ${result.color}40`,
            borderLeft: `4px solid ${result.color}`,
            borderRadius: "14px" }}>
            <p style={{ fontSize: "11px", color: result.color, fontWeight: 600, marginBottom: "4px" }}>
              あなたの消耗パターン
            </p>
            <p style={{ fontSize: "22px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
              {result.title}
            </p>
            <p style={{ fontSize: "13px", color: result.color, marginBottom: "14px" }}>
              {result.sub}
            </p>
            <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, marginBottom: "14px" }}>
              {result.body}
            </p>
            <div style={{ padding: "12px", background: "rgba(0,0,0,0.2)", borderRadius: "8px" }}>
              <p style={{ fontSize: "11px", color: result.color, fontWeight: 600, marginBottom: "6px" }}>
                💭 リフレーミング
              </p>
              <p style={{ fontSize: "13px", color: "#e2e8f0", lineHeight: 1.8 }}>
                {result.reframe}
              </p>
            </div>
          </div>

          {/* レーダーチャート */}
          <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px" }}>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px", textAlign: "center" as const }}>
              あなたの5因子バランス
            </p>
            <RadarChart scores={scores} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "6px", marginTop: "12px" }}>
              {(["O","C","E","A","N"] as Trait[]).map((t) => (
                <div key={t} style={{ textAlign: "center" as const }}>
                  <p style={{ fontSize: "9px", color: traitColors[t], marginBottom: "2px" }}>{traitLabels[t]}</p>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9" }}>
                    {scores[t]}<span style={{ fontSize: "9px", color: "#475569" }}>/10</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", textAlign: "center" as const }}>
            <p style={{ fontSize: "14px", color: "#f1f5f9", fontWeight: 600, marginBottom: "6px" }}>
              この消耗パターンを、一緒に整理してみませんか
            </p>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "14px" }}>
              「なぜこうなるのか」がわかると、自分を責めなくてよくなります
            </p>
            <a href="/#contact" style={{ display: "inline-block", padding: "12px 28px",
              background: "#2C1F14", color: "#fff", borderRadius: "10px",
              fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              今の状態を整理してみる（初回無料）
            </a>
            <p style={{ fontSize: "11px", color: "#475569", marginTop: "8px" }}>
              勧誘なし ／ 1回のみでもOK
            </p>
          </div>

          <button onClick={() => { setStep("welcome"); setCurrentQ(0); setAnswers({}); setSelected(null) }}
            style={{ background: "none", border: "none", color: "#475569",
              fontSize: "12px", cursor: "pointer", textDecoration: "underline", padding: "4px" }}>
            最初からやり直す
          </button>
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function BigFiveCheck() {
  return (
    <ArticleLayout
      title="いしずえ版ビッグファイブ診断｜あなたの「消耗パターン」を知る"
      description="協調性・誠実性・開放性・外向性・神経症傾向の5因子から、あなたが今どのパターンで消耗しているかを10問で診断。レーダーチャートで可視化。公認心理師監修。"
      url="https://www.ishizue-counseling.jp/articles/big-five-check"
      date="2026-04-17"
      tags={["burnout", "check", "boundary", "compassion"]}
    >
      <p>
        「なぜこんなに疲れているのか、自分でもわからない」——
        そういった感覚の背景には、あなたが社会を生き抜くために身につけてきた
        <strong>思考・行動のパターン</strong>が関係していることがあります。
      </p>
      <p>
        このチェックでは、心理学のビッグファイブ理論をベースに、
        あなたの5つの傾向を測定し、今の消耗の構造を丁寧に解説します。
        当てはまるものを選んで、自分を理解する入口にしてみてください。
      </p>

      <BigFiveWidget />

      <h2>ビッグファイブ理論とは</h2>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          ビッグファイブ（Five Factor Model）は、心理学で最も広く研究されてきた性格特性理論です。
          人間の性格を「開放性・誠実性・外向性・協調性・神経症傾向」の5因子で捉えます。
          このチェックでは、それぞれの傾向が「今のあなたにどう影響しているか」という視点で解説しています。
        </p>
      </div>
      <p>
        診断結果は「良い・悪い」ではありません。
        今の自分の傾向に気づき、消耗の構造を理解するための地図として使ってください。
      </p>
      <p className="check-disclaimer">
        このチェックは簡易的な自己理解ツールであり、心理的な診断ではありません。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

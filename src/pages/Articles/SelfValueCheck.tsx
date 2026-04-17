import { useState, useEffect } from "react"
import ArticleLayout from "../../components/ArticleLayout"

type Axis = "competence" | "needed" | "sacrifice" | "harmless"

const QUESTIONS: { id: number; axis: Axis; text: string }[] = [
  { id:  1, axis: "competence", text: "何も生産していない休日は、時間を無駄にしているように感じる" },
  { id:  2, axis: "competence", text: "資格や知識をいくら得ても「まだ足りない」という感覚が消えない" },
  { id:  3, axis: "competence", text: "成長や進歩が止まっていると感じると、存在意義が揺らぐ" },
  { id:  4, axis: "competence", text: "肩書きや実績がなければ、自分には何も残らないという恐怖がある" },
  { id:  5, axis: "competence", text: "「何もしない時間」を心から楽しめたことがほとんどない" },
  { id:  6, axis: "competence", text: "誰かと比べて自分が劣っていると感じると、一日中引きずってしまう" },
  { id:  7, axis: "needed", text: "誰かに感謝されたり必要とされたりしないと、自分の存在が薄れる気がする" },
  { id:  8, axis: "needed", text: "相手が自立して自分から離れていくと、どこか寂しさや恐怖を感じる" },
  { id:  9, axis: "needed", text: "頼まれると断れず、気づけば自分のキャパシティを超えていることが多い" },
  { id: 10, axis: "needed", text: "「ありがとう」と言われる瞬間だけが、自分の価値を確認できる時間だ" },
  { id: 11, axis: "needed", text: "誰の役にも立てていないと感じる日は、ひどく落ち込む" },
  { id: 12, axis: "needed", text: "相手の機嫌や表情を読んで、先回りして動くことがクセになっている" },
  { id: 13, axis: "sacrifice", text: "苦労して手に入れたものにしか、本当の価値を感じられない" },
  { id: 14, axis: "sacrifice", text: "楽をして幸せになることに、どこか後ろめたさや罪悪感がある" },
  { id: 15, axis: "sacrifice", text: "「こんなに頑張っているのに誰もわかってくれない」という感覚が続いている" },
  { id: 16, axis: "sacrifice", text: "休むことや自分を優先することは、甘えや逃げだと感じる" },
  { id: 17, axis: "sacrifice", text: "つらい環境や理不尽な状況でも、耐えている自分に価値を感じることがある" },
  { id: 18, axis: "sacrifice", text: "幸せや軽やかさは、もっと苦労した後に許されるものだと思っている" },
  { id: 19, axis: "harmless", text: "誰かを不快にさせたり、迷惑をかけたりすることを極端に恐れている" },
  { id: 20, axis: "harmless", text: "「正しいことをしている自分」でなければ、安心して存在できない" },
  { id: 21, axis: "harmless", text: "自分の本当の欲求や感情を、表に出すことへの抵抗が強い" },
  { id: 22, axis: "harmless", text: "波風を立てないことや、目立たないことで安全を保とうとする" },
  { id: 23, axis: "harmless", text: "怒られたり否定されたりすることへの恐怖が、行動のブレーキになっている" },
  { id: 24, axis: "harmless", text: "「誰の記憶にも残らなくていい」と思いながら、本当は誰かに気づいてほしい" },
]

const CHOICES = [
  { value: 5, label: "非常に当てはまる" },
  { value: 4, label: "やや当てはまる" },
  { value: 3, label: "どちらとも言えない" },
  { value: 2, label: "あまり当てはまらない" },
  { value: 1, label: "全く当てはまらない" },
]

type ResultType = {
  title:        string
  sub:          string
  color:        string
  license:      string
  body:         string
  emptiness:    string
  prescription: string
}

const RESULTS: Record<Axis, ResultType> = {
  competence: {
    title:    "【有能さ】のライセンス型",
    sub:      "「結果を出している自分」でなければ存在できない",
    color:    "#60a5fa",
    license:  "成果・能力への依存",
    body:     "立ち止まること、何もしない休日が恐怖です。「何かができる（DO）」ことでしか自分を認められないため、常に新しい目標や資格、スキルアップを追い求め、永遠に満たされない回し車に乗り続けています。",
    emptiness: "肩書きや実績をすべて剥がされたとき、「私には何も残らない」という虚無感。",
    prescription: "あなたの価値は「生産性」ではありません。「何の役にも立たない、ただ息をしているだけの自分」を許すための徹底的な"無駄"を、日常に少しずつ取り入れることから始めましょう。",
  },
  needed: {
    title:    "【必要とされる】スタンプカード型",
    sub:      "「誰かに求められている自分」でなければ存在できない",
    color:    "#7EB8A4",
    license:  "他者・役割への依存",
    body:     "「ありがとう」と言われることで、自分の存在価値をギリギリ保っています。相手が自立して離れていくことに無意識の恐怖を抱え、他者の機嫌や要求を先回りして満たそうとし続けます。支援職に最も多い消耗パターンです。",
    emptiness: "誰も私を必要としてくれない環境に置かれたときの、透明人間になったような絶望。",
    prescription: "誰かを救うことで自分自身を救うのは、もう終わりにしましょう。「誰の役にも立たなくても、私はここにいていい」と腹落ちさせるための、境界線の引き直しが今最も必要です。",
  },
  sacrifice: {
    title:    "【自己犠牲】の十字架型",
    sub:      "「苦労している自分」にこそ価値がある",
    color:    "#fb923c",
    license:  "苦労・我慢への依存",
    body:     "「楽をしてはいけない」「幸せになってはいけない」という清貧の呪いにかかっています。簡単に手に入る成果や幸せには価値を感じず、わざわざ困難な道に身を置き「こんなに耐えている自分」に価値を見出しています。これが最も深く、気づきにくい呪いです。",
    emptiness: "誰も私の苦労を労ってくれない、体がボロボロになっていくだけの徒労感。",
    prescription: "「痛み＝価値」というバグった等式を、少しずつ壊していきましょう。あなたが幸せに、軽やかに生きることは、誰に対する裏切りでもありません。それを腹の底から知ることが出発点です。",
  },
  harmless: {
    title:    "【無害と正しさ】の白装束型",
    sub:      "「誰にも迷惑をかけない正しい自分」でなければ存在できない",
    color:    "#94a3b8",
    license:  "ルール・従順への依存",
    body:     "怒られたり、誰かに不快な思いをさせたりすることを極端に恐れています。「正しいことをしている」「誰の邪魔もしていない」という透明な存在になることで、社会から弾き出されないよう防衛しています。",
    emptiness: "誰の記憶にも残らず、自分の「本当の欲求」すら思い出せない感覚麻痺。",
    prescription: "「迷惑をかけない」という完璧な防御は、あなたの生命力まで閉じ込めています。小さなわがままを一つだけ通すことから始めてみましょう。世界は思ったより安全です。",
  },
}

type Scores = Record<Axis, number>

function calcScores(answers: Record<number, number>): Scores {
  const s: Scores = { competence: 0, needed: 0, sacrifice: 0, harmless: 0 }
  QUESTIONS.forEach((q) => { s[q.axis] += answers[q.id] ?? 0 })
  return s
}

function getTopAxes(scores: Scores): Axis[] {
  const sorted = (Object.entries(scores) as [Axis, number][]).sort((a, b) => b[1] - a[1])
  const max = sorted[0][1]
  return sorted.filter(([, v]) => v >= max - 2).map(([k]) => k).slice(0, 2)
}

function RadarChart({ scores }: { scores: Scores }) {
  const cx = 120, cy = 120, r = 85, max = 30
  const axes: { axis: Axis; label: string; color: string; angle: number }[] = [
    { axis: "competence", label: "有能さ",      color: "#60a5fa", angle: -90 },
    { axis: "needed",     label: "必要とされる", color: "#7EB8A4", angle: 0   },
    { axis: "sacrifice",  label: "自己犠牲",     color: "#fb923c", angle: 90  },
    { axis: "harmless",   label: "無害・正しさ", color: "#94a3b8", angle: 180 },
  ]
  const toXY = (angle: number, val: number) => {
    const rad = (angle * Math.PI) / 180
    const ratio = val / max
    return { x: cx + r * ratio * Math.cos(rad), y: cy + r * ratio * Math.sin(rad) }
  }
  const points  = axes.map((a) => toXY(a.angle, scores[a.axis]))
  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ")
  const grids   = [6, 12, 18, 24, 30].map((v) =>
    axes.map((a) => toXY(a.angle, v)).map((p) => `${p.x},${p.y}`).join(" ")
  )
  const labelPos = (angle: number) => {
    const rad = (angle * Math.PI) / 180
    return { x: cx + (r + 20) * Math.cos(rad), y: cy + (r + 20) * Math.sin(rad) }
  }
  return (
    <svg viewBox="0 0 240 240" style={{ width: "100%", maxWidth: "260px", margin: "0 auto", display: "block" }}>
      {grids.map((pts, i) => (
        <polygon key={i} points={pts} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
      ))}
      {axes.map((a) => {
        const end = toXY(a.angle, max)
        return <line key={a.axis} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      })}
      <polygon points={polygon} fill="rgba(126,184,164,0.18)" stroke="#7EB8A4" strokeWidth="1.5" />
      {points.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="4" fill={axes[i].color} />)}
      {axes.map((a) => {
        const pos = labelPos(a.angle)
        const anchor = a.angle === 0 ? "start" : a.angle === 180 ? "end" : "middle"
        return (
          <text key={a.axis} x={pos.x} y={pos.y} textAnchor={anchor} dominantBaseline="middle"
            style={{ fontSize: "9px", fill: a.color, fontFamily: "sans-serif", fontWeight: 700 }}>
            {a.label}
          </text>
        )
      })}
      {points.map((p, i) => {
        const offsets: Record<number, {x:number;y:number}> = { 0:{x:0,y:-10}, 1:{x:12,y:0}, 2:{x:0,y:10}, 3:{x:-12,y:0} }
        const off = offsets[i] ?? { x:0, y:-10 }
        return (
          <text key={axes[i].axis+"s"} x={p.x+off.x} y={p.y+off.y} textAnchor="middle"
            style={{ fontSize:"10px", fill:"#f1f5f9", fontFamily:"sans-serif", fontWeight:700 }}>
            {scores[axes[i].axis]}
          </text>
        )
      })}
    </svg>
  )
}

type Step = "welcome" | "question" | "loading" | "result"
const axisColors: Record<Axis, string> = { competence:"#60a5fa", needed:"#7EB8A4", sacrifice:"#fb923c", harmless:"#94a3b8" }
const axisLabels: Record<Axis, string> = { competence:"有能さ軸", needed:"承認軸", sacrifice:"自己犠牲軸", harmless:"従順軸" }

export function SelfValueWidget() {
  const [step,       setStep]      = useState<Step>("welcome")
  const [currentQ,   setCurrentQ]  = useState(0)
  const [answers,    setAnswers]   = useState<Record<number, number>>({})
  const [selected,   setSelected]  = useState<number | null>(null)
  const [loadingDot, setLoadingDot] = useState(0)

  useEffect(() => {
    if (step !== "loading") return
    const t    = setInterval(() => setLoadingDot(d => (d + 1) % 4), 500)
    const done = setTimeout(() => { setStep("result"); clearInterval(t) }, 2800)
    return () => { clearInterval(t); clearTimeout(done) }
  }, [step])

  const handleAnswer = (val: number) => {
    if (selected !== null) return
    setSelected(val)
    const q    = QUESTIONS[currentQ]
    const next = { ...answers, [q.id]: val }
    setAnswers(next)
    setTimeout(() => {
      setSelected(null)
      if (currentQ < QUESTIONS.length - 1) setCurrentQ(currentQ + 1)
      else setStep("loading")
    }, 350)
  }

  const scores  = calcScores(answers)
  const topAxes = step === "result" ? getTopAxes(scores) : []
  const primary = topAxes[0]
  const q       = QUESTIONS[currentQ]

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px", padding: "28px 22px",
      color: "#e2e8f0", fontFamily: "system-ui, sans-serif", marginBottom: "2rem",
    }}>
      {step === "welcome" && (
        <div style={{ textAlign: "center" as const }}>
          <p style={{ fontSize: "11px", color: "#7EB8A4", letterSpacing: "0.15em", marginBottom: "12px", fontWeight: 600 }}>
            いしずえ版 自己価値の置き場所診断
          </p>
          <h2 style={{ fontSize: "clamp(17px,4vw,22px)", fontWeight: 400, lineHeight: 1.75,
            color: "#f1f5f9", marginBottom: "14px", fontFamily: "'Noto Serif JP', serif" }}>
            あなたが握りしめている<br />
            <span style={{ color: "#7EB8A4" }}>「存在許可証」</span>は何ですか？
          </h2>
          <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.9, marginBottom: "20px" }}>
            「何者かにならないと不安」「役に立たないと罪悪感」——<br />
            私たちは無意識に、自分に「ここにいてもいい」と許可を出すための<br />
            <strong style={{ color: "#f1f5f9" }}>条件（存在許可証）</strong>を設定しています。<br />
            あなたが今最も重く握りしめている条件を、24問で可視化します。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "22px", textAlign: "left" as const }}>
            {(["有能さ", "必要とされること", "自己犠牲", "無害と正しさ"] as const).map((l, i) => (
              <div key={i} style={{ padding: "10px 12px", background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "2px" }}>許可証 {i+1}</p>
                <p style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 500 }}>{l}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setStep("question")} style={{
            padding: "14px 36px", background: "#7EB8A4", color: "#fff",
            border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.04em",
          }}>
            診断を始める（全24問）
          </button>
          <p style={{ fontSize: "11px", color: "#334155", marginTop: "10px" }}>所要時間 約5分</p>
        </div>
      )}

      {step === "question" && (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontSize: "11px", color: axisColors[q.axis], fontWeight: 600 }}>{axisLabels[q.axis]}</span>
              <span style={{ fontSize: "11px", color: "#475569" }}>{currentQ + 1} / {QUESTIONS.length}</span>
            </div>
            <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "2px" }}>
              <div style={{ height: "100%", width: `${((currentQ + 1) / QUESTIONS.length) * 100}%`,
                background: axisColors[q.axis], borderRadius: "2px", transition: "width 0.4s ease" }} />
            </div>
          </div>
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.05)",
            borderLeft: `3px solid ${axisColors[q.axis]}`, borderRadius: "12px",
            marginBottom: "16px", minHeight: "80px", display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "15px", color: "#f1f5f9", lineHeight: 1.85, fontFamily: "'Noto Serif JP', serif" }}>
              {q.text}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {CHOICES.map((c) => {
              const isSel = selected === c.value
              return (
                <button key={c.value} onClick={() => handleAnswer(c.value)} disabled={selected !== null}
                  style={{
                    padding: "11px 14px",
                    background: isSel ? axisColors[q.axis] + "25" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isSel ? axisColors[q.axis] + "60" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "10px", cursor: selected !== null ? "default" : "pointer",
                    display: "flex", alignItems: "center", gap: "10px", transition: "all 0.15s ease",
                  }}>
                  <div style={{
                    width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
                    background: isSel ? axisColors[q.axis] : "transparent",
                    border: `2px solid ${isSel ? axisColors[q.axis] : "rgba(255,255,255,0.2)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {isSel && <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  <span style={{ fontSize: "13px", color: isSel ? "#f1f5f9" : "#94a3b8" }}>
                    <span style={{ color: axisColors[q.axis], fontWeight: 600, marginRight: "6px" }}>{c.value}</span>
                    {c.label}
                  </span>
                </button>
              )
            })}
          </div>
          {currentQ > 0 && (
            <button onClick={() => { setCurrentQ(currentQ - 1); setSelected(null) }}
              style={{ marginTop: "12px", background: "none", border: "none",
                color: "#475569", fontSize: "12px", cursor: "pointer", textDecoration: "underline" }}>
              ← 前の質問に戻る
            </button>
          )}
        </div>
      )}

      {step === "loading" && (
        <div style={{ textAlign: "center" as const, padding: "2.5rem 0" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.08)", borderTop: "3px solid #7EB8A4",
            margin: "0 auto 20px", animation: "selfSpin 1s linear infinite" }} />
          <style>{`@keyframes selfSpin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: "15px", color: "#94a3b8", letterSpacing: "0.08em" }}>
            あなたの存在許可証を解析中{"．".repeat(loadingDot + 1)}
          </p>
        </div>
      )}

      {step === "result" && primary && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ padding: "20px", background: axisColors[primary] + "18",
            border: `1px solid ${axisColors[primary]}40`,
            borderLeft: `4px solid ${axisColors[primary]}`, borderRadius: "14px" }}>
            <p style={{ fontSize: "11px", color: axisColors[primary], fontWeight: 600, marginBottom: "4px" }}>あなたの存在許可証</p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>{RESULTS[primary].title}</p>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px" }}>{RESULTS[primary].license}</p>
            <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, marginBottom: "12px" }}>{RESULTS[primary].body}</p>
            <div style={{ padding: "12px", background: "rgba(0,0,0,0.15)", borderRadius: "8px", marginBottom: "12px" }}>
              <p style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>空虚感の正体</p>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.75, fontStyle: "italic" }}>
                「{RESULTS[primary].emptiness}」
              </p>
            </div>
            <div style={{ padding: "12px", background: "rgba(0,0,0,0.2)", borderRadius: "8px" }}>
              <p style={{ fontSize: "11px", color: axisColors[primary], fontWeight: 600, marginBottom: "6px" }}>💊 処方箋</p>
              <p style={{ fontSize: "13px", color: "#e2e8f0", lineHeight: 1.8 }}>{RESULTS[primary].prescription}</p>
            </div>
          </div>

          {topAxes[1] && topAxes[1] !== primary && (
            <div style={{ padding: "14px", background: axisColors[topAxes[1]] + "12",
              border: `1px solid ${axisColors[topAxes[1]]}30`, borderRadius: "12px" }}>
              <p style={{ fontSize: "11px", color: axisColors[topAxes[1]], fontWeight: 600, marginBottom: "4px" }}>次いで強い傾向</p>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9", marginBottom: "6px" }}>{RESULTS[topAxes[1]].title}</p>
              <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.75 }}>{RESULTS[topAxes[1]].sub}</p>
            </div>
          )}

          <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px" }}>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px", textAlign: "center" as const }}>
              あなたの「存在許可証」バランス
            </p>
            <RadarChart scores={scores} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "6px", marginTop: "12px" }}>
              {(["competence","needed","sacrifice","harmless"] as Axis[]).map((a) => (
                <div key={a} style={{ textAlign: "center" as const, padding: "6px",
                  background: "rgba(255,255,255,0.03)", borderRadius: "6px" }}>
                  <p style={{ fontSize: "10px", color: axisColors[a], marginBottom: "2px" }}>{RESULTS[a].license}</p>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9" }}>
                    {scores[a]}<span style={{ fontSize: "9px", color: "#475569" }}>/30</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "18px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", textAlign: "center" as const }}>
            <p style={{ fontSize: "14px", color: "#f1f5f9", fontWeight: 600, marginBottom: "6px" }}>
              「ただ在るだけで、ここにいていい」<br />その感覚を、一緒に取り戻しませんか
            </p>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "14px" }}>
              条件なしに自分を許可できる状態に戻るための整理を、一緒にします
            </p>
            <a href="/#contact" style={{ display: "inline-block", padding: "12px 28px",
              background: "#2C1F14", color: "#fff", borderRadius: "10px",
              fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              今の状態を整理してみる（初回無料）
            </a>
            <p style={{ fontSize: "11px", color: "#475569", marginTop: "8px" }}>勧誘なし ／ 1回のみでもOK</p>
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

export default function SelfValueCheck() {
  return (
    <ArticleLayout
      title="自己価値の置き場所診断｜あなたの「存在許可証」を可視化する"
      description="「何者かにならないと不安」「役に立たないと罪悪感」——あなたが無意識に自分に課している存在条件を、4軸24問で可視化します。公認心理師監修。"
      url="https://www.ishizue-counseling.jp/articles/self-value-check"
      date="2026-04-17"
      tags={["burnout", "boundary", "check", "compassion"]}
    >
      <p>
        「何者かにならないと不安になる」「誰かの役に立たないと罪悪感がある」——
        こうした感覚の根底には、私たちが無意識に自分に課している
        <strong>「ここにいてもいい」という条件</strong>が存在しています。
      </p>
      <p>
        このチェックでは、有能さ・必要とされること・自己犠牲・無害と正しさの4軸から、
        あなたが今最も強く握りしめている「存在の条件」を可視化します。
      </p>

      <SelfValueWidget />

      <h2>「存在許可証」とは</h2>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          心理学では「条件付き自己価値（Contingent Self-Worth）」と呼ばれる概念があります。
          これは「〇〇でなければ自分には価値がない」という思い込みのことです。
          この条件が強いほど、その条件を満たすことに必死になり、満たせないときに強い苦痛を感じます。
          まず「自分はどんな条件を自分に課しているか」に気づくことが、変化の出発点です。
        </p>
      </div>
      <p>
        診断結果は批判ではありません。
        あなたがこれまで生き抜くために身につけてきたパターンです。
        気づくことで、少しずつ手放す選択ができるようになります。
      </p>
      <p className="check-disclaimer">
        このチェックは簡易的な自己理解ツールであり、心理的な診断ではありません。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

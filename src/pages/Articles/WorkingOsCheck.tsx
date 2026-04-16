import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  データ定義                                                                  */
/* -------------------------------------------------------------------------- */

type Axis = "rice" | "life" | "light"

const QUESTIONS: { id: string; axis: Axis; text: string }[] = [
  // ライスワーク軸
  { id: "r1", axis: "rice",  text: "職場では「波風を立てないこと」や「期待された役割をこなすこと」を最優先にしている" },
  { id: "r2", axis: "rice",  text: "「給料は我慢の対価だ」と、どこかで自分に言い聞かせている" },
  { id: "r3", axis: "rice",  text: "今の仕事から「安定（収入や地位）」を引いたら、残るものは何もないと思う" },
  { id: "r4", axis: "rice",  text: "休日は、仕事のためのエネルギー回復（休息）だけで終わってしまうことが多い" },
  // ライフワーク軸
  { id: "l1", axis: "life",  text: "困っている人や頼み事を見ると、自分のキャパシティを超えていても引き受けてしまう" },
  { id: "l2", axis: "life",  text: "「自分がやらなければ」という責任感や使命感が、常に行動のベースにある" },
  { id: "l3", axis: "life",  text: "感謝されたり、誰かの役に立ったりしないと、自分の存在価値が揺らぐ気がする" },
  { id: "l4", axis: "life",  text: "理想の仕事のあり方と、現実のギャップに深く傷つく（または絶望する）ことがある" },
  // ライトワーク軸
  { id: "t1", axis: "light", text: "誰に頼まれてもいないのに、つい深く調べてしまったり、こだわって作ってしまうことがある" },
  { id: "t2", axis: "light", text: "損得や効率を抜きにして、「自分が心からワクワクするか」で動く瞬間がある" },
  { id: "t3", axis: "light", text: "自分が楽しんでいると「こんなことで遊んでいていいのか」と謎の罪悪感を覚えることがある" },
  { id: "t4", axis: "light", text: "他人に評価されなくても、自分の美意識や納得感さえ満たされれば満足できる" },
]

const LABELS = ["全く当てはまらない", "あまり当てはまらない", "どちらとも言えない", "やや当てはまる", "非常に当てはまる"]

type ResultType = "rice" | "life" | "light" | "mixed" | "transition"

const RESULTS: Record<ResultType, {
  label: string; color: string; sub: string; message: string; prescription: string
}> = {
  rice: {
    label: "ライス優位型",
    color: "#94a3b8",
    sub: "「安全」の砦で、息を潜めていませんか？",
    message: "あなたは非常に責任感が強く、現実をしっかり支える力を持っています。しかし、生活や安定を守るために「自分の感情」や「やりたいこと」に蓋をし続けていませんか？ 波風を立てないための過剰な適応は、徐々に心の感度を鈍らせ、静かな空虚感を生み出します。",
    prescription: "仕事以外の場所で「意味も生産性もないけれど、ただ楽しいこと」を取り戻すリハビリから始めましょう。",
  },
  life: {
    label: "ライフ優位型",
    color: "#7EB8A4",
    sub: "その十字架、本当にあなたが背負うべきですか？",
    message: "あなたの深い愛情と使命感は、間違いなく多くの人を救ってきました。しかし、他者の人生を背負いすぎ、「自分の幸せ」を後回しにする構造に陥っています。「私がやらなきゃ」という言葉の裏にある自己犠牲を手放さない限り、いつか必ず心身の限界が訪れます。",
    prescription: "対象者と自分の間に、冷たくも優しい「境界線（バウンダリー）」を引き直す勇気を持つ時期です。",
  },
  light: {
    label: "ライト優位型",
    color: "#f59e0b",
    sub: "「楽しむことへの罪悪感」に縛られていませんか？",
    message: "あなたの原動力は、純粋な好奇心と知的な探求です。しかし、それを「お金」や「社会の役に立つ形」に変換するプロセスに苦戦し、「自分だけが楽しんでいていいのか」と孤立感や罪悪感を抱えがちです。あなたのその遊び心やこだわりは、社会にとって必要な価値の源泉です。",
    prescription: "その感性を世の中に届けるための「翻訳」の方法を学ぶだけで、世界は一気に広がります。",
  },
  mixed: {
    label: "分散消耗型",
    color: "#c084fc",
    sub: "「すべてを完璧に」の呪縛で、すり減っていませんか？",
    message: "安定（ライス）も、使命（ライフ）も、楽しさ（ライト）も。すべてを一つの仕事で、しかも完璧に満たそうとしていませんか？ その結果、どの欲求も中途半端になり、慢性的なエネルギー不足を起こしています。",
    prescription: "一つの場所に「全部乗せ」して満たそうとする構造を一度解体し、人生全体でどうバランスを取るか、優先順位をつけ直してみましょう。",
  },
  transition: {
    label: "移行期型",
    color: "#60a5fa",
    sub: "過去の正解が通用しない。「脱皮」のサインです。",
    message: "今のあなたは、どの要素にも強くピンときていないか、あるいは非常にアンバランスな状態です。これはあなたの能力不足ではなく、あなたが次のステージへ進むための「OSアップデート中」だから起こる正常なバグです。",
    prescription: "無理に今の環境に意味を見出そうとせず、過去の成功法則を手放し、次のフェーズへ移行するための準備を始めるタイミングです。",
  },
}

/* -------------------------------------------------------------------------- */
/*  スコア判定                                                                  */
/* -------------------------------------------------------------------------- */

function calcResult(answers: Record<string, number>): { type: ResultType; scores: Record<Axis, number> } {
  const scores: Record<Axis, number> = { rice: 0, life: 0, light: 0 }
  QUESTIONS.forEach((q) => { scores[q.axis] += answers[q.id] ?? 0 })

  const { rice, life, light } = scores
  const max = Math.max(rice, life, light)
  const min = Math.min(rice, life, light)

  // 分散消耗型：全軸12以上かつ最大と最小の差が4以下
  if (rice >= 12 && life >= 12 && light >= 12 && max - min <= 4) return { type: "mixed", scores }
  // 各軸優位型：最高値14以上かつその軸が最大
  if (rice >= 14 && rice === max) return { type: "rice", scores }
  if (life >= 14 && life === max) return { type: "life", scores }
  if (light >= 14 && light === max) return { type: "light", scores }
  // それ以外は移行期型
  return { type: "transition", scores }
}

/* -------------------------------------------------------------------------- */
/*  レーダーチャート（SVG）                                                     */
/* -------------------------------------------------------------------------- */

function RadarChart({ scores }: { scores: Record<Axis, number> }) {
  const cx = 100, cy = 100, r = 75
  const max = 20
  const axes: { axis: Axis; label: string; color: string; angle: number }[] = [
    { axis: "life",  label: "ライフ",  color: "#7EB8A4", angle: -90 },
    { axis: "light", label: "ライト",  color: "#f59e0b", angle: 30 },
    { axis: "rice",  label: "ライス",  color: "#94a3b8", angle: 150 },
  ]

  const toXY = (angle: number, val: number) => {
    const rad = (angle * Math.PI) / 180
    const ratio = val / max
    return { x: cx + r * ratio * Math.cos(rad), y: cy + r * ratio * Math.sin(rad) }
  }

  const points = axes.map((a) => toXY(a.angle, scores[a.axis]))
  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ")

  // グリッド（5段階）
  const grids = [4, 8, 12, 16, 20].map((v) =>
    axes.map((a) => toXY(a.angle, v)).map((p) => `${p.x},${p.y}`).join(" ")
  )

  return (
    <svg viewBox="0 0 200 200" style={{ width: "100%", maxWidth: "240px", margin: "0 auto", display: "block" }}>
      {/* グリッド */}
      {grids.map((pts, i) => (
        <polygon key={i} points={pts} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      ))}
      {/* 軸線 */}
      {axes.map((a) => {
        const end = toXY(a.angle, max)
        return <line key={a.axis} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      })}
      {/* データ */}
      <polygon points={polygon} fill="rgba(126,184,164,0.25)" stroke="#7EB8A4" strokeWidth="1.5" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill={axes[i].color} />
      ))}
      {/* ラベル */}
      {axes.map((a) => {
        const pos = toXY(a.angle, max + 10)
        return (
          <text key={a.axis} x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="middle"
            style={{ fontSize: "11px", fill: a.color, fontFamily: "sans-serif", fontWeight: 600 }}>
            {a.label}
          </text>
        )
      })}
      {/* スコア */}
      {axes.map((a, i) => {
        const pos = toXY(a.angle, scores[a.axis])
        return (
          <text key={a.axis + "s"} x={pos.x + (i === 0 ? 0 : i === 1 ? 8 : -8)} y={pos.y - 6}
            textAnchor="middle" style={{ fontSize: "9px", fill: a.color, fontFamily: "sans-serif" }}>
            {scores[a.axis]}
          </text>
        )
      })}
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Widget                                                                     */
/* -------------------------------------------------------------------------- */

function WorkingOsWidget() {
  const [answers,    setAnswers]    = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [currentQ,   setCurrentQ]  = useState(0)

  const total = QUESTIONS.length
  const answered = Object.keys(answers).length
  const result = showResult ? calcResult(answers) : null

  const handleSelect = (id: string, val: number) => {
    const next = { ...answers, [id]: val }
    setAnswers(next)
    if (currentQ < total - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300)
    }
  }

  const q = QUESTIONS[currentQ]
  const axisColors: Record<Axis, string> = { rice: "#94a3b8", life: "#7EB8A4", light: "#f59e0b" }
  const axisLabels: Record<Axis, string> = { rice: "ライスワーク", life: "ライフワーク", light: "ライトワーク" }

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px", padding: "24px 20px",
      color: "#e2e8f0", marginBottom: "2rem", fontFamily: "system-ui, sans-serif",
    }}>
      {/* タイトル */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
          あなたの「働き方のOS」診断
        </p>
        <p style={{ fontSize: "12px", color: "#64748b" }}>ライス・ライフ・ライト 3軸チェック｜全12問</p>
      </div>

      {!showResult ? (
        <>
          {/* プログレス */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontSize: "11px", color: axisColors[q.axis], fontWeight: 600 }}>
                {axisLabels[q.axis]}
              </span>
              <span style={{ fontSize: "11px", color: "#475569" }}>{currentQ + 1} / {total}</span>
            </div>
            <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "2px" }}>
              <div style={{ height: "100%", width: `${((currentQ + 1) / total) * 100}%`,
                background: axisColors[q.axis], borderRadius: "2px", transition: "width 0.3s ease" }} />
            </div>
          </div>

          {/* 設問 */}
          <div style={{ padding: "16px", background: "rgba(255,255,255,0.05)",
            borderRadius: "12px", marginBottom: "16px",
            borderLeft: `3px solid ${axisColors[q.axis]}` }}>
            <p style={{ fontSize: "15px", color: "#f1f5f9", lineHeight: 1.75 }}>
              Q{currentQ + 1}. {q.text}
            </p>
          </div>

          {/* 選択肢 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
            {LABELS.map((label, i) => {
              const val = i + 1
              const selected = answers[q.id] === val
              return (
                <button key={i} onClick={() => handleSelect(q.id, val)} style={{
                  padding: "12px 14px",
                  background: selected ? axisColors[q.axis] + "25" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${selected ? axisColors[q.axis] + "60" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "10px", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: "10px",
                  transition: "all 0.15s ease",
                }}>
                  <div style={{
                    width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                    background: selected ? axisColors[q.axis] : "transparent",
                    border: `2px solid ${selected ? axisColors[q.axis] : "rgba(255,255,255,0.2)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {selected && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  <span style={{ fontSize: "13px", color: selected ? "#f1f5f9" : "#94a3b8", textAlign: "left" as const }}>
                    <span style={{ color: axisColors[q.axis], fontWeight: 600, marginRight: "6px" }}>{val}</span>
                    {label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* ナビゲーション */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
              disabled={currentQ === 0}
              style={{ fontSize: "13px", color: "#475569", background: "none", border: "none",
                cursor: currentQ === 0 ? "default" : "pointer", opacity: currentQ === 0 ? 0.3 : 1 }}>
              ← 前へ
            </button>
            {answered >= total && (
              <button onClick={() => setShowResult(true)} style={{
                flex: 1, padding: "14px",
                background: "#7EB8A4", color: "#fff", border: "none",
                borderRadius: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer",
              }}>
                診断結果を見る
              </button>
            )}
            {currentQ < total - 1 && answers[q.id] && (
              <button onClick={() => setCurrentQ(currentQ + 1)}
                style={{ fontSize: "13px", color: "#7EB8A4", background: "none", border: "none", cursor: "pointer" }}>
                次へ →
              </button>
            )}
          </div>
        </>
      ) : result ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* タイプ */}
          <div style={{ padding: "20px", background: result.color + "18",
            border: `1px solid ${result.color}40`,
            borderLeft: `4px solid ${result.color}`,
            borderRadius: "14px" }}>
            <p style={{ fontSize: "11px", color: result.color, fontWeight: 600, marginBottom: "4px" }}>
              あなたの働き方のOS
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "6px" }}>
              {RESULTS[result.type].label}
            </p>
            <p style={{ fontSize: "13px", color: result.color, marginBottom: "12px" }}>
              {RESULTS[result.type].sub}
            </p>
            <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.85, marginBottom: "12px" }}>
              {RESULTS[result.type].message}
            </p>
            <div style={{ padding: "12px", background: "rgba(0,0,0,0.2)", borderRadius: "8px" }}>
              <p style={{ fontSize: "11px", color: result.color, fontWeight: 600, marginBottom: "4px" }}>
                💊 処方箋
              </p>
              <p style={{ fontSize: "13px", color: "#e2e8f0", lineHeight: 1.75 }}>
                {RESULTS[result.type].prescription}
              </p>
            </div>
          </div>

          {/* レーダーチャート */}
          <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px" }}>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px", textAlign: "center" as const }}>
              あなたの3軸バランス
            </p>
            <RadarChart scores={result.scores} />
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "12px" }}>
              {(["life", "light", "rice"] as Axis[]).map((axis) => (
                <div key={axis} style={{ textAlign: "center" as const }}>
                  <p style={{ fontSize: "10px", color: axisColors[axis], marginBottom: "2px" }}>{axisLabels[axis]}</p>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9" }}>
                    {result.scores[axis]}<span style={{ fontSize: "10px", color: "#475569" }}>/20</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", textAlign: "center" as const }}>
            <p style={{ fontSize: "14px", color: "#f1f5f9", fontWeight: 600, marginBottom: "6px" }}>
              消耗の構造を解体し、<br />あなたらしい働き方を再設計しませんか
            </p>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px" }}>
              レーダーチャートのいびつさは、あなたの「伸び代」です
            </p>
            <a href="/#contact" style={{ display: "inline-block", padding: "12px 24px",
              background: "#2C1F14", color: "#fff", borderRadius: "10px",
              fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              あなたの「働く構造」を整理してみる（初回無料）
            </a>
            <p style={{ fontSize: "11px", color: "#475569", marginTop: "8px" }}>
              勧誘なし ／ 1回のみでもOK
            </p>
          </div>

          <button onClick={() => { setAnswers({}); setShowResult(false); setCurrentQ(0) }}
            style={{ background: "none", border: "none", color: "#475569",
              fontSize: "12px", cursor: "pointer", textDecoration: "underline", padding: "4px" }}>
            最初からやり直す
          </button>
        </div>
      ) : null}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function WorkingOsCheck() {
  return (
    <ArticleLayout
      title="あなたの「働き方のOS」診断｜ライス・ライフ・ライト 3軸チェック"
      description="なぜ働いているのに、満たされないのか。ライスワーク・ライフワーク・ライトワークの3軸で、あなたの消耗の構造を可視化します。全12問・レーダーチャート付き。"
      url="https://www.ishizue-counseling.jp/articles/working-os-check"
      date="2026-04-17"
      tags={["burnout", "boundary", "check", "compassion"]}
    >
      <p>
        やりがいを感じているはずなのに、なぜか満たされない。
        頑張っているのに、空虚感が消えない——
      </p>
      <p>
        それは「あなたの問題」ではなく、働き方の<strong>OS（構造）</strong>がズレているサインかもしれません。
      </p>
      <p>
        このチェックでは、「ライスワーク（安定）」「ライフワーク（使命）」「ライトワーク（好奇心）」の
        3軸であなたの働き方のOSを可視化します。
        当てはまるものを選んで、今の消耗の構造をそっと見てみてください。
      </p>

      <WorkingOsWidget />

      <h2>「働き方のOS」とは</h2>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          ライスワーク・ライフワーク・ライトワークは、働く動機を3つの軸で捉えるフレームワークです。
          多くの人は、この3つのどれかに偏ったり、バランスを崩したりしながら消耗していきます。
          「どの軸が強く出ているか」を知ることが、消耗の構造を理解する第一歩です。
        </p>
      </div>
      <p>
        診断結果は「性格の良し悪し」ではありません。
        今の自分の状態を客観的に見るための地図として使ってください。
      </p>
      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の働き方のパターンに気づくための目安です。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

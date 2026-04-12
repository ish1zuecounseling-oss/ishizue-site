import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  データ定義                                                                  */
/* -------------------------------------------------------------------------- */

type AxisId = "compassion" | "overload" | "moral" | "body"

type Axis = {
  id:      AxisId
  label:   string
  short:   string
  color:   string
  advice:  string
}

const AXES: Axis[] = [
  {
    id:     "compassion",
    label:  "共感疲労 (A)",
    short:  "共感疲労",
    color:  "#c084fc",
    advice: "他者のトラウマを疑似体験しすぎています。「私は今、相手の感情を観察している」と実況中継する視点を持つことが助けになります。",
  },
  {
    id:     "overload",
    label:  "過剰適応 (B)",
    short:  "過剰適応",
    color:  "#fb923c",
    advice: "「支援者」以外のアイデンティティに意識的に時間とエネルギーを配分しましょう。断ることは相手の力を信じることでもあります。",
  },
  {
    id:     "moral",
    label:  "モラル・ディストレス (C)",
    short:  "組織葛藤",
    color:  "#f59e0b",
    advice: "「変えられること」と「変えられないこと」を紙に書き出し、変えられないことへの執着を少しずつ手放していきましょう。",
  },
  {
    id:     "body",
    label:  "身体的消耗 (D)",
    short:  "身体消耗",
    color:  "#60a5fa",
    advice: "自律神経系が疲弊しています。まず睡眠と食事を優先し、知的活動や自己分析は後回しにして体を休めることが最優先です。",
  },
]

/* -------------------------------------------------------------------------- */
/*  レーダーチャート描画                                                         */
/* -------------------------------------------------------------------------- */

function RadarChart({ scores }: { scores: Record<AxisId, number> }) {
  const cx = 130
  const cy = 130
  const maxR = 100
  const maxScore = 15

  // 4軸の角度（上から時計回り）
  const angles = [-90, 0, 90, 180].map((a) => (a * Math.PI) / 180)
  const axisIds: AxisId[] = ["compassion", "overload", "body", "moral"]

  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  })

  // グリッド（5段階）
  const gridLevels = [3, 6, 9, 12, 15]

  // スコアポリゴン
  const scorePoints = axisIds.map((id, i) => {
    const r = (scores[id] / maxScore) * maxR
    return toXY(angles[i], r)
  })
  const scoreD = scorePoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z"

  return (
    <svg width="260" height="260" viewBox="0 0 260 260">
      {/* グリッドライン */}
      {gridLevels.map((level) => {
        const r = (level / maxScore) * maxR
        const pts = angles.map((a) => toXY(a, r))
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z"
        return (
          <path key={level} d={d}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        )
      })}

      {/* 軸線 */}
      {angles.map((a, i) => {
        const end = toXY(a, maxR)
        return (
          <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y}
            stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        )
      })}

      {/* スコアポリゴン */}
      <path d={scoreD}
        fill="rgba(143,175,159,0.2)"
        stroke="#8FAF9F"
        strokeWidth="1.5"
      />

      {/* スコアドット */}
      {scorePoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4"
          fill={AXES.find((a) => a.id === axisIds[i])?.color ?? "#8FAF9F"}
          stroke="#1a1a2e"
          strokeWidth="1.5"
        />
      ))}

      {/* 軸ラベル */}
      {axisIds.map((id, i) => {
        const axis = AXES.find((a) => a.id === id)!
        const labelPos = toXY(angles[i], maxR + 18)
        return (
          <text key={id}
            x={labelPos.x} y={labelPos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
            fill={axis.color}
            fontWeight="600"
          >
            {axis.short}
          </text>
        )
      })}

      {/* グリッド数値 */}
      {[5, 10, 15].map((v) => {
        const r = (v / maxScore) * maxR
        return (
          <text key={v} x={cx + 4} y={cy - r + 3}
            fontSize="8" fill="rgba(255,255,255,0.3)">
            {v}
          </text>
        )
      })}
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Widget                                                                     */
/* -------------------------------------------------------------------------- */

function MabiRadar() {
  const [scores, setScores] = useState<Record<AxisId, number>>({
    compassion: 0,
    overload:   0,
    moral:      0,
    body:       0,
  })

  const total   = Object.values(scores).reduce((a, b) => a + b, 0)
  const maxScore = 15
  const topAxis  = AXES.reduce((a, b) => scores[a.id] >= scores[b.id] ? a : b)

  const getJudgment = () => {
    if (total >= 40) return { label: "要注意",   color: "#e07070", icon: "🔴" }
    if (total >= 24) return { label: "注意",     color: "#f59e0b", icon: "⚠️" }
    if (total >= 12) return { label: "やや注意", color: "#a0c0a0", icon: "🟡" }
    return               { label: "安定",       color: "#7EB8A4", icon: "🌿" }
  }

  const judgment = getJudgment()

  return (
    <div style={{
      background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
      borderRadius: "20px",
      padding: "20px",
      color: "#e2e8f0",
      marginBottom: "2rem",
      fontFamily: "system-ui, sans-serif",
    }}>

      {/* タイトル */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#f1f5f9", marginBottom: "2px" }}>
            MABI-HP バーンアウト・アセスメント
          </p>
          <p style={{ fontSize: "10px", color: "#64748b" }}>Multidimensional Assessment of Burnout Inventory</p>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "#64748b", marginBottom: "2px" }}>最大スコア</p>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "#94a3b8", lineHeight: 1 }}>{maxScore * 4}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "#64748b", marginBottom: "2px" }}>判定</p>
            <p style={{ fontSize: "14px", fontWeight: 700, color: judgment.color, lineHeight: 1 }}>
              {judgment.icon} {judgment.label}
            </p>
          </div>
        </div>
      </div>

      {/* 警告バナー */}
      {total >= 40 && (
        <div style={{
          background: "rgba(224,112,112,0.12)",
          border: "1px solid rgba(224,112,112,0.3)",
          borderRadius: "10px",
          padding: "8px 12px",
          marginBottom: "12px",
          fontSize: "11px",
          color: "#e07070",
        }}>
          ⚠️ 危険域（レッドカード）の領域があります。バーンアウトの限界点を超えている可能性が高いため、即時的な物理的ケアが必要です。
        </div>
      )}

      {/* レーダーチャート */}
      <div style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: "14px",
        padding: "8px",
        marginBottom: "14px",
        display: "flex",
        justifyContent: "center",
      }}>
        <RadarChart scores={scores} />
      </div>

      {/* 最高軸のアドバイス */}
      {total > 0 && (
        <div style={{
          background: "rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "12px 14px",
          marginBottom: "14px",
          borderLeft: `3px solid ${topAxis.color}`,
        }}>
          <p style={{ fontSize: "11px", color: topAxis.color, fontWeight: 700, marginBottom: "4px" }}>
            最も強いサイン：{topAxis.label}（{scores[topAxis.id]}点）
          </p>
          <p style={{ fontSize: "11px", color: "#cbd5e1", lineHeight: 1.75 }}>{topAxis.advice}</p>
        </div>
      )}

      {/* スライダー（2×2グリッド） */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
        {AXES.map((axis) => (
          <div key={axis.id}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <p style={{ fontSize: "10px", color: axis.color, fontWeight: 600 }}>{axis.label}</p>
              <p style={{ fontSize: "10px", color: axis.color, fontWeight: 700 }}>{scores[axis.id]}</p>
            </div>
            <input
              type="range" min="0" max="15" step="1"
              value={scores[axis.id]}
              onChange={(e) => setScores((prev) => ({ ...prev, [axis.id]: Number(e.target.value) }))}
              style={{ width: "100%", accentColor: axis.color }}
            />
          </div>
        ))}
      </div>

      {/* ボタン */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => setScores({ compassion: 0, overload: 0, moral: 0, body: 0 })}
          style={{
            padding: "10px 16px",
            background: "rgba(255,255,255,0.08)",
            color: "#94a3b8",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            fontSize: "11px",
            cursor: "pointer",
          }}
        >
          リセット
        </button>
        <a
          href="/#contact"
          style={{
            flex: 1,
            padding: "10px",
            background: "#2C1F14",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "12px",
            fontWeight: 600,
            textDecoration: "none",
            textAlign: "center" as const,
            display: "block",
          }}
        >
          ✉ 今の状態を整理してみる（初回無料）
        </a>
      </div>

    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HelperMabiRadar() {
  return (
    <ArticleLayout
      title="MABI-HPレーダーアセスメント｜支援職の4軸バーンアウト診断"
      description="共感疲労・過剰適応・モラルディストレス・身体的消耗の4軸でバーンアウトの状態をレーダーチャートで可視化するアセスメントツールです。支援職の消耗の「震源地」を特定し、適切なケアにつなげます。"
      url="https://www.ishizue-counseling.jp/articles/helper-mabi-radar"
      date="2026-04-12"
      tags={["burnout", "check", "compassion", "recovery"]}
    >
      <p>
        バーンアウトは一種類ではありません。
        <strong>共感疲労・過剰適応・モラルディストレス・身体的消耗</strong>という4つの次元から消耗が進行します。
      </p>
      <p>
        このアセスメントでは、各領域のスコアをスライダーで入力することで、
        自分の消耗の「震源地」をレーダーチャートで可視化できます。
        突出している領域が、今最も対処が必要な場所です。
      </p>

      <MabiRadar />

      <h2>4つの領域について</h2>
      <div className="card space-y-4">
        {AXES.map((axis) => (
          <div key={axis.id}>
            <p className="text-sm font-medium text-stone-800 mb-1" style={{ color: axis.color }}>
              {axis.label}
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">{axis.advice}</p>
          </div>
        ))}
      </div>

      <p>
        複数の領域が同時に高い場合は、消耗が複合的に起きているサインです。
        一人で全てを解決しようとせず、専門家のサポートを受けることを検討してください。
      </p>
      <p className="check-disclaimer">
        このツールは診断ではなく、自分の状態に気づくための目安です。
        スコアが高い場合は、専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

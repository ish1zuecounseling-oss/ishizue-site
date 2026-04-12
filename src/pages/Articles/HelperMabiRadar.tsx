import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

type AxisId = "compassion" | "overload" | "moral" | "body"

const AXES = [
  { id:"compassion" as AxisId, label:"共感疲労 (A)", short:"共感疲労", color:"#c084fc",
    advice:"他者のトラウマを疑似体験しすぎています。「私は今、相手の感情を観察している」と実況中継する視点を持つことが助けになります。" },
  { id:"overload" as AxisId,   label:"過剰適応 (B)", short:"過剰適応", color:"#fb923c",
    advice:"「支援者」以外のアイデンティティに意識的に時間を配分しましょう。断ることは相手の力を信じることでもあります。" },
  { id:"moral" as AxisId,      label:"組織葛藤 (C)", short:"組織葛藤", color:"#fbbf24",
    advice:"「変えられること」と「変えられないこと」を紙に書き出し、変えられないことへの執着を少しずつ手放していきましょう。" },
  { id:"body" as AxisId,       label:"身体的消耗 (D)", short:"身体消耗", color:"#60a5fa",
    advice:"自律神経系が疲弊しています。まず睡眠と食事を優先し、知的活動は後回しにして体を休めることが最優先です。" },
]

function RadarChart({ scores }: { scores: Record<AxisId,number> }) {
  const cx=150, cy=140, maxR=100, maxScore=15
  const angles = [-90,0,90,180].map(a=>(a*Math.PI)/180)
  const axisIds: AxisId[] = ["compassion","overload","body","moral"]
  const toXY = (angle:number, r:number) => ({ x: cx+r*Math.cos(angle), y: cy+r*Math.sin(angle) })
  const gridLevels = [3,6,9,12,15]
  const scorePoints = axisIds.map((id,i) => {
    const r=(scores[id]/maxScore)*maxR
    return toXY(angles[i],r)
  })
  const scoreD = scorePoints.map((p,i)=>`${i===0?"M":"L"}${p.x},${p.y}`).join(" ")+" Z"

  return (
    <svg width="100%" height="280" viewBox="0 0 300 280">
      {gridLevels.map(level => {
        const r=(level/maxScore)*maxR
        const pts=angles.map(a=>toXY(a,r))
        const d=pts.map((p,i)=>`${i===0?"M":"L"}${p.x},${p.y}`).join(" ")+" Z"
        return <path key={level} d={d} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      })}
      {angles.map((a,i) => {
        const end=toXY(a,maxR)
        return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      })}
      <path d={scoreD} fill="rgba(143,175,159,0.2)" stroke="#8FAF9F" strokeWidth="2" />
      {scorePoints.map((p,i) => (
        <circle key={i} cx={p.x} cy={p.y} r="5"
          fill={AXES.find(a=>a.id===axisIds[i])?.color ?? "#8FAF9F"}
          stroke="#1e2a3a" strokeWidth="2" />
      ))}
      {axisIds.map((id,i) => {
        const axis=AXES.find(a=>a.id===id)!
        const pos=toXY(angles[i],maxR+26)
        return (
          <text key={id} x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="middle"
            fontSize="13" fill={axis.color} fontWeight="700">
            {axis.short}
          </text>
        )
      })}
      {[5,10,15].map(v => {
        const r=(v/maxScore)*maxR
        return <text key={v} x={cx+4} y={cy-r+4} fontSize="9" fill="rgba(255,255,255,0.3)">{v}</text>
      })}
    </svg>
  )
}

function MabiRadar() {
  const [scores, setScores] = useState<Record<AxisId,number>>({ compassion:0, overload:0, moral:0, body:0 })
  const total   = Object.values(scores).reduce((a,b)=>a+b,0)
  const topAxis = AXES.reduce((a,b)=>scores[a.id]>=scores[b.id]?a:b)

  const getJudgment = () => {
    if (total>=40) return { label:"要注意", color:"#e07070", icon:"🔴" }
    if (total>=24) return { label:"注意",   color:"#fb923c", icon:"⚠️" }
    if (total>=12) return { label:"やや注意",color:"#fbbf24", icon:"🟡" }
    return               { label:"安定",   color:"#7EB8A4", icon:"🌿" }
  }
  const judgment = getJudgment()

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px", padding: "24px 20px",
      color: "#e2e8f0", marginBottom: "2rem", fontFamily: "system-ui, sans-serif",
    }}>

      {/* タイトル */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
          MABI-HP バーンアウト・アセスメント
        </p>
        <p style={{ fontSize: "12px", color: "#64748b" }}>Multidimensional Assessment of Burnout Inventory</p>
      </div>

      {/* スコアカード */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <div style={{ flex:1, padding:"12px", background:"rgba(255,255,255,0.05)",
          border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", textAlign:"center" as const }}>
          <p style={{ fontSize:"12px", color:"#64748b", marginBottom:"4px" }}>合計スコア</p>
          <p style={{ fontSize:"28px", fontWeight:700, color:"#94a3b8", lineHeight:1 }}>{total}<span style={{fontSize:"14px"}}>/60</span></p>
        </div>
        <div style={{ flex:1, padding:"12px", background: judgment.color+"18",
          border:`1px solid ${judgment.color}40`, borderRadius:"12px", textAlign:"center" as const }}>
          <p style={{ fontSize:"12px", color:"#64748b", marginBottom:"4px" }}>判定</p>
          <p style={{ fontSize:"22px", fontWeight:700, color:judgment.color, lineHeight:1 }}>
            {judgment.icon} {judgment.label}
          </p>
        </div>
      </div>

      {/* 警告 */}
      {total>=40 && (
        <div style={{ padding:"10px 14px", background:"rgba(224,112,112,0.12)",
          border:"1px solid rgba(224,112,112,0.3)", borderRadius:"10px", marginBottom:"14px",
          fontSize:"13px", color:"#e07070" }}>
          ⚠️ 危険域の領域があります。バーンアウトの限界点を超えている可能性が高いため、即時的なケアが必要です。
        </div>
      )}

      {/* レーダーチャート */}
      <div style={{ background:"rgba(0,0,0,0.25)", borderRadius:"14px", padding:"8px",
        marginBottom:"16px", display:"flex", justifyContent:"center" }}>
        <RadarChart scores={scores} />
      </div>

      {/* 最高軸アドバイス */}
      {total > 0 && (
        <div style={{ padding:"14px 16px", background:"rgba(255,255,255,0.06)",
          borderLeft:`4px solid ${topAxis.color}`, borderRadius:"12px", marginBottom:"20px" }}>
          <p style={{ fontSize:"13px", color:topAxis.color, fontWeight:700, marginBottom:"6px" }}>
            最も強いサイン：{topAxis.label}（{scores[topAxis.id]}点）
          </p>
          <p style={{ fontSize:"14px", color:"#cbd5e1", lineHeight:1.8 }}>{topAxis.advice}</p>
        </div>
      )}

      {/* スライダー 2×2 */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginBottom:"20px" }}>
        {AXES.map((axis) => (
          <div key={axis.id}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
              <p style={{ fontSize:"13px", color:axis.color, fontWeight:600 }}>{axis.label}</p>
              <p style={{ fontSize:"13px", color:axis.color, fontWeight:700 }}>{scores[axis.id]}</p>
            </div>
            <input type="range" min="0" max="15" step="1" value={scores[axis.id]}
              onChange={(e)=>setScores(p=>({...p,[axis.id]:Number(e.target.value)}))}
              style={{ width:"100%", accentColor:axis.color }} />
          </div>
        ))}
      </div>

      {/* ボタン */}
      <div style={{ display:"flex", gap:"10px" }}>
        <button onClick={()=>setScores({compassion:0,overload:0,moral:0,body:0})}
          style={{ padding:"12px 16px", background:"rgba(255,255,255,0.08)", color:"#94a3b8",
            border:"1px solid rgba(255,255,255,0.1)", borderRadius:"10px", fontSize:"13px", cursor:"pointer" }}>
          リセット
        </button>
        <a href="/#contact" style={{ flex:1, padding:"12px", background:"#2C1F14", color:"#fff",
          borderRadius:"10px", fontSize:"14px", fontWeight:600, textDecoration:"none",
          textAlign:"center" as const, display:"block" }}>
          ✉ 今の状態を整理してみる（初回無料）
        </a>
      </div>
    </div>
  )
}

export default function HelperMabiRadar() {
  return (
    <ArticleLayout
      title="MABI-HPレーダーアセスメント｜支援職の4軸バーンアウト診断"
      description="共感疲労・過剰適応・組織葛藤・身体的消耗の4軸でバーンアウトの状態をレーダーチャートで可視化するアセスメントツールです。"
      url="https://www.ishizue-counseling.jp/articles/helper-mabi-radar"
      date="2026-04-12"
      tags={["burnout", "check", "compassion", "recovery"]}
    >
      <p>
        バーンアウトは一種類ではありません。4つの次元から消耗が進行します。
        スライダーで各領域のスコアを入力して、消耗の「震源地」をレーダーチャートで確認してください。
      </p>
      <MabiRadar />
      <h2>4つの領域について</h2>
      <div className="card space-y-4">
        {AXES.map((axis) => (
          <div key={axis.id}>
            <p className="text-sm font-medium mb-1" style={{ color: axis.color }}>{axis.label}</p>
            <p className="text-sm text-stone-600 leading-relaxed">{axis.advice}</p>
          </div>
        ))}
      </div>
      <p className="check-disclaimer">このツールは診断ではなく、自分の状態に気づくための目安です。スコアが高い場合は専門家への相談をおすすめします。</p>
    </ArticleLayout>
  )
}

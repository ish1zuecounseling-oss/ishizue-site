import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const DEMANDS = [
  { id: "caseload",  label: "事務作業・業務量",   color: "#f87171" },
  { id: "emotional", label: "感情労働の負荷",      color: "#fb923c" },
  { id: "role",      label: "役割の葛藤・無力感",  color: "#fbbf24" },
]
const RESOURCES = [
  { id: "autonomy",  label: "業務の裁量権",        color: "#7EB8A4" },
  { id: "peer",      label: "ピアサポート",         color: "#6BA89A" },
  { id: "selfcare",  label: "睡眠・セルフケア",     color: "#8FAF9F" },
]

function JdrBalance() {
  const [demands,   setDemands]   = useState<Record<string,number>>({ caseload:5, emotional:5, role:3 })
  const [resources, setResources] = useState<Record<string,number>>({ autonomy:3, peer:3, selfcare:3 })

  const totalD  = Object.values(demands).reduce((a,b)=>a+b,0)
  const totalR  = Object.values(resources).reduce((a,b)=>a+b,0)
  const balance = totalR - totalD
  const tiltDeg = Math.max(-28, Math.min(28, -balance * 2))

  const getStatus = () => {
    if (balance >= 5)  return { label:"余裕あり",   color:"#7EB8A4", icon:"🌿" }
    if (balance >= 0)  return { label:"均衡",       color:"#a0c0a0", icon:"⚖️" }
    if (balance >= -8) return { label:"要注意",     color:"#fb923c", icon:"⚠️" }
    return               { label:"危険ゾーン",     color:"#e07070", icon:"🔴" }
  }
  const status = getStatus()

  const getDemandAdvice = (): string | null => {
    // 要求が全て0なら助言不要
    if (totalD === 0) return null
    const maxVal = Math.max(...Object.values(demands))
    // 全て同点なら総合的な助言
    const maxKeys = Object.entries(demands).filter(([,v])=>v===maxVal).map(([k])=>k)
    if (maxKeys.length === 3) return "複数の要求が均等に高い状態です。まず「今週一番しんどいもの」を一つだけ選んで、そこから取り組んでみましょう。"
    const topKey = maxKeys[0]
    if (topKey==="caseload")  return "業務量が最も高い負荷になっています。タスクの優先順位を見直し、「6割の完成度」で提出することを検討してください。"
    if (topKey==="emotional") return "感情労働の負荷が最も高い状態です。セッション後に5分間の「感情の切り替えルーティン」を設けましょう。"
    return "役割の葛藤が最も強い状態です。「自分にできること・できないこと」を紙に書き出して整理してみましょう。"
  }
  const getResourceAdvice = (): string | null => {
    // 資源が全て最大（10）なら助言不要
    if (totalR >= 30) return null
    const minVal = Math.min(...Object.values(resources))
    const minKeys = Object.entries(resources).filter(([,v])=>v===minVal).map(([k])=>k)
    // 全て同点なら総合的な助言
    if (minKeys.length === 3) return "全体的に資源が少ない状態です。まず「今日できる一番小さなセルフケア」を一つだけ決めて実行してみましょう。"
    const bottomKey = minKeys[0]
    if (bottomKey==="autonomy")  return "裁量権が最も少ない状態です。小さな業務でも「自分が決められる部分」を意識的に作りましょう。"
    if (bottomKey==="peer")      return "ピアサポートが最も不足しています。月1回でも同職種の仲間と話す場を確保することが重要です。"
    return "セルフケアが最も不足しています。まず5分でも良いので、スマホを置いて目を閉じる時間を確保してください。"
  }

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px", padding: "24px 20px",
      color: "#e2e8f0", marginBottom: "2rem", fontFamily: "system-ui, sans-serif",
    }}>

      {/* タイトル */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
          JD-Rバランス・シミュレーター
        </p>
        <p style={{ fontSize: "12px", color: "#64748b" }}>Job Demands-Resources Model</p>
      </div>

      {/* スコアカード */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "16px" }}>
        {[
          { label: "合計要求", value: totalD.toFixed(1), color: "#f87171" },
          { label: "合計資源", value: totalR.toFixed(1), color: "#7EB8A4" },
          { label: "バランス", value: (balance>0?"+":"")+balance.toFixed(1), color: status.color },
        ].map((s) => (
          <div key={s.label} style={{
            padding: "12px", background: "rgba(255,255,255,0.05)",
            border: `1px solid ${s.color}30`, borderRadius: "12px", textAlign: "center" as const,
          }}>
            <p style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>{s.label}</p>
            <p style={{ fontSize: "24px", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* 警告 */}
      {balance < 0 && (
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "10px 14px", background: "rgba(224,112,112,0.12)",
          border: "1px solid rgba(224,112,112,0.3)", borderRadius: "10px", marginBottom: "14px",
        }}>
          <span>{status.icon}</span>
          <p style={{ fontSize: "13px", color: status.color, fontWeight: 600 }}>
            {status.label}（即時の環境調整が必要です）
          </p>
        </div>
      )}

      {/* シーソー */}
      <div style={{
        background: "rgba(0,0,0,0.25)", borderRadius: "14px",
        padding: "16px", marginBottom: "16px", display: "flex", justifyContent: "center",
      }}>
        <svg width="100%" height="130" viewBox="0 0 280 130">
          <polygon points="140,100 128,115 152,115" fill="#475569" />
          <rect x="120" y="114" width="40" height="6" rx="3" fill="#334155" />
          <g transform={`rotate(${-tiltDeg}, 140, 100)`}>
            <rect x="30" y="95" width="220" height="8" rx="4" fill="#334155" />
            <rect x="30" y="65" width="6" height="32" rx="3" fill="#f87171" opacity="0.8" />
            <text x="44" y="88" fontSize="13" fill="#f87171" fontWeight="700">要求</text>
            <rect x="244" y="78" width="6" height="20" rx="3" fill="#7EB8A4" opacity="0.8" />
            <text x="210" y="88" fontSize="13" fill="#7EB8A4" fontWeight="700">資源</text>
            <text x="213" y="72" fontSize="20" fill="#7EB8A4">🌿</text>
          </g>
        </svg>
      </div>

      {/* アドバイス — 内容がある場合のみ表示 */}
      {(getDemandAdvice() || getResourceAdvice()) && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
          {getDemandAdvice() && (
            <div style={{
              padding: "14px", background: "rgba(248,113,113,0.1)",
              border: "1px solid rgba(248,113,113,0.25)", borderRadius: "12px",
            }}>
              <p style={{ fontSize: "12px", color: "#f87171", fontWeight: 700, marginBottom: "6px" }}>
                【要求低減の提案】
              </p>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.7 }}>{getDemandAdvice()}</p>
            </div>
          )}
          {getResourceAdvice() && (
            <div style={{
              padding: "14px", background: "rgba(126,184,164,0.1)",
              border: "1px solid rgba(126,184,164,0.25)", borderRadius: "12px",
            }}>
              <p style={{ fontSize: "12px", color: "#7EB8A4", fontWeight: 700, marginBottom: "6px" }}>
                【リソース獲得の提案】
              </p>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.7 }}>{getResourceAdvice()}</p>
            </div>
          )}
          {!getDemandAdvice() && !getResourceAdvice() && (
            <div style={{ gridColumn: "1/-1", padding: "14px", background: "rgba(126,184,164,0.1)",
              border: "1px solid rgba(126,184,164,0.25)", borderRadius: "12px" }}>
              <p style={{ fontSize: "13px", color: "#7EB8A4", lineHeight: 1.7 }}>
                🌿 要求と資源のバランスが取れています。この状態を維持するために、日々のセルフケアを続けましょう。
              </p>
            </div>
          )}
        </div>
      )}
      {/* バランスが良い場合のメッセージ */}
      {!getDemandAdvice() && !getResourceAdvice() && (
        <div style={{ padding: "14px", background: "rgba(126,184,164,0.1)",
          border: "1px solid rgba(126,184,164,0.25)", borderRadius: "12px", marginBottom: "20px" }}>
          <p style={{ fontSize: "13px", color: "#7EB8A4", lineHeight: 1.7 }}>
            🌿 要求と資源のバランスが取れています。この状態を維持するために、日々のセルフケアを続けましょう。
          </p>
        </div>
      )}

      {/* スライダー */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
        <div>
          <p style={{ fontSize: "13px", color: "#f87171", fontWeight: 600, marginBottom: "10px" }}>
            🔴 仕事の要求
          </p>
          {DEMANDS.map((d) => (
            <div key={d.id} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <p style={{ fontSize: "12px", color: "#94a3b8" }}>{d.label}</p>
                <p style={{ fontSize: "12px", color: d.color, fontWeight: 600 }}>{demands[d.id]}</p>
              </div>
              <input type="range" min="0" max="10" step="0.1" value={demands[d.id]}
                onChange={(e) => setDemands(p=>({...p,[d.id]:Number(e.target.value)}))}
                style={{ width: "100%", accentColor: d.color }} />
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: "13px", color: "#7EB8A4", fontWeight: 600, marginBottom: "10px" }}>
            🌿 職場・個人の資源
          </p>
          {RESOURCES.map((r) => (
            <div key={r.id} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <p style={{ fontSize: "12px", color: "#94a3b8" }}>{r.label}</p>
                <p style={{ fontSize: "12px", color: r.color, fontWeight: 600 }}>{resources[r.id]}</p>
              </div>
              <input type="range" min="0" max="10" step="0.1" value={resources[r.id]}
                onChange={(e) => setResources(p=>({...p,[r.id]:Number(e.target.value)}))}
                style={{ width: "100%", accentColor: r.color }} />
            </div>
          ))}
        </div>
      </div>

      {/* ボタン */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => { setDemands({caseload:5,emotional:5,role:3}); setResources({autonomy:3,peer:3,selfcare:3}) }}
          style={{ padding: "12px 16px", background: "rgba(255,255,255,0.08)", color: "#94a3b8",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", fontSize: "13px", cursor: "pointer" }}>
          リセット
        </button>
        <a href="/#contact" style={{ flex:1, padding:"12px", background:"#2C1F14", color:"#fff",
          borderRadius:"10px", fontSize:"14px", fontWeight:600, textDecoration:"none",
          textAlign:"center" as const, display:"block" }}>
          ✉ バランスを整える相談をする（初回無料）
        </a>
      </div>
    </div>
  )
}

export default function HelperJdrBalance() {
  return (
    <ArticleLayout
      title="JD-Rバランスシミュレーター｜支援職の消耗タイプ診断と処方箋"
      description="仕事の要求と職場・個人の資源のバランスをシーソーで可視化するインタラクティブツールです。JD-Rモデルに基づく支援職向け消耗診断。"
      url="https://www.ishizue-counseling.jp/articles/helper-jdr-balance"
      date="2026-04-12"
      tags={["burnout", "recovery", "boundary", "check"]}
    >
      <p>
        バーンアウトは「仕事の要求」が「個人・職場の資源」を上回ったときに起きます。
        スライダーで現在の状態を調整して、バランスをシーソーで確認してみてください。
      </p>
      <JdrBalance />
      <h2>JD-Rモデルとは</h2>
      <div className="card">
        <ul className="space-y-2 text-sm text-stone-600">
          <li><strong className="text-stone-800">仕事の要求</strong>：業務量・感情労働・役割の葛藤など、エネルギーを消耗させるもの</li>
          <li><strong className="text-stone-800">仕事の資源</strong>：裁量権・サポート・セルフケアなど、エネルギーを回復させるもの</li>
          <li>要求が資源を上回り続けると、バーンアウトへと進行します</li>
        </ul>
      </div>
      <p className="check-disclaimer">このツールは診断ではなく、自分の状態に気づくための目安です。</p>
    </ArticleLayout>
  )
}

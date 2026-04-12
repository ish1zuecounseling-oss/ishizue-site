import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  データ定義                                                                  */
/* -------------------------------------------------------------------------- */

type DemandItem = { id: string; label: string; color: string }
type ResourceItem = { id: string; label: string; color: string }

const DEMANDS: DemandItem[] = [
  { id: "caseload",   label: "事務作業・業務量",     color: "#e07070" },
  { id: "emotional",  label: "感情労働の負荷",        color: "#e08070" },
  { id: "role",       label: "役割の葛藤・無力感",    color: "#d07080" },
]

const RESOURCES: ResourceItem[] = [
  { id: "autonomy",   label: "業務の裁量権",          color: "#7EB8A4" },
  { id: "peer",       label: "ピアサポート",           color: "#6BA89A" },
  { id: "selfcare",   label: "睡眠・セルフケア",       color: "#8FAF9F" },
]

/* -------------------------------------------------------------------------- */
/*  Widget                                                                     */
/* -------------------------------------------------------------------------- */

function JdrBalance() {
  const [demands,   setDemands]   = useState<Record<string, number>>({ caseload: 5, emotional: 5, role: 3 })
  const [resources, setResources] = useState<Record<string, number>>({ autonomy: 3, peer: 3, selfcare: 3 })

  const totalD = Object.values(demands).reduce((a, b) => a + b, 0)
  const totalR = Object.values(resources).reduce((a, b) => a + b, 0)
  const balance = totalR - totalD  // 正：余裕あり、負：消耗

  const getStatus = () => {
    if (balance >= 5)  return { label: "余裕あり",         color: "#7EB8A4", icon: "🌿" }
    if (balance >= 0)  return { label: "均衡状態",         color: "#a0c0a0", icon: "⚖️" }
    if (balance >= -8) return { label: "要注意ゾーン",     color: "#e0a070", icon: "⚠️" }
    return               { label: "危険：バーンアウト・レッドゾーン", color: "#e07070", icon: "🔴" }
  }

  const status = getStatus()

  // シーソーの傾き（-30度〜+30度）
  const tiltDeg = Math.max(-28, Math.min(28, balance * 2))

  const getDemandAdvice = () => {
    const maxD = Object.entries(demands).reduce((a, b) => a[1] > b[1] ? a : b)
    if (maxD[0] === "caseload")  return "業務量が過多です。タスクの優先順位を見直し、「6割の完成度」で提出することを検討してください。"
    if (maxD[0] === "emotional") return "感情労働の負荷が高い状態です。セッション後に5分間の「感情の切り替えルーティン」を設けましょう。"
    return "役割の葛藤が強い状態です。「自分にできること・できないこと」を紙に書き出して整理してみましょう。"
  }

  const getResourceAdvice = () => {
    const minR = Object.entries(resources).reduce((a, b) => a[1] < b[1] ? a : b)
    if (minR[0] === "autonomy")  return "裁量権が少ない環境です。小さな業務でも「自分が決められる部分」を意識的に作りましょう。"
    if (minR[0] === "peer")      return "ピアサポートが不足しています。月1回でも同職種の仲間と話す場を確保することが重要です。"
    return "セルフケアが不足しています。まず5分でも良いので、スマホを置いて目を閉じる時間を確保してください。"
  }

  const reset = () => {
    setDemands({ caseload: 5, emotional: 5, role: 3 })
    setResources({ autonomy: 3, peer: 3, selfcare: 3 })
  }

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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#f1f5f9", marginBottom: "2px" }}>
            JD-Rバランス・シミュレーター
          </p>
          <p style={{ fontSize: "10px", color: "#64748b" }}>Job Demands-Resources Model</p>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "#64748b", marginBottom: "2px" }}>合計要求</p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "#e07070", lineHeight: 1 }}>{totalD.toFixed(1)}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "#64748b", marginBottom: "2px" }}>合計資源</p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "#7EB8A4", lineHeight: 1 }}>{totalR.toFixed(1)}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "#64748b", marginBottom: "2px" }}>バランス</p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: status.color, lineHeight: 1 }}>
              {balance > 0 ? "+" : ""}{balance.toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      {/* ステータス */}
      {balance < 0 && (
        <div style={{
          background: "rgba(224,112,112,0.12)",
          border: "1px solid rgba(224,112,112,0.3)",
          borderRadius: "10px",
          padding: "8px 12px",
          marginBottom: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <span style={{ fontSize: "14px" }}>{status.icon}</span>
          <p style={{ fontSize: "11px", color: status.color, fontWeight: 600 }}>
            危険：{status.label}（即時の環境調整が必要です）
          </p>
        </div>
      )}

      {/* シーソービジュアル */}
      <div style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: "14px",
        padding: "16px",
        marginBottom: "14px",
        display: "flex",
        justifyContent: "center",
      }}>
        <svg width="280" height="130" viewBox="0 0 280 130">
          {/* 支点 */}
          <polygon points="140,100 128,115 152,115" fill="#475569" />
          <rect x="120" y="114" width="40" height="6" rx="3" fill="#334155" />

          {/* シーソーの棒 */}
          <g transform={`rotate(${-tiltDeg}, 140, 100)`}>
            <rect x="30" y="95" width="220" height="8" rx="4" fill="#334155" />

            {/* 要求側（左） */}
            <rect x="30" y="68" width="6" height="30" rx="3" fill="#e07070" opacity="0.7" />
            <rect x="30" y="48" width="6" height="30" rx="3" fill="#e08070" opacity="0.5" />
            <text x="43" y="88" fontSize="11" fill="#e07070">要求</text>
            <text x="36" y="104" fontSize="9" fill="#e07070" fontWeight="700">×</text>

            {/* 資源側（右） */}
            <rect x="244" y="78" width="6" height="20" rx="3" fill="#7EB8A4" opacity="0.7" />
            <text x="214" y="88" fontSize="11" fill="#7EB8A4">資源</text>
            <text x="213" y="74" fontSize="18" fill="#7EB8A4">🌿</text>
          </g>
        </svg>
      </div>

      {/* アドバイスカード */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
        <div style={{
          background: "rgba(224,112,112,0.1)",
          border: "1px solid rgba(224,112,112,0.25)",
          borderRadius: "10px",
          padding: "10px",
        }}>
          <p style={{ fontSize: "10px", color: "#e07070", fontWeight: 700, marginBottom: "4px" }}>
            【要求低減の提案】
          </p>
          <p style={{ fontSize: "10px", color: "#cbd5e1", lineHeight: 1.65 }}>{getDemandAdvice()}</p>
        </div>
        <div style={{
          background: "rgba(126,184,164,0.1)",
          border: "1px solid rgba(126,184,164,0.25)",
          borderRadius: "10px",
          padding: "10px",
        }}>
          <p style={{ fontSize: "10px", color: "#7EB8A4", fontWeight: 700, marginBottom: "4px" }}>
            【リソース獲得の提案】
          </p>
          <p style={{ fontSize: "10px", color: "#cbd5e1", lineHeight: 1.65 }}>{getResourceAdvice()}</p>
        </div>
      </div>

      {/* スライダーエリア */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
        {/* 要求 */}
        <div>
          <p style={{ fontSize: "10px", color: "#e07070", fontWeight: 600, marginBottom: "8px" }}>
            🔴 仕事の要求（エネルギーを奪うもの）
          </p>
          {DEMANDS.map((d) => (
            <div key={d.id} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                <p style={{ fontSize: "10px", color: "#94a3b8" }}>{d.label}</p>
                <p style={{ fontSize: "10px", color: d.color, fontWeight: 600 }}>{demands[d.id]}</p>
              </div>
              <input
                type="range" min="0" max="10" step="0.1"
                value={demands[d.id]}
                onChange={(e) => setDemands((prev) => ({ ...prev, [d.id]: Number(e.target.value) }))}
                style={{ width: "100%", accentColor: d.color }}
              />
            </div>
          ))}
        </div>

        {/* 資源 */}
        <div>
          <p style={{ fontSize: "10px", color: "#7EB8A4", fontWeight: 600, marginBottom: "8px" }}>
            🌿 職場・個人の資源（エネルギーを回復させるもの）
          </p>
          {RESOURCES.map((r) => (
            <div key={r.id} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                <p style={{ fontSize: "10px", color: "#94a3b8" }}>{r.label}</p>
                <p style={{ fontSize: "10px", color: r.color, fontWeight: 600 }}>{resources[r.id]}</p>
              </div>
              <input
                type="range" min="0" max="10" step="0.1"
                value={resources[r.id]}
                onChange={(e) => setResources((prev) => ({ ...prev, [r.id]: Number(e.target.value) }))}
                style={{ width: "100%", accentColor: r.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ボタン */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={reset}
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
          ✉ バランスを整える相談をする（初回無料）
        </a>
      </div>

    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HelperJdrBalance() {
  return (
    <ArticleLayout
      title="JD-Rバランスシミュレーター｜支援職の消耗タイプ診断と処方箋"
      description="仕事の要求（ストレス要因）と職場・個人の資源（回復要因）のバランスをスライダーで調整して、バーンアウトリスクを可視化するインタラクティブツールです。JD-Rモデルに基づく支援職向け消耗診断。"
      url="https://www.ishizue-counseling.jp/articles/helper-jdr-balance"
      date="2026-04-12"
      tags={["burnout", "recovery", "boundary", "check"]}
    >
      <p>
        バーンアウトの研究で広く知られる<strong>JD-Rモデル（仕事の要求－資源モデル）</strong>では、
        消耗は「仕事の要求」が「個人・職場の資源」を上回ったときに起きると説明されています。
      </p>
      <p>
        このシミュレーターでは、あなたの現在の「要求」と「資源」をスライダーで調整することで、
        バランスの状態をシーソーで視覚化できます。
      </p>

      <JdrBalance />

      <h2>JD-Rモデルとは</h2>
      <div className="card">
        <ul className="space-y-2 text-sm text-stone-600">
          <li><strong className="text-stone-800">仕事の要求（Demands）</strong>：業務量・感情労働・役割の葛藤など、エネルギーを消耗させるもの</li>
          <li><strong className="text-stone-800">仕事の資源（Resources）</strong>：裁量権・サポート・セルフケアなど、エネルギーを回復させるもの</li>
          <li>要求が資源を上回り続けると、バーンアウトへと進行します</li>
        </ul>
      </div>
      <p>
        支援職は「要求」が構造的に高い一方で、「資源」が不足しやすい環境に置かれています。
        要求を下げることが難しい場合は、資源を増やすアプローチが有効です。
      </p>
      <p className="check-disclaimer">
        このツールは診断ではなく、自分の状態に気づくための目安です。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

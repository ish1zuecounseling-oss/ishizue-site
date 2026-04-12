import { useState, useEffect } from "react"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  Widget                                                                     */
/* -------------------------------------------------------------------------- */

function BoundaryBoard() {
  const [fusion, setFusion]       = useState(50)  // 感情の巻き込まれ度
  const [guilt, setGuilt]         = useState(50)  // 自責・罪悪感
  const [tick, setTick]           = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 50)
    return () => clearInterval(id)
  }, [])

  // 円の重なり具合（fusionが高いほど重なる）
  const overlap  = fusion / 100        // 0〜1
  const selfX    = 120
  const clientX  = 120 + 80 - overlap * 70  // 近づく
  const r        = 52

  // 診断メッセージ
  const getMessage = () => {
    if (fusion >= 70 && guilt >= 70) return {
      tag: "メサイア・トラップの警告",
      color: "#e07070",
      body: "過剰な責任感で自分を消そうとしています。「私が100%解決できなくても、支援者としての存在価値は変わらない」と声に出してみてください。",
    }
    if (fusion >= 70) return {
      tag: "感情の巻き込まれに注意",
      color: "#e0a070",
      body: "相手の感情と自分の感情の境界が曖昧になっています。「これは相手の感情であり、私の感情ではない」と観察する視点を持ちましょう。",
    }
    if (guilt >= 70) return {
      tag: "罪悪感の過負荷",
      color: "#c080d0",
      body: "自責が強くなっています。支援者が休むことは、より良い支援のための準備です。罪悪感は「真剣さの証」ですが、行動の指針にはなりません。",
    }
    if (fusion <= 30 && guilt <= 30) return {
      tag: "バウンダリー良好",
      color: "#7EB8A4",
      body: "自分と相手の境界線が保たれています。この状態を維持するために、日々の小さなセルフケアを続けましょう。",
    }
    return {
      tag: "やや注意が必要な状態",
      color: "#8FAF9F",
      body: "境界線が少し曖昧になってきています。仕事後に「今日の自分の感情」を5分書き出すことが、境界線の回復に役立ちます。",
    }
  }

  const msg = getMessage()
  const selfLabel  = `自己同一化 ${fusion}%`
  const guiltLabel = `心理的負荷 ${guilt}%`

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
            境界線と脱フュージョン・ボード
          </p>
          <p style={{ fontSize: "10px", color: "#64748b" }}>Boundary &amp; Defusion Board</p>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "#64748b", marginBottom: "2px" }}>自己同一化</p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "#c084fc", lineHeight: 1 }}>{fusion}%</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "#64748b", marginBottom: "2px" }}>心理的負荷</p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "#fb923c", lineHeight: 1 }}>{guilt}%</p>
          </div>
        </div>
      </div>

      {/* ベン図 */}
      <div style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: "14px",
        padding: "16px",
        marginBottom: "14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        {/* ラベル行（SVG外に出す） */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", padding: "0 8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "16px" }}>👤</span>
            <span style={{ fontSize: "12px", color: "#c084fc", fontWeight: 600 }}>あなた</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "12px", color: "#fb923c", fontWeight: 600 }}>対象者</span>
            <span style={{ fontSize: "16px" }}>👥</span>
          </div>
        </div>

        <svg width="100%" height="130" viewBox="0 0 280 120" style={{ maxWidth: "320px" }}>
          {/* グリッド */}
          {[...Array(8)].map((_, i) => (
            <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="120"
              stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
          {[...Array(4)].map((_, i) => (
            <line key={i} x1="0" y1={i * 35} x2="280" y2={i * 35}
              stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}

          {/* 自分の円 */}
          <circle cx={selfX} cy="60" r={r}
            fill="rgba(192,132,252,0.15)"
            stroke="rgba(192,132,252,0.6)"
            strokeWidth="2" />

          {/* 対象者の円 */}
          <circle cx={clientX} cy="60" r={r}
            fill="rgba(251,146,60,0.12)"
            stroke="rgba(251,146,60,0.5)"
            strokeWidth="2" />

          {/* 重なり具合の数値 */}
          <text x="140" y="65" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.5)" fontWeight="700">
            {Math.round(overlap * 100)}%
          </text>
          <text x="140" y="80" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.3)">
            重なり
          </text>
        </svg>
      </div>

      {/* 診断メッセージ */}
      <div style={{
        background: "rgba(255,255,255,0.06)",
        borderRadius: "12px",
        padding: "12px 14px",
        marginBottom: "14px",
        borderLeft: `3px solid ${msg.color}`,
      }}>
        <p style={{ fontSize: "13px", color: msg.color, fontWeight: 700, marginBottom: "4px" }}>
          【{msg.tag}】
        </p>
        <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.75 }}>{msg.body}</p>
      </div>

      {/* スライダー */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* 感情の巻き込まれ度 */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <p style={{ fontSize: "13px", color: "#94a3b8" }}>感情の巻き込まれ度</p>
            <p style={{ fontSize: "13px", color: "#c084fc", fontWeight: 600 }}>{fusion}</p>
          </div>
          <input
            type="range" min="0" max="100" value={fusion}
            onChange={(e) => setFusion(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#c084fc" }}
          />
        </div>

        {/* 自責・罪悪感の強さ */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <p style={{ fontSize: "13px", color: "#94a3b8" }}>自責・罪悪感の強さ</p>
            <p style={{ fontSize: "13px", color: "#fb923c", fontWeight: 600 }}>{guilt}</p>
          </div>
          <input
            type="range" min="0" max="100" value={guilt}
            onChange={(e) => setGuilt(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#fb923c" }}
          />
        </div>
      </div>

      {/* CTAボタン */}
      <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
        <button
          onClick={() => { setFusion(50); setGuilt(50) }}
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
          ✉ 境界線を再構築する（初回無料）
        </a>
      </div>

    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HelperBoundaryBoard() {
  return (
    <ArticleLayout
      title="境界線・脱フュージョンボード｜支援職のための感情の巻き込まれチェック"
      description="感情の巻き込まれ度と自責・罪悪感の強さをスライダーで調整して、今の境界線の状態を可視化するインタラクティブツールです。支援職の共感疲労・メサイアトラップの気づきに。"
      url="https://www.ishizue-counseling.jp/articles/helper-boundary-board"
      date="2026-04-12"
      tags={["boundary", "compassion", "burnout"]}
    >
      <p>
        支援職で消耗する大きな原因のひとつが、<strong>自分と相手の感情の境界線が曖昧になること</strong>です。
        相手の痛みを「自分のこと」として引き受けすぎていませんか？
      </p>
      <p>
        このボードでは、感情の巻き込まれ度と自責・罪悪感の強さをスライダーで調整することで、
        今の境界線の状態を視覚的に確認できます。
      </p>

      <BoundaryBoard />

      <h2>ベン図が示すもの</h2>
      <p>
        2つの円は「あなた自身」と「支援の対象者（利用者・クライアント）」を表しています。
        感情の巻き込まれ度が高いほど、2つの円が重なり合います。
      </p>
      <div className="card">
        <ul className="space-y-2 text-sm text-stone-600">
          <li>円が離れている状態：境界線が保たれており、健全な支援関係</li>
          <li>円が重なりはじめる状態：感情的な巻き込まれが始まっているサイン</li>
          <li>円が大きく重なる状態：共感疲労・二次受傷のリスクが高い状態</li>
        </ul>
      </div>
      <p>
        境界線を引くことは「冷たさ」ではありません。
        長く支援を続けるために必要な、誠実さの技術です。
      </p>
      <p className="check-disclaimer">
        このツールは診断ではなく、自分の状態に気づくための目安です。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

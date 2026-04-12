import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

function BoundaryBoard() {
  const [fusion, setFusion] = useState(50)
  const [guilt,  setGuilt]  = useState(50)

  const overlap = fusion / 100
  const selfX   = 110
  const clientX = 110 + 90 - overlap * 75
  const r       = 55

  const getMessage = () => {
    if (fusion >= 70 && guilt >= 70) return {
      tag: "メサイア・トラップの警告", color: "#e07070",
      body: "過剰な責任感で自分を消そうとしています。「私が100%解決できなくても、支援者としての存在価値は変わらない」と声に出してみてください。",
    }
    if (fusion >= 70) return {
      tag: "感情の巻き込まれに注意", color: "#fb923c",
      body: "相手の感情と自分の感情の境界が曖昧になっています。「これは相手の感情であり、私の感情ではない」と観察する視点を持ちましょう。",
    }
    if (guilt >= 70) return {
      tag: "罪悪感の過負荷", color: "#c084fc",
      body: "自責が強くなっています。支援者が休むことは、より良い支援のための準備です。罪悪感は「真剣さの証」ですが、行動の指針にはなりません。",
    }
    if (fusion <= 30 && guilt <= 30) return {
      tag: "バウンダリー良好", color: "#7EB8A4",
      body: "自分と相手の境界線が保たれています。この状態を維持するために、日々の小さなセルフケアを続けましょう。",
    }
    return {
      tag: "やや注意が必要な状態", color: "#8FAF9F",
      body: "境界線が少し曖昧になってきています。仕事後に「今日の自分の感情」を5分書き出すことが、境界線の回復に役立ちます。",
    }
  }

  const msg = getMessage()

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px",
      padding: "24px 20px",
      color: "#e2e8f0",
      marginBottom: "2rem",
      fontFamily: "system-ui, sans-serif",
    }}>

      {/* タイトル */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
          境界線と脱フュージョン・ボード
        </p>
        <p style={{ fontSize: "12px", color: "#64748b" }}>Boundary &amp; Defusion Board</p>
      </div>

      {/* スコア表示 */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <div style={{
          flex: 1, padding: "12px 16px",
          background: "rgba(192,132,252,0.12)",
          border: "1px solid rgba(192,132,252,0.3)",
          borderRadius: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px" }}>感情の巻き込まれ</p>
          <p style={{ fontSize: "28px", fontWeight: 700, color: "#c084fc", lineHeight: 1 }}>{fusion}%</p>
        </div>
        <div style={{
          flex: 1, padding: "12px 16px",
          background: "rgba(251,146,60,0.12)",
          border: "1px solid rgba(251,146,60,0.3)",
          borderRadius: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px" }}>自責・罪悪感</p>
          <p style={{ fontSize: "28px", fontWeight: 700, color: "#fb923c", lineHeight: 1 }}>{guilt}%</p>
        </div>
      </div>

      {/* ベン図 */}
      <div style={{
        background: "rgba(0,0,0,0.25)",
        borderRadius: "14px",
        padding: "16px",
        marginBottom: "16px",
      }}>
        {/* ラベル */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", padding: "0 4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "18px" }}>👤</span>
            <span style={{ fontSize: "13px", color: "#c084fc", fontWeight: 600 }}>あなた</span>
          </div>
          <div style={{ textAlign: "center" as const }}>
            <p style={{ fontSize: "11px", color: "#475569" }}>重なり</p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>
              {Math.round(overlap * 100)}%
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "13px", color: "#fb923c", fontWeight: 600 }}>対象者</span>
            <span style={{ fontSize: "18px" }}>👥</span>
          </div>
        </div>

        <svg width="100%" height="120" viewBox="0 0 260 110">
          <circle cx={selfX} cy="55" r={r}
            fill="rgba(192,132,252,0.18)" stroke="rgba(192,132,252,0.7)" strokeWidth="2" />
          <circle cx={clientX} cy="55" r={r}
            fill="rgba(251,146,60,0.15)" stroke="rgba(251,146,60,0.6)" strokeWidth="2" />
        </svg>
      </div>

      {/* 診断メッセージ */}
      <div style={{
        padding: "14px 16px",
        background: "rgba(255,255,255,0.06)",
        borderLeft: `4px solid ${msg.color}`,
        borderRadius: "12px",
        marginBottom: "20px",
      }}>
        <p style={{ fontSize: "13px", color: msg.color, fontWeight: 700, marginBottom: "6px" }}>
          【{msg.tag}】
        </p>
        <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.8 }}>{msg.body}</p>
      </div>

      {/* スライダー */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>感情の巻き込まれ度</p>
            <p style={{ fontSize: "16px", color: "#c084fc", fontWeight: 700 }}>{fusion}</p>
          </div>
          <input type="range" min="0" max="100" value={fusion}
            onChange={(e) => setFusion(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#c084fc" }} />
          <p style={{ fontSize: "10px", color: "#334155", marginTop: "4px", lineHeight: 1.5 }}>
            0＝相手の感情に全く影響されない　50＝引きずることがある　100＝相手の感情が自分のものになってしまう
          </p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>自責・罪悪感の強さ</p>
            <p style={{ fontSize: "16px", color: "#fb923c", fontWeight: 700 }}>{guilt}</p>
          </div>
          <input type="range" min="0" max="100" value={guilt}
            onChange={(e) => setGuilt(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#fb923c" }} />
          <p style={{ fontSize: "10px", color: "#334155", marginTop: "4px", lineHeight: 1.5 }}>
            0＝自責はほとんどない　50＝「もっとできたのでは」と思うことがある　100＝常に自分を責め続けている
          </p>
        </div>
      </div>

      {/* ボタン */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => { setFusion(50); setGuilt(50) }}
          style={{ padding: "12px 16px", background: "rgba(255,255,255,0.08)", color: "#94a3b8",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", fontSize: "13px", cursor: "pointer" }}>
          リセット
        </button>
        <a href="/#contact" style={{ flex: 1, padding: "12px", background: "#2C1F14", color: "#fff",
          borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none",
          textAlign: "center" as const, display: "block" }}>
          ✉ 境界線を再構築する（初回無料）
        </a>
      </div>
    </div>
  )
}

export default function HelperBoundaryBoard() {
  return (
    <ArticleLayout
      title="境界線・脱フュージョンボード｜支援職のための感情の巻き込まれチェック"
      description="感情の巻き込まれ度と自責・罪悪感の強さをスライダーで調整して、今の境界線の状態を可視化するインタラクティブツールです。"
      url="https://www.ishizue-counseling.jp/articles/helper-boundary-board"
      date="2026-04-12"
      tags={["boundary", "compassion", "burnout"]}
    >
      <p>支援職で消耗する大きな原因のひとつが、自分と相手の感情の境界線が曖昧になることです。</p>
      <p>スライダーで今の状態を調整しながら、境界線の状態を視覚的に確認してみてください。</p>
      <BoundaryBoard />
      <h2>ベン図が示すもの</h2>
      <div className="card">
        <ul className="space-y-2 text-sm text-stone-600">
          <li>円が離れている：境界線が保たれており、健全な支援関係</li>
          <li>円が重なりはじめる：感情的な巻き込まれが始まっているサイン</li>
          <li>円が大きく重なる：共感疲労・二次受傷のリスクが高い状態</li>
        </ul>
      </div>
      <p className="check-disclaimer">このツールは診断ではなく、自分の状態に気づくための目安です。</p>
    </ArticleLayout>
  )
}

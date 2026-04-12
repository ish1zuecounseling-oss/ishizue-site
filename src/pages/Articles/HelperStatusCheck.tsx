import { useState } from "react"
import { Heart, Layers, Building2, Moon, ArrowRight } from "lucide-react"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  データ定義                                                                  */
/* -------------------------------------------------------------------------- */

type AxisId = "emotion" | "overload" | "workplace" | "body"

type Axis = {
  id:      AxisId
  label:   string
  short:   string
  icon:    React.ReactNode
  color:   string
  items:   string[]
  result:  string
  article: { text: string; href: string }
}

const AXES: Axis[] = [
  {
    id:    "emotion",
    label: "感情の疲れ",
    short: "感情",
    icon:  <Heart className="w-4 h-4" />,
    color: "#7EB8A4",
    items: [
      "相手の辛い気持ちを、自分のことのように引きずってしまう",
      "仕事が終わっても、支援している方の顔がふと浮かぶことがある",
      "以前より、人の気持ちに対して少し鈍感になっている気がする",
    ],
    result:  "誰かの痛みに寄り添いすぎているのかもしれません。まず、今の状態に名前をつけることが大切です。",
    article: { text: "共感疲労とは｜なぜ優しい人ほど消耗するのか", href: "/articles/helper-empathy-fatigue" },
  },
  {
    id:    "overload",
    label: "抱え込み",
    short: "抱え込み",
    icon:  <Layers className="w-4 h-4" />,
    color: "#6BA89A",
    items: [
      "頼まれごとをすると、キャパシティを超えていても断りにくい",
      "「自分がなんとかしなければ」と、一人で責任を背負いがちだ",
      "周りの人に「助けて」「しんどい」と本音をこぼすのが苦手だ",
    ],
    result:  "責任感の強さが、少しご自身を苦しめているかもしれません。境界線の考え方が助けになります。",
    article: { text: "支援職の境界線（バウンダリー）とは", href: "/articles/helper-boundary" },
  },
  {
    id:    "workplace",
    label: "職場のしんどさ",
    short: "職場",
    icon:  <Building2 className="w-4 h-4" />,
    color: "#8B9E7A",
    items: [
      "職場のルールや人員不足のせいで、思うようなサポートができず歯がゆい",
      "現場を知らない上の人や仕組みに対して、諦めやモヤモヤを感じている",
      "職場で、安心して自分の意見や弱音を言える雰囲気があまりない",
    ],
    result:  "目の前の方への想いと、環境との板挟みでお疲れのようです。変えられることを整理してみましょう。",
    article: { text: "支援職が抱える職場の人間関係ストレスとは", href: "/articles/helper-workplace-stress" },
  },
  {
    id:    "body",
    label: "体と心の疲れ",
    short: "体/心",
    icon:  <Moon className="w-4 h-4" />,
    color: "#9B8FA0",
    items: [
      "朝起きたとき、「今日も仕事か…」と体が重く感じることが増えた",
      "休日は何もする気が起きず、とにかく横になっていたい",
      "以前は楽しかった趣味や好きなことに対して、心が動かなくなってきた",
    ],
    result:  "心よりも先に、体のエネルギーが空っぽになっているサインです。まず休む許可を自分に与えてみましょう。",
    article: { text: "支援職が知っておきたい「休息に必要な要素」とは", href: "/articles/helper-rest-types" },
  },
]

/* -------------------------------------------------------------------------- */
/*  Widget Component                                                           */
/* -------------------------------------------------------------------------- */

function StatusCheckWidget() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [showResult, setShowResult] = useState(false)

  const toggle = (key: string) => {
    if (showResult) return
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const getCount = (axisId: AxisId) =>
    AXES.find((a) => a.id === axisId)!.items.filter((_, i) => answers[`${axisId}-${i}`]).length

  const totalChecked = Object.values(answers).filter(Boolean).length
  const topAxis = AXES.reduce((a, b) => (getCount(a.id) >= getCount(b.id) ? a : b))

  return (
    <div style={{
      background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      borderRadius: "20px",
      padding: "20px",
      fontFamily: "system-ui, sans-serif",
      color: "#e2e8f0",
      marginBottom: "2rem",
    }}>

      {/* ヘッダー */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#f1f5f9", marginBottom: "2px" }}>
            支援職のための現在地チェック
          </p>
          <p style={{ fontSize: "11px", color: "#94a3b8" }}>
            当てはまる項目を選んで、今の状態を確認してください
          </p>
        </div>
        {/* 軸別スコア */}
        <div style={{ display: "flex", gap: "12px" }}>
          {AXES.map((axis) => (
            <div key={axis.id} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "10px", color: "#94a3b8", marginBottom: "2px" }}>{axis.short}</p>
              <p style={{ fontSize: "18px", fontWeight: 700, color: axis.color, lineHeight: 1 }}>
                {getCount(axis.id)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 結果テキスト（チェック後に表示） */}
      {showResult && totalChecked > 0 && (
        <div style={{
          background: "rgba(255,255,255,0.07)",
          borderRadius: "12px",
          padding: "12px 14px",
          marginBottom: "14px",
          borderLeft: `3px solid ${topAxis.color}`,
        }}>
          <p style={{ fontSize: "11px", color: topAxis.color, marginBottom: "4px", fontWeight: 600 }}>
            【{topAxis.label}】が出ているようです
          </p>
          <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: 1.7 }}>{topAxis.result}</p>
          <a href={topAxis.article.href} style={{ fontSize: "11px", color: topAxis.color, marginTop: "6px", display: "block" }}>
            参考：{topAxis.article.text} →
          </a>
        </div>
      )}
      {showResult && totalChecked === 0 && (
        <div style={{
          background: "rgba(255,255,255,0.07)",
          borderRadius: "12px",
          padding: "12px 14px",
          marginBottom: "14px",
        }}>
          <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: 1.7 }}>
            今は比較的安定している状態かもしれません。今のうちにセルフケアの習慣を整えておきましょう。
          </p>
        </div>
      )}

      {/* バーグラフ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
        {AXES.map((axis) => {
          const count = getCount(axis.id)
          const pct = (count / 3) * 100
          return (
            <div key={axis.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ color: axis.color, opacity: 0.8, width: "16px", flexShrink: 0 }}>{axis.icon}</div>
              <p style={{ fontSize: "12px", color: "#94a3b8", width: "72px", flexShrink: 0 }}>{axis.label}</p>
              <div style={{ flex: 1, height: "28px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                <div style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: axis.color,
                  borderRadius: "8px",
                  transition: "width 0.4s ease",
                  minWidth: pct > 0 ? "28px" : "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: "8px",
                }}>
                  {pct > 0 && (
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>{count}/3</span>
                  )}
                </div>
                {pct === 0 && (
                  <p style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", paddingLeft: "10px", fontSize: "10px", color: "#475569" }}>
                    チェックを入れると、現在の心の状態が視覚化されます
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* チェックグリッド */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "8px",
        marginBottom: "16px",
      }}>
        {AXES.flatMap((axis) =>
          axis.items.map((item, i) => {
            const key = `${axis.id}-${i}`
            const checked = !!answers[key]
            return (
              <div
                key={key}
                onClick={() => toggle(key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 12px",
                  background: checked ? `${axis.color}22` : "rgba(255,255,255,0.05)",
                  border: `1px solid ${checked ? axis.color + "60" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "10px",
                  cursor: showResult ? "default" : "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {/* トグル */}
                <div style={{
                  width: "32px",
                  height: "18px",
                  borderRadius: "9px",
                  background: checked ? axis.color : "rgba(255,255,255,0.15)",
                  position: "relative",
                  flexShrink: 0,
                  transition: "background 0.2s ease",
                }}>
                  <div style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "7px",
                    background: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: checked ? "16px" : "2px",
                    transition: "left 0.2s ease",
                  }} />
                </div>
                <p style={{
                  fontSize: "11px",
                  color: checked ? "#f1f5f9" : "#94a3b8",
                  lineHeight: 1.4,
                  flex: 1,
                  overflow: "hidden",
                  
                }}>
                  {item}
                </p>
              </div>
            )
          })
        )}
      </div>

      {/* ボタン */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {!showResult ? (
          <button
            onClick={() => setShowResult(true)}
            style={{
              flex: 1,
              padding: "12px",
              background: "#7EB8A4",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            今の状態を確認する（{totalChecked}項目選択中）
          </button>
        ) : (
          <>
            <button
              onClick={() => { setAnswers({}); setShowResult(false) }}
              style={{
                padding: "12px 16px",
                background: "rgba(255,255,255,0.08)",
                color: "#94a3b8",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              やり直す
            </button>
            <a
              href="/#contact"
              style={{
                flex: 1,
                padding: "12px",
                background: "#2C1F14",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                textAlign: "center" as const,
                display: "block",
              }}
            >
              今の状態を整理してみる（初回無料）
            </a>
          </>
        )}
      </div>

    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HelperStatusCheck() {
  return (
    <ArticleLayout
      title="支援職のための現在地チェック｜4つの疲れのサインを確認する【3分】"
      description="感情の疲れ・抱え込み・職場のしんどさ・体の疲れ——支援職に起こりやすい4種類の消耗を12項目で確認できるセルフチェックです。今の自分の状態に、そっと名前をつけてみましょう。"
      url="https://www.ishizue-counseling.jp/articles/helper-status-check"
      date="2026-04-12"
      tags={["check", "burnout", "compassion", "boundary", "recovery"]}
    >

      <p>
        「なんとなくしんどい」「疲れているのに何が原因かわからない」——
        そんなとき、まず自分の状態に名前をつけることが大切です。
      </p>
      <p>
        この現在地チェックでは、支援職に起こりやすい4つの疲れのサインを12項目で確認できます。
        当てはまると感じるものを選んで、今の自分をそっと見てみてください。
      </p>

      <StatusCheckWidget />

      <h2>4つの疲れが重なりやすい理由</h2>
      <div className="card">
        <p className="text-stone-600 text-sm leading-[1.9]">
          支援職では「感情の疲れ」「抱え込み」「職場のしんどさ」「体の疲れ」が、
          それぞれ独立しているのではなく、互いに影響し合いながら進行します。
          一つに気づくことが、他の疲れを整理する入口になります。
        </p>
      </div>
      <p>
        このチェックは診断ではなく、今の自分の状態に気づくための目安です。
        結果に関わらず、気になることがあれば専門家への相談をおすすめします。
      </p>

      <p className="check-disclaimer">
        このチェックは医学的・心理学的な診断ではありません。自分の状態に気づくための目安として活用してください。
      </p>

    </ArticleLayout>
  )
}

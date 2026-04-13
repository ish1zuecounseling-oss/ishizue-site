import { useState } from "react"
import { Heart, Layers, Building2, Moon, ArrowRight } from "lucide-react"
import ArticleLayout from "../../components/ArticleLayout"

type AxisId = "emotion" | "overload" | "workplace" | "body"

type Axis = {
  id:      AxisId
  label:   string
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
    icon: <Heart size={16} />,
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
    icon: <Layers size={16} />,
    color: "#a78bfa",
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
    icon: <Building2 size={16} />,
    color: "#fb923c",
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
    icon: <Moon size={16} />,
    color: "#60a5fa",
    items: [
      "朝起きたとき、「今日も仕事か…」と体が重く感じることが増えた",
      "休日は何もする気が起きず、とにかく横になっていたい",
      "以前は楽しかった趣味や好きなことに対して、心が動かなくなってきた",
    ],
    result:  "心よりも先に、体のエネルギーが空っぽになっているサインです。まず休む許可を自分に与えてみましょう。",
    article: { text: "支援職が知っておきたい「休息に必要な要素」とは", href: "/articles/helper-rest-types" },
  },
]

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
  const topAxis = AXES.reduce((a, b) => getCount(a.id) >= getCount(b.id) ? a : b)

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
          支援職のための現在地チェック
        </p>
        <p style={{ fontSize: "13px", color: "#64748b" }}>
          当てはまる項目を選んで、今の状態を確認してください
        </p>
      </div>

      {/* チェック項目（軸ごとにグループ表示） */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
        {AXES.map((axis) => (
          <div key={axis.id}>
            {/* 軸ラベル */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ color: axis.color }}>{axis.icon}</span>
              <p style={{ fontSize: "14px", fontWeight: 600, color: axis.color }}>{axis.label}</p>
              <span style={{
                fontSize: "11px",
                padding: "1px 8px",
                borderRadius: "99px",
                background: axis.color + "22",
                color: axis.color,
                marginLeft: "auto",
              }}>
                {getCount(axis.id)} / 3
              </span>
            </div>

            {/* チェック項目 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {axis.items.map((item, i) => {
                const key = `${axis.id}-${i}`
                const checked = !!answers[key]
                return (
                  <div
                    key={key}
                    onClick={() => toggle(key)}
                    role="checkbox"
                    aria-checked={checked}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === " " && toggle(key)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 16px",
                      background: checked ? axis.color + "18" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${checked ? axis.color + "60" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: "12px",
                      cursor: showResult ? "default" : "pointer",
                      transition: "all 0.18s ease",
                    }}
                  >
                    {/* トグル */}
                    <div style={{
                      width: "36px",
                      height: "20px",
                      borderRadius: "10px",
                      background: checked ? axis.color : "rgba(255,255,255,0.15)",
                      position: "relative",
                      flexShrink: 0,
                      transition: "background 0.2s ease",
                    }}>
                      <div style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "8px",
                        background: "#fff",
                        position: "absolute",
                        top: "2px",
                        left: checked ? "18px" : "2px",
                        transition: "left 0.2s ease",
                      }} />
                    </div>
                    <p style={{
                      fontSize: "14px",
                      color: checked ? "#f1f5f9" : "#94a3b8",
                      lineHeight: 1.6,
                      flex: 1,
                    }}>
                      {item}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 確認ボタン */}
      {!showResult && (
        <button
          onClick={() => setShowResult(true)}
          style={{
            width: "100%",
            padding: "14px",
            background: "#7EB8A4",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.02em",
          }}
        >
          今の状態を確認する（{totalChecked}項目選択中）
        </button>
      )}

      {/* 結果（ボタンの直下に表示） */}
      {showResult && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* 軸別スコアサマリー */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
          }}>
            {AXES.map((axis) => {
              const count = getCount(axis.id)
              return (
                <div key={axis.id} style={{
                  padding: "12px 14px",
                  background: count > 0 ? axis.color + "18" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${count > 0 ? axis.color + "50" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  <span style={{ color: topAxis.color, display: "flex" }}>{topAxis.icon}</span>
                  <div>
                    <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "2px" }}>{axis.label}</p>
                    <p style={{ fontSize: "20px", fontWeight: 700, color: count > 0 ? axis.color : "#334155", lineHeight: 1 }}>
                      {count}<span style={{ fontSize: "12px", color: "#475569" }}>/3</span>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* メイン結果 */}
          {totalChecked === 0 ? (
            <div style={{
              padding: "16px",
              background: "rgba(126,184,164,0.12)",
              border: "1px solid rgba(126,184,164,0.3)",
              borderRadius: "12px",
            }}>
              <p style={{ fontSize: "14px", color: "#7EB8A4", fontWeight: 700, marginBottom: "6px" }}>
                🌿 今は比較的安定している状態です
              </p>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.75 }}>
                今のうちにセルフケアの習慣を整えておくことが、長く働き続けるための土台になります。
              </p>
            </div>
          ) : (
            <div style={{
              padding: "16px",
              background: topAxis.color + "15",
              border: `1px solid ${topAxis.color}50`,
              borderLeft: `4px solid ${topAxis.color}`,
              borderRadius: "12px",
            }}>
              <p style={{ fontSize: "12px", color: topAxis.color, fontWeight: 600, marginBottom: "6px" }}>
                今最もサインが出ている場所：{topAxis.label}
              </p>
              <p style={{ fontSize: "14px", color: "#e2e8f0", lineHeight: 1.8, marginBottom: "12px" }}>
                {topAxis.result}
              </p>
              <a
                href={topAxis.article.href}
                style={{ fontSize: "13px", color: topAxis.color, textDecoration: "none", fontWeight: 600 }}
              >
                参考記事：{topAxis.article.text} →
              </a>
            </div>
          )}

          {/* CTA */}
          <div style={{
            padding: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            textAlign: "center" as const,
          }}>
            <p style={{ fontSize: "14px", color: "#f1f5f9", fontWeight: 600, marginBottom: "4px" }}>
              一人で抱え込まなくていい
            </p>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px" }}>
              言葉にならなくても大丈夫です
            </p>
            <a
              href="/#contact"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#2C1F14",
                color: "#fff",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              今の状態を整理してみる（初回無料）
            </a>
            <p style={{ fontSize: "11px", color: "#475569", marginTop: "8px" }}>
              勧誘なし ／ 1回のみでもOK
            </p>
          </div>

          {/* やり直し */}
          <button
            onClick={() => { setAnswers({}); setShowResult(false) }}
            style={{
              background: "none",
              border: "none",
              color: "#475569",
              fontSize: "12px",
              cursor: "pointer",
              textDecoration: "underline",
              padding: "4px",
            }}
          >
            最初からやり直す
          </button>
        </div>
      )}
    </div>
  )
}

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
          互いに影響し合いながら進行します。一つに気づくことが、他の疲れを整理する入口になります。
        </p>
      </div>
      <p className="check-disclaimer">
        このチェックは医学的・心理学的な診断ではありません。自分の状態に気づくための目安として活用してください。
      </p>
    </ArticleLayout>
  )
}

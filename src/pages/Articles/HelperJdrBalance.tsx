import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  データ定義                                                                  */
/* -------------------------------------------------------------------------- */

type Category = {
  id:    string
  label: string
  sub:   string
  color: string
  items: string[]
  reframe: string
}

const CATEGORIES: Category[] = [
  {
    id: "perfectionism", label: "完璧な支援をしなければ", color: "#c084fc",
    sub: "「100点の支援でないと意味がない」と感じるクセ",
    items: [
      "支援がうまくいかなかったとき、全て自分の力不足だと感じる",
      "「もっとできることがあったはず」と、終わった後も反芻してしまう",
      "中途半端な支援をするくらいなら、最初からやらない方がいいと思う",
    ],
    reframe: "支援の「正解」は一つではありません。その場でできる最善を尽くすことが、すでに十分な仕事です。",
  },
  {
    id: "should", label: "〜すべきという思い込み", color: "#fb923c",
    sub: "「支援者はこうあるべき」という厳しいルールを自分に課すクセ",
    items: [
      "「支援者なのだから疲れたと言ってはいけない」と自分に言い聞かせる",
      "休んでいるときも「もっと利用者のために動くべきだ」と罪悪感を感じる",
      "「断ること」は支援者として失格だと思うことがある",
    ],
    reframe: "支援者自身が消耗しては、長く支援を続けられません。休むことは逃げではなく、持続可能な支援のための選択です。",
  },
  {
    id: "negative", label: "良いことが素直に受け取れない", color: "#fbbf24",
    sub: "うまくいったことより、うまくいかなかったことに目が向くクセ",
    items: [
      "利用者や家族に感謝されても「たまたまうまくいっただけ」と思ってしまう",
      "同僚に「よく頑張っているね」と言われても、お世辞に聞こえる",
      "一つのミスがあると、それまでの全ての支援が無意味に感じる",
    ],
    reframe: "感謝や肯定を受け取ることも、支援者に必要なスキルです。「そうかもしれない」と一度だけ受け取ってみましょう。",
  },
  {
    id: "emotion", label: "不安な気持ちが事実になる", color: "#60a5fa",
    sub: "「不安だ＝悪いことが起きる」と結びつけてしまうクセ",
    items: [
      "「この支援でいいのか」という不安が湧くと、実際にうまくいかない気がしてくる",
      "なんとなく嫌な予感がするだけで、支援の方針を変えてしまうことがある",
      "気分が落ち込んでいると、利用者の状態も悪化しているように見えてくる",
    ],
    reframe: "不安は「注意信号」であって、「予言」ではありません。感情と事実を分けて考える練習が助けになります。",
  },
  {
    id: "mindread", label: "相手の気持ちを勝手に決める", color: "#34d399",
    sub: "根拠なく「相手はこう思っているはず」と思い込むクセ",
    items: [
      "利用者の表情が暗いと「私の支援が嫌なのかも」と思ってしまう",
      "家族の返答が短いと「何か不満を持っているに違いない」と気にする",
      "上司がそっけない態度をとると「評価されていない」と決めつける",
    ],
    reframe: "相手の気持ちは確認しないとわかりません。「そうかもしれない」「そうでないかもしれない」と一度立ち止まってみましょう。",
  },
  {
    id: "overgeneralize", label: "一度の失敗が全てになる", color: "#f472b6",
    sub: "「いつも」「どうせ」と決めつけてしまうクセ",
    items: [
      "一度支援がうまくいかないと「自分はこの仕事に向いていない」と思う",
      "利用者の一人と関係がうまくいかないと「みんなから信頼されていない」と感じる",
      "一つ忘れ物や連絡ミスがあると「自分はいつも抜けている」と責めてしまう",
    ],
    reframe: "一度の出来事は、全体の一部にすぎません。「今回は」と限定して捉え直すことが、自己評価の安定につながります。",
  },
  {
    id: "personalize", label: "全部自分のせいだと思う", color: "#7EB8A4",
    sub: "チームや環境の問題も「自分の責任」として引き受けるクセ",
    items: [
      "チームの連携がうまくいかないとき、自分の調整不足だと感じる",
      "利用者の状態が悪化すると、自分の支援が原因だと考えてしまう",
      "同僚が不機嫌そうなとき、「自分が何かしたせいかも」とすぐ思う",
    ],
    reframe: "支援の結果は、多くの要因が重なって生まれます。自分が担える責任の範囲を明確にすることが、消耗を防ぐ鍵です。",
  },
  {
    id: "label", label: "自分にレッテルを貼る", color: "#94a3b8",
    sub: "「自分はこういう人間だ」と固定的に決めつけるクセ",
    items: [
      "「自分は共感力が低い支援者だ」と思って、自信が持てない",
      "一度感情的になってしまうと「自分は感情のコントロールができない」と決める",
      "「私には向いていない」と思い込んで、新しい関わり方を試さない",
    ],
    reframe: "「クセ」は変えられます。「今の自分はこういう傾向がある」と少し距離を置いて見ることが、変化の第一歩です。",
  },
]

/* -------------------------------------------------------------------------- */
/*  Widget                                                                     */
/* -------------------------------------------------------------------------- */

function ThinkingCheckWidget() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [showResult, setShowResult] = useState(false)

  const toggle = (key: string) => {
    if (showResult) return
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const getCount = (catId: string) =>
    CATEGORIES.find((c) => c.id === catId)!.items.filter((_, i) => answers[`${catId}-${i}`]).length

  const totalChecked = Object.values(answers).filter(Boolean).length

  const topCategories = CATEGORIES
    .map((c) => ({ ...c, count: getCount(c.id) }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px", padding: "24px 20px",
      color: "#e2e8f0", marginBottom: "2rem", fontFamily: "system-ui, sans-serif",
    }}>

      {/* タイトル */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <div>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
            「考え方のクセ」現在地チェック
          </p>
          <p style={{ fontSize: "12px", color: "#64748b" }}>支援職に多い8つの思考パターン</p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <p style={{ fontSize: "10px", color: "#64748b", marginBottom: "2px" }}>チェック合計</p>
          <p style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", lineHeight: 1 }}>
            {totalChecked} <span style={{ fontSize: "12px", color: "#475569" }}>/ {CATEGORIES.length * 3}</span>
          </p>
        </div>
      </div>

      {/* カテゴリ別チェックリスト */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
        {CATEGORIES.map((cat) => {
          const count = getCount(cat.id)
          return (
            <div key={cat.id} style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${count > 0 ? cat.color + "40" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "14px", padding: "16px",
            }}>
              {/* カテゴリヘッダー */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, color: count > 0 ? cat.color : "#e2e8f0" }}>
                  {cat.label}
                </p>
                {/* ドット */}
                <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                  {[0,1,2].map((i) => (
                    <div key={i} style={{
                      width: "8px", height: "8px", borderRadius: "4px",
                      background: i < count ? cat.color : "rgba(255,255,255,0.12)",
                    }} />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px" }}>{cat.sub}</p>

              {/* チェック項目 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {cat.items.map((item, i) => {
                  const key = `${cat.id}-${i}`
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
                        display: "flex", alignItems: "flex-start", gap: "10px",
                        padding: "10px 12px",
                        background: checked ? cat.color + "15" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${checked ? cat.color + "50" : "rgba(255,255,255,0.06)"}`,
                        borderRadius: "10px", cursor: showResult ? "default" : "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {/* チェックボックス */}
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "4px", flexShrink: 0,
                        marginTop: "2px",
                        background: checked ? cat.color : "transparent",
                        border: `2px solid ${checked ? cat.color : "rgba(255,255,255,0.2)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.15s ease",
                      }}>
                        {checked && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <p style={{
                        fontSize: "14px", color: checked ? "#f1f5f9" : "#94a3b8",
                        lineHeight: 1.65, flex: 1,
                      }}>
                        {item}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* 確認ボタン */}
      {!showResult && (
        <button
          onClick={() => setShowResult(true)}
          style={{
            width: "100%", padding: "14px",
            background: "#7EB8A4", color: "#fff", border: "none",
            borderRadius: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer",
          }}
        >
          今の考え方のクセを確認する（{totalChecked}項目）
        </button>
      )}

      {/* 結果 */}
      {showResult && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

          {totalChecked === 0 ? (
            <div style={{ padding: "16px", background: "rgba(126,184,164,0.12)",
              border: "1px solid rgba(126,184,164,0.3)", borderRadius: "12px" }}>
              <p style={{ fontSize: "14px", color: "#7EB8A4", fontWeight: 700, marginBottom: "6px" }}>
                🌿 今は比較的バランスが取れている状態です
              </p>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.75 }}>
                今のうちにセルフケアの習慣を整えておくことが、長く働き続けるための土台になります。
              </p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "4px" }}>
                今よく出ているクセ（上位{topCategories.length}つ）
              </p>
              {topCategories.map((cat) => (
                <div key={cat.id} style={{
                  padding: "16px", background: cat.color + "12",
                  border: `1px solid ${cat.color}40`,
                  borderLeft: `4px solid ${cat.color}`,
                  borderRadius: "12px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <p style={{ fontSize: "14px", color: cat.color, fontWeight: 700 }}>{cat.label}</p>
                    <span style={{ fontSize: "12px", color: cat.color,
                      background: cat.color + "20", padding: "2px 10px", borderRadius: "99px" }}>
                      {cat.count}/3
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.8, marginBottom: "4px" }}>
                    💭 {cat.reframe}
                  </p>
                </div>
              ))}
            </>
          )}

          {/* CTA */}
          <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", textAlign: "center" as const }}>
            <p style={{ fontSize: "14px", color: "#f1f5f9", fontWeight: 600, marginBottom: "4px" }}>
              このクセを、一緒に紐解いてみませんか
            </p>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px" }}>
              「そういうクセがある」と気づくことが、変化の第一歩です
            </p>
            <a href="/#contact" style={{ display: "inline-block", padding: "12px 24px",
              background: "#2C1F14", color: "#fff", borderRadius: "10px",
              fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              今の状態を整理してみる（初回無料）
            </a>
            <p style={{ fontSize: "11px", color: "#475569", marginTop: "8px" }}>
              勧誘なし ／ 1回のみでもOK
            </p>
          </div>

          <button
            onClick={() => { setAnswers({}); setShowResult(false) }}
            style={{ background: "none", border: "none", color: "#475569",
              fontSize: "12px", cursor: "pointer", textDecoration: "underline", padding: "4px" }}
          >
            最初からやり直す
          </button>
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HelperThinkingCheck() {
  return (
    <ArticleLayout
      title="支援職の「考え方のクセ」現在地チェック｜8つの思考パターンを確認する"
      description="完璧主義・すべき思考・自己関連づけなど、支援職に多い8つの認知のクセを24項目でチェックできるインタラクティブツールです。今の考え方のパターンに気づき、自己理解を深めましょう。"
      url="https://www.ishizue-counseling.jp/articles/helper-thinking-check"
      date="2026-04-12"
      tags={["burnout", "boundary", "compassion", "check"]}
    >
      <p>
        「また自分を責めてしまった」「どうせうまくいかないと思ってしまう」——
        そういった思考のパターンには、人それぞれの「クセ」があります。
      </p>
      <p>
        このチェックでは、支援職に多い8つの認知のクセを確認できます。
        「あるある」と感じるものを選んで、今の自分の思考パターンをそっと見てみてください。
      </p>

      <ThinkingCheckWidget />

      <h2>「考え方のクセ」は変えられる</h2>
      <p>
        認知行動療法（CBT）では、思考のパターンに気づくことが変化の第一歩とされています。
        クセを「なくす」必要はありません。「ああ、今またこのパターンだ」と気づくだけで、
        少しずつ距離を置くことができます。
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は「他者のために」動くことが多いため、自分の思考パターンを振り返る機会が少なくなりがちです。
          このチェックを定期的に使って、自分の状態を観察する習慣を作ってみましょう。
        </p>
      </div>
      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の思考パターンに気づくための目安です。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

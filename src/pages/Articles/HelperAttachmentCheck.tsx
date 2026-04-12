import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

type Category = {
  id:      string
  label:   string
  sub:     string
  color:   string
  items:   string[]
  reframe: string
  type:    "anxious" | "avoidant" | "fearful" | "secure"
}

const CATEGORIES: Category[] = [
  {
    id: "abandonment", label: "見捨てられることへの不安", color: "#f472b6", type: "anxious",
    sub: "利用者や同僚の反応が気になり、嫌われることを極端に恐れるクセ",
    items: [
      "利用者のちょっとした表情の変化が気になり、「自分の支援が嫌だったのかも」と引きずってしまう",
      "同僚からの返信が遅いだけで「何か怒らせることをしたかな」と不安になる",
      "上司の機嫌が悪いと、自分には関係のないことでも「私のせいかもしれない」と焦る",
    ],
    reframe: "相手の反応は、相手の内側から来るものです。あなたが全ての責任を負う必要はありません。「相手の機嫌は相手のもの」と少しずつ切り離してみましょう。",
  },
  {
    id: "self_sacrifice", label: "期待に応えるための自己犠牲", color: "#fb923c", type: "anxious",
    sub: "相手の期待を満たすことでしか、支援者としての価値を感じられないクセ",
    items: [
      "利用者や家族の期待に応えようと無理をして、後でどっと疲れることが多い",
      "「断ったら関係が壊れる」と思い、自分が我慢すれば丸く収まると考えてしまう",
      "利用者の意向に合わせるうちに、自分の専門的判断を後回しにしてしまうことがある",
    ],
    reframe: "相手の期待を全て満たすことが支援ではありません。あなた自身の判断と限界を大切にすることが、長く支援を続けるための土台です。",
  },
  {
    id: "self_reliance", label: "何でも一人で解決しようとする", color: "#60a5fa", type: "avoidant",
    sub: "人に頼ることは弱さだと感じ、全て自分でこなそうとするクセ",
    items: [
      "同僚に悩みを相談したり、仕事を頼んだりするのは「支援者として情けない」と感じる",
      "チームで動くよりも、自分のペースで一人で完結させる方が気が楽だ",
      "誰かに手伝ってもらうくらいなら、多少無理をしてでも自分一人でやり遂げたい",
    ],
    reframe: "支援職はチームで行うものです。頼ることは弱さではなく、より良い支援を実現するための協力です。一人で抱え込まないことが、あなたを守ります。",
  },
  {
    id: "shutdown", label: "感情的な関わりから距離を置く", color: "#94a3b8", type: "avoidant",
    sub: "相手との距離が縮まりすぎると息苦しさを感じ、壁を作るクセ",
    items: [
      "利用者が感情的になったり泣いたりしているのを見ると、スッと冷めて距離を置きたくなる",
      "深い話や感情的な訴えをされると、話題を変えるか、事務的な対応にシフトしてしまう",
      "一定以上踏み込まれると、無意識に相手を遠ざけるような行動をとってしまう",
    ],
    reframe: "距離を置くことは、自分を守るための自然な反応です。ただし「切り離し」が習慣になると、支援の質に影響することもあります。距離のとり方を意識的に調整してみましょう。",
  },
  {
    id: "approach_avoid", label: "近づきたいけど怖いというジレンマ", color: "#c084fc", type: "fearful",
    sub: "繋がりたい気持ちと傷つく怖さが同時に存在し、関係に一貫性がないクセ",
    items: [
      "利用者や同僚と親しくなりたい気持ちはあるのに、距離が縮まると不安になって自分から避けてしまう",
      "誰かから好意や信頼を示されると、嬉しい反面「本当に信用していいのか」と疑ってしまう",
      "孤立するのは辛いけれど、深く関わることも苦痛で、どうしていいかわからなくなる",
    ],
    reframe: "近づきたいのに怖い、というのは矛盾ではありません。過去の経験から身についた自己防衛です。「怖い」という感覚を否定せず、そのまま認めることが第一歩です。",
  },
  {
    id: "distrust", label: "信頼することへの疑心暗鬼", color: "#fbbf24", type: "fearful",
    sub: "「どうせいつか裏切られる」という思いから、相手の善意を素直に受け取れないクセ",
    items: [
      "利用者や同僚を信じたい気持ちと「裏切られるのでは」という疑いの間で揺れ動いている",
      "同僚が親切にしてくれても「なにか裏があるのでは」と素直に受け取れない",
      "チームで信頼関係を築こうとしても、どこか「また離れていくだろう」と思ってしまう",
    ],
    reframe: "不信感は、過去に傷ついた経験から生まれた自己防衛です。すべての人を信頼する必要はありません。「少しだけ試しに信じてみる」という小さな一歩から始めてみましょう。",
  },
  {
    id: "enmeshment", label: "相手の問題を自分のものとして抱える", color: "#34d399", type: "fearful",
    sub: "自分と他者の感情や問題の境界線が曖昧で、同化してしまうクセ",
    items: [
      "利用者が悩んでいると、まるで自分のことのように苦しくなり、休まらなくなる",
      "利用者の問題を「自分が解決してあげなければ」と背負い込んでしまう",
      "利用者が思い通りに変化しないと、自分の支援が失敗したように感じて深く傷つく",
    ],
    reframe: "共感力が高いからこそ、相手の痛みを自分のものとして感じてしまいます。「相手の課題は相手のもの」という視点を少しずつ育てることが、あなた自身を守ることになります。",
  },
  {
    id: "secure", label: "今の距離感で大丈夫", color: "#7EB8A4", type: "secure",
    sub: "自分も他者も信頼し、心地よい距離感を保てている状態",
    items: [
      "困ったときや辛いときは、素直に同僚や上司に「助けて」「相談したい」と伝えることができる",
      "利用者や同僚と意見が食い違っても、「そういう考えもある」と自分を保ったまま受け止められる",
      "一人の時間も、チームで動く時間も、それぞれに心地よさを感じながら過ごせている",
    ],
    reframe: "今のあなたは、自分にとっても相手にとっても風通しの良い距離感を保てています。この状態を大切にしながら、日々のセルフケアを続けましょう。",
  },
]

const TYPE_MESSAGES: Record<string, { title: string; message: string }> = {
  anxious: {
    title: "不安型の傾向が強い状態",
    message: "相手の反応をとても敏感に感じ取り、関係を守るために自分を消耗させてしまっているようです。相手の機嫌はあなたのせいではないことが多いです。少しずつ「自分の感情」と「相手の感情」を分ける練習をしてみましょう。",
  },
  avoidant: {
    title: "回避型の傾向が強い状態",
    message: "自分のペースと自立を大切にするあまり、人との繋がりや支援を遠ざけてしまっているようです。助けを求めることは弱さではありません。ほんの少しだけ、誰かに頼ってみることから始めてみましょう。",
  },
  fearful: {
    title: "恐れ・回避型の傾向が強い状態",
    message: "繋がりたい気持ちと傷つく怖さが同時にあり、関係の中で葛藤が続いているようです。この複雑さは、過去の経験から身についた自己防衛です。「怖い」という感覚を否定せず、そのまま認めることが第一歩です。",
  },
  secure: {
    title: "安定型の傾向が強い状態",
    message: "今のあなたは、自分にとっても相手にとっても心地よい距離感を保てています。この状態を大切にしながら、日々のセルフケアを意識的に続けましょう。",
  },
}

function AttachmentCheckWidget() {
  const [answers,    setAnswers]    = useState<Record<string, boolean>>({})
  const [showResult, setShowResult] = useState(false)

  const toggle = (key: string) => {
    if (showResult) return
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const getCount = (catId: string) =>
    CATEGORIES.find((c) => c.id === catId)!.items.filter((_, i) => answers[`${catId}-${i}`]).length

  const totalChecked = Object.values(answers).filter(Boolean).length

  // タイプ別集計
  const typeCounts: Record<string, number> = { anxious: 0, avoidant: 0, fearful: 0, secure: 0 }
  CATEGORIES.forEach((cat) => { typeCounts[cat.type] += getCount(cat.id) })
  const topType = Object.entries(typeCounts).reduce((a, b) => a[1] >= b[1] ? a : b)[0]

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
            「人との距離感」現在地チェック
          </p>
          <p style={{ fontSize: "12px", color: "#64748b" }}>支援職の愛着スタイル・8パターン</p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <p style={{ fontSize: "10px", color: "#64748b", marginBottom: "2px" }}>チェック合計</p>
          <p style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", lineHeight: 1 }}>
            {totalChecked}<span style={{ fontSize: "12px", color: "#475569" }}>/24</span>
          </p>
        </div>
      </div>

      {/* チェックリスト */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}>
        {CATEGORIES.map((cat) => {
          const count = getCount(cat.id)
          return (
            <div key={cat.id} style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${count > 0 ? cat.color + "40" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "14px", padding: "16px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, color: count > 0 ? cat.color : "#e2e8f0" }}>
                  {cat.label}
                </p>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {cat.items.map((item, i) => {
                  const key = `${cat.id}-${i}`
                  const checked = !!answers[key]
                  return (
                    <div key={key} onClick={() => toggle(key)}
                      role="checkbox" aria-checked={checked} tabIndex={0}
                      onKeyDown={(e) => e.key === " " && toggle(key)}
                      style={{
                        display: "flex", alignItems: "flex-start", gap: "10px",
                        padding: "10px 12px",
                        background: checked ? cat.color + "15" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${checked ? cat.color + "50" : "rgba(255,255,255,0.06)"}`,
                        borderRadius: "10px", cursor: showResult ? "default" : "pointer",
                        transition: "all 0.15s ease",
                      }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "4px", flexShrink: 0, marginTop: "2px",
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
                      <p style={{ fontSize: "14px", color: checked ? "#f1f5f9" : "#94a3b8", lineHeight: 1.65, flex: 1 }}>
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
        <button onClick={() => setShowResult(true)} style={{
          width: "100%", padding: "14px", background: "#7EB8A4", color: "#fff",
          border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer",
        }}>
          今の距離感のクセを確認する（{totalChecked}項目）
        </button>
      )}

      {/* 結果 */}
      {showResult && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {totalChecked === 0 ? (
            <div style={{ padding: "16px", background: "rgba(126,184,164,0.12)",
              border: "1px solid rgba(126,184,164,0.3)", borderRadius: "12px" }}>
              <p style={{ fontSize: "14px", color: "#7EB8A4", fontWeight: 700, marginBottom: "6px" }}>
                🌿 今は心地よい距離感を保てている状態です
              </p>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.75 }}>
                自分にとっても相手にとっても風通しの良い関係を築けています。この状態を大切に続けましょう。
              </p>
            </div>
          ) : (
            <>
              {/* タイプ別メッセージ */}
              <div style={{ padding: "16px", background: "rgba(255,255,255,0.06)",
                borderLeft: "4px solid #7EB8A4", borderRadius: "12px" }}>
                <p style={{ fontSize: "12px", color: "#7EB8A4", fontWeight: 600, marginBottom: "4px" }}>
                  今のあなたの傾向
                </p>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9", marginBottom: "8px" }}>
                  {TYPE_MESSAGES[topType].title}
                </p>
                <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.8 }}>
                  {TYPE_MESSAGES[topType].message}
                </p>
              </div>

              {/* 上位カテゴリ */}
              <p style={{ fontSize: "13px", color: "#94a3b8" }}>
                今よく出ているパターン（上位{topCategories.length}つ）
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
                  <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.8 }}>
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
              この距離感のクセを、一緒に整理してみませんか
            </p>
            <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px" }}>
              「そういうクセがある」と気づくことが、変化の第一歩です
            </p>
            <a href="/#contact" style={{ display: "inline-block", padding: "12px 24px",
              background: "#2C1F14", color: "#fff", borderRadius: "10px",
              fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              今の状態を整理してみる（初回無料）
            </a>
            <p style={{ fontSize: "11px", color: "#475569", marginTop: "8px" }}>勧誘なし ／ 1回のみでもOK</p>
          </div>

          <button onClick={() => { setAnswers({}); setShowResult(false) }}
            style={{ background: "none", border: "none", color: "#475569",
              fontSize: "12px", cursor: "pointer", textDecoration: "underline", padding: "4px" }}>
            最初からやり直す
          </button>
        </div>
      )}
    </div>
  )
}

export default function HelperAttachmentCheck() {
  return (
    <ArticleLayout
      title="支援職の「人との距離感」現在地チェック｜愛着スタイル8パターン"
      description="見捨てられ不安・自己犠牲・回避・境界線の曖昧さ——支援職に多い人との距離感のクセを8パターン24項目でチェック。愛着理論に基づき、自分の関わり方のパターンに気づくためのツールです。"
      url="https://www.ishizue-counseling.jp/articles/helper-attachment-check"
      date="2026-04-12"
      tags={["boundary", "compassion", "burnout", "check"]}
    >
      <p>
        「また相手の顔色を読みすぎてしまった」「なぜか人と深く関われない」——
        支援職の人間関係の悩みには、幼少期から育まれた<strong>愛着スタイル（アタッチメント）</strong>が影響していることがあります。
      </p>
      <p>
        このチェックでは、支援職に多い人との距離感のクセを8パターンで確認できます。
        当てはまると感じるものを選んで、自分の関わり方のパターンをそっと見てみてください。
      </p>

      <AttachmentCheckWidget />

      <h2>愛着スタイルとは</h2>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          愛着理論（アタッチメント理論）は、ジョン・ボウルビィが提唱した心理学の理論です。
          幼少期に養育者との間で形成された「安心の基地」の体験が、大人になってからの人間関係のパターンに影響するとされています。
          支援職では、利用者との関係性において愛着スタイルが顕著に現れやすいとされています。
        </p>
      </div>
      <p>
        愛着スタイルは「性格の問題」ではなく、過去の経験から身についた自己防衛のパターンです。
        気づくことで、少しずつ柔軟に変化させていくことができます。
      </p>
      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の傾向に気づくための目安です。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

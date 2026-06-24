import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

type Category = {
  id:      string
  label:   string
  sub:     string
  color:   string
  items:   string[]
  reframe: string
  group:   "A" | "B" | "C" | "D"
}

const CATEGORIES: Category[] = [
  {
    id: "luck", label: "成功を「運」にしてしまう", color: "#c084fc", group: "A",
    sub: "自分の実力を認めず、外側の要因のおかげにしてしまうクセ",
    items: [
      "利用者との関係がうまくいっても「たまたまタイミングが良かっただけ」と思う",
      "「周りのスタッフのおかげで、自分の力ではない」と謙遜しすぎてしまう",
      "過去の支援がうまくいっても「偶然の産物」と片付けてしまう",
    ],
    reframe: "支援がうまくいったのは、あなたが積み重ねてきた経験と判断力があったからです。「運」と「実力」は別物ではありません。",
  },
  {
    id: "fraud", label: "いつかバレるという恐怖", color: "#a78bfa", group: "A",
    sub: "「本当はできない自分」が周囲にバレることを極端に恐れるクセ",
    items: [
      "「いつか、実力がないことが利用者や同僚にバレるのでは」とビクビクしている",
      "感謝されると「相手の期待に応えられていないのに申し訳ない」と感じる",
      "自分の支援方針を人前で説明するとき、強い嘘っぽさや抵抗感がある",
    ],
    reframe: "「バレる恐怖」は、それだけ真剣に支援と向き合っている証拠です。あなたは詐欺師ではなく、誠実な支援者です。",
  },
  {
    id: "knowledge", label: "知識がまだ足りないという感覚", color: "#60a5fa", group: "B",
    sub: "「すべてを知っていなければ」とインプットを止められないクセ",
    items: [
      "資格や研修をいくら積んでも「まだ専門性が足りない」と自信につながらない",
      "利用者や家族に「わかりません」と答えることが、ひどく恥ずかしく感じる",
      "新しいケースを担当するとき、ワクワクよりも「私に対応できるか」という不安が勝る",
    ],
    reframe: "「まだ足りない」と感じるのは、支援の奥深さを知っているからです。今のあなたの知識と経験は、すでに誰かの支えになっています。",
  },
  {
    id: "genius", label: "すぐできないと才能がないと思う", color: "#34d399", group: "B",
    sub: "最初からスムーズにできないと、自分には向いていないと感じるクセ",
    items: [
      "新しい支援技術や制度を習得するのに時間がかかると「向いていない」と見切りをつける",
      "初めてのケースでも最初からうまくやれないと、ひどく落ち込む",
      "試行錯誤している姿や、勉強している姿を同僚に見られるのが恥ずかしい",
    ],
    reframe: "支援の熟練には時間がかかります。試行錯誤できることは強みです。「すぐできない＝才能がない」ではありません。",
  },
  {
    id: "solo", label: "人に頼ることへの抵抗", color: "#fb923c", group: "C",
    sub: "助けを求めることが「無能の証明」だと感じてしまうクセ",
    items: [
      "同僚に相談したり、仕事を頼んだりするのは「自分の力不足を認めること」だと感じる",
      "「人に教えるくらいなら自分でやった方が早い」と仕事を抱え込んでしまう",
      "チームで達成した成果よりも、自分一人でやり遂げたことにしか価値を感じない",
    ],
    reframe: "支援職はチームで行うものです。助けを求めることは弱さではなく、より良い支援を実現するための判断力です。",
  },
  {
    id: "overwork", label: "量でカバーしようとする", color: "#f87171", group: "C",
    sub: "実力のなさを「圧倒的な努力量」で補おうとするクセ",
    items: [
      "実力がない分、人一倍時間をかけたり、身を粉にして働かないと価値がないと感じている",
      "定時で帰ったり、休んだりすることに強い罪悪感や恐怖を覚える",
      "何もしていない時間があると「周りに置いていかれる」という焦燥感に襲われる",
    ],
    reframe: "消耗した状態では、良い支援はできません。休むことは「サボり」ではなく、支援の質を守るための選択です。",
  },
  {
    id: "pressure", label: "期待されることへの恐怖", color: "#fbbf24", group: "D",
    sub: "期待される重圧から逃れるために、あらかじめ予防線を張るクセ",
    items: [
      "「頼りにしています」「期待しています」と言われると、プレッシャーで逃げ出したくなる",
      "新しい役割を任される前に「今回は準備不足だから」と周囲に言ってしまう",
      "期待を裏切って失望されるくらいなら、目立たないポジションでいたい",
    ],
    reframe: "期待に完璧に応え続けることが支援者の仕事ではありません。「できることとできないこと」を伝えることも、誠実な支援のひとつです。",
  },
  {
    id: "compare", label: "周りと比べて自分を小さく見る", color: "#94a3b8", group: "D",
    sub: "周りが全員「自分より優れている」という錯覚に陥るクセ",
    items: [
      "職場で、周りの同僚はみんな自分より優秀で堂々としているように見える",
      "他のスタッフの支援を見ると、焦りを通り越して「自分はなんてダメなんだ」と感じる",
      "他の人の成果はすごいと思えるのに、自分の同じような成果は取るに足らないことに感じる",
    ],
    reframe: "比べているのは「相手の外側」と「自分の内側」です。あなたが見えていない相手の苦労と、あなたが見えていない自分の強みがあります。",
  },
]

const GROUP_MESSAGES: Record<string, { message: string; article: string }> = {
  A: {
    message: "自分の努力や成果を「偶然」や「錯覚」だと思い込んでしまっているようです。あなたは決して周囲を騙しているわけではありません。",
    article: "支援職が「自分だけが頑張れていない」と感じる理由",
  },
  B: {
    message: "「完璧な状態」や「すぐにできること」を自分に求めすぎて、苦しくなっていませんか？ 今の知識と経験は、すでに誰かの力になっています。",
    article: "「まだ足りない」のループから抜け出す支援者のセルフケア",
  },
  C: {
    message: "実力のなさを、身を削ることや一人で抱え込むことで埋め合わせようとしているサインです。少しだけ、肩の荷を下ろしてみませんか？",
    article: "支援職が「休む罪悪感」を手放すための考え方",
  },
  D: {
    message: "失敗して失望されることや、他者との差に怯え、自分を小さく見せてしまっているようです。期待に完璧に応えなくても、あなたの価値は変わりません。",
    article: "他人の目線から自分を取り戻す支援者のバウンダリー",
  },
}

function ImpostorCheckWidget() {
  const [answers,    setAnswers]    = useState<Record<string, boolean>>({})
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

  const groupCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 }
  CATEGORIES.forEach((cat) => { groupCounts[cat.group] += getCount(cat.id) })
  const topGroup = Object.entries(groupCounts).reduce((a, b) => a[1] >= b[1] ? a : b)[0]

  return (
    <div style={{
      background: "linear-gradient(160deg, #1e2a3a 0%, #1a2332 60%, #162030 100%)",
      borderRadius: "20px", padding: "24px 20px",
      color: "#e2e8f0", marginBottom: "2rem", fontFamily: "system-ui, sans-serif",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <div>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
            「自分の頑張りを認められない」現在地チェック
          </p>
          <p style={{ fontSize: "12px", color: "#64748b" }}>支援職のインポスター現象・8パターン</p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <p style={{ fontSize: "10px", color: "#64748b", marginBottom: "2px" }}>チェック合計</p>
          <p style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", lineHeight: 1 }}>
            {totalChecked}<span style={{ fontSize: "12px", color: "#475569" }}>/24</span>
          </p>
        </div>
      </div>

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
                  {[0, 1, 2].map((i) => (
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

      {!showResult && (
        <button onClick={() => setShowResult(true)} style={{
          width: "100%", padding: "14px", background: "#7EB8A4", color: "#fff",
          border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer",
        }}>
          今の状態を確認する（{totalChecked}項目）
        </button>
      )}

      {showResult && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {totalChecked === 0 ? (
            <div style={{ padding: "16px", background: "rgba(126,184,164,0.12)",
              border: "1px solid rgba(126,184,164,0.3)", borderRadius: "12px" }}>
              <p style={{ fontSize: "14px", color: "#7EB8A4", fontWeight: 700, marginBottom: "6px" }}>
                🌿 今は自分の頑張りを比較的認められている状態です
              </p>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.75 }}>
                自己評価が安定しています。今の状態を大切にしながら、日々のセルフケアを続けましょう。
              </p>
            </div>
          ) : (
            <>
              {groupCounts[topGroup] > 0 && (
                <div style={{ padding: "16px", background: "rgba(255,255,255,0.06)",
                  borderLeft: "4px solid #7EB8A4", borderRadius: "12px" }}>
                  <p style={{ fontSize: "12px", color: "#7EB8A4", fontWeight: 600, marginBottom: "6px" }}>
                    今のあなたへ
                  </p>
                  <p style={{ fontSize: "14px", color: "#e2e8f0", lineHeight: 1.8, marginBottom: "10px" }}>
                    {GROUP_MESSAGES[topGroup].message}
                  </p>
                  <p style={{ fontSize: "12px", color: "#64748b" }}>
                    参考：{GROUP_MESSAGES[topGroup].article}
                  </p>
                </div>
              )}
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
          <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", textAlign: "center" as const }}>
            <p style={{ fontSize: "14px", color: "#f1f5f9", fontWeight: 600, marginBottom: "4px" }}>
              このパターンを、一緒に紐解いてみませんか
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

export default function HelperImpostorCheck() {
  return (
    <ArticleLayout
      title="インポスター症候群 テスト｜「いつかバレる」「運が良かっただけ」は当てはまる？支援職向け24項目チェック"
      description="インポスター症候群（詐欺師症候群）のセルフテスト。「いつかバレる」「成功は運のおかげ」——8パターン24項目で今の状態を確認。支援職に多い思考のクセとその背景・抜け出し方を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-impostor-check"
      date="2026-04-12"
      tags={["burnout", "boundary", "check", "compassion"]}
    >
      <p>
        「評価されても、運が良かっただけだと思ってしまう」
        「いつか実力のなさがバレるのではと不安になる」——
      </p>
      <p>
        これは<strong>インポスター現象（インポスター症候群）</strong>と呼ばれる心理状態です。
        特に真面目で責任感の強い支援職の方に多く見られます。
        自分の頑張りや成果を正当に評価できず、常に「本当はできない自分」を隠しているような感覚です。
      </p>
      <p>
        当てはまるものを選んで、今の自分のパターンをそっと確認してみてください。
      </p>

      <ImpostorCheckWidget />

      <h2>インポスター現象とは</h2>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          インポスター現象は1978年にクランスとアイムスによって提唱された概念です。
          客観的な成功や実績があるにもかかわらず、自分が「詐欺師（インポスター）」であるかのように感じ、
          いつか周囲に見破られるという恐怖を抱く状態を指します。
          支援職では「もっとできるはず」という高い理想と、現実のギャップから生じやすいとされています。
        </p>
      </div>
      <p>
        インポスター現象は「性格の問題」ではありません。
        その根っこには、「<strong>評価されていないと、自分には価値がない</strong>」という条件つき自己価値があることが多く、
        気づいて、パターンに名前をつけることが、変化の第一歩になります。
      </p>

      <div className="my-6 p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
        <p className="text-xs font-medium text-stone-600">チェック後に読む</p>
        <a href="/articles/self-value-unknown" className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 underline underline-offset-2">
          → 自分の価値がわからない（条件つき自己価値・根っこ）
        </a>
        <a href="/articles/impostor-syndrome" className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 underline underline-offset-2">
          → インポスター症候群とは｜「できているのに自信がない」の正体と構造
        </a>
        <a href="/articles/impostor-check-20" className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 underline underline-offset-2">
          → インポスター症候群チェック（20項目・別バージョン）
        </a>
        <a href="/articles/safe-base" className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 underline underline-offset-2">
          → 安全基地とは——回復に必要な「安心できる場所」
        </a>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/helper-impostor-check"]} />

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の思考パターンに気づくための目安です。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const checkItems = [
  "成功したとき「自分の実力ではなく運や偶然だ」と感じる",
  "他の人が自分を過大評価していると感じる",
  "「そのうちメッキが剥がれる」という不安がある",
  "褒められても素直に受け取れない",
  "自分の能力についての話題になると不安や緊張を感じる",
  "高い評価を受けるほど「バレたらどうしよう」という恐れが強まる",
  "失敗は実力の問題、成功は運の問題と感じやすい",
  "同僚・同期より自分が劣っているように感じる",
  "「もっと頑張らないとバレる」という感覚で動いていることがある",
  "自分の専門性・能力に確信が持てない",
]

type Level = "low" | "mid" | "high" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 3) return "low"
  if (score <= 6) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "インポスター症候群の傾向は比較的少ない状態です",
    color: "result-low",
    message: "現時点では大きな傾向は見られません。ただし真面目で責任感が強い人ほど、消耗が深まると強くなることがあります。",
  },
  mid: {
    label: "インポスター症候群の傾向が出ている可能性があります",
    color: "result-mid",
    message: "「自分はここにいていいのか」という感覚が出始めている状態です。この段階で自己機能の消耗に気づけるかが重要です。",
  },
  high: {
    label: "インポスター症候群の傾向がかなり強い可能性があります",
    color: "result-high",
    message: "「メッキが剥がれる恐れ」が強く、慢性的な消耗につながっている可能性があります。自己機能の消耗と深く関連していることが多いです。",
  },
}

const FAQ_ITEMS = [
  {
    q: "インポスター症候群は病気ですか？",
    a: "病気ではありません。心理的なパターンの一種です。ただし長期間続くと自己否定・慢性的な不安・消耗につながるため、早めに自己理解を深めることが重要です。",
  },
  {
    q: "インポスター症候群は能力のある人に多いのですか？",
    a: "能力がある・責任感が強い・真面目な人に多い傾向があります。ただしこれは「能力がある証拠」ではなく、「自己評価と他者評価のズレ」から来ていることが多いです。",
  },
  {
    q: "インポスター症候群と自己機能低下はどう関係しますか？",
    a: "インポスター症候群は「外側の評価で自分の価値を判断する」という他人軸・自己機能低下と深く関連します。「自分の感覚・価値観から自己評価する」自己機能を回復させることが根本的なアプローチになります。",
  },
]

export default function ImpostorCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(10).fill(false))

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score = checked.filter(Boolean).length
  const level = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / 10) * 100)

  return (
    <ArticleLayout
      title="インポスター症候群テスト｜「メッキが剥がれる」恐れのセルフチェック10項目"
      description="「自分の実力じゃない」「そのうちバレる」という感覚はインポスター症候群のサインかもしれません。10項目のセルフチェックで今の状態を確認し、自己機能との関係を解説します。"
      url="https://www.ishizue-counseling.jp/articles/impostor-check"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「褒められても素直に受け取れない」「そのうちバレる」——それはインポスター症候群かもしれません。
      </p>

      <p>
        <strong>インポスター症候群とは、客観的な成果・評価にもかかわらず「自分は詐欺師で、そのうちメッキが剥がれる」という持続的な恐れを感じる状態</strong>です。
        支援職・真面目な人・責任感が強い人に多く見られます。
      </p>

      <h2>インポスター症候群セルフチェック（10項目）</h2>
      <p>過去1ヶ月の状態に当てはまる項目を選んでください。</p>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">{score}<span className="score-total"> / 10</span></span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 3 ? "bar-low" : score <= 6 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      <div className="checklist">
        {checkItems.map((text, i) => (
          <div
            key={i}
            className={`check-item${checked[i] ? " checked" : ""}`}
            onClick={() => toggle(i)}
            role="checkbox"
            aria-checked={checked[i]}
            tabIndex={0}
            onKeyDown={(e) => e.key === " " && toggle(i)}
          >
            <div className="checkbox"><div className="checkmark" /></div>
            <p className="item-text">{text}</p>
          </div>
        ))}
      </div>

      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 10項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>
          <p className="next-section-label">チェック後に読む</p>
          <a href="/articles/self-function-what" className="next-link">自己機能とは何か——なぜ自己評価がズレるのか<span className="next-link-arrow">→</span></a>
          <a href="/articles/other-centered-living" className="next-link">他人軸で生きてしまう——外側評価への依存<span className="next-link-arrow">→</span></a>
        </div>
      )}

      <h2>なぜインポスター症候群が起きるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自己評価の基準が「外側」にある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>が強い状態では、「自分はどうか」ではなく「他者がどう評価するか」が自己価値の基準になります。
          外側の評価が高いほど「本当の自分とのギャップ」を感じやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自己機能の消耗——「自分の感覚」へのアクセス低下</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>が消耗すると、「自分はどうか」という内側の基準が弱くなります。
          内側の基準がないと、外側の評価だけが頼りになり、インポスター感が強まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「頑張ればバレない」という消耗のループ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「メッキが剥がれないよう頑張り続ける」という動機が、
          <Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">疲れているのに止まれない</Link>状態を生みやすくなります。
          消耗が深まるほどインポスター感が強まるという悪循環が起きます。
        </p>
      </div>

      <h2>インポスター症候群からの回復</h2>
      <p>
        根本的なアプローチは「自己機能の回復」——つまり「外側の評価ではなく、自分の感覚・価値観から自己評価できる状態」を取り戻すことです。
      </p>
      <p className="text-sm text-stone-500">
        詳しく→ <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは何か</Link> ／ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link>
      </p>

      <LineCta />

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      <p className="check-disclaimer">
        このチェックは医学的診断ではなく、自分の状態に気づくための目安です。
      </p>

      <ArticleFooterLinks type="self-function" exclude={["/articles/impostor-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

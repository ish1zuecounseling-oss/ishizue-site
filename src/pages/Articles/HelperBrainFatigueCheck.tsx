import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

const checkItems = [
  "考えること自体がしんどく感じる",
  "休んでも疲れが回復した感じがしない",
  "同じミスや忘れ物が増えた",
  "ぼーっとする時間が増えた",
  "集中力が続かない、すぐ気が散る",
  "判断や決断に時間がかかるようになった",
  "些細なことでイライラしやすくなった",
  "感情のコントロールが難しいと感じる",
  "やる気が出ない、何もしたくない",
  "仕事が終わっても頭が切り替わらない",
  "夜中に目が覚める、眠りが浅い",
  "食欲の変化がある（食べられない・過食）",
  "頭痛・肩こり・眼精疲労が続いている",
  "休日もだるくて動けない",
  "スマホやSNSをやめられない・依存気味",
  "情報を見ても頭に入ってこない",
  "人と話すのがしんどい",
  "以前楽しかったことに興味がわかない",
  "身体に原因不明の不調がある（咳・動悸など）",
  "「このまま続けられるか」と感じることがある",
]

type Level = "low" | "mid" | "high" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 5) return "low"
  if (score <= 12) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "脳疲労は比較的少ない状態です",
    color: "#8FAF9F",
    bg: "#f0f7f4",
    border: "#c5ddd5",
    message: "今は大きな消耗は見られません。ただ、支援職の疲れは気づかないまま蓄積することが多いです。余裕があるうちにセルフケアの習慣を整えておくことが、長く働き続ける土台になります。",
    cvHeading: "余裕がある今のうちに、状態を言語化しておく",
    cvBody: "崩れてから整えるより、余裕がある今の方が圧倒的に早く対処できます。一度、今の状態を整理しておきませんか？",
    cvButton: "今の状態を整理しておく（初回無料）",
    links: [
      { href: "/articles/helper-brain-fatigue", text: "脳疲労とは？原因・症状・回復方法" },
      { href: "/articles/helper-self-care-ability", text: "セルフケア能力とは？「無理をしない」ための視点" },
      { href: "/articles/helper-empathy-check", text: "共感疲労チェック（3分）" },
    ],
  },
  mid: {
    label: "脳疲労が蓄積している可能性があります",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "まだ日常は回せているかもしれませんが、脳疲労はここから一気に深くなることが多いです。この段階で整理しておくと、大きく崩れずに抜けられる可能性が高くなります。逆に後回しにすると、回復に時間がかかることもあります。",
    cvHeading: "この段階で止められるかどうかが分かれ目です",
    cvBody: "脳疲労は早い段階ほど回復しやすく、深くなるほど一人での回復が難しくなります。今の状態を一度整理しておくことが、これ以上の消耗を防ぐ最短ルートです。",
    cvButton: "今の状態を整理しておく（初回無料）",
    links: [
      { href: "/articles/helper-brain-fatigue", text: "脳疲労の回復方法を見る" },
      { href: "/articles/helper-burnout-scale-validity", text: "バーンアウトとは？症状・原因・回復方法" },
      { href: "/articles/helper-emotional-labor-what", text: "感情労働とは？支援職が疲れる本当の理由" },
    ],
  },
  high: {
    label: "脳疲労がかなり進んでいる可能性があります",
    color: "#9f3a3a",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "「自分で何とかする」よりも、外に出して整理した方が回復しやすい段階の可能性があります。このまま抱え続けると、回復までに時間がかかることもあります。一人で抱え込まないでください。",
    cvHeading: "このまま抱え続けるより、外に出した方が早い状態です",
    cvBody: "休んでも回復しない状態が続いている場合、セルフケアだけでは難しい段階かもしれません。今の状態をそのまま話してみてください。",
    cvButton: "今の状態をそのまま話してみる（初回無料）",
    links: [
      { href: "/articles/helper-consider-leave", text: "休職を考えたとき｜判断のための5つのポイント" },
      { href: "/articles/helper-want-to-quit", text: "辞めたいと思ったとき｜気持ちを整理する視点" },
      { href: "/articles/helper-self-compassion-burnout", text: "バーンアウトは自己批判で悪化する" },
    ],
  },
}

const FAQ_ITEMS = [
  {
    q: "脳疲労とバーンアウトは違いますか？",
    a: "関連していますが異なります。脳疲労は脳の機能低下そのものを指します。バーンアウトは長期的な感情的消耗によって意欲・共感力・達成感が低下した状態です。脳疲労が慢性化するとバーンアウトに移行しやすくなります。",
  },
  {
    q: "このチェックは診断として使えますか？",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  },
  {
    q: "脳疲労はどれくらいで回復しますか？",
    a: "適切なセルフケアを行えば数日〜数週間での回復が見込めます。ただし、長期間のストレスで慢性化している場合は数ヶ月以上かかることもあります。原因（ストレス・過負荷）が続いている限り、セルフケアだけでは追いつかない場合があります。",
  },
  {
    q: "休んでも回復しないのはなぜですか？",
    a: "「ぼーっとスマホを見る」だけでは脳のデフォルトモードネットワーク（DMN）が過活動になり、むしろ疲労が蓄積することがあります。脳を本当に休めるには、意識的にデジタルデバイスから離れる時間を作ることが必要です。",
  },
]

export default function HelperBrainFatigueCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(20).fill(false))

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score = checked.filter(Boolean).length
  const level = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / 20) * 100)

  return (
    <ArticleLayout
      title="脳疲労セルフチェック｜支援職のための20項目診断【3分】"
      description="「頭が回らない」「休んでも疲れが抜けない」——それは脳疲労のサインかもしれません。支援職に多い脳疲労の症状20項目から、今の状態を3分で確認できるセルフチェックです。"
      url="https://www.ishizue-counseling.jp/articles/helper-brain-fatigue-check"
      date="2026-04-24"
      tags={["burnout", "check"]}
      faq={FAQ_ITEMS}
    >

      <p>
        「頭が回らない」「休んでも疲れが抜けない」——<br />
        それは<strong>脳疲労（精神的疲労）</strong>のサインかもしれません。
      </p>
      <p>
        このチェックでは、支援職に多い脳疲労の症状20項目から今の状態を3分で確認できます。
        当てはまると感じるものをタップしてください。
      </p>

      {/* スコアバー */}
      <h2>脳疲労セルフチェック（20項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 20</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 5 ? "bar-low" : score <= 12 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      {/* チェックリスト */}
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
            <div className="checkbox">
              <div className="checkmark" />
            </div>
            <p className="item-text">{text}</p>
          </div>
        ))}
      </div>

      {/* 結果 */}
      {result && (
        <div>
          <div
            className="result-box"
            style={{ background: result.bg, border: `1px solid ${result.border}` }}
          >
            <p className="result-score-label">{score}項目 / 20項目</p>
            <p className="result-title" style={{ color: result.color }}>{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          {/* CVブロック */}
          <div style={{
            background: "#2C1F14",
            borderRadius: "14px",
            padding: "1.5rem",
            marginBottom: "1.25rem",
            textAlign: "center",
          }}>
            <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "#f5f0eb", marginBottom: "0.6rem", fontFamily: "'Noto Serif JP', serif" }}>
              {result.cvHeading}
            </p>
            <p style={{ fontSize: "0.8rem", color: "#a8967e", lineHeight: 1.8, marginBottom: "1rem" }}>
              {result.cvBody}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#6b5a45", marginBottom: "0.75rem" }}>
              ※まだ申し込むか決めていなくても大丈夫です。今の状態を整理するだけでもOKです。
            </p>
            <a
              href="/#contact"
              style={{
                display: "block",
                background: "#7EB8A4",
                color: "#fff",
                borderRadius: "10px",
                padding: "12px 20px",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                marginBottom: "0.5rem",
              }}
            >
              {result.cvButton}
            </a>
            <p style={{ fontSize: "0.7rem", color: "#6b5a45", margin: 0 }}>
              支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK
            </p>
          </div>

          {/* 関連記事 */}
          <p className="next-section-label">あわせて読みたい記事</p>
          {result.links.map((link) => (
            <a key={link.href} href={link.href} className="next-link">
              {link.text}
              <span className="next-link-arrow">→</span>
            </a>
          ))}
        </div>
      )}

      {/* 脳疲労が起きる理由 */}
      <h2>脳疲労が支援職に起きやすい理由</h2>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分が弱いから疲れるのでは？」と感じていませんか？<br />
          実際には、支援職は<strong>構造的に脳疲労が起きやすい環境</strong>にあります。
        </p>
        <ul className="text-sm text-stone-600 space-y-1.5 mt-3">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>感情に寄り添い続ける感情労働の負荷</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>正解のない判断を繰り返す認知コスト</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>仕事が終わっても頭が切り替わらない構造</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「弱音を言えない」プレッシャーによる消耗の蓄積</li>
        </ul>
      </div>
      <p>
        脳疲労は意志の問題ではありません。
        真剣に仕事に向き合ってきたからこそ起きる消耗です。
      </p>

      {/* 今日1つだけやること */}
      <h2>今日1つだけやるなら</h2>
      <div className="my-3 p-4 rounded-xl" style={{ background: "#2C1F14" }}>
        <p className="text-xs text-stone-500 mb-1">脳疲労回復の最初の一歩</p>
        <p className="text-sm font-medium text-stone-100">寝る90分前にスマホを見ない</p>
        <p className="text-xs text-stone-500 mt-1">これだけでも、脳の回復スピードは変わります。</p>
      </div>
      <p className="text-sm text-stone-600">
        詳しい回復方法は → <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-700 hover:text-stone-900">脳疲労の回復方法を解説した記事</Link> をご覧ください。
      </p>

      {/* FAQ */}
      <h2>よくある質問</h2>
      <div className="space-y-5">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をおすすめします。
      </p>

    </ArticleLayout>
  )
}

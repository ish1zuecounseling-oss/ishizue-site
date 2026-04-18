import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const checkItems = [
  "利用者の問題が仕事後も頭から離れない",
  "帰宅しても気持ちが仕事モードのままである",
  "利用者のことを考えて眠れないことがある",
  "仕事の疲れが以前より抜けにくくなった",
  "利用者のつらい話を聞くと気持ちが重くなる",
  "「自分が何とかしなければ」と感じることが多い",
  "支援がうまくいかないと無力感を感じる",
  "利用者の問題を自分の責任のように感じる",
  "断ることに罪悪感を感じる",
  "仕事のことを家族や友人に話すことが増えた",
  "以前よりイライラしやすくなった",
  "小さなことで疲れを感じやすい",
  "利用者の問題に感情的に引き込まれる",
  "ニュースや出来事を利用者と重ねてしまう",
  "人の悩みを聞くことがしんどいと感じる",
  "仕事へのモチベーションが下がってきた",
  "自分の感情が麻痺しているように感じる",
  "以前より共感することが難しくなった",
  "休んでも疲れが回復しにくい",
  "支援の仕事を続けられないかもしれないと感じる",
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 5) return "low"
  if (score <= 10) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "比較的安定している状態です",
    color: "result-low",
    message: "今のうちにセルフケアの習慣を整えておくことが、長く働き続けるための土台になります。まずは自分の回復パターンを知ることから始めてみましょう。",
    nextLabel: "今の状態を予防に活かす記事",
    links: [
      { href: "/articles/helper-rest-types",      text: "休息に必要な7つの要素｜ただ休むだけでは回復しない理由" },
      { href: "/articles/helper-stress-coping",   text: "支援職のストレス対処｜共感疲労・感情労働から理解する" },
      { href: "/articles/helper-boundary",        text: "境界線（バウンダリー）とは｜支援職が抱え込みやすい理由" },
    ],
    cvBlock: {
      heading: "今の状態を、予防のうちに整理しませんか",
      body: "今は安定しています。ただ、支援職の消耗は「気づかないうちに蓄積する」ことが多いです。余裕があるうちに一度整理しておくことが、長く働き続ける土台になります。",
      buttonText: "今の状態を整理してみる（初回無料）",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 支援職専門",
    },
  },
  mid: {
    label: "共感疲労が蓄積している可能性があります",
    color: "result-mid",
    message: "心のサインが出はじめています。バーンアウトに進む前に、今の状態を整理することが大切です。一人で抱え込まず、まず自分の状態を言語化してみましょう。",
    nextLabel: "6〜10項目の方に読んでほしい記事",
    links: [
      { href: "/articles/helper-empathy-fatigue",       text: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
      { href: "/articles/helper-burnout-signs",         text: "バーンアウトの前兆（サイン）とは｜気づきたい心と体の変化" },
      { href: "/articles/helper-boundary",              text: "境界線の引き方｜冷たくならずに自分を守る方法" },
    ],
    cvBlock: {
      heading: "今の状態、一度整理してみませんか",
      body: "「まだ大丈夫」と思いながら、じわじわと消耗していることがあります。共感疲労は、早めに気づいて整理するほど回復しやすくなります。",
      buttonText: "支援職専門カウンセリングに相談する（初回無料）",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 送った後もキャンセル可",
    },
  },
  high: {
    label: "共感疲労が強くなっている可能性があります",
    color: "result-high",
    message: "一人で抱えるには限界を超えているかもしれません。今感じている苦しさは、あなたが弱いからではなく、支援職として真剣に向き合ってきた証です。",
    nextLabel: "11項目以上の方へ——まずこの記事を読んでください",
    links: [
      { href: "/articles/compassion-fatigue-recovery",  text: "共感疲労からの回復方法｜支援職が実践できる5つのケア" },
      { href: "/articles/helper-empathy-fatigue",       text: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
      { href: "/articles/helper-burnout",               text: "バーンアウトとは｜燃え尽き症候群の構造と回復の視点" },
    ],
    cvBlock: {
      heading: "一人で抱え込まなくていい",
      body: "「相談するほどじゃないかも」と思う気持ちは自然です。でもその感覚自体が、共感疲労のサインであることが多いです。支援職専門のカウンセリングで、今の状態を整理してみましょう。",
      buttonText: "松本に、今の状態を整理してもらう（初回無料）",
      href: "/#contact",
      sub: "支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK",
    },
  },
}

/* -------------------------------------------------------------------------- */
/*  FAQ データ                                                                  */
/* -------------------------------------------------------------------------- */

const FAQ_ITEMS = [
  {
    q: "共感疲労は甘えですか？",
    a: "甘えではありません。共感疲労は、支援職に起こりやすい心理的消耗として心理学的に認められた状態です。真剣に利用者と向き合っているからこそ起こるものであり、意志の弱さや能力の問題とは無関係です。",
  },
  {
    q: "共感疲労とうつ病の違いは何ですか？",
    a: "共感疲労は支援場面との関連が強く、「仕事を離れると少し楽になる」という特徴があります。うつ病は生活全般に影響が及び、休日でも気分の落ち込みが続く点が異なります。ただし長期化すると区別が難しくなるため、気になる場合は専門家への相談をおすすめします。",
  },
  {
    q: "共感疲労は回復できますか？",
    a: "回復できます。ただし「ただ休む」だけでは不十分で、消耗の構造を理解したうえで適切なケアをすることが重要です。早めに気づいて対処するほど回復が早い傾向があります。",
  },
  {
    q: "このチェックは診断として使えますか？",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  },
]

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HelperEmpathyCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(20).fill(false))

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score  = checked.filter(Boolean).length
  const level  = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / 20) * 100)

  return (
    <ArticleLayout
      title="共感疲労チェック｜支援職のための20項目診断【3分】"
      description="利用者のことが頭から離れない、仕事後も気持ちが切り替わらない——それは共感疲労のサインかもしれません。支援職に多い20項目から消耗度を3分で確認できるセルフチェックです。"
      url="https://www.ishizue-counseling.jp/articles/helper-empathy-check"
      date="2026-03-22"
      audio="/audio/helper-fatigue-check.mp3"
      tags={["compassion", "check"]}
      faq={FAQ_ITEMS}
    >

      {/* ── 導入文（症状語・検索語を自然に含む） ── */}
      <p>
        利用者のことが頭から離れない、仕事後も気持ちが切り替わらない——
        それは<strong>共感疲労（Compassion Fatigue）</strong>のサインかもしれません。
      </p>
      <p>
        この共感疲労チェックでは、支援職に多い20項目から今の消耗度を3分で確認できます。
        真剣に仕事に向き合っている人ほど、気づかないうちに深刻化しやすいのが共感疲労の特徴です。
      </p>
      <p>
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      {/* ── チェックリスト ── */}
      <h2>共感疲労セルフチェック（20項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 20</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 5 ? "bar-low" : score <= 10 ? "bar-mid" : "bar-high"}`}
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
            <div className="checkbox">
              <div className="checkmark" />
            </div>
            <p className="item-text">{text}</p>
          </div>
        ))}
      </div>

      {/* ── 結果 ── */}
      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 20項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          {/* CV ブロック */}
          {result.cvBlock && (
            <div style={{
              background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)",
              border: "1.5px solid rgba(143,175,159,0.35)",
              borderRadius: "14px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              textAlign: "center",
            }}>
              <p style={{ fontWeight: 600, fontSize: "1rem", color: "#222", marginBottom: "0.6rem" }}>
                {result.cvBlock.heading}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {result.cvBlock.body}
              </p>
              <a
                href={result.cvBlock.href}
                style={{
                  display: "inline-block",
                  background: "#2C1F14",
                  color: "#fff",
                  borderRadius: "99px",
                  padding: "13px 24px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginBottom: "0.6rem",
                }}
              >
                {result.cvBlock.buttonText}
              </a>
              <p style={{ fontSize: "0.75rem", color: "#aaa", margin: 0 }}>
                {result.cvBlock.sub}
              </p>
            </div>
          )}

          {/* 結果別の次導線（内部リンク強化） */}
          <p className="next-section-label">{result.nextLabel}</p>
          {result.links.map((link) => (
            <a key={link.href} href={link.href} className="next-link">
              {link.text}
              <span className="next-link-arrow">→</span>
            </a>
          ))}
        </div>
      )}

      {/* ── 共感疲労が起こる理由 ── */}
      <h2>共感疲労が支援職に起こる理由</h2>
      <div className="card">
        <p className="font-medium mb-4">
          支援職では次のような構造が重なりやすいとされています。
        </p>
        <ul className="space-y-2">
          <li>感情労働による継続的な心理的消耗</li>
          <li>利用者の痛みを「自分ごと」として引き受ける構造</li>
          <li>境界線（バウンダリー）が曖昧になりやすい職場環境</li>
          <li>「弱音を言えない」という無言のプレッシャー</li>
        </ul>
      </div>
      <p>
        共感疲労は、意志の弱さや能力の問題ではありません。
        真剣に利用者と向き合ってきたからこそ起こる消耗です。
      </p>
      <p>
        支援を続けるためには、利用者だけでなく「支援する側のケア」も重要になります。
        早めに気づき、適切なサポートを受けることが回復への近道です。
      </p>

      {/* ── FAQ ── */}
      <h2>共感疲労についてよくある質問</h2>
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
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>

    </ArticleLayout>
  )
}

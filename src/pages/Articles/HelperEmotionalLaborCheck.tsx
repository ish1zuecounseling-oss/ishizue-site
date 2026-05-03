import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta from "../../components/LineCta"

/* -------------------------------------------------------------------------- */
/*  チェック項目（20項目・4軸構成）                                              */
/* -------------------------------------------------------------------------- */

const checkItems = [
  // 感情抑制（5項目）
  { text: "本音とは違う感情を「仕事用」に作って表現している", cat: "感情抑制" },
  { text: "怒りや不満を感じながら、笑顔で対応することがある", cat: "感情抑制" },
  { text: "つらいと感じても「プロとして」感情を押し込めている", cat: "感情抑制" },
  { text: "感情を抑えている自分に気づいても、それを続けるしかない", cat: "感情抑制" },
  { text: "仕事中は「本当の感情」を表に出せない", cat: "感情抑制" },
  // 共感過多（5項目）
  { text: "利用者・患者の感情が自分の中に入ってくる感覚がある", cat: "共感過多" },
  { text: "相手が悲しんでいると、自分も引きずってしまう", cat: "共感過多" },
  { text: "「自分が何とかしなければ」と感じることが多い", cat: "共感過多" },
  { text: "利用者の問題を帰宅後も自分の問題のように考えてしまう", cat: "共感過多" },
  { text: "相手の感情に影響されやすく、仕事後に消耗感が強い", cat: "共感過多" },
  // 境界線の消耗（5項目）
  { text: "「断ること」に強い罪悪感を感じる", cat: "境界線の消耗" },
  { text: "頼まれるとNoと言えず、気づくと抱えすぎている", cat: "境界線の消耗" },
  { text: "仕事とプライベートの切り替えが難しい", cat: "境界線の消耗" },
  { text: "利用者・職場から「もっとやってほしい」と感じるプレッシャーがある", cat: "境界線の消耗" },
  { text: "どこまでが「自分の責任範囲」かわからなくなることがある", cat: "境界線の消耗" },
  // 感情切替困難（5項目）
  { text: "仕事が終わっても気持ちが切り替わらない", cat: "感情切替困難" },
  { text: "帰宅後も仕事上の出来事が頭に残ってしまう", cat: "感情切替困難" },
  { text: "休日になっても「仕事モード」が抜けない感覚がある", cat: "感情切替困難" },
  { text: "リラックスしようとしても、頭が働き続けている", cat: "感情切替困難" },
  { text: "感情的な疲れが翌日に持ち越されることが多い", cat: "感情切替困難" },
]

const catRanges = [
  { label: "感情抑制", start: 0, end: 5 },
  { label: "共感過多", start: 5, end: 10 },
  { label: "境界線の消耗", start: 10, end: 15 },
  { label: "感情切替困難", start: 15, end: 20 },
]

const FAQ_ITEMS = [
  {
    q: "感情労働は支援職以外にもありますか？",
    a: "はい。接客業・サービス業・医療・教育など、人と関わるすべての仕事に感情労働は存在します。ただし支援職は感情労働の強度・頻度・深刻さが特に高く、消耗が蓄積しやすい構造があります。",
  },
  {
    q: "感情労働の消耗と共感疲労はどう違いますか？",
    a: "感情労働の消耗は「本音とは違う感情を出し続けること」による疲弊です。共感疲労は「他者の苦しみへの共感」による消耗です。支援職ではこの2つが重なり合って現れることが多く、より深刻な消耗になりやすいです。",
  },
  {
    q: "感情労働の消耗は改善できますか？",
    a: "改善できます。消耗の構造を理解した上で、境界線の設定・感情規則のない時間の確保・話せる場所を持つことが有効です。一人での対処に限界を感じる場合は、カウンセリングが回復を早めます。",
  },
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 6) return "low"
  if (score <= 13) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "感情労働の消耗は比較的少ない状態です",
    color: "result-low",
    message: "現時点では大きな消耗は見られません。ただし感情労働の消耗は気づかないまま蓄積する特徴があります。今のうちに整えておくことが重要です。",
    nextLabel: "今の状態を予防に活かす",
    links: [
      { href: "/articles/helper-boundary", text: "境界線（バウンダリー）とは——抱え込まないために" },
      { href: "/articles/helper-rest-types", text: "休息の種類——ただ休むだけでは回復しない理由" },
    ],
  },
  mid: {
    label: "感情労働による消耗が蓄積している可能性があります",
    color: "result-mid",
    message: "感情労働の消耗が進んでいる状態です。「まだ大丈夫」と感じていても、この段階で整えることが大きな崩れを防ぎます。",
    nextLabel: "7〜13項目の方へ",
    links: [
      { href: "/articles/helper-empathy-overload", text: "共感しすぎて疲れる——なぜ感情移入すると消耗するのか" },
      { href: "/articles/compassion-fatigue-coping", text: "共感疲労の対処法7つ" },
    ],
  },
  high: {
    label: "感情労働の消耗がかなり深まっている可能性があります",
    color: "result-high",
    message: "感情労働による消耗がかなり深刻な段階に進んでいる可能性があります。一人でのセルフケアだけでは限界がある段階です。外部サポートの活用が回復を早めます。",
    nextLabel: "14項目以上の方へ",
    links: [
      { href: "/articles/compassion-fatigue-recovery", text: "共感疲労からの回復方法" },
      { href: "/articles/compassion-fatigue-medical-support", text: "何科に相談すべきか" },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HelperEmotionalLaborCheck() {
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

  const catScores = catRanges.map(({ label, start, end }) => ({
    label,
    score: checked.slice(start, end).filter(Boolean).length,
    max: end - start,
  }))

  return (
    <ArticleLayout
      title="感情労働チェック｜支援職のための消耗セルフチェック20項目【3分】"
      description="本音と違う感情を出し続ける感情労働の消耗セルフチェック。感情抑制・共感過多・境界線の消耗・感情切替困難の4軸で今の状態を確認。支援職・看護師・介護士向け。"
      url="https://www.ishizue-counseling.jp/articles/helper-emotional-labor-check"
      date="2026-05-03"
      audio="/audio/helper-emotional-labor-check.mp3"
      faq={FAQ_ITEMS}
    >

      <p>
        「本音とは違う感情を出し続ける仕事」——これが<strong>感情労働</strong>です。
        看護師・介護士・福祉職・カウンセラーなど、
        支援職は感情労働の強度・頻度がとりわけ高く、消耗が蓄積しやすい構造にあります。
      </p>
      <p>
        感情労働の消耗は<Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎて疲れる</Link>・
        <Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情が麻痺する</Link>・
        <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト</Link>など、
        様々な消耗の根本的な原因になっています。
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      <h2>感情労働セルフチェック（20項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">{score}<span className="score-total"> / 20</span></span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 6 ? "bar-low" : score <= 13 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      <div className="checklist">
        {catRanges.map(({ label, start, end }) => (
          <div key={label}>
            <p className="text-xs font-medium text-stone-400 mt-4 mb-2 px-1">{label}</p>
            {checkItems.slice(start, end).map((item, i) => {
              const idx = start + i
              return (
                <div
                  key={idx}
                  className={`check-item${checked[idx] ? " checked" : ""}`}
                  onClick={() => toggle(idx)}
                  role="checkbox"
                  aria-checked={checked[idx]}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === " " && toggle(idx)}
                >
                  <div className="checkbox"><div className="checkmark" /></div>
                  <p className="item-text">{item.text}</p>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 20項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          {/* 4軸の内訳 */}
          <div className="card mb-4">
            <p className="text-xs font-medium text-stone-600 mb-3">4軸の内訳</p>
            {catScores.map(({ label, score: s, max }) => (
              <div key={label} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-stone-500 w-24 flex-shrink-0">{label}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${Math.round((s / max) * 100)}%`, background: "#8FAF9F" }} />
                </div>
                <span className="text-xs text-stone-500 w-10 text-right">{s}/{max}</span>
              </div>
            ))}
          </div>

          <p className="next-section-label">{result.nextLabel}</p>
          {result.links.map((link) => (
            <a key={link.href} href={link.href} className="next-link">
              {link.text}<span className="next-link-arrow">→</span>
            </a>
          ))}
        </div>
      )}

      <LineCta />

      {/* 感情労働とは */}
      <h2>感情労働とは何か</h2>
      <p>
        社会学者アーリー・ホックシールドが提唱した概念で、
        <strong>「仕事として、本音とは異なる感情を表現・管理すること」</strong>を指します。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">支援職での具体例</p>
        <ul className="text-sm text-stone-600 space-y-2">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>怒りを感じながら穏やかに対応する</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>悲しみを押し込めながら「大丈夫ですよ」と声をかける</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>クレーム対応で笑顔を保つ</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>疲弊していても「元気に」仕事をする</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>家族対応で感情的にならないよう自分を制御する</li>
        </ul>
        <p className="text-xs text-stone-400 mt-3">
          これらの「感情の管理・抑制」は目に見えない消耗として蓄積します。
        </p>
      </div>

      {/* 消耗との接続 */}
      <h2>感情労働の消耗が進むと起きること</h2>
      <div className="card space-y-2">
        {[
          { href: "/articles/helper-emotional-numbness", text: "感情が麻痺して、以前のように感じられなくなる" },
          { href: "/articles/helper-client-stuck-in-head", text: "利用者の話が頭から離れない（侵入症状）" },
          { href: "/articles/helper-cannot-sleep", text: "仕事のことが頭から離れず眠れない" },
          { href: "/articles/helper-irritated-at-client", text: "利用者にイライラしてしまう" },
          { href: "/articles/helper-cannot-rest-on-days-off", text: "休日も休まらない・仕事のことを考えてしまう" },
          { href: "/articles/helper-burnout-check", text: "バーンアウト（燃え尽き症候群）に移行する" },
        ].map(({ href, text }) => (
          <Link key={href} to={href} className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900">
            <span className="text-stone-300">→</span>
            <span className="underline underline-offset-2">{text}</span>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <h2>感情労働についてよくある質問</h2>
      <div className="space-y-5">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* 診断クラスター */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6">
        <p className="text-xs font-medium text-stone-600 mb-3">診断クラスター——あわせて確認する</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目）</Link>
          <Link to="/articles/helper-burnout-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ バーンアウト診断（20項目）</Link>
          <Link to="/articles/secondary-trauma-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 二次受傷チェック（15項目）</Link>
          <Link to="/articles/helper-emotional-numbness-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情麻痺チェック（15項目）</Link>
        </div>
      </div>

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>

    </ArticleLayout>
  )
}

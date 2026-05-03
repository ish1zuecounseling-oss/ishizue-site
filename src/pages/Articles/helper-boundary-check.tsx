import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta from "../../components/LineCta"

const checkItems = [
  // 相手の感情を背負いやすい（5項目）
  { text: "利用者が悲しんでいると、自分も重くなってしまう", cat: "感情の巻き込まれ" },
  { text: "相手の気持ちが自分の中に入ってくるような感覚がある", cat: "感情の巻き込まれ" },
  { text: "「自分が何とかしなければ」という感覚が強い", cat: "感情の巻き込まれ" },
  { text: "利用者の問題を、帰宅後も自分の問題のように考えてしまう", cat: "感情の巻き込まれ" },
  { text: "相手の感情に引きずられて、自分の感情がわからなくなる", cat: "感情の巻き込まれ" },
  // NOが言えない（5項目）
  { text: "頼まれると断れず、気づくと抱えすぎていることがある", cat: "NOが言えない" },
  { text: "断ることに強い罪悪感を感じる", cat: "NOが言えない" },
  { text: "「嫌だ」と感じても、その場でNOと言えない", cat: "NOが言えない" },
  { text: "自分の限界を超えていても「大丈夫です」と言ってしまう", cat: "NOが言えない" },
  { text: "断った後も、「あれで良かったのか」と長く気にしてしまう", cat: "NOが言えない" },
  // 利用者優先・自己犠牲（5項目）
  { text: "自分のニーズより、相手のニーズを常に優先してしまう", cat: "自己犠牲傾向" },
  { text: "自分が休むことに罪悪感を感じる", cat: "自己犠牲傾向" },
  { text: "「もっとできたはず」「自分が足りないから」と自分を責めやすい", cat: "自己犠牲傾向" },
  { text: "他の人が頑張っているのに自分だけ休むのは申し訳ないと感じる", cat: "自己犠牲傾向" },
  { text: "自分のことより相手のことを心配してしまう", cat: "自己犠牲傾向" },
  // 仕事の持ち帰り（5項目）
  { text: "仕事とプライベートの切り替えが難しい", cat: "仕事の持ち帰り" },
  { text: "休日でも仕事のことが頭から離れない", cat: "仕事の持ち帰り" },
  { text: "「境界線を引く＝冷たい」と感じてしまうことがある", cat: "仕事の持ち帰り" },
  { text: "仕事が終わった後も「もっとできたかも」と考え続けてしまう", cat: "仕事の持ち帰り" },
  { text: "利用者のことを考え始めると止まらなくなる", cat: "仕事の持ち帰り" },
]

const catRanges = [
  { label: "感情の巻き込まれ", start: 0, end: 5 },
  { label: "NOが言えない", start: 5, end: 10 },
  { label: "自己犠牲傾向", start: 10, end: 15 },
  { label: "仕事の持ち帰り", start: 15, end: 20 },
]

const FAQ_ITEMS = [
  {
    q: "境界線を引くことは冷たいことですか？",
    a: "冷たいことではありません。境界線とは「相手を拒絶する壁」ではなく、「自分と相手の役割を明確にする構造」です。境界線があることで、支援者が長く安全に支援を続けられます。境界線のない支援は、燃え尽きを招き、結果的に相手への支援の質も下げます。",
  },
  {
    q: "NOが言えないのは性格の問題ですか？",
    a: "性格だけの問題ではありません。支援職には「断ることへの罪悪感」「相手を優先することが美徳」という文化的・職業的な規範が存在します。これらは後天的に学習されたパターンであり、意識と練習で変えていくことができます。",
  },
  {
    q: "境界線が曖昧だと何が起きますか？",
    a: "利用者の問題を自分の問題のように引き受けすぎることで、共感疲労・感情麻痺・バーンアウトが深まりやすくなります。また、「断れない」ことで業務が増え、慢性的な過負荷状態になります。",
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
    label: "境界線は比較的保てている状態です",
    color: "result-low",
    message: "現時点では大きな境界線の問題は見られません。ただし支援職では境界線が少しずつ溶けていくことが多いです。今のうちに意識的に維持することが重要です。",
    nextLabel: "境界線を強化する記事",
    links: [
      { href: "/articles/helper-boundary", text: "境界線（バウンダリー）とは——冷たくならずに自分を守る方法" },
      { href: "/articles/helper-cannot-say-no", text: "断れない支援職——NOと言えるようになるために" },
    ],
  },
  mid: {
    label: "境界線が曖昧になっている可能性があります",
    color: "result-mid",
    message: "境界線が溶け始めている状態です。「相手のため」と思っていても、境界線のない状態は支援の質も自分の状態も下げます。この段階で整えることが重要です。",
    nextLabel: "7〜13項目の方へ",
    links: [
      { href: "/articles/helper-empathy-overload", text: "共感しすぎて疲れる——なぜ感情移入すると消耗するのか" },
      { href: "/articles/helper-emotional-labor-check", text: "感情労働チェック——消耗の根本を確認する" },
    ],
  },
  high: {
    label: "境界線がかなり消耗している可能性があります",
    color: "result-high",
    message: "境界線の消耗がかなり深刻な段階に進んでいる可能性があります。相手の問題を自分の問題として抱え込みすぎており、消耗が加速しています。外から整理するサポートが有効です。",
    nextLabel: "14項目以上の方へ",
    links: [
      { href: "/articles/compassion-fatigue-high-score", text: "チェックで11項目以上だった方へ——まず整理したいこと" },
      { href: "/articles/compassion-fatigue-medical-support", text: "何科に相談すべきか" },
    ],
  },
}

export default function HelperBoundaryCheck() {
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
      title="境界線（バウンダリー）セルフチェック｜支援職のための20項目【3分】"
      description="断れない、相手の感情を背負いやすい、仕事を家まで持ち帰る——支援職に多い境界線（バウンダリー）の消耗セルフチェック。感情の巻き込まれ・NOが言えない・自己犠牲傾向の4軸で確認できます。"
      url="https://www.ishizue-counseling.jp/articles/helper-boundary-check"
      date="2026-05-03"
      faq={FAQ_ITEMS}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「断れない」「相手の感情を引きずってしまう」「仕事を家まで持ち帰る」——それは境界線（バウンダリー）が消耗しているサインです。
      </p>

      <p>
        <strong>境界線（バウンダリー）とは、自分と相手の役割・感情・責任を分ける心理的な区切り</strong>です。
        「冷たさ」ではなく、支援を長く安全に続けるための<strong>回復の技術</strong>です。
      </p>
      <p>
        支援職では境界線が曖昧になりやすい構造があり、それが
        <Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎる消耗</Link>・
        <Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働の蓄積</Link>・
        <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト</Link>の根本原因になります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな方へ</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・頼まれると断れず、気づくと抱えすぎている</li>
          <li>・利用者の感情を引きずって、帰宅後も引きずる</li>
          <li>・「境界線を引く＝冷たい」と感じてしまう</li>
          <li>・自分のニーズより相手のニーズをいつも優先してしまう</li>
        </ul>
      </div>

      <h2>境界線セルフチェック（20項目）</h2>
      <p>過去2週間の状態に当てはまる項目を選んでください。</p>

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

      <h2>境界線が消耗すると何が起きるか</h2>
      <p>
        境界線が曖昧な状態が続くと、以下の消耗が深まりやすくなります。
      </p>
      <div className="card space-y-2">
        {[
          { href: "/articles/helper-empathy-overload", text: "共感しすぎて疲れる——感情移入による消耗" },
          { href: "/articles/helper-client-stuck-in-head", text: "利用者の話が頭から離れない（侵入症状）" },
          { href: "/articles/helper-cannot-rest-on-days-off", text: "休日も休まらない——仕事のことが頭から離れない" },
          { href: "/articles/helper-emotional-numbness", text: "感情が麻痺する——エネルギーが枯渇する" },
          { href: "/articles/helper-burnout-check", text: "バーンアウト（燃え尽き症候群）に移行する" },
          { href: "/articles/helper-irritated-at-client", text: "利用者にイライラしてしまう" },
        ].map(({ href, text }) => (
          <Link key={href} to={href} className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900">
            <span className="text-stone-300">→</span>
            <span className="underline underline-offset-2">{text}</span>
          </Link>
        ))}
      </div>

      <h2>境界線＝冷たさではない</h2>
      <p>
        「境界線を引くと利用者を突き放すことになる」という誤解がよくあります。
        しかし実際は逆で、<strong>境界線がないほうが支援の質は下がります</strong>。
      </p>
      <p>
        境界線がない状態では、支援者が燃え尽き・感情麻痺・バーンアウトに陥り、
        長期的に良質な支援を提供できなくなります。
        境界線は「相手を拒絶する壁」ではなく、
        「支援者と利用者の双方が安全でいられるための構造」です。
      </p>

      <h2>よくある質問</h2>
      <div className="space-y-5">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6">
        <p className="text-xs font-medium text-stone-600 mb-3">診断クラスター——あわせて確認する</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目）</Link>
          <Link to="/articles/helper-emotional-labor-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情労働チェック（20項目）</Link>
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

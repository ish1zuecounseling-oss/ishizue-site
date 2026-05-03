import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta from "../../components/LineCta"

/* -------------------------------------------------------------------------- */
/*  チェック項目（既存15項目 + 新規5項目 = 20項目・3軸構成）                     */
/* -------------------------------------------------------------------------- */

const checkItems = [
  // 情緒的消耗（7項目）
  "以前は好きだった仕事に、やりがいを感じなくなった",
  "朝、仕事に行くのがつらいと感じることが増えた",
  "仕事をこなすだけで精一杯で、丁寧にできていない気がする",
  "休日も仕事のことが頭から離れず、休めた気がしない",
  "体の疲れがとれず、慢性的にだるい",
  "感情が平坦になり、喜怒哀楽が薄くなった気がする",
  "以前より感情的に消耗していると感じる",
  // 脱人格化（6項目）
  "利用者や同僚に対して、以前より冷たくなったと感じる",
  "利用者のことを「面倒だ」と感じてしまい、自己嫌悪になる",
  "仕事上の相手を機械的に処理している感覚がある",
  "職場の人と話すのが億劫になってきた",
  "利用者の問題に感情的に関われなくなってきた",
  "「この人のことはどうでもいい」と感じることがある",
  // 達成感の低下（7項目）
  "達成感や手応えをほとんど感じられなくなった",
  "「どうせ何をやっても変わらない」と感じることがある",
  "小さなミスや指摘で、強く落ち込むようになった",
  "集中力や判断力が低下していると感じる",
  "職場での自分の存在価値がわからなくなってきた",
  "自分の仕事が意味のあるものだと感じにくくなった",
  "この仕事を続けることへの意味が見出せなくなってきた",
]

const catRanges = [
  { label: "情緒的消耗", start: 0, end: 7 },
  { label: "脱人格化", start: 7, end: 13 },
  { label: "達成感の低下", start: 13, end: 20 },
]

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

const FAQ_ITEMS = [
  {
    q: "バーンアウトと共感疲労の違いは？",
    a: "バーンアウトは長期的な職業上の過負荷が主な原因で、情緒的消耗・脱人格化・達成感の低下が中核症状です。共感疲労は他者のトラウマへの共感が主な原因で、侵入症状・回避・過覚醒が特徴的です。両者は重なり合って現れることが多いです。",
  },
  {
    q: "バーンアウトは休めば回復しますか？",
    a: "軽度であれば休息と環境調整で回復することもあります。ただし中程度以上の場合、「ただ休む」だけでは不十分で、消耗の構造を理解した対処が必要です。早めに気づいて動くほど回復が早くなります。",
  },
  {
    q: "バーンアウトとうつ病の違いは？",
    a: "バーンアウトは仕事との関連が強く、「仕事を離れると少し楽になる」という特徴があります。うつ病は生活全般に影響が及び、休日でも回復しにくい点が異なります。ただし長期化すると区別が難しくなるため、気になる場合は専門家への相談をおすすめします。",
  },
]

/* -------------------------------------------------------------------------- */
/*  結果設定                                                                    */
/* -------------------------------------------------------------------------- */

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 5) return "low"
  if (score <= 12) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "今のところバーンアウトのリスクは低い状態です",
    color: "result-low",
    message: "現時点では安定しています。ただし支援職は消耗が蓄積しやすい仕事です。今のうちにセルフケアの習慣を整えておくことが予防につながります。",
    nextLabel: "今の状態を予防に活かす記事",
    links: [
      { href: "/articles/helper-rest-importance", text: "休むことの大切さ｜支援職のための休息の考え方" },
      { href: "/articles/helper-stress-coping", text: "自分に合ったストレスコーピングを見つける" },
      { href: "/articles/helper-boundary", text: "境界線の引き方｜利用者を思いすぎていませんか" },
    ],
  },
  mid: {
    label: "バーンアウトの初期サインが出ている可能性があります",
    color: "result-mid",
    message: "疲労や消耗のサインが積み重なっています。今の状態を放置すると、回復に時間がかかる本格的なバーンアウトに進む可能性があります。この段階で整えることが重要です。",
    nextLabel: "6〜12項目の方へ",
    links: [
      { href: "/articles/helper-burnout", text: "バーンアウトとは｜支援職に起こる燃え尽きの正体" },
      { href: "/articles/helper-burnout-signs", text: "バーンアウトのサインを見逃さないために" },
      { href: "/articles/compassion-fatigue-recovery", text: "共感疲労からの回復方法" },
    ],
  },
  high: {
    label: "バーンアウトがかなり進んでいる可能性があります",
    color: "result-high",
    message: "多くのサインが当てはまっています。これはあなたが弱いからではなく、限界まで頑張ってきた結果です。一人で抱え込まず、外部サポートを受けることが回復を早めます。",
    nextLabel: "13項目以上の方へ",
    links: [
      { href: "/articles/compassion-fatigue-recovery", text: "共感疲労からの回復方法" },
      { href: "/articles/compassion-fatigue-medical-support", text: "何科に相談すべきか" },
      { href: "/articles/compassion-fatigue-recovery-period", text: "回復にかかる期間の目安" },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HelperBurnoutCheck() {
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
      title="支援職バーンアウト診断｜燃え尽き症候群セルフチェック20項目【3分】"
      description="支援職・看護師・介護士・福祉職向けのバーンアウト（燃え尽き症候群）セルフチェック。情緒的消耗・脱人格化・達成感の低下の3軸で今の状態を確認できます。"
      url="https://www.ishizue-counseling.jp/articles/helper-burnout-check"
      date="2026-03-29"
      audio="/audio/helper-burnout-check.mp3"
      faq={FAQ_ITEMS}
    >

      <p>
        支援職では、長期間にわたって感情を使い続けることで、徐々に心のエネルギーが枯渇していきます。
        これを「バーンアウト（燃え尽き症候群）」と呼びます。
      </p>
      <p>
        バーンアウトは突然起こるのではなく、じわじわと進行するのが特徴です。
        <Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎる消耗</Link>の蓄積や、
        <Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</Link>が深まった結果として起きることもあります。
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      {/* ── チェックリスト ── */}
      <h2>バーンアウトセルフチェック（20項目）</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">{score}<span className="score-total"> / 20</span></span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 5 ? "bar-low" : score <= 12 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      <div className="checklist">
        {catRanges.map(({ label, start, end }) => (
          <div key={label}>
            <p className="text-xs font-medium text-stone-400 mt-4 mb-2 px-1">{label}</p>
            {checkItems.slice(start, end).map((text, i) => {
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
                  <p className="item-text">{text}</p>
                </div>
              )
            })}
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

          {/* 3軸の内訳 */}
          <div className="card mb-4">
            <p className="text-xs font-medium text-stone-600 mb-3">3軸の内訳</p>
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

      {/* ── バーンアウトが起こる理由 ── */}
      <h2>バーンアウトが支援職に起こりやすい理由</h2>
      <div className="card">
        <p className="font-medium mb-4">支援職には次のような特有のリスク要因があります。</p>
        <ul className="space-y-2">
          <li>感情労働による継続的な心理的消耗</li>
          <li>成果が見えにくい・報われにくい仕事構造</li>
          <li>「助けなければ」という責任感の強さ</li>
          <li>人手不足による業務過多</li>
          <li>「弱音を言えない」という職場文化</li>
        </ul>
      </div>
      <p>
        バーンアウトは意志の弱さや能力不足が原因ではありません。
        真剣に仕事と向き合ってきたからこそ起こる消耗です。
      </p>

      {/* ── 症状リンク ── */}
      <h2>バーンアウトに伴いやすい症状</h2>
      <div className="card space-y-2">
        {[
          { href: "/articles/helper-cannot-sleep", text: "仕事のことが頭から離れず眠れない" },
          { href: "/articles/helper-cannot-rest-on-days-off", text: "休日も休まらない・仕事のことを考えてしまう" },
          { href: "/articles/helper-irritated-at-client", text: "利用者にイライラしてしまう" },
          { href: "/articles/helper-emotional-numbness", text: "感情が麻痺している・以前のように感じられない" },
          { href: "/articles/helper-client-stuck-in-head", text: "利用者の話が頭から離れない" },
          { href: "/articles/helper-aptitude-doubt", text: "支援職に向いていないと感じる" },
        ].map(({ href, text }) => (
          <Link key={href} to={href} className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900">
            <span className="text-stone-300">→</span>
            <span className="underline underline-offset-2">{text}</span>
          </Link>
        ))}
      </div>

      {/* ── FAQ ── */}
      <h2>バーンアウトについてよくある質問</h2>
      <div className="space-y-5">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* ── 診断クラスター ── */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6">
        <p className="text-xs font-medium text-stone-600 mb-3">診断クラスター——あわせて確認する</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目・3分）</Link>
          <Link to="/articles/secondary-trauma-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 二次受傷チェック（15項目）</Link>
          <Link to="/articles/helper-emotional-numbness-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情麻痺チェック（15項目）</Link>
          <Link to="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労とは——症状・原因・診断・対処法・回復を総合解説</Link>
        </div>
      </div>

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>

    </ArticleLayout>
  )
}

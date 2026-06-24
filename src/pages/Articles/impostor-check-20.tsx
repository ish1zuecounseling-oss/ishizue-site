import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta, { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete } from "../../lib/analytics"

const CHECK_NAME = "impostor-check-20"

const checkItems = [
  // 自己評価の歪み(5項目)
  "「自分には実力がない」と感じることが多い",
  "成功しても「運が良かっただけ」と思ってしまう",
  "「いつか自分が偽物だとバレる」という不安がある",
  "客観的に見て成果を出していても、自分では認められない",
  "自分の能力を正確に評価できない感覚がある",
  // 過剰な努力・完璧主義(4項目)
  "完璧にできないと「不十分」と感じてしまう",
  "周りより努力していないと不安になる",
  "「もっと頑張らなければ」という焦りが常にある",
  "休むことに罪悪感を感じる",
  // 他者比較・過小評価(4項目)
  "周りの人がみんな自分より優秀に見える",
  "褒められても素直に受け取れない",
  "他人の成功は実力、自分の成功は運だと感じる",
  "「みんなはちゃんとできているのに、自分だけ…」と思う",
  // 役割同一化・不安(4項目)
  "「役に立たない自分」には価値がないと感じる",
  "仕事や役割を失うことが、自分自身を失うことのように感じる",
  "「期待に応えられないと見捨てられる」という感覚がある",
  "肩書きや役割なしの自分には自信が持てない",
  // 自己開示の困難(3項目)
  "「実は自信がない」と人に言えない",
  "弱みや失敗を見せることが極端に怖い",
  "本当の自分を見せたら、評価が下がると感じる",
]

const catRanges = [
  { label: "自己評価の歪み", start: 0, end: 5 },
  { label: "過剰な努力・完璧主義", start: 5, end: 9 },
  { label: "他者比較・過小評価", start: 9, end: 13 },
  { label: "役割同一化・不安", start: 13, end: 17 },
  { label: "自己開示の困難", start: 17, end: 20 },
]

type Level = "low" | "mid" | "high" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 6) return "low"
  if (score <= 13) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "インポスター症候群の傾向は比較的少ない状態です",
    color: "result-low",
    message: "今は安定した自己評価を保てている状態です。ただしストレスや消耗が続くと、いつでも変化が起き得ます。今の状態を知っておくことが予防になります。",
  },
  mid: {
    label: "インポスター症候群の傾向が出ている可能性があります",
    color: "result-mid",
    message: "「自分は実力がない」「いつかバレる」という感覚が、日常の中で影響している状態かもしれません。この段階で構造を理解しておくと、消耗が深まる前に変化の方向が見えてきます。",
  },
  high: {
    label: "インポスター症候群が強くなっている可能性があります",
    color: "result-high",
    message: "客観的に見ると成果を出していても、「自分は偽物だ」という感覚から抜け出せない状態かもしれません。これは性格や弱さの問題ではなく、自己複雑性の低下・役割同一化・他人軸という構造から来ています。",
  },
}

const FAQ_ITEMS = [
  {
    q: "インポスター症候群とは何ですか?",
    a: "客観的にできているのに「自分には実力がない」「いつかバレる」と感じる状態を指す心理学的な概念です。1978年にポーリン・クランスらが提唱しました。本人の能力とは無関係に「自己評価が低い」「過剰評価されている」という感覚が続きます。これは性格や弱さではなく、心理的な構造から起きるものです。",
  },
  {
    q: "このテストはどんなものですか?",
    a: "本記事のインポスター症候群テスト(20問版)は、自己評価の歪み・完璧主義・他者比較・役割同一化・自己開示の困難という5軸で詳細に状態を分析できる無料セルフチェックです。約3分で完了し、結果は3段階(傾向少ない/傾向あり/強い)で表示されます。医学的な診断ではなく、自分の状態に気づくための目安として活用してください。",
  },
  {
    q: "20問版と15問版どちらをやればいいですか?",
    a: "20問版(本記事)は、より細かい5軸で状態を分析できます。15問版はより簡易的なチェックです。「自分の状態をより正確に把握したい」「カテゴリ別に傾向を見たい」場合は20問版がおすすめです。「とりあえず簡単に確認したい」場合は15問版が向いています。",
  },
  {
    q: "インポスター症候群の原因は?",
    a: "①自己複雑性の低下(役割以外の自己側面が乏しい)、②役割同一化(自分の価値が役割と一体化している)、③他人軸(自己評価の基準が外側にある)という3つの構造が背景にあります。能力が高い人ほど起こりやすいのが特徴です。",
  },
  {
    q: "「自信をつければ治る」のですか?",
    a: "残念ながら、自信をつけようとしても改善しないことが多いです。インポスター症候群の核心は「自己価値の置き場所が偏っている」ことにあり、頑張って成果を出すほど「次もできなければ」という不安が強まります。本質的な変化には、自己複雑性を増やす(役割以外の自己側面を育てる)アプローチが有効です。",
  },
  {
    q: "インポスター症候群とうつ病の違いは何ですか?",
    a: "インポスター症候群は「客観的にはできているのに、自分の能力を認められない」という認知の偏りが中核で、診断名ではなく心理学的な概念です。うつ病は気分の落ち込み・興味の喪失・身体症状などが2週間以上続く医学的疾患です。両者は重なることもあり、インポスター症候群の状態が長期化することでうつ病に発展するケースもあります。気になる場合は心療内科・精神科への相談を検討してください。",
  },
  {
    q: "このチェックは診断として使えますか?",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  },
]

export default function ImpostorCheck20() {
  const [checked, setChecked] = useState<boolean[]>(new Array(20).fill(false))
  const [shown, setShown] = useState(false)

  const toggle = (i: number) => {
    if (shown) return
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

  // ▼ GA4イベント送信:「結果を見る」ボタン押下時にチェック完了イベントを送信
  const handleShowResult = () => {
    setShown(true)
    if (level) {
      trackCheckComplete(CHECK_NAME, score, level, 20)
    }
  }

  return (
    <ArticleLayout
      title="インポスター症候群 テスト・チェック20問——5軸で詳細診断【公認心理師】"
      description="「いつかバレる」「実力がない」と感じる方への、インポスター症候群テスト・チェック。20項目で自己評価の歪み・完璧主義・他者比較・役割同一化・自己開示の困難の5軸を詳細診断。公認心理師監修、3分でできる無料セルフチェック。"
      url="https://www.ishizue-counseling.jp/articles/impostor-check-20"
      date="2026-05-27"
      tags={["impostor", "self-function", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「いつかバレる」「実力がない」が止まらないとき——それは性格ではなく、インポスター症候群という心理構造から起きています。
      </p>

      {/* ▼ 監修者ボックス */}
      <div className="my-4 p-4 rounded-2xl border border-stone-200 bg-white">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
            <span className="text-[10px] text-stone-500 tracking-wider">監修</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-stone-800 mb-0.5">公認心理師による解説</p>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              障害福祉15年・カウンセリング累計300名以上の臨床経験／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        <strong>インポスター症候群</strong>(impostor syndrome / インポスター現象)は、
        客観的に成果を出しているのに「自分には実力がない」「いつかバレる」と感じる心理状態を指します。
        1978年に心理学者ポーリン・クランスらが提唱した概念で、能力が高い人ほど起こりやすいのが特徴です。
      </p>

      <p>
        このインポスター症候群テストは、<strong>5つのカテゴリ別</strong>に詳細な状態を分析できる<strong>20項目の無料セルフチェック</strong>です。
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・20項目の無料セルフチェック・テスト(下にスクロール)</li>
          <li>・<strong>5軸</strong>(自己評価の歪み・完璧主義・他者比較・役割同一化・自己開示の困難)の詳細診断</li>
          <li>・スコア別の状態解説と次のステップ</li>
          <li>・インポスター症候群が起きる<strong>3つの構造</strong></li>
          <li>・よくある質問(20問版と15問版の違い・原因・治し方など)</li>
        </ul>
      </nav>

      <h2>インポスター症候群セルフチェック・テスト(20項目・無料)</h2>

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

      {!shown && (
        <>
          <div className="my-4 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-[1.8]">
            <p className="font-medium text-stone-700 mb-1">採点の目安</p>
            <p>・0〜6項目:傾向は比較的少ない ／ ・7〜13項目:傾向が出ている可能性 ／ ・14項目以上:強く出ている可能性</p>
          </div>
          <button
            onClick={handleShowResult}
            className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all mb-6 mt-4"
            style={{ background: "#7EB8A4" }}
          >
            結果を見る({score}項目チェック済み)
          </button>
        </>
      )}

      {shown && result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 20項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          {/* 5軸の内訳 */}
          <div className="card mb-4">
            <p className="text-xs font-medium text-stone-600 mb-3">5軸の内訳</p>
            {catScores.map(({ label, score: s, max }) => (
              <div key={label} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-stone-500 w-32 flex-shrink-0">{label}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${Math.round((s / max) * 100)}%`, background: "#8FAF9F" }} />
                </div>
                <span className="text-xs text-stone-500 w-10 text-right">{s}/{max}</span>
              </div>
            ))}
          </div>

          {/* 他人軸チェックへの連鎖 */}
          <div className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              インポスター症候群が強い人の多くは、<strong>「他人軸」とも深く関係しています。</strong><br />
              「自己評価の基準が外側にある」状態が、インポスター症候群を強めます。
            </p>
            <Link to="/articles/other-axis-check"
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">
              → 他人軸チェック(15項目)——あわせて確認する
            </Link>
          </div>

          {/* マッチング誘導ブロック */}
          <div className="p-4 rounded-xl mb-3" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
            <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              いしずえカウンセリングが、あなたに合うかどうか
            </p>
            <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
              カウンセリングは「合う・合わない」がはっきり分かれます。
              10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
            </p>
            <Link to="/articles/counseling-matching-check"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
              合う人・合わない人チェック(10項目)を見る →
            </Link>
          </div>

          {/* LINE誘導 */}
          <LineCtaImpostor />
        </div>
      )}

      <h2>インポスター症候群とは——「いつかバレる」の心理学</h2>
      <p>
        インポスター症候群(impostor syndrome / インポスター現象)は、
        1978年に臨床心理学者<strong>ポーリン・クランス</strong>とスザンヌ・アイムスが提唱した概念です。
        客観的に成果を出していても「自分は周りが評価しているほどの実力はない」「いつか偽物だとバレる」と感じる状態を指します。
      </p>
      <p>
        英語では<strong>「impostor phenomenon(インポスター現象)」</strong>とも呼ばれ、医学的な診断名ではなく心理学的な概念です。
        特徴として、能力が高い人・努力家の人・責任感が強い人ほど起こりやすいことが知られています。
      </p>

      <h2>インポスター症候群が起きる理由——3つの構造</h2>
      <p>
        インポスター症候群は「自信のなさ」ではなく、<strong>3つの構造</strong>から起きています。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 自己複雑性の低下</p>
          <p className="text-stone-600 leading-[1.9]">役割以外の自己側面(趣味・関係性・身体感覚など)が乏しい状態。自己評価が一点に集中しているため、その一点で失敗すると「全部ダメ」と感じます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 役割同一化</p>
          <p className="text-stone-600 leading-[1.9]">「支援者としての自分」が「自分」全体と一体化している状態。役割上の失敗が「自分全体の否定」として感じられます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 他人軸</p>
          <p className="text-stone-600 leading-[1.9]">自己評価の基準が「他者の評価」「客観的成果」に偏っている状態。「自分はどう感じるか」より「他者からどう見えるか」が優先されます。</p>
        </div>
      </div>

      <p>
        この3つは互いに強化し合います。「もっと自信を持とう」と意志で頑張っても変わりにくいのは、この構造があるからです。
      </p>
      <p>
        そしてこの3つの根っこには、「<strong>評価されていないと、自分には価値がない</strong>」という条件つき自己価値があります。
        それを掘り下げたのが<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「自分の価値がわからない(条件つき自己価値)」</Link>で、インポスター症候群の“根っこ”にあたります。あわせて読むと理解が深まります。
      </p>
      <p>
        詳しくは→ <Link to="/articles/impostor-syndrome" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群とは｜構造から理解する(ピラー記事)</Link>
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
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
      </p>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/impostor-check-20"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

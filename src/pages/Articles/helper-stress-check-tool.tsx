import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

// 5領域×4項目=20項目
const checkCategories = [
  {
    name: "感情的消耗",
    items: [
      "仕事のことを考えると気が重くなる",
      "感情が麻痺している・何も感じない時間が増えた",
      "以前は気にならなかった利用者の反応が、つらく感じる",
      "感情の起伏が極端になっている(イライラ/無感情)",
    ],
  },
  {
    name: "身体症状",
    items: [
      "頭痛・肩こり・胃痛などが続いている",
      "眠れない・夜中に目が覚める",
      "食欲が落ちている、または過剰に食べてしまう",
      "疲れが翌日に持ち越され、休んでも回復しない",
    ],
  },
  {
    name: "対人関係",
    items: [
      "同僚と話すのが億劫に感じる",
      "利用者・家族との関係に消耗を感じる",
      "プライベートでも人と関わるのが面倒になった",
      "話したいことがあっても、誰にも言えない感覚がある",
    ],
  },
  {
    name: "思考・自己評価",
    items: [
      "「自分は支援職に向いていない」と感じる",
      "判断・決断に時間がかかるようになった",
      "頭がぼーっとして集中できない時間が増えた",
      "「もう限界かもしれない」と感じることがある",
    ],
  },
  {
    name: "意欲・モチベーション",
    items: [
      "出勤すること自体がつらい",
      "「何のために働いているか」がわからなくなっている",
      "以前は楽しめた仕事の場面に、何も感じなくなった",
      "「辞めたい」と頻繁に思う",
    ],
  },
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 6) return "low"
  if (score <= 12) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "比較的安定している状態です",
    color: "result-low",
    message: "現時点では大きな消耗は見られませんが、支援職のストレスは気づかないうちに蓄積するのが特徴です。今のうちに自分の状態を把握しておくことが、長期的な持続可能性につながります。",
    nextLabel: "今のうちに読んでおきたい記事",
    links: [
      { href: "/articles/helper-rest-types",      text: "休息に必要な7つの要素" },
      { href: "/articles/helper-stress-coping",   text: "支援職のストレス対処" },
      { href: "/articles/helper-self-care",       text: "支援職のセルフケア" },
    ],
    cvBlock: {
      heading: "余裕のある今、整えておくのが最も効率的です",
      body: "崩れてから対処するのは時間も負担も大きくなります。今のうちに、自分の消耗パターンを言語化しておくことが、持続的な支援者でいるための土台になります。",
      buttonText: "今の状態を整理しておく(初回無料)",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 支援職専門",
    },
  },
  mid: {
    label: "ストレスが蓄積している可能性があります",
    color: "result-mid",
    message: "ストレス反応が複数領域に出始めている可能性があります。「まだ大丈夫」と感じていても、ここで止められるかどうかが分岐点です。一人で抱え込まず、整理する場を持つことを検討してください。",
    nextLabel: "この段階で読みたい記事",
    links: [
      { href: "/articles/helper-burnout-signs",   text: "バーンアウトの前兆" },
      { href: "/articles/helper-signs-to-rest",   text: "休むサイン" },
      { href: "/articles/helper-empathy-check",   text: "共感疲労チェック" },
    ],
    cvBlock: {
      heading: "この段階で止められるかが分岐点です",
      body: "まだ日常は回せているかもしれませんが、ストレスはここから一気に深くなることがあります。早めに整理することで、大きく崩れずに抜けられる可能性が高くなります。",
      buttonText: "今の状態を整理しておく(初回無料)",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 送った後もキャンセル可",
    },
  },
  high: {
    label: "ストレス反応が強く出ている可能性があります",
    color: "result-high",
    message: "支援職としての消耗が深い段階に入っている可能性があります。一人で抱え続けるよりも、外から整理する場を持つことを強く推奨します。心療内科への受診も視野に入れつつ、構造の整理についてはお手伝いできます。",
    nextLabel: "今、優先的に読みたい記事",
    links: [
      { href: "/articles/helper-burnout-recovery",      text: "バーンアウトからの回復" },
      { href: "/articles/helper-depression-check",      text: "支援職うつチェック" },
      { href: "/articles/why-self-care-doesnt-work",    text: "セルフケアが効かない理由" },
    ],
    cvBlock: {
      heading: "このまま抱え続けるより、外に出した方が早い段階です",
      body: "今の状態は『自分の中で処理し続ける』よりも、外に出して整理した方が回復しやすい段階の可能性があります。一度、そのままの状態を言葉にしてみませんか?",
      buttonText: "今の状態をそのまま話してみる(初回無料)",
      href: "/#contact",
      sub: "支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK",
    },
  },
}

const FAQ_ITEMS = [
  {
    q: "支援職のストレスは一般的なストレスと違いますか?",
    a: "症状自体は共通しますが、背景の構造が異なります。支援職のストレスは、感情労働・共感疲労・役割同一化・「弱音を吐けない」職場文化などが重なって作られる、構造的な消耗です。そのため、単なる『気晴らし』『リフレッシュ』では回復しにくい特性があります。",
  },
  {
    q: "ストレスチェックで高得点が出たらすぐに辞めるべき?",
    a: "急いで決断する必要はありません。ストレスが強い状態では判断力が落ちているため、その状態で大きな決断をすると後悔につながりやすいです。まず『何が原因でこの状態になっているか』を整理することが先決です。整理した上で、休職・転職・継続のいずれが適しているかを判断することをおすすめします。",
  },
  {
    q: "セルフケアを試したのに効果がないのはなぜですか?",
    a: "ストレスが構造的な要因(職場・職種・役割など)から来ている場合、個人レベルのセルフケアだけでは追いつかないことがあります。また自己機能が低下している状態では、セルフケア自体が機能しにくくなります。詳しくは『セルフケアが効かない理由』の記事をご覧ください。",
  },
  {
    q: "ストレスチェックは何回くらい受ければいいですか?",
    a: "1ヶ月〜3ヶ月に1回程度を目安に、定期的にチェックすることがおすすめです。同じ項目を継続的にチェックすることで、自分の消耗パターン・回復パターンが見えてきます。『気づいたときには限界』を防ぐためにも、定期的な自己観察が役立ちます。",
  },
  {
    q: "職場のストレスチェックと違うのですか?",
    a: "労働安全衛生法に基づく職場のストレスチェック(57項目版)とは別の目的のチェックです。法的なチェックは『高ストレス者の発見』が目的ですが、このチェックは『支援職特有の消耗を構造的に把握する』ことを目的としています。両方を併用することで、より立体的な把握ができます。",
  },
  {
    q: "結果を職場に伝えるべき?",
    a: "状況によります。職場の文化・上司との関係・自分の立場によって、伝えるリスクと利益が変わります。安全に話せる相手(産業医・産業保健スタッフ・信頼できる上司)がいる場合は、伝えることで職場のサポートが得られる可能性があります。難しい場合は、まず職場の外の専門家に整理してもらうことをおすすめします。",
  },
]

export default function HelperStressCheckTool() {
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

  // 領域別スコア
  const categoryScores = checkCategories.map((cat, catIdx) => {
    const start = catIdx * 4
    const catScore = checked.slice(start, start + 4).filter(Boolean).length
    return { name: cat.name, score: catScore }
  })

  return (
    <ArticleLayout
      title="支援職ストレスチェック20項目｜5領域から消耗パターンを可視化【公認心理師監修】"
      description="看護師・介護士・福祉職・心理職など支援職向けのストレスチェック。感情的消耗・身体症状・対人関係・思考・意欲の5領域・20項目で、今のストレス状態と消耗パターンを3分で可視化。公認心理師監修。"
      url="https://www.ishizue-counseling.jp/articles/helper-stress-check-tool"
      date="2026-05-18"
      tags={["check", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        5領域・20項目で、支援職特有の消耗パターンを構造的に可視化します。
      </p>

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
        支援職のストレスは、一般的な仕事のストレスとは異なる構造を持ちます。
        感情労働・共感疲労・役割同一化・「弱音を吐けない」職場文化——
        こうした要因が重なって、気づかないうちに消耗が深まっていきます。
      </p>

      <p>
        このチェックは、<strong>支援職特有のストレス反応を5領域・20項目で把握できる無料セルフチェック</strong>です。
        単に「ストレスが高いか低いか」を判定するのではなく、「どの領域に消耗が集中しているか」を可視化します。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">このチェックでわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・<strong>感情的消耗</strong>:感情の麻痺・起伏</li>
          <li>・<strong>身体症状</strong>:頭痛・不眠・食欲</li>
          <li>・<strong>対人関係</strong>:同僚・利用者・家族との関係</li>
          <li>・<strong>思考・自己評価</strong>:判断・集中・自己認識</li>
          <li>・<strong>意欲・モチベーション</strong>:仕事への意味・継続意思</li>
        </ul>
      </nav>

      <h2>支援職ストレスチェック(20項目・無料)</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 20</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 6 ? "bar-low" : score <= 12 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      {checkCategories.map((category, catIdx) => (
        <div key={category.name} className="my-4">
          <h3 className="text-sm font-medium text-stone-700 mb-2 mt-4 flex items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">領域{catIdx + 1}</span>
            <span>{category.name}</span>
          </h3>
          <div className="checklist">
            {category.items.map((text, i) => {
              const idx = catIdx * 4 + i
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
                  <div className="checkbox">
                    <div className="checkmark" />
                  </div>
                  <p className="item-text">{text}</p>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {!result && (
        <div className="my-4 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-[1.8]">
          <p className="font-medium text-stone-700 mb-1">採点の目安</p>
          <p>・1〜6項目:比較的安定 ／ ・7〜12項目:蓄積している可能性 ／ ・13項目以上:強く出ている可能性</p>
        </div>
      )}

      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 20項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          {/* 領域別スコア表示 */}
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <p className="text-sm font-medium text-stone-700 mb-3">領域別スコア</p>
            <div className="space-y-2">
              {categoryScores.map((cat) => (
                <div key={cat.name} className="flex items-center gap-3">
                  <span className="text-xs text-stone-600 w-32 flex-shrink-0">{cat.name}</span>
                  <div className="flex-1 bg-stone-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(cat.score / 4) * 100}%`,
                        background: cat.score >= 3 ? "#d97757" : cat.score >= 2 ? "#e8a87c" : "#8FAF9F",
                      }}
                    />
                  </div>
                  <span className="text-xs text-stone-500 w-8 text-right">{cat.score}/4</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 leading-relaxed mt-3">
              ※ 3項目以上当てはまる領域は、特に消耗が集中している可能性があります。
            </p>
          </div>

          {/* 高スコア時の専門窓口 */}
          {level === "high" && (
            <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
              <p className="font-medium text-stone-800 mb-1">気になる場合は専門の窓口へ</p>
              <ul className="space-y-0.5 leading-relaxed">
                <li>・よりそいホットライン: 0120-279-338(24時間・無料)</li>
                <li>・心療内科・精神科の受診も選択肢です</li>
                <li>・お住まいの地域の精神保健福祉センターでも相談できます</li>
              </ul>
            </div>
          )}

          {result.cvBlock && (
            <div style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", border: "1.5px solid rgba(143,175,159,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "1.25rem", textAlign: "center" }}>
              <p style={{ fontWeight: 600, fontSize: "1rem", color: "#222", marginBottom: "0.6rem" }}>
                {result.cvBlock.heading}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {result.cvBlock.body}
              </p>
              <a href={result.cvBlock.href}
                style={{ display: "inline-block", background: "#2C1F14", color: "#fff", borderRadius: "99px", padding: "13px 24px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", marginBottom: "0.6rem" }}>
                {result.cvBlock.buttonText}
              </a>
              <p style={{ fontSize: "0.75rem", color: "#aaa", margin: 0 }}>
                {result.cvBlock.sub}
              </p>
            </div>
          )}

          <p className="next-section-label">{result.nextLabel}</p>
          {result.links.map((link) => (
            <a key={link.href} href={link.href} className="next-link">
              {link.text}
              <span className="next-link-arrow">→</span>
            </a>
          ))}
        </div>
      )}

      <h2>5領域の意味——それぞれが示すサイン</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情的消耗</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情労働・共感疲労が蓄積するサインです。「感じる」機能が縮小し、感情の麻痺や極端な起伏として表面化します。
          詳しくは<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link>。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 身体症状</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心理的消耗が身体に表れている段階です。頭痛・不眠・食欲の変化は、自律神経系への影響を示します。
          身体症状が出ている時点で、すでに消耗は深い段階にあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 対人関係</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バーンアウトの三要素の一つ「脱人格化」と関連します。「他者と関わるエネルギーが枯渇している」サインです。
          プライベートでも人を避けるようになっている場合、消耗が職場を超えて広がっています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 思考・自己評価</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          認知機能の低下・自己効力感の低下のサインです。判断・集中・自己評価のいずれかが揺らいでいる場合、メタ認知機能(自分を客観視する能力)が落ちている可能性があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 意欲・モチベーション</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バーンアウトの三要素「達成感の低下」と関連します。「働く意味がわからない」状態が深まっている場合、自己機能の縮小が背景にあることが多いです。
          詳しくは<Link to="/articles/work-meaning-lost" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「働く意味がわからない」状態</Link>。
        </p>
      </div>

      <h2>消耗パターンから読み解く</h2>
      <p>
        全体のスコアだけでなく、「どの領域に消耗が集中しているか」を見ることで、自分の消耗パターンが見えてきます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">感情的消耗 + 身体症状が高い</p>
          <p className="text-stone-600 leading-[1.9]">→ 共感疲労・感情労働の蓄積が中心。回復には休息と感情の整理が必要。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">対人関係 + 思考が高い</p>
          <p className="text-stone-600 leading-[1.9]">→ 職場の人間関係や役割の重圧が中心。境界線(バウンダリー)の整理が有効。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">意欲・モチベーションが特に高い</p>
          <p className="text-stone-600 leading-[1.9]">→ 「働く意味がわからない」状態。自己機能の回復と価値観の再整理が必要。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">全領域が均等に高い</p>
          <p className="text-stone-600 leading-[1.9]">→ 全体的な消耗が深い段階。一度立ち止まり、構造から整理することが必要。</p>
        </div>
      </div>

      <h2>このチェックの活用方法</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 定期的にチェック(1〜3ヶ月に1回)</p>
          <p className="text-stone-600 leading-[1.9]">同じ項目を継続的にチェックすることで、自分の消耗・回復パターンが見えてきます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 結果を記録する</p>
          <p className="text-stone-600 leading-[1.9]">日付・スコア・領域別の傾向をメモしておくと、自分の状態の波がわかります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 「上がっている領域」に着目</p>
          <p className="text-stone-600 leading-[1.9]">前回より高い領域があれば、そこに新たな消耗源があるサインです。</p>
        </div>
      </div>

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
        このチェックは医学的・心理学的な診断ではなく、自分の状態を構造的に把握するための目安です。結果に関わらず、気になる場合は専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

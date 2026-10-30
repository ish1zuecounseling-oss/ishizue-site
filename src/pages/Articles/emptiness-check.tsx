import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { useCheckCompleteOnView } from "../../lib/useCheckCompleteOnView"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackLineClickFromCheck } from "../../lib/analytics"

/**
 * 空虚感チェック(心が空っぽ度)
 * ・「空虚感とは」の記事にある4つの側面(感情・意味・身体・自分)を4項目ずつ、計16項目
 * ・合計で3段階(軽め/中くらい/強め)、側面ごとの当てはまりで「いちばん薄くなっている側面」と、その戻し方を出す
 * ・続いている期間を別に1問で聞き、強め×長く続いている場合は受診をはっきり勧める
 * ・独自に作成した目安で、妥当性は検証していない(URLが -check なので注記は ArticleLayout が自動で出す)
 */

const CHECK_NAME = "emptiness-check"
const LINE_URL = "https://lin.ee/TZxEE00?type=impostor"
const TOTAL = 16

const AREAS = [
  {
    key: "feel",
    name: "感情",
    title: "感情が薄くなっている",
    items: [
      "以前は楽しかったことをしても、あまり心が動かない",
      "悲しいのか、つらいのか、自分でもよくわからない",
      "うれしい出来事があっても、どこか他人事のように感じる",
      "泣きたいような気がするのに、涙が出ない",
    ],
    desc: "喜びや悲しみといった感情そのものが薄くなっている状態です。感情を抑えて働く時間が長いと、「感じる」働きが少しずつ小さくなっていきます。",
    hint: "感情を無理に感じようとするより、先に体の感覚(温かい・おいしい・心地よい)を拾うほうが戻りやすいです。",
    link: { to: "/articles/helper-emotional-numbness", text: "感情が麻痺する理由と回復" },
  },
  {
    key: "meaning",
    name: "意味",
    title: "意味が感じられなくなっている",
    items: [
      "「何のためにやっているんだろう」と思うことが多い",
      "毎日が同じことのくり返しに感じる",
      "先のことを考えても、楽しみが浮かばない",
      "やるべきことはこなせるが、手応えがない",
    ],
    desc: "日々の行動に「意味」や「手応え」が感じられなくなっている状態です。役割をこなすことが中心になると、やっていることと自分の気持ちがつながりにくくなります。",
    hint: "大きな意味を探すより、「今日これは少しよかった」を1日1つ書き留めるところから始めると、手応えが戻りやすくなります。",
    link: { to: "/articles/emotional-labor-what-pillar", text: "感情労働とは——消耗する理由と回復の考え方" },
  },
  {
    key: "body",
    name: "身体",
    title: "体の感覚が遠くなっている",
    items: [
      "お腹が空いた・疲れた、に気づくのが遅い",
      "食事の味が、以前より薄く感じる",
      "自分の体なのに、どこか自分のものではない感じがする",
      "ぐっすり眠れた・すっきりした、という感覚がない",
    ],
    desc: "空腹や疲れ、心地よさといった、体からのサインが届きにくくなっている状態です。体のサインを後回しにする生活が続くと起きやすくなります。",
    hint: "お風呂の温度、足の裏が床に触れる感じ、飲み物の味など、1日数回「今どう感じているか」に注意を向けるだけでも、感覚は少しずつ戻ります。",
    link: { to: "/articles/body-stays-tense", text: "体が緊張したまま抜けない理由" },
  },
  {
    key: "self",
    name: "自分",
    title: "「自分」がわからなくなっている",
    items: [
      "自分が何をしたいのか、わからない",
      "休みの日に何をすればいいのか、思いつかない",
      "仕事や役割を外すと、自分には何も残らない気がする",
      "人に合わせているうちに、自分の好みがわからなくなった",
    ],
    desc: "「何が好きか」「どうしたいか」がわからなくなっている状態です。支援者・職員としての自分が中心になるほど、役割の外の自分が後ろに下がっていきます。",
    hint: "「好きなこと」を探すより、「これは少しいや」「こっちのほうがまし」という小さな好みを拾うところから始めると、自分の感覚が戻りやすくなります。",
    link: { to: "/articles/self-function-complete", text: "自己機能とは——感じる・望む・選ぶ力の回復" },
  },
]

const ALL_ITEMS = AREAS.flatMap((a, ai) => a.items.map((text, ii) => ({ text, area: ai, key: `${a.key}-${ii}` })))
/** 表示の順番:側面ごとに固まらないよう、決まった順に並べる */
const ORDER = [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15]

const DURATIONS = [
  { key: "short", label: "ここ2週間くらい" },
  { key: "month", label: "1か月くらい続いている" },
  { key: "long", label: "何か月も続いている" },
]

type Level = "low" | "mid" | "high"
function getLevel(score: number): Level | null {
  if (score === 0) return null
  if (score <= 4) return "low"
  if (score <= 9) return "mid"
  return "high"
}

const RESULT: Record<Level, { label: string; message: string; lineDesc: string }> = {
  low: {
    label: "空虚感は、今のところ軽めです",
    message: "心が空っぽになる感覚は、少し顔を出している程度です。ただ、支援職では忙しさの中で少しずつ強まっていくことがあります。今どの側面が薄くなりやすいかを知っておくことが、予防になります。",
    lineDesc: "空虚感がどう進むか、早めに気づくための視点をLINEで送っています。",
  },
  mid: {
    label: "空虚感が出てきている可能性があります",
    message: "「何も感じない」「何のためか」という感覚が、生活の中に出てきている状態です。気合いや気分転換で埋めようとするより、薄くなっている側面を少しずつ戻していくほうが回復に近づきます。",
    lineDesc: "薄くなった感覚をどう取り戻していくかを、段階ごとにLINEでお届けしています。",
  },
  high: {
    label: "空虚感が強く出ている可能性があります",
    message: "心が空っぽな感覚が、いくつもの側面で強く出ている状態です。休んでも戻りにくいことが多く、一人で抱えるほど長引きやすい状態でもあります。外の人と一緒に整理することを考えてみてください。",
    lineDesc: "空虚感が強いときに、何から手をつければいいかを、LINEで順にお届けしています。",
  },
}

const FAQ_ITEMS = [
  {
    q: "空虚感とうつは違うのですか?",
    a: "うつでは悲しみや自責感といった強い感情が前に出ることが多いのに対し、空虚感は「悲しいかどうかすらわからない」という、感情そのものが薄い状態です。ただし空虚感はうつの一つの症状として現れることもあります。強い状態が2週間以上続く場合は、医療機関に相談してください。",
  },
  {
    q: "空虚感は何かで埋めれば楽になりますか?",
    a: "買い物や食べ物、SNSなどで一時的に紛れることはありますが、空虚感は「外から何かを入れる」ことで解消しにくいものです。内側の感じる働きが小さくなっていることが背景にあるため、体の感覚や小さな好みを拾い直すほうが、時間はかかっても回復に近づきます。",
  },
  {
    q: "このチェックは診断として使えますか?",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、つらさが続くときは専門家に相談してください。",
  },
]

export default function EmptinessCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(TOTAL).fill(false))
  const [duration, setDuration] = useState<string | null>(null)
  const toggle = (i: number) => setChecked((prev) => { const n = [...prev]; n[i] = !n[i]; return n })

  const score = checked.filter(Boolean).length
  const level = getLevel(score)
  const result = level ? RESULT[level] : null
  const counts = AREAS.map((_, ai) => ALL_ITEMS.reduce((n, it, i) => n + (checked[i] && it.area === ai ? 1 : 0), 0))
  let top = 0
  counts.forEach((c, i) => { if (c > counts[top]) top = i })
  const topArea = counts[top] > 0 ? AREAS[top] : null
  const urgeVisit = level === "high" && duration !== null && duration !== "short"

  const resultRef = useCheckCompleteOnView(CHECK_NAME, score, level, TOTAL)
  const handleLineClick = () => { if (level) trackLineClickFromCheck(CHECK_NAME, level) }

  return (
    <ArticleLayout
      title="空虚感チェック｜心が空っぽな感じはどこから？16項目で4つの側面を確認【公認心理師】"
      description="「心が空っぽ」「何も感じない」「何のためにやっているのかわからない」——空虚感のセルフチェック(16項目)。感情・意味・身体・自分の4つの側面のうち、どこが薄くなっているかと、その戻し方がわかります。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/emptiness-check"
      date="2026-10-30"
      tags={["self-function", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「心が空っぽな感じがする」「何をしても満たされない」——その感覚は、気の持ちようではなく、内側の「感じる働き」が小さくなっているサインかもしれません。16項目で、どこが薄くなっているかを確かめてください。
      </p>

      <p>
        ここ2週間くらいの自分を思い浮かべて、当てはまると感じるものをタップしてください。
        最後に、その感覚がどのくらい続いているかも選ぶと、結果がより具体的になります。
      </p>

      <div className="p-3 rounded-xl text-xs text-stone-600 leading-[1.9] mb-4" style={{ background: "#fbf7ef", border: "1px solid #ece3d3" }}>
        消えてしまいたい気持ちがある、食事や睡眠がほとんどとれない日が続く——そうしたときは、チェックの結果に関係なく、早めに医療機関に相談してください。
        つらい気持ちを今すぐ誰かに話したいときは、
        <strong>よりそいホットライン(0120-279-338・24時間)</strong>や
        <strong>こころの健康相談統一ダイヤル(0570-064-556)</strong>も利用できます。
      </div>

      <h2>空虚感セルフチェック(16項目)</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / {TOTAL}</span>
        </span>
      </div>
      <div className="bar-bg">
        <div className={`bar-fill ${score <= 4 ? "bar-low" : score <= 9 ? "bar-mid" : "bar-high"}`} style={{ width: `${Math.round((score / TOTAL) * 100)}%` }} />
      </div>

      <div className="checklist">
        {ORDER.map((i) => (
          <div
            key={ALL_ITEMS[i].key}
            className={`check-item${checked[i] ? " checked" : ""}`}
            onClick={() => toggle(i)}
            role="checkbox"
            aria-checked={checked[i]}
            tabIndex={0}
            onKeyDown={(e) => (e.key === " " || e.key === "Enter") && (e.preventDefault(), toggle(i))}
          >
            <div className="checkbox">
              <div className="checkmark" />
            </div>
            <p className="item-text">{ALL_ITEMS[i].text}</p>
          </div>
        ))}
      </div>

      <p className="text-sm font-medium text-stone-700 mt-6 mb-2">その感覚は、どのくらい続いていますか</p>
      <div className="flex flex-col gap-2 mb-2" role="radiogroup" aria-label="続いている期間">
        {DURATIONS.map((d) => (
          <button
            key={d.key}
            type="button"
            role="radio"
            aria-checked={duration === d.key}
            onClick={() => setDuration(duration === d.key ? null : d.key)}
            className="text-left px-4 py-3 rounded-[10px] text-sm border transition-colors"
            style={duration === d.key
              ? { background: "#fff", borderColor: "rgba(143,175,159,0.9)", color: "#292524", boxShadow: "0 2px 10px rgba(143,175,159,0.15)" }
              : { background: "#fafaf9", borderColor: "#e8e5e1", color: "#57534e" }}
          >
            <span className="inline-block w-4 h-4 rounded-full border mr-2.5 align-[-3px]"
              style={duration === d.key ? { background: "#7C9A8A", borderColor: "#7C9A8A", boxShadow: "inset 0 0 0 3px #fff" } : { borderColor: "#d4cdc6", background: "#fff" }} />
            {d.label}
          </button>
        ))}
      </div>

      {result && (
        <div ref={resultRef}>
          <div style={{ background: "#f6f8f6", border: "1.5px solid #cfdcd4", borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "12px", color: "#78716c", marginBottom: "4px" }}>{score}項目 / {TOTAL}項目</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{result.label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.85 }}>{result.message}</p>

            <div className="mt-4 space-y-1.5" aria-label="側面ごとの当てはまり">
              {AREAS.map((a, ai) => (
                <div key={a.key} className="flex items-center gap-2 text-[11px]">
                  <span className="w-[120px] flex-shrink-0" style={{ color: topArea && ai === top ? "#2C1F14" : "#78716c", fontWeight: topArea && ai === top ? 600 : 400 }}>{a.title}</span>
                  <div className="flex-1" style={{ height: 6, borderRadius: 3, background: "#e7e2d9" }}>
                    <div style={{ width: `${(counts[ai] / 4) * 100}%`, height: 6, borderRadius: 3, background: topArea && ai === top ? "#7C9A8A" : "#b9c8bf" }} />
                  </div>
                  <span className="w-8 text-right text-stone-500">{counts[ai]}/4</span>
                </div>
              ))}
            </div>
          </div>

          {urgeVisit && (
            <div className="p-4 rounded-xl mb-4 text-sm leading-[1.9]" style={{ background: "#fbf3ee", border: "1px solid #ecd5c6", color: "#57534e" }}>
              <strong style={{ color: "#2C1F14" }}>強い空虚感が1か月以上続いています。</strong>
              うつ状態の一つとして現れていることもあるため、一度、心療内科や精神科、かかりつけ医に相談してみてください。「この程度で受診していいのか」と迷う段階で相談してかまいません。
            </div>
          )}

          {topArea && (
            <div className="card">
              <p className="text-xs text-stone-500 mb-1">いちばん薄くなっている側面</p>
              <p className="text-sm font-medium text-stone-800 mb-2">{topArea.title}</p>
              <p className="text-sm text-stone-600 leading-[1.9]">{topArea.desc}</p>
              <p className="text-sm text-stone-700 leading-[1.9] mt-3 pt-3 border-t border-stone-100"><strong>戻し方のヒント:</strong>{topArea.hint}</p>
              <Link to={topArea.link.to} className="block py-2 text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ {topArea.link.text}</Link>
            </div>
          )}

          {/* LINE誘導(結果のすぐ下) */}
          <div className="p-4 rounded-xl my-4" style={{ background: "rgba(6,199,85,0.05)", border: "1px solid rgba(6,199,85,0.3)" }}>
            <p className="text-[11px] font-medium mb-1" style={{ color: "#05a648" }}>結果の続きを受け取る</p>
            <p className="text-sm text-stone-700 leading-[1.9] mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>{result.lineDesc}</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              onClick={handleLineClick}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold text-white"
              style={{ background: "#06C755", color: "#fff", textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
              </svg>
              LINEで続きを受け取る(無料)
            </a>
            <p className="text-[11px] text-stone-400 text-center mt-2">読むだけでOK ／ 返信や相談の必要なし ／ いつでも解除できます</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 mb-4">
            <p className="text-xs font-medium text-stone-600 mb-2">「なぜこうなるのか」を理解する</p>
            <div className="flex flex-col">
              <Link to="/articles/existential-emptiness" className="block py-2 text-sm leading-snug text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 空虚感とは——心が空っぽな感じが続く原因と、抜け出す方向</Link>
              <Link to="/articles/helper-emotional-numbness-check" className="block py-2 text-sm leading-snug text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情麻痺チェック(15項目)もあわせて確認する</Link>
              <Link to="/articles/self-function-check" className="block py-2 text-sm leading-snug text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 自己機能チェック——感じる・望む・選ぶ力の状態</Link>
            </div>
          </div>
        </div>
      )}

      <h2>空虚感は「4つの側面」から起きる</h2>
      <p>
        空虚感は、ひとつの感情ではなく、いくつかの働きが同時に小さくなっている状態です。このチェックでは、次の4つの側面に分けて見ています。
      </p>
      <div className="card space-y-2 text-sm text-stone-600 leading-[1.85]">
        {AREAS.map((a) => (
          <p key={a.key}><strong className="text-stone-700">{a.title}</strong>:{a.desc.split("。")[0]}。</p>
        ))}
      </div>
      <p>
        どの側面が薄くなっているかによって、戻し方の入口が変わります。
        空虚感の背景や、うつ・単なる疲れとの違いは、
        <Link to="/articles/existential-emptiness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">空虚感とは</Link>
        で詳しく解説しています。
      </p>

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

      <ArticleFooterLinks type="self-function" exclude={["/articles/emptiness-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete, trackLineClickFromCheck, trackRelatedClickFromCheck } from "../../lib/analytics"

const CHECK_NAME = "psychosomatic-check"
const PER_AREA = 4
const LINE_URL = "https://lin.ee/oLdXZe6?type=fatigue"

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

/* ---------------------------------------------------------------------------
 * 受診を優先したいサイン(スコアには数えない)
 * ------------------------------------------------------------------------- */
const RED_FLAGS: string[] = [
  "突然の激しい頭痛、今までに経験したことのない頭痛がある",
  "手足のしびれ・まひ、ろれつが回らない、物が二重に見える",
  "胸の痛みや締めつけ、強い息苦しさが続く・くり返す",
  "血便、黒い便が出る",
  "思い当たる理由のない体重減少がある",
  "食べ物が飲み込みにくい、つかえる、飲み込むときに痛む",
  "発熱が続いている",
  "症状が日に日に悪化している",
]

/* ---------------------------------------------------------------------------
 * 5つの領域(部位4つ+ストレスとの連動)
 * ------------------------------------------------------------------------- */
type AreaKey = "gut" | "head" | "throat" | "autonomic" | "link"

type Area = {
  key: AreaKey
  label: string
  short: string
  items: string[]
  advice: string
  link: { href: string; text: string }
}

const AREAS: Area[] = [
  {
    key: "gut",
    label: "① 胃腸",
    short: "胃腸",
    items: [
      "緊張する場面の前に、お腹が痛くなる・トイレに行きたくなる",
      "下痢と便秘をくり返している",
      "胃の痛み・胃もたれ・食欲の低下が続いている",
      "トイレに行けない状況(会議・送迎・外出)が不安で、避けることがある",
    ],
    advice: "緊張や不安が、お腹の症状として出やすい状態です。まず内科・消化器内科で体の病気がないかを確かめたうえで、「また痛くなったら」という予期不安の悪循環に目を向けることが助けになります。",
    link: { href: "/articles/ibs-stress", text: "過敏性腸症候群とストレス——予期不安と回避の悪循環" },
  },
  {
    key: "head",
    label: "② 頭・首・肩",
    short: "頭・首肩",
    items: [
      "夕方や作業のあとに、頭が締めつけられるように痛む",
      "首や肩のこりが、いつも抜けない",
      "気づくと歯を食いしばっている、あごが疲れている",
      "頭痛薬を飲む日が、前より増えている",
    ],
    advice: "体が緊張し続け、頭・首・肩にこわばりがたまっている状態です。頭痛薬を飲む日が増えている場合は、薬の飲みすぎによる頭痛にも注意が必要です。気を張り続ける働き方そのものを見直す視点が役立ちます。",
    link: { href: "/articles/tension-headache", text: "緊張型頭痛とストレス——気を張り続ける働き方との関係" },
  },
  {
    key: "throat",
    label: "③ のど・胸",
    short: "のど・胸",
    items: [
      "のどに何かが詰まっている・引っかかっている感じがする",
      "のどが締めつけられる、息が吸いにくい感じがする",
      "胸が重苦しい、ため息が多い",
      "言いたいことを飲み込んだあと、のどや胸が重くなる",
    ],
    advice: "感情を抑えたり、言葉を飲み込んだりする場面が、のどや胸の緊張として出やすい状態です。まず耳鼻咽喉科などで体の病気がないかを確かめ、そのうえで「飲み込んできたもの」に目を向けることが助けになります。",
    link: { href: "/articles/globus-sensation", text: "咽喉頭異常感症(ヒステリー球)とストレス" },
  },
  {
    key: "autonomic",
    label: "④ 自律神経・睡眠",
    short: "自律神経",
    items: [
      "安静にしているのに、動悸がすることがある",
      "めまいやふらつきを感じることがある",
      "寝つけない、夜中や早朝に目が覚める",
      "寝ても疲れが取れず、だるさが続いている",
    ],
    advice: "体のアクセルとブレーキの切り替えがうまくいかず、休むべきときに休めていない状態かもしれません。動悸やめまいは体の病気でも起こるため、まず内科で確認したうえで、緊張が抜けない生活リズムを整えていく方向が役立ちます。",
    link: { href: "/articles/autonomic-dysfunction", text: "自律神経失調症とは——支援職がまず確かめたいこと" },
  },
  {
    key: "link",
    label: "⑤ ストレスとの連動",
    short: "連動",
    items: [
      "休日や連休は、症状が軽くなる",
      "忙しい時期や、人間関係のストレスが強い時期に悪化する",
      "検査で「異常なし」と言われたのに、症状が続いている",
      "不調があっても、受診や休養を後回しにしている",
    ],
    advice: "体の症状が、ストレスや働き方と連動して動いている可能性が高い状態です。そして、不調を後回しにする習慣そのものが、症状を長引かせているかもしれません。体の治療と並行して、心と体のつながりを整理することが助けになります。",
    link: { href: "/articles/helper-self-neglect", text: "支援職のセルフネグレクト——不調を後回しにし続ける心理" },
  },
]

const TOTAL = AREAS.length * PER_AREA

type Level = "low" | "mid" | "high" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 5) return "low"
  if (score <= 11) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "ストレスによる体のサインは少なめです",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    message: "いくつか当てはまる項目はあるものの、今のところ体へのサインは限られています。ただ、支援職は体の不調を後回しにしやすく、気づいたときには症状が固定していることがあります。今どこにサインが出ているかを知っておくことが予防になります。",
  },
  mid: {
    label: "ストレスが体のサインとして出始めている可能性があります",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "ストレスや緊張が、体のいくつかの部位にサインとして現れ始めているかもしれません。「気のせい」ではなく、心と体のつながりの中で実際に起きている反応です。まず医療機関で体の病気がないかを確かめ、そのうえで、緊張を生み続けている働き方や生活に目を向けていく段階です。",
  },
  high: {
    label: "ストレスが体に強く出ている可能性があります",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "複数の部位にサインが出ていて、体がかなり長いあいだ無理をしてきた状態かもしれません。ここまで来ると、セルフケアだけで立て直すのは難しい段階です。まず医療機関(内科、症状に応じた専門科、必要に応じて心療内科)を受診し、体の治療と並行して、心理面の整理を始めることを検討してください。",
  },
}

const FAQ_ITEMS = [
  {
    q: "このチェックで心身症かどうかがわかりますか?",
    a: "いいえ。このチェックは診断ではなく、ストレスが体のどこにサインとして出ているかに気づくための目安です。心身症は、体の病気があり、その発症や経過にストレスが深く関わっている状態を指し、診断は医師が行います。気になる症状がある場合は、まず医療機関を受診してください。",
  },
  {
    q: "何項目当てはまったら注意が必要ですか?",
    a: "目安として、6〜11項目でストレスが体のサインとして出始めている可能性、12項目以上で体に強く出ている可能性があります。ただし合計数よりも、どの部位に多く出ているか、そして「⑤ストレスとの連動」の項目が多いかどうかの方が、次の行動を決める手がかりになります。",
  },
  {
    q: "ストレスで体に症状が出るのはなぜですか?",
    a: "ストレスがかかると、自律神経やホルモン、免疫の働きが変化し、体は「戦うか逃げるか」の緊張状態になります。この状態が長く続くと、胃腸の動きが乱れる、筋肉がこわばる、眠りが浅くなるなど、体の各部位に症状として現れます。くわしくは心身症の解説記事にまとめています。",
  },
  {
    q: "何科を受診すればいいですか?",
    a: "症状がある部位に応じて、まずは体の病気を確かめる科を受診します。お腹なら内科・消化器内科、頭痛なら内科・脳神経内科・頭痛外来、のどの違和感なら耳鼻咽喉科、動悸やめまいなら内科が入口です。体の病気が見つからず、ストレスとの関係が強い場合は、心療内科が選択肢になります。",
  },
  {
    q: "「受診を優先したいサイン」に当てはまりました。",
    a: "このチェックの結果より先に、医療機関を受診してください。特に、突然の激しい頭痛、手足のまひやしびれ、ろれつが回らない、強い胸の痛みや息苦しさがある場合は、すぐに医療機関を受診し、必要に応じて救急車を呼んでください。",
  },
  {
    q: "検査で異常がないのに症状が続くのは、気のせいですか?",
    a: "気のせいではありません。検査で異常が見つからないことは、症状がないという意味ではありません。のどの違和感や過敏性腸症候群のように、検査で異常が見つからなくても、ストレスとの関わりで実際に症状が続くことがあります。体の病気がないと確認できたことは、心理面に安心して取り組むための土台になります。",
  },
]

export default function PsychosomaticCheck() {
  const [flags, setFlags] = useState<boolean[]>(new Array(RED_FLAGS.length).fill(false))
  const [checked, setChecked] = useState<boolean[]>(new Array(TOTAL).fill(false))
  const [shown, setShown] = useState(false)

  const toggleFlag = (i: number) => {
    if (shown) return
    setFlags((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const toggle = (i: number) => {
    if (shown) return
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const hasFlag = flags.some(Boolean)
  const score = checked.filter(Boolean).length
  const level = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / TOTAL) * 100)

  const areaScores = AREAS.map((area, a) => ({
    area,
    score: checked.slice(a * PER_AREA, a * PER_AREA + PER_AREA).filter(Boolean).length,
  }))
  // 部位(①〜④)のうち、いちばん多く出ているところ(同点は最大2つ)
  const bodyScores = areaScores.filter((s) => s.area.key !== "link")
  const maxBody = Math.max(...bodyScores.map((s) => s.score))
  const topAreas = maxBody > 0 ? bodyScores.filter((s) => s.score === maxBody).slice(0, 2) : []
  const linkScore = areaScores.find((s) => s.area.key === "link")?.score ?? 0
  const linkArea = AREAS.find((a) => a.key === "link")!

  // 「結果を見る」を押した1回だけ計測する
  const handleShowResult = () => {
    setShown(true)
    if (level) trackCheckComplete(CHECK_NAME, score, level, TOTAL)
  }

  const handleReset = () => {
    setFlags(new Array(RED_FLAGS.length).fill(false))
    setChecked(new Array(TOTAL).fill(false))
    setShown(false)
  }

  return (
    <ArticleLayout
      title="ストレスによる体の症状チェック20項目｜胃腸・頭痛・のどの違和感…心身症のサインを部位別にセルフ診断【公認心理師監修】"
      description="お腹が痛い、頭が締めつけられる、のどが詰まる、動悸や不眠——ストレスが体のどこにサインとして出ているかを、5領域20項目・3分で無料セルフチェック。受診を優先したい危険サインの確認と、部位別の受診先・次のステップを公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/psychosomatic-check"
      date="2026-10-09"
      tags={["burnout", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        お腹、頭、のど、眠り——ストレスは、心より先に体に出ることがあります。
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
        「気持ちはまだ大丈夫」と思っていても、体は先に悲鳴を上げていることがあります。
        このチェックでは、<strong>胃腸・頭と首肩・のどと胸・自律神経と睡眠</strong>の4つの部位と、
        <strong>症状がストレスと連動しているか</strong>を20項目で確認し、
        ストレスが体のどこにサインとして出ているかを見える形にします。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ このチェックは診断ではありません。症状がある場合は、まず医療機関で体の病気がないかを確かめてください。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・<strong>受診を優先したいサイン</strong>の確認</li>
          <li>・20項目の無料セルフチェック(約3分)</li>
          <li>・ストレスが体の<strong>どの部位</strong>に出ているか、症状がストレスと連動しているか</li>
          <li>・部位別の受診先と、次に読む記事</li>
          <li>・よくある質問(心身症かわかる?何科に行く?気のせい?)</li>
        </ul>
      </nav>

      {/* ============ STEP 1:受診優先サイン ============ */}
      <h2>STEP 1|まず確かめたい、受診を優先したいサイン</h2>
      <p className="text-sm text-stone-600">
        次のような症状は、ストレスとは別の病気のサインのことがあります。当てはまるものがあればタップしてください(スコアには数えません)。
      </p>
      <div className="checklist">
        {RED_FLAGS.map((text, i) => (
          <div
            key={`f${i}`}
            className={`check-item${flags[i] ? " checked" : ""}`}
            onClick={() => toggleFlag(i)}
            role="checkbox"
            aria-checked={flags[i]}
            tabIndex={0}
            onKeyDown={(e) => e.key === " " && toggleFlag(i)}
          >
            <div className="checkbox"><div className="checkmark" /></div>
            <p className="item-text">{text}</p>
          </div>
        ))}
      </div>
      {hasFlag && (
        <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/60 text-sm text-stone-700 leading-[1.9] my-4">
          <p className="font-medium text-stone-800 mb-1">このチェックより先に、医療機関を受診してください</p>
          <p>
            当てはまったサインは、体の病気の可能性を確かめる必要があるものです。
            特に、突然の激しい頭痛、手足のまひやしびれ、ろれつが回らない、強い胸の痛みや息苦しさがある場合は、
            <strong>すぐに医療機関を受診し、必要に応じて救急車を呼んでください</strong>。
          </p>
        </div>
      )}

      {/* ============ STEP 2:20項目 ============ */}
      <h2>STEP 2|ストレスによる体のサイン チェック(20項目・無料)</h2>
      <p className="text-sm text-stone-600">
        最近1〜2か月の自分を思い浮かべて、当てはまると感じるものをタップしてください。直感で構いません。
      </p>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / {TOTAL}</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 5 ? "bar-low" : score <= 11 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      <div className="checklist">
        {AREAS.map((area, a) => (
          <div key={area.key}>
            <p className="text-xs font-medium text-stone-400 mt-4 mb-2 px-1">{area.label}</p>
            {area.items.map((text, i) => {
              const idx = a * PER_AREA + i
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
            <p>・0〜5項目:サインは少なめ ／ ・6〜11項目:サインが出始めている可能性 ／ ・12項目以上:体に強く出ている可能性</p>
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

      {shown && hasFlag && (
        <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/60 text-sm text-stone-700 leading-[1.9] my-4">
          <p className="font-medium text-stone-800 mb-1">まず受診を</p>
          <p>STEP 1で「受診を優先したいサイン」に当てはまっています。以下の結果よりも、医療機関での確認を優先してください。</p>
        </div>
      )}

      {shown && !result && (
        <div className="my-4 p-4 rounded-xl text-sm text-stone-600 leading-[1.9]" style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0" }}>
          当てはまる項目はありませんでした。今のところ、ストレスによる体のサインは目立っていない状態です。
          <button onClick={handleReset} className="block mt-2 text-xs text-stone-500 underline underline-offset-2">最初からやり直す</button>
        </div>
      )}

      {shown && result && level && (
        <div>
          {/* 結果ボックス */}
          <div style={{ background: result.bg, border: `1.5px solid ${result.border}`, borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "12px", color: "#78716c", marginBottom: "4px" }}>{score}項目 / {TOTAL}項目</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{result.label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8 }}>{result.message}</p>
          </div>

          {/* 内訳 */}
          <div className="card mb-4">
            <p className="text-xs font-medium text-stone-600 mb-3">領域ごとの内訳(当てはまった数が多いほどサインが強く出ています)</p>
            {areaScores.map(({ area, score: s }) => (
              <div key={area.key} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-stone-500 w-20 flex-shrink-0">{area.short}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${(s / PER_AREA) * 100}%`, background: "#8FAF9F" }} />
                </div>
                <span className="text-xs text-stone-500 w-10 text-right">{s}/{PER_AREA}</span>
              </div>
            ))}
          </div>

          {/* いちばん出ている部位 */}
          {topAreas.map(({ area }) => (
            <div key={area.key} className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
              <p className="text-[11px] font-medium mb-1" style={{ color: "#6b8f7f" }}>特にサインが出ている部位</p>
              <p className="text-sm font-medium text-stone-800 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>{area.label}</p>
              <p className="text-sm text-stone-600 leading-[1.9] mb-2">{area.advice}</p>
              <Link
                to={area.link.href}
                onClick={() => trackRelatedClickFromCheck(CHECK_NAME, level, area.link.href)}
                className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900"
              >
                → {area.link.text}
              </Link>
            </div>
          ))}

          {/* ストレスとの連動 */}
          <div className="p-4 rounded-xl mb-3 bg-stone-50 border border-stone-200">
            <p className="text-[11px] font-medium mb-1 text-stone-500">⑤ ストレスとの連動:{linkScore}/{PER_AREA}</p>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              {linkScore >= 2
                ? linkArea.advice
                : "症状とストレスの連動ははっきりしていません。体の症状がある場合は、ストレスの影響と決めつけず、まず医療機関で体の病気がないかを確かめることを優先してください。"}
            </p>
            <Link
              to={linkScore >= 2 ? linkArea.link.href : "/articles/psychosomatic-what"}
              onClick={() => trackRelatedClickFromCheck(CHECK_NAME, level, linkScore >= 2 ? linkArea.link.href : "/articles/psychosomatic-what")}
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900"
            >
              → {linkScore >= 2 ? linkArea.link.text : "心身症とは——ストレスが体に出るしくみ"}
            </Link>
          </div>

          {/* LINE誘導 */}
          <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
              体のサインは、消耗が進んでいることの知らせでもあります。回復の段階別の整理をLINEで届けています。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => trackLineClickFromCheck(CHECK_NAME, level)}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", alignSelf: "flex-start" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
              </svg>
              回復のステップを受け取る(無料・読むだけOK)
            </a>
            <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
              読むだけOK ／ 勧誘なし ／ いつでも解除OK
            </p>
          </div>

          {/* マッチング誘導ブロック */}
          <div className="p-4 rounded-xl mb-3" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
            <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              いしずえカウンセリングが、あなたに合うかどうか
            </p>
            <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
              体の治療と並行して、体に出るほど張りつめてきた働き方や、不調を後回しにするパターンを整理することができます。
              10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
            </p>
            <Link to="/articles/counseling-matching-check"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
              合う人・合わない人チェック(10項目)を見る →
            </Link>
          </div>

          <button onClick={handleReset} className="text-xs text-stone-500 underline underline-offset-2 mb-6">
            最初からやり直す
          </button>
        </div>
      )}

      <h2>ストレスが体に出るしくみ</h2>
      <p>
        ストレスがかかると、自律神経やホルモンの働きが変化し、体は「戦うか逃げるか」の緊張状態になります。
        一時的なら自然な反応ですが、<strong>緊張が長く続くと、体のあちこちに症状として現れます</strong>。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・胃腸の動きが乱れる(腹痛、下痢・便秘、胃もたれ)</p>
        <p>・筋肉がこわばる(頭痛、首や肩のこり、食いしばり、のどの詰まり感)</p>
        <p>・自律神経の切り替えがうまくいかない(動悸、めまい、眠りが浅い)</p>
      </div>
      <p>
        どこに出やすいかは人によって違います。体の病気があり、その発症や経過にストレスが深く関わっている状態を
        <strong>心身症</strong>と呼びます。しくみや、自律神経失調症・身体症状症との違いは
        <Link to="/articles/psychosomatic-what" className={linkCls}>心身症とは——ストレスが体に出るしくみ</Link>
        でくわしく解説しています。
      </p>

      <h2>部位別:まず行く場所</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">胃腸(腹痛・下痢・便秘・胃もたれ)</p>
          <p className="text-stone-600 leading-[1.9]">まず内科・消化器内科へ(<Link to="/articles/ibs-stress" className={linkCls}>過敏性腸症候群とストレス</Link>)。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">頭痛・首や肩のこわばり</p>
          <p className="text-stone-600 leading-[1.9]">まず内科・脳神経内科・頭痛外来へ(<Link to="/articles/tension-headache" className={linkCls}>緊張型頭痛とストレス</Link>)。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">のどの違和感・詰まり感</p>
          <p className="text-stone-600 leading-[1.9]">まず耳鼻咽喉科へ(<Link to="/articles/globus-sensation" className={linkCls}>咽喉頭異常感症とストレス</Link>)。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">動悸・めまい・だるさ・不眠</p>
          <p className="text-stone-600 leading-[1.9]">まず内科へ(<Link to="/articles/autonomic-dysfunction" className={linkCls}>自律神経失調症とは</Link>)。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">体の病気が見つからず、ストレスとの関係が強いとき</p>
          <p className="text-stone-600 leading-[1.9]">心療内科が選択肢になります(<Link to="/articles/burnout-which-clinic" className={linkCls}>何科に相談すればいいか</Link>)。</p>
        </div>
      </div>

      <h2>なぜ支援職は、体に出るまで気づけないのか</h2>
      <p>
        支援職は、利用者の小さな変化には敏感なのに、<strong>自分の体の変化には鈍くなりやすい</strong>仕事です。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・常に周囲に注意を向けていて、自分の体に注意が向かない(<Link to="/articles/always-tense" className={linkCls}>いつも気が張っている状態</Link>)</p>
        <p>・感情を抑えて働くうちに、体の感覚もわかりにくくなる(<Link to="/articles/body-sensation-unknown" className={linkCls}>体の感覚がわからない</Link>)</p>
        <p>・「利用者に迷惑をかけられない」と、受診や休養を後回しにする(<Link to="/articles/helper-self-neglect" className={linkCls}>支援職のセルフネグレクト</Link>)</p>
      </div>
      <p>
        体のサインは、心が言葉にできなかったことを代わりに伝えていることがあります。
        症状を「消すべきもの」としてだけでなく、<strong>働き方を見直す合図</strong>として受け取ることが、回復の入口になります。
      </p>

      <LineCtaFatigue />

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">部位別の解説</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/ibs-stress" className={linkCls}>過敏性腸症候群とストレス</Link></li>
          <li>・<Link to="/articles/tension-headache" className={linkCls}>緊張型頭痛とストレス</Link></li>
          <li>・<Link to="/articles/globus-sensation" className={linkCls}>咽喉頭異常感症(ヒステリー球)とストレス</Link></li>
          <li>・<Link to="/articles/autonomic-dysfunction" className={linkCls}>自律神経失調症とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">しくみを知る・あわせてチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/psychosomatic-what" className={linkCls}>心身症とは——ストレスが体に出るしくみ</Link></li>
          <li>・<Link to="/articles/helper-brain-fatigue-check" className={linkCls}>脳疲労セルフチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-depression-check" className={linkCls}>支援職うつチェック(15項目)</Link></li>
        </ul>
      </div>

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。症状がある場合は、まず医療機関を受診してください。
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

      <ArticleFooterLinks type="check" exclude={["/articles/psychosomatic-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断・治療ではありません。
      </div>
    </ArticleLayout>
  )
}

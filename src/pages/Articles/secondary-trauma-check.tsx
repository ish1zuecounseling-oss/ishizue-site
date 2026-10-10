import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete, trackLineClickFromCheck, trackRelatedClickFromCheck } from "../../lib/analytics"

const CHECK_NAME = "secondary-trauma-check"
const PER_AXIS = 5
const LINE_URL = "https://lin.ee/6H8Pzo6?type=compassion"

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

type AxisKey = "intrusion" | "avoidance" | "arousal"

type Axis = {
  key: AxisKey
  label: string
  short: string
  items: string[]
  advice: string
  link: { href: string; text: string }
}

const AXES: Axis[] = [
  {
    key: "intrusion",
    label: "① 思い出してしまう(侵入)",
    short: "思い出す",
    items: [
      "利用者や患者から聞いたつらい話・場面が、仕事の外でも勝手に頭に浮かぶ",
      "関わっているケースに関係する夢を見ることがある",
      "ニュースや似た話に触れると、そのケースを思い出して動揺する",
      "思い出すと、動悸や息苦しさなど、体が反応する",
      "相手の体験を、まるで自分が体験したかのように感じることがある",
    ],
    advice: "相手のつらい体験が、自分の中に入り込んで繰り返し再生されている状態です。思い出すこと自体を責める必要はありません。仕事と私生活の間に「切り替えの儀式」をつくること、ひとりで抱えずにスーパービジョンや同僚と話すことが、最初の対処になります。",
    link: { href: "/articles/secondary-trauma-coping", text: "二次受傷の対処法——「もらってしまった傷」から回復する" },
  },
  {
    key: "avoidance",
    label: "② 避ける・感じなくなる(回避・麻痺)",
    short: "避ける・麻痺",
    items: [
      "特定のケースや話題を、考えないように・話さないようにしている",
      "そのケースに関わる場面や人を、できれば避けたいと感じる",
      "以前より、人の苦しみに心が動きにくくなった",
      "家族や友人といても、気持ちが遠く感じる",
      "楽しめていたことに、興味が持てなくなった",
    ],
    advice: "つらさから心を守るために、感じることそのものを止めている状態です。これは心の防御反応ですが、長く続くと、自分の感情も、人とのつながりも感じにくくなっていきます。感覚を少しずつ取り戻すことが回復の方向です。",
    link: { href: "/articles/feeling-nothing", text: "何も感じない・感情が動かない——感情麻痺のしくみ" },
  },
  {
    key: "arousal",
    label: "③ 気が張って休まらない(過覚醒)",
    short: "過覚醒",
    items: [
      "寝つけない、眠りが浅い、夜中に目が覚める",
      "いつも何かに備えて、気を張っている",
      "小さな物音や刺激に、びくっとしやすい",
      "以前より、イライラしやすくなった",
      "集中できない、仕事でのミスが増えた",
    ],
    advice: "体が「まだ危険が続いている」と判断し、警戒モードから抜けられなくなっている状態です。気合いで休もうとするより、体の側から緊張をほどく時間を意図的につくることが助けになります。眠れない状態が続く場合は、医療機関への相談も検討してください。",
    link: { href: "/articles/body-stays-tense", text: "なぜ休んでも緊張が抜けないのか" },
  },
]

const TOTAL = AXES.length * PER_AXIS

type Level = "low" | "mid" | "high" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 4) return "low"
  if (score <= 9) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "二次受傷のサインは少なめです",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    message: "いくつか当てはまる項目はあるものの、今のところ大きな影響は出ていない状態です。ただ、つらい話を聞き続ける仕事では、二次受傷は誰にでも起こりえます。当てはまった項目が増えていないか、ときどき確かめてみてください。",
  },
  mid: {
    label: "二次受傷のサインが出ている可能性があります",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "相手のつらい体験に関わり続けたことで、心と体に影響が出始めているかもしれません。弱さではなく、深く関わってきた支援者に起こりうる自然な反応です。ひとりで抱え込まず、スーパービジョンや同僚、専門家と話す場をもつことが、悪化を防ぐ助けになります。",
  },
  high: {
    label: "二次受傷のサインが強く出ている可能性があります",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "思い出す・避ける・気が張るといった反応が、強く出ている状態かもしれません。ここまで来ると、セルフケアだけで立て直すのは難しい段階です。こうした状態が1か月以上続いている、眠れない、仕事や生活に支障が出ている場合は、心療内科・精神科やトラウマに詳しい専門家への相談を検討してください。",
  },
}

const FAQ_ITEMS = [
  {
    q: "二次受傷とは何ですか?",
    a: "二次受傷(二次的外傷性ストレス)とは、他者のトラウマ体験を聞いたり、そのつらさに関わり続けたりすることで、支援者自身にトラウマに似た反応が生じる状態です。直接その出来事を体験していなくても起こります。看護・介護・福祉・心理・教育など、人のつらい体験に関わる仕事で起きやすいとされています。",
  },
  {
    q: "このチェックで二次受傷と診断できますか?",
    a: "いいえ。このチェックは診断ではなく、自分の状態に気づくための目安です。研究や臨床では、二次的外傷性ストレス尺度(STSS)などの標準化された尺度が使われます。結果に関わらず、つらさが続いている場合は専門家に相談してください。",
  },
  {
    q: "共感疲労との違いは何ですか?",
    a: "共感疲労は、他者の苦しみに共感し続けることによる消耗全般を指します。二次受傷は、その中でも特に、相手のトラウマ体験に触れたことで、思い出してしまう・避ける・気が張るといった、トラウマ反応に似た症状が出ている状態を指します。両者は重なることが多く、区別しにくいこともあります。",
  },
  {
    q: "代理受傷(代理トラウマ)とは違うのですか?",
    a: "代理受傷(代理トラウマ)は、相手のトラウマに長く関わることで、支援者の世界の見方や価値観そのものが変化していくことを指す言葉です。二次受傷が比較的すぐに現れる症状に注目するのに対し、代理受傷は時間をかけて起こる内面の変化に注目します。日本語では両者がほぼ同じ意味で使われることもあります。",
  },
  {
    q: "二次受傷はPTSDになりますか?",
    a: "二次受傷の症状はPTSDとよく似ていますが、二次受傷があるからといって必ずPTSDになるわけではありません。早めに気づいて、話せる場をもつ、仕事量や担当を調整するなどの対処をすることで、回復していくことも多いです。症状が強い・長く続く場合は、医療機関で相談してください。",
  },
  {
    q: "誰に相談すればいいですか?",
    a: "まずは、職場のスーパーバイザーや信頼できる同僚に、ケースを抱え込んでいることを伝えるところからで構いません。眠れない、思い出してしまって日常生活に支障がある場合は、心療内科・精神科への受診を検討してください。職場の外で、支援者自身のためのカウンセリングを受けるという選択肢もあります。",
  },
]

export default function SecondaryTraumaCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(TOTAL).fill(false))
  const [shown, setShown] = useState(false)

  const toggle = (i: number) => {
    if (shown) return
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score = checked.filter(Boolean).length
  const level = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / TOTAL) * 100)

  const axisScores = AXES.map((axis, a) => ({
    axis,
    score: checked.slice(a * PER_AXIS, a * PER_AXIS + PER_AXIS).filter(Boolean).length,
  }))
  const maxAxis = Math.max(...axisScores.map((s) => s.score))
  const strongest = maxAxis > 0 ? axisScores.filter((s) => s.score === maxAxis).slice(0, 2) : []

  // 「結果を見る」を押した1回だけ計測する
  const handleShowResult = () => {
    setShown(true)
    if (level) trackCheckComplete(CHECK_NAME, score, level, TOTAL)
  }

  const handleReset = () => {
    setChecked(new Array(TOTAL).fill(false))
    setShown(false)
  }

  return (
    <ArticleLayout
      title="二次受傷チェック15項目｜支援職の代理受傷・二次的外傷性ストレスを3分でセルフチェック【公認心理師監修】"
      description="利用者のつらい話が頭から離れない、特定のケースを避けたくなる、眠れない——二次受傷(代理受傷・二次的外傷性ストレス)のサインを、思い出す・避ける・気が張るの3つの面から15項目・3分で無料セルフチェック。結果別の対処と相談の目安を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/secondary-trauma-check"
      date="2026-10-10"
      tags={["compassion", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        聞いた話が、仕事のあとも頭から離れない。それは、深く関わってきた支援者に起こりうる反応かもしれません。
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
        <strong>二次受傷(二次的外傷性ストレス)</strong>とは、利用者や患者のトラウマ体験に関わり続けることで、
        支援者自身にトラウマに似た反応が生じる状態です。自分が直接その出来事を体験していなくても起こります。
      </p>
      <p>
        このチェックでは、二次受傷の代表的な3つの反応——<strong>思い出してしまう・避ける/感じなくなる・気が張って休まらない</strong>——を
        15項目で確認し、今どの反応が強く出ているかを見える形にします。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ このチェックは診断ではありません。つらい記憶が繰り返しよみがえる、眠れない、生活に支障が出ている状態が続いている場合は、医療機関への相談を優先してください。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・15項目の無料セルフチェック(約3分)</li>
          <li>・<strong>3つの反応</strong>(思い出す・避ける・気が張る)のうち、どれが強いか</li>
          <li>・スコア別の状態解説(0〜4 / 5〜9 / 10以上)と対処</li>
          <li>・共感疲労・代理受傷・PTSDとの違い</li>
          <li>・相談の目安</li>
        </ul>
      </nav>

      <h2>二次受傷セルフチェック(15項目・無料)</h2>
      <p className="text-sm text-stone-600">
        この1か月ほどの自分を思い浮かべて、当てはまると感じるものをタップしてください。
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
          className={`bar-fill ${score <= 4 ? "bar-low" : score <= 9 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>

      <div className="checklist">
        {AXES.map((axis, a) => (
          <div key={axis.key}>
            <p className="text-xs font-medium text-stone-400 mt-4 mb-2 px-1">{axis.label}</p>
            {axis.items.map((text, i) => {
              const idx = a * PER_AXIS + i
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
            <p>・0〜4項目:サインは少なめ ／ ・5〜9項目:サインが出ている可能性 ／ ・10項目以上:強く出ている可能性</p>
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

      {shown && !result && (
        <div className="my-4 p-4 rounded-xl text-sm text-stone-600 leading-[1.9]" style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0" }}>
          当てはまる項目はありませんでした。今のところ、二次受傷のサインは目立っていない状態です。
          <button onClick={handleReset} className="block mt-2 text-xs text-stone-500 underline underline-offset-2">最初からやり直す</button>
        </div>
      )}

      {shown && result && level && (
        <div>
          <div style={{ background: result.bg, border: `1.5px solid ${result.border}`, borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "12px", color: "#78716c", marginBottom: "4px" }}>{score}項目 / {TOTAL}項目</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{result.label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8 }}>{result.message}</p>
          </div>

          <div className="card mb-4">
            <p className="text-xs font-medium text-stone-600 mb-3">3つの反応の内訳(当てはまった数が多いほど強く出ています)</p>
            {axisScores.map(({ axis, score: s }) => (
              <div key={axis.key} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-stone-500 w-24 flex-shrink-0">{axis.short}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${(s / PER_AXIS) * 100}%`, background: "#8FAF9F" }} />
                </div>
                <span className="text-xs text-stone-500 w-10 text-right">{s}/{PER_AXIS}</span>
              </div>
            ))}
          </div>

          {strongest.map(({ axis }) => (
            <div key={axis.key} className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
              <p className="text-[11px] font-medium mb-1" style={{ color: "#6b8f7f" }}>特に強く出ている反応</p>
              <p className="text-sm font-medium text-stone-800 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>{axis.label}</p>
              <p className="text-sm text-stone-600 leading-[1.9] mb-2">{axis.advice}</p>
              <Link
                to={axis.link.href}
                onClick={() => trackRelatedClickFromCheck(CHECK_NAME, level, axis.link.href)}
                className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900"
              >
                → {axis.link.text}
              </Link>
            </div>
          ))}

          <div className="p-4 rounded-xl mb-3 bg-stone-50 border border-stone-200">
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              二次受傷の症状、共感疲労・バーンアウト・うつとの違い、なぜ支援職に起きやすいのかは、こちらで整理しています。
            </p>
            <Link
              to="/articles/empathy-fatigue-vs-secondary-trauma"
              onClick={() => trackRelatedClickFromCheck(CHECK_NAME, level, "/articles/empathy-fatigue-vs-secondary-trauma")}
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900"
            >
              → 二次受傷とは——症状・共感疲労やPTSDとの違い
            </Link>
          </div>

          {/* LINE誘導 */}
          <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
              聞いた話を抱えたまま働き続ける支援者のために、回復の整理をLINEで届けています。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => trackLineClickFromCheck(CHECK_NAME, level)}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", alignSelf: "flex-start" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
              </svg>
              回復の整理を受け取る(無料・読むだけOK)
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
              職場では話しにくい、抱えてきたケースのことを、支援職の事情をわかった相手と整理できます。
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

      <h2>二次受傷の3つの反応</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 思い出してしまう(侵入)</p>
          <p className="text-stone-600 leading-[1.9]">聞いたつらい話や場面が、仕事の外でも繰り返し頭に浮かぶ。夢に出てくることもあります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 避ける・感じなくなる(回避・麻痺)</p>
          <p className="text-stone-600 leading-[1.9]">特定のケースや話題を避ける。人の苦しみに心が動きにくくなり、身近な人との間にも距離を感じるようになります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 気が張って休まらない(過覚醒)</p>
          <p className="text-stone-600 leading-[1.9]">眠れない、いつも何かに備えて緊張している、イライラしやすい、集中できないといった状態が続きます。</p>
        </div>
      </div>
      <p>
        これらはトラウマを体験した人に見られる反応とよく似ています。
        直接体験していなくても、深く関わる支援者の心と体には、同じような反応が起こりうるのです。
        症状のくわしい解説や、共感疲労・バーンアウト・うつとの違いは
        <Link to="/articles/empathy-fatigue-vs-secondary-trauma" className={linkCls}>二次受傷とは</Link>
        にまとめています。
      </p>

      <h2>二次受傷が起きやすい支援職</h2>
      <p>
        看護師、介護職、児童福祉・DV支援・障害福祉の支援員、スクールカウンセラー、心理職、訪問看護など、
        <strong>人のつらい体験を聞き、それに長く関わる仕事</strong>で起きやすいとされています。
        「話を聞くのが仕事だから」と、自分の反応を後回しにしやすいことも、気づきにくくする理由のひとつです。
      </p>
      <p>
        職種ごとの背景は
        <Link to="/articles/nurse-secondary-trauma" className={linkCls}>看護師の二次受傷</Link>、
        <Link to="/articles/care-worker-secondary-trauma" className={linkCls}>介護士の二次受傷</Link>
        で解説しています。
      </p>

      <LineCtaCompassion />

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
        <p className="font-medium text-stone-700 mb-2">二次受傷を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/empathy-fatigue-vs-secondary-trauma" className={linkCls}>二次受傷とは——症状・共感疲労やPTSDとの違い</Link></li>
          <li>・<Link to="/articles/secondary-trauma-coping" className={linkCls}>二次受傷の対処法</Link></li>
          <li>・<Link to="/articles/nurse-secondary-trauma" className={linkCls}>看護師の二次受傷(代理受傷)</Link></li>
          <li>・<Link to="/articles/care-worker-secondary-trauma" className={linkCls}>介護士の二次受傷(代理受傷)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">あわせてチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-empathy-check" className={linkCls}>共感疲労チェック(20項目)</Link></li>
          <li>・<Link to="/articles/psychosomatic-check" className={linkCls}>ストレスによる体の症状チェック(20項目)</Link></li>
        </ul>
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

      <ArticleFooterLinks type="check" exclude={["/articles/secondary-trauma-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { useCheckCompleteOnView } from "../../lib/useCheckCompleteOnView"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackLineClickFromCheck } from "../../lib/analytics"
import { LINE_SUBTEXT } from "../../data/siteStatus"

/**
 * 支援職の心の充実度チェック(5つの軸)
 * ・「幸福かどうか」を点数で決めず、充実を支える5つの軸(気持ち・夢中・つながり・意味・できた感)のうち、
 *   いま当てはまりが少なめの軸がどこかを見る。軸の分け方はSeligmanのPERMA(2011)を参考にし、項目は独自に作成(支援職の場面)
 * ・各軸4項目=20項目。当てはまるものを選ぶ。選んだ数が少ない=充実を感じにくい、であって、病気や不調の判定ではない
 * ・結果は「見る」ボタンで出す(1つも当てはまらない人にも結果を返すため)
 * ・独自に作成した目安で、妥当性は検証していない(URLが -check なので注記は ArticleLayout が自動で出す)
 */

const CHECK_NAME = "helper-wellbeing-check"
const LINE_URL = "https://lin.ee/oLdXZe6?type=fatigue"

type AxisKey = "p" | "e" | "r" | "m" | "a"

const AXES: {
  key: AxisKey
  name: string
  plain: string
  items: string[]
  message: string
  todo: string[]
  lineDesc: string
  links: { to: string; text: string }[]
}[] = [
  {
    key: "p",
    name: "気持ち",
    plain: "ほっとする・楽しいと感じる",
    items: [
      "仕事の中でも、ふっと気持ちがゆるむ瞬間がある",
      "仕事以外の時間に、楽しいと感じられることがある",
      "朝、今日一日を少し前向きな気持ちで始められる日がある",
      "おいしい、気持ちいいといった感覚を、味わえている",
    ],
    message:
      "ほっとする、楽しいといった気持ちを感じる場面が、いまは少なくなっているようです。支援の仕事では、相手の感情を受け止める時間が長く、自分の気持ちを味わう余裕が後回しになりやすい面があります。余裕がないことは、あなたの性格や努力の問題ではありません。",
    todo: [
      "1日のうち、1分だけでも「何もしない時間」を決める",
      "おいしい、あたたかい、気持ちいいといった小さな感覚を、意識して味わう",
      "休みの日を「何かをする日」にしすぎず、何もしない時間も残す",
    ],
    lineDesc: "気持ちの余裕が減っているときの見方を、LINEで順にお届けしています。",
    links: [
      { to: "/articles/helper-cannot-rest-on-days-off", text: "休日なのに休めない理由" },
      { to: "/articles/emptiness-check", text: "空虚感チェック(16項目)" },
    ],
  },
  {
    key: "e",
    name: "夢中",
    plain: "時間を忘れて取り組む",
    items: [
      "仕事や活動に、時間を忘れて取り組めることがある",
      "仕事以外にも、夢中になれるものがある",
      "目の前のことに、集中できる時間がある",
      "好きなことに取り組んでいると、自然と集中できる",
    ],
    message:
      "時間を忘れて取り組む感覚が、いまは少なくなっているようです。疲れがたまると、集中する力そのものが落ちやすく、「好きだったことに手が出ない」ことも起こります。夢中になれないのは、怠けではなく、余力が足りないサインとして出ることがあります。",
    todo: [
      "以前好きだったことを、5分だけ試してみる(続けなくてよい)",
      "仕事の中で、手応えを感じやすい作業を探してみる",
      "うまくできるかどうかを気にせず、結果を求めないことを一つ決める",
    ],
    lineDesc: "余力が少ないときの過ごし方を、LINEで順にお届けしています。",
    links: [
      { to: "/articles/thinker-csikszentmihalyi-flow", text: "フロー(没頭)とは" },
      { to: "/articles/burnout-recovery-stage-check", text: "燃え尽き 回復段階チェック" },
    ],
  },
  {
    key: "r",
    name: "つながり",
    plain: "安心して話せる人がいる",
    items: [
      "職場に、安心して弱音を話せる人がいる",
      "職場の外に、気を使わずに話せる人がいる",
      "困ったとき、頼れる人が思い浮かぶ",
      "最近、自分の話を最後まで聞いてもらえた経験がある",
    ],
    message:
      "安心して話せる人とのつながりが、いまは少なくなっているようです。支援職は「聞く側」に回ることが多く、自分が話す場所を後回しにしがちです。助けを求めにくいのは、弱さではなく、役割の特性によることがあります。",
    todo: [
      "短いメッセージ一通でよいので、気を使わない相手に連絡してみる",
      "「聞いてほしい」と一言添えて話してみる",
      "身近に相手がいないときは、職場の外の相談先(専門家など)も選択肢に入れる",
    ],
    lineDesc: "頼ることが苦手なときの考え方を、LINEで順にお届けしています。",
    links: [
      { to: "/articles/why-support-workers-cannot-ask-for-help", text: "支援職が助けを求められない理由" },
      { to: "/articles/cannot-depend-on-others", text: "人に頼れないのはなぜか" },
      { to: "/articles/safe-base", text: "安全基地とは" },
    ],
  },
  {
    key: "m",
    name: "意味",
    plain: "大事だと思えるものがある",
    items: [
      "自分の仕事が、誰かの役に立っていると感じられることがある",
      "仕事で大切にしたいことが、自分の中にある程度はっきりしている",
      "いまの生活に、「これは自分にとって大事だ」と思えるものがある",
      "仕事以外にも、意味を感じる関わりや活動がある",
    ],
    message:
      "「何のためにやっているのか」を感じにくい状態のようです。意味を感じにくくなるのは、仕事の価値が下がったからではなく、疲れや、大切にしたいことと現実のずれから起こることがあります。ずれの正体を見つけると、整理しやすくなります。",
    todo: [
      "「大切にしたいこと」を、3つだけ書き出してみる",
      "いまの仕事のどこで、その3つが満たされていて、どこで満たされていないかを分けて見る",
      "仕事の外に、意味を感じられる場所を一つ持つ",
    ],
    lineDesc: "大切にしたいことと現実のずれを整理する視点を、LINEで順にお届けしています。",
    links: [
      { to: "/articles/work-meaning-lost", text: "仕事の意味を見失ったとき" },
      { to: "/articles/values-mismatch-check", text: "価値観のずれチェック" },
      { to: "/articles/helper-goal-adjustment", text: "目標の調整" },
    ],
  },
  {
    key: "a",
    name: "できた感",
    plain: "できた・進んでいると思える",
    items: [
      "最近、「これはできた」と思えたことがある",
      "小さなことでも、自分で決めて進められている",
      "自分の成長や変化に気づく場面がある",
      "できなかったことだけでなく、できたことにも目が向く日がある",
    ],
    message:
      "「できた」と感じる場面が、いまは少ないようです。支援の仕事は成果が見えにくく、できたことより足りないことに目が向きやすい仕事です。できていない事実が増えたのではなく、「できた」を数える機会が減っているだけのことも少なくありません。",
    todo: [
      "1日の終わりに、できたことを1つだけ書く(小さくてよい)",
      "「できなかったこと」の横に、「そのうえでできたこと」を並べて書く",
      "成果が見えにくい仕事は、プロセスの工夫を記録しておく",
    ],
    lineDesc: "「足りない」に目が向きやすいときの見方を、LINEで順にお届けしています。",
    links: [
      { to: "/articles/self-compassion-complete", text: "セルフコンパッションとは" },
      { to: "/articles/impostor-check-20", text: "インポスター症候群チェック" },
      { to: "/articles/thinker-deci-intrinsic-motivation", text: "デシ:内発的動機づけ" },
    ],
  },
]

const ALL_ITEMS = AXES.flatMap((a, ai) => a.items.map((text, ii) => ({ text, axis: ai, key: `${a.key}-${ii}` })))
const TOTAL = ALL_ITEMS.length

/** 表示の順番:軸ごとに固まらないよう、決まった順に並べ替える(毎回同じ順) */
const ORDER = [0, 4, 8, 12, 16, 1, 5, 9, 13, 17, 2, 6, 10, 14, 18, 3, 7, 11, 15, 19]

type Band = "low" | "mid" | "high"
const BANDS: Record<Band, { label: string; message: string }> = {
  low: {
    label: "今回は、当てはまる項目が少なめでした",
    message:
      "今回の回答では、充実を感じられる場面が少なめだったようです。ただし、これだけで心の健康状態を判断することはできません。疲れがたまっているときは、誰でもこうなりやすくなります。無理に前向きになろうとせず、まず負荷を下げることを優先してください。",
  },
  mid: {
    label: "今回は、当てはまる項目が一部にありました",
    message:
      "充実を感じられる場面と、そうでない場面が混ざっているようです。気になる軸を一つだけ選んで、小さく振り返るだけでも、全体の感じ方が変わることがあります。",
  },
  high: {
    label: "今回は、当てはまる項目が多めでした",
    message:
      "今回の回答では、充実を支える感覚が広くそろっているようです。この状態を保つために、疲れのサインに早めに気づける仕組みを持っておくと安心です。",
  },
}
const bandOf = (score: number): Band => (score <= 5 ? "low" : score >= 14 ? "high" : "mid")

const FAQ_ITEMS = [
  {
    q: "これは「幸福度」を測る診断ですか?",
    a: "いいえ。幸福を点数で決めるものではありません。心理学で幸福・充実を考えるときの5つの視点(気持ち・夢中・つながり・意味・できた感)に分けて、いま当てはまりが少なめなところはどこかを見るための目安です。項目は、支援職の場面に合わせて独自に作ったもので、研究で妥当性が確かめられたものではありません。",
  },
  {
    q: "点数が低いと、うつ病や燃え尽きということですか?",
    a: "いいえ。このチェックは、病気や不調の有無を判定するものではありません。当てはまる項目が少ないことは、疲れや環境の影響で充実を感じにくくなっている可能性を示すにとどまります。気分の落ち込みや睡眠・食欲の変化などが続いている場合や、日常生活に支障が出ている場合は、期間にかかわらず、医療機関に相談してください。",
  },
  {
    q: "5つの軸の分け方は、確かなものですか?",
    a: "分け方は、Seligman(2011)のPERMA理論を参考にしています。ただし、5つの要素が本当に別々のものかについては、要素同士の重なりが大きいという指摘もあり、議論が続いています(Goodman et al., 2018)。この記事では、「いま少なめなところを見つけるための整理の枠」として使っています。",
  },
  {
    q: "結果は、何度かやったほうがいいですか?",
    a: "はい。体調や忙しさによって変わるので、時間をおいて何度かやってみて、変化や傾向を見るのがおすすめです。「ここ2週間くらいの自分」を思い浮かべて答えてください。",
  },
]

export default function HelperWellbeingCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(TOTAL).fill(false))
  const [shown, setShown] = useState(false)
  const [pick, setPick] = useState<number | null>(null)
  const toggle = (i: number) => {
    setChecked((prev) => { const n = [...prev]; n[i] = !n[i]; return n })
    setShown(false)
    setPick(null)
  }

  const score = checked.filter(Boolean).length
  const counts = AXES.map((_, ai) => ALL_ITEMS.reduce((n, it, i) => n + (checked[i] && it.axis === ai ? 1 : 0), 0))
  const min = Math.min(...counts)
  const max = Math.max(...counts)
  const lowest = counts.map((c, i) => (c === min ? i : -1)).filter((i) => i >= 0)
  // 「振り返ってみたい軸」を自動で示すのは、最低の軸と最高の軸に2点以上の差があり、最低の軸が2つ以下のときだけ。
  // 1点差、全部同じ、最低が3軸以上のときは、配列の順などで勝手に選ばず、回答した人が選ぶ
  const clear = max - min >= 2 && lowest.length <= 2
  const focus = clear ? lowest : pick !== null ? [pick] : []
  const band = bandOf(score)
  const level = shown ? band : null

  const resultRef = useCheckCompleteOnView(CHECK_NAME, score, level, TOTAL)
  const handleLineClick = () => { if (level) trackLineClickFromCheck(CHECK_NAME, level) }

  return (
    <ArticleLayout
      title="支援職の心の充実度チェック｜5つの軸で「いま少なめなところ」を振り返る20項目【公認心理師】"
      description="幸福・充実は、気持ち・夢中・つながり・意味・できた感の5つの軸に分けて考えられます。20項目のセルフチェックで、いま少なめの軸がどこかを振り返り、その軸に合った小さな手当てと読む記事がわかります。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/helper-wellbeing-check"
      date="2026-11-15"
      tags={["self-function", "burnout", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        幸福かどうかを、点数で決める必要はありません。ただ、「いま何が足りていないか」がわかると、手当ての方向が見えてきます。
      </p>

      <p>
        当てはまるものをタップして、最後に「結果を見る」を押してください。
        体調や忙しさで変わるので、<strong>「ここ2週間くらいの自分」</strong>を思い浮かべて答えてください。
        正解や、あるべき答えはありません。
        判断に迷う項目や、今の自分には当てはめにくい項目は、無理に選ばなくて構いません。
      </p>

      <div className="p-3 rounded-xl text-xs text-stone-600 leading-[1.9] mb-4" style={{ background: "#fbf7ef", border: "1px solid #ece3d3" }}>
        食事や睡眠がほとんどとれない日が続く、強い動悸や涙が止まらない、消えてしまいたい気持ちがある——
        こうした状態のときは、このチェックより先に、早めに医療機関に相談してください。
        つらい気持ちを今すぐ誰かに話したいときは、
        <strong>よりそいホットライン(0120-279-338・24時間)</strong>や
        <strong>こころの健康相談統一ダイヤル(0570-064-556)</strong>(受付時間は都道府県・政令市により異なります)も利用できます。
      </div>

      <h2>支援職の心の充実度セルフチェック(20項目)</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / {TOTAL}</span>
        </span>
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

      {!shown && (
        <button
          type="button"
          onClick={() => setShown(true)}
          className="block w-full mt-4 py-3 rounded-xl text-sm font-medium text-white"
          style={{ background: "#2C1F14" }}
        >
          結果を見る
        </button>
      )}

      {shown && (
        <div ref={resultRef}>
          {/* 全体 */}
          <div style={{ background: "#f6f8f6", border: "1.5px solid #cfdcd4", borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "12px", color: "#78716c", marginBottom: "4px" }}>全体の感じ方(あなたの価値を表すものではありません)</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{BANDS[band].label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.85 }}>{BANDS[band].message}</p>

            {/* 軸ごとの当てはまり */}
            <div className="mt-4 space-y-1.5" aria-label="軸ごとの当てはまり">
              {AXES.map((a, ai) => (
                <div key={a.key} className="flex items-center gap-2 text-[11px]">
                  <span className="w-[72px] flex-shrink-0" style={{ color: focus.includes(ai) ? "#2C1F14" : "#78716c", fontWeight: focus.includes(ai) ? 600 : 400 }}>{a.name}</span>
                  <div className="flex-1" style={{ height: 6, borderRadius: 3, background: "#e7e2d9" }}>
                    <div style={{ width: `${(counts[ai] / 4) * 100}%`, height: 6, borderRadius: 3, background: focus.includes(ai) ? "#C9A77A" : "#7C9A8A" }} />
                  </div>
                  <span className="w-8 text-right text-stone-500">{counts[ai]}/4</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 leading-[1.8] mt-3">
              この区分(当てはまる項目が少なめ・一部・多め)は、回答を振り返りやすくするために独自に設定した目安です。
              点数の違いが、心の状態の重さや健康状態の違いを意味するものではありません。
              全体の結果と軸ごとの結果は、別々に読んでください。合計が同じでも、軸ごとの様子は人によって違います。
            </p>
          </div>

          {/* 振り返ってみたい軸 */}
          {clear ? (
            <p className="text-xs text-stone-500 leading-[1.8] mb-2">
              他の軸と比べて、当てはまる項目が少なめだった軸を、下に表示しています(色の違う軸)。
            </p>
          ) : (
            <div className="card">
              <p className="text-sm text-stone-600 leading-[1.9] mb-2">
                {max - min <= 1
                  ? "軸ごとの差は大きくありません。"
                  : "当てはまる項目が少なめの軸が、3つ以上同じ数でした。"}
                気になる軸があれば、選んで振り返ってみてください。
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="振り返ってみたい軸を選ぶ">
                {AXES.map((a, ai) => (
                  <button
                    key={a.key}
                    type="button"
                    aria-pressed={pick === ai}
                    onClick={() => setPick(pick === ai ? null : ai)}
                    className="px-3 py-1.5 rounded-full text-xs border"
                    style={pick === ai
                      ? { background: "#2C1F14", color: "#fff", borderColor: "#2C1F14" }
                      : { background: "#fafaf9", color: "#57534e", borderColor: "#e8e5e1" }}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {focus.map((ai) => (
            <div key={AXES[ai].key} className="card">
              <p className="text-xs text-stone-500 mb-1">今回、振り返ってみたい軸:{AXES[ai].name}({AXES[ai].plain})</p>
              <p className="text-sm text-stone-600 leading-[1.9] mb-3">{AXES[ai].message}</p>
              <p className="text-sm font-medium text-stone-700 mb-1">小さな手当て</p>
              <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
                {AXES[ai].todo.map((t) => <li key={t}>・{t}</li>)}
              </ul>
              <div className="flex flex-col mt-3 pt-3 border-t border-stone-100">
                {AXES[ai].links.map((l) => (
                  <Link key={l.to} to={l.to} className="block py-1.5 text-sm leading-snug text-stone-600 hover:text-stone-900 underline underline-offset-2">
                    → {l.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {band === "low" && (
            <div className="card">
              <p className="text-sm font-medium text-stone-700 mb-2">全体に当てはまる項目が少ないとき</p>
              <p className="text-sm text-stone-600 leading-[1.9]">
                充実を感じにくいことの背景に、疲れの蓄積があることがあります。
                <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>や
                <Link to="/articles/helper-depression-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">うつ状態のセルフチェック</Link>で、いまの重さも確かめてみてください。
                気分の落ち込みや、睡眠・食欲の変化などが続いている場合や、日常生活に支障が出ている場合は、期間にかかわらず医療機関に相談してください。
              </p>
            </div>
          )}

          {/* LINE誘導(結果のすぐ下) */}
          <div className="p-4 rounded-xl my-4" style={{ background: "rgba(6,199,85,0.05)", border: "1px solid rgba(6,199,85,0.3)" }}>
            <p className="text-[11px] font-medium mb-1" style={{ color: "#05a648" }}>結果の続きを受け取る</p>
            <p className="text-sm text-stone-700 leading-[1.9] mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              {focus.length > 0 ? AXES[focus[0]].lineDesc : "充実を支える5つの軸について、小さな手当ての視点を、LINEで順にお届けしています。"}
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              onClick={handleLineClick}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold text-white"
              style={{ background: "#06C755", color: "#fff", textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
              </svg>
              LINEで続きを受け取る(無料)
            </a>
            <p className="text-[11px] text-stone-500 text-center mt-2">
              {LINE_SUBTEXT}
            </p>
          </div>
        </div>
      )}

      <h2>なぜ、充実を5つの軸に分けるのか</h2>
      <p>
        「幸せかどうか」は、ひとことで答えにくいものです。心理学者のSeligman（2011）は、充実した状態を支える要素として、
        <strong>肯定的な感情、没頭、人とのつながり、意味、達成</strong>の5つを整理しました（PERMA理論）。
        このチェックでは、それぞれを、支援職の場面で答えやすい言葉に置き換えて、
        <strong>気持ち・夢中・つながり・意味・できた感</strong>と呼んでいます。
      </p>
      <p>
        この分け方の良い点は、「幸福かどうか」ではなく、<strong>「いま、どこが少なめか」</strong>を見られることです。
        少なめのところを一つだけ手当てするほうが、「もっと幸せにならなければ」と全体を変えようとするより、現実的に取り組めます。
      </p>
      <p>
        ただし、5つの要素が本当に別々のものかどうかには、議論があります。要素同士の重なりが大きいという指摘もあります（Goodman et al., 2018）。
        このチェックの項目も、研究で妥当性を確かめたものではなく、<strong>独自に作った目安</strong>です。
      </p>

      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p><strong className="text-stone-700">気持ち：</strong>ほっとする、楽しいと感じる</p>
        <p><strong className="text-stone-700">夢中：</strong>時間を忘れて取り組む</p>
        <p><strong className="text-stone-700">つながり：</strong>安心して話せる人がいる</p>
        <p><strong className="text-stone-700">意味：</strong>これは大事だと思えるものがある</p>
        <p><strong className="text-stone-700">できた感：</strong>できた・進んでいると思える</p>
      </div>

      <h2>支援職では、「つながり」や「できた感」が後回しになることがある</h2>
      <p>
        支援職は、相手の感情を受け止める時間が長く、自分が話す場所が後回しになることがあります（つながり）。
        また、成果が見えにくく、足りないことに目が向きやすいこともあります（できた感）。職場や個人によって違いはあります。
        そのため、気持ちのどこかが少なめになっていても、「自分が弱いから」と受け止めてしまうことがあります。
        <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>
        の記事も参考になります。
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
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。気になる症状があるときは、医療機関に相談してください。
      </p>

      <ArticleFooterLinks type="recovery" exclude={["/articles/helper-wellbeing-check"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Seligman, M. E. P. (2011). Flourish: A Visionary New Understanding of Happiness and Well-being. Free Press.／
        Goodman, F. R., Disabato, D. J., Kashdan, T. B., &amp; Kauffman, S. B. (2018). Measuring well-being: A comparison of subjective well-being and PERMA. The Journal of Positive Psychology, 13(4), 321–332.
        ※項目は独自に作成したもので、PERMA理論の尺度そのものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

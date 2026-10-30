import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { useCheckCompleteOnView } from "../../lib/useCheckCompleteOnView"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackLineClickFromCheck } from "../../lib/analytics"

/**
 * 燃え尽き(バーンアウト)回復段階チェック
 * ・重さではなく「回復のどの段階にいるか」を見る(回復期間の記事の4フェーズ+「まだ消耗の中」)
 * ・各段階4項目×5段階=20項目(気持ちや体の状態だけを聞く)。働き方(休まず働いている/休職中/復帰した)は別に1問で聞き、
 *   その働き方で考えられる段階に1点ずつ足す。合計がいちばん多い段階を結果にする(同数なら手前の段階=無理をさせない側)
 * ・独自に作成した目安で、妥当性は検証していない(URLが -check なので注記は ArticleLayout が自動で出す)
 */

const CHECK_NAME = "burnout-recovery-stage-check"
const LINE_URL = "https://lin.ee/oLdXZe6?type=fatigue"

type StageKey = "p0" | "p1" | "p2" | "p3" | "p4"

const STAGES: {
  key: StageKey
  name: string
  short: string
  period: string
  items: string[]
  label: string
  message: string
  todo: string[]
  caution: string
  lineDesc: string
  links: { to: string; text: string }[]
}[] = [
  {
    key: "p0",
    name: "まだ消耗の中",
    short: "消耗の中",
    period: "回復の手前",
    items: [
      "仕事の日の朝、体が重くて起き上がるのに時間がかかる",
      "休みの日も、仕事のことが頭から離れない",
      "利用者さんや患者さんに、以前ほど気持ちを向けられない",
      "「もう少し頑張れば」と、休むことを先延ばしにしている",
    ],
    label: "まだ消耗が進んでいる段階かもしれません",
    message:
      "回復が始まる前の、消耗がまだ続いている段階です。ここで「もう少し頑張る」を続けると、回復にかかる期間が長くなりやすいことがわかっています。今いちばん効くのは、頑張り方を工夫することではなく、負荷を下げることです。",
    todo: [
      "仕事量や担当を、一時的にでも減らせないか相談する",
      "休みの日は「何かをする日」ではなく「何もしない日」にしてみる",
      "眠れない・食べられない日が続くなら、早めに受診する",
    ],
    caution: "「まだ大丈夫」と感じるときほど、実際の消耗は進んでいることがあります。",
    lineDesc: "消耗がどう進むか、どこで立ち止まればいいかを、段階ごとにLINEで送っています。",
    links: [
      { to: "/articles/burnout-early-signs", text: "燃え尽き症候群の初期症状・前兆——10のサイン" },
      { to: "/articles/helper-burnout-check", text: "バーンアウト診断(20項目)で、今の重さを確かめる" },
      { to: "/articles/helper-cannot-rest-on-days-off", text: "休日なのに休めない理由" },
    ],
  },
  {
    key: "p1",
    name: "休養・安定化",
    short: "休養",
    period: "目安1〜3か月",
    items: [
      "朝起きても、何かをする気力がわかない日が多い",
      "1日の多くを、横になって過ごす日がある",
      "何かをしようとしても、すぐに疲れてしまう",
      "「早く戻らなければ」という焦りと、動けなさの間で揺れている",
    ],
    label: "回復の最初の段階「休養・安定化」にいるようです",
    message:
      "体と心を安定させる段階です。この時期の一番の仕事は「何もしないこと」。動けないのは怠けではなく、回復に必要な過程です。焦りが出るのは自然な反応ですが、ここで戻ることを急ぐと、ぶり返しやすくなります。",
    todo: [
      "睡眠・食事・入浴など、体のことを最優先にする",
      "仕事の連絡は最小限にする",
      "必要に応じて医療機関を受診し、服薬や休職の相談をする",
    ],
    caution: "復帰の時期を自分だけで決めず、医師や支援者と相談しながら決めてください。",
    lineDesc: "この段階で焦りとどう付き合うか、次の段階へ進むサインは何かを、LINEで順にお届けしています。",
    links: [
      { to: "/articles/burnout-recovery-period", text: "燃え尽き症候群の回復期間の目安(4つの段階)" },
      { to: "/articles/burnout-recovery-methods", text: "燃え尽きの回復方法" },
    ],
  },
  {
    key: "p2",
    name: "振り返り・整理",
    short: "整理",
    period: "目安2〜4か月",
    items: [
      "眠りや食事が、少しずつ整ってきた",
      "「なぜこうなったのか」を考える余裕が出てきた",
      "職場や自分の働き方について、思い返すことが増えた",
      "体調には波があるが、悪い日ばかりではない",
    ],
    label: "回復の2つ目の段階「振り返り・整理」にいるようです",
    message:
      "少し余力が戻り、「なぜ燃え尽きたのか」を見つめられるようになってきた段階です。ここを飛ばして「症状が軽くなったから戻る」と、同じ形でまた消耗しやすくなります。自分を責めるためではなく、構造を見るための振り返りが大切です。",
    todo: [
      "仕事の量・職場の環境・自分の引き受け方を、分けて書き出してみる",
      "「自分が悪かった」ではなく「何が重なっていたか」で振り返る",
      "一人で整理しきれないときは、カウンセラーなど第三者と話す",
    ],
    caution: "調子の良い日に頑張りすぎると、翌日以降に反動が出やすい時期です。",
    lineDesc: "燃え尽きに至った構造を整理する視点を、段階ごとにLINEで送っています。",
    links: [
      { to: "/articles/burnout-syndrome-complete", text: "燃え尽き症候群とは(総合解説)" },
      { to: "/articles/working-model", text: "ワーキングモデルとは——抱え込みのクセの背景" },
    ],
  },
  {
    key: "p3",
    name: "再構築",
    short: "再構築",
    period: "目安3〜6か月",
    items: [
      "短い時間なら、人と会ったり外出したりできる",
      "「次は同じ働き方をしない」と考え始めている",
      "断ること・頼ることを、少しずつ試している",
      "これからのことを、少しなら考えられるようになってきた",
    ],
    label: "回復の3つ目の段階「再構築」にいるようです",
    message:
      "新しい働き方・関わり方をつくり直していく段階です。前と同じやり方に戻るのではなく、境界線の引き方や頼り方を、小さく試しながら身につけていく時期です。「試してみて、うまくいかなかった」も大事な材料になります。",
    todo: [
      "断る・任せる・頼るを、小さな場面で練習する",
      "短時間の作業や部分的な復帰など、小さな実験から始める",
      "疲れたときに自分を責めない言葉かけを練習する",
    ],
    caution: "できることが増えてきた時期ほど、以前のペースに戻りやすくなります。",
    lineDesc: "働き方をつくり直すときの具体的な視点を、LINEで順にお届けしています。",
    links: [
      { to: "/articles/boundary-what", text: "境界線とは——断れない・抱え込む構造" },
      { to: "/articles/self-function-complete", text: "自己機能とは——感じる・望む・選ぶ力の回復" },
      { to: "/articles/self-compassion-complete", text: "セルフコンパッションとは" },
    ],
  },
  {
    key: "p4",
    name: "復職・維持",
    short: "維持",
    period: "継続",
    items: [
      "生活のリズムが、ほぼ元に戻っている",
      "疲れのサインに、以前より早く気づける",
      "休みの日に、きちんと休めている感覚がある",
      "無理をしそうなとき、立ち止まれることが増えた",
    ],
    label: "回復の4つ目の段階「復職・維持」にいるようです",
    message:
      "仕事に戻りながら、回復した状態を保っていく段階です。ここで大切なのは「再発させないこと」。疲れのサインに早く気づいて、早めに手を打てる仕組みをつくっておくことが、長く続けるための土台になります。",
    todo: [
      "月に1回くらい、自分の状態をチェックする日を決める",
      "「これが出たら休む」という自分のサインを書き出しておく",
      "仕事量を戻すのは、段階的に",
    ],
    caution: "回復した後の数か月は、ぶり返しが起きやすい時期です。",
    lineDesc: "再発を防ぐためのセルフチェックの視点を、LINEで順にお届けしています。",
    links: [
      { to: "/articles/burnout-early-signs", text: "燃え尽きの初期症状——再発のサインに気づく" },
      { to: "/articles/helper-burnout-check", text: "バーンアウト診断(20項目)" },
    ],
  },
]

/** 今の働き方。選ぶと、その働き方で考えられる段階に1点ずつ足す */
const WORK_STATUS: { key: string; label: string; stages: number[] }[] = [
  { key: "working", label: "休まずに働いている", stages: [0, 4] },
  { key: "leave", label: "休職中・仕事をかなり減らしている", stages: [1, 2, 3] },
  { key: "back", label: "復帰した(時短や部分的な復帰を含む)", stages: [3, 4] },
]

const ALL_ITEMS = STAGES.flatMap((s, si) => s.items.map((text, ii) => ({ text, stage: si, key: `${s.key}-${ii}` })))
const TOTAL = ALL_ITEMS.length

/** 表示の順番:段階ごとに固まらないよう、決まった順に並べ替える(毎回同じ順) */
const ORDER = [0, 4, 8, 12, 16, 1, 5, 9, 13, 17, 2, 6, 10, 14, 18, 3, 7, 11, 15, 19]

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群の回復には、どんな段階がありますか?",
    a: "一般的には、①休養・安定化(体と心を安定させる)、②振り返り・整理(なぜ燃え尽きたかを構造的に見る)、③再構築(新しい働き方・関わり方をつくる)、④復職・維持(再発を防ぎながら続ける)の4つの段階をたどります。このチェックでは、その手前の「まだ消耗の中」を加えた5つの段階で、今どこにいるかの目安を出します。",
  },
  {
    q: "段階は順番どおりに進むものですか?",
    a: "大まかには順番に進みますが、行ったり来たりするのが普通です。調子の良い日と悪い日で結果が変わることもあります。結果は「今の目安」として使い、何度かやってみて傾向を見るのがおすすめです。",
  },
  {
    q: "このチェックは診断として使えますか?",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。休職や復職の判断は、医師や産業医と相談して決めてください。",
  },
]

export default function BurnoutRecoveryStageCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(TOTAL).fill(false))
  const toggle = (i: number) => setChecked((prev) => { const n = [...prev]; n[i] = !n[i]; return n })

  const [work, setWork] = useState<string | null>(null)
  const score = checked.filter(Boolean).length
  const counts = STAGES.map((_, si) => ALL_ITEMS.reduce((n, it, i) => n + (checked[i] && it.stage === si ? 1 : 0), 0))
  const ws = WORK_STATUS.find((w) => w.key === work)
  const totals = counts.map((c, si) => c + (ws && ws.stages.includes(si) ? 1 : 0))
  // 合計がいちばん多い段階(同数なら手前の段階)。項目を3つ以上選んだら結果を出す
  let best = 0
  totals.forEach((c, i) => { if (c > totals[best]) best = i })
  const stage = score >= 3 ? STAGES[best] : null
  const level = stage ? stage.key : null

  const resultRef = useCheckCompleteOnView(CHECK_NAME, score, level, TOTAL)
  const handleLineClick = () => { if (level) trackLineClickFromCheck(CHECK_NAME, level) }

  return (
    <ArticleLayout
      title="燃え尽き症候群の回復段階チェック｜今どの段階？20項目で回復の4フェーズを確認【公認心理師】"
      description="燃え尽き症候群(バーンアウト)の回復は、休養・安定化→振り返り・整理→再構築→復職・維持の段階をたどります。20項目のセルフチェックで、今どの段階にいるか、この時期に何を優先すればいいかを確認できます。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/burnout-recovery-stage-check"
      date="2026-10-30"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「いつになったら戻れるのか」「今の自分は回復しているのか」——燃え尽きからの回復は、段階ごとにやるべきことが違います。20項目で、今どの段階にいるかを確かめてください。
      </p>

      <p>
        まず今の働き方を1つ選び、そのあと当てはまると感じる項目をタップしてください。項目を3つ以上選ぶと結果が出ます。
        体調には波があるので、<strong>「ここ2週間くらいの自分」</strong>を思い浮かべて答えるのがおすすめです。
      </p>

      <div className="p-3 rounded-xl text-xs text-stone-600 leading-[1.9] mb-4" style={{ background: "#fbf7ef", border: "1px solid #ece3d3" }}>
        食事や睡眠がほとんどとれない日が続く、仕事のことを考えると強い動悸や涙が止まらない、消えてしまいたい気持ちがある——
        こうした状態のときは、段階に関係なく、早めに医療機関に相談してください。
        つらい気持ちを今すぐ誰かに話したいときは、
        <strong>よりそいホットライン(0120-279-338・24時間)</strong>や
        <strong>こころの健康相談統一ダイヤル(0570-064-556)</strong>も利用できます。
      </div>

      <h2>燃え尽き 回復段階セルフチェック(20項目)</h2>

      <p className="text-sm font-medium text-stone-700 mb-2">今の働き方に近いもの</p>
      <div className="flex flex-col gap-2 mb-5" role="radiogroup" aria-label="今の働き方">
        {WORK_STATUS.map((w) => (
          <button
            key={w.key}
            type="button"
            role="radio"
            aria-checked={work === w.key}
            onClick={() => setWork(work === w.key ? null : w.key)}
            className="text-left px-4 py-3 rounded-[10px] text-sm border transition-colors"
            style={work === w.key
              ? { background: "#fff", borderColor: "rgba(143,175,159,0.9)", color: "#292524", boxShadow: "0 2px 10px rgba(143,175,159,0.15)" }
              : { background: "#fafaf9", borderColor: "#e8e5e1", color: "#57534e" }}
          >
            <span className="inline-block w-4 h-4 rounded-full border mr-2.5 align-[-3px]"
              style={work === w.key ? { background: "#7C9A8A", borderColor: "#7C9A8A", boxShadow: "inset 0 0 0 3px #fff" } : { borderColor: "#d4cdc6", background: "#fff" }} />
            {w.label}
          </button>
        ))}
      </div>

      <p className="text-sm font-medium text-stone-700 mb-2">ここ2週間くらいの自分に当てはまるもの</p>
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

      {score > 0 && score < 3 && (
        <p className="text-xs text-stone-500 mt-3">あと{3 - score}つ選ぶと結果が出ます。</p>
      )}

      {stage && (
        <div ref={resultRef}>
          {/* 結果 */}
          <div style={{ background: "#f6f8f6", border: "1.5px solid #cfdcd4", borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "12px", color: "#78716c", marginBottom: "4px" }}>あなたの今の段階({stage.period})</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{stage.label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.85 }}>{stage.message}</p>

            {/* 段階ごとの当てはまり */}
            <div className="mt-4 space-y-1.5" aria-label="段階ごとの当てはまり">
              {STAGES.map((s, si) => (
                <div key={s.key} className="flex items-center gap-2 text-[11px]">
                  <span className="w-[86px] flex-shrink-0" style={{ color: si === best ? "#2C1F14" : "#78716c", fontWeight: si === best ? 600 : 400 }}>{s.name}</span>
                  <div className="flex-1" style={{ height: 6, borderRadius: 3, background: "#e7e2d9" }}>
                    <div style={{ width: `${(counts[si] / 4) * 100}%`, height: 6, borderRadius: 3, background: si === best ? "#7C9A8A" : "#b9c8bf" }} />
                  </div>
                  <span className="w-8 text-right text-stone-500">{counts[si]}/4</span>
                </div>
              ))}
            </div>
          </div>

          {/* この時期にやること */}
          <div className="card">
            <p className="text-sm font-medium text-stone-700 mb-2">この段階で優先したいこと</p>
            <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
              {stage.todo.map((t) => <li key={t}>・{t}</li>)}
            </ul>
            <p className="text-xs text-stone-500 mt-3 pt-3 border-t border-stone-100">注意:{stage.caution}</p>
          </div>

          {/* LINE誘導(結果のすぐ下) */}
          <div className="p-4 rounded-xl my-4" style={{ background: "rgba(6,199,85,0.05)", border: "1px solid rgba(6,199,85,0.3)" }}>
            <p className="text-[11px] font-medium mb-1" style={{ color: "#05a648" }}>結果の続きを受け取る</p>
            <p className="text-sm text-stone-700 leading-[1.9] mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              {stage.lineDesc}
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
            <p className="text-[11px] text-stone-400 text-center mt-2">
              読むだけでOK ／ 返信や相談の必要なし ／ いつでも解除できます
            </p>
          </div>

          {/* 段階に合った記事 */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 mb-4">
            <p className="text-xs font-medium text-stone-600 mb-2">この段階に合わせて読む</p>
            <div className="flex flex-col">
              {stage.links.map((l) => (
                <Link key={l.to} to={l.to} className="block py-2 text-sm leading-snug text-stone-600 hover:text-stone-900 underline underline-offset-2">
                  → {l.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <h2>燃え尽きからの回復は、段階ごとにやることが違う</h2>
      <p>
        燃え尽き症候群(バーンアウト)からの回復は、ある日突然「治る」ものではなく、いくつかの段階をたどります。
        そして、<strong>段階ごとに優先すべきことが違います</strong>。休むべき時期に「整理」や「復帰の準備」を急ぐと、かえって回復が遅れることがあります。
      </p>
      <div className="card space-y-2 text-sm text-stone-600 leading-[1.85]">
        {STAGES.slice(1).map((s) => (
          <p key={s.key}><strong className="text-stone-700">{s.name}</strong>({s.period}):{s.message.split("。")[0]}。</p>
        ))}
      </div>
      <p>
        それぞれの段階の期間の目安や、回復を早める要因については、
        <Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復期間の目安</Link>
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
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。休職・復職の判断は、医師や産業医と相談してください。
      </p>

      <ArticleFooterLinks type="recovery" exclude={["/articles/burnout-recovery-stage-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

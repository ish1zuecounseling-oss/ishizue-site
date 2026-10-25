import { useState } from "react"
import { Link } from "react-router-dom"
import ArticleLayout from "../../components/ArticleLayout"
import { FREE_FIRST } from "../../data/siteStatus"

/* -------------------------------------------------------------------------- */
/*  場面データ(当相談室オリジナル)                                              */
/*  Neff(2003)のセルフ・コンパッションの3要素を参考に、支援職の場面で独自に作成  */
/* -------------------------------------------------------------------------- */

// kind=自分へのやさしさ / common=共通の人間性 / mindful=気づき(マインドフルネス)
// judge=自分を責める / isolate=ひとりで抱える / overid=気持ちにのみこまれる
type ChoiceType = "kind" | "common" | "mindful" | "judge" | "isolate" | "overid"
type Choice = { text: string; type: ChoiceType }
type Scene = { situation: string; choices: Choice[] }

const SC_TYPES: ChoiceType[] = ["kind", "common", "mindful"]
const isSC = (t: ChoiceType) => SC_TYPES.includes(t)

const SCENES: Scene[] = [
  {
    situation: "利用者さんへの対応でミスをして、上司から注意を受けました。",
    choices: [
      { text: "「どうしてこんな初歩的なことを」と、帰り道もずっと自分を責める", type: "judge" },
      { text: "「疲れていたし、焦っていた」と、ミスの背景も含めて自分の状態を見てあげる", type: "kind" },
      { text: "一日中そのことで頭がいっぱいになり、ほかの仕事が手につかない", type: "overid" },
      { text: "経験を重ねた人でも、こういうミスは起こるものだと思い出す", type: "common" },
    ],
  },
  {
    situation: "担当している利用者さんの状態が、なかなか良くなりません。",
    choices: [
      { text: "「今、自分は焦っている」と気づき、その気持ちから少し距離をとる", type: "mindful" },
      { text: "自分の力不足のせいだと思ってしまう", type: "judge" },
      { text: "同じような壁にぶつかっている支援者は、ほかにもたくさんいると考える", type: "common" },
      { text: "誰にも相談できず、一人で抱え込む", type: "isolate" },
    ],
  },
  {
    situation: "忙しい時期が続き、休みの日も疲れが抜けません。",
    choices: [
      { text: "「みんな頑張っているのに、自分は弱い」と思う", type: "judge" },
      { text: "「この疲れはずっと続く」と思い込み、気持ちが沈んでいく", type: "overid" },
      { text: "疲れていることを認めて、今日は予定を入れずに体を休ませる", type: "kind" },
      { text: "同じ職場の人もきっと疲れているはずだと思い、声をかけてみる", type: "common" },
    ],
  },
  {
    situation: "利用者さんのご家族から、強い口調で不満を言われました。",
    choices: [
      { text: "嫌な気持ちになったことを認めつつ、言われた内容を少し引いて眺める", type: "mindful" },
      { text: "自分がすべて悪かったのだと、相手の言葉をそのまま受け止める", type: "judge" },
      { text: "このことは誰にも話さず、なかったことにする", type: "isolate" },
      { text: "「つらい役回りだった」と、自分をねぎらう", type: "kind" },
    ],
  },
  {
    situation: "同期が先に昇進し、自分だけ取り残されたように感じます。",
    choices: [
      { text: "そのことばかり考えて、仕事への意欲がなくなる", type: "overid" },
      { text: "比べてしまう気持ちは誰にでもあると考え、その気持ちを否定しない", type: "common" },
      { text: "「自分には能力がない」と考える", type: "judge" },
      { text: "自分がこれまで大切にしてきた仕事を、思い出してみる", type: "kind" },
    ],
  },
  {
    situation: "ほかの職員がうまくこなしている業務に、自分だけ手間取っています。",
    choices: [
      { text: "誰にも聞けず、こっそり残業して何とかしようとする", type: "isolate" },
      { text: "「慣れるまで時間がかかるのは自然なこと」と自分に声をかける", type: "kind" },
      { text: "「ここにいる資格はない」と感じる", type: "judge" },
      { text: "できていないことと、できていることを分けて眺めてみる", type: "mindful" },
    ],
  },
  {
    situation: "仕事のあと、利用者さんへの対応を思い出して、イライラしていた自分に気づきました。",
    choices: [
      { text: "「支援者なのに、こんな気持ちになるなんて失格だ」と思う", type: "judge" },
      { text: "「疲れているときにそう感じるのは、人として自然なこと」と受け止める", type: "common" },
      { text: "イライラが頭から離れず、夜まで何度も思い返す", type: "overid" },
      { text: "「今、自分はイライラしている」と気づき、ゆっくり深呼吸をする", type: "mindful" },
    ],
  },
  {
    situation: "気分が落ち込み、誰にも理解されていないように感じます。",
    choices: [
      { text: "落ち込んでいる自分に、温かい飲み物を用意するなど小さな優しさを向ける", type: "kind" },
      { text: "「こんな気持ちになるのは自分だけだ」と思う", type: "isolate" },
      { text: "落ち込んでいる気持ちを、良い悪いを決めずにそのまま感じてみる", type: "mindful" },
      { text: "落ち込んでいる自分を「甘えている」と責める", type: "judge" },
    ],
  },
]

/* 自分に厳しい反応の3つの型 */
const HARSH_PATTERNS: Record<"judge" | "isolate" | "overid", { name: string; desc: string }> = {
  judge: {
    name: "自分を責める型",
    desc: "うまくいかないとき、真っ先に「自分が悪い」「自分は足りない」と考えやすい型です。責めることで次に備えようとしている面もありますが、続くと消耗が深まります。まずは責めている自分の声に気づくところから始めましょう。",
  },
  isolate: {
    name: "ひとりで抱える型",
    desc: "つらいときほど人に話さず、自分だけで何とかしようとしやすい型です。「自分だけがこうなっている」と感じると、苦しさは大きくなります。同じ立場の人も同じ壁にぶつかっている、と思い出すことが助けになります。",
  },
  overid: {
    name: "気持ちにのみこまれる型",
    desc: "つらい出来事や気持ちが頭から離れず、それで一日がいっぱいになりやすい型です。気持ちを消そうとするより、「今こう感じている」と一歩引いて眺める練習が役立ちます。",
  },
}

/* -------------------------------------------------------------------------- */
/*  結果設定                                                                    */
/* -------------------------------------------------------------------------- */

type Level = "low" | "mid" | "high"

function getLevel(score: number): Level {
  if (score <= 2) return "low"
  if (score <= 5) return "mid"
  return "high"
}

const RESULTS: Record<Level, {
  label: string
  labelSub: string
  description: string
  color: string
  bg: string
  links: { href: string; text: string }[]
  cvBlock: { heading: string; body: string; buttonText: string }
}> = {
  low: {
    label: "セルフ・コンパッションが低めの状態です",
    labelSub: "0〜2点",
    description: "つらい状況で自分を責めやすく、孤立感や無力感を感じやすいパターンが見られます。これは性格の問題ではなく、長年かけて形成された反応パターンです。小さな「自分への優しさ」の練習から始めることができます。",
    color: "#b45309",
    bg: "#fffbeb",
    links: [
      { href: "/articles/helper-self-compassion-burnout",    text: "支援職のバーンアウトは自己批判で悪化する｜セルフ・コンパッションの心理学" },
      { href: "/articles/helper-attachment-self-compassion", text: "「自分を責める癖」はなぜ止まらないのか｜愛着とセルフ・コンパッションの心理学" },
      { href: "/articles/helper-self-criticism-culture",     text: "自分を責めるのをやめたいときの対処法｜自己批判の心理学" },
    ],
    cvBlock: {
      heading: "「また責めてしまった」を繰り返しているなら",
      body: "自己批判のパターンは一人で変えようとしても難しいことがあります。支援職専門のカウンセリングで、今の状態を整理してみましょう。",
      buttonText: `今の状態を相談してみる${FREE_FIRST}`,
    },
  },
  mid: {
    label: "セルフ・コンパッションが中程度の状態です",
    labelSub: "3〜5点",
    description: "場面によって自分に優しくできる一方、追い詰められると自己批判が出やすいパターンです。「自分だけが苦しい」という孤立感が強まっているときは、セルフ・コンパッションの「共通の人間性」の視点が役立ちます。",
    color: "#0369a1",
    bg: "#eff6ff",
    links: [
      { href: "/articles/helper-self-compassion-burnout",    text: "支援職のバーンアウトは自己批判で悪化する｜セルフ・コンパッションの心理学" },
      { href: "/articles/helper-nurse-self-compassion",      text: "看護師の44%が限界状態｜バーンアウトを防ぐセルフ・コンパッションと断る力" },
      { href: "/articles/helper-burnout-check",              text: "バーンアウトチェック｜今の消耗度を確認する" },
    ],
    cvBlock: {
      heading: "「頑張っているのになぜ消耗するのか」整理したい方へ",
      body: "セルフ・コンパッションは高めることができます。支援職専門カウンセリングで、消耗の構造を一緒に整理してみませんか。",
      buttonText: `カウンセリングで整理してみる${FREE_FIRST}`,
    },
  },
  high: {
    label: "セルフ・コンパッションが高めの状態です",
    labelSub: "6〜8点",
    description: "つらい場面でも自分への思いやりを保てる傾向があります。失敗を過度に責めず、困難を人間として自然なこととして受け止める力が育っています。この力がバーンアウト予防の重要な資源になっています。",
    color: "#065f46",
    bg: "#ecfdf5",
    links: [
      { href: "/articles/helper-burnout-occupation",         text: "バーンアウトの原因は情熱ではない｜職種別に見る消耗の構造と対処法" },
      { href: "/articles/helper-boundary-how-to",            text: "バウンダリー（境界線）の作り方｜抱え込みをやめる具体的な方法" },
      { href: "/articles/compassion-fatigue-complete",            text: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
    ],
    cvBlock: {
      heading: "今の状態を維持・深化させたい方へ",
      body: "セルフ・コンパッションが高くても、職場の構造による消耗は起きます。今の強みを活かしながら、さらに整えたい部分を一緒に確認しましょう。",
      buttonText: `状態をさらに整える${FREE_FIRST}`,
    },
  },
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HelperSelfCompassionCheck() {
  // selections[sceneIdx] = 選んだ選択肢の番号(未回答は null)
  const [selections, setSelections] = useState<(number | null)[]>(
    Array.from({ length: SCENES.length }, () => null)
  )
  const [submitted, setSubmitted] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)

  const totalAnswered = selections.filter(s => s !== null).length
  const allAnswered = totalAnswered === SCENES.length

  const chosenTypes: ChoiceType[] = selections.map((ci, si) => (ci === null ? null : SCENES[si].choices[ci].type)).filter((t): t is ChoiceType => t !== null)
  const score = submitted ? chosenTypes.filter(isSC).length : 0

  // 自分に厳しい反応のうち、いちばん多く選んだ型(同数なら judge → isolate → overid の順)
  const harshCounts = (["judge", "isolate", "overid"] as const).map((t) => ({ t, n: chosenTypes.filter((c) => c === t).length }))
  const topHarsh = harshCounts.reduce((a, b) => (b.n > a.n ? b : a))
  const harshPattern = submitted && topHarsh.n >= 2 ? HARSH_PATTERNS[topHarsh.t] : null

  function toggleChoice(sceneIdx: number, choiceIdx: number) {
    if (submitted) return
    setSelections(prev => prev.map((v, i) => (i === sceneIdx ? (v === choiceIdx ? null : choiceIdx) : v)))
  }

  function handleSubmit() {
    if (!allAnswered) return
    setSubmitted(true)
    setCurrentScene(0)
    setTimeout(() => {
      document.getElementById("sc-result")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  function handleReset() {
    setSelections(Array.from({ length: SCENES.length }, () => null))
    setSubmitted(false)
    setCurrentScene(0)
  }

  const result = submitted ? RESULTS[getLevel(score)] : null

  const SAGE = "#7EB8A4"
  const DARK = "#2C1F14"

  return (
    <ArticleLayout
      title="セルフ・コンパッション反応チェック｜支援職の8場面で「自分への思いやり」を確認する"
      description="ミス、クレーム、落ち込み——つらい場面で自分をどう扱っているか。支援職によくある8つの場面で、あなたの反応パターン(自分を責める・ひとりで抱える・気持ちにのみこまれる)を確認します。"
      url="https://www.ishizue-counseling.jp/articles/helper-self-compassion-check"
      date="2026-04-19"
      tags={["burnout", "compassion", "boundary"]}
    >
      {/* intro */}
      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        「自分に優しくしよう」と思ってもできない——それは意志の弱さではなく、長年のパターンです。
        まずは今の自分の反応を確認するところから始めましょう。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-2" style={{ color: SAGE }}>チェックのやり方</p>
        <ul className="space-y-1 text-xs text-stone-600 leading-relaxed">
          <li>・支援職によくある8つの場面で、4つの反応から<strong>いちばん近いものを1つ</strong>選んでください</li>
          <li>・「正しい答え」はありません。理想ではなく、実際にしそうな反応を選んでください</li>
          <li>・所要時間：約3分</li>
        </ul>
      </div>

      {/* progress */}
      {!submitted && (
        <div className="mb-6">
          <div className="flex justify-between text-xs text-stone-400 mb-1.5">
            <span>{totalAnswered} / {SCENES.length} 場面完了</span>
            <span>{Math.round(totalAnswered / SCENES.length * 100)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-stone-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${totalAnswered / SCENES.length * 100}%`, background: SAGE }}
            />
          </div>
        </div>
      )}

      {/* scene navigator tabs */}
      {!submitted && (
        <div className="flex gap-1.5 flex-wrap mb-6">
          {SCENES.map((_, si) => {
            const done = selections[si] !== null
            const active = si === currentScene
            return (
              <button
                key={si}
                onClick={() => setCurrentScene(si)}
                className="w-8 h-8 rounded-full text-xs font-medium transition-all"
                style={{
                  background: active ? DARK : done ? SAGE : "#f5f0eb",
                  color: active ? "#fff" : done ? "#fff" : "#a8a29e",
                  border: active ? `2px solid ${DARK}` : done ? `2px solid ${SAGE}` : "2px solid #e8ddd4",
                }}
              >
                {si + 1}
              </button>
            )
          })}
        </div>
      )}

      {/* scenes */}
      {!submitted && (
        <div>
          {SCENES.map((scene, si) => (
            <div
              key={si}
              className={`mb-6 transition-all duration-300 ${si === currentScene ? "block" : "hidden"}`}
            >
              <div className="mb-4 p-4 rounded-xl" style={{ background: DARK }}>
                <p className="text-[10px] tracking-widest uppercase font-medium mb-1.5" style={{ color: SAGE }}>場面 {si + 1}</p>
                <p className="text-sm text-stone-100 leading-relaxed font-light" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  {scene.situation}
                </p>
              </div>
              <p className="text-xs text-stone-400 mb-3">いちばん近いものを1つ選んでください</p>
              <div className="space-y-2">
                {scene.choices.map((choice, ci) => {
                  const selected = selections[si] === ci
                  const maxed = false
                  return (
                    <button
                      key={ci}
                      onClick={() => toggleChoice(si, ci)}
                      disabled={maxed}
                      className="w-full text-left rounded-xl px-4 py-3 text-sm leading-relaxed transition-all"
                      style={{
                        background: selected ? "#f5f0eb" : "#fff",
                        border: selected ? `2px solid ${SAGE}` : "2px solid #e8ddd4",
                        color: maxed ? "#c7bfb9" : DARK,
                        opacity: maxed ? 0.5 : 1,
                      }}
                    >
                      <span className="inline-flex items-start gap-3">
                        <span
                          className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                          style={{
                            borderColor: selected ? SAGE : "#d6cdc8",
                            background: selected ? SAGE : "transparent",
                          }}
                        >
                          {selected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        {choice.text}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* next / prev */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setCurrentScene(Math.max(0, si - 1))}
                  disabled={si === 0}
                  className="text-xs px-3 py-1.5 rounded-lg transition-all"
                  style={{ background: si === 0 ? "#f5f0eb" : "#e8ddd4", color: si === 0 ? "#c7bfb9" : DARK }}
                >
                  ← 前の場面
                </button>
                {si < SCENES.length - 1 ? (
                  <button
                    onClick={() => setCurrentScene(si + 1)}
                    disabled={selections[si] === null}
                    className="text-xs px-4 py-1.5 rounded-lg font-medium transition-all"
                    style={{
                      background: selections[si] !== null ? SAGE : "#f5f0eb",
                      color: selections[si] !== null ? "#fff" : "#c7bfb9",
                    }}
                  >
                    次の場面 →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!allAnswered}
                    className="text-xs px-4 py-1.5 rounded-lg font-medium transition-all"
                    style={{
                      background: allAnswered ? DARK : "#f5f0eb",
                      color: allAnswered ? "#fff" : "#c7bfb9",
                    }}
                  >
                    結果を見る
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* submit button (shown when all answered) */}
          {allAnswered && currentScene < SCENES.length - 1 && (
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl text-sm font-medium mt-4 transition-all"
              style={{ background: DARK, color: "#fff" }}
            >
              全場面完了 — 結果を見る
            </button>
          )}
        </div>
      )}

      {/* result */}
      {submitted && result && (
        <div id="sc-result">
          {/* score */}
          <div className="mb-6 p-5 rounded-2xl text-center" style={{ background: result.bg, border: `2px solid ${result.color}20` }}>
            <p className="text-xs font-medium mb-1" style={{ color: result.color }}>{result.labelSub}</p>
            <p className="text-4xl font-bold mb-1" style={{ color: result.color, fontFamily: "'Noto Serif JP', serif" }}>{score}<span className="text-lg"> / 8</span></p>
            <p className="text-sm font-medium" style={{ color: result.color }}>{result.label}</p>
          <p className="text-xs mt-2" style={{ color: result.color }}>
            {score <= 2 ? "まずは自己批判に「気づくこと」から始めましょう" :
             score <= 5 ? "場面によってセルフ・コンパッションを使い分けることが次の一歩です" :
             "今の力を維持しながら、職場の構造的な消耗にも目を向けてみましょう"}
          </p>
          </div>

          {/* 軽いCV（結果直後） */}
          <div className="mb-5 p-3 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
            <p className="text-xs text-stone-500 mb-1.5">今の状態、もう少し整理したい方へ</p>
            <a href="/#contact" className="text-sm text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors">
              → 支援職専門カウンセリングについて見てみる
            </a>
          </div>

          {/* description */}
          <p className="text-sm text-stone-600 leading-[1.9] mb-6">{result.description}</p>

          {/* 自分に厳しい反応の型 */}
          {harshPattern && (
            <div className="mb-6 p-4 rounded-xl" style={{ background: "#fff", border: "1px solid #e8ddd4" }}>
              <p className="text-xs text-stone-500 mb-1">あなたが選びやすかった反応</p>
              <p className="text-sm font-medium mb-2" style={{ color: DARK }}>{harshPattern.name}</p>
              <p className="text-xs text-stone-600 leading-relaxed">{harshPattern.desc}</p>
            </div>
          )}

          {/* 場面別振り返り */}
          <div className="mb-8">
            <p className="text-xs font-medium text-stone-500 mb-3">場面別の選択を振り返る</p>
            <div className="space-y-3">
              {SCENES.map((scene, si) => {
                const ci = selections[si]
                if (ci === null) return null
                const choice = scene.choices[ci]
                const sc = isSC(choice.type)
                return (
                  <div key={si} className="p-3 rounded-xl" style={{ background: "#f9f7f5", border: "1px solid #e8ddd4" }}>
                    <p className="text-xs text-stone-500 mb-2">場面{si + 1}｜{scene.situation}</p>
                    <p className="text-xs flex items-start gap-1.5" style={{ color: sc ? "#065f46" : "#9f3a3a" }}>
                      <span>{sc ? "✓" : "·"}</span>
                      {choice.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* related articles */}
          <div className="mb-6 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
            <p className="text-xs font-medium text-stone-700 mb-3">この結果に関連する記事</p>
            <div className="space-y-2">
              {result.links.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors"
                >
                  → {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* CV block */}
          <div className="mb-6 p-5 rounded-2xl" style={{ background: DARK }}>
            <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              {result.cvBlock.heading}
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">{result.cvBlock.body}</p>
            <a
              href="/#contact"
              className="block w-full text-center py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{ background: SAGE, color: "#fff" }}
            >
              {result.cvBlock.buttonText}
            </a>
            <p className="text-[10px] text-stone-500 text-center mt-2">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-2.5 rounded-xl text-sm text-stone-400 hover:text-stone-600 transition-colors"
            style={{ border: "1px solid #e8ddd4" }}
          >
            もう一度チェックする
          </button>

        </div>
      )}

      {/* 説明セクション（未回答時のみ下部に表示） */}
      {!submitted && (
        <div className="mt-10 space-y-4">
          <h2 className="text-base font-medium" style={{ color: DARK, fontFamily: "'Noto Serif JP', serif" }}>
            セルフ・コンパッションとは
          </h2>
          <p className="text-sm text-stone-600 leading-[1.9]">
            セルフ・コンパッションとは、つらい状況に置かれたとき、自分自身に思いやりを向ける態度です。
            自己批判せずに自分を慈しむ「自分へのやさしさ」、
            困難を「人間として普通のこと」として受け止める「共通の人間性」、
            感情に飲み込まれず観察する「マインドフルネス」の3要素から構成されます（Neff, 2003）。
          </p>
          <p className="text-sm text-stone-600 leading-[1.9]">
            研究では、セルフ・コンパッションが高いほど
            バーンアウト・抑うつ・不安・無力感が低くなることが示されています。
          </p>

          <h2 className="text-base font-medium mt-6" style={{ color: DARK, fontFamily: "'Noto Serif JP', serif" }}>
            セルフ・コンパッションが低いとどうなるか
          </h2>
          <p className="text-sm text-stone-600 leading-[1.9]">
            セルフ・コンパッションが低い状態では、仕事で失敗したときや利用者に十分に関われなかったと感じたとき、
            「自分が悪い」「もっとできたはず」という自己批判が自動的に起きやすくなります。
            研究では、この自己批判の強さが、同じストレス状況でも消耗をより深める要因になることが示されています（水野ら, 2021）。
            バーンアウトの3側面（情緒的消耗感・脱人格化・達成感の低下）すべてに影響します。
          </p>

          <h2 className="text-base font-medium mt-6" style={{ color: DARK, fontFamily: "'Noto Serif JP', serif" }}>
            セルフ・コンパッションを高めるための具体的な方法
          </h2>
          <p className="text-sm text-stone-600 leading-[1.9]">
            セルフ・コンパッションはトレーニングで高めることができます。
            まず「自分を責めている」と気づくことから始め、
            「この苦しさは自分だけではない（共通の人間性）」と意識的に思い直すことが、第一歩になります。
            また、安心できる関係（職場の同僚・カウンセラーなど）を持つことが、
            セルフ・コンパッションの基盤を育てることも研究で示されています（龍・小川内, 2023）。
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <Link to="/articles/helper-self-compassion-burnout" className="text-sm text-stone-500 hover:text-stone-800 hover:underline underline-offset-2 transition-colors">
              → 支援職のバーンアウトは自己批判で悪化する（研究解説）
            </Link>
            <Link to="/articles/helper-attachment-self-compassion" className="text-sm text-stone-500 hover:text-stone-800 hover:underline underline-offset-2 transition-colors">
              → 「自分を責める癖」はなぜ止まらないのか（愛着と自己批判）
            </Link>
          </div>
        </div>
      )}
    </ArticleLayout>
  )
}

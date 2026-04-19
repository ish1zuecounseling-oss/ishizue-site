import { useState } from "react"
import { Link } from "react-router-dom"
import ArticleLayout from "../../components/ArticleLayout"

/* -------------------------------------------------------------------------- */
/*  SCRI-J データ（宮川・谷口 2016 付録より）                                   */
/* -------------------------------------------------------------------------- */

type Choice = { text: string; isSC: boolean }
type Scene = { situation: string; choices: Choice[] }

const SCENES: Scene[] = [
  {
    situation: "あなたはおろかな失敗をしてしまいました。",
    choices: [
      { text: "「本当にばかだ」と自分を責めるだろう",               isSC: false },
      { text: "その状況を改善する方法を考えるだろう",               isSC: true  },
      { text: "今までおかした他の間違いも全て思い出してしまうだろう", isSC: false },
      { text: "「みんなおろかな間違いはするものだ」と自分に言い聞かせるだろう", isSC: true },
    ],
  },
  {
    situation: "あなたの人生で、上手くいかないことが多々あります。",
    choices: [
      { text: "「みんな時々人生で葛藤するものだ」と自分に言い聞かせるだろう", isSC: true  },
      { text: "他の人々から孤立したように感じるだろう",             isSC: false },
      { text: "「この世の中は私が苦しむように出来ている」と考えるだろう", isSC: false },
      { text: "自分に対して優しく振る舞うだろう",                   isSC: true  },
    ],
  },
  {
    situation: "ほとんどの人が簡単にできることで、あなたは苦戦しています。",
    choices: [
      { text: "自分が人として失格だと感じるだろう",                 isSC: false },
      { text: "自分のことを厳しく評価するだろう",                   isSC: false },
      { text: "「みんな何かしら苦労することがある」と考えるだろう", isSC: true  },
      { text: "そのことで悩みすぎないようにするだろう",             isSC: true  },
    ],
  },
  {
    situation: "ケガや病気のために、したいことができません。",
    choices: [
      { text: "自分の気持ちが晴れる方法を考えるだろう",             isSC: true  },
      { text: "「なぜいつも自分は悪い目にあうのだろうか」と思うだろう", isSC: false },
      { text: "「このようなことは誰にでも起こることだ」と思うだろう", isSC: true  },
      { text: "もはや希望がないように感じるだろう",                 isSC: false },
    ],
  },
  {
    situation: "あなたがとても重要だと考えていた目標を達成できませんでした。",
    choices: [
      { text: "失敗は人生の一部分だと自分に言い聞かせるだろう",     isSC: true  },
      { text: "自分自身を励ますための何かをするだろう",             isSC: true  },
      { text: "自分が人として失格だと思うだろう",                   isSC: false },
      { text: "敗北者のように感じるだろう",                         isSC: false },
    ],
  },
  {
    situation: "あなたは他者から嫌われているように感じています。",
    choices: [
      { text: "「この世の中は私が苦しむように出来ている」と感じるだろう", isSC: false },
      { text: "敗北者のように感じるだろう",                         isSC: false },
      { text: "「全員から好かれる人は誰一人としていない」と自分に言い聞かせるだろう", isSC: true },
      { text: "自分自身を気づかい、優しくするだろう",               isSC: true  },
    ],
  },
  {
    situation: "自分の嫌いな一面に気づかされました。",
    choices: [
      { text: "自分のことをひどく否定するだろう",                   isSC: false },
      { text: "自分の良い面を思い起こすだろう",                     isSC: true  },
      { text: "自分が完璧でないという事実を受け入れるだろう",       isSC: true  },
      { text: "そのような自分の一面を批判するだろう",               isSC: false },
    ],
  },
  {
    situation: "あなたは悲しさと孤独を感じています。",
    choices: [
      { text: "「自分のことを本当に気にかける人はいない」と感じるだろう", isSC: false },
      { text: "そのことが気になって仕方ないだろう",                 isSC: false },
      { text: "気分が良くなるように、自分に心優しいことをするだろう", isSC: true  },
      { text: "「事態は良くなっていく」と自分に言い聞かせるだろう", isSC: true  },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  結果設定                                                                    */
/* -------------------------------------------------------------------------- */

type Level = "low" | "mid" | "high"

function getLevel(score: number): Level {
  if (score <= 5)  return "low"
  if (score <= 10) return "mid"
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
    labelSub: "0〜5点",
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
      buttonText: "今の状態を相談してみる（初回無料）",
    },
  },
  mid: {
    label: "セルフ・コンパッションが中程度の状態です",
    labelSub: "6〜10点",
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
      buttonText: "カウンセリングで整理してみる（初回無料）",
    },
  },
  high: {
    label: "セルフ・コンパッションが高めの状態です",
    labelSub: "11〜16点",
    description: "つらい場面でも自分への思いやりを保てる傾向があります。失敗を過度に責めず、困難を人間として自然なこととして受け止める力が育っています。この力がバーンアウト予防の重要な資源になっています。",
    color: "#065f46",
    bg: "#ecfdf5",
    links: [
      { href: "/articles/helper-burnout-occupation",         text: "バーンアウトの原因は情熱ではない｜職種別に見る消耗の構造と対処法" },
      { href: "/articles/helper-boundary-how-to",            text: "バウンダリー（境界線）の作り方｜抱え込みをやめる具体的な方法" },
      { href: "/articles/helper-empathy-fatigue",            text: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
    ],
    cvBlock: {
      heading: "今の状態を維持・深化させたい方へ",
      body: "セルフ・コンパッションが高くても、職場の構造による消耗は起きます。今の強みを活かしながら、さらに整えたい部分を一緒に確認しましょう。",
      buttonText: "状態をさらに整える（初回無料）",
    },
  },
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HelperSelfCompassionCheck() {
  // selections[sceneIdx] = Set of choice indices selected (max 2)
  const [selections, setSelections] = useState<Set<number>[]>(
    Array.from({ length: SCENES.length }, () => new Set())
  )
  const [submitted, setSubmitted] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)

  const totalAnswered = selections.filter(s => s.size === 2).length
  const allAnswered = totalAnswered === SCENES.length

  const score = submitted
    ? selections.reduce((acc, sel, si) => {
        sel.forEach(ci => { if (SCENES[si].choices[ci].isSC) acc++ })
        return acc
      }, 0)
    : 0

  function toggleChoice(sceneIdx: number, choiceIdx: number) {
    if (submitted) return
    setSelections(prev => {
      const next = prev.map(s => new Set(s))
      const sel = next[sceneIdx]
      if (sel.has(choiceIdx)) {
        sel.delete(choiceIdx)
      } else if (sel.size < 2) {
        sel.add(choiceIdx)
      }
      return next
    })
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
    setSelections(Array.from({ length: SCENES.length }, () => new Set()))
    setSubmitted(false)
    setCurrentScene(0)
  }

  const result = submitted ? RESULTS[getLevel(score)] : null

  const SAGE = "#7EB8A4"
  const DARK = "#2C1F14"

  return (
    <ArticleLayout
      title="セルフ・コンパッション反応チェック｜8場面で「自分への思いやり」を確認する"
      description="つらい場面で自分をどう扱うか——SCRI-J（日本語版セルフコンパッション反応尺度）をもとに、8つの困難場面であなたの自然な反応パターンを確認します。"
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
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-2" style={{ color: SAGE }}>このチェックについて</p>
        <ul className="space-y-1 text-xs text-stone-600 leading-relaxed">
          <li>・8つの場面それぞれで、4つの反応から<strong>2つ</strong>を選んでください（実際の場面では複数の反応が起きるため）</li>
          <li>・「正しい答え」はありません。自然に近いと思う反応を選んでください</li>
          <li>・所要時間：約3〜5分</li>
          <li>・宮川・谷口（2016）の日本語版SCRI-Jをもとに作成しています</li>
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
            const done = selections[si].size === 2
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
              <p className="text-xs text-stone-400 mb-3">2つ選んでください（{selections[si].size}/2）</p>
              <div className="space-y-2">
                {scene.choices.map((choice, ci) => {
                  const selected = selections[si].has(ci)
                  const maxed = selections[si].size === 2 && !selected
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
                    disabled={selections[si].size < 2}
                    className="text-xs px-4 py-1.5 rounded-lg font-medium transition-all"
                    style={{
                      background: selections[si].size === 2 ? SAGE : "#f5f0eb",
                      color: selections[si].size === 2 ? "#fff" : "#c7bfb9",
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
            <p className="text-4xl font-bold mb-1" style={{ color: result.color, fontFamily: "'Noto Serif JP', serif" }}>{score}<span className="text-lg"> / 16</span></p>
            <p className="text-sm font-medium" style={{ color: result.color }}>{result.label}</p>
          <p className="text-xs mt-2" style={{ color: result.color }}>
            {score <= 5 ? "まずは自己批判に「気づくこと」から始めましょう" :
             score <= 10 ? "場面によってセルフ・コンパッションを使い分けることが次の一歩です" :
             "今の力を維持しながら、職場の構造的な消耗にも目を向けてみましょう"}
          </p>
          <p className="text-xs text-stone-400 mt-1">
            {score <= 5 ? "回答者の約下位30%の水準（自己批判傾向が強め）" :
             score <= 10 ? "回答者の約中間40%の水準（平均的な水準）" :
             "回答者の約上位30%の水準（セルフ・コンパッションが高め）"}
          </p>
          </div>

          {/* 軽いCV（結果直後） */}
          <div className="mb-5 p-3 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
            <p className="text-xs text-stone-500 mb-1.5">今の状態、もう少し整理したい方へ</p>
            <a href="/#contact" className="text-sm text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors">
              → 支援職専門カウンセリングに無料で相談してみる
            </a>
          </div>

          {/* description */}
          <p className="text-sm text-stone-600 leading-[1.9] mb-6">{result.description}</p>

          {/* 場面別振り返り */}
          <div className="mb-8">
            <p className="text-xs font-medium text-stone-500 mb-3">場面別の選択を振り返る</p>
            <div className="space-y-3">
              {SCENES.map((scene, si) => {
                const scCount = Array.from(selections[si]).filter(ci => scene.choices[ci].isSC).length
                return (
                  <div key={si} className="p-3 rounded-xl" style={{ background: "#f9f7f5", border: "1px solid #e8ddd4" }}>
                    <p className="text-xs text-stone-500 mb-2">場面{si + 1}｜{scene.situation}</p>
                    <div className="space-y-1">
                      {Array.from(selections[si]).map(ci => {
                        const choice = scene.choices[ci]
                        return (
                          <p key={ci} className="text-xs flex items-start gap-1.5" style={{ color: choice.isSC ? "#065f46" : "#9f3a3a" }}>
                            <span>{choice.isSC ? "✓" : "·"}</span>
                            {choice.text}
                          </p>
                        )
                      })}
                    </div>
                    <p className="text-[10px] mt-1.5" style={{ color: scCount === 2 ? "#065f46" : scCount === 1 ? "#92400e" : "#9f3a3a" }}>
                      セルフ・コンパッション反応：{scCount} / 2
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

          {/* note */}
          <p className="text-xs text-stone-400 mt-6 leading-relaxed">
            このチェックツールは宮川裕基・谷口淳一（2016）「日本語版セルフコンパッション反応尺度（SCRI-J）の作成」心理学研究 87(1), 70-78 に掲載された尺度項目をもとに、教育・情報提供目的で作成しています。医学的・心理学的診断の代替にはなりません。
          </p>
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

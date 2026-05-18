import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

/**
 * 4つの哲学的対立軸 × 各軸4項目 = 16項目
 * 各項目は「Aに近い(-1)」「中間(0)」「Bに近い(+1)」で評価
 * 軸ごとに合計スコアを-4〜+4で算出
 */

type AxisKey = "individual" | "liberal" | "utilitarian" | "instrumental"

type Question = {
  axis: AxisKey
  text: string
  // optionA: 軸の「左側(A)」を表す選択肢のラベル
  optionA: string
  // optionB: 軸の「右側(B)」を表す選択肢のラベル
  optionB: string
}

const questions: Question[] = [
  // 軸1:個人主義 vs 共同体主義
  { axis: "individual", text: "仕事のチームで意見が割れたとき", optionA: "自分の意見を率直に主張したい", optionB: "和を乱したくない・全体で合意したい" },
  { axis: "individual", text: "家族・親族との関係について", optionA: "個人の人生を最優先したい", optionB: "家族の絆や役割を大切にしたい" },
  { axis: "individual", text: "「みんなで決める」場面に対して", optionA: "個人の判断が優先されるべきだと思う", optionB: "集団の総意を尊重すべきだと思う" },
  { axis: "individual", text: "「迷惑をかけない」という考え方", optionA: "個人の自由が優先されるべき", optionB: "周囲への配慮が優先されるべき" },

  // 軸2:リベラリズム vs 保守主義
  { axis: "liberal", text: "新しい働き方・制度の変化に対して", optionA: "積極的に変化を取り入れたい", optionB: "従来の方法のよさを守りたい" },
  { axis: "liberal", text: "「伝統的な価値観」について", optionA: "時代に合わせて変えるべきものが多い", optionB: "守るべき大切なものが多い" },
  { axis: "liberal", text: "多様性(LGBTQ・国際結婚など)について", optionA: "多様性は積極的に受け入れるべき", optionB: "急激な変化には慎重であるべき" },
  { axis: "liberal", text: "職場のルール・慣習について", optionA: "合理的でなければ変えるべき", optionB: "既存の秩序には理由があると考える" },

  // 軸3:功利主義 vs カント主義(義務論)
  { axis: "utilitarian", text: "「嘘も方便」という考え方", optionA: "全体にとって良い結果なら許容できる", optionB: "嘘は原則として避けるべき" },
  { axis: "utilitarian", text: "ルールと結果が対立するとき", optionA: "結果的に多くの人が幸せになる選択をしたい", optionB: "ルールや約束を守ることを優先したい" },
  { axis: "utilitarian", text: "支援の現場で「最善策」を考えるとき", optionA: "全体の幸福が最大化される方法を選ぶ", optionB: "守るべき原則・倫理を優先する" },
  { axis: "utilitarian", text: "「目的のためなら手段は問わない」について", optionA: "結果が大きく良ければある程度許容できる", optionB: "プロセス・手段の正しさは譲れない" },

  // 軸4:道具主義 vs 本質主義
  { axis: "instrumental", text: "人間関係の価値について", optionA: "何の役に立つかで判断することが多い", optionB: "役に立つかどうかは関係なく大切にしたい" },
  { axis: "instrumental", text: "自分の存在価値について", optionA: "何かを成し遂げたり貢献することで生まれる", optionB: "存在そのものに価値があると思いたい" },
  { axis: "instrumental", text: "「役に立たない」と感じる物事に対して", optionA: "効率的でないなら手放してよい", optionB: "役に立たなくても価値があるものはある" },
  { axis: "instrumental", text: "支援の対象である利用者について", optionA: "支援の効果(変化・成果)が重要", optionB: "存在そのものを尊重することが重要" },
]

type AxisInfo = {
  key: AxisKey
  name: string
  shortName: string
  optionALabel: string
  optionBLabel: string
  optionADesc: string
  optionBDesc: string
}

const axisInfo: Record<AxisKey, AxisInfo> = {
  individual: {
    key: "individual",
    name: "個人主義 ⇔ 共同体主義",
    shortName: "個人 / 共同体",
    optionALabel: "個人主義",
    optionBLabel: "共同体主義",
    optionADesc: "個人の権利・自由・自己決定を最優先します。「自分の人生は自分で決める」を大切にする考え方です。",
    optionBDesc: "家族・地域・組織などコミュニティの絆や役割を重視します。「自分は誰かと結びついて生きている」を大切にする考え方です。",
  },
  liberal: {
    key: "liberal",
    name: "リベラリズム ⇔ 保守主義",
    shortName: "リベラル / 保守",
    optionALabel: "リベラリズム",
    optionBLabel: "保守主義",
    optionADesc: "変化・多様性・新しい自由を歓迎します。「より良い未来のために、既存のものを変えていく」を大切にする考え方です。",
    optionBDesc: "伝統・既存の秩序・受け継がれてきたルールを尊重します。「先人が築いてきたものには理由がある」を大切にする考え方です。",
  },
  utilitarian: {
    key: "utilitarian",
    name: "功利主義 ⇔ カント主義(義務論)",
    shortName: "結果 / 規則",
    optionALabel: "功利主義",
    optionBLabel: "カント主義",
    optionADesc: "結果として全体の幸福が最大化される行動を良しとします。「最も多くの人が幸せになる選択」を大切にする考え方です。",
    optionBDesc: "結果に関わらず守るべき道徳・義務があると考えます。「プロセスや規則の正しさ」を大切にする考え方です。",
  },
  instrumental: {
    key: "instrumental",
    name: "道具主義 ⇔ 本質主義",
    shortName: "有用性 / 本質",
    optionALabel: "道具主義",
    optionBLabel: "本質主義",
    optionADesc: "物事や人を「何の役に立つか(有用性)」で評価します。「成果・貢献・効果」を大切にする考え方です。",
    optionBDesc: "物事には生来の変わらない「本質・価値」があると考えます。「存在そのものの尊さ」を大切にする考え方です。",
  },
}

const FAQ_ITEMS = [
  {
    q: "なぜ「価値観の違い」を知ることが大切なのですか?",
    a: "対人関係の悩み・自己嫌悪の多くは、価値観の違いから生じています。「なぜあの人とは合わないのか」「なぜ自分は責められるのか」を構造的に理解できると、相手や自分を一方的に責めずに済みます。違いを認識することで、不必要な摩擦や自責を減らすことができます。",
  },
  {
    q: "どちらの価値観が「正しい」のですか?",
    a: "どちらが正しいということはありません。4つの軸はすべて、人類が長く議論してきた哲学的な立場で、それぞれに合理性と限界があります。「正解の価値観」を探すのではなく、「自分はどちら寄りか」「相手はどちら寄りか」を理解することが、関係性の整理に役立ちます。",
  },
  {
    q: "価値観は変えられますか?",
    a: "完全に変えるのは難しいですが、「自覚すること」「相手の価値観を理解すること」はできます。価値観そのものを変えなくても、自覚するだけで対人関係の摩擦は減ります。また、ライフステージや経験を経て、自然に価値観が変化することもあります。",
  },
  {
    q: "支援職に「価値観の違い」で悩む人が多いのはなぜですか?",
    a: "支援職は利用者・同僚・組織・社会と、複数のステークホルダーと関わります。それぞれが異なる価値観を持っているため、板挟みになりやすい構造にあります。さらに、自分の価値観と職業上求められる価値観のずれが、自己嫌悪・燃え尽きにつながることがあります。",
  },
  {
    q: "「合わない人」とどう関わればいいですか?",
    a: "「相手を変えよう」「説得しよう」とすると、ほとんどの場合うまくいきません。価値観は深いレベルで定着しているため、議論では変わらないからです。むしろ「価値観が違うのだから、合わないのが自然」と受け入れることで、不必要な葛藤が減ります。距離の取り方を調整することも大切な選択肢です。",
  },
  {
    q: "自分の価値観がよくわかりません",
    a: "価値観は普段意識しないため、わからないのが普通です。このチェックのような問いに答えることで、少しずつ自分の傾向が見えてきます。また、「どんなときに違和感を覚えるか」「どんなときに納得できないか」を観察することも、自分の価値観を知る手がかりになります。",
  },
]

export default function ValuesMismatchCheck() {
  // 各質問の回答:-1(A) / 0(中間) / 1(B) / null(未回答)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(16).fill(null))

  const setAnswer = (idx: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[idx] = value
      return next
    })
  }

  // 回答済み数
  const answeredCount = answers.filter((a) => a !== null).length
  const allAnswered = answeredCount === 16
  const progress = Math.round((answeredCount / 16) * 100)

  // 軸ごとのスコア計算(-4〜+4)
  const axisScores: Record<AxisKey, number> = {
    individual: 0,
    liberal: 0,
    utilitarian: 0,
    instrumental: 0,
  }

  if (allAnswered) {
    questions.forEach((q, i) => {
      const val = answers[i]
      if (val !== null) {
        axisScores[q.axis] += val
      }
    })
  }

  // 各軸のスコアをラベル化
  const interpretScore = (score: number, axis: AxisKey) => {
    const info = axisInfo[axis]
    if (score <= -3) return { label: `強く${info.optionALabel}寄り`, desc: info.optionADesc, position: "left-strong" as const }
    if (score <= -1) return { label: `${info.optionALabel}寄り`,   desc: info.optionADesc, position: "left" as const }
    if (score === 0) return { label: "中間・両側を持つ", desc: `${info.optionALabel}と${info.optionBLabel}の両方の側面を持ち、状況によって使い分ける傾向があります。`, position: "center" as const }
    if (score <= 2)  return { label: `${info.optionBLabel}寄り`,   desc: info.optionBDesc, position: "right" as const }
    return { label: `強く${info.optionBLabel}寄り`, desc: info.optionBDesc, position: "right-strong" as const }
  }

  // バーの位置を計算(-4〜+4を0〜100%にマッピング)
  const scoreToPercent = (score: number) => {
    return ((score + 4) / 8) * 100
  }

  return (
    <ArticleLayout
      title="価値観の違いチェック｜なぜ人と合わないのか・4つの哲学軸から自分を可視化【公認心理師】"
      description="「人と合わない」「話が通じない」と感じる理由は、根底にある価値観の違いから来ています。4つの哲学的対立軸(個人主義/共同体・リベラル/保守・功利主義/カント主義・道具主義/本質主義)であなたの価値観を16項目で可視化。公認心理師監修。"
      url="https://www.ishizue-counseling.jp/articles/values-mismatch-check"
      date="2026-05-18"
      tags={["check", "self-function", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「人と合わない」と感じる理由は、根底にある価値観の違いから来ています。あなた自身の価値観を可視化することで、対人関係の摩擦や自己嫌悪が整理されます。
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
        「なぜあの人とは話が噛み合わないのか」「なぜ自分はあの場面で違和感を覚えたのか」「なぜいつも責められているように感じるのか」——
        対人関係で起きる悩みや自己嫌悪は、その多くが<strong>根底にある「価値観の違い」から生じている</strong>と考えられます。
      </p>

      <p>
        この記事では、人々の考え方の違いを生み出す<strong>4つの哲学的対立軸</strong>を解説し、
        16項目のチェックであなた自身の価値観を可視化します。
        違いを言語化できると、対人関係の摩擦が「相手や自分のせい」ではなく「価値観の構造の違い」として整理できるようになります。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・対人関係の悩み・自己嫌悪と価値観の関係</li>
          <li>・人々の考え方を分ける4つの哲学的対立軸</li>
          <li>・16項目で自分の価値観を可視化(無料チェック)</li>
          <li>・支援職特有の「価値観の衝突」が起きる構造</li>
          <li>・「合わない人」との関わり方</li>
        </ul>
      </nav>

      <h2>なぜ「価値観の違い」を知ることが大切なのか</h2>
      <p>
        対人関係で「合わない」「話が通じない」と感じるとき、私たちはしばしば次のように反応します。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「相手がおかしい」と相手を責める</p>
        <p>・「自分が悪いんだ」と自分を責める</p>
        <p>・「話してもわからない」と諦める</p>
        <p>・「もっと頑張って理解させなきゃ」と疲れる</p>
      </div>

      <p>
        しかし、その「合わなさ」の正体は、<strong>個人の性格や能力の問題ではなく、価値観という構造の違い</strong>であることが多いのです。
        価値観の違いを理解できれば、相手を責めることも、自分を責めることも減ります。
        「違いがある」という事実を、そのまま受け止められるようになります。
      </p>

      <p>
        臨床心理の現場でも、患者さんの苦しみを理解するために「その人が何を大切にしているか」「何を譲れないと感じているか」を把握することが重要です。
        価値観は<strong>その人が生きるうえでの『軸』</strong>であり、それが揺らいだり、他者と衝突したりするときに大きな苦しみが生まれます。
      </p>

      <h2>4つの哲学的対立軸</h2>
      <p>
        ここでは、哲学・倫理学で長く議論されてきた<strong>4つの対立軸</strong>を紹介します。
        これらは「どちらが正しい」というものではなく、人が物事をどう捉えるかの<strong>異なる立ち位置</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 個人主義 ⇔ 共同体主義</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>個人主義</strong>は個人の権利・自由・自己決定を最優先する立場。
          <strong>共同体主義</strong>は家族・地域・組織などコミュニティの絆や役割を重視する立場。
          「自分のことは自分で決める」と「みんなで決めるべき」の間で、私たちは日常的にどちら寄りかを選んでいます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② リベラリズム(自由主義) ⇔ 保守主義</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>リベラリズム</strong>は変化・多様性・新しい自由を積極的に追求する立場。
          <strong>保守主義</strong>は伝統・既存の秩序・受け継がれてきたルールを重んじる立場。
          「新しいものを取り入れるべきか」「既存のものを守るべきか」の分かれ目です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 功利主義 ⇔ カント主義(義務論)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>功利主義</strong>は「結果として全体の幸福が最大化されること」を良しとする立場(結果重視)。
          <strong>カント主義</strong>は「結果に関わらず守るべき道徳・義務がある」とする立場(規則・プロセス重視)。
          支援職の現場でも、「全体の幸福のための判断」と「個別のルール遵守」の間で葛藤が起きることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 道具主義 ⇔ 本質主義</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>道具主義</strong>は物事や人を「何の役に立つか」で評価する立場(有用性重視)。
          <strong>本質主義</strong>は「物事には生来の変わらない本質・価値がある」とする立場(存在重視)。
          自分自身の価値を「成果」で測るか「存在そのもの」で捉えるか——という問いとも関わります。
        </p>
      </div>

      <h2>あなたの価値観チェック(16項目)</h2>
      <p>
        以下の16項目について、自分の感覚に近い方を選んでください。「中間」を選んでも構いません。
        すべて回答すると、4つの軸でのあなたの位置がレーダーチャートで表示されます。
      </p>

      <div className="my-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-stone-600 font-medium">回答進捗</span>
          <span className="text-xs text-stone-700 font-semibold">{answeredCount} / 16</span>
        </div>
        <div className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${progress}%`, background: "#8FAF9F" }}
          />
        </div>
      </div>

      <div className="space-y-4 my-5">
        {questions.map((q, i) => {
          const currentValue = answers[i]
          return (
            <div key={i} className="p-4 rounded-2xl border border-stone-200 bg-white">
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium mb-1">
                質問 {i + 1} ／ {axisInfo[q.axis].shortName}
              </p>
              <p className="text-sm font-medium text-stone-800 mb-3 leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                {q.text}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setAnswer(i, -1)}
                  className={`text-left text-xs p-3 rounded-xl border transition-all ${
                    currentValue === -1
                      ? "border-stone-700 bg-stone-100 text-stone-900 font-medium"
                      : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  A. {q.optionA}
                </button>
                <button
                  type="button"
                  onClick={() => setAnswer(i, 0)}
                  className={`text-left text-xs p-3 rounded-xl border transition-all ${
                    currentValue === 0
                      ? "border-stone-700 bg-stone-100 text-stone-900 font-medium"
                      : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  中間・どちらとも言えない
                </button>
                <button
                  type="button"
                  onClick={() => setAnswer(i, 1)}
                  className={`text-left text-xs p-3 rounded-xl border transition-all ${
                    currentValue === 1
                      ? "border-stone-700 bg-stone-100 text-stone-900 font-medium"
                      : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  B. {q.optionB}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {!allAnswered && (
        <div className="my-4 p-3 rounded-xl bg-amber-50 border border-amber-100 text-xs text-stone-600 leading-[1.8]">
          すべての質問に回答すると、4つの軸でのあなたの位置が表示されます。({answeredCount} / 16 回答済み)
        </div>
      )}

      {allAnswered && (
        <div className="my-6 space-y-5">
          <div className="p-5 rounded-2xl" style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", border: "1.5px solid rgba(143,175,159,0.4)" }}>
            <p className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-medium mb-2">あなたの結果</p>
            <p className="text-base font-medium text-stone-900 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              4つの軸でのあなたの位置
            </p>

            {/* 4軸の結果表示 */}
            <div className="space-y-5">
              {(Object.keys(axisInfo) as AxisKey[]).map((axisKey) => {
                const info = axisInfo[axisKey]
                const score = axisScores[axisKey]
                const interpretation = interpretScore(score, axisKey)
                const percent = scoreToPercent(score)

                return (
                  <div key={axisKey} className="bg-white p-4 rounded-xl border border-stone-100">
                    <p className="text-xs font-medium text-stone-700 mb-2">{info.name}</p>

                    {/* バー */}
                    <div className="relative my-3">
                      <div className="flex justify-between text-[10px] text-stone-500 mb-1">
                        <span>{info.optionALabel}</span>
                        <span>{info.optionBLabel}</span>
                      </div>
                      <div className="relative h-2 bg-stone-100 rounded-full overflow-hidden">
                        {/* 中央線 */}
                        <div className="absolute top-0 left-1/2 w-px h-full bg-stone-300" />
                        {/* マーカー */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md"
                          style={{ left: `${percent}%`, background: "#7EB8A4" }}
                        />
                      </div>
                      <div className="text-center mt-1.5">
                        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(143,175,159,0.15)", color: "#5A8576" }}>
                          {interpretation.label}（スコア: {score > 0 ? `+${score}` : score}）
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed mt-2">{interpretation.desc}</p>
                  </div>
                )
              })}
            </div>

            {/* 総合解釈 */}
            <div className="mt-5 p-4 rounded-xl bg-stone-50 border border-stone-200">
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium mb-2">全体の解釈</p>
              <p className="text-xs text-stone-600 leading-[1.9]">
                4つの軸の結果は、「絶対的な性格判定」ではなく、「あなたが今この時点でどちらに重心を置いているか」の傾向を示します。
                とりわけ強く一方に偏っている軸があれば、その軸において<strong>「反対側に位置する人」と対人摩擦が起きやすい</strong>可能性があります。
                逆に「中間」が多い場合、状況によって柔軟に立場を変えられる一方、自分の軸が見えづらく感じることもあります。
              </p>
            </div>
          </div>

          {/* CV ブロック */}
          <div style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", border: "1.5px solid rgba(143,175,159,0.35)", borderRadius: "14px", padding: "1.5rem", textAlign: "center" }}>
            <p style={{ fontWeight: 600, fontSize: "1rem", color: "#222", marginBottom: "0.6rem" }}>
              「合わない」を構造から整理してみませんか
            </p>
            <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              価値観の違いから来る対人摩擦・自己嫌悪を、安全な場で言語化することで、苦しみの正体が見えてきます。「相手のせい・自分のせい」を超えた整理が可能です。
            </p>
            <a href="/#contact"
              style={{ display: "inline-block", background: "#2C1F14", color: "#fff", borderRadius: "99px", padding: "13px 24px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", marginBottom: "0.6rem" }}>
              今の状態を整理してみる(初回無料)
            </a>
            <p style={{ fontSize: "0.75rem", color: "#aaa", margin: 0 }}>
              支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK
            </p>
          </div>
        </div>
      )}

      <h2>支援職に「価値観の衝突」が多い理由</h2>
      <p>
        支援職は、複数の立場が交差する場所で働きます。それぞれの立場で価値観が異なるため、板挟みになりやすい構造があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 利用者との価値観の違い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は「相手のために最善を尽くす」立場ですが、利用者の価値観と自分の価値観がずれていることはよくあります。
          たとえば、自分は「個人の自立(個人主義)」を大切にしているのに、利用者は「家族の絆(共同体主義)」を大切にしている、など。
          このとき「自分の支援は正しいのか」という葛藤が生まれます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 同僚・組織との価値観の違い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同じ職場でも、同僚や組織の方針と自分の価値観がずれることがあります。
          たとえば、自分は「結果として利用者が幸せになることが大事(功利主義)」と考えているのに、組織は「ルール・手続きの遵守(カント主義)」を重視する、など。
          このとき「ここでは自分らしくいられない」という消耗が起こります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「役に立たなければ」というプレッシャー</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は<strong>道具主義的な評価軸</strong>(「役に立ったか」「成果が出たか」)に晒されやすい職業です。
          一方で、本来は<strong>本質主義的な姿勢</strong>(利用者の存在そのものを尊重する)を求められます。
          このずれが「役に立てない自分には価値がない」という<Link to="/articles/self-blame-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自責感</Link>を生むことがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「変化」と「伝統」のあいだ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          福祉・医療・教育の現場には、伝統的な価値観(保守)と新しい考え方(リベラル)が同居しています。
          世代や立場によって重視するものが違うため、世代間の摩擦が起きやすい構造があります。
        </p>
      </div>

      <h2>「合わない人」とどう関わるか</h2>
      <p>
        価値観が違う相手とどう関わるかは、対人関係の重要な課題です。よくある誤解と、現実的なアプローチを整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">よくある誤解</p>
        <div className="space-y-2 text-sm text-stone-600 leading-[1.9] mt-2">
          <p>・「話せば理解しあえる」→ 価値観の根は深く、議論では変わりにくい</p>
          <p>・「自分が変われば合うようになる」→ 自分の軸を捨てると消耗が深くなる</p>
          <p>・「合わない人とは絶対に分かり合えない」→ 違いを認めたうえで関わる方法はある</p>
        </div>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「価値観が違うのが自然」と受け入れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          価値観の違いは「克服すべき問題」ではなく、「前提として存在するもの」です。
          違うことを認めることで、不必要な葛藤・自責が減ります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「相手を変えよう」を手放す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          価値観は深いレベルで定着しており、議論では変わりません。「相手を変えよう」とすると、自分も相手も疲弊します。
          相手を変えるのではなく、「違う価値観の人がいる」という事実を受け止めることが現実的です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 距離を調整する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          すべての人と深く関わる必要はありません。価値観が大きく異なる相手とは、適切な距離を保つことも大切な選択です。
          詳しくは<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link>もご覧ください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自分の価値観も時に揺らぐと知る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の価値観も、状況やライフステージで変化します。「絶対にこうだ」と固執するより、「今の自分はこう感じている」と捉えると、柔軟さが生まれます。
        </p>
      </div>

      <h2>「自己嫌悪」と価値観の関係</h2>
      <p>
        自己嫌悪・自己否定の根底にも、価値観のずれが関わっています。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 「他人の価値観」を自分の基準にしている</p>
          <p className="text-stone-600 leading-[1.9]">親や社会から押し付けられた価値観で自分を評価しているとき、自分本来の感覚と評価軸がずれ、自己嫌悪が生まれます。詳しくは<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>もご覧ください。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 道具主義的な自己評価</p>
          <p className="text-stone-600 leading-[1.9]">自分の価値を「成果」「役立ち度」で測っていると、結果が出ないときに強く自分を責めてしまいます。本質主義的な視点(存在そのものに価値がある)を取り入れることで、自己嫌悪が和らぎます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 自分の価値観そのものを否定している</p>
          <p className="text-stone-600 leading-[1.9]">「自分の感じ方はおかしい」「自分の考えは間違っている」と自分の価値観を否定し続けると、自己嫌悪が定着します。価値観に「正しい・間違い」はないことを思い出すことが助けになります。</p>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「人と合わない」苦しみを抱えている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          価値観の違いを、構造として整理する対話を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          価値観の違いから来る対人摩擦・自己嫌悪は、一人で抱えるほど深まります。安全な場で「自分の価値観」「相手との違い」を言語化することで、苦しみの正体が見えてきます。支援職特有の価値観の衝突についても、構造を理解した上で一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <p className="check-disclaimer">
        このチェックは性格・人格を診断するものではなく、「今この時点での価値観の傾向」を可視化するためのツールです。価値観は状況やライフステージで変化することがあります。
      </p>
    </ArticleLayout>
  )
}

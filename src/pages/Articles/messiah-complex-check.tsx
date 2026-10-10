import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete, trackLineClickFromCheck, trackRelatedClickFromCheck } from "../../lib/analytics"

const CHECK_NAME = "messiah-complex-check"
const PER_AXIS = 5
const LINE_URL = "https://lin.ee/TZxEE00?type=impostor"

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

type AxisKey = "rescue" | "carry" | "worth" | "boundary"

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
    key: "rescue",
    label: "① 救わずにいられない",
    short: "救わずにいられない",
    items: [
      "困っている人を見ると、頼まれていなくても手を出してしまう",
      "相談されると、「何とかしてあげなければ」と思う",
      "相手が自分で解決できそうでも、先回りして助けてしまう",
      "助けを断られると、自分が否定されたように感じる",
      "困っている人を「放っておく」ことに、強い罪悪感がある",
    ],
    advice: "「助けたい」が、自分で止められない衝動に近くなっている状態です。まず必要なのは、助けるのをやめることではなく、手を出す前に「これは相手が望んでいることか」と一呼吸おくことです。",
    link: { href: "/articles/messiah-complex", text: "救世主症候群(メサイアコンプレックス)とは——「救いたい」が止まらない心理" },
  },
  {
    key: "carry",
    label: "② 抱え込む・任せられない",
    short: "抱え込む",
    items: [
      "「自分がやらなければ」と、ほかの人に任せられない",
      "担当外のことまで、つい引き受けてしまう",
      "休みの日も、相手のことが頭から離れない",
      "自分がいないと、相手がだめになる気がする",
      "限界でも「大丈夫です」と言ってしまう",
    ],
    advice: "相手のことを、自分ひとりで背負う範囲が広がりすぎている状態です。責任感の強さは支援職の資質ですが、抱え込みが続くと、自分が先に倒れてしまいます。「自分の担当はどこまでか」を言葉にすることから始めます。",
    link: { href: "/articles/helper-responsibility-burnout", text: "支援職の責任感が強すぎる——責任感で潰れる前に" },
  },
  {
    key: "worth",
    label: "③ 自分の価値を「救うこと」に預けている",
    short: "価値を預けている",
    items: [
      "誰かの役に立っていないと、自分に価値がない気がする",
      "感謝されないと、むなしさや苛立ちを感じる",
      "相手が良くならないと、自分の力不足だと強く責める",
      "助けられる側より、助ける側にいるほうが落ち着く",
      "自分が困っているとき、人に頼るのが苦手だ",
    ],
    advice: "自分の価値を、「役に立つこと」「救えること」に強く預けている状態です。救世主症候群の根っこになりやすい部分で、ここが動くと①②も自然に緩みやすくなります。「何もしていない自分」にも価値があると感じられる場所を、少しずつ増やしていきます。",
    link: { href: "/articles/value-from-being-useful", text: "「役に立たないと価値がない」と感じる支援職へ" },
  },
  {
    key: "boundary",
    label: "④ 相手との境界線が薄い",
    short: "境界線が薄い",
    items: [
      "相手の気分や状態で、自分の一日が左右される",
      "相手が変わらないことに、焦りや怒りを感じる",
      "「この人を救えるのは自分だけだ」と感じたことがある",
      "相手の問題を、自分の問題のように抱えてしまう",
      "関わりを減らしたいのに、減らせない関係がある",
    ],
    advice: "相手の問題と自分の問題の境目があいまいになっている状態です。相手の人生の主人公は相手自身です。「ここから先は相手が決めること」という線を引けると、関わりは続けたまま、消耗を減らせます。",
    link: { href: "/articles/boundary-what", text: "境界線(バウンダリー)とは——疲れやすい人のための基本" },
  },
]

const TOTAL = AXES.length * PER_AXIS

type Level = "low" | "mid" | "high" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 6) return "low"
  if (score <= 13) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "救世主症候群の傾向は弱めです",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    message: "人を助けたい気持ちはありつつも、それに振り回されずにいられている状態です。ただ、忙しさや疲れが重なると、「救わずにいられない」が強まることがあります。どの項目に当てはまったかを覚えておくと、変化に気づきやすくなります。",
  },
  mid: {
    label: "救世主症候群の傾向がみられます",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "「助けたい」が、ときどき自分でも止められなくなっているかもしれません。偽善でも性格の欠陥でもなく、多くの場合は「役に立つことで自分の価値を確かめてきた」歴史から生まれた心のくせです。このまま続けると、自分が消耗し、相手の力を奪う方向にも働きやすくなります。下の内訳で、どこが特に強いかを確かめてください。",
  },
  high: {
    label: "救世主症候群の傾向が強く出ています",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "人を救うことと、自分の価値や存在意義が強く結びついている状態かもしれません。「救えない」ことが自分の否定に感じられ、休むことも任せることも難しくなっていませんか。ここまで来ると、ひとりで緩めるのは簡単ではありません。あなたが弱いのではなく、それだけ長く誰かのために踏ん張ってきたということです。専門家と一緒に、援助の動機と自分の価値の置き場所を整理することを検討してください。",
  },
}

const FAQ_ITEMS = [
  {
    q: "このチェックで救世主症候群かどうか診断できますか?",
    a: "いいえ。救世主症候群(メサイアコンプレックス)は医学的な診断名ではなく、援助行動の背景にある心理パターンを説明するための言葉です。このチェックは診断ではなく、自分の「助けたい」がどんな形で強くなっているかに気づくための目安です。",
  },
  {
    q: "何項目当てはまったら注意が必要ですか?",
    a: "目安として、7〜13項目で傾向がみられる状態、14項目以上で傾向が強く出ている状態です。ただし合計数よりも、4つの傾向のうちどこが強いかのほうが、緩め方の手がかりになります。特に「③ 自分の価値を救うことに預けている」が多い場合は、そこが根っこになっていることがよくあります。",
  },
  {
    q: "ただの「面倒見の良さ」とは何が違いますか?",
    a: "大きな違いは、相手を助けられなかったときに、自分の価値まで揺らぐかどうかです。面倒見の良い人は、断られても、相手が自分で選んでも、それを受け入れられます。救世主症候群の傾向が強いと、断られることや相手が変わらないことが「自分の否定」に感じられ、助けることをやめられなくなります。",
  },
  {
    q: "救世主症候群は病気ですか?",
    a: "病気ではありません。精神医学の診断基準に含まれる概念ではなく、心理的な傾向を表す言葉です。ただし、助けることをやめられずに心身が消耗している場合や、背景に強い自己否定や気分の落ち込みがある場合は、専門家への相談が役立ちます。",
  },
  {
    q: "メサイアコンプレックスになりやすいMBTIタイプはありますか?",
    a: "ネット上では特定のタイプと結びつけて語られることがありますが、MBTIのタイプで救世主症候群になるかどうかが決まるという根拠はありません。タイプよりも、「役に立つことで認められてきた経験」や、援助が中心になる仕事・家庭の環境のほうが、強く関わっています。",
  },
  {
    q: "支援職に救世主症候群が多いのはなぜですか?",
    a: "支援の仕事は、誰かの役に立つことが日常の中心にあり、「助けたい」気持ちが評価されやすい環境だからです。もともと人の役に立つことで自分の居場所を確かめてきた人ほど、この仕事に惹かれやすく、同時に、その傾向が強まりやすい構造があります。支援職に向いていないという意味ではありません。",
  },
]

export default function MessiahComplexCheck() {
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
      title="メサイアコンプレックス診断20問｜救世主症候群の傾向を4タイプで無料セルフチェック【公認心理師監修】"
      description="「困っている人を放っておけない」「自分がやらなければ」「役に立たないと価値がない」——メサイアコンプレックス(救世主症候群)の傾向を、20項目・3分で無料セルフチェック。救わずにいられない・抱え込む・価値を預けている・境界線が薄いの4つのうち、どこが強いかと緩め方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/messiah-complex-check"
      date="2026-10-10"
      tags={["self-function", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「助けたい」が、いつのまにか「助けずにいられない」になっていませんか。
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
        <strong>メサイアコンプレックス(救世主症候群)</strong>とは、人を救うことに自分の価値を強く結びつけ、
        助けずにいられなくなる心理傾向のことです。医学的な診断名ではありませんが、
        支援職をはじめ、人の役に立つことを大切にしてきた人ほど強まりやすい傾向があります。
      </p>
      <p>
        このチェックでは、<strong>救わずにいられない・抱え込む・価値を預けている・境界線が薄い</strong>の
        4つの傾向を20項目で確認し、あなたの「助けたい」がどんな形で強くなっているかを見える形にします。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・20項目の無料セルフチェック(約3分)</li>
          <li>・<strong>4つの傾向</strong>のうち、どこが強いか</li>
          <li>・スコア別の状態解説(0〜6 / 7〜13 / 14以上)と緩め方</li>
          <li>・<strong>面倒見の良さとの違い</strong>、支援職に多い理由</li>
          <li>・よくある質問(病気?MBTIとの関係は?)</li>
        </ul>
      </nav>

      <h2>メサイアコンプレックス診断(20項目・無料)</h2>
      <p className="text-sm text-stone-600">
        最近の自分を思い浮かべて、当てはまると感じるものをタップしてください。仕事でも、家族や友人との関係でも構いません。
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
          className={`bar-fill ${score <= 6 ? "bar-low" : score <= 13 ? "bar-mid" : "bar-high"}`}
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
            <p>・0〜6項目:傾向は弱め ／ ・7〜13項目:傾向がみられる ／ ・14項目以上:傾向が強く出ている</p>
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
          当てはまる項目はありませんでした。今は「助けたい」気持ちに振り回されずにいられている状態です。
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
            <p className="text-xs font-medium text-stone-600 mb-3">4つの傾向の内訳(当てはまった数が多いほど強く出ています)</p>
            {axisScores.map(({ axis, score: s }) => (
              <div key={axis.key} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-stone-500 w-28 flex-shrink-0">{axis.short}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${(s / PER_AXIS) * 100}%`, background: "#8FAF9F" }} />
                </div>
                <span className="text-xs text-stone-500 w-10 text-right">{s}/{PER_AXIS}</span>
              </div>
            ))}
          </div>

          {strongest.map(({ axis }) => (
            <div key={axis.key} className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
              <p className="text-[11px] font-medium mb-1" style={{ color: "#6b8f7f" }}>特に強く出ている傾向</p>
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

          {/* 根っこ(条件付き自己価値)への連鎖 */}
          <div className="p-4 rounded-xl mb-3 bg-stone-50 border border-stone-200">
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              救世主症候群の根っこには、多くの場合<strong>「役に立っているときだけ、自分には価値がある」という条件付き自己価値</strong>があります。
              自分が自分にどんな条件を課しているかを、あわせて確かめてみてください。
            </p>
            <Link
              to="/articles/self-value-check"
              onClick={() => trackRelatedClickFromCheck(CHECK_NAME, level, "/articles/self-value-check")}
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900"
            >
              → 条件付き自己価値チェック(24問)
            </Link>
          </div>

          {/* LINE誘導 */}
          <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
              「救う」ことの外にも、自分の価値を置けるようになると、助けたい気持ちは消耗ではなく力になります。回復のステップをLINEで整理して届けています。
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
              「助ける側」でいることに慣れた人ほど、自分が助けを受けることに戸惑います。役に立たなくても受け入れられる場で、援助の動機と自分の価値の置き場所を整理できます。
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

      <h2>4つの傾向とは</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 救わずにいられない</p>
          <p className="text-stone-600 leading-[1.9]">困っている人を見ると、頼まれていなくても手を出してしまう。助けることが、選んでいる行動というより衝動に近くなっている状態です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 抱え込む・任せられない</p>
          <p className="text-stone-600 leading-[1.9]">「自分がやらなければ」と、相手のことを一人で背負う範囲が広がっていく状態です。休んでいるときも相手のことが頭から離れなくなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 自分の価値を「救うこと」に預けている</p>
          <p className="text-stone-600 leading-[1.9]">役に立っているとき、感謝されたときだけ、自分に価値を感じられる状態です。救世主症候群の根っこになりやすい部分です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 相手との境界線が薄い</p>
          <p className="text-stone-600 leading-[1.9]">相手の問題と自分の問題の境目があいまいになり、相手の状態に自分が振り回される状態です。</p>
        </div>
      </div>
      <p>
        救世主症候群がどのように形づくられるのか、何が問題になるのかは、
        <Link to="/articles/messiah-complex" className={linkCls}>救世主症候群(メサイアコンプレックス)とは</Link>
        でくわしく解説しています。
      </p>

      <h2>「面倒見の良さ」との違い</h2>
      <p>
        人を助けたい気持ちそのものは、まったく問題ではありません。違いが出るのは、<strong>助けられなかったとき</strong>です。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        <div className="card">
          <p className="text-sm font-medium text-stone-700 mb-2">面倒見の良さ</p>
          <ul className="text-sm text-stone-600 space-y-1 leading-[1.8]">
            <li>・断られても、受け入れられる</li>
            <li>・相手が自分で選ぶことを尊重できる</li>
            <li>・自分の限界を認めて、人に任せられる</li>
            <li>・感謝されなくても、揺らがない</li>
          </ul>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-stone-700 mb-2">救世主症候群の傾向</p>
          <ul className="text-sm text-stone-600 space-y-1 leading-[1.8]">
            <li>・断られると、否定された気持ちになる</li>
            <li>・相手が変わらないと、焦りや怒りが湧く</li>
            <li>・限界でも、自分が引き受けてしまう</li>
            <li>・感謝されないと、むなしくなる</li>
          </ul>
        </div>
      </div>

      <h2>なぜ支援職に多いのか</h2>
      <p>
        支援の仕事は、誰かの役に立つことが日常の中心にあり、「助けたい」気持ちが評価されやすい環境です。
        もともと<strong>役に立つことで自分の居場所を確かめてきた人</strong>ほどこの仕事に惹かれやすく、
        同時に、救世主症候群の傾向が強まりやすい構造があります。
      </p>
      <p>
        これは支援職に向いていないという意味ではありません。自分の援助の動機に気づけている支援者は、
        相手の力を信じて待つことができ、長く続けられる支援者でもあります。
        「役に立たないと価値がない」という感覚の成り立ちは
        <Link to="/articles/value-from-being-useful" className={linkCls}>「役に立たないと価値がない」と感じる支援職へ</Link>
        で、相手との線の引き方は
        <Link to="/articles/helper-boundary-how-to" className={linkCls}>支援職の境界線の引き方</Link>
        で解説しています。
      </p>

      <LineCtaImpostor />

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
        <p className="font-medium text-stone-700 mb-2">救世主症候群を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/messiah-complex" className={linkCls}>救世主症候群(メサイアコンプレックス)とは</Link></li>
          <li>・<Link to="/articles/value-from-being-useful" className={linkCls}>「役に立たないと価値がない」と感じる支援職へ</Link></li>
          <li>・<Link to="/articles/helper-responsibility-burnout" className={linkCls}>支援職の責任感が強すぎる</Link></li>
          <li>・<Link to="/articles/helper-self-neglect" className={linkCls}>支援職のセルフネグレクト</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">あわせてチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/self-value-check" className={linkCls}>条件付き自己価値チェック(24問)</Link></li>
          <li>・<Link to="/articles/boundary-check" className={linkCls}>境界線チェック</Link></li>
          <li>・<Link to="/articles/self-function-check" className={linkCls}>自己機能チェック(20項目)</Link></li>
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

      <ArticleFooterLinks type="self-function" exclude={["/articles/messiah-complex-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。救世主症候群(メサイアコンプレックス)は医学的な診断名ではありません。
      </div>
    </ArticleLayout>
  )
}

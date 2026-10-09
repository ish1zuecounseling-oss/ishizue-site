import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete, trackLineClickFromCheck, trackRelatedClickFromCheck } from "../../lib/analytics"
 
const CHECK_NAME = "self-function-check"
const TOTAL = 20
const LINE_URL = "https://lin.ee/TZxEE00?type=impostor"
 
type AxisKey = "feel" | "want" | "choose" | "notice"
 
type Axis = {
  key: AxisKey
  label: string
  short: string
  items: string[]
  /** この機能がいちばん弱っているときに渡すメッセージ */
  advice: string
  link: { href: string; text: string }
}
 
/* 自己機能の4要素(感じる・望む・選ぶ・気づく)は self-function-complete の定義に合わせる */
const AXES: Axis[] = [
  {
    key: "feel",
    label: "① 感じる機能",
    short: "感じる",
    items: [
      "「今どんな気持ち?」と聞かれても、すぐに言葉が出てこない",
      "嬉しいことや悲しいことがあっても、感情があまり動かない",
      "空腹・眠気・寒さなど、体の感覚が以前より分かりにくい",
      "楽しいはずの場面でも、どこか他人事のように感じる",
      "泣きたいはずの場面で、気持ちが平らなままになる",
    ],
    advice: "体や感情の手応えが薄くなっています。考えて答えを出すより、「温かい」「重い」など体の感覚をひとつ拾うところから戻していくのが近道です。",
    link: { href: "/articles/emotion-unknown", text: "感情がわからない——感じる機能が縮むしくみ" },
  },
  {
    key: "want",
    label: "② 望む機能",
    short: "望む",
    items: [
      "「何がしたい?」と聞かれると、答えに詰まる",
      "休日に何をすればいいか分からず、時間を持て余す",
      "好きだったことに、以前ほど興味が持てない",
      "「欲しいもの」が、ほとんど思い浮かばない",
      "「やりたいこと」より「やるべきこと」しか浮かばない",
    ],
    advice: "「やりたい」という感覚が奥に引っ込んでいます。大きな目標ではなく、「今日の飲み物はどれがいいか」くらいの小さな好みを拾い直すことから始まります。",
    link: { href: "/articles/what-do-i-want", text: "何がしたいかわからない——望む機能を取り戻す" },
  },
  {
    key: "choose",
    label: "③ 選ぶ機能",
    short: "選ぶ",
    items: [
      "食事や服など、小さなことでも決めるのに時間がかかる",
      "「どっちでもいい」「お任せします」と言うことが多い",
      "自分で決めるより、人の意見や空気に合わせる方が楽だ",
      "決めたあとで「本当にこれでよかったのか」と長く引きずる",
      "大事な決断を、つい先延ばしにしてしまう",
    ],
    advice: "選ぶ基準が自分の外側(相手の反応や空気)に移っている状態です。正解を選ぶ練習ではなく、「間違ってもいい小さな選択」を自分で決める回数を増やすことが助けになります。",
    link: { href: "/articles/other-axis-what", text: "他人軸とは——選ぶ基準が外にある状態" },
  },
  {
    key: "notice",
    label: "④ 気づく機能",
    short: "気づく",
    items: [
      "限界を超えてから、初めて「疲れていた」と気づく",
      "自分がイライラしていたことに、後になって気づく",
      "人から指摘されて、自分の不調を知ることが多い",
      "「まだ大丈夫」と思っているうちに、体調を崩すことがある",
      "一日を振り返っても、自分が何を感じていたか思い出せない",
    ],
    advice: "自分の状態をモニターする働きが弱まり、気づいたときには限界、になりやすい状態です。一日の終わりに「今日いちばん疲れた瞬間」をひとつ思い出すだけでも、モニターは少しずつ戻ります。",
    link: { href: "/articles/tired-but-cannot-rest", text: "疲れているのに休めない——気づけないまま走り続ける構造" },
  },
]
 
type Level = "low" | "mid" | "high" | null
 
function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 6) return "low"
  if (score <= 13) return "mid"
  return "high"
}
 
const resultConfig = {
  low: {
    label: "自己機能は比較的保たれている状態です",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    message: "いくつか「あれ?」と感じる場面がある程度で、自分を感じ、望み、選ぶ働きはおおむね保たれています。ただ、支援職は役割を続けるうちに少しずつ自己機能がすり減っていくことがあります。今の状態を知っておくことが予防になります。",
  },
  mid: {
    label: "自己機能が縮み始めている可能性があります",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "「自分が何を感じているか」「何を望んでいるか」が見えにくくなり、選択や行動が役割や他人の基準で決まりやすい状態かもしれません。性格の問題ではなく、消耗によって機能が縮んでいる状態です。一人で取り戻すのが難しくなり始める段階なので、外から整理する場を持つことが助けになります。",
  },
  high: {
    label: "自己機能がかなり縮んでいる可能性があります",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "「自分」という感覚そのものが薄くなり、ただ日々をこなしている状態に近いかもしれません。ここまで来ると、意志の力で戻すのは難しい段階です。あなたが弱いのではなく、それだけ長く自分を後回しにしてきた結果です。専門家(カウンセリング・医療機関)への相談を検討してください。",
  },
}
 
const FAQ_ITEMS = [
  {
    q: "自己機能とは何ですか?",
    a: "自己機能とは、自分という存在を成り立たせる心理的な働きの総称です。このチェックでは、体や感情を感じ取る「感じる機能」、欲求や好みを感じる「望む機能」、自分の意志で決める「選ぶ機能」、自分の状態を客観的に把握する「気づく機能」の4つに分けて確認します。固定された性格ではなく、ストレスや消耗で縮んだり、回復したりするものです。",
  },
  {
    q: "何項目当てはまったら注意が必要ですか?",
    a: "目安として、7〜13項目で自己機能が縮み始めている可能性、14項目以上でかなり縮んでいる可能性があります。ただし合計数よりも、4つの機能のうち「どこが特に弱っているか」の方が回復の手がかりになります。結果画面の内訳をあわせて見てください。",
  },
  {
    q: "自己機能が低いのは、性格や甘えの問題ですか?",
    a: "いいえ。自己機能の縮小は、感情労働の蓄積や、役割を優先して自分を後回しにし続けた結果として起きる「消耗の状態」です。特に支援職は、相手の感情や必要を優先することが仕事の中心にあるため、自分を感じる・望む・選ぶ働きが使われないまま縮んでいきやすい構造があります。",
  },
  {
    q: "自己機能と、条件付き自己価値はどう関係していますか?",
    a: "深く関係しています。「役に立っているときだけ価値がある」という条件付き自己価値が強いと、自分の感覚や欲求より「役割を果たすこと」が優先され続け、自己機能が縮んでいきます。逆に自己機能が縮むと、自分の内側に価値の手がかりがなくなり、外側の条件にますます頼るようになります。両方をセットで見ると、自分のパターンがつかみやすくなります。",
  },
  {
    q: "うつ病との違いは何ですか?",
    a: "自己機能の縮小は心理的な働きの状態を説明する考え方で、医学的な診断名ではありません。一方、うつ病は気分の落ち込みや興味の喪失、睡眠や食欲の変化などが2週間以上続く医学的な疾患です。両者は重なることもあります。気分の落ち込みが続いている、眠れない、食べられないといった状態があれば、心療内科・精神科への相談を優先してください。",
  },
  {
    q: "自己機能は回復しますか?",
    a: "回復します。ただし「考えて取り戻す」より、体の感覚や小さな好みといった「感じる」ところから少しずつ戻していくのが現実的です。縮み方が大きい場合は、評価されず、役に立たなくても受け入れられる関係の中で取り戻していく方が、一人で取り組むより進みやすくなります。",
  },
  {
    q: "このチェックは診断として使えますか?",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  },
]
 
export default function SelfFunctionCheck() {
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
    score: checked.slice(a * 5, a * 5 + 5).filter(Boolean).length,
  }))
  const maxAxisScore = Math.max(...axisScores.map((s) => s.score))
  // いちばん弱っている機能(同点は全部出す・最大2つ)
  const weakest = maxAxisScore > 0
    ? axisScores.filter((s) => s.score === maxAxisScore).slice(0, 2)
    : []
 
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
      title="自己機能チェック20項目｜「感じる・望む・選ぶ・気づく」の状態を3分で無料セルフ診断【公認心理師監修】"
      description="「自分が何を感じているかわからない」「何がしたいかわからない」「決められない」——自己機能の4つの働き(感じる・望む・選ぶ・気づく)を20項目・3分で無料セルフチェック。どの機能が弱っているかと回復の方向を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-function-check"
      date="2026-10-09"
      tags={["self-function", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自分が何を感じているかわからない」「何がしたいかわからない」「決められない」——
        それは性格ではなく、<strong>自己機能</strong>が縮んでいるサインかもしれません。
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
        自己機能とは、自分という存在を成り立たせる心理的な働きのことです。
        このチェックでは、<strong>感じる・望む・選ぶ・気づく</strong>の4つの働きを20項目で確認し、
        今どの機能が特に弱っているかを見える形にします。
        まずは下の項目で、今の自分を確かめてみてください。
      </p>
 
      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・20項目の無料セルフチェック(下にスクロール、約3分)</li>
          <li>・<strong>4つの機能</strong>(感じる・望む・選ぶ・気づく)のうち、どこが弱っているか</li>
          <li>・スコア別の状態解説(0〜6 / 7〜13 / 14以上)と次のステップ</li>
          <li>・支援職の自己機能が<strong>縮みやすい構造</strong>と、条件付き自己価値との関係</li>
          <li>・よくある質問(性格の問題?うつとの違い?回復する?)</li>
        </ul>
      </nav>
 
      <h2>自己機能セルフチェック(20項目・無料)</h2>
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
          className={`bar-fill ${score <= 6 ? "bar-low" : score <= 13 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
        />
      </div>
 
      <div className="checklist">
        {AXES.map((axis, a) => (
          <div key={axis.key}>
            <p className="text-xs font-medium text-stone-400 mt-4 mb-2 px-1">{axis.label}</p>
            {axis.items.map((text, i) => {
              const idx = a * 5 + i
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
            <p>・0〜6項目:比較的保たれている ／ ・7〜13項目:縮み始めている可能性 ／ ・14項目以上:かなり縮んでいる可能性</p>
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
          当てはまる項目はありませんでした。今は自分を感じ、望み、選ぶ働きが保たれている状態です。
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
 
          {/* 4機能の内訳 */}
          <div className="card mb-4">
            <p className="text-xs font-medium text-stone-600 mb-3">4つの機能の内訳(当てはまった数が多いほど弱っています)</p>
            {axisScores.map(({ axis, score: s }) => (
              <div key={axis.key} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-stone-500 w-20 flex-shrink-0">{axis.short}機能</span>
                <div className="flex-1 bg-stone-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${s * 20}%`, background: "#8FAF9F" }} />
                </div>
                <span className="text-xs text-stone-500 w-10 text-right">{s}/5</span>
              </div>
            ))}
          </div>
 
          {/* いちばん弱っている機能 */}
          {weakest.map(({ axis }) => (
            <div key={axis.key} className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
              <p className="text-[11px] font-medium mb-1" style={{ color: "#6b8f7f" }}>特に弱っている機能</p>
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
              自己機能が縮んでいる人の多くは、<strong>「役に立っているときだけ価値がある」という条件付き自己価値</strong>も抱えています。
              自分の感覚より役割を優先し続けてきたことが、機能を縮ませる根っこになっていることが多いからです。
            </p>
            <Link
              to="/articles/self-value-check"
              onClick={() => trackRelatedClickFromCheck(CHECK_NAME, level, "/articles/self-value-check")}
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900"
            >
              → 条件付き自己価値チェック(24問)——あわせて確認する
            </Link>
          </div>
 
          {/* LINE誘導 */}
          <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
              自己機能は、構造が見えると少しずつ戻っていきます。回復のステップをLINEで整理して届けています。
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
              縮んだ自己機能は、評価されず、役に立たなくても受け入れられる関係の中で戻りやすくなります。
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
 
      <h2>自己機能とは——「感じる・望む・選ぶ・気づく」の4つの働き</h2>
      <p>
        自己機能とは、自分という存在を成り立たせる<strong>心理的な働きの総称</strong>です。
        このチェックでは、次の4つに分けて状態を確認しています。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 感じる機能</p>
          <p className="text-stone-600 leading-[1.9]">体の感覚や感情を感じ取る働き。縮むと「今どんな気持ちか」がわからなくなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 望む機能</p>
          <p className="text-stone-600 leading-[1.9]">欲求や好みを感じる働き。縮むと「何がしたいか」「何が欲しいか」が浮かばなくなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 選ぶ機能</p>
          <p className="text-stone-600 leading-[1.9]">自分の意志で決める働き。縮むと決められない・人に合わせる・決断を先延ばしにする状態になります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 気づく機能</p>
          <p className="text-stone-600 leading-[1.9]">自分の状態を客観的に把握する働き。縮むと、限界を超えてから初めて疲れに気づくようになります。</p>
        </div>
      </div>
      <p>
        自己機能は固定された性格ではありません。ストレスや消耗で縮み、条件が整えば回復します。
        4つの働きのくわしい解説は、
        <Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは(総合解説)</Link>
        にまとめています。
      </p>
 
      <h2>なぜ支援職は自己機能が縮みやすいのか</h2>
      <p>
        支援職の仕事は、相手の感情を感じ取り、相手の必要に応え、相手のために選ぶことの連続です。
        そのあいだ、<strong>自分を感じる・望む・選ぶ働きは使われないまま</strong>になりやすく、
        使われない機能は少しずつ縮んでいきます。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・本当の感情を抑えて、相手に合わせた感情を出し続ける(感情労働)</p>
        <p>・「支援者としての自分」が自分全体を占めていく(役割同一化)</p>
        <p>・自分の欲求を後回しにすることが、当たり前の職場文化になっている</p>
      </div>
      <p>
        そしてその根っこには、多くの場合「<strong>役に立っていないと、自分には価値がない</strong>」という
        条件付き自己価値があります。役割を果たしている自分にしか価値を感じられないと、
        自分の感覚や欲求はますます後回しになり、自己機能が縮んでいきます。
        この構造は
        <Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「自分の価値がわからない(条件付き自己価値)」</Link>
        でくわしく解説しています。
      </p>
 
      <h2>自己機能を取り戻す方向</h2>
      <p>
        縮んだ自己機能は、「考えて取り戻す」より<strong>「感じる」ところから少しずつ戻す</strong>ほうが現実的です。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・体の感覚をひとつ拾う(温かい・重い・お腹がすいた)</p>
        <p>・役割と関係のない、小さな好みを選んでみる</p>
        <p>・一日の終わりに「今日いちばん疲れた瞬間」を思い出す</p>
        <p>・評価されず、役に立たなくても受け入れられる関係を持つ</p>
      </div>
      <p>
        くわしくは→ <Link to="/articles/recovering-feeling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情・感覚を取り戻す方法</Link>
        ／ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link>
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
 
      <ArticleFooterLinks type="self-function" exclude={["/articles/self-function-check"]} />
 
      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

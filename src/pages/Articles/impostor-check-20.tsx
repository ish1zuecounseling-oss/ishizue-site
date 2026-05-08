import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const CHECK_ITEMS = [
  // 成功の外在化
  "うまくいったとき「たまたま運が良かっただけ」と思う",
  "成功したとき「周りのおかげで、自分の実力ではない」と感じる",
  "評価されると「相手が過大評価している」という感覚がある",
  // バレる恐れ
  "いつか「自分に実力がない」とバレるのではと不安になる",
  "自分の支援方針を人前で話すとき、強い抵抗感がある",
  "感謝されると「期待に応えられていないのに」と申し訳なくなる",
  // 比較・劣等感
  "周りの同僚はみんな自分より優秀に見える",
  "他の人の成果はすごいと思えるのに、自分の成果は取るに足らない気がする",
  "自分だけが「わかっていない」と感じることがある",
  // 努力量でカバー
  "実力がない分、人一倍頑張らないと価値がないと感じる",
  "定時に帰ったり休んだりすることに強い罪悪感がある",
  "自分でやり遂げたことより、チームの成果の方が価値があると感じる",
  // 知識への不安
  "資格や研修をいくら積んでも「まだ専門性が足りない」と自信につながらない",
  "利用者や家族に「わかりません」と答えるのが強く恥ずかしい",
  "新しいケースを担当するとき、ワクワクより「対応できるか」という不安が強い",
  // 期待へのプレッシャー
  "「期待しています」と言われると逃げ出したくなる",
  "期待を裏切って失望されるくらいなら、目立たないポジションでいたい",
  "失敗して失望されることへの恐れが、常にある",
  // 自己評価の不安定さ
  "褒められても素直に受け取れず、すぐに否定したくなる",
  "自分の能力についての話題になると、強い不安や緊張を感じる",
]

function getLevel(score: number) {
  if (score <= 5)  return { label: "傾向は比較的少ない",        color: "#8FAF9F", bg: "rgba(143,175,159,0.1)", border: "rgba(143,175,159,0.3)" }
  if (score <= 10) return { label: "インポスター傾向が出ている", color: "#c4904a", bg: "rgba(196,144,74,0.1)",  border: "rgba(196,144,74,0.3)" }
  if (score <= 15) return { label: "傾向がかなり強い",           color: "#d97706", bg: "rgba(217,119,6,0.1)",   border: "rgba(217,119,6,0.3)" }
  return             { label: "傾向が非常に強い状態",            color: "#9f3a3a", bg: "rgba(159,58,58,0.1)",   border: "rgba(159,58,58,0.3)" }
}

function getMessage(score: number): string {
  if (score <= 5)  return "現時点では大きな傾向は見られません。ただし真面目で責任感が強い人ほど、消耗が深まると強くなることがあります。"
  if (score <= 10) return "「自分だけが実力不足」「いつかバレる」という感覚が出始めています。これは自信の問題ではなく、役割に自己が寄りすぎているサインかもしれません。"
  if (score <= 15) return "インポスター感がかなり強く、日常的な消耗につながっている可能性があります。「自信をつけよう」より、構造を整理することが先決です。"
  return "慢性的な「バレる恐れ」が消耗を深めている状態です。一人で抱え込まず、外から整理することが回復の近道になります。"
}

export default function ImpostorCheck20() {
  const [checked, setChecked] = useState<boolean[]>(new Array(20).fill(false))
  const [shown, setShown] = useState(false)

  const toggle = (i: number) => {
    if (shown) return
    setChecked(prev => { const n = [...prev]; n[i] = !n[i]; return n })
  }

  const score = checked.filter(Boolean).length
  const pct = Math.round((score / 20) * 100)
  const level = getLevel(score)

  return (
    <ArticleLayout
      title="インポスター症候群チェック（20項目診断）｜「できているのに自信がない」は当てはまる？"
      description="インポスター症候群の無料セルフ診断（20項目）。「いつかバレる」「たまたまうまくいっただけ」——YESの数を数えるだけで今の状態がわかります。なぜ起きるか・抜け出す方向も解説。"
      url="https://www.ishizue-counseling.jp/articles/impostor-check-20"
      date="2026-05-08"
      tags={["burnout", "boundary", "check"]}
    >
      <div className="mb-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-600">
        <strong>今すぐチェックできます。</strong> 20項目にYES/NOで答えるだけ（約2分）。<br />
        「いつかバレる」「評価されても自信がない」——その感覚がどのくらいあるかわかります。
      </div>

      <p>
        インポスター症候群は「性格の問題」ではなく、<strong>役割依存・自己複雑性の低下・他人軸という構造</strong>から起きています。
        まず今の状態を把握することが、変化の第一歩になります。
      </p>

      {/* スコア表示 */}
      <div className="flex items-center justify-between mb-2 mt-6">
        <span className="text-xs text-stone-400">チェック済み</span>
        <span className="text-lg font-bold text-stone-800">{score}<span className="text-sm font-normal text-stone-400"> / 20</span></span>
      </div>
      <div className="w-full h-2 bg-stone-100 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${pct}%`,
            background: score <= 5 ? "#8FAF9F" : score <= 10 ? "#c4904a" : score <= 15 ? "#d97706" : "#9f3a3a"
          }}
        />
      </div>

      {/* チェックリスト */}
      <div className="space-y-2 mb-6">
        {CHECK_ITEMS.map((text, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            role="checkbox"
            aria-checked={checked[i]}
            tabIndex={0}
            onKeyDown={(e) => e.key === " " && toggle(i)}
            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
              checked[i]
                ? "bg-stone-50 border-stone-300"
                : "bg-white border-stone-100 hover:border-stone-200"
            }`}
          >
            <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
              checked[i] ? "border-stone-600 bg-stone-700" : "border-stone-200"
            }`}>
              {checked[i] && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <p className={`text-sm leading-[1.7] ${checked[i] ? "text-stone-800" : "text-stone-500"}`}>{text}</p>
          </div>
        ))}
      </div>

      {/* 確認ボタン */}
      {!shown && (
        <button
          onClick={() => setShown(true)}
          className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all mb-6"
          style={{ background: "#7EB8A4" }}
        >
          今の状態を確認する（{score}項目チェック済み）
        </button>
      )}

      {/* 結果 */}
      {shown && (
        <div className="mb-8 p-5 rounded-2xl border" style={{ background: level.bg, borderColor: level.border }}>
          <p className="text-xs font-medium mb-1" style={{ color: level.color }}>
            {score}項目 / 20項目
          </p>
          <p className="text-base font-medium text-stone-800 mb-2">{level.label}</p>
          <p className="text-sm text-stone-600 leading-[1.9] mb-4">{getMessage(score)}</p>

          {score >= 6 && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-stone-500">この状態について詳しく読む</p>
              <Link to="/articles/impostor-syndrome" className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 underline underline-offset-2">
                → インポスター症候群とは｜「できているのに自信がない」の正体と構造
              </Link>
              <Link to="/articles/self-complexity" className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 underline underline-offset-2">
                → 自己複雑性とは｜役割に自己が集中すると何が起きるか
              </Link>
              <Link to="/articles/working-model" className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 underline underline-offset-2">
                → ワーキングモデルとは｜「役に立たないと価値がない」はどこから来るか
              </Link>
            </div>
          )}

          <button
            onClick={() => { setChecked(new Array(20).fill(false)); setShown(false) }}
            className="mt-4 text-xs text-stone-400 underline underline-offset-2"
          >
            最初からやり直す
          </button>
        </div>
      )}


      {/* チェック→ピラー遷移ブリッジ */}
      <div className="my-6 p-4 rounded-2xl border border-stone-200 bg-white">
        <p className="text-xs font-medium text-stone-500 mb-1">多く当てはまった方へ</p>
        <p className="text-sm text-stone-700 leading-[1.8] mb-3">
          「なぜこうなるのか」を構造から整理すると、回復の方向が見えてきます。
          インポスター症候群は<strong>自信の問題ではなく、役割依存・自己複雑性・他人軸という構造</strong>から起きています。
        </p>
        <a
          href="/articles/impostor-syndrome"
          className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-stone-800 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all bg-stone-50"
        >
          <span>→ インポスター症候群の仕組みを見る</span>
          <span className="text-[#8FAF9F] text-xs">ピラー記事</span>
        </a>
      </div>

      <h2>インポスター症候群の正体——「構造」として理解する</h2>
      <p>
        多くの解説では「自信の問題」「思い込み」として扱われますが、
        このチェックで当てはまる人が体験しているのは、もっと深い構造から来ています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 役割依存——「できる自分＝価値がある自分」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者として役立てる自分」だけが自己価値の根拠になっていると、
          失敗・批判のとき自己全体が揺らぎます。
          <Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割依存</Link>の状態では「役割でバレること」が極度に怖くなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性の低下</Link>——失敗が「全否定」になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者としての自分」しか自己概念を占めていないとき、
          その役割での失敗が「全部ダメな自分」という感覚になります。
          役割以外の自己側面が少ないほど、インポスター感は強まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ <Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>——外側の評価だけが自己判断の根拠</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の内側の感覚へのアクセスが薄れ、他者の評価だけが「自分はどうか」の判断基準になっているとき、
          評価が良いと安心・悪いと全否定という不安定さが生まれます。
          「演じている感覚」「バレる恐れ」の正体です。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        詳しく→ <Link to="/articles/impostor-syndrome" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群とは（ピラー記事）</Link>
      </p>

      <LineCta />

      <p className="check-disclaimer text-xs text-stone-400 mt-4">
        このチェックは診断ではなく、自分の状態に気づくための目安です。当てはまる項目が多くても、それ自体が「問題」ではありません。
      </p>

      <ArticleFooterLinks type="self-function" exclude={["/articles/impostor-check-20"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

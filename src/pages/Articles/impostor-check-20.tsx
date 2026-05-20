import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta, { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete } from "../../lib/analytics"

const CHECK_NAME = "impostor-check-20"

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

// スコアからレベルラベル(low/mid/high/very_high)を返す
function getLevelLabel(score: number): string {
  if (score <= 5)  return "low"
  if (score <= 10) return "mid"
  if (score <= 15) return "high"
  return "very_high"
}

function getMessage(score: number): string {
  if (score <= 5)  return "現時点では大きな傾向は見られません。ただし真面目で責任感が強い人ほど、消耗が深まると強くなることがあります。"
  if (score <= 10) return "「自分だけが実力不足」「いつかバレる」という感覚が出始めています。これは自信の問題ではなく、役割に自己が寄りすぎているサインかもしれません。"
  if (score <= 15) return "インポスター感がかなり強く、日常的な消耗につながっている可能性があります。「自信をつけよう」より、構造を整理することが先決です。"
  return "慢性的な「バレる恐れ」が消耗を深めている状態です。一人で抱え込まず、外から整理することが回復の近道になります。"
}

const FAQ_ITEMS = [
  {
    q: "インポスター症候群は病気ですか?",
    a: "医学的な疾患名ではなく、心理的な状態を表す概念です。1978年に心理学者ポーリン・クランスらが提唱しました。診断ではなく「自分の傾向に気づくための枠組み」として使われます。ただし放置すると抑うつや燃え尽きにつながることがあるため、強く出ている場合は早めの整理が推奨されます。"
  },
  {
    q: "インポスター症候群は治りますか?",
    a: "「治す」というより「構造を整える」ことで楽になります。自信をつけようとする方向ではなく、役割依存・自己複雑性の低下・他人軸という背景を整理することで、評価に左右されにくくなります。一人で取り組むのが難しい場合は、専門家との対話で構造を可視化することが有効です。"
  },
  {
    q: "支援職(介護・看護・福祉)に多いのはなぜですか?",
    a: "支援職は「役に立てた感覚」が自己評価に直結しやすく、また成果が見えにくい・正解がない仕事のため、「これでよかったのか」という不確実性が常にあります。さらに利用者や家族からの評価が変動しやすいため、「いつかバレる」という感覚が育ちやすい環境です。性格ではなく職業構造の問題でもあります。"
  },
  {
    q: "チェックで多く当てはまりました。どうすればいいですか?",
    a: "まず「自分はダメだ」ではなく「構造として起きている」と捉え直すことが第一歩です。次に、役割以外の自己側面(趣味・関係性・身体感覚など)を意識的に増やしていきます。それでも消耗が続く場合は、カウンセリングなど第三者と一緒に整理する方法もあります。"
  },
  {
    q: "セルフチェックと正式な診断は何が違いますか?",
    a: "このチェックは自分の状態を可視化するためのセルフリフレクションツールであり、医学的診断ではありません。スコアが高くても「異常」ではなく、低くても「問題ない」とは限りません。継続的に消耗を感じている場合は、医療機関や心理職への相談を検討してください。"
  },
]

export default function ImpostorCheck20() {
  const [checked, setChecked] = useState<boolean[]>(new Array(20).fill(false))
  const [shown, setShown] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggle = (i: number) => {
    if (shown) return
    setChecked(prev => { const n = [...prev]; n[i] = !n[i]; return n })
  }

  const score = checked.filter(Boolean).length
  const pct = Math.round((score / 20) * 100)
  const level = getLevel(score)

  // ▼ GA4イベント送信:「今の状態を確認する」ボタン押下時にチェック完了イベントを送信
  const handleShowResult = () => {
    setShown(true)
    trackCheckComplete(CHECK_NAME, score, getLevelLabel(score), 20)
  }

  return (
    <ArticleLayout
      title="インポスター症候群チェック・診断テスト20問｜無料セルフ診断【公認心理師監修】"
      description="インポスター症候群のチェック・診断テスト(20問・無料・2分)。「いつかバレる」「評価されても自信がない」今の状態を確認できます。看護師・介護士・福祉職など支援職向け。結果別に原因と構造を解説。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/impostor-check-20"
      date="2026-05-08"
      tags={["burnout", "boundary", "check"]}
      faq={FAQ_ITEMS}
    >
      {/* H1直下フック */}
      <p className="text-base text-stone-700 leading-[1.95] mb-4">
        「いつか実力がないとバレるのでは」「評価されても素直に受け取れない」——
        その感覚は、<strong>性格や自信の問題ではなく、構造から起きています</strong>。
        まずは今の状態を、20問のチェックで可視化してみてください。
      </p>

      <div className="mb-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-600">
        <strong>所要時間:約2分</strong> / 20項目にチェックを入れるだけ / 登録・個人情報不要<br />
        介護・看護・福祉・心理など<strong>支援職に多い傾向</strong>を踏まえた設問構成です。
      </div>

      {/* 目次ナビ */}
      <nav className="mb-6 p-3 rounded-xl bg-white border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600">
          <li>・20問の無料セルフチェック(下にスクロール)</li>
          <li>・スコア別の状態解説と次のステップ</li>
          <li>・インポスター症候群が起きる<strong>3つの構造</strong>(役割依存・自己複雑性・他人軸)</li>
          <li>・よくある質問(治る?病気?支援職に多い理由は?)</li>
        </ul>
      </nav>

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
      <h2>インポスター症候群セルフチェック(20問)</h2>
      <p className="text-sm text-stone-600 mb-3">
        当てはまるものにチェックを入れてください。直感で構いません。
      </p>
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

      {/* 確認ボタン - GA4イベント送信 */}
      {!shown && (
        <button
          onClick={handleShowResult}
          className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all mb-6"
          style={{ background: "#7EB8A4" }}
        >
          今の状態を確認する({score}項目チェック済み)
        </button>
      )}

      {/* 結果 */}
      {shown && (
        <div className="mb-6">
          <div className="mb-4 p-5 rounded-2xl border" style={{ background: level.bg, borderColor: level.border }}>
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

          {/* 他人軸チェックへの連鎖 */}
          <div className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              ここまで当てはまる場合、<strong>「他人軸がベースになっている状態」の可能性が高いです。</strong><br />
              この状態は放っておくと、人間関係だけでなく仕事の消耗も強くなります。
            </p>
            <Link to="/articles/other-axis-check"
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">
              → 他人軸チェック(15項目)——あわせて確認する
            </Link>
          </div>

          {/* LINE誘導 */}
          <LineCtaImpostor />
        </div>
      )}

      {/* チェック→ピラー遷移ブリッジ */}
      <div className="my-6 p-4 rounded-2xl border border-stone-200 bg-white">
        <p className="text-xs font-medium text-stone-500 mb-1">多く当てはまった方へ</p>
        <p className="text-sm text-stone-700 leading-[1.8] mb-3">
          「なぜこうなるのか」を構造から整理すると、回復の方向が見えてきます。
          インポスター症候群は<strong>自信の問題ではなく、役割依存・自己複雑性・他人軸という構造</strong>から起きています。
        </p>
        <a href="/articles/impostor-syndrome"
          className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-stone-800 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all bg-stone-50">
          <span>→ インポスター症候群の仕組みを見る</span>
          <span className="text-xs" style={{ color: "#8FAF9F" }}>ピラー記事</span>
        </a>
      </div>

      <h2>インポスター症候群とは——「できているのに自信がない」感覚の正体</h2>
      <p>
        インポスター症候群(impostor syndrome / インポスター現象)とは、
        客観的に成果を出しているにもかかわらず「自分には実力がない」「評価は過大評価だ」「いつかバレる」と感じ続ける心理状態を指します。
        1978年に心理学者ポーリン・クランスらが提唱した概念で、
        近年は<strong>支援職・専門職・女性・若手リーダー</strong>に多く見られることが指摘されています。
      </p>
      <p>
        多くの解説では「自信の問題」「思い込み」として扱われますが、
        このチェックで当てはまる人が体験しているのは、もっと深い構造から来ています。
      </p>

      <h2>インポスター症候群を生む3つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 役割依存——「できる自分=価値がある自分」</p>
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
        詳しく→ <Link to="/articles/impostor-syndrome" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群とは(ピラー記事)</Link>
      </p>

      {/* FAQ */}
      <h2>よくある質問(FAQ)</h2>
      <div className="space-y-2 mb-6">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="rounded-xl border border-stone-200 bg-white overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full text-left p-4 flex items-start justify-between gap-3 hover:bg-stone-50 transition-colors"
              aria-expanded={openFaq === i}
            >
              <span className="text-sm font-medium text-stone-800 leading-[1.7]">Q. {item.q}</span>
              <span className={`flex-shrink-0 text-stone-400 transition-transform mt-0.5 ${openFaq === i ? "rotate-180" : ""}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {openFaq === i && (
              <div className="px-4 pb-4 text-sm text-stone-600 leading-[1.95] border-t border-stone-100 pt-3">
                A. {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <LineCta />

      <p className="check-disclaimer text-xs text-stone-400 mt-4">
        このチェックは診断ではなく、自分の状態に気づくための目安です。当てはまる項目が多くても、それ自体が「問題」ではありません。
      </p>

      <ArticleFooterLinks type="self-function" exclude={["/articles/impostor-check-20"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

import { useState, useEffect } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete, trackLineClickFromCheck } from "../../lib/analytics"

const CHECK_NAME = "counseling-matching-check"

const checkItems = [
  "「なぜそうなるのか」を理解したい気持ちが強い",
  "漠然とした不安を、構造として整理したい",
  "自分の感情パターンを客観視できるようになりたい",
  "ただ共感されるより、現実的な変化を望んでいる",
  "厳しい指摘でも、構造のためなら受け取れる",
  "「自分で考える」プロセスを大事にしたい",
  "表面的な対処より、根本的な理解を優先したい",
  "対人援助職(看護・介護・福祉・心理・教育など)である、または近い立場",
  "今の消耗や違和感を「言葉にして整理したい」と感じている",
  "回数を重ねるより、短期間でも整理できるカウンセリングを希望する",
]

type Level = "fit" | "early" | "different" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score >= 7) return "fit"
  if (score >= 4) return "early"
  return "different"
}

const resultConfig = {
  fit: {
    label: "構造整理型カウンセリングが合う可能性が高いです",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    headColor: "#15803d",
    message: "「なぜそうなるのか」「どうすれば変えられるのか」を構造的に理解しながら進めたい方に向いています。共感だけでなく、現実的な変化を望むあなたには、いしずえカウンセリングのアプローチが合う可能性が高いです。",
    cta: {
      heading: "あなたに合う進め方で、一度整理してみませんか?",
      body: "あなたの状態を、まず構造として整理します。意志や性格の問題として捉えず、構造的に見ることで「なぜそうなるのか」「どこから変えられるのか」が見えてきます。初回はメール相談で30分無料。続けるかは、それから決めても大丈夫です。",
      buttonText: "今の状態を整理してみる(初回無料)",
      href: "/#contact",
      sub: "支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK",
    },
  },
  early: {
    label: "まずは段階的に整理することがおすすめです",
    bg: "#fffbeb",
    border: "#fde68a",
    headColor: "#a16207",
    message: "「カウンセリングまでは決めきれない」「もう少し自分で整理したい」という段階かもしれません。いきなり相談ではなく、まずLINEや無料コンテンツで段階的に整理することで、自分の状態が見えてきます。決めるのはそれからで大丈夫です。",
    cta: {
      heading: "まず段階的に整理する場としてLINEを使う",
      body: "LINEでは、状態のタイプ別に整理した解説を送っています。「読むだけOK」「勧誘なし」「いつでも解除OK」なので、まず情報整理の段階から始められます。",
      lineHref: "https://lin.ee/6H8Pzo6?type=compassion",
      buttonText: "段階的に整理する(無料・読むだけOK)",
      sub: "登録不要のセルフチェックから始めるのもおすすめです",
    },
  },
  different: {
    label: "別のタイプのサポートが合うかもしれません",
    bg: "#eff6ff",
    border: "#bfdbfe",
    headColor: "#1d4ed8",
    message: "あなたが今求めているのは、「構造を理解する」よりも「とにかく受け止めてもらう」「優しく聞いてもらう」サポートかもしれません。これは弱さではなく、今の自分に必要な形を選んでいるということです。傾聴中心のカウンセリングや、別の選択肢の方が合う可能性があります。",
    cta: {
      heading: "今のあなたに合うサポートの選び方",
      body: "「とにかく話を聞いてほしい」「ジャッジされずに受け止めてほしい」状態のとき、まず必要なのは構造的な整理ではなく、安全な場での解放です。傾聴中心のカウンセリングサービス・電話相談・公的な相談窓口など、選択肢があります。あなたの状態に合うサポートを選ぶことが、回復への近道です。",
      buttonText: "支援職向けの相談窓口を確認する",
      href: "/articles/helper-counselor-finder",
      sub: "焦らず、自分に合う場を選ぶことが大事です",
    },
  },
}

const FAQ_ITEMS = [
  {
    q: "なぜ「合う人・合わない人」を明示しているのですか?",
    a: "カウンセリングは、合う・合わないがはっきり分かれるサービスです。誰にでも「合います」と伝える方が集客上は楽ですが、合わない方に申し込んでいただくと、お互いに消耗してしまいます。誠実に「合う方には合う、合わない方には別の選択肢があります」と伝えることが、結果的にすべての方の役に立つと考えています。",
  },
  {
    q: "「合わない」と出たら、もう申し込めないのですか?",
    a: "もちろん申し込んでいただけます。このチェックはあくまで「今の状態でフィットしやすいか」の目安です。「合わない」と出ても、状態が変わったり、心境が変わったタイミングで、もう一度検討してください。また、初回はメール相談(無料)なので、合うかどうかを気軽に確かめる方法もあります。",
  },
  {
    q: "構造整理型カウンセリングとは何ですか?",
    a: "「いま自分に何が起きているのか」を、感情論ではなく構造的に整理するアプローチです。CBT・ACT・動機づけ面接・BPSモデル・トラウマインフォームドアプローチなどを統合的に使い、「なぜそうなるのか」を見える化することで、変化の方向が自分で選べるようになることを目指します。詳しくは<Link to=\"/profile\">プロフィール</Link>に記載しています。",
  },
  {
    q: "傾聴型と構造整理型、どちらが優れているのですか?",
    a: "どちらが優れているという話ではありません。「今のあなたに必要なもの」が違うだけです。深い悲しみや喪失の直後は傾聴型が必要なことが多く、状態が落ち着いてから構造整理型が役立つ場合もあります。状態によって必要なものは変わるので、決めつけずに選ぶことが大事です。",
  },
  {
    q: "対人援助職でないと申し込めませんか?",
    a: "対人援助職以外の方もご相談いただけます。ただし、いしずえカウンセリングは特に「対人援助職の消耗」を専門にしています。同じ「他人軸」「境界線」「燃え尽き」のテーマでも、業界特有の構造を理解しているか否かで、整理の精度が変わります。対人援助職以外の方は、より一般的なテーマで構造を扱うことになります。",
  },
  {
    q: "「まだ早い」と出た場合、いつ申し込めばいいですか?",
    a: "決まったタイミングはありません。一つの目安は「LINEを読んでみて、もっと整理したいと感じたとき」です。LINEを通じて自分の状態をある程度把握できた後の方が、カウンセリングでの整理も深まりやすいです。焦らず、自分のペースで進めてください。",
  },
]

const LINE_URL = "https://lin.ee/6H8Pzo6?type=matching"

export default function CounselingMatchingCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(10).fill(false))
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
  const barPct = Math.round((score / 10) * 100)

  // ▼ GA4イベント送信:「結果を見る」ボタン押下時にチェック完了イベントを送信
  const handleShowResult = () => {
    setShown(true)
    if (level) {
      trackCheckComplete(CHECK_NAME, score, level, 10)
    }
  }

  // ▼ LINEクリック時のハンドラ(earlyレベルのみLINE誘導あり)
  const handleLineClick = () => {
    if (level) {
      trackLineClickFromCheck(CHECK_NAME, level)
    }
  }

  return (
    <ArticleLayout
      title="このカウンセリングが合う人・合わない人——10項目チェック【公認心理師】"
      description="いしずえカウンセリング(構造整理型カウンセリング)が合うかどうかを10項目でセルフチェック。合う方・まだ早い方・別のサポートが合う方の3段階で結果を解説。「売る」ではなく「選ばせる」設計。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/counseling-matching-check"
      date="2026-05-22"
      tags={["check", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        合う方だけが申し込んでください。10項目で「いしずえカウンセリングがあなたに合うか」を確認します。
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
        カウンセリングは「合う・合わない」がはっきり分かれるサービスです。
        誰にでも「合います」と言う方が集客上は楽ですが、合わない方に申し込んでいただくとお互いに消耗してしまいます。
      </p>

      <p>
        そのため、いしずえカウンセリングでは<strong>「合う方だけが申し込んでください」</strong>と明示しています。
        この記事では、「合う・合わない」を10項目でセルフチェックできます。
        「ふるい落とす」ためのツールであり、安心して受けてください。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・いしずえカウンセリングが<strong>合わない人</strong>の特徴(先に解説)</li>
          <li>・いしずえカウンセリングが<strong>合う人</strong>の特徴</li>
          <li>・10項目セルフチェック</li>
          <li>・結果別の3段階の進め方(合う/まだ早い/別のサポートが合う)</li>
          <li>・「合う・合わない」を明示する理由</li>
        </ul>
      </nav>

      {/* ▼ 合わない人を先に提示 */}
      <h2>こんな方には、別のサポートをおすすめします</h2>
      <p>
        まず先に、いしずえカウンセリングが<strong>合わない方</strong>の特徴をお伝えします。
        以下のような状態の方は、別のタイプのサポートの方が今のあなたに合う可能性が高いです。
      </p>

      <div className="card" style={{ background: "rgba(239,246,255,0.5)", borderColor: "rgba(191,219,254,0.5)" }}>
        <p className="text-sm font-medium text-stone-700 mb-3">合わない人の特徴</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>とにかく話を聞いてほしい</strong>・うなずいてほしい</li>
          <li>・<strong>受け止めるだけ</strong>のサポートを求めている</li>
          <li>・優しい言葉で<strong>慰めてほしい</strong></li>
          <li>・分析や整理ではなく、<strong>共感だけ</strong>を求めている</li>
          <li>・<strong>変化より、まず安心</strong>を最優先したい</li>
          <li>・カウンセラーから<strong>指摘やフィードバックを受けたくない</strong></li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        こうした状態にあるのは「弱い」のではなく、<strong>今のあなたに必要なものが「受容と安全」</strong>だということです。
        その状態で構造整理型カウンセリングを受けると、ミスマッチで消耗します。
        傾聴中心のカウンセリングサービス・電話相談・公的な相談窓口など、別の選択肢の方が合うかもしれません。
      </p>

      {/* ▼ 合う人を提示 */}
      <h2>こんな方に、いしずえカウンセリングは合います</h2>
      <p>
        次に、いしずえカウンセリングが<strong>合う方</strong>の特徴をお伝えします。
        以下のような気持ちがある方は、構造整理型カウンセリングの効果を実感しやすいです。
      </p>

      <div className="card" style={{ background: "rgba(240,253,244,0.5)", borderColor: "rgba(187,247,208,0.5)" }}>
        <p className="text-sm font-medium text-stone-700 mb-3">合う人の特徴</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>「なぜそうなるのか」を理解したい</strong></li>
          <li>・<strong>漠然とした不安を構造として整理したい</strong></li>
          <li>・自分のパターンを<strong>客観視できるようになりたい</strong></li>
          <li>・共感だけでなく、<strong>現実的な変化を望んでいる</strong></li>
          <li>・厳しい指摘でも、<strong>構造のためなら受け取れる</strong></li>
          <li>・<strong>「自分で考える」プロセス</strong>を大事にしたい</li>
          <li>・対人援助職(看護・介護・福祉・心理・教育)である、または近い立場</li>
        </ul>
      </div>

      <h2>10項目セルフチェック</h2>
      <p>
        以下の項目を読んで、当てはまると感じるものをタップしてください。直感で構いません。
      </p>

      {/* スコアバー */}
      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 10</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{
            width: `${barPct}%`,
            background: score >= 7 ? "#86efac" : score >= 4 ? "#fcd34d" : score === 0 ? "#e7e5e4" : "#93c5fd"
          }}
        />
      </div>

      <div className="checklist">
        {checkItems.map((text, i) => (
          <div
            key={i}
            className={`check-item${checked[i] ? " checked" : ""}`}
            onClick={() => toggle(i)}
            role="checkbox"
            aria-checked={checked[i]}
            tabIndex={0}
            onKeyDown={(e) => e.key === " " && toggle(i)}
          >
            <div className="checkbox">
              <div className="checkmark" />
            </div>
            <p className="item-text">{text}</p>
          </div>
        ))}
      </div>

      {/* 結果ボタン */}
      {!shown && (
        <button
          onClick={handleShowResult}
          className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all mb-6 mt-4"
          style={{ background: "#7EB8A4" }}
        >
          結果を見る({score}項目チェック済み)
        </button>
      )}

      {/* 結果表示 */}
      {shown && result && (
        <div className="mb-6">
          {/* 結果ボックス */}
          <div style={{ background: result.bg, border: `1.5px solid ${result.border}`, borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "11px", color: result.headColor, marginBottom: "4px", fontWeight: 600, letterSpacing: "0.05em" }}>{score}項目 / 10項目</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{result.label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8 }}>{result.message}</p>
          </div>

          {/* レベル別CTA */}
          {level === "fit" && (
            <div style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", border: "1.5px solid rgba(143,175,159,0.4)", borderRadius: "14px", padding: "1.5rem", marginBottom: "1.25rem", textAlign: "center" }}>
              <p style={{ fontWeight: 600, fontSize: "1rem", color: "#222", marginBottom: "0.6rem" }}>
                {result.cta.heading}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {result.cta.body}
              </p>
              <a href={result.cta.href}
                style={{ display: "inline-block", background: "#2C1F14", color: "#fff", borderRadius: "99px", padding: "13px 24px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", marginBottom: "0.6rem" }}>
                {result.cta.buttonText}
              </a>
              <p style={{ fontSize: "0.75rem", color: "#aaa", margin: 0 }}>
                {result.cta.sub}
              </p>
            </div>
          )}

          {level === "early" && (
            <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#2C1F14", marginBottom: "4px", fontFamily: "'Noto Serif JP', serif" }}>
                {result.cta.heading}
              </p>
              <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
                {result.cta.body}
              </p>
              <a href={result.cta.lineHref} target="_blank" rel="noopener noreferrer"
                onClick={handleLineClick}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", alignSelf: "flex-start" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
                </svg>
                {result.cta.buttonText}
              </a>
              <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.45)", fontFamily: "sans-serif", margin: 0 }}>
                {result.cta.sub}
              </p>
            </div>
          )}

          {level === "different" && (
            <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
              <p style={{ fontWeight: 600, fontSize: "14px", color: "#1e3a8a", marginBottom: "8px" }}>
                {result.cta.heading}
              </p>
              <p style={{ fontSize: "13px", color: "#1e40af", lineHeight: 1.8, marginBottom: "12px" }}>
                {result.cta.body}
              </p>
              <Link to={result.cta.href}
                style={{ display: "inline-block", color: "#1d4ed8", fontSize: "13px", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "2px" }}>
                → {result.cta.buttonText}
              </Link>
              <p style={{ fontSize: "11px", color: "#3b82f6", marginTop: "8px", margin: 0 }}>
                {result.cta.sub}
              </p>
            </div>
          )}

          {/* やり直しボタン */}
          <button
            onClick={() => { setChecked(new Array(10).fill(false)); setShown(false) }}
            className="text-xs text-stone-400 underline underline-offset-2 mt-2"
          >
            最初からやり直す
          </button>
        </div>
      )}

      {/* なぜ「合う・合わない」を明示するのか */}
      <h2>なぜ「合う・合わない」を明示するのか</h2>
      <p>
        多くのカウンセリングサービスは「誰にでも合います」と謳います。
        集客上はその方が効果的です。しかし、いしずえカウンセリングは<strong>あえて「合わない人」を明示</strong>しています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">理由① ミスマッチが最大の消耗を生む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          合わないカウンセリングを受けると、お互いに消耗します。お金と時間を使った結果「やっぱり合わなかった」という体験は、「カウンセリングは効かない」「自分は変われない」という諦めを強化してしまいます。これは支援職にとって特に痛い経験です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">理由② 「選んで来た」方が効果が出る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分で「これが合いそう」と選んで来た方は、最初から能動的にカウンセリングに取り組めます。「とりあえず申し込んだ」よりも変化が早く、深いことが臨床経験から明らかです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">理由③ 構造整理型は合う・合わないがはっきりしている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          いしずえカウンセリングは「構造整理型」というアプローチを取っています。
          CBT・ACT・動機づけ面接・BPSモデルなどを統合した、<strong>「なぜそうなるのか」を構造的に整理する</strong>方法です。
          このアプローチは合う方には強く効きますが、「ただ聞いてほしい」段階の方には合わないことがあります。
          だから明示する方が、お互いのためになります。
        </p>
      </div>

      <h2>構造整理型カウンセリングとは</h2>
      <p>
        いしずえカウンセリングが提供している「構造整理型カウンセリング」は、
        感情論ではなく<strong>構造として整理する</strong>アプローチです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">構造整理型の3ステップ</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>共感</strong>——まず今の状態を受け止める</li>
          <li>② <strong>構造化</strong>——「なぜそうなるのか」を構造として整理する</li>
          <li>③ <strong>変化の方向を選ぶ</strong>——自分で次の一歩を選び取る</li>
        </ul>
      </div>

      <p>
        ①②③のうち、<strong>②の構造化</strong>に特に力を入れているのが、いしずえの特徴です。
        共感だけで終わらせず、変化の選択肢が見えるところまで一緒に進みます。
      </p>

      <p>
        詳しくは<Link to="/profile" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">プロフィールページ</Link>をご覧ください。
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">構造を理解する(主要ピラー)</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(実践ガイド)</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/other-axis-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸チェック(15項目)</Link></li>
          <li>・<Link to="/articles/boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線チェック(15項目)</Link></li>
        </ul>
      </div>

      <p className="check-disclaimer">
        このチェックは「いしずえカウンセリングとの相性」を確認するための目安です。結果はあくまで参考としてご活用ください。最終的な判断は、ご自身のペースで決めてください。
      </p>

      <ArticleFooterLinks type="self-function" exclude={["/articles/counseling-matching-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

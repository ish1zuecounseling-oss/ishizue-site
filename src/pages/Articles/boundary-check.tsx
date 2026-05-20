import { useState, useEffect } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { trackCheckComplete, trackLineClickFromCheck } from "../../lib/analytics"

const CHECK_NAME = "boundary-check"

const checkItems = [
  "頼まれると断れない・NOが言えない",
  "相手が不機嫌だと、自分のせいかと感じる",
  "「迷惑をかけてはいけない」という感覚が強い",
  "相手の感情をそのまま受け取ってしまう",
  "「どこまでが自分の責任か」がわからなくなる",
  "人と関わった後、強い消耗感がある",
  "「NO」と言った後に強い罪悪感が出る",
  "相手の気持ちを優先して、自分の気持ちを後回しにする",
  "利用者・相手の問題を自分の問題のように感じる",
  "「助けなければ」という衝動を止められない",
  "自分のペースで動けないことが多い",
  "「これは自分の問題か、相手の問題か」が区別できない",
  "人に合わせすぎて、自分の本音がわからなくなる",
  "「断ったら関係が壊れる」という恐れが強い",
  "休んでいても「何かしなければ」という感覚が抜けない",
]

type Level = "low" | "mid" | "high" | null

function getLevel(score: number): Level {
  if (score === 0) return null
  if (score <= 4) return "low"
  if (score <= 9) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "境界線は比較的保てている状態です",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    message: "今は自他の区別がある程度できている状態です。ただし、支援職では仕事を続けるうちに境界線が薄まっていくことがあります。今の状態を知っておくことが予防になります。",
    lineDesc: "境界線は、気づかないうちに薄まっていきます。状態別の整理をLINEで送っています。",
    lineLabel: "今どの段階か知っておく(無料・読むだけOK)",
  },
  mid: {
    label: "境界線が薄まってきている可能性があります",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "「相手の感情を引き受けやすい」「断ると罪悪感が強い」状態が出始めています。この段階で構造を理解しておくと、消耗が深まる前に変化の方向が見えてきます。",
    lineDesc: "この段階が続くと、断れない・抱え込みがさらに強まることがあります。段階ごとの整理をLINEで送っています。",
    lineLabel: "今どの段階か知っておく(無料・読むだけOK)",
  },
  high: {
    label: "境界線がかなり薄くなっている可能性があります",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "相手の感情・責任を自分のものとして引き受けやすい状態かもしれません。「どこまでが自分の問題か」が見えなくなっているとき、構造を外から整理することが助けになります。",
    lineDesc: "境界線が薄い状態は、放っておくと消耗がさらに深まります。構造の整理をLINEで送っています。",
    lineLabel: "今どの段階か知っておく(無料・読むだけOK)",
  },
}

const LINE_URL = "https://lin.ee/6H8Pzo6?type=compassion"

const FAQ_ITEMS = [
  {
    q: "境界線チェックは何項目当てはまったら注意ですか?",
    a: "目安として5〜9項目で境界線が薄まりつつある状態、10項目以上でかなり薄くなっている可能性があります。ただしこのチェックは診断ではなく、自分の状態を可視化するためのものです。項目数より「日常的に消耗を感じているか」が重要な判断基準です。",
  },
  {
    q: "境界線(バウンダリー)とは何ですか?",
    a: "境界線とは「どこまでが自分で、どこからが他人か」を分ける心理的な感覚です。自分の感情・責任・エネルギー・時間と、他者のそれとを区別する力で、「自他境界」とも呼ばれます。これが薄くなると、断れない・抱え込む・人の感情を引き受けすぎるといった状態が起きやすくなります。",
  },
  {
    q: "境界線にはどんな種類がありますか?",
    a: "代表的には4種類あります。①身体的境界線(物理的距離・接触)、②感情的境界線(自分と他人の感情を区別する)、③時間的境界線(自分の時間を守る)、④責任の境界線(自分が負うべき範囲を見極める)。支援職で薄くなりやすいのは②感情的境界線と④責任の境界線です。",
  },
  {
    q: "境界線が薄いのはなぜですか?",
    a: "境界線の薄さは意志や性格の問題ではなく、幼少期から形成されたワーキングモデル(内的作業モデル)が関係しています。「断ると嫌われる」「相手に合わせないと関係が壊れる」という前提が無意識に作動し、境界線を引くことへの強い抵抗が生まれます。",
  },
  {
    q: "境界線と他人軸はどう違いますか?",
    a: "重なり合う概念ですが、視点が異なります。境界線は「自分と他者の領域を分けるライン」を指し、他人軸は「自分の判断基準を相手側に置いている状態」を指します。境界線が薄い人の多くは他人軸が強く、両者は互いに強化し合う関係にあります。",
  },
  {
    q: "境界線は引けるようになりますか?",
    a: "なります。ただし「断る練習」のような行動レベルだけでは難しく、背景にあるワーキングモデルや他人軸の構造を整理することで、境界線を引くことへの抵抗そのものが和らぎます。一人で取り組みづらい場合は、第三者と一緒に整理する方法が有効です。",
  },
  {
    q: "このチェックは診断として使えますか?",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  },
]

export default function BoundaryCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(15).fill(false))

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score  = checked.filter(Boolean).length
  const level  = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / 15) * 100)

  // ▼ GA4イベント送信:レベル変化時にチェック完了イベントを送信
  useEffect(() => {
    if (level) {
      trackCheckComplete(CHECK_NAME, score, level, 15)
    }
  }, [level, score])

  // ▼ LINEクリック時のハンドラ
  const handleLineClick = () => {
    if (level) {
      trackLineClickFromCheck(CHECK_NAME, level)
    }
  }

  return (
    <ArticleLayout
      title="境界線チェック15項目｜バウンダリー無料セルフ診断【公認心理師監修】"
      description="「断れない」「人の感情を引き受けすぎる」「どこまでが自分の責任かわからない」——境界線(バウンダリー)を15項目・2分で無料セルフチェック。結果別に薄くなる構造的原因(ワーキングモデル・他人軸)を解説。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/boundary-check"
      date="2026-05-15"
      tags={["boundary", "compassion", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「断れない」「人の感情を引き受けすぎる」「どこまでが自分の責任かわからない」——
        それは<strong>境界線(バウンダリー / 自他境界)</strong>が薄くなっているサインかもしれません。
      </p>

      <p>
        境界線(バウンダリー)とは「どこまでが自分で、どこからが他人か」を分ける心理的な感覚で、
        感情・責任・時間・エネルギーを自分と他者で区別する力のことを指します。
        この境界線が薄くなると、人間関係でも仕事でも「気づかないうちに消耗していく」状態が起きやすくなります。
      </p>

      {/* この記事でわかること:ナビ */}
      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・15項目の無料セルフチェック(下にスクロール、約2分)</li>
          <li>・スコア別の状態解説(1〜4 / 5〜9 / 10以上)と次のステップ</li>
          <li>・境界線(バウンダリー)の<strong>4つの種類</strong>(身体・感情・時間・責任)</li>
          <li>・境界線が薄くなる<strong>構造的な理由</strong>(ワーキングモデル・他人軸)</li>
          <li>・よくある質問(何項目で注意?他人軸との違い?引けるようになる?)</li>
        </ul>
      </nav>

      <p>
        以下の項目を読んで、当てはまると感じるものをタップしてください。直感で構いません。
      </p>

      <h2>境界線セルフチェック(15項目・無料)</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 15</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 4 ? "bar-low" : score <= 9 ? "bar-mid" : "bar-high"}`}
          style={{ width: `${barPct}%` }}
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

      {/* 採点の目安を結果表示前に出す */}
      {!result && (
        <div className="my-4 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-[1.8]">
          <p className="font-medium text-stone-700 mb-1">採点の目安</p>
          <p>・1〜4項目:境界線は比較的保てている ／ ・5〜9項目:薄まりつつある可能性 ／ ・10項目以上:かなり薄くなっている可能性</p>
        </div>
      )}

      {result && (
        <div>
          {/* 結果ボックス */}
          <div style={{ background: result.bg, border: `1.5px solid ${result.border}`, borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "12px", color: "#78716c", marginBottom: "4px" }}>{score}項目 / 15項目</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{result.label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8 }}>{result.message}</p>
          </div>

          {/* 他人軸チェックへの連鎖 */}
          <div className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              境界線が薄い人の多くは、<strong>「他人軸」とも深く関係しています。</strong><br />
              自分の感覚より相手の反応を優先するパターンが、境界線を薄くし続けます。
            </p>
            <Link to="/articles/other-axis-check"
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">
              → 他人軸チェック(15項目)——あわせて確認する
            </Link>
          </div>

          {/* LINE誘導 - onClickハンドラで計測 */}
          <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
              {result.lineDesc}
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              onClick={handleLineClick}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", alignSelf: "flex-start" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
              </svg>
              {result.lineLabel}
            </a>
            <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
              読むだけOK ／ 勧誘なし ／ いつでも解除OK
            </p>
          </div>

          {/* 構造理解リンク */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 mb-4">
            <p className="text-xs font-medium text-stone-600 mb-2">「なぜこうなるのか」を構造から理解する</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/boundary-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 境界線とは?バウンダリーが薄くなる構造(ピラー記事)
              </Link>
              <Link to="/articles/working-model" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → ワーキングモデルとは?断れない・境界線の構造的な理由
              </Link>
              <Link to="/articles/other-axis-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 他人軸とは?抜け出せない理由と原因
              </Link>
              <Link to="/articles/helper-cannot-say-no" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 断れない原因とは?NOが言えない人の心理と構造
              </Link>
            </div>
          </div>
        </div>
      )}

      <h2>境界線(バウンダリー)とは——「自他境界」の心理的な感覚</h2>
      <p>
        境界線(バウンダリー / boundary)は、心理学において<strong>「自分と他者の間に引く適切な心理的境界線」</strong>を指します。
        日本語では「境界線」「境界感覚」「自他境界」「限界設定」などと訳されます。
        欧米のメンタルヘルス領域では1980年代前後から重視されはじめ、
        日本でも2010年頃からカウンセリングや心理教育の文脈で広く使われるようになりました。
      </p>
      <p>
        境界線がしっかりしていると、自分の感情・思考・時間・身体・エネルギーを守りながら、
        相手の領域も尊重できます。
        逆に境界線が曖昧だと、他者の感情や責任を自分のものとして引き受けすぎ、
        慢性的な消耗や人間関係の疲れにつながります。
      </p>

      <h2>境界線(バウンダリー)の4つの種類</h2>
      <p>
        境界線は領域ごとに次の4種類に整理できます。
        どの境界線が薄くなっているかは人によって異なります。
      </p>
      <div className="card space-y-3 text-sm text-stone-700">
        <div>
          <p className="font-medium mb-1">① 身体的境界線</p>
          <p className="text-stone-600 leading-[1.9]">物理的距離や接触に関する境界線。「近すぎる」「触れられたくない」と感じたときに守れるかどうか。</p>
        </div>
        <div>
          <p className="font-medium mb-1">② 感情的境界線</p>
          <p className="text-stone-600 leading-[1.9]">自分の感情と他者の感情を区別する境界線。相手の不機嫌を自分のせいだと感じやすい人は、ここが薄くなっています。<strong>支援職で最も薄まりやすい領域</strong>です。</p>
        </div>
        <div>
          <p className="font-medium mb-1">③ 時間的境界線</p>
          <p className="text-stone-600 leading-[1.9]">自分の時間とペースを守る境界線。「頼まれると自分の予定を後回しにする」「休めない」が典型です。</p>
        </div>
        <div>
          <p className="font-medium mb-1">④ 責任の境界線</p>
          <p className="text-stone-600 leading-[1.9]">「どこまでが自分の責任で、どこからが相手の責任か」を区別する境界線。<strong>支援職で薄まりやすい領域</strong>で、利用者・家族・同僚の問題を自分の責任として抱え込みやすくなります。</p>
        </div>
      </div>

      <h2>境界線が薄くなる理由——「ワーキングモデル」と「他人軸」</h2>
      <p>
        境界線の薄さは「意志が弱い」「性格の問題」ではありません。
        <strong><Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600">ワーキングモデル(内的作業モデル)</Link></strong>
        と<strong><Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600">他人軸</Link></strong>
        という2つの構造が深く関係しています。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「断ると嫌われる」という強い恐れ(ワーキングモデル)</p>
        <p>・「相手に合わせることが当然」という前提(他人軸)</p>
        <p>・「自分のニーズより相手のニーズが優先」という習慣</p>
        <p>・「迷惑をかけてはいけない」という強い罪悪感</p>
      </div>
      <p>
        これらは幼少期から繰り返し強化されてきた思考・行動パターンであり、
        意識的に変えようとしてもすぐには動きません。
        だからこそ、まず<strong>「構造として理解する」ことが第一歩</strong>になります。
      </p>
      <p>
        詳しくは→ <Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線とは?バウンダリーの基本と構造(ピラー記事)</Link>
      </p>

      <LineCtaCompassion />

      <h2>境界線についてよくある質問(FAQ)</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* FAQ Schema(ArticleLayoutのfaq propで既に挿入されている場合は下記を削除してください) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a },
            })),
          }),
        }}
      />

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
      </p>

      <ArticleFooterLinks type="check" exclude={["/articles/boundary-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

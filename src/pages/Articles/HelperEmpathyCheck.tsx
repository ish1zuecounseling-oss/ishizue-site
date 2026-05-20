import { useState, useEffect } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { trackCheckComplete, trackLineClickFromCheck } from "../../lib/analytics"

const CHECK_NAME = "helper-empathy-check"

const checkItems = [
  "利用者の問題が仕事後も頭から離れない",
  "帰宅しても気持ちが仕事モードのままである",
  "利用者のことを考えて眠れないことがある",
  "仕事の疲れが以前より抜けにくくなった",
  "利用者のつらい話を聞くと気持ちが重くなる",
  "「自分が何とかしなければ」と感じることが多い",
  "支援がうまくいかないと無力感を感じる",
  "利用者の問題を自分の責任のように感じる",
  "断ることに罪悪感を感じる",
  "仕事のことを家族や友人に話すことが増えた",
  "以前よりイライラしやすくなった",
  "小さなことで疲れを感じやすい",
  "利用者の問題に感情的に引き込まれる",
  "ニュースや出来事を利用者と重ねてしまう",
  "人の悩みを聞くことがしんどいと感じる",
  "仕事へのモチベーションが下がってきた",
  "自分の感情が麻痺しているように感じる",
  "以前より共感することが難しくなった",
  "休んでも疲れが回復しにくい",
  "支援の仕事を続けられないかもしれないと感じる",
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 5) return "low"
  if (score <= 10) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "比較的安定している状態です",
    color: "result-low",
    message: "大きな消耗は見られませんが、支援職の疲れは『自覚がないまま蓄積する』のが特徴です。余裕がある今の段階で整えておくことが、後から崩れないための分かれ目になります。",
    lineHref: "https://lin.ee/6H8Pzo6?type=compassion",
    lineLabel: "この状態がどう進むか知っておく(無料・読むだけOK)",
    lineDesc: "あなたがどのタイプの消耗パターンなのか(他人軸・境界線のどこに偏っているか)をLINEで具体的に解説しています。",
    nextLabel: "今の状態を予防に活かす記事",
    links: [
      { href: "/articles/helper-rest-types",   text: "休息に必要な7つの要素｜ただ休むだけでは回復しない理由" },
      { href: "/articles/helper-boundary",     text: "境界線(バウンダリー)とは｜支援職が抱え込みやすい理由" },
      { href: "/articles/boundary-what",       text: "境界線とは?人間関係で疲れやすい人のためのバウンダリーの基本" },
    ],
    cvBlock: {
      heading: "余裕がある今の状態を、崩れる前に整えておく",
      body: "今は大きな問題はない状態です。ただ、支援職の消耗は『気づかないまま進む』のが特徴です。崩れてから整えるのは時間も負担も大きくなります。余裕がある今のうちに、一度言語化しておきませんか?",
      buttonText: "今の状態を整理しておく(初回無料)",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 支援職専門",
    },
  },
  mid: {
    label: "共感疲労が蓄積している可能性があります",
    color: "result-mid",
    message: "『まだ大丈夫』と思えているかもしれませんが、実際には共感疲労が静かに進みはじめている状態です。この段階で気づけるかどうかが、その後の消耗を大きく分けます。",
    lineHref: "https://lin.ee/6H8Pzo6?type=compassion",
    lineLabel: "今どの段階か知っておく(無料・読むだけOK)",
    lineDesc: "この段階の人に多いのが「他人軸の強さ」「境界線の薄さ」です。あなたがどのタイプか、LINEで具体的に解説しています。",
    nextLabel: "6〜10項目の方に読んでほしい記事",
    links: [
      { href: "/articles/helper-empathy-fatigue",      text: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
      { href: "/articles/helper-burnout-signs",         text: "バーンアウトの前兆(サイン)とは｜気づきたい心と体の変化" },
      { href: "/articles/emotional-labor-what-pillar",  text: "感情労働とは?仕事で消耗する構造と回復の考え方" },
    ],
    cvBlock: {
      heading: "この段階で止められるかどうかが分かれ目です",
      body: "まだ日常は回せているかもしれませんが、共感疲労はここから一気に深くなることが多いです。この段階で整理しておくと、大きく崩れずに抜けられる可能性が高くなります。",
      buttonText: "今の状態を整理しておく(初回無料)",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 送った後もキャンセル可",
    },
  },
  high: {
    label: "共感疲労が強くなっている可能性があります",
    color: "result-high",
    message: "共感疲労がかなり強くなっている可能性があります。『休めば戻る』段階を超えている場合もあり、一人で何とかしようとするほど回復が遅れることがあります。",
    lineHref: "https://lin.ee/6H8Pzo6?type=compassion",
    lineLabel: "この状態から回復した人がどうしたか読む(無料)",
    lineDesc: "共感疲労が強い人の多くに「他人軸」「境界線の薄さ」が関係しています。あなたがどのタイプか、LINEで具体的に解説しています。",
    nextLabel: "11項目以上の方へ——まずこの記事を読んでください",
    links: [
      { href: "/articles/compassion-fatigue-recovery", text: "共感疲労からの回復方法｜支援職が実践できる5つのケア" },
      { href: "/articles/helper-empathy-fatigue",      text: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
      { href: "/articles/why-self-care-doesnt-work",   text: "セルフケアが効かない理由｜休んでも回復しない構造" },
    ],
    cvBlock: {
      heading: "このまま抱え続けるより、外に出した方が早い状態です",
      body: "今の状態は『自分の中で処理し続ける』よりも、外に出して整理した方が回復しやすい段階の可能性があります。一度、そのままの状態を言葉にしてみませんか?",
      buttonText: "今の状態をそのまま話してみる(初回無料)",
      href: "/#contact",
      sub: "支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK",
    },
  },
}

const FAQ_ITEMS = [
  {
    q: "共感疲労は何項目当てはまったら注意ですか?",
    a: "目安として6項目以上で蓄積の可能性、11項目以上で強く出ている可能性があります。ただしこのチェックは診断ではなく、自分の状態を可視化するためのものです。項目数より「日常生活への影響が出ているか」が重要な判断基準です。少ない数でも消耗を強く感じている場合は、早めの整理をおすすめします。",
  },
  {
    q: "共感疲労は甘えですか?",
    a: "甘えではありません。共感疲労(compassion fatigue)は、1995年にアメリカの心理学者チャールズ・フィグレーが提唱した心理学的概念で、支援職に起こりやすい心理的消耗として研究されています。真剣に利用者と向き合っているからこそ起こるものであり、意志の弱さや能力の問題とは無関係です。「cost of caring(ケアすることの代償)」とも表現されます。",
  },
  {
    q: "共感疲労とうつ病の違いは何ですか?",
    a: "共感疲労は支援場面との関連が強く、「仕事を離れると少し楽になる」という特徴があります。うつ病は生活全般に影響が及び、休日でも気分の落ち込みが続く点が異なります。ただし長期化すると区別が難しくなるため、気になる場合は専門家への相談をおすすめします。",
  },
  {
    q: "共感疲労とバーンアウトはどう違いますか?",
    a: "バーンアウトは長期的なストレスによる「燃え尽き」全般を指し、職種を問わず起こります。共感疲労は他者の苦痛に共感し続けることで起きる、より特異的な消耗です。両者は重なる部分も多く、共感疲労が長期化するとバーンアウトに発展しやすいとされています。",
  },
  {
    q: "共感疲労と二次受傷(代理受傷)は同じですか?",
    a: "近い概念ですが厳密には異なります。二次受傷(secondary traumatic stress / STS)はトラウマを直接体験した人の支援を通じて生じるPTSD様の状態を指し、共感疲労よりも症状が強く侵入症状などが伴います。共感疲労はより広く、トラウマ的でない場面でも起こります。",
  },
  {
    q: "共感疲労は回復できますか?",
    a: "回復できます。ただし「ただ休む」だけでは不十分で、消耗の構造(他人軸・境界線・感情労働)を理解したうえで適切なケアをすることが重要です。早めに気づいて対処するほど回復が早い傾向があります。",
  },
  {
    q: "このチェックは診断として使えますか?",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  }
]

export default function HelperEmpathyCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(20).fill(false))

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
  const barPct = Math.round((score / 20) * 100)

  // ▼ GA4イベント送信:レベル変化時にチェック完了イベントを送信
  useEffect(() => {
    if (level) {
      trackCheckComplete(CHECK_NAME, score, level, 20)
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
      title="共感疲労チェック20項目｜支援職のための無料セルフ診断【公認心理師監修】"
      description="共感疲労を20項目・3分で無料セルフチェック。看護師・介護士・福祉職など支援職に多い消耗度を確認し、結果別に原因の構造(他人軸・境界線・感情労働)と次のステップを解説。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/helper-empathy-check"
      date="2026-03-22"
      audio="/audio/helper-fatigue-check.mp3"
      tags={["compassion", "check"]}
      faq={FAQ_ITEMS}
    >


      {/* カニバリ解消:ピラー記事への誘導 */}
      <div className="my-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-[11px] text-stone-500 mb-1.5 tracking-wide">この記事は「共感疲労」シリーズの一部です</p>
        <p className="text-xs text-stone-600 leading-relaxed">
          共感疲労の症状・原因・診断・治し方の全体像は
          <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-700 hover:text-stone-900 mx-1 font-medium">
            共感疲労とは(総合解説)
          </Link>
          にまとめています。本記事はそのうち「セルフチェック(20項目)」を詳しく扱います。
        </p>
      </div>


      <p>
        利用者のことが頭から離れない、仕事後も気持ちが切り替わらない——
        それは<strong>共感疲労(Compassion Fatigue)</strong>のサインかもしれません。
        共感疲労は<strong>1995年にアメリカの心理学者チャールズ・フィグレー</strong>が提唱した概念で、
        支援職に特に起こりやすい心理的消耗として知られています。
      </p>
      <p>
        この共感疲労チェックでは、<strong>看護師・介護士・福祉職・心理職など支援職に多い20項目</strong>から
        今の消耗度を約3分で確認できます。
        真剣に仕事に向き合っている人ほど、気づかないうちに深刻化しやすいのが共感疲労の特徴です。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・20項目の無料セルフチェック(下にスクロール)</li>
          <li>・スコア別の状態解説(1〜5 / 6〜10 / 11以上)と次のステップ</li>
          <li>・共感疲労が支援職に起こる<strong>3つの構造</strong>(感情労働・他人軸・境界線)</li>
          <li>・よくある質問(何項目で注意?バーンアウトとの違い?二次受傷との違い?)</li>
        </ul>
      </nav>

      <p>
        以下の項目を読んで、当てはまると感じるものをタップしてください。直感で構いません。
      </p>

      <h2>共感疲労セルフチェック(20項目・無料)</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 20</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 5 ? "bar-low" : score <= 10 ? "bar-mid" : "bar-high"}`}
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

      {!result && (
        <div className="my-4 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-[1.8]">
          <p className="font-medium text-stone-700 mb-1">採点の目安</p>
          <p>・1〜5項目:比較的安定 ／ ・6〜10項目:蓄積している可能性 ／ ・11項目以上:強く出ている可能性</p>
        </div>
      )}

      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 20項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          {/* LINE誘導 - onClickハンドラで計測 */}
          <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
              {result.lineDesc}
            </p>
            <a href={result.lineHref} target="_blank" rel="noopener noreferrer"
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

          {/* 他人軸チェックへの気づき導線 */}
          <div className="p-4 rounded-xl mb-4" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
            <p className="text-sm text-stone-700 leading-[1.9] mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              ここまで当てはまる場合、<br />
              「共感しすぎ」ではなく、<br />
              <strong>「他人軸がベースになっている状態」の可能性が高いです。</strong>
            </p>
            <p className="text-sm text-stone-600 leading-[1.9] mb-3">
              この状態は放っておくと、人間関係だけでなく<strong>「仕事の消耗」も強くなります。</strong><br />
              共感しすぎる人の多くは、他人軸が強く・境界線が薄いという共通点があります。
            </p>
            <Link to="/articles/other-axis-check"
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">
              → 他人軸チェック(15項目)——どの程度影響を受けているか確認する
            </Link>
          </div>

          {/* 構造理解リンク */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 mb-4">
            <p className="text-xs font-medium text-stone-600 mb-2">「なぜこうなるのか」を構造から理解する</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/boundary-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 境界線チェック(15項目)——断れない・抱え込む状態を確認する
              </Link>
              <Link to="/articles/emotional-labor-what-pillar" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 感情労働とは?仕事で消耗する構造と回復の考え方
              </Link>
              <Link to="/articles/boundary-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 境界線とは?抱え込みの構造を理解する
              </Link>
              <Link to="/articles/other-axis-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 他人軸とは?抜け出せない理由と原因
              </Link>
              <Link to="/articles/working-model" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → ワーキングモデルとは?断れない・自己否定の構造的な理由
              </Link>
            </div>
          </div>

          {/* AIアシスタント導線 */}
          <div className="p-3 rounded-xl mb-3" style={{ background: "linear-gradient(135deg, #2C1F14 0%, #3D2B1F 100%)" }}>
            <p className="text-xs text-stone-300 mb-1.5">言葉にしづらい・もう少し整理したい方へ</p>
            <Link to="/ai-assistant"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-200 hover:text-amber-100 transition-colors">
              → AIに今の状態を整理してもらう(無料)
            </Link>
            <p className="text-[10px] text-stone-500 mt-1">原因・現状・次の一歩を3点で整理します</p>
          </div>

          {result.cvBlock && (
            <div style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", border: "1.5px solid rgba(143,175,159,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "1.25rem", textAlign: "center" }}>
              <p style={{ fontWeight: 600, fontSize: "1rem", color: "#222", marginBottom: "0.6rem" }}>
                {result.cvBlock.heading}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {result.cvBlock.body}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.75rem" }}>
                ※まだ申し込むか決めていなくても大丈夫です。無理に続ける必要もありません。今の状態を整理するだけでもOKです。
              </p>
              <a href={result.cvBlock.href}
                style={{ display: "inline-block", background: "#2C1F14", color: "#fff", borderRadius: "99px", padding: "13px 24px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", marginBottom: "0.6rem" }}>
                {result.cvBlock.buttonText}
              </a>
              <p style={{ fontSize: "0.75rem", color: "#aaa", margin: 0 }}>
                {result.cvBlock.sub}
              </p>
            </div>
          )}

          <p className="next-section-label">{result.nextLabel}</p>
          {result.links.map((link) => (
            <a key={link.href} href={link.href} className="next-link">
              {link.text}
              <span className="next-link-arrow">→</span>
            </a>
          ))}
        </div>
      )}

      <h2>共感疲労とは——支援職に起こる「ケアの代償」</h2>
      <p>
        共感疲労(compassion fatigue / 思いやり疲労)とは、
        他者の苦痛や悲しみに共感し続けることで、支援者自身が情緒的・身体的に消耗していく状態を指します。
        1995年に心理学者チャールズ・フィグレーが、ベトナム戦争帰還兵のPTSD研究の中で
        支援者にも同様の症状が現れることに着目して提唱しました。
        英語では<strong>「cost of caring(ケアすることの代償)」</strong>とも表現されます。
      </p>
      <p>
        近年では、医療従事者・介護職・福祉職・心理職などの<strong>対人援助職</strong>に加え、
        SNSや報道を通じて他者の苦痛に触れ続ける人にも起こりうる現象として知られています。
      </p>

      <h2>共感疲労が支援職に起こる3つの構造</h2>
      <div className="card">
        <p className="font-medium mb-4">
          支援職では次のような構造が重なりやすいとされています。
        </p>
        <ul className="space-y-2">
          <li><strong>① <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600">感情労働</Link></strong>——表情や声色を整え続ける継続的な心理的消耗</li>
          <li><strong>② 共感的引き受け</strong>——利用者の痛みを「自分ごと」として抱え込む構造</li>
          <li><strong>③ <Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600">境界線(バウンダリー)の曖昧化</Link></strong>——仕事とプライベートの心の区切りが薄れる職場環境</li>
          <li><strong>④ 抱え込み文化</strong>——「弱音を言えない」という無言のプレッシャー</li>
        </ul>
      </div>
      <p>
        共感疲労は、意志の弱さや能力の問題ではありません。
        真剣に利用者と向き合ってきたからこそ起こる消耗です。
      </p>
      <p>
        チェックの結果に関わらず、<Link to="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600">利用者の話が頭から離れない</Link>・<Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600">感情が麻痺している</Link>・<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2 text-stone-600">眠れない</Link>といった症状が続いている場合は、早めに状態を整理することをおすすめします。
      </p>

      <h2>共感疲労についてよくある質問(FAQ)</h2>
      <div className="space-y-5">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* ハブリンク:症状別・職種別 */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6">
        <p className="text-xs font-medium text-stone-600 mb-3">チェック後に読む——症状別ガイド</p>
        <div className="flex flex-col gap-2">
          <a href="/articles/helper-client-stuck-in-head" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 利用者の話が頭から離れない(侵入症状)
          </a>
          <a href="/articles/helper-emotional-numbness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 感情が麻痺している・以前のように感じられない
          </a>
          <a href="/articles/helper-cannot-sleep" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 仕事のことが頭から離れず眠れない
          </a>
          <a href="/articles/secondary-trauma-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 二次受傷チェック(15項目)
          </a>
          <a href="/articles/empathy-fatigue-vs-secondary-trauma" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 二次受傷とは?｜共感疲労・PTSDとの違い
          </a>
          <a href="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労とは——症状・原因・回復を総合解説(ピラー記事)
          </a>
        </div>
        <p className="text-xs font-medium text-stone-600 mt-4 mb-2">職種別ガイド</p>
        <div className="flex flex-col gap-2">
          <a href="/articles/nurse-compassion-fatigue" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 看護師の共感疲労
          </a>
          <a href="/articles/care-worker-compassion-fatigue" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 介護士の共感疲労
          </a>
          <a href="/articles/school-counselor-compassion-fatigue" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → スクールカウンセラーの共感疲労
          </a>
        </div>
      </div>

      <p className="check-disclaimer">
        このチェックは診断ではなく、自分の状態に気づくための目安として活用してください。
        結果に関わらず、気になることがあれば専門家への相談をお勧めします。
      </p>

    </ArticleLayout>
  )
}

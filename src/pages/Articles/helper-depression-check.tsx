import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

const checkItems = [
  "朝、起きるのがつらい・布団から出られない",
  "出勤前に気分が重く、吐き気・動悸がある",
  "利用者・同僚と会うのが怖く感じる",
  "以前は楽しめた仕事の場面が、何も感じなくなった",
  "ミスや判断の遅れが増えてきた",
  "「自分は支援職に向いていない」という思考が止まらない",
  "休日も仕事のことが頭から離れず、休めない",
  "食欲が落ちている・または過剰に食べてしまう",
  "夜中に何度も目が覚める・眠りが浅い",
  "「消えてしまいたい」「いなくなりたい」と感じることがある",
  "自分を責める思考が一日中続く",
  "他人と話すのが億劫で、避けるようになった",
  "身体症状(頭痛・胃痛・めまい)が続いている",
  "感情の起伏が極端になっている(無感情 or 急に泣く)",
  "「もう限界だ」と感じているのに、休めずにいる",
]

type ResultLevel = "low" | "mid" | "high" | null

function getLevel(score: number): ResultLevel {
  if (score === 0) return null
  if (score <= 4) return "low"
  if (score <= 8) return "mid"
  return "high"
}

const resultConfig = {
  low: {
    label: "比較的安定している状態です",
    color: "result-low",
    message: "現時点で抑うつ症状が強い状態ではない可能性があります。ただし、支援職の消耗は気づかないうちに進むことが特徴です。気になる項目があれば、早めに整理しておくことをおすすめします。",
    nextLabel: "予防のために読みたい記事",
    links: [
      { href: "/articles/helper-empathy-check", text: "共感疲労チェック(20項目)" },
      { href: "/articles/helper-burnout-check",  text: "バーンアウトチェック" },
      { href: "/articles/helper-rest-types",     text: "休息に必要な7つの要素" },
    ],
    cvBlock: {
      heading: "余裕がある今の状態を、崩れる前に整える",
      body: "今は大きな問題はない状態ですが、支援職の消耗は静かに進みます。崩れてから整えるより、余裕がある今のうちに言語化しておく方が、ずっと楽です。",
      buttonText: "今の状態を整理しておく(初回無料)",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 支援職専門",
    },
  },
  mid: {
    label: "抑うつ傾向が出ている可能性があります",
    color: "result-mid",
    message: "抑うつ症状が出始めている可能性があります。「まだ大丈夫」と感じているかもしれませんが、この段階で気づけるかどうかが、その後の状態を大きく分けます。一人で抱え込まず、外から整理する場を持つことを検討してください。",
    nextLabel: "この段階で読みたい記事",
    links: [
      { href: "/articles/helper-burnout-vs-depression", text: "バーンアウトとうつの違い" },
      { href: "/articles/helper-cannot-sleep",          text: "支援職が眠れない理由" },
      { href: "/articles/helper-signs-to-rest",         text: "休むサイン" },
    ],
    cvBlock: {
      heading: "この段階で止められるかどうかが分かれ目です",
      body: "まだ日常は回せているかもしれませんが、抑うつ症状はここから一気に深くなることが多いです。この段階で整理しておくと、大きく崩れずに抜けられる可能性が高くなります。",
      buttonText: "今の状態を整理しておく(初回無料)",
      href: "/#contact",
      sub: "勧誘なし ／ 1回のみでもOK ／ 送った後もキャンセル可",
    },
  },
  high: {
    label: "抑うつ症状が強く出ている可能性があります",
    color: "result-high",
    message: "抑うつ症状が強く出ている可能性があります。一人で抱え続けるよりも、専門家のサポートを受けることを強く推奨します。心療内科・精神科の受診と並行して、カウンセリングで構造を整理していくことが、回復の現実的な経路になります。",
    nextLabel: "今、最も大切な情報",
    links: [
      { href: "/articles/helper-burnout-recovery",       text: "バーンアウトからの回復" },
      { href: "/articles/helper-counseling-when-quitting", text: "辞めるか迷うときのカウンセリング" },
      { href: "/articles/why-self-care-doesnt-work",     text: "セルフケアが効かない理由" },
    ],
    cvBlock: {
      heading: "このまま抱え続けるより、外に出した方が早い段階です",
      body: "今の状態は『自分の中で処理し続ける』よりも、外に出して整理した方が回復しやすい段階の可能性があります。心療内科の受診も視野に入れつつ、構造の整理についてはお手伝いできます。",
      buttonText: "今の状態をそのまま話してみる(初回無料)",
      href: "/#contact",
      sub: "支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK",
    },
  },
}

const FAQ_ITEMS = [
  {
    q: "このチェックでうつ病と診断できますか?",
    a: "できません。このチェックは医学的な診断ではなく、自分の状態に気づくための目安です。うつ病の診断には医師による問診・検査が必要です。気になる項目が多い場合は、心療内科・精神科への受診を検討してください。",
  },
  {
    q: "支援職のうつは普通のうつと違いますか?",
    a: "症状自体は共通しますが、背景の構造が異なることが多いです。支援職のうつは、感情労働・共感疲労・役割同一化・自己機能低下といった職業特有の構造が背景にあります。そのため、薬物療法だけでなく、職業構造の整理・カウンセリングが回復の重要な要素になります。",
  },
  {
    q: "うつとバーンアウトの違いは?",
    a: "バーンアウトは「仕事に関連した消耗」が中心で、仕事を離れると少し改善します。うつは生活全般に症状が及び、休んでも改善が遅いことが多いです。両者は重なる部分も多く、バーンアウトが長期化するとうつに移行することがあります。",
  },
  {
    q: "「うつかもしれない」と思ったらまず何をすべき?",
    a: "①一人で抱え込まないこと、②心療内科・精神科への受診を検討すること、③可能なら職場に状況を伝えること、です。「もう少し頑張ってから」と先延ばしにすると、回復に必要な時間が長くなります。早めに動くことが、結果的に早い回復につながります。",
  },
  {
    q: "心療内科に行くべきかどうかの目安は?",
    a: "①2週間以上、抑うつ症状が続いている、②日常生活(食事・睡眠・仕事)に支障が出ている、③「消えてしまいたい」「いなくなりたい」感覚がある、のいずれかに当てはまる場合は受診を検討してください。「受診するほどではないかも」と思っている段階で受診することが、悪化を防ぎます。",
  },
  {
    q: "支援職をやめれば治りますか?",
    a: "状況によります。職場環境・労働条件が原因なら改善することが多いですが、「自己機能の低下」「自責ループ」「他人軸」など内側の構造が原因の場合は、職場を変えても同じ状態が再発することがあります。まず構造を整理することが、根本的な回復への近道です。",
  },
]

export default function HelperDepressionCheck() {
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

  return (
    <ArticleLayout
      title="支援職うつチェック15項目｜抑うつ症状を3分で確認【公認心理師監修】"
      description="支援職に多い抑うつ症状を15項目・3分で無料セルフチェック。看護師・介護士・福祉職・心理職などの方が、自分の状態を確認し、必要なケアの方向を整理できます。公認心理師監修。"
      url="https://www.ishizue-counseling.jp/articles/helper-depression-check"
      date="2026-05-18"
      tags={["check", "burnout", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自分はうつかもしれない」と感じている方へ。15項目で今の状態を確認できます。
      </p>

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
        「最近、仕事に行くのがつらい」「気分が落ち込み続けている」「以前は楽しめたことが楽しくない」——
        こうした状態が続いているなら、抑うつ症状が出ている可能性があります。
      </p>

      <p>
        このチェックは、<strong>支援職に多い抑うつ症状を15項目で確認できる無料セルフチェック</strong>です。
        医学的な診断ではありませんが、自分の状態に気づき、次のステップを考えるための目安として活用できます。
      </p>

      <p className="text-xs text-stone-500 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
        ※ 「消えてしまいたい」「いなくなりたい」という感覚が続いている方は、チェックの結果に関わらず、心療内科・精神科への受診をご検討ください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <h2>支援職うつチェック(15項目・無料)</h2>

      <div className="score-header">
        <span className="score-label">選択した項目</span>
        <span className="score-number">
          {score}
          <span className="score-total"> / 15</span>
        </span>
      </div>
      <div className="bar-bg">
        <div
          className={`bar-fill ${score <= 4 ? "bar-low" : score <= 8 ? "bar-mid" : "bar-high"}`}
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
          <p>・1〜4項目:比較的安定 ／ ・5〜8項目:抑うつ傾向が出ている可能性 ／ ・9項目以上:抑うつ症状が強い可能性</p>
        </div>
      )}

      {result && (
        <div>
          <div className={`result-box ${result.color}`}>
            <p className="result-score-label">{score}項目 / 15項目</p>
            <p className="result-title">{result.label}</p>
            <p className="result-message">{result.message}</p>
          </div>

          {/* 専門窓口情報 - 高スコア時に目立たせる */}
          {level === "high" && (
            <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
              <p className="font-medium text-stone-800 mb-1">専門の窓口に相談できます</p>
              <ul className="space-y-0.5 leading-relaxed">
                <li>・<strong>よりそいホットライン</strong>: 0120-279-338(24時間・無料)</li>
                <li>・<strong>いのちの電話</strong>: 0570-783-556(10時〜22時)</li>
                <li>・お住まいの地域の<strong>精神保健福祉センター</strong>でも相談できます</li>
                <li>・心療内科・精神科の受診も選択肢です</li>
              </ul>
            </div>
          )}

          {result.cvBlock && (
            <div style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", border: "1.5px solid rgba(143,175,159,0.35)", borderRadius: "14px", padding: "1.5rem", marginBottom: "1.25rem", textAlign: "center" }}>
              <p style={{ fontWeight: 600, fontSize: "1rem", color: "#222", marginBottom: "0.6rem" }}>
                {result.cvBlock.heading}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {result.cvBlock.body}
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

      <h2>支援職のうつは「単なる気分の落ち込み」ではない</h2>
      <p>
        支援職のうつ症状は、一般的な気分の落ち込みとは異なる構造を持つことがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">背景にある4つの構造</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9] mt-2">
          <li>① <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600">感情労働</Link>の蓄積——感情を抑制し続けることで起きる消耗</li>
          <li>② <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600">共感疲労</Link>——利用者の苦痛を共有することで蓄積する負荷</li>
          <li>③ 役割同一化——「支援者としての自分」だけが中心になる</li>
          <li>④ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600">自己機能低下</Link>——感じる・望む・選ぶ機能の縮小</li>
        </ul>
      </div>

      <h2>うつ・バーンアウト・共感疲労の違い</h2>
      <p>
        症状は似ていますが、それぞれ異なる概念です。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">うつ</p>
          <p className="text-stone-600 leading-[1.9]">生活全般に症状が及び、休んでも改善が遅い。強い悲しみ・絶望・自責が中心。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">バーンアウト</p>
          <p className="text-stone-600 leading-[1.9]">仕事に関連した消耗が中心。情緒的消耗感・脱人格化・達成感低下が3要素。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">共感疲労</p>
          <p className="text-stone-600 leading-[1.9]">他者の苦痛への共感によって生じる消耗。侵入症状・回避・過覚醒が特徴。</p>
        </div>
      </div>
      <p className="text-sm text-stone-500 leading-relaxed">
        詳しくは<Link to="/articles/helper-burnout-vs-depression" className="underline underline-offset-2 text-stone-600">バーンアウトとうつの違い</Link>もご覧ください。
      </p>

      <h2>うつかもしれないと思ったら</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 一人で抱え込まない</p>
          <p className="text-stone-600 leading-[1.9]">うつは一人で乗り越えるものではありません。誰かに状況を共有することが回復の第一歩です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 心療内科・精神科の受診を検討</p>
          <p className="text-stone-600 leading-[1.9]">「受診するほどではないかも」と思っている段階での受診が、悪化を防ぎます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 職場に状況を伝える</p>
          <p className="text-stone-600 leading-[1.9]">可能な範囲で、上司や産業医・産業保健スタッフに伝えることを検討してください。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 構造の整理(カウンセリング)</p>
          <p className="text-stone-600 leading-[1.9]">薬物療法と並行して、「なぜこの状態になったのか」を整理することが再発予防につながります。</p>
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

      <p className="check-disclaimer">
        このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。気になる項目がある場合は、心療内科・精神科への受診をおすすめします。
      </p>
    </ArticleLayout>
  )
}

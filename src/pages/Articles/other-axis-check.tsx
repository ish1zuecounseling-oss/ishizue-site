import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const checkItems = [
  "「自分はどうしたいか」より「相手はどうしたいか」を先に考えてしまう",
  "人の顔色や機嫌が気になって、常に確認してしまう",
  "断ることに強い罪悪感・恐怖感がある",
  "相手が不機嫌だと、自分のせいかと感じる",
  "「本当はどうしたいか」と聞かれると答えが出ない",
  "人に嫌われることへの恐れが強い",
  "会議や話し合いで、自分の意見より場の空気を優先する",
  "「いい人」でいなければという感覚が強い",
  "人と話した後、「あれでよかったか」と振り返ることが多い",
  "感情を出すことへの強い抵抗がある",
  "「迷惑をかけてはいけない」という意識が常にある",
  "自分のニーズより相手のニーズを優先することが習慣になっている",
  "褒められると安心するが、批判されると全否定された気になる",
  "自分の感情より相手の感情の方がいつも大きく感じる",
  "「自分さえ我慢すれば」とよく思う",
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
    label: "他人軸の傾向は比較的少ない状態です",
    color: "#4ade80",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    message: "今は自分軸がある程度保てている状態です。ただし支援職では、仕事を続けるうちに他人軸が強まっていくことがあります。今の状態を知っておくことが予防になります。",
    lineDesc: "他人軸のパターンは、気づかないうちに強まっていきます。状態別の整理をLINEで送っています。",
    lineLabel: "自分の状態の構造を整理する（無料）",
  },
  mid: {
    label: "他人軸の傾向が出始めている可能性があります",
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "「相手を優先する」パターンが習慣化しはじめている状態です。この段階で構造を理解しておくと、消耗が深まる前に変化の方向が見えてきます。",
    lineDesc: "この状態が続くと、「自分がどうしたいか」がわからなくなっていきます。段階ごとの整理をLINEで送っています。",
    lineLabel: "自分の状態の構造を整理する（無料）",
  },
  high: {
    label: "他人軸が強くなっている可能性があります",
    color: "#ef4444",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "自己評価の基準が「相手の反応」に強く依存している状態かもしれません。一人で変えようとすると難しいことがあります。構造から整理することが変化の入口になります。",
    lineDesc: "他人軸が強い状態は、構造が見えると変化し始めます。段階ごとの整理をLINEで送っています。",
    lineLabel: "自分の状態の構造を整理する（無料）",
  },
}

const LINE_URL = "https://lin.ee/TZxEE00?type=impostor"

const FAQ_ITEMS = [
  {
    q: "他人軸とは何ですか？",
    a: "他人軸とは、自分の行動・感情・価値判断の基準が「相手がどう思うか」に偏っている状態です。自分の感覚や欲求より他者の反応を優先し続けることで、自己機能が消耗していきます。",
  },
  {
    q: "他人軸はなぜ抜け出せないのですか？",
    a: "他人軸は意志の問題ではなく、幼少期から形成されたワーキングモデル（内的作業モデル）という構造から来ています。「役に立つことで価値を保てる」「失望させると関係が終わる」というパターンが自動的に作動するため、意識的に変えようとしても難しいです。",
  },
  {
    q: "このチェックは診断として使えますか？",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  },
]

export default function OtherAxisCheck() {
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
      title="他人軸チェック｜15項目で「人の目が気になる・断れない」状態を確認"
      description="他人軸のセルフチェック（15項目）。「断れない」「人の顔色が気になる」「自分がどうしたいかわからない」状態を確認できます。結果別に構造的な原因を解説。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/other-axis-check"
      date="2026-05-13"
      tags={["boundary", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「また相手に合わせてしまった」「自分がどうしたいかわからない」——それは他人軸という構造から起きています。15項目で今の状態を確認してください。
      </p>

      <p>
        以下の項目を読んで、当てはまると感じるものをタップしてください。
      </p>

      <h2>他人軸セルフチェック（15項目）</h2>

      {/* スコアバー */}
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

      {result && (
        <div>
          {/* 結果ボックス */}
          <div style={{ background: result.bg, border: `1.5px solid ${result.border}`, borderRadius: "12px", padding: "1.25rem", margin: "1.25rem 0" }}>
            <p style={{ fontSize: "12px", color: "#78716c", marginBottom: "4px" }}>{score}項目 / 15項目</p>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1c1917", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{result.label}</p>
            <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8 }}>{result.message}</p>
          </div>

          {/* LINE誘導 */}
          <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
              {result.lineDesc}
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
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

          {/* 境界線への連鎖：確信度UP */}
          <div className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              他人軸が強い人の多くは、<strong>「境界線の薄さ」も関係しています。</strong><br />
              この状態が続くと、仕事の中での消耗がさらに深まります。
            </p>
            <Link to="/articles/boundary-what"
              className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">
              → 境界線とは？「断れない・抱え込む」構造を確認する
            </Link>
          </div>

          {/* 構造理解リンク */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 mb-4">
            <p className="text-xs font-medium text-stone-600 mb-2">「なぜこうなるのか」を構造から理解する</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/other-axis-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 他人軸とは？抜け出せない理由と原因（ピラー記事）
              </Link>
              <Link to="/articles/working-model" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → ワーキングモデルとは？断れない・他人軸の構造的な理由
              </Link>
              <Link to="/articles/boundary-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 境界線とは？人間関係で疲れやすい人のためのバウンダリー
              </Link>
              <Link to="/articles/low-self-esteem-why" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 自己肯定感が低い原因｜頑張っても変わらない本当の理由
              </Link>
            </div>
          </div>
        </div>
      )}

      <h2>他人軸はなぜ起きるのか</h2>
      <p>
        他人軸は「性格」や「意志の弱さ」ではなく、
        <strong><Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600">ワーキングモデル（内的作業モデル）</Link>という構造</strong>から来ています。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「役に立てる自分だけが受け入れてもらえる」という前提</p>
        <p>・「断ると関係が終わる」という恐れ</p>
        <p>・「素の自分では不十分」という感覚</p>
      </div>
      <p>
        これらの前提が無意識に作動するため、
        「もっと自分を大切に」と思っても変わりにくいです。
      </p>
      <p>
        詳しくは→ <Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは？抜け出せない理由と原因</Link>
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

      <ArticleFooterLinks type="self-function" exclude={["/articles/other-axis-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
      </div>
    </ArticleLayout>
  )
}

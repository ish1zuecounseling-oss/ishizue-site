import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const checkItems = [
  "相手から連絡が来ないと「嫌われたのか」と不安になる",
  "人に頼みごとをして断られると、関係が終わる気がする",
  "相手が不機嫌だと「自分のせいかもしれない」と感じる",
  "「どうせ去っていく」という感覚が心のどこかにある",
  "相手に合わせすぎて、自分の本音を言えないことが多い",
  "「嫌われるくらいなら自分が我慢する」と思いやすい",
  "関係が安定しているときでも「これがいつか終わる」と感じる",
  "断ることで相手に嫌われることへの恐れが強い",
  "人との距離が近くなると、逆に不安になることがある",
  "「自分といてもつまらないのでは」とよく思う",
  "相手の言動の変化に敏感で、すぐ「何かあったかも」と思う",
  "大切な人に依存しすぎてしまう・または逆に距離を置きすぎる",
  "「見捨てられないように」という意識で行動していることがある",
  "一人でいると、強い不安や空虚感がある",
  "過去の別れ・喪失体験が今でも強く影響している気がする",
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
    label: "見捨てられ不安の傾向は比較的少ない状態です",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    message: "今は比較的安定している状態です。ただし、ストレスや消耗が続くと潜在的な不安が表面に出やすくなります。今の状態を知っておくことが予防になります。",
    lineDesc: "見捨てられ不安は、気づかないうちに対人関係のパターンに影響しています。状態別の整理をLINEで送っています。",
    lineLabel: "今どの段階か知っておく(無料・読むだけOK)",
  },
  mid: {
    label: "見捨てられ不安の傾向が出ている可能性があります",
    bg: "#fffbeb",
    border: "#fde68a",
    message: "「嫌われたくない」「合わせなければ」という感覚が、対人関係や仕事の中で影響している可能性があります。この段階で構造を理解しておくと、消耗が深まる前に変化の方向が見えてきます。",
    lineDesc: "この状態が続くと、断れない・抱え込みがさらに強まることがあります。段階ごとの整理をLINEで送っています。",
    lineLabel: "今どの段階か知っておく(無料・読むだけOK)",
  },
  high: {
    label: "見捨てられ不安が強くなっている可能性があります",
    bg: "#fef2f2",
    border: "#fecaca",
    message: "対人関係の多くで「去られる恐れ」が影響している状態かもしれません。これは意志や性格の問題ではなく、幼少期から形成されたワーキングモデルという構造から来ています。構造を外から整理することが助けになります。",
    lineDesc: "見捨てられ不安が強い状態は、放っておくと消耗がさらに深まります。構造の整理をLINEで送っています。",
    lineLabel: "今どの段階か知っておく(無料・読むだけOK)",
  },
}

const LINE_URL = "https://lin.ee/TZxEE00?type=impostor"

const FAQ_ITEMS = [
  {
    q: "見捨てられ不安とは何ですか?",
    a: "見捨てられ不安とは、親密な関係にある人から見捨てられる・拒絶されることへの強い恐れです。愛着理論では「不安型愛着」と関連しており、幼少期の養育体験の中で「自分は大切にされるか分からない」という体験が繰り返されることで形成されやすいとされています。",
  },
  {
    q: "見捨てられ不安はなぜ起きるのですか?",
    a: "幼少期に「安心できる愛着関係」が十分に形成されなかった場合に起きやすいとされています。「相手の反応が一定しない」「条件付きでしか愛してもらえなかった」などの体験が、「自分は見捨てられるかもしれない」という内的なパターン(ワーキングモデル)を作ります。大人になっても無意識にこのパターンが作動し、対人関係に影響します。",
  },
  {
    q: "見捨てられ不安と他人軸の関係は?",
    a: "深く関係しています。見捨てられ不安が強い人は「嫌われないために相手に合わせる」という行動をとりやすく、これが他人軸という状態につながります。「断ると去られる」という前提があると、自分の感覚より相手の反応を優先することが習慣化していきます。",
  },
  {
    q: "見捨てられ不安は変えられますか?",
    a: "変えられます。ただし「意識して変える」というよりも、「安全な関係の中で、見捨てられないという体験を積み重ねる」というプロセスが重要です。カウンセリングなど第三者との関係の中で、ワーキングモデルが少しずつ更新されていきます。",
  },
  {
    q: "「離れていかれる」感覚は、性格の問題ですか?",
    a: "性格そのものではなく、幼少期から形成された心理的なパターン(ワーキングモデル)によるものです。「自分が弱いから」「気にしすぎる性格だから」と捉える必要はありません。これは適応の結果として身についた反応であり、構造を理解することで変化していくことができます。",
  },
  {
    q: "このチェックは診断として使えますか?",
    a: "このチェックは医学的・心理学的な診断ではなく、今の状態に気づくための目安です。結果に関わらず、気になることがあれば専門家への相談をおすすめします。",
  },
]

export default function AbandonmentAnxietyCheck() {
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
      title="「離れていかれる」が止まらない方へ｜見捨てられ不安チェック15項目【公認心理師】"
      description="「嫌われたかも」「断ったら去っていく」が止まらない方へ。15項目で見捨てられ不安を可視化し、なぜ起きるのか・どう変えられるのかを公認心理師が解説します。3分・無料・登録不要。"
      url="https://www.ishizue-counseling.jp/articles/abandonment-anxiety-check"
      date="2026-05-19"
      tags={["boundary", "check"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「嫌われたかもしれない」「離れていかれるかも」——その感覚が止まらないとき、それは性格や弱さではなく、見捨てられ不安という心理構造から起きています。
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
        「嫌われたかもしれない」「離れていかれるかも」——その感覚が止まらないとき、
        それは<strong>性格や弱さではなく、見捨てられ不安という心理構造</strong>から起きています。
      </p>
      <p>
        この記事では、15項目のチェックで今の状態を可視化し、
        <strong>なぜそうなるのか・どうすれば変えられるのか</strong>を、公認心理師の臨床経験から整理します。
        意志で変えようとして変わらないのには理由があり、その構造を理解することが変化の入口になります。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・15項目の無料セルフチェック(約2分)</li>
          <li>・スコア別の状態解説と次のステップ</li>
          <li>・見捨てられ不安が起きる<strong>構造的な理由</strong>(ワーキングモデル・不安型愛着)</li>
          <li>・「なぜ止まらないのか」「どう変えられるのか」</li>
          <li>・よくある質問(性格との関係・他人軸との関係)</li>
        </ul>
      </nav>

      <p className="text-sm text-stone-600 leading-relaxed">
        以下の項目を読んで、当てはまると感じるものをタップしてください。直感で構いません。
      </p>

      <h2>見捨てられ不安セルフチェック(15項目・無料)</h2>

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

      {!result && (
        <div className="my-4 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-[1.8]">
          <p className="font-medium text-stone-700 mb-1">採点の目安</p>
          <p>・1〜4項目:比較的安定 ／ ・5〜9項目:傾向が出ている可能性 ／ ・10項目以上:強くなっている可能性</p>
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

          {/* 他人軸・境界線への連鎖 */}
          <div className="p-4 rounded-xl mb-3" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
            <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              見捨てられ不安が強い人の多くは、<strong>「他人軸」「境界線の薄さ」とも深く関係しています。</strong><br />
              「断ったら去られる」という前提が、自分より相手を優先するパターンを作ります。
            </p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/other-axis-check"
                className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">
                → 他人軸チェック(15項目)——あわせて確認する
              </Link>
              <Link to="/articles/boundary-check"
                className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">
                → 境界線チェック(15項目)——断れない状態を確認する
              </Link>
            </div>
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

          {/* 構造理解リンク */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 mb-4">
            <p className="text-xs font-medium text-stone-600 mb-2">「なぜこうなるのか」を構造から理解する</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/working-model" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → ワーキングモデルとは?見捨てられ不安の構造的な理由
              </Link>
              <Link to="/articles/anxious-attachment" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 不安型愛着とは｜断れない・見捨てられ不安の仕組み
              </Link>
              <Link to="/articles/other-axis-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 他人軸とは?抜け出せない理由と原因
              </Link>
              <Link to="/articles/low-self-esteem-why" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                → 自己肯定感が低い原因｜頑張っても変わらない本当の理由
              </Link>
            </div>
          </div>
        </div>
      )}

      <h2>見捨てられ不安とは——「去られる恐れ」の構造</h2>
      <p>
        見捨てられ不安とは、<strong>親密な関係にある人から見捨てられる・拒絶されることへの強い恐れ</strong>です。
        愛着理論では「不安型愛着」と関連しており、幼少期の体験の中で形成されるとされています。
      </p>
      <p>
        大人になっても、この前提が無意識に作動し続けます。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「断ったら去っていくかもしれない」→ 断れない</p>
        <p>・「嫌われたら終わり」→ 本音を言えない</p>
        <p>・「自分を出したら去られる」→ 常に合わせ続ける</p>
        <p>・「相手の反応の変化=危険信号」→ 些細な変化に敏感になる</p>
      </div>

      <h2>ワーキングモデルとの関係</h2>
      <p>
        見捨てられ不安の背景には、<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル(内的作業モデル)</Link>という構造があります。
        幼少期の愛着体験から作られた「自分と他者についての無意識の前提」です。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「自分は愛される価値がないかもしれない」</p>
        <p>・「他者はいつか去っていく」</p>
        <p>・「役に立てている間だけ、ここにいられる」</p>
      </div>
      <p>
        これらの前提が無意識に作動しているため、
        「もっと自分を大切に」と思っても行動が変わらないのは意志の問題ではありません。
        構造として理解することが、変化の入口になります。
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

      <ArticleFooterLinks type="self-function" exclude={["/articles/abandonment-anxiety-check"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。
      </div>
    </ArticleLayout>
  )
}

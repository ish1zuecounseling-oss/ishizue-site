import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta from "../../components/LineCta"

const checkItems = [
  "利用者の話を聞いても、以前のように心が動かない",
  "やりがいや「この仕事をしていて良かった」という感覚が薄れた",
  "感情が平坦で、喜びも悲しみも感じにくくなった",
  "仕事のことを考えると憂鬱だが、感情的にはあまり反応がない",
  "利用者が苦しんでいても、どこか他人事のように感じる",
  "以前は泣けていたのに、今は涙が出ない",
  "嬉しいことがあっても、喜びの感覚が薄い",
  "逆に、些細なことで急に感情が溢れることがある",
  "感情を感じようとしても、どこかふさがっている感じがする",
  "仕事終わりに「何も感じなかった」と気づくことが増えた",
  "人と関わることが億劫になってきた",
  "自分が冷たい人間になったように感じる",
  "以前は感じていた「助けたい」という気持ちが薄れた",
  "感情を感じることへの恐れや回避感がある",
  "自分の感情が正直わからなくなってきた",
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
    label: "感情的な消耗は比較的少ない状態です",
    color: "#8FAF9F",
    message: "今の段階では大きな感情麻痺は見られません。ただし支援職の感情消耗は気づかないまま進む特徴があります。今のうちに整えておくことが重要です。",
  },
  mid: {
    label: "感情消耗が蓄積している可能性があります",
    color: "#c4904a",
    message: "感情的エネルギーの消耗が進んでいる状態です。「まだ大丈夫」と感じていても、この段階で整えることが回復を早めます。",
  },
  high: {
    label: "感情麻痺が深まっている可能性があります",
    color: "#9f3a3a",
    message: "感情麻痺がかなり深まっている可能性があります。一人でのセルフケアだけでは限界がある段階です。外部サポートの活用が回復を早めます。",
  },
}

export default function HelperEmotionalNumbnessCheck() {
  const [checked, setChecked] = useState<boolean[]>(new Array(15).fill(false))

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const score = checked.filter(Boolean).length
  const level = getLevel(score)
  const result = level ? resultConfig[level] : null
  const barPct = Math.round((score / 15) * 100)

  return (
    <ArticleLayout
      title="感情麻痺チェック｜支援職のための15項目セルフチェック【3分】"
      description="利用者の話に心が動かない、感情が麻痺している——支援職に多い感情麻痺の15項目セルフチェック。共感疲労・二次受傷による感情消耗の深さを確認できます。"
      url="https://www.ishizue-counseling.jp/articles/helper-emotional-numbness-check"
      date="2026-05-03"
      tags={["compassion", "check", "burnout"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「利用者の話に以前のように心が動かない」「感情が麻痺している感じがする」——それは消耗のサインです。
      </p>

      <p>
        <strong>感情麻痺とは、感情的エネルギーが枯渇することで、喜び・悲しみ・共感などの感情反応が鈍くなった状態</strong>です。
        支援職・医療職・介護職に多く見られ、共感疲労・二次受傷の代表的な症状の一つです。
      </p>
      <p>
        「冷たい人間になった」「向いていない」のではなく、感情的エネルギーが限界を超えたときに起きる<strong>脳の防御反応</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな方へ</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・以前のように利用者の話に心が動かなくなった</li>
          <li>・感情が麻痺している・平坦になった感じがする</li>
          <li>・「冷たくなったのかも」と自分を責めている</li>
          <li>・やりがいが薄れて、仕事が義務のようになってきた</li>
        </ul>
      </div>

      <h2>感情麻痺セルフチェック（15項目）</h2>
      <p>過去2週間の状態に当てはまる項目を選んでください。</p>

      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-stone-500">選択した項目</span>
        <span className="text-lg font-medium text-stone-800">{score}<span className="text-sm text-stone-400"> / 15</span></span>
      </div>
      <div className="w-full bg-stone-100 rounded-full h-2 mb-4">
        <div className="h-2 rounded-full transition-all" style={{ width: `${barPct}%`, background: score <= 4 ? "#8FAF9F" : score <= 9 ? "#c4904a" : "#9f3a3a" }} />
      </div>

      <div className="space-y-2 mb-6">
        {checkItems.map((text, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${checked[i] ? "bg-stone-100 border-stone-300" : "bg-white border-stone-100 hover:border-stone-200"}`}
          >
            <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${checked[i] ? "bg-stone-700 border-stone-700" : "border-stone-300"}`}>
              {checked[i] && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {result && (
        <div className="p-4 rounded-xl border-2 mb-6" style={{ borderColor: result.color, background: `${result.color}10` }}>
          <p className="text-sm font-medium mb-1" style={{ color: result.color }}>{score}項目 / 15項目</p>
          <p className="text-base font-medium text-stone-800 mb-2">{result.label}</p>
          <p className="text-sm text-stone-600 leading-[1.9]">{result.message}</p>
        </div>
      )}

      <h2>チェック結果の目安</h2>
      <div className="card">
        <div className="space-y-3 text-sm">
          {[
            { range: "0〜4項目", label: "予防段階", desc: "大きな感情麻痺は見られません。今のうちに整えておくことが重要です。" },
            { range: "5〜9項目", label: "消耗蓄積中", desc: "感情消耗が進んでいる状態です。この段階で気づけるかどうかが回復の分かれ目です。" },
            { range: "10〜15項目", label: "麻痺が深い", desc: "感情麻痺がかなり深まっている可能性があります。一人でのセルフケアだけでは限界がある段階です。" },
          ].map(({ range, label, desc }) => (
            <div key={range} className="flex gap-3">
              <div className="flex-shrink-0 w-20">
                <p className="text-xs font-medium text-[#8FAF9F]">{range}</p>
                <p className="text-xs text-stone-400">{label}</p>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">※このチェックは医学的な診断ではありません。状態の目安として活用してください。</p>
      </div>

      <h2>感情麻痺からの回復のポイント</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">① 「感じなくていい」を許可する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「感じられない自分はおかしい」という自己批判をやめることが最初の一歩。感情麻痺は弱さではなく消耗への適応です。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">② 感情を管理しない時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">仕事を離れたら「感情規則のない時間」を意識的に作ることが感情的エネルギーの回復を助けます。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-1">③ 身体感覚から入る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">感情麻痺の状態では感情より先に身体感覚が回復しやすいです。温かいお風呂・好きな食べ物・自然の中での散歩から始めてください。</p>
      </div>

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-2">すぐに医療機関を優先すべきサイン</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・感情麻痺の状態が数ヶ月続いている</li>
          <li>・日常生活・仕事に大きな支障が出ている</li>
          <li>・死にたい・消えてしまいたいという気持ちがある</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">該当する場合は心療内科・精神科の受診を優先してください。</p>
      </div>

      <LineCta />

      <div className="my-6 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「感じられない自分がおかしい」と思わなくていいです。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">感情麻痺の状態を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">感情麻痺の背景にある消耗の構造を外から整理することが回復の入口になります。支援職として働く中での消耗を前提にした相談を行っています。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-emotional-numbness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情麻痺とは——原因と回復のアプローチ</Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目・3分）</Link>
          <Link to="/articles/secondary-trauma-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 二次受傷チェック（15項目）</Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労からの回復方法</Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と共感疲労・感情労働に関する心理学的知見をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

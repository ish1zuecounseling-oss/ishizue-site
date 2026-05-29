import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

const FAQ_ITEMS = [
  {
    q: "休職すれば回復しますか?",
    a: "休職は回復のための重要な選択肢ですが、休職するだけで自動的に回復するわけではありません。休職中に消耗の構造を整理し、適切なケアをすることが重要です。休職を検討している場合は、まず医療機関(心療内科・精神科)への相談が必要です。",
  },
  {
    q: "何ヶ月も続いているのに回復しません。どうすればいいですか?",
    a: "何ヶ月も続いている場合、一人でのセルフケアだけでは限界があるサインです。カウンセリングや医療機関への相談を検討してください。長期間続いていても回復は可能ですが、一人で抱え込むほど回復に時間がかかります。",
  },
  {
    q: "回復後また同じ仕事を続けられますか?",
    a: "回復後に同じ仕事を続けられるかどうかは、回復してから判断することをおすすめします。消耗している状態での判断は後悔につながりやすいです。回復後に改めて、環境・働き方・職種を含めて考えることが重要です。",
  },
];

export default function CompassionFatigueRecoveryPeriod() {
  return (
    <ArticleLayout
      title="共感疲労の回復期間｜どのくらいで回復するのか・回復を早める方法"
      description="共感疲労はどのくらいで回復するのか。回復期間の目安と段階、回復を早める方法・放置するリスクを支援職向けに解説します。「ただ休む」だけでは不十分な理由も。"
      url="https://www.ishizue-counseling.jp/articles/compassion-fatigue-recovery-period"
      date="2026-05-03"
      tags={["compassion", "burnout"]}
      faq={FAQ_ITEMS}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「いつになったら回復するのか」「このまま回復しないのか」——そんな不安を持つ方へ向けて整理します。
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

      <div className="card">
        <ul className="text-sm text-stone-700 space-y-2">
          <li>・共感疲労は適切な対処をすれば<strong>回復できます</strong></li>
          <li>・回復期間は消耗の深さと対処の内容によって大きく変わります</li>
          <li>・「ただ休む」だけでは回復が遅れることが多いです</li>
          <li>・<strong>早めに気づいて動くほど、回復期間は短くなります</strong></li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        共感疲労と近い概念である燃え尽き症候群の回復期間については<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link>もあわせて参考になります。両者の違いは<Link to="/articles/compassion-fatigue-vs-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とバーンアウトの違い</Link>で解説しています。
      </p>

      <h2>共感疲労の回復期間の目安</h2>
      <p>
        回復期間には個人差があります。以下はあくまでも目安です。
        消耗の深さ・職場環境・対処の内容によって大きく変わります。
      </p>

      <div className="card">
        <div className="space-y-4 text-sm">
          {[
            {
              stage: "軽度",
              period: "数週間〜数ヶ月",
              desc: "早期に気づいて休息と環境調整ができれば回復しやすい段階。支援現場では、気づいた段階で対処できた方ほど回復が早い傾向があります。",
              action: "セルフケア・休息・環境調整",
            },
            {
              stage: "中程度",
              period: "数ヶ月単位",
              desc: "「ただ休む」だけでは不十分で、消耗の構造を理解した対処が必要。一人での対処に限界を感じる場合は外部サポートを活用することで回復が早まります。",
              action: "構造理解＋カウンセリング・相談",
            },
            {
              stage: "重度",
              period: "長期にわたることも",
              desc: "専門家のサポートが必要な段階。早めに動くほど回復に必要な期間が短くなります。放置すると「消耗に慣れてしまう」状態が起きやすくなります。",
              action: "専門家サポート・必要に応じて医療機関",
            },
          ].map(({ stage, period, desc, action }) => (
            <div key={stage} className="flex gap-3">
              <div className="flex-shrink-0 w-14">
                <p className="text-xs font-medium text-[#8FAF9F]">{stage}</p>
              </div>
              <div>
                <p className="font-medium text-stone-700 mb-0.5">{period}</p>
                <p className="text-stone-500 text-xs leading-relaxed mb-1">{desc}</p>
                <p className="text-xs text-[#8FAF9F]">対処：{action}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          ※個人差があります。あくまで目安です。
        </p>
      </div>

      <h2>なぜ「ただ休む」だけでは回復しないのか</h2>
      <p>
        共感疲労による消耗は、身体的な疲れだけではありません。
        感情・神経系・自己認識のレベルで消耗が起きているため、
        身体を休めるだけでは回復しきれないことが多いです。
      </p>
      <p>
        特に「<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">眠れない</Link>」「<Link to="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事のことが頭から離れない</Link>」という状態が続いている場合、
        神経系が「緊張モード」で固まっており、
        身体を休めようとしても神経系がオフにならない状態です。
      </p>

      <LineCtaSmall />

      <h2>回復を早める5つのアプローチ</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗を認める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「まだ大丈夫」を手放すことが回復の出発点です。
          「自分は今消耗している」という認識が、自己ケアへの行動につながります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休息の「種類」を意識する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          身体的休息だけでなく、感情的休息（感情を管理しなくていい時間）・
          精神的休息（思考をいったん止める時間）・感覚的休息（スマートフォンからの離脱）が必要です。
          「休んでも回復しない」場合、どの種類が不足しているか確認してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 消耗の構造を理解する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜ自分は消耗しているのか」の構造を理解することが、回復を早めます。
          原因がわかると、何を変えればいいかが見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 一人での限界を知る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗が中程度以上の場合、一人でのセルフケアだけでは限界があります。
          カウンセリング・スーパービジョン・信頼できる人への相談が、回復を早めることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「回復しようとしない」時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「回復しなければ」という焦りそのものが、神経系の緊張を高めます。
          「何もしない5分」を作ることが、脳の回復機構を動かし始める最初のステップです。
        </p>
      </div>

      <h2>回復の段階：何が戻ってくるか</h2>
      <div className="card">
        <div className="space-y-3 text-sm">
          {[
            { step: "第1段階", desc: "身体的な疲れが少し軽くなる・眠れるようになる" },
            { step: "第2段階", desc: "仕事のことを考える時間が減る・休日に少し休まれる感覚が戻る" },
            { step: "第3段階", desc: "感情が少しずつ動き始める・やりがいを感じる瞬間が戻ってくる" },
            { step: "第4段階", desc: "以前のように関われる感覚が戻る・消耗の構造が見えるようになる" },
          ].map(({ step, desc }) => (
            <div key={step} className="flex gap-3">
              <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-16">{step}</span>
              <p className="text-stone-600">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          ※回復は直線的ではなく、良くなったり戻ったりを繰り返しながら進みます。
        </p>
      </div>

      <h2>よくある質問</h2>

      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">休職すれば回復しますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">休職は回復のための重要な選択肢ですが、休職するだけで自動的に回復するわけではありません。休職中に消耗の構造を整理し、適切なケアをすることが重要です。休職を検討している場合は、まず医療機関（心療内科・精神科）への相談が必要です。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">何ヶ月も続いているのに回復しません。どうすればいいですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">何ヶ月も続いている場合、一人でのセルフケアだけでは限界があるサインです。カウンセリングや医療機関への相談を検討してください。長期間続いていても回復は可能ですが、一人で抱え込むほど回復に時間がかかります。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">回復後また同じ仕事を続けられますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">回復後に同じ仕事を続けられるかどうかは、回復してから判断することをおすすめします。消耗している状態での判断は後悔につながりやすいです。回復後に改めて、環境・働き方・職種を含めて考えることが重要です。</div>
      </details>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">相談するか迷っている段階でも大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">回復の進め方を一緒に整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「何ヶ月も回復しない」「どこから手をつければいいかわからない」——
          消耗の構造を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労からの回復方法——回復の5つのケア</Link>
          <Link to="/articles/compassion-fatigue-natural-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労は自然に治るのか</Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目・3分）</Link>
          <Link to="/articles/compassion-fatigue-medical-support" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労は何科に相談すべきか</Link>
          <Link to="/articles/burnout-recovery-period" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 燃え尽き症候群はどれくらいで治る?（回復期間）</Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と共感疲労に関する心理学的知見をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function HelperAptitudeDoubt() {
  return (
    <ArticleLayout
      title="支援職に向いていないと感じる｜それは適性の問題ではなく消耗のサインです"
      description="「自分は支援職に向いていないのかも」と感じたとき、まず知っておいてほしいこと。向いていないと感じる状態の多くは、共感疲労・燃え尽きによる消耗から来ています。"
      url="https://www.ishizue-counseling.jp/articles/helper-aptitude-doubt"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「向いていないのかも」と感じているあなたへ。それは適性の問題ではないかもしれません。
      </p>

      <p>
        支援職として働く中で「自分はこの仕事に向いていないのかも」と感じることがあります。
        しかし、<strong>「向いていない」と感じる状態の多くは、適性の問題ではなく消耗のサイン</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな気持ちになっていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・利用者に共感できなくなってきた</li>
          <li>・以前は感じていたやりがいが薄れた</li>
          <li>・「自分には無理だ」という感覚が続いている</li>
          <li>・他の人は平気そうなのに、自分だけ消耗している気がする</li>
        </ul>
      </div>

      <h2>「向いていない」と感じるのはなぜか</h2>
      <p>
        支援職で「向いていない」と感じやすい理由には、大きく3つのパターンがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 共感疲労・燃え尽きによる消耗</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情的エネルギーが枯渇すると、以前できていた「共感する」「やりがいを感じる」「利用者に関心を持つ」ことが難しくなります。これは能力や適性の問題ではなく、<a href="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</a>という消耗の症状です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「他の人は平気そう」という比較</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場の同僚が平気そうに見えるのは、消耗を表に出さない文化があるからです。
          「弱音を言えない」「しんどいと言うと迷惑をかける」という規範が、
          消耗を一人で抱え込む構造を作ります。
          周囲も同じように消耗しているか、すでに感情を切り離している可能性があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 環境・職場の構造的な問題</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足・過重な業務・サポートのない職場環境では、
          どんなに適性のある人でも消耗します。
          「自分が弱い」のではなく、「その環境が消耗を生み出している」可能性を検討してください。
        </p>
      </div>

      <h2>「向いていない」と「限界」を区別する</h2>
      <p>
        重要なのは、<strong>「向いていないから辞める」と「消耗しているから休む・環境を変える」を区別すること</strong>です。
      </p>
      <p>
        消耗が深い状態での判断は、後悔につながりやすいです。
        まず消耗を回復させてから、続けるかどうかを判断する順番が重要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">消耗が原因の可能性が高い状態</p>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li>・以前は感じていたやりがいが、消耗してから薄れた</li>
          <li>・休日や長期休暇では少し楽になる感覚がある</li>
          <li>・特定の環境・職場が合わないと感じている</li>
          <li>・<a href="/articles/helper-cannot-sleep" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">眠れない</a>・<a href="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">頭から離れない</a>などの症状が重なっている</li>
        </ul>
      </div>

      <p className="text-sm text-stone-500">
        今の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>「向いていない」と感じたとき、まずやること</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗の深さを確認する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          まず「向いていない」という感覚が消耗から来ているのかを確認することが先決です。
          共感疲労チェックや二次受傷チェックで今の状態を確認してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「今の判断」を保留する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗が深い状態での「辞める・続ける」の判断は保留してください。
          回復してから判断しても遅くはありません。
          消耗した状態での判断は、本来の自分の意思とずれていることが多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 誰かに話す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「向いていないかも」という感覚を一人で抱えることが、消耗をさらに深めます。
          信頼できる人・カウンセラーに話すことで、
          「消耗なのか、本当に方向性が違うのか」が整理されやすくなります。
        </p>
      </div>

      <h2>本当に方向性が合わない場合もある</h2>
      <p>
        消耗を回復させた上でなお「この仕事・職場は自分には合わない」と感じる場合は、
        転職・異動・職種変更を検討することも選択肢です。
      </p>
      <p>
        支援職の中でも、職場・職種・対象者・働き方によって消耗の度合いは大きく変わります。
        「支援職全体が合わない」のではなく、「今の環境が合わない」というケースも多いです。
      </p>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「向いていないのか、消耗しているのか」——一緒に整理しませんか。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">判断の前に、状態を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          消耗している状態での判断は後悔につながりやすいです。
          まず「今の状態が何から来ているのか」を外から整理することが、
          判断の精度を上げます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目・3分）</Link>
          <Link to="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労とは——症状・原因・回復を総合解説</Link>
          <Link to="/articles/helper-emotional-numbness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情が麻痺している——支援職の感情麻痺と回復</Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労からの回復方法</Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

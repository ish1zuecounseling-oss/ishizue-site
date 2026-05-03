import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function HelperWantToQuit() {
  return (
    <ArticleLayout
      title="支援職を辞めたい｜消耗が限界のサイン・辞める前に整理したいこと"
      description="支援職を辞めたいと感じたとき、まず整理したいこと。「消耗しているから辞めたい」と「本当に方向性が合わない」の違い、今の状態で判断すべきでない理由を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-want-to-quit"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「辞めたい」という気持ちが出てきたとき、すぐに決断しなくていいです。まず整理しましょう。
      </p>

      <p>
        支援職として働く中で「もう辞めたい」という気持ちが出てくることがあります。
        その気持ちは大切なサインですが、<strong>消耗が深い状態での「辞める・続ける」の判断は、後悔につながりやすい</strong>です。
      </p>
      <p>
        まず「辞めたい理由が消耗から来ているのか、本当に方向性が合わないのか」を整理することが先決です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態になっていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「もう限界かもしれない」という感覚が続いている</li>
          <li>・以前は感じていたやりがいが消えた</li>
          <li>・休日も仕事のことが頭から離れず、休まらない</li>
          <li>・「辞めたい」と「辞められない」の間で消耗している</li>
        </ul>
      </div>

      <h2>「辞めたい」の背景を整理する</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">消耗が原因の可能性が高い場合</p>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>以前は感じていたやりがいが、消耗してから薄れた</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>長期休暇・有給を取ると少し楽になる感覚がある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span><Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</Link>・<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">眠れない</Link>・<Link to="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">頭から離れない</Link>などの症状が重なっている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「辞めたい」と感じ始めたのが、特定の出来事や環境変化の後から</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">→ 消耗を回復させてから判断することをおすすめします</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">本当に方向性が合わない可能性がある場合</p>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>十分に休息しても「やはり合わない」という感覚が続く</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>支援職を始めた当初から「向いていないかも」と感じていた</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>別の仕事・職種への具体的な興味が明確にある</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">→ 回復後に改めて、転職・異動・職種変更を検討する</p>
      </div>

      <p className="text-sm text-stone-500">
        今の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>消耗した状態で辞めるべきでない理由</h2>
      <p>
        共感疲労・燃え尽きの状態では、判断力・意欲・感情の処理機能すべてが低下しています。
        この状態での「辞める・続ける」の判断は、本来の自分の意思とずれていることが多いです。
      </p>
      <p>
        消耗した状態で辞めると「別の職場でも同じことが起きる」「辞めたことへの後悔が残る」というケースも少なくありません。
        <strong>まず消耗を回復させてから判断する</strong>という順番が、長期的に見て最善です。
      </p>

      <h2>「辞めたい」と感じたとき、今すぐできること</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 判断を保留する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「今すぐ辞める・続けるを決めない」という選択をしてください。消耗が深い状態での決断は急がなくていいです。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② まず消耗を整理する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「辞めたい」という気持ちの背景に何があるのかを整理することが先決です。消耗・職場環境・人間関係・仕事の内容——どれが主な原因かを明確にすることで、「辞める」以外の選択肢が見えてくることがあります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 誰かに話す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「辞めたい」という気持ちを一人で抱えることが、消耗をさらに深めます。信頼できる人・カウンセラーに話すことで、「消耗なのか、本当に方向性が違うのか」が整理されやすくなります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 休職・有給という選択肢を検討する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「辞める前に休む」という選択肢があります。有給・休職で一時的に距離を置き、消耗を回復させてから判断することで、より本来の自分の意思に近い決断ができます。休職が必要な場合は、まず医療機関（心療内科・精神科）への相談が必要です。</p>
      </div>

      <h2>辞めることが最善の場合もある</h2>
      <p>
        消耗を回復させた上でなお「この職場・仕事は自分には合わない」と感じる場合は、転職・異動・職種変更を検討することも選択肢です。
        支援職の中でも、職場・職種・対象者・働き方によって消耗の度合いは大きく変わります。
      </p>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">辞めるかどうかを決める前に、一度整理しませんか。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">「辞めたい」気持ちの背景を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「消耗しているのか、本当に方向性が合わないのか」——外から整理することで、判断の精度が上がります。支援職の消耗を前提にした相談を行っています。
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
          <Link to="/articles/helper-aptitude-doubt" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 支援職に向いていないと感じる——適性か消耗かを整理する</Link>
          <Link to="/articles/compassion-fatigue-recovery-period" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労の回復期間——どのくらいで回復するのか</Link>
          <Link to="/articles/compassion-fatigue-medical-support" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労は何科に相談すべきか</Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

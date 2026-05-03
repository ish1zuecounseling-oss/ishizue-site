import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function HelperCannotSwitchOff() {
  return (
    <ArticleLayout
      title="仕事と感情が切り離せない｜頭が切り替わらない支援職の原因と対処"
      description="仕事が終わっても気持ちが切り替わらない、頭の中が仕事モードのまま——支援職に多い「感情の切り離せなさ」の原因は神経系の慢性緊張と感情労働の蓄積です。対処法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-cannot-switch-off"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        仕事が終わっても仕事モードが抜けない——それは意志の問題ではなく、神経系の問題です。
      </p>
      <p>
        支援職では「仕事が終わっても頭が切り替わらない」「感情を仕事から分離できない」という状態が起きやすいです。
        <strong>これは「仕事に真剣すぎる」性格の問題ではなく、感情労働・共感疲労による神経系の慢性緊張から起きています。</strong>
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・仕事が終わっても「仕事モード」が抜けない</li>
          <li>・帰宅後も利用者のことを考え続けてしまう</li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className="underline underline-offset-2">休日になっても気持ちが切り替わらない</Link></li>
          <li>・「リラックスしよう」としても頭が働き続けている</li>
          <li>・感情と仕事の間に境界が感じられない</li>
        </ul>
      </div>

      <h2>なぜ仕事と感情が切り離せないのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 神経系が「緊張モード」で固まっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">慢性的なストレス状態では、自律神経系の交感神経（緊張モード）が優位なまま固まります。仕事が終わっても神経系がオフにならないため、脳が「まだ仕事中」と認識したまま過ごします。これは意志で変えられる問題ではなく、神経系の生理的な状態です。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「切り替えスイッチ」が設計されていない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">仕事とプライベートの切り替えを意識的に設計していないと、脳がどこで「仕事終わり」を判断すればいいかわからなくなります。在宅ワークや夜勤明けなど、物理的な境界が曖昧な環境ではさらに起きやすくなります。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情労働の「後処理」ができていない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">仕事中に抑圧した感情・未処理のまま残った感情が、静かになった時間（帰宅後・就寝前）に浮かび上がります。感情の「後処理」をする場所・時間がないと、頭からどかすことができません。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「もっとできたかも」という未完了感</p>
        <p className="text-sm text-stone-600 leading-[1.9]">支援職では「あの対応で良かったのか」「もっと何かできたのでは」という未完了感が残りやすいです。この未完了感が、脳を「問題解決モード」に置き続けます。</p>
      </div>

      <h2>切り離せないことで起きること</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>→ <Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2">眠れない・夢に仕事の場面が出る</Link></p>
        <p>→ <Link to="/articles/helper-cannot-rest-on-days-off" className="underline underline-offset-2">休日も休まらない</Link></p>
        <p>→ <Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2">感情が麻痺していく</Link></p>
        <p>→ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2">バーンアウトへ移行する</Link></p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働チェック</Link>
      </p>

      <LineCtaSmall />

      <h2>仕事と感情を切り離すための対処</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「切り替え儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">仕事を終えるときに「今日の仕事はここで終わり」を身体に伝える儀式を作ります。着替え・シャワー・深呼吸・決まった音楽——何でも構いません。繰り返すことで、脳が「この儀式の後は休む時間」と学習します。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「書き出す」ことで感情を外に出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">帰宅後・就寝前に「今日気になったこと・残った感情」を3行だけ書き出します。頭の中から外に出すことで、脳が「もう覚えていなくていい」と判断しやすくなります。書いた後は見返さなくてOKです。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「今日できたこと」に焦点を当てる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「もっとできたかも」という未完了感が頭を引き留めます。「今日自分がしたこと・関わったこと」を1つだけ書き出すことで、思考の焦点を「完了したこと」に移すことができます。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 身体感覚から切り替える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">頭で「切り替えよう」とするより、身体から入る方が効果的です。温かいお風呂・散歩・ストレッチなど、身体感覚に集中できる活動が神経系をリラックスモードに切り替えやすくします。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「考えていい時間」を決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「仕事のことを考えるのは夕食後の15分だけ」と決める「心配時間」の設定が有効なことがあります。それ以外の時間に浮かんできたら「その時間に考える」と意識的に先送りします。</p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「切り替えられない」状態を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">感情の切り離せなさを一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">「なぜ切り替えられないのか」——消耗の構造を外から整理することで、自分のパターンが見えてきます。支援職の消耗を前提にした相談を行っています。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/helper-cannot-switch-off"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

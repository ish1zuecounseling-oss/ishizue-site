import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function RecoveringFeeling() {
  return (
    <ArticleLayout
      title="感情・感覚を取り戻す方法｜「感じること」から始まる回復"
      description="感情が麻痺している・何も感じない・疲れているかどうかわからない——感情と感覚を取り戻すには「考える」より「感じる」から入ることが必要です。身体感覚から始まる回復方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/recovering-feeling"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        感情を「理解」しようとするより、先に「感じる」場所に戻ることが回復の入口です。
      </p>

      <p>
        「感情が動かない」「何も感じられない」「疲れているかどうかさえわからない」——
        <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が消耗した状態</Link>では、感情・感覚へのアクセスが閉じています。
      </p>
      <p>
        回復には<strong>「感情を理解しようとすること」より「感じる場所に戻ること」</strong>が先決です。
        思考から感覚へ——この方向転換が、回復の起点になります。
      </p>

      <h2>なぜ「考えることで」感情は戻らないのか</h2>
      <p>
        「もっと自己分析しよう」「なぜ感情がないのかを考えよう」——
        これは<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>が深まった状態でさらに思考系を使うことになります。
        感情は思考から生まれるのではなく、<strong>身体感覚・安全感・表現</strong>から生まれます。
        <Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは「感覚」</Link>——
        まず身体から入ることが回復を早めます。
      </p>

      <h2>段階的な感情・感覚の回復</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">第1段階：身体感覚から始める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情より先に身体感覚が回復しやすいです。
          「今日は疲れている」「お風呂が気持ちよかった」「この音楽が心地よい」「この食べ物が好き」——
          小さな身体感覚・快不快を拾うことから始めます。
          「正しく感じる必要はない」。気づくだけでいいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">第2段階：感情規則のない時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事中は常に感情を管理しています。
          「泣いても・笑っても・何も感じなくてもいい」という時間・場所を意識的に作ることが、
          感情が自然に動くスペースを回復させます。
          「感情を管理しなくていい時間」がないと、感情系は常に抑制モードのままです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">第3段階：小さな感情を言語化する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「少し嬉しかった」「あの話が少しつらかった」「今日はなんとなく重い」——
          大きな感情ではなく、小さな感情に名前をつける習慣が感情系を活性化させます。
          1日3行でいいので、気づいた感覚・感情を書き出すことが有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">第4段階：安全な場所で表現する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情は<Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全な場所</Link>で表現されることで「解凍」されます。
          「まとまっていなくていい」「正しく話せなくていい」——
          信頼できる相手・カウンセラーとの対話が、長期間抑圧してきた感情を少しずつ外に出すことを助けます。
        </p>
      </div>

      <h2>感情・感覚を回復させる具体的な活動</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">身体系</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・ぬるめのお風呂にゆっくり入る（温度・感触を感じる）</li>
          <li>・散歩しながら五感に意識を向ける（風・音・匂い）</li>
          <li>・好きな食べ物をゆっくり食べる（味・食感を感じる）</li>
          <li>・動物に触れる（毛並みの感触・温かさ）</li>
          <li>・自然の中でぼーっとする（何も考えない時間）</li>
        </ul>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">感情系</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・感情日記（1日3行でいい・正しく書かなくていい）</li>
          <li>・泣ける映画・音楽を意図的に使う</li>
          <li>・「今日感じた小さなこと」を誰かに話す</li>
          <li>・「感情規則のない時間」を一人で過ごす</li>
        </ul>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">神経系</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・腹式呼吸（ゆっくり息を吐くことを意識する）</li>
          <li>・マインドフルネス（考えが来ても呼吸に戻る繰り返し）</li>
          <li>・スマートフォンを置く時間（感覚的入力を減らす）</li>
          <li>・日光を浴びる（身体時計と神経系を整える）</li>
        </ul>
      </div>

      <h2>回復には時間がかかることを知っておく</h2>
      <p>
        感情・感覚の回復は一夜では起きません。
        「今日少し感じられた気がする」という小さな変化を積み重ねることが回復です。
        焦って「もっと感じなければ」と思考で追いかけることは、また感覚を遠ざけます。
      </p>
      <p>
        <strong>「今日は昨日より少し感じられた」——それが回復です。</strong>
      </p>

      <LineCtaSmall />

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「感情・感覚を取り戻したい」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">感情の回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「何も感じない」「どこから始めればいいかわからない」——感情が閉じた背景を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/recovering-feeling"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

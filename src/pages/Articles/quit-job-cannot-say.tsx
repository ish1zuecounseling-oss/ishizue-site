import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "辞めたいと言えないのは甘えですか？",
    a: "甘えではありません。「言えない」状態には他人軸・境界線の消耗・見捨てられ不安という構造的な理由があります。意志の問題ではなく、消耗による状態の問題です。",
  },
  {
    q: "迷惑をかけてしまうのが怖くて言えません",
    a: "その感覚は自然です。ただし「迷惑をかけてはいけない」という感覚が自分の限界を超えさせている場合、長期的にはより大きな問題につながります。まず自分の消耗の深さを把握することが先決です。",
  },
  {
    q: "引き止められるのが怖いのですが",
    a: "引き止めへの恐れは「断ることへの恐れ」と同じ構造です。境界線が薄くなっているとき、相手の反応が自分の行動を決めてしまいます。整理された状態で臨むことで、現実的な対応ができるようになります。",
  },
]

export default function QuitJobCannotSay() {
  return (
    <ArticleLayout
      title="仕事を辞めたいのに言えない｜言えない理由の構造と安全に抜けるための考え方"
      description="「辞めたいのに言えない」「迷惑をかけるのが怖い」「引き止められそうで怖い」——言えない状態は意志の弱さではなく他人軸・境界線・見捨てられ不安という構造から起きています。"
      url="https://www.ishizue-counseling.jp/articles/quit-job-cannot-say"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「言えない」のは、あなたが弱いからではありません。構造として「言えなくなる状態」があります。
      </p>

      <p>
        「もう限界なのに辞めたいと言えない」「迷惑をかける気がして動けない」「引き止められるのが怖い」——
        こうした状態は、性格の問題ではなく
        <strong>構造として「言えなくなる」状態に入っている</strong>ことが多いです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな思考が続いていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・今辞めたら迷惑がかかる</li>
          <li>・自分が抜けたら回らなくなる</li>
          <li>・言い出したら関係が壊れる</li>
          <li>・引き止められたら断れない</li>
          <li>・もう少し頑張ればなんとかなる</li>
        </ul>
      </div>

      <h2>なぜ「辞めたい」と言えなくなるのか——3つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 他人軸——相手の反応が判断基準になっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>が強い状態では、
          「自分がどうしたいか」より「相手がどう思うか」が優先されます。
          「迷惑をかける」「失望させる」という相手の感情への配慮が、
          自分の行動を決めてしまいます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 境界線の消耗——断ることが難しくなっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線</Link>が薄くなっていると、
          「断る」「離れる」という行動自体が心理的に危険に感じられます。
          「引き止められたら断れない」という感覚はここから来ています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 見捨てられ不安——関係が壊れることへの恐れ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めると嫌われる」「言ったら関係が終わる」という<Link to="/articles/anxious-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">見捨てられ不安</Link>が強いと、
          「辞める」という行動は「関係を失うこと」と同義になります。
          この恐れが言い出すことを妨げます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 役割依存——「いなければ回らない」という感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分がいなければ困る人がいる」という責任感が強いとき、
          <Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>・<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割依存</Link>が「辞める」という選択を妨げます。
          使命感と役割依存は紙一重のところにあります。
        </p>
      </div>

      <h2>「言えないまま続ける」とどうなるか</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>→ <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2">脳疲労</Link>が蓄積し判断力がさらに落ちる</p>
        <p>→ <Link to="/articles/self-function-decline" className="underline underline-offset-2">自己機能が低下</Link>し「何がしたいかわからない」状態になる</p>
        <p>→ <Link to="/articles/quit-job-no-next" className="underline underline-offset-2">辞めたいけど動けない</Link>状態が深まる</p>
        <p>→ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2">バーンアウト</Link>へ移行する</p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>
      </p>

      <LineCtaSmall />

      <h2>「どう言うか」より「どう抜けるか」</h2>
      <p>
        多くの人が「どう言えばいいか」に意識を向けますが、
        本質は<strong>「どう安全に抜けるか」</strong>です。
      </p>

      <div className="card space-y-2 text-sm text-stone-600">
        <p>① 先に外で状況を整理する（相談・思考整理）</p>
        <p>② 自分の限界ラインを明確にする</p>
        <p>③ 感情ではなく事実ベースで伝える準備をする</p>
        <p>④ 「断られても大丈夫」という練習を積む</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">それでも動けないときは</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「気合で言う」は消耗が深い状態では機能しません。
          まずは<Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全に整理できる場所</Link>を持つことが先決です。
          <Link to="/articles/recovering-feeling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感覚・感情を取り戻す</Link>プロセスを通して、
          判断力そのものを回復させることが現実的なアプローチです。
        </p>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「辞めたいのに言えない」を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          なぜ言えないのか、どこから動けばいいのかを外から整理することで、
          無理のない抜け方が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/quit-job-cannot-say"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "次が決まっていなくても辞めていいのでしょうか？",
    a: "状況によります。心身の消耗が強い場合は、次を決める前に回復を優先することが必要です。一方で、判断が難しいときは一度整理することで選択肢が見えやすくなります。",
  },
  {
    q: "辞めたら後悔しそうで怖いです",
    a: "その不安は自然なものです。大切なのは「勢いで決める」ことではなく、「整理された状態で判断する」ことです。そのために一度立ち止まることが有効です。",
  },
  {
    q: "この状態で転職活動をしても大丈夫ですか？",
    a: "消耗が強い状態では判断力やエネルギーが落ちているため、無理に進めるとミスマッチが起きやすくなります。まずは状態を整えることが結果的に近道になることもあります。",
  },
]

export default function QuitJobNoNext() {
  return (
    <ArticleLayout
      title="仕事を辞めたいけど次がない｜不安で動けないときの考え方と整理の仕方"
      description="「辞めたいけど次がないと不安で動けない」——これは意志の弱さではなく消耗による判断力低下のサインです。動けなくなる理由・今優先すべきこと・整理の方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/quit-job-no-next"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「辞めたいのに動けない」とき、問題は意志ではなく"状態"かもしれません。
      </p>

      <p>
        仕事を辞めたい。でも、次がない。
        不安で動けないまま、今の仕事を続けている——
      </p>
      <p>
        その状態が続いているとしたら、それは
        <strong>判断できなくなるほど消耗しているサイン</strong>かもしれません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・辞めたい気持ちはあるが、次が決まらないと怖くて動けない</li>
          <li>・考え続けているのに結論が出ない</li>
          <li>・消耗しているのに「もう少し頑張れば」と思い続けている</li>
          <li>・不安で転職活動に踏み出せない</li>
          <li>・誰にも相談できず一人で抱えている</li>
        </ul>
      </div>

      <h2>なぜ「次がない」と動けなくなるのか</h2>
      <p>
        「次がない不安」が強くなると、人は安全な選択を優先しやすくなります。
        その結果、本当は限界に近い状態でも「今のまま」を選び続けてしまいます。
      </p>
      <p>
        特に次のような状態があると、判断はさらに難しくなります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2">脳疲労</Link>——考えること自体が消耗する</p>
        <p>・<Link to="/articles/communication-fatigue" className="underline underline-offset-2">コミュニケーション疲れ</Link>——人と話すだけで消耗する</p>
        <p>・<Link to="/articles/acting-fatigue" className="underline underline-offset-2">仕事で演じ続けている</Link>——本音と行動が乖離している</p>
        <p>・<Link to="/articles/feeling-nothing" className="underline underline-offset-2">何も感じない・空虚感</Link>——感情でも判断しにくい</p>
      </div>

      <h2>「動けない」のは弱さではない</h2>
      <p>
        動けないとき、多くの人は「自分が弱いからだ」と考えてしまいます。
        しかし実際には、<strong>消耗によって判断力とエネルギーが落ちている状態</strong>です。
      </p>
      <p>
        この状態では、正しい選択をしようとするほど余計に動けなくなります。
        <Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>が続くのも、
        脳疲労が深まるのも、「意志が弱い」からではありません。
      </p>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaSmall />

      <h2>今すぐ優先すべきこと</h2>
      <p>
        この段階で大切なのは、「辞めるかどうか」を無理に決めることではありません。
        まずは<strong>状態を整えること</strong>が先決です。
      </p>

      <div className="card space-y-2 text-sm text-stone-600">
        <p>① 今どのくらい消耗しているかを把握する</p>
        <p>② 一人で考え続けるループから離れる</p>
        <p>③ 「辞める・続ける」以外の選択肢（休職・配置転換等）を整理する</p>
        <p>④ 状態が整ってから、判断する</p>
      </div>

      <p>
        状態が整うと、「次がない不安」だけで判断していた状態から離れ、
        より現実的な選択肢が見えやすくなります。
      </p>

      <h2>今すぐ休むことを優先したほうがいいサイン</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・睡眠が著しく乱れている</p>
        <p>・日常生活に支障が出ている</p>
        <p>・強い無気力・身体症状が続いている</p>
        <p>・「消えてしまいたい」気持ちがある</p>
      </div>
      <p className="text-xs text-stone-400">
        ※このような状態が続く場合は、カウンセリングと合わせて医療機関への相談を優先してください。
      </p>

      <h2>整理に役立つこと</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">外から整理する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一人で考え続けているとループが深まります。
          <Link to="/articles/quit-job-counseling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">カウンセリング</Link>では
          「辞める・続ける」を決めるのではなく、状況と感情を分けて整理することができます。
          外から整理されることで、「次がない不安」が唯一の判断基準でなくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">感覚を回復させる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗が深い状態では、判断より先に<Link to="/articles/recovering-feeling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感覚の回復</Link>が必要なことがあります。
          「何をしたいか」「どうありたいか」は、消耗が緩んだときに初めて見えてくることが多いです。
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
          「辞めたいけど動けない」を整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「次がない不安」と「今の消耗」を分けて整理することで、
          次に何をするかが見えてきます。答えを急かすことなく、一緒に整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/quit-job-no-next"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

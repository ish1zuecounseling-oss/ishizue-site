import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function SelfComplexity() {
  return (
    <ArticleLayout
      title="自己複雑性とは何か｜役割が多すぎる人が強い理由と消耗リスク"
      description="自己複雑性とは、自己概念が複数の独立した側面を持つ程度のことです。なぜ役割が多い人はメンタルが安定しやすいのか、逆に消耗しやすい構造とは何か、自己機能との関係を解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-complexity"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自己複雑性が高い人はストレスに強い」——この概念が自己機能・役割依存と深くつながっています。
      </p>

      <p>
        <strong>自己複雑性（Self-complexity）とは、Patricia Linvilleが提唱した概念で、「自己概念が複数の独立した側面を持つ程度」</strong>を指します。
        「支援者としての自分」「親としての自分」「趣味人としての自分」など、
        複数の独立した自己側面を持っている状態が「自己複雑性が高い」状態です。
      </p>

      <h2>自己複雑性が高いとなぜ強いのか</h2>
      <p>
        Linvilleの研究では、<strong>自己複雑性が高い人ほど、一つの失敗や否定的な出来事がメンタルに与えるダメージが小さい</strong>とされています。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">例：仕事で失敗した場合</p>
        <div className="space-y-2 text-sm">
          <div>
            <p className="text-stone-500 text-xs mb-1">自己複雑性が低い場合</p>
            <p className="text-stone-600">「仕事でダメな自分＝全部ダメな自分」→ 全体的な自己価値が揺らぐ</p>
          </div>
          <div className="border-t border-stone-100 pt-2">
            <p className="text-stone-500 text-xs mb-1">自己複雑性が高い場合</p>
            <p className="text-stone-600">「仕事でダメだったが、家庭人・趣味人としての自分は別」→ ダメージが一側面に留まる</p>
          </div>
        </div>
      </div>
      <p>
        複数の独立した「自分」があることで、一つが揺らいでも他が支えになります。これをバッファリング効果と呼びます。
      </p>

      <h2>支援職に「自己複雑性の低下」が起きやすい理由</h2>
      <p>
        支援職・対人援助職では、「支援者としての自分」が前面に出すぎることで、
        他の自己側面が後退しやすくなります。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">「支援者」側面への過剰集中</p>
          <p className="text-stone-600 leading-[1.9]">仕事・役割・使命感が全ての自己概念を占めると、支援がうまくいかないときに「全部ダメな自分」という感覚が生まれやすくなります。<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割を降りるのが怖い</Link>状態と深く関連します。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">「支援者以外の自分」が薄くなる</p>
          <p className="text-stone-600 leading-[1.9]">趣味・休暇・人間関係など「支援者役割の外」の自己側面が消耗・後退することで、失敗や批判への心理的バッファが失われていきます。</p>
        </div>
      </div>

      <h2>自己複雑性と自己機能の関係</h2>
      <p>
        自己複雑性の低下は、<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>の重要なサインの一つです。
        「感じる自分・望む自分・休む自分」という多様な側面が失われると、
        「役割としての自分だけが残る」状態になります。
      </p>
      <p>
        逆に、<Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が回復</Link>するにつれて、
        「支援者以外の自分」も自然に戻ってきます。
        身体感覚・感情・小さな好みを取り戻す過程で、自己複雑性も高まっていきます。
      </p>

      <LineCtaSmall />

      <h2>自己複雑性を高めるために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「役割外の自分」を意識的に育てる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">趣味・創作・自然・スポーツ・学びなど、「支援者」としての評価に関係しない活動が自己複雑性を高めます。「役に立たなくてもいい時間」がバッファとして機能します。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 失敗を「一側面の出来事」として扱う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「今日の支援がうまくいかなかった」は「支援者としての自分の一場面」であり、「全体としての自分の価値」ではありません。<Link to="/articles/helper-self-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自責のループ</Link>から抜け出すためにも、この視点が重要です。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分の複数の側面を言語化する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「自分には○○な側面もある」を書き出す練習が、自己複雑性の認識を高めます。「支援者」「家族」「趣味人」「感じる人間」など、役割と感覚の両面を含めることが重要です。</p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「役割以外の自分がわからない」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己複雑性と自己機能を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">「支援者以外の自分がわからない」——自己複雑性の消耗と自己機能の回復を外から整理することで、バッファとなる自己側面を取り戻す入口が見えてきます。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-complexity"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        参考：Linville, P. W. (1987). Self-complexity as a cognitive buffer against stress-related illness and depression. Journal of Personality and Social Psychology, 52(4), 663–676. 本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

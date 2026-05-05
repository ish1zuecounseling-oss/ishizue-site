import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function SelfValueUnknown() {
  return (
    <ArticleLayout
      title="自分の価値がわからない｜「自分に価値があるのか」という問いの正体"
      description="「自分には価値があるのかわからない」という感覚はなぜ起きるのか。ワーキングモデル・条件付き自己価値・自己機能消耗の関係と、自己価値を取り戻すための視点を解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-value-unknown"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自分には価値があるのか」という問いは、答えより先に問い自体を理解することが重要です。
      </p>

      <p>
        「自分に価値があるのかわからない」「役に立てていないと自分がいる意味がわからない」——
        これは心が弱いからではありません。
        <strong>「自己価値がわからない」には、形成されてきた構造があります。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・褒められても「本当はそうではない」と思ってしまう</li>
          <li>・役に立てていないとき、自分の存在意義を感じられない</li>
          <li>・「自分がいてもいなくても同じ」という感覚がある</li>
          <li>・頑張り続けないと「自分には価値がない」気がする</li>
          <li>・「自分が好き」かどうかよくわからない</li>
        </ul>
      </div>

      <h2>「自分の価値がわからない」はなぜ起きるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 条件付き自己価値の形成</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「○○ができれば価値がある」「○○を達成すれば認められる」——
          成果・役割・他者の評価に自己価値が紐づいている状態を「条件付き自己価値」と言います。
          条件が満たされているときだけ価値を感じられ、満たされないと価値が消えます。
          これは<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>の「自己モデル」と深く関連します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割依存——役割なしの自分が空虚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者としての自分」「頑張っている自分」だけが自己概念を占めていると、
          役割から降りたとき「何もない自分」が残ります。
          <Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割を降りるのが怖い</Link>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性の低下</Link>と深く関連します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自己機能の消耗——自己感覚へのアクセス低下</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>が消耗すると、「自分はどうか」という内側への問いへのアクセスが薄れます。
          「自分の価値がわからない」状態は、自己感覚そのものが消耗した状態のサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ <Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>——外側の評価だけが頼り</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          内側の自己評価が薄れると、外側の評価・反応だけが自己価値の手がかりになります。
          褒められると価値を感じ、批判されると無価値に感じる——
          この不安定さが「自分の価値がわからない」という感覚を生みます。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        自己機能の状態→ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link>
      </p>

      <LineCtaSmall />

      <h2>自己価値を取り戻すための視点</h2>
      <p>
        重要なのは、<strong>自己価値は「達成すること」で得るものではなく、「存在すること」に根ざしているもの</strong>という認識の転換です。
        ただしこれは頭で理解するより、体験を通じて少しずつ育つものです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「何もしていない自分」と一緒にいる練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          役割・成果・頑張りのない時間に、「今ここにいる自分」を感じる時間が自己価値の感覚を育てます。
          最初は不安・空虚感が出ます。それ自体が「条件付き自己価値」のサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 身体感覚・感情から「自分」を感じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分の価値を考える」より「自分の感覚を感じる」方が、自己感覚の回復を助けます。
          <Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは感覚</Link>——身体感覚から入ることが先決です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「弱さを出しても受け入れてもらえる」体験</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          条件付き自己価値の更新には「条件なしに受け入れてもらえる」体験が必要です。
          安全な関係の中で弱さ・失敗・本音を出し、それでも関係が続く体験が、
          無条件の自己価値の感覚を少しずつ育てます。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「自分に価値があるのかわからない」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己価値の構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ自分に価値を感じられないのか」——条件付き自己価値の背景を外から整理することで、
          回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-value-unknown"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

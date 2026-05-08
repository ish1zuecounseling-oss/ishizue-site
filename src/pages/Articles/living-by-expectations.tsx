import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function LivingByExpectations() {
  return (
    <ArticleLayout
      title="他人の期待で生きてしまう｜期待に応えることで消耗する構造と自分を取り戻す方法"
      description="「期待に応えなければ価値がない」——この感覚はなぜ生まれるのか。見捨てられ不安・条件付き自己価値・ワーキングモデルとの関係と回復の方向を解説します。"
      url="https://www.ishizue-counseling.jp/articles/living-by-expectations"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「期待に応え続けること」が自分の価値を守る方法になっていませんか。
      </p>

      <p>
        「期待に応えなければ認めてもらえない」「失望させたら関係が終わる」——
        これが長年の行動原理になっていると、
        <strong>「期待に応えることで価値を維持してきた人」</strong>というパターンが形成されます。
      </p>
      <p>
        このパターンは<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>とも関連しますが、
        「期待に応える」はより特定の構造を持っています——
        <strong>「期待に応えることが、自己価値の唯一の根拠になっている」</strong>という状態です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんなパターンはありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「期待に応えられた」ときだけ自分に価値を感じる</li>
          <li>・「期待に応えられなかった」とき、自分全体がダメに感じられる</li>
          <li>・「もっと期待に応えなければ」という焦りが常にある</li>
          <li>・期待されることが嬉しい反面、重くなる感覚がある</li>
          <li>・「期待しないでほしい」と思うことがあるが、言えない</li>
        </ul>
      </div>

      <h2>なぜ「期待に応えること」が価値の基準になるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 幼少期から「期待に応えること」で居場所を確保してきた</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いい子でいると褒められた」「期待に応えると愛された」「失望させると関係が冷えた」——
          このような体験が積み重なると、「期待に応えること＝安全・価値・受け入れてもらえること」という
          <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>が形成されます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「期待を裏切る＝見捨てられる」という恐れ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/anxious-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">見捨てられ不安</Link>が強いと、期待を裏切ることが「関係を失うこと」に感じられます。
          この恐れが「どんな期待にも応え続けなければ」という動機になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「期待に応えている自分」以外の価値基準がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>が低下し、「期待に応える自分」だけが自己概念を占めていると、
          期待に応えられないときに「全部ダメな自分」という感覚になります。
          <Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない</Link>状態と深く関連します。
        </p>
      </div>

      <h2>「期待で動く」ことの消耗</h2>
      <p>
        「期待に応えること」は持続可能なように見えますが、構造的に消耗します。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <div className="flex gap-3">
          <span className="text-stone-400 flex-shrink-0">→</span>
          <p>期待が増えるほど、応え続けなければならない量が増える</p>
        </div>
        <div className="flex gap-3">
          <span className="text-stone-400 flex-shrink-0">→</span>
          <p>「期待に応えられた」達成感より「まだ足りない」という感覚の方が大きい</p>
        </div>
        <div className="flex gap-3">
          <span className="text-stone-400 flex-shrink-0">→</span>
          <p>「自分は何がしたいか」「自分はどうしたいか」がわからなくなる</p>
        </div>
        <div className="flex gap-3">
          <span className="text-stone-400 flex-shrink-0">→</span>
          <p><Link to="/articles/helper-burnout-check" className="underline underline-offset-2">バーンアウト</Link>後に「自分には何も残っていない」という空虚感になりやすい</p>
        </div>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaSmall />

      <h2>期待から自分を取り戻すために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「期待に応えていない自分」を観察する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          意図的に「期待に応えない小さな場面」を作り、何が起きるかを観察します。
          「関係が壊れる」「嫌われる」という予測と、実際に起きることの差を確認することが、
          ワーキングモデルの更新につながります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「期待と関係なく存在できる場所」を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          誰かの期待を意識しなくていい時間・場所・関係を意識的に作ることが、
          「期待以外の自分」を感じる機会になります。
          趣味・自然・評価のない対話がこの役割を果たします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「自分の欲求・好み」を小さく拾う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「期待に応えること」を動機にしてきた人は、自分の欲求・好みへのアクセスが薄れています。
          「今日これが少し気持ちよかった」「これが好き・嫌い」という小さな感覚を拾う習慣が、
          <Link to="/articles/what-do-i-want" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「自分が何をしたいか」</Link>を取り戻す入口になります。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「期待に応え続けることに疲れた」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">期待と自己価値の絡まりを一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ期待に応え続けなければならないのか」——その背景にある構造を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/living-by-expectations"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自己肯定感が低いのはなぜですか？",
    a: "自己肯定感の低さは、意志や努力の問題ではなく、「自分の価値の基準が外側（他者の評価）にある」という構造から来ています。この構造の背景には、幼少期から形成されたワーキングモデル（内的作業モデル）があります。",
  },
  {
    q: "ポジティブ思考を試しても変わらないのはなぜですか？",
    a: "ポジティブ思考は「表面の思考」を変えようとしますが、「自分の価値は他者の評価で決まる」という深層の前提は変わりません。前提が変わらない限り、一時的に気持ちが上向いても元の状態に戻ります。",
  },
  {
    q: "自己肯定感は上げられますか？",
    a: "「上げよう」とするより「前提を変える」方向が現実的です。自己肯定感は努力で上げるものではなく、構造（ワーキングモデル・他人軸）が変わると結果として安定してきます。",
  },
  {
    q: "自己肯定感の低さと他人軸はどう関係しますか？",
    a: "他人軸が強いと、自己評価の基準が「相手の反応」になります。褒められれば上がり、批判されれば下がる——この不安定さが「自己肯定感が低い」という体験です。他人軸の構造を理解することが先決です。",
  },
]

export default function LowSelfEsteemWhy() {
  return (
    <ArticleLayout
      title="自己肯定感が低い原因｜頑張っても変わらない本当の理由（構造から解説）"
      description="「自己肯定感を上げよう」と本を読んでも、考え方を変えようとしても変わらない——それは努力が足りないからではなく、構造がそのままだからです。原因をワーキングモデルと他人軸から解説します。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/low-self-esteem-why"
      date="2026-05-13"
      tags={["boundary", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自己肯定感を上げよう」と頑張っても変わらないのは、努力が足りないからではありません。構造がそのままだからです。
      </p>

      <p>
        「自己肯定感を上げよう」と思って、本を読んだり、考え方を変えようとしたりしたことはありませんか。
      </p>
      <p>
        それでも——なぜか、また同じところに戻ってしまう。
        「やっぱり自分はダメなんじゃないか」と感じてしまう。
      </p>
      <p>
        もしそうだとしたら、それはあなたの努力が足りないからではありません。
        <strong>変わらないのは、構造がそのままだからです。</strong>
      </p>

      <h2>自己肯定感が低い人に起きていること</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・頑張っても「まだ足りない」と感じ続ける</p>
        <p>・褒められても素直に受け取れず、すぐ否定したくなる</p>
        <p>・他人の評価で気分が大きく上下する</p>
        <p>・失敗すると「やっぱり自分はダメだ」と全否定になる</p>
        <p>・「できる自分」でいないと不安になる</p>
      </div>
      <p>
        これらのパターンに心当たりがある場合、
        自己肯定感の問題というより<strong>自己評価の基準がどこにあるか</strong>という構造の問題かもしれません。
      </p>

      <h2>なぜ「上げようとしても」変わらないのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">方法が間違っているわけではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ポジティブ思考・自己受容・小さな成功体験の積み重ね——これらは間違いではありません。
          でも多くの人が「一時的に変わるのにすぐ戻る」を繰り返します。
        </p>
      </div>

      <div className="card mt-3">
        <p className="text-sm font-medium text-stone-700 mb-2">前提が変わっていない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          表面の思考を変えようとしても、<strong>「自分の価値の基準」が外にあるまま</strong>だと効果が続きません。
        </p>
        <ul className="text-sm text-stone-600 space-y-1 mt-2">
          <li>・他人にどう見られているか</li>
          <li>・ちゃんとできているか</li>
          <li>・役に立っているか</li>
        </ul>
        <p className="text-sm text-stone-600 mt-2 leading-[1.9]">
          この基準が外側にある限り、自己肯定感は相手の反応次第で上下し続けます。
        </p>
      </div>

      <h2>その正体は「他人軸」です</h2>
      <p>
        自己評価の基準が外側にある状態を、<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>と呼びます。
      </p>
      <p>
        他人軸とは「自分がどう感じるか」より「相手がどう思うか」が判断基準の中心になっている状態です。
        他人軸が強いと、自己肯定感は「外から与えられるもの」になり、
        自分の内側から安定してくることがありません。
      </p>
      <div className="card text-sm text-stone-600 leading-[1.9]">
        他人軸の詳しい説明→ <Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは？抜け出せない理由と原因</Link>
      </div>

      <h2>さらに深い原因は「ワーキングモデル」</h2>
      <p>
        他人軸の背景には、<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル（内的作業モデル）</Link>という構造があります。
      </p>
      <p>
        ワーキングモデルとは、幼少期の養育者との関係から形成される「人との関係の前提」です。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「自分は価値のある存在か？」</p>
        <p>・「人は信頼できるか？」</p>
        <p>・「役に立てないと受け入れてもらえないか？」</p>
      </div>
      <p>
        これらの前提が<strong>無意識のレベルで作動し続けている</strong>ため、
        意識的に考え方を変えようとしても、深層の前提が引き戻します。
        これが「頑張っても変わらない」の正体です。
      </p>

      <h2>だから努力しても戻ってしまう</h2>
      <p>
        表面：「自分を認めよう」「ポジティブに考えよう」と思考を変える<br />
        深層：「役に立てない自分には価値がない」という前提は変わっていない
      </p>
      <p>
        表面と深層がズレたまま努力を続けると、一時的に変わっても必ず戻ります。
        前提が強すぎて、元に引き戻されるからです。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 font-medium leading-[1.9]">
          「自己肯定感は"上げるもの"ではなく、"前提が変わると結果的に安定するもの"です。」
        </p>
      </div>

      <LineCtaImpostor />

      <h2>ではどうすればいいのか</h2>
      <p>
        無理にポジティブにならなくていいです。まず<strong>構造を理解することが最初の一歩</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 他人軸の構造を理解する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜ他者の評価に依存しているのか」を<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>から整理します。
          構造が見えると「自分の問題ではなかった」という感覚が生まれます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② ワーキングモデルを知る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜこのパターンができたのか」を<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>から理解します。
          原因が見えると、変化の方向が見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ <Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「評価されなくても受け入れてもらえる」体験の積み重ねが、ワーキングモデルを少しずつ更新します。
          これが、自己肯定感が「内側から安定する」プロセスです。
        </p>
      </div>

      <h2>まとめ</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・自己肯定感が低いのは意志や努力の問題ではない</p>
        <p>・「他人軸」——自己評価の基準が外側にある状態が影響している</p>
        <p>・その背景に「ワーキングモデル」——幼少期から形成された前提がある</p>
        <p>・変わらないのではなく、変わらない構造のままだっただけ</p>
      </div>
      <p className="mt-4">
        「変わらない」のではなく、
        <strong>「変わらない構造のままだった」だけです。</strong>
        構造が見えると、変化の入口が見えてきます。
      </p>

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
          頑張っているのに変わらない——構造を一緒に整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「自己肯定感が低い」という表面ではなく、その背景にある構造を整理することで、
          変化の方向が見えてきます。まだ決めなくていいです。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/low-self-esteem-why"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
      </div>
    </ArticleLayout>
  )
}

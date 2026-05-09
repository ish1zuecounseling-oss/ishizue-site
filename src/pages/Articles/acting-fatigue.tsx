import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "仕事で演技するのは悪いことですか？",
    a: "悪いことではありません。演技は対人関係を円滑にするための適応戦略です。ただし長時間・高頻度で続くと消耗が大きくなり、自己機能の低下につながるため、量と使い方の調整が重要です。",
  },
  {
    q: "なぜ本音を出せないのでしょうか？",
    a: "評価が下がる不安や関係が壊れる恐れ、「役に立つことで価値を保ってきた」経験などが影響していることがあります。無意識に安全を守るためのパターンとして定着している場合も多いです。",
  },
  {
    q: "演技しなくても働けるようになりますか？",
    a: "完全にゼロにする必要はありません。現実的には「演技の量を調整する」「本音を出せる場を一部に作る」ことで、消耗を減らしながら働くことが可能になります。",
  },
]

export default function ActingFatigue() {
  return (
    <ArticleLayout
      title="仕事で演技して疲れるのはなぜ？｜本音を出せない状態の正体と抜け出し方"
      description="「職場でずっと気を張っている」「家に帰るとぐったりする」——これは感情労働・他人軸・役割依存という構造から起きています。演技が止まらない理由と現実的な回復方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/acting-fatigue"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「無理している自覚はあるのに、やめられない」——それは意志ではなく構造の問題です。
      </p>

      <p>
        仕事中、どこか「自分じゃない感じ」がする。
        空気を読み続け、気を張り続け、家に帰ると一気に疲れが出る——
        こんな状態が続いていませんか？
      </p>
      <p>
        これは性格の問題ではなく、
        <strong>「演技」という対人適応が長時間続いている状態</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・本音とは違う反応をしている感覚がある</li>
          <li>・常に気を張っていてリラックスできない</li>
          <li>・相手に合わせて自分を変え続けている</li>
          <li>・一人になるとどっと疲れる</li>
          <li>・「自分らしくいられる場所」がない</li>
        </ul>
      </div>

      <h2>演技＝対人適応戦略（ただしコストが高い）</h2>
      <p>
        演技そのものは問題ではありません。
        社会生活において感情を調整することは必要な能力です。
      </p>
      <p>
        問題は、<strong>それが長時間・無意識に・やめられない状態で続いていること</strong>です。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">感情労働との関係</p>
          <p className="text-stone-600 leading-[1.9]">
            仕事として感情を管理し続ける<Link to="/articles/helper-emotional-labor-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>は、
            本音と表示のズレを処理し続けるコストを脳に与えます。
            これが「話すだけで疲れる」「演じている感覚」の正体です。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">他人軸との関係</p>
          <p className="text-stone-600 leading-[1.9]">
            「どう思われるか」が判断基準の中心になっている<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>の状態では、
            自分の感情・反応を常に「他者基準」でフィルタリングし続けます。
            これが「自分じゃない感じ」をつくります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">過剰適応との関係</p>
          <p className="text-stone-600 leading-[1.9]">
            「素の自分では受け入れてもらえない」という<Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>のパターンが強いと、
            演技は「意識的な選択」ではなく「自動的な防衛」になります。
          </p>
        </div>
      </div>

      <h2>なぜやめられないのか</h2>
      <p>
        多くの場合、演技は「やめられない」というより、
        <strong>やめると不安が強くなる構造</strong>になっています。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・評価が下がるのではないかという不安</p>
        <p>・関係が壊れることへの恐れ（<Link to="/articles/anxious-attachment" className="underline underline-offset-2">見捨てられ不安</Link>）</p>
        <p>・「これが普通」という慣れ——演技している自覚がなくなっている</p>
        <p>・「役に立てる自分でいなければ」という<Link to="/articles/self-value-unknown" className="underline underline-offset-2">条件付き自己価値</Link></p>
      </div>
      <p>
        特に「<Link to="/articles/impostor-syndrome" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">本当の自分はバレてしまう</Link>」という感覚がある場合、
        演技は自己価値を守るための戦略として機能しています。
      </p>

      <h2>続けるとどうなるか</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>→ <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2">脳疲労</Link>が蓄積し、休んでも回復しにくくなる</p>
        <p>→ <Link to="/articles/emotion-unknown" className="underline underline-offset-2">自分の感情がわからなく</Link>なる</p>
        <p>→ <Link to="/articles/feeling-nothing" className="underline underline-offset-2">何も感じない・空虚感</Link>が続く</p>
        <p>→ <Link to="/articles/self-function-decline" className="underline underline-offset-2">自己機能全般の低下</Link></p>
        <p>→ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2">バーンアウト</Link>へ</p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link>
      </p>

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/quit-job-cannot-say" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 辞めたいのに言えない理由</a>
          <a href="/articles/quit-job-no-next" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 辞めたいけど次がない</a>
          <a href="/articles/quit-job-counseling" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 仕事を辞めたいときカウンセリングは必要？</a>
        </div>
      </div>

      <LineCtaSmall />

      <h2>回復の方向——「やめる」ではなく「調整する」</h2>
      <p>
        現実的な回復は、「演技を完全にやめること」ではありません。
        <strong>演技の量と使い方を調整すること</strong>が現実的な目標です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 演技している時間に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今、自分の本音とズレた反応をしている」と気づけるだけで、
          無意識の自動化から少し距離が生まれます。
          気づくことが最初の一歩です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 一部の場で本音に近い反応を試す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          全部を変える必要はありません。
          「ここでは少し本音を出してみる」という場を少しずつ作ることが、
          演技の量を調整する練習になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 一人の時間に感覚を回復させる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          演技で消耗した後は、「気を遣わなくていい時間」が回復を助けます。
          <Link to="/articles/recovering-feeling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情・感覚を取り戻す方法</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「なぜ演技せざるを得ないのか」を整理する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          演技の背景にある<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>・<Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応パターン</Link>を外から整理することで、
          「なぜやめられないのか」が見えてきます。
          一人では気づきにくいパターンです。
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
          「無理している感じ」を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          演技の背景にあるパターンを整理すると、「なぜやめられないのか」と「どう変えるか」が見えてきます。
          支援職の消耗を前提にした整理を行います。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/acting-fatigue"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

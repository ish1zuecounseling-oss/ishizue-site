import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function TryingTooHard() {
  return (
    <ArticleLayout
      title="頑張りすぎる人の心理｜止まれない・休めない理由と降りるための視点"
      description="「まだ頑張れる」「十分ではない」が止まらない——頑張りすぎる人が止まれない構造・ワーキングモデルとの関係・降りるための最初の一手を解説します。"
      url="https://www.ishizue-counseling.jp/articles/trying-too-hard"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「まだ十分ではない」「もっとできるはず」「休んでいる場合じゃない」——こんな感覚が止まらない状態はありませんか？頑張りすぎてしまうのは意志の強さではなく、<strong>止まると何かを失うという感覚から来ている構造の問題</strong>です。
      </p>

      <p>
        「十分やったと思えない」「もっとできるはず」「まだ頑張れる」——
        頑張りすぎる人の多くは、「頑張ることをやめることができない」のではなく、
        <strong>「頑張ることをやめると何かを失う」という感覚が止まらせない</strong>のです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「まだ十分ではない」「もっとできたはず」という感覚が続く</li>
          <li>・休むことへの強い罪悪感・不安がある</li>
          <li>・「頑張っている自分」以外の自分がわからない</li>
          <li>・成果を出しても「まだ足りない」という感覚になる</li>
          <li>・周りが休んでいても「自分だけ休めない」と感じる</li>
        </ul>
      </div>

      <h2>なぜ頑張りすぎてしまうのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「頑張ること＝価値がある」という等式</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「努力している自分だけに価値がある」という感覚が強いと、
          頑張ることをやめることが「価値を失うこと」に感じられます。
          これは<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>の「自分には価値がない」という前提と深く関連します。
          「結果を出し続けることで価値を確認してきた」という経緯を持つ方に多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「止まると何かを失う」という恐れ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          止まることへの恐れの正体は様々です。
          「遅れる恐れ」「失望させる恐れ」「見捨てられる恐れ」——
          これらが「頑張り続ける」動機になっています。
          <Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>・<Link to="/articles/anxious-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">不安型愛着</Link>との深い関連があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「疲れている」というシグナルが届かない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頑張りすぎる人の多くは「疲れているかどうかわからない」状態になっています。
          「まだ大丈夫」という思考が身体感覚を上回り、
          <Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">疲れているのに止まれない</Link>状態が続きます。
          これは<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>のサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 支援職という構造的な後押し</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「利用者が困っている」「人手が足りない」「自分しかいない」という状況が、
          頑張り続けることを正当化します。
          <Link to="/articles/helper-responsibility-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">責任感の強さ</Link>が止まることを妨げます。
        </p>
      </div>

      <h2>頑張りすぎることで起きること</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>→ <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2">脳疲労の慢性化</Link></p>
        <p>→ <Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2">感情が麻痺する</Link></p>
        <p>→ <Link to="/articles/feeling-nothing" className="underline underline-offset-2">何も感じない・空虚感</Link></p>
        <p>→ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2">バーンアウト</Link></p>
        <p>→ <Link to="/articles/self-function-decline" className="underline underline-offset-2">自己機能全般の低下</Link></p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaSmall />

      <h2>「頑張りすぎる」から降りるために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「頑張っていない自分」への問い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「頑張っていない自分には価値がない」という前提を意識化することが最初の一歩です。
          <Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「役に立たない自分への問い」</Link>が参考になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「小さく止まる」練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「完全に止まる」のハードルが高い場合、「5分だけ何もしない」から始めます。
          「止まっても何も起きなかった」という体験の積み重ねが、止まることへの恐れを緩めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 身体感覚のシグナルを拾う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「頭ではまだ大丈夫」でも「身体はどうか」を確認する習慣が重要です。
          重さ・疲れ・食欲・眠さなど、身体からのシグナルを無視せずに受け取ることが、
          適切なタイミングで止まる力を育てます。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「頑張りすぎてしまう」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">止まれない構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ止まれないのか」——頑張りすぎる背景にある構造を外から整理することで、降りる入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/trying-too-hard"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

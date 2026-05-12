import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaQuit } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "「もう少し頑張ってから」は正しいですか？",
    a: "状態によります。消耗が進んでいる状態で「もう少し頑張る」を続けると、回復に必要な期間が長くなることがあります。タイミングではなく「今の状態がどうか」で判断することが重要です。",
  },
  {
    q: "辞めるタイミングに「正解」はありますか？",
    a: "正解はありません。ただし「回復方向に向かっているか」「この状態があと数ヶ月続いたらどうか」という視点で整理すると、判断の軸が見えやすくなります。",
  },
  {
    q: "迷いが消えないのはなぜですか？",
    a: "「辞めたい感覚」と「まだ頑張るべきという思考」が同時に存在しているとき、人は判断できなくなります。この状態では一人で考え続けても答えが出にくいため、外から整理することが有効です。",
  },
]

export default function QuitJobTiming() {
  return (
    <ArticleLayout
      title="仕事を辞めるタイミングがわからない｜限界サインと後悔しない判断の軸"
      description="「辞めたいけど今なのかわからない」——タイミングがわからなくなるのは優柔不断ではなく判断に必要な感覚が弱っているからです。限界サインと状態ベースの判断軸を解説します。"
      url="https://www.ishizue-counseling.jp/articles/quit-job-timing"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「まだ頑張れる気もするし、もう限界な気もする」——その迷いは優柔不断ではありません。
      </p>

      <p>
        「仕事を辞めたい」と思っているのに、<strong>今辞めていいのかがわからない</strong>状態になることがあります。
        これは優柔不断だからではありません。
        <strong>判断に必要な感覚や軸が消耗している状態</strong>で起きます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「もう無理」と思うのに「まだ頑張れるはず」も同時にある</li>
          <li>・辞めたいのにキリがいいタイミングを探し続けている</li>
          <li>・考えれば考えるほど決められなくなる</li>
          <li>・周りはみんな頑張っているのに自分だけ逃げる気がする</li>
        </ul>
      </div>

      <h2>なぜタイミングがわからなくなるのか</h2>

      <div className="card space-y-2 text-sm text-stone-600">
        <p>・<Link to="/articles/body-sensation-unknown" className="underline underline-offset-2">身体感覚がわからない</Link>——消耗のシグナルを感じ取れなくなっている</p>
        <p>・<Link to="/articles/other-centered-living" className="underline underline-offset-2">他人軸</Link>——「周りがどう思うか」が判断を上書きする</p>
        <p>・<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2">役割を降りる恐れ</Link>——辞める＝価値がなくなる感覚</p>
        <p>・<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2">脳疲労</Link>——考えても決められない・堂々巡りになる</p>
      </div>

      <p>
        この状態では「正しい答え」を探そうとするほど、逆に動けなくなります。
        <Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>がループし、判断力がさらに落ちていきます。
      </p>

      <h2>タイミングではなく「状態」で判断する</h2>
      <p>
        「もう少し頑張ってから」「キリがいいところで」と考えますが、
        実際には<strong>タイミングではなく状態で判断する</strong>ことが重要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">消耗が進んでいるサイン</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・朝起きるのが明らかにつらい状態が続いている</li>
          <li>・仕事のことを考えると身体が重くなる</li>
          <li>・<Link to="/articles/helper-mental-recovery" className="underline underline-offset-2">休んでも回復しない</Link></li>
          <li>・<Link to="/articles/feeling-nothing" className="underline underline-offset-2">感情が鈍くなっている・何も感じない</Link></li>
          <li>・<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2">眠れない・夢に仕事が出てくる</Link>状態が続く</li>
        </ul>
      </div>

      <p>
        これらが2週間以上続いている場合、すでに<strong>消耗が深まっているサイン</strong>です。
        「もう少し頑張ってから」を続けることで、回復に必要な期間が長くなることがあります。
      </p>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">合わせて読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/quit-job-cannot-say" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 辞めたいのに言えない理由</a>
          <a href="/articles/quit-job-no-next" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 辞めたいけど次がない・動けない</a>
          <a href="/articles/quit-job-counseling" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ カウンセリングは必要？相談で整理できること</a>
        </div>
      </div>

      <LineCtaQuit />


      <div className="my-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">迷いの原因がはっきりしている方へ</p>
        <div className="flex flex-col gap-2">
          <a href="/articles/quit-job-cannot-say" className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-700 hover:border-stone-300 transition-colors">
            <span>言い出せない・言えない</span>
            <span className="text-stone-400 text-xs">→</span>
          </a>
          <a href="/articles/quit-job-no-next" className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-700 hover:border-stone-300 transition-colors">
            <span>次が決まっておらず不安で動けない</span>
            <span className="text-stone-400 text-xs">→</span>
          </a>
          <a href="/articles/quit-job-fear-retention" className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-700 hover:border-stone-300 transition-colors">
            <span>引き止められるのが怖い</span>
            <span className="text-stone-400 text-xs">→</span>
          </a>
          <a href="/articles/quit-job-not-quit" className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-700 hover:border-stone-300 transition-colors">
            <span>本当に辞めるべきか確かめたい</span>
            <span className="text-stone-400 text-xs">→</span>
          </a>
        </div>
      </div>

      <h2>後悔しにくい判断のための3つの視点</h2>
      <p>
        「正しいかどうか」で考えると答えは出ません。
        代わりに、次の問いで<strong>今の状態をはっきりさせる</strong>ことが有効です。
      </p>

      <div className="card space-y-2 text-sm text-stone-600">
        <p><strong>① この状態があと3ヶ月続いたらどう感じるか</strong><br />「なんとかなりそう」か「もう無理」か——感覚として答えが出やすい問いです。</p>
        <p><strong>② 今の自分は回復方向に向かっているか</strong><br />「先週より今週の方が少し楽」なのか「じわじわ消耗が深まっている」のか——方向性を確認します。</p>
        <p><strong>③ 自分の感覚を無視していないか</strong><br />「身体は疲れているが頭で大丈夫と言い聞かせている」状態は危険なサインです。</p>
      </div>

      <h2>それでも決めきれないとき</h2>
      <p>
        状態が曖昧なまま考え続けても、答えは出にくいです。
        <strong>外から整理することで判断の軸が見えてきます。</strong>
      </p>
      <p>
        <Link to="/articles/quit-job-counseling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">カウンセリングは必要？</Link>では、
        相談で整理できることを詳しく解説しています。
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
        <p className="text-[10px] text-stone-500 mb-1">まだ辞めると決めていない段階でも大丈夫です</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          辞めるタイミングを一緒に整理したい方へ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「辞めると決めてから相談」ではなく「迷っている状態で整理する」でOKです。外から整理すると方向が見えやすくなります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/quit-job-timing"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

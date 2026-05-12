import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaQuit } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function QuitJobNotQuit() {
  return (
    <ArticleLayout
      title="仕事を辞めない方がいいケース｜辞めたいと感じるときの見極め方"
      description="「辞めたいけど辞めるべきかわからない」とき、すぐに退職しない方がいいケースがあります。判断を急がないための視点と、辞めた方がいいサインを整理します。"
      url="https://www.ishizue-counseling.jp/articles/quit-job-not-quit"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「辞めたい」と思っても、すぐに辞めるのが最適とは限りません。見極めの視点を整理します。
      </p>

      <p>
        「もう無理かもしれない」と感じたとき、<strong>本当に辞めるべきなのか</strong>迷うことがあります。
        多くの場合、その迷いは自然なものです。
        ただし中には、<strong>今は辞める判断を急がない方がいい状態</strong>もあります。
      </p>
      <p>
        この記事では「辞めない方がいいケース」と「辞めた方がいいサイン」の両方を整理します。
      </p>

      <h2>辞めない方がいいケース</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 判断力が落ちているとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          強い疲労やストレスの中では、正確な判断が難しくなります。
          <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>が強い・考えても答えが出ない・極端な結論に傾きやすい——
          この状態では「辞める／続ける」のどちらも正確な判断とは言えない可能性があります。
          <strong>まず回復を優先してから判断する</strong>方が後悔が少ないです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 一時的な負荷が原因のとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          繁忙期・人手不足・特定の人間関係・一時的な配置変更など、
          環境そのものではなく<strong>一時的な出来事で消耗している場合</strong>は、
          その状況が変われば負担が軽くなる可能性があります。
          変化の余地がある場合は、まず環境調整を試みることも選択肢になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「本当はどうしたいか」がわからなくなっているとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗が進むと、<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下</Link>し、
          「本当はどうしたいか」がわからなくなります。
          <Link to="/articles/feeling-nothing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何も感じない</Link>・<Link to="/articles/what-do-i-want" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何がしたいかわからない</Link>——
          この状態での決断は、回復後に違和感が出やすくなります。
        </p>
      </div>

      <h2>辞めた方がいいサイン</h2>
      <p>
        一方で、以下のような状態が続いている場合は、<strong>消耗が深刻なサイン</strong>として受け取ることが重要です。
      </p>

      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・睡眠・食事・日常生活に支障が出ている</p>
        <p>・身体症状（頭痛・胃痛・動悸）が慢性的に続いている</p>
        <p>・休んでも全く回復しない状態が数週間以上続いている</p>
        <p>・「死にたい・消えたい」という感覚が出てきた</p>
        <p>・職場に行くことへの強い恐怖・嫌悪が続いている</p>
      </div>

      <p className="text-xs text-stone-400">
        ※このような状態が続く場合は、退職の判断より先に医療機関への相談を優先してください。
      </p>

      <LineCtaQuit />

      <h2>「辞めるべきか」を止めて、「今の状態」を整理する</h2>
      <p>
        「辞めるかどうか」をすぐに決める必要はありません。
        むしろ一度、<strong>判断そのものを止める</strong>ことで見えてくることがあります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・今の消耗の深さはどのくらいか</p>
        <p>・環境の問題なのか、自分の状態の問題なのか</p>
        <p>・回復が先か、判断が先か</p>
      </div>
      <p>
        これらを分けて考えることで、「辞める・続ける」の二択から離れ、
        より現実的な選択肢が見えてきます。
      </p>

      <h2>それでも「辞めたい」が続くとき</h2>
      <p>
        状態を整えてもなお「辞めたい」が続く場合は、それは<strong>無視できないサイン</strong>です。
        <Link to="/articles/quit-job-timing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">辞めるタイミングの見極め方</Link>・
        <Link to="/articles/quit-job-cannot-say" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">言えない理由の整理</Link>・
        <Link to="/articles/quit-job-counseling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">カウンセリングで整理すること</Link>
        を参照してください。
      </p>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          まだ辞めると決めていない段階でも大丈夫です
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「辞めるべきか続けるべきか」ではなく、「今どういう状態なのか」を整理することで、
          無理のない判断ができるようになります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/quit-job-not-quit"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

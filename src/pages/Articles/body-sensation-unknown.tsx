import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function BodySensationUnknown() {
  return (
    <ArticleLayout
      title="身体感覚がわからない｜「疲れているかどうかわからない」の正体と取り戻し方"
      description="「疲れているかどうかわからない」「空腹かどうかわからない」「自分の体の状態がわからない」——これは自己機能消耗のサインです。身体感覚が失われる仕組みと取り戻す方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/body-sensation-unknown"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「疲れているかどうかわからない」——それは身体感覚が消耗しているサインです。
      </p>

      <p>
        「疲れているかどうかわからない」「お腹が空いているのかわからない」「体がどういう状態かわからない」——
        これは感覚が鈍いのではなく、
        <strong>思考・役割・他者への注意が身体感覚を圧倒している状態</strong>から起きています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「疲れた？」と聞かれても「わからない」と答える</li>
          <li>・食事の時間になっても空腹感があまりない</li>
          <li>・「今どんな気分？」に答えられない</li>
          <li>・痛みや不調に気づくのが遅い</li>
          <li>・体より先に思考が動いている感じがある</li>
        </ul>
      </div>

      <h2>なぜ身体感覚がわからなくなるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「頭の中で生きている」状態</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>・問題解決・計画・自己批判——
          常に頭の中で「考え続けている」状態では、意識の多くが思考系に向かい、
          身体感覚への注意が薄れていきます。
          「考えすぎる人ほど身体感覚が遠くなる」という関係があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 他者感情の常時モニタリング</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「相手が今どうか」「場の空気はどうか」に意識が向き続けると、
          「自分の体は今どうか」への注意がなくなります。
          <Link to="/articles/too-considerate" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">気を遣いすぎる</Link>人・<Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎる</Link>人に多いパターンです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情・感覚の長期的な抑圧</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「感情を表に出せない」「疲れを認めると迷惑をかける」という環境が続くと、
          感情・身体感覚のシグナルを「受け取らないようにする」ことが習慣化されます。
          長期的に続くと、受け取り方そのものが鈍くなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 慢性的な神経系緊張</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/always-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">慢性的な緊張状態</Link>では、神経系が「今は感じている余裕がない」モードになります。
          疲れ・空腹・痛みの感覚が鈍くなることで、消耗のサインを見逃しやすくなります。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        自己機能の状態→ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link>
      </p>

      <LineCtaSmall />

      <h2>身体感覚を取り戻すために</h2>
      <p>
        身体感覚は「意識する」ことで少しずつ回復します。
        思考ではなく<strong>注意を身体に向ける練習</strong>が鍵です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「今、体はどうか」を1日3回確認する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          朝起きたとき・昼食後・就寝前——「今体はどんな感じか」を10秒だけ確認する習慣が、
          身体感覚への注意を回復させます。「疲れているかどうかわからない」でも問題ありません。
          わからなくても、「わからない」と気づいていることが練習になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② ボディスキャン</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          横になって、足先から頭まで順番に「今どんな感覚があるか」を観察します。
          「感じなければならない」ではなく「ただ気づく」だけでいいです。
          温かさ・重さ・違和感・緊張——何かに気づけたら十分です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 強い感覚から入る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          温かいお風呂・冷たい水・好きな食べ物・運動後の筋肉の感覚——
          はっきりとした身体感覚から入ることで、感覚系を「起動」させやすくなります。
          身体感覚が薄れているとき、まずはわかりやすい感覚を意識的に体験することが有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自然・身体を動かす活動</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          散歩・ストレッチ・料理・動物との接触——
          「今ここ」の感覚に意識が向かう活動が、身体感覚系を活性化させます。
          思考系が優位な状態から感覚系への切り替えを促します。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「身体の感覚がわからない」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">身体感覚の回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「疲れているかどうかわからない」——身体感覚が閉じた背景を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/body-sensation-unknown"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

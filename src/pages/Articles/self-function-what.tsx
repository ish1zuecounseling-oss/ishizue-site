import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自己機能とは何ですか？",
    a: "自己機能とは「自分を自分として保持・理解・運用する力」のことです。自分は何が好きか・何が嫌か・何を感じているか・どこで疲れるかを把握し、自分のペースで生きる力に相当します。メンタル不調では単なる落ち込みだけでなく、この自己機能が崩れていることが多いです。",
  },
  {
    q: "自己機能が低下するとどうなりますか？",
    a: "他人優先で自分のニーズが分からなくなる・感情が分からない・休み方が分からない・「何がしたいか」が空白になるなどが起きやすくなります。支援職・対人援助職に多いパターンです。",
  },
  {
    q: "自己機能を回復させるにはどうすればいいですか？",
    a: "思考だけでは回復しにくく、身体感覚・感情・安全な対話が重要です。散歩・自然・睡眠・書き出すこと・信頼できる人に弱さを出すことが、自己機能の回復を助けます。",
  },
]

export default function SelfFunctionWhat() {
  return (
    <ArticleLayout
      title="自己機能とは何か｜「自分がわからない」「何がしたいかわからない」はなぜ起きるのか"
      description="「自分がわからない」「何がしたいかわからない」「感情がわからない」——これは自己機能の消耗から起きています。なぜ頑張りすぎる人・支援職ほど自分を見失うのか、仕組みと回復を解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-function-what"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自分が何をしたいのかわからない」「疲れているのに止まれない」「感情が分からない」——それは自己機能が消耗しているサインかもしれません。
      </p>

      <p className="text-center py-3 px-4 rounded-xl bg-stone-50 border border-stone-200 text-sm font-medium text-stone-700 my-2">
        自己機能とは、<br />「自分を自分として保持・理解・運用する力」のことです。
      </p>

      <p>
        人は誰でも「自分」を持っています。しかし、あるとき気づくと
        <strong>「自分がどこにいるかわからない」</strong>状態になっていることがあります。
        頑張りすぎた結果、気づかないうちに「自分」を失っていく——
        これは性格や意志の弱さの問題ではなく、<strong>自己機能の消耗</strong>として理解できます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「自分が何をしたいのか」がわからなくなってきた</li>
          <li>・疲れているのに止まれない・休めない</li>
          <li>・感情が分からない・何も感じられない</li>
          <li>・他人の期待に応えることで動いている感覚がある</li>
          <li>・「本当の自分」がどこにいるかわからない</li>
        </ul>
      </div>

      <h2>自己機能とは何か</h2>
      <p>
        <strong>自己機能とは「自分を自分として保持・理解・運用する力」</strong>のことです。
        具体的には以下の力が含まれます。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>自分は何が好きか・何が嫌かを知っている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>今何を感じているかに気づける</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>どこで疲れるかを把握している</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「どこまでが自分か」の境界感覚がある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>自分のペースで休める・動ける</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>他者と違う価値観・感覚を持てる</li>
        </ul>
      </div>
      <p>
        これらが機能している状態が「自己機能が保たれている」状態です。
        逆に消耗・喪失すると「自分がわからない」「止まれない」「感情が麻痺する」という状態が起きます。
      </p>

      <h2>なぜ「自分」を失うのか——自己機能が消耗する仕組み</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 外側への意識が続きすぎる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事・SNS・他者の期待・評価——現代では常に「外側」へ意識が向かう構造があります。
          「私は今どう感じているか」という内側への問いが後回しになり続けると、
          自己感覚が薄れていきます。
          特に<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>が多い支援職・対人援助職は、
          他者の状態を常時モニタリングするため、自分の内側を感じる余裕がなくなりやすいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「役割の自分」だけが残る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援者・親・部下・上司——人は複数の役割を生きています。
          役割に過剰適応し続けると、「役割としての自分」だけが機能し、
          「感じる自分・欲する自分・休む自分」が失われていきます。
          「何もない自分」が空虚に感じられるのは、このパターンのサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 弱さを出せない環境が続く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「弱さを出すと迷惑」「しんどいと言えない」という環境が続くと、
          自分の感情・ニーズを抑圧することが習慣化されます。
          抑圧が続くと、自分が何を感じているかが本当にわからなくなっていきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 思考だけで動き続ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「こうすべき」「あれをしなければ」という思考・義務感で動き続けると、
          身体感覚・感情・欲求が切り離されていきます。
          <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>・<Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>が深まるほど、
          「感じること」より「考えること」が優位になります。
        </p>
      </div>

      <h2>自己機能が低下すると起きること</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「何がしたいか」がわからなくなる</p>
        <p>・他人の感情は分かるのに、自分の感情が分からない</p>
        <p>・疲れているのに止まれない・休めない</p>
        <p>・<Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2">感情が麻痺</Link>して、何も感じられない</p>
        <p>・「本当はどうしたい？」と問われると答えられない</p>
        <p>・他者の期待・役割で動いている感覚がある</p>
        <p>・空虚感・意味の喪失</p>
      </div>
      <p>
        これらは性格や意志の問題ではなく、
        自己機能が消耗した状態から起きているサインです。
      </p>

      <h2>支援職に自己機能の消耗が多い理由</h2>
      <p>
        支援職・医療職・対人援助職は、自己機能が消耗しやすい構造を持っています。
      </p>
      <div className="card">
        <div className="space-y-3 text-sm">
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-xs font-medium text-[#8FAF9F] mb-1">対人機能（使いすぎる）</p>
              <ul className="text-stone-600 space-y-1">
                <li>・他者の感情を読む</li>
                <li>・空気を読む・調整する</li>
                <li>・共感・寄り添う</li>
                <li>・関係を維持する</li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-stone-400 mb-1">自己機能（疲弊する）</p>
              <ul className="text-stone-600 space-y-1">
                <li>・自分の感情を感じる</li>
                <li>・自分のニーズを知る</li>
                <li>・境界線を保つ</li>
                <li>・自分のペースで動く</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          支援職では対人機能を使いすぎて自己機能が消耗するパターンが多く起きます。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaSmall />

      <h2>自己機能を回復させるために</h2>
      <p>
        重要なのは、<strong>自己機能は「思考だけ」では回復しない</strong>ことです。
        「もっと自己分析しよう」「自分を理解しよう」と頭で考え続けることが、
        かえって脳疲労を深めることがあります。
      </p>
      <p>
        自己機能の回復には、<strong>身体感覚・感情・安全な関係</strong>が必要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 身体感覚に戻る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          散歩・自然・入浴・運動など、「感じること」に意識を向ける活動が自己機能の回復を助けます。
          「考えること」ではなく「感じること」へ。
          「今日は疲れてる」「これ嫌だった」「今ちょっと嬉しい」という小さな自己感覚を拾う習慣が重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 弱さを出せる場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己機能は安全な他者との関係の中で回復する部分があります。
          「弱さを出しても関係が壊れない」という体験が、
          抑圧してきた感情・ニーズへのアクセスを取り戻します。
          信頼できる人・カウンセラーとの対話がこの役割を果たします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「感情規則のない時間」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事中は常に感情を管理しています。
          仕事を離れたら「感情を管理しなくていい時間・場所」を意識的に作ることが、
          感情的エネルギーと自己感覚の回復を助けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ マインドフルネス・呼吸</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今この瞬間の自分の感覚」に意識を向けるマインドフルネスの実践が、
          自己機能の回復を助けます。「考えること」から「感じること」への切り替えを繰り返す練習が、
          自己感覚を取り戻す基盤になります。
        </p>
      </div>

      <h2>このサイトのクラスター構造</h2>
      <p>
        この記事は「自己機能・自己理解」カテゴリのピラー記事です。
        以下のクラスター記事と内部で接続しています。
      </p>

      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-[#8FAF9F] mb-2">自己理解・自己喪失</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/helper-emotional-numbness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情が分からない・麻痺している</Link>
              <Link to="/articles/helper-rumination" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 考えすぎて動けない・頭が止まらない</Link>
              <Link to="/articles/helper-mental-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ メンタルを崩した後の立て直し</Link>
            </div>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="text-xs font-medium text-[#8FAF9F] mb-2">脳・神経系</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/helper-brain-fatigue" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 脳疲労とは何か・DMN過活動</Link>
            </div>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="text-xs font-medium text-[#8FAF9F] mb-2">支援職の消耗との接続</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労とは（ピラー）</Link>
              <Link to="/articles/helper-empathy-overload" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感しすぎて疲れる</Link>
              <Link to="/articles/helper-boundary-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 境界線（バウンダリー）セルフチェック</Link>
              <Link to="/articles/helper-emotional-labor-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情労働チェック</Link>
            </div>
          </div>
        </div>
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

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「自分がどこにいるかわからない」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己機能の回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「何がしたいか分からない」「疲れているのに止まれない」——
          自己機能の消耗の構造を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-function-what"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と自己心理学・愛着理論・感情労働研究をもとに作成しています。「自己機能」の概念は特定の学派の専門用語ではなく、実践的な自己理解モデルとして使用しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

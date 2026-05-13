import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function AfraidToLeaveRole() {
  return (
    <ArticleLayout
      title="役割を降りるのが怖い｜「役に立たない自分」への恐れと自己価値を取り戻す方法"
      description="「何もしていない自分には価値がない」——この感覚はなぜ生まれるのか。役割依存・条件付き自己価値の構造と、役割なしでも存在できるようになる視点を解説します。"
      url="https://www.ishizue-counseling.jp/articles/afraid-to-leave-role"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「役に立っていない自分には価値がない」「何もしていないと不安になる」「支援者以外の自分がわからない」——そんな感覚はありませんか？役割を降りることへの恐れは、<strong>自己価値が役割に紐づいている状態</strong>から来ています。
      </p>

      <p>
        「休もうとするとそわそわする」「何もしていないと不安になる」「役に立てないなら存在していいかわからない」——
        これは怠けられない性格ではありません。
        <strong>役割を降りることへの恐れは、自己価値が「役割・貢献・役立つこと」に紐づいている状態から生まれます。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「何もしていない自分」がいると不安になる</li>
          <li>・休んでいると「これでいいのか」という罪悪感がある</li>
          <li>・誰かの役に立てないと、自分の存在理由がわからなくなる</li>
          <li>・「弱い自分を見せると嫌われる」という感覚がある</li>
          <li>・バーンアウトしても「まだ動けるはず」と思い続けてしまう</li>
        </ul>
      </div>

      <h2>「役割を降りることへの恐れ」はどこから来るのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自己価値が「役立つこと」に紐づいている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役立てる自分＝価値がある」「役立てない自分＝価値がない」という等式が、
          無意識に働いていることがあります。
          この等式がある限り、休むことは「価値のない自分になること」と同義になります。
          これは認知の問題ではなく、長年の経験から形成されたパターンです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割を降りると「自分が空になる」感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          役割に過剰適応し続けると「役割の自分」だけが前面に出て、
          「感じる自分・望む自分」が後退します。
          役割を降りたとき、後に残るものがないような感覚——これは<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>・<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>のサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「弱さを見せると関係が壊れる」という経験の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「できる自分でいると関係が維持される」「弱さを出すと関係が壊れる」という体験が積み重なると、
          「強くあり続けること」が関係維持の条件になっていきます。
          役割を降りることは、その条件を手放すことへの恐れになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 支援職特有の「使命感」の裏面</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「この人を助けたい」という強い使命感は、支援職の大切な動機です。
          しかし「自分がいなければこの人が困る」という感覚が強まると、
          <Link to="/articles/helper-responsibility-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">責任感</Link>が役割から降りることを妨げます。
          使命感と役割依存は紙一重のところがあります。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <p className="text-sm text-stone-500 mt-2">
        インポスター症候群との関係→ <a href="/articles/impostor-syndrome" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群とは｜「できているのに自信がない」の正体</a> ／ <a href="/articles/impostor-check-20" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群チェック（20項目）</a>
      </p>

      
      <p className="text-sm text-stone-500 mt-2">
        この状態の背景→ <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>（幼少期から形成される対人パターン）
      </p>
      <LineCtaImpostor />

      <h2>役割を降りることへの恐れの正体</h2>
      <p>
        役割を降りることへの恐れの正体は、多くの場合
        <strong>「役割のない自分の価値がわからない」という自己機能の問題</strong>です。
      </p>
      <p>
        「役立てる自分＝価値がある」という等式が強い間は、
        何もしない時間・休息・弱さを見せることが「価値の喪失」に感じられます。
        しかし本当の自己価値は、役割・貢献・成果とは独立して存在します。
      </p>
      <p>
        <strong>「何もしていない自分」に価値があることは、頭で理解するものではなく、身体で体験するものです。</strong>
        安全な場所で「何もしないでいる」体験を少しずつ積み重ねることが、
        役割に依存しない自己価値の感覚を取り戻します。
      </p>

      <h2>役割を「降りる」ために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「役割のない時間」を意図的に作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援者・親・専門家——これらのラベルを意識的に脱いで、「ただの人間」でいられる時間を作ります。
          最初は不安を感じても、それが「慣れていないだけ」だと理解することが重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「弱さを出す」体験を少しずつ積む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          安全な場所・安全な相手に「疲れた」「わからない」「しんどい」を少しずつ出してみます。
          「弱さを出しても関係が壊れない」という体験が、
          役割依存からの回復を助けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「何もしない自分」を観察する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何もしていないとき、どんな感情・思考・身体感覚が出てくるかを観察します。
          「落ち着かない」「罪悪感がある」「不安がある」——それらを「あるがまま」として観察することが、
          役割から距離を置く練習になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「やりたいこと」を探すより「感覚を取り戻す」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役割がない自分には何ができるのか」を考えるより、
          <Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感覚を取り戻すこと</Link>が先決です。
          身体感覚・小さな好み・感情の動きを拾う習慣が、
          役割と関係なく存在できる感覚の土台になります。
        </p>
      </div>

      <h2>「役に立たない自分」への問い</h2>
      <p>
        「役に立たない自分には価値がない」——この感覚に対して、問いを立ててみてください。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-2">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「役立てない子どもには価値がない」と思いますか？</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「病気で動けない人には価値がない」と思いますか？</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「あなたの大切な人が休んでいたら、価値がないと感じますか？</li>
        </ul>
        <p className="text-sm text-stone-600 mt-3 leading-[1.9]">
          他者に対してはNoと答えられても、自分に対してはYesになることがあります。
          この非対称性が「役に立たない自分への恐れ」の正体です。
          自分に対しても、他者に向けるのと同じ視点を向けることが、
          自己価値の回復の入口になります。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「役割がない自分には価値がない」という感覚を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">役割依存の構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ休めないのか」「なぜ弱さを見せられないのか」——
          役割と自己価値の絡まりを外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/afraid-to-leave-role"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

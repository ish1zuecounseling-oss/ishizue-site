import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "「役に立たないと、自分に価値がない気がする」のは、考え方の問題ですか?",
    a: "考え方というより、長い時間をかけて身についた「心のクセ」に近いものです。多くの場合、子ども時代に「役に立つと認められた」「いい子にしていると安心できた」という経験の積み重ねの中で、自然に形づくられます。つまり、あなたが意識的に選んだ価値観ではなく、生き延びるために身につけた適応の結果であることが少なくありません。だからこそ「考えを変えよう」と意志だけで上書きするのは難しく、その成り立ちを理解することが先になります。",
  },
  {
    q: "これは「アダルトチルドレン」や「インナーチャイルド」と関係がありますか?",
    a: "近い領域にあります。これらは、子ども時代の家庭環境が大人になってからの対人パターンに影響する、という考え方を指す言葉です。ただし注意したいのは、世の中には「インナーチャイルドを癒せば治る」「特定の方法で解消する」とうたうものもありますが、生育歴に関わる深いテーマは、短期間の手法や独学で簡単に解決できるものではないということです。この記事は、自分のパターンの成り立ちに「気づく」ことを目的にしています。深く扱う必要を感じたときは、専門家と一緒に進めるのが安全です。",
  },
  {
    q: "過去を振り返ると、かえってつらくなりそうで怖いです。",
    a: "その感覚は大切にしてください。過去を無理に掘り起こす必要はありません。この記事の目的は、原因を特定して過去を責めることではなく、「今の自分のパターンには理由がある」と知ることで、自分を責めるのをやめる手がかりにすることです。振り返りがつらくなる場合は、一人で進めないでください。安全な関係の中で、少しずつ言葉にしていくのが、心理的に無理のない方法です。",
  },
  {
    q: "親のせいにしているようで、罪悪感があります。",
    a: "「誰かのせいにする」ことと「成り立ちを理解する」ことは違います。多くの親もまた、自分なりに精一杯だったはずで、犯人を探すことが目的ではありません。大切なのは、あなたが今感じている「役に立たないと不安」という反応が、あなたの性格の欠陥ではなく、ある環境への自然な適応だったと理解すること。それは過去を裁くためではなく、今のあなたが自分を責めるのをやめるための視点です。",
  },
  {
    q: "このパターンは、変えられますか?",
    a: "「消す」というより「ゆるめる」というイメージが近いです。長年かけて身についたパターンが、一度の気づきで消えることはありません。けれど、「役に立たなくても、自分は存在していい」という感覚は、安全な関係の中で少しずつ育てていくことができます。カウンセリングのような、評価されず・役に立たなくても受け入れられる関係は、その感覚を育てる場のひとつになります。",
  },
]

export default function ValueFromBeingUseful() {
  return (
    <ArticleLayout
      title="「役に立たないと、自分に価値がない」と感じる支援職へ｜その感覚はいつ始まったのか【公認心理師】"
      description="役に立てている時だけ、自分を許せる。必要とされないと不安になる。支援職に多いこの感覚は、性格ではなく、子ども時代からの「適応」として身についたものかもしれません。その成り立ちを、過去を責めずに理解するための視点を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/value-from-being-useful"
      date="2026-06-16"
      tags={["boundary", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        役に立てている時だけ、ほっとする。その安心の裏側に、ずっと昔から続いている問いがあるのかもしれません。
      </p>

      {/* ▼ 監修者ボックス */}
      <div className="my-4 p-4 rounded-2xl border border-stone-200 bg-white">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
            <span className="text-[10px] text-stone-500 tracking-wider">監修</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-stone-800 mb-0.5">公認心理師による解説</p>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              障害福祉15年・カウンセリング累計300名以上の臨床経験／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        誰かの役に立てたとき、ほっとする。
        必要とされていないと感じると、落ち着かない。
        頼まれごとを断ると、なぜか申し訳なさが残る。
        休んでいるだけの自分には、どこか価値がない気がする——。
      </p>

      <p>
        支援職には、この感覚を抱えている人がとても多くいます。
        そして、それは仕事に就いてから生まれたものではなく、
        <strong>もっと前から、ずっと続いてきたもの</strong>かもしれません。
        この記事では、「役に立たなきゃ」という感覚が
        どこから来ているのかを、過去を責めずに整理していきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・役に立てている時だけ、自分を許せる気がする</li>
          <li>・必要とされないと、自分の居場所がない感じがする</li>
          <li>・頼られると嬉しいのに、どこかで疲れている</li>
          <li>・「何もしていない自分」に、強い罪悪感がある</li>
          <li>・人に頼ること・甘えることが、うまくできない</li>
        </ul>
      </div>

      <h2>「役に立つこと」が、存在の条件になっている</h2>
      <p>
        本来、人の価値は「何ができるか」とは関係なく、ただ存在しているだけで認められていいものです。
        ところが、ある種の人にとっては、
        <strong>「役に立つこと」が、自分が存在していい条件のように感じられている</strong>ことがあります。
      </p>
      <p>
        役に立てた日は、安心できる。
        役に立てなかった日は、どこか落ち着かない。
        この「条件つきの安心」が、支援という仕事と結びつくと、
        とても強力に働きます。なぜなら、支援職は「役に立つこと」が
        仕事そのものだからです。頑張れば頑張るほど認められ、
        その認められ方が、自分の存在を支える柱になっていく
        （この「条件つきの自己価値」については
        <Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値が分からない</Link>
        でも扱っています）。
      </p>

      <h2>その感覚は、いつ始まったのか</h2>
      <p>
        この「役に立たないと不安」という感覚は、
        多くの場合、大人になって急に生まれたものではありません。
        子ども時代の、こんな経験の積み重ねの中で、
        少しずつ形づくられていることがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 「いい子」でいると、認められた</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          手のかからない子、頑張る子、聞き分けのいい子でいると褒められた。
          逆に、わがままや甘えは歓迎されなかった。
          そうした環境では、「役に立つ自分」だけが安全だと学びます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 誰かをケアする役割を、早くから担った</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          親の機嫌をうかがう、きょうだいの世話をする、家庭の空気を保つ——
          子どもなのに「支える側」を担ってきた人は、
          自分の感情より、人の役に立つことを優先するクセが身につきやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 「ありのまま」では、安心できなかった</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何もしなくても愛される、という感覚を持ちにくかった場合、
          「何かをして価値を示し続けないと、見捨てられる」という不安が、
          静かに根を張ることがあります。
        </p>
      </div>

      <p>
        大切なのは、ここで<strong>「親のせい」と犯人を探すことではない</strong>ということです。
        多くの親もまた、自分なりに精一杯でした。
        目的は過去を裁くことではなく、
        「今の自分のパターンには、ちゃんと理由があった」と知ること。
        それは、自分を責めるのをやめるための視点です。
      </p>

      <LineCtaFatigue />

      <h2>それは「適応」だった——だから、あなたは悪くない</h2>
      <p>
        ここで、視点を一つ渡したいと思います。
        「役に立たないと不安」という感覚は、性格の欠陥でも、
        意志の弱さでもありません。それは、
        <strong>あなたが育った環境を生き延びるために、身につけた「適応」</strong>です。
      </p>
      <p>
        その環境では、役に立つことが、安全で、賢い生き方だった。
        あなたは正しく適応した。問題は、その適応が
        <strong>大人になった今も、自動で作動し続けている</strong>こと。
        かつて自分を守ってくれたパターンが、
        今は自分をすり減らす方向に働いてしまっている——それだけのことです。
      </p>
      <p>
        この感覚が、支援職としての消耗とどう結びつくかは、
        「<Link to="/articles/messiah-complex" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">救いたいが止まらない心理(メサイアコンプレックス)</Link>」や
        「<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断れない人の心理</Link>」とも深くつながっています。
      </p>

      <h2>「消す」のではなく、「ゆるめる」</h2>
      <p>
        では、どうすればいいのか。
        まず知っておいてほしいのは、長年かけて身についたこのパターンは、
        <strong>一度の気づきで消えるものではない</strong>ということです。
        「役に立たなくていい」と頭で理解しても、感覚はすぐには変わりません。
        だから、消そうとしなくていい。目指すのは「ゆるめる」ことです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「これは適応だった」と知っておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          不安が出てきたとき、「また欠陥が出た」ではなく、
          「昔の適応が作動しているんだな」と捉え直す。
          この一歩が、自己批判の連鎖を止めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「役に立たない時間」を、少しだけ持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          誰の役にも立たない、ただ自分のためだけの時間を、ほんの少し。
          最初は落ち着かないかもしれません。
          その落ち着かなさこそ、パターンが作動している証拠です。
          少しずつ慣らしていくことが、ゆるめる練習になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「役に立たなくても受け入れられる関係」に身を置く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何かを提供しなくても、ただ居るだけで受け入れられる——
          そういう関係の中でしか、「存在していい」という感覚は育ちません。
          無理に一人で変えようとせず、安全な関係の力を借りてください。
        </p>
      </div>

      <h2>ひとつ、お伝えしておきたいこと</h2>
      <p>
        子ども時代に根を持つテーマは、深く、繊細です。
        世の中には「インナーチャイルドを癒せば解決する」と
        手軽な方法をうたうものもありますが、
        <strong>生育歴に関わる傷は、短期間の手法や独学で簡単に解けるものではありません</strong>。
        無理に過去を掘り起こすと、かえって苦しくなることもあります。
      </p>
      <p>
        だからこの記事は、「気づく」ところまでを目的にしています。
        もしこのテーマを深く扱う必要を感じたら、
        一人で抱え込まず、安全な関係——信頼できる人や、専門家との時間の中で、
        少しずつ進めてください。それが、心理的に無理のない方法です。
      </p>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>「役に立たないと不安」は、性格ではなく身についた「心のクセ」</li>
        <li>その多くは、子ども時代の適応として形づくられている</li>
        <li>目的は「親のせい」探しではなく、自分を責めるのをやめること</li>
        <li>かつて自分を守った適応が、今はすり減らす方向に働いている</li>
        <li>消そうとせず「ゆるめる」。安全な関係の中で、少しずつ</li>
      </ul>
      <p>
        役に立とうとしてきたあなたは、ずっと、誰かのために頑張ってきた人です。
        その生き方は、あなたを守ってもきました。
        だからこそ、今度は——役に立たない時間の中にいる自分のことも、
        少しずつ許してあげてほしいと思います。
        あなたは、何かの役に立つから価値があるのではなく、ただ存在していい。
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">「役に立たなきゃ」の根っこを理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/messiah-complex" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">救いたいが止まらない心理(メサイアコンプレックス)</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値が分からない</Link></li>
          <li>・<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断れない人の心理——なぜNOが言えないのか</Link></li>
          <li>・<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸で生きてしまう</Link></li>
          <li>・<Link to="/articles/cannot-depend-on-others" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">人に頼れない</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「役に立たなくても受け入れられる関係」は、この感覚をゆるめる土台になります。公認心理師が、無理に過去を掘り起こさず、今の消耗の構造から一緒に整理します。10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「何もしない自分」に、罪悪感があるあなたへ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          役に立たなくても、受け入れられる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何かを提供しなくても、ただ話を聞いてもらえる。そういう時間の中でしか育たない感覚があります。支援職の消耗を構造から理解する公認心理師が、無理に過去へ踏み込まず、今のあなたのペースで一緒に整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="boundary" exclude={["/articles/value-from-being-useful"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成した一般向けの解説であり、医学的な診断・治療ではありません。生育歴に関わるテーマで強い苦痛を感じる場合は、一人で抱え込まず、医療機関や専門家にご相談ください。
      </div>
    </ArticleLayout>
  )
}

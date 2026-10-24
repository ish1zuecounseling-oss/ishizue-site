import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "バシュラールの『空間の詩学』とは、どんな本ですか?",
    a: "フランスの哲学者ガストン・バシュラールが1957年に書いた本です。家、部屋の片隅、引き出し、巣、貝殻など、私たちが親しんでいる空間が、心の中でどのようなイメージとして生きているのかを、詩を手がかりに論じています。とくに「家」は、人が安心して夢想できる場所として描かれています。",
  },
  {
    q: "バシュラールの言う「夢想」とは何ですか?",
    a: "目的を持たずに、心がゆったりとイメージの中を漂う状態のことです。何かを解決しようとする思考とは違い、ぼんやりと思いをめぐらせる時間です。バシュラールは、この夢想こそが人の心を豊かにし、生きる力を養うものだと考えました。",
  },
  {
    q: "家に帰っても仕事のことを考えてしまいます。どうすればいいですか?",
    a: "まず、仕事と家の境目をはっきりさせる工夫が役立ちます。帰宅したら仕事のスマホを別の場所に置く、着替えるなど、家に入る合図を決めてみてください。それでも仕事のことが頭から離れず眠れない状態が続く場合は、心身の疲れが限界に近いサインのこともあります。",
  },
  {
    q: "ぼんやりする時間は、無駄ではないのですか?",
    a: "バシュラールにとって、目的のない夢想は無駄ではなく、心を育てる大切な時間でした。何かを生み出さなければ、役に立たなければ、と思う人ほど、ぼんやりする時間に罪悪感を持ちがちです。けれど、何もしない時間があるからこそ、心は回復していきます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerBachelardHouse() {
  return (
    <ArticleLayout
      title="家は、夢想をかくまう｜バシュラール『空間の詩学』から読む、家でも休めない支援職の「居場所」の取り戻し方【公認心理師】"
      description="哲学者ガストン・バシュラールは『空間の詩学』で、家は人が安心して夢想できる場所だと描きました。仕事の連絡や心配が家の中まで入り込み、帰宅しても休めない支援職が、心を休める「居場所」と「ぼんやりする時間」を取り戻す方法を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-bachelard-house"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ガストン・バシュラール
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
        家に帰っても、職場のグループチャットの通知が鳴る。
        夕飯を作りながら、明日の段取りを考えている。
        ソファに座っても、利用者の顔が浮かぶ。
        体は家にいるのに、心はまだ職場にいる——。
      </p>
      <p>
        家が、休む場所でなくなっている。
        そんなとき思い出したいのが、家という空間の意味を深く考えた哲学者、
        <strong>ガストン・バシュラール</strong>の言葉です。
      </p>

      <h2>ガストン・バシュラールと『空間の詩学』</h2>
      <p>
        バシュラール(1884–1962)は、フランスの哲学者です。
        郵便局員として働きながら独学で学び、のちにソルボンヌ大学の教授となった異色の経歴の持ち主です。
        科学の哲学を研究する一方で、晩年は詩や想像力の研究に打ち込みました。
      </p>
      <p>
        1957年の<strong>『空間の詩学』</strong>は、家、部屋の片隅、引き出し、巣、貝殻など、
        私たちが親しんでいる空間が、心の中でどのように生きているのかを論じた本です。
        その中心にあるのが、<strong>家</strong>です。
      </p>

      <h2>「家は夢想をかくまう」</h2>
      <p>
        バシュラールは、家の最も大切な役割について、こう書いています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          家は夢想をかくまい、家は夢見る人を守り、家は私たちに、安らかに夢見ることを許してくれる。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          G. バシュラール『空間の詩学』第1章より(フランス語原文から筆者訳)
        </p>
      </div>
      <p>
        バシュラールにとって、家は雨風をしのぐ建物である以上に、
        <strong>心が安心して夢想できる場所</strong>でした。
        夢想とは、何かを解決しようとする思考ではなく、目的を持たずに、心がゆったりとイメージの中を漂う状態です。
        外の世界から守られているからこそ、人は家の中で、安心してぼんやりできるのです。
      </p>

      <h2>支援職に置き換えると——家が「職場の延長」になっている</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 仕事が家の中まで入り込む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スマホの通知、持ち帰りの記録、休日の緊急連絡。
          家と職場の境目があいまいになると、家は守られた場所ではなくなり、
          夢想する余裕もなくなっていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 家でも「役割」を担っている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          家に帰れば、家族の世話や家事という別の役割が待っている。
          職場でも家でも誰かのために動いていると、自分が守られる空間がどこにもありません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ ぼんやりすることに、罪悪感がある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何もせずにぼんやりしていると、「時間を無駄にしている」と感じてしまう。
          役に立つことに慣れた人ほど、目的のない時間を自分に許せません。
          (<Link to="/articles/thinker-baudelaire-ennui" className={linkCls}>ボードレールの「美徳に酔う」の回</Link>もあわせてどうぞ)
        </p>
      </div>

      <h2>安全な場所があってこそ、心は休まる</h2>
      <p>
        心理学でも、人が回復するためには<strong>安心できる場所</strong>が欠かせないと考えられています。
        守られていると感じられる場所があるからこそ、緊張がほどけ、心が休まります。
        (<Link to="/articles/safe-base" className={linkCls}>安全基地とは何か</Link>で詳しく扱っています)
      </p>
      <p>
        家に帰った途端に強い眠気や疲れが出るのは、
        ようやく安心できる場所に戻り、張りつめていた緊張がゆるんだサインでもあります。
        (<Link to="/articles/safety-makes-sleepy" className={linkCls}>安心すると眠くなる理由</Link>も参考になります)
      </p>

      <LineCtaFatigue />

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誰にとっても家が安全な場所とは限らない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バシュラールは、家を守られた場所として描きましたが、現実には家庭の中に緊張や困難を抱えている人もいます。
          家が休める場所でない場合は、家の外に、自分が安心できる場所を見つけることも大切です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">詩的なイメージは、具体的な対策の代わりにはならない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バシュラールの言葉は、家の意味を思い出させてくれますが、
          休日の緊急連絡や持ち帰り仕事が当たり前になっている職場の問題は、職場の側で見直す必要があります。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 家に入る「合図」を決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          玄関で靴を脱いだら、仕事用のスマホを決まった場所に置く。着替える。
          家に入ったことを体に知らせる小さな儀式を決めておきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 家の中に「自分の片隅」をつくる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バシュラールは、部屋の片隅のような小さな空間も、心を休める場所になると考えました。
          お気に入りの椅子、窓辺の一角など、誰の役割も担わずに過ごせる自分だけの場所を一つ決めます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 10分だけ、ぼんやりする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スマホを置いて、窓の外を眺めたり、お茶を飲んだりしながら、10分だけ目的のない時間を過ごします。
          考えごとが浮かんでも追いかけず、ただ流しておきます。
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">この記事とつながるテーマ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/safe-base" className={linkCls}>安全基地とは何か</Link></li>
          <li>・<Link to="/articles/safety-makes-sleepy" className={linkCls}>安心すると眠くなる理由</Link></li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link></li>
          <li>・<Link to="/articles/thinker-takuan-mind" className={linkCls}>心を一か所に止めない(沢庵から読む)</Link></li>
          <li>・<Link to="/articles/thinker-holmes-time" className={linkCls}>いつも時間が足りない支援職へ(キャシー・ホームズから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">家に帰っても、心が休まらない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          安心して話せる場所を、もう一つ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          職場でも家でもない場所で、役割を下ろして話せる時間です。休めなさの理由を、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-bachelard-house"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、日本で著作権の保護期間が満了しているフランス語原典(La Poétique de l'espace, 1957)から筆者が翻訳したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

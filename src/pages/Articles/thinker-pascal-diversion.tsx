import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "パスカルの「気晴らし」とは、どういう意味ですか?",
    a: "フランス語で divertissement といい、もとは「目をそらすこと」という意味を含む言葉です。パスカルは、遊びや仕事、社交などで忙しくしていることを、自分の空虚さや不安から目をそらすための営みとして「気晴らし」と呼びました。娯楽だけでなく、忙しく働くことも含まれるのが特徴です。",
  },
  {
    q: "「人間は考える葦である」もパスカルの言葉ですか?",
    a: "はい、同じ『パンセ』の言葉です。人間は自然の中では葦のように弱い存在だが、自分の弱さを知り、考えることができる点に尊さがある、という意味です。パスカルは人間の弱さと偉大さの両方を見つめ続けた思想家でした。",
  },
  {
    q: "休みの日に何もしないと、不安になります。おかしいのでしょうか?",
    a: "おかしなことではありません。パスカルが指摘したように、何もしない時間には、普段は忙しさで見えなくなっている感情が浮かびやすくなります。ただし、休んでいても気分が晴れない、何をしても楽しめない状態が2週間以上続く場合は、心身の不調のサインのこともあるため、医療機関やカウンセリングへの相談をおすすめします。",
  },
  {
    q: "気晴らしをするのは、悪いことなのですか?",
    a: "悪いことではありません。趣味や娯楽は心の回復に役立ちます。問題になるのは、気晴らしがないと落ち着かず、休むことができなくなっている場合です。気晴らしを「逃げ込む場所」としてではなく、自分で「選ぶもの」として使えているかどうかが分かれ目です。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerPascalDiversion() {
  return (
    <ArticleLayout
      title="人は、部屋で静かに休んでいられない｜パスカル『パンセ』の「気晴らし」から読む、休日も予定を詰めてしまう支援職へ【公認心理師】"
      description="17世紀の思想家パスカルは『パンセ』で「人間の不幸はすべて、部屋の中で静かに休んでいられないことから来る」と書きました。休日も予定を詰め、何もしないと不安になる支援職に向けて、「気晴らし」の心理と、静かな時間との付き合い方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-pascal-diversion"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ブレーズ・パスカル
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
        やっと取れた休み。なのに、気づけば予定を詰めている。
        家にいても、スマホを手放せない。
        何もせずに座っていると、そわそわして、つい掃除や片づけを始めてしまう。
        休むはずの時間が、なぜか落ち着かない——。
      </p>
      <p>
        この「静かに休んでいられない」感覚を、350年以上前に鋭く言い当てた人がいます。
        フランスの数学者であり思想家の<strong>ブレーズ・パスカル</strong>です。
      </p>

      <h2>ブレーズ・パスカルとはどんな人か</h2>
      <p>
        パスカル(1623–1662)は、17世紀フランスの数学者・物理学者・思想家です。
        10代で数学の論文を書き、19歳で、税務官だった父の仕事を助けるために計算機を発明しました。
        圧力に関する「パスカルの原理」や、確率論の基礎を築いたことでも知られています。
      </p>
      <p>
        幼いころから体が弱く、生涯の多くを病とともに過ごしました。
        31歳のとき、ある夜に深い宗教的体験をし、その後は信仰と人間についての思索に打ち込みます。
        39歳で亡くなったあと、遺された膨大なメモを編んで出版されたのが<strong>『パンセ』</strong>(「思考」の意)です。
      </p>

      <h2>「人間の不幸は、部屋で静かにしていられないことから来る」</h2>
      <p>
        『パンセ』の中でもよく知られているのが、「気晴らし」と題された断章のこの一節です(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          人間の不幸はすべて、ただ一つのことから来ている。
          それは、部屋の中で静かに休んでいられない、ということだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          B. パスカル『パンセ』断章「気晴らし」より(フランス語原文から筆者訳)
        </p>
      </div>
      <p>
        パスカルは、人が狩りや賭けごと、社交、戦争、仕事にまで熱中するのは、
        それ自体が欲しいからではないと考えました。
        ウサギ狩りに行く人に、「これをあげるから狩りはやめなさい」とウサギを渡しても、喜ばないだろう。
        人が求めているのは獲物ではなく、<strong>追いかけている間の忙しさ</strong>なのだ、と。
      </p>

      <h2>何もしないとき、人は自分の「空虚」と向き合う</h2>
      <p>
        では、なぜ人は静かにしていられないのか。パスカルは別の断章でこう書いています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          人間にとって、完全な休息のうちにあることほど耐えがたいものはない。
          情熱もなく、用事もなく、気晴らしもなく、打ち込むものもないとき、
          人は自分の無を、見捨てられていることを、足りなさを、頼りなさを、無力さを、空虚を感じる。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          B. パスカル『パンセ』断章「倦怠」より(フランス語原文から筆者訳)
        </p>
      </div>
      <p>
        忙しくしている間は、こうした感覚を見ずにすみます。
        パスカルにとって「気晴らし」とは、娯楽のことだけではなく、
        <strong>自分の内側から目をそらすための、あらゆる忙しさ</strong>のことでした。
      </p>
      <p>
        この洞察は、現代の心理学実験でも確かめられています。
        2014年に科学誌『サイエンス』に発表された研究では、
        何もない部屋で6〜15分ほど一人で考えごとをして過ごすよう求められた参加者の多くが、それを楽しめませんでした。
        別の実験では、退屈をしのぐために、事前に「お金を払ってでも避けたい」と答えていた弱い電気ショックを、
        男性の約3分の2、女性の約4分の1が自分で押したと報告されています。
      </p>

      <h2>支援職に置き換えると——忙しさが「気晴らし」になっている</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 休日にも、予定を詰めてしまう</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          用事、家事、人との約束。空白の時間ができると不安になり、何かで埋めてしまう。
          体は休みの日でも、心はずっと追いかけ続けています。
          (<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 仕事そのものが、気晴らしになっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          忙しく人の世話をしている間は、自分の疲れや寂しさを感じずにすむ。
          支援の仕事は、自分の内側から目をそらすための、もっとも「正しい」気晴らしになりえます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 静かになると、浮かんでくるものがある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ふと手が止まったとき、仕事の反省、将来の不安、むなしさが一気に押し寄せる。
          だから、また何かをして静けさを埋めてしまう。
          (<Link to="/articles/helper-rumination" className={linkCls}>支援職の反芻思考</Link>で詳しく扱っています)
        </p>
      </div>

      <h2>静けさを、少しずつ取り戻す</h2>
      <p>
        パスカルの指摘は厳しいものですが、裏を返せば、
        <strong>静かに休めないのは、あなたの弱さではなく、人間に共通する性質</strong>だということです。
        だからこそ、いきなり「何もしない休日」を目指す必要はありません。
      </p>
      <p>
        大切なのは、静かな時間に浮かんでくる感情を、少しずつ受け止められるようになることです。
        浮かんでくる疲れや寂しさは、忙しさの陰でずっと置き去りにされてきた、あなた自身の声でもあります。
        (<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない理由</Link>も参考になります)
      </p>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">パスカルの答えは「信仰」だった</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          パスカルは、人間の空虚を満たせるのは神だけだと考えました。
          この記事では、その結論の手前にある「人はなぜ静かにしていられないのか」という観察だけを借りています。
          空虚とどう向き合うかの答えは、人によって違ってかまいません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">休めなさが、不調のサインのこともある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何もしないと強い不安に襲われる、眠れない、何をしても楽しめない状態が続くときは、
          考え方の問題ではなく、心身の不調が隠れていることがあります。その場合は、医療機関に相談してください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 5分だけ、部屋で静かに座る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スマホを別の部屋に置き、タイマーを5分にセットして、ただ座ります。
          そわそわしても大丈夫です。「落ち着かないな」と気づければ十分です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 浮かんできたものに、名前をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          静かな時間に浮かんだ感情を、「疲れ」「寂しさ」「焦り」と一言で書き留めます。
          正体がわかるだけで、追い払うために忙しくする必要が少し減ります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 気晴らしを「選んで」使う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          動画やゲームの前に、「これは休むためか、目をそらすためか」と一度だけ自分に聞いてみます。
          どちらでも構いません。自分で選んでいる感覚を持つことが大切です。
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
          <li>・<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない理由</Link></li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link></li>
          <li>・<Link to="/articles/thinker-baudelaire-ennui" className={linkCls}>倦怠と「美徳に酔う」こと(ボードレールから読む)</Link></li>
          <li>・<Link to="/articles/thinker-frankl-existential-vacuum" className={linkCls}>実存的空虚と日曜神経症(フランクルから読む)</Link></li>
          <li>・<Link to="/articles/thinker-bachelard-house" className={linkCls}>家は、夢想をかくまう(バシュラールから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">休みの日も、落ち着かない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          静かな時間に浮かぶものを、一緒に見てみませんか
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          忙しさの陰に置き去りにしてきた気持ちを、急がずに言葉にしていく時間です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-pascal-diversion"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、著作権の保護期間が満了しているフランス語原典(Pensées, 1670)から筆者が翻訳したものです。断章番号は版によって異なるため、断章の題で示しています。心理学研究は Wilson, T. D. et al. (2014). Just think: The challenges of the disengaged mind. Science, 345(6192), 75–77. を参照しました。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ディオゲネスとは、どんな人ですか?",
    a: "古代ギリシャの哲学者で、紀元前4世紀に活躍しました。財産を持たず、大きな甕(かめ)を住まいにしていたと伝えられ、世間の常識や名誉、富に縛られない生き方を実践したことで知られています。「犬儒派(キュニコス派)」と呼ばれる思想の代表的な人物です。",
  },
  {
    q: "「日陰になるからどいてくれ」とは、どんな話ですか?",
    a: "アレクサンドロス大王がディオゲネスを訪ね、「何か望みはあるか」と尋ねたところ、日なたぼっこをしていたディオゲネスが「日陰になるから、そこをどいてくれ」と答えたという逸話です。ディオゲネス・ラエルティオスの『ギリシア哲学者列伝』に伝えられています。権力者からの恩恵にも心を動かされない、彼の生き方を象徴する話です。",
  },
  {
    q: "「通貨の刻印を変えよ」とは、どういう意味ですか?",
    a: "ディオゲネスが受けたとされる言葉で、もとは通貨の偽造をめぐる逸話に由来しますが、のちに「世の中で当たり前とされている価値の基準を、つくり直せ」という意味で理解されるようになりました。世間が大切にしている名誉や評判、富を、本当に価値あるものか問い直すことを指しています。",
  },
  {
    q: "ディオゲネスの逸話は、すべて本当にあったことですか?",
    a: "ディオゲネス本人の著作は残っておらず、逸話の多くは数百年後にまとめられた『ギリシア哲学者列伝』などを通して伝わっています。そのため、どこまでが事実かははっきりしません。この記事では、逸話を史実としてではなく、彼の思想を表すたとえ話として読んでいます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerDiogenesCurrency() {
  return (
    <ArticleLayout
      title="「日陰になるからどいてくれ」｜ディオゲネスから読む、評価と肩書から一度降りるということ【公認心理師】"
      description="大王に望みを聞かれ「日陰になるからどいてくれ」と答えた哲学者ディオゲネス。世間の価値基準そのものを問い直した彼の生き方は、評価や肩書、「必要とされること」に縛られて疲れた支援職に、別の物差しを思い出させてくれます。公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-diogenes-currency"
      date="2026-10-19"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ディオゲネス
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
        上司からの評価、同僚からの信頼、利用者や家族からの感謝。
        資格、役職、「頼れる人」という評判。
        気がつけば、それらを守るために働いているような気がする。
        評価が下がることが、何より怖い——。
      </p>
      <p>
        私たちは、世間が決めた「価値の物差し」で、自分を測り続けています。
        その物差しそのものを笑い飛ばした哲学者がいます。
        古代ギリシャの<strong>ディオゲネス</strong>です。
      </p>

      <h2>甕に住んだ哲学者</h2>
      <p>
        ディオゲネス(紀元前4世紀)は、現在のトルコ北部にあたるシノペ出身の哲学者です。
        財産をほとんど持たず、大きな甕(かめ)を住まいにして、アテナイの街で暮らしたと伝えられています。
        名誉や富、世間の常識に縛られない生き方を、言葉ではなく行動で示した人でした。
      </p>
      <p>
        本人の著作は残っておらず、その姿は、数百年後にディオゲネス・ラエルティオスがまとめた
        『ギリシア哲学者列伝』などの逸話を通して伝えられています。
      </p>

      <h2>「日陰になるから、どいてくれ」</h2>
      <p>
        最も有名なのは、アレクサンドロス大王との逸話です(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          日なたぼっこをしていたディオゲネスのもとに、アレクサンドロス大王がやってきて言った。
          「何か望みがあれば、言ってみよ」。<br />
          ディオゲネスは答えた。「日陰になるから、そこをどいてくれ」。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ディオゲネス・ラエルティオス『ギリシア哲学者列伝』第6巻より(ギリシャ語原典をもとに筆者訳・要約)
        </p>
      </div>
      <p>
        世界を手に入れた大王が差し出せるものは、富でも地位でも、何でもあったはずです。
        けれどディオゲネスが望んだのは、ただ日の光を遮らないでもらうことだけでした。
        彼にとって、<strong>大王が与えられるものは、自分の幸福にとって必要なものではなかった</strong>のです。
      </p>

      <h2>「通貨の刻印を変えよ」</h2>
      <p>
        ディオゲネスの生き方を表す言葉に、「通貨の刻印を変えよ」というものがあります。
        もとは通貨の偽造をめぐる逸話に由来する言葉ですが、
        のちに<strong>「世の中で当たり前とされている価値の基準を、つくり直せ」</strong>という意味で理解されてきました。
      </p>
      <p>
        世間では、名誉、評判、富が「価値ある通貨」として流通しています。
        ディオゲネスは、その通貨が本当に価値のあるものなのかを問い、
        自分の生き方で、別の価値の基準を示そうとしたのです。
      </p>
      <p>
        こんな逸話もあります。子どもが両手で水をすくって飲んでいるのを見て、
        ディオゲネスは持っていた唯一の杯を投げ捨て、
        「子どもに、質素さで負けた」と言ったといいます。
      </p>

      <h2>支援職に置き換えると——「必要とされること」という通貨</h2>
      <p>
        支援職の世界にも、独特の「通貨」が流通しています。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>必要とされること</strong>:「あなたがいないと困る」と言われること</li>
          <li>・<strong>頼られること</strong>:難しいケースを任されること</li>
          <li>・<strong>感謝されること</strong>:利用者や家族から「ありがとう」と言われること</li>
          <li>・<strong>評価されること</strong>:「よくやっている」と認められること</li>
        </ul>
      </div>
      <p>
        どれも、仕事のやりがいにつながる大切なものです。
        けれど、これだけが自分の価値を測る通貨になると、
        必要とされない日、感謝されない日、評価されない日に、自分の価値まで下がったように感じてしまいます。
        (<Link to="/articles/other-centered-living" className={linkCls}>他人軸で生きてしまう</Link>で扱っている状態です)
      </p>
      <p>
        ディオゲネスの問いを借りれば、こうなります。
        <strong>その通貨は、本当にあなたの幸福に必要なものだろうか。</strong>
        大王が差し出す富のように、なくても日の光は浴びられるものではないだろうか。
      </p>

      <LineCtaFatigue />

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ディオゲネスの真似をする必要はない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ディオゲネスは、人前でわざと常識外れのふるまいをして、人々を挑発することもありました。
          その生き方をそのまま真似ることは、現代の社会でも、支援の現場でも現実的ではありません。
          この記事では、彼の逸話を<strong>自分の物差しを点検するためのたとえ話</strong>として読んでいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">評価を気にすることが、悪いわけではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事をする以上、評価や信頼はある程度必要です。
          問題は、それが<strong>自分の価値を測る唯一の物差し</strong>になっていることです。
          物差しを一本だけにせず、自分で選んだ物差しを持つことが大切です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分が集めている「通貨」を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          評価、感謝、必要とされること——自分が何を得るために頑張っているのかを書き出します。
          並べてみると、どの通貨に自分の価値を預けているかが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「日なたぼっこ」の時間を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          誰からも評価されず、誰の役にも立たないけれど、自分が心地よいと感じる時間を持ちます。
          ディオゲネスにとっての日なたぼっこのような、<strong>お金も肩書もいらない満足</strong>です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 手放せる「杯」を一つ探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          持たなくてもいいのに持ち続けているもの——引き受けすぎた役割、必要以上の完璧さ、誰かの期待——を一つ探して、手放せないか考えてみます。
          (<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link>もあわせてどうぞ)
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
          <li>・<Link to="/articles/other-centered-living" className={linkCls}>他人軸で生きてしまう</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className={linkCls}>自分の価値がわからない(条件つき自己価値)</Link></li>
          <li>・<Link to="/articles/afraid-to-leave-role" className={linkCls}>役割を降りるのが怖い</Link></li>
          <li>・<Link to="/articles/thinker-james-self-esteem" className={linkCls}>頑張っても自分に満足できない理由(ジェイムズから読む)</Link></li>
          <li>・<Link to="/articles/thinker-pyrrho-epoche" className={linkCls}>「きっとこう思われている」を手放す(ピュロンから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">評価を気にし続けて、疲れている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自分の物差しを、一緒に探す時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          世間の評価から少し離れて、あなた自身が大切にしたいものは何かを、一緒に言葉にしていきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-diogenes-currency"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインのギリシャ語原典(ディオゲネス・ラエルティオス『ギリシア哲学者列伝』)をもとに筆者が翻訳・要約したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

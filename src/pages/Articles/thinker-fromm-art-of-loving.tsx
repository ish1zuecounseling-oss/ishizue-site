import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "フロムの『愛するということ』は、どんな本ですか?",
    a: "ドイツ出身の社会心理学者・精神分析家エーリッヒ・フロムが1956年に出版した本です。愛は自然に「落ちる」ものではなく、学び、実践し、身につけていく「技術」だと論じました。恋愛だけでなく、親子の愛、隣人への愛、自分への愛まで幅広く扱い、世界中で読み継がれています。",
  },
  {
    q: "フロムの言う愛の4つの要素とは何ですか?",
    a: "フロムは、愛には共通して「配慮(気づかい)」「責任」「尊重」「知」という要素が含まれていると述べました。とくに「尊重」は、相手を自分の思いどおりにするのではなく、相手がその人らしく成長していくことを願う態度として説明されています。",
  },
  {
    q: "自分を愛することは、わがままではないのですか?",
    a: "フロムは、自分を愛することとわがまま(利己主義)は違うと考えました。むしろ利己的な人は、自分を愛しすぎているのではなく、自分を本当には愛せていないのだと論じています。他人を本当に愛せる人は、自分のことも大切にできる人だ、というのがフロムの考えです。",
  },
  {
    q: "「持つ」生き方と「ある」生き方とは何ですか?",
    a: "フロムが晩年の著書『生きるということ(To Have or to Be?)』で示した二つの生き方です。「持つ」生き方は、財産や地位、肩書、実績を持つことで自分を確かめる生き方、「ある」生き方は、何かを持つことではなく、今ここで生き生きと関わり、感じ、考えることそのものに充実を見いだす生き方です。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerFrommArtOfLoving() {
  return (
    <ArticleLayout
      title="自分を愛せない人は、他人も本当には愛せない｜フロム『愛するということ』から読む、自己犠牲的な支援【公認心理師】"
      description="エーリッヒ・フロムは、愛は自然に生まれる感情ではなく、学んで身につける「技術」だと考えました。そして、自分を愛することは利己主義ではなく、他人を愛するための土台だと説きました。自分を後回しにして支え続ける支援職の「愛し方」を、公認心理師が見直します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-fromm-art-of-loving"
      date="2026-10-20"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ エーリッヒ・フロム
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
        利用者のためなら、どこまでも頑張れる。
        自分の休みを削っても、自分の体調を後回しにしても、それが支援者のあるべき姿だと思ってきた。
        でも最近、利用者に優しくする余裕がない。心がすり減って、何も与えられなくなっている——。
      </p>
      <p>
        自分を後回しにして人を支え続けることは、本当に「愛」なのでしょうか。
        この問いに、正面から答えた思想家がいます。
        『愛するということ』の著者、<strong>エーリッヒ・フロム</strong>です。
      </p>

      <h2>エーリッヒ・フロムと『愛するということ』</h2>
      <p>
        フロム(1900–1980)は、ドイツのフランクフルトに生まれた社会心理学者・精神分析家です。
        ナチスの台頭を受けてアメリカへ渡り、人が自由を手放して権威に従ってしまう心理を描いた
        『自由からの逃走』(1941年)で広く知られるようになりました。
      </p>
      <p>
        1956年の『愛するということ』(原題 The Art of Loving)で、フロムは
        <strong>愛は自然に「落ちる」ものではなく、学び、実践して身につける「技術」</strong>だと論じました。
        この本は世界中で読み継がれ、日本でも長く読まれています。
      </p>

      <h2>愛は「技術」であり、4つの要素を持つ</h2>
      <p>
        フロムによれば、どんな形の愛にも共通する要素があります(筆者による要約)。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>配慮</strong>:相手の生命や成長に、積極的に関心を持つこと</li>
          <li>・<strong>責任</strong>:相手の求めに、自分から応えようとすること</li>
          <li>・<strong>尊重</strong>:相手をありのままに見て、その人らしく成長することを願うこと</li>
          <li>・<strong>知</strong>:相手を表面だけでなく、深く理解しようとすること</li>
        </ul>
      </div>
      <p>
        これは、支援の仕事に求められる姿勢そのものです。
        とくにフロムが強調したのは<strong>尊重</strong>でした。
        尊重とは、相手を自分の思いどおりにすることではなく、
        相手が<strong>その人自身のやり方で</strong>育っていくことを願う態度です。
        支援者の「こうしてほしい」を押しつけることは、配慮のつもりでも、尊重を欠いた愛になってしまいます。
      </p>

      <h2>自分を愛することは、利己主義ではない</h2>
      <p>
        フロムの考えの中で、支援職にとって最も大切なのが、<strong>自分への愛</strong>についての議論です。
      </p>
      <p>
        フロムは、自分を愛することと、わがまま(利己主義)はまったく違うと考えました。
        利己的な人は、自分を愛しすぎているのではなく、むしろ<strong>自分を本当には愛せていない</strong>。
        だから、満たされない心を埋めようとして、ほかの人から奪おうとするのだ、と。
      </p>
      <p>
        そしてフロムは、他人を本当に愛せる人は、自分のことも大切にできる人だと説きました。
        <strong>他人だけを愛して、自分を愛せない人は、本当の意味で愛することができていない</strong>——。
        自分を犠牲にし続ける愛は、どこかで無理が生じ、やがて与えることそのものができなくなってしまうのです。
      </p>

      <h2>支援職に置き換えると——自己犠牲は、愛の完成形ではない</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分を削って与える支援は、続かない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分を後回しにして与え続けると、心のエネルギーはやがて底をつきます。
          与えたくても与えられなくなったとき、支援者は利用者に苛立ち、そんな自分を責めることになります。
          (<Link to="/articles/helper-stop-self-sacrifice" className={linkCls}>自己犠牲をやめたいと感じたとき</Link>で扱っている状態です)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「与えること」が、見返りの取引になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          フロムは、与えることを「失うこと」や「見返りを得るための取引」と感じる与え方を、成熟した愛とは区別しました。
          感謝や評価がないと与えられなくなるなら、それは自分の満たされなさを、与えることで埋めようとしているのかもしれません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「役に立つ実績」を持つことで、自分を確かめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          フロムは晩年の著書『生きるということ』で、財産や地位、実績を<strong>「持つ」ことで自分を確かめる生き方</strong>と、
          今ここで生き生きと<strong>「ある」生き方</strong>を対比しました。
          支援職が「役に立った実績」を持つことで自分の価値を確かめているなら、それは「持つ」生き方に近いものです。
          (<Link to="/articles/value-from-being-useful" className={linkCls}>役に立つことでしか価値を感じられない</Link>もあわせてどうぞ)
        </p>
      </div>

      <LineCtaCompassion />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「愛せていない」と自分を責める材料にしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          フロムの議論を読むと、「自分は本当には愛せていない」と落ち込む人もいるかもしれません。
          けれどフロムは、愛は技術であり、<strong>学び、練習して身につけていくもの</strong>だと言っています。
          今できていないことは、これから身につけられることです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">職場の構造の問題は、個人の愛し方では解決しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足や過重な業務で自分を後回しにせざるを得ない状況は、個人の心がけだけでは変えられません。
          自分を大切にすることには、職場に声を上げることや、働き方を見直すことも含まれます。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 利用者にしている配慮を、自分にもする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          疲れていそうな利用者に「少し休みましょうか」と声をかけるように、自分にも同じ言葉をかけてみます。
          フロムの言う「配慮」を、自分自身にも向ける練習です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 与えるときの気持ちを点検する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何かを引き受けるとき、「与えたい」から引き受けているのか、「断ると評価が下がる」から引き受けているのかを確かめます。
          後者が多いなら、それは愛ではなく、取引になりかけています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「持たない」時間を過ごす</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何かを成し遂げたり、誰かの役に立ったりしない時間に、ただ景色を見たり、音楽を聴いたりします。
          実績を持つことではなく、<strong>今ここに「ある」こと</strong>で満たされる感覚を、少しずつ思い出していきます。
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
          <li>・<Link to="/articles/helper-stop-self-sacrifice" className={linkCls}>支援職の自己犠牲をやめたいと感じたとき</Link></li>
          <li>・<Link to="/articles/value-from-being-useful" className={linkCls}>役に立つことでしか価値を感じられない</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className={linkCls}>自分の価値がわからない(条件つき自己価値)</Link></li>
          <li>・<Link to="/articles/thinker-kant-dignity" className={linkCls}>あなた自身も「手段」ではない(カントから読む)</Link></li>
          <li>・<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>人類を愛するほど、隣の人を愛せない(ドストエフスキーから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">自分を後回しにして、支え続けてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          あなた自身を大切にする時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          人を支え続けるためにも、まずあなたが満たされる時間が必要です。自分を大切にすることへの抵抗も含めて、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-fromm-art-of-loving"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はフロムの著作の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。邦訳に『愛するということ』『生きるということ』(紀伊國屋書店)があります。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

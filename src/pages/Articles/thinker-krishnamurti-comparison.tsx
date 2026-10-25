import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "クリシュナムルティとは、どんな人ですか?",
    a: "インド出身の思想家ジッドゥ・クリシュナムルティ(1895–1986)です。少年時代に宗教団体から「世界教師」として育てられましたが、1929年にその役割と組織を自ら解散し、以後は特定の宗教や組織に属さず、世界各地で対話と講演を続けました。",
  },
  {
    q: "「深く病んだ社会にうまく適応していることは、健康の証ではない」はクリシュナムルティの言葉ですか?",
    a: "この言葉はクリシュナムルティの名言として広く紹介されていますが、本人の著作や講演記録の中で、はっきりした出典は確認されていません。クリシュナムルティには出典がはっきりしないまま広まった名言が多いため、この記事では、彼の講演や著作で繰り返し語られている考え方だけを扱っています。",
  },
  {
    q: "クリシュナムルティの「選択なき気づき」とは何ですか?",
    a: "自分の考えや感情、周りの出来事を、良い悪いと判断したり、変えようとしたりせずに、そのまま観ていることを指す言葉です。現代のマインドフルネスにも通じる考え方として紹介されることがありますが、クリシュナムルティ自身は、それを特定の技法や方法にすることには否定的でした。",
  },
  {
    q: "人と比べてしまう癖は、どうすればやめられますか?",
    a: "無理にやめようとすると、かえって「比べてしまう自分」を責めることになりがちです。まずは、比べている瞬間に気づき、「今、比べている」とそのまま認めることから始めてください。比べる癖が強く、自分を責める気持ちが続いてつらい場合は、カウンセリングなどで一緒に整理することもできます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerKrishnamurtiComparison() {
  return (
    <ArticleLayout
      title="比べるのをやめて、ただ観る｜クリシュナムルティから読む、比較と自己評価で疲れる支援職【公認心理師】"
      description="思想家クリシュナムルティは、人と比べ、理想の自分と比べることが心の葛藤を生むと考え、判断を加えずにただ観る「選択なき気づき」を説きました。同僚や理想の支援者像と比べて疲れる支援職へ、出典の不確かな名言に注意しながら、その考え方を公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-krishnamurti-comparison"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ジッドゥ・クリシュナムルティ
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
        あの先輩のように、利用者とうまく話せない。
        同期はもう主任なのに、自分はまだ現場で手いっぱい。
        研修で聞いた「理想の支援者」と比べると、自分はまだまだ足りない——。
      </p>
      <p>
        人と比べ、理想の自分と比べて、いつも何かが足りない気がする。
        この比較の苦しさを、生涯にわたって問い続けた思想家がいます。
        インド出身の<strong>ジッドゥ・クリシュナムルティ</strong>です。
      </p>

      <h2>クリシュナムルティ——「世界教師」の座を降りた思想家</h2>
      <p>
        クリシュナムルティ(1895–1986)は、南インドに生まれました。
        少年時代、ある宗教団体に見いだされ、人々を導く「世界教師」となるべく育てられます。
        けれど1929年、34歳のとき、彼は自分のために作られた教団を自ら解散しました。
        そのとき語ったとされるのが、「真理は道なき地である」という言葉です。
        どんな宗教や組織、指導者を通しても真理にはたどり着けない、という宣言でした。
      </p>
      <p>
        以後、クリシュナムルティは特定の宗教や組織に属さず、
        世界各地で講演と対話を続け、人がどうすれば恐れや葛藤から自由になれるのかを問い続けました。
      </p>

      <h2>比較が、心の葛藤を生む</h2>
      <p>
        クリシュナムルティが繰り返し語ったテーマの一つが、<strong>比較</strong>です。
        その考え方を、筆者の言葉で要約します。
      </p>
      <p>
        私たちは幼いころから、兄弟と、同級生と、誰かと比べられて育ちます。
        やがて自分でも、他人と比べ、「こうあるべき理想の自分」と今の自分を比べるようになる。
        クリシュナムルティは、この比べることそのものが、
        <strong>「今の自分」と「あるべき自分」のあいだに終わりのない葛藤を生む</strong>と考えました。
      </p>
      <p>
        理想に近づこうと努力するほど、今の自分は「足りないもの」として否定され続けます。
        比べている限り、心が休まることはない——。
        クリシュナムルティは、比べることをやめたとき、はじめて<strong>あるがままの自分</strong>を見ることができると説きました。
      </p>

      <h2>選択なき気づき——判断を加えずに、ただ観る</h2>
      <p>
        では、どうすれば比較から自由になれるのか。
        クリシュナムルティが語ったのが、<strong>選択なき気づき</strong>です。
      </p>
      <p>
        自分の考えや感情を、「良い」「悪い」と判断したり、変えようとしたりせずに、
        <strong>ただそのまま観ている</strong>こと。
        嫉妬がわいたら、嫉妬を責めず、追い払おうともせず、ただ「嫉妬している」と観る。
        クリシュナムルティは、判断を加えずに観ることそのものが、心に変化をもたらすと考えました。
      </p>
      <p>
        この考え方は、現代のマインドフルネスにも通じるものとして紹介されることがあります。
        ただしクリシュナムルティ自身は、気づきを「技法」や「方法」にすることには否定的でした。
        練習して身につける技術ではなく、<strong>今この瞬間に、ただ観ること</strong>だったのです。
      </p>

      <h2>支援職に置き換えると——比べ続けて疲れる</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 同僚と比べる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          経験年数、資格、利用者からの評判。比べる材料には事欠きません。
          比べるたびに、自分の足りないところばかりが目に入ります。
          (<Link to="/articles/thinker-girard-scapegoat" className={linkCls}>ジラールの「模倣的欲望」の回</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「理想の支援者」と比べる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          いつも穏やかで、どんな利用者にも寄り添える支援者。
          そんな理想像と比べると、苛立ったり疲れたりする自分は、いつまでも失格に見えてしまいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 比べている自分を、また責める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「人と比べてはいけない」と思うと、比べてしまう自分を責めることになります。
          比較が、さらなる比較を生む。クリシュナムルティが警告したのは、この終わりのない循環でした。
          (<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link>も参考になります)
        </p>
      </div>

      <LineCtaFatigue />

      <h2>出典の不確かな名言に注意</h2>
      <p>
        クリシュナムルティには、出典がはっきりしないまま広まっている名言がたくさんあります。
        代表的なのが、「深く病んだ社会にうまく適応していることは、健康の証ではない」という言葉です。
        よく引用されますが、本人の著作や講演記録の中で、はっきりした出典は確認されていません。
      </p>
      <p>
        この記事では、こうした名言ではなく、彼が講演や著作で繰り返し語った考え方を扱っています。
      </p>

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">比較を、完全にやめることはできない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人は社会の中で生きる以上、比べることを完全にやめるのは難しいものです。
          仕事の振り返りでは、基準と比べることも必要です。
          大切なのは比較をゼロにすることではなく、<strong>比較に自分の価値を決めさせない</strong>ことです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「ただ観る」は、簡単ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          判断を加えずに観ることは、言葉にすると簡単ですが、実際にはとても難しいものです。
          うまくできなくても、それ自体を責める必要はありません。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「今、比べている」と気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          誰かと比べて落ち込みかけたら、「今、比べている」と心の中で言葉にします。
          比べるのをやめようとせず、ただ気づくだけで十分です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 理想像を書き出して、眺めてみる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分が抱えている「理想の支援者像」を書き出し、少し離れて眺めます。
          その理想が、本当に人間に可能なものかを考えてみます。
          (<Link to="/articles/thinker-horney-shoulds" className={linkCls}>ホーナイの「べき」の専制の回</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情に名前をつけて、そのままにしておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          嫉妬、焦り、悔しさがわいたら、「嫉妬」「焦り」と名前をつけ、追い払おうとせずにそのままにしておきます。
          (<Link to="/articles/thinker-nishida-pure-experience" className={linkCls}>西田幾多郎の「純粋経験」の回</Link>も参考になります)
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
          <li>・<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link></li>
          <li>・<Link to="/articles/thinker-girard-scapegoat" className={linkCls}>なぜチームの中で一人が責められるのか(ジラールから読む)</Link></li>
          <li>・<Link to="/articles/thinker-horney-shoulds" className={linkCls}>「〜すべき」に追い詰められる理由(ホーナイから読む)</Link></li>
          <li>・<Link to="/articles/thinker-upanishad-witness" className={linkCls}>役割を演じる自分と、それを見ている自分(ウパニシャッドから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">比べ続けて、疲れてしまった方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          誰とも比べない場所で、話をする時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          ここでは、あなたを誰とも比べません。今のあなたのままで、話を聴きます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-krishnamurti-comparison"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はクリシュナムルティの講演・著作で繰り返し語られた考え方を筆者が要約したものです(1929年の解散演説の一句「真理は道なき地である」のみ筆者訳で引用)。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

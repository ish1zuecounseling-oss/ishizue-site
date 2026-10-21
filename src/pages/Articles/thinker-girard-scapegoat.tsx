import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "ジラールの「模倣的欲望」とは何ですか?",
    a: "フランス出身の思想家ルネ・ジラールが示した考え方で、人は自分の内側から自然に何かを欲しがるのではなく、他人が欲しがっているものを見て、それをまねるように欲しがるようになる、というものです。欲望には、手本となる他者(媒介者)がいるとジラールは考えました。",
  },
  {
    q: "ジラールの「スケープゴート(身代わりの山羊)」とは何ですか?",
    a: "集団の中で緊張や対立が高まったとき、人々が一人の誰かを原因とみなして責め、その人を排除することで、集団の一体感を取り戻す仕組みのことです。ジラールは、責められる人が本当に原因かどうかに関わらず、集団はその人が悪いと信じ込むと考えました。",
  },
  {
    q: "職場で自分ばかり責められていると感じます。スケープゴートにされているのでしょうか?",
    a: "そうした可能性もありますが、一人で判断するのは難しいものです。責められ方が理不尽だと感じる、自分だけが原因にされている、という状態が続くなら、信頼できる第三者や職場外の相談窓口に状況を話してみてください。ハラスメントにあたる場合もあります。",
  },
  {
    q: "人と比べて落ち込むのは、ジラールの考えでどう説明できますか?",
    a: "ジラールの考えでは、私たちの「こうなりたい」「これが欲しい」は、多くの場合、身近な誰かの欲望をまねたものです。だから、手本にしている相手と自分を比べ、相手が持っているものを自分が持っていないと感じると、強い劣等感や競争心が生まれやすくなります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerGirardScapegoat() {
  return (
    <ArticleLayout
      title="なぜチームの中で一人が責められるのか｜ルネ・ジラールの「模倣的欲望」と「スケープゴート」から読む、職場の人間関係【公認心理師】"
      description="思想家ルネ・ジラールは、人の欲望は他人の欲望をまねて生まれ、集団は緊張が高まると一人を責めることで一体感を取り戻すと考えました。同僚と比べて疲れる、チームの中で誰かが責められ役になる——支援の職場の人間関係を、公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-girard-scapegoat"
      date="2026-10-21"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ルネ・ジラール
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
        事故が起きたとき、職場の空気が重くなったとき、なぜかいつも同じ人が責められる。
        「あの人の対応が悪かったから」と、みんなが口をそろえる。
        責められている人が自分のこともあれば、黙って見ている側にいることもある——。
      </p>
      <p>
        支援の職場は、命や生活に関わる緊張の高い場所です。
        その緊張が、なぜ一人の誰かに向かうのか。
        この問いを、人間の欲望の仕組みから説明した思想家がいます。
        <strong>ルネ・ジラール</strong>です。
      </p>

      <h2>ルネ・ジラールと二つの発見</h2>
      <p>
        ジラール(1923–2015)は、フランスに生まれ、アメリカのスタンフォード大学などで教えた思想家です。
        文学の研究から出発し、やがて人類学、宗教学にまで研究を広げました。
        その思想の柱は、<strong>模倣的欲望</strong>と<strong>スケープゴート</strong>という二つの発見です。
      </p>

      <h2>欲望は、他人の欲望をまねて生まれる</h2>
      <p>
        ジラールは、小説を読み込むなかで、登場人物たちの欲望には共通の形があることに気づきました。
        人は何かを、自分の内側から自然に欲しがるのではない。
        <strong>誰かが欲しがっているのを見て、それをまねるように欲しがる</strong>——。
        ジラールはこれを<strong>模倣的欲望</strong>と呼びました。
      </p>
      <p>
        手本になる他者がいるから、それが欲しくなる。
        そして、同じものを欲しがる者どうしは、やがて互いをライバルと見るようになります。
        身近な相手ほど、手本にも、ライバルにもなりやすいのです。
      </p>

      <h2>緊張は、一人に向けられる——スケープゴート</h2>
      <p>
        模倣による対立が集団の中に広がると、緊張が高まっていきます。
        ジラールは、そのとき集団は<strong>一人の誰かを原因とみなし、みんなで責めることで、一体感を取り戻す</strong>と考えました。
        これが<strong>スケープゴート(身代わりの山羊)</strong>の仕組みです。
      </p>
      <p>
        ジラールが強調したのは、責められる人が本当に原因かどうかは、ほとんど関係がないということでした。
        集団は、その人が悪いと<strong>心から信じ込む</strong>。
        だからこそ、責めている側は、自分たちが誰かを犠牲にしていることに気づきにくいのです。
      </p>

      <h2>支援職に置き換えると——比べて疲れ、誰かが責められる職場</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 同僚と比べて、欲しくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同期が資格を取った、後輩が主任になった、あの人は利用者に慕われている。
          自分が本当にそれを望んでいたのかわからないまま、比べて焦り、落ち込む。
          その「欲しい」は、もしかすると身近な誰かの欲望をなぞったものかもしれません。
          (<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 緊張の高いチームで、責められ役が生まれる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足、事故、家族からの苦情。職場の緊張が高まると、
          「あの人がミスをしたから」「あの人の対応が遅いから」と、一人に原因が集まることがあります。
          その人を責めることで、チームの不安は一時的に収まりますが、本当の問題——人員や仕組み——は手つかずのままです。
          (<Link to="/articles/helper-organization-unsafe" className={linkCls}>職場が危ないと感じるときの対処法</Link>で心理的安全性について扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 利用者や家族が、責められ役になることもある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「あの利用者がいるから大変」「あの家族は問題だ」。
          チームのしんどさが、特定の利用者や家族に向けられることもあります。
          支援する側が、気づかないうちにスケープゴートの仕組みに加わってしまう危うさです。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">すべての欲望が模倣ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ジラールの理論は、欲望の大きな部分を模倣で説明しますが、人の望みのすべてが他人のまねだというわけではありません。
          自分の内側から湧く関心や価値観もあります。
          大切なのは、自分の「欲しい」がどこから来ているのかを見分けることです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「責められる人に問題はない」とも限らない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スケープゴートの考え方は、責められる人に一切の問題がないと言うものではありません。
          ただ、<strong>一人に原因を集めることで、集団が向き合うべき構造の問題が見えなくなる</strong>ことに注意が必要です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分の「欲しい」の手本を探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          焦りや嫉妬を感じたら、「この欲しい気持ちは、誰を見て生まれたのか」と考えてみます。
          手本が見えると、それが本当に自分の望みなのかを考え直せます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「誰が悪いか」の前に「何が起きたか」を話す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          事故や問題の振り返りでは、人を責める前に、起きたことと、その背景にある仕組みを話し合うよう意識します。
          一人に原因を集めない話し合い方は、チーム全体を守ります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 責められ役になっていると感じたら、外に話す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分ばかりが責められていると感じるなら、職場の外の信頼できる人や相談窓口に状況を話してください。
          (<Link to="/articles/helper-harassment-gray-zone" className={linkCls}>支援職が知っておきたいハラスメントのグレーゾーン</Link>も参考になります)
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
          <li>・<Link to="/articles/helper-workplace-stress" className={linkCls}>支援職が抱える職場の人間関係ストレス</Link></li>
          <li>・<Link to="/articles/helper-organization-unsafe" className={linkCls}>職場が危ないと感じるときの対処法(心理的安全性)</Link></li>
          <li>・<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは</Link></li>
          <li>・<Link to="/articles/thinker-bourdieu-habitus" className={linkCls}>「やりがい」で無理を飲み込む構造(ブルデューから読む)</Link></li>
          <li>・<Link to="/articles/thinker-adler-inferiority" className={linkCls}>「役に立てない自分」が怖い理由(アドラーから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">職場の人間関係で消耗している方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          職場の外で、状況を整理する時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          中にいると見えにくい人間関係の構造を、外の視点から一緒に整理します。誰かを責めるためではなく、あなたを守るために。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/thinker-girard-scapegoat"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はジラールの思想の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

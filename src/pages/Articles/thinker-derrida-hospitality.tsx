import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "デリダの「無条件の歓待」とは何ですか?",
    a: "フランスの哲学者ジャック・デリダが『歓待について』などで論じた考え方で、訪れる人を、名前も素性も問わず、何の条件もつけずに迎え入れることを指します。デリダは、こうした無条件の歓待は現実には実現できないが、それでも私たちの現実の迎え入れ方(条件つきの歓待)を方向づける理想として欠かせない、と考えました。",
  },
  {
    q: "「条件つきの歓待」とは何ですか?",
    a: "法律や規則、権利や義務にもとづいて、誰を、どこまで、どのような条件で迎え入れるかを定めた、現実の迎え入れ方のことです。デリダは、無条件の歓待と条件つきの歓待は性質がまったく違いながら、互いに切り離すことができない関係にあると考えました。",
  },
  {
    q: "デリダの言う「贈与の不可能性」とは何ですか?",
    a: "デリダは『時間を与える』などで、本当の贈り物(贈与)は、それが贈り物だと認識された瞬間に、感謝や返礼、恩義といった「お返し」の関係に入ってしまい、純粋な贈与ではなくなる、と論じました。見返りを一切含まない純粋な贈与は、ありえないかもしれない、という問いかけです。",
  },
  {
    q: "支援に条件があることに、罪悪感を感じます。",
    a: "デリダの考えに沿えば、支援に条件や限界があることは避けられません。大切なのは、条件があることを恥じることではなく、無条件に迎え入れたいという理想を手放さずに、その理想に照らして条件のあり方を見直し続けることです。その緊張を抱えていること自体が、支援者として誠実である証とも言えます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerDerridaHospitality() {
  return (
    <ArticleLayout
      title="すべてを受け入れたいのに、条件がある｜デリダの「無条件の歓待」と「贈与の不可能性」から読む、支援職の葛藤【公認心理師】"
      description="哲学者ジャック・デリダは、何の条件もつけずに人を迎え入れる「無条件の歓待」は実現できないが、現実の迎え入れ方を導く理想として欠かせないと考えました。すべての人を受け入れたいのに、制度や時間の条件がある支援職の葛藤と、見返りを求めない援助の難しさを公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-derrida-hospitality"
      date="2026-10-24"
      tags={["compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ジャック・デリダ
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
        困っている人がいれば、誰でも受け入れたい。
        けれど現実には、契約の範囲、対象となる条件、支援できる時間が決まっている。
        「それは対象外です」と伝えるたびに、自分が誰かを締め出しているような罪悪感が残る——。
      </p>
      <p>
        すべてを受け入れたい気持ちと、条件つきでしか受け入れられない現実。
        この引き裂かれを、哲学の言葉で考え抜いたのが、フランスの哲学者<strong>ジャック・デリダ</strong>です。
      </p>

      <h2>ジャック・デリダ——「脱構築」の哲学者</h2>
      <p>
        デリダ(1930–2004)は、当時フランス領だったアルジェリアに生まれた哲学者です。
        少年時代、ユダヤ系であることを理由に学校から締め出された経験を持っています。
        当たり前とされている考えの中に隠れた矛盾や緊張を丁寧に掘り起こす<strong>「脱構築」</strong>という思考で知られ、
        晩年には、歓待、贈与、赦しといった、倫理に関わるテーマを多く論じました。
      </p>
      <p>
        デリダの文章は難解なことで知られています。
        この記事では、その中から支援職の経験に関わる二つの考え方を、筆者の言葉でできるだけ平易に紹介します。
      </p>

      <h2>無条件の歓待と、条件つきの歓待</h2>
      <p>
        デリダは『歓待について』などで、人を迎え入れること(歓待)に、二つのあり方があると論じました。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>無条件の歓待</strong>:訪れる人を、名前も素性も問わず、何の条件もつけずに迎え入れること</li>
          <li>・<strong>条件つきの歓待</strong>:法律や規則、権利や義務にもとづいて、条件を定めて迎え入れること</li>
        </ul>
      </div>
      <p>
        デリダによれば、無条件の歓待は、現実には決して実現できません。
        社会の中で人を迎え入れる以上、必ず何らかの条件が生まれるからです。
      </p>
      <p>
        けれどデリダは、だから無条件の歓待は無意味だ、とは考えませんでした。
        むしろ、<strong>実現できない無条件の歓待という理想があるからこそ、現実の条件つきの歓待は、少しでも開かれたものに変わっていける</strong>。
        二つは性質がまったく違いながら、互いに切り離せない関係にある——。
        デリダは、この解消できない緊張そのものを見つめようとしたのです。
      </p>

      <h2>支援職に置き換えると——理想と条件のあいだで</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「すべての人を受け入れたい」という理想</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職の多くは、困っている人を条件なしに受け入れたいという思いを持っています。
          それは、デリダの言う無条件の歓待に近い理想です。
          (<Link to="/articles/thinker-rogers-conditions-of-worth" className={linkCls}>ロジャーズの「無条件の肯定的関心」の回</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 現実には、条件がある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          制度、契約、人員、時間。支援には必ず条件があります。
          条件を伝えるたびに、理想を裏切っているように感じてしまうのは、
          それだけ理想を大切にしているからです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 緊張を抱え続けることの意味</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          理想と条件のどちらか一方を捨てれば、楽にはなります。
          けれど理想を捨てれば支援は冷たい手続きになり、条件を捨てれば支援者が壊れます。
          デリダの考えは、<strong>どちらも手放さずに、緊張を抱え続けること</strong>に意味があると教えてくれます。
        </p>
      </div>

      <h2>贈与の不可能性——見返りを求めない援助は、ありうるか</h2>
      <p>
        デリダはもう一つ、<strong>贈与</strong>についても鋭い問いを投げかけました。
      </p>
      <p>
        本当の贈り物は、見返りを一切求めないものであるはずです。
        けれど、贈り物が贈り物だと認識された瞬間、受け取った側には感謝や恩義が生まれ、
        贈った側にも「よいことをした」という満足が生まれます。
        そのとき、贈与は<strong>お返しのやりとり</strong>に変わってしまう。
        だから、純粋な贈与は不可能かもしれない——デリダはこう問いかけました。
      </p>
      <p>
        支援職に置き換えると、これは<strong>見返りを求めない援助は、ありうるのか</strong>という問いになります。
        感謝されたい、役に立ったと感じたい。そう思うことを、支援職はしばしば恥じます。
        けれどデリダに従えば、完全に見返りのない援助は、そもそも誰にもできないのかもしれません。
        感謝を求めてしまう自分を責める必要は、ないのです。
        (<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>ドストエフスキーの「報酬を求める愛」の回</Link>も参考になります)
      </p>

      <LineCtaCompassion />

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">デリダの議論は、ここで扱った以上に複雑</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          デリダの歓待論は、移民や難民、国家と法といった政治的な問題とも深く結びついています。
          この記事では、その一部を支援職の経験に引きつけて読んでおり、解釈には諸説があります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">条件を「仕方ない」で済ませない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          条件があることは避けられませんが、それはどんな条件でもよいという意味ではありません。
          理想に照らして、今の条件が本当に適切かを問い続けることも、デリダの考えに含まれています。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 条件を伝えるときの罪悪感を、理想の証と受け取る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「対象外です」と伝えてつらくなったら、そのつらさは、すべての人を受け入れたいという理想を持っている証だと受け取ります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 条件の中で、できることを一つ探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          受け入れられない場合でも、ほかの支援先を紹介する、情報を渡すなど、条件の中でできることを一つ探します。
          理想が、現実の条件を少しだけ開いていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感謝を求める自分を、責めない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「ありがとう」と言われたい自分に気づいても、それを恥じる必要はありません。
          見返りを一切求めない援助は、誰にとっても難しいものです。
          (<Link to="/articles/thinker-fromm-art-of-loving" className={linkCls}>フロムの『愛するということ』の回</Link>もあわせてどうぞ)
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
          <li>・<Link to="/articles/boundary-what" className={linkCls}>境界線とは</Link></li>
          <li>・<Link to="/articles/thinker-levinas-face" className={linkCls}>なぜ支援職は、応えずにいられないのか(レヴィナスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>人類を愛するほど、隣の人を愛せない(ドストエフスキーから読む)</Link></li>
          <li>・<Link to="/articles/thinker-fromm-art-of-loving" className={linkCls}>自分を愛せない人は、他人も本当には愛せない(フロムから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">理想と現実のあいだで、揺れている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          その揺れを、一緒に言葉にする時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          受け入れたい気持ちも、受け入れられない現実も、どちらも否定せずに話せる場所です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/thinker-derrida-hospitality"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はデリダの哲学の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。解釈には諸説があります。邦訳に『歓待について』(産業図書)があります。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "シャルル・ペパンとは、どんな人ですか?",
    a: "現代フランスの哲学者です(1973年生まれ)。高校で哲学を教えながら、哲学を日常の悩みに結びつけて語る著作や講演で知られています。失敗の価値を論じた『失敗の効用(Les vertus de l'échec)』や、自信の哲学を論じた『自信(La confiance en soi)』などの著書があります。",
  },
  {
    q: "「失敗すること」と「失敗者であること」は、どう違うのですか?",
    a: "ペパンの考えの中心にある区別です。何かに失敗したのは、ある行動や試みがうまくいかなかったという出来事にすぎません。それは、その人自身が「失敗者」であることを意味しません。一度の失敗を自分という人間全体の評価にしてしまうことが、人を必要以上に苦しめるとペパンは考えました。",
  },
  {
    q: "ペパンは、自信はどこから生まれると考えていますか?",
    a: "ペパンは、自信は自分ひとりの中から生まれるものではなく、まず人との関係の中で育つと考えました。信頼できる人に受け止められた経験、練習を重ねて身についた力への信頼、そして先の見えない中でも一歩を踏み出す勇気。これらが重なって、自信が形づくられるとしています。",
  },
  {
    q: "仕事でミスをしてから、ずっと自分を責めています。どうすればいいですか?",
    a: "まず、起きたことと、自分という人間の評価を分けて考えてみてください。ミスは振り返り、次に生かすべき出来事ですが、あなたの価値そのものを決めるものではありません。自分を責める気持ちが強く、眠れない、仕事に行くのがつらいといった状態が続く場合は、信頼できる人や専門家に話してください。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerPepinFailure() {
  return (
    <ArticleLayout
      title="失敗したことは、失敗者であることではない｜シャルル・ペパンの「失敗の効用」と「自信」から読む、ミスを責め続ける支援職【公認心理師】"
      description="フランスの哲学者シャルル・ペパンは、失敗は人を成長させる経験であり、一度の失敗はその人が「失敗者」であることを意味しないと説きました。ミスのあとに自分を責め続け、自信を失っていく支援職へ、失敗と自信の哲学を公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-pepin-failure"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ シャルル・ペパン
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
        記録のミスを指摘された。服薬の確認が一つ抜けていた。
        大事には至らなかったけれど、その日から自分が信用できなくなった。
        「また何か見落としているのでは」と不安になり、何度も確認してしまう。
        「自分はこの仕事に向いていないのかもしれない」——。
      </p>
      <p>
        一つのミスが、自分という人間全体への評価にすり替わってしまう。
        この苦しさに、哲学の言葉で向き合ったのが、フランスの哲学者<strong>シャルル・ペパン</strong>です。
      </p>

      <h2>シャルル・ペパン——日常に哲学を届ける哲学者</h2>
      <p>
        ペパン(1973年生まれ)は、フランスの高校で哲学を教えながら、
        哲学を日常の悩みに結びつけて語る著作や講演で知られる哲学者です。
      </p>
      <p>
        2016年の著書<strong>『失敗の効用』</strong>では、失敗を恐れる文化に一石を投じ、
        2018年の<strong>『自信』</strong>では、自信がどこから生まれるのかを論じました。
        この記事では、この二つの本の考え方を手がかりにします。
      </p>

      <h2>失敗することと、失敗者であることは違う</h2>
      <p>
        ペパンの考えの中心にあるのは、シンプルな区別です。
        <strong>何かに失敗したことは、自分が「失敗者」であることを意味しない。</strong>
      </p>
      <p>
        失敗は、ある行動や試みがうまくいかなかったという<strong>出来事</strong>です。
        けれど私たちは、それをすぐに<strong>自分という人間の評価</strong>に結びつけてしまいます。
        「ミスをした」が「自分はダメな人間だ」になる。
        ペパンは、この結びつきこそが、人を必要以上に苦しめていると考えました。
      </p>
      <p>
        そしてペパンは、失敗には価値があると言います。
        失敗は、うまくいかない理由を教えてくれる。
        自分が本当に大切にしていることに気づかせてくれる。
        失敗を通して、人はより早く学び、より深く自分を知ることができる——。
        失敗は避けるべきものである以上に、<strong>経験の一部</strong>なのです。
      </p>

      <h2>自信は、ひとりでは育たない</h2>
      <p>
        ペパンは『自信』の中で、自信がどこから生まれるのかを論じています。
        その考えを、筆者の言葉で要約します。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>人への信頼</strong>:誰かに受け止められ、信頼された経験が、自信の土台になる</li>
          <li>・<strong>身についた力への信頼</strong>:練習を重ねて身につけた力が、「自分はできる」という感覚を支える</li>
          <li>・<strong>先の見えなさへの信頼</strong>:結果がわからなくても、一歩を踏み出してみる勇気</li>
        </ul>
      </div>
      <p>
        とくに印象的なのは、自信は<strong>自分ひとりの中から生まれるのではなく、まず人との関係の中で育つ</strong>という考えです。
        自信がないのは、心が弱いからではありません。
        安心して失敗できる関係や環境が、足りていないのかもしれないのです。
      </p>

      <h2>支援職に置き換えると——ミスが許されにくい仕事</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① ミスが「自分の価値」に結びつきやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の仕事は、人の生活や安全に関わります。
          だからこそ、ミスへの不安は強く、一つのミスが「自分は向いていない」という結論に結びつきやすいのです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「できている」のに自信が持てない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          周りから評価されていても、「たまたまうまくいっただけ」「いつかボロが出る」と感じてしまう。
          (<Link to="/articles/impostor-syndrome" className={linkCls}>インポスター症候群とは</Link>で扱っている状態とも重なります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 失敗を話せない職場</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ミスを責める空気のある職場では、失敗を隠したくなり、そこから学ぶ機会も失われます。
          ペパンの考えに沿えば、自信は「安心して失敗を話せる関係」の中でこそ育ちます。
          (<Link to="/articles/helper-organization-unsafe" className={linkCls}>職場が危ないと感じるときの対処法</Link>も参考になります)
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">失敗を軽く扱うことではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の現場では、ミスが利用者の安全に関わることもあります。
          「失敗には価値がある」は、ミスを軽く見てよいという意味ではありません。
          起きたことにはきちんと向き合い、振り返ったうえで、<strong>自分という人間の価値までは否定しない</strong>、ということです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自信の問題を、個人の努力だけにしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自信が人との関係の中で育つのなら、自信が持てない状態も、個人の心がけだけでは変わりません。
          安心して相談し、失敗を共有できる職場の文化も必要です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「出来事」と「自分の評価」を分けて書く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ミスをしたら、「起きたこと」と「自分についての結論」を分けて書きます。
          「確認が一つ抜けた」は出来事、「自分はダメだ」は結論です。結論のほうに線を引いてみます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 失敗から一つだけ学びを取り出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「次はこうする」という具体的な改善を、一つだけ書き出します。
          学びを取り出せたら、その失敗はもう十分に役目を果たしています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 失敗を話せる相手を一人持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「実はこんなミスをして」と話せる同僚や先輩を一人持ちます。
          失敗を受け止めてもらえる経験そのものが、ペパンの言う自信の土台になります。
          (<Link to="/articles/thinker-adler-inferiority" className={linkCls}>アドラーの「劣等感」の回</Link>もあわせてどうぞ)
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
          <li>・<Link to="/articles/impostor-syndrome" className={linkCls}>インポスター症候群とは</Link></li>
          <li>・<Link to="/articles/helper-perfectionism" className={linkCls}>完璧主義が支援職を追い詰める理由</Link></li>
          <li>・<Link to="/articles/thinker-james-self-esteem" className={linkCls}>頑張っても自分に満足できない理由(ジェイムズから読む)</Link></li>
          <li>・<Link to="/articles/thinker-vanderbilt-beginners" className={linkCls}>「下手でいていい」時間が心を回復させる(ヴァンダービルトから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">ミスのあと、自分を責め続けている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          失敗を、安心して話せる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          ここでは、失敗を責めません。起きたことと、あなた自身の価値を分けて、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-pepin-failure"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はペパンの著作の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

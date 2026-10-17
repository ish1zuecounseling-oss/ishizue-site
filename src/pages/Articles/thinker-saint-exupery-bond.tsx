import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "『星の王子さま』の「なつく(apprivoiser)」とは、どういう意味ですか?",
    a: "物語の中でキツネが王子さまに教える言葉で、「絆を結ぶこと」と説明されます。なつく前は、互いにとってほかと変わらない存在でも、時間をかけて関係を結ぶと、相手は世界でたった一人の特別な存在になる。日本語訳では「飼いならす」「なじみになる」などと訳されることもあります。",
  },
  {
    q: "「大切なものは目に見えない」は、どの場面の言葉ですか?",
    a: "王子さまとキツネが別れる場面で、キツネが贈る「秘密」の言葉です。「心で見なくちゃ、よく見えない。いちばん大切なことは、目に見えない」という一節で、同じ場面に「きみがバラのために費やした時間が、きみのバラを大切なものにしたんだ」という言葉も続きます。",
  },
  {
    q: "「なつかせたものには、いつまでも責任がある」は、支援職にどう当てはまりますか?",
    a: "関わった相手を大切に思う姿勢としては、支援職の心に響く言葉です。ただし、これを「担当した利用者のすべてに、自分が永遠に責任を負う」と読むと、抱え込みや燃え尽きにつながります。支援職にとっての責任は、関わっている間に誠実であることと、適切に次の支援へつなぐことだと考えるのが現実的です。",
  },
  {
    q: "サン＝テグジュペリは、どんな人ですか?",
    a: "フランスの作家で、郵便飛行機のパイロットでもありました(1900–1944)。砂漠や夜間飛行の経験をもとに『夜間飛行』『人間の土地』などを書き、『星の王子さま』(1943年)は世界中で読まれています。第二次世界大戦中、偵察飛行に出たまま地中海上空で消息を絶ちました。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerSaintExuperyBond() {
  return (
    <ArticleLayout
      title="関わった時間が、その人を大切にする｜サン＝テグジュペリ『星の王子さま』から読む、支援関係と「責任」【公認心理師】"
      description="「きみがバラのために費やした時間が、きみのバラを大切なものにしたんだ」——『星の王子さま』のキツネの言葉は、支援関係が育つ過程そのものです。一方で「なつかせたものには責任がある」は、支援職を抱え込みへ導くこともあります。支援関係の意味と責任の範囲を公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-saint-exupery-bond"
      date="2026-10-17"
      tags={["compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ サン＝テグジュペリ
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
        最初は、目を合わせてもくれなかった利用者がいる。
        何か月もかけて少しずつ言葉を交わすうちに、ある日、向こうから話しかけてくれた。
        その人は、もう「担当のひとり」ではなくなっていた——。
      </p>
      <p>
        支援の仕事には、記録にも数字にも残らない、関係が育っていく時間があります。
        その時間の意味を、一冊の童話がやさしく言い当てています。
        <strong>サン＝テグジュペリ</strong>の『星の王子さま』です。
      </p>

      <h2>サン＝テグジュペリと『星の王子さま』</h2>
      <p>
        アントワーヌ・ド・サン＝テグジュペリ(1900–1944)は、フランスの作家であり、郵便飛行機のパイロットでした。
        サハラ砂漠への不時着など、命がけの飛行の経験をもとに作品を書き、
        『星の王子さま』(1943年)は、世界で最も多くの言語に訳された本の一つになりました。
      </p>
      <p>
        物語の中で、小さな星からやってきた王子さまは、地球でキツネと出会います。
        このキツネが王子さまに教えることが、今回の手がかりです。
      </p>

      <h2>「なつく」とは、絆を結ぶこと</h2>
      <p>
        キツネは、王子さまに「なつかせてほしい」と頼みます。
        「なつく」とはどういうことかと尋ねる王子さまに、キツネはこう答えます(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          それは、絆を結ぶということだよ。
          今のきみは、ぼくにとって、ほかの何万人もの男の子と変わらない。
          ぼくも、きみにとっては、ほかの何万匹ものキツネと変わらない。
          でも、きみがぼくをなつかせたら、ぼくたちは互いになくてはならない存在になる。
          きみはぼくにとって、世界でたったひとりの人になるんだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          サン＝テグジュペリ『星の王子さま』第21章(フランス語原文より筆者訳・要約)
        </p>
      </div>
      <p>
        キツネは、なつくには<strong>辛抱強さ</strong>がいると言います。
        最初は少し離れて座り、毎日同じ時間に来て、少しずつ近づいていく。
        言葉は誤解のもとだから、黙って見ているだけでいい——。
        これは、支援の現場で信頼関係(ラポール)が育っていく過程そのものです。
      </p>

      <h2>「バラのために費やした時間が、バラを大切なものにした」</h2>
      <p>
        別れのとき、キツネは王子さまに「秘密」を贈ります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          心で見なくちゃ、ものはよく見えない。
          いちばん大切なことは、目に見えないんだ。<br />
          きみがバラのために費やした時間が、きみのバラを、こんなに大切なものにしたんだよ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同章(フランス語原文より筆者訳)
        </p>
      </div>
      <p>
        支援職に置き換えるなら、<strong>関わった時間そのものが、その人を特別な存在にする</strong>ということです。
        支援の成果は、記録や数字では測りきれません。
        何度も足を運び、話を聞き、待った時間。その目に見えない積み重ねこそが、関係の価値です。
      </p>
      <p>
        利用者から「あなたでよかった」と言われる日が来なくても、
        あなたが費やした時間は、その人との関係の中に、確かに残っています。
      </p>

      <h2>「なつかせたものには、いつまでも責任がある」——支援職の落とし穴</h2>
      <p>
        キツネの言葉には、続きがあります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          人間はこの真理を忘れてしまった。でも、きみは忘れちゃいけない。
          きみは、なつかせたものに対して、いつまでも責任があるんだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同章(フランス語原文より筆者訳)
        </p>
      </div>
      <p>
        美しい言葉です。けれど、支援職がこの言葉をそのまま背負うと、危ういことがあります。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 担当が終わっても、手放せない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          異動や退職で担当を離れたあとも、「あの人はどうしているだろう」「自分が見捨てたのでは」と罪悪感が続く。
          関係を大切にする人ほど、終わりを受け入れにくくなります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自分にしかできないと思い込む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「この人は自分にしかなついていない」と感じると、休めず、ほかの職員に任せられなくなります。
          (<Link to="/articles/helper-carrying-clients" className={linkCls}>利用者を背負ってしまう</Link>で扱っている抱え込みの構造です)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 相手の人生まで背負ってしまう</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いつまでも責任がある」を、相手の人生の結果まで引き受けることだと読むと、
          支援者は終わりのない重荷を抱えることになります。
          (<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群</Link>の構造とも重なります)
        </p>
      </div>
      <p>
        支援職にとっての責任は、<strong>関わっている間に誠実であること</strong>、
        そして<strong>離れるときに、次の支援へきちんとつなぐこと</strong>です。
        相手の人生そのものは、相手のものです。
        (この線引きは<Link to="/articles/thinker-epictetus-control" className={linkCls}>エピクテトスの回</Link>でも扱っています)
      </p>

      <LineCtaCompassion />

      <h2>「同じ方向を見る」という関係</h2>
      <p>
        サン＝テグジュペリは、別の作品『人間の土地』(1939年)で、こんな言葉も残しています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          愛するとは、互いに見つめ合うことではなく、ともに同じ方向を見ることだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          サン＝テグジュペリ『人間の土地』(フランス語原文より筆者訳)
        </p>
      </div>
      <p>
        支援関係も、支援者と利用者が向き合い続ける関係ではなく、
        <strong>利用者が向かいたい方向を、隣で一緒に見る関係</strong>だと考えると、少し軽くなります。
        主役は、いつも相手です。支援者は、その道のりの一部を並んで歩く人です。
      </p>

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">童話は、職業倫理の本ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          『星の王子さま』は、友情や愛について書かれた物語で、支援の仕事を想定したものではありません。
          キツネの言葉は、関係の大切さを思い出すための鏡として読み、
          責任の範囲は、職場の役割やチームの中で現実的に決めていく必要があります。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 目に見えない積み重ねを、言葉にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          記録には残らないけれど、自分が関係のために費やしてきた時間を、一つ思い出して書き留めます。
          成果が見えにくい日の支えになります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「自分にしかできない」を点検する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          そう感じている関わりがあれば、ほかの職員と共有できる部分はないか考えてみます。
          関係を大切にすることと、一人で抱えることは別です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 離れるときの「つなぎ方」を決めておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          異動や担当替えのとき、何を誰に引き継げば安心して手を離せるかを考えておきます。
          丁寧に手を離すことも、なつかせた者の責任の果たし方です。
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
          <li>・<Link to="/articles/helper-carrying-clients" className={linkCls}>利用者を背負ってしまう</Link></li>
          <li>・<Link to="/articles/boundary-what" className={linkCls}>境界線とは</Link></li>
          <li>・<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群(救世主症候群)とは</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>人類を愛するほど、隣の人を愛せない(ドストエフスキーから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">関わった人のことを、手放せずにいる方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          大切にしてきた関係と、自分の荷物を、一緒に整理する時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どこまでが自分の責任で、どこから手を離してよいのか。関係を大切にしてきたあなたの気持ちを否定せずに、一緒に考えます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/thinker-saint-exupery-bond"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、日本で著作権の保護期間が満了しているフランス語原典(Le Petit Prince, 1943／Terre des hommes, 1939)から筆者が翻訳・要約したものです。本記事は文学作品を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

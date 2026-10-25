import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "土居健郎の「甘え」とは何ですか?",
    a: "精神科医・土居健郎が『「甘え」の構造』(1971年)で論じた概念で、相手の好意をあてにし、それに身をゆだねたいという気持ちのことです。土居は、甘えは赤ちゃんが母親に向ける気持ちを原型とし、大人になっても人間関係の根底に流れている、ごく自然な欲求だと考えました。",
  },
  {
    q: "甘えは、悪いことではないのですか?",
    a: "土居は、甘えそのものを悪いものとは考えていません。人が人を信頼し、身をゆだねられることの土台に甘えがあるからです。問題になるのは、甘えたくても素直に甘えられないときで、そのとき甘えは「すねる」「ひがむ」「うらむ」といった、ゆがんだ形で表れると土居は指摘しました。",
  },
  {
    q: "「甘えられない」とは、どういう状態ですか?",
    a: "本当は誰かに頼りたい、わかってほしいという気持ちがあるのに、それを素直に表せない状態です。遠慮や気がねが強い、頼ることを弱さだと感じる、相手に迷惑をかけると思い込む、といった形で表れます。甘えられない気持ちが続くと、ひとりで抱え込んだり、不満がたまったりしやすくなります。",
  },
  {
    q: "支援の現場で、利用者の甘えにどう向き合えばいいですか?",
    a: "甘えを「依存」としてすぐに退けるのではなく、まずその背後にある「わかってほしい」「頼りたい」という気持ちを受け止めることが大切です。そのうえで、支援者として応えられる範囲を伝え、境界線を保ちます。甘えを受け止めることと、すべてに応えることは別のことです。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerDoiAmae() {
  return (
    <ArticleLayout
      title="人の甘えは受け止められるのに、自分は甘えられない｜土居健郎『「甘え」の構造』から読む、頼れない支援職【公認心理師】"
      description="精神科医・土居健郎は、相手の好意をあてにして身をゆだねたい気持ち「甘え」を、日本人の心の根本にあるものとして論じました。利用者の甘えは受け止められるのに、自分は誰にも甘えられない支援職の構造と、健やかに頼ることの意味を公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-doi-amae"
      date="2026-10-21"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 土居健郎
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
        利用者がわがままを言っても、「頼ってくれているんだな」と受け止められる。
        家族が不安をぶつけてきても、気持ちを汲んで寄り添える。
        なのに、自分が誰かに頼ろうとすると、とたんに体がこわばる。
        「迷惑をかけてはいけない」「甘えてはいけない」——。
      </p>
      <p>
        人の甘えは受け止められるのに、自分は甘えられない。
        この心の動きを、日本語の「甘え」という言葉から読み解いた精神科医がいます。
        <strong>土居健郎</strong>です。
      </p>

      <h2>土居健郎と『「甘え」の構造』</h2>
      <p>
        土居健郎(1920–2009)は、東京大学などで教えた日本の精神科医・精神分析家です。
        アメリカ留学中、日本語の「甘え」にあたる言葉が英語にないことに気づいたことが、研究のきっかけになったとされています。
      </p>
      <p>
        1971年に出版された<strong>『「甘え」の構造』</strong>は大きな反響を呼び、ロングセラーとなりました。
        英語にも翻訳され、日本人の心を理解するための古典として、海外でも広く読まれています。
      </p>

      <h2>「甘え」とは——相手の好意に身をゆだねたい気持ち</h2>
      <p>
        土居によれば、甘えとは<strong>相手の好意をあてにし、それに身をゆだねたいという気持ち</strong>です。
        その原型は、赤ちゃんが母親に向ける気持ちにあります。
        赤ちゃんは、母親が自分を受け入れてくれることを信じて、まるごと身をあずけます。
      </p>
      <p>
        土居は、この気持ちは大人になっても消えることはなく、
        人間関係の根底に流れ続けていると考えました。
        誰かを信頼し、頼り、わかってもらえると感じられること——その土台に甘えがあります。
        つまり甘えは、<strong>弱さではなく、人が人とつながるための自然な欲求</strong>なのです。
      </p>

      <h2>甘えられないとき、心はどうなるか</h2>
      <p>
        土居が注目したのは、<strong>甘えたくても素直に甘えられない</strong>ときの心の動きでした。
        甘えたい気持ちが満たされないと、それはまっすぐではない形で表れます。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">甘えがゆがんだ形で表れる例(筆者による要約)</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>すねる</strong>:素直に甘えられず、わざと不満を態度で示す</li>
          <li>・<strong>ひがむ</strong>:自分だけ大切にされていないと感じる</li>
          <li>・<strong>うらむ</strong>:甘えを受け入れてもらえなかったことに、根に持つ</li>
          <li>・<strong>遠慮・気がね</strong>:相手の好意を求めているのに、それを表に出せない</li>
        </ul>
      </div>
      <p>
        これらは一見、甘えとは関係ないように見えます。
        けれど土居は、その背後に<strong>「本当はわかってほしい」「頼りたい」</strong>という気持ちが隠れていると考えました。
      </p>

      <h2>支援職に置き換えると——受け止める側にしか立てない</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 甘えを受け止める専門家</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は、利用者や家族の甘えを受け止めることが仕事の一部です。
          すねる、ひがむといった態度の奥にある気持ちを汲み取る力にも長けています。
          けれど、受け止める側に立ち続けるうちに、<strong>自分が甘える側に立つ方法</strong>を忘れてしまいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 遠慮と気がねで、頼れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「みんな忙しいのに、自分だけ助けてもらうのは悪い」「頼るのは、甘えているみたいで恥ずかしい」。
          遠慮と気がねが、助けを求めることを妨げます。
          (<Link to="/articles/why-support-workers-cannot-ask-for-help" className={linkCls}>支援職がなぜ相談できないのか</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 満たされない甘えが、不満としてたまる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          誰にも頼れないまま頑張り続けると、「どうして誰もわかってくれないのか」という不満が積もっていきます。
          土居の言う「すねる」「うらむ」は、支援職自身の心の中でも起きているかもしれません。
          それは性格の悪さではなく、<strong>満たされなかった甘え</strong>のサインです。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「日本人特有」と言い切らない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          土居は甘えを日本文化と深く結びつけて論じましたが、その後、甘えにあたる気持ちは
          ほかの文化にも見られるという議論もあります。
          この記事では、文化論としてではなく、人が頼ることの心理として甘えを読んでいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">甘えと、自分を消耗させる依存は違う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          甘えを認めることは、何でも人に頼りきりになることとは違います。
          信頼できる相手に、適切な範囲で頼れることが、健やかな甘えです。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分の「すねる」「ひがむ」に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同僚にそっけなくしてしまったり、「どうせ自分ばかり」と感じたりしたら、
          その奥に「本当はわかってほしい」という気持ちがないか、確かめてみます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 小さく甘えてみる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「ちょっと聞いてもらってもいいですか」「今日は少し疲れていて」と、
          信頼できる相手に、小さな甘えを言葉にしてみます。
          甘えても関係は壊れない、という経験を少しずつ積み重ねていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 甘えられる場所を、仕事の外にも持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援者としてではなく、一人の人として受け止めてもらえる場所——友人、家族、カウンセリングなど——を意識して持ちます。
          (<Link to="/articles/thinker-schmidbauer-helper-syndrome" className={linkCls}>シュミットバウアーの「ヘルパー症候群」の回</Link>もあわせてどうぞ)
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
          <li>・<Link to="/articles/why-support-workers-cannot-ask-for-help" className={linkCls}>支援職がなぜ相談できないのか</Link></li>
          <li>・<Link to="/articles/helper-cannot-seek" className={linkCls}>支援者が「相談できない・つらい」と感じる理由</Link></li>
          <li>・<Link to="/articles/thinker-schmidbauer-helper-syndrome" className={linkCls}>助けることでしか自分を保てない(シュミットバウアーから読む)</Link></li>
          <li>・<Link to="/articles/thinker-kohut-selfobject" className={linkCls}>支える人にも、支えが要る(コフートから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">誰にも甘えられずにきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          ここでは、頼っていいんです
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          遠慮も気がねもいらない場所で、あなたの話を受け止めます。甘えられなかった気持ちごと、一緒に整理していきましょう。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-doi-amae"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は土居健郎『「甘え」の構造』の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

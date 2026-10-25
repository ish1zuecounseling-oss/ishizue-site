import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ソクラテスの「産婆術」とは何ですか?",
    a: "プラトンの対話篇『テアイテトス』の中で、ソクラテスが自分の対話のやり方をたとえた言葉です。助産師の母を持つソクラテスは、自分自身は知恵を生み出さないが、問いかけによって相手の中にある考えを生まれ出させ、それが本物かどうかを一緒に確かめるのだと語っています。答えを与えるのではなく、問いで引き出す対話の原型とされます。",
  },
  {
    q: "「無知の知」はソクラテス本人の言葉ですか?",
    a: "この四字熟語そのものは、ソクラテスの言葉を後世にまとめた表現です。プラトンの『ソクラテスの弁明』でソクラテスが語っているのは、「私は知らないことを、知っているとは思っていない」という趣旨の言葉です。「知らないと知っている」という言い方より、少し控えめな表現になっています。",
  },
  {
    q: "ソクラテス式問答とは、カウンセリングで使われるものですか?",
    a: "はい。認知行動療法では、カウンセラーが答えを示すのではなく、問いかけによってクライエント自身が考えの根拠や別の見方に気づけるよう助ける技法を「ソクラテス式問答」と呼んでいます。名前のとおり、ソクラテスの対話のやり方に由来しています。",
  },
  {
    q: "カウンセリングでは、アドバイスをもらえないのですか?",
    a: "アドバイスをしないわけではありません。ただ、自分の人生のことは、最終的には自分がいちばんよく知っています。カウンセリングでは、必要な情報や視点はお伝えしながらも、あなた自身の中にある考えや答えを言葉にしていくことを大切にします。そのほうが、自分で選んだ実感が残り、変化が長続きしやすいからです。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerSocratesMidwife() {
  return (
    <ArticleLayout
      title="答えを与えるより、問いで引き出す｜ソクラテスの「産婆術」から読む、支援とカウンセリングの原点【公認心理師】"
      description="「私は知恵を生まないが、人の中にある知恵を生まれ出させる」——ソクラテスは自らを助産師にたとえました。つい答えを与えたくなる支援職の葛藤と、問いかけで相手の力を引き出すカウンセリングの原点を、プラトンの対話篇から公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-socrates-midwife"
      date="2026-10-17"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ソクラテス
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
        利用者が悩みを話しはじめると、つい答えを言いたくなる。
        「こうすればいいですよ」と伝えたのに、相手は動かない。
        結局、同じ相談がまた戻ってくる。
        ——助けたいのに、助言が届かない。支援職なら一度は経験する場面です。
      </p>
      <p>
        答えを渡すことと、相手が自分で答えにたどり着くことは、何が違うのか。
        この問いに、2400年前に一つの答えを示した哲学者がいます。
        古代ギリシャの<strong>ソクラテス</strong>です。
      </p>

      <h2>ソクラテス——書かなかった哲学者</h2>
      <p>
        ソクラテス(紀元前469年ごろ–399年)は、古代アテナイの哲学者です。
        彼は一冊の本も書かず、街角で人々に問いを投げかけ、対話することを生涯の仕事にしました。
        その姿は、弟子のプラトンが書いた対話篇を通して伝えられています。
      </p>
      <p>
        問いによって人々の思い込みを揺さぶったソクラテスは、敵も多く作りました。
        最後は「若者を堕落させた」などの罪で裁判にかけられ、死刑となります。
        そのときの弁明を記録したのが、プラトンの『ソクラテスの弁明』です。
      </p>

      <h2>「知らないことを、知っているとは思っていない」</h2>
      <p>
        ソクラテスはあるとき、「ソクラテスより知恵のある者はいない」という神託を聞かされます。
        自分に知恵があるとは思えなかった彼は、知恵があると評判の人々を訪ねて回りました。
        そしてこう結論します(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          この人は、何も知らないのに知っていると思っている。
          私は、知らないことを、知っているとも思っていない。
          どうやら私は、このほんのわずかな点で、この人より知恵があるらしい。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          プラトン『ソクラテスの弁明』21d(ギリシャ語原典をもとに筆者訳)
        </p>
      </div>
      <p>
        後に「無知の知」と呼ばれるようになる考え方です。
        支援の場面に置き換えるなら、<strong>「この人のことを、自分はまだ知らない」と思えること</strong>。
        相手の人生について、相手以上に知っている人はいません。
      </p>

      <h2>「産婆術」——知恵を生まれ出させる</h2>
      <p>
        ソクラテスの母は、助産師でした。
        対話篇『テアイテトス』で、ソクラテスは自分の対話のやり方を、母の仕事にたとえています(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          私自身は、知恵を生むことができない。
          けれど、私と対話する人たちは、驚くほど多くのものを生み出していく。
          それは私から何かを学んだからではない。
          彼らは自分自身の中から、たくさんの立派なものを見つけ出し、生み出したのだ。
          私はただ、そのお産を手伝っているにすぎない。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          プラトン『テアイテトス』150c–d(ギリシャ語原典をもとに筆者訳・要約)
        </p>
      </div>
      <p>
        これが<strong>産婆術</strong>です。
        答えを外から与えるのではなく、問いかけによって、相手の中にすでにある考えを言葉にしてもらう。
        そして、生まれた考えが本当にその人に合うものかを、一緒に確かめていく。
      </p>
      <p>
        この姿勢は、現代のカウンセリングに直接受け継がれています。
        認知行動療法では、問いかけによって本人が自分の考えを見直せるよう助ける技法を「ソクラテス式問答」と呼びます。
        また、家族療法の分野では、クライエントこそが自分の人生の専門家だとする「無知の姿勢」が提唱されました。
      </p>

      <h2>支援職に置き換えると——なぜ助言は届かないのか</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 与えられた答えは、自分のものにならない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          どれだけ正しい助言でも、人から渡された答えは「やらされること」になりがちです。
          自分の中から出てきた答えには、自分で選んだという実感が伴います。
          だから、続きやすいのです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 答えを与え続けると、相手の力を奪う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援者が答えを出し続けると、相手は自分で考える機会を失い、ますます支援者に頼るようになります。
          「助けたい」が強い人ほど、この循環に入りやすくなります。
          (<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群</Link>の構造とも重なります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 支援者自身も、楽になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「正しい答えを出さなければ」と思うと、支援は重くなります。
          ソクラテスは自分を「知恵を生めない」と言いました。
          <strong>答えを持っていなくていい</strong>と思えたとき、支援者は相手の話をもっとよく聴けるようになります。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>よくある誤解と、この方法の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誤解:問い続ければ、何でも引き出せる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          プラトンの対話篇に描かれるソクラテスは、相手の矛盾を鋭く突き、ときに追い詰めてもいます。
          それが反感を買い、最後は裁判にかけられました。
          カウンセリングで使う問いは、<strong>問い詰めではなく、問いかけ</strong>です。
          相手が安心して考えられる関係があってこそ、問いは力を持ちます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:情報や助言が必要な場面もある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          命や安全に関わる場面、制度の手続きなど、知っている人が伝えるべきことはあります。
          産婆術は「助言をしてはいけない」という教えではなく、
          <strong>本人の中にある答えを、まず信頼する</strong>という姿勢です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 答えを言う前に、一つ問いを挟む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          助言したくなったら、その前に「〇〇さんは、どうしたいと思っていますか?」と一つだけ聞いてみます。
          相手の答えが、こちらの助言と同じだったなら、それは相手のものとして残ります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「知っているつもり」を点検する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「この人はきっとこういう人だ」と決めつけていないか、ときどき立ち止まります。
          (<Link to="/articles/naive-realism-what" className={linkCls}>ナイーブ・リアリズム</Link>の記事も参考になります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分自身にも、問いを向ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「〜しなければならない」と思っていることに、「本当に?」「誰が決めた?」と問いかけてみます。
          ソクラテスの問いは、他人だけでなく、自分の思い込みにも向けられるものです。
        </p>
      </div>

      <h2>いしずえのカウンセリングについて</h2>
      <p>
        いしずえのカウンセリングも、この産婆術の姿勢を大切にしています。
        必要な情報や視点はお伝えしますが、あなたの人生について一番よく知っているのは、あなた自身です。
        話しながら、あなたの中にある考えや気持ちを言葉にしていく時間です。
        (支援職がカウンセリングを受ける意味については、<Link to="/articles/helper-receiving-counseling" className={linkCls}>こちらの記事</Link>で詳しく書いています)
      </p>

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
          <li>・<Link to="/articles/helper-receiving-counseling" className={linkCls}>支援職がカウンセリングを受けることの意味</Link></li>
          <li>・<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群(救世主症候群)とは</Link></li>
          <li>・<Link to="/articles/naive-realism-what" className={linkCls}>ナイーブ・リアリズムとは</Link></li>
          <li>・<Link to="/articles/thinker-rogers-conditions-of-worth" className={linkCls}>「役に立つ自分」にしか価値を感じられない理由(ロジャーズから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          答えをもらうより、自分で考えを整理したい方に向いています。10項目で相性を確認できます。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">人の答えを探し続けてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          今度は、あなた自身の答えを言葉にする時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          答えを押しつけることはしません。話しながら、あなたの中にある考えや気持ちを、一緒に見つけていきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-socrates-midwife"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインのギリシャ語原典(プラトン『ソクラテスの弁明』『テアイテトス』)をもとに筆者が翻訳・要約したものです。本記事は思想を手がかりに支援とカウンセリングの考え方を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

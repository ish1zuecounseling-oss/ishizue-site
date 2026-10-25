import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "夏目漱石の『私の個人主義』とは、どんな作品ですか?",
    a: "1914年(大正3年)に、漱石が学習院の学生に向けて行った講演の記録です。ロンドン留学中の苦しみや、そこから「自己本位」という考え方にたどり着いた経緯を、自分の体験として率直に語っています。後半では、個人の自由には義務や責任がともなうことも論じています。",
  },
  {
    q: "漱石の言う「他人本位」と「自己本位」の違いは何ですか?",
    a: "「他人本位」とは、他人の評価や意見を、自分で考えないまま借りてきて、自分のものとして通用させることです。漱石はそれを「人真似」とも言っています。「自己本位」とは、自分の頭で考え、自分の基準を自分で作り上げることです。わがままや自分勝手とは違い、漱石は他人の個性も同じように尊重すべきだと述べています。",
  },
  {
    q: "他人の評価ばかり気にしてしまうのは、性格の問題ですか?",
    a: "性格だけの問題ではありません。評価される立場で長く働いてきた人や、人の期待に応えることで認められてきた人ほど、他人の基準で自分を測る習慣が身につきやすくなります。習慣であれば、少しずつ変えていくことができます。",
  },
  {
    q: "自分のやりたいことがわかりません。どうすればいいですか?",
    a: "漱石自身も、ロンドンでは何をすればいいのか見当がつかず苦しみました。やりたいことは、考えるだけで見つかるとは限りません。日々の中で感じる小さな違和感や、「これは嫌だ」「これは好きだ」という感覚を書き留めていくことが、自分の基準を見つける手がかりになります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerSosekiSelfStandard() {
  return (
    <ArticleLayout
      title="「他人本位」から「自己本位」へ｜夏目漱石『私の個人主義』から読む、他人の基準で働き続けて迷子になった支援職へ【公認心理師】"
      description="夏目漱石は講演『私の個人主義』で、ロンドン留学中に「霧の中に閉じ込められた」ように立ちすくみ、他人本位をやめて「自己本位」をつかんだことで強くなれたと語りました。上司や周りの評価を基準に働き続け、自分の支援観がわからなくなった支援職に向けて、自分の基準を取り戻す方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-soseki-self-standard"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 夏目漱石
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
        上司にどう思われるか。同僚より劣っていないか。利用者さんや家族に満足してもらえているか。
        いつも誰かの評価を気にしながら働いてきた。
        気づけば、「自分はどんな支援がしたかったのか」が、まったくわからなくなっている——。
      </p>
      <p>
        他人の基準で走り続けて、迷子になってしまう。
        その苦しさを、自分の体験として語った人がいます。
        明治の文豪、<strong>夏目漱石</strong>です。
      </p>

      <h2>夏目漱石とはどんな人か</h2>
      <p>
        夏目漱石(1867–1916)は、『吾輩は猫である』『坊っちゃん』『こころ』などで知られる小説家です。
        小説家になる前は英語の教師で、33歳のとき、国の留学生として英文学を学ぶためにロンドンへ渡りました。
      </p>
      <p>
        しかし、ロンドンでの2年間は苦しいものでした。
        慣れない土地で下宿にこもり、ひたすら本を読み続けるうちに心身を消耗し、
        日本には「漱石が神経衰弱になった」という噂が届くほどだったといいます。
      </p>
      <p>
        帰国から10年以上たった1914年、漱石は学習院の学生に向けて講演を行います。
        それが<strong>『私の個人主義』</strong>です。
        彼はそこで、ロンドンで何に苦しみ、どうやって抜け出したのかを、率直に語りました。
      </p>

      <h2>「霧の中に閉じ込められた孤独の人間のように」</h2>
      <p>
        漱石は、留学前後の自分の状態を、こう振り返っています。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          私はちょうど霧の中に閉じ込められた孤独の人間のように立ち竦んでしまったのです。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          夏目漱石『私の個人主義』より
        </p>
      </div>
      <p>
        英文学を学んでも、英文学が何なのかがわからない。
        何かをしなければならないのに、何をすればいいのか見当がつかない。
        漱石はその原因を、こう見定めます。
      </p>
      <p>
        それまでの自分は、すっかり<strong>「他人本位」</strong>だった。
        根を持たずに水面を漂う萍(うきくさ)のように、あちこちをさまよっていたから駄目だったのだ——と。
      </p>
      <p>
        漱石の言う「他人本位」とは、西洋の批評家が言ったことを、自分で納得しないまま受け売りし、
        それを自分の意見のように通用させることでした。漱石はそれを「人真似」とも呼んでいます。
        他人の基準を借りて生きている限り、自分の根はどこにも下りないのです。
      </p>

      <h2>「自己本位」をつかんで、強くなった</h2>
      <p>
        そこから漱石は、文学とは何かを、自分の頭で一から考え直そうと決意します。
        他人の評価ではなく、自分が本当に納得できるかどうかを基準にする。
        それを漱石は「自己本位」と呼びました。
      </p>
      <p>
        漱石は、この「自己本位」という言葉を手にしてから、自分は大変強くなったと語っています。
        そして講演の後半で、学生たちにこう呼びかけました。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一つ自分の鶴嘴で掘り当てるところまで進んで行かなくってはいけないでしょう。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          夏目漱石『私の個人主義』より
        </p>
      </div>
      <p>
        もし掘り当てられなければ、人は一生、中腰のまま世の中でまごまごし続けることになる、とも漱石は言います。
        霧が晴れるのは、外から答えが与えられたときではなく、自分の鶴嘴(つるはし)で、自分の中に基準を掘り当てたときなのです。
      </p>

      <h2>支援職に置き換えると——「他人本位」で働き続ける</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「正しい支援」を、外から借りてくる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          マニュアル、上司の方針、研修で聞いた正解。
          それ自体は大切でも、自分で納得しないまま当てはめ続けると、
          支援がうまくいかないときに、何を手がかりに考えればいいのかわからなくなります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 評価で、自分の価値が上下する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          褒められた日は安心し、注意された日は自分を全否定してしまう。
          他人の評価が唯一の物差しになると、心は根のない萍のように揺れ続けます。
          (<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは?抜け出せない理由と原因</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 経験を重ねるほど、霧が濃くなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何年も働いてきたのに、自分の支援の軸を言葉にできない。
          この先どこへ向かえばいいのかわからない。
          中堅の支援職ほど、漱石の言う「霧の中」に立ちすくみやすくなります。
          (<Link to="/articles/helper-career-stagnation" className={linkCls}>支援職が感じるキャリア閉塞感との向き合い方</Link>で詳しく扱っています)
        </p>
      </div>

      <h2>自分の基準は、「掘り当てる」もの</h2>
      <p>
        漱石が「自分の鶴嘴で掘り当てる」と言ったように、自分の基準は、どこかから与えられるものではありません。
        日々の仕事の中で感じる、小さな違和感や納得感の中に埋まっています。
      </p>
      <p>
        「この対応には、なぜかモヤモヤする」「この場面では、自分はこうしたかった」。
        そうした感覚は、他人本位で働いているときには、見過ごされがちです。
        けれど、その一つひとつが、自分の支援観という根を下ろすための手がかりになります。
        (<Link to="/articles/what-do-i-want" className={linkCls}>自分が何をしたいのかわからない</Link>も参考になります)
      </p>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自己本位は、自分勝手とは違う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          漱石は同じ講演で、自分の個性を伸ばそうとするなら、同時に他人の個性も尊重しなければならないと述べています。
          自分の基準を持つことは、チームの方針や利用者の意向を無視することではありません。
          自分の考えを持ったうえで、他人の考えとすり合わせていくことです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">一度掘り当てれば終わり、ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己本位をつかんだ漱石も、その後、心身の不調や胃の病気に苦しみ続けました。
          自分の基準を持つことは心の支えになりますが、それだけで疲れや病気が防げるわけではありません。
          不調が続くときは、医療機関や専門家に相談してください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「これは誰の基準?」と問う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「こうしなければ」と感じたとき、その基準が自分のものか、上司や周りから借りたものかを、一度だけ確かめます。
          借りた基準でも構いません。気づいているかどうかが大切です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② モヤモヤした場面を一つ書き留める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一日の中で違和感を覚えた場面を一つ書き、「本当はどうしたかったか」を一言添えます。
          続けていくと、自分が大事にしているものが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分の支援観を3行で書いてみる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分は、どんな支援をしたいのか」を、上手でなくていいので3行で書きます。
          書けなくても大丈夫です。書けないことに気づくことが、霧を晴らす第一歩です。
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
          <li>・<Link to="/articles/other-axis-what" className={linkCls}>他人軸とは?抜け出せない理由と原因</Link></li>
          <li>・<Link to="/articles/other-axis-check" className={linkCls}>他人軸チェック(15項目)</Link></li>
          <li>・<Link to="/articles/what-do-i-want" className={linkCls}>自分が何をしたいのかわからない</Link></li>
          <li>・<Link to="/articles/thinker-krishnamurti-comparison" className={linkCls}>比較から自由になる(クリシュナムルティから読む)</Link></li>
          <li>・<Link to="/articles/thinker-marcus-aurelius-role" className={linkCls}>「皇帝」の色に染まるな(マルクス・アウレリウスから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">自分の基準がわからなくなった方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          霧の中を、一緒に歩いてみませんか
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          評価も正解もいらない場所で、あなたが本当に大事にしてきたものを、一緒に言葉にしていきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-soseki-self-standard"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、著作権の保護期間が満了している夏目漱石『私の個人主義』(1914年講演)からの抜粋で、一部は筆者による要約です(表記は新字新仮名)。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

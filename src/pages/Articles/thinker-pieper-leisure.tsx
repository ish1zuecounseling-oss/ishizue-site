import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ヨゼフ・ピーパーとは、どんな人ですか?",
    a: "ヨゼフ・ピーパー(1904–1997)は、ドイツの哲学者です。トマス・アクィナスなど中世の哲学の研究で知られ、現代の生活を古典的な人間観から問い直す著作を多く書きました。1948年に発表した『余暇と祝祭』(原題 Muße und Kult)は、代表作として知られています。邦訳は稲垣良典訳が講談社学術文庫から出ています。",
  },
  {
    q: "ピーパーの言う「余暇」は、ふつうの休みや休暇と何が違うのですか?",
    a: "ピーパーは、余暇を、週末や休暇といった外から見える時間の区切りではなく、心の在り方だと考えました。ふつうの休息は、仕事のために体力や気力を回復する目的を持ちます。余暇はそうした目的に従属せず、それ自体に価値があるものだ、というのがピーパーの主張です。",
  },
  {
    q: "「アケディア」とは、怠けのことですか?",
    a: "いいえ。アケディアは中世の思想で使われた言葉で、日本語では「怠惰」と訳されることもありますが、ピーパーが注目したのは単なるなまけではありません。自分が存在していることの価値を、引き受けられなくなる状態に近いものです。ピーパーは、休まずに働き続けることの背景に、こうした状態が隠れている場合があると論じました。すべての働きすぎがそうだ、という意味ではありません。",
  },
  {
    q: "宗教を信じていなくても、この考え方は役に立ちますか?",
    a: "ピーパーの議論は、キリスト教の礼拝を土台にしています。ただ、この記事で借りているのは、「役に立つかどうかと関係なく、ただ喜ぶ時間」という考え方の部分です。特定の信仰をすすめる意図はありません。それぞれの暮らしの中で、食事、季節の行事、誰かとの時間などに置き換えて試すことができます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerPieperLeisure() {
  return (
    <ArticleLayout
      title="休みの日も「役に立つ自分」をやめられない｜ピーパー『余暇と祝祭』から読む、支援職の余暇【公認心理師】"
      description="哲学者ヨゼフ・ピーパーは『余暇と祝祭』で、余暇を「仕事のための休息」とは別のものと考え、働くことが生活の全体を覆う状態を問い直しました。休日も回復や勉強で埋めてしまう支援職の消耗を、この考え方から読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-pieper-leisure"
      date="2026-11-11"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ヨゼフ・ピーパー
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
        休みの日に、「ちゃんと休まなければ」と思う。
        次の勤務に備えて、早く寝る。体を休める。ついでに、資格の勉強も進める。
        予定のない時間があると、なぜか落ち着かない。
      </p>
      <p>
        休んでいるはずなのに、休みの日まで<strong>「役に立つこと」で埋めている</strong>。
        そんな感覚に、心当たりはないでしょうか。
        この感覚を、80年近く前に別の角度から問い直した哲学者がいます。
        ドイツの<strong>ヨゼフ・ピーパー</strong>です。
      </p>

      <h2>ヨゼフ・ピーパーと『余暇と祝祭』</h2>
      <p>
        ピーパー(1904–1997)は、ドイツの哲学者です。
        トマス・アクィナスなど中世の哲学の研究で知られ、現代の暮らしを、古い時代の人間観から見つめ直す本を多く書きました。
      </p>
      <p>
        1948年に発表した<strong>『余暇と祝祭』(原題 Muße und Kult)</strong>は、その代表作です。
        戦後の復興の中で、働くことが生活のすべてになっていく時代に、
        「人は、働くためだけに生きているのか」と問いかけた本として読まれてきました。
        邦訳は、稲垣良典訳で講談社学術文庫から出ています(1988年)。
      </p>

      <h2>ピーパーの言う「余暇」とは</h2>
      <p>
        ピーパーの考えの中心は、<strong>余暇は、ふつうの休息とは別のものだ</strong>という点にあります。
        その趣旨を、筆者が要約します。
      </p>
      <div className="card space-y-2 text-sm text-stone-600 leading-[1.9]">
        <p>・ふつうの休憩や休暇は、<strong>仕事を続けるための回復</strong>という目的を持っている。</p>
        <p>・余暇は、そうした目的に従うものではなく、<strong>それ自体に意味がある</strong>。</p>
        <p>・余暇は、週末や休暇といった時間の区切りのことではなく、<strong>心の在り方</strong>のこと。</p>
        <p className="text-[11px] text-stone-400 pt-1">
          ヨゼフ・ピーパー『余暇と祝祭』の趣旨を、筆者が要約
        </p>
      </div>
      <p>
        ピーパーは、余暇を働くことの3つの面と対比して説明しています。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">「活動」としての労働に対して</p>
          <p className="text-stone-600 leading-[1.9]">
            働くことは、動き、手を出し、何かを成し遂げることです。
            余暇は反対に、内側が静かで、世界に対して<strong>受け取る側にまわる姿勢</strong>だとされます。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「努力」としての労働に対して</p>
          <p className="text-stone-600 leading-[1.9]">
            働くことは、苦労や努力を伴います。
            余暇は、<strong>自分と世界と、存在していること自体を「よし」とする、穏やかな肯定</strong>に近いものです。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「社会的な機能」としての労働に対して</p>
          <p className="text-stone-600 leading-[1.9]">
            働くことは、社会の中で役割を果たし、役に立つことです。
            余暇は、<strong>役に立つかどうかと関係なく、それ自体に価値がある</strong>と考えられます。
          </p>
        </div>
      </div>

      <h2>「全面的な労働」と、その奥にあるもの</h2>
      <p>
        ピーパーが問題にしたのは、働くことそのものではありません。
        <strong>働くことが生活の全体を覆い、人が「機能を果たす者」になってしまうこと</strong>です。
        この状態では、休むことさえ、「次の労働のための準備」に組み込まれてしまいます。
      </p>
      <p>
        そしてピーパーは、休まずに働き続ける人の背景に、中世の思想で<strong>アケディア</strong>と呼ばれた状態を見ました。
        アケディアは、単なる怠けではありません。
        筆者の理解では、<strong>自分が存在していること自体を、引き受けきれなくなる状態</strong>に近いものです。
        落ち着きなく働き続けることが、実は自分の存在を肯定できないことの裏返しになっていることがある、という見方です。
      </p>
      <p>
        もちろん、すべての働きすぎがそうだとは限りません。
        ただ、「役に立てていないと自分に価値がない」という感覚が強い人にとっては、
        耳の痛い指摘かもしれません。
        (<Link to="/articles/self-value-unknown" className={linkCls}>条件付き自己価値</Link>も参考になります)
      </p>

      <h2>余暇の根にある「祝祭」</h2>
      <p>
        ピーパーは、余暇の根には<strong>祝祭</strong>があると考えました。
        祝祭は、成果を上げたから祝うのではなく、
        <strong>世界と自分が「ある」ことを、理由なく喜ぶ時間</strong>です。
        休日(holiday)は、もともと「聖なる日」を意味していた、ということも、彼の議論の背景にあります。
      </p>
      <p>
        ピーパーの議論は、キリスト教の礼拝を土台にしています。
        この記事では、その宗教的な部分ではなく、<strong>「役に立つかどうかを抜きにして、ただ喜ぶ」という考え方</strong>だけを借ります。
      </p>

      <h2>支援職に置き換えると——休みが、回復という業務になる</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 休みが「次の勤務のための準備」になっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          寝る、体をほぐす、食事を整える。どれも大切ですが、すべてが「明日の仕事のため」になっていると、
          休みの日まで、仕事の延長線上にあります。
          (<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休日を、勉強や研修で埋めている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          学ぶこと自体は、悪いことではありません。
          問題は、予定を選ぶ基準が「役に立つかどうか」だけになっていないか、という点です。
          好きだから、おもしろいから、という理由が、いつの間にか消えていないでしょうか。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 何もしていない時間に、罪悪感が出る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          予定のない時間に、「何かしなければ」と焦る。
          ピーパーの見方では、これは働くことが生活の全体を覆っているサインの一つです。
          (<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない</Link>とも重なります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「成果と関係なく喜ぶ」場がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は、日々、誰かの役に立つことで自分の価値を確かめています。
          そのぶん、<strong>役に立っていない自分を、ただ喜べる場</strong>が少なくなりがちです。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「余暇を持たなければ」が、新しい義務になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「正しい余暇を過ごさなければ」と考えた瞬間に、余暇はまた目的を持った活動になります。
          ピーパーの考え方は、休み方の正解を示すものではなく、<strong>自分の時間が何のために使われているか</strong>を見直すための視点として使うのが現実的です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">時間や体力の余裕がない状況もある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手が足りない職場、夜勤の連続、介護や育児、経済的な事情。
          休む時間そのものが確保できないときは、心の持ちようの問題ではなく、体制や生活環境の問題です。
          両方を分けて考える必要があります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">哲学の視点であって、臨床の知見ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ピーパーの議論は、哲学と古典的な人間観に基づくものです。
          眠れない、気分の落ち込みが続く、何も楽しめないといった状態が強いときは、
          <Link to="/articles/helper-signs-to-rest" className={linkCls}>休むべきサイン</Link>として受け止め、医療機関への相談も検討してください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「何のためでもない時間」を、週に30分</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          成果も、記録も、回復の目的も持たない時間をつくります。
          散歩、窓の外を見る、お茶を飲む。何でもかまいません。
          途中で「役に立たないな」と思っても、そのままにしておきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休日の予定に、一つだけ問いを足す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          予定を入れるときに、「これは明日の仕事のためか、それとも、ただ好きか」と自分に聞いてみます。
          答えが前者ばかりなら、後者を一つだけ入れます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 成果と無関係に、小さく味わう</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          今日おいしかったもの、きれいだったもの、ほっとしたこと。
          誰かと話すか、自分だけで味わうかのどちらでもかまいません。
          「役に立った出来事」ではなく、ただ「よかったこと」を選ぶのがコツです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 休みに罪悪感が出たら、一言メモする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今、何に対して申し訳なく感じているのか」を一言書いておきます。
          たいていは、「誰かの役に立っていない」ことへの感覚です。
          それが見えるだけで、少し距離が取れます。
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
          <li>・<Link to="/articles/thinker-dalton-smith-rest" className={linkCls}>休息には7種類ある(ダルトン＝スミスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-russell-fatigue" className={linkCls}>「自分がいないと回らない」は疲れのサイン(ラッセルから読む)</Link></li>
          <li>・<Link to="/articles/thinker-pascal-diversion" className={linkCls}>気晴らしで逃げ続けてしまう(パスカルから読む)</Link></li>
          <li>・<Link to="/articles/thinker-zhuangzi-useless" className={linkCls}>役に立たないことの価値(荘子から読む)</Link></li>
          <li>・<Link to="/articles/helper-rest-types" className={linkCls}>支援職が知っておきたい「休息に必要な要素」</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">休みの日まで「役に立つ自分」が続く方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          休むことに、罪悪感が出るとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「休んでいい」と頭では分かっていても、休めない。その背景には、役に立つことで自分の価値を保ってきた経緯があることが多いです。一人で整理しにくいところを、一緒に見ていきます。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("今の状態を整理してみる" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-pieper-leisure"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はヨゼフ・ピーパー『余暇と祝祭』(稲垣良典訳、講談社学術文庫、1988年)の考え方を、筆者が趣旨として要約したものです。原文の引用ではありません。
        本記事は思想を手がかりに支援職の心理を解説するもので、ピーパーの議論全体を紹介するものでも、医学的な診断でもありません。
      </div>
    </ArticleLayout>
  )
}

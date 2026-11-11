import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "社会的カモフラージュと「マスキング」「擬態」は同じ意味ですか？",
    a: "ほぼ同じものを指して使われています。「社会的カモフラージュ」は研究で使われる用語、「マスキング」や「擬態」は当事者のあいだで使われてきた言い方です。研究者によって、マスキングを「特性を隠すこと」だけに限る場合と、補うことや溶け込むことまで含めた広い意味で使う場合があります。この記事では、広い意味で使います。",
  },
  {
    q: "社会的カモフラージュに心当たりがあれば、自閉スペクトラム症ということですか？",
    a: "いいえ。心当たりがあることと、診断が当てはまることは別です。「本当の自分を出すと受け入れられない」と感じて合わせ続ける経験は、特性の有無にかかわらず多くの人に起こります。研究が多いのは自閉スペクトラム症の人たちですが、この記事の内容だけで自分や他人の特性を判断することはできません。気になる場合は、医療機関や発達障害者支援センターなどで評価を受けられます。",
  },
  {
    q: "カモフラージュは、完全にやめたほうがいいのでしょうか？",
    a: "完全にやめる必要はありません。職場や初対面の場で、ある程度合わせることは多くの人がしています。問題になりやすいのは、「いつも」「全部の場で」「やめたくてもやめられない」状態で続くことです。やめるか続けるかの二択ではなく、どの場で、どのくらい、誰の前でするかを調整する、という考え方が現実的です。",
  },
  {
    q: "カウンセリングで、特性があるかどうかを診断してもらえますか？",
    a: "カウンセリングでは診断はできません。診断や評価は医療機関の役割です。カウンセリングでは、どの場面で・どのくらい合わせていて、それがどんな消耗につながっているかを整理し、続け方を調整することを一緒に考えます。",
  },
]

export default function SocialCamouflage() {
  return (
    <ArticleLayout
      title="社会的カモフラージュとは？「普通のふり」で消耗する仕組みと、支援職が知っておきたいこと"
      description="本来の特性や素の反応を隠して「普通」に見せ続けることを、研究では社会的カモフラージュと呼びます。3つの側面、続けたときの消耗、なぜやめられないのか、支援職が見落としやすい点と調整の考え方を、研究をもとに整理します。"
      url="https://www.ishizue-counseling.jp/articles/social-camouflage"
      date="2026-11-11"
      tags={["emotional_labor", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「ちゃんと普通にできている」ように見えるのに、家に帰ると動けない。
        その落差に、名前がつけられていることがあります。
      </p>

      <p>
        職場では問題なく話せているのに、帰ると何もできなくなる。
        人と会う前に、話し方や表情をあらかじめ頭の中で組み立てている。
        周りからは「落ち着いている」「しっかりしている」と言われるほど、
        自分の中では<strong>かなりの努力で「普通」をやっている</strong>感覚がある。
      </p>
      <p>
        こうした状態は、心理学の研究では<strong>社会的カモフラージュ（social camouflaging）</strong>と呼ばれています。
        この記事では、その中身と、続けたときに起きること、そして支援職として知っておきたい視点を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・人と話す前に、言うことや表情を頭の中で用意している</li>
          <li>・周りの話し方や反応を観察して、真似しながら合わせている</li>
          <li>・居心地が悪くても、そう見えないように振る舞っている</li>
          <li>・「普通に見える」と言われるが、内側は緊張や疲れでいっぱいになっている</li>
          <li>・人といたあと、回復のために一人の時間がかなり必要になる</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed mt-2">
          ※これは診断のためのチェックではありません。当てはまる数で、特性の有無はわかりません。
        </p>
      </div>

      <h2>社会的カモフラージュとは</h2>
      <p>
        社会的カモフラージュとは、<strong>自分の特性や素の反応を隠したり、補ったりして、周囲に溶け込もうとすること</strong>です。
        もともとは、自閉スペクトラム症の成人を対象にした研究から広がった概念で、
        研究では「自分にとっての最善の『普通』を出している」という当事者の言葉が報告されています（Hull et al., 2017）。
      </p>
      <p>
        当事者のあいだでは「マスキング」「擬態」という言葉もよく使われます。
        研究者のPearsonとRose（2021）は、マスキングを
        「本来の反応を意識的・無意識的に抑え、別の反応に置き換えること」という広い意味でとらえ、
        その対象は会話だけでなく、感覚への反応、動き、考え方にも及ぶとしています。
      </p>

      <h2>カモフラージュの3つの側面</h2>
      <p>
        カモフラージュの程度を測る質問紙（CAT-Q）を開発した研究（Hull et al., 2019）では、
        カモフラージュは大きく3つの側面に分けられています。
        次の説明は、その分け方を日常の言葉に直したものです。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 補う（補償）</p>
          <p className="text-stone-600 leading-[1.9]">
            社会的な場面を乗り切るために、会話の型や表情の使い方を「覚えて」使う。
            人の話し方を観察して真似したり、会話の流れをあらかじめ準備したりする。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 隠す（マスキング）</p>
          <p className="text-stone-600 leading-[1.9]">
            自分の特性や、素の反応が表に出ないように抑える。
            「普通」に見える表情や態度をつくり、居心地の悪さや困りごとを見せない。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 溶け込む（同化）</p>
          <p className="text-stone-600 leading-[1.9]">
            居心地の悪さがあっても、集団の中にいるために自分を押して合わせる。
          </p>
        </div>
      </div>

      <p className="text-sm text-stone-500 leading-relaxed">
        3つは重なり合うので、きれいに切り分けられるものではありません。
        「どれか1つに当てはまるかどうか」より、
        <strong>場面ごとにどれを、どのくらい使っているか</strong>を見るほうが、実際の生活には役立ちます。
      </p>

      <h2>「演技」「過剰適応」とは、どう違うのか</h2>
      <p>
        <Link to="/articles/acting-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事で演技して疲れる</Link>、
        <Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>、
        <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>——
        これらと社会的カモフラージュは、外から見るとよく似ています。
        実際に重なる部分も大きく、はっきり線を引くことはできません。違いを挙げるなら、次のような整理になります。
      </p>

      <div className="card space-y-2 text-sm text-stone-600 leading-[1.9]">
        <p><strong>感情労働</strong>：仕事として求められる感情（笑顔・冷静さ・共感）を出し続けること。場面は仕事に限られる。</p>
        <p><strong>過剰適応</strong>：評価や関係を守るために、相手の期待に合わせ続けること。動機の中心は「嫌われたくない」「役に立たなければ」。</p>
        <p><strong>社会的カモフラージュ</strong>：自分の自然な反応（話し方、感覚への反応、動き、関心の向け方など）の出方そのものを、抑えたり作り替えたりすること。仕事以外の場面にも広がる。</p>
      </div>

      <p>
        ただし、<strong>外から見て、あるいは自分の感覚だけで、どれに当たるかを決めることは難しい</strong>です。
        支援職の場合は、感情労働と過剰適応とカモフラージュが同時に起きていることも珍しくありません。
        大切なのは名前を決めることより、<strong>「素の反応を抑えるコストが、今どのくらい積み重なっているか」</strong>を見ることです。
      </p>

      <h2>なぜ、やめられないのか</h2>
      <p>
        カモフラージュは、「やめられない」というより、<strong>やめると困ったことが起きた経験</strong>から身についていることが多いと考えられています。
        研究では、次のような動機が指摘されています（Hull et al., 2017／Pearson & Rose, 2021）。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p>・からかわれる、浮く、いじめられるといった経験を避けたい</p>
        <p>・「変わった人」と見られることへの不安（周りの偏見への警戒）</p>
        <p>・仕事や人間関係を守るために、評価を下げたくない</p>
        <p>・いつからか身についていて、している自覚がなくなっている</p>
      </div>
      <p>
        つまり、カモフラージュは意志の弱さや嘘ではなく、<strong>その場で身を守るために学んだ方法</strong>です。
        「全部の場面で素を出せるようにならなければ」と考える必要はありません。
        一方で、その方法が<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「素の自分では受け入れてもらえない」という感覚</Link>と結びついていると、
        続けるほど、自分の本音や好みが見えにくくなっていきます。
      </p>

      <h2>続けると、何が起きるのか</h2>
      <p>
        研究が示していること（と、まだ分かっていないこと）を、分けて整理します。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">消耗・燃え尽き</p>
          <p className="text-stone-600 leading-[1.9]">
            カモフラージュは常に注意と努力を使うため、疲労がたまりやすいと考えられています。
            PearsonとRoseは、カモフラージュが続くと自分の内側のサインに気づきにくくなり、
            ある時点で限界に達する、という流れを仮説として示しています。
            自閉スペクトラム症の成人の「燃え尽き」を調べた研究（Raymaker et al., 2020）でも、
            長期の疲労、スキルの低下、刺激への耐性の低下といった状態が報告されています。
            ただしこれらは、モデルや当事者の語りに基づくもので、確定した因果ではありません。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">心の不調との関連</p>
          <p className="text-stone-600 leading-[1.9]">
            自閉スペクトラム症の成人を対象にした調査（Cassidy et al., 2018）では、
            カモフラージュの多さと、自殺を考えた経験の多さに関連が見られました。
            ここで言えるのは「関連がある」ことまでで、
            カモフラージュが原因だと証明されたわけではありません。
            必要な支援が受けられていないことなど、ほかの要因も同じ研究で挙げられています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">見えなくなること</p>
          <p className="text-stone-600 leading-[1.9]">
            うまく合わせられているほど、周りからは困っているように見えません。
            その結果、<strong>困りごとが伝わらない・支援につながりにくい</strong>という問題が起こりえます。
            診断や支援につながるのが遅れることとの関連も指摘されています（Pearson & Rose, 2021）。
          </p>
        </div>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどい気持ちが強いとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「消えてしまいたい」「死にたい」という気持ちが出ているときは、この記事を読み進めるより先に、
          話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <h2>支援職が知っておきたい3つの視点</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分自身が、「ちゃんとした支援者」をやり続けていないか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は、落ち着いていること、共感的であること、役に立つことを求められます。
          その役割が「素の自分では足りない」という感覚と結びつくと、
          仕事の場でのカモフラージュは、日常の一部になっていきます。
          帰宅後の消耗が大きい、休日も顔が戻らないと感じるなら、
          <Link to="/articles/acting-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">演技疲れ</Link>や
          <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>の観点からも整理できます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「できているように見える」ことと「困っていない」ことは別</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の面談では落ち着いている。同僚は、会議ではそつなく発言する。
          けれども、その後に強い疲れが出ていたり、見えないところで大きな負担をかけていたりすることがあります。
          見えている姿だけで「問題なし」と判断せず、
          <strong>「そのあと、どうなっているか」</strong>を聞くことが、困りごとを拾う入口になります。
          ただし、特性があるかどうかを決めつけたり、詮索したりすることは避けるべきです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「うまく合わせる方法」を教えることの、もう一つの面</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          社会的なやりとりの練習は、役に立つことがあります。
          一方で、研究チームの一人は、カモフラージュを助ける取り組みが
          「素の自分は受け入れられない」というメッセージにもなりうる、と指摘しています（Nottingham大学プレスリリース, 2018）。
          練習の目的を、「目立たなくする」ことだけにせず、
          <strong>本人が望む場で、消耗しすぎずに関われること</strong>に置けているかを、振り返る価値があります。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        自分の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link>
      </p>

      <LineCtaImpostor />

      <h2>気づくためのヒント</h2>
      <p>
        カモフラージュは、自分では「いつものこと」になっていて、見えにくいものです。
        次の問いで、場面ごとの違いを見てみてください。
      </p>

      <div className="card">
        <ul className="text-sm text-stone-600 space-y-2 leading-[1.9]">
          <li><strong>どこで：</strong>いちばん合わせているのは、職場・家族・友人・オンラインのどこか</li>
          <li><strong>誰の前で：</strong>ほとんど合わせなくていい人は、いるか。いないとしたら、それ自体が大きな情報</li>
          <li><strong>どのくらい：</strong>事前に準備している、あとで頭の中で振り返る、といった「見えない作業」がどれだけあるか</li>
          <li><strong>そのあと：</strong>終わったあとに、疲れ・動けなさ・感覚の過敏さが出るか。回復までにどのくらいかかるか</li>
          <li><strong>隠しているもの：</strong>話し方、表情、感覚の苦手さ、一人になりたい気持ち、関心のあること、のどれか</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-[1.9]">
        数日分を書き出すだけでも、「疲れる日」と「そうでもない日」の違いが、
        場面や相手の違いとして見えてくることがあります。
      </p>

      <h2>回復の方向——「やめる」ではなく「調整する」</h2>
      <p>
        現実的な目標は、カモフラージュをゼロにすることではありません。
        <strong>量と場を調整し、消耗を回復できる範囲に収めること</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 使っている場面を知る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          上の「気づくためのヒント」で、場面ごとの量を見える形にします。
          「全部がつらい」から、「この場面と、この相手との組み合わせが重い」に変わるだけで、手の打ち方が見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 合わせなくていい場を、1つ作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          全部の場面で素を出す必要はありません。
          まずは、1人でも、1つの場でも、「ここでは準備しなくていい」と思える場を確保します。
          <Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>の考え方が参考になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 回復の時間を、予定に入れておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          合わせた分の疲れは、あとから必ず出ます。
          人と会う予定の前後に、刺激を減らして一人で過ごす時間を先に確保しておくと、立て直しが早くなります。
          感覚への刺激（音、光、人の多さ）を減らす工夫も、ここに含まれます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 伝えるかどうかは、自分で決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「困りごとを先に伝える」「配慮を依頼する」という方法もあります。
          ただし、<strong>伝えるかどうか、誰に、どこまで伝えるかは本人が決めること</strong>です。
          職場の理解が得られるか不安なときは、伝える前に、伝えた場合と伝えない場合の現実的な見通しを整理することから始められます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 評価や診断が必要か、専門機関に確認する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          特性や診断について知りたいときは、精神科・心療内科などの医療機関、
          または各地の発達障害者支援センターに相談できます。
          カウンセリングでは診断はできませんが、整理の相手にはなれます。
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/acting-fatigue" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 仕事で演技して疲れるのはなぜ？</a>
          <a href="/articles/always-adjusting-to-others" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ いつも相手に合わせてしまう</a>
          <a href="/articles/recovering-feeling" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情・感覚を取り戻す方法</a>
        </div>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「普通のふり」の疲れを、外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どの場面で、どのくらい合わせていて、何が消耗につながっているのか。
          診断ではなく、続け方の調整を前提に、支援職の消耗の視点から整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/social-camouflage"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Hull, L. et al. (2017). "Putting on My Best Normal": Social Camouflaging in Adults with Autism Spectrum Conditions. Journal of Autism and Developmental Disorders, 47, 2519–2534.／
        Hull, L., Mandy, W., Lai, M.-C. et al. (2019). Development and Validation of the Camouflaging Autistic Traits Questionnaire (CAT-Q). Journal of Autism and Developmental Disorders, 49, 819–833.／
        Pearson, A., &amp; Rose, K. (2021). A Conceptual Analysis of Autistic Masking: Understanding the Narrative of Stigma and the Illusion of Choice. Autism in Adulthood, 3(1), 52–60.／
        Cassidy, S., Bradley, L., Shaw, R., &amp; Baron-Cohen, S. (2018). Risk markers for suicidality in autistic adults. Molecular Autism, 9, 42.／
        Raymaker, D. M. et al. (2020). Defining Autistic Burnout. Autism in Adulthood, 2(2), 132–143.／
        University of Nottingham (2018). New research sheds light on why suicide is more common in autistic people（プレスリリース）.
        ※研究の多くは自閉スペクトラム症の成人を対象にしており、調査時点の関連を見たものが中心です。因果関係を示すものではありません。
        自閉スペクトラム症以外の人での研究は、まだ限られています。
        本記事はこれらの研究を支援職向けに整理したもので、医学的な診断や、自己診断・他者の診断を目的としたものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の研究をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

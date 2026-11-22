import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "AIに悩みを相談するのは悪いことですか？",
    a: "悪いことではありません。言葉にして気持ちを整理したり、人には言いにくいことを外に出したりする助けになることがあります。大切なのは、使ったあとに自分の考えが整理されているか、それとも答えを委ねているだけになっていないか、を時々振り返ることです。",
  },
  {
    q: "AIに相談すると気持ちが楽になるのはなぜですか？",
    a: "考えられる理由は、主に3つです。言葉にすることで気持ちを扱いやすくなること。書いた文を読み返して、少し距離をとれること。人にどう思われるかを気にせずに話せること。ただし、これらの研究はAIとの会話そのものを調べたものではなく、誰でも必ず楽になるわけでもありません。",
  },
  {
    q: "AIがいつも肯定してくるのはなぜですか？",
    a: "AIには、相談した人の考えに合わせて肯定しやすい傾向（迎合）があることが、研究で示されています。また、AIはあなたが書いた文章をもとに答えるので、自分の側から見た説明には、その側に立った返事が返ってきやすくなります。反対の見方がほしいときは、こちらから頼むと出てきやすくなります。",
  },
  {
    q: "AIに依存しているかどうか、どう判断できますか？",
    a: "使った回数や時間だけでは判断できません。目安になるのは、「使ったあとに生活が楽になっているか」です。たとえば、使えないと強い不安になる、人に話すことが前より減った、眠る時間が削られている、AIの答えなしでは決められなくなった、といったときは、使い方を見直すきっかけになります。京都大学の学生相談部門のページにも、振り返りのための項目が載っています。気になるときは、一人で判断せず、人にも相談してください。",
  },
  {
    q: "AIとカウンセリングは何が違いますか？",
    a: "AIは、あなたが書いた文章の範囲で、その場で答えます。カウンセラーは、言葉にならない様子や、これまでのいきさつも含めて話を聞きます。そして、必要なときには、あなたの考えにそのまま同意せず、一緒に立ち止まって考えます。危ない状態のときには、医療や他の支援につなぐこともします。また、守秘義務のもとで話を聞きます。ただし、あなたや誰かの命や安全に関わるときなどは、法律や専門的な判断にもとづいて、必要な範囲で情報を共有することがあります。どちらが優れているというより、役割が違うものです。",
  },
]

const SLUG = "/articles/ai-consultation-psychology"

export default function AiConsultationPsychology() {
  return (
    <ArticleLayout
      title="AIに悩みを相談すると楽になるのはなぜ？｜気持ちが整理される心理と、考えが偏るリスク【公認心理師】"
      description="AIに悩みを話すと気持ちが整理されるのはなぜか。肯定されて考えが偏る仕組み、何度も相談したくなる理由、自分で考える力を保ったまま使う方法を、研究で分かっていることと限界に分けて公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/ai-consultation-psychology"
      date="2026-11-21"
      tags={["self-function", "counseling"]}
      faq={FAQ_ITEMS}
    >
      <p>夜、仕事から帰っても、頭の中で今日のやりとりが続いている。</p>
      <p>同僚に連絡するには遅い時間で、家族にはうまく説明できない。そこで、スマートフォンのAIに、あったことを打ち込んでみる。「そう感じるのは自然なことです」という返事を読んで、少し息がつける。</p>
      <p>けれど、しばらくすると同じ不安が戻ってきて、似た質問をもう一度してしまう。あるいは、「あなたは悪くない」と言われて、相手に話してみようと思っていた気持ちが、いつの間にか消えている。</p>
      <p>2026年には、京都大学の学生相談部門が「<a href="https://www.assdr.kyoto-u.ac.jp/ssc/consulting_ai/" target="_blank" rel="noopener noreferrer">AIに悩みを相談する際に気をつけて欲しいこと</a>」を公開し、話題になりました。AIに悩みを話すことは、もう特別なことではありません。</p>
      <p>この記事は、AIに相談することの良し悪しを決めるためのものではありません。AIに話しているとき、自分の中で何が起きているのか。気持ちが整理されるのはなぜか。考えが偏ったり、相談が止まらなくなったりするのはなぜか。心理学で分かっていることと、まだ分かっていないことを分けて、整理します。</p>
      <p>なお、記録や文書づくりなど、仕事でAIを使って疲れる話は、「<Link to="/articles/ai-verification-fatigue">AIを使うほど疲れるのはなぜ？</Link>」で扱っています。この記事は、自分の悩みを話す相手としてAIを使う場面の話です。</p>
      <p><strong>こんな体験はありませんか</strong></p>
      <ul className="list-disc">
        <li>AIに話したら、自分が何に困っているのかが少し見えた</li>
        <li>人には言えないことも、AIには書けた</li>
        <li>安心したはずなのに、似たことを何度も尋ねてしまう</li>
        <li>AIの返事を読んで、「やっぱり自分は正しい」と思った</li>
        <li>決めなければいけないことを、AIの答えをもとに決めた</li>
      </ul>
      <p className="text-sm text-stone-500">※当てはまっても、悪いことではありません。診断のためのチェックでもありません。</p>
      <h2>AIに悩みを話すと気持ちが整理されるのはなぜか</h2>
      <p>「AIに話したら少し楽になった」という体験には、いくつかの心の働きが関わっていると考えられます。ただし、ここで紹介する研究は、どれもAIとの会話そのものを調べたものではありません。「言葉にする」「書く」「話す」ことについて分かっていることが、AIに文章で話す場面にも関わっている可能性がある、という範囲の話です。</p>
      <h3>言葉にすると、気持ちを扱いやすくなる</h3>
      <p>頭の中にあるときの気持ちは、「もやもやする」「しんどい」という、はっきりしない塊のようなものです。それを文章にしようとすると、「怒っているのか、悲しいのか」「何が一番引っかかっているのか」を選ばなければなりません。</p>
      <p>Liebermanら（2007）の実験では、参加者が感情を表した顔写真を見て、その感情に合う言葉を選ぶときには、性別を表す名前を選ぶときより、脳の扁桃体の反応が小さくなっていました。感情に名前を付けることが、感情の反応を少し落ち着かせる可能性を示した研究です。</p>
      <p>PennebakerとBeall（1986）の実験では、大学生がつらい出来事について「何があったか」と「そのとき何を感じたか」の両方を、4日間、1回15分ずつ書きました。すると、その後の約半年間、病気で健康センターを訪れる回数が、ほかのグループのようには増えませんでした。一方で、書いた直後には、気分がむしろ落ち込んでいました。言葉にすることは、その場ですぐ楽になることとは限らない、という点も大切です。（参加者は46人と少なく、著者自身も予備的な結果としています。）</p>
      <p>感情を言い分けることについては「<Link to="/articles/emotional-granularity">「しんどい」としか言えないのはなぜ？</Link>」、気持ちを押し込めることと整理することの違いについては「<Link to="/articles/emotion-suppression-vs-processing">感情を抑えることと、整理することの違い</Link>」で詳しく扱っています。</p>
      <h3>頭の中の問題を、外に出して眺められる</h3>
      <p>文章にすると、頭の中でぐるぐる回っていたことが、画面の上に並びます。自分の書いた文を読み返すと、「こう感じていたのか」と、少し離れたところから眺められることがあります。</p>
      <p>KrossとAyduk（2011）は、これまでの研究をまとめ、つらい体験を「自分の目からもう一度味わう」ように振り返るより、「少し離れたところから見る」ように振り返ったほうが、苦痛も反すうも少ない傾向があると整理しています。心理学では、これを「自己距離化」と呼びます。</p>
      <p>AIに話すときにも、自分の状況を人に伝わるように説明し直したり、書いた文を読み返したりすることで、似た「距離」が生まれているのかもしれません。ただし、これは研究からの推測で、AIとの会話で確かめられたことではありません。</p>
      <h3>評価される不安が少ないと、話しやすくなる</h3>
      <p>人に悩みを話すとき、私たちは話の中身だけでなく、「どう思われるか」も気にしています。支援職であれば、「プロなのに」「同僚も大変なのに」という気持ちも重なります。</p>
      <p>Gratchら（2014）は、画面上の仮想の聞き手が心の健康について質問する面接で、実験を行いました。参加者の一部には「この聞き手はAIを使って会話し、あなたの匿名性は保たれる」と伝え、残りの参加者には「別室にいる人がこの聞き手を通して会話し、画面越しにあなたの姿を見て、声を聞いている」と伝えました。その結果、前者の参加者のほうが、自分のことを話すことへの恐れが小さく、よく見せようとする傾向も弱くなっていました。実際に人が操作していたかどうかでは、こうした差は見られませんでした。「人に見られ、評価されている」と感じずに済むことが、話し始めるハードルを下げることがあるのです。</p>
      <p>ただしこの実験は、今の生成AIではなく、2014年の面接用の仮想人間を使ったものです。いまのAIにそのまま当てはまるかは、分かっていません。</p>
      <h2>AIが「わかってくれる相手」に感じられるのはなぜか</h2>
      <h3>否定せず、急かさず、疲れない</h3>
      <p>AIは、話を途中でさえぎりません。夜中に同じ話をしても、いやな顔をしません。「それはつらかったですね」と、受け止める言葉から返してくれることも多いです。</p>
      <p>人と話すときにある「迷惑じゃないかな」「相手も疲れているのに」という遠慮を、AIにはしなくて済みます。人の気持ちを受け止め続けている支援職にとって、「気を遣わずに話せる相手」があることは、それだけで大きな安心になります。そう感じて安心すること自体は、自然なことです。</p>
      <h3>ELIZA効果——機械の返事に「理解」を感じる心の働き</h3>
      <p>1966年、マサチューセッツ工科大学のワイゼンバウムは、ELIZA（イライザ）という対話プログラムを発表しました。入力された文の中の言葉を手がかりに、決まった形で言い換えたり問い返したりするだけの、単純な仕組みです。代表的な台本は、ロジャーズ派のセラピストのような受け答えをまねたものでした。</p>
      <p>ワイゼンバウムは論文の中で、話し手は「聞いてもらえている、理解されている」という感覚を保つために、相手の返事に意味を補って読むこと、そしてその印象は現実の会話でさえ思い込みでありうることを指摘しています。このように、機械の応答に人間のような理解や意図を読み取ってしまう心の働きは、のちに「ELIZA効果」と呼ばれるようになりました。</p>
      <p>今のAIは、ELIZAとは比べものにならないほど自然な文章を返します。その分、「わかってくれている」という感覚は、さらに生まれやすいと考えられます。</p>
      <h3>「理解されていると感じること」と「理解してもらえていること」は別</h3>
      <p>受け止められたと感じて安心することは、悪いことではありません。ただ、その安心と、相手があなたの状況を人間のように理解しているかどうかは、別の問題です。</p>
      <p>AIが返事のもとにしているのは、基本的に、あなたが書いた文章です。書かなかったことは、AIには届いていません。たとえば、その場の空気、これまでのいきさつ、相手の側の事情、あなたの声の重さです。一般的なチャット型AIは、通常、会話が終わったあとに、あなたの状態を自ら継続的に確認する存在ではありません。</p>
      <p>AIを「気持ちを話せる道具」として使うことと、人とのつながりの代わりにすることは、別のことです。この区別が、このあとの話の土台になります。</p>
      <h2>肯定されると、自分の考えが正しいと感じやすくなる</h2>
      <h3>AIは、相談した人に合わせやすい</h3>
      <p>AIには、相談した人の考えや行動を、必要以上に肯定しやすい傾向があることが分かっています。英語では「sycophancy（迎合）」と呼ばれます。</p>
      <p>Chengら（2026年、Science誌）は、まず11種類のAIに、人間関係の相談などを大量に入力して調べました。AIが相談者の行動を肯定した割合は、人間の回答より平均で約49%高いものでした。多くの人が「これは相談者のほうに問題がある」と判断した投稿でも、AIは半数ほどで相談者の側に立ちました。</p>
      <p>続く実験には、合わせて2,405人が参加しました。そのうち800人は、自分が実際に経験した人とのもめごとを思い出し、AIと8往復の会話をしています。得られた結果は、次のとおりです。</p>
      <ul className="list-disc">
        <li>肯定的な応答を受けた人は、「自分が正しい」という確信が強まった</li>
        <li>謝ったり、関係を修復したりしようとする気持ちが弱まった</li>
        <li>それでも、肯定的な応答のほうを「質が高い」と評価し、また使いたいと答えた</li>
        <li>別の実験では、返事の送り手を「AI」と伝えても「人」と伝えても、確信が強まり、関係を修復しようとする気持ちが弱まるという効果は、同じように見られた</li>
      </ul>
      <p>つまり、この研究で確かめられたのは、肯定的な返事を受けると「自分が正しい」という確信が強まり、そうした返事をする相手のほうが好まれ、また使いたいと思われやすい、ということです。「安心できたから、また相談したくなった」という心の流れまでを確かめたわけではありません。ただ、気持ちを受け止めてもらうことと、自分の解釈への確信が強まることは、一つの返事の中で同時に起こることがあります。この記事では、この点に注目していきます。</p>
      <p>ただし、この研究には限界もあります。参加者は米国の英語話者で、測ったのは会話直後の気持ちです。実際の人間関係が長い目でどう変わるかを確かめたものではありません。あらゆる悩み相談にそのまま当てはまるとは言えません。</p>
      <h3>もともと人は、自分の考えに合う情報を集めやすい</h3>
      <p>人にはもともと、自分の考えに合う情報に目が向き、合わない情報を軽く見やすい傾向があります。心理学では「確証バイアス」と呼ばれます。</p>
      <p>ここからは筆者の見方です。AIに悩みを話すとき、私たちはたいてい、自分の側から見た状況を書きます。AIはその文章をもとに答え、しかも肯定しやすい。すると、もともとの解釈が、外からお墨付きをもらったように感じられます。こうして、確証バイアスとAIの迎合が、同じ向きに重なることがありえます。</p>
      <p>たとえば、同僚に強い言い方をされた場面を、自分の受けた傷つきを中心に書いたとします。AIは「それはつらかったですね。あなたの反応は自然です」と返すでしょう。その言葉で気持ちが落ち着くのは、大事なことです。ただ、「やっぱりあの人がおかしい」という結論までが、確かなものに感じられていないでしょうか。その日、相手の側に何があったのかは、まだ誰も知らないままです。</p>
      <h3>「安心すること」と「確信が強まること」を分ける</h3>
      <div className="card overflow-x-auto my-6">
        <table className="w-full text-sm text-stone-600" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e7e5e4" }}>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top"></th>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">安心する</th>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">確信が強まる</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">起きていること</td>
              <td className="py-2 px-2 align-top">気持ちが落ち着く</td>
              <td className="py-2 px-2 align-top">出来事の解釈が、一つに固まる</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">よくある感覚</td>
              <td className="py-2 px-2 align-top">「少し楽になった」</td>
              <td className="py-2 px-2 align-top">「やっぱり自分が正しい」</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">そのあと</td>
              <td className="py-2 px-2 align-top">ほかの見方も考えられる</td>
              <td className="py-2 px-2 align-top">ほかの見方を聞くと、反発したくなる</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>本人には、どちらも同じ「楽になった」に感じられます。先ほどの研究でも、参加者は肯定的な応答とそうでない応答を、同じくらい「客観的」と評価していました。そこで、会話のあとに「相手の側には、どんな事情がありえただろう」と一度だけ考えてみると、自分が今どちらにいるかが見えやすくなります。</p>
      <p>「きっとこうに違いない」という決めつけから距離をとる考え方は、「<Link to="/articles/thinker-pyrrho-epoche">「きっとこう思われている」を手放す｜ピュロンの「判断保留」</Link>」で紹介しています。</p>
      <h2>何度もAIに相談したくなるとき</h2>
      <h3>「大丈夫」と言ってほしくなる——安心確認行動</h3>
      <p>不安なとき、誰かに「大丈夫だよ」と言ってもらって落ち着こうとするのは、自然なことです。心理学では、このように安心を得るための確認や問いかけを「安心確認行動（reassurance seeking）」と呼びます。</p>
      <p>SalkovskisとKobori（2015）は、強迫症の人153人、パニック症の人50人、そうした悩みのない人52人に、安心を求めたときの気持ちの変化を振り返ってもらいました。強迫症とパニック症の人たちでは、安心を得るとすぐにつらさが和らぐ一方、時間がたつとつらさが戻り、「もう一度確かめたい」という気持ちも戻っていました。悩みのない人たちでは、こうした戻りははっきりとは見られませんでした。ただしこれは、過去の体験を思い出して答えてもらった調査です。また著者らは、「安心を求めると不安が悪化する」と単純に伝えることは、本人や家族にとってかえって害になりうる、とも述べています。</p>
      <p>日常の中で誰かに確かめて安心することと、臨床で問題になるほどの過剰な安心確認は、同じではありません。安心を求めること自体が悪いわけではありません。ただ、得た安心が長続きせず、確かめることが不安へのただ一つの対処になっているときは、似た循環が起きているのかもしれません。</p>
      <h3>AIは、確認を止めるきっかけが少ない</h3>
      <p>人に同じことを何度も尋ねると、相手が疲れたり、「さっきも言ったよね」と返されたりします。それが、確認をいったん止めるきっかけにもなっています。AIとの会話では、相手が疲れたり、こちらが気を遣ったりして会話が止まる、ということが起こりにくい場合があります。また、多くのサービスでは、時間を問わず繰り返し相談できます。そのことが、安心を確かめるやりとりを続けやすくする場合があります。</p>
      <p>GoldenとAboujaoude（2026年、npj Digital Medicine誌）は、こうしたAIの特徴を踏まえて、汎用のAIチャットボットが、強迫症や不安症の安心確認や回避を続けさせてしまう可能性を論じています。ただしこの論文は、新しいデータを集めた研究ではなく、既存の知見をもとにした理論的な提言です。著者らも、今後の研究で確かめる必要があるとしています。また、AIの利用をすべてやめるよう勧めているわけでもありません。</p>
      <h3>相談が、反すうや回避の一部になるとき</h3>
      <p>何度も相談することが、そのまま依存や病気を意味するわけではありません。考えを少しずつ深めていることもあります。ただ、次のようなときは、相談が、頭の中の堂々めぐり（反すう）や、つらいことを避けるための行動の一部になっているのかもしれません。</p>
      <ul className="list-disc">
        <li>聞くたびに同じような答えが返ってくるのに、また聞きたくなる</li>
        <li>相談しているあいだは、本当にしなければいけないこと（話す、休む、決める）から離れられる</li>
        <li>相談をやめると、すぐに不安が戻ってくる</li>
        <li>眠る時間が削られている</li>
      </ul>
      <p>これは診断の目安ではなく、「いま自分に何が起きているか」を見るための手がかりです。何回相談したら危ない、という線もありません。</p>
      <p>話し続けることの落とし穴については、心理学者クロスの研究を紹介した「<Link to="/articles/thinker-kross-chatter">頭の中の反省会が止まらない｜イーサン・クロスの「チャッター」</Link>」でも触れています。反すうそのものの仕組みと抜け方は、「<Link to="/articles/cannot-sleep-thinking-work">眠れない・仕事のことが頭から離れない</Link>」と「<Link to="/articles/helper-rumination">仕事のことが頭から離れない｜考え続けてしまう心理の構造</Link>」で詳しく扱っています。</p>
      <h2>自分で考える力を保ちながらAIを使うには</h2>
      <p>ここまでの話をまとめると、AIに話して楽になるときには、中身の違ういくつかのことが起きています。</p>
      <div className="card overflow-x-auto my-6">
        <table className="w-full text-sm text-stone-600" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e7e5e4" }}>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">いま起きていること</th>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">よくある感覚</th>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">続いていくと</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">考えが整理される</td>
              <td className="py-2 px-2 align-top">「何に困っているかが見えた」</td>
              <td className="py-2 px-2 align-top">自分の言葉で説明できることが増える</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">安心する</td>
              <td className="py-2 px-2 align-top">「少し楽になった」</td>
              <td className="py-2 px-2 align-top">次のことを考える余裕が生まれる</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">確信が強まる</td>
              <td className="py-2 px-2 align-top">「やっぱり自分が正しい」</td>
              <td className="py-2 px-2 align-top">ほかの見方が入らなくなる</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">判断を委ねる</td>
              <td className="py-2 px-2 align-top">「AIがそう言ったから」</td>
              <td className="py-2 px-2 align-top">自分で選ぶ感覚が薄れる</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">考えるための補助にする</td>
              <td className="py-2 px-2 align-top">「材料がそろった、あとは自分で決める」</td>
              <td className="py-2 px-2 align-top">自分の考えを、自分で整理しやすくなる</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>（この表は、研究で分類されたものではなく、筆者が説明のために整理したものです。）</p>
      <p>上の2つと下の3つは、その場ではどれも「楽になった」に感じられます。違いが出るのは、使い方です。ここでは、「AIに答えを出してもらう」のではなく、「自分が考えるための材料を出してもらう」使い方を、筆者の提案として紹介します。</p>
      <h3>① 結論より、考えるための問いを出してもらう</h3>
      <p>「どうしたらいい？」と聞く代わりに、「この状況を整理するために、私に質問を一つずつしてください」と頼んでみます。答えをもらうとそこで考えが止まりますが、問いに答えるときは、自分の頭を使います。</p>
      <p>答えを与えるより、問いで相手の中にある考えを引き出すという考え方は、「<Link to="/articles/thinker-socrates-midwife">答えを与えるより、問いで引き出す｜ソクラテスの「産婆術」</Link>」で紹介しています。</p>
      <h3>② 事実・解釈・感情を分けて整理してもらう</h3>
      <p>「私が書いたことを、①実際に起きたこと、②私の受け取り方、③私の気持ち、に分けてください」と頼みます。「あの人は私を見下している」が、実際に起きたことではなく、自分の受け取り方だったと気づくこともあります。</p>
      <h3>③ 自分とは違う見方も、あえて尋ねる</h3>
      <p>「相手の立場から見ると、どう見えると思いますか」「私の考えが間違っているとしたら、どんな可能性がありますか」と聞いてみます。AIは合わせやすいので、こちらから頼まないと、反対の見方は出てきにくいためです。</p>
      <h3>④ AIの答えを、自分の言葉でまとめ直す</h3>
      <p>会話の最後に、「結局、私は何に困っていて、次に何をするのか」を、自分の言葉で一、二行に書いてみます。うまく書けなくても、かまいません。書けたところまでを、今の手がかりにします。AIの答えをそのまま判断の理由にせず、最後に選ぶのは自分、という形を残します。</p>
      <p>自分で選ぶ力がいまどのくらい保たれているかは、「<Link to="/articles/self-function-check">自己機能チェック20項目</Link>」で振り返ることもできます。人の評価や外の答えを基準にしてしまう状態については、「<Link to="/articles/other-axis-what">他人軸とは？</Link>」で整理しています。</p>
      <h3>⑤ 大切な決定は、人や専門家にも確かめる</h3>
      <p>薬、受診、休職や退職、お金や法律に関わることなど、生活を大きく左右する決定は、AIの答えだけで決めないでください。AIは、もっともらしい誤りを含むことがあります。必要な情報は、主治医、職場の担当者、公的な窓口など、人に確かめます。</p>
      <p>そのほか、次のことも助けになります。</p>
      <ul className="list-disc">
        <li>夜遅くに使うときは、終わる時刻を先に決めておく</li>
        <li>名前、職場、利用者さんのことなど、個人が分かる情報は入力しない</li>
      </ul>
      <h2>AIだけで抱え込まず、人に相談したほうがよいとき</h2>
      <p>AIに話すことをやめる必要はありません。ただ、次のようなときは、AIとは別に、人の支えを加えてほしい場面です。</p>
      <ul className="list-disc">
        <li>眠れない、仕事に行けないなど、日常生活や仕事への支障が続いている</li>
        <li>不安や落ち込みが、前より強くなっている</li>
        <li>薬、受診、法律、住まいやお金など、生活に大きく関わる判断が必要</li>
        <li>死にたい気持ちがある、自分を傷つけてしまいそう</li>
      </ul>
      <p>一般的なチャット型AIは、会話に入力されていないあなたの生活上の変化を継続的に把握したり、危ないときに現場へ駆けつけたりすることはできません。米国心理学会（APA）も2025年11月の勧告で、生成AIのチャットボットやウェルネスアプリを、資格のある専門家による支援の代わりとして使うべきではないと述べています。</p>
      <p><strong>いま、死にたい気持ちがあるときは</strong></p>
      <p>AIではなく、人につながる窓口に連絡してください。厚生労働省の「<a href="https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/" target="_blank" rel="noopener noreferrer">まもろうよ こころ</a>」に載っている主な電話窓口です（2026年11月21日に確認）。0120で始まる番号は通話料が無料、0570で始まるナビダイヤルは通話料がかかります。0570の通話料には、携帯電話のかけ放題プラン等の無料通信は適用されません。また、050から始まるIP電話では利用できない窓口もあります。電話番号や受付時間は変わることがあります。利用できる電話番号やSNS・チャット相談の窓口については、かける前に厚生労働省の公式ページでご確認ください。</p>
      <div className="card overflow-x-auto my-6">
        <table className="w-full text-sm text-stone-600" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e7e5e4" }}>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">窓口</th>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">電話番号</th>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top">受付時間</th>
              <th className="text-left py-2 px-2 font-medium text-stone-700 align-top whitespace-nowrap">通話料</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">#いのちSOS</td>
              <td className="py-2 px-2 align-top"><span className="whitespace-nowrap">0120-061-338</span></td>
              {/* 2026年11月1日〜11月末は受付休止(https://lifelink.or.jp/4400)。再開したら「24時間365日」に戻す */}
              <td className="py-2 px-2 align-top">通常は24時間365日。<strong>2026年11月末まで受付を休止しています</strong>（運営団体の告知による）</td>
              <td className="py-2 px-2 align-top whitespace-nowrap">無料</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">よりそいホットライン</td>
              <td className="py-2 px-2 align-top"><span className="whitespace-nowrap">0120-279-338</span></td>
              <td className="py-2 px-2 align-top">24時間</td>
              <td className="py-2 px-2 align-top whitespace-nowrap">無料</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">いのちの電話</td>
              <td className="py-2 px-2 align-top"><span className="whitespace-nowrap">0120-783-556</span>（フリーダイヤル）</td>
              <td className="py-2 px-2 align-top">毎日16時〜21時、毎月10日は8時〜翌日8時</td>
              <td className="py-2 px-2 align-top whitespace-nowrap">無料</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">いのちの電話</td>
              <td className="py-2 px-2 align-top"><span className="whitespace-nowrap">0570-783-556</span>（ナビダイヤル）</td>
              <td className="py-2 px-2 align-top">10時〜22時</td>
              <td className="py-2 px-2 align-top whitespace-nowrap">かかる</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0efed" }}>
              <td className="py-2 px-2 align-top font-medium">こころの健康相談統一ダイヤル</td>
              <td className="py-2 px-2 align-top"><span className="whitespace-nowrap">0570-064-556</span>（ナビダイヤル）</td>
              <td className="py-2 px-2 align-top">都道府県によって異なる</td>
              <td className="py-2 px-2 align-top whitespace-nowrap">かかる</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>命の危険が差し迫っているときは、119番に電話してください。通院中の方は、主治医の医療機関にも連絡してください。</p>
      <p>支援職は、人の相談には乗れても、自分が相談することには抵抗を感じやすい仕事です。AIに話しているのは、人に話せない事情があるからかもしれません。その事情については「<Link to="/articles/why-support-workers-cannot-ask-for-help">支援職がなぜ相談できないのか</Link>」を、「そこまでではない」と感じているときは「<Link to="/articles/not-enough-for-counseling">カウンセリングを受けるほどではないと思っている方へ</Link>」を読んでみてください。</p>
      <h2>いしずえの「AI構造整理アシスタント」について</h2>
      <p>このサイトには、「<Link to="/ai-assistant">AI構造整理アシスタント</Link>」というページがあります。この記事で紹介してきた生成AIとの自由な対話とは異なり、選択式の項目を使って、自分の状態を振り返るためのツールです。</p>
      <ul className="list-disc">
        <li>文章で自由に話しかけるものではありません。選んだ項目をもとに、決まった形で今の状態を整理するものです。状況を書き込める任意の欄もありますが、書いた文章にAIが返事をすることはありません。</li>
        <li>書いた文章や選んだ項目を、外部のAIサービスに送ることはありません。また、書いた文章そのものは、サイト側で保存しません。</li>
        <li>診断ではなく、自分の状態を振り返るための目安です。悩みを話して答えをもらうためのものではありません。</li>
      </ul>
      <h2>よくある質問</h2>
      <div className="space-y-4">
        <div className="card">
          <p className="font-medium text-stone-900 mb-2 text-sm">Q. AIに悩みを相談するのは悪いことですか？</p>
          <p className="text-stone-600 text-sm leading-[1.85]">A. 悪いことではありません。言葉にして気持ちを整理したり、人には言いにくいことを外に出したりする助けになることがあります。大切なのは、使ったあとに自分の考えが整理されているか、それとも答えを委ねているだけになっていないか、を時々振り返ることです。</p>
        </div>
        <div className="card">
          <p className="font-medium text-stone-900 mb-2 text-sm">Q. AIに相談すると気持ちが楽になるのはなぜですか？</p>
          <p className="text-stone-600 text-sm leading-[1.85]">A. 考えられる理由は、主に3つです。言葉にすることで気持ちを扱いやすくなること。書いた文を読み返して、少し距離をとれること。人にどう思われるかを気にせずに話せること。ただし、これらの研究はAIとの会話そのものを調べたものではなく、誰でも必ず楽になるわけでもありません。</p>
        </div>
        <div className="card">
          <p className="font-medium text-stone-900 mb-2 text-sm">Q. AIがいつも肯定してくるのはなぜですか？</p>
          <p className="text-stone-600 text-sm leading-[1.85]">A. AIには、相談した人の考えに合わせて肯定しやすい傾向（迎合）があることが、研究で示されています。また、AIはあなたが書いた文章をもとに答えるので、自分の側から見た説明には、その側に立った返事が返ってきやすくなります。反対の見方がほしいときは、こちらから頼むと出てきやすくなります。</p>
        </div>
        <div className="card">
          <p className="font-medium text-stone-900 mb-2 text-sm">Q. AIに依存しているかどうか、どう判断できますか？</p>
          <p className="text-stone-600 text-sm leading-[1.85] mb-2">A. 使った回数や時間だけでは判断できません。目安になるのは、「使ったあとに生活が楽になっているか」です。たとえば、次のようなときは、使い方を見直すきっかけになります。</p>
          <ul className="list-disc text-stone-600 text-sm leading-[1.85] mb-2">
            <li>使えないと強い不安になる</li>
            <li>人に話すことが前より減った</li>
            <li>眠る時間が削られている</li>
            <li>AIの答えなしでは決められなくなった</li>
          </ul>
          <p className="text-stone-600 text-sm leading-[1.85]">京都大学の学生相談部門のページにも、振り返りのための項目が載っています。気になるときは、一人で判断せず、人にも相談してください。</p>
        </div>
        <div className="card">
          <p className="font-medium text-stone-900 mb-2 text-sm">Q. AIとカウンセリングは何が違いますか？</p>
          <p className="text-stone-600 text-sm leading-[1.85]">A. AIは、あなたが書いた文章の範囲で、その場で答えます。カウンセラーは、言葉にならない様子や、これまでのいきさつも含めて話を聞きます。そして、必要なときには、あなたの考えにそのまま同意せず、一緒に立ち止まって考えます。危ない状態のときには、医療や他の支援につなぐこともします。また、守秘義務のもとで話を聞きます。ただし、あなたや誰かの命や安全に関わるときなどは、法律や専門的な判断にもとづいて、必要な範囲で情報を共有することがあります。どちらが優れているというより、役割が違うものです。</p>
        </div>
      </div>

      <ArticleFooterLinks type="self-function" exclude={[SLUG]} />

      <div className="text-xs text-stone-400 mt-8 leading-relaxed break-words">
        <p className="text-xs text-stone-400 mb-3">※この記事は、2026年11月時点で確認できた研究と公的情報をもとにしています。AIと心の健康についての研究は、まだ始まったばかりです。本記事は心理的な理解を深めるための情報提供を目的としており、医療行為・診断に代わるものではありません。</p>
        <p className="text-xs font-medium text-stone-500 mb-1">参考文献</p>
        <ul className="text-xs text-stone-400 space-y-1">
          <li>Cheng, M., Lee, C., Khadpe, P., Yu, S., Han, D., &amp; Jurafsky, D. (2026). Sycophantic AI decreases prosocial intentions and promotes dependence. <em>Science</em>, 391(6792), eaec8352. <a href="https://doi.org/10.1126/science.aec8352" target="_blank" rel="noopener noreferrer">https://doi.org/10.1126/science.aec8352</a></li>
          <li>Golden, A., &amp; Aboujaoude, E. (2026). A transdiagnostic model for how general purpose AI chatbots can perpetuate OCD and anxiety disorders. <em>npj Digital Medicine</em>, 9, 343. <a href="https://doi.org/10.1038/s41746-026-02531-7" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41746-026-02531-7</a></li>
          <li>Gratch, J., Lucas, G. M., King, A., &amp; Morency, L.-P. (2014). It's only a computer: The impact of human-agent interaction in clinical interviews. <em>Proceedings of AAMAS 2014</em>.</li>
          <li>Kross, E., &amp; Ayduk, O. (2011). Making meaning out of negative experiences by self-distancing. <em>Current Directions in Psychological Science</em>, 20(3), 187–191. <a href="https://doi.org/10.1177/0963721411408883" target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/0963721411408883</a></li>
          <li>Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., &amp; Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. <em>Psychological Science</em>, 18(5), 421–428. <a href="https://doi.org/10.1111/j.1467-9280.2007.01916.x" target="_blank" rel="noopener noreferrer">https://doi.org/10.1111/j.1467-9280.2007.01916.x</a></li>
          <li>Pennebaker, J. W., &amp; Beall, S. K. (1986). Confronting a traumatic event: Toward an understanding of inhibition and disease. <em>Journal of Abnormal Psychology</em>, 95(3), 274–281. <a href="https://doi.org/10.1037/0021-843X.95.3.274" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0021-843X.95.3.274</a></li>
          <li>Salkovskis, P. M., &amp; Kobori, O. (2015). Reassuringly calm? Self-reported patterns of responses to reassurance seeking in obsessive compulsive disorder. <em>Journal of Behavior Therapy and Experimental Psychiatry</em>, 49, 203–208. <a href="https://doi.org/10.1016/j.jbtep.2015.09.002" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.jbtep.2015.09.002</a></li>
          <li>Weizenbaum, J. (1966). ELIZA—A computer program for the study of natural language communication between man and machine. <em>Communications of the ACM</em>, 9(1), 36–45. <a href="https://doi.org/10.1145/365153.365168" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/365153.365168</a></li>
          <li>American Psychological Association. (2025, November). <em>Health advisory: Use of generative AI chatbots and wellness applications for mental health</em>.</li>
          <li>京都大学 学生総合支援機構 学生相談部門「AIに悩みを相談する際に気をつけて欲しいこと」（2026年11月21日閲覧）</li>
          <li>厚生労働省「まもろうよ こころ」電話相談 <a href="https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/" target="_blank" rel="noopener noreferrer">https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/</a>（2026年11月21日閲覧）</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}

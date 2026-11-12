import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "「しんどい」としか言えないのは、感情が分からないということですか？",
    a: "必ずしもそうではありません。「何かつらい」という感覚はあるのに、それが悔しさなのか、不安なのか、申し訳なさなのかを分けにくい状態は、感情が「ない」のとは別です。感覚そのものが薄く、何も感じにくい場合は、別の記事（感情がわからない人の特徴、何も感じない原因）が参考になります。",
  },
  {
    q: "感情を細かく言い分けられるようになると、本当に楽になりますか？",
    a: "楽になる人もいますが、保証はできません。研究では、感情を細かく区別できる人ほど、感情への対処がうまい傾向が報告されています（Barrett et al., 2001）。ただし、これは関連を示すもので、細かく言い分ける練習をすれば必ず変わる、ということではありません。",
  },
  {
    q: "感情の言葉をたくさん知らないと、できないのでしょうか？",
    a: "語彙の多さだけの問題ではありません。研究で扱われているのは、「同じ『嫌な気分』の中にも違いがある」と区別できることです。知っている言葉が少なくても、「これは焦りに近い」「こちらは寂しさに近い」と違いに気づくところから始められます。",
  },
  {
    q: "言葉を探そうとすると、かえってつらくなります。",
    a: "無理に続けないでください。過去の出来事が鮮明によみがえる、体が強く反応する、といったときは、一人で言葉にしようとするより、安心できる場や人と一緒に進めるほうが安全です。強い苦しさが続くときは、医療機関や専門家に相談してください。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function EmotionalGranularity() {
  return (
    <ArticleLayout
      title="「しんどい」としか言えないのはなぜ？｜感情を言い分ける力（感情粒度）と、支援職が整理する方法"
      description="気持ちを聞かれても「しんどい」「疲れた」しか出てこない。感情を細かく区別する力を、心理学では感情粒度（感情の区別）と呼びます。感情が「ない」のとの違い、研究で分かっていること、支援職が自分の気持ちを言い分けるための小さな練習を整理します。"
      url="https://www.ishizue-counseling.jp/articles/emotional-granularity"
      date="2026-11-12"
      tags={["self-function", "emotional_labor"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「どうしたの？」と聞かれて、出てくるのは「しんどい」の一言だけ。
      </p>

      <p>
        つらいのは確かなのに、それが何なのか分からない。
        悔しいのか、怖いのか、申し訳ないのか、寂しいのか。
        全部が「しんどい」「疲れた」にまとまってしまい、人に説明しようとしても、自分でも整理がつかない。
      </p>
      <p>
        この状態は、感情が<strong>ない</strong>のでも、気持ちが<strong>全く分からない</strong>のでもなく、
        感情の<strong>区別がつきにくい</strong>状態と考えられます。
        この記事では、感情を言い分ける力についての研究を整理し、支援職が自分の気持ちを整理するための小さな練習を紹介します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・気持ちを聞かれると、「しんどい」「疲れた」「イヤ」くらいしか出てこない</li>
          <li>・利用者の気持ちは言葉にできるのに、自分の気持ちは言葉にできない</li>
          <li>・イライラなのか不安なのか、自分でも区別がつかない</li>
          <li>・「大丈夫です」と答えてから、本当は違ったと気づく</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed mt-2">
          ※診断のためのチェックではありません。
        </p>
      </div>

      <h2>感情粒度とは、「嫌な気分」をどのくらい細かく分けられるか</h2>
      <p>
        心理学者のBarrettらは、同じ「嫌な気分」の中にある違い——
        怒り、不安、悲しみ、罪悪感、恥ずかしさなど——をどのくらい細かく区別して体験し、言葉にできるかには、
        人によって差があることを示しました（Barrett, 2004）。
        この区別の細かさは、感情の<strong>粒度（granularity）</strong>や、感情の<strong>区別（differentiation）</strong>と呼ばれます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">粒度が粗い状態（例）</p>
          <p className="text-stone-600 leading-[1.9]">
            「嫌な感じ」「しんどい」「もやもやする」のように、いろいろな気持ちが一つにまとまっている。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">粒度が細かい状態（例）</p>
          <p className="text-stone-600 leading-[1.9]">
            「あの言い方は悔しかった」「次の対応が不安だ」「迷惑をかけて申し訳ない」のように、
            似た嫌な気分の中でも、違いが分かれている。
          </p>
        </div>
      </div>

      <h2>研究で分かっていること</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">区別できる人は、感情への対処がうまい傾向</p>
          <p className="text-stone-600 leading-[1.9]">
            Barrettら（2001）の研究では、嫌な感情を細かく区別できる人ほど、
            嫌な感情が起きたときに、気持ちを調整するための方法を使ったと答える傾向がありました（自己報告にもとづく調査です）。
            感情の中身が分かれているほうが、「何に対して、何をすればいいか」を考えやすくなるためと考えられています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">言葉にすることで、強い反応が落ち着く可能性</p>
          <p className="text-stone-600 leading-[1.9]">
            感情に名前をつけること（情動のラベリング）には、強い感情の反応を落ち着かせる効果が報告されています
            （Lieberman et al., 2007／Torre &amp; Lieberman, 2018）。
            Kashdanら（2015）は、嫌な気分の中の違いに気づくことが、その体験の受け取り方を変えうると整理しています。
          </p>
        </div>
      </div>
      <p className="text-sm text-stone-500 leading-relaxed">
        ※これらは主に実験や調査での研究で、関連を示すものが中心です。
        支援職に限った研究ではなく、効果の大きさには個人差があります。
        「言い分けられるようになれば必ず楽になる」とは言えません。
      </p>

      <h2>「気持ちが分からない」とは、何が違うのか</h2>
      <p>
        感情の扱いの難しさは、段階が違います。
      </p>
      <div className="card space-y-2 text-sm text-stone-600 leading-[1.9]">
        <p><strong>感覚はあるが、言い分けにくい</strong>：この記事の対象です。「しんどい」はあるが、中身が分かれない。</p>
        <p><strong>感覚そのものが分かりにくい</strong>：<Link to="/articles/emotion-unknown" className={LINK}>自分の感情がわからない</Link>の記事が参考になります。</p>
        <p><strong>何も感じにくい</strong>：<Link to="/articles/feeling-nothing" className={LINK}>何も感じない・感情が動かない</Link>や、
          <Link to="/articles/helper-emotional-numbness" className={LINK}>支援職の感情麻痺</Link>の記事が参考になります。</p>
      </div>
      <p>
        どの段階にあるかによって、入り口が変わります。
        この記事の方法は、「何か感じてはいるが、まとまっている」ときに試しやすいものです。
      </p>

      <h2>支援職が「しんどい」にまとまりやすい理由</h2>
      <p>
        支援職は、利用者や家族の気持ちを細かく読み取ることを、仕事として求められます。
        一方で、自分の気持ちを言葉にする場面は、仕事の中にほとんど用意されていません。
        <Link to="/articles/emotion-suppression-vs-processing" className={LINK}>感情を抑えて対応する</Link>ことが続くと、
        「あとで整理する」機会が減り、気持ちが一つにまとまりやすくなります。
        <Link to="/articles/emotional-labor-what-pillar" className={LINK}>感情労働</Link>の場面でも、自分の気持ちを扱う時間は取りにくくなります。
      </p>

      <h2>感情を言い分けるための、4つの小さな練習</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「しんどい」を、場面ごとに分ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今日、しんどかった場面」を一つ選び、その場面だけに絞って考えます。
          一日全体を「しんどい」とまとめるより、場面ごとに分けると、違いが見えやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 体の感覚から入る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          胸が重い、胃が縮む、肩に力が入る、喉がつかえる。
          体のどこに、どんな感覚があるかを先に確認します。
          感覚から入ると、感情の言葉が見つかりやすくなります。
          <Link to="/articles/body-sensation-unknown" className={LINK}>体の感覚が分からない</Link>ときの見方も参考になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 候補の言葉を並べて、近いものを選ぶ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          次のような言葉を並べ、「いちばん近い」ものを選びます。ぴったりでなくて構いません。
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          悔しい／情けない／申し訳ない／恥ずかしい／怖い／不安／焦り／心細い／寂しい／虚しい／苛立ち／うんざり／がっかり／気まずい／落ち着かない
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          複数選んでも構いません。「悔しさと申し訳なさが混ざっている」のように、混ざっていること自体が整理の成果です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「何を大事にしているから、その気持ちが出たか」を添える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「悔しい。ちゃんと伝えたかったから」「不安。同じ失敗をしたくないから」のように、理由を一言添えます。
          感情は、大事にしているものが揺れたときのサインです。
          ここまで書けると、次にどうするかを選びやすくなります。
          複数の気持ちが対立しているときは、
          <Link to="/articles/ambivalence-want-to-rest" className={LINK}>相反する気持ちの整理</Link>も参考になります。
        </p>
      </div>

      <p>
        言葉にしても気持ちが変わらないときは、
        <Link to="/articles/thinking-feeling-gap" className={LINK}>考え方を変えても気持ちが変わらない理由</Link>の記事で、体・感情・行動の入り口を整理しています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどさが強いときは、無理に試さない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情を言葉にしようとして、強い苦しさや、過去の出来事の記憶がよみがえるときは、そこでやめてください。
          「消えてしまいたい」「死にたい」という気持ちが出ているときは、話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/emotion-unknown" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 自分の感情が分からない</a>
          <a href="/articles/recovering-feeling" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情・感覚を取り戻す方法</a>
          <a href="/articles/emotion-suppression-vs-processing" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情を抑えることと、整理することの違い</a>
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
          「しんどい」の中身を、外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どの場面で、体のどこに、どんな気持ちが出ているのか。
          診断ではなく、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/emotional-granularity"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Barrett, L. F. (2004). Feelings or words? Understanding the content in self-report ratings of experienced emotion. Journal of Personality and Social Psychology, 87(2), 266–281.／
        Barrett, L. F., Gross, J., Christensen, T. C., &amp; Benvenuto, M. (2001). Knowing what you're feeling and knowing what to do about it: Mapping the relation between emotion differentiation and emotion regulation. Cognition &amp; Emotion, 15(6), 713–724.／
        Kashdan, T. B., Barrett, L. F., &amp; McKnight, P. E. (2015). Unpacking emotion differentiation: Transforming unpleasant experience by perceiving distinctions in negativity. Current Directions in Psychological Science, 24(1), 10–16.／
        Lieberman, M. D. et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.／
        Torre, J. B., &amp; Lieberman, M. D. (2018). Putting feelings into words: Affect labeling as implicit emotion regulation. Emotion Review, 10(2), 116–124.
        ※これらは主に実験や調査での研究で、関連を示すものが中心です。支援職に限った研究ではありません。
        本記事は研究を支援職向けに整理したもので、医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の研究をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

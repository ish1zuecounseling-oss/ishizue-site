import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "考え方を変えようとしても変わらないのは、努力が足りないからですか？",
    a: "いいえ。頭で理解することと、気持ちや体の反応が変わることは、別の働きです。強い感情のさなかほど、考え方を切り替える方法は選ばれにくくなることが実験で示されています（Sheppes et al., 2014）。疲れているときも使いにくくなると考えられます。変わらないことを、意志の弱さと結びつける必要はありません。",
  },
  {
    q: "認知を変える方法（認知再構成など）は、効果がないのですか？",
    a: "そうではありません。考え方を見直す方法は、多くの研究で効果が確かめられています。この記事で扱うのは、「うまくいかないとき、なぜ起こるのか」と「ほかに入り口はあるか」です。どの方法が合うかは、人や状態によって違います。",
  },
  {
    q: "頭では分かっているのに動けないとき、どうすればいいですか？",
    a: "考え方を先に変えようとせず、まず体の状態（睡眠・休息）を整え、感情に名前をつけ、ごく小さな行動から試す、という順番が現実的です。強い気分の落ち込みや意欲の低下が続く場合は、うつ状態などの可能性もあるため、医療機関に相談してください。",
  },
  {
    q: "感情に振り回されるのは、性格ですか？",
    a: "性格だけでは説明できません。感情の強さには、気質、疲労、睡眠、環境の緊張、いま抱えている負荷などが関わります。この記事の内容だけで、特定の傾向や診断を判断することはできません。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkingFeelingGap() {
  return (
    <ArticleLayout
      title="考え方を変えても気持ちが変わらないのはなぜ？｜頭で分かっているのに動けない理由"
      description="「大丈夫だと分かっているのに不安が消えない」「考え方を変えようとしても気持ちがついてこない」。頭の理解と気持ち・体の反応がずれる仕組みを、研究をもとに整理し、支援職が感情・体・行動のどこから手をつけるかを解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinking-feeling-gap"
      date="2026-11-12"
      tags={["self-function", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「考えすぎだ」と分かっている。それでも、気持ちが追いつかない。
      </p>

      <p>
        「あれは自分のせいではない」「ミスは誰にでもある」と、頭では分かっている。
        ところが、胸のざわつきは消えず、翌朝になると足が動かない。
        そのたびに「分かっているのに変われない自分」を責めてしまう。
      </p>
      <p>
        この記事では、<strong>頭の理解と、気持ち・体・行動がずれる仕組み</strong>を、研究をもとに整理します。
        考え方を見直す方法を否定するものではありません。
        うまくいかないときに、<strong>ほかの入り口があること</strong>を知っておくための記事です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・正論は分かっているのに、気持ちが変わらない</li>
          <li>・「前向きに考えよう」とするほど、しんどくなる</li>
          <li>・やるべきことは分かっているのに、体が動かない</li>
          <li>・考え方の癖を直そうとして、うまくできない自分を責めている</li>
        </ul>
      </div>

      <h2>「分かっている」と「実感している」は、別のもの</h2>
      <p>
        Teasdale（1993）は、心が受け取る意味を二つの種類に分けて整理しました。
        一つは、言葉や論理で理解する意味（「根拠がないから大丈夫」）。
        もう一つは、<strong>感覚や感情を伴って実感する意味</strong>（「それでも怖い」）です。
        認知療法が効果を発揮するには、論理的な理解だけでなく、
        実感を伴う意味の側が変わることが重要だとされています。
        つまり、「分かる」ことが「感じる」ことにつながるとは限りません。
      </p>

      <h2>感情が強いときほど、考え方の切り替えは使いにくい</h2>
      <p>
        感情への対処法には、考え方を捉え直す方法（再評価）のほか、
        注意をそらす方法などがあります。
        Sheppesら（2014）の実験では、感情の強さが高いときほど、人は再評価ではなく注意をそらす方法を選びやすいことが示されました。
        強い感情の中では、考え直す方法に必要な注意や余裕が足りなくなるためと考えられています。
      </p>
      <p>
        <Link to="/articles/emotion-suppression-vs-processing" className={LINK}>感情を抑えること・整理すること</Link>の記事でも触れたように、
        感情に名前をつけることには、強い反応を落ち着かせる効果が報告されています（Lieberman et al., 2007）。
        考え方を変える前に、<strong>まず感情を言葉にする</strong>ほうが、入りやすいことがあります。
      </p>

      <h2>疲れているときも、使いにくくなると考えられる</h2>
      <p>
        考え方の見直しには、注意と、ある程度の余力が必要です。
        <Link to="/articles/helper-brain-fatigue" className={LINK}>脳の疲れ</Link>や睡眠不足、
        <Link to="/articles/burnout-early-signs" className={LINK}>バーンアウトの初期</Link>のようなときは、
        考えを整える力そのものが落ちやすくなります。
        そのときに「考え方を変えなければ」と努力しても、成果が出にくいのは自然なことです。
      </p>

      <h2>考え方の前に、行動から入るという選択肢</h2>
      <p>
        うつ病の人を対象にした比較試験（Dimidjian et al., 2006）では、
        考え方を扱う認知療法と、行動を増やす行動活性化が、同程度に効果を示したと報告されています。
        つまり、<strong>考え方を変えなくても、行動から変わっていく道がある</strong>という見方です。
        ただし、この研究はうつ病の診断を受けた人が対象で、すべての人にそのまま当てはまるわけではありません。
      </p>

      <h2>どこから手をつけるか：3つの入り口</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 体の入り口：睡眠・休息・緊張</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          眠れていない、緊張が抜けないときは、考え方より先に体を整えます。
          <Link to="/articles/body-stays-tense" className={LINK}>体の緊張が抜けない</Link>ときの見方も参考になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情の入り口：言葉にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「悔しい」「怖い」「申し訳ない」と短く言葉にします。
          感情が分かりにくいときは、<Link to="/articles/emotion-unknown" className={LINK}>感情が分からない</Link>の記事が入り口になります。
          考え方を変えることは、そのあとで構いません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 行動の入り口：ごく小さく動く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「気持ちが整ってから動く」のではなく、「小さく動いてから気持ちを見る」順番を試します。
          ごく小さな行動（窓を開ける、5分だけ机に向かう）で十分です。
          動けない背景に避けたい気持ちがあるときは、
          <Link to="/articles/avoidance-maintains-anxiety" className={LINK}>避けることが不安を続けさせる仕組み</Link>も参考になります。
        </p>
      </div>

      <p>
        考え方の見直しが役に立つ場面ももちろんあります。
        <Link to="/articles/helper-thinking-patterns" className={LINK}>支援職の思考パターン</Link>や、
        <Link to="/articles/helper-thinking-check" className={LINK}>考え方のクセチェック</Link>は、体や感情が落ち着いてからのほうが使いやすくなります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどさが強いときは、無理に試さない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気分の落ち込みが2週間以上続く、何をしても楽しめない、眠れない、食欲が落ちた、といった状態があるときは、
          うつ状態などの可能性もあるため、医療機関に相談してください。
          「消えてしまいたい」「死にたい」という気持ちが出ているときは、話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/emotion-suppression-vs-processing" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情を抑えることと、整理することの違い</a>
          <a href="/articles/helper-thinking-patterns" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 支援職が「抜け出せない」のはなぜ？</a>
          <a href="/articles/avoidance-maintains-anxiety" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 避けるほど苦手になるのはなぜ？</a>
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
          分かっているのに動けないとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          体・感情・行動のどこで止まっているのか。
          考え方を変えることを急がず、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/thinking-feeling-gap"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Teasdale, J. D. (1993). Emotion and two kinds of meaning: Cognitive therapy and applied cognitive science. Behaviour Research and Therapy, 31(4), 339–354.／
        Sheppes, G., Scheibe, S., Suri, G., Radu, P., Blechert, J., &amp; Gross, J. J. (2014). Emotion regulation choice: A conceptual framework and supporting evidence. Journal of Experimental Psychology: General, 143(1), 163–181.／
        Lieberman, M. D. et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.／
        Dimidjian, S. et al. (2006). Randomized trial of behavioral activation, cognitive therapy, and antidepressant medication in the acute treatment of adults with major depression. Journal of Consulting and Clinical Psychology, 74(4), 658–670.
        ※多くは実験室や臨床試験での研究で、支援職に限ったものではありません。
        本記事は研究を支援職向けに整理したもので、医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の研究をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

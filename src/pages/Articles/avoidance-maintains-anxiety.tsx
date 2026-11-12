import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "嫌なことを避けるのは、いけないことですか？",
    a: "いいえ。避けることが必要な場面は多くあります。ハラスメントのある環境、安全が脅かされる状況、心身が限界のときの休息などは、避けることが自分を守る行動です。問題になりやすいのは、本当は対処できるかもしれないことまで避け続けて、「やっぱり無理だった」という確認の機会がなくなり、避ける範囲が広がっていく場合です。",
  },
  {
    q: "先延ばしは、怠けているからではないのですか？",
    a: "怠けとは限りません。先延ばしの研究では、課題そのものより、課題が呼び起こす不快な気分を避けようとする短期的な気分調整として説明されることがあります（Sirois & Pychyl, 2013）。ただし、先延ばしの理由は人によって違い、疲労や抑うつ、注意の問題など別の要因が関わることもあります。",
  },
  {
    q: "回避をやめるには、嫌なことに思い切って飛び込むべきですか？",
    a: "いいえ。いきなり大きな課題に向かうと、かえって怖さが強まることがあります。心理療法で使われる段階的な取り組みでも、小さなものから、安全を確保しながら進めるのが基本です。強い不安やトラウマの記憶が関わるときは、一人で試さず、専門家と進めてください。",
  },
  {
    q: "この記事の内容で、不安症かどうか分かりますか？",
    a: "分かりません。回避は、不安症に限らず、誰にでも起こる反応です。日常生活や仕事に大きな支障が出ている、強い不安や動悸が続いている場合は、医療機関に相談してください。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function AvoidanceMaintainsAnxiety() {
  return (
    <ArticleLayout
      title="避けるほど苦手になるのはなぜ？｜回避が不安を続けさせる仕組みと、支援職の場面"
      description="嫌なことや不安なことを避けると、その場では楽になるのに、あとで苦手意識が強まることがあります。回避が不安を維持する仕組みを、研究をもとに整理し、支援職の職場や相談の場面に当てはめて解説します。避けることが必要な場合との見分け方も扱います。"
      url="https://www.ishizue-counseling.jp/articles/avoidance-maintains-anxiety"
      date="2026-11-12"
      tags={["self-function", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        避けたら、ほっとした。なのに、次はもっと怖くなっている。
      </p>

      <p>
        苦手な上司との会話、返信しにくい連絡、気が重い書類、受けようか迷っている相談。
        後回しにすると、その場では確かに楽になります。
        ところが、時間が経つほど、<strong>それに向き合う気力がさらに減っていく</strong>ことがあります。
      </p>
      <p>
        この記事では、避けること（回避）が不安や苦手意識を続けさせる仕組みを、研究をもとに整理します。
        目的は、避けることをやめさせることではありません。
        <strong>避けることが自分を守っている場面と、苦しさを長引かせている場面を、見分けられるようにする</strong>ことです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・先延ばしにするほど、手をつけるのが怖くなる</li>
          <li>・苦手な人を避け続けて、その人の前ではますます緊張する</li>
          <li>・「また失敗するかも」と考えて、新しいことを引き受けられない</li>
          <li>・不安なので、あらかじめ準備や確認を重ねすぎて疲れる</li>
          <li>・避けているうちに、避ける場面が増えてきた</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed mt-2">
          ※診断のためのチェックではありません。
        </p>
      </div>

      <h2>避けると、なぜ一時的に楽になるのか</h2>
      <p>
        不安なことから離れると、不安は下がります。
        この「ほっとする感覚」は、<strong>避ける行動を強めるごほうび</strong>の役割をします。
        次に同じ場面が来たとき、体は「避けたほうが楽だった」と覚えているので、また避けやすくなります。
      </p>

      <h2>なぜ、あとで苦手意識が強まるのか</h2>
      <p>研究では、主に次の3つの仕組みが整理されています。</p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 「実は大丈夫だった」を確かめる機会がなくなる</p>
          <p className="text-stone-600 leading-[1.9]">
            恐れている場面に近づくと、「思ったほど悪くない」という新しい情報が手に入ります。
            FoaとKozak（1986）は、恐れの克服には、恐れている刺激に向き合い、
            予想とは違う情報を得ることが重要だと整理しました。
            避け続けると、この情報が入らず、「危ない」という予想が修正されないまま残ります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 「安全のための行動」が、不安を支え続ける</p>
          <p className="text-stone-600 leading-[1.9]">
            Salkovskis（1991）は、不安のある人が無意識に行う「安全行動」（過度な確認、念入りな準備、相手の反応の常時チェックなど）が、
            「これをしたから大丈夫だった」という解釈につながり、不安を維持することを指摘しました。
            うまくいっても、自分の力ではなく「安全行動のおかげ」になってしまうのです。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 不快な感情そのものを避けること（体験の回避）が広がる</p>
          <p className="text-stone-600 leading-[1.9]">
            Hayesら（1996）は、つらい考えや感情、身体感覚を避けようとし続ける傾向を「体験の回避」と呼び、
            さまざまな心理的な不調と関連することを整理しました。
            避ける対象が出来事から感情にまで広がると、生活の範囲が狭くなりやすくなります。
          </p>
        </div>
      </div>

      <p className="text-sm text-stone-500 leading-relaxed">
        ※これらの研究は主に、不安に関する臨床や実験の分野のものです。支援職に限った研究ではなく、
        日常の場面への当てはめは、あくまで整理のための見方です。
      </p>

      <h2>先延ばしも、同じ構造で説明されることがある</h2>
      <p>
        先延ばしは意志の弱さと見られがちですが、研究では、
        課題が引き起こす不快な気分から<strong>一時的に離れるための、短期的な気分の調整</strong>として説明されることがあります
        （Sirois &amp; Pychyl, 2013）。
        その場では楽になりますが、締め切りが近づくほど不安が増し、さらに手がつかなくなる、という悪循環になりやすい面があります。
      </p>

      <h2>「避けること」と「離れること」は違う</h2>
      <p>
        ここまで読んで、「では、つらい職場も我慢して向き合うべきなのか」と思われるかもしれません。
        そうではありません。次の区別が重要です。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">自分を守るために離れる</p>
          <p className="text-stone-600 leading-[1.9]">
            ハラスメント、安全が脅かされる環境、心身が限界のとき。
            離れることや休むことは、回避の問題ではなく、<strong>必要な対処</strong>です。
            <Link to="/articles/helper-organization-unsafe" className={LINK}>職場が安全でないと感じるとき</Link>や、
            <Link to="/articles/cannot-go-to-work-tears" className={LINK}>仕事に行きたくない・涙が出る</Link>ときは、向き合う練習より先に、守ることが優先です。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">対処できるかもしれないのに、避け続けている</p>
          <p className="text-stone-600 leading-[1.9]">
            会話、連絡、手続き、相談など、現実の危険は小さいのに、不安のために避けている。
            こちらは、避けるほど「確かめる機会」が減り、範囲が広がりやすい部分です。
          </p>
        </div>
      </div>

      <p>
        <strong>避けているものが、自分を守る「離れること」なのか、機会を奪う「回避」なのか</strong>は、一人では判断しにくいことがあります。
        どちらにも見えるときは、そのまま整理の対象にしてください。
      </p>

      <h2>支援職の場面で起こりやすい形</h2>
      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p>・失敗が怖くて、新しい役割や研修を引き受けられない</p>
        <p>・苦手な同僚や上司との話し合いを、先送りにし続ける</p>
        <p>・クレームの対応を思い出すのが怖く、記録や振り返りを避ける</p>
        <p>・不安なあまり、確認や準備を重ねすぎて、終わるころには疲れ切っている</p>
        <p>
          ・<Link to="/articles/helper-resistance-to-counseling" className={LINK}>相談したほうがいいと分かっているのに、先送りにする</Link>
        </p>
      </div>
      <p>
        <Link to="/articles/helper-cannot-say-no" className={LINK}>断れない</Link>ことと、
        <Link to="/articles/over-adaptation" className={LINK}>過剰適応</Link>の背景にも、
        「断ったら何かが起きる」という予想を確かめる機会がない、という構造が重なることがあります。
      </p>

      <h2>回避を弱めるための、小さな試し方</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 何を避けているかを書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「何を」「どんなとき」「避けると何が楽になるか」「避けると何が減ったか」を書きます。
          避けた結果、生活のどこが狭くなっているかが見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「怖れている予想」を言葉にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「声をかけたら、迷惑がられる」「失敗したら、全部が終わる」など、避けている予想を具体的に書きます。
          予想が具体的になるほど、あとで現実と比べやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ ごく小さな一歩で、予想を確かめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          最も軽いものから試します。「あいさつだけする」「メールの下書きだけ書く」など。
          Craskeら（2014）は、恐れの克服では、恐れていた予想とは違う結果を体験することが鍵になるとし、
          その体験を重ねる進め方を整理しています。結果が予想と違ったことを、実際に記録しておくと、次に生きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 安全行動を、少しずつ減らす</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          確認や準備を過剰に重ねている場合、「いつもの半分にしてみる」ところから試します。
          一度に全部やめる必要はありません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどさが強いときは、無理に試さない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          強い恐怖、過去の出来事の記憶、動悸や息苦しさが関わるときは、一人で向き合う練習をしないでください。
          医療機関や専門家と、安全を確保しながら進めるのが基本です。
          「消えてしまいたい」「死にたい」という気持ちが出ているときは、話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <p>
        <Link to="/articles/emotion-suppression-vs-processing" className={LINK}>感情を抑えることと整理することの違い</Link>や、
        <Link to="/articles/ambivalence-want-to-rest" className={LINK}>相反する気持ちの整理</Link>とあわせて読むと、
        避けている理由が見えやすくなります。
      </p>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/helper-contrast-avoidance" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 不安が止まらないときの対処法</a>
          <a href="/articles/helper-cannot-say-no" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 断れない人の特徴</a>
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
          避けていることを、外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何を避けていて、それが自分を守っているのか、苦しさを長引かせているのか。
          診断ではなく、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/avoidance-maintains-anxiety"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Foa, E. B., &amp; Kozak, M. J. (1986). Emotional processing of fear: Exposure to corrective information. Psychological Bulletin, 99(1), 20–35.／
        Salkovskis, P. M. (1991). The importance of behaviour in the maintenance of anxiety and panic: A cognitive account. Behavioural Psychotherapy, 19(1), 6–19.／
        Hayes, S. C., Wilson, K. G., Gifford, E. V., Follette, V. M., &amp; Strosahl, K. (1996). Experiential avoidance and behavioral disorders: A functional dimensional approach to diagnosis and treatment. Journal of Consulting and Clinical Psychology, 64(6), 1152–1168.／
        Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., &amp; Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10–23.／
        Sirois, F., &amp; Pychyl, T. (2013). Procrastination and the priority of short-term mood regulation: Consequences for future self. Social and Personality Psychology Compass, 7(2), 115–127.
        ※これらは主に不安に関する臨床・実験研究で、支援職に限った研究ではありません。
        本記事は研究を支援職向けに整理したもので、医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の研究をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

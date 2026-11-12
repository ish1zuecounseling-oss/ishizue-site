import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "仕事中に感情を抑えるのは、悪いことなのですか？",
    a: "悪いことではありません。利用者の前で感情を出しすぎないことは、支援の場で必要な調整でもあります。問題になりやすいのは、抑えたまま処理されず、あとにも残り続けることです。研究でも、感情を抑える方法そのものより、それが習慣として続くことや、抑えた後に何もしないことの影響が論じられています。",
  },
  {
    q: "感情を「整理する」とは、泣いたり話したりして外に出すことですか？",
    a: "外に出すことは整理の一つの方法ですが、すべてではありません。整理とは、いま自分に何が起きているのかを言葉にし、その気持ちが何を知らせているのかを理解して、次にどうするかを選べる状態にすることです。誰かに話す、書く、一人で振り返るなど、方法はいくつもあります。",
  },
  {
    q: "感情を言葉にするだけで、本当に楽になるのですか？",
    a: "感情を言葉にすること（情動のラベリング）には、強い感情の反応を落ち着かせる効果が脳画像の研究で報告されています（Lieberman et al., 2007）。ただし効果の大きさには個人差があり、これだけで十分とは限りません。強いしんどさが続くときは、専門家に相談してください。",
  },
  {
    q: "感情を抑えるのが癖になっています。どうすればいいですか？",
    a: "いきなり「感じよう」「出そう」とすると、かえって負担になることがあります。まずは「いま何か感じているかもしれない」と気づく、体の感覚を観察する、小さな感情から言葉にする、といった段階的な練習が現実的です。感覚が薄く何も感じにくいときは、別の記事（感情が分からない・何も感じない）も参考にしてください。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function EmotionSuppressionVsProcessing() {
  return (
    <ArticleLayout
      title="感情を抑えることと、整理することの違い｜支援職が気持ちを溜め込まないために"
      description="感情を「抑える」ことと「整理する」ことは、似ているようで別のものです。感情抑制と再評価に関する研究をもとに、抑えた感情がどうなるのか、整理とは何をすることなのかを、支援職向けに解説します。"
      url="https://www.ishizue-counseling.jp/articles/emotion-suppression-vs-processing"
      date="2026-11-12"
      tags={["emotional_labor", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        しんどくても顔には出さない。落ち着いて対応する。気持ちはあとで考える。
        そのうち、「あとで」が来なくなる。
      </p>

      <p>
        支援職は、自分の感情をいったん脇に置いて、相手に向き合うことを日常的に求められます。
        それは専門職として必要な技術でもあります。
        ただ、<strong>脇に置いた感情が、そのあとどうなっているか</strong>を見る機会は、意外と少ないかもしれません。
      </p>
      <p>
        この記事では、感情を「抑える」ことと「整理する」ことの違いを、研究をもとに整理します。
        目的は、感情を抑えるのをやめさせることではなく、
        <strong>必要なときに抑えつつ、そのあとで扱えるようにする</strong>ことです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・その場では平気な顔をしているが、帰宅後に急に疲れや苛立ちが出る</li>
          <li>・何がつらいのか聞かれても、うまく言葉にできない</li>
          <li>・同じ出来事をずっと頭の中で繰り返してしまう</li>
          <li>・「気にしないようにしよう」と思うほど、気になる</li>
        </ul>
      </div>

      <h2>「抑える」と「整理する」は、別のことをしている</h2>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">感情を抑える（抑制）</p>
          <p className="text-stone-600 leading-[1.9]">
            すでに起きている感情が表に出ないように、表情や言動をコントロールすること。
            感情そのものは残ったまま、見えないようにする方法です。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">感情を整理する（再評価・理解）</p>
          <p className="text-stone-600 leading-[1.9]">
            何が起きていて、どんな気持ちがあり、それが何を知らせているのかを理解し、
            状況の見方や次の行動を調整すること。
            感情の「中身」に触れる方法です。
          </p>
        </div>
      </div>

      <p>
        感情研究のGrossは、感情がどの段階で調整されるかによって、方法を大きく分けました（Gross, 1998）。
        感情が起きる前や起きた直後に状況の受け止め方を変える<strong>再評価</strong>と、
        感情が起きたあとにその表出を抑える<strong>抑制</strong>です。
        抑えるのは「出口を塞ぐ」こと、整理するのは「中身を扱う」ことと考えると、違いがつかみやすくなります。
      </p>

      <h2>抑え続けると、何が起きるのか</h2>
      <p>研究が示していることを、分かっていることと分かっていないことに分けて整理します。</p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">抑制を多く使う人の傾向</p>
          <p className="text-stone-600 leading-[1.9]">
            GrossとJohnの調査（2003）では、感情を抑える習慣が強い人ほど、
            ポジティブな感情を感じにくく、親しい人との関係で距離ができやすい傾向がありました。
            再評価を使う人は、その逆の傾向でした。
            ただし、これは調査上の「関連」であり、抑制が原因だと断定するものではありません。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">抑えている間の「コスト」</p>
          <p className="text-stone-600 leading-[1.9]">
            感情を表に出さないように抑えている間は、その場の情報を覚えにくくなることが
            実験で報告されています（Richards &amp; Gross, 2000）。
            抑えることには、注意や認知の資源を使うというコストがあります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">考えないようにするほど、考えてしまう</p>
          <p className="text-stone-600 leading-[1.9]">
            「白クマのことを考えないで」と指示された人が、かえって白クマのことを何度も思い浮かべる、
            という実験があります（Wegner et al., 1987）。
            考えや感情を意識的に押さえ込もうとすると、かえって繰り返し浮かぶことがあります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">全面的に悪いわけではない</p>
          <p className="text-stone-600 leading-[1.9]">
            感情調整の方法を多数の研究でまとめた分析（Aldao et al., 2010）では、
            抑制は不安や抑うつなどの不調と関連する傾向があると報告されています。ただし関連の強さは調整方法ごとに異なり、いずれも調査上の関連で、因果関係を示すものではありません。
            また、抑制の影響は文化によって異なる可能性も指摘されています（Butler et al., 2007）。
            つまり「抑えること＝悪」ではなく、「抑えるだけで終わる」ことが続くと負担になりやすい、という整理が実態に近いです。
          </p>
        </div>
      </div>

      <h2>支援職が「抑えるだけ」になりやすい理由</h2>
      <p>
        感情労働の観点では、職場で求められる感情（落ち着き、共感、笑顔）を出し続けることが、
        <Link to="/articles/emotional-labor-what-pillar" className={LINK}>感情労働</Link>と呼ばれます。
        その場面では抑制が必要になる一方で、<strong>処理する時間と場所が仕事の中に用意されていない</strong>ことが多いのが実情です。
        <Link to="/articles/acting-fatigue" className={LINK}>演技をして疲れる</Link>状態や、
        <Link to="/articles/feeling-nothing" className={LINK}>何も感じにくくなる</Link>状態に、つながることもあります。
      </p>

      <h2>感情を「整理する」ための4つのステップ</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いま、何かあるかもしれない」と気づきます。胸の重さ、肩の力、胃のあたりなど、体の感覚が手がかりになります。
          <Link to="/articles/emotion-unknown" className={LINK}>感情が分からない</Link>ときも、体の感覚から入る方法があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 言葉にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「悲しい」「悔しい」「怖い」「申し訳ない」など、短い言葉でかまいません。
          感情に名前をつけることで、強い感情の反応が落ち着く可能性が、脳画像の研究で報告されています（Lieberman et al., 2007）。
          ただし、効果には個人差があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 何を知らせているのかを考える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情は、大事にしているものが脅かされたときのサインでもあります。
          「この怒りは、何を守ろうとしているのか」「この悲しさは、何を大事にしているからか」と問います。
          答えがすぐに出なくても構いません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 次の一歩を選ぶ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手に伝える、環境を調整する、休む、ただ受け止めておく。
          整理は「解決」ではなく、「自分で選べる状態に戻ること」が目的です。
          選ぶ前に、<Link to="/articles/ambivalence-want-to-rest" className={LINK}>相反する気持ち</Link>があることに気づく場合もあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどい気持ちが強いとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情を整理しようとして、かえって苦しさが強まる、記憶が鮮明によみがえる、といったときは、
          無理に続けないでください。「消えてしまいたい」「死にたい」という気持ちが出ているときは、
          話を聞いてくれる窓口につながってください。
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
          <a href="/articles/acting-fatigue" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 仕事で演技して疲れるのはなぜ？</a>
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
          溜め込んだ気持ちを、外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何が起きていて、どんな気持ちがあり、何を知らせているのか。
          支援職の消耗の視点から、一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/emotion-suppression-vs-processing"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Gross, J. J. (1998). Antecedent- and response-focused emotion regulation: Divergent consequences for experience, expression, and physiology. Journal of Personality and Social Psychology, 74(1), 224–237.／
        Gross, J. J., &amp; John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85(2), 348–362.／
        Richards, J. M., &amp; Gross, J. J. (2000). Emotion regulation and memory: The cognitive costs of keeping one's cool. Journal of Personality and Social Psychology, 79(3), 410–424.／
        Wegner, D. M., Schneider, D. J., Carter, S. R., &amp; White, T. L. (1987). Paradoxical effects of thought suppression. Journal of Personality and Social Psychology, 53(1), 5–13.／
        Aldao, A., Nolen-Hoeksema, S., &amp; Schweizer, S. (2010). Emotion-regulation strategies across psychopathology: A meta-analytic review. Clinical Psychology Review, 30(2), 217–237.／
        Butler, E. A., Lee, T. L., &amp; Gross, J. J. (2007). Emotion regulation and culture: Are the social consequences of emotion suppression culture-specific? Emotion, 7(1), 30–48.／
        Lieberman, M. D. et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.
        ※これらの多くは調査や実験室での研究で、関連を示すものが中心です。研究の対象は主に一般成人や大学生で、支援職に限った研究ではありません。
        本記事は研究を支援職向けに整理したもので、医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の研究をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

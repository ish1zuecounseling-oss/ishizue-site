import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "学習性無力感の理論は、間違いだったということですか？",
    a: "現象そのものが否定されたわけではありません。「自分ではどうにもできない、つらい出来事が続いたあとに、受け身になって動かなくなる」という現象は、実験でも確かめられています。見直されたのは、その理由の説明です。「何をしても無駄だと学んだから動かない」のではなく、「受け身になるのが、強いストレスが長く続いたときの初期設定に近い反応で、コントロールできる経験がそれを抑える」という説明に改められました。",
  },
  {
    q: "人間でも、同じことが起きているのですか？",
    a: "まだ確かなことは言えません。脳の仕組みを詳しく調べた研究の大部分は、ラットなどの動物を使ったものです。人を対象にした脳の研究は、論文の著者自身が「まだ少ない」と述べています。この記事で紹介する内容は、動物研究から出てきた有力な仮説であり、人の無気力のすべてを説明するものではありません。",
  },
  {
    q: "無気力なのは、脳のセロトニンが足りないからですか？",
    a: "そのような単純な話ではありません。この論文で注目されているのは、セロトニンを出す神経が集まる「背側縫線核」という場所の活動が、ストレスのもとで強まることです。「セロトニンが不足している」という説明とは別の話で、無気力の原因を一つの物質に決めるものでもありません。",
  },
  {
    q: "「考え方を変える」働きかけは、意味がないということですか？",
    a: "そうではありません。この論文が示したのは、「自分には変えられる」という感覚が、考え方だけでなく、実際にコントロールできた経験を通じて育つ可能性です。認知の働きかけを否定するものではなく、考え方を変える試みと、小さくても「自分で変えられた」経験を重ねることは、組み合わせて考えるのが現実的です。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function LearnedHelplessnessRevisited() {
  return (
    <ArticleLayout
      title="学習性無力感は「学習」ではなかった？｜提唱者自身が見直した2016年の論文と、支援職への意味"
      description="「何をしても無駄だと学習するから、動けなくなる」と説明されてきた学習性無力感。2016年、提唱者のセリグマンとマイヤーは、神経科学の知見から、その説明を見直しました。論文の内容、動物研究という限界、支援職に関わる点を、公認心理師が整理します。"
      url="https://www.ishizue-counseling.jp/articles/learned-helplessness-revisited"
      date="2026-11-16"
      tags={["self-function", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「何をしても変わらない」と感じ続けると、人は動けなくなる。
      </p>

      <p>
        心理学では長いあいだ、こう説明されてきました。
        自分ではどうにもできない経験を重ねると、「何をしても無駄だ」と学習してしまい、逃げられる状況でも行動しなくなる。
        これが<strong>学習性無力感</strong>です。
      </p>
      <p>
        ところが2016年、この理論を提唱したマーティン・セリグマン自身が、共同研究者のスティーブン・マイヤーとともに、
        <strong>「元の理論は、説明が逆だった」</strong>と述べる論文を発表しました。
        この記事では、その論文が何を言っているのか、何がまだ分かっていないのか、そして支援職にとってどんな意味があるのかを整理します。
      </p>
      <p className="text-sm text-stone-500 leading-[1.9]">
        学習性無力感の基本や、支援職の場面への置き換えは、
        <Link to="/articles/thinker-seligman-helplessness" className={LINK}>セリグマンの学習性無力感の記事</Link>
        で解説しています。この記事は、2016年の見直しの中身を掘り下げます。
      </p>

      <h2>従来の説明と、2016年の見直し</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
        <div className="card">
          <p className="text-xs text-stone-500 mb-1">従来の説明（1967年〜）</p>
          <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
            <li>① 自分ではどうにもできない、つらい経験をする</li>
            <li>② 「自分の行動と結果は関係ない」と学習する</li>
            <li>③ そのため、逃げられる状況でも動かなくなる</li>
          </ul>
          <p className="text-xs text-stone-500 mt-2">学ばれるのは「無力」</p>
        </div>
        <div className="card">
          <p className="text-xs text-stone-500 mb-1">2016年の見直し</p>
          <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
            <li>① 強いストレスが長く続くと、受け身になる反応が起きる</li>
            <li>② この受け身は、学んだものではなく、初期設定に近い反応</li>
            <li>③ 「自分でコントロールできた」経験が、その反応を抑える</li>
          </ul>
          <p className="text-xs text-stone-500 mt-2">学ばれるのは「コントロール」</p>
        </div>
      </div>
      <p>
        論文の要旨には、「元の理論は逆だった」「ストレスのもとでの受け身は学習されたものではない」という趣旨の記述があります。
        つまり、<strong>無力感を学ぶのではなく、コントロールできることを学ぶ</strong>。この向きの転換が、見直しの中心です。
      </p>

      <h2>脳では、何が分かったのか</h2>
      <p>論文は、動物の脳を調べた長年の研究をもとに、次のような仕組みを描いています。</p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-2 leading-[1.9]">
          <li>
            <strong>背側縫線核（はいそくほうせんかく）</strong>：
            セロトニンを出す神経が集まる場所です。逃げられないストレスが続くと、ここの活動が強まり、受け身の反応を生みます。
            自分で止められるストレスでは、この活動は強まりません。
          </li>
          <li>
            <strong>前頭前野（内側の部分）</strong>：
            「自分で状況をコントロールできている」ことを検出する働きに関わります。
            コントロールできたと検出されると、背側縫線核の活動が抑えられます。
          </li>
          <li>
            <strong>くり返しの経験</strong>：
            コントロールできた経験を重ねると、この経路が変わり、あとで逃げられないストレスにあっても、受け身になりにくくなると考えられています。
          </li>
        </ul>
      </div>
      <p>
        ここで大切なのは、脳が検出しているのが「コントロールできないこと」ではなく、
        <strong>「コントロールできていること」</strong>だという点です。
        コントロールできない状況に置かれただけでは、受け身の反応は、脳にもともとある反応として出ます。
        そこに、「コントロールできた」という経験が加わることで、ブレーキがかかります。
      </p>

      <h2>この研究で、まだ言えていないこと</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">読むときの注意</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・脳の仕組みを詳しく調べた研究の大部分は、ラットなどの動物を使ったものです。</li>
          <li>・人を対象にした脳の研究は、著者自身が「まだ少ない」としています。動物から人への当てはめは、「検証できる仮説」の段階です。</li>
          <li>・うつ病の治療への含みも、著者は「推測」として述べています。</li>
          <li>・支援職の無気力や疲れを、この脳の話だけで説明することはできません。</li>
        </ul>
      </div>
      <p>
        つまり、この論文は「動物では、説明の向きが逆だったと分かってきた」という研究であり、
        「あなたの無気力の原因は脳のこの部分だ」と言えるものではありません。
        ここからは、その限界をふまえたうえでの、記事としての整理（解釈）になります。
      </p>

      <h2>支援職にとって、何を意味するのか</h2>
      <p>
        <strong>① 動けなくなるのは、「考え方が弱いから」ではないかもしれません</strong>
      </p>
      <p>
        「何をしても変わらない」状況が長く続いたとき、動けなくなるのは、気持ちの持ち方や性格の問題というより、
        人にもともとある反応の可能性があります。
        「やる気を出さなきゃ」と自分を責める前に、<strong>いま、自分でコントロールできている場面がどれだけあるか</strong>を見直す視点が持てます。
      </p>
      <p>
        <strong>② 「考え方を変えましょう」だけでは、足りない場合があります</strong>
      </p>
      <p>
        無気力になっている人に、「自分にもできると思いましょう」と声をかけても、動き出せないことがあります。
        この見直しが示唆するのは、考え方だけでなく、<strong>本人が実際にコントロールできる経験を、少しずつ取り戻せる環境</strong>の大切さです。
        これは、認知の働きかけを否定するものではありません。両方を組み合わせて考える、ということです。
      </p>
      <p>
        <strong>③ 支援する側にも、同じことが起きます</strong>
      </p>
      <p>
        利用者の状況が変わらない、提案が通らない、人手が足りない。
        支援職は、自分の行動で状況を変えられた感覚を持ちにくい場面が、構造的に多い仕事です。
        そのなかで動けなくなっても、あなたの意欲が足りないからとは限りません。
        <Link to="/articles/helper-helplessness" className={LINK}>支援職の無力感・やり残し感</Link>
        も、この視点から見直せます。
      </p>

      <h2>小さな「自分で変えられた」経験を取り戻す</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">条件は、小さいこと・自分で決められること</p>
        <ul className="text-sm text-stone-600 space-y-2 leading-[1.9]">
          <li>・今日の休憩を、自分の決めた時間に5分だけ取る</li>
          <li>・記録の書き方や机の配置など、手の届く範囲のことを一つだけ変えてみる</li>
          <li>・「今日はここまで」と、終わる時間を自分で決めて、その通りに終える</li>
          <li>・断れることを一つ決めて、一度だけ断ってみる</li>
        </ul>
        <p className="text-xs text-stone-500 leading-[1.9] mt-3">
          職場全体や、利用者の状況など、自分では動かせないものを変えようとしなくて大丈夫です。
          「自分で決めて、その通りになった」という経験を、小さく積むことが目的です。
          うまくいかなかった日があっても、それは失敗の証明ではありません。
        </p>
      </div>
      <p>
        利用者や身近な人に関わるときも、同じです。
        「こうしましょう」と先に決めてしまうより、小さくても<strong>本人が選べる場面</strong>を残すことが、
        コントロールの感覚を取り戻す手がかりになります。
      </p>

      <div className="my-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
        <p className="text-sm font-medium text-stone-700 mb-1">こんなときは、早めに相談を</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気分の落ち込み、眠れない、食欲の変化などが続いているとき、日常生活や仕事に支障が出ているときは、
          期間にかかわらず、医療機関に相談してください。
          「消えてしまいたい」という気持ちがあるときは、ひとりで抱えず、今日のうちに誰かに伝えてください。
          よりそいホットライン（0120-279-338・24時間）も利用できます。
          この記事は、診断や治療に代わるものではありません。
        </p>
      </div>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <Link to="/articles/thinker-seligman-helplessness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ セリグマンの学習性無力感と、支援職の「言っても変わらない」</Link>
          <Link to="/articles/helper-helplessness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 「何とかしてあげたいのにできない」支援職の無力感</Link>
          <Link to="/articles/helper-status-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ いまの状態を振り返るチェック</Link>
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
          「何をしても変わらない」が続いて、動けなくなっているとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何が自分で動かせて、何が動かせないのか。
          診断ではなく、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/learned-helplessness-revisited"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed break-all">
        参考文献：Maier, S. F., &amp; Seligman, M. E. P. (2016). Learned helplessness at fifty: Insights from neuroscience. Psychological Review, 123(4), 349–367. https://doi.org/10.1037/rev0000033／
        Seligman, M. E. P., &amp; Maier, S. F. (1967). Failure to escape traumatic shock. Journal of Experimental Psychology, 74(1), 1–9.
        <br />
        ※「うつ病の治療への含み」「人への当てはめ」は、論文の著者自身が仮説・推測として述べている部分です。支援への示唆の部分は、論文の主張ではなく、筆者による整理です。
        本記事は医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の文献をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

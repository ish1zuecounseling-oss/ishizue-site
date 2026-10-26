import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "学習性無力感とは何ですか?",
    a: "自分の行動では状況を変えられない経験を繰り返すうちに、状況を変えられる場面になっても行動しなくなる状態のことです。1960年代に、アメリカの心理学者マーティン・セリグマンらが動物実験をもとに提唱しました。のちに、人の抑うつを理解する手がかりとしても研究されてきました。",
  },
  {
    q: "学習性無力感は、その後の研究で修正されたのですか?",
    a: "はい。セリグマンと共同研究者のスティーブン・マイヤーは、2016年に発表した論文で、脳の研究の成果をふまえて考え方を見直しました。長く続くつらい状況で受け身になるのは、学習された結果というより、もともと備わった反応であり、むしろ学習されるのは「自分で状況をコントロールできる」という感覚のほうだ、というものです。",
  },
  {
    q: "職場で何を言っても変わらず、提案する気力がなくなりました。",
    a: "それは怠けや意欲の低さではなく、変わらない経験を重ねた結果として自然に起こる反応です。まずは職場全体ではなく、自分の手の届く小さな範囲で「自分で決めて、変えられた」経験を取り戻すことが助けになります。気分の落ち込みや眠れなさが2週間以上続く場合は、医療機関への相談も検討してください。",
  },
  {
    q: "無力感と、うつ病はどう違うのですか?",
    a: "無力感は、うつ病の症状の一つとして現れることもありますが、無力感があるからといってうつ病というわけではありません。気分の落ち込み、興味や喜びの喪失、睡眠や食欲の変化などが続き、日常生活に支障が出ている場合は、自己判断せずに医療機関に相談してください。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerSeligmanHelplessness() {
  return (
    <ArticleLayout
      title="「何を言っても変わらない」が人を動けなくする｜セリグマンの学習性無力感から読む、提案する気力をなくした支援職へ【公認心理師】"
      description="心理学者マーティン・セリグマンは、変えられない経験を繰り返すと、変えられる場面でも動けなくなる「学習性無力感」を示しました。職場に何を言っても変わらず、提案も工夫もしなくなった支援職に向けて、その仕組みと、「自分で変えられた」感覚の取り戻し方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-seligman-helplessness"
      date="2026-10-26"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ マーティン・セリグマン
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
        最初のころは、会議で何度も提案した。
        利用者さんのために、もっとこうしたほうがいいと思うことがあった。
        でも、何を言っても「前例がない」「人が足りない」で終わる。
        そのうち、提案しようとすら思わなくなった——。
      </p>
      <p>
        言っても変わらない経験が重なると、人はやがて動かなくなります。
        この現象を研究し、「学習性無力感」と名づけたのが、アメリカの心理学者
        <strong>マーティン・セリグマン</strong>です。
      </p>

      <h2>マーティン・セリグマンとはどんな人か</h2>
      <p>
        セリグマン(1942–)は、アメリカの心理学者で、ペンシルベニア大学の教授です。
        1960年代、大学院生のころに共同研究者とともに「学習性無力感」の研究を始め、
        のちにその知見を人の抑うつの理解へと広げていきました。
      </p>
      <p>
        1998年にアメリカ心理学会の会長に就任すると、人の弱さだけでなく強みや幸福を研究する
        「ポジティブ心理学」を提唱したことでも知られています。
      </p>

      <h2>学習性無力感とは何か</h2>
      <p>
        1967年、セリグマンらは犬を使った実験を行いました。
        自分では止められない電気ショックを繰り返し受けた犬は、
        その後、簡単に逃げられる状況に置かれても、逃げようとしなくなりました。
        一方、自分の行動でショックを止められる経験をした犬は、新しい状況でもすぐに逃げることができました。
      </p>
      <p>
        つまり、<strong>「何をしても変わらない」という経験そのものが、行動する力を奪う</strong>ということです。
        セリグマンはこれを「学習性無力感」と呼びました。
        (現在の基準では、このような動物実験は倫理的に大きな問題があるとされています)
      </p>

      <h2>50年後の見直し——学ばれるのは「無力」ではなく「コントロール」</h2>
      <p>
        この研究には、続きがあります。
        2016年、セリグマンと共同研究者のスティーブン・マイヤーは、脳の研究の成果をふまえて、自分たちの理論を見直す論文を発表しました。
      </p>
      <p>
        その結論は、意外なものでした。
        長く続くつらい状況で受け身になるのは、学習の結果ではなく、<strong>もともと脳に備わった反応</strong>だった。
        そして、学ばれるのはむしろ「自分の行動で状況をコントロールできる」という感覚のほうであり、
        その感覚が、受け身の反応にブレーキをかけていたのです。
      </p>
      <p>
        この見直しは、支援職にとって大切な意味を持ちます。
        動けなくなったのは、あなたが弱くなったからではありません。
        <strong>「自分で変えられた」という経験が、長いあいだ得られていない</strong>からなのです。
      </p>

      <h2>支援職に置き換えると——「言っても変わらない」の積み重ね</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 提案や工夫をしなくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何度提案しても通らない経験が続くと、新しい提案が通りそうな場面でも、手を挙げなくなります。
          周りからは「やる気がない」と見えても、本人の中で起きているのは、変えられない経験の積み重ねです。
          (<Link to="/articles/helper-career-stagnation" className={linkCls}>支援職が感じるキャリア閉塞感</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 支援の手応えが持てなくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          どれだけ関わっても、利用者さんの状況が制度や家庭の事情で変わらない。
          その経験が続くと、「自分が何をしても同じだ」という感覚が、支援そのものにも広がっていきます。
          (<Link to="/articles/helper-helplessness" className={linkCls}>支援職の無力感・やり残し感の正体</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「どうせ自分なんて」と考えるようになる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          セリグマンらは、のちに、うまくいかない出来事を「ずっと続く」「すべてに当てはまる」「自分のせいだ」と受け止める考え方のくせが、
          無力感を深めやすいことも示しました。職場の問題を、自分の能力の問題として受け止めてしまうのです。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">無力感の原因が、本当に「変えられない環境」のこともある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          学習性無力感を「考え方のくせ」の問題として読むと、本当に変えられない職場の問題まで、個人の受け止め方のせいにしてしまいます。
          声が届かない組織の仕組みそのものは、組織の側で見直されるべき問題です。
          (<Link to="/articles/helper-organization-unsafe" className={linkCls}>職場が危ないと感じるときの対処法</Link>も参考になります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">動物実験の結果を、そのまま人に当てはめることはできない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          元になった研究は動物実験で、人の無力感はもっと多くの要因が重なって生まれます。
          無力感が強く、気分の落ち込みや眠れなさが続く場合は、うつ病などが隠れていることもあるため、医療機関に相談してください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「自分で決めて、変えられた」小さな経験をつくる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場全体を変えようとせず、机の配置、記録の書き方、休憩の取り方など、自分の手の届く範囲で一つだけ変えてみます。
          小さくても、自分の行動で状況が変わった経験が、コントロールの感覚を取り戻す手がかりになります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「ずっと・全部・自分のせい」を点検する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          うまくいかなかった出来事を、「本当にずっと続くか」「本当に全部に当てはまるか」「本当に自分だけのせいか」と一つずつ問い直します。
          三つのうち一つでも緩めば、無力感は少し軽くなります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 職場の外に「手応え」のある場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          料理、運動、手仕事など、やればやった分だけ結果が見えることを生活に取り入れます。
          職場で得られない手応えを別の場所で補うことも、立派な対処法です。
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
          <li>・<Link to="/articles/helper-helplessness" className={linkCls}>支援職の無力感・やり残し感の正体</Link></li>
          <li>・<Link to="/articles/work-meaning-lost" className={linkCls}>「働く意味がわからない」状態が続くとき</Link></li>
          <li>・<Link to="/articles/helper-organization-unsafe" className={linkCls}>職場が危ないと感じるときの対処法</Link></li>
          <li>・<Link to="/articles/thinker-maslach-burnout" className={linkCls}>燃え尽きは、あなたの弱さではない(マスラックから読む)</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「どうせ変わらない」と感じている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          変えられること、変えられないことを分けてみる
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          職場の問題と、あなた自身の問題を混ぜずに整理していきます。手の届く範囲から、一緒に考えましょう。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-seligman-helplessness"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は、Seligman, M. E. P., & Maier, S. F. (1967). Failure to escape traumatic shock. Journal of Experimental Psychology, 74, 1–9. および Maier, S. F., & Seligman, M. E. P. (2016). Learned helplessness at fifty: Insights from neuroscience. Psychological Review, 123, 349–367. ほかの研究内容を筆者が要約したもので、原文の引用は含みません。本記事は医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

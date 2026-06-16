import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "しっかり休んでいるのに、体の緊張が抜けません。気のせいでしょうか?",
    a: "気のせいではありません。十分に休養しても緊張が続くのは、自律神経が「警戒モード」に入ったまま戻りにくくなっている状態として理解できます。支援職のように、緊張を要する環境に長く身を置いてきた人ほど、神経系が「常に備える」設定に固定されやすくなります。これは意志の弱さや甘えではなく、体が環境に適応した結果です。問題はあなたの体ではなく、長く警戒を強いてきた環境のほうにあります。",
  },
  {
    q: "「サバイバルモード」という言葉を聞きました。これは何ですか?",
    a: "ストレス下で働く、体の防御反応をやさしく言い換えた表現です。背景には多重迷走神経理論(ポリヴェーガル理論)という神経生理学の考え方があり、自律神経の状態を「安心して人と関われるモード」「闘うか逃げるかの警戒モード」「動けなくなる凍りつきモード」の3つで捉えます。消耗が深い支援職は、警戒モードや凍りつきモードに入ったまま戻りにくくなることがあります。ただし注意してほしいのは、これは「28日で切り替わる」「これをやれば治る」といった単純なスイッチではないということです。理解のための地図であって、即効の解決法を約束するものではありません。",
  },
  {
    q: "「安全なはずの家で、急に涙が出たり、どっと疲れたりする」のはなぜですか?",
    a: "緊張が解けた瞬間に、抑えていた反応が出てくるためと考えられます。警戒モードの間は、体が「今は休んでいる場合ではない」と感情や疲労にフタをします。家に帰り、安全だと感じた瞬間にそのフタが外れ、涙・脱力・強い眠気として現れることがあります。これは不調が悪化したのではなく、むしろ体がようやく緊張を手放せた証拠です。詳しくは「<a href='/articles/safety-makes-sleepy' style='text-decoration:underline'>安心すると眠くなる理由</a>」もあわせてご覧ください。",
  },
  {
    q: "体の反応を、自分でコントロールできるようになりますか?",
    a: "「コントロールして消す」という発想より、「理解して、戻りやすい環境を整える」という方向が現実的です。神経系の反応は、意志の力でオン・オフできるスイッチではありません。むしろ、安心できる関係・場所・時間を持つことで、体が自然に警戒モードを緩める方向に向かいます。即効性をうたう技法に飛びつくより、自分の体が何に反応しているかを知り、環境の側を見直すことが、遠回りに見えて確実です。",
  },
  {
    q: "これは医学的な治療が必要な状態ですか?",
    a: "この記事は、体の反応を理解するための一般的な解説であり、診断や治療ではありません。動悸・不眠・過呼吸・強い気分の落ち込みなどが続く場合や、日常生活に支障が出ている場合は、自己判断で抱え込まず、医療機関(心療内科・精神科)に相談してください。体の不調が長引くときは、まず身体疾患の可能性を除くためにも、医師の診察を受けることが大切です。",
  },
]

export default function BodyStaysTense() {
  return (
    <ArticleLayout
      title="なぜ休んでも緊張が抜けないのか｜支援職の体が「警戒モード」から戻れない理由【公認心理師】"
      description="しっかり休んでいるのに、体の力が抜けない。週末も気が休まらない。これは気のせいでも甘えでもなく、自律神経が「警戒モード」に入ったまま戻りにくくなっている状態かもしれません。多重迷走神経理論(ポリヴェーガル理論)をもとに、支援職の体が休まらない仕組みを、公認心理師が構造から解説します。"
      url="https://www.ishizue-counseling.jp/articles/body-stays-tense"
      date="2026-06-16"
      tags={["compassion", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        疲れているのは心だと思っていた。でも本当は、体がずっと、戦う準備を解けずにいたのかもしれません。
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
        週末、しっかり休んだはずなのに、体の奥に力が入ったまま抜けない。
        布団に入っても、頭のどこかが見張りを続けている。
        肩が、あごが、いつの間にか固まっている。
        休んでいるのに、休めている感じがしない——。
      </p>

      <p>
        これは、気のせいでも、甘えでも、休み方が下手なせいでもありません。
        あなたの<strong>体が「警戒モード」に入ったまま、戻りにくくなっている</strong>——
        そう理解すると、多くのことが腑に落ちます。
        この記事では、なぜ支援職の体が休まらないのかを、神経の仕組みから整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・しっかり寝ても、疲れが抜けた感じがしない</li>
          <li>・休みの日も、どこか気が張っている</li>
          <li>・肩・首・あごに、慢性的に力が入っている</li>
          <li>・小さな物音や着信音に、過剰にビクッとする</li>
          <li>・安心できる場所で、急に涙が出たり、どっと疲れたりする</li>
          <li>・「気を抜く」という感覚が、もうよく分からない</li>
        </ul>
      </div>

      <h2>体には「3つのモード」がある——多重迷走神経理論</h2>
      <p>
        私たちの体は、自律神経によって、状況に応じた「モード」を切り替えています。
        神経生理学者ステファン・ポージェスが提唱した
        <strong>多重迷走神経理論(ポリヴェーガル理論)</strong>は、その状態を
        大きく3つに分けて説明します。むずかしい理論ですが、ここでは
        「体の3つのモード」として、かみくだいて見ていきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 安心モード（人とおだやかに関われる状態）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          安全だと感じているときの状態です。呼吸はゆったりし、人の話を落ち着いて聞け、
          表情もやわらかくなる。本来、心も体も回復するのは、このモードのときです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 警戒モード（闘うか逃げるかの状態）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          危険や負荷を感じると、体は交感神経を高め、いつでも動けるよう備えます。
          心拍が上がり、筋肉が緊張し、感覚が鋭くなる。
          短時間なら役に立つ反応ですが、<strong>これが続くと、休んでも力が抜けない状態</strong>になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 凍りつきモード（動けなくなる状態）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          警戒モードでも耐えきれない負荷が続くと、体は最後の防御として
          活動そのものを落とします。無感情になる、体が重い、何もする気が起きない——
          これは「怠け」ではなく、体が自分を守るために
          シャットダウンに近い状態に入ったサインです
          （感情が分からなくなる感覚については「<Link to="/articles/feeling-nothing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何も感じない状態</Link>」でも扱っています）。
        </p>
      </div>

      <h2>なぜ支援職は、警戒モードから戻れなくなるのか</h2>
      <p>
        問題は、この警戒モードが「一時的な反応」のはずなのに、
        支援職の場合、<strong>常時オンになったまま固定されやすい</strong>ことです。
        理由は、仕事の構造にあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 「いつ何が起きるか分からない」現場</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          急変、トラブル、予測できない言動。支援の現場は、
          体が「常に備えていなければ」と判断する環境です。
          警戒モードを保つことが、現場では適応的ですらある。だから抜けなくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 気を抜ける瞬間が、構造的に少ない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休憩中も呼び出されるかもしれない。家に帰っても利用者のことが頭を離れない。
          「完全に安全」と体が感じられる時間が少ないと、神経系は安心モードに切り替わる
          きっかけを失います。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 警戒が「ふつう」になり、自分で気づけない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長く警戒モードが続くと、それが平常運転になり、緊張していること自体に気づけなくなります。
          「気を抜く感覚が分からない」のは、そのためです
          （体の感覚が分かりにくくなる状態は「<Link to="/articles/body-sensation-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の体の感覚が分からない</Link>」で詳しく扱っています）。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>「休んだのに、家でどっと疲れる」の正体</h2>
      <p>
        ここまで読むと、ある現象が説明できます。
        職場では気を張って動けていたのに、家に帰った瞬間に涙が出たり、
        強い眠気に襲われたり、どっと疲れが出たりする——。
      </p>
      <p>
        これは不調が悪化したのではありません。むしろ逆で、
        <strong>体が「ここは安全だ」と判断し、ようやく警戒モードを手放した瞬間</strong>に、
        抑えていた感情や疲労が一気に出てくるのです。
        安心した途端に眠くなるのも、同じ仕組みです
        （「<Link to="/articles/safety-makes-sleepy" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安心すると眠くなる理由</Link>」）。
        つまりその涙や眠気は、回復が始まったサインでもあります。
      </p>

      <h2>大切なこと：これは「スイッチ」ではない</h2>
      <p>
        ここで、はっきりお伝えしておきたいことがあります。
        世の中には「サバイバルモードを切れば、短期間で燃え尽きが解消する」と
        うたうものがあります。けれど、<strong>神経系の状態は、意志やテクニックで
        オン・オフできるスイッチではありません</strong>。
      </p>
      <p>
        警戒モードは、危険な環境に対して体が<strong>正しく反応している</strong>結果です。
        だとすれば、本当に必要なのは「体を直すこと」ではなく、
        「体が警戒しなくていい環境を、少しずつ取り戻すこと」。
        即効性をうたう技法に飛びつくより、こちらのほうが、遠回りに見えて確実です。
      </p>

      <h2>体が、安心モードに戻るために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「悪いのは体ではなく環境」と捉え直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          緊張が抜けないのは、あなたの心が弱いからではなく、体が危険な環境に正しく適応したから。
          まずこの捉え直しが、自分を責める回路を止めます。直すべきは体ではなく、環境との関係です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「完全に安全」と感じられる時間を、意図的に作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          連絡が来ない時間、誰にも気を遣わない場所、邪魔されない一人の時間。
          短くてかまいません。「ここでは何も起きない」と体が感じられる時間が、
          安心モードへ戻るきっかけになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 安心できる「人」とのつながりを持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          安心モードは、もともと「人と穏やかに関われる状態」です。
          責められない、評価されない、ただ話を聞いてもらえる関係は、
          神経系がもっとも安心モードに戻りやすい環境のひとつです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 緊張に「気づく」ことから始める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          無理に力を抜こうとしなくて大丈夫です。まず「今、肩に力が入っているな」と
          気づくだけでいい。気づくことは、警戒モードを自覚する第一歩で、
          それ自体が体に「ここは見張らなくていい」という小さな合図になります。
        </p>
      </div>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>体には「安心・警戒・凍りつき」の3つのモードがある(多重迷走神経理論)</li>
        <li>支援職は、現場の構造ゆえに「警戒モード」が固定されやすい</li>
        <li>休んでも緊張が抜けないのは、体が警戒を解けずにいるから</li>
        <li>家でどっと疲れるのは、むしろ警戒を手放せた回復のサイン</li>
        <li>神経系はスイッチで切れない。直すのは体ではなく、環境との関係</li>
      </ul>
      <p>
        あなたの体が休まらないのは、あなたが弱いからではありません。
        危険を察知し、守ろうとし続けてきた、誠実な体の反応です。
        まずはその体を責めるのをやめて、「ここは安全だ」と感じられる時間を、
        少しずつ取り戻していくこと。それが、遠回りに見えて、いちばん確かな道かもしれません。
      </p>

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]" dangerouslySetInnerHTML={{ __html: "A. " + item.a }} />
          </div>
        ))}
      </div>

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">「体が休まらない」を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/always-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">いつも気を張っている——緊張がほどけない理由</Link></li>
          <li>・<Link to="/articles/safety-makes-sleepy" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安心すると眠くなる理由</Link></li>
          <li>・<Link to="/articles/body-sensation-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の体の感覚が分からない</Link></li>
          <li>・<Link to="/articles/feeling-nothing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何も感じない——感情が遠くなる状態</Link></li>
          <li>・<Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">疲れているのに休めない</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「安心して話せる関係」は、体が警戒モードを手放すきっかけになります。公認心理師が、消耗の構造を一緒に整理します。10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「気を抜く感覚が、もう分からない」あなたへ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          体が安心できる時間を、一つ取り戻す
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          責められず、評価されず、ただ話を聞いてもらえる時間は、警戒し続けてきた体がゆるむきっかけになります。支援職の消耗を構造から理解する公認心理師が、あなたの状態を一緒に整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="compassion" exclude={["/articles/body-stays-tense"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに、多重迷走神経理論(ポリヴェーガル理論)などの知見を一般向けに整理したものです。医学的な診断・治療ではありません。心身の不調が続く場合は医療機関にご相談ください。
      </div>
    </ArticleLayout>
  )
}

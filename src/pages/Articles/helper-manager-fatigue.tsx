import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "部下のメンタル不調への対応で、自分が消耗しています。どこまでが自分の役割ですか?",
    a: "管理職の役割は「気づいて、つなぐ」までです。部下の変化に気づき、話を聴き、必要なら産業医・医療機関・専門の相談先につなぐ——そこまでが管理職の仕事で、回復させること自体は専門家の領域です。「自分が支えきらなければ」と治療者の役割まで引き受けると、専門外の重さを一人で抱えることになり、共倒れのリスクが高まります。役割の線引きは、冷たさではなく、部下を適切な支援につなぐための専門性です。",
  },
  {
    q: "部下が辞めたり休職したりすると、「自分のマネジメントのせいだ」と思ってしまいます。",
    a: "退職や休職の要因は、業務量・制度・待遇・本人のライフイベント・組織全体の文化など、多層的です。管理職の関わりはその一部であって、全部ではありません。「自分のせい」とすべてを引き受けるのは、責任感の表れであると同時に、組織や構造が負うべき責任まで個人で背負っている状態です。振り返りは「自分に変えられた点はあったか」に限定し、構造の問題は構造の問題として組織に返す——その切り分けが、自責の暴走を止めます。",
  },
  {
    q: "弱音を見せたら、部下からの信頼を失いませんか?",
    a: "多くの場合、逆です。完璧で隙のないリーダーより、「自分も疲れることがある」と適度に開示できるリーダーのほうが、チームの心理的安全性は高まりやすいことが知られています。部下は「この職場では弱さを見せてもいい」というメッセージを、管理職の振る舞いから学ぶからです。ただし、開示には程度があります。部下を不安にさせる深刻な吐露ではなく、「今週はさすがに疲れたな」と人間らしさを見せる程度の開示が、信頼とケア文化の両方を育てます。",
  },
  {
    q: "管理職になってから、相談できる相手がいません。",
    a: "それは役職に固有の構造です。部下には上司がいますが、現場の管理職には、同じ立場で本音を話せる相手が職場内にほぼいません。だからこそ、相談先は「職場の外」に意図的に作る必要があります。他事業所の同職位とのつながり、職能団体や研修での横の関係、外部のスーパービジョン、カウンセリング——「職場内に相談相手がいないのは自分の人徳の問題ではなく、構造の問題」と理解した上で、外部に確保するのが現実的な解です。",
  },
  {
    q: "正直、役職を降りたい・向いていないと思うことがあります。",
    a: "消耗しきった状態での「向いていない」は、適性の評価として正確でないことが多いものです。燃え尽きかけているときは、誰でも「全部やめたい」と感じます。まず判断より回復を先に。その上で、「役割のどの部分が消耗源か」を分解してみてください。マネジメント自体が合わないのか、プレイング兼務の量なのか、上との関係なのか——消耗源が特定できると、「降りる」以外の調整(業務配分・権限・サポート体制)が見えることもあります。降りる選択ももちろん正当ですが、消耗の中で決めないことが大切です。",
  },
]

export default function HelperManagerFatigue() {
  return (
    <ArticleLayout
      title="支援職の管理職がしんどい理由｜部下を支える人は、誰に支えられるのか【公認心理師】"
      description="主任・管理者・サービス管理責任者・師長——部下のメンタルに気を配りながら、自分の限界は誰にも言えない。支援職の管理職に固有の消耗の構造（ケア階層の最終地点・役職の孤独・プレイング兼務）と、自分を守る方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-manager-fatigue"
      date="2026-06-11"
      tags={["burnout", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        部下の表情の曇りにはすぐ気づくのに、自分の限界には気づかないふりをしている——支える人を支える人は、誰に支えられるのでしょうか。
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
              障害福祉15年・カウンセリング累計300名以上の臨床経験／福祉事業所の管理業務経験あり／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        部下の様子がいつもと違うことには、すぐ気づく。
        面談では聞き役に徹し、シフトの穴は自分が埋め、
        現場とマネジメントと書類仕事を行き来して、一日が終わる。
        ふと気づくと、<strong>自分の話を聞いてくれる人が、どこにもいない</strong>。
      </p>

      <p>
        主任、管理者、サービス管理責任者、児童発達支援管理責任者、師長、園長——
        支援の現場で「支える側を支える」役割に就いた人には、
        固有の消耗の構造があります。
        そして、その消耗は<strong>立場上、誰にも言えないまま深まりやすい</strong>。
        この記事では、その構造を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・部下のメンタルには気を配るのに、自分の不調は後回しにしている</li>
          <li>・現場業務と管理業務の両方を抱え、どちらも中途半端な感覚がある</li>
          <li>・部下の退職・休職を「自分のマネジメントのせい」と感じてしまう</li>
          <li>・経営層の方針と現場の現実の板挟みになっている</li>
          <li>・「管理職なんだから」と、弱音を飲み込むのが当たり前になった</li>
          <li>・職場に、本音で相談できる相手がいない</li>
        </ul>
      </div>

      <h2>なぜ管理職の消耗は深く、見えにくいのか——3つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① ケア階層の「最終地点」——支える人の受け皿がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の現場には、ケアの階層があります。利用者は職員に支えられ、職員は管理職に支えられる。
          では、管理職は誰に支えられるのか——<strong>階層の最終地点には、受け皿が用意されていません</strong>。
          部下には「いつでも相談して」と言えるのに、自分の「いつでも」はどこにもない。
          この構造的な不在が、管理職の消耗を静かに深くします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「できて当たり前」——成果が見えず、問題だけが見える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          チームが回っているとき、それは「当たり前」とされます。
          人間関係の火種を事前に消し、シフトを調整し、部下の不調を早めに拾う——
          うまくいっている管理の成果は、<strong>何も起きないという形でしか現れない</strong>。
          一方、問題が起きれば、責任は真っ先に管理職に向かいます。
          評価されにくく、責任は問われやすい。この非対称が、報われなさを蓄積させます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ プレイング兼務——二重の役割、二倍の感情労働</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援現場の管理職の多くは、現場業務を持ったままマネジメントを担う
          「プレイングマネージャー」です。
          利用者への感情労働に、部下への感情労働（不調への気配り・面談・調整）と、
          経営層への感情労働（報告・交渉・防波堤役）が積み重なる——
          <strong>感情労働の三重構造</strong>です。
          どれだけ有能でも、この設計自体が消耗を生みます。
          能力の問題ではなく、役割設計の問題です
          （この「構造を個人の責任にしない」視点は<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">こちら</Link>で詳しく扱っています）。
        </p>
      </div>

      <h2>管理職に起きやすい、4つの消耗</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 部下のメンタル対応の重さ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          メンタルヘルスの専門家ではないのに、部下の不調対応の最前線に立たされる。
          「言葉を間違えたら悪化させるのでは」という緊張、休職者が出たときの調整、
          残ったメンバーへのケア——どれも正解のない判断の連続で、認知も感情も消耗します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「部下が辞めるのは自分のせい」という自責</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          退職や休職が出るたび、「自分の関わりが悪かったのか」と振り返る。
          振り返り自体は誠実さですが、待遇・業務量・制度・本人の事情という
          <strong>組織と構造が負うべき要因まで、個人で背負っていない</strong>でしょうか。
          管理職の自責は、組織の構造問題の「個人化」の最前線で起こります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 上と下の板挟み</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          経営層からは数字と効率を求められ、現場からは人手と余裕を求められる。
          どちらの言い分も理解できるからこそ、間に立つ人が両方の不満を吸収する。
          翻訳者であり、防波堤であり、緩衝材——その役割の消耗は、どちらの側からも見えません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 役職の孤独</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          部下に弱音は見せられない。経営層には現場の防波堤として向き合っている。
          同じ立場の同僚は、職場にいない。
          <strong>人に囲まれて働きながら、構造的に一人</strong>——これが役職の孤独です。
          チーム内の関係の質から生じる孤立（<Link to="/articles/helper-team-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">チーム連携疲れ・孤立感</Link>）とは別の、
          立場そのものが生む孤独です。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>自分を守るために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「管理職も支援対象である」と定義し直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          まず、前提を変えてください。
          管理職は「支援を提供するだけの人」ではなく、「支援を必要とする一人の支援職」です。
          ケア階層の最終地点に受け皿がないなら、<strong>受け皿は自分で設計する</strong>——
          それは弱さではなく、チーム全体のリスク管理です。あなたが倒れたら、チームごと傾きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 相談先を「職場の外」に作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場内に同じ立場の相手がいないのは、構造上の必然です。
          だから、外に作る。他事業所の同職位との横のつながり、職能団体・研修で出会う同業、
          外部のスーパービジョン、カウンセリング。
          「職場で相談できないこと」を責めるのをやめて、外部の確保に切り替えてください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 部下のメンタル対応は「気づいて、つなぐ」まで</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          あなたの役割は、変化に気づき、話を聴き、専門的な支援（産業医・医療・相談機関）につなぐこと。
          <strong>回復させること自体は、専門家の領域</strong>です。
          治療者の役割まで引き受けない——この線引きは、あなたを守ると同時に、
          部下を適切な支援に届けるための専門性でもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 適度な弱さの開示は、チームを強くする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今週はさすがに疲れた」と言える管理職の下では、部下も「疲れた」と言えるようになります。
          完璧なリーダー像は、チームに「弱音を見せてはいけない」という規範を伝染させます。
          人間らしさの開示は、信頼を損なうどころか、チームの心理的安全性とケア文化を育てます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 消耗しきった状態で、役割の決断をしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「降りたい」「向いていない」が頭を占めるとき、まず回復を先に。
          消耗の中での自己評価は、実際より大きく歪みます。
          回復してから、消耗源を分解する——マネジメント自体か、兼務の量か、上との関係か。
          特定できれば、「降りる」以外の調整が見えることもあります。もちろん、降りる選択も正当です。
        </p>
      </div>

      <h2>近い消耗との見分け方</h2>
      <div className="card space-y-3 text-sm">
        {[
          { label: "管理職の消耗（本記事）", desc: "「部下を支える役割」に固有の負荷。ケア階層の最終地点、役職の孤独、上下の板挟みが核。" },
          { label: "相談支援専門員の負荷", desc: "利用者・家族・関係機関・行政との「多方向調整」の負荷。役割過重と板挟みが核。" },
          { label: "チーム連携疲れ", desc: "多職種協働・チーム関係の維持コストによる消耗。心理的安全性と関係の質が核。" },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-3">
            <span className="text-xs font-medium flex-shrink-0 w-32 mt-0.5 text-stone-700">{label}</span>
            <p className="text-stone-600 leading-[1.9]">{desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-600">
        多方向調整の負荷は<Link to="/articles/helper-case-manager-burden" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">相談支援専門員が抱える精神的負荷</Link>、
        チーム関係の消耗は<Link to="/articles/helper-team-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">チーム連携疲れ・孤立感</Link>で詳しく扱っています。
        今の消耗度は<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック</Link>で確認できます。
      </p>

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
        <p className="font-medium text-stone-700 mb-2">「支える側の消耗」を構造から理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">キャパシティを超えた業務を「自分のせい」にしない</Link></li>
          <li>・<Link to="/articles/cannot-depend-on-others" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">人に頼れない——支えられる側になれない構造</Link></li>
          <li>・<Link to="/articles/messiah-complex" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">メサイアコンプレックス——「救いたい」が止まらない心理</Link></li>
          <li>・<Link to="/articles/helper-case-manager-burden" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">相談支援専門員が抱える精神的負荷</Link></li>
          <li>・<Link to="/articles/helper-team-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">チーム連携疲れ・孤立感</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「職場の外の相談先」として、管理業務の経験を持つ公認心理師が、役職の孤独ごと整理します。
          10項目で相性を確認できます（合わないと出たら別の選択肢も案内しています）。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「支える側の、いちばん上にいる」あなたへ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          あなたの受け皿を、外に一つ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          部下にも経営層にも言えないことを、立場ごと理解して聴ける場所があります。福祉現場の管理業務を知る公認心理師が、役職の孤独と板挟みの構造を一緒に整理します。あなたが整うことが、チームの土台です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/helper-manager-fatigue"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)と、福祉事業所での管理業務の実務経験をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

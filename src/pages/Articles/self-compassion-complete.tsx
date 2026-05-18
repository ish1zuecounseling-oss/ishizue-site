import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "セルフコンパッションとは何ですか?",
    a: "セルフコンパッション(Self-Compassion)とは、「困難な状況にある自分自身に対して、優しさ・思いやりを向ける」心理的なあり方のことです。米国の心理学者クリスティン・ネフが2003年に提唱した概念で、「自分への優しさ」「共通の人間性」「マインドフルネス」という3つの要素から構成されます。",
  },
  {
    q: "セルフコンパッションと自己肯定感の違いは?",
    a: "違います。自己肯定感は『自分を肯定的に評価する感覚』で、自分の長所や成功に基づきます。一方、セルフコンパッションは『困難な状況の自分にも優しさを向ける』あり方で、評価には依存しません。失敗しても・うまくいかなくても、自分に優しくいられるのがセルフコンパッションです。",
  },
  {
    q: "セルフコンパッションは『自分に甘い』こととは違いますか?",
    a: "全く違います。研究では、セルフコンパッションの高い人は責任を回避するのではなく、むしろ自分の過ちを認める力が高いことが示されています。「自分を責めずに、客観的に状況を見る」ことができるため、より建設的な行動につながります。自分を責めることと自分に厳しいことは別物です。",
  },
  {
    q: "支援職にセルフコンパッションが必要なのはなぜですか?",
    a: "支援職は他者への思いやりを職業として実践していますが、その対象が『自分』には向けにくい構造があります。「相手に与えるばかりで、自分には厳しい」状態が長く続くと、共感疲労・燃え尽きにつながります。セルフコンパッションは『他者への思いやりを自分にも向ける』ことで、支援を続けるための土台になります。",
  },
  {
    q: "セルフコンパッションは練習できますか?",
    a: "できます。MSC(マインドフル・セルフコンパッション)プログラムをはじめ、研究で効果が確認されている練習法があります。ただし、もともと『自分に厳しい』『自分への優しさに違和感を感じる』方は、いきなり練習しても抵抗感が出ることがあります。その場合は、まず抵抗感の正体を整理することが先決です。",
  },
  {
    q: "セルフコンパッションを身につけるメリットは?",
    a: "研究で示されているメリットには、抑うつ・不安の軽減、ストレス耐性の向上、燃え尽き予防、自己効力感の向上、対人関係の改善、身体的健康への寄与などがあります。特に支援職にとっては、長期的に仕事を続けるための心理的な持続可能性につながります。",
  },
]

export default function SelfCompassionComplete() {
  return (
    <ArticleLayout
      title="セルフコンパッションとは——支援職に必要な「自分への思いやり」の心理学【公認心理師・総合解説】"
      description="セルフコンパッション(Self-Compassion)とは「自分への思いやり」のこと。3つの要素・自己肯定感との違い・支援職に必要な理由・関連する心理概念・身につけるための方法を、公認心理師が総合解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-compassion-complete"
      date="2026-05-18"
      tags={["self-function", "compassion", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        セルフコンパッションは「自分への甘さ」ではなく、困難な状況の自分にも優しさを向ける心理的なあり方です。
      </p>

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
        「自分にもっと優しくしていいんだよ」と言われても、ピンとこない。
        「自分を労る」って具体的にどうすればいいのかわからない。
        他人には優しくできるのに、自分には厳しくなってしまう——
      </p>

      <p>
        この記事は、<strong>セルフコンパッション(Self-Compassion)に関する総合解説のピラー記事</strong>です。
        概念の基本・心理学的な構造・支援職に必要な理由・関連する概念・身につけ方を整理しました。
        各テーマの個別記事へのリンクも掲載しているので、深く知りたい部分は個別記事に進めます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・セルフコンパッションとは何か(基本概念)</li>
          <li>・3つの構成要素(優しさ・共通の人間性・マインドフルネス)</li>
          <li>・自己肯定感・自己効力感との違い</li>
          <li>・支援職にセルフコンパッションが必要な理由</li>
          <li>・関連する心理学概念(共感疲労・燃え尽き・自己機能)</li>
          <li>・身につけるための具体的なアプローチ</li>
        </ul>
      </nav>

      <h2>セルフコンパッションとは何か</h2>
      <p>
        セルフコンパッション(Self-Compassion)とは、<strong>困難な状況にある自分自身に対して、優しさや思いやりを向ける心理的なあり方</strong>のことです。
        米国の心理学者<strong>クリスティン・ネフ(Kristin Neff)</strong>が2003年に学術概念として提唱しました。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ネフによる定義</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「親しい友人や愛する人が困難な状況にあるとき、私たちはその人に対して優しさ・理解・サポートを向けます。
          セルフコンパッションとは、その同じ優しさを<strong>自分自身に対して向ける</strong>ことです。」
        </p>
      </div>

      <h2>3つの構成要素</h2>
      <p>
        ネフはセルフコンパッションを以下の3要素から構成されると定義しています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分への優しさ(Self-Kindness)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          困難な状況・失敗・苦しみに直面したとき、自分を批判・非難するのではなく、<strong>優しさ・理解・暖かさで自分自身を扱う</strong>こと。
          「自分はダメだ」「もっと頑張れたはず」ではなく、「これは大変だったね」「よくやっているよ」と自分に語りかけるあり方。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 共通の人間性(Common Humanity)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          苦しみ・失敗・不完全さは、自分だけのものではなく、<strong>人間として誰もが経験するもの</strong>と認識すること。
          「こんなのは自分だけだ」「自分は人とは違う」という孤立感ではなく、「人間とはそういうものだ」「誰にも起こりうることだ」と捉えるあり方。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ マインドフルネス(Mindfulness)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の苦しみを過剰にも過小にも評価せず、<strong>ありのままに気づき、観察する</strong>あり方。
          苦しみを否定したり、逆に過剰に同一化したりせず、「今、私はつらいと感じている」とそのまま観察する姿勢。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これら3つの要素が組み合わさったとき、セルフコンパッションが機能します。
        どれか一つが欠けると、自分への接し方が偏ります(自己憐憫・自己批判・回避など)。
      </p>

      <h2>セルフコンパッションと混同されやすい概念の違い</h2>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">セルフコンパッション vs 自己肯定感(Self-Esteem)</p>
          <p className="text-stone-600 leading-[1.9]">
            自己肯定感は「自分への肯定的な評価」に基づきます。良い面・成功・達成があるときに高まり、失敗・批判で揺らぎます。
            セルフコンパッションは評価には依存せず、<strong>うまくいかないときの自分にも優しくいられる</strong>あり方です。
            研究では、自己肯定感より安定的な心理的健康をもたらすとされています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">セルフコンパッション vs 自己甘さ・甘やかし</p>
          <p className="text-stone-600 leading-[1.9]">
            セルフコンパッションは「責任を回避する甘さ」ではありません。
            研究では、セルフコンパッションの高い人は、自分の過ちを認め、改善する力がむしろ高いことが示されています。
            自分を責めずに、客観的に状況を見ることで、建設的な行動につながります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">セルフコンパッション vs 自己中心性</p>
          <p className="text-stone-600 leading-[1.9]">
            自分を大切にすることは、自己中心的になることではありません。
            むしろ自分への思いやりが満たされている人は、他者にも余裕を持って優しくできることが研究で示されています。
            「自分を優先する」のではなく、「自分と他者を同じように大切にする」あり方です。
          </p>
        </div>
      </div>

      <h2>支援職にセルフコンパッションが必要な理由</h2>
      <p>
        支援職は職業として他者への思いやりを実践していますが、その思いやりを<strong>自分自身に向けることが極めて難しい</strong>職業構造の中にいます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「与える側」のアイデンティティ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は「与える側」「ケアする側」というアイデンティティが強く、「自分がケアを受ける側になる」ことに抵抗があります。
          自分への思いやりを向けることが、職業的アイデンティティと矛盾するように感じられます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「自分に厳しい」が美徳とされる文化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          医療・福祉・教育の職場には、「自分に厳しく、他者に優しく」が美徳とされる文化が残っていることがあります。
          自分に優しくすることが「甘え」「プロ意識の欠如」と見なされる懸念から、自分への思いやりを抑制してしまいます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 共感疲労・燃え尽き予防の鍵</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          研究では、セルフコンパッションの高い支援職は、<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>・燃え尽きのリスクが低いことが示されています。
          自分への思いやりが、他者ケアの「燃料」になります。自分が枯渇していては、長期的に他者をケアし続けることはできません。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>関連する心理学概念</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 共感疲労(Compassion Fatigue)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他者への共感によって生じる消耗。セルフコンパッションは共感疲労の予防・回復の重要な要素として研究されています。
          詳細は<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link>。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自己機能(Self-Function)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「感じる」「望む」「選ぶ」という心理的働き。セルフコンパッションは自己機能を健全に保つための土台となります。
          詳細は<Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは</Link>。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自己批判(Self-Criticism)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          セルフコンパッションの対極にある状態。自分を批判・非難する思考パターンで、抑うつ・不安と強く関連します。
          <Link to="/articles/self-blame-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自責感</Link>と密接に関連します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ マインドフルネス(Mindfulness)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          セルフコンパッションの3要素の一つ。「今この瞬間に、判断せずに気づく」あり方。
          自己批判のループから抜け出すための入り口になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ ワーキングモデル(Working Model)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          幼少期の体験から作られる「自分・他者・関係」についての内側のパターン。
          「自分には優しさを向けてはいけない」というワーキングモデルが定着している場合、セルフコンパッションへの強い抵抗が生まれます。
          詳細は<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>。
        </p>
      </div>

      <h2>セルフコンパッションを身につけるための方法</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「親友に語りかけるように」自分に語りかける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分を責めている瞬間、「もしこれが親友だったら、自分は何と言うだろう?」と考えてみてください。
          親友には「大変だったね」「あなたのせいじゃないよ」と言えるのに、自分にはそれが言えていないことに気づきます。
          同じ言葉を、自分にかけてみる。これがセルフコンパッションの第一歩です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「これも人間として普通」と捉える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          失敗・落ち込み・恥ずかしさを感じたとき、「これは自分だけの問題」ではなく「人間として誰もが経験すること」と認識する。
          孤立感が和らぎ、自分への厳しさが緩みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 身体への優しさから始める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「心への優しさ」が難しい場合、まず身体への優しさから始めます。
          温かいお茶を飲む・お風呂にゆっくり浸かる・好きな音楽を聴く——身体が緩むことで、心の緊張も和らぎます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自己批判を「対話」にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「ダメな自分」を責めるのではなく、「なぜ自分はそんなに厳しいんだろう?」と問いかける。
          自己批判を「敵」ではなく「対話の相手」として扱うことで、批判のループから抜けやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ MSC(マインドフル・セルフコンパッション)プログラム</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          研究で効果が示されている8週間のプログラム。書籍やオンラインで学ぶこともできます。
          ただし、もともと「自分への優しさに違和感を感じる」方は、いきなりプログラムに入ると抵抗感が強くなることもあります。
          その場合は、まず抵抗感の正体を整理することから始めるのが効果的です。
        </p>
      </div>

      <h2>「自分に優しくする」ことへの抵抗</h2>
      <p>
        セルフコンパッションを実践しようとすると、強い抵抗感が出る方が多くいます。
        この抵抗感自体に重要な意味があります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 「自分には優しさを向ける資格がない」</p>
          <p className="text-stone-600 leading-[1.9]">幼少期から「自分は優しさを受ける資格がない」と学習している場合、自分への優しさが「ルール違反」のように感じられます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 「優しくしたら堕落してしまう」</p>
          <p className="text-stone-600 leading-[1.9]">「自分に厳しいことで頑張れている」と認識している場合、優しさが「堕落の入り口」のように感じられます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 「優しさを受けた後の喪失が怖い」</p>
          <p className="text-stone-600 leading-[1.9]">過去に優しさを受けて、その後に失った経験がある場合、「優しくされること」自体が怖く感じられることがあります。</p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらの抵抗感は、過去の体験が今に作動しているサインです。
        抵抗感を「克服すべきもの」として戦うのではなく、「自分には何があったのだろう」と理解する方向に進むことが、回復への近道です。
      </p>

      <h2>関連する個別記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">「セルフコンパッション」テーマの個別記事</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-self-compassion-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフコンパッション反応チェック</Link></li>
          <li>・<Link to="/articles/helper-self-compassion-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフコンパッションとバーンアウト</Link></li>
          <li>・<Link to="/articles/helper-self-compassion-resistance" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフコンパッションへの抵抗</Link></li>
          <li>・<Link to="/articles/helper-self-compassion-behavior" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフコンパッションと行動の変化</Link></li>
          <li>・<Link to="/articles/helper-msc-program" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">MSCプログラム</Link></li>
          <li>・<Link to="/articles/helper-nurse-self-compassion" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">看護師のセルフコンパッション</Link></li>
          <li>・<Link to="/articles/helper-attachment-self-compassion" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">愛着とセルフコンパッション</Link></li>
        </ul>
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
        <p className="text-[10px] text-stone-500 mb-1">「自分への優しさ」に違和感がある方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          抵抗感の正体を、一緒に整理しませんか
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          セルフコンパッションを「身につけよう」と頑張る前に、まず「自分への優しさへの抵抗感」を整理することが、回復の現実的な経路です。支援職特有の構造を理解した上で、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-compassion-complete"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "ハラスメント被害が長期化するのはなぜですか?",
    a: "被害体験そのものの深さに加え、「二次加害」「周囲の沈黙」「環境の変化困難」が複合的に作用するためです。被害者の責任や弱さではなく、構造的に長期化する要因があります。「いつまでも引きずっている」という自己責任的な見方は誤りで、「長引いて当然の構造がある」と理解することが回復の第一歩です。",
  },
  {
    q: "「二次加害」とは何ですか?",
    a: "被害そのものとは別に、周囲の言動・態度・無関心によって被害者がさらに傷つけられることを指します。「あなたにも落ち度があったのでは」「もう忘れて前に進もう」「大ごとにしないで」「あの人にも事情がある」など、悪意がない場合も含まれます。二次加害は被害者の回復を著しく遅らせ、孤立感・無力感を深める要因になります。",
  },
  {
    q: "「中立を保つ」ことが、なぜ被害者を傷つけるのですか?",
    a: "ハラスメント状況での「中立」は、構造的に加害者側を利することがあります。被害者と加害者の力関係が非対称な状況で「どちらの肩も持たない」態度を取ると、結果として既存の力関係(=加害者有利)を維持することになるためです。被害者の側からは「誰も助けてくれない」「自分が悪いと思われている」という孤立感として体験され、被害が長期化する大きな要因になります。",
  },
  {
    q: "ハラスメント被害後にPTSDになることはありますか?",
    a: "あります。WHOの国際疾病分類(ICD-11)では、長期的・反復的なハラスメント体験により「複雑性PTSD(C-PTSD)」が生じる可能性があります。フラッシュバック・過覚醒・回避・解離・自己否定の慢性化など、単発のトラウマとは異なる症状パターンを示します。「被害は終わったのに苦しみが続く」「同じ場面が繰り返し蘇る」状態が続く場合は、トラウマ専門の医療機関やカウンセラーへの相談を検討してください。",
  },
  {
    q: "「もう忘れて前に進めば?」と言われて辛いです",
    a: "それは典型的な二次加害です。トラウマ体験は「忘れよう」と思って忘れられるものではなく、むしろ「忘れろ」という圧力が回復を遅らせます。あなたが感じている辛さは正当な反応です。回復は「忘れる」ことではなく、「体験と共に生きられるようになる」ことであり、それには時間と適切なサポートが必要です。周囲の理解が得られない場合は、トラウマケアに詳しい専門家との対話が支えになります。",
  },
  {
    q: "被害後、何年も経つのに辛いままです。異常ですか?",
    a: "異常ではありません。複雑性のあるハラスメント体験(長期的・反復的・信頼関係の中で起きた被害)は、回復に数年から十数年かかることが一般的です。「いつまでも引きずっている」と自分を責める必要はありません。むしろ「長期化する構造があった」「適切なサポートを得られなかった」と理解することが、自己否定の悪循環から抜ける第一歩です。回復は直線的ではなく、進んだり戻ったりしながら進みます。",
  },
  {
    q: "周りに信頼できる人がいません。どうすれば?",
    a: "まず、専門家(トラウマケアに詳しい精神科医・公認心理師)への相談を最優先してください。同じ被害体験を持つ人のピアサポートグループも有効です。緊急時はよりそいホットライン(0120-279-338)・性暴力相談電話 #8891(性暴力被害の場合)が利用できます。「信頼できる人がいない」状態自体が被害の影響であり、専門家との対話で少しずつ「信頼できる関係」を再構築することが回復の核心になります。",
  },
]

export default function HarassmentProlongedStructure() {
  return (
    <ArticleLayout
      title="ハラスメント被害が長期化する構造——周囲の沈黙・二次加害・PTSDの蓄積【公認心理師】"
      description="ハラスメント被害が長引くのは「弱さ」ではなく、被害体験の深さ・二次加害・周囲の沈黙・「夢の場が痛みの場に変わる」現象という4つの構造的要因によります。被害者を二重に傷つけずに、長期化のメカニズムと回復の道筋を公認心理師が解説。「もう忘れて」と言われて苦しい方へ。"
      url="https://www.ishizue-counseling.jp/articles/harassment-prolonged-structure"
      date="2026-05-28"
      tags={["compassion", "self-function", "burnout"]}
      faq={FAQ_ITEMS}
    >
      {/* ▼ トリガー警告 */}
      <div className="my-4 p-4 rounded-xl" style={{ background: "#FFF8E7", border: "1.5px solid #F0E0B0" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>はじめにお読みください</p>
        <p className="text-xs text-stone-700 leading-relaxed">
          本記事はハラスメント被害・トラウマ・二次加害について扱います。読むことで体験が想起される可能性があります。今、症状が強い方は、ご自身のペースで読むか、信頼できる人と一緒に読むことをおすすめします。「消えてしまいたい」「いなくなりたい」感覚がある方は、本記事を読む前によりそいホットライン(0120-279-338・24時間無料)、心療内科・精神科への相談を優先してください。
        </p>
      </div>

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        ハラスメント被害が長引くのは、あなたが弱いからでも、引きずっているからでもありません。長期化を生む構造的要因があります。「いつまでも辛い」自分を責める前に、構造を見てください。
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
        「被害は終わったのに、何年経っても辛い」
        「『もう忘れて前に進めば』と言われるたびに、また傷つく」
        「誰も信じられない、居場所がない感覚が続いている」
        「夢を追っていた場所が、痛みの記憶の場に変わってしまった」——
      </p>

      <p>
        こうした感覚を持つ方は、「<strong>自分が弱いから</strong>」「<strong>引きずっているから</strong>」と自己責任のように捉えてしまいがちです。
        しかし、それは正確ではありません。
      </p>

      <p>
        ハラスメント被害が長期化するのは、<strong>被害者の弱さ</strong>ではなく、<strong>長期化を生む構造</strong>があるからです。
        この構造は、被害体験そのものの深さ・二次加害・周囲の沈黙・環境の変化困難——複数の要因が複合的に作用して形成されます。
      </p>

      <p>
        この記事では、ハラスメント被害が長期化する構造を、被害者を二重に傷つけない形で整理します。
        構造として理解できると、「自分が悪いから」という自己否定を緩めることができ、回復への道筋が見えてきます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ この記事は被害体験中・回復過程の方への情報提供を目的としており、法的アドバイスではありません。法的対応については弁護士・労働局・人権擁護委員などの専門機関にご相談ください。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・「被害が長期化する」とはどういうことか</li>
          <li>・長期化を生む<strong>4つの構造</strong></li>
          <li>・<strong>二次加害</strong>とは何か(具体例)</li>
          <li>・「<strong>沈黙の共謀</strong>」がなぜ起きるか</li>
          <li>・被害後の心理症状(PTSD・うつ・自己複雑性の崩壊)</li>
          <li>・「回復した」とはどういう状態か</li>
          <li>・周囲ができること</li>
          <li>・被害当事者へのメッセージ</li>
        </ul>
      </nav>

      <h2>「被害が長期化する」とはどういうことか</h2>
      <p>
        ハラスメント被害が「長期化する」とは、被害体験が物理的に終わった後も、心理的・社会的・関係的な影響が長く続く状態を指します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「長期化」の具体的な状態</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・被害から数年〜十数年経っても辛さが消えない</li>
          <li>・フラッシュバック・悪夢・侵入的記憶が続く</li>
          <li>・「夢を追っていた場所」が「痛みの記憶の場」に変わったまま</li>
          <li>・人を信頼することが難しい状態が続いている</li>
          <li>・自己肯定感の低下が慢性化している</li>
          <li>・身体症状(不眠・痛み・自律神経症状)が続く</li>
          <li>・新しい関係・場所でも被害が繰り返される予感に苛まれる</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは「<strong>異常な反応</strong>」ではなく、「<strong>異常な体験への正常な反応</strong>」です。
        トラウマ研究の第一人者であるベッセル・ヴァン・デア・コーク博士は「身体はトラウマを記憶する」と述べています。
        意志や努力で「忘れる」「乗り越える」ことができない領域があります。
      </p>

      <h2>長期化を生む4つの構造</h2>
      <p>
        ハラスメント被害が長期化する背景には、以下の<strong>4つの構造</strong>があります。
        どれか一つではなく、複数が複合的に作用しているのが通常です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 被害体験そのものの深さ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ハラスメントは、多くの場合、<strong>信頼関係や権力関係の中で起きる</strong>のが特徴です。
          単発の偶発的な被害とは異なり、「信頼していた人から」「逃げられない関係の中で」「繰り返し」起きることが多いです。
          このタイプの被害は<strong>複雑性PTSD(C-PTSD)</strong>を引き起こしやすく、単発のトラウマよりも回復に時間がかかります。
          「<strong>裏切られた</strong>」「<strong>世界が安全ではなくなった</strong>」という根源的な感覚の崩れが、回復を長期化させます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 二次加害——周囲の言動による追加被害</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          被害そのものとは別に、周囲の言動が<strong>追加の被害</strong>を生むことを「<strong>二次加害(secondary victimization)</strong>」と呼びます。
          「あなたにも落ち度があったのでは」「もう忘れて前に進もう」「大ごとにしないで」「あの人にも事情がある」など、<strong>悪意がない場合も含めて</strong>、被害者を追加で傷つけます。
          二次加害は、最初の被害よりも回復を妨げることがあります。被害者は「ハラスメントそのもの」と「周囲から受ける二次被害」の<strong>二重の傷</strong>を抱えることになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 沈黙の共謀——「中立」が被害者を孤立させる構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          周囲が「どちらの肩も持たない」「自分には関係ない」「巻き込まれたくない」という態度を取ることで、被害者が孤立する構造が生まれます。
          被害者と加害者の力関係が非対称な状況での「中立」は、結果として<strong>既存の力関係(=加害者有利)を維持する</strong>ことになります。
          被害者の側からは「<strong>誰も助けてくれない</strong>」「<strong>自分が悪いと思われている</strong>」という孤立感として体験され、長期化の最大の要因となります。
          この現象を、ホロコースト研究者デボラ・リップシュタットは「<strong>沈黙の共謀</strong>」と呼びました。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「夢の場」が「痛みの場」に変わる現象</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ハラスメントは、被害者が大切にしていた場所・夢・関係性の中で起きることが多いです。
          職場・学校・趣味のコミュニティ・尊敬していた人との関係——「<strong>そこに居たかった場所</strong>」「<strong>追いかけていた夢</strong>」が、被害によって<strong>痛みの記憶の場</strong>に変わってしまいます。
          これは単なる「場所への嫌悪」ではなく、<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>を構成していた重要な要素を失う体験です。
          「あの場所での自分」「あの夢を追っていた自分」が消えることで、自己の感覚そのものが崩れます。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>二次加害とは何か——具体例</h2>
      <p>
        二次加害は、悪意がなくても起こります。むしろ「<strong>良かれと思って</strong>」「<strong>客観的に見て</strong>」「<strong>中立的に</strong>」というスタンスから生まれることが多いです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">二次加害になる典型的な言動</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・「あなたにも落ち度があったのでは」</li>
          <li>・「もっと早く声を上げればよかった」</li>
          <li>・「もう忘れて前に進もう」「いつまで引きずってるの」</li>
          <li>・「大ごとにしないで」「角を立てない方が」</li>
          <li>・「あの人にも事情があった」「悪気はなかった」</li>
          <li>・「両方の話を聞かないと判断できない」</li>
          <li>・「証拠はあるの?」(被害申告時に)</li>
          <li>・「あなたが強くなれば、こんなことは…」</li>
          <li>・「私には関係ないから」「巻き込まないで」</li>
          <li>・被害について話そうとすると、話題を変えられる</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらの言動を受けた被害者は、「<strong>自分の体験が認められない</strong>」「<strong>自分が悪いと思われている</strong>」「<strong>誰にも理解されない</strong>」という感覚に陥り、孤立を深めます。
        二次加害は、最初の被害が「終わった」後も<strong>長期にわたって繰り返される</strong>ことが特徴です。
      </p>

      <h2>「沈黙の共謀」がなぜ起きるか</h2>
      <p>
        周囲の人が「沈黙」を選ぶ背景にも、複数の要因があります。
        加害者の悪意とは別の、構造的な要因です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">沈黙が起きる4つの要因</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li><strong>① 自分も巻き込まれたくない</strong>:被害者を支持することで、自分も加害者から攻撃されることを恐れる</li>
          <li><strong>② 関係性の維持</strong>:加害者と既存の利害関係・人間関係があり、その維持を優先する</li>
          <li><strong>③ 「中立」を装う安心感</strong>:どちらの側にも立たないことで「公平な人」と見られたい・自分を守りたい</li>
          <li><strong>④ 自分の世界観を守るため</strong>:「あの人がそんなことをするはずない」「ここはそういう場所ではない」という認識を維持するため、被害を否認する</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは「<strong>悪人の行動</strong>」ではなく、誰もが陥りうる<strong>構造的な反応</strong>です。
        ただし、構造的な反応であっても、結果として被害者を追い詰めるという点では変わりません。
        「<strong>意図せずとも被害者を傷つけることがある</strong>」という自覚が、加害的な沈黙から抜ける第一歩です。
      </p>

      <h2>被害後の心理症状</h2>
      <p>
        ハラスメント被害後に起こりうる心理症状を整理します。これらは「異常」ではなく、「異常な体験への正常な反応」です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">PTSD・複雑性PTSDの症状</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・侵入症状(フラッシュバック・悪夢・侵入的記憶)</li>
          <li>・回避(被害を想起させる場所・人・話題を避ける)</li>
          <li>・過覚醒(警戒心・睡眠障害・集中困難)</li>
          <li>・否定的認知の変化(自己否定・世界への不信)</li>
          <li>・感情の麻痺・解離</li>
          <li>・関係性の困難(信頼・親密さの問題)</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">うつ症状</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・気分の落ち込み・喜びの喪失</li>
          <li>・無価値感・自己否定</li>
          <li>・希死念慮</li>
          <li>・身体症状(不眠・食欲不振・倦怠感)</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自己複雑性の崩壊</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          被害体験により、それまで自分を支えていた<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>が崩れることがあります。
          「夢を追っていた自分」「あの場所での自分」「あの関係性の中での自分」——大切にしていた自己の側面が、被害によって失われます。
          「<strong>自分が誰なのかわからない</strong>」「<strong>以前の自分に戻れない</strong>」という感覚は、この自己複雑性の崩壊によるものです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">関係性の困難</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人を信頼することが難しくなる・親密な関係を避ける・新しい場所や関係でも被害が繰り返される予感に苛まれる——これらは被害体験の自然な影響です。
          「<strong>誰を信じていいのかわからない</strong>」状態は、被害から数年〜十数年続くこともあります。
        </p>
      </div>

      <h2>「回復した」とはどういう状態か</h2>
      <p>
        ハラスメント被害からの「回復」は、「<strong>被害体験を忘れる</strong>」ことではありません。
        むしろ「忘れよう」とすることが、回復を妨げます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">回復の現実的な姿</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          回復とは、「<strong>被害体験と共に生きられるようになる</strong>」ことです。
          ・体験が消えるのではなく、体験に圧倒されない時間が増える<br />
          ・フラッシュバックが起きても、それに巻き込まれずに対処できる<br />
          ・「<strong>あれは起きた、そして自分は今ここにいる</strong>」と統合的に捉えられる<br />
          ・新しい関係性・場所・夢を、少しずつ持てるようになる<br />
          ・自分を責める声が、少しずつ小さくなる
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        回復は<strong>直線的ではありません</strong>。進んだり戻ったりしながら進みます。
        「良くなったと思ったらまた辛くなる」のは、回復が進んでいないのではなく、回復のプロセスそのものの一部です。
        焦らないこと・自分を責めないことが、回復を支えます。
      </p>

      <h2>周囲ができること——加害的な沈黙にならないために</h2>
      <p>
        被害者の周囲にいる方ができることを整理します。
        小さなことでも、それは確実に被害者の支えになります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">できることの具体例</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>「あなたは悪くない」と言葉にする</strong>:沈黙より、明示的な肯定が必要</li>
          <li>・<strong>体験を否定しない</strong>:「本当にそうだったの?」「証拠は?」と問い詰めない</li>
          <li>・<strong>「忘れて」と言わない</strong>:被害者のペースで時間が流れる</li>
          <li>・<strong>「中立」を装わない</strong>:被害者支持の意思を明示する</li>
          <li>・<strong>専門機関を紹介する</strong>:カウンセラー・弁護士・支援団体</li>
          <li>・<strong>聞き続ける</strong>:同じ話を何度しても、初めて聞くように受け取る</li>
          <li>・<strong>関係性を維持する</strong>:被害者が孤立しないよう、連絡を絶やさない</li>
          <li>・<strong>自分の限界も知る</strong>:支援者も専門家のサポートを受ける</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        「<strong>何ができるかわからない</strong>」と感じる場合、まず「<strong>あなたの体験を信じている</strong>」「<strong>あなたは悪くない</strong>」と伝えるだけでも、被害者の孤立感は大きく和らぎます。
        完璧なサポートを目指さなくていい。<strong>沈黙しないこと</strong>そのものが、最大の支援です。
      </p>

      <h2>被害当事者へ——自分を責めないために</h2>
      <p>
        この記事を読んでいる方がご自身が被害当事者である場合、以下のことを覚えておいてください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">大切なメッセージ</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>あなたは悪くありません</strong>。被害の責任は加害者にあり、あなたではありません。</li>
          <li>・<strong>長期化しているのは、あなたが弱いからではありません</strong>。長期化を生む構造があるからです。</li>
          <li>・<strong>「忘れろ」と言われても、忘れる必要はありません</strong>。回復は「忘れる」ことではありません。</li>
          <li>・<strong>あなたの感覚は正当です</strong>。「過剰反応」ではありません。</li>
          <li>・<strong>一人で抱えなくていい</strong>。専門家のサポートを受けることは、弱さではなく自分を守る賢い選択です。</li>
          <li>・<strong>回復は可能</strong>。時間はかかりますが、適切なサポートがあれば、必ず変化は起きます。</li>
        </ul>
      </div>

      <h2>専門家への相談</h2>
      <p>
        ハラスメント被害からの回復には、複数の専門機関のサポートが有効です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">心理的サポート</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ・<strong>心療内科・精神科</strong>:症状の医学的評価・服薬・診断書<br />
          ・<strong>トラウマケアに詳しいカウンセラー</strong>:構造の整理・対処の学び<br />
          ・<strong>ピアサポートグループ</strong>:同じ経験を持つ人との繋がり
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">法的・制度的サポート</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ・<strong>弁護士</strong>(各都道府県の弁護士会に法律相談窓口あり)<br />
          ・<strong>労働局・労働基準監督署</strong>(職場ハラスメントの場合)<br />
          ・<strong>法務省人権擁護局</strong>(みんなの人権110番・0570-003-110)<br />
          ・<strong>各種ハラスメント相談窓口</strong>(企業内・大学内・業界団体など)
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">緊急時・性暴力被害</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ・<strong>性犯罪・性暴力被害者のためのワンストップ支援センター</strong>:<strong>#8891</strong>(はやくワンストップ)<br />
          ・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料)<br />
          ・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)
        </p>
      </div>

      <h2>こんな状態なら早めの相談を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・フラッシュバック・悪夢が頻繁にある</p>
        <p>・「消えてしまいたい」「いなくなりたい」感覚がある</p>
        <p>・誰も信頼できない感覚が続いている</p>
        <p>・睡眠・食事に支障が出ている</p>
        <p>・身体症状が長期化している</p>
        <p>・「あの場所」「あの人」を想起させるものを過剰に避けている</p>
        <p>・自分を傷つけたい衝動がある</p>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 特に「消えてしまいたい」「自分を傷つけたい」感覚が強い場合は、心療内科・精神科への受診を最優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
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
        <p className="font-medium text-stone-700 mb-2">関連する構造</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性とは——「夢の場」が崩れる構造</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない(条件付き自己価値)</Link></li>
          <li>・<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルとは(信頼の根本)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link></li>
          <li>・<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">回復への道筋</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/structural-counseling-method" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">構造整理型カウンセリングとは</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          ハラスメント被害からの回復には、安全な関係の中で構造を整理することが必要です。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          ※ なお、トラウマ症状が強い場合は、トラウマケア専門の医療機関や、EMDR等のトラウマ療法ができる専門家への相談も視野に入れてください。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分を責めずに整理したい」方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          被害体験は、一人で抱え続けると孤立感が深まり、回復が遅れることがあります。安全な関係の中で、自分を責めずに体験を整理することが、回復への第一歩になります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>性犯罪・性暴力被害者ワンストップ支援センター</strong>:<strong>#8891</strong></li>
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・<strong>みんなの人権110番</strong>(法務省):0570-003-110</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科(トラウマケアに詳しい医療機関)</li>
        </ul>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/harassment-prolonged-structure"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断・法的アドバイスではありません。特定の事案・個人を指すものでもありません。
      </div>
    </ArticleLayout>
  )
}

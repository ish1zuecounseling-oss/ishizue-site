import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "育児バーンアウトとは何ですか?",
    a: "育児という長期的な対人援助の中で、心身のエネルギーが枯渇していく状態です。「子育てがしんどい」一時的な感覚を超えて、慢性的な疲労感・子どもへの感情の鈍化・「自分が誰なのかわからない」感覚などが現れます。育児は家庭での対人援助の側面を持ち、職業バーンアウトと似た構造で消耗が起こります。意志の弱さや「母性/父性不足」ではなく、構造的な問題です。",
  },
  {
    q: "「子どもが可愛く思えない」のは異常ですか?",
    a: "異常ではありません。育児バーンアウトの典型的なサイン(脱人格化症状)です。以前は可愛いと感じた子どもに対して、感情が動かなくなる・「面倒だ」と感じてしまうのは、長期的な感情労働の結果として起きる防衛反応です。「親失格」ではなく、「自分が消耗の限界に近づいている」サインとして受け取ってください。早めの整理が必要な段階です。",
  },
  {
    q: "「母性/父性が足りない」ということですか?",
    a: "違います。「母性」「父性」は文化的に作られた概念で、本能ではありません。育児バーンアウトは、母性・父性の有無の問題ではなく、長期的な対人援助の構造から起きる消耗です。むしろ真剣に子どもと向き合ってきた親ほど、消耗が深まりやすい構造があります。「親としての資質」ではなく「職業バーンアウトと同じ構造的問題」として捉えることが回復の入口です。",
  },
  {
    q: "周りの親はできているのに、自分だけできないのはなぜ?",
    a: "「周りはできている」は多くの場合、見えている表面だけの判断です。SNSや表面的な交流では、消耗している側面は見えにくく、できている部分だけが見えがちです。実際には、多くの親が育児バーンアウトを経験しています。「自分だけ」ではないことを知ることが、自己否定を緩める第一歩です。",
  },
  {
    q: "育児バーンアウトと産後うつの違いは?",
    a: "産後うつは出産直後〜数ヶ月の特定期間に起こる気分障害で、ホルモンバランスや出産の身体的負担も関係します。医学的な治療(投薬)が必要なケースも多いです。一方、育児バーンアウトはより長期的(数年単位)に起こり、消耗を生む構造への対処が中心です。両者は重なることもあり、産後うつから育児バーンアウトに移行するケースもあります。気になる場合は心療内科・精神科で評価を受けてください。",
  },
  {
    q: "「子育てがしんどい」と相談していいですか?",
    a: "もちろんOKです。「子育てを楽しめない」「子どもが可愛く思えない」という感情を表現することは、親として恥ずべきことではなく、消耗のサインに気づける重要なステップです。相談先は、心療内科・精神科・カウンセラー・地域の子育て支援センター・親同士のピアサポートなど複数あります。一人で抱えず、自分が話しやすい場所を選んでください。",
  },
  {
    q: "仕事と育児の両立で限界です",
    a: "対人援助職(看護師・介護士・保育士・教員など)で育児中の方は、「仕事の対人援助」と「家庭の対人援助」の二重負荷を抱える状態です。これは個人の意志の問題ではなく、構造的に消耗が二重化している状態です。「もっと頑張る」では解決しないため、仕事の調整(時短・配置変更・休職)を含めた構造的な対処が必要です。",
  },
]

export default function ParentingBurnout() {
  return (
    <ArticleLayout
      title="育児バーンアウトとは——「家庭での対人援助」が消耗する構造【公認心理師】"
      description="「子どもが可愛く思えない」「育児がただただ辛い」——育児バーンアウトは、家庭での対人援助が消耗する構造から起きます。なぜ起きるのか・5つの特徴的構造・症状パターン・回復への4ステップを公認心理師が解説。「自分が悪いから」と捉える前に、構造を理解するための実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/parenting-burnout"
      date="2026-05-25"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        育児バーンアウトは、「母性/父性不足」ではなく、家庭での対人援助が消耗する構造から起きます。職業バーンアウトと同じ構造で、真剣に向き合うほど深まる消耗です。「自分が悪い」と捉える前に、構造を理解してください。
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
        「子どもが可愛く思えない」
        「育児がただただ辛い」
        「『自分らしさ』が消えていく感覚がある」
        「もう何もしたくない、ただ眠っていたい」——
      </p>

      <p>
        こうした感覚を持つ親の方は、決して少数派ではありません。
        しかし、<strong>「母親/父親なんだから当たり前」「皆できているのに自分だけ」「自分の母性/父性が足りない」</strong>という規範が、これらの感覚を「異常」「親失格」と捉えさせ、誰にも相談できないまま抱え込むことに繋がります。
      </p>

      <p>
        この記事では、<strong>育児バーンアウト</strong>という現象を、「家庭での対人援助」という構造から解説します。
        職業バーンアウト(看護師・介護士・教員などのバーンアウト)と同じ構造で、育児中の親にも起こる正当な反応です。
      </p>

      <p>
        構造として理解できると、「自分が悪いから」という自己否定を緩めることができ、回復への道筋が見えてきます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方、子どもへの強い加害衝動がある方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)や、お住まいの地域の子育て支援センター・児童相談所も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・育児バーンアウトとは(職業バーンアウトとの共通点)</li>
          <li>・育児バーンアウトを生む<strong>5つの構造</strong></li>
          <li>・育児特有の<strong>症状パターン</strong></li>
          <li>・「孤育て」と育児バーンアウト</li>
          <li>・仕事と育児の二重負荷(支援職の方へ)</li>
          <li>・<strong>回復への4ステップ</strong></li>
        </ul>
      </nav>

      <h2>育児バーンアウトとは——「家庭での対人援助」の消耗</h2>
      <p>
        バーンアウト(燃え尽き症候群)は、長期的なストレスにより心身のエネルギーが枯渇した状態を指す概念です。
        看護師・介護士・教員などの<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職</Link>に起こりやすいことが知られています。
      </p>

      <p>
        実は、<strong>育児も「対人援助」の側面</strong>を持っています。
        子どもの感情・欲求・成長に向き合い、自分のニーズより子どものニーズを優先し続ける——
        これは構造的に、看護や介護の現場で行われていることと同じです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">育児が持つ「対人援助」の側面</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>感情労働</strong>:疲れていても笑顔を作る・イライラを抑えて穏やかに対応する</li>
          <li>・<strong>共感的引き受け</strong>:子どもの感情・苦痛を「自分のこと」として受け止める</li>
          <li>・<strong>境界線の曖昧化</strong>:自分と子どもの感情・責任の区別が薄くなる</li>
          <li>・<strong>無条件の対応</strong>:子どもの状態に関わらず、安定した関わりを求められる</li>
          <li>・<strong>長期性</strong>:何年も継続する長期的関係</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        職業バーンアウトと同じ構造があり、職業の場合と同様に<strong>「真剣に向き合うほど深まる消耗」</strong>が起きます。
        これは「親としての資質」の問題ではなく、構造的な問題です。
      </p>

      <h2>育児バーンアウトを生む5つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 24時間365日のオンコール</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          看護師でも介護士でも、勤務時間が終われば「離れる」ことができます。
          しかし育児は、特に乳幼児期は<strong>24時間365日のオンコール状態</strong>です。
          夜中も泣き声で起きる、休日も気が抜けない、自分の時間がほぼない——
          この「離れる時間がない」構造が、職業バーンアウトより深い消耗を生むことがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 成果が見えにくい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事なら「業務を完了した」「目標を達成した」という<strong>成果のサイクル</strong>が短期間で見えます。
          育児は、毎日同じことの繰り返しに見え、成果が10年20年後の子どもの人生にしか現れません。
          「<strong>自分のやっていることに意味があるのか</strong>」が見えにくく、達成感の低下に直結します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「母親/父親なら当たり前」の規範</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「母親/父親なら子どもを愛して当然」「母性/父性があるなら自然にできる」「育児が辛いと感じるのは親失格」——
          これらの規範が、サインに気づくことを遅らせます。
          特に「<strong>母性</strong>」「<strong>父性</strong>」は本能のように語られがちですが、これらは文化的に作られた概念であり、自然に湧き出るものではありません。
          規範を内面化すると、「辛い」と感じる自分を責め続けることになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 社会的孤立</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          育児中は、社会との接点が極端に減ることがあります。
          仕事を辞めた・産休育休中・転居・パートナーが多忙——様々な理由で、大人との関わりが激減し、「<strong>孤育て</strong>」状態になります。
          孤立は心理的消耗を最大化する要因です。
          専業育児であれ、共働きであれ、育児中の親は孤立しやすい構造があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「逃げ場がない」構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事なら「辞める」「転職する」という選択肢があります。
          育児には、原理的に「辞める」が存在しません。
          「<strong>逃げ場がない</strong>」という感覚自体が、深い絶望感を生みます。
          短期的に「離れる時間を作る」(預ける・休む)ことはできますが、長期的に「降りる」ことはできない構造です。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>育児特有の症状パターン</h2>
      <p>
        育児バーンアウトは、職業バーンアウトとは少し違う症状パターンを示します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「子どもが可愛く思えない」罪悪感</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前は可愛いと感じた子どもに対して、感情が動かなくなる・「面倒だ」と感じてしまう——
          これは脱人格化症状であり、<strong>正常な防衛反応</strong>です。
          しかし「親なら可愛いと思うべき」という規範のため、強い罪悪感に繋がり、自己否定が深まります。
          この自責こそが、回復を遅らせる最大の要因です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「いい親」を演じる消耗</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          家の中では子どもの前で「いい親」を演じ、外では他の親や周囲に「ちゃんとやっている親」を見せようとする——
          24時間続く感情労働です。
          疲れていても笑顔を作る、イライラを抑えて穏やかに対応する、SNSでは幸せな家族の姿を見せる——
          これらが日常化することで、消耗が深まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 子どもへのイライラと自己嫌悪</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          子どものちょっとした行動に過剰反応する・大きな声を出してしまう・後で「あんなことを言わなければよかった」と後悔する——
          これは「親としての資質」ではなく、エネルギーが枯渇しているサインです。
          イライラ→自己嫌悪→さらに消耗、という悪循環に陥りやすいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「自分が誰なのかわからない」感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          育児中は「○○ちゃんのお母さん/お父さん」という<strong>役割としての自分</strong>が前面に出て、それ以外の自分が見えなくなることがあります。
          趣味・友人・以前の仕事・自分の感覚——「自分らしさ」が消えていく感覚は、<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>の低下が起きているサインです。
          これは産後うつとは別の、構造的な消耗です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 身体症状の長期化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          慢性的な疲労感・頭痛・腰痛・不眠・胃腸の不調——
          これらは「育児で疲れているだけ」と片付けられがちですが、長期化している場合は心身の消耗が深刻化しているサインです。
          身体症状が出始めたら、医療機関での評価を検討してください。
        </p>
      </div>

      <h2>「孤育て」と育児バーンアウト</h2>
      <p>
        現代の育児では、<strong>「孤育て(こそだて)」</strong>と呼ばれる状況が広がっています。
        核家族化・地域コミュニティの希薄化・SNSでの「キラキラ育児」の表面的な見え方など、構造的に親が孤立しやすい時代です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「孤育て」が消耗を最大化する理由</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>大人との会話が極端に減る</strong>:言語処理能力が衰える感覚</li>
          <li>・<strong>相談相手がいない</strong>:不安や疑問を一人で抱え込む</li>
          <li>・<strong>SNSの「キラキラ育児」と比較</strong>:自分だけできていない感覚</li>
          <li>・<strong>パートナーが不在/多忙</strong>:夫婦間でも孤立</li>
          <li>・<strong>「迷惑をかけたくない」遠慮</strong>:助けを求めるハードルが高い</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        「孤育て」の状態では、自分が消耗していることに気づきにくく、気づいても助けを求めづらい構造があります。
        構造として理解し、意識的に対処することが必要です。
      </p>

      <h2>仕事と育児の二重負荷——対人援助職の方へ</h2>
      <p>
        看護師・介護士・保育士・教員などの<strong>対人援助職</strong>で育児中の方は、特に注意が必要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">なぜ二重負荷が深刻か</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事で他者をケアし、家庭でも子どもをケアする——
          1日24時間、対人援助モードから抜ける時間がない状態です。
          これは「<strong>仕事で消耗→家で回復</strong>」というサイクルが、「<strong>仕事で消耗→家でさらに消耗</strong>」というサイクルに変わることを意味します。
          二重の感情労働・二重の境界線の曖昧化・二重の共感的引き受け——
          職業バーンアウトと育児バーンアウトが同時進行しやすい構造です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">特に注意したいサイン</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・職場でも家庭でも「ケア」モードが抜けない</li>
          <li>・自分のニーズを完全に後回しにしている</li>
          <li>・「私が頑張らないと回らない」感覚が職場と家庭の両方で作動</li>
          <li>・休日も気が休まらない</li>
          <li>・パートナーとの関係性まで「ケア対象」になっている</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        この状態では、「もっと頑張る」では解決しません。
        仕事の調整(時短・配置変更・休職)・家庭内の役割分担の見直し・専門家のサポート——構造的な対処が必要です。
        <Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト</Link>もあわせて参照してください。
      </p>

      <h2>回復への4ステップ</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「親規範」を一旦手放す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「母親/父親なら〇〇すべき」という規範を一旦手放すことが、回復の入口です。
          あなたは「親」である前に「一人の人間」です。
          自分を犠牲にして子どものために尽くす——これは美徳のように見えて、長期的には子どもにとっても良くない結果を生みます。
          消耗した親より、安定した親の方が、子どもにとって良い影響を与えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「離れる時間」を死守する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          短時間でいいので、<strong>子どもから物理的に離れる時間</strong>を意識的に作ります。
          パートナーに預ける・一時保育を使う・家族に頼る・有料の託児を使う——どんな手段でも構いません。
          「離れたら罪悪感」が出るかもしれませんが、それは構造の問題ではなく、自己犠牲スキーマが反応しているだけです。
          離れる時間を持つことが、結果として子どもにも良い関わりを取り戻す土台になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「親以外の自分」を取り戻す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          育児中は「親としての自分」が前面に出て、それ以外の側面が見えなくなります。
          趣味・友人関係・以前の仕事・身体感覚・好きなこと——「<strong>親以外の自分</strong>」を意識的に育てることが、自己複雑性の回復につながります。
          1日10分でもいい。「親としてではない時間」を持つことが、長期的な持続性を支えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「構造を理解した専門家」と対話する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一人で構造を見ることは難しいです。
          地域の子育て支援センター・心療内科・カウンセラーなど、複数のサポートがあります。
          特に「<strong>育児がしんどい</strong>」という感情を、判断や評価なしに受け止めてくれる場所を持つことが、回復の鍵です。
          「親同士のピアサポート」も有効です。同じ立場の親と話すことで、「自分だけじゃない」と気づけます。
        </p>
      </div>

      <h2>パートナー・家族との関係</h2>
      <p>
        育児バーンアウトからの回復には、パートナーや家族の協力が大きく影響します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">パートナーへの伝え方</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          パートナーに状況を伝えるとき、「<strong>感情の説明</strong>」より「<strong>事実と必要なこと</strong>」を伝える方が伝わりやすいです。
          例:「育児バーンアウトかもしれない。週に1回、3時間だけ一人の時間が必要」など、具体的に依頼します。
          相手も状況を理解していないことが多いので、「察してほしい」ではなく「言葉にして伝える」ことが現実的です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「協力してくれない」と感じる場合</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          パートナーが協力的でない・育児にコミットしていない場合、それ自体が大きなストレス源です。
          一人で抱えるのではなく、夫婦のコミュニケーション自体を整理することも視野に入れてください。
          家族カウンセリングなどの選択肢もあります。
        </p>
      </div>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「子どもが可愛く思えない」が続いている</p>
        <p>・育児への意欲がまったく出ない</p>
        <p>・子どもへのイライラが頻発し、自己嫌悪を繰り返す</p>
        <p>・「親以外の自分」が見えなくなった感覚</p>
        <p>・身体症状(不眠・頭痛・胃痛など)が長期化</p>
        <p>・「消えてしまいたい」「いなくなりたい」感覚がある</p>
        <p>・子どもへの強い加害衝動がある</p>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 特に「消えてしまいたい」「いなくなりたい」感覚や、子どもへの強い加害衝動がある場合は、心療内科・精神科への受診を最優先してください。よりそいホットライン(0120-279-338・24時間無料)、児童相談所(189・無料)、お住まいの地域の子育て支援センターも利用できます。
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
        <p className="font-medium text-stone-700 mb-2">バーンアウトを深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link></li>
          <li>・<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link></li>
          <li>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link></li>
          <li>・<Link to="/articles/emotional-labor-unaware" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分は感情労働していない(気づかない構造)</Link></li>
          <li>・<Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフケアが効かない理由</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          カウンセリングは「合う・合わない」がはっきり分かれます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">育児で消耗してきた親の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          育児バーンアウトは、職業バーンアウトと同じ構造から起きる正当な反応です。「親としての資質」ではなく「対人援助の構造」の問題として、専門家と整理することで、回復への道筋が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>児童相談所虐待対応ダイヤル</strong>:189(無料)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>子育て支援センター</strong></li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/parenting-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

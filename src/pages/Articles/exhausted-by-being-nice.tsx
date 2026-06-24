import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "なぜ「優しい人ほど壊れる」のですか?",
    a: "優しさそのものが原因ではなく、優しさを支える心理構造(自己犠牲スキーマ・他人軸・感情労働・境界線の薄さ)が消耗を生み続けるためです。優しい人は自分のニーズより他者のニーズを優先することが習慣化しており、そのパターンが止まらないまま蓄積していくと、ある日突然「壊れる」ように見える状態に至ります。優しさは美徳ですが、その背景にある構造を見ないと、長期的に持続できません。",
  },
  {
    q: "「壊れる」とは具体的にどんな状態ですか?",
    a: "突然の体調不良で動けなくなる・感情が一切動かなくなる・以前は優しくできた相手にイライラしてしまう・「もう誰とも関わりたくない」と人を避けるようになる・「自分が誰なのかわからない」感覚が出る、などの状態を指します。これは「弱くなった」のではなく、長年抱え続けた負荷が限界を超えたサインです。早めの対処で深刻化を防げます。",
  },
  {
    q: "優しさをやめないと壊れますか?",
    a: "優しさをやめる必要はありません。問題は「優しさ」ではなく「優しさが止まらない構造」です。「断れない」「自分を犠牲にしてしまう」「自分のニーズを後回しにする」というパターンを意識して選び直せる状態を作ることが、優しい自分でい続けるための鍵です。「優しい人を辞める」ではなく「優しさの中で自分も守る」が回復の方向です。",
  },
  {
    q: "「いい人をやめる」と言われても、どうやって?",
    a: "急に「いい人をやめる」と振る舞いを変えると、自分も周囲も戸惑います。現実的な方法は段階的です。①小さな場面で「断る」練習をする(忙しい時に頼まれごとを丁寧に断る等)、②自分の本音を「言う前に気づく」習慣を作る、③「いい人」を演じている自覚を持つ、の3ステップから始めます。詳しくは記事内の「回復への3つのステップ」をご覧ください。",
  },
  {
    q: "優しい人が壊れる前に気づくサインはありますか?",
    a: "あります。①休んでも疲れが取れない、②人と会う前に憂鬱になる、③以前なら気にならなかったことに苛立つ、④「もう誰の役にも立てない」と感じる、⑤身体症状(不眠・頭痛・胃痛)が長期化、⑥楽しいはずの場で消耗を感じる、が代表的なサインです。これらに気づいたら、すでに限界が近づいている可能性があります。早めの整理が必要です。",
  },
  {
    q: "周りの人は気づいてくれますか?",
    a: "残念ながら、ほとんどの場合は気づかれません。優しい人は「いつも気が利く」「頼りになる」「優しい」と評価され、その姿勢を周囲も期待し続けます。本人が「もう限界」と言葉にしないと、誰も止めてくれません。「自分で気づくこと」が、最も重要な防衛策です。だから「壊れる前に気づく」記事が必要なのです。",
  },
  {
    q: "壊れてしまった後でも回復できますか?",
    a: "回復できます。ただし「壊れた後」は時間がかかります。早期の整理ほど回復が早く、限界に達した後は半年〜1年以上かかることも珍しくありません。だからこそ「壊れる前」の対処が重要です。すでに限界に達している方は、心療内科・精神科への受診と、構造の整理を並行することをおすすめします。一人で回復しようとせず、必ず専門家のサポートを受けてください。",
  },
]

export default function ExhaustedByBeingNice() {
  return (
    <ArticleLayout
      title="優しい人が壊れる——なぜいい人ほど消耗するのか【公認心理師】"
      description="「断れない」「つい相手を優先してしまう」——優しい人ほど疲れて壊れるのは、性格ではなく自己犠牲・他人軸・感情労働・境界線の薄さという構造のせいです。優しさを失わず自分も守る回復3ステップを、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/exhausted-by-being-nice"
      date="2026-05-25"
      tags={["boundary", "burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「優しい人ほど壊れやすい」は気のせいではありません。優しさの背景にある「自己犠牲スキーマ」「他人軸」「感情労働」「境界線の薄さ」という構造が、消耗を止まらなくします。優しさを失わずに、自分も守るための実用ガイドです。
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
        「人に頼まれると断れない」
        「自分のことより、相手のことを優先してしまう」
        「『優しいね』と言われるけど、最近とても疲れる」
        「もう誰の役にも立てないかもしれない」——
      </p>

      <p>
        もし、いくつも当てはまったなら、先にお伝えしたいことがあります。
        <strong>あなたが疲れて壊れそうなのは、優しさが足りないからでも、心が弱いからでもありません。</strong>
        優しさを支えている<strong>4つの心理構造</strong>（自己犠牲スキーマ・他人軸・感情労働・境界線の薄さ）が、
        消耗を止まらなくしているだけです。構造である以上、整理すれば変えられます。
      </p>

      <p>
        ただ、「<strong>優しい人</strong>」というラベルが強いほど、「<strong>疲れている自分</strong>」「<strong>もう限界の自分</strong>」を認めるのが難しくなります。
        この記事では、「<strong>優しい人ほど壊れる</strong>」という現象を心理学的に解剖し、
        「優しい自分」を保ちながら「自分を守る」道筋を、具体的に示していきます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ すでに「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・「優しい人ほど壊れる」の<strong>4つの心理構造</strong></li>
          <li>・「壊れる」とは<strong>具体的にどんな状態</strong>か</li>
          <li>・<strong>壊れる前に気づく</strong>6つのサイン</li>
          <li>・「優しさをやめる」のではなく「<strong>構造を変える</strong>」回復の方向</li>
          <li>・<strong>回復への3つのステップ</strong>(段階的アプローチ)</li>
          <li>・優しい人が壊れない関わり方</li>
        </ul>
      </nav>

      {/* チェックリスト:こんな状態はありますか? */}
      <div className="my-5 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな状態はありませんか?</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・人に頼まれると断れない</li>
          <li>・「自分さえ我慢すれば」とよく思う</li>
          <li>・人のために動いた後、強い消耗感がある</li>
          <li>・「優しすぎる」と言われるが、やめ方がわからない</li>
          <li>・最近、以前のように人に向き合えない</li>
          <li>・休んでも疲れが取れない</li>
        </ul>
        <p className="text-xs mt-2" style={{ color: "#92400e" }}>
          → 3つ以上当てはまる場合、すでに消耗が深まっている可能性があります。
        </p>
      </div>

      <h2>「優しい人ほど壊れる」とはどういうことか</h2>
      <p>
        まず確認したいのは、「<strong>優しい=壊れやすい</strong>」のではない、ということです。
        優しさそのものは美徳であり、それ自体が悪いわけではありません。
      </p>

      <p>
        問題は、優しさを支えている<strong>心理構造</strong>にあります。
        多くの「優しい人」は、自分のニーズより他者のニーズを優先し続ける構造を持っています。
        これが止まらないまま蓄積すると、ある日突然「壊れる」ように見える状態に至ります。
      </p>

      <p>
        「壊れる」と表現される状態は、以下のような状態を含みます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「壊れる」と感じる状態</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・突然の体調不良で動けなくなる</li>
          <li>・感情が一切動かなくなる(<Link to="/articles/feeling-nothing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</Link>)</li>
          <li>・以前は優しくできた相手にイライラしてしまう</li>
          <li>・「もう誰とも関わりたくない」と人を避けるようになる</li>
          <li>・「自分が誰なのかわからない」感覚が出る</li>
          <li>・以前楽しめたことが、まったく楽しめない</li>
          <li>・「役に立てない自分」に強い無価値感を感じる</li>
        </ul>
      </div>

      <p>
        これは「<strong>弱くなった</strong>」のではなく、長年抱え続けた負荷が限界を超えたサインです。
        早めの対処で深刻化を防ぐことができます。
      </p>

      <h2>優しい人が壊れる4つの心理構造</h2>
      <p>
        優しい人が壊れる背景には、以下の<strong>4つの心理構造</strong>が絡んでいます。
        どれか一つではなく、複数が同時に作動していることが多いです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自己犠牲スキーマ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「他者のニーズを自分のニーズより優先することが当然」という、無意識に作動する前提です。
          幼少期から「いい子でいなさい」「人に迷惑をかけてはいけない」「気の利く子だね」と評価され続けることで形成されることが多く、大人になっても同じパターンが続きます。
          「<strong>断ると相手が困る</strong>」「<strong>自分を優先するのは悪いこと</strong>」という感覚が瞬時に作動し、断ることへの強い罪悪感を生みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 他人軸</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の判断基準が「<strong>自分はどう感じているか</strong>」ではなく「<strong>相手にどう思われるか</strong>」になっている状態。
          優しい人の多くは、相手の表情・声色・反応に敏感で、常に「相手の状態」を読み取ろうとします。
          これは適応として身につけた高度な能力ですが、自分の感覚への接続が薄れていくため、自分が消耗していることに気づきにくくなります。
          詳しくは<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情労働の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          優しい人は、本当の感情を抑えて相手に合わせた感情を表現し続けます。
          疲れていても笑顔を作る、嫌でも穏やかに対応する、興味がなくても興味があるふりをする——これらは<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>と呼ばれ、日常的に蓄積していきます。
          「<strong>気を遣う性格</strong>」と捉えられていることの多くは、実は感情労働の自動化です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 境界線(バウンダリー)の薄さ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「どこまでが自分の責任で、どこからが相手の責任か」の区別が曖昧な状態。
          優しい人は、相手の感情や問題まで「自分のもの」として引き受けやすく、結果として消耗が深まります。
          相手の不機嫌を「自分のせい」と感じる、相手の問題を解決しなければと焦る、相手の感情を「自分が引き受ける」のが当然——
          これらは境界線が薄い状態の特徴です。
          詳しくは<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link>を参照してください。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これら4つの背景には、さらに<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル(内的作業モデル)</Link>という根本的な構造があります。
        幼少期の体験から形成された「こう振る舞わないと受け入れてもらえない」という無意識の前提が、優しい人のパターンを支え続けています。
        そしてこの4つに共通して流れているのが、「<strong>優しくしていないと、自分には価値がない</strong>」という感覚です。
        この感覚そのものを掘り下げたのが<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「自分の価値がわからない(条件つき自己価値)」</Link>で、優しさが止まらない構造の“根っこ”にあたります。あわせて読むと、なぜ優しさをやめられないのかが見えてきます。
      </p>

      <LineCtaCompassion />

      <h2>壊れる前に気づく6つのサイン</h2>
      <p>
        「優しい人」の多くは、限界に達するまで自分の消耗に気づきません。
        以下のサインに気づいたら、すでに限界が近づいている可能性があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 休んでも疲れが取れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          通常の休養では回復できない段階に来ているサインです。「もっと寝れば治る」と思い続けるのは危険です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 人と会う前に憂鬱になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前は楽しめた人間関係が、義務感や負担感に変わっている状態。優しさを支えるエネルギーが枯渇しているサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 以前なら気にならなかったことに苛立つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          小さなことに過剰反応する自分に気づいたら、忍耐の容量が限界に近づいているサインです。「自分らしくない」と感じる場面が増えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「もう誰の役にも立てない」と感じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          優しい人は「役に立てる自分」に価値を感じやすいため、この感覚は深い無価値感につながります。<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>の低下のサインでもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 身体症状(不眠・頭痛・胃痛)が長期化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心理的な負荷が身体に出ているサイン。「気のせい」と放置すると、より深刻な症状に発展することがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑥ 楽しいはずの場で消耗を感じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          楽しい場で消耗するのは、感情労働が止まっていないサインです。詳しくは<Link to="/articles/conversation-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">会話が疲れる</Link>を参照してください。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらのサインのうち<strong>3つ以上に当てはまる</strong>場合、すでに限界が近い状態です。
        早めに専門家や信頼できる人に相談することをおすすめします。
      </p>

      <h2>「優しさをやめる」のではなく「構造を変える」</h2>
      <p>
        多くの方が、「壊れない」ために「<strong>優しさをやめる</strong>」「<strong>いい人を辞める</strong>」必要があると思っています。
        しかしこれは正確ではありません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">本当に変えるべきもの</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          優しさそのものを変える必要はありません。問題は<strong>「優しさが止まらない構造」</strong>です。
          「断れない」「自分を犠牲にしてしまう」「自分のニーズを後回しにする」というパターンを<strong>意識して選び直せる状態</strong>を作ることが、優しい自分でい続けるための鍵です。
          「<strong>優しい人を辞める</strong>」ではなく「<strong>優しさの中で自分も守る</strong>」が回復の方向です。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        「優しさをやめる」を目標にすると、自分の核心まで否定することになり、かえって回復が遠のきます。
        構造を整理することで、優しさはむしろ持続可能な形で発揮できるようになります。
      </p>

      <h2>回復への3つのステップ</h2>
      <p>
        いきなり「優しさが止まる」のは無理です。段階的に進めるのが現実的です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ① 構造に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          まず、自分の「優しさ」を支えている構造を理解します。
          自己犠牲スキーマ・他人軸・感情労働・境界線——どれが自分の中で強く作動しているかを見ていきます。
          「自分は弱い」「自分は変な性格」ではなく、「<strong>こういう構造で消耗している</strong>」と捉え直すこと自体が、回復の入口です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ② 小さく断る練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          いきなり「全部断る」は不可能です。小さな場面から始めます。
          「忙しい時に丁寧に断る」「興味のない誘いを丁寧に辞退する」「自分のペースを優先する」など、<strong>小さな自己優先</strong>を一つずつ試します。
          最初は強い罪悪感が出ますが、これは「自己犠牲スキーマ」が反応しているだけで、実際には何も悪いことは起きません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ③ 「自分の感覚」に接続し直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他人軸で生きてきた人は、自分の感覚への接続が薄くなっています。
          「<strong>今、自分は何を感じているか</strong>」「<strong>本当はどうしたいか</strong>」を言葉にする習慣を作ります。
          一日の終わりに数分でも、自分に問いかける時間を持つことで、徐々に自分軸が育っていきます。
          詳しくは<Link to="/articles/body-sensation-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">身体感覚がわからない</Link>を参照してください。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これら3つのステップは、一人で進めるのが難しい場合があります。
        特に「自己犠牲スキーマ」「他人軸」「ワーキングモデル」は幼少期から形成された深いパターンのため、第三者と一緒に整理する方が現実的です。
      </p>

      <h2>優しい人が壊れない関わり方</h2>
      <p>
        「優しい自分」でい続けるために、日常で意識したい関わり方を整理します。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 「100%応える」をやめる</p>
          <p className="text-stone-600 leading-[1.9]">全ての場面で完璧に応えようとせず、「70%応える」を意識します。手を抜く場面を意図的に作ることで、本当に応えるべき場面でしっかり関われます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 自分の充電時間を死守する</p>
          <p className="text-stone-600 leading-[1.9]">一人時間・休養時間を、誰かのために削らない。「自分のため」が、結果として優しさを持続させる土台になります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 「本当は…」を言える人を持つ</p>
          <p className="text-stone-600 leading-[1.9]">一人でいい。「いい人」を演じなくていい相手を持つことが、優しさを持続させる鍵です。誰にも見せない自分の感情を表現できる場が必要です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 「役立てない自分」にも価値があると認める</p>
          <p className="text-stone-600 leading-[1.9]">優しい人は「役に立てる自分」に価値を感じやすい。役に立たない時の自分にも価値があると認めることで、無理なく動けるようになります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">⑤ 罪悪感を「事実」と切り分ける</p>
          <p className="text-stone-600 leading-[1.9]">断った後の罪悪感は強くても、それは「悪いことをした」事実ではなく、自己犠牲スキーマが反応しているだけです。罪悪感を感じても、それに従わない練習をします。</p>
        </div>
      </div>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「壊れる前に気づくサイン」を3つ以上感じている</p>
        <p>・身体症状(不眠・頭痛・胃痛)が長期化している</p>
        <p>・「もう誰の役にも立てない」と感じることが増えた</p>
        <p>・以前は優しくできた相手にイライラする</p>
        <p>・休日も気持ちが切り替わらない</p>
        <p>・「消えてしまいたい」「いなくなりたい」感覚がある</p>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 特に「消えてしまいたい」「いなくなりたい」感覚が続いている場合は、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
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
        <p className="font-medium text-stone-700 mb-2">構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない(条件つき自己価値・根っこ)</Link></li>
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは?抜け出せない理由と原因</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link></li>
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
          <li>・<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルとは</Link></li>
          <li>・<Link to="/articles/emotional-labor-unaware" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分は感情労働していない(気づかない構造)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/other-axis-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸チェック(15項目)</Link></li>
          <li>・<Link to="/articles/boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線チェック(15項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/conversation-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">会話が疲れる</Link></li>
          <li>・<Link to="/articles/acting-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">演じることでの疲れ</Link></li>
          <li>・<Link to="/articles/too-considerate" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">気を使いすぎ</Link></li>
          <li>・<Link to="/articles/kind-people-break-down" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる関連</Link></li>
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
        <p className="text-[10px] text-stone-500 mb-1">壊れる前に整理したい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          優しい人ほど、自分が消耗していることに気づきにくい構造があります。「あなたが抱えている構造はここ」と外から見える形で示すことで、初めて気づける部分があります。一人で抱えず、整理してみませんか。
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
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/exhausted-by-being-nice"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

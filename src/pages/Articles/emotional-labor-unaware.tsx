import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自分は感情労働をしているか、どう判断すればいいですか?",
    a: "「演じている」感覚があるかどうかではなく、「本来感じていることと、表現していることがズレているか」で判断します。例えば、本当はイライラしているけど穏やかに振る舞う、疲れているけど元気な表情を作る、興味がないけど興味があるふりをする——これらが日常的に起きていれば、すでに感情労働をしています。「自然にやっているから違う」と思う方ほど、長期的な蓄積で消耗しやすい状態です。",
  },
  {
    q: "感情労働は仕事だけで起きるものですか?",
    a: "違います。家族・友人・SNS・近所付き合いなど、人と関わるあらゆる場面で起き得ます。むしろ「仕事ではないから気を抜いていい」と思っている場面で、実は感情を調整し続けている方が多いです。家族との会話で「いい娘・いい息子・いい親」を演じる、友人との場で「明るく楽しい人」でいる——これらも感情労働です。",
  },
  {
    q: "「自分の性格だから」と思っていますが、それでも感情労働ですか?",
    a: "「気配りができる性格」「優しい性格」と捉えていることの多くは、実は「感情労働を自動化した状態」です。長年繰り返してきた結果、意識せずに感情を調整できるようになっています。これは性格ではなく、適応として身につけたパターンです。違いを言うなら、性格は「変えなくていいもの」、感情労働は「気づかないと消耗するもの」です。",
  },
  {
    q: "気づかないまま続けるとどうなりますか?",
    a: "蓄積した感情労働は、慢性的な疲労・心身の不調・「理由のわからない消耗感」として現れます。多くの場合、本人は「体調が悪い」「最近よく疲れる」と思うだけで、原因にたどり着けません。これが長期化すると、共感疲労・燃え尽き・感情麻痺・身体症状の慢性化へと進みやすくなります。「気づく」ことが、悪化を防ぐ最初のステップです。",
  },
  {
    q: "気づいた後、どうすればいいですか?",
    a: "いきなり「感情労働をやめる」必要はありません。気づくこと自体が回復の入口です。まず「あ、今これ感情労働してるな」と認識できる場面を増やします。次に、本当に必要な場面では続け、不要な場面では手を抜く判断ができるようになります。「全部やめる」のではなく「意識的に選ぶ」状態を目指すのが現実的です。",
  },
  {
    q: "感情労働と「人間関係を大切にすること」の違いは?",
    a: "境界線が違います。「人間関係を大切にする」は、自分の限界を守りながら相手と関わることです。感情労働は、自分の限界を超えて相手に合わせ続ける状態です。「大切にする」と「自分を消耗させる」が一体化していると、感情労働になりやすいです。本当に大切にしたい人ほど、感情労働ではなく境界線を持って関わる方が、長期的な関係が続きます。",
  },
  {
    q: "周りの人は気づいてくれますか?",
    a: "残念ながら、ほとんどの場合は気づかれません。むしろ「気が利く」「優しい」「対応が上手」と評価され、感情労働をさらに強化する力が働きます。これが「気づかない人ほど消耗する」構造の核心です。自分で気づく以外に、止める手段がほぼないのが、自覚なし感情労働の難しさです。",
  },
]

export default function EmotionalLaborUnaware() {
  return (
    <ArticleLayout
      title="自分は感情労働していない——「気づかない人ほど消耗する」構造【公認心理師】"
      description="「自分は感情労働していない」「気を遣う性格なだけ」と思っている方へ。気づかないまま続けている感情労働の5つの典型パターン・なぜ最も消耗するのか・自覚へのステップを公認心理師が解説。「これは自分のことかも」と気づくための実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/emotional-labor-unaware"
      date="2026-05-24"
      tags={["compassion", "self-function", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        感情労働は、自覚しているうちは消耗を制御できます。自覚なく続けている方が、最も深く消耗します。「自分は違う」と思っている方ほど、読んでみてほしい記事です。
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
        「感情労働? それは接客業の話で、自分には関係ない」
        「自分は気が利く性格なだけ」
        「みんなやっていることだから、特別じゃない」——
      </p>

      <p>
        こうした感覚を持つ方は少なくありません。
        しかし、<strong>「自分は感情労働をしていない」と思っている方こそ、最も深く消耗する</strong>構造があります。
      </p>

      <p>
        この記事では、自覚なく続けている感情労働の典型パターン・なぜ気づかないのか・気づくとどう変わるのかを整理します。
        「<strong>これは自分のことかも</strong>」という小さな気づきが、悪化を防ぐ最初のステップになります。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・なぜ「気づかない」のか(自覚しにくい構造)</li>
          <li>・自覚しにくい感情労働の<strong>5つの典型パターン</strong></li>
          <li>・自覚なしの<strong>感情労働チェックリスト</strong></li>
          <li>・「自覚なし」がなぜ最も消耗するのか</li>
          <li>・自覚するとどう変わるか</li>
          <li>・自覚への<strong>3段階のステップ</strong></li>
        </ul>
      </nav>

      <h2>そもそも感情労働とは——再確認</h2>
      <p>
        感情労働(emotional labor)とは、社会学者アーリー・ホックシールドが1983年に提唱した概念で、
        <strong>「本来感じている感情と、表現すべき感情にズレがあるとき、表現の方を優先するために行う心理的労働」</strong>を指します。
      </p>

      <p>
        多くの方が「感情労働=客室乗務員・接客業のような明確な対人業務」と認識していますが、これは狭い理解です。
        実際には、<strong>あらゆる人間関係で感情労働は起きています</strong>。
        詳しくは<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは(ピラー記事)</Link>を参照してください。
      </p>

      <h2>なぜ「気づかない」のか</h2>
      <p>
        感情労働に気づきにくい背景には、<strong>3つの構造</strong>があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自動化されているから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長年繰り返してきた感情調整は、意識せずに行えるようになります。
          「気を遣おう」と考えなくても、瞬時に表情・声色・態度を調整できる状態。
          これは「<strong>自然にできるから感情労働ではない</strong>」のではなく、「<strong>感情労働が自動化された結果</strong>」です。
          自動化されているから消耗のサインも見えにくくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「性格」として解釈しているから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「気配りができる」「優しい」「人当たりが良い」——これらは性格の特徴として解釈されがちです。
          しかし<strong>「いつでも・誰に対しても」気配りができる状態</strong>は、性格というより、<strong>感情労働の自動化</strong>と言えます。
          性格なら相手や状況によって出入りがあるはずですが、自動化された感情労働は止まりません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「みんなやっている」と思っているから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「これは社会人として当たり前」「みんな同じくらいやっている」と捉えていると、自分の負荷に気づきにくくなります。
          実際には、感情労働の量・質には<strong>大きな個人差</strong>があります。
          「みんなやっている」と思っている量が、自分の許容量を超えていることに気づけません。
        </p>
      </div>

      <h2>自覚しにくい感情労働——5つの典型パターン</h2>
      <p>
        以下のパターンに当てはまる場合、自覚なく感情労働をしている可能性があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「これは当たり前のこと」と思っている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>相手に合わせるのは当然</strong>」「<strong>場の空気を読むのは常識</strong>」「<strong>笑顔で対応するのが大人</strong>」——
          こうした「当たり前」が無条件に内面化されていると、自分が労力を使っていることに気づけません。
          「当たり前」と思っているうちは、消耗のサインが「自分の体力不足」と誤解されます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「自分の性格だから」と解釈している</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「私は気配りができる性格」「優しい性格」「人当たりが良い性格」——
          これらは事実かもしれませんが、その<strong>「性格」を支えるために、毎日大量の心理的エネルギーを使っている</strong>ことが見えていない場合があります。
          性格として固定化していると、「<strong>変えなくていいもの</strong>」と捉えてしまい、消耗源を放置することになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「みんなやっている」と思っている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分だけ大変なわけじゃない」「みんなも同じくらい疲れている」「これくらい普通」——
          これは事実の場合もあれば、思い込みの場合もあります。
          実際には、感情労働の量には人によって大きな差があり、「<strong>みんなと同じくらい</strong>」と思っているうちに、自分だけ過剰負荷を抱えている状態が起きやすいです。
          周囲との比較は、自分の状態を測る基準にならないことが多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 仕事ではなく日常で起きている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>感情労働=仕事の話</strong>」と思っていると、日常生活での感情労働が見えなくなります。
          家族との会話で「いい娘・いい息子・いい親」を演じる、友人との場で「明るく楽しい人」でいる、近所付き合いで「感じの良い人」を保つ——
          これらすべてが感情労働です。
          むしろ「<strong>仕事ではないから気を抜いていい</strong>」と思っている場面で、知らず知らず感情を調整し続けていることが多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「演じている」感覚がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「演じる」と聞くと、意識的に役を作ることをイメージしがちですが、自覚なし感情労働では「<strong>演じている感覚すらない</strong>」のが特徴です。
          自然に笑顔が出る、自然に気を遣える、自然に場を整える——
          これらが「自然にできる」のは、長年の自動化の結果です。
          「演じていない=感情労働していない」ではありません。むしろ「自然」だからこそ、止まらず、消耗が深まります。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>自覚なしの感情労働チェックリスト</h2>
      <p>
        以下の項目で当てはまるものを数えてみてください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">チェック項目</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>□ 「気が利く」「優しい」とよく言われる</li>
          <li>□ 自分の気持ちより、相手の気持ちを優先することが多い</li>
          <li>□ 「場の空気」を読むことが自然にできる</li>
          <li>□ 疲れていても、人と会えば笑顔で対応できる</li>
          <li>□ 家族・友人にも「いい人」を保とうとする</li>
          <li>□ 自分の本音を言うのが苦手</li>
          <li>□ 一人になると急にぐったりすることがある</li>
          <li>□ 「楽しい場」のはずなのに、後で消耗を感じる</li>
          <li>□ 「自分は気を遣う性格だから」とよく考える</li>
          <li>□ 慢性的な疲労感がある</li>
          <li>□ 「なぜか疲れる」原因がわからない</li>
          <li>□ 休日に何もする気が起きないことが増えた</li>
        </ul>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          <strong>5項目以上当てはまる</strong>場合、自覚なく感情労働を続けている可能性が高いです。
          <strong>8項目以上</strong>なら、すでに消耗が深まっている可能性があります。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        既存の<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働チェック</Link>もあわせて活用してみてください。
      </p>

      <h2>なぜ「自覚なし」が最も消耗するのか</h2>
      <p>
        感情労働は、自覚しているうちは消耗を制御できます。
        自覚なく続けている方が、最も深く消耗する理由は、以下のとおりです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 止めるタイミングがわからない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自覚があれば「<strong>今日はもう無理だ</strong>」「<strong>この場は撤退しよう</strong>」と判断できます。
          自覚がないと、限界が近づいていても自動的に続けてしまい、突然の体調不良・心の不調として表面化します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 周囲も気づかない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自覚なし感情労働は、外から見ると「気が利く」「優しい」と評価されます。
          結果として周囲もあなたが消耗していることに気づかず、「<strong>もっとお願いしよう</strong>」「<strong>頼りになる</strong>」と感情労働を強化する力が働きます。
          自分も周りも気づかない=止まらない、という構造です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 消耗の原因がわからない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜか疲れる」「理由がわからないけど消耗している」状態が続きます。
          原因不明なため、対処の方向も見えず、「<strong>体力が落ちた</strong>」「<strong>歳のせい</strong>」「<strong>気の持ちようの問題</strong>」と誤解されます。
          実際は感情労働の蓄積なのに、それと気づかないまま消耗が深まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自己肯定感の低下を招く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「みんなと同じことをしているのに、自分だけ疲れる」と感じると、「<strong>自分は弱い</strong>」「<strong>能力が低い</strong>」と自己評価が下がっていきます。
          本当の原因(自覚なし感情労働)が見えないため、自己否定だけが深まる悪循環に陥ります。
        </p>
      </div>

      <h2>自覚するとどう変わるか</h2>
      <p>
        「自覚なし」から「自覚あり」に変わるだけで、以下のような変化が起きます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 消耗の理由が見えてくる</p>
          <p className="text-stone-600 leading-[1.9]">
            「なぜか疲れる」が「<strong>感情労働で消耗している</strong>」に変わります。原因がわかると、対処の方向が見えてきます。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 自分への評価が変わる</p>
          <p className="text-stone-600 leading-[1.9]">
            「自分は弱い」が「<strong>自分は長年大きな労力を使ってきた</strong>」に変わります。自己否定が、自己理解に変わります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 選ぶ余地が生まれる</p>
          <p className="text-stone-600 leading-[1.9]">
            自動的に続けていたものを、「<strong>今は手を抜こう</strong>」「<strong>この場は本気で関わろう</strong>」と意識的に選べるようになります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 限界のサインに気づける</p>
          <p className="text-stone-600 leading-[1.9]">
            「<strong>あ、今日は感情労働の容量を超えそう</strong>」と気づけるようになります。突然の体調不良を防ぐ最大の予防策です。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">⑤ 関係性の質が変わる</p>
          <p className="text-stone-600 leading-[1.9]">
            「<strong>常に良い人</strong>」をやめると、最初は周囲が戸惑いますが、長期的には<strong>より対等で持続可能な関係</strong>が築けます。
          </p>
        </div>
      </div>

      <h2>自覚への3段階のステップ</h2>
      <p>
        いきなり「全部の感情労働に気づく」のは難しいです。以下の3段階で進めるのが現実的です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ1: 観察する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          まず、自分が「<strong>気を遣った場面</strong>」を日常で観察します。判断や評価をせず、ただ「気を遣ったな」と認識するだけでOK。
          1日の終わりに「今日気を遣った場面を3つ思い出す」程度で十分です。
          観察すること自体が、自動化された感情労働を「<strong>意識化</strong>」する作業です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ2: 感情を見る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          観察できる場面が増えてきたら、その時の<strong>本当の感情</strong>を見ていきます。
          「あの時、本当は何を感じていたか」「表現した感情と、本当の感情はズレていたか」を振り返ります。
          「<strong>本当はイライラしていた</strong>」「<strong>本当は疲れていた</strong>」「<strong>本当はその場にいたくなかった</strong>」——
          こうした気づきが増えていきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ3: 選ぶ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          観察と感情の認識ができるようになると、次は<strong>意識的に選ぶ</strong>段階です。
          「この場面では今まで通り感情労働をしよう」「この場面では手を抜こう」「この場面では本音を出してみよう」と、状況に応じて選べるようになります。
          全部を変える必要はありません。<strong>選べる状態になること</strong>自体が、回復の本質です。
        </p>
      </div>

      <h2>「自覚」の後にやるべきこと・避けたいこと</h2>
      <p>
        自覚した直後に、よくある「やりすぎ」「逆効果」があります。注意してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">✓ やった方がいいこと</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・小さな場面で「手を抜く」練習をする</li>
          <li>・本音を言いやすい人を1〜2人見つける</li>
          <li>・「全部の場面」ではなく「特定の場面」だけ意識する</li>
          <li>・一人で抱えず、専門家と整理する時間を持つ</li>
          <li>・自分の感情をメモする習慣を作る(短くてOK)</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">✗ 避けたいこと</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・「全部の感情労働をやめる」と宣言する(周囲との関係が崩れる)</li>
          <li>・急にすべての場面で本音をぶつける(消耗が逆に深まる)</li>
          <li>・「感情労働してきた過去」を後悔する(意味があった時間でもあります)</li>
          <li>・「これからは全部本音で生きる」と極端に振れる</li>
          <li>・気づいた瞬間に大きな決断をする(判断力が一時的に揺れます)</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        自覚は<strong>劇的な変化のためではなく、選ぶ余地を作るため</strong>のものです。
        「これまで通り続ける場面」と「変える場面」を、状況に応じて選び分けることが、長期的に最も健康な関わり方になります。
      </p>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・チェックリストで8項目以上当てはまった</p>
        <p>・「なぜか疲れる」が長期化している</p>
        <p>・「自分は気を遣う性格」と思いつつ、慢性的な消耗がある</p>
        <p>・「みんなと同じはずなのに、自分だけ疲れる」感覚がある</p>
        <p>・一人になると急にぐったりする頻度が増えた</p>
        <p>・楽しい場でも消耗を感じることが多い</p>
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
        <p className="font-medium text-stone-700 mb-2">感情労働を深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは(ピラー記事)</Link></li>
          <li>・<Link to="/articles/emotional-labor-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働の疲れ</Link></li>
          <li>・<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働チェック</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/conversation-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">会話が疲れる</Link></li>
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しさで疲れる</Link></li>
          <li>・<Link to="/articles/acting-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">演じることでの疲れ</Link></li>
          <li>・<Link to="/articles/suppressing-emotions-at-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">職場で感情を抑える</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
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
        <p className="text-[10px] text-stone-500 mb-1">「自覚なき消耗」を整理したい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          自覚なき感情労働は、自分だけで気づくのが最も難しい状態です。「あなたが気を遣っている場面はここ」と外から見える形で示すことで、初めて気づける構造があります。一人で抱えず、整理してみませんか。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="compassion" exclude={["/articles/emotional-labor-unaware"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

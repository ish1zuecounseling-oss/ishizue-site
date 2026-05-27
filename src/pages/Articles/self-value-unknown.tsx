import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "「自分の価値がわからない」のは病気ですか?",
    a: "病気とは限りません。「自分の価値がわからない」感覚は、「条件付き自己価値」という心理構造から起きる、極めて一般的な反応です。特に支援職・対人援助職・真面目に役割を果たしてきた方に多く見られます。ただし「消えてしまいたい」「いなくなりたい」感覚が続いている場合は、うつ病や適応障害などの可能性もあり、医療機関の受診を検討してください。",
  },
  {
    q: "条件付き自己価値とは何ですか?",
    a: "「○○ができれば価値がある」「○○を達成すれば認められる」のように、成果・役割・他者の評価に自己価値が紐づいている状態です。心理学者カール・ロジャースが提唱した概念で、幼少期からの「○○できる時だけ愛される」体験から形成されます。条件が満たされている時だけ価値を感じられ、満たされないと価値が消失するため、慢性的な不安と消耗を生みます。",
  },
  {
    q: "「役に立てない自分は価値がない」と感じます",
    a: "これは条件付き自己価値の典型的なサインです。「役に立てる」という条件と自己価値が紐づいている状態。役に立てている時は価値を感じられても、休んでいる時・体調を崩した時・退職した時など、役に立てない場面で自己価値が消失します。これは「自分の価値が役割に依存している」状態で、回復のためには「役割なしの自分」の感覚を育てていくことが必要です。",
  },
  {
    q: "褒められても素直に受け取れません",
    a: "条件付き自己価値の方によく見られる反応です。「本当はそんなにすごくない」「次もできないと意味がない」「本当の自分を知ったら失望される」など、褒められた瞬間に「条件を満たしていない自分」が浮かんできます。これは「無条件に受け入れられる体験」が少なかったことの表れで、「素直に受け取れない自分」を責めるのではなく、構造として理解することが回復の第一歩です。",
  },
  {
    q: "「自分が好き」かどうかわからないのは異常ですか?",
    a: "異常ではありません。条件付き自己価値の方は、自分への評価が「達成」「成果」「役割」を介してしか発生せず、「無条件に自分を好き」という感覚が育っていないことがあります。「好きか嫌いか」より、「自分のことをよく知らない」状態が近いです。これは性格の問題ではなく、長年の構造の結果です。",
  },
  {
    q: "回復にはどれくらいかかりますか?",
    a: "条件付き自己価値は幼少期から長年かけて形成されるパターンのため、短期での変化は難しいです。3〜6ヶ月で「構造の見え方」が変わり始め、1年〜数年で「無条件の自己価値」の感覚が育っていくのが一般的です。重要なのは「達成」ではなく「体験」を通じて少しずつ育つこと。「弱さを出しても受け入れられる」「何もしていなくてもここにいていい」という体験が、根本的な変化を生みます。",
  },
  {
    q: "カウンセリングはどう役立ちますか?",
    a: "条件付き自己価値の回復には、「無条件に受け入れられる体験」が不可欠です。日常では『役に立つ自分』が求められやすいですが、カウンセリングでは『何もできない自分』『弱い自分』『価値を感じられない自分』も含めて、判断なく受け止められる場が提供されます。この体験の積み重ねが、自己価値の感覚を根本から育てます。一人で考え続けるより、安全な関係の中で扱う方が効果的なテーマです。",
  },
]

export default function SelfValueUnknown() {
  return (
    <ArticleLayout
      title="自分の価値がわからない——条件付き自己価値の構造と回復への道筋【公認心理師】"
      description="「自分に価値があるのかわからない」「役に立てないと自分の存在意義を感じられない」——その感覚は心が弱いからではなく、条件付き自己価値という心理構造から起きています。4つの構造・回復への4ステップを公認心理師が解説。「達成」ではなく「体験」を通じて自己価値を取り戻すための実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/self-value-unknown"
      date="2026-05-27"
      tags={["burnout", "compassion", "boundary", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自分には価値があるのか」という問いは、答えより先に問い自体を理解することが重要です。「条件付き自己価値」という構造が見えると、回復への道筋が見えてきます。
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
        「自分には価値があるのかわからない」
        「役に立てていないと、自分がいる意味がわからない」
        「褒められても、本当はそうではない気がする」
        「『自分が好き』かどうか、よくわからない」——
      </p>

      <p>
        こうした感覚は、心が弱いからではありません。
        「自分の価値がわからない」状態には、形成されてきた<strong>構造</strong>があります。
      </p>

      <p>
        その中核にあるのが、<strong>「条件付き自己価値」</strong>という心理構造です。
        「○○ができれば価値がある」「○○を達成すれば認められる」——成果・役割・他者の評価に自己価値が紐づいている状態を指します。
      </p>

      <p>
        この記事では、「自分の価値がわからない」という感覚を、条件付き自己価値という構造から解剖します。
        構造が見えてくると、「自分が弱いから」という自己否定を緩めることができ、回復への道筋が見えてきます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・<strong>条件付き自己価値</strong>とは何か(概念の整理)</li>
          <li>・「自分の価値がわからない」を生む<strong>4つの構造</strong></li>
          <li>・条件付き自己価値の<strong>典型サイン</strong></li>
          <li>・なぜ「条件付き」が形成されるのか</li>
          <li>・回復への<strong>4つのステップ</strong></li>
          <li>・「達成」ではなく「体験」で育つ自己価値</li>
        </ul>
      </nav>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・褒められても「本当はそうではない」と思ってしまう</li>
          <li>・役に立てていないとき、自分の存在意義を感じられない</li>
          <li>・「自分がいてもいなくても同じ」という感覚がある</li>
          <li>・頑張り続けないと「自分には価値がない」気がする</li>
          <li>・「自分が好き」かどうかよくわからない</li>
          <li>・成果が出ていない時の自分が、受け入れがたい</li>
          <li>・「条件を満たしていない自分」を見せるのが怖い</li>
        </ul>
      </div>

      <h2>条件付き自己価値とは——「○○できる時だけ価値がある」という感覚</h2>
      <p>
        条件付き自己価値(conditions of worth)とは、心理学者カール・ロジャースが提唱した概念で、
        <strong>「特定の条件を満たした時だけ自分に価値がある」</strong>という感覚を指します。
      </p>

      <p>
        例えば、
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">条件付き自己価値の例</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・「成果を出している時だけ、自分に価値がある」</li>
          <li>・「人の役に立てている時だけ、自分はここにいていい」</li>
          <li>・「期待に応えられている時だけ、愛される資格がある」</li>
          <li>・「迷惑をかけていない時だけ、許される」</li>
          <li>・「評価されている時だけ、自分はOKだ」</li>
        </ul>
      </div>

      <p>
        条件が満たされている時は、強い充実感や有能感を感じられます。
        しかし条件が満たされない時——休んでいる時・失敗した時・体調を崩した時・役割を降りた時——
        <strong>自己価値が一気に消失</strong>し、強い不安・空虚感・自己否定が現れます。
      </p>

      <p>
        この「<strong>満たされる/満たされない</strong>」のスイッチで自己価値が大きく揺れる状態が、慢性的な消耗を生みます。
      </p>

      <h2>「自分の価値がわからない」を生む4つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 条件付き自己価値の形成</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          幼少期から「<strong>○○できる時だけ褒められる</strong>」「<strong>○○を達成した時だけ認められる</strong>」という体験が繰り返されると、「条件を満たすこと」と「自分の価値」が紐づいて記憶されます。
          大人になってもこのパターンが続き、「条件のない自分」「達成していない自分」の価値を感じる感覚が育ちにくくなります。
          これは<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル(内的作業モデル)</Link>の「自己モデル」と深く関連します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割依存——役割なしの自分が空虚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者としての自分」「頑張っている自分」「人の役に立っている自分」だけが自己概念を占めていると、
          役割から降りたとき「<strong>何もない自分</strong>」が残ります。
          これは<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割を降りるのが怖い</Link>状態であり、<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性の低下</Link>と深く関連します。
          特に対人援助職の方は、「役に立てる自分」という役割への依存が起きやすいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自己機能の消耗——自己感覚へのアクセス低下</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>が消耗すると、「自分はどうか」という<strong>内側への問いへのアクセス</strong>が薄れます。
          「自分の価値がわからない」状態は、自己感覚そのものが消耗した状態のサインでもあります。
          長年他者軸で生きてきた方は、自己機能が低下していることが多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ <Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>——外側の評価だけが頼り</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          内側の自己評価が薄れると、外側の評価・反応だけが自己価値の手がかりになります。
          褒められると価値を感じ、批判されると無価値に感じる——
          この<strong>不安定さ</strong>が「自分の価値がわからない」という感覚を生みます。
          自己価値が他人の反応次第になっているため、常に不安定で、慢性的な疲弊につながります。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        自己機能の状態 → <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link>
      </p>

      <h2>条件付き自己価値の典型サイン</h2>
      <p>
        以下のような反応が頻繁に出る場合、条件付き自己価値が強く作動している可能性があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 褒められても受け取れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「本当はそんなにすごくない」「次もできないと意味がない」「本当の自分を知ったら失望される」——
          褒められた瞬間に「条件を満たしていない自分」「いつまで続けられるかわからない自分」が浮かびます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休むことに強い罪悪感</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役に立てていない時間=価値がない時間」と感じるため、休むこと自体に罪悪感を覚えます。
          休んでもリラックスできず、休みながら「もっと何かすべき」と焦り続けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「条件を満たしていない自分」を見せられない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          疲れている・できない・失敗した・体調が悪い——こうした「条件を満たしていない自分」を他人に見せることに強い抵抗感があります。
          「本当の自分」を隠し続けることで、孤立感が深まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 達成しても満たされない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          条件を満たしても、束の間の充実感の後、すぐに「次の条件」が浮かびます。
          「達成したから価値がある」という回路は、達成のたびに条件のハードルが上がっていくため、永遠に満たされません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「自分が誰なのか」がよくわからない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          条件で自己価値を測ってきたため、「条件のない自分はどんな人か」が見えなくなっています。
          「好きなこと」「やりたいこと」「自分の感覚」を問われても、明確に答えられない状態が続きます。
        </p>
      </div>

      <LineCtaSmall />

      <h2>なぜ「条件付き」が形成されるのか</h2>
      <p>
        条件付き自己価値は、生まれつきの性格ではなく、<strong>育っていく中で形成されるパターン</strong>です。
        以下のような体験の蓄積が、条件付きを強める要因になります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">幼少期の体験</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・「いい子の時だけ」褒められる体験</li>
          <li>・成績・成果が出た時だけ注目される体験</li>
          <li>・親の期待に応えないと愛されない感覚</li>
          <li>・「あなたが○○だったら良かったのに」という条件付きの言葉</li>
          <li>・きょうだいとの比較・序列化</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">大人になってからの強化</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・職場での評価・成果主義文化</li>
          <li>・「役に立つ自分」を求められる対人援助の役割</li>
          <li>・SNSでの「キラキラした自分」を見せ続ける文化</li>
          <li>・「弱さを見せると評価が下がる」職場文化</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは「自分が悪いから条件付きになった」のではなく、<strong>環境的な要因</strong>が大きく関わっています。
        条件付きを「弱さ」ではなく「適応の結果」として捉え直すことが、回復の入口です。
      </p>

      <h2>回復への4ステップ——「達成」ではなく「体験」で育つ</h2>
      <p>
        重要なのは、<strong>自己価値は「達成すること」で得るものではなく、「存在すること」に根ざしているもの</strong>という認識の転換です。
        ただしこれは頭で理解するより、<strong>体験を通じて少しずつ育つ</strong>ものです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ① 構造に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          まず、自分の自己価値が「条件付き」で動いていることに気づきます。
          「達成すれば価値があるはず」「役に立てれば認められるはず」という前提が、無意識に作動していることを見える化します。
          「<strong>あ、今これ条件付きで考えてる</strong>」と気づける場面を増やすこと自体が、回復の第一歩です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ② 「何もしていない自分」と一緒にいる練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          役割・成果・頑張りのない時間に、「<strong>今ここにいる自分</strong>」を感じる時間が自己価値の感覚を育てます。
          最初は不安・空虚感・「何かしなければ」という焦りが出ます。それ自体が「条件付き自己価値」のサインです。
          短時間でも「ただ存在しているだけの時間」を意識的に持つことで、無条件の自己感覚が少しずつ育っていきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ③ 身体感覚・感情から「自分」を感じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分の価値を考える」より「<strong>自分の感覚を感じる</strong>」方が、自己感覚の回復を助けます。
          頭で「自分には価値がある/ない」と判断するのではなく、身体の感覚・今ある感情を観察します。
          <Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは感覚</Link>——身体感覚から入ることが先決です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ④ 「弱さを出しても受け入れてもらえる」体験</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          条件付き自己価値の更新には<strong>「条件なしに受け入れてもらえる」体験</strong>が必要です。
          安全な関係の中で、弱さ・失敗・本音・「価値を感じられない自分」を出し、それでも関係が続く体験を積み重ねること。
          これが、無条件の自己価値の感覚を少しずつ育てます。
          一人で頭の中で考えるのではなく、<strong>他者との関係性の中</strong>で育つテーマです。
        </p>
      </div>

      <h2>専門家サポートが効果的な理由</h2>
      <p>
        条件付き自己価値は、特にカウンセリングが有効なテーマです。理由を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">なぜカウンセリングが効くか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          日常では「役に立つ自分」「達成している自分」が求められやすく、「価値を感じられない自分」を出せる場所がほとんどありません。
          カウンセリングでは、「<strong>何もできない自分</strong>」「<strong>弱い自分</strong>」「<strong>価値を感じられない自分</strong>」も含めて、判断なく受け止められる場が提供されます。
          この体験の積み重ねが、自己価値の感覚を根本から育てます。
          条件付き自己価値は、一人で考え続けるより、<strong>安全な関係の中で扱う</strong>方が効果的なテーマです。
        </p>
      </div>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「自分の価値がわからない」感覚が長期化している</p>
        <p>・休むことに強い罪悪感が出る</p>
        <p>・達成しても満たされない感覚が続いている</p>
        <p>・「役に立てない自分」を強く責めてしまう</p>
        <p>・「条件を満たしていない自分」を見せられない</p>
        <p>・「自分が誰なのか」がわからなくなっている</p>
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
        <p className="font-medium text-stone-700 mb-2">構造を深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルとは(内的作業モデル)</Link></li>
          <li>・<Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは</Link></li>
          <li>・<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link></li>
          <li>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性とは</Link></li>
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割を降りるのが怖い</Link></li>
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link></li>
          <li>・<Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは感覚</Link></li>
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
          条件付き自己価値の整理には、安全な関係の中で扱うことが効果的です。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分の価値がわからない」を整理したい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          条件付き自己価値は、一人で考え続けるより、安全な関係の中で扱う方が効果的なテーマです。「価値を感じられない自分」も含めて、判断なく受け止められる場で、構造の整理を進めませんか。
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

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-value-unknown"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群の初期症状はどんなものですか?",
    a: "代表的な初期症状は、①休んでも疲れが取れない、②朝起きるのがつらい、③仕事への意欲低下、④イライラしやすくなる、⑤集中力の低下、⑥小さなミスが増える、⑦休日も気持ちが切り替わらない、⑧人と会うのが億劫になる、⑨身体症状(頭痛・胃痛など)が出始める、⑩「もう無理かも」が口癖になる、です。これらが2週間以上続いている場合、初期段階に入っている可能性が高いです。",
  },
  {
    q: "「まだ大丈夫」と思っている時こそ危険ですか?",
    a: "そうです。燃え尽きの初期は「まだ動ける」「気合いで何とかなる」と感じる時期です。この感覚が「もう少し頑張ろう」につながり、結果として悪化を招きます。「まだ大丈夫と思える段階での対処」が、最も悪化を防ぎます。「ギリギリまで頑張ってから休む」より「余裕があるうちに休む」方が、結果的に短期間で回復できます。",
  },
  {
    q: "初期で気づくと、どれくらい回復が早くなりますか?",
    a: "個人差はありますが、初期段階での対処なら数週間〜1〜2ヶ月で回復できることが多いです。中度まで進むと3〜6ヶ月、重度になると半年〜1年以上かかります。初期で気づくことは、回復にかかる時間・労力・経済的負担のすべてを大きく減らします。",
  },
  {
    q: "燃え尽きの前兆と一般的な疲労の違いは?",
    a: "一般的な疲労は休めば回復しますが、燃え尽きの前兆は「休んでも回復しない」のが特徴です。また、感情の鈍化・以前楽しめたことが楽しめない・「自分らしくない」感覚など、心理面の変化が伴います。「単なる疲れ」と片付けがちですが、これらのサインが2週間以上続いている場合は、燃え尽きの初期段階を疑ってください。",
  },
  {
    q: "初期段階で何をすべきですか?",
    a: "①消耗源から物理的に離れる時間を作る、②睡眠・食事を最優先する、③「断る」「手を抜く」を意識的に練習する、④信頼できる人に状況を話す、⑤産業医・心療内科に相談する、の5つが基本です。「気合いで乗り越える」「もっと頑張る」は逆効果。初期だからこそ早めの対処が効きます。",
  },
  {
    q: "初期から中度に進む境界線はどこですか?",
    a: "①出勤前に身体症状(動悸・吐き気)が出るようになる、②休日も気持ちが切り替わらない期間が続く、③感情の麻痺が出てくる(脱人格化)、④「もう辞めたい」が日常的に出る、⑤身体症状が長期化(2週間以上)、のいずれかが現れたら、中度段階に進んでいるサインです。この段階では医療機関の受診を検討してください。",
  },
  {
    q: "周りに気づかれにくいのはなぜですか?",
    a: "初期段階の方は、外面的には「いつも通り」を保ちやすいからです。仕事もこなせる、笑顔も作れる、責任感も保っている——だから「大丈夫そう」と判断されます。むしろ責任感の強い人ほど、初期サインを隠してしまいます。自分から「実は最近しんどい」と伝えない限り、周囲は気づきません。「自覚」が最大の防衛策です。",
  },
]

export default function BurnoutEarlySigns() {
  return (
    <ArticleLayout
      title="燃え尽き症候群の初期症状・前兆——重症化する前に気づきたい10のサイン【公認心理師】"
      description="燃え尽き症候群(バーンアウト)の初期症状・前兆を、身体・心理・行動の3軸で10のサインに整理。「まだ大丈夫」と思える段階で気づくことが、重症化を防ぐ最大の鍵です。初期段階での対処法、初期から中度に進む境界線、専門家相談のタイミングを公認心理師が解説。"
      url="https://www.ishizue-counseling.jp/articles/burnout-early-signs"
      date="2026-05-27"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        燃え尽き症候群は「気合いで治せない」状態。だからこそ「まだ大丈夫」と思える初期段階で気づくことが、最も悪化を防ぎます。重症化する前に気づきたい10のサインを整理します。
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
        「最近疲れが取れにくい」
        「以前ほどやる気が出ない」
        「休日も気持ちが切り替わらない」
        「『もう無理かも』が口癖になっている」——
      </p>

      <p>
        こうした感覚は、燃え尽き症候群(バーンアウト)の<strong>初期症状・前兆</strong>かもしれません。
      </p>

      <p>
        燃え尽きの厄介な点は、初期段階では「<strong>まだ大丈夫</strong>」「<strong>気合いで何とかなる</strong>」と感じやすいことです。
        この感覚が「もう少し頑張ろう」につながり、結果として重症化を招きます。
      </p>

      <p>
        この記事では、燃え尽き症候群の<strong>初期症状・前兆</strong>を、身体・心理・行動の3軸で10のサインに整理します。
        「<strong>まだ大丈夫</strong>」と思える段階で気づけるかどうかが、その後の回復期間・労力を大きく分けます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ すでに「消えてしまいたい」「いなくなりたい」感覚がある方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・なぜ「初期」で気づくことが大事か</li>
          <li>・重症化する前に気づきたい<strong>10のサイン</strong>(身体3・心理4・行動3)</li>
          <li>・「自分は大丈夫」と思いがちな理由</li>
          <li>・初期段階で<strong>何をすべきか</strong>(5つの行動)</li>
          <li>・初期から中度に進む<strong>境界線</strong></li>
          <li>・セルフチェック・専門家相談のタイミング</li>
        </ul>
      </nav>

      <h2>なぜ「初期」で気づくことが大事か</h2>
      <p>
        燃え尽きは「<strong>努力で治せない</strong>」「<strong>気合いで乗り越えられない</strong>」性質を持ちます。
        だからこそ、症状が深刻化する前の<strong>初期段階で気づく</strong>ことが、最も効率的な対処になります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">初期で気づくと何が変わるか</p>
        <div className="space-y-2 text-sm">
          <div>
            <p className="font-medium text-stone-700 mb-1">回復期間</p>
            <p className="text-stone-600 leading-[1.9]">初期段階での対処なら<strong>数週間〜1〜2ヶ月</strong>で回復可能。中度まで進むと3〜6ヶ月、重度では半年〜1年以上が必要になります。</p>
          </div>
          <div className="border-t border-stone-100 pt-2">
            <p className="font-medium text-stone-700 mb-1">必要な対処の重さ</p>
            <p className="text-stone-600 leading-[1.9]">初期はセルフケア + 軽い調整で済むことが多い。中度以上は休職・医療機関受診・カウンセリングなど、複数の対処の組み合わせが必要になります。</p>
          </div>
          <div className="border-t border-stone-100 pt-2">
            <p className="font-medium text-stone-700 mb-1">経済的・社会的負担</p>
            <p className="text-stone-600 leading-[1.9]">初期は仕事を続けながら対処可能。重症化すると休職による収入減・社会的影響・回復後の復職困難など、負担が大きく増えます。</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        つまり「<strong>まだ大丈夫</strong>」と思える今こそ、対処の好機です。
        ギリギリまで頑張ってから休むのではなく、<strong>余裕があるうちに気づいて行動する</strong>方が、長期的にずっと楽です。
      </p>

      <h2>重症化する前に気づきたい10のサイン</h2>
      <p>
        以下の10のサインを、<strong>身体・心理・行動</strong>の3軸で整理しました。
        どれか1〜2つなら一時的な疲労かもしれませんが、<strong>2週間以上継続している</strong>場合、初期段階に入っている可能性が高いです。
      </p>

      <h3>身体のサイン(3つ)</h3>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 休んでも疲れが取れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          通常の休養では回復できない感覚が出始めます。
          以前は週末で疲れがリセットできていたのが、月曜にすでに疲れている状態。
          これは「<strong>蓄積疲労</strong>」が始まっているサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 朝起きるのがつらい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          目覚ましが鳴っても起き上がれない・布団から出るのに時間がかかる・「あと10分」が日常化する状態。
          特に「<strong>仕事の日の朝</strong>」だけがつらい場合は、燃え尽きの初期サインの可能性が高いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 軽い身体症状が出始める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頭痛・胃痛・肩こり・腰痛・微熱・倦怠感など、軽い身体症状が頻繁に出る。
          「気のせい」「年のせい」「体質」と片付けられがちですが、心理的負荷が身体に出始めているサインです。
        </p>
      </div>

      <h3>心理のサイン(4つ)</h3>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 仕事への意欲低下</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前感じていた仕事へのやりがい・興味が薄れていく。
          「やらなきゃいけない」だけで動いている感覚。
          特に「<strong>以前は好きだった業務</strong>」への意欲が落ちている場合、初期サインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ イライラしやすくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前なら気にならなかったことに苛立つ・小さなことで怒ってしまう・周囲に厳しくなる。
          これは忍耐力のキャパシティが減っているサインです。
          「自分らしくない」と感じる場面が増えてきたら、初期段階に入っています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑥ 休日も気持ちが切り替わらない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休日になっても仕事のことが頭から離れない・日曜の夜から月曜が憂鬱・「サザエさん症候群」が強くなる。
          仕事と生活の境界が崩れ始めているサインです。
          以前は楽しめた休日の過ごし方が、楽しめなくなっていく感覚も特徴的です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑦ 「もう無理かも」が口癖になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ふとした瞬間に「もう無理」「辞めたい」「逃げ出したい」が出てくる。
          まだ本気で辞めるつもりはなくても、口癖のように出始めたら、無意識のSOSサインです。
          一時的な愚痴ではなく、習慣化していたら要注意。
        </p>
      </div>

      <h3>行動のサイン(3つ)</h3>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑧ 集中力の低下・小さなミスが増える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前なら気づけたミスを見落とす・集中が続かない・複数のタスクをこなすのが難しくなる。
          これは脳のエネルギー資源が枯渇し始めているサイン。
          「自分の能力が落ちた」と感じる前に、消耗のサインとして捉えてください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑨ 人と会うのが億劫になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前は楽しめた飲み会・友人との会話・家族との時間が、負担に感じるようになる。
          特に「<strong>会う前から疲れる</strong>」感覚が出てきたら、感情労働の容量が限界に近づいているサインです。
          詳しくは<Link to="/articles/conversation-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">会話が疲れる</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑩ 「楽しい」と感じる時間が減る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前楽しめた趣味・娯楽・食事・人との時間が、楽しめなくなっていく。
          「以前は美味しかったものが、味気なく感じる」「好きだった映画を見ても、心が動かない」など、感情の鈍化が始まっています。
          これは脱人格化症状の入口で、見過ごせないサインです。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>「自分は大丈夫」と思いがちな理由</h2>
      <p>
        初期段階の方の多くは、「<strong>まだ大丈夫</strong>」「<strong>気合いで何とかなる</strong>」と感じています。
        なぜそう思いやすいのか、構造を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 仕事が回せているから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          初期段階では、まだ業務をこなせています。「結果が出せている=大丈夫」と判断しがちですが、これは表面的な評価です。
          「<strong>こなせている</strong>」の裏で、徐々にエネルギーが消耗しています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 周囲が気づかないから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          初期段階の人は、外面的に「いつも通り」を保てます。「みんなが言わない=自分は大丈夫」と判断しがちですが、周囲は<strong>本人が言わない限り気づきません</strong>。
          特に責任感の強い人ほど、サインを隠してしまいます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「もっと大変な人がいる」と比較するから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「もっと激務な人もいる」「もっとつらい状況の人がいる」と比較して、自分の状態を矮小化する傾向があります。
          しかし他者との比較は、自分の状態を測る基準になりません。
          「<strong>あの人もやってるから自分もできるはず</strong>」が、悪化を招きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「燃え尽きは深刻な状態の人がなるもの」と思っているから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きは「動けなくなる」「出勤できない」など重症化のイメージで語られがちです。
          そのため「自分はまだ動けているから違う」と判断してしまいます。
          実際には、<strong>軽い疲労感の段階から始まっている</strong>のが燃え尽きです。
        </p>
      </div>

      <h2>初期段階で何をすべきか——5つの行動</h2>
      <p>
        初期段階で気づけたら、以下の5つを実行することで、重症化をほぼ防げます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗源から物理的に離れる時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事・人間関係など、消耗源から<strong>物理的に離れる時間</strong>を意識的に確保します。
          有給を取る・残業を減らす・休日に仕事から完全に離れる——
          「離れる」が罪悪感を伴うのは正常ですが、それに従わないでください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 睡眠・食事を最優先する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          回復の土台は<strong>身体</strong>です。睡眠時間を確保し、食事を整える。
          複雑な健康法より、基本を優先します。
          「眠りすぎ」「食べすぎ」を心配しなくていい時期です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「断る」「手を抜く」を意識的に練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「全部やる」「完璧にやる」をやめます。「<strong>断る</strong>」「<strong>手を抜く</strong>」を意識的に練習することで、消耗を減らせます。
          最初は強い罪悪感が出ますが、それは自己犠牲スキーマの反応です。
          詳しくは<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 信頼できる人に状況を話す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一人で抱えず、信頼できる人(家族・友人・同僚・カウンセラー)に「最近しんどい」と伝えます。
          話すこと自体で消耗が和らぐことが多いです。
          周囲は<strong>本人が言わない限り気づきません</strong>。「言葉にする」が最初の対処です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 産業医・心療内科に相談</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          初期段階でも、専門家への相談が有効です。
          会社に産業医がいれば守秘義務のある面談を活用できます。
          心療内科は「軽い症状でも」相談できる場所。「受診するほどではないかも」と感じる段階での受診が、最も悪化を防ぎます。
          詳しくは<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link>を参照してください。
        </p>
      </div>

      <h2>初期段階でやってはいけないこと</h2>
      <p>
        「良かれと思って」やる行動が、初期から中度への進行を早めることがあります。
      </p>

      <div className="card space-y-2 text-sm text-stone-600 leading-[1.9]">
        <p>・<strong>「気合いで乗り切る」</strong>:精神論で対処すると悪化します</p>
        <p>・<strong>「もう少し頑張る」</strong>:努力過多が原因。さらに頑張ると消耗が深まる</p>
        <p>・<strong>「気分転換にもっと活動」</strong>:積極的な気分転換が逆効果。休む方が先</p>
        <p>・<strong>「自分は大丈夫」と過小評価</strong>:「もっと大変な人もいる」と比較しない</p>
        <p>・<strong>「セルフケアで何とかしよう」と粘りすぎ</strong>:早めに専門家に頼る</p>
        <p>・<strong>「みんなに迷惑をかけてはいけない」と抱え込み</strong>:早期相談こそ周囲への配慮</p>
      </div>

      <h2>初期から中度に進む境界線</h2>
      <p>
        以下のいずれかが現れたら、初期から中度に進んでいるサインです。
        この段階では医療機関の受診を検討してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">中度に進んだサイン</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>① 出勤前に身体症状(動悸・吐き気・震え)が出る</li>
          <li>② 休日も気持ちが切り替わらない期間が2週間以上続く</li>
          <li>③ 感情の麻痺が出てくる(脱人格化)</li>
          <li>④ 「もう辞めたい」が日常的に出る</li>
          <li>⑤ 身体症状が長期化(2週間以上)</li>
          <li>⑥ 集中力の低下が業務に明らかに影響している</li>
          <li>⑦ 「自分が誰なのかわからない」感覚が出る</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは<strong>セルフケアの範囲を超えている</strong>サインです。
        中度段階では、医療機関・カウンセラー・産業医など複数の専門家サポートが必要になります。
        詳しくは<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link>を参照してください。
      </p>

      <h2>セルフチェック・専門家相談のタイミング</h2>
      <p>
        「自分はどの段階か」を確認するには、セルフチェックが有効です。
      </p>

      <div className="card space-y-2 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">セルフチェック</p>
          <p className="text-stone-600 leading-[1.9]">
            <Link to="/articles/helper-burnout-check" className="underline underline-offset-2">バーンアウトチェック(20項目)</Link>で、現在の消耗度を客観的に確認できます。
            5項目以下なら初期、6〜10項目なら中度の入口、11項目以上なら中度〜重度の可能性があります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-2">
          <p className="font-medium text-stone-700 mb-1">専門家相談</p>
          <p className="text-stone-600 leading-[1.9]">
            「気になるけど受診するほどではないかも」と感じる<strong>初期段階での相談</strong>が、最も悪化を防ぎます。
            予約だけでも取っておくのが現実的です。
          </p>
        </div>
      </div>

      <h2>こんな状態なら早めの対処を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・10のサインのうち3つ以上が2週間以上続いている</p>
        <p>・「まだ大丈夫」と「もう無理かも」が交互に出る</p>
        <p>・休んでも疲れが取れない感覚がある</p>
        <p>・「以前の自分らしくない」と感じる場面が増えた</p>
        <p>・身体症状が出始めている</p>
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
        <p className="font-medium text-stone-700 mb-2">燃え尽き関連シリーズ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link></li>
          <li>・<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link></li>
          <li>・<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link></li>
          <li>・<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link></li>
          <li>・<Link to="/articles/conversation-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">会話が疲れる</Link></li>
          <li>・<Link to="/articles/emotional-labor-unaware" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分は感情労働していない</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          初期段階での専門家相談は、最も効率的な対処です。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「まだ大丈夫」と思える今こそ、整えたい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          初期段階での専門家相談は、最も効率的な対処です。「受診するほどではないかも」と感じる段階で整理しておくことで、重症化を確実に防げます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-early-signs"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "会話が疲れるのは異常ですか?",
    a: "異常ではありません。会話は想像以上にエネルギーを使う活動で、感情・思考・身体感覚を同時に動かす複雑な作業です。特に「他人軸」「感情労働」「HSP的特性」「内向型」のいずれか(または複数)に当てはまる方は、会話で消耗しやすい構造を持っています。「楽しい」と感じることと「疲れる」ことは、矛盾せず両立します。",
  },
  {
    q: "楽しいのに疲れるのはなぜですか?",
    a: "「楽しい」は感情的な反応で、「疲れる」は身体的・神経学的な反応です。両者は別のメカニズムで動いているため、同時に起こり得ます。むしろ「楽しい」と感じる場面では、相手に良い印象を与えようと無意識に頑張ってしまい、結果として疲労が深まることがあります。「楽しいから疲れていない」と思い込まず、消耗のサインを大事にしてください。",
  },
  {
    q: "会話が疲れるのはHSPだから?",
    a: "HSP(Highly Sensitive Person)的な特性がある方は会話で疲れやすい傾向がありますが、HSPだけが理由ではありません。「他人軸」「感情労働の蓄積」「共感疲労」「内向型の充電サイクル」など、複数の要因が絡んでいます。「HSPだから仕方ない」と一括りにせず、自分の構造を細かく見ることで、対処の方向が見えてきます。",
  },
  {
    q: "会話を避けると関係が悪くなりませんか?",
    a: "「全部避ける」と「全部応じる」の二択ではありません。重要なのは「自分の充電量に合わせて関わり方を選ぶ」ことです。「今日は短めに切り上げる」「グループより一対一を選ぶ」「飲み会は二次会を断る」など、関わり方のグラデーションを持つことで、関係を保ちながら自分も守れます。",
  },
  {
    q: "内向型は変えられますか?",
    a: "内向型・外向型の傾向は気質的なもので、根本的に変えることは難しいです。ただし「内向型のまま、社会の中でどう動くか」は工夫できます。重要なのは「外向型のように振る舞おう」とすることではなく、「内向型の充電サイクル(一人時間)を確保する」「自分のエネルギー特性を理解する」ことです。変えようとする努力より、特性を理解して活用する方が現実的です。",
  },
  {
    q: "「会話が苦痛」は受診すべきですか?",
    a: "「以前は問題なかったのに最近急に苦痛になった」「会話の前に動悸・吐き気が出る」「会話後に強い消耗で寝込む」など、日常生活に支障が出ている場合は、心療内科・精神科の受診を検討してください。社交不安障害・うつ病・適応障害などが背景にあることもあります。「会話が疲れる」程度なら病気ではないことが多いですが、強い苦痛がある場合は早めの相談を。",
  },
  {
    q: "対人援助職で会話が疲れるのは普通ですか?",
    a: "対人援助職では「会話=仕事」のため、業務での会話で消耗するのは構造上の自然な反応です。問題は「業務時間外でも会話に消耗する」状態になっているとき。これは感情労働の蓄積・共感疲労・自己機能の低下を示すサインの可能性があります。プライベートで人と話す気力が出なくなっているなら、燃え尽きが進行している可能性も検討してください。",
  },
]

export default function ConversationFatigue() {
  return (
    <ArticleLayout
      title="会話が疲れる——「楽しいはずなのに消耗する」の心理構造【公認心理師】"
      description="「会話が疲れる」「楽しいはずなのに消耗する」のは異常ではありません。感情労働・他人軸・HSP的特性・内向型・共感疲労という5つの心理構造から、なぜ会話で疲れるのかを公認心理師が解説。場面別パターン・自分を消耗させない関わり方まで網羅。"
      url="https://www.ishizue-counseling.jp/articles/conversation-fatigue"
      date="2026-05-24"
      tags={["compassion", "self-function", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「楽しいはずなのに、なぜか消耗する」——その感覚は、性格の問題でも気のせいでもなく、心理構造から起きている正当な反応です。
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
        「仕事帰りに人と話す気力がない」
        「飲み会の後、ぐったりして寝込む」
        「楽しい会話だったはずなのに、家に着くと放心状態になる」
        「LINEの返信を考えるだけで疲れる」——
      </p>

      <p>
        こうした感覚を持つ方は、決して少数派ではありません。
        ただ、自分が「<strong>変なのかもしれない</strong>」「<strong>付き合いが悪い人間なのかも</strong>」と感じてしまい、誰にも相談できずに抱えているケースが多いです。
      </p>

      <p>
        この記事では、「会話が疲れる」という現象を心理学的に解剖します。
        <strong>5つの心理構造</strong>から、なぜ会話で消耗するのかが見えてきます。
        構造が見えると、「自分はおかしい」という不安が和らぎ、自分に合った関わり方が選べるようになります。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・「会話が疲れる」は異常ではない理由</li>
          <li>・会話が疲れる<strong>5つの心理構造</strong></li>
          <li>・「楽しいのに疲れる」のメカニズム</li>
          <li>・<strong>場面別</strong>のパターン(雑談・飲み会・家族・LINE・電話)</li>
          <li>・これは病気のサインか?の見極め</li>
          <li>・自分を消耗させない関わり方</li>
        </ul>
      </nav>

      <h2>「会話が疲れる」は異常か?</h2>
      <p>
        結論から言うと、<strong>異常ではありません</strong>。
        会話は想像以上にエネルギーを使う活動です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">会話中に同時に動いているもの</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>言語処理</strong>:相手の言葉を理解する</li>
          <li>・<strong>感情処理</strong>:相手の感情を察する・自分の感情を調整する</li>
          <li>・<strong>非言語処理</strong>:表情・声色・身体のサインを読み取る</li>
          <li>・<strong>記憶検索</strong>:過去の経験から適切な反応を選ぶ</li>
          <li>・<strong>表現の構築</strong>:相手に合わせた返答を組み立てる</li>
          <li>・<strong>身体反応の制御</strong>:適切な表情・姿勢を保つ</li>
        </ul>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          これらが同時に動いているため、会話は<strong>マルチタスクの極み</strong>と言えます。
          疲れて当然なのです。
        </p>
      </div>

      <p>
        「会話で疲れる」自分を責める必要はありません。
        ただ、「<strong>なぜ自分は人より疲れやすいのか</strong>」という疑問は、構造を理解することで答えが見えてきます。
      </p>

      <h2>会話が疲れる5つの心理構造</h2>
      <p>
        以下の5つは、独立して存在するのではなく、<strong>複数が重なって作動</strong>することが多いです。
        自分がどれに当てはまるかを見ていくと、対処の方向が見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情労働の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          会話の中で、本来の自分の感情を抑え、相手に合わせた感情を表現し続けている状態です。
          疲れていても笑顔を作る、興味がなくても興味があるふりをする、嫌な気持ちでも穏やかに対応する——
          これらは<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>と呼ばれ、職業的にだけでなく、日常的な人間関係でも蓄積していきます。
          特に対人援助職の方は、業務外でも感情労働モードが抜けにくく、休日の会話でも消耗します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 他人軸での対応</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          会話の判断基準が「<strong>自分はどう感じているか</strong>」ではなく「<strong>相手にどう思われるか</strong>」になっている状態。
          常に相手の反応を伺い、嫌われないように・失望させないように行動するため、会話のたびに膨大なエネルギーを消費します。
          詳しくは<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link>を参照してください。
          <Link to="/articles/other-axis-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸チェック(15項目)</Link>で自分の状態を確認できます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 過剰な気配り(HSP的特性)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手の小さな表情の変化・声のトーン・場の空気の変化など、<strong>細かな情報を無意識にキャッチし続ける</strong>特性。
          HSP(Highly Sensitive Person)的な気質を持つ方は、情報処理量が他の人より圧倒的に多いため、同じ会話でも消耗が深まります。
          「人より気にしすぎ」と言われがちですが、特性として理解することで、対処の方向が見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 内向型の充電サイクル</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          内向型の方は、人と関わることで<strong>エネルギーが消費される</strong>性質を持ち、一人の時間で充電するサイクルがあります。
          一方、外向型は人と関わることで充電されます。
          内向型・外向型は気質的なものであり、優劣ではなく違いです。
          内向型のまま社会で動くには、「<strong>一人時間の確保</strong>」を意識的に組み込むことが重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 共感疲労との関係</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手の感情を「自分のもののように」感じ取ってしまう傾向がある方は、会話の中で<strong>共感疲労</strong>を蓄積させやすいです。
          特に対人援助職や、家族介護者・家族支援者の方は、業務での共感疲労が日常会話にまで影響することがあります。
          <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは</Link>を参照してください。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これら5つのうち、自分は何に当てはまるか、複数か、を見ていくことで、「<strong>なぜ自分は会話で疲れるのか</strong>」が構造的に見えてきます。
      </p>

      <LineCtaCompassion />

      <h2>「楽しいのに疲れる」のメカニズム</h2>
      <p>
        最も不思議に感じやすいのが、「<strong>楽しいはずなのに疲れる</strong>」という現象です。これは矛盾ではなく、別のメカニズムが同時に動いている結果です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「楽しい」と「疲れる」は別の反応</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「楽しい」は<strong>感情的な反応</strong>(脳の報酬系の活動)で、「疲れる」は<strong>身体的・神経学的な反応</strong>(エネルギー消費・脳の疲労)です。
          別々のメカニズムで動いているため、同時に起こり得ます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">楽しい場面ほど頑張ってしまう</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「楽しい場」では、無意識に「<strong>もっと楽しませよう</strong>」「<strong>場を壊さないようにしよう</strong>」と頑張ってしまうことがあります。
          結果として、楽しい場面ほど感情労働が深まり、後で大きな反動が来ます。
          「楽しかった!」と笑顔で帰宅し、家に着いた瞬間にぐったりして動けなくなる——これは典型的なパターンです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「楽しい=疲れない」という誤解</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          多くの方が「楽しいなら疲れていないはず」と思っています。この誤解が、消耗のサインを見逃させます。
          「楽しい」と感じても、身体は消耗しています。<strong>身体のサインを大事にする</strong>ことが、長期的な健康を保ちます。
        </p>
      </div>

      <h2>場面別に見る「会話疲れ」のパターン</h2>
      <p>
        会話疲れは、場面によって異なるパターンを示します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">仕事の雑談</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休憩時間・廊下での立ち話・ランチ時の雑談——「業務ではない会話」が、実は最も消耗を生むことがあります。
          「業務ではないから気を抜けるはず」と思いきや、職場という場では「<strong>場の空気</strong>」「<strong>人間関係への配慮</strong>」を常に意識せざるを得ません。
          結果として、業務以上に感情労働が発生します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">飲み会・会食</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長時間にわたる会話・複数人の動向を同時に把握する必要性・「楽しまなければ」という暗黙のプレッシャー——
          これらが重なり、エネルギー消費が極端に大きくなります。
          特に「<strong>場を盛り上げる役</strong>」「<strong>聞き役</strong>」を引き受けることが多い方は、飲み会の翌日に動けなくなることが珍しくありません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">家族との会話</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「家族なんだから気を遣わなくていいはず」と思いがちですが、実際には家族との会話で消耗する方は多いです。
          長い歴史を持つ家族関係の中で、過去のパターン(役割・期待・遠慮)が無意識に作動し続けます。
          外で頑張った後、家でも「<strong>良い娘・良い息子・良い親・良いパートナー</strong>」を演じる感覚があれば、消耗は深まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">SNSのDM・LINE</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          文字のやり取りは「会話より楽」に見えて、実は別の消耗を生みます。
          相手の表情や声のトーンがないため、<strong>解釈の負荷が大きく</strong>、「この絵文字はどういう意味?」「返信が遅いのは怒っているから?」など、想像で補う作業が増えます。
          また「いつ返信するか」「どう書くか」を考え続けるため、常に脳が稼働している状態になりやすいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">電話</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          電話は<strong>表情が見えない・しかし即時応答が必要</strong>という、消耗しやすい構造を持っています。
          「相手の声のトーンだけで状況を察する」必要があり、文字より情報量が少ないのに即興性が求められます。
          「<strong>電話恐怖</strong>」を感じる方は近年増えており、特殊な弱さではありません。
        </p>
      </div>

      <h2>これは病気のサイン?</h2>
      <p>
        多くの場合、「会話が疲れる」は病気ではなく心理構造の表れです。
        ただし、以下のような状態が続いている場合は、医療機関への相談を検討してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">受診を検討したいサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・以前は問題なかったのに、最近急に会話が苦痛になった</li>
          <li>・会話の前に動悸・吐き気・震えが出る</li>
          <li>・会話後に強い消耗で寝込む・身体症状が長期化する</li>
          <li>・人を避けるあまり、生活に支障が出ている</li>
          <li>・「消えてしまいたい」「いなくなりたい」感覚がある</li>
          <li>・以前楽しめた会話が、まったく楽しめなくなった</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらに当てはまる場合、社交不安障害・うつ病・適応障害・燃え尽き症候群などが背景にあることがあります。
        心療内科・精神科に相談することで、医学的な評価と必要な治療が受けられます。
      </p>

      <h2>自分を消耗させない関わり方</h2>
      <p>
        「会話を避ける」と「会話で消耗する」の二択ではなく、その間のグラデーションを持つことが鍵です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分のエネルギー特性を把握する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分はどんな会話で・どれくらい疲れるか」を観察してみてください。
          グループの方が疲れる人もいれば、一対一の方が疲れる人もいます。
          自分の特性を理解することが、無理のない関わり方の出発点です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「会話の量」を調整する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          毎日たくさん会話する必要はありません。
          疲れている日は意識的に会話を減らす・週末は人と会わない日を作る——これらは「<strong>付き合いが悪い</strong>」ではなく「<strong>持続可能な関わり方</strong>」の工夫です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「途中で切り上げる」選択肢を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          飲み会で二次会に行かない・電話を短く切り上げる・LINEの返信を必要最小限にする——
          「全部完璧に応じる」を手放すことが、長期的な関係維持に繋がります。
          「途中で帰る人」は失礼ではなく、自分を守る賢い人です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「充電時間」を意図的に確保する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          特に内向型・HSP気質の方は、人と会った後の<strong>充電時間</strong>を意識的に確保することが必要です。
          一人で過ごす時間・好きなことをする時間・身体を休める時間など、自分なりの充電方法を持っておきましょう。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「他人軸」の構造を整理する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          会話疲れの根本に「他人軸」がある場合、「自分はどう感じているか」より「相手にどう思われるか」が優先されている状態です。
          このパターンは長年の蓄積から来ているため、一人で変えるのは難しいことがあります。専門家と一緒に整理することが、現実的な対処になります。
        </p>
      </div>

      <h2>対人援助職の方への注意</h2>
      <p>
        対人援助職(看護師・介護士・福祉職・心理職・教員など)の方は、業務で「会話=仕事」のため、業務時間外の会話で消耗するのは構造上の自然な反応です。
      </p>

      <p>
        ただし、以下のような状態は<strong>燃え尽きが進行しているサイン</strong>の可能性があります。
      </p>

      <div className="card space-y-1 text-sm text-stone-600 leading-[1.9]">
        <p>・プライベートで人と会う気力がまったく出ない</p>
        <p>・家族との会話も億劫になってきた</p>
        <p>・以前楽しめた飲み会・趣味の集まりが消耗源になっている</p>
        <p>・「もう誰とも話したくない」と感じる</p>
        <p>・休日も人を避けて部屋にこもることが増えた</p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらが続いている場合、<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック</Link>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>で自分の状態を確認してみてください。
        早めの整理が、深刻化を防ぎます。
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
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは?抜け出せない理由と原因</Link></li>
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/other-axis-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸チェック(15項目)</Link></li>
          <li>・<Link to="/articles/boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線チェック(15項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/communication-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">コミュニケーション疲れ</Link></li>
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しさで疲れる</Link></li>
          <li>・<Link to="/articles/acting-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">演じることでの疲れ</Link></li>
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
        <p className="text-[10px] text-stone-500 mb-1">「会話で消耗する自分」と向き合いたい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「会話で疲れる」の背景には、複数の心理構造が絡んでいます。一人で「自分はおかしい」と抱え続けるより、構造を理解した専門家と整理することで、自分に合った関わり方が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/conversation-fatigue"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

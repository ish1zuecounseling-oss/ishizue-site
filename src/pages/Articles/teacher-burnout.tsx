import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "教員のバーンアウトはなぜ起きやすいのですか?",
    a: "「教育者たるもの」という規範の重さ・多方向からの圧力(子ども・保護者・同僚・管理職・社会)・長時間労働の常態化・成果が見えにくい教育の本質、という4つの構造が重なるためです。さらに教員は「子どもへの責任」という独特の重圧を抱え、簡単に「降りる」ことができない仕事です。意志の弱さや能力不足ではなく、職業構造そのものが消耗を生みやすい設計です。",
  },
  {
    q: "「子どもが可愛く思えない」のは教員に向いていない証拠ですか?",
    a: "違います。むしろバーンアウトの典型的なサイン(脱人格化症状)です。以前は可愛いと感じた子どもに対して、感情が動かなくなる・「面倒だ」と感じてしまう状態は、長期的な感情労働の結果として起きる防衛反応です。教員としての資質の問題ではなく、心が「これ以上感じないようにする」と消耗を防ごうとしているサインです。早めの整理が必要です。",
  },
  {
    q: "保護者対応が怖くて出勤できません",
    a: "深刻なサインです。保護者対応への過剰な恐怖は、過去のクレーム体験や、長期的な対人援助の消耗から起きていることが多いです。「逃げ」ではなく、医療機関への受診を検討すべき状態です。出勤できないほどの恐怖がある場合、休職も視野に入れて医師・カウンセラーに相談してください。一人で抱え込まないでください。",
  },
  {
    q: "教員を辞めたいけど踏み切れません",
    a: "「辞めたい」と「辞められない」の間で揺れるのは、バーンアウト状態でよく見られる反応です。判断力が落ちているため、その状態で大きな決断をすると後悔につながりやすいです。まず休職・専門家との対話で状態を整えてから判断するのが安全です。「辞める/続ける」の二択ではなく、休職・配置換え・校種変更など、その間にも選択肢があります。",
  },
  {
    q: "「皆こうやって乗り越えてきた」と言われます",
    a: "これは「サバイバーバイアス」と呼ばれる思考の歪みです。乗り越えられず辞めた人・倒れた人の存在が含まれていない結果論で語られています。あなたの状況は、過去の人の状況とは違います。子どもの背景・保護者対応・社会の教員への期待は年々変化しており、「以前と同じやり方」では乗り越えられない構造になっていることが多いです。「皆こうやって乗り越えた」を内面化しないでください。",
  },
  {
    q: "夏休みに休めば回復しますか?",
    a: "軽度のバーンアウトであれば、長期休暇である程度は回復します。ただし中度以上の場合、夏休みだけでは不十分です。新学期が始まった時点で「もう疲れている」状態が続いているなら、構造的な対処(医療機関の受診・カウンセリング・配置換えなど)が必要なサインです。長期休暇は「リセット」ではなく「気づくきっかけ」として活用してください。",
  },
  {
    q: "教員のバーンアウトと一般的なうつ病はどう違いますか?",
    a: "バーンアウトは仕事との関連が強く、「教室に入る前に身体症状が出る」「夏休みになると少し楽になる」という特徴があります。うつ病は生活全般に症状が及び、休日でも気分の落ち込みが続きます。ただし長期化すると区別が難しくなるため、気になる場合は心療内科・精神科への受診を検討してください。",
  },
]

export default function TeacherBurnout() {
  return (
    <ArticleLayout
      title="教員のバーンアウト——子どもと向き合いながら消耗していくとき【公認心理師】"
      description="教員(小学校・中学校・高校・特別支援学校)のバーンアウトを構造的に解説。4つの特徴的構造・校種別の負荷パターン・教員特有の症状・「辞めたい」と「辞められない」の間・回復への道筋を公認心理師が整理します。「教員に向いていない」と思う前に読んでほしい実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/teacher-burnout"
      date="2026-05-24"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        教員のバーンアウトは、子どもを大切に思うほど深まる構造があります。「教員に向いていない」と思う前に、その消耗が職業構造から起きていることを知ってください。
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
        「以前は子どもが可愛いと思えていたのに、最近は何も感じない」
        「保護者からの連絡が来ると胃が痛くなる」
        「日曜の夜、月曜の朝が来るのが怖い」
        「子どもたちに笑顔を向けるのが、演技みたいになっている」——
      </p>

      <p>
        こうした感覚を持つ教員の方は少なくありません。
        それは<strong>教員のバーンアウト(燃え尽き症候群)</strong>のサインかもしれません。
      </p>

      <p>
        教員のバーンアウトは、看護師や介護士のそれとは異なる特徴を持ちます。
        <strong>「子どもへの責任」「教育者たるもの」という規範の重さ</strong>、
        そして<strong>多方向からの圧力</strong>(子ども・保護者・同僚・管理職・社会)が、
        独特の消耗パターンを生み出します。
      </p>

      <p>
        この記事では、教員のバーンアウトについて、構造的に整理します。
        「自分が弱いから」「教員に向いていないから」と捉える前に、
        職業構造としての消耗を理解することで、回復への道筋が見えてきます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方、出勤できないほどの身体症状がある方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・教員のバーンアウトとは(他職種との違い)</li>
          <li>・教員にバーンアウトが起きやすい<strong>4つの構造</strong></li>
          <li>・教員特有の症状パターン</li>
          <li>・<strong>校種別</strong>(小・中・高・特支・養護)の負荷</li>
          <li>・「辞めたい」と「辞められない」の間</li>
          <li>・回復への道筋(教員特有のアプローチ)</li>
        </ul>
      </nav>

      <h2>教員のバーンアウトとは——「子どもを思うほど深まる」消耗</h2>
      <p>
        バーンアウト(燃え尽き症候群)は、長期的なストレスにより心身のエネルギーが枯渇した状態を指します。
        中核症状は<strong>情緒的消耗・脱人格化・達成感低下</strong>の3つです。
      </p>

      <p>
        教員の場合、これらの症状は<strong>「子どもを思うほど深まる」</strong>という独特の構造を持ちます。
        真面目に子どもと向き合う教員ほど、消耗が深まりやすい——
        これが教員バーンアウトの最大の特徴です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">教員のバーンアウトの中核症状</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>情緒的消耗</strong>——朝起きるのがつらい・休日も気持ちが切り替わらない・以前感じた感情が動かない</li>
          <li>② <strong>脱人格化</strong>——「子どもが可愛く思えない」「機械的に対応している」「保護者対応が苦痛」</li>
          <li>③ <strong>達成感低下</strong>——「自分の仕事に意味があるのか」「何をやっても変わらない」「教員に向いていない」</li>
        </ul>
      </div>

      <h2>他職種との違い——教員特有の構造</h2>
      <p>
        看護師・介護士のバーンアウトとの対比で、教員の特徴がより明確に見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">職種別の特徴</p>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-stone-700 mb-1">看護師</p>
            <p className="text-stone-600 leading-[1.9]">急性的トラウマ・短期〜中期の関係・身体労働の負荷</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700 mb-1">介護士</p>
            <p className="text-stone-600 leading-[1.9]">慢性的に蓄積・長期的関係(数年〜10年)・看取りの繰り返し</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700 mb-1">教員</p>
            <p className="text-stone-600 leading-[1.9]"><strong>慢性的かつ多方向</strong>・関係は1年単位で更新・<strong>「子どもへの責任」という独特の重圧</strong>・長時間労働の常態化</p>
          </div>
        </div>
      </div>

      <p>
        教員の独自性は、<strong>「相手が子ども」「責任が将来に及ぶ」</strong>という点にあります。
        看護師のケアは「今この瞬間」が中心ですが、教員の関わりは「<strong>10年後20年後の子どもの人生</strong>」に影響します。
        この時間軸の長さが、独特のプレッシャーを生みます。
      </p>

      <h2>教員にバーンアウトが起きやすい4つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「教育者たるもの」という規範の重さ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「教員は熱意があるべき」「子どものために自分を犠牲にできるのが教員」「弱音を吐く教員は失格」——
          こうした規範が、明文化されないまま教員文化の中に存在します。
          結果として、限界を超えても「**自分が頑張ればいい**」と内面化し、サインに気づくことが遅れます。
          この規範は、個人を超えた使命感として作動するため、自分で「辞める」「休む」と決めることへの強い罪悪感を生みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 多方向からの圧力</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          教員は<strong>5方向からの期待・要求</strong>を同時に受けます。
        </p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9] mt-2">
          <li>・<strong>子ども</strong>:学習支援・生活指導・心のケア</li>
          <li>・<strong>保護者</strong>:成績向上・トラブル対応・連絡応答</li>
          <li>・<strong>同僚</strong>:学年協力・行事運営・空気を読む</li>
          <li>・<strong>管理職</strong>:報告・書類・成果</li>
          <li>・<strong>社会</strong>:メディアの教員批判・社会からの過大な期待</li>
        </ul>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          これら全てに応えようとすると、心身が破綻します。
          看護師や介護士よりも「対応すべき関係者の数」が多く、これが特徴的な負荷を生みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 長時間労働の常態化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          授業準備・採点・部活動・行事準備・保護者対応・書類仕事・会議——
          これらが定時内に収まることはほぼなく、「<strong>持ち帰り仕事が当たり前</strong>」になっている学校が多いです。
          「<strong>給特法</strong>」により残業代が出ない構造も、長時間労働を常態化させる要因です。
          休めない・回復できない状態が長期化することで、バーンアウトに陥りやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「成果が見えにくい」教育の本質</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          教育の成果は、<strong>短期的には見えにくい</strong>という本質的な特徴があります。
          「今やったことが10年後の子どもの人生にどう影響するか」は、リアルタイムでは見えません。
          結果、努力しても「これでよかったのか」という不確実性が常に残り、達成感を感じにくい構造があります。
          「<strong>自分の仕事に意味があるのか</strong>」が見えなくなりやすく、達成感低下に直結します。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>教員特有の症状パターン</h2>
      <p>
        教員のバーンアウトは、以下のような独特の症状パターンを示すことがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「子どもが可愛く思えない」自責</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以前は可愛いと思えた子どもに対して、感情が動かなくなる・「面倒だ」と感じてしまう——
          これは脱人格化症状であり、<strong>正常な防衛反応</strong>です。
          長期的な感情労働の結果として、心が「これ以上感じないようにする」と消耗を防ごうとしている状態です。
          しかし教員自身は「教員失格だ」「子どもに申し訳ない」という強い自責に陥り、さらに消耗を深めます。
          この自責こそが、回復を遅らせる最大の要因です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">保護者対応への過剰な恐怖</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          保護者からの連絡が来ると胃が痛くなる・電話の着信音で動悸がする・保護者対応の日は朝から憂鬱——
          これらは過去のクレーム体験のフラッシュバック反応や、長期的な対人援助の消耗から起きていることが多いです。
          「モンスターペアレント」という言葉が一般化したことで、保護者対応への過剰な警戒が常態化しやすく、二次受傷的な側面もあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">学級経営への自信喪失</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「以前は上手く回せていた学級が、今年はどうしても上手くいかない」「子どもたちが言うことを聞かない」と感じる——
          これは学級経営スキルの問題ではなく、教員自身のエネルギー枯渇のサインです。
          バーンアウトが進むと、「子どもとの関係を作る」エネルギーが出にくくなり、結果として学級が荒れやすくなる悪循環が生まれます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「教員に向いていない」という確信</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バーンアウトが深まると、「自分は教員に向いていない」「他の仕事を選ぶべきだった」という確信めいた思考が現れます。
          しかしこれは<strong>客観的な事実ではなく、消耗による思考の歪み</strong>であることが多いです。
          回復してからこの思考を再評価すると、「あの時はそう思っていたが、今は違う」となるケースが大半です。
          消耗状態での「向いていない」という判断は信頼しすぎないでください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">日曜の夜・長期休暇明けの恐怖</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「サザエさん症候群」とも呼ばれますが、教員ではこれが極端に強くなることがあります。
          日曜夜・夏休み明け・冬休み明けに動悸・吐き気・涙が出る——
          これは「学校という場」自体が条件反射的にストレス反応を引き起こしている状態であり、深刻なサインです。
        </p>
      </div>

      <h2>校種別に見る負荷の特徴</h2>
      <p>
        教員のバーンアウトは、校種によって発生しやすいパターンに違いがあります。
        あなたの環境に合わせて読んでください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">小学校</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>学級担任の負担</strong>が中心。一日中同じ子どもたちと過ごし、教科指導・生活指導・給食・掃除・休み時間まで全て関わります。
          発達課題のある児童・不登校児童・家庭環境の困難な児童など、多様なニーズに一人で対応する負担が大きいです。
          「<strong>逃げ場がない</strong>」のが小学校担任の特徴で、保護者対応も含めて休まる時間がない構造があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">中学校</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>部活動指導の負担と思春期対応</strong>が中心。土日も部活動でつぶれることが多く、長時間労働が常態化しやすい校種です。
          思春期の子どもへの対応は感情的にも難しく、いじめ・不登校・問題行動への対応が複雑化します。
          高校受験のプレッシャーもあり、進路指導の責任が重くのしかかります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">高校</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>進学・受験プレッシャー</strong>と<strong>多様化する生徒対応</strong>。
          進学校では受験結果という明確な「評価」がつきまとい、教員自身も評価される構造があります。
          多様化した高校(困難校・通信制など)では、生徒の家庭環境・経済問題・メンタルヘルス課題への対応が中心になり、別種の消耗が起きます。
          専門科目の指導と人格教育の両方を求められる構造的な難しさがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">特別支援学校</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>身体的・精神的負担の両方</strong>が大きい校種。重度の障害のある子どもへの身体介助・行動障害への対応・医療的ケアなど、教員の役割が広いです。
          一人ひとりへの対応が深く、関係性も長期化するため、介護士に近い消耗パターンを示すこともあります。
          保護者(障害のあるお子さんを育てている家族)との関係性も深く、家族の状況に近接することで二次受傷的な影響を受けることもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">養護教諭・スクールカウンセラー</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>「最後のセーフティネット」</strong>としての孤立。
          学校で唯一(または少数)の専門職として、いじめ・自傷・虐待・希死念慮など、最も重い相談を引き受けます。
          職場内に同職種がいないため孤立しやすく、スーパービジョンも不足しがちです。
          二次受傷のリスクが高く、慢性的な消耗に陥りやすい立場です。
        </p>
      </div>

      <h2>「辞めたい」と「辞められない」の間</h2>
      <p>
        バーンアウトが進むと、多くの教員が「<strong>辞めたい</strong>」気持ちと「<strong>辞められない</strong>」気持ちの間で揺れます。
        この揺れ自体が、消耗をさらに深めます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「辞めたい」と感じる理由</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・もう限界を超えている感覚</li>
          <li>・「自分が向いていない」という確信</li>
          <li>・このまま続けたら倒れる予感</li>
          <li>・子どもへの罪悪感(こんな状態で関わってよいのか)</li>
          <li>・他の仕事への憧れ</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「辞められない」と感じる理由</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・「教育者としての使命」を放棄する罪悪感</li>
          <li>・教員以外のスキルがないという不安</li>
          <li>・経済的な不安(再就職への懸念)</li>
          <li>・「途中で投げ出した」という評価への恐れ</li>
          <li>・子どもたちへの責任感</li>
          <li>・公務員という安定への執着</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        どちらの気持ちも、両方とも事実です。「<strong>辞める/続ける</strong>」の二択で考えると消耗が深まります。
        まず<strong>状態を回復させる</strong>ことを優先し、判断力が戻ってから決断するのが安全です。
        その間にも、休職・配置換え・校種変更・産業医面談など、複数の選択肢があります。
      </p>

      <h2>回復への道筋——教員特有のアプローチ</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「教育者規範」を一旦手放す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「教員は子どものために頑張るべき」という規範を一旦手放すことが、回復の入口です。
          あなたは「教員」である前に「一人の人間」です。
          自分を犠牲にして子どものために尽くす——これは美徳のように見えて、長期的には子どもにとっても良くない結果を生みます。
          消耗した教員より、安定した教員の方が、子どもにとって良い影響を与えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 受診・休職を選択肢に入れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          身体症状(不眠・動悸・頭痛など)が続いている場合、心療内科・精神科への受診を検討してください。
          教員には「<strong>病気休暇</strong>」「<strong>病気休職</strong>」の制度があり、診断書があれば取得できます。
          「迷惑をかける」と思うかもしれませんが、倒れてから休む方が周囲への影響は大きくなります。
          早めの休養が、最も効率的な対処です。詳しくは<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「学校以外の自分」を取り戻す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          教員の多くは、自分が「教員」という役割と一体化しています。
          これが「<strong>役割同一化</strong>」と呼ばれる状態で、教員失格=自分の人生失格、と感じやすくなります。
          回復のためには、「教員ではない自分」の側面(趣味・家族・友人・身体感覚など)を意識的に育てることが重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「校種・配置を変える」選択肢を検討</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「教員を辞める」だけが選択肢ではありません。<strong>校種を変える</strong>(小学校から中学校へ等)、<strong>担当を変える</strong>(担任から専科へ等)、<strong>校務分掌を変える</strong>、<strong>異動を希望する</strong>、など複数の選択肢があります。
          負荷を生んでいる構造を変えるだけで、回復するケースも多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「教員の構造を理解した」専門家との対話</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一般のカウンセラーに「教員で疲れている」と話しても、業界特有の構造(校種・部活・保護者・校務分掌・人事異動)が伝わらないことがあります。
          教員・支援職の構造を理解した専門家を選ぶことで、整理の精度が変わります。
        </p>
      </div>

      <h2>一人で抱え込まないために</h2>
      <p>
        教員は「自分が支える側」という意識が強く、自分のケアを後回しにしがちです。
        以下の選択肢を活用してください。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 同僚・先輩教員との共有</p>
          <p className="text-stone-600 leading-[1.9]">職場に話せる相手がいれば、状況を共有することが第一歩です。完璧な答えを求めず、ただ話すだけでも消耗が和らぎます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 学校医・産業医</p>
          <p className="text-stone-600 leading-[1.9]">学校に学校医がいる場合、相談できます。守秘義務があり、職場に勝手に情報が伝わることはありません。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 教職員のメンタルヘルス相談窓口</p>
          <p className="text-stone-600 leading-[1.9]">各都道府県の教育委員会には教職員向けの相談窓口があります。匿名で相談できることが多いです。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④ 心療内科・精神科</p>
          <p className="text-stone-600 leading-[1.9]">身体症状が強い場合、出勤が困難な場合は医療機関へ。診断書があれば病気休暇・病気休職を取得できます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">⑤ 職場外のカウンセラー</p>
          <p className="text-stone-600 leading-[1.9]">職場内で話しづらい場合、職場外のカウンセラーに整理してもらう方法があります。「教員の構造を理解した専門家」を選ぶことで、安心して話せます。</p>
        </div>
      </div>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・日曜の夜・出勤前に動悸・吐き気・涙が出る</p>
        <p>・「子どもが可愛く思えない」自分を責めている</p>
        <p>・保護者対応への過剰な恐怖がある</p>
        <p>・「教員を続けられない」が口癖になっている</p>
        <p>・長期休暇明けにすでに疲れている</p>
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
        <p className="font-medium text-stone-700 mb-2">バーンアウトを深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link></li>
          <li>・<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">他職種の関連記事</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/nurse-secondary-trauma" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">看護師の二次受傷</Link></li>
          <li>・<Link to="/articles/care-worker-secondary-trauma" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">介護士の二次受傷</Link></li>
          <li>・<Link to="/articles/teacher-mental-health" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">教員のメンタルヘルス</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">回復・対処について</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息に必要な7つの要素</Link></li>
          <li>・<Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link></li>
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
        <p className="text-[10px] text-stone-500 mb-1">子どもと向き合いながら消耗してきた教員の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          教員のバーンアウトは、職業構造から起きる正当な反応です。「自分が弱いから」ではありません。教員・支援職の構造を理解した専門家として、整理をお手伝いできます。
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
          <li>・お住まいの<strong>都道府県教育委員会の教職員相談窓口</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/teacher-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

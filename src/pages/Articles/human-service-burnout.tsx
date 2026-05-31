import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "対人援助職とは誰のことですか?",
    a: "対人援助職とは、人の苦しみ・困難・成長に直接かかわる仕事の総称です。看護師・介護士・社会福祉士・精神保健福祉士・心理職・教員・保育士・スクールカウンセラー・医師・リハビリ職など、相手の状態に応じて感情・関係性を使い続ける職業が含まれます。共通するのは「感情労働」と「他者の苦痛に近接する」という構造です。",
  },
  {
    q: "なぜ対人援助職は燃え尽きやすいのですか?",
    a: "感情労働の蓄積・共感疲労・役割同一化・「弱音を吐けない」職場文化という4つの構造が重なるためです。さらに、成果が見えにくい・正解がない仕事のため、「これでよかったのか」という不確実性が常にあります。意志の弱さや能力不足ではなく、職業構造そのものが消耗を生みやすい設計です。",
  },
  {
    q: "燃え尽きとうつ病はどう違いますか?",
    a: "燃え尽き(バーンアウト)は仕事との関連が強く、「仕事を離れると少し楽になる」という特徴があります。うつ病は生活全般に症状が及び、休日でも気分の落ち込みが続きます。ただし燃え尽きを放置するとうつ病に移行することがあるため、早めの整理が重要です。",
  },
  {
    q: "「自分は燃え尽きていない」と思っているけど大丈夫?",
    a: "燃え尽きの特徴の一つは「自覚しにくいまま進行する」点です。「まだ大丈夫」「自分より大変な人がいる」と思っているうちに、ある日突然動けなくなる——これが典型的なパターンです。「燃え尽きていない自分」を確認するためにも、定期的なセルフチェックをおすすめします。",
  },
  {
    q: "「弱音を吐けない」職場文化があると、どうすればいいですか?",
    a: "職場の中で話せない場合、職場の外に「話せる場」を持つことが現実的な選択になります。カウンセラー・産業医・スーパーバイザーなど、守秘義務のある専門家に整理してもらう方法があります。「相談すること=能力不足」という認識自体が、実は燃え尽きを進行させる文化的要因です。",
  },
  {
    q: "燃え尽きから回復するには?",
    a: "個人レベル(休息・セルフケア)だけでは不十分なことが多いです。職業構造(役割・職場文化・人手不足など)を整理した上で、自己機能(感じる・望む・選ぶ)を回復させていくプロセスが必要です。一人で抱え込まず、構造を理解した専門家との対話が回復を早めます。",
  },
  {
    q: "燃え尽きてしまったら、もう対人援助職はやめるべき?",
    a: "判断は急がない方がよいです。燃え尽き状態では判断力が低下しているため、その状態で大きな決断をすると後悔につながりやすいです。まず休息と構造の整理を進め、回復してから「続けるか・離れるか」を判断するのが安全です。「辞めるか続けるか」の二択ではなく、その間の選択肢(休職・部署異動・業務調整など)もあります。",
  },
]

export default function HumanServiceBurnout() {
  return (
    <ArticleLayout
      title="対人援助職の燃え尽き——なぜケアする側ほど消耗するのか【公認心理師】"
      description="看護師・介護士・福祉職・心理職・教員など対人援助職の燃え尽き(バーンアウト)について、構造的に解説。4つの構造的要因・職種別の特徴・回復の道筋を公認心理師が整理します。「ケアする側ほど消耗する」のは性格ではなく職業構造の問題です。"
      url="https://www.ishizue-counseling.jp/articles/human-service-burnout"
      date="2026-05-21"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        ケアする側ほど消耗するのは、性格や弱さではなく、対人援助職という職業構造そのものから生まれる現象です。
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
        看護師・介護士・社会福祉士・心理職・教員——
        対人援助職と呼ばれる仕事に就いている方の多くが、
        「気づいたら消耗していた」「以前のように人に向き合えなくなった」「仕事を続けられないかもしれない」
        と感じる時期を経験します。
      </p>

      <p>
        これは<strong>「燃え尽き(バーンアウト)」</strong>と呼ばれる現象で、
        対人援助職に特に起こりやすいことが心理学研究で示されています。
        意志の弱さや能力不足ではなく、<strong>職業構造そのものが消耗を生みやすい設計</strong>です。
      </p>

      <p>
        この記事では、対人援助職の燃え尽きが起きる構造的な理由・職種別の特徴・回復の道筋を、
        公認心理師の臨床経験から整理します。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        燃え尽き症候群そのものの定義・症状・回復までの全体像は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>にまとめています。本記事はそのうち「対人援助職」に絞って構造を掘り下げます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・対人援助職とは何か(範囲・特徴)</li>
          <li>・対人援助職に燃え尽きが起きる<strong>4つの構造</strong></li>
          <li>・燃え尽き・共感疲労・うつの違い</li>
          <li>・職種別の燃え尽きパターン(看護・介護・福祉・教育)</li>
          <li>・燃え尽きが起きる前のサイン</li>
          <li>・回復の道筋(個人レベル・構造レベル)</li>
          <li>・一人で抱え込まないための選択肢</li>
        </ul>
      </nav>

      <h2>対人援助職とは——「ケアする側」の職業群</h2>
      <p>
        対人援助職(human service professional / helping profession)とは、
        <strong>人の苦しみ・困難・成長に直接かかわる仕事の総称</strong>です。
        相手の状態に応じて感情・関係性・専門性を使い続けるという共通点があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">主な対人援助職</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>医療</strong>:医師・看護師・薬剤師・リハビリ職・救急隊員</li>
          <li>・<strong>福祉</strong>:介護士・社会福祉士・精神保健福祉士・ケアマネジャー</li>
          <li>・<strong>心理</strong>:公認心理師・臨床心理士・スクールカウンセラー</li>
          <li>・<strong>教育</strong>:教員・保育士・特別支援教育担当者</li>
          <li>・<strong>その他</strong>:相談員・ピアサポーター・更生保護関係者</li>
        </ul>
      </div>

      <p>
        これらに共通するのは、<strong>「他者の苦痛に近接する」</strong>「<strong>感情を職業的に使う</strong>(感情労働)」という構造です。
        この構造が、燃え尽きの背景にあります。
      </p>

      <h2>対人援助職に燃え尽きが起きる4つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          対人援助職は、自分の本来の感情を抑え、職業的に求められる感情を表現し続ける必要があります。
          利用者に対して常に穏やかで、共感的で、専門的でなければなりません。
          この「感情を演じる」状態が長期化すると、感情の麻痺・自己疎外・抑うつに進みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>と二次受傷</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他者の苦痛に共感し続けることで、支援者自身が情緒的・身体的に消耗していく現象です。
          特にトラウマを抱えた人を支援する場合、支援者にもPTSD様の症状(侵入・回避・過覚醒)が起きることがあります。
          これは「ケアの代償(cost of caring)」とも呼ばれます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 役割同一化(役割依存)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者としての自分」が「自分」全体と同一化していくと、役割上の失敗が「自分全体の否定」として感じられます。
          <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>が低下し、役割以外の自己側面(趣味・関係性・身体感覚)が縮小していきます。
          結果として「支援者として完璧でなければ価値がない」という前提が定着します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「弱音を吐けない」職場文化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          対人援助職の職場には、「自分が頑張るべき」「弱音は禁物」という暗黙の文化が残っていることがあります。
          結果として、限界が来てもサインを無視し続け、身体が反応として表現するまで気づけない構造があります。
          <Link to="/articles/cannot-consult-colleagues" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">同僚に相談できない</Link>状態が定着します。
        </p>
      </div>

      <p>
        この4つの構造は<strong>独立しているのではなく、相互に絡み合っています</strong>。
        感情労働の蓄積が共感疲労を深め、役割同一化が「弱音を吐けない」文化を強化する——
        だからこそ「気合いで乗り切る」が通用しないのです。
      </p>

      <LineCtaCompassion />

      <h2>燃え尽き・共感疲労・うつの違い</h2>
      <p>
        対人援助職の消耗を理解するには、似た概念の違いを把握することが役立ちます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">燃え尽き(バーンアウト)</p>
          <p className="text-stone-600 leading-[1.9]">
            長期的な職業上の過負荷が原因。<strong>情緒的消耗・脱人格化・達成感の低下</strong>が3要素。
            仕事に関連した消耗が中心で、仕事を離れると少し楽になります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">共感疲労(コンパッション・ファティーグ)</p>
          <p className="text-stone-600 leading-[1.9]">
            他者の苦痛への共感が原因。<strong>侵入症状・回避・過覚醒</strong>が特徴。
            1995年にチャールズ・フィグレーが提唱した、より特異的な消耗です。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">うつ病</p>
          <p className="text-stone-600 leading-[1.9]">
            生活全般に症状が及び、休日でも回復しにくい。<strong>強い悲しみ・絶望・自責</strong>が中心。
            職業との関連を超えて広がります。
          </p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これら3つは独立しているのではなく、<strong>連続的に進行する</strong>ことが多いです。
        共感疲労が長期化すると燃え尽きに発展し、燃え尽きを放置するとうつ病に移行することがあります。
        だからこそ早めに気づくことが重要です。
      </p>

      <h2>職種別に見る燃え尽きパターン</h2>
      <p>
        対人援助職の燃え尽きは、職種によって発生しやすいパターンに違いがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">看護師の燃え尽き</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          交代勤務・人手不足・命の重みという3つの負荷が特徴。
          身体的疲労と心理的疲労が同時進行しやすく、急性的に進む傾向があります。
          詳細は<Link to="/articles/nurse-compassion-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">看護師の共感疲労</Link>。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">介護職の燃え尽き</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長期的関係性の蓄積・看取りの繰り返し・社会的評価の低さが背景。
          慢性的・じわじわと進行することが多く、本人が気づきにくい特徴があります。
          詳細は<Link to="/articles/care-worker-compassion-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">介護士の共感疲労</Link>。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">福祉職(社会福祉士・精神保健福祉士)の燃え尽き</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          制度の限界に直面することによる無力感が特徴。
          「やれることが少ない」「制度では救えない」という体験が積み重なり、達成感の低下に直結します。
          ケースワークの結果が見えにくいことも要因です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">心理職の燃え尽き</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          二次受傷リスクが高い職種。トラウマを扱う場面が多く、自分自身もケアの対象になりにくい立場です。
          スーパービジョンが不足すると孤立し、慢性的な消耗に進みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">教員・保育士の燃え尽き</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長時間労働・保護者対応・「子どものために」というプレッシャーが背景。
          「教育者として完璧でなければ」という規範が、自己ケアを後回しにさせます。
          詳細は<Link to="/articles/teacher-mental-health" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">教員のメンタルヘルス</Link>。
        </p>
      </div>

      <h2>燃え尽きが起きる前のサイン</h2>
      <p>
        燃え尽きは突然起こるのではなく、徐々に進行します。
        以下のサインが出ている場合、すでに進行が始まっている可能性があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">情緒的消耗のサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・朝、仕事に行くのがつらい</li>
          <li>・休日も気持ちが切り替わらない</li>
          <li>・以前は感じた喜びが薄くなった</li>
          <li>・感情が麻痺している感覚がある</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">脱人格化のサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・利用者を「面倒だ」と感じる</li>
          <li>・機械的に対応している感覚がある</li>
          <li>・人と関わるのが億劫</li>
          <li>・「この人のことはどうでもいい」と感じることがある</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">達成感低下のサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・「どうせ何をやっても変わらない」と感じる</li>
          <li>・自分の仕事に意味を感じられない</li>
          <li>・小さなミスで強く落ち込む</li>
          <li>・「向いていない」と感じる頻度が増えた</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        サインに気づくこと自体が、すでに回復への第一歩です。
        ご自身の状態をより詳しく確認したい場合は、<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link>や
        <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link>もご活用ください。
      </p>

      <h2>回復の道筋——個人レベルと構造レベル</h2>
      <p>
        燃え尽きからの回復は、「個人の努力」だけでは難しいケースが多いです。
        個人レベル(セルフケア)と構造レベル(職業・職場・関係性)の両方からアプローチする必要があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">個人レベルのアプローチ</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>休息の質を上げる</strong>(<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">7つの要素</Link>から自分に不足しているものを補う)</li>
          <li>・<strong>自己機能の回復</strong>(感じる・望む・選ぶ機能を取り戻す)</li>
          <li>・<strong>セルフコンパッション</strong>を育てる(自分への厳しさを緩める)</li>
          <li>・<strong>身体への注意</strong>(運動・睡眠・栄養を整える)</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">構造レベルのアプローチ</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>境界線を整理する</strong>(感情・時間・責任の境界を明確に)</li>
          <li>・<strong>役割同一化を緩める</strong>(支援者以外の自己側面を増やす)</li>
          <li>・<strong>職場環境を調整する</strong>(業務量・関係性・配置の調整)</li>
          <li>・<strong>専門家との対話</strong>(構造を外から整理する)</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        どちらか一方だけでは不十分です。個人レベルだけだと「セルフケアしているのに回復しない」状態になります。
        構造レベルだけだと「環境を変えても同じ消耗を繰り返す」ことになります。
        両方を並行して進めることが、持続可能な回復につながります。
      </p>

      <h2>一人で抱え込まないための選択肢</h2>
      <p>
        対人援助職の燃え尽きを一人で乗り越えようとすると、回復が長引きます。
        以下の選択肢を検討してください。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 同僚・上司への共有</p>
          <p className="text-stone-600 leading-[1.9]">職場内に信頼できる相手がいれば、状況を共有することが第一歩です。話す内容がまとまっていなくても構いません。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 産業医・産業保健スタッフ</p>
          <p className="text-stone-600 leading-[1.9]">職場に産業医がいる場合、守秘義務があるため安心して相談できます。職場への配慮事項の伝達も依頼できます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ スーパービジョン</p>
          <p className="text-stone-600 leading-[1.9]">心理職・福祉職など、スーパービジョンの仕組みがある職種では積極的に活用を。経験ある同職種からの視点が、構造の整理を助けます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④ カウンセリング(職場外)</p>
          <p className="text-stone-600 leading-[1.9]">職場内で話せない場合、職場外のカウンセラーに整理してもらう方法があります。「対人援助職の構造を理解した専門家」を選ぶことが重要です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">⑤ 心療内科・精神科</p>
          <p className="text-stone-600 leading-[1.9]">身体症状(不眠・動悸・吐き気など)が続く場合、医療機関の受診を検討してください。早めの受診が重症化を防ぎます。</p>
        </div>
      </div>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「もう限界かもしれない」と思うことが増えた</p>
        <p>・朝、出勤前に身体症状(動悸・吐き気・涙)が出る</p>
        <p>・休日も仕事のことが頭から離れない</p>
        <p>・「自分は対人援助職に向いていない」と思う頻度が増えた</p>
        <p>・利用者・同僚への感情が以前と変わってしまった</p>
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
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
          <li>・<Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは</Link></li>
          <li>・<Link to="/articles/self-compassion-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフコンパッションとは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-depression-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職うつチェック(15項目)</Link></li>
          <li>・<Link to="/articles/helper-stress-check-tool" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職ストレスチェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">回復について</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/compassion-fatigue-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労からの回復方法</Link></li>
          <li>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息に必要な7つの要素</Link></li>
          <li>・<Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフケアが効かない理由</Link></li>
        </ul>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">対人援助職として消耗している方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          対人援助職の消耗は、職業構造そのものから生まれます。一人で乗り越えようとするよりも、構造を理解した専門家と対話することで、回復が現実的になります。「対人援助職の構造を理解する」専門家として、お手伝いできます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/human-service-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

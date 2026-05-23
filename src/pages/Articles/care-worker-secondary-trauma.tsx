import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "介護士でも二次受傷は起こるのですか?",
    a: "起こります。むしろ介護士は二次受傷のリスクが高い職種です。看取りの繰り返し・認知症の進行を見続ける・暴言や暴力を受ける・長期的な関係性の喪失など、介護特有のトラウマ的場面に日常的に近接します。「慣れる」ことで対応できているように見えても、心身には影響が蓄積されています。",
  },
  {
    q: "介護士の二次受傷と看護師の二次受傷の違いは?",
    a: "看護師は急性的・短期的なトラウマ場面が多いのに対し、介護士は慢性的・長期的に蓄積するパターンが特徴的です。何年も関わってきた利用者の看取り、認知症で人が変わっていく姿の継続的な目撃、家族のような関係性での喪失体験など、「じわじわと積み重なる」消耗が中心です。フラッシュバックよりも、慢性的な無力感や疲弊が前面に出ることが多いです。",
  },
  {
    q: "介護士の二次受傷と燃え尽き(バーンアウト)はどう違いますか?",
    a: "二次受傷は「利用者の苦痛・喪失への近接」が原因で、PTSD様症状(侵入・回避・過覚醒)が特徴です。バーンアウトは「長期的な職業ストレス」が原因で、情緒的消耗・脱人格化・達成感低下が中心です。介護士では両者が重なって進行することが多く、二次受傷から燃え尽きへ移行するパターンも見られます。",
  },
  {
    q: "「自分は鈍くなった」「何も感じなくなった」のは二次受傷ですか?",
    a: "可能性が高いです。二次受傷の回避症状の一つに「感情の麻痺」があります。利用者の苦痛に共感しすぎて消耗した結果、心が「これ以上感じないようにする」と防衛反応を起こしている状態です。「冷たくなった」「鈍くなった」は性格の変化ではなく、長期的な近接による正常な反応であることが多いです。",
  },
  {
    q: "「自分の感情を持ち込んではいけない」と教わってきましたが、その通りでしょうか?",
    a: "プロとしての姿勢として大事な側面はありますが、それを「自分は何も感じてはいけない」と内面化すると、二次受傷のリスクが高まります。感情を「持ち込まない」のと「感じない」のは違います。職業的に表現を抑えるのは適切ですが、自分の中で感情を認識し処理することは必要です。「感じる」を禁じると、心身が代わりに反応(身体症状・突発的な離職など)を起こします。",
  },
  {
    q: "介護職を続けられるかわかりません",
    a: "二次受傷が深い状態では、判断力が低下しているため大きな決断は急がない方が良いです。まず休養と構造の整理を進め、回復してから「続ける/離れる」を判断するのが安全です。また「介護職を続ける/辞める」の二択ではなく、その間にも休職・部署異動・業態変更(特養から訪問へなど)・施設変更など、複数の選択肢があります。一人で決めず、専門家と相談しながら整理することをおすすめします。",
  },
  {
    q: "二次受傷は治りますか?",
    a: "適切な対処をすれば回復します。ただし「忘れよう」「気合いで乗り切ろう」とすると悪化することがあります。トラウマ反応への適切なアプローチ(EMDR・トラウマフォーカスト認知行動療法など)や、構造の整理を通じて、症状が和らぎ、再発予防の力もついていきます。介護士の場合、「現場から完全に離れる」のではなく「関わり方を変える」アプローチが有効なことも多いです。",
  },
]

export default function CareWorkerSecondaryTrauma() {
  return (
    <ArticleLayout
      title="介護士の二次受傷(代理受傷)——利用者の苦しみを長年引き受けるとき【公認心理師】"
      description="介護士に多い二次受傷(セカンダリートラウマ・代理受傷)について公認心理師が解説。特養・老健・訪問・グループホーム・デイなど業態別の特徴・看護師との違い・慢性的な消耗のパターン・回復への道筋を整理。長年利用者の苦しみを引き受けてきた介護士のための実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/care-worker-secondary-trauma"
      date="2026-05-22"
      tags={["compassion", "burnout", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        介護士の二次受傷は、急性的な衝撃ではなく、長年の関わりの中で「じわじわと積み重なる」のが特徴です。「気づいた時には心が動かなくなっていた」という体験は、性格の変化ではなく、職業構造から起きる正当な反応です。
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
              障害福祉15年(現役のサービス管理責任者・施設マネージャー)・カウンセリング累計300名以上の臨床経験／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        「何年も担当してきた利用者の看取りが続いている」「認知症で人が変わっていく姿を見続けている」「暴言・暴力を受けることが当たり前になっている」「以前のように利用者に向き合えない自分がいる」——
      </p>

      <p>
        こうした感覚を持つ介護士の方は少なくありません。それは<strong>「介護士の二次受傷(secondary traumatic stress)」</strong>と呼ばれる現象かもしれません。
      </p>

      <p>
        看護師の二次受傷が「急性的・短期的」な側面が強いのに対し、介護士の二次受傷は<strong>「慢性的・長期的に蓄積する」</strong>のが特徴です。
        「気合いで乗り切る」ことができてしまうため、自分でも気づかないまま深まっていく傾向があります。
      </p>

      <p>
        この記事では、介護士の二次受傷について、現場知と公認心理師の臨床経験から整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ フラッシュバック・解離症状・希死念慮が日常的に出ている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・介護士の二次受傷とは(看護師との違い)</li>
          <li>・介護士に二次受傷が起きやすい<strong>5つの構造</strong></li>
          <li>・<strong>業態別</strong>(特養・老健・訪問・グループホーム・デイ)のパターン</li>
          <li>・介護士に多い症状の特徴(慢性的な無力感・感情麻痺)</li>
          <li>・共感疲労・燃え尽きとの違い</li>
          <li>・介護士特有の<strong>回復への壁</strong>と道筋</li>
        </ul>
      </nav>

      <h2>介護士の二次受傷とは——「じわじわ蓄積する」消耗</h2>
      <p>
        二次受傷(secondary traumatic stress / STS)とは、
        <strong>他者のトラウマに近接することで支援者自身にPTSD様の症状が現れる現象</strong>です。
        介護士の場合、これは<strong>長期間にわたって少しずつ蓄積していく</strong>のが特徴です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">介護士の二次受傷の3つの中核症状</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>侵入症状</strong>——亡くなった利用者の顔がふと頭をよぎる・夢に出てくる</li>
          <li>② <strong>回避症状</strong>——感情の麻痺・特定の利用者に向き合いたくない・「もう感じないようにしたい」</li>
          <li>③ <strong>過覚醒</strong>——夜眠れない・常に緊張している・物音に過剰反応</li>
        </ul>
      </div>

      <p>
        看護師の二次受傷と異なり、介護士では<strong>「②回避症状(特に感情麻痺)」が前面に出る</strong>ことが多いです。
        「以前のように温かく接することができなくなった」「鈍くなった」「冷たくなった」——
        これらは性格の変化ではなく、長期的な近接の結果としての防衛反応です。
      </p>

      <h2>看護師との違い——慢性的・関係的・社会的</h2>
      <p>
        看護師の二次受傷との対比で、介護士の特徴がより明確に見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">看護師と介護士の二次受傷の対比</p>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-stone-700 mb-1">看護師</p>
            <p className="text-stone-600 leading-[1.9]">急性的なトラウマ場面が多い・関係は短期〜中期・フラッシュバックが前面・社会的評価は高い</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700 mb-1">介護士</p>
            <p className="text-stone-600 leading-[1.9]">慢性的に蓄積するパターン・関係は<strong>数年〜10年以上</strong>に及ぶ・<strong>感情麻痺と慢性的無力感</strong>が前面・社会的評価が低く誤解されやすい</p>
          </div>
        </div>
      </div>

      <p>
        この違いは重要です。看護師向けの対処法をそのまま介護士に当てはめても、効果が出にくいことがあります。
        介護士には介護士の構造に合わせた対処が必要です。
      </p>

      <h2>介護士に二次受傷が起きやすい5つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 長期的関係の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護士は同じ利用者と<strong>数年〜10年以上</strong>関わることがあります。
          一人の人生の最終章を見届ける関係性は、深い愛着とともに、深い喪失感をもたらします。
          そして、ある利用者の看取りが終わっても、また別の利用者との長期的関係が始まる——これが繰り返されることで、消耗が蓄積していきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 看取りの繰り返し</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          特に特養・グループホーム・在宅介護では、看取りが日常的に起こります。
          1年に何人もの方を見送ることがあり、「悲しむ時間」を十分に取れないまま次の業務に向かわざるを得ません。
          処理されない悲嘆が蓄積し、二次受傷の温床になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 認知症・終末期ケアの特性</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          認知症の進行は、「<strong>その人らしさが失われていく</strong>」過程を、何年もかけて目撃することです。
          以前は笑顔だった方が誰のことも認識しなくなる、攻撃的になる、何も食べなくなる——
          こうした変化を見続けることで、悲しみと無力感が蓄積していきます。
          「人として大切にしたい」気持ちと、「もう以前の姿は戻らない」現実との間で、感情が引き裂かれる体験が日常的に起きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「家族のような」関係性</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護では、身体ケア・食事介助・排泄介助など、<strong>家族でしかしないようなケア</strong>を業務として行います。
          自然と利用者やそのご家族と「家族のような」関係になりやすく、職業的距離を保つのが難しい場面が多いです。
          結果として、利用者の苦痛・喪失が「他人事」として処理できず、自分のことのように引き受けてしまいます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 社会的評価の低さと孤立</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護職は社会的評価が低く、「誰でもできる仕事」「3K(きつい・汚い・危険)」など誤解されることが多いです。
          実際にはトラウマ的場面に近接する高度な専門職であるにもかかわらず、その負荷が外から理解されにくい構造があります。
          家族や友人にも「なんでそんなに疲れているの?」と理解されにくく、孤立感が深まります。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>業態別に見る介護士の二次受傷パターン</h2>
      <p>
        介護の現場は業態によって性質が大きく異なります。あなたの環境に合わせて読んでください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">特別養護老人ホーム(特養)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>「看取りの場」としての特養</strong>。利用者の多くが終の住処として入所し、最終的にここで人生を終えられます。
          年間多くの看取りに関わり、一人ひとりに数ヶ月〜数年の関係性があります。
          「最後まで関われた」という達成感と、「また見送らなければ」という疲弊感が複雑に絡み合います。
          慢性的な悲嘆反応と感情麻痺が起きやすい環境です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">介護老人保健施設(老健)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>リハビリ・退所サイクル</strong>が中心。3ヶ月〜数ヶ月の関係性が多いですが、「家に帰りたい」「もう少しいたい」という揺れる気持ちに日常的に立ち会います。
          リハビリ目標と現実のギャップに直面し、「努力しても在宅復帰できない」ケースで無力感を感じやすい環境です。
          退所後の予後を知ることが少なく、「あの人はその後どうなったか」を抱え続けることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">訪問介護(ホームヘルパー)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>孤立した現場</strong>での介護。一人で訪問するため、衝撃的な場面に単独で立ち会うリスクがあります。
          「家族介護者の限界を目の当たりにする」「孤独死を発見する」「劣悪な生活環境に直面する」など、現場でしか見えない現実に近接します。
          職場に戻っても同僚と共有しづらく、一人で抱え込みやすい構造があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">グループホーム(認知症対応型共同生活介護)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>認知症ケアの最前線</strong>。少人数で長期間関わるため、利用者一人ひとりとの関係が深まりやすい環境です。
          認知症の進行を年単位で見届け、「以前は穏やかだった人が攻撃的になる」「言葉を失っていく」変化に常に立ち会います。
          家族のような関係性ゆえに、看取りの際の喪失感が大きく、二次受傷のリスクが高い業態です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">デイサービス(通所介護)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>「変化を見続ける」</strong>立場。週に数回、何年も通ってくる利用者の状態変化(認知機能の低下・身体機能の低下)を継続的に観察します。
          「以前は歩いていた人が車椅子になる」「会話ができなくなる」変化に立ち会い、ある日突然「もう来られなくなりました」と聞くことが繰り返されます。
          看取りの場ではないため、悲嘆を表現する場がないまま蓄積しやすい環境です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">障害者支援施設・障害福祉サービス</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          高齢者介護とは異なるパターンですが、二次受傷のリスクは高いです。
          虐待歴・トラウマ体験のある利用者と長期間関わる中で、利用者の体験が支援者にも蓄積していきます。
          暴言・暴力(行動障害として表現される)を受け続けることで、慢性的な過覚醒に陥りやすい環境です。
        </p>
      </div>

      <h2>介護士に多い症状の特徴</h2>
      <p>
        介護士の二次受傷は、看護師とは異なる症状パターンが前面に出ます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">慢性的な無力感</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「何をやっても認知症は進行する」「最後は皆亡くなる」「制度の限界で十分なケアができない」——
          介護では「変えられないこと」に日常的に直面します。
          この体験が積み重なると、「どうせ何をやっても変わらない」という<strong>慢性的な無力感</strong>が定着します。
          達成感の低下と重なり、「自分の仕事に意味があるのか」が見えなくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">感情麻痺・「鈍くなった」感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の苦痛に共感しすぎて消耗するのを防ぐため、心が「これ以上感じないようにする」防衛反応を起こします。
          「以前は涙が出たのに、もう何も感じない」「冷たくなった気がする」——
          これは性格の変化ではなく、二次受傷の<strong>典型的な回避症状</strong>です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「家族にも理解されない」孤立感</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護の負荷は外から見えにくいため、家族や友人にも理解されにくいです。
          「またその話?」「考えすぎだよ」と言われることで、自分の体験を否定されたように感じ、話すこと自体が消耗になります。
          孤立感が深まり、心の中だけで処理しようとして、さらに悪化していきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">身体症状の長期化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          慢性的な腰痛・頭痛・不眠・胃腸の不調など、身体症状が長期化することがあります。
          介護は身体労働でもあるため、「身体の疲れ」として処理されがちですが、実際には心理的な消耗が身体に出ているケースが多いです。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        ご自身の状態をより詳しく確認したい場合は、<Link to="/articles/secondary-trauma-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次受傷チェック(15項目)</Link>もご活用ください。
      </p>

      <h2>二次受傷・共感疲労・燃え尽きの違い(介護士の場合)</h2>
      <p>
        介護士の心理的消耗を整理するには、似た概念の違いを把握することが役立ちます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">二次受傷(STS)</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>利用者の苦痛・喪失への近接</strong>が原因。介護士では特に<strong>慢性的・蓄積的</strong>に進行し、感情麻痺・無力感が前面に出やすい。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">共感疲労</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>他者の苦痛への共感</strong>全般から起きる消耗。対象がより広範。介護士では「家族のような関係性」のため共感疲労が深まりやすい。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">燃え尽き(バーンアウト)</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>長期的な職業ストレス</strong>から起きる。情緒的消耗・脱人格化・達成感低下が3要素。
            介護士では人手不足・低賃金・社会的評価の低さなどが加わり、慢性的なバーンアウトに陥りやすい。
          </p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        介護士では、<strong>これら3つが同時進行する</strong>ことが珍しくありません。
        「自分は二次受傷? 共感疲労? 燃え尽き?」と一つに絞ろうとしなくて構いません。
        実態は<strong>複合的</strong>であることが多く、構造として整理することが回復への一歩になります。
      </p>

      <h2>介護士特有の「回復への壁」</h2>
      <p>
        介護士の二次受傷からの回復には、いくつかの介護現場特有の壁があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">壁① 「介護士なら当たり前」という規範</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「看取りはこの仕事の一部」「皆そうやって乗り越えてきた」という規範が、サインに気づくことを遅らせます。
          「自分が辛い」と認めること自体が難しい職場文化があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">壁② 人手不足で休めない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護現場は慢性的な人手不足です。「自分が休んだら他の人が困る」「シフトに穴を開けられない」というプレッシャーで、休養を取りにくい構造があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">壁③ 経済的な制約</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護職は給与水準が低く、休職・転職への経済的不安が大きいです。
          「辞めたいけど次が見つかるか不安」「家計を支えている」という現実的な制約が、回復行動を遅らせます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">壁④ 「介護以外の仕事」のイメージのなさ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長年介護に従事してきた人ほど、「これ以外の仕事はできない」と感じやすいです。
          実際には介護で培った力(関係性構築・観察力・忍耐力・チームワーク)は他職種でも活かせますが、その自覚が薄いことが、選択肢を狭めます。
        </p>
      </div>

      <h2>回復への道筋——介護士に合わせたアプローチ</h2>
      <p>
        看護師向けの対処法をそのまま当てはめても効果が出にくいことがあります。介護士の構造に合わせた回復の進め方を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「これは弱さではない」と認識する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          二次受傷の症状を「自分の意志が弱い」「介護に向いていない」と捉えると、悪化します。
          長年の関わりと喪失体験の蓄積から起きる<strong>正常な反応</strong>です。むしろ深く関わってきた証拠でもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「悲しむ時間」を意識的に取る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          看取り・退所後の喪失感を、「次の業務」で押し流すのではなく、<strong>意識的に悲しむ時間</strong>を取ります。
          短時間でも構いません。「あの人のことを思い出す時間」を持つことで、未処理の悲嘆が蓄積するのを防げます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「現場を完全に離れる」以外の選択肢を考える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          二次受傷が深い時、「介護を辞めるしかない」と感じやすいです。しかし、<strong>「業態を変える」</strong>(特養から訪問へ、グループホームからデイへ等)で負荷が大きく変わることがあります。
          「続ける/辞める」の二択ではなく、関わり方を変える選択肢を検討してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 同職種のピアサポート</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          家族や友人には理解されにくい介護現場の体験は、<strong>同じ介護職の人と共有</strong>することで処理されやすくなります。
          職場のチーム内で話せない場合、職場外のコミュニティ(地域の介護士の集まり・オンラインのピアグループなど)を活用してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「介護の構造を理解した」専門家との対話</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一般のカウンセラーに「介護で疲れている」と話しても、業界特有の構造(看取り・認知症・人手不足)が伝わらないことがあります。
          介護や障害福祉の現場を理解した専門家を選ぶことで、整理の精度が変わります。
        </p>
      </div>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「もう感じないようにしたい」と思うことが増えた</p>
        <p>・利用者の死を「業務」としてしか受け止められない</p>
        <p>・以前は感じたやりがいが、まったく感じられない</p>
        <p>・身体症状(腰痛・頭痛・不眠)が長期化している</p>
        <p>・「介護を続けられないかもしれない」が口癖になっている</p>
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
        <p className="font-medium text-stone-700 mb-2">概念を深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/nurse-secondary-trauma" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">看護師の二次受傷</Link></li>
          <li>・<Link to="/articles/empathy-fatigue-vs-secondary-trauma" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次受傷とは?共感疲労・PTSDとの違い</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">介護士関連</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/care-worker-compassion-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">介護士の共感疲労</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/secondary-trauma-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次受傷チェック(15項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">回復・対処について</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/compassion-fatigue-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労からの回復方法</Link></li>
          <li>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息に必要な7つの要素</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線とは?バウンダリーの基本</Link></li>
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
        <p className="text-[10px] text-stone-500 mb-1">利用者の苦しみを長年引き受けてきた介護士の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          介護士の二次受傷は、職業構造から起きる正当な反応です。「自分が弱いから」ではありません。介護や障害福祉の現場を理解した専門家として、構造の整理をお手伝いできます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">障害福祉15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
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

      <ArticleFooterLinks type="compassion" exclude={["/articles/care-worker-secondary-trauma"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は障害福祉現場のマネジメント実務と臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

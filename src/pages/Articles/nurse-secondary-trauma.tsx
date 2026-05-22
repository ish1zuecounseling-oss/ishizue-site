import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "二次受傷(代理受傷)とは何ですか?",
    a: "二次受傷(secondary traumatic stress / STS、または代理受傷 vicarious trauma)とは、トラウマを抱えた人を支援することで支援者自身に起きるPTSD様の状態を指します。1990年代にチャールズ・フィグレーが提唱した概念で、患者の体験を直接体験したわけではないにもかかわらず、侵入症状(フラッシュバック・夢)・回避・過覚醒などの症状が現れます。看護師・心理職・救急隊員など、トラウマに近接する職種に多く見られます。",
  },
  {
    q: "二次受傷と共感疲労はどう違いますか?",
    a: "近い概念ですが厳密には異なります。共感疲労(compassion fatigue)は他者の苦痛への共感全般から起きる消耗で、対象は広範です。二次受傷(STS)はトラウマ的な体験を持つ人の支援を通じて起き、PTSD様の症状(侵入・回避・過覚醒)を伴うのが特徴です。共感疲労より症状が強く特異的です。看護師では両方が同時に進行することがよくあります。",
  },
  {
    q: "二次受傷と燃え尽き(バーンアウト)の違いは?",
    a: "バーンアウトは長期的な職業ストレスによる慢性的な消耗で、徐々に進行します。二次受傷はトラウマ的な場面への近接により、比較的急性的に発症することがあります。ただし両者は重なって進行することが多く、特に救急・緩和ケア・精神科などでは二次受傷から燃え尽きへ移行するパターンも見られます。",
  },
  {
    q: "看護師でも二次受傷は起こるのですか?",
    a: "起こります。むしろ看護師は二次受傷のリスクが高い職種です。患者の苦痛・死・暴力被害・虐待などトラウマ的な場面に日常的に近接し、共感的な関わりを継続することが求められます。「看護師たるもの動じてはいけない」という規範が、サインに気づくのを遅らせる要因にもなります。",
  },
  {
    q: "二次受傷のサインに気づいたらどうすればいいですか?",
    a: "まず「これは自分の弱さではなく、職業的なリスクから起きている」と認識することが第一歩です。次に、症状の程度に応じて対処を選びます。軽度であれば休息・自己ケア・同僚との共有で対応可能ですが、フラッシュバックや日常生活への支障が出ている場合は、心療内科・精神科への受診を検討してください。一人で抱え込まないことが回復を早めます。",
  },
  {
    q: "二次受傷は治りますか?",
    a: "適切な対処をすれば回復します。ただし「気合いで乗り切る」「忘れようとする」では悪化することがあります。トラウマ反応への適切なアプローチ(EMDR・トラウマフォーカスト認知行動療法など)や、構造の整理を通じて、症状が和らぎ、再発予防の力もついていきます。専門家との対話が回復を早めます。",
  },
  {
    q: "「自分の感じ方がおかしいのでは」と思っています",
    a: "おかしくありません。看護師として日常的にトラウマ的場面に近接していれば、心身に反応が出るのは自然なことです。むしろ「全く何も感じない」状態の方が、感情が麻痺している可能性があり、長期的なリスクがあります。今、何か感じているということ自体が、健全に反応している証拠でもあります。",
  },
]

export default function NurseSecondaryTrauma() {
  return (
    <ArticleLayout
      title="看護師の二次受傷(代理受傷)——患者の苦痛を引き受け続けるとき【公認心理師】"
      description="看護師に多い二次受傷(セカンダリートラウマ・代理受傷)について公認心理師が解説。救急・終末期・小児・精神科など科別の特徴・症状(侵入・回避・過覚醒)・共感疲労との違い・回復への道筋を整理。患者の苦痛を引き受け続けてきた看護師のための実践ガイド。"
      url="https://www.ishizue-counseling.jp/articles/nurse-secondary-trauma"
      date="2026-05-22"
      tags={["compassion", "burnout", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        患者さんの苦痛・喪失・トラウマに近接し続けてきた看護師の心身には、目に見えにくい形で影響が積み重なります。それは「あなたが弱い」のではなく、職業構造から起きる二次受傷という現象です。
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
        「亡くなった患者さんのことが、ふとした瞬間に頭をよぎる」「夜、夢に出てくる」「救急対応中の場面が、勤務外でも再生される」「以前のように患者さんに向き合えなくなった」——
        こうした体験を続けているなら、それは<strong>二次受傷(secondary traumatic stress、または代理受傷)</strong>のサインかもしれません。
      </p>

      <p>
        二次受傷は、患者さんのトラウマを直接体験したわけではないのに、看護師自身にPTSD様の症状が現れる現象です。
        「自分は患者さんほど辛くないはずなのに」と否定したくなりますが、これは<strong>看護師という職業構造から起きる正当な反応</strong>です。
      </p>

      <p>
        この記事では、看護師に二次受傷が起きやすい構造・科別の特徴・症状・回復への道筋を、
        公認心理師の臨床経験から整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ フラッシュバックや解離症状が日常的に出ている方、「消えてしまいたい」感覚がある方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・二次受傷(代理受傷)とは何か</li>
          <li>・看護師に二次受傷が起きやすい<strong>4つの理由</strong></li>
          <li>・<strong>科別</strong>(救急・緩和・小児・精神科・産科)の二次受傷パターン</li>
          <li>・二次受傷の3つの症状(侵入・回避・過覚醒)</li>
          <li>・共感疲労・バーンアウトとの違い</li>
          <li>・セルフケアと回復への道筋</li>
          <li>・一人で抱え込まないための選択肢</li>
        </ul>
      </nav>

      <h2>二次受傷(代理受傷)とは——「他者のトラウマ」が支援者に影響する現象</h2>
      <p>
        二次受傷(secondary traumatic stress / STS)、または代理受傷(vicarious trauma / VT)とは、
        <strong>トラウマを抱えた人を支援することで、支援者自身にPTSD様の症状が現れる現象</strong>を指します。
        1990年代に米国の心理学者チャールズ・フィグレーが提唱しました。
      </p>

      <p>
        重要なのは、二次受傷は「弱い人がなる」のではなく、<strong>共感的な関わりを続けてきた人ほどなりやすい</strong>という点です。
        患者さんに真摯に向き合ってきた看護師ほど、リスクが高くなります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">二次受傷の3つの中核症状(PTSD様反応)</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>侵入症状</strong>——フラッシュバック・悪夢・思い出したくない場面が頭に浮かぶ</li>
          <li>② <strong>回避症状</strong>——特定の患者・場面・話題を避けたくなる・感情の麻痺</li>
          <li>③ <strong>過覚醒</strong>——些細な音に反応する・眠れない・常に緊張状態</li>
        </ul>
      </div>

      <p>
        この3つは、患者さん本人のPTSDと同じ構造です。
        看護師は患者さんを直接的に体験していなくても、共感的な関わりを通じて<strong>「間接的なトラウマ体験」</strong>をしていると考えられています。
      </p>

      <h2>看護師に二次受傷が起きやすい4つの理由</h2>
      <p>
        看護師は他の職種と比べて、二次受傷のリスクが高い構造を持っています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① トラウマ的場面への日常的近接</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          看護師は、患者さんの死・激しい苦痛・暴力被害・虐待・自殺企図・重篤な疾患の告知など、
          一般の人がほとんど触れない<strong>トラウマ的場面に日常的に近接</strong>します。
          「慣れる」ことで対応できているように見えても、心身には影響が蓄積されています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 共感的な関わりが業務の本質</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          看護は、患者さんの痛み・不安・絶望に<strong>共感的に関わる</strong>ことが業務の核心です。
          距離を取って機械的に対応するのではなく、相手の気持ちを受け止めることが求められます。
          この共感性こそが、二次受傷のリスクを高める要因にもなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「看護師たるもの」の規範</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「看護師は患者さんのために強くあるべき」「動じてはいけない」「弱音を吐いてはいけない」——
          こうした規範が、サインに気づくことを遅らせます。
          「自分が辛い」と認めること自体が難しい職場文化が、二次受傷を見えにくくしています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ シフト勤務による回復不足</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          夜勤・三交代・変則勤務は、心身の回復を構造的に妨げます。
          トラウマ的場面に遭遇しても、十分な睡眠・休息で処理する時間がないまま次の勤務が始まります。
          結果として「処理されないトラウマ反応」が積み重なっていきます。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>科別に見る看護師の二次受傷パターン</h2>
      <p>
        二次受傷の起きやすさ・出方は、配属科によって異なります。
        あなたの環境に合わせて読んでください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">救急・ICU</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          急性・突発的なトラウマ場面が多く、<strong>急性的な二次受傷</strong>が起きやすい環境です。
          蘇生処置中の家族の悲鳴、若い患者の死、暴力被害者の対応など、強い場面が連続します。
          「あの時もっとできたのでは」という思考の反芻が長期間続きやすく、過覚醒症状(警戒・不眠)が出やすいのが特徴です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">緩和ケア・終末期</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          看取りを繰り返すことで、<strong>慢性的な二次受傷</strong>が蓄積していきます。
          一人ひとりの患者と関係を築いた後の死別が続くため、悲嘆反応も重なります。
          「最後まで関われた」という達成感と、「もう感じないようにしたい」という麻痺が同時に起こりやすく、感情の処理が複雑です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">小児・NICU</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          子どもの苦痛・喪失は、特に二次受傷を引き起こしやすい場面です。
          自分の子どもや家族と重ねてしまうことで、業務外でも侵入症状が出ることがあります。
          NICUでは「救えたはず」という思考の反芻、虐待ケースでは強い怒り・憤りが残ることもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">精神科</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自殺企図・自傷・虐待歴のある患者さんとの長期的な関わりで、二次受傷が蓄積します。
          患者さんのトラウマ体験を詳細に聞くことが多く、語られた内容そのものが看護師の中に残ります。
          時に暴言・暴力・操作的な言動を受けることもあり、慢性的な過覚醒に陥りやすい環境です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">産科(特に死産・新生児死亡)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          通常は「生命の誕生」を扱う場でありながら、死産・新生児死亡・流産対応など、
          <strong>祝福と喪失が同居する場面</strong>に立ち会います。
          「おめでとう」と「ご愁傷さま」を同じ日に伝える経験を繰り返すことで、感情の処理が複雑化し、二次受傷が見えにくくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">在宅・訪問看護</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の生活・家族・住環境に深く入るため、トラウマの背景が見えやすい立場です。
          一人で訪問することが多く、衝撃的な場面を一人で抱え込む構造があります。
          「家族介護者の限界」「孤独死の発見」など、強い場面に単独で立ち会うリスクがあります。
        </p>
      </div>

      <h2>二次受傷のサイン——気づきにくい3つの症状</h2>
      <p>
        二次受傷のサインは、自分では気づきにくいのが特徴です。
        以下の症状が日常的に出ているなら、二次受傷が進行している可能性があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">侵入症状のサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・特定の患者さんの場面が、勤務外でも頭に浮かぶ</li>
          <li>・夢に患者さんや処置場面が出てくる</li>
          <li>・関連する物・音・匂いで、当時の場面が蘇る</li>
          <li>・「あの時もっとできたのでは」と思考が反芻される</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">回避症状のサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・特定の患者・科・場面を担当したくない</li>
          <li>・以前のように患者さんに向き合えなくなった</li>
          <li>・感情が麻痺している・喜怒哀楽が薄い</li>
          <li>・人間関係から距離を取るようになった</li>
          <li>・「もう何も感じたくない」と思うことがある</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">過覚醒症状のサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・些細な音や物音に過剰に反応する</li>
          <li>・常に緊張している・リラックスできない</li>
          <li>・夜眠れない・眠りが浅い</li>
          <li>・イライラしやすくなった</li>
          <li>・集中力が低下している</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        ご自身の状態をより詳しく確認したい場合は、<Link to="/articles/secondary-trauma-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次受傷チェック(15項目)</Link>もご活用ください。
      </p>

      <h2>二次受傷・共感疲労・バーンアウトの違い</h2>
      <p>
        看護師の心理的消耗を整理するには、似た概念の違いを把握することが役立ちます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">二次受傷(STS)</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>トラウマ的場面への近接</strong>が原因。<strong>侵入・回避・過覚醒</strong>のPTSD様症状が特徴。
            急性的に発症することもあれば、蓄積的に進行することもあります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">共感疲労</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>他者の苦痛への共感</strong>全般から起きる消耗。対象がより広範。
            二次受傷より症状が穏やかですが、長期化するとバーンアウトに発展します。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">バーンアウト(燃え尽き)</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>長期的な職業ストレス</strong>から起きる。情緒的消耗・脱人格化・達成感低下が3要素。
            二次受傷・共感疲労を放置すると、バーンアウトに移行することがあります。
          </p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        看護師では、<strong>これら3つが同時進行する</strong>ことが珍しくありません。
        だからこそ、一般的なストレス対処法だけでは不十分で、構造を理解した対処が必要になります。
      </p>

      <h2>回復への道筋——セルフケアと専門的サポート</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① まずは「これは正常な反応」と認める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          二次受傷の症状を「自分の弱さ」と捉えると、悪化します。
          「これは職業的なリスクから起きている正当な反応」と認識することが、回復の第一歩です。
          看護師としての価値が下がるわけではありません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 体への注意を最優先に</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          二次受傷は心理的現象ですが、身体への影響が大きいのも特徴です。
          睡眠の質を上げる・規則的な食事・適度な運動など、<strong>身体の安定化</strong>が回復の土台になります。
          特にシフト勤務の方は、睡眠リズムの安定化を優先してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 安全な場で言葉にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頭の中で繰り返されるトラウマ的場面は、<strong>言葉にすることで処理</strong>されます。
          ただし、誰にでも話せばいいわけではなく、「安全に受け止めてもらえる場」が必要です。
          職場の同僚・産業保健スタッフ・スーパーバイザー・カウンセラーなど、適切な相手を選んでください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 専門的な治療(必要な場合)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          症状が強い場合や日常生活に支障が出ている場合は、トラウマ専門の治療が有効です。
          <strong>EMDR(眼球運動による脱感作と再処理)・トラウマフォーカスト認知行動療法</strong>などが代表的です。
          これらを実施している医療機関・心理職に相談することで、症状の根本的な改善が期待できます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 構造的な変化(中長期)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          症状の改善だけでなく、<strong>「二次受傷を防ぐ働き方」</strong>に変えることが再発予防になります。
          <Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線の引き方</Link>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息の質</Link>・部署異動・夜勤頻度の調整など、構造的な変化を検討してください。
        </p>
      </div>

      <h2>一人で抱え込まないために</h2>
      <p>
        看護師は「自分が支える側」という意識が強く、自分のケアを後回しにしがちです。
        二次受傷を一人で抱え続けることは、結果的に看護師としての継続を難しくします。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 同僚・先輩看護師との共有</p>
          <p className="text-stone-600 leading-[1.9]">
            職場に話せる相手がいれば、状況を共有することが第一歩です。
            同じ場面を経験している看護師なら「あるある」を共有できることもあります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 看護師長・主任への相談</p>
          <p className="text-stone-600 leading-[1.9]">
            業務調整・配属変更・受持ち患者の調整など、構造的な対応が可能な場合があります。
            「自分のため」だけでなく「患者さんの安全のため」という視点も伝えやすいです。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 産業保健スタッフ・産業医</p>
          <p className="text-stone-600 leading-[1.9]">
            病院に産業保健師・産業医がいる場合、守秘義務があるため安心して相談できます。
            職場への伝達は本人の許可がない限り行われません。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④ 心療内科・精神科の受診</p>
          <p className="text-stone-600 leading-[1.9]">
            症状が強い場合・日常生活に支障が出ている場合は、医療機関の受診を。
            「看護師が患者になる」ことへの抵抗があるかもしれませんが、ケアを受けることは弱さではありません。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">⑤ 職場外のカウンセラー</p>
          <p className="text-stone-600 leading-[1.9]">
            職場内で話しづらい場合、職場外のカウンセラーに整理してもらう方法があります。
            「看護師の構造を理解した専門家」を選ぶことで、安心して話せます。
          </p>
        </div>
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
        <p className="font-medium text-stone-700 mb-2">概念を深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/empathy-fatigue-vs-secondary-trauma" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次受傷とは?共感疲労・PTSDとの違い</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">看護師に関連する記事</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/nurse-compassion-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">看護師の共感疲労</Link></li>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">患者さんの苦痛を引き受け続けてきた看護師の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          看護師の二次受傷は、職業構造から起きる正当な反応です。「自分が弱いから」ではありません。安全な場で「今の状態」を言葉にすることが、回復の最初の一歩です。看護師の構造を理解した専門家として、お手伝いできます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態をそのまま話してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科(初診予約は数日〜数週かかることがあります)</li>
        </ul>
      </div>

      <ArticleFooterLinks type="compassion" exclude={["/articles/nurse-secondary-trauma"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群の原因は何ですか?",
    a: "燃え尽き症候群の原因は、「個人の性格」ではなく、5つの構造的要因が組み合わさって起きます。①職場環境(人手不足・評価制度・組織文化)、②役割と自己の同一化(自己複雑性の低下)、③条件付き自己価値(成果と自己価値の紐付け)、④他人軸・境界線の薄さ、⑤感情労働の慢性的蓄積。これらは「弱さ」ではなく「構造の問題」です。",
  },
  {
    q: "「自分が弱いから燃え尽きた」のではないですか?",
    a: "違います。燃え尽きるのは「弱い人」ではなく、「真面目で頑張り屋」「責任感が強い」「他者への配慮ができる」人が圧倒的に多いです。むしろ「強さ」「優しさ」「真剣さ」が、構造的に消耗を加速させる要因になります。「自分が弱いから」と捉えると、自己否定が深まって回復を遅らせます。「構造的に消耗が起きやすい状況にいた」と捉え直すことが、回復の入口です。",
  },
  {
    q: "性格を変えれば治りますか?",
    a: "「性格を変える」は現実的ではないし、必要ありません。問題は性格ではなく、性格を支えている構造(条件付き自己価値・他人軸・自己複雑性の低下など)です。これらの構造を整理することで、性格はそのままで、消耗のパターンだけ変えることができます。「真面目」「優しい」「責任感が強い」のままで、消耗しない関わり方ができるようになります。",
  },
  {
    q: "職場が原因の場合、個人で対処できますか?",
    a: "限界はあります。職場の構造的問題(人手不足・組織文化・上司の問題)は、個人の努力だけでは変えられないことが多いです。「環境を変えずに自分だけ変わろう」とすると、消耗が深まります。配置変更・転職・休職などの環境的対処を視野に入れることが、現実的な回復方法になります。一人で抱えず、産業医・カウンセラー・人事と相談してください。",
  },
  {
    q: "「燃え尽きやすい性格」はありますか?",
    a: "「燃え尽きやすい性格」というより、「燃え尽きやすい構造を抱えている人」と捉える方が正確です。共通する特徴は、①完璧主義、②自己犠牲、③他者優先、④弱さを見せられない、⑤休むことに罪悪感、⑥成果と自己価値の紐付け。これらは性格ではなく、長年の体験から形成されたパターンです。性格を変えなくても、これらのパターンは構造として整理できます。",
  },
  {
    q: "燃え尽きの原因は職場と個人どちらですか?",
    a: "両方です。職場要因(環境)と個人要因(構造)が相互作用して起きます。職場が悪くても全員が燃え尽きるわけではなく、個人要因が強くても良い環境なら燃え尽きないこともあります。両方の要因を見ることが、適切な対処につながります。「職場が悪い」と環境のせいだけにしても、「自分が悪い」と個人のせいだけにしても、回復が遠のきます。",
  },
  {
    q: "原因がわかれば治りますか?",
    a: "原因の理解は回復の第一歩ですが、それだけでは不十分です。「なぜ起きたか」を理解した後、「どう構造を変えるか」の実践が必要です。原因の言語化→対処の選択→構造の変化、というステップを踏むことで、再発しない回復が可能になります。一人で進めるのが難しい場合は、専門家との対話が有効です。",
  },
]

export default function BurnoutCauses() {
  return (
    <ArticleLayout
      title="燃え尽き症候群の原因——「性格」ではなく構造から起きる5つの要因【公認心理師】"
      description="燃え尽き症候群(バーンアウト)の原因は、個人の性格や弱さではなく、5つの構造的要因(職場環境・役割同一化・条件付き自己価値・他人軸・感情労働)から起きます。「真面目で頑張り屋」ほど燃え尽きやすい構造を、公認心理師が解説。「自分が悪いから」と捉える前に、構造を理解するための実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/burnout-causes"
      date="2026-05-27"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        燃え尽き症候群の原因は「あなたの性格」「あなたの弱さ」ではありません。5つの構造的要因が組み合わさって起きる、構造の問題です。「自分が悪いから」を一旦保留にして、構造を見てみてください。
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
        「自分が弱いから燃え尽きたんだろうか」
        「もっと強い人なら、こんなことにならなかったはず」
        「自分の性格が問題なのかも」——
      </p>

      <p>
        燃え尽き症候群(バーンアウト)になった方の多くが、こう感じます。
        しかし、それは正確ではありません。
      </p>

      <p>
        燃え尽きの原因は<strong>「あなたの性格」</strong>でも<strong>「あなたの弱さ」</strong>でもなく、<strong>5つの構造的要因</strong>が組み合わさって起きるものです。
        むしろ「<strong>真面目で頑張り屋</strong>」「<strong>責任感が強い</strong>」「<strong>他者への配慮ができる</strong>」人ほど、構造的に消耗しやすくなります。
      </p>

      <p>
        この記事では、燃え尽き症候群の原因を「性格論」ではなく<strong>構造論</strong>で解説します。
        構造として理解できると、「自分が悪いから」という自己否定を緩めることができ、現実的な対処への道筋が見えてきます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・燃え尽き症候群の<strong>5つの構造的原因</strong></li>
          <li>・なぜ「性格の問題」と誤解されやすいのか</li>
          <li>・「真面目で頑張り屋」ほど燃え尽きやすい理由</li>
          <li>・<strong>環境要因 vs 個人要因</strong>の見分け方</li>
          <li>・「原因」を理解することで何が変わるか</li>
          <li>・構造への対処(5つのアプローチ)</li>
        </ul>
      </nav>

      <h2>結論——「性格」ではなく「構造」から起きる</h2>
      <p>
        燃え尽き症候群の原因についての、最も重要な認識転換は以下です。
      </p>

      <div className="my-4 p-5 rounded-2xl border-2 border-stone-300 bg-stone-50">
        <p className="text-sm leading-[2] text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          燃え尽きは「<strong>個人の弱さ</strong>」が原因ではない。
          <strong>真面目さ・優しさ・責任感</strong>を<strong>消耗に変える構造</strong>が原因である。
        </p>
      </div>

      <p>
        この認識を持てると、自己否定の悪循環から抜けられます。
        「自分の性格が悪いから」と捉えると、変えるべきは「自分」になり、変えようがありません。
        「構造の問題」と捉えると、変えるべきは「構造」になり、現実的な対処が見えてきます。
      </p>

      <h2>燃え尽き症候群の5つの構造的原因</h2>
      <p>
        燃え尽きは、以下の<strong>5つの構造</strong>が組み合わさって起きます。
        どれか1つだけが原因になることは稀で、複数が同時に作動しているのが普通です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 職場環境の構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>人手不足</strong>・<strong>過重労働</strong>・<strong>評価制度の歪み</strong>・<strong>「弱音を吐けない」職場文化</strong>・<strong>上司や同僚との関係性</strong>など、職場の構造的問題が燃え尽きを引き起こします。
          特に対人援助職(看護・介護・福祉・教育)では、人手不足と過重負荷が慢性化していることが多く、個人の努力ではどうしようもない状況があります。
          <strong>「職場の問題」を「自分の問題」として抱え込む</strong>と、消耗が深まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割と自己の同一化(自己複雑性の低下)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>支援者としての自分</strong>」「<strong>頑張っている自分</strong>」が「自分」全体と一体化している状態。
          仕事の役割が「自分の全部」になっていると、役割でつまずいた時に「自分全部の否定」と感じてしまいます。
          <strong>趣味・関係性・身体感覚など、役割以外の自分の側面</strong>(<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>)が乏しいと、燃え尽きやすくなります。
          「いつ自分らしいか?」と問われて、仕事のことしか思い浮かばない方は要注意です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 条件付き自己価値(成果と自己価値の紐付け)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>役に立てている時だけ価値がある</strong>」「<strong>成果を出している時だけOK</strong>」のように、成果・役割と自己価値が紐づいている状態。
          条件が満たされている時は強い充実感を感じられますが、満たされない時(休んでいる時・体調を崩した時・失敗した時)に<strong>自己価値が一気に消失</strong>します。
          このスイッチの不安定さが、慢性的な不安と消耗を生みます。
          詳しくは<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない(条件付き自己価値)</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 他人軸・境界線の薄さ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己の判断基準が「<strong>他者にどう見られるか</strong>」「<strong>他者の期待</strong>」に偏っている状態(<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>)と、「<strong>どこまでが自分の責任か</strong>」が曖昧な状態(<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線の薄さ</Link>)。
          他者の感情・問題を「自分のもの」として引き受けてしまい、断ることに強い罪悪感を感じます。
          常に「<strong>他者の状態</strong>」を読み取って合わせ続けるため、自分のニーズに気づきにくく、エネルギーが慢性的に流出します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 感情労働の慢性的蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          本来感じている感情を抑えて、相手に合わせた感情を表現し続ける<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>が、日常的に蓄積していく状態。
          疲れていても笑顔を作る、嫌でも穏やかに対応する、興味がなくても興味があるふりをする——これらが業務だけでなく、日常生活でも止まらなくなります。
          特に対人援助職では、業務時間外でも感情労働モードが抜けず、休日も消耗が続きます。
          詳しくは<Link to="/articles/emotional-labor-unaware" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分は感情労働していない(気づかない構造)</Link>を参照してください。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これら5つの構造は、互いに強化し合います。
        例えば「他人軸」が強い人は「条件付き自己価値」を持ちやすく、「感情労働」が蓄積しやすく、「自己複雑性」が低くなり、結果として職場環境の影響を強く受けます。
        どれか1つだけ変えても十分ではなく、<strong>全体を構造として見る</strong>必要があります。
      </p>

      <LineCtaCompassion />

      <h2>なぜ「個人の弱さ」と誤解されやすいのか</h2>
      <p>
        構造の問題なのに、多くの方が「自分の弱さ」と捉えてしまう。それには理由があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 周りで同じ環境にいる人が燃え尽きていないから</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同じ職場で同じ仕事をしている同僚が問題なく働いていると、「自分だけ弱いんだ」と感じます。
          しかし実際は、人によって「<strong>個人要因の組み合わせ</strong>」が違うため、燃え尽きるタイミングや形が違うだけです。
          表面上元気そうに見える同僚も、別の形で消耗していることが多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「努力で乗り越えられるはず」という前提</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「もっと頑張れば」「もう少し気合いを入れれば」乗り越えられる、と感じてしまいます。
          しかし燃え尽きは「努力不足」が原因ではなく「努力過多の結果」です。
          ここで「もっと努力」を加えると、消耗が深まるだけです。
          「努力で何でも解決できる」という前提自体が、燃え尽きを生む構造の一部です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「メンタルの強さ」という幻想</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「メンタルが弱いから燃え尽きる」というイメージが広がっていますが、これは事実と逆です。
          燃え尽きるのは、<strong>長年メンタル的に頑張り続けてきた人</strong>です。
          弱い人なら、もっと早く限界に達して、燃え尽きるレベルまで頑張れません。
          燃え尽きた時点で「強さ」の証明をしています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自己否定が「考えやすい」から</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「構造の問題」より「自分の弱さ」の方が、考えやすく感じます。
          「自分が変われば解決する」というシンプルな図式は、希望を持たせてくれるからです。
          しかし「自分のせい」と思い続けることが、自己否定を深め、回復をさらに遠ざける悪循環を生みます。
        </p>
      </div>

      <h2>「真面目で頑張り屋」ほど燃え尽きやすい構造</h2>
      <p>
        燃え尽きやすい人に共通する<strong>6つの特徴</strong>があります。これらは「性格」というより、「<strong>構造的に消耗を加速させるパターン</strong>」です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">燃え尽きやすい6つの特徴</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>完璧主義</strong>:「ほどほど」が許せず、常に100%を目指す</li>
          <li>② <strong>自己犠牲</strong>:自分のニーズを後回しにすることが習慣化している</li>
          <li>③ <strong>他者優先</strong>:相手の反応・期待を常に優先する</li>
          <li>④ <strong>弱さを見せられない</strong>:疲れている・できないを言えない</li>
          <li>⑤ <strong>休むことに罪悪感</strong>:何もしない時間が苦痛</li>
          <li>⑥ <strong>成果と自己価値の紐付け</strong>:役に立てない自分に価値を感じられない</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは「<strong>悪い性格</strong>」ではありません。むしろ社会的には「<strong>誠実</strong>」「<strong>責任感がある</strong>」「<strong>優しい</strong>」と評価される特徴です。
        だからこそ、これらの特徴が止まらず、消耗を生み続けます。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        重要なのは、これらの特徴を「<strong>変える</strong>」のではなく、「<strong>意識的に選び直せる状態</strong>」を作ることです。
        「完璧主義をやめる」のではなく「完璧主義をいつ作動させるか選ぶ」、
        「自己犠牲をやめる」のではなく「自己犠牲をいつ手放すか選ぶ」、という形で構造を整理します。
      </p>

      <h2>環境要因 vs 個人要因の見分け方</h2>
      <p>
        燃え尽きの原因が「環境」と「個人」のどちらに偏っているかを見分けることで、適切な対処が見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">環境要因が強いサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・どんなに頑張っても業務量が減らない</li>
          <li>・人手不足が慢性化している</li>
          <li>・上司・経営層に問題がある</li>
          <li>・「弱音を吐けない」職場文化</li>
          <li>・評価制度が成果偏重</li>
          <li>・部署異動・転職した同僚は元気になっている</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">個人要因が強いサイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・職場を変えても同じパターンを繰り返す</li>
          <li>・他の人より自分が消耗しやすい</li>
          <li>・休みになっても気持ちが切り替わらない</li>
          <li>・「いい人」「気が利く」とよく言われる</li>
          <li>・断ることに強い罪悪感を感じる</li>
          <li>・趣味や好きなことを聞かれても答えに詰まる</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        多くの場合、<strong>環境要因と個人要因が複合的に作動</strong>しています。
        「環境のせい」と決めつけても、「自分のせい」と決めつけても、回復が遅れます。
        両方の要因を見ることが、適切な対処につながります。
      </p>

      <h2>「原因」を理解することで何が変わるか</h2>
      <p>
        構造として原因を理解できると、以下の変化が起きます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 自己否定が緩む</p>
          <p className="text-stone-600 leading-[1.9]">「自分が弱いから」が「構造的に消耗が起きやすい状況にいた」に変わる。自己否定の悪循環から抜けられます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 対処の方向が見える</p>
          <p className="text-stone-600 leading-[1.9]">「性格を変えなきゃ」(不可能)から「構造を変えよう」(可能)に転換。具体的なアクションが見えてきます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 再発予防につながる</p>
          <p className="text-stone-600 leading-[1.9]">「症状を消す」だけでなく「構造を変える」ことで、復職後の再発を防げます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 周囲との共有がしやすくなる</p>
          <p className="text-stone-600 leading-[1.9]">「自分が弱い」より「構造的な問題」の方が、家族・職場・専門家と共有しやすく、適切なサポートを受けやすくなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">⑤ 「真面目さ」を保てる</p>
          <p className="text-stone-600 leading-[1.9]">性格を変える必要がないので、「真面目」「優しい」「責任感がある」自分のまま、消耗しない関わり方ができるようになります。</p>
        </div>
      </div>

      <h2>構造への対処——5つのアプローチ</h2>
      <p>
        5つの構造的原因に対して、それぞれの対処アプローチがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 職場環境への対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          産業医面談・上司との対話・配置変更の相談・休職検討・転職など、<strong>環境的な選択肢</strong>を視野に入れます。
          「環境を変えずに自分だけ頑張る」は限界があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自己複雑性の回復</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>役割以外の自分</strong>」を意識的に育てます。趣味・関係性・身体感覚・好きなこと——「仕事以外で自分らしい時間」を持つことが、燃え尽きへの最大の予防策です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 条件付き自己価値の整理</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>役に立たない自分</strong>」「<strong>何もしていない自分</strong>」にも価値があると認める練習をします。これは頭で理解するより、体験を通じて少しずつ育つものです。安全な関係の中で「弱さを出しても受け入れられる」体験が、回復を支えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 他人軸と境界線の整理</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>自分は何を感じているか</strong>」に意識的に接続する時間を持ちます。「断る」「手を抜く」を小さな場面から練習。「どこまでが自分の責任か」を明確にして、相手の問題を引き受けすぎないようにします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 感情労働の意識化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>今、感情労働してるな</strong>」と気づける場面を増やします。気づくこと自体が、消耗を制御する第一歩。全部やめる必要はなく、「<strong>意識的に選ぶ</strong>」状態を作ることが目標です。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは一人で進めるのが難しい場合があります。特に「<strong>条件付き自己価値</strong>」「<strong>他人軸</strong>」「<strong>感情労働の自動化</strong>」は、長年の構造のため、第三者と整理する方が現実的です。
      </p>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「自分が悪いから」「弱いから」と自己否定が続いている</p>
        <p>・5つの構造的原因のうち3つ以上に当てはまる</p>
        <p>・「真面目さ」「優しさ」が消耗源になっている感覚がある</p>
        <p>・職場を変えても同じパターンを繰り返している</p>
        <p>・「何を変えればいいかわからない」状態</p>
        <p>・身体症状が長期化している</p>
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
        <p className="font-medium text-stone-700 mb-2">燃え尽き関連シリーズ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-early-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の初期症状・前兆</Link></li>
          <li>・<Link to="/articles/burnout-four-stages" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の4段階</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link></li>
          <li>・<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link></li>
          <li>・<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/structural-counseling-method" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">構造整理型カウンセリングとは</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない(条件付き自己価値)</Link></li>
          <li>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性とは</Link></li>
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link></li>
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link></li>
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
          「性格」ではなく「構造」を整理することは、一人では難しいことが多いです。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分が悪い」を一旦保留にしたい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          燃え尽きの原因は性格ではなく構造です。5つの構造的原因がどう絡んでいるかは、人それぞれ。「あなたの構造」を専門家と一緒に整理することで、変化の方向が見えてきます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-causes"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

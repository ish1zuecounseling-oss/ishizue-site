import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群が何年も治らないのはなぜですか?",
    a: "「症状の改善」だけを追って、消耗を生む構造を整理していないことが最大の原因です。職場環境・関係性のパターン・対処パターン・自己否定など、燃え尽きを生む構造が残ったままだと、症状が一時改善しても再発を繰り返します。「治らない」のではなく「治っても再発する」状態が、慢性化と感じられているケースが多いです。構造の整理が回復の鍵です。",
  },
  {
    q: "「もう何年も治らない」と感じます。回復できますか?",
    a: "回復できます。ただし「症状を消す」アプローチではなく、「構造を変える」アプローチが必要です。慢性化したケースでは、短期で大幅に変わるのは難しいですが、構造を一つずつ整理していくことで、再発しにくい状態に変わっていきます。「治らない」と感じている期間が長いほど、回復にも時間がかかりますが、可能です。",
  },
  {
    q: "「治らない」ことは「自分が弱いから」ですか?",
    a: "違います。「治らない」のは弱さではなく、構造的な要因によります。「気合いで治そう」「自分の意志で乗り越えよう」というアプローチでは、構造そのものに届かないためです。むしろ「治らない」状態が続いている人ほど、長年頑張り続けてきた強さを持っています。自己否定で回復を遅らせないことが重要です。",
  },
  {
    q: "再発を繰り返すパターンを止める方法は?",
    a: "①再発のパターンを言語化する(何が起きた時、どんな順序で再発したか)、②再発の引き金となる場面・状況を特定する、③その引き金にどう対処するかを事前に決めておく、④一人で抱えず専門家と整理する、の4ステップが効果的です。「同じことを繰り返している」と気づくこと自体が、抜け出す入口です。",
  },
  {
    q: "医療機関で「治らない」と言われました",
    a: "医療機関での治療は症状の管理が中心で、消耗を生む構造そのものへのアプローチには限界があることがあります。「治らない」と言われた場合、医療機関での治療を継続しつつ、カウンセリングで構造の整理を並行することが有効です。「症状の改善」と「構造の整理」は別の作業で、両方が必要なケースが多いです。",
  },
  {
    q: "「治らない」ストレスで余計に疲れます",
    a: "これは「治らないことへの不安と焦り」が、それ自体で消耗を生んでいる状態です。回復への第一歩は、「治す」ことを一旦保留にすることだったりします。「治らない自分はダメだ」「いつ治るのか」という不安が、回復を逆に遠ざけることがあります。「治す」より「今の状態と上手く付き合う」発想に切り替えることで、不安が和らぎ、結果として回復が進むことがあります。",
  },
  {
    q: "「治らない」状態のまま仕事を続けられますか?",
    a: "状況によります。軽度〜中度なら、業務調整・配置変更・時短勤務などで続けられるケースもあります。重度の場合、休職を視野に入れる必要があります。最も避けたいのは「気合いで続ける」ことで、これが慢性化を最大化します。主治医・産業医・カウンセラーと相談しながら、「続けるかどうか」「どう続けるか」を整理することが現実的です。",
  },
]

export default function BurnoutNotRecovering() {
  return (
    <ArticleLayout
      title="燃え尽き症候群が治らない——慢性化する4つの構造と回復への道筋【公認心理師】"
      description="「もう何年も治らない」「再発を繰り返す」「休んでも回復しない」と感じている方へ。燃え尽き症候群が慢性化する4つの構造・「治らない」と感じる5つのパターン・慢性化を抜ける4つのアプローチを公認心理師が解説。「治す」ではなく「構造を変える」回復の方向を示します。"
      url="https://www.ishizue-counseling.jp/articles/burnout-not-recovering"
      date="2026-05-25"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「もう何年も治らない」「再発を繰り返している」「休んでも回復しない」——その状態は、性格や意志の問題ではなく、構造の問題です。「治す」ではなく「構造を変える」方向に切り替えることで、慢性化から抜ける道が見えてきます。
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
        「燃え尽きと診断されて1年経つけど、まだ良くならない」
        「休職して復帰したのに、また同じ状態に戻った」
        「医療機関にも通っているのに、根本が変わらない」
        「自分はもう一生治らないのかもしれない」——
      </p>

      <p>
        こうした感覚を持っている方は、決して少なくありません。
        ただ、その絶望感の中で<strong>「自分が弱いから」「自分には治す力がないから」</strong>と自己否定が深まり、それが回復をさらに遠ざける悪循環に陥りやすいです。
      </p>

      <p>
        この記事では、「燃え尽き症候群が治らない」と感じている方に向けて、<strong>慢性化する構造</strong>と<strong>抜けるための道筋</strong>を整理します。
      </p>

      <p>
        結論からお伝えすると、<strong>「治らない」のではなく「治っても再発する」</strong>状態であることが多いです。
        消耗を生む構造を残したまま症状の改善だけを追うと、何度回復しても元に戻ってしまいます。
        構造を変えることで、「治らない」と感じる状態から抜けることができます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・なぜ「治らない」と感じるのか</li>
          <li>・慢性化する<strong>4つの構造</strong></li>
          <li>・「治らない」状態の<strong>5つのパターン</strong></li>
          <li>・「治らない」と感じる人が陥る悪循環</li>
          <li>・慢性化を抜ける<strong>4つのアプローチ</strong></li>
          <li>・専門家サポートを使うタイミング</li>
        </ul>
      </nav>

      <h2>なぜ「治らない」と感じるのか</h2>
      <p>
        「治らない」と感じる多くの方には、共通点があります。
        それは、<strong>「症状の改善」だけを追っていて、構造には手を付けていない</strong>ことです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「症状の改善」と「構造の整理」の違い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          症状の改善とは、不眠・疲労感・気分の落ち込みなどを和らげることです。これは医療機関(投薬・休養)で対応できます。
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          一方、構造の整理とは、消耗を生む土台(職場環境・関係性のパターン・対処パターン・自己否定)を見える化して、変えていくことです。これはカウンセリング・自己分析・対話の領域です。
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          <strong>症状だけ整えて、構造を残したまま復職すると、ほぼ確実に再発します。</strong>
          これが「治らない」と感じる最大の理由です。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        正確には<strong>「治らない」のではなく「治っても再発する」</strong>状態であることが、慢性化の本質です。
        この違いを理解することが、回復への第一歩です。
      </p>

      <h2>慢性化する4つの構造</h2>
      <p>
        「燃え尽きが治らない」状態の背景には、以下の4つの構造があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 構造を整理しないまま「症状の改善」だけを追っている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          医療機関での治療・休養・服薬で症状は和らぎますが、消耗を生む構造には届きません。
          職場環境・対人パターン・自己否定など、燃え尽きを生む土台が残ったまま復職すると、数ヶ月で再発するケースが多いです。
          「症状が消える」=「治る」と捉えていると、再発のたびに「また治らなかった」と感じる悪循環に陥ります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 同じ職場・関係性に戻り続けている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休職して回復しても、同じ職場・同じ業務量・同じ人間関係に戻ると、再び消耗が始まります。
          特に職場環境の根本的な問題(人手不足・職場文化・上司との関係)がある場合、個人の努力だけでは対処できません。
          「環境を変えずに、自分だけ変わろう」とすると、慢性化しやすくなります。
          配置変更・休職延長・転職など、<strong>環境的な選択肢</strong>を視野に入れる必要があるケースもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「気合いで治す」を繰り返している</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「もう少し頑張れば良くなる」「気合いで乗り切ろう」というアプローチを繰り返すと、慢性化します。
          燃え尽きは「気合い」では治らない構造的な問題です。
          むしろ「気合いで頑張る」ことが、消耗を生むパターンの一部です。
          「頑張らない」を意識的に選ぶ訓練が、回復には必要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自己否定が回復を遅らせている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「治らない自分はダメだ」「いつまで休んでいるんだ」「迷惑をかけている」という自己否定が、それ自体で消耗を生みます。
          「治らないこと」への不安と焦りが、新たな消耗源になり、回復をさらに遠ざける悪循環が起きます。
          自己否定を緩めることが、回復のスタート地点であることが多いです。
        </p>
      </div>

      <h2>「治らない」状態の5つのパターン</h2>
      <p>
        以下のパターンに当てはまる場合、すでに慢性化している可能性が高いです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 何度も再発を繰り返す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休職→復帰→数ヶ月で再発、を繰り返している状態。
          症状は一時改善しても、構造が変わっていないため、必ず元に戻ります。
          再発のたびに「また治らなかった」と感じ、自己否定が深まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 半年以上症状が続く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          半年以上にわたって燃え尽きの症状(疲労感・脱人格化・達成感低下)が続いている状態。
          標準的な回復期間(<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">3〜6ヶ月</Link>)を超えて長引いている場合、構造の整理が必要なサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 休んでも回復しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休職して半年・1年経っても、復職可能な状態に戻らない。
          通常、十分な休養で身体的疲労は回復しますが、心理的構造が残っていると「復職できる気がしない」状態が続きます。
          休養だけでは構造に届かないことを示すサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 復職しても続かない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          復職を試みても、数週間〜数ヶ月で休職に戻ってしまうパターン。
          「復職可能」の判断と「持続可能な復職」は別であり、構造的な準備が足りていないと続きません。
          詳しくは<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 別の症状(うつ・身体症状)に変化していく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きが長期化すると、うつ病・適応障害・身体表現性障害などに発展することがあります。
          症状の形が変わっていくのも、慢性化のサインです。
          診断名が増えていく場合、医療機関での評価と、構造の整理を並行することが必要です。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>「治らない」と感じる人が陥る悪循環</h2>
      <p>
        慢性化したケースには、共通の悪循環があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">悪循環のサイクル</p>
        <ol className="space-y-2 text-sm text-stone-600 leading-[1.9] list-decimal pl-5">
          <li>症状が出る → 休養を取る</li>
          <li>症状が改善 → 「治った」と感じて復職</li>
          <li>同じ環境・同じパターンで再び消耗が始まる</li>
          <li>「また治らなかった」と自己否定が深まる</li>
          <li>「もう一生治らないかも」という絶望感</li>
          <li>絶望感が新たな消耗源になり、症状が悪化</li>
          <li>①に戻る(でも前回より深い状態で)</li>
        </ol>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        このサイクルから抜けるには、「症状の改善」だけでなく、<strong>サイクルそのものを変える</strong>必要があります。
      </p>

      <h2>慢性化を抜ける4つのアプローチ</h2>
      <p>
        「治らない」状態から抜けるには、以下の4つのアプローチが有効です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 構造の整理を優先する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          症状の改善より先に、消耗を生む構造を整理することを優先します。
          職場環境・対人パターン・自己否定・対処パターンの4軸で、何が起きているかを言語化していきます。
          「症状をどう消すか」ではなく「<strong>なぜ消耗が止まらないか</strong>」に焦点を当てます。
          これは一人で進めるのが難しい作業のため、専門家との対話が有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「症状の消失」より「再発しない構造」を目指す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          目標を「症状を消す」から「再発しない構造を作る」に切り替えます。
          症状の改善は通過点であり、ゴールではありません。
          「いつ治るのか」より「<strong>どうすれば再発しないか</strong>」を考える方向にシフトすることで、回復のプロセスが変わります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 一人で抱えない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          慢性化したケースでは、自分一人で構造を見ることがほぼ不可能です。
          長年抱えてきたパターンほど、自分では気づきにくいためです。
          主治医・産業医・カウンセラー・信頼できる家族や友人など、<strong>複数の視点</strong>を活用することが必要です。
          「相談できる相手がいない」状態自体が、慢性化の一因です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「治す」より「上手く付き合う」発想</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「治す」を目標にすると、「治らない自分」を否定し続けることになります。
          代わりに「<strong>今の状態とどう上手く付き合うか</strong>」という発想に切り替えます。
          これはACT(アクセプタンス&コミットメント・セラピー)の考え方で、症状を消そうとせず、症状があってもできる行動を増やしていくアプローチです。
          結果として、症状そのものも和らぐことが多いです。
        </p>
      </div>

      <h2>専門家サポートを使うタイミング</h2>
      <p>
        慢性化したケースでは、専門家のサポートが回復の鍵になります。それぞれの役割と使うタイミングを整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">医療機関(心療内科・精神科)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>使うタイミング</strong>:身体症状が強い・服薬が必要・診断書が必要・希死念慮がある<br />
          <strong>役割</strong>:診断・服薬・診断書発行・症状の医学的管理<br />
          <strong>限界</strong>:消耗を生む構造そのものへのアプローチには限界があります
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">カウンセラー(公認心理師など)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>使うタイミング</strong>:構造を整理したい・対処パターンを見直したい・自己理解を深めたい<br />
          <strong>役割</strong>:構造の整理・対処パターンの見直し・心理的サポート<br />
          <strong>限界</strong>:医学的な治療(投薬・診断書)は扱えません
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">産業医・産業保健スタッフ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>使うタイミング</strong>:職場環境の調整が必要・配置変更を希望したい<br />
          <strong>役割</strong>:職場との橋渡し・配慮事項の調整・職場環境の評価<br />
          <strong>使い方</strong>:主治医・カウンセラーで整理した内容を、産業医経由で職場に伝える
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        慢性化したケースでは、<strong>これら3つを並行して使う</strong>ことが効果的です。
        単独ではなく組み合わせで使うことで、症状の管理・構造の整理・職場環境の調整が同時に進みます。
      </p>

      <h2>「治らない」と感じる時の心構え</h2>
      <p>
        慢性化を抜けるためには、以下の心構えが助けになります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「治らない自分」を責めない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          治らないのは弱さではなく、構造の問題です。
          自己否定を強めると、それ自体が新たな消耗源になります。
          「治らない自分」を責めず、「構造を整理する必要がある状態」と捉え直すことが、回復のスタート地点です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「治す」を一旦保留にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いつ治るのか」「どうすれば治るのか」と考え続けると、それ自体で消耗します。
          一旦「治す」を保留にして、「<strong>今、この状態で何ができるか</strong>」に焦点を当てます。
          できることが少しずつ増えていくこと自体が、回復のプロセスです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 短期で大幅な変化を期待しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          慢性化したケースでは、回復に時間がかかります。
          「来月までに治す」「3ヶ月で復職する」といった<strong>短期目標</strong>が、新たなプレッシャーになることがあります。
          数年単位の長期目線で、少しずつ整えていく姿勢が現実的です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「ゼロか100」をやめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「完全に治る」か「全く治らない」かの二択で考えると、ほとんどの状態が「治らない」になります。
          実際は、「<strong>少し楽になった</strong>」「<strong>1日のうち数時間は調子がいい</strong>」「<strong>以前より対処できるようになった</strong>」など、グラデーションの変化があります。
          小さな変化を認識する力が、回復への気力を支えます。
        </p>
      </div>

      <h2>こんな状態なら早めの整理を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・半年以上、燃え尽きの症状が続いている</p>
        <p>・休職と復職を何度も繰り返している</p>
        <p>・休んでも回復しない感覚が続いている</p>
        <p>・診断名が増えていっている(うつ・適応障害・身体症状)</p>
        <p>・「もう治らない」「一生このまま」と感じる頻度が増えた</p>
        <p>・自己否定の声が止まらない</p>
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
        <p className="font-medium text-stone-700 mb-2">バーンアウト関連シリーズ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link></li>
          <li>・<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link></li>
          <li>・<Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフケアが効かない理由</Link></li>
          <li>・<Link to="/articles/helper-burnout-vs-depression" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトとうつ病の違い</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/structural-counseling-method" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">構造整理型カウンセリングとは</Link></li>
          <li>・<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルとは</Link></li>
          <li>・<Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          慢性化したケースでは、構造の整理が回復の鍵です。
          いしずえカウンセリングが合うかどうかを、10項目で確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「治らない」と長く感じてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「治らない」のは弱さではなく、構造の問題です。長年抱えてきた構造ほど、自分一人では見えにくくなっています。構造を理解した専門家と一緒に整理することで、回復への道筋が見えてきます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-not-recovering"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "構造整理型カウンセリングとは何ですか?",
    a: "「いま自分に何が起きているのか」を、感情論ではなく構造として整理するカウンセリングのアプローチです。認知行動療法(CBT)・アクセプタンス&コミットメント・セラピー(ACT)・動機づけ面接(MI)・BPS(生物心理社会)モデル・トラウマインフォームドアプローチを統合的に使い、「なぜそうなるのか」を見える化することで、変化の方向が自分で選べるようになることを目指します。",
  },
  {
    q: "傾聴型カウンセリングとどう違いますか?",
    a: "傾聴型は「受容と共感」が中心で、安全な場でクライエントが感じていることを表現することを大切にします。構造整理型はこの「受容と共感」を土台にした上で、さらに「なぜそうなるのか」の構造を一緒に整理する点が異なります。傾聴型が「いまある気持ちを受け止める場」、構造整理型は「気持ちを受け止めた上で、構造を理解し変化の方向を選ぶ場」です。どちらが優れているわけではなく、必要なものが状態によって変わります。",
  },
  {
    q: "認知行動療法(CBT)と構造整理型はどう違いますか?",
    a: "CBTは「認知や行動のパターン」に焦点を当てる代表的な心理療法です。構造整理型はCBTを核の一つとしながらも、認知・行動だけでなく、関係性の構造・感情のパターン・環境(職場・家族)・職業構造など、より広範囲の「構造」を扱います。CBTが個人内の変化に強いのに対し、構造整理型は「個人を取り巻く構造全体」を見ることで、特に対人援助職など職業構造から消耗している方に効果を発揮しやすいアプローチです。",
  },
  {
    q: "「構造」とは具体的に何のことですか?",
    a: "「構造」とは、ある状態を生んでいる仕組みのことです。例えば「断れない」という状態には、①幼少期から形成された認知(『断ると嫌われる』)、②感情パターン(罪悪感が瞬時に作動する)、③関係性のパターン(他者優先の対人スタイル)、④職業構造(支援職という役割への期待)、⑤環境(職場文化や人手不足)、という複数の要素が絡んでいます。これら全てが「構造」です。構造を一つひとつ見える化することで、どこから変えられるかが見えてきます。",
  },
  {
    q: "どのくらいの期間で効果が出ますか?",
    a: "個人差が大きく、軽度の課題なら数回(3〜5回)、中程度なら2〜3ヶ月(8〜12回程度)、根深いパターンの整理なら半年以上かかることもあります。構造整理型は「短期で大幅に変わる」より「変化の方向が見えてくる」ことを重視します。初回〜3回目で「構造の見え方」が変わることが多く、そこからは自分で進める力がついていきます。",
  },
  {
    q: "どんな人に向いていますか?",
    a: "「なぜそうなるのか」を理解したい・漠然とした不安を構造として整理したい・共感だけでなく現実的な変化を望んでいる・厳しい指摘でも構造のためなら受け取れる、という方に向いています。特に対人援助職(看護師・介護士・福祉職・心理職・教員など)で消耗している方、「自己機能」を回復させたい方には強く効くアプローチです。逆に「とにかく話を聞いてほしい」段階の方には、傾聴型の方が合うことがあります。",
  },
  {
    q: "医療機関での治療と並行できますか?",
    a: "並行できます。むしろ並行することで効果が高まることが多いです。医療機関(心療内科・精神科)は診断・服薬・診断書発行などの医学的ケアを担い、カウンセリングは構造の整理・対処パターンの見直しを担います。両者は対立するものではなく、補完するものです。主治医に「カウンセリングも受けています」と伝えておくと、より一貫したケアが受けられます。",
  },
]

export default function StructuralCounselingMethod() {
  return (
    <ArticleLayout
      title="構造整理型カウンセリングとは——「なぜそうなるのか」を見える化するアプローチ【公認心理師】"
      description="「いま何が起きているのか」を構造として整理するカウンセリングのアプローチを公認心理師が解説。CBT・ACT・MI・BPSモデル・トラウマインフォームドを統合し、「なぜそうなるのか」を見える化することで変化の方向を一緒に探ります。傾聴型・CBTとの違い・5つの構造軸・効果が出るまでの期間まで網羅。"
      url="https://www.ishizue-counseling.jp/articles/structural-counseling-method"
      date="2026-05-24"
      tags={["self-function", "boundary", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「いま何が起きているのか」を構造として整理することで、「なぜそうなるのか」が見えてきます。見えると、変化の方向が自分で選べるようになります。
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
        カウンセリングには様々なアプローチがあります。
        「ただ話を聞いてもらえる場」「アドバイスをくれる場」「自分を客観視できる場」——
        どれを求めるかによって、合うカウンセリングが変わります。
      </p>

      <p>
        この記事では、いしずえカウンセリングが提供している<strong>「構造整理型カウンセリング」</strong>について、
        その内容・他のアプローチとの違い・向いている人・効果が出るまでの期間まで、整理して解説します。
      </p>

      <p>
        「カウンセリングを受けるか迷っている」「自分に合うアプローチを知りたい」という方は、参考にしてください。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・構造整理型カウンセリングとは(一文の定義)</li>
          <li>・なぜ「構造を整理する」アプローチが必要なのか</li>
          <li>・構造整理型の<strong>3ステップ</strong>(共感→構造化→変化の方向)</li>
          <li>・何を「構造」として整理するのか(<strong>5つの軸</strong>)</li>
          <li>・<strong>統合的アプローチ</strong>(CBT・ACT・MI・BPS・トラウマインフォームド)</li>
          <li>・傾聴型・CBTとの違い</li>
          <li>・どんな人に向いているか・期間の目安</li>
        </ul>
      </nav>

      <h2>構造整理型カウンセリングとは——一文で定義する</h2>
      <p>
        構造整理型カウンセリングとは、
      </p>

      <div className="my-4 p-5 rounded-2xl border-2 border-stone-300 bg-stone-50">
        <p className="text-sm leading-[2] text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「<strong>いま自分に何が起きているのか</strong>」を、感情論ではなく<strong>構造として整理する</strong>ことで、
          「<strong>なぜそうなるのか</strong>」を見える化し、
          <strong>変化の方向を自分で選べる</strong>状態を目指すカウンセリングのアプローチです。
        </p>
      </div>

      <p>
        重要なのは、構造整理型は「答えを教える」のではなく「<strong>構造が見える状態にする</strong>」アプローチだという点です。
        構造が見えると、自分で選ぶ力が育ちます。
      </p>

      <h2>なぜ「構造を整理する」アプローチが必要なのか</h2>
      <p>
        多くの方が「<strong>意志を強くすれば変わる</strong>」「<strong>気の持ちようを変えれば解決する</strong>」と感じています。
        しかし実際には、意志や気の持ちようでは変えられない<strong>構造</strong>が、私たちの日常を強く支配しています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">例:「断れない」という状態の構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「断ればいいだけ」「もっと自分を大事にして」と言われても、簡単には変わりません。
          なぜなら、「断れない」には次のような複数の構造が絡んでいるからです。
        </p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9] mt-2">
          <li>① 幼少期から形成された認知:「断ると嫌われる」</li>
          <li>② 感情パターン:断ろうとした瞬間、強い罪悪感が作動</li>
          <li>③ 関係性のパターン:他者優先の対人スタイルが習慣化</li>
          <li>④ 職業構造:支援職という役割への期待</li>
          <li>⑤ 環境:職場文化や人手不足</li>
        </ul>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          「断る練習」のような行動レベルの対処では、これらの構造に届きません。
          だから「気合いで頑張ろう」では変わらないのです。
        </p>
      </div>

      <p>
        構造整理型カウンセリングでは、これら全ての構造を<strong>一つひとつ見える化</strong>することで、
        「どこから変えられるか」「何を変えなくていいか」が見えてきます。
        見えると、変化への動きが自然に出てきます。
      </p>

      <h2>構造整理型の3ステップ</h2>
      <p>
        構造整理型カウンセリングは、必ず<strong>3つのステップ</strong>を踏みます。
        ②だけ、③だけ、というアプローチでは機能しません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ① 共感——まず受け止める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          いきなり構造分析に入ることはありません。
          まず「いま感じていること」を、判断や評価なしに受け止めます。
          安全な場が確保されないと、構造を見ることに耐えられないからです。
          このステップを飛ばすカウンセリングは「冷たい分析」になり、効果が出にくくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ② 構造化——「なぜそうなるのか」を見える化する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          受け止められたら、次は「<strong>なぜそうなるのか</strong>」を一緒に整理します。
          認知・感情・関係性・行動・環境という複数の構造を、対話を通じて見える化していきます。
          これは「<strong>あなたが悪いから</strong>」を見つけるためではなく、「<strong>構造として何が起きているか</strong>」を理解するためです。
          ここがいしずえカウンセリングが最も力を入れる部分です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ステップ③ 変化の方向——自分で選ぶ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          構造が見えてくると、「ここから変えられそう」「これは今は変えなくていい」という<strong>変化の方向</strong>が自然に見えてきます。
          カウンセラーが答えを与えるのではなく、<strong>あなた自身が選び取れる状態</strong>を作るのが、構造整理型の核心です。
          選ぶ力がついていくこと自体が、回復の指標になります。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        ①→②→③の流れは1回のセッションでも、複数回のセッションを通じても展開されます。
        重要なのは、3つのステップが循環的に進むことです。
      </p>

      <LineCtaCompassion />

      <h2>何を「構造」として整理するのか——5つの軸</h2>
      <p>
        構造整理型カウンセリングでは、以下の<strong>5つの軸</strong>から構造を見ていきます。
        どこに焦点を当てるかは、その方の状態によって変わります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 認知の構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分はどう物事を捉えているか」のパターン。
          例:「自分が頑張らないと回らない」「失敗は許されない」「断ると嫌われる」など、無意識に作動している前提を見える化します。
          認知行動療法(CBT)の知見が活きる軸です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情の構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「どんな場面で・どんな感情が・どう作動するか」のパターン。
          例:「断ろうとすると罪悪感」「人前で意見を求められると緊張」「相手の不機嫌を感じると不安」など、感情の発生パターンを整理します。
          一見「性格」に見えるものが、実は構造の結果だとわかってきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 関係性の構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「他者とどう関わっているか」のパターン。
          例:「相手に合わせすぎる」「距離を取りすぎる」「依存と回避を繰り返す」など、対人関係のパターンを見ていきます。
          <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル(内的作業モデル)</Link>や愛着理論の知見が活きる軸です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 行動パターンの構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「どんな状況で・どんな行動を取るか」のパターン。
          例:「ストレスを感じると過食」「不安が出ると先延ばし」「疲れると人を避ける」など、自動化された行動の連鎖を整理します。
          行動の背景にある機能(なぜその行動が起きているか)を見ることで、変化の入口が見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 環境・職業構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「どんな環境にいるか」「職業構造はどうか」を見る軸。
          例:「人手不足の職場」「『弱音を吐けない』文化」「家族からの期待」「経済的制約」など、個人を取り巻く構造を整理します。
          これがいしずえカウンセリングの特徴で、特に<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職</Link>の方では、個人内の構造だけでなく職業構造まで含めて見ることで、初めて全体像が見えてきます。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        この5軸を統合的に見ることで、「自分一人の問題」と捉えていた状態が、実は<strong>複数の構造が重なって起きている</strong>ことが見えてきます。
        見えること自体が、消耗を和らげる効果があります。
      </p>

      <h2>統合的アプローチ——5つの心理療法を統合する</h2>
      <p>
        構造整理型カウンセリングは、特定の一つの心理療法ではなく、<strong>5つの代表的なアプローチを統合的に使う</strong>のが特徴です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 認知行動療法(CBT)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          認知(考え方)と行動のパターンを変えることで状態の改善を目指す代表的な心理療法です。
          構造整理型では、CBTの「<strong>認知の構造を見える化する</strong>」技法を、特に①認知の構造の軸で活用します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② アクセプタンス&コミットメント・セラピー(ACT)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「思考や感情を変える」のではなく「<strong>思考や感情との関わり方を変える</strong>」アプローチ。
          「不安を消す」のではなく「不安があっても大事なことに動ける」状態を目指します。
          構造整理型では、認知や感情を「変えるべきもの」ではなく「観察するもの」として扱う際に活用します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 動機づけ面接(MI)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          変化への動機づけを、対話を通じて引き出すアプローチ。
          「あなたはこうすべき」ではなく、「<strong>あなた自身がどうしたいか</strong>」を一緒に探ります。
          構造整理型では、構造が見えてきた後の「ステップ③変化の方向」で核として活用します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ BPSモデル(生物心理社会モデル)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          状態を「<strong>生物的(体・脳)</strong>」「<strong>心理的(認知・感情)</strong>」「<strong>社会的(関係性・職場・家族)</strong>」の3軸で統合的に理解する考え方です。
          構造整理型では、5つの軸全体を統合する枠組みとして活用します。
          「心の問題」だけでなく「身体の状態」「環境の影響」も含めて見ることで、より正確な構造把握が可能になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ トラウマインフォームドアプローチ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「トラウマがある可能性を前提として」関わるアプローチ。
          支援職や対人援助職には、過去のトラウマ体験や二次受傷の蓄積がある方が少なくありません。
          構造整理型では、再外傷化を避けながら安全に構造を扱う技法として、このアプローチを基本姿勢にしています。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これら5つは、別々の流派として対立するものではなく、<strong>統合的に使うことで効果が最大化</strong>します。
        その方の状態・課題・段階に応じて、強調するアプローチを変えていきます。
      </p>

      <h2>傾聴型・他のアプローチとの違い</h2>
      <p>
        構造整理型と、他の代表的なアプローチの違いを整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">傾聴型カウンセリングとの違い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          傾聴型は「受容と共感」が中心で、安全な場で気持ちを表現することを大切にします。
          構造整理型は<strong>受容と共感を土台にした上で</strong>、「なぜそうなるのか」を一緒に整理する点が異なります。
          深い悲しみや喪失の直後には傾聴型が必要なことが多く、状態が落ち着いてから構造整理型が役立つ場合もあります。
          どちらが優れているわけではなく、<strong>必要なものが状態によって変わる</strong>と考えるのが現実的です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">純粋なCBTとの違い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          CBTは「<strong>認知と行動のパターンを変える</strong>」ことに焦点を当てる代表的な心理療法です。
          構造整理型はCBTを核の一つとしつつ、認知・行動だけでなく、関係性・感情・環境・職業構造まで広範に扱います。
          CBTが「個人内の変化」に強いのに対し、構造整理型は「<strong>個人を取り巻く構造全体</strong>」を扱う点が違いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">精神分析的アプローチとの違い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          精神分析的アプローチは、無意識・幼少期・夢などを深く扱うのが特徴で、長期間(数年単位)の対話を前提とすることが多いです。
          構造整理型は<strong>短期〜中期(数回〜数ヶ月)</strong>で「構造が見える状態」を目指す点が異なります。
          より実践的・実用的なアプローチです。
        </p>
      </div>

      <h2>どんな人に向いているか</h2>
      <p>
        構造整理型カウンセリングが特に効果を発揮しやすいのは、以下のような方です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">向いている方の特徴</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・「<strong>なぜそうなるのか</strong>」を理解したい気持ちが強い</li>
          <li>・漠然とした不安を、構造として整理したい</li>
          <li>・自分のパターンを客観視できるようになりたい</li>
          <li>・共感だけでなく、現実的な変化を望んでいる</li>
          <li>・厳しい指摘でも、構造のためなら受け取れる</li>
          <li>・「自分で考える」プロセスを大事にしたい</li>
          <li>・対人援助職(看護・介護・福祉・心理・教育)である</li>
          <li>・<Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>を回復させたい</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">あまり向いていない方の特徴</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・「とにかく話を聞いてほしい」だけ</li>
          <li>・分析や整理ではなく、共感だけを求めている</li>
          <li>・変化より、まず安心を最優先したい</li>
          <li>・カウンセラーからの指摘・フィードバックを受けたくない</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        「向いていない」と書いた方も、状態が変われば構造整理型が合うようになります。
        まず安心と受容を体験した後、構造整理に移る方も多いです。詳しくは<Link to="/articles/counseling-matching-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">合う人・合わない人チェック(10項目)</Link>で確認してください。
      </p>

      <h2>どんな変化が期待できるか</h2>
      <p>
        構造整理型カウンセリングを通じて、以下のような変化が起きやすいです。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">短期(3〜5回)</p>
          <p className="text-stone-600 leading-[1.9]">
            「<strong>構造の見え方</strong>」が変わる。「自分一人の問題」と捉えていたことが、「複数の構造が重なって起きている」とわかってきます。
            これだけで消耗が和らぐ方が多いです。「<strong>自分が悪いんじゃなかった</strong>」という気づき。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">中期(2〜3ヶ月)</p>
          <p className="text-stone-600 leading-[1.9]">
            日常での「<strong>気づきの瞬間</strong>」が増えてくる。「あ、今のは○○のパターンだ」と、自分のパターンを観察できるようになります。
            観察できると、自動的な反応に飲み込まれにくくなります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">長期(半年以上)</p>
          <p className="text-stone-600 leading-[1.9]">
            「<strong>選ぶ力</strong>」がついてくる。同じパターンが出てきても、「<strong>どう関わるか</strong>」を意識的に選べるようになります。
            完全に消すのではなく「上手く付き合える」状態が、最も持続可能な変化です。
          </p>
        </div>
      </div>

      <h2>効果が出るまでの期間</h2>
      <p>
        個人差が大きいですが、以下が目安です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">期間の目安</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>軽度の課題</strong>(状態の整理が中心):3〜5回(1〜2ヶ月)</li>
          <li>・<strong>中程度の課題</strong>(パターンの見直しが必要):8〜12回(2〜3ヶ月)</li>
          <li>・<strong>根深いパターンの整理</strong>(幼少期から続くもの):20回以上(半年以上)</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        構造整理型は「<strong>短期で大幅に変わる</strong>」より「<strong>変化の方向が見えてくる</strong>」ことを重視します。
        初回〜3回目で「構造の見え方」が変わることが多く、そこからは自分で進める力がついていきます。
        「カウンセリングをやめてからも力が育っていく」アプローチを目指しています。
      </p>

      <h2>他のサポートとの併用</h2>
      <p>
        構造整理型カウンセリングは、他のサポートと併用することで効果が高まります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">医療機関(心療内科・精神科)との併用</p>
          <p className="text-stone-600 leading-[1.9]">
            身体症状が強い場合・服薬が必要な場合は、医療機関での治療と並行することが現実的です。
            医療は「医学的ケア(診断・服薬・診断書)」、カウンセリングは「構造の整理」と役割を分担できます。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">職場のサポート(産業医・上司)との併用</p>
          <p className="text-stone-600 leading-[1.9]">
            職場環境の調整が必要な場合は、産業医や上司との対話と並行できます。カウンセリングで整理した内容を、産業医面談で具体的な配慮事項として伝えることが可能です。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">セルフケアとの併用</p>
          <p className="text-stone-600 leading-[1.9]">
            <Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息</Link>・身体ケア・運動・関係性の整理など、日常のセルフケアと併用することで、カウンセリングでの整理が定着しやすくなります。
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
        <p className="font-medium text-stone-700 mb-2">いしずえカウンセリングのアプローチ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/counseling-matching-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">このカウンセリングが合う人・合わない人(10項目)</Link></li>
          <li>・<Link to="/profile" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">プロフィール(臨床経験・資格)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を理解する関連記事</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルとは</Link></li>
          <li>・<Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link></li>
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">対人援助職の方に</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
        </ul>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">構造整理型カウンセリングを受けてみたい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          まず「合うかどうか」を確認してから
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          カウンセリングは「合う・合わない」がはっきり分かれます。10項目のチェックで、いしずえカウンセリングが合うかどうかを確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          合う人・合わない人チェック(10項目)
        </Link>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">無料 ／ 1分で確認できます</p>
      </div>

      <div className="my-6 p-5 rounded-2xl border-2 border-stone-300 bg-stone-50">
        <p className="text-[10px] text-stone-500 mb-1">いきなり申し込むのが不安な方へ</p>
        <p className="text-sm font-medium text-stone-800 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          初回はメール相談無料です
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          いきなり対面・オンラインのカウンセリングを申し込むのが不安な方には、メール相談(初回30分無料)から始めることもできます。文字で「今の状態」を整理することから始められます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#2C1F14", textDecoration: "none" }}>
          まずは状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/structural-counseling-method"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は、いしずえカウンセリング(公認心理師・松本龍児)の臨床実践と15年以上の現場経験(障害福祉・累計300名以上の臨床)をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

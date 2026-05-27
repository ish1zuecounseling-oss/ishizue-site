import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群の4段階モデルとは何ですか?",
    a: "1980年に心理学者エーデルウィッチ(Jerry Edelwich)とブロドスキー(Archie Brodsky)が、対人援助職の燃え尽き進行を研究して提唱したモデルです。「熱心期(理想期)→停滞期→欲求不満期(葛藤期)→無関心期」の4段階で燃え尽きが進行することを示しました。各段階で症状・心理状態・対処法が異なるため、「自分はどの段階か」を理解することで、適切な対処を選べるようになります。",
  },
  {
    q: "段階は必ず順序通りに進みますか?",
    a: "必ずしも順序通りではありません。段階は「典型的な進行パターン」を示すもので、実際には①段階を行き来する、②停滞期から無関心期に飛ぶ、③熱心期と欲求不満期を繰り返すなど、個人差があります。重要なのは「段階を厳密に当てはめる」ことではなく、「今の状態を構造として理解する」ことです。",
  },
  {
    q: "自分はどの段階か、どう判断すればいいですか?",
    a: "各段階の特徴的な感覚で判断します。①熱心期=「仕事に強い意義を感じる」、②停滞期=「以前のような充実感がない」、③欲求不満期=「うまくいかない、現実に幻滅」、④無関心期=「何も感じない、関心を失った」。複数の段階に当てはまる場合もあり、その場合は「最も強く感じる段階」が今の状態に近いです。本記事内の「自分はどの段階か」セクションを参照してください。",
  },
  {
    q: "段階を逆行(回復)することはできますか?",
    a: "できます。ただし「熱心期に戻る」のではなく「持続可能な状態に変化する」と捉えるのが現実的です。無関心期からでも回復は可能ですが、構造的な対処が必要です。「以前と同じように熱心になる」を目指すと、再発しやすくなります。「熱心ではないが、安定して関われる」状態を目指すのが、長期的に持続可能なゴールです。",
  },
  {
    q: "無関心期になっても回復できますか?",
    a: "回復できます。ただし時間がかかります。無関心期は感情の麻痺・脱人格化が強く出ている状態で、構造的な対処(医療機関の受診・カウンセリング・環境調整)が必須です。「自分で何とかしよう」と一人で抱えると、慢性化のリスクが高まります。早めの専門家相談が、回復への近道です。",
  },
  {
    q: "4段階モデルとMaslachの3要素は何が違いますか?",
    a: "Maslachの3要素(情緒的消耗・脱人格化・達成感低下)は「燃え尽きの構成要素」を示すモデルで、燃え尽きが「どんな状態か」を分析します。一方、Edelwich & Brodskyの4段階は「燃え尽きがどう進行するか」を時間軸で示すモデルです。両者は対立せず補完関係にあり、Maslachで「今何が起きているか」を、Edelwich & Brodskyで「どこに向かっているか」を見ることができます。",
  },
  {
    q: "対人援助職以外でも当てはまりますか?",
    a: "当てはまります。Edelwich & Brodskyのモデルは対人援助職向けに開発されましたが、その後の研究で、教育職・医療職・接客業・営業職など、対人的負荷の高い職種に広く適用できることがわかっています。育児・介護など、家庭での対人援助でも同様の進行パターンが見られます。",
  },
]

export default function BurnoutFourStages() {
  return (
    <ArticleLayout
      title="燃え尽き症候群の4段階——熱心期から無関心期までの進行を理解する【公認心理師】"
      description="燃え尽き症候群(バーンアウト)の進行を「熱心期→停滞期→欲求不満期→無関心期」の4段階で解説。Edelwich & Brodsky のモデルに基づき、各段階の症状・心理状態・対処法を整理。「自分は今どの段階か」を理解し、適切な対処を選ぶための実用ガイド。公認心理師監修。"
      url="https://www.ishizue-counseling.jp/articles/burnout-four-stages"
      date="2026-05-27"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        燃え尽き症候群は、ある日突然起きるのではなく、4段階を経て進行します。「自分は今どこにいるか」が見えると、適切な対処が選べます。Edelwich & Brodsky の4段階モデルを、構造論で再解釈します。
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
        「以前は仕事が好きだったのに、今は何も感じない」
        「最初は意気込んでいたが、徐々にモチベーションが落ちていった」
        「自分は今どの状態にいるんだろう」——
      </p>

      <p>
        燃え尽き症候群(バーンアウト)は、ある日突然起きるものではありません。
        多くの場合、<strong>4つの段階</strong>を経て徐々に進行していきます。
      </p>

      <p>
        1980年に心理学者<strong>エーデルウィッチ(Jerry Edelwich)とブロドスキー(Archie Brodsky)</strong>は、対人援助職の燃え尽き進行を研究し、「<strong>熱心期 → 停滞期 → 欲求不満期 → 無関心期</strong>」の4段階モデルを提唱しました。
        現在でも燃え尽き理解の代表的なモデルとして使われています。
      </p>

      <p>
        この記事では、4段階モデルを<strong>構造整理型カウンセリング</strong>の視点で再解釈し、「自分はどの段階か」「各段階で何をすべきか」を実用的に整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・なぜ「段階」で理解することが大事か</li>
          <li>・<strong>Edelwich & Brodsky の4段階モデル</strong>の全体像</li>
          <li>・各段階の症状・期間・心理状態・対処法</li>
          <li>・段階の進行は「直線」とは限らない理由</li>
          <li>・<strong>「自分は今どの段階か」</strong>を判断する方法</li>
          <li>・段階を逆行する(回復する)ことは可能か</li>
        </ul>
      </nav>

      <h2>なぜ「段階」で理解することが大事か</h2>
      <p>
        燃え尽きを「<strong>症状</strong>」だけで捉えると、対処が画一的になりがちです。
        「疲れているから休む」「やる気がないから頑張る」では、段階によっては逆効果になることがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">段階で理解するメリット</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>① 「自分はどこにいるか」が明確になる(現在地の把握)</li>
          <li>② 「次に何が起きやすいか」が予測できる(進行の見通し)</li>
          <li>③ 段階に応じた対処を選べる(対処の最適化)</li>
          <li>④ 「自分はおかしい」という不安が和らぐ(典型的な進行と知る)</li>
          <li>⑤ 周囲(家族・職場)とも状態を共有しやすい(共通言語の獲得)</li>
        </ul>
      </div>

      <h2>Edelwich & Brodsky の4段階モデル</h2>
      <p>
        以下が、4段階モデルの全体像です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">4段階の概要</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li><strong>第1段階:熱心期(Enthusiasm)</strong> — 理想に燃え、高い意欲を持つ</li>
          <li><strong>第2段階:停滞期(Stagnation)</strong> — 理想と現実のギャップに気づき始める</li>
          <li><strong>第3段階:欲求不満期(Frustration)</strong> — 葛藤・怒り・無力感が前面に出る</li>
          <li><strong>第4段階:無関心期(Apathy)</strong> — 感情の麻痺・関心の喪失</li>
        </ul>
      </div>

      <p>
        以下で、各段階を詳しく見ていきます。
      </p>

      <h2>第1段階:熱心期(Enthusiasm)——理想に燃える時期</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">特徴</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事に強い意義を感じ、高い意欲で取り組む時期。「人の役に立ちたい」「世の中を変えたい」という理想が原動力になります。新人や転職直後によく見られますが、ベテランでも新しい役割につくとこの段階を経験します。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">心理状態</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・仕事に強いやりがいを感じる</li>
          <li>・「自分が頑張れば変えられる」という万能感</li>
          <li>・残業も苦にならない</li>
          <li>・「自分が役に立っている」という強い実感</li>
        </ul>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">構造論からの視点</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          この段階の危うさは、「<strong>理想と自己価値が強く結びついている</strong>」ことです。仕事の成果が自己価値の源になっており、ここでつまずくと、次の段階へ進みやすくなります。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">この段階での対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>熱心であること</strong>」自体は素晴らしいですが、「熱心であり続けること」を前提にしないこと。自己複雑性(仕事以外の自分)を意識的に保つことが、後の段階を防ぎます。
        </p>
      </div>

      <h2>第2段階:停滞期(Stagnation)——「以前のような充実感がない」</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">特徴</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          理想と現実のギャップに気づき始める時期。仕事は続けられるが、以前のような充実感を感じにくくなります。「自分はもっとできるはず」という気持ちと「現実はこんなものか」という諦めが交錯します。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">心理状態</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・以前ほどの意欲が出ない</li>
          <li>・休日や給与・待遇への関心が高まる</li>
          <li>・「これでいいのかな」という疑問が出始める</li>
          <li>・プライベートを大事にしたい気持ちが強くなる</li>
        </ul>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">構造論からの視点</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          この段階では、「<strong>熱心期で投影していた理想</strong>」が、現実とのギャップで揺らぎ始めます。これは「失敗」ではなく、自然な過程です。問題は、ここで「もっと頑張ろう」と理想を取り戻そうとすると、消耗が深まることです。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">この段階での対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「<strong>理想を手放す</strong>」ことを許可します。完璧主義を緩め、「ほどほど」「できる範囲」での関わり方を学ぶ時期です。プライベートを大事にすることは「逃げ」ではなく、持続可能な関わりへの調整です。
        </p>
      </div>

      <h2>第3段階:欲求不満期(Frustration)——葛藤・怒り・無力感</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">特徴</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          理想と現実のギャップに「<strong>怒り</strong>」「<strong>無力感</strong>」「<strong>葛藤</strong>」が強く出てくる時期。仕事の構造・職場の問題・自分自身に対する不満が前面に出ます。身体症状も出始めることが多いです。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">心理状態</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・職場・上司・制度への強い不満</li>
          <li>・「努力しても変わらない」無力感</li>
          <li>・イライラ・怒りが頻発する</li>
          <li>・「自分は何のために働いているのか」という根源的な葛藤</li>
          <li>・身体症状(不眠・頭痛・胃痛など)が出始める</li>
        </ul>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">構造論からの視点</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          この段階の特徴は、<strong>感情がまだ動いている</strong>こと。怒り・無力感も感情の動きであり、無関心期との大きな違いです。ここで「<strong>感情を表現できる場</strong>」「<strong>構造を整理する機会</strong>」があれば、無関心期への進行を防げる可能性が高い段階です。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">この段階での対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一人で抱え込まないこと。怒りや無力感を信頼できる人・専門家に話すことが必要です。同時に、消耗源(職場環境・関係性)からの物理的な距離を作ること。身体症状が長期化している場合は、医療機関の受診を検討してください。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>第4段階:無関心期(Apathy)——感情の麻痺・関心の喪失</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">特徴</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情が動かなくなり、仕事への関心も失われる時期。怒りや葛藤すら感じなくなり、「<strong>何も感じない</strong>」状態が続きます。最も深刻な段階で、回復にも時間がかかります。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">心理状態</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・利用者・顧客・同僚への関心が消える</li>
          <li>・「機械的に業務をこなす」感覚</li>
          <li>・楽しい・嬉しい・悲しいなどの感情が動かない(脱人格化)</li>
          <li>・「もう何もしたくない」という慢性的な疲弊</li>
          <li>・休日も気持ちが切り替わらない</li>
          <li>・希死念慮が出ることもある</li>
        </ul>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">構造論からの視点</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          この段階の「無関心」は、性格の変化ではなく<strong>長期的な消耗の結果としての防衛反応</strong>です。心が「これ以上感じないようにする」と消耗を防いでいる状態。ここから回復するには、「<strong>感じる力</strong>」を徐々に取り戻していく必要があります。
        </p>
        <p className="text-sm font-medium text-stone-700 mt-3 mb-1">この段階での対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分で何とかしよう」とする時期ではありません。<strong>医療機関の受診</strong>、<strong>カウンセリング</strong>、<strong>休職</strong>を含めた、構造的な対処が必須です。一人で抱えると慢性化のリスクが高まります。詳しくは<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link>を参照してください。
        </p>
      </div>

      <h2>段階の進行は「直線」とは限らない</h2>
      <p>
        4段階モデルは「典型的な進行パターン」を示すもので、すべての人が同じ順序で進むわけではありません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">実際にはこんなパターンがある</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>段階を行き来する</strong>:停滞期と欲求不満期を繰り返す</li>
          <li>・<strong>段階を飛ばす</strong>:停滞期から無関心期に飛ぶ(ショック的な出来事の場合)</li>
          <li>・<strong>長く停滞する</strong>:停滞期が数年続くケース</li>
          <li>・<strong>急進する</strong>:数ヶ月で熱心期から無関心期に進む</li>
          <li>・<strong>逆行する</strong>:適切な対処で前の段階に戻ることもある</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        重要なのは「段階を厳密に当てはめる」ことではなく、「<strong>今の自分の状態を構造として理解する</strong>」ことです。
      </p>

      <h2>「自分は今どの段階か」を判断する方法</h2>
      <p>
        各段階の特徴的な感覚で判断できます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">段階別の特徴的な感覚</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li><strong>熱心期</strong>:「仕事に強い意義を感じる」「もっと貢献したい」</li>
          <li><strong>停滞期</strong>:「以前ほどの充実感がない」「もっとプライベートを大事にしたい」</li>
          <li><strong>欲求不満期</strong>:「うまくいかない」「怒りや無力感が頻発する」「身体症状が出始める」</li>
          <li><strong>無関心期</strong>:「何も感じない」「関心を失った」「機械的にこなしている」</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        複数の段階に当てはまる場合は、「<strong>最も強く感じる段階</strong>」が現在地に近いです。
        客観的な判断には、<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link>も活用してください。
      </p>

      <h2>段階を逆行することはできるか——回復の可能性</h2>
      <p>
        結論から言えば、<strong>段階を逆行(回復)することは可能</strong>です。
        ただし、「以前と同じ熱心期に戻る」ことを目指すのは現実的ではありません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">回復の現実的なゴール</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          回復のゴールは「熱心期に戻る」ではなく、「<strong>持続可能な状態に変化する</strong>」ことです。
          「熱心ではないが、安定して関われる」「理想と現実のバランスが取れている」状態を目指すのが、長期的に持続可能なゴールです。
          「以前のように熱心になる」を目標にすると、同じパターンで再発するリスクが高まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">段階別の回復可能性</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>熱心期→予防的対処</strong>:自己複雑性を保つ・休息を確保する</li>
          <li>・<strong>停滞期</strong>:数週間〜1〜2ヶ月で回復可能。理想を手放す調整</li>
          <li>・<strong>欲求不満期</strong>:3〜6ヶ月で回復可能。構造的な対処が必要</li>
          <li>・<strong>無関心期</strong>:半年〜1年以上。専門家サポート必須</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        早めの段階で気づいて対処するほど、回復が早く、再発リスクも低くなります。
      </p>

      <h2>構造論からの再解釈——いしずえ独自の視点</h2>
      <p>
        Edelwich & Brodskyの4段階モデルは、症状の進行を示しています。
        いしずえカウンセリングでは、これを<strong>構造の変化</strong>として再解釈します。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">熱心期の構造</p>
          <p className="text-stone-600 leading-[1.9]">「自分の価値=仕事の成果」という<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">条件付き自己価値</Link>が強く作動。<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>が低い状態でも、「役立てる自分」で支えられている。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">停滞期の構造</p>
          <p className="text-stone-600 leading-[1.9]">理想に投影していたエネルギーが減退。「条件付き自己価値」が揺らぎ始め、「役に立てる自分」だけでは自己価値を支えられなくなる兆候。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">欲求不満期の構造</p>
          <p className="text-stone-600 leading-[1.9]">「条件付き自己価値」と現実が衝突。<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>で生きてきたことの代償が表面化し、自分の感覚と現実のギャップに葛藤する。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">無関心期の構造</p>
          <p className="text-stone-600 leading-[1.9]">自己機能(感じる・選ぶ・関わる)が深く消耗。心が「これ以上感じない」と防衛反応を起こした状態。<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能の低下</Link>が深まっている。</p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        この視点から見ると、回復は「<strong>症状の改善</strong>」ではなく「<strong>消耗を生む構造そのものの変化</strong>」だとわかります。
        条件付き自己価値・他人軸・自己複雑性の低下——これらの構造を整理することで、4段階のサイクルから抜けることができます。
        詳しくは<Link to="/articles/structural-counseling-method" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">構造整理型カウンセリングとは</Link>を参照してください。
      </p>

      <h2>段階別の対処——まとめ</h2>
      <p>
        最後に、各段階での対処を整理します。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">熱心期での対処(予防)</p>
          <p className="text-stone-600 leading-[1.9]">・自己複雑性を保つ(仕事以外の自分を育てる)・休息を確保する・「熱心であり続ける」を前提にしない</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">停滞期での対処</p>
          <p className="text-stone-600 leading-[1.9]">・「理想を手放す」を許可する・プライベートを大事にする・「ほどほど」を学ぶ・セルフチェックで現在地を確認</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">欲求不満期での対処</p>
          <p className="text-stone-600 leading-[1.9]">・感情を言葉にする場を持つ・カウンセリングを検討・物理的な距離を作る・身体症状が長期化していれば受診</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">無関心期での対処</p>
          <p className="text-stone-600 leading-[1.9]">・医療機関の受診を最優先・休職を視野に入れる・カウンセリングと並行・一人で抱えない</p>
        </div>
      </div>

      <h2>こんな状態なら早めの対処を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「自分は今どの段階か」と不安を感じる</p>
        <p>・複数の段階の感覚が同時に出ている</p>
        <p>・身体症状(不眠・頭痛・胃痛)が長期化している</p>
        <p>・感情が動かない・関心が消えていく感覚がある</p>
        <p>・休んでも気持ちが切り替わらない</p>
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
        <p className="font-medium text-stone-700 mb-2">燃え尽き関連シリーズ(7部作完成)</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-early-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の初期症状・前兆(10サイン)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?(期間)</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?(受診)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法(7アプローチ)</Link></li>
          <li>・<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link></li>
          <li>・<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない(慢性化)</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/structural-counseling-method" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">構造整理型カウンセリングとは</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない(条件付き自己価値)</Link></li>
          <li>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性とは</Link></li>
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「今どの段階か」を構造として整理することは、一人では難しいことが多いです。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分は今どの段階か」を整理したい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          4段階モデルは「典型的な進行パターン」ですが、実際の状態は人それぞれです。「あなたは今どこにいて、何が起きているか」を構造として整理することで、適切な対処が見えてきます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-four-stages"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

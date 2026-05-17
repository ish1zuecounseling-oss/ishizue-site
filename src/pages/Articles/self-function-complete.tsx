import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自己機能とは何ですか?",
    a: "自己機能とは、「感じる」「望む」「選ぶ」「自分の状態に気づく」など、自分という存在を機能させる心理的な働きの総称です。これは固定された性格ではなく、ストレス・消耗・トラウマ等の影響で変動する機能であり、低下することも回復することもあります。",
  },
  {
    q: "自己機能が低下するとどうなりますか?",
    a: "「自分が何を感じているかわからない」「何を望んでいるかわからない」「決められない」「疲れているのに気づかない」といった状態が起きます。さらに進むと、空虚感・抑うつ・燃え尽きへとつながります。日常の中で「自分」が薄くなっていく感覚として体験されることが多いです。",
  },
  {
    q: "自己機能と自己肯定感は同じですか?",
    a: "違います。自己肯定感は「自分を肯定的に評価する感覚」ですが、自己機能はもっと根本的な「自分を機能させる働き」のことです。自己機能が低下している状態では、肯定感を高めようとしても土台がないため効果が出ません。まず機能の回復が先決です。",
  },
  {
    q: "自己機能はどうすれば回復しますか?",
    a: "「強くなろう」「自分を変えよう」というアプローチではなく、縮んだ機能を取り戻すアプローチが効果的です。具体的には、身体感覚から取り戻す・小さな好みを拾い直す・役割外の自分を保つ・外から整理する場を持つ——といった方向が、自己機能の回復につながります。",
  },
  {
    q: "支援職に自己機能低下が多いのはなぜですか?",
    a: "支援職は感情労働・共感疲労・役割同一化など、自己機能を縮小させる構造の中で働いています。「相手のために自分の感情を抑える」「役割としての自分が中心になる」状態が長く続くと、「感じる自分」「望む自分」が機能しなくなっていきます。これは個人の弱さではなく、職業構造の影響です。",
  },
  {
    q: "自己機能を高めるトレーニングはありますか?",
    a: "「高める」というよりは「取り戻す」プロセスです。マインドフルネス・身体感覚への注意・小さな好みの記録・セルフコンパッションなど、心理学的に効果が示されているアプローチがあります。ただし重要なのは「方法」よりも「自分の機能が縮小していることに気づく」ことです。気づくことが回復の出発点になります。",
  },
]

export default function SelfFunctionComplete() {
  return (
    <ArticleLayout
      title="自己機能とは——感じる・望む・選ぶの心理的働きと回復【公認心理師・総合解説】"
      description="自己機能とは「感じる」「望む」「選ぶ」など、自分を機能させる心理的働きのこと。自己機能低下のサイン・支援職に多い理由・関連する概念(自己複雑性・空虚感・感情労働)・回復の方向を公認心理師が総合解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-function-complete"
      date="2026-05-18"
      tags={["self-function", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自分が何を感じているかわからない」「何を望んでいるかわからない」——これは自己機能が縮小しているサインです。
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
        「自分が何を感じているかわからない」「何を望んでいるかわからない」「決められない」——
        こうした状態が続いているとしたら、それは<strong>自己機能の低下</strong>として理解できる現象です。
      </p>

      <p>
        この記事は、自己機能に関する<strong>総合解説のピラー記事</strong>です。
        自己機能とは何か・どうやって低下するのか・関連する心理学概念・回復の方向を整理しました。
        さらに深く知りたい領域は、各リンクから個別記事に進めます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・自己機能とは何か(基本概念)</li>
          <li>・自己機能の4つの構成要素</li>
          <li>・自己機能低下のサインと段階</li>
          <li>・関連する心理学概念(自己複雑性・感情労働・共感疲労との関係)</li>
          <li>・支援職に多い理由</li>
          <li>・回復の方向と具体的なアプローチ</li>
        </ul>
      </nav>

      <h2>自己機能とは何か</h2>
      <p>
        自己機能とは、自分という存在を成り立たせる<strong>心理的な働きの総称</strong>です。
        「感じる」「望む」「選ぶ」「自分の状態に気づく」など、自分という人間を機能させるためのさまざまな心理的能力が含まれます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">重要なポイント</p>
        <div className="space-y-2 text-sm text-stone-600 leading-relaxed mt-2">
          <p>・自己機能は<strong>固定された性格ではない</strong></p>
          <p>・ストレス・消耗・トラウマで<strong>変動する</strong></p>
          <p>・低下することも、<strong>回復することもある</strong></p>
          <p>・「強さ」や「能力」とは別の次元の話</p>
        </div>
      </div>

      <h2>自己機能の4つの構成要素</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感じる機能</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          身体感覚・感情を感じ取る機能です。「お腹がすいた」「疲れた」「うれしい」「悲しい」など、内側の状態に気づく能力。
          これが縮小すると、<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情がわからない</Link>状態になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 望む機能</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分が何を望んでいるかを感じる機能です。「あれが欲しい」「これをしたい」という欲求・好みを感じる能力。
          これが縮小すると、<Link to="/articles/what-do-i-want" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「何がしたいかわからない」</Link>状態になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 選ぶ機能</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の意志で選択する機能です。何を食べるか・どこに行くか・誰と過ごすかなど、小さな選択から大きな決断まで。
          これが縮小すると、決められない・他人の意見に流される・選択を回避する状態になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 気づく機能(メタ認知)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の状態を客観的に観察する機能です。「今、自分は疲れている」「今、自分は怒っている」と自覚する能力。
          これが縮小すると、限界まで頑張ってしまう・気づいたときには倒れている、という事態が起きます。
        </p>
      </div>

      <h2>自己機能低下の3段階</h2>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">LEVEL 1</span>
              <span className="text-[11px] text-stone-500">違和感の段階</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「あれ?」と感じることが増える
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p>・以前ほど食事が楽しめない</p>
            <p>・趣味への興味が薄れている</p>
            <p>・「何をしたいか」を聞かれて答えに詰まる</p>
            <p>・疲れているのに気づきにくくなっている</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-600 tracking-wider font-medium">LEVEL 2</span>
              <span className="text-[11px] text-stone-600">機能縮小の段階</span>
            </div>
            <p className="text-sm font-medium text-stone-900 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「自分」が薄くなっている感覚
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50/40">
            <p>・「自分が何を感じているかわからない」</p>
            <p>・「何を望んでいるか思い浮かばない」</p>
            <p>・選択が常に他人軸で決まっている</p>
            <p>・役割を演じることが基本になっている</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと:</strong>外から整理する場を持つことが有効です。一人で取り戻すことは難しい段階です。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-100 tracking-wider font-medium">LEVEL 3</span>
              <span className="text-[11px] text-stone-200">機能停止に近い段階</span>
            </div>
            <p className="text-sm font-medium text-white mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「自分」がほぼ感じられない
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50">
            <p>・空虚感が日常を覆っている</p>
            <p>・自分が何者なのかわからない</p>
            <p>・身体感覚(空腹・疲労・痛み)が薄い</p>
            <p>・「ただ生きているだけ」という感覚</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと:</strong>専門家(カウンセリング・医療)への相談を強く推奨します。
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed">
        ※ さらに詳しい解説は <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下の構造</Link> をご覧ください。
      </p>

      <LineCtaCompassion />

      <h2>関連する心理学概念</h2>
      <p>
        自己機能は、心理学のさまざまな概念と関連しています。それぞれの概念を理解することで、自己機能低下を多面的に捉えられるようになります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自己複雑性(Self-Complexity)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己概念がどれだけ多面的かを示す概念です。「仕事人としての自分」「家族の中の自分」「趣味人としての自分」など、複数の側面を持つことが心理的健康と関係します。
          自己機能低下と<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>の縮小は、しばしば並行して起きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情労働(Emotional Labor)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事の中で自分の感情を管理・抑制することを求められる労働形態です。
          支援職・接客業に特に多く、長期化すると「感じる機能」が縮小していきます。
          自己機能低下の主要な原因の一つです。詳細は<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link>をご覧ください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 共感疲労(Compassion Fatigue)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他者の苦痛に共感し続けることで起きる消耗です。
          自分の感情を相手に向け続けるうちに、自分自身の感情にアクセスできなくなる——これが自己機能低下につながります。
          詳細は<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link>をご覧ください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 他人軸・自己中心化の欠如</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の意志ではなく、他人の評価・期待を中心に動く状態です。
          <Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>が定着すると、自己機能(特に「望む」「選ぶ」)が機能しなくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ ワーキングモデル(内的作業モデル)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          幼少期の体験から作られる「自分・他者・関係」についての内側のパターンです。
          「自分を抑えるべき」というパターンが定着していると、自己機能が育ちにくい構造があります。
          詳細は<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>をご覧ください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑥ 空虚感・燃え尽き</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己機能が深く縮小した状態が、<Link to="/articles/existential-emptiness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">空虚感</Link>・燃え尽きとして体験されます。
          つまり「空虚感」は、自己機能低下の進行した形と理解することができます。
        </p>
      </div>

      <h2>支援職に自己機能低下が多い3つの理由</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情労働の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は「相手のために自分の感情を抑える」ことが日常です。
          自分の感情を抑え続けるうちに、「感じる機能」自体が機能しにくくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割同一化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者としての自分」が中心になりすぎて、それ以外の自己側面が後退します。
          役割を降りた瞬間に「何も残っていない」という感覚が、自己機能低下のサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「自分を後回しにする」職業文化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職には「利用者優先」「自分のことは後回し」という文化があります。
          長く続けると、「自分の状態に気づく機能」自体が抑制されていきます。
        </p>
      </div>

      <h2>自己機能を取り戻す——回復の方向</h2>
      <p>
        自己機能の回復は「強くなる」「能力を上げる」ではなく、「縮んだ機能を取り戻す」プロセスです。
        以下のアプローチが、自己機能の回復に有効と考えられています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 身体感覚から取り戻す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情の前に、身体感覚から取り戻すことが効果的です。
          お風呂の温度・足の裏が床に触れる感覚・お茶の味——「快・不快」レベルの小さな感覚に意識を向けることが、感じる機能の再起動につながります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「役割外の小さな好み」を拾う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役に立つかどうか」と無関係に、「ちょっといいな」「気になる」という小さな好みを拾い直します。
          コーヒーの種類・歩く道・聴く音楽——どんな小さなことでも、「自分の好み」を取り戻す練習が、自己感覚を再構築します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自己複雑性を意識的に保つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事以外の自己側面(趣味・家族・友人・好きなもの)を意識的に維持します。
          <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>を保つことが、機能低下を防ぐ「予防」になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「考える」より「感じる」時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は思考が過剰になりやすい職業です。意識的に「考えない・ただ感じるだけ」の時間を持つことが、感じる機能の回復を促します。
          マインドフルネス・自然の中での散歩・芸術鑑賞などが有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 外から整理する場を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己機能が低下している状態を一人で言語化するのは難しいです。
          「何が起きているか」「何を感じているか」を外から整理してもらう場(カウンセリング・スーパービジョン・信頼できる第三者)を持つことが、回復の速度を上げます。
        </p>
      </div>

      <h2>関連する個別記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">「自己機能」テーマの個別記事</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下の構造</Link></li>
          <li>・<Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは(基本)</Link></li>
          <li>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link></li>
          <li>・<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情がわからない</Link></li>
          <li>・<Link to="/articles/feeling-nothing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何も感じない</Link></li>
          <li>・<Link to="/articles/existential-emptiness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">空虚感</Link></li>
          <li>・<Link to="/articles/what-do-i-want" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何がしたいかわからない</Link></li>
          <li>・<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link></li>
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link></li>
        </ul>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分」が薄くなっていると感じる方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自己機能を取り戻すための対話を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          自己機能の低下は、「強くなる」「がんばる」では回復しません。むしろ縮んだ機能を取り戻すための、安全な対話の場が必要です。支援職特有の構造を理解した上で、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-function-complete"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

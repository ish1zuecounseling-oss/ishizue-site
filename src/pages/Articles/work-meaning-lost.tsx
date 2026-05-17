import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "「働く意味がわからない」と感じるのは普通のことですか?",
    a: "一時的に感じることは多くの人に起こります。ただ、この状態が数週間〜数ヶ月続いている場合、心理的な消耗・自己機能の低下・価値観の揺らぎが背景にあることが多いです。「甘え」や「やる気の問題」ではなく、自分の中で何かが起きているサインとして捉える価値があります。",
  },
  {
    q: "「働く意味がわからない」と「うつ」は違いますか?",
    a: "違うことが多いです。うつでは「強い悲しみ」「絶望」「自責感」など、感情の方向性が下向きにはっきりしています。「働く意味がわからない」は、感情が薄く、何をしても満たされない・意味が感じられないという感覚が中心です。ただし長期化すると抑うつ状態に進むことがあるため、早めに整理する価値があります。",
  },
  {
    q: "やりがいを持つことが大事だと言われますが、それも見つかりません",
    a: "「やりがいを持たなければ」と頑張ること自体が、新たな消耗の原因になることがあります。やりがいは「持つもの」ではなく、自然に「感じられるもの」です。やりがいを感じる機能(自己機能)が縮小している状態では、いくら頑張っても感じられません。まず縮んだ機能の回復が先決です。",
  },
  {
    q: "転職すれば解決しますか?",
    a: "状況によります。職場環境・労働条件・人間関係が原因の場合は、転職で改善することがあります。一方、自己機能が縮小している状態では、転職しても新しい環境で同じ感覚に戻ることが多いです。まず「何が原因で意味が感じられないのか」を整理してから判断することが助けになります。",
  },
  {
    q: "支援職に「働く意味がわからない」と感じる人が多いのはなぜですか?",
    a: "支援職は「誰かのために」という外部の目的に動機づけられて働いているため、自分自身の感覚・欲求が後退しやすい構造があります。さらに感情労働の蓄積・燃え尽き・共感疲労が進むと、「やりがい」自体を感じる機能が縮小し、「働く意味がわからない」状態に陥りやすくなります。",
  },
  {
    q: "「働く意味」を見つけるためにはどうすればいいですか?",
    a: "「見つける」というアプローチは、見つからないことに焦点を当て続けるため、かえって苦しくなることがあります。むしろ「働く意味が感じられない自分」をそのまま観察し、自己機能・身体感覚・小さな好みを取り戻していくプロセスの中で、自然に意味が立ち上がってくることが多いです。",
  },
]

export default function WorkMeaningLost() {
  return (
    <ArticleLayout
      title="「働く意味がわからない」状態が続くとき——心理的構造と回復の方向【公認心理師】"
      description="「何のために働いているかわからない」「やりがいが感じられない」——働く意味がわからない状態の心理的構造・うつとの違い・支援職に多い理由・回復の方向を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/work-meaning-lost"
      date="2026-05-18"
      tags={["self-function", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「働く意味がわからない」と感じる状態は、性格やモチベーションの問題ではなく、自己機能が縮小しているサインかもしれません。
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
        「何のために働いているのかわからない」「やりがいが感じられない」「仕事をしている意味がない気がする」——
        こうした感覚が続いているとしたら、それは<strong>性格やモチベーションの問題ではなく、自己機能が縮小しているサイン</strong>かもしれません。
      </p>

      <p>
        ネット上には「働く意味を見つけよう」「やりがいを持とう」という記事があふれていますが、
        実際には<strong>「意味」を見つけようとするほど、見つからない感覚が強くなる</strong>ことが多くあります。
        この記事では、なぜそうなるのか・どうすれば回復に向かえるのかを構造的に解説します。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・「働く意味がわからない」状態の心理的構造</li>
          <li>・うつ・空虚感との違い</li>
          <li>・支援職に多い理由(構造的視点)</li>
          <li>・「意味を見つけよう」がうまくいかない理由</li>
          <li>・回復の方向——「見つける」ではなく「縮んだ機能を取り戻す」</li>
        </ul>
      </nav>

      <h2>「働く意味がわからない」状態の正体</h2>
      <p>
        「働く意味がわからない」と感じる状態は、心理学的に見ると<strong>意味感覚の喪失</strong>として整理できます。これは次のような複数の要素が複合的に起きている状態です。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 動機づけの源泉が見えなくなる</p>
          <p className="text-stone-600 leading-[1.9]">「なぜこれをやっているのか」という根本の問いに、答えが出てこない状態。以前は答えられたことが、今は答えられない。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 感情の麻痺</p>
          <p className="text-stone-600 leading-[1.9]">仕事の達成感・喜び・つながりの感覚が薄くなる。以前は楽しかった瞬間に反応が起きない。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 自分の感覚へのアクセスの低下</p>
          <p className="text-stone-600 leading-[1.9]">「自分が何を望んでいるか」「何を感じているか」がわからなくなる。<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>のサイン。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④ 役割と存在の乖離</p>
          <p className="text-stone-600 leading-[1.9]">「役割を果たしている自分」と「本当の自分」が切り離されている感覚。役割を降りた瞬間に何が残るかわからない。</p>
        </div>
      </div>

      <h2>「働く意味がわからない」とうつ・空虚感の違い</h2>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <p className="text-[11px] text-stone-500 tracking-wider mb-0.5">うつ</p>
            <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              強い悲しみ・絶望・自責が前面に出る
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed">
            <p>悲しみ・絶望・自責感などの「強い感情」がはっきり感じられる。感情の方向性が下向きに明確。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <p className="text-[11px] text-stone-600 tracking-wider mb-0.5 font-medium">「働く意味がわからない」</p>
            <p className="text-sm font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              意味の感覚が薄れている状態
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50/40">
            <p>悲しみは強くないが、「何のために」が見えない。仕事を続けることはできるが、その先に何があるかが感じられない。</p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <p className="text-[11px] text-stone-100 tracking-wider mb-0.5 font-medium">空虚感</p>
            <p className="text-sm font-medium text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「自分の中に何もない」感覚
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50">
            <p>仕事だけではなく、人生全般に意味が感じられない状態。「働く意味がわからない」がさらに深まり、生活全般を覆っている。</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed">
        ※「働く意味がわからない」が長期化すると、<Link to="/articles/existential-emptiness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">空虚感</Link>へと進む傾向があります。両者は地続きの状態です。
      </p>

      <h2>支援職に「働く意味がわからない」状態が起きやすい3つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 外部の目的に動機づけられる職業構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は「利用者のために」「クライアントのために」という<strong>外部の目的</strong>に動機づけられて働きます。
          自分自身の欲求・楽しみ・興味は後回しになりやすい構造です。
          長く続けるうちに「自分は何のために働いていたのか」が見えにくくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② やりがい搾取の構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職の領域には「やりがい」が前面に出る職業文化があります。
          給料・労働環境への不満を「やりがいで補う」ことを求められる構造があり、
          やりがいが感じられなくなった瞬間に、すべての労働条件の厳しさが浮かび上がってきます。
          「働く意味がわからない」と感じるのは、ここに直面しているサインかもしれません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自己機能の縮小</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情労働・共感疲労の蓄積によって、「感じる」「望む」「選ぶ」という<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>が縮小していくと、
          仕事の意味を感じる能力そのものが落ちます。
          意味を感じる「受け取る側」が機能していないため、何をしても意味が感じられない状態になります。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>「働く意味を見つけよう」がうまくいかない理由</h2>
      <p>
        「働く意味がわからない」状態のとき、人は次のような方向に頑張ろうとします。
      </p>

      <div className="card space-y-2 text-sm text-stone-600">
        <p>・「やりがい」を持とうとする</p>
        <p>・キャリア本を読んで自己分析する</p>
        <p>・目標設定をして達成しようとする</p>
        <p>・転職・副業を検討する</p>
      </div>

      <p>
        しかし、これらが<strong>かえって状態を悪化させる</strong>ことがあります。理由は以下です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">①「見つけよう」と頑張ること自体が消耗を深める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「働く意味を見つけなければ」というプレッシャーが、新たな自責材料になります。
          見つからない状態が続くほど、「意味を見つけられない自分はダメ」という感覚が強まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">②「感じる機能」が縮小している状態では意味が見えない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          意味は「思考」で見つけるものではなく、「感じる」ものです。感じる機能が縮小している状態では、いくら考えても意味は立ち上がってきません。
          自己機能の回復が先決です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 転職しても同じ状態に戻る可能性</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          外部環境の問題なら転職で改善しますが、自己機能の縮小が原因の場合は、新しい環境でも同じ感覚に戻ります。
          まず「自分の中で何が起きているか」を整理してから判断する価値があります。
        </p>
      </div>

      <h2>回復の方向——「見つける」ではなく「取り戻す」</h2>
      <p>
        回復のアプローチは「意味を見つけよう」の反対方向、つまり<strong>「縮んだ感じる機能を取り戻す」</strong>ことです。
        これは時間がかかるプロセスですが、確実に効果があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「役割の外」の自分を取り戻す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事の役割と無関係な領域(趣味・家族・友人・好きなもの)を意識的に維持することが重要です。
          <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>を保つことが、仕事への過剰な依存を防ぎます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「小さな好み」を拾い直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役に立つかどうか」と無関係に、「ちょっといいな」「気になる」という小さな好みを拾い直すことが、感じる機能の再起動につながります。
          コーヒーの種類・歩く道・聴く音楽——どんな小さなことでも構いません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 身体感覚から取り戻す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情の前に、身体感覚から取り戻すことが効果的です。お風呂の温度・足の裏が床に触れる感覚・お茶の味——「快・不快」レベルの小さな感覚に意識を向けることが、感じる機能の再起動につながります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「意味」を急いで見つけようとしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          意味は、感じる機能が回復してから自然に立ち上がってくるものです。
          焦って「意味」を作ろうとせず、まず縮んだ機能を回復することを優先します。
          機能が戻ってくると、自然に「これが大事だ」「これが好きだ」という感覚が戻ってきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 外から整理する場を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「働く意味がわからない」状態を一人で言語化するのは難しいことです。
          安全に整理できる場(カウンセリング・スーパービジョン・信頼できる第三者)を持つことが、回復の現実的な経路の一つになります。
        </p>
      </div>

      <h2>こんな状態なら相談を検討</h2>
      <p>
        次のような状態が続く場合は、一人で抱え込まず、外からの整理を検討してください。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「働く意味がわからない」状態が1ヶ月以上続いている</p>
        <p>・仕事だけでなく、生活全般に意味が感じられない</p>
        <p>・以前楽しめたことに反応が起きない</p>
        <p>・身体症状(不眠・食欲不振・頭痛)が出ている</p>
        <p>・「消えてしまいたい」「いなくなりたい」感覚がある</p>
      </div>
      <p className="text-xs text-stone-400 mt-3">
        ※最後の項目に該当する場合は、医療機関への相談を優先してください。よりそいホットライン(0120-279-338・24時間無料)等も利用できます。
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「働く意味がわからない」段階からでも大丈夫です</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「意味を見つける」ではなく、感じる機能を取り戻す対話を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          支援職特有の感情労働と自己機能低下を理解した上で、「働く意味がわからない」状態の構造を一緒に整理します。「やりがいを持とう」「目標を立てよう」ではなく、「縮んだ機能を回復する」ためのカウンセリングです。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/work-meaning-lost"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

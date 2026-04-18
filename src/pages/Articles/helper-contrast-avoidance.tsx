import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperContrastAvoidance() {
  return (
    <ArticleLayout
      title="不安が止まらないときの対処法｜最悪を考えてしまう心理の正体"
      description="「どうせまた嫌なことが起きる」と考えてしまう——これはコントラスト回避という心理メカニズムです。なぜ不安が止まらないのか、心理学で正体と対処法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-contrast-avoidance"
      date="2026-04-18"
      tags={["burnout", "compassion", "boundary"]}
    >

      <div className="mb-8 p-4 rounded-xl" style={ background: "#f5f0eb", border: "1px solid #e8ddd4" }>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={ color: "#8FAF9F" }>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>なぜ「どうせまた嫌なことが起きる」と考えてしまうのか（コントラスト回避の正体）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>放置するとどうなるか（慢性的な不安が消耗を深めるプロセス）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>どう対処するか（不安の先取りをやめるための具体的な方法）</li>
        </ul>
      </div>
      <p>
        休日なのに仕事のことが頭から離れない。<br />
        「今うまくいっているのが怖い」と感じる。<br />
        リラックスしようとすると、かえって落ち着かなくなる——
      </p>
      <p>
        こうした体験は、支援職に限らず不安傾向の強い人によく見られます。
        「意志が弱いから」「性格の問題」と片付けがちですが、
        実は心理学的に説明できるメカニズムがあります。
        それが「コントラスト回避」と呼ばれるものです。
      </p>

      <h2>コントラスト回避とは</h2>
      <p>
        Newman & Llera（2011）が提唱したコントラスト回避モデルは、
        慢性的な不安や心配がなぜ続くのかを説明する理論です。
      </p>
      <p>
        人は突然、急激にネガティブな感情に転落することを強く恐れます。
        そこで無意識に取る戦略が「あらかじめネガティブな状態でいること」です。
        最初からどん底にいれば、そこからさらに落ちるコントラスト（落差）は小さくて済む。
        <strong>つまり、不安でいることが、感情の急落を防ぐ「守り」として機能している</strong>のです。
      </p>
      <p>
        皮肉なことに、この戦略は短期的には「効果がある」ように感じられます。
        だからこそ、心配し続けること・ネガティブな状態を維持することが
        負の強化を受けて、慢性化していきます。
      </p>

      <h2>支援職の現場でよく見られるパターン</h2>
      <p>
        コントラスト回避は、支援職の「消耗のループ」を説明するひとつの鍵です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「うまくいっているときが一番怖い」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者との関係が安定しているとき、「このあと何か起きるのでは」と不安になる。
          良い状態からの転落が怖いため、良い状態に安心できない。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「最悪を想定していないと怖い」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          常に最悪のケースを考えておくことで「備えができている」と感じる。
          楽観的に考えると「油断している」ような罪悪感が生じる。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「休んでいると落ち着かない」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          リラックスした状態に身を置くと、かえって不安が高まる。
          緊張状態の方が「コントロールできている感覚」がある。
          研究でも、リラックスが不安を誘発する「リラクセーション誘発性不安」の存在が確認されています（Kim & Newman, 2019）。
        </p>
      </div>

      <h2>「心配しておくと、良いことが起きたときに余計うれしい」</h2>
      <p>
        コントラスト回避にはもうひとつの側面があります。
        あらかじめ心配しておくことで、良いことが起きたときに
        「予想以上だった」という大きな喜びを得られる——という正の強化です。
      </p>
      <p>
        「最悪を想定しておけば、うまくいったときに安心できる」という感覚は、
        多くの人に心当たりがあるのではないでしょうか。
        この体験が「心配することには意味がある」という信念を強化し、
        慢性的な不安状態が続く理由のひとつになります。
      </p>

      <h2>これは「性格」ではなく「学習されたパターン」</h2>
      <p>
        コントラスト回避が重要なのは、
        これが意志の弱さや性格の問題ではなく、
        <strong>感情の急落を防ぐために学習された、ある意味「合理的」な戦略</strong>だと示している点です。
      </p>
      <p>
        支援職として長く働いてきた人ほど、
        「何が起きるかわからない」「常に最悪に備えなければ」という体験を
        繰り返してきた可能性があります。
        そのなかで形成されたコントラスト回避のパターンは、
        簡単に「やめよう」と思ってやめられるものではありません。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休めない自分はおかしいのか」「なぜリラックスできないのか」——
          カウンセリングでは、こうした問いに対して、
          あなたの不安がどのような文脈で形成されてきたかを一緒に理解するところから始めます。
          パターンに気づくことが、変化への第一歩になります。
        </p>
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-mind-wandering" className="text-sm text-[#7EB8A4] hover:underline">
            → 「仕事のことが頭から離れない」のはなぜか
          </Link>
          <Link to="/articles/helper-self-criticism-culture" className="text-sm text-[#7EB8A4] hover:underline">
            → なぜ支援職は自分を責めやすいのか
          </Link>
          <Link to="/tools/helper-burnout-check" className="text-sm text-[#7EB8A4] hover:underline">
            → バーンアウトチェック｜今の消耗度を確認する
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：松本昇・津藤央亘・Llera, S. J.・Newman, M. G.（2026）「不安と心配はなぜ生じるのか？——日本語版コントラスト回避質問紙の作成——」心理学研究，96(6), 428-438 ／ Newman, M. G., & Llera, S. J.（2011）A novel theory of experiential avoidance in generalized anxiety disorder. Clinical Psychology Review, 31(3), 371-382 ／ Kim, H., & Newman, M. G.（2019）The paradox of relaxation training: Relaxation induced anxiety and mediation effects of negative contrast sensitivity. Journal of Affective Disorders, 259, 271-278
      </p>
      <ArticleBottomCTA />
    </ArticleLayout>
  )
}

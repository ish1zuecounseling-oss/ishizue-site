import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperGoalAdjustment() {
  return (
    <ArticleLayout
      title="やめたいのにやめられないときの対処法｜目標調整の心理学"
      description="達成できない目標にしがみつくことが、抑うつにつながることが研究で示されています。「諦められない」状態から抜け出すために、心理学で理由と対処法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-goal-adjustment"
      date="2026-04-18"
      tags={["burnout", "boundary", "compassion"]}
    >

      <div className="mb-8 p-4 rounded-xl" style={ background: "#f5f0eb", border: "1px solid #e8ddd4" }>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={ color: "#8FAF9F" }>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>なぜやめたいのにやめられないのか（目標固執の心理的メカニズム）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>放置するとどうなるか（達成できない目標への固執が抑うつにつながる理由）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>どう対処するか（目標を調整して消耗を減らす具体的な方法）</li>
        </ul>
      </div>
      <p>
        「もっと頑張れば利用者の状態が改善するはずだ」<br />
        「こんなことで諦めてはいけない」<br />
        「自分が続けなければ誰がやるのか」——
      </p>
      <p>
        支援職の世界では、諦めないこと・続けることが美徳とされます。
        でも、達成できない目標を諦めずに追い続けることが、
        実は抑うつにつながることが心理学研究で示されています。
      </p>

      <h2>「諦めない」ことの意外な代償</h2>
      <p>
        外山・長峯（2022）は大学生を対象に、重要な目標の達成が困難になったときの
        対処方略とwell-being（心理的健康）の関係を調べました。
        その結果、次のことが明らかになりました。
      </p>
      <p>
        <strong>目標を諦めずにひたすら続ける（目標継続）は、
        人格的成長や環境制御感と正の関連がある一方で、
        抑うつとも正の関連があった。</strong>
      </p>
      <p>
        つまり、達成できない目標に向けてがむしゃらにエネルギーを費やし続けることは、
        「頑張っている」という感覚をもたらしながら、
        同時に抑うつを深めるという両刃の剣だということです。
      </p>

      <h2>最も適応的な対処は「新しい目標を見つけること」</h2>
      <p>
        研究が示した最も適応的な対処方略は、
        <strong>達成困難な目標を断念したうえで、別の新しい目標を見つけること（目標の内容の調整）</strong>でした。
        これは主観的なwell-beingとも、心理的なwell-beingとも、広く正の関連を示しました。
      </p>
      <p>
        一方で「ただ単に目標を諦めること（目標断念）」は、すべてのwell-being指標を悪化させました。
        つまりポイントは、諦めることではなく、
        <strong>諦めた後に別の意味ある目標へと移行できるかどうか</strong>です。
      </p>

      <h2>支援職に当てはめると</h2>
      <p>
        この研究の知見は、支援職の消耗を理解する上で重要な示唆を持ちます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">達成できない理想を追い続けている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「もっとよい支援ができるはずだ」「この利用者を変えられるはずだ」——
          現実的に難しい目標に固執し続けることが、静かに消耗を深めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「辞めてはいけない」という目標への固執</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今の職場で続けることが正しい」という目標そのものが、
          状況によっては達成困難な目標になっていることがあります。
          それでも諦めずに続けることが、抑うつにつながるというのがこの研究の指摘です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">方略を変えることはできる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          目標（例：よい支援者であること）は変えなくても、
          方法（例：この職場でこのやり方で）を変えることは適応的な対処です。
          研究では「目標達成方略の調整」も人格的成長と人生の目的感に正の影響を示しています。
        </p>
      </div>

      <h2>「諦め」を許可する文化が必要</h2>
      <p>
        支援職の世界では、続けることへのプレッシャーが強い。
        「あなたがいなければ」「この利用者はどうなる」——
        こうした言葉が、達成困難な状況での目標継続を強いることがあります。
      </p>
      <p>
        しかし研究が示すのは、
        適切な見極めのもとで目標を手放し、新しい意味ある目標へ移行することが、
        心理的健康にとって最も適応的だということです。
        「諦める」ことは敗北ではなく、より賢明な対処である場合があります。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          カウンセリングでは、「今の目標が本当に達成可能か」「別の形で意味を見出せないか」を
          一緒に整理することができます。
          諦めることへの罪悪感を丁寧に扱いながら、次の一歩を考える場として活用いただけます。
        </p>
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-reality-shock" className="text-sm text-[#7EB8A4] hover:underline">
            → 「こんなはずじゃなかった」——リアリティショックと消耗
          </Link>
          <Link to="/articles/helper-self-criticism-culture" className="text-sm text-[#7EB8A4] hover:underline">
            → なぜ支援職は自分を責めやすいのか
          </Link>
          <Link to="/tools/helper-quit-timing-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 辞め時チェック｜今の状況を整理する
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：外山美樹・長峯聖人（2022）「人は困難な目標にどう対処すべきか？——困難な目標への対処方略尺度を作成して——」心理学研究，92(6), 543-553 ／ Wrosch, C., Scheier, M. F., Carver, C. S., & Schulz, R.（2003）The importance of goal disengagement in adaptive self-regulation: When giving up is beneficial. Self and Identity, 2, 1-20 ／ Brandtstädter, J., & Renner, G.（1990）Tenacious goal pursuit and flexible goal adjustment. Psychology and Aging, 5, 58-67
      </p>
      <ArticleBottomCTA />
    </ArticleLayout>
  )
}

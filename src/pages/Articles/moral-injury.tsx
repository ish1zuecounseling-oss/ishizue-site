import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "モラルインジャリー（道徳的負傷）とは何ですか?",
    a: "自分の道徳観・倫理観・支援観に深く反する行為を、せざるを得なかった・防げなかった・目撃した——その経験によって生じる心の傷を指す概念です。もともと退役軍人の研究から生まれ、近年は医療・介護・福祉などのケア領域に広がりました。医学的な診断名ではありませんが、罪悪感・恥・自分への失望・仕事の意味の喪失といった、燃え尽きとは質の異なる苦しみを説明する概念として注目されています。",
  },
  {
    q: "燃え尽き症候群との違いは何ですか?",
    a: "燃え尽きは「エネルギーの枯渇」、モラルインジャリーは「良心の傷」です。燃え尽きは消耗の蓄積から生じ、休息や負荷の調整が回復の軸になります。一方モラルインジャリーは、価値観に反する経験から生じるため、どれだけ休んでも罪悪感や自分への失望は消えません。「休んだのに、心が晴れない」「疲れというより、自分が嫌になっている」と感じる場合、燃え尽きではなくこちらが核にある可能性があります。両方が同時に進むこともあります。",
  },
  {
    q: "「自分は悪いことに加担した」という罪悪感が消えません。",
    a: "まず、その罪悪感が生じていること自体が、あなたの良心と支援観が機能している証拠です。何も感じない人には、モラルインジャリーは起きません。その上で、「構造の制約の中で取り得た最善」と「自由に選べた悪行」を分けて見ることが重要です。人手・制度・組織方針という制約の中での選択を、すべて個人の道徳的失敗として引き受ける必要はありません。傷の存在は認めつつ、責任の所在は構造と切り分ける——その整理が回復の入口になります。",
  },
  {
    q: "「理想が高すぎるだけ」と言われます。自分の感覚がおかしいのでしょうか?",
    a: "おかしくありません。「理想が高すぎる」という言葉は、しばしば構造の問題を個人の認知の問題にすり替えます。十分なケアをしたいという願いは、支援職として正当な職業倫理です。それが実現できない環境との間で傷つくのは、感覚が正常である証拠です。ただし、その傷を一人で抱え続けると消耗が深まるため、同じ感覚を持つ同僚と語ること、変えられる範囲を見極めることが、自分を守る現実的な方法になります。",
  },
  {
    q: "モラルインジャリーからは、どうすれば回復できますか?",
    a: "鍵は「休息」より「意味の修復」です。①罪悪感を良心の証と捉え直す、②構造の制約と個人の責任を切り分ける、③安心できる場で経験を言葉にする（語ることで恥が和らぎます）、④自分の支援観を手放さずに、今の環境で守れる小さな範囲を見つける——この積み重ねが回復につながります。自分への失望が深く、仕事の意味を見失っている状態が続く場合は、カウンセリングで一緒に整理することが有効です。",
  },
]

export default function MoralInjury() {
  return (
    <ArticleLayout
      title="モラルインジャリー（道徳的負傷）とは｜「これでいいのか」と思いながら働く支援職の傷【公認心理師】"
      description="人手不足で一人ひとりに向き合えない、本意でないケアをせざるを得ない——自分の支援観に反する経験が生む心の傷を「モラルインジャリー（道徳的負傷）」と呼びます。燃え尽きとの違い、休んでも治らない理由、回復の方向を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/moral-injury"
      date="2026-06-11"
      tags={["burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「これでいいのか」と思いながら働く苦しさは、疲労ではなく、良心の傷かもしれません。それは、あなたの支援観が生きている証拠です。
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
        人手が足りなくて、一人ひとりに向き合えない。
        本当はもっと丁寧にケアしたいのに、急かすような関わりになってしまう。
        納得していない方針に、従わざるを得ない。
        「これでいいのか」と思いながら、今日も仕事を終えた。
      </p>

      <p>
        ——そんな日々が続いていませんか。
      </p>

      <p>
        この苦しさは、単なる疲労ではありません。
        <strong>自分の支援観・倫理観に反することを、せざるを得ない</strong>——
        その経験が積み重なって生じる心の傷を、<strong>モラルインジャリー（道徳的負傷）</strong>と呼びます。
        休んでも消えない罪悪感、自分への失望、仕事の意味の喪失。
        燃え尽きとは質の違う、この傷の正体を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・「本当はこうしたい」ケアと、実際にできるケアの差に苦しんでいる</li>
          <li>・納得できない方針・やり方に、従っている自分が嫌になる</li>
          <li>・利用者に申し訳ない、という感覚が消えない</li>
          <li>・休んでも、疲れより「罪悪感」や「自己嫌悪」が残っている</li>
          <li>・この仕事を選んだ頃の自分に、顔向けできない気がする</li>
          <li>・「理想が高すぎる」と言われて、自分の感覚を疑い始めている</li>
        </ul>
      </div>

      <h2>モラルインジャリーとは</h2>
      <p>
        モラルインジャリー（moral injury／道徳的負傷）とは、
        <strong>自分の道徳観・倫理観に深く反する行為を、せざるを得なかった・防げなかった・目撃したことによって生じる心の傷</strong>を指す概念です。
      </p>
      <p>
        もともとは退役軍人の心理研究から生まれた言葉で、
        戦場で自らの倫理に反する行為に関わった人々の、PTSDとは異なる苦しみ——
        罪悪感・恥・自分への失望——を説明するために使われ始めました。
        その後、医療・看護の領域に広がり、特に近年は、
        <strong>制度や人員の制約の中で「すべきケアができない」ケア従事者の傷</strong>として注目されています。
        医学的な診断名ではありませんが、燃え尽きでは説明しきれない苦しみを捉える概念です。
      </p>

      <h2>燃え尽きとの決定的な違い——「休んでも治らない」理由</h2>
      <p>
        モラルインジャリーは、燃え尽き症候群とよく混同されます。
        実際、同時に進行することも多い。でも、核が違います。
      </p>
      <div className="card space-y-3 text-sm">
        {[
          { label: "燃え尽き症候群", desc: "エネルギーの「枯渇」。消耗の蓄積が核。休息・負荷の調整が回復の軸になる。" },
          { label: "モラルインジャリー", desc: "良心の「傷」。価値観に反する経験が核。休んでも罪悪感・自己嫌悪は消えず、「意味の修復」が回復の軸になる。" },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-3">
            <span className="text-xs font-medium flex-shrink-0 w-32 mt-0.5 text-stone-700">{label}</span>
            <p className="text-stone-600 leading-[1.9]">{desc}</p>
          </div>
        ))}
      </div>
      <p>
        「しっかり休んだのに、心が晴れない」「疲れているというより、<strong>自分が嫌になっている</strong>」——
        そう感じるなら、足りないのは休息ではなく、傷の手当てかもしれません。
        燃え尽きへの対処（<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">回復方法</Link>）をやり尽くしても楽にならない場合、この概念が補助線になります。
      </p>

      <h2>なぜ支援の現場で起きるのか</h2>
      <p>
        モラルインジャリーは、本人の弱さからは生まれません。
        <strong>「高い職業倫理」と「それを実現できない構造」の衝突</strong>から生まれます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 構造の制約が、倫理に反する選択を強いる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足、時間の制約、制度の枠、組織の方針——
          支援者個人がどれだけ誠実でも、構造が「すべきケア」を許さない場面があります。
          流れ作業のような関わり、待たせること、本意でない対応。
          選んだのは自分でも、<strong>選ばされたのは構造</strong>です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 倫理観が高い人ほど、深く傷つく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ここに残酷な逆説があります。
          「どんなケアでもいい」と思っている人は、傷つきません。
          <strong>支援観を持ち、利用者に誠実であろうとする人ほど、現実との差に傷つく</strong>のです。
          モラルインジャリーの深さは、あなたの良心の深さに比例します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「理想が高すぎる」という無効化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          この傷を口にすると、「理想論だ」「どこも同じだよ」と返されることがあります。
          構造の問題が、個人の認知の問題にすり替えられる瞬間です。
          訴える場を失った傷は、内側に向かい、自分への失望として蓄積していきます。
          （この「個人化」の構造は<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">キャパシティを超えた業務を「自分のせい」にしない</Link>でも扱っています）
        </p>
      </div>

      <LineCtaFatigue />

      <h2>傷とどう向き合うか——鍵は「休息」より「意味の修復」</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 罪悪感を、「良心が機能している証」と捉え直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          まず、この傷が生じていること自体が、あなたの支援観が死んでいない証拠です。
          何も感じなくなった状態のほうが、ずっと危うい。
          罪悪感は消すべきノイズではなく、あなたの倫理の心拍です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「構造の中での最善」と「自由な選択」を分ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          あなたが取った選択は、無限の選択肢から選んだものではなく、
          人手・時間・制度という制約の中での選択でした。
          <strong>制約の中での最善を尽くした人が、制約そのものの責任まで背負う必要はありません。</strong>
          傷の存在は認める。でも、責任の所在は構造と切り分ける。この整理が回復の入口です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 安心できる場で、語る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          モラルインジャリーの中心には「恥」があります。
          そして恥は、隠すほど深まり、安心できる場で語られると和らぐ性質を持ちます。
          同じ感覚を持つ同僚との対話、職場の振り返りの場、スーパービジョン——
          「自分だけじゃなかった」という発見そのものが、傷の手当てになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 支援観を手放さず、「守れる範囲」を見つける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          構造のすべては変えられません。でも、ゼロでもありません。
          一日の中で、自分の支援観どおりに関われる場面を、小さくても確保する。
          挨拶の一言、目を合わせる数秒、できる範囲の丁寧さ——
          「ここだけは自分のケアをする」という領域が、仕事の意味を守ります。
          意味を見失いかけているときは<Link to="/articles/work-meaning-lost" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事の意味を見失ったとき</Link>も参考にしてください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 自分への失望が深いときは、専門的サポートへ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己嫌悪が続く、仕事の意味が見えない、この仕事を選んだ自分を否定し始めている——
          そんなときは、一人で抱えるラインを越えています。
          価値観と現実の衝突を整理することは、カウンセリングが最も力になれる領域のひとつです。
        </p>
      </div>

      <h2>燃え尽き・二次受傷との見分け方</h2>
      <div className="card space-y-3 text-sm">
        {[
          { label: "モラルインジャリー", desc: "「自分の倫理に反することをした・防げなかった」傷。核は罪悪感・恥・自己への失望。" },
          { label: "燃え尽き症候群", desc: "消耗の蓄積によるエネルギー枯渇。核は情緒的消耗・無力感・達成感の低下。" },
          { label: "二次的外傷", desc: "利用者のトラウマ的な体験に触れ続けることによる傷つき。核は他者の苦痛への曝露。" },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-3">
            <span className="text-xs font-medium flex-shrink-0 w-32 mt-0.5 text-stone-700">{label}</span>
            <p className="text-stone-600 leading-[1.9]">{desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-600">
        重なって生じることも多くあります。消耗のサインが強いなら<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック</Link>、
        曝露による傷が疑われるなら<Link to="/articles/secondary-trauma-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次的外傷チェック</Link>で、今の状態を確認できます。
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
        <p className="font-medium text-stone-700 mb-2">構造と価値観の衝突を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">キャパシティを超えた業務を「自分のせい」にしない</Link></li>
          <li>・<Link to="/articles/values-mismatch-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">職場と価値観のミスマッチチェック</Link></li>
          <li>・<Link to="/articles/helper-organization-unsafe" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">組織が安全でないとき、支援者に何が起きるか</Link></li>
          <li>・<Link to="/articles/work-meaning-lost" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事の意味を見失ったとき</Link></li>
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職の燃え尽き（総合ガイド）</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「支援観と現実の衝突」は、いしずえの構造整理がもっとも力になれるテーマのひとつです。
          10項目で相性を確認できます（合わないと出たら別の選択肢も案内しています）。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「これでいいのか、と思いながら働き続けている」方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          良心の傷を、構造から整理する時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          あなたの罪悪感は、支援観が生きている証拠です。その傷を「理想が高すぎる」で片付けず、構造と責任を切り分けて整理する——それが、支援観を守ったまま働き続けるための土台になります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/moral-injury"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。モラルインジャリーは医学的な診断名ではなく、心理状態を説明するための概念です。本記事は医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

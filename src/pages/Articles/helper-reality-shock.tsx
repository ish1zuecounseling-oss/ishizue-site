import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperRealityShock() {
  return (
    <ArticleLayout
      title="仕事が思っていたのと違うときの対処法｜リアリティショックの心理学"
      description="転職・異動後に「こんなはずじゃなかった」と感じ消耗してしまう——これはリアリティショックと呼ばれる現象です。なぜ起きるのか、どう乗り越えるかを心理学から解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-reality-shock"
      date="2026-04-18"
      tags={["burnout", "boundary", "compassion"]}
    >

      <div className="mb-8 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>なぜ「こんなはずじゃなかった」と感じるのか（リアリティショックの正体）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>放置するとどうなるか（リアリティショックが消耗・離職につながる経路）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>どう乗り越えるか（リアリティショックへの具体的な対処法）</li>
        </ul>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        「こんなはずじゃなかった」という感覚がまだ続いているうちは、リアリティショックからの回復がまだ途中かもしれません。
      </p>
      <p>
        「この仕事、こんなにしんどいとは思っていなかった」<br />
        「利用者のことは好きなのに、職場の雰囲気が思っていたのと全然違う」<br />
        「転職したばかりなのに、もう辞めたいと思っている自分が情けない」——
      </p>
      <p>
        支援職として働き始めたとき、あるいは転職や異動をしたとき、
        こうした「理想と現実のギャップ」を経験することがあります。
        これはリアリティショック（Reality Shock）と呼ばれ、
        職場への定着や仕事への意欲に深く関わることが研究で示されています。
      </p>

      <h2>リアリティショックとは何か</h2>
      <p>
        リアリティショックとは、職場に入る前に抱いていた期待と、
        実際に働き始めてから経験した現実との間のギャップ、
        そしてそのギャップによって生じる心理的なショックのことです。
      </p>
      <p>
        片山・藤（2023）は転職者412名を対象に調査し、
        転職時のリアリティショックが<strong>ワーク・エンゲージメント（仕事への熱意・活力）を低下させ、
        さらにそれを媒介して「辞めたい」という気持ちを高める</strong>ことを示しました。
      </p>
      <p>
        つまり、リアリティショックは「仕事への気持ち」を直接的にも間接的にも傷つける。
        「こんなはずじゃなかった」という感覚が、
        じわじわと仕事への意欲を奪い、最終的に離職を考えさせていく——
        そのメカニズムが実証的に確認されています。
      </p>

      <h2>支援職に特有のリアリティショック</h2>
      <p>
        支援職のリアリティショックには、特有の形があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「利用者のために働きたい」という理想と、書類・会議・制度の現実</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          直接支援に費やせる時間が思ったよりずっと少ない。
          記録や報告、会議に追われる日々が、理想との落差を生む。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「チームで支える」という理想と、孤立した現場</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相談できる雰囲気がない、連携が思うように取れない。
          「一人で抱えるしかない」という現実に直面したとき。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「専門職として成長できる」という期待と、繰り返しの日常</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スーパービジョンがない、研修に行けない、
          学んだことを活かせる環境がない、という現実。
        </p>
      </div>

      <h2>「自分がおかしい」のではない</h2>
      <p>
        リアリティショックを経験しているとき、多くの人は自分を責めます。
        「こんなことでつらくなるのは私が弱いから」
        「せっかく転職したのにもう辞めたいなんておかしい」——
      </p>
      <p>
        しかし研究が示すのは、理想と現実のギャップは
        多くの人が経験する、ごく普通の現象だということです。
        転職経験者の半数近くが再び転職を望むという現実は、
        個人の弱さではなく、職場環境とのミスマッチによるものが大きい。
      </p>
      <p>
        さらに研究では、<strong>「自分が何者か」についての明確な感覚（自己概念の明確性）</strong>が高い人ほど、
        リアリティショックの影響を受けにくいことも示されています。
        「自分がこの仕事で何を大切にしているか」「自分はどんな支援者でありたいか」——
        そうした軸の明確さが、ギャップの衝撃を和らげる緩衝材になります。
      </p>

      <h2>消耗が続くときは</h2>
      <p>
        「こんなはずじゃなかった」という感覚が続いているとき、
        それは環境との深刻なミスマッチを示すシグナルかもしれません。
        無理に「慣れよう」「もっと頑張ろう」と押し込めていると、
        消耗が深まるだけです。
      </p>
      <p>
        大切なのは、今の状態を正確に把握することです。
        「理想と現実のギャップで消耗している」という事実を
        ひとりで抱えるのではなく、言葉にして整理する機会を持つことが、
        次の一歩を考えるための土台になります。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          カウンセリングでは、「このまま続けるべきか」という問いに
          すぐに答えを出すのではなく、
          今の消耗がどこから来ているのかを一緒に整理することができます。
          環境の問題か、自分の期待の問題か、あるいは両方か——
          それを見極めることが、判断の出発点になります。
        </p>
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-quit-timing" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 「辞め時」を考えるための視点｜支援職の転職判断
          </Link>
          <Link to="/articles/helper-team-communication" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 職場の構造が消耗を作る｜チームワーク研究から
          </Link>
          <Link to="/tools/helper-burnout-check" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → バーンアウトチェック｜今の消耗度を確認する
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：片山まゆみ・藤桂（2023）「転職時のリアリティショックと離転職意思——自己概念明確性の効果に着目して——」心理学研究，93(6), 495-505 ／ Hultell, D., & Gustavsson, J. P.（2011）Factors affecting burnout and work engagement in teachers when entering employment. Work, 40, 85-98 ／ Kodama, M.（2017）Functions of career resilience against reality shock. Japanese Psychological Research, 59, 255-265
      </p>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          原因がわかっても、しんどさが残るとき
        </p>
        <p className="text-xs text-stone-500 leading-relaxed mb-3">
          頭では理解できていても——
        </p>
        <ul className="space-y-1.5 mb-4">
          <li className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed"><span className="flex-shrink-0 mt-0.5 text-stone-300">・</span>「理想」と「現実」のギャップが、毎日のように頭に浮かぶ</li>
          <li className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed"><span className="flex-shrink-0 mt-0.5 text-stone-300">・</span>「自分がおかしいのか、職場がおかしいのか」がわからなくなってきた</li>
          <li className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed"><span className="flex-shrink-0 mt-0.5 text-stone-300">・</span>転職や異動を考えるが、どこに行っても同じかもと思う</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed">
          こうした状態はよく起こります。<br />
          これは、理解が足りないのではなく、これは、あなたの期待が高すぎたのではなく、<strong className="text-stone-700">事前の情報と現実の乖離が生んだ、自然な心理的反応</strong>だからです。
        </p>
      </div>
      <ArticleBottomCTA />
    </ArticleLayout>
  )
}

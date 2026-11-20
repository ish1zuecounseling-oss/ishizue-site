import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperOrganizationUnsafe() {
  return (
    <ArticleLayout
      title="職場が危ないと感じるときの対処法｜心理的安全性が低い環境の特徴"
      description="「わかっていても守れない」のは、本人の意識だけの問題なのか。鉄道運転士を対象にした研究を手がかりに、組織の管理や職場の規範と現場の行動の関係から、支援職の職場環境を考えます。"
      url="https://www.ishizue-counseling.jp/articles/helper-organization-unsafe"
      date="2026-04-18"
      tags={["burnout", "boundary", "compassion"]}
    >

      <div className="mb-8 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>「わかっていても守れない」が起きる背景（鉄道運転士の研究から）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>組織の管理や職場の規範と、個人の行動の関係</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>支援職の職場に重ねて考えるときのポイント（筆者の考察）</li>
        </ul>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        「この職場、なんとなくおかしい」と感じているうちは、その感覚はまだ正確に機能しているサインかもしれません。
      </p>
      <p>
        「記録を丁寧に書くべきとわかっていても、時間がない」<br />
        「利用者への対応は本当はもっと丁寧にしたいけど、余裕がない」<br />
        「ルールは知っているけど、職場の雰囲気的に守りにくい」——
      </p>
      <p>
        支援職として働く中で、こうした感覚を持ったことはありませんか。
        「わかっていてもできない」は、あなたの意志の弱さや怠慢ではありません。
        組織の構造がそれを生み出している可能性があります。
      </p>

      <h2>「不安全行動」を個人だけの問題にしない研究</h2>
      <p>
        三沢・稲富・山口（2006）は、鉄道事故の報告書251件の分析と、鉄道運転士148名への質問紙調査をもとに、「なぜ安全規則に違反した行動（不安全行動）が起きるのか」を研究しました。
        その結果、<strong>組織の管理や職場の規範が、個人の評価を介して、間接的に不安全行動と関連している</strong>という構造が示されています。
      </p>
      <p>
        この研究は鉄道運転士を対象としたもので、支援職の職場を直接調べたものではありません。
        ただ、組織の管理や規範が、現場で働く人の判断を通じて行動に関わりうるという視点は、支援職の職場環境を考えるうえでも参考になると考えます。
      </p>

      <h2>不安全行動と関連する2つの個人要因</h2>
      <p>
        研究では、不安全行動と関連する個人の要因として、次の2つが挙げられています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① コスト評価——「守ると疲れる」という感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          規則を守ることに伴う疲労・負荷・手間を高く評価している人ほど、不安全行動が多い傾向がありました。
          支援職でいえば「丁寧な記録を書くと残業になる」「手順通りにやると体力的に限界」という状態です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 非有効性評価——「守っても意味がない」という感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          規則を守っても事故防止や質の向上に役立たないと感じている人ほど、不安全行動が多い傾向がありました。
          支援職でいえば「この手順、誰も見てないし意味あるの?」「書類を丁寧に書いても利用者の状態は変わらない」という感覚です。
        </p>
      </div>

      <p>
        この研究で不安全行動との関連が示されたのは、<strong>「守るコストが高い」「守っても意味がない」という評価</strong>でした。
      </p>

      <h2>組織の管理や規範と、個人の評価の関係</h2>
      <p>
        では、このコスト評価と非有効性評価は、何と関係しているのでしょうか。
        研究では、<strong>組織の管理方針と職場の規範</strong>が、これらの評価を介して、間接的に不安全行動と関連していることが示されています。
      </p>

      <h3>組織管理が安全を軽視していると受け止められているとき</h3>
      <p>
        「会社は現場のことをわかっていない」「安全よりも効率を優先している」と受け止められている職場では、
        「規則を守るのは負担だ」「守っても意味がない」という評価も高いという関連が、
        研究の枠組みから考えられます。
      </p>
      <p>
        支援職に重ねると、管理者が「書類より現場優先」「記録は後でまとめて」と言い続ける職場では、
        手順の意義を感じにくくなることもあるでしょう。
      </p>

      <h3>職場の規範——「みんなやってるから」</h3>
      <p>
        研究では、組織規範を2種類に区別しています。
      </p>
      <p>
        一つは<strong>命令的規範</strong>——「同僚たちはこの行動をどう評価するか」という暗黙のルールです。
        「手を抜いても誰も何も言わない」という雰囲気は、規則を守っても意味がないという評価と関連している可能性があります。
      </p>
      <p>
        もう一つは<strong>記述的規範</strong>——「みんながどう行動しているか」という認知です。
        「同僚もみんなやってる」という認知も、不安全行動に関わる要因のひとつとして検討されています。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「うちの職場ではこれが普通」という空気は、個人の行動にも関わりうると筆者は考えます。
          新人が「おかしい」と感じても、「これが現実なんだ」と受け入れていくうちに、
          手順を省くことが当たり前になっていくこともあるかもしれません。
        </p>
      </div>

      <h2>支援職の現場への置き換え</h2>
      <p>
        鉄道運転士の「確認手順の省略」を、支援職の文脈に置き換えてみましょう。
      </p>
      <p>
        「記録を後回しにして雑に書いてしまう」「確認や共有の手順を省いてしまう」「余裕がなく、利用者に丁寧な説明ができなくなる」——
        これらは、支援職の現場で「本当はよくないとわかっていてもやってしまう」行動です。
      </p>
      <p>
        ここからは研究の結果ではなく、研究の枠組みを当てはめた筆者の考察です。
        これらの背景には、守るコストが高すぎる（人手不足・過剰業務）、守る意味が感じられない（管理者が評価しない・職場の雰囲気）、
        職場全体がそれを当然としている——といったことがあるのかもしれません。
      </p>

      <h2>「自分が弱いから」ではない</h2>
      <p>
        支援職の現場でよく聞くのは「自分の意識が低いから」「もっと強くならないと」という自己批判です。
        しかし鉄道運転士の研究では、不安全行動には個人の評価だけでなく、
        <strong>組織の管理方針や職場の規範も間接的に関連している</strong>ことが示されています。
        支援職でも、「できない」理由を個人の意志や性格だけに求めないことが大切だと考えます。
      </p>
      <p>
        あなたが「できない」のではなく、「できない構造の中にいる」のかもしれません。
        その構造を見えるようにすることが、消耗から抜け出す第一歩になります。
      </p>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-burnout-check" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → バーンアウト(燃え尽き症候群)チェック(20項目)
          </Link>
          <Link to="/articles/burnout-early-signs" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → バーンアウトの前兆（サイン）とは
          </Link>
          <Link to="/articles/helper-self-blame" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → なぜ支援職は自分を責めやすいのか
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：三沢良・稲富健・山口裕幸（2006）「鉄道運転士の不安全行動を誘発する心理学的要因」心理学研究，77(2), 132-140 ／ Reason, J.（1997）Managing the risks of organizational accidents. Brookfield, VT: Ashgate ／ 芳賀繁（2000）失敗のメカニズム 日本出版サービス
      </p>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          原因がわかっても、しんどさが残るとき
        </p>
        <p className="text-xs text-stone-500 leading-relaxed mb-3">
          頭では理解できていても——
        </p>
        <ul className="space-y-1.5 mb-4">
          <li className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed"><span className="flex-shrink-0 mt-0.5 text-stone-300">・</span>職場を離れても、なんとなく気が抜けない</li>
          <li className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed"><span className="flex-shrink-0 mt-0.5 text-stone-300">・</span>「自分が気にしすぎなのかも」と思うが、しんどさは変わらない</li>
          <li className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed"><span className="flex-shrink-0 mt-0.5 text-stone-300">・</span>改善しようとするほど疲れて、諦めてしまう</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed">
          こうした状態はよく起こります。<br />
          これは、理解が足りないからでも、あなたの感受性の問題でもありません。<strong className="text-stone-700">職場の環境や仕組みが、しんどさにつながっているのかもしれません。</strong>
        </p>
      </div>
      <ArticleBottomCTA hideBridgeIntro />
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperOrganizationUnsafe() {
  return (
    <ArticleLayout
      title="職場が危ないと感じるときの対処法｜心理的安全性が低い環境の特徴"
      description="「ミスを報告しにくい」「本音が言えない」——そういう職場ではなぜ消耗するのか、そしてどう身を守るかを心理学から解説します。心理的安全性が低い環境の特徴と対処法を紹介。"
      url="https://www.ishizue-counseling.jp/articles/helper-organization-unsafe"
      date="2026-04-18"
      tags={["burnout", "boundary", "compassion"]}
    >

      <div className="mb-8 p-4 rounded-xl" style={ background: "#f5f0eb", border: "1px solid #e8ddd4" }>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={ color: "#8FAF9F" }>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>なぜこの職場で消耗するのか（心理的安全性の低い環境の特徴）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>放置するとどうなるか（バーンアウト・離職リスクの構造）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>どう身を守るか（環境が変わらなくても使える対処法）</li>
        </ul>
      </div>
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

      <h2>「不安全行動」は個人の問題ではない</h2>
      <p>
        三沢・稲富・山口（2006）は、鉄道運転士を対象に「なぜ安全規則に違反した行動（不安全行動）が起きるのか」を研究しました。
        その結果、浮かび上がったのは<strong>組織要因が個人要因を通じて不安全行動を誘発する</strong>という構造です。
      </p>
      <p>
        この知見は、支援職の現場にも深く当てはまります。
      </p>

      <h2>不安全行動を生む2つの個人要因</h2>
      <p>
        研究では、不安全行動を直接引き起こす個人要因として2つが特定されました。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① コスト評価——「守ると疲れる」という感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          規則を守ることに伴う疲労・負荷・手間が高く評価されると、不安全行動が起きやすくなります。
          支援職でいえば「丁寧な記録を書くと残業になる」「手順通りにやると体力的に限界」という状態です。
          研究では、このコスト評価が最も強く不安全行動と関連していました（β=.35）。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 非有効性評価——「守っても意味がない」という感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          規則を守ることが事故防止や質の向上に役立たないと感じると、不安全行動が起きやすくなります。
          支援職でいえば「この手順、誰も見てないし意味あるの?」「書類を丁寧に書いても利用者の状態は変わらない」という感覚です。
        </p>
      </div>

      <p>
        重要なのは、研究では「事故への恐れ（リスク評価）」は不安全行動と有意な関連がなかった点です。
        つまり、<strong>「危ないとわかっていても守れない」のは、恐れが足りないからではありません。
        「守るコストが高すぎる」か「守る意味を感じられない」かのどちらかが問題なのです。</strong>
      </p>

      <h2>組織がコスト評価と非有効性評価を高める</h2>
      <p>
        では、このコスト評価と非有効性評価は何が引き起こすのでしょうか。
        研究が明らかにしたのは、<strong>組織の管理方針と職場の規範</strong>がそれを生み出しているという事実です。
      </p>

      <h3>組織管理が安全を軽視していると認知されると</h3>
      <p>
        「会社は現場のことをわかっていない」「安全よりも効率を優先している」という認知が広がると、
        現場の個人の中で「規則を守ることのコスト感」が高まり、
        「規則を守っても意味がない」という評価が生まれやすくなります。
      </p>
      <p>
        支援職でいえば、管理者が「書類より現場優先」「記録は後でまとめて」と言い続けると、
        現場スタッフは手順の意義を感じられなくなっていきます。
      </p>

      <h3>職場の規範——「みんなやってるから」</h3>
      <p>
        研究では、組織規範を2種類に区別しています。
      </p>
      <p>
        一つは<strong>命令的規範</strong>——「同僚たちはこの行動をどう評価するか」という暗黙のルールです。
        「手を抜いても誰も何も言わない」という雰囲気があると、規則の非有効性評価が高まります（β=.39）。
      </p>
      <p>
        もう一つは<strong>記述的規範</strong>——「みんながどう行動しているか」という認知です。
        「同僚もみんなやってる」という認知は、不安全行動を直接引き起こすことも示されました。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「うちの職場ではこれが普通」という空気は、個人の行動を強力に規定します。
          新人が「おかしい」と感じても、「これが現実なんだ」と学習していく過程で、
          不安全な行動パターンが当たり前になっていきます。
        </p>
      </div>

      <h2>支援職の現場への置き換え</h2>
      <p>
        鉄道運転士の「確認手順の省略」を、支援職の文脈に置き換えてみましょう。
      </p>
      <p>
        「記録を雑に書く」「利用者への説明を省く」「感情的になってしまう」「境界線を無視した関わりをしてしまう」——
        これらは、支援職の現場で「本当はよくないとわかっていてもやってしまう」行動です。
      </p>
      <p>
        研究の知見に照らすと、これらが起きている背景には次のいずれかがあります。
        守るコストが高すぎる（人手不足・過剰業務）か、守る意味が感じられない（管理者が評価しない・職場の雰囲気）か、
        あるいは職場全体がそれを当然としている（記述的規範）かのいずれかです。
      </p>

      <h2>「自分が弱いから」ではない</h2>
      <p>
        支援職の現場でよく聞くのは「自分の意識が低いから」「もっと強くならないと」という自己批判です。
        しかし研究が示すのは、不安全行動は個人の意志や性格ではなく、
        <strong>組織の管理方針と職場の規範によって構造的に生み出される</strong>ということです。
      </p>
      <p>
        あなたが「できない」のではなく、「できない構造の中にいる」のかもしれません。
        その構造を見えるようにすることが、消耗から抜け出す第一歩になります。
      </p>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-workplace-stress-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援職の職場ストレスチェック
          </Link>
          <Link to="/articles/helper-burnout-signs" className="text-sm text-[#7EB8A4] hover:underline">
            → バーンアウトの前兆（サイン）とは
          </Link>
          <Link to="/articles/helper-self-criticism-culture" className="text-sm text-[#7EB8A4] hover:underline">
            → なぜ支援職は自分を責めやすいのか
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：三沢良・稲富健・山口裕幸（2006）「鉄道運転士の不安全行動を誘発する心理学的要因」心理学研究，77(2), 132-140 ／ Reason, J.（1997）Managing the risks of organizational accidents. Brookfield, VT: Ashgate ／ 芳賀繁（2000）失敗のメカニズム 日本出版サービス
      </p>
      <ArticleBottomCTA />
    </ArticleLayout>
  )
}

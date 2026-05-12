import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function SelfFunctionDecline() {
  return (
    <ArticleLayout
      title="自己機能が低下するとどうなるか｜「自分がわからない」「何がしたいかわからない」の症状一覧"
      description="「自分がわからない」「何がしたいかわからない」「疲れているのに止まれない」——これらは自己機能低下のサインです。症状別に原因と対処記事を整理します。"
      url="https://www.ishizue-counseling.jp/articles/self-function-decline"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >

      <div className="mb-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-sm text-stone-600 leading-relaxed">
          「自分がわからない」<br />
          「何がしたいかわからない」<br />
          「疲れているのに止まれない」<br />
          <span className="block mt-2 text-stone-500">——それは自己機能が低下しているサインかもしれません。</span>
        </p>
      </div>

      <p>
        <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>とは「自分を自分として保持・理解・運用する力」です。
        これが消耗すると、<strong>様々な「自分がわからない」「止まれない」「感じられない」という状態が現れます。</strong>
      </p>
      <p>
        この記事では、自己機能が低下したときに起きる状態を症状別に整理し、
        それぞれの詳しい解説記事へのリンクをまとめています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自己機能が消耗するとこんな状態が起きます</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・感情がわからない・何も感じられない</li>
          <li>・疲れているのに止まれない</li>
          <li>・「何がしたいか」がわからない</li>
          <li>・他人の期待で動いている感覚</li>
          <li>・考えすぎて行動できない</li>
          <li>・空虚感・意味の喪失</li>
          <li>・休んでも回復しない</li>
          <li>・境界線が薄くなる</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">これらは性格や意志の問題ではなく、自己機能が消耗した状態から起きています。</p>
      </div>

      <h2>症状別：詳しく見る</h2>

      {/* 症状1 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状①</span>
          <p className="text-sm font-medium text-stone-800">感情がわからない・何も感じられない</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            「今どんな気持ち？」と聞かれても答えられない。他人の感情はわかるのに自分の感情がわからない——
            感情労働・脳疲労・過剰適応の蓄積で起きる状態です。
          </p>
          <Link to="/articles/emotion-unknown" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情がわからない人の特徴と回復</Link>
          <span className="mx-2 text-stone-300">／</span>
          <Link to="/articles/helper-emotional-numbness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情麻痺とは何か</Link>
        </div>
      </div>

      {/* 症状2 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状②</span>
          <p className="text-sm font-medium text-stone-800">疲れているのに止まれない</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            「まだできる」「休んでいる場合ではない」——自己機能が低下すると「疲れ」のシグナルへのアクセスが薄れます。
            責任感・義務感が身体感覚を上回り続けます。
          </p>
          <Link to="/articles/helper-responsibility-burnout" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 責任感が強すぎて潰れそう</Link>
          <span className="mx-2 text-stone-300">／</span>
          <Link to="/articles/helper-cannot-rest-on-days-off" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 休日も休まらない</Link>
        </div>
      </div>

      {/* 症状3 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状③</span>
          <p className="text-sm font-medium text-stone-800">「何がしたいか」がわからない</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            役割・義務・他者の期待で動き続けると、「自分の欲求」が空白になっていきます。
            「本当はどうしたい？」に答えられなくなるのは、自己機能消耗の中核的なサインです。
          </p>
          <Link to="/articles/self-function-what" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 自己機能とは何か</Link>
        </div>
      </div>

      {/* 症状4 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状④</span>
          <p className="text-sm font-medium text-stone-800">考えすぎて動けない・頭が止まらない</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            脳の思考系ネットワークが過活動になり、感覚系が圧倒される状態。
            「もっと考えれば解決できる」という思考が脳を止まらなくさせます。
          </p>
          <Link to="/articles/overthinking-needs-sensation" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 考えすぎる人に必要なのは感覚</Link>
          <span className="mx-2 text-stone-300">／</span>
          <Link to="/articles/helper-rumination" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 仕事のことが頭から離れない</Link>
        </div>
      </div>

      {/* 症状5 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状⑤</span>
          <p className="text-sm font-medium text-stone-800">空虚感・意味の喪失</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            何かを達成しても満足感がない。頑張っているのに空虚——
            これは自己機能が消耗し、自分の欲求・価値観へのアクセスが失われているサインです。
            バーンアウトの達成感喪失とも深く関連します。
          </p>
          <Link to="/articles/helper-burnout-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ バーンアウト診断（20項目）</Link>
          <span className="mx-2 text-stone-300">／</span>
          <Link to="/articles/helper-aptitude-doubt" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 向いていないと感じる</Link>
        </div>
      </div>

      {/* 症状6 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状⑥</span>
          <p className="text-sm font-medium text-stone-800">休んでも回復しない</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            自己機能が低下すると、身体的休息だけでは回復しない状態になります。
            感情的休息・精神的休息・感覚的休息が不足しているためです。
          </p>
          <Link to="/articles/helper-mental-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 休んでも回復しない理由</Link>
          <span className="mx-2 text-stone-300">／</span>
          <Link to="/articles/compassion-fatigue-recovery-period" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 回復期間の目安</Link>
        </div>
      </div>

      {/* 症状7 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状⑦</span>
          <p className="text-sm font-medium text-stone-800">他人に合わせすぎる・断れない</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            自己機能が低下すると「自分の感覚・ニーズ」が見えにくくなり、
            他者の期待・感情に引っ張られやすくなります。NOと言えない状態が深まります。
          </p>
          <Link to="/articles/helper-cannot-say-no" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 断れない・NOと言えない</Link>
          <span className="mx-2 text-stone-300">／</span>
          <Link to="/articles/helper-boundary-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 境界線セルフチェック</Link>
        </div>
      </div>

      {/* 症状8 */}
      <div className="border border-stone-200 rounded-xl overflow-hidden mb-3">
        <div className="px-4 py-3 bg-stone-50 flex items-center gap-2">
          <span className="text-xs font-medium text-[#8FAF9F]">症状⑧</span>
          <p className="text-sm font-medium text-stone-800">「自分のせいだ」が止まらない</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-stone-600 leading-[1.9] mb-2">
            自己機能が低下した状態では、出来事を「自分の責任」に帰属させやすくなります。
            自責のループが消耗をさらに深めます。
          </p>
          <Link to="/articles/helper-self-blame" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 「自分のせいだ」が止まらない</Link>
          <span className="mx-2 text-stone-300">／</span>
          <Link to="/articles/helper-guilt-about-suffering" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ もっとできたはずという罪悪感</Link>
        </div>
      </div>

      <h2>自己機能の消耗と支援職の関係</h2>
      <p>
        これらの症状が支援職・医療職・対人援助職に多い理由は、
        <strong>対人機能を使いすぎることで自己機能が後退するという構造</strong>にあります。
      </p>
      <p>
        他者の感情を読む・共感する・境界を整えるという対人機能は高いまま、
        自分の感情を感じる・自分のニーズを把握する・自分のペースで動くという自己機能が消耗していきます。
      </p>
      <p className="text-sm text-stone-500">
        支援職の消耗について→ <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは（総合解説）</Link> ／ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>
      </p>

      <LineCtaImpostor />

      <h2>自己機能を回復させるために</h2>
      <p>
        自己機能の回復には「思考での自己分析」より「身体感覚・感情・安全な対話」が有効です。
        詳しくは<Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは何か</Link>を参照してください。
      </p>


      <h2>よくある質問</h2>

      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">自己機能が低下するとどうなりますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">感情がわからない・疲れても止まれない・何がしたいかわからない・空虚感・考えすぎて動けない・他人に合わせすぎるなど、生活のあらゆる場面で「自分がわからない」状態が現れてきます。これらは性格や意志の問題ではなく、自己機能の消耗から起きています。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">自分がわからなくなるのは病気ですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">病気とは限りません。長期的な感情労働・過剰適応・脳疲労の蓄積によって、自己機能が消耗することで起きる場合が多いです。ただし長期間続き日常生活に大きな支障が出ている場合は、専門家への相談をおすすめします。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">感情がわからないのはなぜですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">感情労働の蓄積・脳疲労・過剰適応・感情を表現できない環境などが重なると、自分の感情へのアクセスが薄れていきます。「他人の感情はわかるのに自分の感情がわからない」という状態は支援職に多いパターンです。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">自己機能は回復しますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">回復します。思考での自己分析より、身体感覚・感情規則のない時間・安全な対話を通じて回復しやすいです。早めに気づいて対処するほど、回復に必要な時間が短くなります。</div>
      </details>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「自分がわからない」状態を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己機能の回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          どの症状から入っても、根本には同じ「自己機能の消耗」があります。
          消耗の構造を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-function-decline"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

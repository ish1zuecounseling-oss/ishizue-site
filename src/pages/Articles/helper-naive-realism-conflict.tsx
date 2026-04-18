import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperNaiveRealismConflict() {
  return (
    <ArticleLayout
      title="わかってもらえないストレスの対処法｜ナイーブ・リアリズムの心理学"
      description="「なぜあの人はわかってくれないのか」——自分の見え方が「正しい現実」だという思い込みが、職場の対立を生みます。なぜ起きるのか、心理学で正体と対処法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-naive-realism-conflict"
      date="2026-04-18"
      tags={["boundary", "burnout", "compassion"]}
    >
      <p>
        「あのスタッフはわかっていない」「なぜ利用者はこちらの言っていることが伝わらないのか」——
        支援職の現場では、こうした感覚が消耗の大きな源になることがあります。
      </p>
      <p>
        意見の対立や認識のズレは、支援の質を下げるだけでなく、
        支援者自身を孤立させ、職場への不満やバーンアウトにつながることも少なくありません。
        では、なぜ私たちは意見が違う相手を「偏っている」と感じてしまうのでしょうか。
      </p>
      <p>
        心理学の「ナイーブリアリズム」という概念から、その構造を整理します。
      </p>

      <h2>「私は世の中をありのままに見ている」という錯覚</h2>
      <p>
        ナイーブリアリズム（Naïve Realism）とは、
        「自分の認知や判断は主観ではなく、客観的事実をありのままに反映している」
        と人が信じてしまう傾向のことです（Ross & Ward, 1995）。
      </p>
      <p>
        この理論は、3つの信念の連鎖として説明されます。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">ナイーブリアリズムの3つの信念</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>第1の信念</strong>：私は物事を客観的にありのままに見ている。<br />
          <strong>第2の信念</strong>：だから、理性的な普通の人は概して私と同じ見方をするはずだ。<br />
          <strong>第3の信念</strong>：私と異なる見方をする人がいるとしたら、その人は情報が足りないか、
          偏った個人的理由に影響されているに違いない。
        </p>
      </div>
      <p>
        この第3の信念こそが、「あの人はわかっていない」「あの人は偏っている」
        という感覚を生み出すメカニズムです。
        自分の見方を「客観的事実の反映」と信じているため、
        それと異なる意見は「バイアスがかかった歪んだ見方」に映ってしまうのです。
      </p>

      <h2>職場の対立——「あのスタッフはわかっていない」</h2>
      <p>
        支援職の職場では、同じ利用者を見ていても、スタッフ間で対応方針が食い違うことがあります。
        「もっと距離を置くべきだ」「いや、もっと寄り添うべきだ」——
        お互いが経験と信念に基づいて判断しているにもかかわらず、
        なぜか「相手が間違っている」という感覚が生まれやすいのです。
      </p>
      <p>
        神原（2021）の研究では、意見が対立する相手（相反態度の他者）に対して、
        意見が一致する相手よりも「バイアスがかかっている」と評価する傾向が確認されています。
        しかもこの傾向は、相手を積極的に否定したいという動機がなくても生じます。
        <strong>ただ「自分は正しく見ている」と信じているだけで、自動的に起きてしまう認知の歪み</strong>です。
      </p>
      <p>
        職場での孤立感や「誰もわかってくれない」という消耗は、
        しばしばこのメカニズムから生まれています。
        自分も相手も、同じように「正しく見ている」と信じながら、
        お互いを「偏っている」と感じ合っている状態です。
      </p>

      <h2>利用者との認識のズレ——「なぜ伝わらないのか」</h2>
      <p>
        同じことは、支援者と利用者の間でも起きています。
      </p>
      <p>
        支援者は専門的な知識と経験から「この方針が最善だ」と判断します。
        しかし利用者は自分の生活や感情、価値観から「そうは思わない」と感じる。
        この食い違いを支援者が「利用者が理解できていない」と受け取ると、
        関係が硬直し、支援者側の消耗も深まっていきます。
      </p>
      <p>
        ナイーブリアリズムの視点から見ると、
        利用者も支援者も、それぞれ「自分はありのままを見ている」と感じています。
        どちらが正しいかという問題ではなく、
        <strong>どちらの見方も主観的なものであり、それぞれに根拠がある</strong>という理解が、
        対話の土台になります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜわかってもらえないのか」という焦りの背景には、
          「自分の見方は正しい（客観的だ）」という前提が隠れていることがあります。
          その前提に気づくだけで、支援者自身の消耗が少し和らぐことがあります。
        </p>
      </div>

      <h2>「自分の目を疑う」ことが、関係を変える</h2>
      <p>
        神原（2021）の実験では、「錯視」——つまり目で見ているものが実際とは異なって見える体験——を
        した参加者は、意見が対立する相手を「バイアスがかかっている」と評価する傾向が
        有意に低下したことが示されています。
      </p>
      <p>
        錯視を経験することで「自分の知覚は必ずしも正確ではない」という気づきが生まれ、
        「自分の見方＝客観的事実」という確信が揺らぐ。
        その結果、相手の見方を「歪んでいる」と決めつける傾向が和らいだのです。
      </p>
      <p>
        これが示すのは、<strong>「自分の見方も主観に過ぎない」という気づきが、
        対人葛藤を和らげる可能性がある</strong>ということです。
        相手の見方を理解しようとする前に、自分の見方の不確かさに気づくこと——
        これが関係を変える出発点になりえます。
      </p>

      <h2>支援職として持ちたい視点</h2>
      <p>
        「あの人はわかっていない」と感じたとき、
        それは相手が実際に間違っているのではなく、
        自分とは異なる主観から物事を見ているということかもしれません。
      </p>
      <p>
        同様に、「利用者に伝わらない」と感じたとき、
        利用者が理解できないのではなく、
        利用者には利用者の見方のリアリティがあるということかもしれません。
      </p>
      <p>
        支援の現場で意見の食い違いや対立が生じたとき、
        「なぜ相手は間違っているのか」を問う前に、
        「なぜ私はこう見えているのか」を少し問い直してみることが、
        関係の硬直を解くきっかけになることがあります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 font-medium leading-[1.9] mb-2">
          対立が消耗に変わる前に
        </p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場での意見の食い違いや、利用者との認識のズレが続くとき、
          それが慢性的なストレスや孤立感につながっていることがあります。
          「なぜこんなに疲れるのか」という感覚の構造を整理することが、
          消耗を防ぐ第一歩です。
        </p>
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-boundary" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援職の境界線（バウンダリー）とは
          </Link>
          <Link to="/articles/helper-thinking-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援職の「考え方のクセ」現在地チェック
          </Link>
          <Link to="/articles/helper-status-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援職のための現在地チェック
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：神原歩（2021）「態度が相反する他者への過度なバイアス認知を錯視経験が緩和する効果」心理学研究，92(1), 12-20 ／ Ross, L., & Ward, A.（1995）Psychological barriers to dispute resolution. In M. P. Zanna (Ed.), Advances in experimental social psychology, 255-304 ／ Kennedy, K. A., & Pronin, E.（2008）When disagreement gets ugly: Perceptions of bias and the escalation of conflict. Personality and Social Psychology Bulletin, 34, 833-848 ／ Pronin, E., Gilovich, T., & Ross, L.（2004）Objectivity in the eye of the beholders: Divergent perceptions of bias in self versus others. Psychological Review, 111, 781-799
      </p>
      <ArticleBottomCTA />
    </ArticleLayout>
  )
}

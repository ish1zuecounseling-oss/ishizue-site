import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "支援職が自分を見失うのは避けられないのですか？",
    a: "避けられません——というより、支援職という仕事の構造上、自己機能が消耗しやすい力が常に働きます。しかしその構造を理解した上で、境界線・セルフケア・安全な対話・回復の時間を意識的に組み込むことで、消耗のスピードを大きく変えられます。",
  },
  {
    q: "一度自分を見失ったら、取り戻せますか？",
    a: "取り戻せます。自己機能の消耗は回復可能です。ただし「頭で理解する」だけでは回復しにくく、身体感覚・感情・安全な対話・役割を脱ぐ時間を通じて少しずつ回復します。一人で抱えず、外部サポートを活用することが回復を早めます。",
  },
  {
    q: "支援職でも自分を失わずに続けることはできますか？",
    a: "できます。「自分を失わない」のではなく「失っていることに早めに気づいて回復できる」という構造を作ることが現実的です。定期的なセルフチェック・スーパービジョン・カウンセリング・休息の確保が、長く支援を続けるための基盤になります。",
  },
]

export default function WhySupportWorkersLoseThemselves() {
  return (
    <ArticleLayout
      title="なぜ支援職は自分を見失うのか｜消耗の構造と回復への統合的理解"
      description="支援職が「自分がわからない」「疲れているのに止まれない」「何も感じない」状態になるのはなぜか。共感疲労・愛着・他人軸・役割依存・脳疲労・自己機能低下を統合して解説します。"
      url="https://www.ishizue-counseling.jp/articles/why-support-workers-lose-themselves"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「あなたが弱い」のではありません。「構造として消耗している」のです。
      </p>

      <p>
        支援職として働く中で、気づくと「自分がどこにいるかわからない」「感情が動かない」「疲れているのに止まれない」という状態になっていることがあります。
      </p>
      <p>
        これは意志の弱さでも、性格の問題でも、支援職に向いていないからでもありません。
        <strong>支援職という仕事の構造が、自己機能を消耗させる方向に働き続けているから</strong>です。
      </p>
      <p>
        この記事では、支援職が「自分を見失う」メカニズムを段階的に整理し、
        回復への入口を示します。
      </p>

      <h2>なぜ支援職ほど起きやすいのか</h2>
      <p>
        「自分を見失う」という体験は誰にでも起きうるものですが、
        <strong>支援職は構造的にそれが起きやすい環境</strong>の中で働いています。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 共感能力が高い人が集まりやすい</p>
          <p className="text-stone-600 leading-[1.9]">
            支援職を選ぶ人は、他者の感情を読む・困っている人を助けたいという傾向が強い方が多いです。
            この共感能力の高さは支援の強みですが、同時に<Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎて疲れる</Link>・感情を引きずりやすい構造でもあります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 責任感・使命感が「動き続けること」を正当化する</p>
          <p className="text-stone-600 leading-[1.9]">
            「この人のために」「自分がやらなければ誰がやる」という責任感は、<Link to="/articles/helper-responsibility-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">消耗しても止まれない</Link>動機になります。
            「頑張ることが誠実さの証明」という職場文化が、弱音を言えない環境を作ることもあります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 「自分より相手を優先すること」が評価される</p>
          <p className="text-stone-600 leading-[1.9]">
            利用者を最優先にすること・自分のニーズを後回しにすることが「良い支援者」として評価される構造があります。
            これは<Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>・<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>を職業的に強化します。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 境界線の消耗が職業構造に組み込まれている</p>
          <p className="text-stone-600 leading-[1.9]">
            慢性的な人手不足・断りにくい状況・利用者との長期関係——
            これらは境界線を維持することを構造的に難しくします。
            「個人の努力」で解決できる問題ではなく、職業そのものが境界線消耗を促進する面があります。
          </p>
        </div>
      </div>

      <p>
        これらの構造的要因が重なることで、個人の性格・意志とは別に、
        自己機能の消耗が進みやすい環境が生まれます。
        「自分が弱いから」という自己批判より、「この構造の中で消耗した」という理解が回復の入口になります。
      </p>

      <h2>段階①：対人関係機能の過活動が始まる</h2>
      <p>
        支援職の仕事の本質は「他者と深く関わること」です。
        利用者の感情を読む・共感する・空気を調整する・場を整える——
        これらはすべて<strong>対人関係機能</strong>を使う作業です。
      </p>
      <p>
        支援者は毎日何時間も、高強度の対人関係処理を行います。
        <Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎて疲れる</Link>・<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働の蓄積</Link>・<Link to="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">頭から離れない</Link>——
        これらは対人関係機能が過活動になり始めているサインです。
      </p>

      <h2>段階②：自己機能が後退する</h2>
      <p>
        対人関係機能の使いすぎは、対照的に「自己機能」を後退させます。
      </p>
      <div className="card">
        <div className="space-y-3 text-sm">
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-xs font-medium text-stone-400 mb-1">過活動になる（使いすぎる）</p>
              <ul className="text-stone-600 space-y-1">
                <li>・他者の感情を読む</li>
                <li>・共感・調整・配慮</li>
                <li>・空気を読む・場を整える</li>
                <li>・他者のニーズを察知する</li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-[#8FAF9F] mb-1">後退する（消耗する）</p>
              <ul className="text-stone-600 space-y-1">
                <li>・自分の感情を感じる</li>
                <li>・自分のニーズを知る</li>
                <li>・自分のペースで動く</li>
                <li>・「自分はどうか」を問う</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p>
        <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>が後退すると「感情がわからない」「何がしたいかわからない」「疲れているかどうかわからない」という状態が始まります。
      </p>

      <h2>段階③：境界線が消耗する</h2>
      <p>
        自己機能が後退すると、「どこまでが自分か」という感覚も薄れていきます。
        利用者の問題が自分の問題になる・断れない・抱え込む——
        <Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線の消耗</Link>が深まります。
      </p>
      <p>
        <Link to="/articles/helper-carrying-clients" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">利用者を背負いすぎる</Link>・<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断れない</Link>・<Link to="/articles/helper-pulled-by-client" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情的に引っ張られる</Link>——
        これらは境界線が消耗したサインです。
      </p>

      <h2>段階④：他人軸・役割依存へ</h2>
      <p>
        境界線が薄くなると「自分の感覚・ニーズ」より「他者の評価・期待」が優先されるようになります。
        <Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>が強まり、<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割を降りることへの恐れ</Link>が出てきます。
      </p>
      <p>
        「支援者としての自分」だけが自己概念を占め、「それ以外の自分」が空白になっていきます。
        <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>が低下し、一つの役割への失敗が「全部ダメな自分」という感覚になりやすくなります。
      </p>

      <h2>段階⑤：脳疲労・反芻の深化</h2>
      <p>
        対人関係処理・感情管理・自己批判が慢性化すると、<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>が深まります。
        「頭が止まらない」<Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>・<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">眠れない</Link>・<Link to="/articles/helper-cannot-switch-off" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">切り替えられない</Link>——
        脳の回復機能自体が低下します。
      </p>
      <p>
        この段階では「休んでも回復しない」という状態になります。
        消耗の種類と回復の方法がずれているからです。
        詳しくは<Link to="/articles/helper-mental-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休んでも回復しない理由</Link>を参照してください。
      </p>

      <h2>段階⑥：自己喪失——「自分がわからない」へ</h2>
      <p>
        これらが重なり続けると、「自分がどこにいるかわからない」「感情が動かない」「何がしたいかわからない」という<strong>自己喪失状態</strong>に至ります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<Link to="/articles/emotion-unknown" className="underline underline-offset-2">感情がわからない</Link>——感情系へのアクセスが閉じる</p>
        <p>・<Link to="/articles/what-do-i-want" className="underline underline-offset-2">何がしたいかわからない</Link>——欲求・動機が空白になる</p>
        <p>・<Link to="/articles/feeling-nothing" className="underline underline-offset-2">何も感じない</Link>——感情麻痺・空虚感</p>
        <p>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2">自分の価値がわからない</Link>——自己評価の喪失</p>
      </div>

      <h2>背景にある構造：ワーキングモデルとの関係</h2>
      <p>
        このプロセスに、幼少期から形成された<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>が深く関わることがあります。
      </p>
      <p>
        「役に立つことで価値を確認してきた」「断ると関係が壊れると思ってきた」「弱さを見せると受け入れてもらえないと学んできた」——
        これらのワーキングモデルが、支援職という環境で作動し続けることで、消耗が加速します。
      </p>
      <p>
        <Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>・<Link to="/articles/anxious-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">不安型愛着</Link>・<Link to="/articles/avoidant-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">回避型愛着</Link>——
        これらのパターンが「なぜそうなるのか」の発達的背景を説明します。
      </p>

      <p className="text-sm text-stone-500">
        今の状態を確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link> ／ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下の症状一覧</Link>
      </p>

      
      <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-100">
        <p className="text-sm text-stone-600 leading-relaxed mb-2">
          「なぜこんなに疲れるのか」を構造から整理すると、感情労働の見え方が変わってきます。
        </p>
        <a href="/articles/emotional-labor-what-pillar"
          className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
          → 感情労働とは？仕事で消耗する構造と回復の考え方
        </a>
      </div>

      <LineCtaCompassion />

      <h2>回復への入口：「構造として消耗している」という理解から</h2>
      <p>
        回復の最初の一歩は、<strong>「あなたが弱い」のではなく「構造として消耗している」という理解</strong>です。
      </p>
      <p>
        この理解が、自己批判を緩め、消耗の構造に対処するための具体的な行動につながります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">回復のための6つの方向</p>
        <div className="space-y-2 text-sm">
          {[
            { step: "① 今の状態を確認する", link: "/articles/helper-empathy-check", text: "共感疲労チェックで現在地を把握" },
            { step: "② 消耗の種類を理解する", link: "/articles/self-function-decline", text: "どの機能が消耗しているかを整理" },
            { step: "③ 身体感覚に戻る", link: "/articles/overthinking-needs-sensation", text: "思考より感覚を優先する時間を作る" },
            { step: "④ 境界線を整える", link: "/articles/helper-boundary-check", text: "自分と他者の境界を確認・回復する" },
            { step: "⑤ 弱さを出せる場所を持つ", link: "/articles/helper-mental-recovery", text: "安全な対話で自己機能を回復させる" },
            { step: "⑥ 背景のパターンを理解する", link: "/articles/working-model", text: "ワーキングモデルと消耗の関係を整理" },
          ].map(({ step, link, text }) => (
            <div key={step} className="flex gap-3">
              <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-36">{step}</span>
              <Link to={link} className="text-stone-600 hover:text-stone-900 underline underline-offset-2 text-xs">{text}</Link>
            </div>
          ))}
        </div>
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
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「自分がどこにいるかわからない」を一緒に整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          消耗の構造を外から整理することで、「なぜそうなったのか」「どこから変えればいいのか」が見えてきます。支援職の消耗を15年間専門としたカウンセラーが、一緒に考えます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white transition-all" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/why-support-workers-lose-themselves"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と共感疲労・愛着理論・自己心理学・脳疲労研究の知見を統合して作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

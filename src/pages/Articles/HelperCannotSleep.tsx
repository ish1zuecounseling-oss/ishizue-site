import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function HelperCannotSleep() {
  return (
    <ArticleLayout
      title="支援職が眠れない｜仕事のことが頭から離れない原因と回復法"
      description="仕事のことが頭から離れず眠れない——支援職に多い睡眠障害の原因は共感疲労・二次受傷による神経系の緊張です。侵入型・過覚醒型の違いと、今日からできる回復法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-cannot-sleep"
      date="2026-05-03"
      tags={["compassion", "burnout", "check"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        ベッドに入っても仕事のことが浮かぶ、眠れても夢で仕事の場面が出てくる——支援職に多い睡眠の問題を整理します。
      </p>

      <p>
        支援職に多い「眠れない」状態には、2つのパターンがあります。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-700 space-y-2">
          <li>・<strong>侵入型</strong>：寝る前に利用者のことが浮かぶ・夢で仕事の場面が出てくる</li>
          <li>・<strong>過覚醒型</strong>：神経系が緊張したままでリラックスできず眠れない</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">どちらも共感疲労・二次受傷による神経系の消耗から起きています。</p>
      </div>

      <h2>なぜ支援職は眠れなくなるのか</h2>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 神経系が「緊張モード」のままになっている</p>
          <p className="text-stone-600 leading-[1.9]">慢性的なストレス状態では、自律神経系が交感神経優位（緊張モード）のまま固まります。「休もうとしても身体がオフにならない」状態です。これは意志の問題ではなく、神経系の生理的な変化です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② 未処理の記憶が夜に浮き上がる</p>
          <p className="text-stone-600 leading-[1.9]">日中は仕事・業務で意識が占有されているため、処理しきれなかった感情・記憶が就寝前の静かな時間に浮き上がります。「利用者のことが寝る前に浮かぶ」のはこのメカニズムです。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 「また明日も頑張らなければ」という予期的緊張</p>
          <p className="text-stone-600 leading-[1.9]">「明日のあのケース」「未解決の問題」への予期的な緊張が、就寝前に高まります。休もうとしているのに脳が次の問題に向かいます。</p>
        </div>
      </div>

      <p className="text-sm text-stone-500">
        今の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>今日からできる対処：神経系を緩める</h2>
      <p>
        「眠ろうとする努力」は逆効果になることがあります。
        眠ることより先に、<strong>神経系を「安全モード」に切り替えること</strong>が重要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 就寝1時間前に「書き出す」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頭に浮かぶこと・気になることをノートに書き出してから寝る。
          「明日やること」「気になっていること」を外に出すことで、
          脳が「もう覚えていなくていい」と判断しやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 腹式呼吸（4-7-8呼吸）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          4秒吸って・7秒止めて・8秒かけて吐く。
          ゆっくりとした呼吸は副交感神経を活性化し、神経系をリラックスモードに切り替えます。
          眠れなくても「呼吸に集中する」だけで神経系の緊張が緩まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 就寝前の「切り替え儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          シャワー・温かい飲み物・ストレッチなど、「今日の仕事はここで終わり」を身体に伝える儀式を作ります。
          繰り返すことで、脳が「この儀式の後は休む時間」と学習します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「眠れなくても大丈夫」と思う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「眠れない→明日ダメになる」という不安が、さらに緊張を高めます。
          「横になって休むだけでいい」「眠れなくても身体は休まっている」という認識に切り替えることが、逆説的に眠りやすくする場合があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ スマートフォンを寝室に持ち込まない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          スマートフォンのブルーライトと情報刺激は神経系を覚醒させます。
          就寝1時間前から画面を見ない・寝室にスマートフォンを置かないことが、神経系の回復を助けます。
        </p>
      </div>

      <h2>睡眠の問題が続いているなら</h2>
      <p>
        これらの対処を試しても2週間以上眠れない状態が続く場合は、
        神経系・脳の状態そのものが消耗している可能性があります。
        一人での対処に限界があるサインです。
      </p>

      <div className="card" style={{ borderLeft: "3px solid #9f3a3a" }}>
        <p className="text-sm font-medium text-stone-700 mb-2">医療機関への相談を検討するサイン</p>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>2週間以上、眠れない・眠れても夢で起きる状態が続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>日中の集中力・判断力に著しい支障が出ている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>死にたい・消えてしまいたいという気持ちがある</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">該当する場合は、心療内科・精神科の受診を優先してください。</p>
      </div>


      <h2>よくある質問</h2>

      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">共感疲労で眠れなくなることはありますか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">はい。共感疲労・二次受傷による神経系の慢性的な緊張が、睡眠障害の主な原因になります。「休もうとしても身体がオフにならない」「寝る前に利用者のことが浮かぶ」という状態は、共感疲労の典型的なサインです。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">夢に仕事の場面が出てくるのは危険ですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">夢に仕事の場面が繰り返し出てくる状態は、二次受傷・共感疲労の侵入症状の一つです。それ自体は即座に危険ではありませんが、2週間以上続く・日常生活に支障が出ている場合は専門家への相談を検討してください。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">夜になると利用者のことを思い出してしまいます</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">これは「侵入症状」と呼ばれる共感疲労・二次受傷のサインです。日中は仕事で意識が占有されているため、静かな夜に未処理の記憶が浮かびやすくなります。就寝前の「書き出す」習慣が有効です。</div>
      </details>
      <details className="rounded-xl border border-stone-200 overflow-hidden mb-2">
        <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">睡眠薬を飲むべきですか？</summary>
        <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">睡眠薬の使用については医師の判断が必要です。2週間以上眠れない状態が続いている場合は、心療内科・精神科への相談をおすすめします。薬を使うかどうかは医師と相談の上で決めることが重要です。</div>
      </details>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">うまく話せなくても大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">「眠れない」状態の背景を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          眠れない背景にある消耗の構造を外から整理することが、回復の入口になります。
          支援職として働く中での消耗を前提にした相談を行っています。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      {/* 内部リンク */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-client-stuck-in-head" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 利用者の話が頭から離れない——侵入症状の原因と対処</Link>
          <Link to="/articles/helper-emotional-numbness" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 感情が麻痺している——支援職の感情麻痺と回復</Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労チェック（20項目・3分）</Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労からの回復方法</Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、共感疲労・神経系疲労に関する心理学的知見をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

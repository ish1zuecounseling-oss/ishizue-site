import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function AnxiousAttachment() {
  return (
    <ArticleLayout
      title="不安型愛着とNOが言えない｜断れない・見捨てられ不安の仕組みと対処"
      description="「断ると嫌われる」「関係が壊れる気がして断れない」——不安型愛着と見捨てられ不安が断れないパターンを作る仕組みと、支援職での消耗との関係を解説します。"
      url="https://www.ishizue-counseling.jp/articles/anxious-attachment"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「断ると関係が終わる気がして断れない」「相手の機嫌を常に確認してしまう」「一人になると強い不安がある」——こんなパターンはありませんか？NOが言えない背景には、<strong>見捨てられ不安を中心とした不安型愛着</strong>が関係していることがあります。
      </p>

      <p>
        「断ると関係が壊れる気がして断れない」「相手の機嫌が悪いと自分のせいかと思う」「一人になると強い不安がある」——
        これらは<strong>不安型愛着スタイルのパターン</strong>と深く関連していることがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんなパターンはありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・断ると「嫌われる」「関係が終わる」気がして断れない</li>
          <li>・相手の感情・機嫌を常に確認してしまう</li>
          <li>・「期待に応えないと見捨てられる」という感覚がある</li>
          <li>・一人になると強い不安・空虚感がある</li>
          <li>・関係を維持するために自分を削ってしまう</li>
        </ul>
      </div>

      <h2>不安型愛着とは何か</h2>
      <p>
        <strong>不安型愛着とは「他者を強く求めながら、見捨てられることへの強い恐れを持つ」パターン</strong>です。
        幼少期に養育者の反応が「一貫していなかった」体験（応えてもらえるときとそうでないときが予測できない）が積み重なると、
        「常に相手の機嫌を確認し、期待に応え続けることで関係を維持しようとする」戦略が形成されます。
      </p>
      <p className="text-sm text-stone-500">
        詳しく→ <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルとは何か</Link>
      </p>
      <p className="text-sm text-stone-600 leading-[1.9]">
        この「<strong>必要とされていないと、自分には価値がない</strong>」という感覚は、見捨てられ不安の核にあります。
        それを掘り下げたのが<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「自分の価値がわからない（条件つき自己価値）」</Link>で、不安型パターンの“根っこ”にあたります。あわせて読むと、なぜ関係を失う恐れがこれほど強いのかが見えてきます。
      </p>

      <h2>なぜ「断れない」につながるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「NOを言う＝関係を失う」という前提</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          不安型パターンでは「期待に応えることで関係が維持される」という前提が強いため、
          「NOを言う＝期待を裏切る＝関係が壊れる」という等式が無意識に働きます。
          この前提がある限り、<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断ること</Link>は極めて危険に感じられます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">相手の感情を常時モニタリングする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手の機嫌・表情・反応を常に確認し、「今どう思われているか」を把握しようとします。
          これは<Link to="/articles/helper-empathy-overload" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感しすぎて疲れる</Link>状態・<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>と深く関連します。
          「アンテナを常にオンにしている」感覚はここから来ていることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">関係維持のために自己犠牲が続く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「関係を失わないため」に自分のニーズ・限界を後回しにし続けます。
          これが<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>・<Link to="/articles/helper-carrying-clients" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">抱え込み</Link>・<Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">疲れているのに止まれない</Link>状態を生みます。
        </p>
      </div>

      <h2>支援職との特別な関係</h2>
      <p>
        不安型パターンを持つ支援職では、支援関係そのものが「見捨てられ不安の舞台」になることがあります。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・利用者が感謝しないと「見捨てられた」ように感じる</p>
        <p>・利用者の状態悪化が「自分への拒絶」のように感じられる</p>
        <p>・<Link to="/articles/helper-guilt-about-suffering" className="underline underline-offset-2">もっとできたはず</Link>という罪悪感が強くなりやすい</p>
        <p>・<Link to="/articles/helper-responsibility-burnout" className="underline underline-offset-2">責任感</Link>が「関係を失わないための努力」として機能する</p>
      </div>

      <p className="text-sm text-stone-500">
        境界線の状態を確認→ <Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線セルフチェック（20項目）</Link>
      </p>

      <LineCtaImpostor />

      <h2>不安型パターンと向き合うために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「断っても関係が壊れない」体験を積む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          不安型パターンの更新には「NOを言っても関係が続いた」という体験の積み重ねが必要です。
          小さな断りから始め、「断っても嫌われなかった」という体験をゆっくり積むことが重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「相手の機嫌＝自分のせい」を切り離す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手が不機嫌なとき、「自分が何かしたのか」と自動的に考える習慣があります。
          「相手の感情は相手のもの」という<Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線</Link>の感覚を少しずつ育てることが、
          常時モニタリングの消耗を減らします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「一人でいられる」練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一人になる不安を「消す」のではなく、不安があっても一人でいられる時間を少しずつ増やすことが、
          不安型パターンを緩めます。自分の感覚・好みに意識を向ける時間が、自己軸を育てます。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「断れない」「見捨てられる恐れ」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">不安型パターンと消耗の構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ断れないのか」——その背景にあるパターンを外から整理することで、少しずつ変化が始まります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="attachment" exclude={["/articles/anxious-attachment"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は愛着理論と支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

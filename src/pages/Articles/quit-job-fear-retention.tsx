import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "引き止められたらどう断ればいいですか？",
    a: "「考える時間をください」ではなく「決定事項として伝える」方が現実的です。詳細な理由説明は交渉の余地を生みやすいため、「一身上の都合」を基本に、すでに決めた事実として伝えることが有効です。",
  },
  {
    q: "引き止めに流されてしまいそうで怖いです",
    a: "その感覚は境界線が薄くなっているサインです。「引き止めに応じなければならない義務はない」という前提を整理した上で臨むことが重要です。事前に外で整理しておくことが助けになります。",
  },
  {
    q: "上司が怖くて言い出せません",
    a: "上司への恐れは、関係が壊れることへの恐れ・評価が下がることへの恐れ・見捨てられる恐れが複合しています。「怖い」の正体を整理することで、現実的な対応が見えてきます。",
  },
]

export default function QuitJobFearRetention() {
  return (
    <ArticleLayout
      title="仕事を辞めたいのに引き止められるのが怖い｜断れない理由と消耗せずに抜ける方法"
      description="「引き止められたら断れない気がする」「流されてしまいそう」——引き止めへの恐れは他人軸・境界線の消耗・見捨てられ不安から起きます。構造と対処を解説します。"
      url="https://www.ishizue-counseling.jp/articles/quit-job-fear-retention"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「引き止められたら断れない気がする」——それは意志の問題ではなく対人構造の問題です。
      </p>

      <p>
        「辞めたい気持ちはあるのに言い出せない」「引き止められたら流されてしまいそう」「強く言えずに残ってしまう気がする」——
        こうした状態は、意志の弱さではなく
        <strong>対人関係の構造として起きている反応</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな感覚はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・辞めると言ったら引き止められそうで怖い</li>
          <li>・上司に「もう少し頑張って」と言われたら断れない</li>
          <li>・「困る」と言われたら残ってしまいそう</li>
          <li>・感情的に揺らされると流されてしまう</li>
        </ul>
      </div>

      <h2>なぜ「引き止め」が怖くなるのか——4つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① <Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>——相手の困惑が自分の行動を決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分がどうしたいか」より「相手がどう思うか」が優先されていると、
          「引き止められる＝相手が困っている」という感覚が行動を止めます。
          相手の感情への配慮が、自分の選択を上書きします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② <Link to="/articles/anxious-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">見捨てられ不安</Link>——関係が壊れることへの恐れ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めたら嫌われる」「失望させたら関係が終わる」という恐れが強いと、
          引き止めに応じることが「関係を守ること」になります。
          この恐れが「断れない」を作ります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ <Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線の消耗</Link>——断ることへの強い抵抗</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          境界線が薄くなっていると、「NO」という選択自体が心理的に危険に感じられます。
          「引き止めに応じなければならない義務はない」という感覚が持ちにくくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ <Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>——求められた役割を降りられない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分がいなければ困る人がいる」という使命感が強いとき、
          引き止めは「その役割を降りてはいけない」という圧力として機能します。
        </p>
      </div>

      <h2>よく起きるループ</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>辞めたいと思う</p>
        <p>↓ でも言えずに先延ばしする</p>
        <p>↓ 限界が来てようやく伝える</p>
        <p>↓ 引き止められて揺らぐ</p>
        <p>↓ 結局残る or さらに消耗する</p>
        <p>↓ <Link to="/articles/quit-job-cannot-say" className="underline underline-offset-2">言えない状態</Link>・<Link to="/articles/quit-job-no-next" className="underline underline-offset-2">動けない状態</Link>が固定化する</p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>
      </p>

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">合わせて読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/quit-job-cannot-say" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 辞めたいのに言えない理由と構造</a>
          <a href="/articles/quit-job-no-next" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 辞めたいけど次がない・動けない</a>
          <a href="/articles/quit-job-counseling" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ カウンセリングは必要？相談で整理できること</a>
        </div>
      </div>

      <LineCtaSmall />

      <h2>「説得に勝つ」必要はない——「離れること」が本質</h2>
      <p>
        多くの人が「どうやって納得させるか」を考えますが、
        <strong>引き止めに「正しく反論する」必要はありません。</strong>
        必要なのは「説得」ではなく「離れること」です。
      </p>

      <div className="card space-y-2 text-sm text-stone-600">
        <p>① 「相談」ではなく「決定事項の共有」として伝える</p>
        <p>② 詳細な理由説明は避ける（交渉余地を生まない）</p>
        <p>③ 引き止められることを前提に心の準備をする</p>
        <p>④ 「困る」という言葉に責任を感じない練習をする</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">それでも動けないとき</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「気合で断る」は消耗が深い状態では機能しません。
          まずは<Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全に整理できる場所</Link>で、
          「引き止めへの恐れの正体」を外から整理することが先決です。
          整理されると、「断れない」の構造が少し見えてきます。
        </p>
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
          「引き止められるのが怖い」を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          どう安全に抜けるかを整理することで、無理のない選択ができるようになります。
          「断れない」の構造を外から整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/quit-job-fear-retention"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

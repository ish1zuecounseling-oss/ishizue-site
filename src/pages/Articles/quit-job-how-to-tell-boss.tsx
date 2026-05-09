import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "退職はいつ伝えればいいですか？",
    a: "就業規則に定めがある場合はそれに従います。一般的には退職希望日の1〜2ヶ月前が目安です。ただし繁忙期は可能な限り避け、直属の上司に最初に伝えることが基本です。",
  },
  {
    q: "理由は詳しく説明した方がいいですか？",
    a: "詳しく説明するほど交渉の余地が生まれやすくなります。「一身上の都合」で十分です。深く掘り下げられたら「個人的な事情で」と繰り返すことが現実的です。",
  },
  {
    q: "引き止められたらどうすればいいですか？",
    a: "その場で結論を出す必要はありません。「一度持ち帰ります」と伝え、自分の状態に立ち返ることが重要です。引き止めに応じる義務はありません。",
  },
]

export default function QuitJobHowToTellBoss() {
  return (
    <ArticleLayout
      title="退職はいつどう伝える？上司への切り出し方と引き止めを防ぐポイント"
      description="仕事を辞めるとき、上司にいつ・どう伝えるべきか。言い出せない心理と、スムーズに進めるための伝え方・引き止めへの対処を解説します。"
      url="https://www.ishizue-counseling.jp/articles/quit-job-how-to-tell-boss"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「辞めると決めたのに、どう切り出せばいいかわからない」——それは伝え方の問題より心理ブロックの問題です。
      </p>

      <p>
        退職を決めても、<strong>上司にどう伝えるかで止まる人は多い</strong>です。
        これは伝え方の技術の問題というより、
        <strong>心理的なブロックが強く働く場面</strong>だからです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態で止まっていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・言いたいのにタイミングが見つからない</li>
          <li>・切り出した後のことを考えると体が固まる</li>
          <li>・完璧な言い方を探して先延ばしにしている</li>
          <li>・引き止められたら断れない気がする</li>
        </ul>
      </div>

      <h2>なぜ言い出せないのか</h2>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・<Link to="/articles/quit-job-cannot-say" className="underline underline-offset-2">辞めたいのに言えない</Link>——対人の緊張・関係を壊す恐れ</p>
        <p>・<Link to="/articles/quit-job-fear-retention" className="underline underline-offset-2">引き止めが怖い</Link>——断れない・流されそう</p>
        <p>・<Link to="/articles/other-centered-living" className="underline underline-offset-2">他人軸</Link>——上司の反応・職場への影響を優先してしまう</p>
        <p>・<Link to="/articles/over-adaptation" className="underline underline-offset-2">過剰適応</Link>——「迷惑をかけてはいけない」が止める</p>
      </div>
      <p>
        この状態では「うまい言い方」を探しても動けません。
        <strong>心理ブロックを整理することが先決</strong>です。
      </p>

      <h2>伝えるタイミングの基本</h2>
      <p>
        タイミングよりも「伝える状態が整っているか」が本質ですが、
        実務的な目安を整理します。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・就業規則を確認する（1〜2ヶ月前が多い）</p>
        <p>・繁忙期は可能な限り避ける</p>
        <p>・直属の上司に最初に伝える（飛ばさない）</p>
        <p>・口頭で伝えた後、退職届を提出する</p>
      </div>

      <LineCtaSmall />

      <h2>スムーズに伝えるためのポイント</h2>
      <p>
        大事なのは「説得すること」ではなく、<strong>決定事項として伝えること</strong>です。
        「相談」ではなく「報告」として臨むことで、交渉モードに入りにくくなります。
      </p>

      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・理由はシンプルにする（詳細に説明しすぎない）</p>
        <p>・感謝と退職意思をセットで伝える</p>
        <p>・退職日を明確に提示する</p>
      </div>

      <div className="card bg-stone-50">
        <p className="text-xs text-stone-400 mb-2">例文（シンプルが最も有効）</p>
        <p className="text-sm text-stone-700 leading-[1.9]">
          「お世話になっております。一身上の都合により、◯月末で退職させていただきたいと考えております。ご迷惑をおかけしますが、よろしくお願いいたします。」
        </p>
      </div>

      <h2>引き止められたときの考え方</h2>
      <p>
        引き止めは珍しいことではありません。重要なのは<strong>その場で判断しないこと</strong>です。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「一度持ち帰ります」と伝える（即答しない）</p>
        <p>・条件を提示されても即決しない</p>
        <p>・自分の状態に立ち返る時間を確保する</p>
      </div>
      <p className="text-sm text-stone-500">
        引き止めへの対処→ <Link to="/articles/quit-job-fear-retention" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">引き止められるのが怖い——断れない理由と対処</Link>
      </p>

      <h2>どうしても動けないとき</h2>
      <p>
        「頭では決めているのに動けない」ときは、
        行動の問題ではなく<strong>状態の問題</strong>であることが多いです。
        「どう伝えるか」より「なぜ止まっているのか」を整理することが先決です。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<Link to="/articles/quit-job-timing" className="underline underline-offset-2">辞めるタイミングがわからない</Link></p>
        <p>・<Link to="/articles/quit-job-no-next" className="underline underline-offset-2">次が決まっておらず不安で動けない</Link></p>
        <p>・<Link to="/articles/quit-job-counseling" className="underline underline-offset-2">カウンセリングで状態を整理する</Link></p>
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
          どう伝えるかで止まっている方へ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          言い方ではなく「なぜ止まっているのか」を整理することで、無理なく動ける状態を作ることができます。
          まだ辞めると決めていない段階でも大丈夫です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/quit-job-how-to-tell-boss"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

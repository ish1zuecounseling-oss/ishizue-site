import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "支援職が相談できないのは弱さですか？",
    a: "弱さではありません。「相談できない」には、役割依存・ワーキングモデル・職場文化という構造的な理由があります。「支援者は弱音を言わないもの」という環境に長期間適応してきた結果として起きています。",
  },
  {
    q: "支援職がカウンセリングを受けることへの抵抗は自然ですか？",
    a: "非常に自然です。「自分より大変な人がいる」「プロとして問題ないはず」「弱みを見せると信頼を失う」——これらの思考は支援職に構造的に起きやすいものです。抵抗があること自体が、消耗のサインでもあります。",
  },
  {
    q: "まず何から始めればいいですか？",
    a: "「今の状態を確認する」ことから始めてください。共感疲労チェックやバーンアウト診断で現在地を把握することが、「相談してもいいかもしれない」という気づきの入口になることがあります。",
  },
]

export default function WhySupportWorkersCannotAskForHelp() {
  return (
    <ArticleLayout
      title="支援職がなぜ相談できないのか｜「助けを求められない」構造と出口"
      description="「自分より大変な人がいる」「プロなのに相談はおかしい」「弱みを見せると信頼を失う」——支援職が相談できない理由には構造があります。その正体と相談への第一歩を解説します。"
      url="https://www.ishizue-counseling.jp/articles/why-support-workers-cannot-ask-for-help"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「相談できない」には理由があります。それは弱さではなく、構造です。
      </p>

      <p>
        「こんなことで相談していいのか」「自分より大変な人がいる」「プロなのに弱みを見せるのはおかしい」——
        支援職の多くが、消耗していても相談に踏み出せないでいます。
        <strong>これは意志の弱さでも、性格の問題でもありません。</strong>
        支援職という立場が持つ構造的な理由があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな思考はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「自分より大変な利用者がいるのに、相談するのは申し訳ない」</li>
          <li>・「支援のプロなのに、こんなことで弱ってはいけない」</li>
          <li>・「相談したら、弱い人だと思われて信頼を失う」</li>
          <li>・「このくらいで相談するほどではない」</li>
          <li>・「話しても解決にならないし、迷惑をかけるだけ」</li>
        </ul>
      </div>

      <h2>なぜ支援職は相談できないのか——5つの構造</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「支える側」役割への過剰適応</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援者という役割に過剰適応すると、「支える側が助けを求めることは役割に反する」という感覚が生まれます。
          <Link to="/articles/over-adaptation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過剰適応</Link>・<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割を降りることへの恐れ</Link>と深く関連します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② ワーキングモデルの影響</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「助けを求めると迷惑をかける」「弱さを見せると価値が下がる」という<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>が強いと、
          相談すること自体が心理的に危険に感じられます。
          特に<Link to="/articles/avoidant-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">回避型愛着</Link>パターンを持つ方に多いです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「比較」による相談の抑制</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分より大変な利用者がいる」「同僚はもっと頑張っている」——
          他者と比較することで「自分の苦しみは大したことない」と判断し、相談を抑制します。
          しかし消耗の深さは比較で決まるものではありません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 職場文化の問題</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「弱音は言わないもの」「支援職は強くあるべき」という職場文化が、
          相談することへの罪悪感・羞恥心を強化します。
          個人の問題ではなく、環境が相談を困難にしています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 自己機能の消耗——「相談する元気がない」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が消耗</Link>すると、
          「相談しよう」という行動を起こすエネルギー自体がなくなります。
          「どこに相談すればいいかわからない」「言語化できない」も消耗のサインです。
        </p>
      </div>

      <h2>「このくらいで相談しなくていい」は危険なサインかもしれない</h2>
      <p>
        「まだ相談するほどではない」という判断こそが、消耗が深まっているサインであることがあります。
        消耗が深いほど、「このくらいで…」という思考が出やすくなります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2">共感疲労チェック</Link>で今の状態を数値で確認してみる</p>
        <p>・「わからない」「言語化できない」も十分な相談の理由になる</p>
        <p>・相談は「解決のため」だけでなく「整理するため」にも有効</p>
        <p>・1回だけ試すことも選択肢として持っていい</p>
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
          「相談していいのかわからない」もそのままお話しください
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「このくらいで来ていいのか」「うまく話せるかわからない」——そのままで大丈夫です。
          支援職の消耗を前提に、整理することから始めます。勧誘はありません。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/why-support-workers-cannot-ask-for-help"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

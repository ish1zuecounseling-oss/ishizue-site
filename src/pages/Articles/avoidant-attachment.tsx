import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "回避型愛着の人は支援職に向いていないのですか？",
    a: "向いていないわけではありません。分析力・独立性・感情に流されにくい判断力など、支援職における強みになる面もあります。ただし「助けを求めない」「消耗を認識しにくい」という構造が、バーンアウトのリスクを高めることがあります。",
  },
  {
    q: "回避型愛着は変えられますか？",
    a: "変えられます。ただし「頭で理解する」だけでは変わりにくく、安全な対人関係の中で繰り返し『弱さを出しても関係が壊れない』という体験を積むことで、少しずつ更新されていきます。",
  },
  {
    q: "自分が回避型かどうかはどう判断すればいいですか？",
    a: "「助けを求めることへの強い抵抗感」「一人でいる方が楽だが孤独感もある」「感情表現が苦手」「消耗しても誰にも言えない」などが目安になります。ただし自己判断より、専門家との対話の中で理解を深めることが重要です。",
  },
]

export default function AvoidantAttachment() {
  return (
    <ArticleLayout
      title="回避型愛着と支援職｜一人で抱え込む・助けを求められない理由と変え方"
      description="「助けを求めることへの強い抵抗がある」「弱さを見せてはいけない」——回避型愛着が支援職でバーンアウトにつながる構造と、少しずつ変える方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/avoidant-attachment"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「消耗しても誰にも言えない」「助けを求めることへの強い抵抗がある」「弱みを見せると価値が下がる気がする」——そんなパターンはありませんか？これは意志の強さではなく、<strong>幼少期から形成された回避型愛着パターン</strong>から来ています。
      </p>

      <p>
        「困っても誰にも相談できない」「助けを求めることへの強い抵抗がある」「消耗しても誰にも言えない」——
        これは意志の強さや自立心の問題ではなく、
        <strong>幼少期から形成された愛着スタイルのパターン</strong>が関与していることがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんなパターンはありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・消耗しても「自分でどうにかしなければ」と一人で抱えてしまう</li>
          <li>・助けを求めることが「弱さの証明」に感じられる</li>
          <li>・感情を表現することへの強い抵抗がある</li>
          <li>・一人でいる方が楽だが、孤独感もある</li>
          <li>・「こんなことで弱音を言うのは甘え」と思ってしまう</li>
        </ul>
      </div>

      <h2>回避型愛着とは何か</h2>
      <p>
        愛着理論では、幼少期の養育者との関係が対人パターンの基盤（<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>）を形成するとされています。
        <strong>回避型愛着とは「他者への依存を最小化し、感情・弱さを表に出さないことで安全を確保してきた」パターン</strong>です。
      </p>
      <p>
        幼少期に「感情を出すと無視された」「助けを求めても応えてもらえなかった」「自立していると褒められた」という体験が積み重なると、
        「他者に頼らない・弱さを見せない」が安全戦略として学習されます。
      </p>

      <h2>なぜ支援職で問題になりやすいのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗のシグナルを無視しやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「しんどい」「もう無理」というシグナルを「弱さ」として抑圧する習慣があると、
          <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>・<Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">消耗</Link>が深まっても気づきにくくなります。
          「まだ大丈夫」と判断し続けて、ある日突然倒れるというパターンが起きやすいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② スーパービジョン・相談を求めない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職では、困難なケースをスーパービジョンや同僚相談で外に出すことが重要です。
          しかし回避型パターンが強いと「相談することは力不足の証明」と感じ、
          困難なケースを一人で抱え込みます。<Link to="/articles/helper-carrying-clients" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">利用者を背負いすぎる</Link>状態が深まりやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情処理が内側に閉じる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情を表現することへの抵抗が強いと、<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>で蓄積した未処理の感情が内側に溜まり続けます。
          これが<Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>・<Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</Link>を深めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「弱音を言う場所」がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          弱さを出せる関係を持ちにくいため、<Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能の回復</Link>に必要な「安全な対話」の機会が少なくなります。
          一人でのセルフケアには限界があり、孤立した消耗が続きます。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaSmall />

      <h2>回避型パターンと向き合うために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「助けを求める」を少しずつ練習する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「完全に心を開く」ではなく、「小さなことから少しずつ」が重要です。
          「今日少し疲れています」という一言から始めることが、
          回避パターンを少しずつ更新します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 消耗のシグナルに名前をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「疲れているかどうかわからない」状態では、消耗の悪化に気づけません。
          「今日は頭が重い」「今日は人と話したくない」など、
          身体・感情の小さなシグナルに名前をつける習慣が、早期の気づきを助けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 安全な場所での体験を積む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「弱さを出しても関係が壊れない」という体験の積み重ねが、
          ワーキングモデルを少しずつ更新します。
          信頼できる同僚・カウンセラーとの継続的な対話がこの場になります。
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

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「一人で抱え込んでしまう」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">回避パターンと消耗の構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ助けを求められないのか」——パターンの背景を外から整理することで、少しずつ変化が始まります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="attachment" exclude={["/articles/avoidant-attachment"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        参考：Ainsworth, M. D. S. et al. (1978). Patterns of Attachment. Erlbaum. / Main, M. & Solomon, J. (1986). Discovery of an insecure-disorganized/disoriented attachment pattern. In T. B. Brazelton & M. W. Yogman (Eds.), Affective development in infancy. Ablex.
        本記事は愛着理論と支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

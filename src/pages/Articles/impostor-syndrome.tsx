import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "インポスター症候群は治りますか？",
    a: "「治る」というより「構造が変わる」という理解が正確です。役割以外の自己側面を育てる・感覚に戻る・安全な関係で弱さを出す体験を積むことで、「バレる恐れ」は少しずつ薄れていきます。",
  },
  {
    q: "自信をつければインポスター症候群は解決しますか？",
    a: "「自信をつけよう」というアプローチは、多くの場合効果が限定的です。自信の問題ではなく、役割依存・自己複雑性の低下・他人軸という構造の問題だからです。構造を変えることが根本的なアプローチになります。",
  },
  {
    q: "支援職にインポスター症候群が多い理由は？",
    a: "支援職は「他者を助けること」に自己価値が紐づきやすい構造があります。また感情労働により自分の感覚へのアクセスが薄れ、外側の評価だけが自己判断の根拠になりやすいです。これが「バレる恐れ」を構造的に強化します。",
  },
]

export default function ImpostorSyndrome() {
  return (
    <ArticleLayout
      title="インポスター症候群とは｜「できているのに自信がない」の正体と構造的な抜け出し方"
      description="「いつかバレる気がする」「評価されても運のおかげ」——インポスター症候群は自信の問題ではなく、役割依存・自己複雑性の低下・他人軸という構造から起きています。なぜ支援職に多いのかを解説します。"
      url="https://www.ishizue-counseling.jp/articles/impostor-syndrome"
      date="2026-05-08"
      tags={["burnout", "boundary", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「できているのに自信がない」——それは性格の問題ではなく、構造として起きています。
      </p>

      <div className="mb-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500">
        チェックで当てはまった方へ → この記事では、なぜそうなるのかを構造から解説します。
      </div>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな感覚はありませんか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・評価されても「たまたまうまくいっただけ」と思ってしまう</li>
          <li>・いつか「実力がない」とバレる気がして不安になる</li>
          <li>・同僚は自分より優秀に見える</li>
          <li>・褒められると「相手の期待に応えられていないのに」と申し訳なくなる</li>
          <li>・成功しても達成感より「次もうまくいくとは限らない」という不安が先に来る</li>
        </ul>
        <p className="text-xs mt-3" style={{ color: "#92400e" }}>→ これはインポスター症候群のサインかもしれません。</p>
      </div>

      <p>
        インポスター症候群は「自信がない性格」の問題ではありません。
        <strong>役割に自己が寄りすぎた結果として、構造的に起きている状態</strong>です。
        この記事では、なぜ起きるのか・なぜ支援職に多いのか・どう抜け出すかを解説します。
      </p>

      <h2>インポスター症候群とは——一般定義とその限界</h2>
      <p>
        インポスター症候群（Impostor Syndrome）は1978年にクランスとアイムスが提唱した概念で、
        「客観的な実績があるにもかかわらず、自分を詐欺師（インポスター）のように感じ、いつかバレるという恐れを持つ状態」を指します。
      </p>
      <p>
        しかし「自信の問題」「思い込み」として扱うアプローチは、多くの場合効果が限定的です。
        なぜなら、<strong>インポスター症候群は自信の量の問題ではなく、自己の構造の問題</strong>だからです。
      </p>


      <h2>よくある誤解——「自信の問題」ではない</h2>
      <div className="card space-y-2 text-sm">
        {[
          { wrong: "自信をつければ解決する",              right: "自信ではなく構造の問題。役割依存・自己複雑性低下が原因" },
          { wrong: "能力が低いから仕方ない",              right: "客観的な実力とは無関係に起きる。高い実力を持つ人ほど強い" },
          { wrong: "ポジティブに考えれば治る",            right: "思考パターンの変更だけでは根本的な構造は変わらない" },
          { wrong: "経験を積めば自然に解消される",        right: "構造を変えなければ、成功体験を積んでもインポスター感は続く" },
        ].map(({ wrong, right }) => (
          <div key={wrong} className="flex gap-3">
            <span className="text-stone-300 text-xs flex-shrink-0 mt-0.5">❌</span>
            <div>
              <p className="text-stone-500 line-through text-xs">{wrong}</p>
              <p className="text-stone-700 text-xs mt-0.5">→ {right}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>本質：役割に自己が寄りすぎている</h2>
      <p>
        インポスター症候群の核心は、<strong>「できる自分＝価値がある自分」という等式</strong>にあります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者として役立てる自分」「成果を出せる自分」「評価される自分」だけが自己価値の根拠になっていると、
          その役割からズレたとき（失敗・批判・評価されないとき）に自己全体が揺らぎます。
          「役割に自己が寄りすぎている」——これが<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割依存</Link>と呼ばれる状態です。
        </p>
      </div>
      <p>
        役割依存が強いほど、「その役割でバレる恐れ」も強くなります。
        「役割を完璧に演じ続けなければ価値がなくなる」という感覚が、「バレる不安」の正体です。
      </p>

      <h2>自己複雑性の低下——なぜ失敗が全否定になるのか</h2>
      <p>
        関連する構造として、<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>の低下があります。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自己複雑性が高い状態</p>
        <p className="text-sm text-stone-600">「支援者としての自分」「趣味人としての自分」「家族としての自分」など複数の独立した自己側面を持っている。
        仕事で失敗しても「一側面の出来事」として処理できる。</p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">自己複雑性が低下した状態（インポスターが強まる）</p>
        <p className="text-sm text-stone-600">「支援者としての自分」しか自己概念を占めていない。仕事での失敗・批判が「全部ダメな自分」という全否定になる。だから「バレること」が極度に怖くなる。</p>
      </div>

      <h2>「バレる感覚」の正体——演じている感覚</h2>
      <p>
        インポスター症候群の特徴的な体験に「演じている感覚」があります。
      </p>
      <p>
        これは<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>と深く関連しています。
        「外側の評価・期待」に合わせて行動し続けると、「本当の自分」と「評価されている自分」の間にギャップが生まれます。
        「本当の自分は実力がないのに、相手は過大評価している」——このギャップが「バレる恐れ」として体験されます。
      </p>

      <h2>なぜ支援職でインポスター症候群が強くなるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「助けること」に自己価値が紐づきやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">支援職を選ぶ背景に「役に立つことで価値を確認してきた」というパターンがある場合、支援がうまくいかないときに「全部ダメな自分」という感覚が出やすくなります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情労働で「自分の感覚」が薄れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]"><Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>が続くと、自分の内側の感覚へのアクセスが薄れます。外側の評価だけが自己判断の根拠になり、「自分はどうか」がわからなくなります。これがインポスター感を強めます。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 境界線が薄く、他者評価に引っ張られやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]"><Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線</Link>が薄い状態では、利用者・上司・同僚の評価が直接「自分の価値の判断」になります。評価が良ければ安心、悪ければ全否定——この不安定さがインポスター感を維持します。</p>
      </div>

      <h2>背景：ワーキングモデルとの関係</h2>
      <p>
        より深い背景として、<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>があります。
        「役に立てる自分だけが受け入れてもらえる」「失敗すると拒絶される」という幼少期から形成されたパターンが、
        インポスター症候群を構造的に維持します。
      </p>
      <p className="text-sm text-stone-500">
        今の状態を確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/impostor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群チェック（20項目）</Link>
      </p>

      <LineCtaImpostor />

      <h2>抜け出す方向——「自信をつける」ではなく「構造を変える」</h2>
      <p>
        「自信をつけよう」「もっとポジティブに考えよう」というアプローチは、根本的な構造を変えません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 役割以外の自己側面を育てる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">趣味・人間関係・創作など、「支援者」としての評価に関係しない自己側面を意識的に育てることで<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>が高まり、失敗の全否定が起きにくくなります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感覚に戻る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">外側の評価ではなく「自分はどう感じているか」という内側の感覚を取り戻すことが、他人軸から自分軸への移行を助けます。<Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは感覚</Link>を参照してください。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 安全な関係で「弱さを出す」体験を積む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「失敗した・わからない・自信がない」を安全な場所で出し、「それでも関係が続いた」という体験の積み重ねがワーキングモデルを更新します。<Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地とは</Link>を参照してください。</p>
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
          「いつかバレる」という感覚を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          インポスター症候群は「自信をつければ解決」ではなく、構造を整理することで変わります。支援職の消耗を前提にした整理を行います。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/impostor-syndrome"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        参考：Clance, P. R., & Imes, S. A. (1978). The impostor phenomenon in high achieving women. Psychotherapy: Theory, Research & Practice, 15(3), 241–247.
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

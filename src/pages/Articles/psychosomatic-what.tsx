import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "心身症とは何ですか?",
    a: "心身症とは、体の病気のうち、発症や経過にストレスなどの心理社会的な要因が深く関わっているものを指します(日本心身医学会の定義)。過敏性腸症候群、機能性ディスペプシア、緊張型頭痛などが代表例です。「気のせい」ではなく、実際に体に不調や病気が起きている状態です。",
  },
  {
    q: "心身症は「気のせい」や「気の持ちよう」ですか?",
    a: "いいえ。心身症は実際に体に起きている不調で、気の持ちようで消えるものではありません。ストレスが自律神経や体の働きに影響し、それが症状として表れています。「気のせい」と片付けられると、本人はますます不調を後回しにしやすくなります。",
  },
  {
    q: "心身症と自律神経失調症はどう違いますか?",
    a: "心身症は、ストレスが関わる体の病気を指す医学的な概念です。一方「自律神経失調症」は、だるさ・動悸・めまいなど自律神経の乱れによるとされる不調をまとめて呼ぶ言葉で、国際的な診断基準にある正式な病名ではありません。同じような症状でも、医療機関によって呼び方が異なることがあります。",
  },
  {
    q: "検査で「異常なし」と言われたのに、症状が続きます。",
    a: "検査で体の病気が見つからないことは、症状がないという意味ではありません。喉の違和感(咽喉頭異常感症)のように、検査で異常が見つからなくても、ストレスとの関わりで症状が続くことがあります。体の病気がないと確認できたら、心療内科への相談が選択肢になります。",
  },
  {
    q: "何科を受診すればいいですか?",
    a: "まず、その症状に合った診療科(喉なら耳鼻咽喉科、胃腸なら内科・消化器内科、皮膚なら皮膚科など)で体の病気がないかを確認してください。ストレスとの関わりが疑われる場合は心療内科、気分の落ち込みや不安が中心にある場合は心療内科・精神科が相談先になります。",
  },
  {
    q: "心身症にカウンセリングは役立ちますか?",
    a: "体の治療は医師の領分ですが、症状の背景にあるストレスの構造(自分を後回しにする習慣、感情を抑え続ける働き方、休めない思い込みなど)を整理することは、カウンセリングが役立つ部分です。医療とカウンセリングは対立するものではなく、並行して使うことができます。",
  },
]

export default function PsychosomaticWhat() {
  return (
    <ArticleLayout
      title="心身症とは｜ストレスが体に出るしくみと、支援職に多いサイン・受診の順番【公認心理師】"
      description="喉の違和感、胃の不調、頭痛——検査で異常がないのに続く体の不調は、ストレスが体に出ているサインかもしれません。心身症の意味、自律神経失調症・身体症状症との違い、ストレスが体に出るしくみ、支援職に多いサインと受診の順番を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/psychosomatic-what"
      date="2026-10-09"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        体の不調は、心が限界に近いことを、言葉より先に知らせてくれることがあります。
      </p>

      {/* ▼ 監修者ボックス */}
      <div className="my-4 p-4 rounded-2xl border border-stone-200 bg-white">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
            <span className="text-[10px] text-stone-500 tracking-wider">監修</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-stone-800 mb-0.5">公認心理師による解説</p>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              障害福祉15年・カウンセリング累計300名以上の臨床経験／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        喉に何かが詰まっている感じが取れない。胃の調子がずっと悪い。頭痛が続く。
        病院で検査をしても「異常なし」と言われる——。
      </p>
      <p>
        それは<strong>気のせいではありません</strong>。
        ストレスは、自律神経や体の働きを通して、実際に体の症状として表れます。
        体の病気のうち、発症や経過にストレスが深く関わるものを<strong>心身症</strong>と呼びます。
        この記事では、心身症の意味と似た言葉との違い、ストレスが体に出るしくみ、
        支援職に多いサインと受診の順番を整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 体の症状がある方は、まず医療機関で体の病気がないかを確かめてください。この記事は心理的な側面からの解説であり、診断や治療に代わるものではありません。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・心身症とは何か(定義と代表的な病気)</li>
          <li>・<strong>自律神経失調症・身体症状症との違い</strong></li>
          <li>・ストレスが体に出る<strong>3つのしくみ</strong></li>
          <li>・支援職に多い体のサインと、<strong>受診の順番</strong></li>
          <li>・心理面からできること</li>
        </ul>
      </nav>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな体のサインが続いていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・喉の違和感、何かが詰まっているようなつかえ感</li>
          <li>・胃の痛み・胃もたれ、下痢や便秘を繰り返す</li>
          <li>・頭痛、肩や首のこわばり</li>
          <li>・肌荒れやかゆみが、忙しい時期に悪化する</li>
          <li>・寝つけない、夜中や早朝に目が覚める</li>
          <li>・検査で「異常なし」と言われたのに、症状が続いている</li>
        </ul>
      </div>

      <h2>心身症とは——ストレスが関わる「体の病気」</h2>
      <p>
        日本心身医学会は心身症を、<strong>体の病気のうち、発症や経過に心理社会的な要因(ストレスなど)が深く関わるもの</strong>と定義しています。
        ポイントは、心身症が「心の病気」ではなく<strong>体の病気</strong>だということです。
        体に実際の不調や病変があり、その起こり方や長引き方にストレスが影響しています。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">心身症の代表例</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>胃腸</strong>:過敏性腸症候群、機能性ディスペプシア(検査で異常がない胃の不調)</li>
          <li>・<strong>頭・痛み</strong>:緊張型頭痛、片頭痛</li>
          <li>・<strong>循環器</strong>:本態性高血圧症</li>
          <li>・<strong>皮膚</strong>:アトピー性皮膚炎</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">※ これらの病気がすべてストレスで起きるという意味ではありません。ストレスが発症や経過に影響している場合に、心身症として捉えます。</p>
      </div>

      <h2>似た言葉との違い——心身症・自律神経失調症・身体症状症</h2>
      <p>
        「ストレスが体に出る」状態を表す言葉はいくつかあり、混同されがちです。
        呼び方が違っても、つらさが本物であることに変わりはありません。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">心身症</p>
          <p className="text-stone-600 leading-[1.9]">ストレスが発症や経過に関わる<strong>体の病気</strong>。うつ病や不安など、心の病気から来る体の症状は含みません。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">自律神経失調症</p>
          <p className="text-stone-600 leading-[1.9]">だるさ・動悸・めまいなど、自律神経の乱れによるとされる不調をまとめた呼び方。よく使われますが、国際的な診断基準にある正式な病名ではありません(<Link to="/articles/autonomic-dysfunction" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自律神経失調症とは</Link>)。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">身体症状症</p>
          <p className="text-stone-600 leading-[1.9]">体の症状が続き、その症状への不安や心配が生活に大きく影響している状態を指す、精神医学の診断名。喉の違和感(咽喉頭異常感症)のように、検査で体の病気が見つからない不調がこちら側で扱われることもあります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">うつ病などの体の症状</p>
          <p className="text-stone-600 leading-[1.9]">うつ病では、気分の落ち込みに加えて、不眠・食欲の変化・だるさなどの体の症状がよく表れます。体の不調が先に目立つこともあります。</p>
        </div>
      </div>
      <p className="text-sm text-stone-600">
        どれに当たるかを判断するのは医師の役割です。大切なのは名前を決めることより、
        <strong>体の病気がないかを確かめたうえで、ストレスの側にも手当てをする</strong>ことです。
      </p>

      <h2>なぜストレスが体に出るのか——3つのしくみ</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 体が「警戒モード」のまま戻れない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          緊張する状況が続くと、体は自律神経を通して「いつでも動ける」状態を保とうとします。
          この状態が長引くと、筋肉のこわばり、胃腸の働きの乱れ、眠りの浅さなどが慢性的に続きます。
          支援の現場は、この警戒モードが固定されやすい環境です
          (<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link>)。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情が、言葉より先に体に出る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          つらさや怒りを言葉にして外に出せないと、その負荷は体の側に表れやすくなります。
          心身医学では、自分の感情に気づいたり言葉にしたりしにくい傾向(アレキシサイミア)と、
          体の不調との関係が古くから指摘されています。
          本当の感情を抑えて相手に合わせる感情労働が続くと、この傾向は強まります
          (<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情がわからない</Link>)。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 不調を後回しにして、負荷が積み重なる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          小さな不調のうちに休んだり受診したりできれば、負荷はそこで軽くなります。
          ところが「自分のことは後でいい」が習慣になっていると、手当てされないまま負荷が積み重なり、
          体の症状として表に出てきます
          (<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link>)。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>支援職に多い体のサインと、まず行く場所</h2>
      <p>
        どの症状も、体の病気が原因のことがあります。<strong>最初に行くのは、その症状に合った診療科</strong>です。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">喉の違和感・つかえ感</p>
          <p className="text-stone-600 leading-[1.9]">まず耳鼻咽喉科で、喉や周辺に体の病気がないかを確認します。異常が見つからず症状が続く場合、咽喉頭異常感症と呼ばれることがあります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">胃の痛み・胃もたれ・下痢や便秘</p>
          <p className="text-stone-600 leading-[1.9]">まず内科・消化器内科へ。過敏性腸症候群や機能性ディスペプシアは、検査で異常が見つからないことが特徴です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">頭痛・肩や首のこわばり</p>
          <p className="text-stone-600 leading-[1.9]">まず内科・脳神経内科へ。いつもと違う激しい頭痛や、手足のしびれなどを伴う場合は、すぐに受診してください。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">肌荒れ・かゆみの悪化</p>
          <p className="text-stone-600 leading-[1.9]">まず皮膚科へ。忙しい時期に悪化する傾向があれば、そのことも伝えると診療の手がかりになります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">体の病気がないと分かったら</p>
          <p className="text-stone-600 leading-[1.9]">ストレスとの関わりが疑われる場合は心療内科、気分の落ち込みや不安が中心にある場合は心療内科・精神科が相談先になります
            (<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何科に相談すればいいか</Link>)。</p>
        </div>
      </div>

      <h2>心理面からできること</h2>
      <p>
        体の治療は医師の領分です。そのうえで、症状の背景にあるストレスの構造は、心理面から手当てできます。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<strong>気づく</strong>:不調を「いつ・どこが・どのくらい」と事実で記録する(<Link to="/articles/body-sensation-unknown" className="underline underline-offset-2">身体感覚がわからない</Link>)</p>
        <p>・<strong>緩める</strong>:「ここは安全だ」と体が感じられる時間を意図的に作る(<Link to="/articles/always-tense" className="underline underline-offset-2">常に気が張っている</Link>)</p>
        <p>・<strong>後回しにしない</strong>:受診と休息を、仕事の予定と同じように先に入れる</p>
        <p>・<strong>言葉にする</strong>:体に出ているつらさを、安全な関係の中で言葉にしていく</p>
      </div>
      <p>
        体の症状は、心が限界に近いことを、言葉より先に知らせてくれるサインです。
        症状をなくすことだけを目標にせず、その症状が何を知らせているのかに目を向けることが、回復の土台になります。
      </p>

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">ストレスが体に出るしくみ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/autonomic-dysfunction" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自律神経失調症とは——支援職がまず確かめたいこと</Link></li>
          <li>・<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト——自分の不調を後回しにし続ける心理</Link></li>
          <li>・<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link></li>
          <li>・<Link to="/articles/always-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">常に気が張っている</Link></li>
          <li>・<Link to="/articles/body-sensation-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">身体感覚がわからない</Link></li>
          <li>・<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情がわからない</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">受診・相談</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何科に相談すればいいか</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          体の治療と並行して、症状の背景にあるストレスの構造を整理することができます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/psychosomatic-what"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに、心身医学の知見を一般向けに整理したものです。医学的な診断・治療ではありません。体の症状がある場合は、まず医療機関を受診してください。
      </div>
    </ArticleLayout>
  )
}

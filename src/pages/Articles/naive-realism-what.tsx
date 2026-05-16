import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "ナイーブリアリズムとは何ですか？",
    a: "ナイーブリアリズム（素朴実在論）とは、「自分は世界をありのままに・客観的に見ている」という無意識の前提のことです。1990年代にリー・ロスとアンドリュー・ウォードが提唱した社会心理学の概念で、対人葛藤の根本原因として広く研究されています。自分の認識が主観的であることに気づきにくいため、「なぜ相手はわかってくれないのか」という摩擦が生まれます。",
  },
  {
    q: "ナイーブリアリズムは支援職でどう現れますか？",
    a: "「自分は利用者のためを思っているのに、なぜわかってもらえないのか」「同僚の対応は明らかにおかしい」という感覚として現れやすいです。自分の見方が「客観的な正しさ」だと思いやすいため、相手との認識のズレが摩擦や消耗につながります。",
  },
  {
    q: "ナイーブリアリズムと他人軸はどう違いますか？",
    a: "ナイーブリアリズムは「自分の認識が客観的だという錯覚」、他人軸は「自分より相手の基準を優先してしまう状態」です。一見逆に見えますが、他人軸が強い人は「相手がどう思うか」に強く引っ張られるため、相手の反応を自分の行動の基準にしやすく、ナイーブリアリズムによる「なぜわかってくれないのか」という摩擦をより強く感じることがあります。",
  },
  {
    q: "ナイーブリアリズムはどうすれば和らぎますか？",
    a: "「自分の認識は主観的なフィルターを通している」という自覚を持つことが第一歩です。具体的には、「自分には見えていない文脈が相手にはある」「同じ場面を見ていても解釈は異なる」という前提を持つことで、対人摩擦が和らぎやすくなります。ただし、これは知識として知るだけでは難しく、構造として理解することが重要です。",
  },
]

export default function NaiveRealismWhat() {
  return (
    <ArticleLayout
      title="ナイーブリアリズムとは？「なぜわかってくれないのか」が起きる心理学的な理由"
      description="ナイーブリアリズム（素朴実在論）とは、「自分は世界をありのままに見ている」という無意識の前提です。支援職での対人摩擦・消耗・「なぜ伝わらないのか」という感覚の構造的な理由を解説します。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/naive-realism-what"
      date="2026-05-16"
      tags={["burnout", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「なぜこんなに明らかなことがわからないのか」「自分は正しいことをしているのに、なぜわかってもらえないのか」——その感覚の背景に、ナイーブリアリズムという心理構造があります。
      </p>

      <h2>ナイーブリアリズムとは何か</h2>
      <p>
        ナイーブリアリズム（Naive Realism / 素朴実在論）とは、
        <strong>「自分は世界をありのままに・客観的に見ている」という無意識の前提</strong>のことです。
      </p>
      <p>
        1990年代に社会心理学者リー・ロス（Lee Ross）とアンドリュー・ウォード（Andrew Ward）が提唱した概念で、
        対人葛藤の根本原因として広く研究されています。
      </p>
      <div className="card text-sm text-stone-600 leading-[1.9]">
        <p className="font-medium text-stone-700 mb-2">3つの前提として整理されています</p>
        <p>① 自分は世界をありのままに、客観的に見ている</p>
        <p>② 他の合理的な人も、同じように見えるはずだ</p>
        <p>③ 違う見方をする人は、無知・怠惰・偏見がある（か、悪意がある）</p>
      </div>
      <p>
        この前提が無意識に働いているため、
        「なぜ相手はわかってくれないのか」「どう見ても自分が正しいのに」という感覚が生まれます。
      </p>

      <h2>私たちの「見え方」はフィルターを通している</h2>
      <p>
        実際には、人間の認識は常に主観的なフィルターを通しています。
        過去の経験・信念・感情・役割・文化的背景——これらすべてが「見え方」を形成します。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・同じ場面を見ても、職種によって「問題」の捉え方が違う</p>
        <p>・同じ利用者の言動が、ある支援者には「抵抗」、別の支援者には「自己主張」に見える</p>
        <p>・同じ職場ルールが、ベテランには「当然」、新人には「不合理」に見える</p>
      </div>
      <p>
        にもかかわらず、自分の見え方が「客観的な現実」だと感じてしまう——これがナイーブリアリズムです。
      </p>

      <h2>支援職での「なぜわかってくれないのか」</h2>
      <p>
        支援職では、ナイーブリアリズムが特定の形で現れやすくなります。
      </p>
      <div className="card space-y-3 text-sm text-stone-600">
        <div>
          <p className="font-medium text-stone-700 mb-1">利用者との間で</p>
          <p>「これだけ説明したのに、なぜ変わらないのか」——自分の見えている「正しい方向」が、利用者には見えていないか、違う意味を持つ可能性を見落としてしまう。</p>
        </div>
        <div>
          <p className="font-medium text-stone-700 mb-1">同僚・チームとの間で</p>
          <p>「なぜあの人はああいう対応をするのか」——自分には見えている問題が、相手には別の文脈から見えていることを前提にしにくくなる。</p>
        </div>
        <div>
          <p className="font-medium text-stone-700 mb-1">組織との間で</p>
          <p>「なぜ管理職はわかってくれないのか」——立場・情報・責任の違いが、「見え方」を根本的に変えることを見落としやすくなる。</p>
        </div>
      </div>
      <p>
        詳しくは→ <Link to="/articles/helper-naive-realism-conflict" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">わかってもらえないストレスの対処法｜ナイーブ・リアリズムの心理学</Link>
      </p>

      <h2>ナイーブリアリズムが消耗を生む構造</h2>
      <p>
        「なぜわかってくれないのか」という状態が続くと、次の消耗サイクルに入りやすくなります。
      </p>
      <div className="card text-sm text-stone-600 leading-[1.9]">
        <p>「正しいことをしているのに伝わらない」</p>
        <p>↓</p>
        <p>「相手がおかしい・自分の努力が足りない」という二択に追い込まれる</p>
        <p>↓</p>
        <p>無力感・自己否定・怒り・消耗</p>
        <p>↓</p>
        <p>さらに「なぜわかってくれないのか」が強まる</p>
      </div>
      <p>
        この消耗の根底には、<strong>「自分の見え方が唯一の客観的現実だ」という前提がある限り、
        答えは「相手が悪い」か「自分が悪い」しかない</strong>という構造があります。
      </p>
      <p>
        <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル（内的作業モデル）</Link>と組み合わさると、
        「自分が悪い」方向に強く引っ張られやすくなります。
      </p>

      <h2>他人軸・インポスター症候群との関係</h2>
      <p>
        ナイーブリアリズムは<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>とも深く関係します。
      </p>
      <p>
        他人軸が強い人は「相手がどう思うか」を自分の行動の基準にしやすいため、
        相手の反応が「想定と違う」ときに強い摩擦を感じます。
        「自分は正しくやっているはずなのに、なぜ相手はそう反応するのか」という混乱が生まれやすくなります。
      </p>
      <p>
        また<Link to="/articles/impostor-check-20" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群</Link>傾向がある人は、
        「相手がわかってくれない」→「やはり自分が間違っているのかもしれない」という方向に解釈しやすく、
        自己否定が強まるサイクルに入ることがあります。
      </p>

      <LineCtaCompassion />

      <h2>ナイーブリアリズムと向き合うための視点</h2>
      <p>
        「自分の見え方が主観的なフィルターを通している」という理解を持つことが第一歩です。
        ただし、これは知識として知るだけでは難しく、<strong>構造として腑に落ちること</strong>が重要です。
      </p>
      <div className="card space-y-3 text-sm text-stone-600">
        <div>
          <p className="font-medium text-stone-700 mb-1">「相手には見えていない文脈がある」という前提</p>
          <p>自分に見えていることが、相手にも同じように見えているとは限らない。その前提が持てると、「なぜわかってくれないのか」から「相手にはどう見えているのか」へ問いが変わります。</p>
        </div>
        <div>
          <p className="font-medium text-stone-700 mb-1">「正しさの競争」をやめる</p>
          <p>「どちらが正しいか」ではなく「それぞれの見え方がどう違うのか」に関心を向けることで、対立から対話に移りやすくなります。</p>
        </div>
        <div>
          <p className="font-medium text-stone-700 mb-1">消耗の構造を理解する</p>
          <p>「なぜわかってくれないのか」という消耗は、相手の問題でも自分の問題でもなく、ナイーブリアリズムという認知の構造から生まれています。構造が見えると、自責と他責の二択から抜け出せます。</p>
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

      <ArticleFooterLinks type="self-function" exclude={["/articles/naive-realism-what"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
      </div>
    </ArticleLayout>
  )
}

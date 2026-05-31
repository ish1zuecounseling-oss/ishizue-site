import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function CounselorExhaustion() {
  return (
    <ArticleLayout
      title="相談員が「疲れた」と感じる理由とは｜聴き続けることの消耗を正しく理解する"
      description="話を聴くだけなのに、なぜこんなに消耗するのか。相談員の疲れの構造的な背景と、「聴くこと」が持つ深い心理的負荷を整理します。"
      url="https://www.ishizue-counseling.jp/articles/counselor-exhaustion"
      date="2026-03-29"
      audio="/audio/counselor-exhaustion.mp3"
      tags={["compassion", "burnout", "self-function"]}
    >

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
        相談員が「疲れた」と感じる状態とは、相談という仕事の性質上避けられない感情的・心理的・身体的な
        消耗が蓄積し、仕事への意欲・感情的な余裕・自己効力感が失われていく状態のことです。
        「話を聴くだけなのに、なぜこんなに消耗するのか」という問いの背景には、
        「聴くこと」の持つ深い心理的負荷があります。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        この記事は「聴き続けることの消耗」に焦点を当てます。消耗が燃え尽きにまで進んだときの全体像は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>にまとめています。
      </p>

      <p>
        現場でこんな声を聞くことがあります。
      </p>
      <div className="card space-y-2">
        <p>「一日に何件も相談を受けると、帰り道に何も感じられなくなっている」</p>
        <p>「相談者の言葉が頭から離れなくて、夜も眠れないことがある」</p>
        <p>「うまく答えられなかった相談のことを、何日も引きずってしまう」</p>
        <p>「最近、相談の予約が入るたびに、気持ちが重くなる」</p>
        <p>「疲れたと感じている自分が、相談員として失格のような気がして怖い」</p>
      </div>
      <p>
        相談員の疲れは「弱さ」や「向いていない証拠」ではなく、相談という仕事が構造的に持つ特性から
        生まれるものとして理解することが大切です。
      </p>

      <h2>相談員の疲れとは：定義と背景</h2>
      <p>
        相談員の疲れとは、相談という行為が持つ本質的な特性——他者の苦しみ・困難・感情を受け取り続けること——
        から生じる、継続的な心理的・感情的・身体的な消耗のことです。バーンアウト・共感疲労（二次受傷）・
        慢性的なストレス反応として現れることが多く、「突然疲れた」ように感じられても、実際には長期間に
        わたって蓄積してきた消耗の結果です。
      </p>
      <p>
        相談員の仕事には、消耗が生まれやすい固有の特性があります。相談者は自分の苦しさ・怒り・悲しみを
        相談員に向けて表現し、相談員はそれを受け取りながら自分の感情は表に出さず安定した態度を保ち続けます。
        この感情の非対称な流れが一方向的な感情的負荷を生みます。また相談の成果はすぐには見えず、
        守秘義務があるため困難なケースを同僚と共有しにくく、一人で抱え込む構造になりやすい特徴があります。
      </p>

      <h2>現場で起こること：「疲れた」が形を変えて現れる場面</h2>
      <h3>■ 相談が終わった後に「空っぽ」になる</h3>
      <p>
        一日に複数の相談を受けた後、帰り道に何も感じられなくなっている。食事をしても味がしない。
        これは感情的エネルギーが枯渇した状態であり、消耗の深刻なサインのひとつです。
      </p>
      <h3>■ 相談者の言葉が頭から離れない</h3>
      <p>
        仕事が終わっても、特定の相談者の言葉・状況・表情が頭の中で繰り返される。
        これは共感疲労における侵入症状のひとつで、相談者の苦しさが自分の中に残り続けている状態です。
      </p>
      <h3>■ 「うまく答えられなかった」という自責が続く</h3>
      <p>
        相談の中で言葉に詰まった・十分に寄り添えなかったという体験が、何日も頭から離れない。
        完璧な相談などないにもかかわらず、「自分のせいで相談者が救われなかった」という感覚が
        続くことがあります。
      </p>
      <h3>■ 次の相談が怖くなる</h3>
      <p>
        相談の予約が入るたびに気持ちが重くなる。電話が鳴るのが怖くなる。
        これは消耗が慢性化し、相談という行為そのものへの回避反応が生じているサインです。
      </p>
      <h3>■ 感情が麻痺してくる</h3>
      <p>
        相談者の話を聴いても、以前のように感情が動かなくなってきた。「可哀想だとは思うのに、何も感じない」
        という状態は、感情的エネルギーの枯渇による感情の麻痺のサインです。
        「冷たい相談員になってしまった」と自責しやすいですが、これは冷淡さではなく、消耗の深刻化を示す反応です。
      </p>
      <h3>■ 「疲れた」と言えない</h3>
      <p>
        「相談者の方がずっと大変なのに」「自分がこんなことで疲れるのはおかしい」という比較が、
        消耗を訴えることへの罪悪感を生みます。この罪悪感が、回復に必要なサポートを求めることを妨げます。
      </p>

      <h2>心理的背景：相談員が疲れる構造</h2>
      <h3>■ 感情労働の特殊性</h3>
      <p>
        相談者の感情を受け取りながら、自分の感情は一定に保つという感情の非対称な管理が求められます。
        社会学者ホックシールドの<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>理論では、表に出す感情と実際に感じている感情の乖離が大きいほど
        消耗が深まるとされています。この乖離が蓄積することで、自分の本当の感情がわからなくなる
        感情の自己疎外につながることがあります。
      </p>
      <h3>■ 共感疲労と二次受傷</h3>
      <p>
        相談者の苦しみへの継続的な共感の積み重ねが、<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>（二次受傷）として自分自身を傷つけることがあります。
        侵入症状（頭から離れない・夢に出てくる）・回避症状（相談を避けたくなる）・過覚醒症状（眠れない）は、
        共感疲労の典型的な現れ方です。これらは「弱い」のではなく、共感する能力が豊かであるがゆえに
        生じる反応です。自分の状態は<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>で確認できます。
      </p>
      <h3>■ 守秘義務がつくる孤立</h3>
      <p>
        守秘義務により、困難なケースを自由に話すことができません。スーパービジョンはこの孤立を緩める
        重要な機能を持ちますが、十分に整備されていない職場も多く、結果的に相談員が一人で重さを
        抱え続ける構造になりやすくなっています。
      </p>
      <h3>■ 「答えを出せない」ことへの消耗</h3>
      <p>
        相談者から「どうすればいいですか」と問われ続けるとき、答えを出せない自分への無力感が蓄積します。
        また相談者の状況が改善しないとき「自分の力が足りないから」と感じやすくなります。
        相談者の変化は相談員の力だけでコントロールできるものではなく、このコントロールできないことへの
        責任の引き受けが慢性的な消耗の要因になります。
      </p>
      <h3>■ バウンダリー（境界線）の問題</h3>
      <p>
        「あの人は今どうしているだろう」という思考が仕事外にも続くとき、<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バウンダリー（境界線）</Link>が揺らいでいる
        状態と言えます。適切なバウンダリーを保つことは、相談者を切り捨てることではなく、
        長く誠実に関わり続けるための必要条件です。
      </p>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>感情労働の特殊性：感情の非対称な管理を継続することで生じる感情の自己疎外と消耗</li>
        <li>共感疲労（二次受傷）：相談者の苦しみへの継続的な共感が、二次的な傷つきとして蓄積する</li>
        <li>守秘義務がつくる孤立：ケースを話せない構造が、消耗を一人で抱え込む方向に働く</li>
        <li>コントロールできないことへの責任の引き受け：相談者の変化を自分の力不足として感じやすい構造</li>
        <li>バウンダリーの揺らぎ：相談者の問題と自分の問題の区別がつきにくくなることによる消耗</li>
      </ul>
      <p>
        「疲れた」という感覚は、相談員として誠実に向き合い続けてきた証でもあります。
        その感覚を「弱さ」として処理するより、まず「今の自分の状態を知ること」が、
        回復への出発点になります。
      </p>
      <p>
        こころの相談室 いしずえ では、相談員・支援職として「疲れた」と感じている方のご相談も承っています。
        聴く側の方が、安心して話せる場所として活用していただけます。
      </p>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          聴く側として消耗している状態の整理は、相性によって進めやすさが変わります。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">聴き続けて消耗している方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          相談員の疲れは、聴くという仕事が構造的に持つ特性から生まれます。「疲れた」と感じる自分を責めるより、消耗の構造を専門家と一緒に整理することが、回復への出発点になります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
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

      <ArticleFooterLinks type="compassion" exclude={["/articles/counselor-exhaustion"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

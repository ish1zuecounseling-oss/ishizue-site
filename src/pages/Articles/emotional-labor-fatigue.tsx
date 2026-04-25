import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function EmotionalLaborFatigue() {
  return (
    <ArticleLayout
      title="感情労働で疲れたとき｜支援職が消耗から抜け出すための具体的な方法"
      description="「感情労働で疲れた」「笑顔でいるのが限界」——その疲れは意志の問題ではありません。感情労働による消耗の特徴と、今日からできる回復方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/emotional-labor-fatigue"
      date="2026-04-25"
      tags={["burnout", "compassion", "boundary"]}
    >

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-light text-stone-200 leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          感情労働の疲れとは、<strong className="text-stone-100">「感情を管理し続けること」そのものによる消耗</strong>です。<br />
          身体は動いているのに、心が空っぽになっていく——それが感情労働による疲れの特徴です。
        </p>
      </div>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな疲れ方をしていませんか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・仕事中は笑顔でいられるが、帰宅すると何もしたくない</li>
          <li>・「怒りたい・泣きたい」気持ちを抑えてばかりいる</li>
          <li>・休日も気持ちが切り替わらない、ぼーっとしてしまう</li>
          <li>・「感情が麻痺している」「何を感じているかわからない」</li>
        </ul>
        <p className="text-xs mt-3" style={{ color: "#92400e" }}>
          → これは意志の弱さではなく、感情労働による構造的な消耗です。
        </p>
      </div>

      <div className="mb-8 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>感情労働の疲れが通常の疲れと違う理由</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>「ただ休む」だけでは回復しない理由</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>感情労働の疲れに特化した回復方法（具体的）</li>
        </ul>
      </div>

      <h2 id="why-different">感情労働の疲れが通常の疲れと違う理由</h2>
      <p>
        身体的な疲れは「動かないこと」で回復します。
        しかし感情労働の疲れは、<strong>「感情を管理し続けること」によって生まれる消耗</strong>なので、
        ただ横になるだけでは回復しません。
      </p>
      <p>
        さらに問題なのは、「やりがい」が疲れを隠すことです。
        「利用者の役に立てた」という充足感があるうちは、
        消耗に気づきにくい。気づいたときには深く消耗しているというパターンが多い。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">感情労働の疲れの特徴</p>
        <ul className="text-sm text-stone-600 space-y-1 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>身体は動けるのに「気力がない」</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「本当の感情がわからない」感情麻痺</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>家族や友人への共感力が落ちる</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>仕事モードが抜けず、オフでも感情を管理してしまう</li>
        </ul>
      </div>

      <h2 id="surface-deep">表層演技と深層演技——どちらが消耗するか</h2>
      <p>
        感情労働には2つのやり方があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">表層演技（Surface Acting）——外側だけ取り繕う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          本当は怒っているのに笑顔を作る、疲れているのに明るく振る舞う——
          内面と外面のズレが大きいため、強いストレスと「自分を偽っている感覚」が蓄積します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">深層演技（Deep Acting）——感情そのものを変えようとする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「本当に共感しよう」「この人の気持ちになって感じよう」と、
          感情自体を動かし続ける方法です。
          ズレは小さくなりますが、感情エネルギーの消耗が大きく、
          長期間続けると感情麻痺につながります。
          支援職に多いパターンです。
        </p>
      </div>

      <p>
        どちらの演技も消耗します。
        違いは「消耗の種類」と「気づきやすさ」です。
        深層演技は「やりがいがある」感覚と隣り合わせなので、
        疲れに気づきにくいという特徴があります。
      </p>

      <h2 id="recovery">感情労働の疲れから回復する方法</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「感情を管理しない時間」を意識的に作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情労働の回復に最も重要なのは、
          「感情を管理しなくていい時間・場所」を持つことです。
          一人で泣ける時間、怒れる場所、ただいられる空間——
          感情規則のない環境が、消耗した感情のリセットになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「仕事モードのスイッチ」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場を出たら着替える、特定の音楽を聴く、深呼吸を3回する——
          物理的・儀式的な「切り替え動作」が、
          脳に「もう感情管理しなくていい」というシグナルを送ります。
          小さな動作でも、習慣にすることで効果が出ます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「ぐちる・吐き出す」場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情労働の消耗を抱え込まず、
          職場の同僚・信頼できる人・カウンセラーに話せる場所を持つことが重要です。
          「人に話すことで楽になる。黙って抱え込んだら終わり」——
          これはベテラン支援職の共通認識でもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ セルフ・コンパッションを実践する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「疲れている自分を責める」という自己批判が、感情労働の消耗をさらに深めます。
          「これだけ感情を使って働いてきた。疲れて当然」という
          自分への優しさ（セルフ・コンパッション）が、回復を早めます。
        </p>
        <p className="text-xs text-stone-500 mt-2">
          → <Link to="/articles/helper-self-compassion-behavior" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフ・コンパッションを行動として実践する方法</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 感情麻痺に気づいたら早めに動く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「何を感じているかわからない」「以前は感じていた喜びが薄れた」——
          これは感情麻痺のサインで、バーンアウトの前兆です。
          この状態では一人での回復に限界があります。
          専門家への相談を検討してください。
        </p>
        <p className="text-xs text-stone-500 mt-2">
          → <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">今の消耗度を確認する（共感疲労チェック・3分）</Link>
        </p>
      </div>

      <h2 id="faq">よくある質問</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">Q. 感情労働の疲れはどれくらいで回復しますか？</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗の程度によります。軽度なら数日〜1週間の適切なオフで回復することもあります。
          感情麻痺が進んでいる場合は、数ヶ月単位での回復が必要なこともあります。
          原因（感情労働を続けている環境）が変わらない限り、
          セルフケアだけでは追いつかない場合があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">Q. 感情労働の疲れとバーンアウトは違いますか？</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情労働の疲れはバーンアウトの主要な原因の一つです。
          感情労働による消耗が蓄積・慢性化すると、
          意欲・共感力・達成感が低下したバーンアウト状態に移行します。
          感情労働の疲れの段階で対処することが、バーンアウト予防になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">Q. 仕事を変えないと回復しませんか？</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          必ずしもそうではありません。
          感情管理の方法・職場環境・セルフケアの習慣を変えることで、
          同じ職場でも消耗を減らすことは可能です。
          ただし、職場の構造的な問題（人手不足・ハラスメントなど）が原因の場合は、
          環境を変えることが必要な場合もあります。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「疲れているのに休めない」「感情が麻痺している気がする」
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          感情労働の消耗が深い状態では、一人での回復に限界があります。
          支援職専門のカウンセリングで、今の消耗の構造を整理し、
          回復への具体的なステップを一緒に考えることができます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white transition-all" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を相談してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">感情労働シリーズ</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-emotional-labor-what" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 感情労働とは？意味・具体例・疲れる理由と対処法
          </Link>
          <Link to="/articles/helper-helplessness" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 「何とかしてあげたいのにできない」無力感・やり残し感の正体
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 共感疲労チェック（3分）
          </Link>
          <Link to="/articles/helper-self-compassion-behavior" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → セルフ・コンパッションを行動として実践する方法
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。
      </p>

      <p className="text-xs text-stone-400 mt-2 leading-relaxed">
        参考文献：Hochschild, A. R.（1983）The Managed Heart. University of California Press. ／ 崎山治男（2008）感情労働と組織 組織科学，41(4), 39-47 ／ 小村由香（2005）対人サービスにおける感情管理 日本労働社会学会年報，15, 83-109
      </p>

      <ArticleBottomCTA
        links={[
          { label: "共感疲労チェックをする（3分）",          path: "/articles/helper-empathy-check" },
          { label: "脳疲労チェックをする（3分）",            path: "/articles/helper-brain-fatigue-check" },
          { label: "感情労働とは？基礎から理解する",          path: "/articles/helper-emotional-labor-what" },
        ]}
      />
    </ArticleLayout>
  )
}

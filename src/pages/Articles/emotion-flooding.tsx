import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "なぜ人の感情に飲まれてしまうのですか?",
    a: "「情動感染（emotional contagion）」という心理メカニズムが関係しています。人は、相手の表情・声・しぐさを無意識に模倣し、それを通じて相手と同じ感情状態になります。これは瞬時に・無自覚に起こるため、「空気を読もう」と意識する前に、すでに相手の不安や緊張を受け取っています。共感力の高い人ほど、この感染が起きやすいことがわかっています。あなたが弱いからではなく、感じ取る力が高いからこそ起きる現象です。",
  },
  {
    q: "感情に飲まれやすいのは、性格の問題ですか?",
    a: "性格の弱さではありません。むしろ「相手の感情を敏感に感じ取れる」という、対人援助職にとって重要な能力の裏返しです。情動感染の受けやすさは、共感性の高さと関連することが研究で示されています。問題は能力そのものではなく、「感じ取った感情を、自分のものと相手のものに分ける境界」が育っていないこと。境界は、後天的に意識して作ることができます。",
  },
  {
    q: "支援職に特に起こりやすいのはなぜですか?",
    a: "支援職（看護・介護・福祉・教育・心理など）は、不安・苦痛・緊張を抱えた人と、長時間・継続的に関わる仕事だからです。情動感染は相手の感情が強いほど、接触が長いほど起こりやすくなります。さらに「その場から離れられない」「感情を顔に出せない」という職業的制約が重なり、受け取った感情を処理する間もなく次々と蓄積します。これは個人の問題ではなく、仕事の構造から生じる消耗です。",
  },
  {
    q: "感情に飲まれないようにするには、どうすればいいですか?",
    a: "感情を「感じないようにする」のは逆効果です（抑え込むとかえって消耗します）。有効なのは「これは相手の感情」と心の中でラベルを貼り、自分の感情と分ける練習です。①感じ取っていることに気づく、②「今のは相手のもの」と分ける、③仕事を離れたら意識的に感覚を切り替える（手を洗う・着替える・短い散歩など）。完璧に遮断するのではなく、「自分の感覚を守る」発想が大切です。",
  },
  {
    q: "感情に飲まれる状態を放っておくとどうなりますか?",
    a: "受け取った感情を処理しきれないまま蓄積すると、共感疲労・脳疲労・感情の麻痺につながることがあります。「人の感情はわかるのに、自分の感情がわからない」という状態は、自他の境界が薄れたサインです。早めに「分ける練習」を始めること、そして一人で抱えきれないときは専門家と整理することが、長く支援を続けるための土台になります。",
  },
]

export default function EmotionFlooding() {
  return (
    <ArticleLayout
      title="感情に飲まれやすい支援者へ｜なぜ人の感情を受け取って消耗するのか【公認心理師】"
      description="人の不安を聞くと自分まで重くなる、利用者の言葉が家でも頭から離れない——それは「情動感染」という心理メカニズムです。共感できる人ほど境界線が薄くなり消耗します。なぜ飲まれるのか、どう自分の感覚を守るかを公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/emotion-flooding"
      date="2026-06-06"
      tags={["compassion", "boundary", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        人の感情を「受け取りすぎてしまう」のは、弱さではありません。感じ取る力が高い人にこそ起きる、構造的な消耗です。
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
        人の不安を聞いたあと、なぜか自分まで重くなる。
        同僚の機嫌が悪いと、ずっとそれが気になってしまう。
        利用者さんの言葉を、家に帰っても思い出している。
      </p>

      <p>
        「なんでこんなに疲れるんだろう」——そんな日は、ありませんか。
      </p>

      <p>
        もし思い当たるなら、あなたはおそらく、<strong>空気を「読む」前に、すでに「感じ取って」います</strong>。
        相手の緊張や不安を、意識する前に、無意識に受け取ってしまう。
        だから、周りは気づかなくても、あなたの神経はずっと働き続けている。
      </p>

      <p>
        この記事では、「人の感情に飲まれてしまう」状態を、<strong>情動感染</strong>という心理メカニズムから整理します。
        構造が見えると、「自分が弱いから」という誤解を手放して、自分の感覚を守る方向が見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・人の不安や落ち込みを聞くと、自分まで重くなる</li>
          <li>・その場の空気が悪いと、ずっと気になってしまう</li>
          <li>・利用者・患者・生徒の言葉が、家でも頭から離れない</li>
          <li>・人といると気を張り、一人になってやっとほっとする</li>
          <li>・「平気です」と言えてしまうが、本当は休めていない</li>
          <li>・人の感情はわかるのに、自分の感情はよくわからない</li>
        </ul>
      </div>

      <h2>なぜ「感じ取って」しまうのか——情動感染という仕組み</h2>
      <p>
        他者の感情が、瞬時に・無自覚に伝わってきて、自分も同じ感情状態になる——
        この現象を、心理学では<strong>情動感染（emotional contagion／情動伝染）</strong>と呼びます。
        HatfieldやCacioppoらの研究で体系化された概念です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">情動感染は「3つの段階」で無意識に起こる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ① <strong>模倣</strong>：相手の表情・声のトーン・しぐさを、無意識に真似る<br />
          ② <strong>フィードバック</strong>：その表情や姿勢が、自分の感情に影響を与える<br />
          ③ <strong>感染</strong>：結果として、相手と同じ感情状態になる<br /><br />
          重要なのは、これが<strong>「瞬時に・無自覚に・どこでも」</strong>起こるという点です。
          「感じ取ろう」と意識する前に、もう感染は始まっています。
          あなたが「気にしすぎ」なのではなく、脳の仕組みとして、自動的に受け取ってしまうのです。
        </p>
      </div>

      <p>
        そして、この情動感染の<strong>受けやすさは、共感性の高さと関連している</strong>ことが研究で示されています。
        つまり、人の感情に飲まれやすいのは、<strong>あなたに「感じ取る力」が高く備わっている</strong>ということ。
        それは支援職にとって、本来はかけがえのない資質です。
      </p>

      <h2>「共感できる人ほど、境界線が薄くなる」</h2>
      <p>
        ここに、ひとつの逆説があります。
        <strong>感じ取る力が高い人ほど、相手の感情と自分の感情の境界が、薄くなりやすい</strong>のです。
      </p>

      <p>
        相手の不安が、自分の不安のように感じられる。
        相手の苦しみが、自分の中に流れ込んでくる。
        境界が薄いと、相手の感情を「受け取る」だけでなく、「<strong>自分のものとして抱えてしまう</strong>」状態になります。
        これが「飲まれる」という感覚の正体です。詳しくは<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線（バウンダリー）とは</Link>を参照してください。
      </p>

      <p>
        全部を受け取るのは、優しさのように見えて、実は<strong>消耗のサイン</strong>です。
        ここを知らないまま頑張り続けると、受け取った感情が処理しきれずに蓄積し、
        やがて<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>や<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>につながります。
        さらに進むと、「人の感情はわかるのに、<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の感情がわからない</Link>」という状態にもなります。
      </p>

      <h2>支援職に特に起こりやすい構造</h2>
      <p>
        情動感染は誰にでも起きますが、支援職（看護・介護・福祉・教育・心理など）には、
        特に起こりやすい構造があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">なぜ支援職に起きやすいのか</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>感情の強い相手と関わる</strong>：不安・苦痛・緊張を抱えた人と接する。強い感情ほど感染しやすい</li>
          <li>・<strong>接触が長く、継続的</strong>：一度きりでなく、長時間・日常的に関わる。感染が積み重なる</li>
          <li>・<strong>その場から離れられない</strong>：感情を受け取っても、すぐに距離を取れない</li>
          <li>・<strong>感情を顔に出せない</strong>：受け取った感情を処理する間もなく、平静を保つことを求められる</li>
        </ul>
      </div>

      <p>
        だから、これは<strong>あなたの弱さではありません</strong>。
        感じ取れる力がある人が、感情の強い相手と、長く、逃げ場なく関わる——
        その構造が重なれば、誰でも消耗します。
        「気を遣える人ほど削られやすい」のは、性格ではなく構造の問題です。
        この構造は<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>とも深く関連します。
      </p>

      <LineCtaFatigue />

      <h2>「自分の感覚を守る」ための練習</h2>
      <p>
        ここで大切なのは、<strong>感情を「感じないようにする」ことではない</strong>という点です。
        感じ取る力は、あなたの大切な資質です。それを消そうとすると、かえって消耗します
        （<Link to="/articles/suppressing-emotions-at-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情を抑え込むことの負担</Link>）。
      </p>

      <p>
        目指すのは、感情を遮断することではなく、<strong>「自分の感情」と「相手の感情」を分けること</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① まず「感じ取っている」ことに気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          重くなったとき、「これは自分が落ち込んでいるのか、それとも相手の感情を受け取ったのか?」と問い直す。
          気づくだけで、飲まれる勢いが少し弱まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「これは相手の感情」とラベルを貼る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心の中で「今感じている重さは、相手のものだ」と分ける。
          相手の苦しみを、全部理解しなくていい。全部背負わなくていい。
          「相手の感情は相手のもの」という線を引くことが、境界の練習になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事を離れたら、感覚を切り替える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          手を洗う・着替える・短い散歩をする・温かいものを飲む——
          身体の感覚を使って「ここで一区切り」という合図を作ると、神経系が仕事モードから抜けやすくなります。
          <Link to="/articles/recovering-feeling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の感覚を取り戻す</Link>ことが、回復の土台になります。
        </p>
      </div>

      <p>
        今日は5分だけ、「これは相手の感情」と心の中で分けてみる。
        抱え込まない練習は、そこから始まります。
        あなたが壊れるまで頑張る必要は、ありません。まずは、あなたの感覚を守ってください。
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
        <p className="font-medium text-stone-700 mb-2">この消耗を構造から理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）——今の消耗度を確認する</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線（バウンダリー）とは</Link></li>
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
          <li>・<Link to="/articles/helper-pulled-by-client" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">特定の利用者に感情を引っ張られる</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">放っておくと進む状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労——休んでも回復しない</Link></li>
          <li>・<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の感情がわからない</Link></li>
          <li>・<Link to="/articles/suppressing-emotions-at-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">職場で感情を抑え込む負担</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「感じ取りすぎて飲まれる」状態は、自分の感覚と相手の感覚を分ける整理が助けになります。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「人の感情を受け取りすぎて消耗する」方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          感情に飲まれてしまうのは、それだけ感じ取る力が高いからです。その力を消すのではなく、自分の感覚を守りながら活かす方向を、専門家と一緒に整理してみませんか。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="compassion" exclude={["/articles/emotion-flooding"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)と、情動感染・共感性に関する心理学的知見をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

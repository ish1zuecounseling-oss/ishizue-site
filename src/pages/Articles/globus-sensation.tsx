import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "咽喉頭異常感症とは何ですか?",
    a: "のどに何かが詰まっている、引っかかっている、締めつけられるといった違和感が続くのに、診察や検査をしても、その原因となる病気が見つからない状態です。「ヒステリー球」と呼ばれることもありますが、精神的な異常を意味するものではありません。",
  },
  {
    q: "のどの違和感はストレスが原因ですか?",
    a: "はっきりした原因はわかっていません。のどの周りの筋肉の緊張、胃酸の逆流(逆流性食道炎)などが関わる場合があり、ストレスや強い感情、不安がきっかけで起こったり強まったりすることもあります。原因はひとつではなく、体と心の両方が関わっていると考えられています。",
  },
  {
    q: "何科を受診すればいいですか?",
    a: "まずは耳鼻咽喉科で、のどや首に病気がないかを確かめてもらいます。胸やけや呑酸(すっぱいものが上がってくる感じ)がある場合は、消化器内科で逆流性食道炎の検査をすることもあります。体の病気が見つからず、ストレスや不安との関係が強い場合は、心療内科での相談も選択肢になります。",
  },
  {
    q: "すぐに受診すべきなのはどんなときですか?",
    a: "首やのどの痛み、体重減少、突然の発症、飲み込みにくさ・飲み込むときの痛み、食べ物の逆流、首のしこり、筋力の低下、症状がどんどん進行する、といった場合は、別の病気の可能性があるため、早めに(数日〜1週間以内を目安に)医療機関を受診してください。",
  },
  {
    q: "食事のときは違和感がないのですが、大丈夫ですか?",
    a: "咽喉頭異常感症では、食べ物や飲み物を飲み込むときには問題がなく、むしろ何も飲み込んでいないときに違和感が強いことがよくあります。逆に、食べ物が飲み込みにくい・つかえる場合は別の病気の可能性があるので、早めに受診してください。",
  },
  {
    q: "咽喉頭異常感症は治りますか?",
    a: "命に関わる病気ではなく、時間とともに軽くなることも多いとされています。ただ、症状が長く続いたり、良くなったり悪くなったりを繰り返したりすることもあります。原因に応じた治療に加えて、「重大な病気ではない」と知って安心すること、違和感への注意や不安を和らげることが役立ちます。",
  },
]

export default function GlobusSensation() {
  return (
    <ArticleLayout
      title="咽喉頭異常感症(ヒステリー球)とストレス｜のどの詰まり感・違和感が続く支援職へ、公認心理師が解説"
      description="のどに何かが詰まっている感じがするのに、検査では異常がない——咽喉頭異常感症(ヒステリー球)は、のどの筋肉の緊張や胃酸の逆流、ストレスや抑えた感情が関わるとされる症状です。受診すべき危険サイン、何科に行くか、違和感に注意が向き続ける悪循環と、心理面からできることを公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/globus-sensation"
      date="2026-10-09"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        のどに何かが詰まっている。飲み込んでも消えない。でも、病院では「異常はありません」と言われた——。
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
        のどに小さな塊があるような、何かが引っかかっているような感じ。
        つばを飲み込んでも消えず、気になって何度も咳払いをしてしまう。
        食事はふつうにとれるのに、何もしていないときほど違和感が強い。
      </p>
      <p>
        こうした状態で、検査をしても原因となる病気が見つからないものを<strong>咽喉頭異常感症</strong>といいます。
        「ヒステリー球」とも呼ばれますが、<strong>精神的な異常を意味するものではありません</strong>。
        のどの周りの筋肉の緊張や胃酸の逆流、そしてストレスや抑えた感情などが関わると考えられています。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ のどの違和感が続く方は、まず耳鼻咽喉科を受診してください。この記事は心理的な側面からの解説であり、診断や治療に代わるものではありません。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・咽喉頭異常感症(ヒステリー球)とは</li>
          <li>・<strong>早めに受診すべき危険サイン</strong>と、何科に行くか</li>
          <li>・考えられている原因</li>
          <li>・<strong>違和感に注意が向き続ける悪循環</strong></li>
          <li>・支援職に起きやすい理由と、心理面からできること</li>
        </ul>
      </nav>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんなことはありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・のどに何かが詰まっている・引っかかっている感じが続く</li>
          <li>・のどが締めつけられるような、圧迫されるような感じがする</li>
          <li>・食事のときは平気なのに、何もしていないときに気になる</li>
          <li>・気になって、つばを何度も飲み込んだり咳払いをしたりしてしまう</li>
          <li>・忙しい時期や、言いたいことを飲み込んだあとに強くなる</li>
          <li>・検査では「異常なし」と言われたのに、症状が消えない</li>
        </ul>
      </div>

      <h2>咽喉頭異常感症とは</h2>
      <p>
        咽喉頭異常感症は、<strong>のどの違和感が続くのに、その原因となる病気が見つからない状態</strong>です。
        特徴は次のとおりです。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・のどに塊がある、詰まっている、締めつけられる感じがする</p>
        <p>・<strong>食べ物や飲み物を飲み込むことには問題がない</strong></p>
        <p>・食事とは関係なく、何も飲み込んでいないときに違和感が強いことが多い</p>
        <p>・命に関わる病気ではない</p>
      </div>
      <p>
        「ヒステリー球」という古い呼び名から、「気のせい」「精神的なもの」と受け取られがちですが、
        本人にとって違和感は<strong>実際に感じている体の感覚</strong>です。
        「異常なし」と言われても症状が続くことで、かえって不安が強まる人も少なくありません。
      </p>

      <h2>まず確かめたい、早めに受診が必要なサイン</h2>
      <p>
        のどの違和感は、咽喉頭異常感症以外の病気でも起こります。
        次のような症状がある場合は、<strong>早めに(数日〜1週間以内を目安に)</strong>医療機関を受診してください。
      </p>
      <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-1.5 text-sm text-stone-700 my-4">
        <p>・首やのどの痛みがある</p>
        <p>・思い当たる理由のない体重減少がある</p>
        <p>・症状が突然始まった</p>
        <p>・食べ物が飲み込みにくい、飲み込むときに痛む</p>
        <p>・食べたものが逆流してくる</p>
        <p>・首にしこりがある</p>
        <p>・筋力の低下がある</p>
        <p>・症状がどんどん悪化・進行している</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">受診の順番の目安</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>耳鼻咽喉科</strong>:まずのど・首に病気がないかを確かめる</li>
          <li>・<strong>消化器内科</strong>:胸やけや、すっぱいものが上がってくる感じがあるとき(逆流性食道炎の確認)</li>
          <li>・<strong>心療内科</strong>:体の病気が見つからず、ストレスや不安との関係が強いとき</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">
          どこに行けばいいか迷う場合は
          <Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 hover:text-stone-900">何科に相談すればいいか</Link>
          も参考にしてください。
        </p>
      </div>

      <h2>考えられている原因</h2>
      <p>
        咽喉頭異常感症のはっきりした原因はわかっていません。いくつかの要因が重なって起こると考えられています。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<strong>のどの周りの筋肉の緊張</strong>:食道の入り口の筋肉などがこわばる</p>
        <p>・<strong>胃酸の逆流</strong>:逆流性食道炎がのどの違和感として出ることがある</p>
        <p>・<strong>ストレス・不安・強い感情</strong>:きっかけになったり、症状を強めたりする</p>
      </div>
      <p>
        日本語にも「言葉を飲み込む」「胸がつかえる」「のどまで出かかる」という表現があるように、
        言いたいことを抑えたり、強い感情をこらえたりするとき、のどは緊張しやすい場所です。
        ストレスが体に出るしくみ全体については
        <Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症とは</Link>
        で解説しています。
      </p>

      <LineCtaFatigue />

      <h2>違和感に注意が向き続ける悪循環</h2>
      <p>
        咽喉頭異常感症を長引かせる要因のひとつが、<strong>のどへの注意と不安の悪循環</strong>です。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">悪循環の流れ</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>① のどに違和感がある</li>
          <li>② 「何か悪い病気では」「まだ治っていない」と気になり、のどに注意が向く</li>
          <li>③ 注意を向けるほど、違和感をはっきり感じるようになる</li>
          <li>④ つばを飲み込む・咳払いをして確かめるうちに、のどがさらに刺激され、緊張する</li>
          <li>⑤ 不安が強まり、また違和感が気になる</li>
        </ul>
      </div>
      <p>
        体の感覚は、注意を向けるほど大きく感じられるものです。
        だからこそ、<strong>受診して重大な病気がないと確かめ、安心すること自体が治療の一部</strong>になります。
        そのうえで、違和感を「消そう」とするより、「あっても大丈夫なもの」として扱えるようになると、
        少しずつ気にならない時間が増えていきます。
      </p>

      <h2>支援職に起きやすい理由</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 言いたいことを飲み込む場面が多い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者や家族からの理不尽な言葉、職場の方針への疑問。支援職は、感情や本音を飲み込んで、
          穏やかに対応し続けることが求められます
          (<Link to="/articles/suppressing-emotions-at-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事で感情を抑え続ける心理</Link>)。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自分の感情に気づきにくくなっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手の気持ちを優先し続けるうちに、自分が何を感じているのかがわからなくなることがあります。
          言葉にならない感情が、体の症状として現れることもあります
          (<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の感情がわからない</Link>)。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 体を緊張させたまま働いている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          常に周囲に気を配り、何かあればすぐ動けるよう構えている。肩や首だけでなく、のどの周りの筋肉も緊張しやすい状態です
          (<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link>)。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自分の不調を後回しにする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「食べられているから大丈夫」「仕事に支障はないから」と、受診も休養も後回しにしてしまう。
          不調が体に出るまで、自分の限界に気づけないことがあります
          (<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link>)。
        </p>
      </div>

      <h2>心理面からできること</h2>
      <p>
        体の検査と治療は医師の領分です。そのうえで、日常の中でできることがあります。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「確かめる行動」を少しずつ減らす</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何度もつばを飲み込む、咳払いをする、鏡でのどを見る。確かめるたびに一瞬は安心しても、
          のどへの注意と刺激は強まります。いきなりやめる必要はありませんが、
          「気になったら、まず3回ゆっくり呼吸してみる」など、別の行動に置き換えていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 症状が強まる場面を記録する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          どんな日、どんな場面のあとに違和感が強くなったか。記録すると、
          「言いたいことを我慢した日」「忙しさが続いた週」など、症状と生活の関係が見えてくることがあります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ のどと肩の力を抜く時間をつくる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          あごや舌に力が入っていないか、肩が上がっていないかに気づき、ゆっくり息を吐きながら緩める。
          温かい飲み物をゆっくり飲む、首や肩を温めるなど、体が「ほどける」時間を意図的に挟みます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 飲み込んできた言葉を、どこかで外に出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場では言えないことを、紙に書き出す、信頼できる人に話す、カウンセリングで言葉にする。
          飲み込み続けてきたものに居場所をつくることは、のどの症状だけでなく、
          自分を後回しにしない働き方への一歩にもなります。
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">ストレスが体のどこに出ているか、20項目で確認できます。</p>
        <Link to="/articles/psychosomatic-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ ストレスによる体の症状チェック(20項目・3分)</Link>
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">ストレスが体に出るしくみ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症とは——ストレスが体に出るしくみ</Link></li>
          <li>・<Link to="/articles/autonomic-dysfunction" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自律神経失調症とは</Link></li>
          <li>・<Link to="/articles/ibs-stress" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過敏性腸症候群とストレス</Link></li>
          <li>・<Link to="/articles/tension-headache" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">緊張型頭痛とストレス</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">飲み込んできたものに気づく</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/suppressing-emotions-at-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事で感情を抑え続ける心理</Link></li>
          <li>・<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の感情がわからない</Link></li>
          <li>・<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          体の治療と並行して、飲み込んできた感情や、自分を後回しにする働き方を整理することができます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/globus-sensation"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに、医学事典などの資料を参照して作成した一般向けの解説です。医学的な診断・治療ではありません。症状がある場合は、まず医療機関を受診してください。
      </div>
    </ArticleLayout>
  )
}

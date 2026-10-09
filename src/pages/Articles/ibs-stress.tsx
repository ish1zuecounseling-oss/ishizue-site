import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "過敏性腸症候群とは何ですか?",
    a: "検査で大腸に病気が見つからないのに、腹痛と便通の異常(下痢や便秘)が長く続く状態です。目安として、最近3か月の間に週1日以上の腹痛が繰り返し起こり、それが排便と関係している(排便で変化する、回数や便の形が変わる)場合に考えられます。日本でも人口のおよそ1割にみられる、珍しくない病気です。",
  },
  {
    q: "過敏性腸症候群はストレスが原因ですか?",
    a: "ストレスだけが原因ではありませんが、深く関わっています。脳と腸は神経やホルモンを通じて互いに信号をやり取りしており(脳腸相関)、ストレスがかかると腸の動きが乱れたり、腸が刺激に敏感になったりします。感染性腸炎の後に発症しやすいことや、食べ物や腸内細菌の影響も知られています。",
  },
  {
    q: "どんなときに病院を受診すべきですか?",
    a: "腹痛や便通の異常が続く場合は、まず内科・消化器内科を受診してください。特に、血便、発熱、思い当たる理由のない体重減少がある場合や、50歳以上で症状が初めて出た場合、家族に大腸の病気の人がいる場合は、大腸内視鏡検査などで別の病気がないかを確かめる必要があります。",
  },
  {
    q: "「またお腹が痛くなったらどうしよう」という不安が止まりません。",
    a: "その不安は過敏性腸症候群でとても多くみられます。不安で緊張すると腸が反応しやすくなり、症状が出るとさらに不安が強まる、という悪循環が起こります。不安そのものを和らげることが症状の軽減につながることがあるため、体の治療と並行して、不安の扱い方を整理することが役立ちます。",
  },
  {
    q: "カウンセリングや心理療法は効果がありますか?",
    a: "薬物療法で十分に改善しない場合に、ストレスマネジメント、リラクセーション、認知行動療法、マインドフルネスなどの心理的なアプローチが有効なことがあると、日本消化器病学会の資料でも紹介されています。体の治療は医師の領分ですが、予期不安や回避の悪循環を整理することは、心理面からできる支援です。",
  },
  {
    q: "仕事中の症状がつらいとき、どうすればいいですか?",
    a: "まず主治医に、仕事中に困っている場面(会議、送迎、夜勤など)を具体的に伝えてください。頓服薬の使い方などを相談できることがあります。そのうえで、トイレの場所を事前に確認しておく、信頼できる同僚に事情を伝えておくなど、「いざという時の逃げ道」があるだけで不安が下がり、症状が落ち着くこともあります。",
  },
]

export default function IbsStress() {
  return (
    <ArticleLayout
      title="過敏性腸症候群とストレス｜「またお腹が痛くなったら」の不安と悪循環を、支援職向けに公認心理師が解説"
      description="会議の前、送迎の途中、夜勤中——緊張するとお腹が痛くなる。過敏性腸症候群(IBS)は、脳と腸のつながりとストレスが深く関わる心身症の代表です。「また痛くなったら」という予期不安と回避の悪循環、受診すべき危険サイン、心理面からできることを公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/ibs-stress"
      date="2026-10-09"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        お腹の痛みそのものより、「また痛くなったらどうしよう」という不安のほうがつらい——そう感じていませんか。
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
        会議が始まる前になると、お腹が痛くなる。
        利用者の送迎中、トイレに行けない時間が不安でたまらない。
        夜勤の前は、食事をとるのも怖い——。
      </p>
      <p>
        <strong>過敏性腸症候群(IBS)</strong>は、検査で腸に病気が見つからないのに、腹痛と下痢・便秘が続く状態です。
        脳と腸は互いに信号をやり取りしていて、ストレスがかかると腸が反応しやすくなります。
        そして多くの人を苦しめるのは、痛みそのものより<strong>「また痛くなったら」という予期不安</strong>と、
        それが症状をさらに強める悪循環です。
        この記事では、その悪循環のしくみと、受診の目安、心理面からできることを整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 腹痛や便通の異常が続く方は、まず内科・消化器内科を受診してください。この記事は心理的な側面からの解説であり、診断や治療に代わるものではありません。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・過敏性腸症候群とは(目安と4つのタイプ)</li>
          <li>・<strong>受診すべき危険サイン</strong></li>
          <li>・脳と腸のつながり(脳腸相関)とストレス</li>
          <li>・<strong>予期不安と回避の悪循環</strong>、支援職に起きやすい場面</li>
          <li>・心理面からできること</li>
        </ul>
      </nav>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんなことはありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・緊張する場面の前になると、お腹が痛くなる・トイレに行きたくなる</li>
          <li>・トイレに行けない時間(会議・送迎・外出)が不安で仕方ない</li>
          <li>・トイレの場所が分からない場所を避けるようになった</li>
          <li>・出勤前や夜勤前に、食事を抜いてしまう</li>
          <li>・下痢と便秘を繰り返している</li>
          <li>・休日はお腹の調子が比較的落ち着いている</li>
        </ul>
      </div>

      <h2>過敏性腸症候群とは</h2>
      <p>
        過敏性腸症候群は、<strong>大腸に病気が見つからないのに、腹痛と便通の異常が数か月以上続く状態</strong>です。
        日本でも人口のおよそ1割にみられ、珍しい病気ではありません。目安は次のとおりです。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">診断の目安(ローマIV基準の考え方)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          最近3か月の間に、<strong>週1日以上の腹痛</strong>が繰り返し起こり、次のうち2つ以上に当てはまる:
        </p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9] mt-1">
          <li>・排便と関係している(排便で痛みが変化する)</li>
          <li>・排便の回数が変わる</li>
          <li>・便の形(硬さ)が変わる</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">※ 実際の診断は、ほかの病気がないことを確かめたうえで医師が行います。</p>
      </div>
      <p>
        便の状態によって、<strong>便秘型・下痢型・混合型(便秘と下痢を繰り返す)・分類不能型</strong>に分けられます。
        緊張で腹痛や下痢が起こりやすいのは下痢型、ストレスで便秘が悪化しやすいのは便秘型です。
      </p>

      <h2>まず確かめたい、受診が必要なサイン</h2>
      <p>
        同じような症状は、大腸の病気などでも起こります。次のような場合は、
        内科・消化器内科で<strong>大腸内視鏡検査などの検査が必要になる</strong>ことがあります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・血便がある</p>
        <p>・発熱がある</p>
        <p>・思い当たる理由のない体重減少がある</p>
        <p>・50歳以上で、症状が初めて出た</p>
        <p>・本人や家族に大腸の病気の経験がある</p>
      </div>
      <p className="text-sm text-stone-600">
        これらに当てはまらなくても、症状が続く場合は一度受診し、ほかの病気がないことを確かめておくことが、
        安心して心理面に取り組むための土台になります。
      </p>

      <h2>脳と腸はつながっている——ストレスがお腹に出るしくみ</h2>
      <p>
        脳と腸は、神経やホルモンを通じて<strong>双方向に信号をやり取り</strong>しています(脳腸相関)。
        過敏性腸症候群では、このやり取りが強くなっていると考えられています。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・ストレスがかかると、脳から腸への信号が強まり、腸の動きが乱れる</p>
        <p>・腸が刺激に敏感になり、健康な人なら気にならない程度の刺激でも痛みとして感じやすい</p>
        <p>・腸の不調が脳に伝わり、不安や緊張をさらに強める</p>
      </div>
      <p>
        つまり、お腹の症状は「気の持ちよう」ではなく、<strong>脳と腸のつながりの中で実際に起きている反応</strong>です。
        ストレスだけが原因ではなく、感染性腸炎の後に起こりやすいことや、食べ物・腸内細菌の影響も知られています。
      </p>

      <LineCtaFatigue />

      <h2>「また痛くなったら」——予期不安と回避の悪循環</h2>
      <p>
        過敏性腸症候群を長引かせる大きな要因のひとつが、<strong>症状を予想して不安になる「予期不安」</strong>です。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">悪循環の流れ</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>① 「会議中にお腹が痛くなったらどうしよう」と予想して不安になる</li>
          <li>② 不安で体が緊張し、腸が反応して実際に症状が出やすくなる</li>
          <li>③ 「やっぱり痛くなった」と、不安がさらに強まる</li>
          <li>④ トイレのない場所や、症状が出そうな場面を<strong>避ける</strong>ようになる</li>
          <li>⑤ 避けるほど「その場面は危険だ」という感覚が強まり、行動の範囲が狭くなっていく</li>
        </ul>
      </div>
      <p>
        回避は、その場では不安を下げてくれます。けれど続けるうちに、避ける場面が増え、
        生活や仕事の範囲が少しずつ狭くなっていきます。
        <strong>症状そのものより、この悪循環が生活を苦しくしている</strong>ことが少なくありません。
      </p>

      <h2>支援職に起きやすい場面</h2>
      <p>
        支援の仕事には、<strong>「すぐにトイレに行けない」「その場を離れられない」時間</strong>が多くあります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・利用者の送迎や外出支援の途中</p>
        <p>・一人で現場を見ている時間帯、夜勤</p>
        <p>・ケース会議、担当者会議、家族との面談</p>
        <p>・利用者の対応中で、途中で抜けられない場面</p>
      </div>
      <p>
        そのうえ支援職は、「利用者に迷惑をかけられない」「自分の不調で穴を空けられない」と、
        症状を誰にも言わずに抱え込みやすい傾向があります。
        不調を後回しにする習慣は、受診を遅らせ、悪循環を長引かせます
        (<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link>)。
      </p>

      <h2>心理面からできること</h2>
      <p>
        体の治療は医師の領分です。日本消化器病学会の資料でも、薬で十分に改善しない場合に、
        ストレスマネジメント、リラクセーション、<strong>認知行動療法</strong>、マインドフルネスなどの
        心理的なアプローチが有効なことがあると紹介されています。日常の中でできることは次のとおりです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 症状と不安を記録して、パターンを知る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          いつ、どんな場面で、どのくらい症状が出たか。その前にどんな不安があったか。
          記録すると、「不安が強い場面ほど症状が出やすい」といったパターンが見えてきます。
          パターンが見えると、症状は「いつ襲ってくるかわからないもの」から「理由のある反応」に変わります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「逃げ道」を先に用意しておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          トイレの場所を事前に確認しておく、信頼できる同僚に事情を伝えておく、主治医と頓服薬の使い方を相談しておく。
          「いざという時にどうするか」が決まっているだけで、予期不安は下がりやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 避けている場面を、少しずつ取り戻す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          いきなり苦手な場面に飛び込む必要はありません。不安が小さい場面から少しずつ試し、
          「不安はあったけれど、大丈夫だった」という経験を重ねていきます。
          これは認知行動療法でも使われる考え方で、一人で難しい場合は専門家と一緒に進めるほうが安全です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 気を張り続ける働き方そのものを見直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          常に緊張している状態では、腸も休まりません。体が「ここは安全だ」と感じられる時間を意図的に作ることが、
          脳と腸の両方を落ち着かせる土台になります
          (<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link>)。
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">ストレスが体に出るしくみ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症とは——ストレスが体に出るしくみ</Link></li>
          <li>・<Link to="/articles/autonomic-dysfunction" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自律神経失調症とは</Link></li>
          <li>・<Link to="/articles/tension-headache" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">緊張型頭痛とストレス</Link></li>
          <li>・<Link to="/articles/globus-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">咽喉頭異常感症とストレス</Link></li>
          <li>・<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link></li>
          <li>・<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">不安を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-contrast-avoidance" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">不安が止まらないときの対処法</Link></li>
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
          体の治療と並行して、予期不安と回避の悪循環や、気を張り続ける働き方を整理することができます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/ibs-stress"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに、日本消化器病学会の資料などを参照して作成した一般向けの解説です。医学的な診断・治療ではありません。症状がある場合は、まず医療機関を受診してください。
      </div>
    </ArticleLayout>
  )
}

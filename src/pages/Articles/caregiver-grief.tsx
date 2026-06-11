import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "利用者さんが亡くなって泣いてしまうのは、プロ失格ですか?",
    a: "失格ではありません。深く関わった人を失えば悲しみが生じるのは、人として自然な反応です。むしろ、関係を丁寧に築いてきた証拠でもあります。問題は「悲しむこと」ではなく、支援職の悲しみが『仕事なんだから』と社会的に認められにくいこと（公認されない悲嘆）にあります。悲しみ自体を消す必要はありません。",
  },
  {
    q: "何人看取っても慣れません。おかしいですか?",
    a: "おかしくありません。「慣れ」は感情が摩耗した状態であって、専門性の証ではありません。一人ひとりとの関係が個別である以上、別れも毎回個別です。慣れないことは、あなたが利用者を「業務対象」ではなく「人」として関わり続けている証です。ただし、悲しむ間もなく次の看取りが続く環境では悲嘆が蓄積するため、意識的に区切りを作る工夫が必要になります。",
  },
  {
    q: "葬儀に参列できず、気持ちの区切りがつきません。",
    a: "支援職は多くの場合、葬儀という「別れの儀式」に参加できません。儀式は悲嘆の区切りとして重要な機能を持つため、それが無いと気持ちが宙に浮いたままになりやすいのです。代わりに、自分なりの小さな儀式を作ることが有効です。心の中で手を合わせる、その方との思い出を一つ書き留める、関わった日々に「ありがとうございました」と区切りの言葉を置く——形は何でも構いません。",
  },
  {
    q: "悲しみはいつまで続きますか? どこからが相談すべきラインですか?",
    a: "悲嘆の経過には個人差があり、波がありながら少しずつ和らいでいくのが一般的です。一方で、数ヶ月単位で強い悲しみが続き、眠れない・仕事に集中できない・日常生活に影響が出ている場合は、一人で抱えるラインを越えています。グリーフ（悲嘆）は専門的なサポートの対象になり得るものです。カウンセリングや医療機関に相談することは、弱さではなく適切な対処です。",
  },
  {
    q: "同僚は平気そうなのに、自分だけ引きずっています。",
    a: "「平気そうに見える」と「平気である」は別物です。支援職の現場には感情を表に出さない暗黙のルール（感情労働）があるため、同僚も内側では同じように抱えている可能性があります。また、利用者との関係の深さや、その時々の自分の状態によって、悲嘆の重さは変わります。他人と比べる必要はありません。あなたの悲しみは、あなたとその方との関係の分だけ、正当なものです。",
  },
]

export default function CaregiverGrief() {
  return (
    <ArticleLayout
      title="利用者さんが亡くなったとき｜看取りの悲しみに「慣れない」のは普通です【公認心理師】"
      description="担当していた利用者さん・患者さんが亡くなった。葬儀には行けず、翌日には通常業務——支援職の悲しみは「公認されない悲嘆」と呼ばれ、置き場を失いやすい構造があります。なぜ苦しいのか、どう区切りをつけるかを公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/caregiver-grief"
      date="2026-06-11"
      tags={["compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        利用者さんの死を悲しむことは、プロ失格ではありません。悲しみの「置き場」が無いことが、苦しさの正体です。
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
        長く担当していた利用者さんが、亡くなった。
        ご家族ではないから、葬儀には行けない。
        悲しいのに、翌日には通常通りの業務がある。
        「仕事なんだから」と、自分にも、周りからも、言われている気がする。
      </p>

      <p>
        ——そんな経験は、ありませんか。
      </p>

      <p>
        介護・看護・福祉の現場では、人の死に立ち会うことが「仕事の一部」とされています。
        でも、<strong>仕事の一部だからといって、悲しみが生じないわけではありません</strong>。
        深く関わった人を失えば、悲しみが生まれる。それは人として自然な反応です。
      </p>

      <p>
        この記事では、支援職の看取り後の苦しさを、<strong>「公認されない悲嘆」</strong>という概念から整理します。
        構造が見えると、「引きずる自分はプロ失格」という誤解を手放して、悲しみとの付き合い方が見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・亡くなった利用者さん・患者さんのことが、ふとした瞬間に浮かぶ</li>
          <li>・「もっと何かできたのでは」と考え続けてしまう</li>
          <li>・悲しいのに、職場では平気な顔をしている</li>
          <li>・葬儀に行けず、気持ちの区切りがついていない</li>
          <li>・何人看取っても慣れず、「自分は向いていないのでは」と思う</li>
          <li>・悲しみを口にすると「仕事なんだから」と言われそうで、言えない</li>
        </ul>
      </div>

      <h2>なぜ支援職の悲しみは「置き場」が無いのか——公認されない悲嘆</h2>
      <p>
        大切な人を失ったとき、人は「喪に服す」ことを社会的に認められます。
        忌引きがあり、葬儀があり、「お辛いですね」と声をかけられる。
        悲しむ権利が、周囲から公認されている状態です。
      </p>
      <p>
        ところが、<strong>支援職の悲しみには、この「公認」がありません</strong>。
        グリーフ（悲嘆）研究では、これを<strong>公認されない悲嘆（disenfranchised grief）</strong>と呼びます。
        悲嘆研究者のドーカ（Doka）が提唱した概念で、
        「その関係・その喪失は、悲しむに値しない」と社会的に扱われてしまう悲嘆のことです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">支援職の悲嘆が「公認されない」理由</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>家族ではないから</strong>：「遺族」とは扱われず、忌引きも弔問の場も用意されない</li>
          <li>・<strong>仕事だから</strong>：「プロなんだから割り切るべき」という暗黙の期待がある</li>
          <li>・<strong>儀式に参加できないから</strong>：葬儀という「別れの区切り」の場に立ち会えない</li>
          <li>・<strong>日常が止まらないから</strong>：悲しむ間もなく、翌日には次の業務・次の利用者が待っている</li>
        </ul>
      </div>

      <p>
        悲しみそのものより、<strong>悲しみを認めてもらえず、区切る場も無いこと</strong>が、支援職の喪失体験を重くします。
        行き場のない悲嘆は消えるのではなく、心の中に未処理のまま残り続けるからです。
      </p>

      <h2>支援職特有の、悲嘆が積み重なる構造</h2>
      <p>
        さらに、支援の現場には、悲嘆が一つずつ処理される前に積み重なっていく構造があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 深い関係を築く仕事なのに、別れの儀式が無い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          毎日身体に触れ、生活を支え、何年も関わる——支援職と利用者の関係は、決して浅くありません。
          関係が深いほど喪失も大きいのに、その別れに区切りをつける場が制度的に用意されていません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 喪失が「連続」する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一人の死を悲しみ終える前に、次の看取りが来る。空いた部屋には新しい利用者が入る。
          悲嘆には本来、時間が必要ですが、現場はその時間を与えてくれません。
          処理されない悲しみは蓄積し、ある時ふいに重さとして現れることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「慣れるべき」という職場文化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いちいち引きずっていたら、この仕事はやっていけない」——そんな空気の中で、
          悲しみを見せることが「未熟さ」のように扱われる職場があります。
          でも、<strong>慣れないのは未熟さではありません</strong>。一人ひとりとの関係が毎回違う以上、
          別れも毎回新しいのです。慣れないことは、あなたが人として関わり続けている証です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 感情を表に出せない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          動揺しても、他の利用者の前では平静を保たなければならない。
          ご家族の前では、支える側でいなければならない。
          <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>の構造が、悲しみを内側に閉じ込めます。
          抑え込まれた悲嘆は、<Link to="/articles/feeling-nothing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何も感じない</Link>という形の麻痺として現れることもあります。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>悲しみと、どう付き合うか</h2>
      <p>
        目指すのは、悲しみを「消す」ことでも「慣れる」ことでもありません。
        <strong>悲しみに置き場を作ること</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① まず、悲しんでいいと自分に認める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「仕事なんだから」という声を、いったん脇に置いてください。
          深く関わった人を失えば、悲しみが生まれる。それだけのことです。
          悲しみを「あってはいけないもの」として扱うことが、いちばん悲嘆を長引かせます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 自分なりの「小さなお別れの儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          葬儀に出られない代わりに、自分だけの区切りを作ります。
          心の中で手を合わせる。その方との思い出をひとつ書き留める。
          「○○さん、ありがとうございました」と言葉にする。
          形はなんでも構いません。<strong>儀式の機能は「ここで一区切り」と心に伝えること</strong>です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 語れる相手と、語る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          同じ現場の信頼できる同僚と、その方のことを語る時間は、悲嘆の処理を大きく助けます。
          「あの人、こういうところがあったよね」と思い出を共有すること自体が、弔いになります。
          職場にそうした場（振り返りのカンファレンスなど）があれば活用し、無ければ一人でも信頼できる相手を見つけてください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 長引く・生活に影響が出ているときは、専門的サポートへ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          数ヶ月単位で強い悲しみが続く、眠れない、仕事に集中できない——
          そんなときは、一人で抱えるラインを越えています。
          グリーフは、カウンセリングや医療の正当な対象です。
          「このくらいで相談していいのか」と迷う段階で、十分相談に値します。
        </p>
      </div>

      <h2>二次受傷・共感疲労との違い</h2>
      <p>
        看取り後の苦しさは、近い概念と混ざりやすいので、整理しておきます。
      </p>
      <div className="card space-y-3 text-sm">
        {[
          { label: "グリーフ（悲嘆）", desc: "「喪失」への自然な反応。亡くなった方との関係そのものに由来する悲しみ。" },
          { label: "二次的外傷（二次受傷）", desc: "利用者のトラウマ的な体験・苦痛に触れ続けることによる傷つき。喪失ではなく「曝露」が核。" },
          { label: "共感疲労", desc: "他者の感情を受け取り続けることによる蓄積的な消耗。特定の出来事より「積み重ね」が核。" },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-3">
            <span className="text-xs font-medium flex-shrink-0 w-32 mt-0.5 text-stone-700">{label}</span>
            <p className="text-stone-600 leading-[1.9]">{desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-600">
        この3つは重なって生じることもあります。看取りの悲しみと同時に消耗のサインがあるなら、
        <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link>や<Link to="/articles/secondary-trauma-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">二次的外傷チェック</Link>で、今の状態を確認できます。
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
        <p className="font-medium text-stone-700 mb-2">近い苦しさを構造から理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/care-worker-secondary-trauma" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">介護職の二次的外傷——利用者の苦痛に触れ続ける傷つき</Link></li>
          <li>・<Link to="/articles/helper-client-stuck-in-head" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">利用者の話が頭から離れない</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは（総合解説）</Link></li>
          <li>・<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の感情がわからない</Link></li>
          <li>・<Link to="/articles/recovering-feeling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情を取り戻す</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          置き場のない悲しみは、安心して語れる場で言葉にすることが、区切りへの一歩になります。
          10項目で相性を確認できます（合わないと出たら別の選択肢も案内しています）。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「看取りの悲しみを、誰にも話せない」方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          悲しみに、置き場を作る時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          職場では言えない悲しみを、「仕事なんだから」と片付けずに扱える場所があります。あの方との関わりを、一緒に振り返って区切りをつける——それも回復の一つの形です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="compassion" exclude={["/articles/caregiver-grief"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)と、悲嘆（グリーフ）に関する心理学的知見をもとに作成しています。医学的な診断ではありません。死別による苦痛が強く続く場合は、医療機関にご相談ください。
      </div>
    </ArticleLayout>
  )
}

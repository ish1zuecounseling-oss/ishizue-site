import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "バーンアウトとうつ病の違いは何ですか?",
    a: "最大の違いは「影響の範囲」です。バーンアウトは主に仕事・職場という文脈に限定されやすく、仕事から離れると比較的気持ちが楽になることがあります。一方うつ病は、家庭・趣味・人間関係など生活全般に影響が及び、仕事から離れても症状が続きます。感情の質も異なり、バーンアウトは麻痺・無関心が、うつ病は深い悲しみ・絶望・自己否定が中心になりやすい傾向があります。",
  },
  {
    q: "自分がバーンアウトかうつか、どう見分ければいいですか?",
    a: "完全な自己判断は難しいですが、手がかりは「生活全般への影響度」です。①休日や仕事から離れると少し楽になる→バーンアウトの側面が強い可能性、②仕事以外の趣味や休息でも喜びを感じない→うつのサインの可能性、③広範囲で持続的な自己否定がある→うつの特徴、です。ただし両者は重なることも多く、2週間以上続く場合は専門家への相談をおすすめします。",
  },
  {
    q: "バーンアウトはうつ病に移行することがありますか?",
    a: "あります。バーンアウト状態が長引くことでうつ病に移行したり、うつ病の背景にバーンアウトが関与していたりすることがあります。「仕事が原因のバーンアウトだから大丈夫」と判断して放置すると、うつ病に発展するリスクがあります。どちらか一方と断定するより、生活全般への影響度を目安に、早めに専門家に相談することが大切です。",
  },
  {
    q: "回復方法に違いはありますか?",
    a: "あります。バーンアウトは休息・環境の変化・役割の見直しによって回復の糸口が見えやすい傾向があります。一方うつ病は、休息だけでは十分でないことが多く、医療的なサポート(薬物療法・精神療法など)が回復に重要な役割を果たします。ただし両者が重なっている場合は、両方のアプローチを組み合わせることが必要です。自己判断せず、医療機関で評価を受けることをおすすめします。",
  },
];

export default function HelperBurnoutVsDepression() {
  return (
    <ArticleLayout
      title="バーンアウトとうつの違いとは｜支援職が知っておきたい見極めのポイント"
      description="バーンアウトとうつは症状が似ており混同されやすいですが、原因・影響の範囲・回復のプロセスが異なります。支援職として自分や同僚の状態を理解するための整理です。"
      url="https://www.ishizue-counseling.jp/articles/helper-burnout-vs-depression"
      date="2026-03-29"
      audio="/audio/helper-burnout-vs-depression.mp3"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
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
        バーンアウトとうつの違いとは、原因・症状の範囲・回復のプロセスにおける差異のことです。
        両者は症状が似ており、混同されやすいものですが、理解の枠組みが異なります。
        どちらの状態にあるかによって必要なケアや対応も変わってくるため、
        この違いを知っておくことは意味があります。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        バーンアウトそのものの全体像は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>に、原因は<Link to="/articles/burnout-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の原因</Link>にまとめています。この記事は「うつとの違い」に絞って解説します。
      </p>

      <p>
        現場でこんな声を聞くことがあります。
      </p>
      <div className="card space-y-2">
        <p>「最近ずっと疲れていて、これはバーンアウトなのか、うつなのか、自分でもわからない」</p>
        <p>「職場を離れれば楽になるのか、それとも何をしても回復しない感じがある」</p>
        <p>「同僚がどんどん元気をなくしていて、どう理解すればいいのか」</p>
      </div>

      <h2>バーンアウトとうつ、それぞれの定義</h2>
      <h3>■ バーンアウトとは</h3>
      <p>
        バーンアウト（燃え尽き症候群）は、主に仕事や特定の役割における長期的な過負荷によって
        生じる状態です。WHO（世界保健機関）は2019年に、バーンアウトを「職業上の現象」として
        位置づけました。つまり、職場・仕事という文脈と密接に結びついた状態とされています。
      </p>
      <ul className="space-y-2">
        <li>情緒的消耗感（エネルギーが枯渇した感覚）</li>
        <li>脱人格化（利用者や仕事への冷淡さ・無関心）</li>
        <li>個人的達成感の低下（無力感・自己効力感の喪失）</li>
      </ul>
      <h3>■ うつとは</h3>
      <p>
        うつ（うつ病・抑うつ状態）は、生活全般にわたる気分・意欲・身体機能の低下を特徴とする状態です。
        仕事に限らず、家庭・趣味・人間関係など、生活のあらゆる領域に影響が及びます。
      </p>
      <ul className="space-y-2">
        <li>持続的な抑うつ気分</li>
        <li>興味・喜びの喪失</li>
        <li>疲労感・睡眠の変化・集中力の低下</li>
        <li>自己否定感・希死念慮</li>
      </ul>
      <p>
        うつは医学的な診断名であり、適切な治療が必要な状態です。
      </p>

      <h2>両者の主な違い</h2>
      <h3>■ 影響の範囲</h3>
      <p>
        バーンアウトは、主に仕事・職場という文脈に限定されやすいのが特徴です。
        仕事から離れた場面では、比較的気持ちが楽になることがあります。
        長期休暇中に少し回復を感じたり、職場のことを考えなければ穏やかでいられるという状態は、
        バーンアウトに近い可能性があります。
      </p>
      <p>
        一方うつは、生活全般に影響が及びます。仕事から離れても気持ちが晴れない、
        好きだったことに興味が持てない、何をしていても無気力・無感動という状態は、
        うつのサインである可能性があります。
      </p>
      <h3>■ 感情の質</h3>
      <p>
        バーンアウトでは、感情の麻痺・冷淡さ・無関心が前景に出やすい傾向があります。
        「感情が動かなくなった」「どうでもよくなった」という感覚です。
      </p>
      <p>
        うつでは、深い悲しみ・絶望感・自己否定が中心になりやすい傾向があります。
        「自分はダメだ」「消えてしまいたい」という感覚が伴うことがあります。
      </p>
      <h3>■ 回復のきっかけ</h3>
      <p>
        バーンアウトは、仕事から距離を置いたり、休息・環境の変化・役割の見直しによって
        回復の糸口が見えやすい傾向があります。
        うつは、休息だけでは十分でないことが多く、医療的なサポート（薬物療法・精神療法など）が
        回復に重要な役割を果たします。
        受診先に迷う場合は<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link>を参照してください。
      </p>

      <h2>現場で起こること：どちらかわからないときに感じること</h2>
      <h3>■ 「仕事を離れれば楽になる気がする」</h3>
      <p>
        休日や仕事から離れたときに少し回復を感じるなら、バーンアウトの側面が強い可能性があります。
        ただし、バーンアウトが長期化するとうつに移行することもあるため、
        「仕事が原因だから大丈夫」と判断するのは慎重であることが大切です。
      </p>
      <h3>■ 「何をしていても楽しくない・虚しい」</h3>
      <p>
        以前は楽しめたこと、仕事以外の趣味や休息の時間でも喜びや意欲が感じられなくなっている場合、
        うつのサインである可能性があります。
        このような状態が2週間以上続く場合は、専門家への相談を検討することが助けになるかもしれません。
      </p>
      <h3>■ 「自分を責め続けている」</h3>
      <p>
        「自分がだめだから」「もっとできるはずなのに」という強い自己批判が続いている場合、
        うつの特徴である認知の歪みが関係している可能性があります。
        バーンアウトでも自責感は生じますが、うつではより広範囲・持続的に自己否定が続く傾向があります。
        自己否定の構造については<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない（条件付き自己価値）</Link>も参考になります。
      </p>
      <h3>■ 両方が重なっていることもある</h3>
      <p>
        バーンアウトとうつは、明確に切り分けられるものではなく、重なり合っていることも多いのが
        実際のところです。バーンアウト状態が長引くことでうつに移行したり、
        うつの背景にバーンアウトが関与していたりすることもあります。
        どちらか一方と断定するより、「どの程度、生活全般に影響が及んでいるか」を
        目安にすることが参考になります。
      </p>

      <h2>心理的背景：なぜ支援職は混同しやすいのか</h2>
      <h3>■ 消耗のサインを見逃しやすい構造</h3>
      <p>
        支援職は、他者の状態には敏感でも、自分自身のサインには気づきにくい傾向があります。
        「疲れているのは当たり前」「みんなも同じはず」という感覚が、
        状態の深刻さを過小評価させることがあります。
        早めのサインについては<Link to="/articles/burnout-early-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の初期症状・前兆</Link>を参照してください。
      </p>
      <h3>■ 自己診断の難しさ</h3>
      <p>
        バーンアウトもうつも、当事者が自分の状態を客観的に評価することは難しいものです。
        特に消耗が進んでいる状態では、思考力・判断力自体が低下しているため、
        「これはバーンアウトか、うつか」という問い自体に答えにくくなります。
      </p>
      <h3>■ スティグマ（偏見）の影響</h3>
      <p>
        「うつ＝弱い」というスティグマが、支援職の方が専門家に相談することをためらわせることがあります。
        支援する立場にある人ほど、「自分が支援を受けること」への抵抗感を持ちやすいという側面もあります。
      </p>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>影響の範囲：バーンアウトは主に仕事の文脈、うつは生活全般に及ぶ</li>
        <li>感情の質：バーンアウトは麻痺・無関心、うつは悲しみ・絶望・自己否定が中心になりやすい</li>
        <li>回復のプロセス：バーンアウトは休息・環境変化が鍵、うつは医療的サポートが重要</li>
        <li>重なり合う可能性：両者は明確に分離できるものではなく、移行・併存することもある</li>
      </ul>
      <p>
        「これはバーンアウトだから大丈夫」と判断するより、
        生活全般への影響・期間・自己否定の深さを手がかりに、
        専門家への相談を検討することが大切です。
        自分の状態を知ろうとすること自体が、回復への重要な一歩です。
      </p>
      <p>
        気になる症状が続く場合は、かかりつけ医・精神科・心療内科への相談もひとつの選択肢です。
        支援を受けることは、支援者としての力を守ることにもつながります。
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

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「バーンアウトかうつか」の自己判断は難しいものです。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分の状態を知りたい」方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          バーンアウトかうつかの判断は、一人では難しいものです。ただし、強い抑うつ感・希死念慮がある場合は、まず医療機関(精神科・心療内科)の受診を優先してください。カウンセリングは、状態を整理し回復を支える場として併用できます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/helper-burnout-vs-depression"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "介護職が燃え尽きやすいのはなぜですか?",
    a: "介護職には固有の構造があります。①感情労働の二重負荷(利用者・家族・同僚への多方向の感情管理)、②共感疲労の蓄積(利用者の苦痛・孤独・喪失への継続的な共感)、③バウンダリーの喪失(利用者の問題と自分の責任の区別がつきにくくなる)、④「介護者は自己犠牲的であるべき」という文化的プレッシャー、⑤身体的疲労と感情的消耗の相乗効果(夜勤・長時間立位)。これらが重なり、他の職種より深刻になりやすい構造があります。意志や適性の問題ではありません。",
  },
  {
    q: "「好きな仕事なのに限界」と感じるのはおかしいですか?",
    a: "おかしくありません。むしろ介護職のバーンアウトの核心がそこにあります。「介護の仕事が嫌いになった」のではなく、「好きだったからこそ、誠実に関わり続けて燃え尽きた」という逆説です。いい加減に働いている人は燃え尽きません。限界を感じるのは、それだけ真剣に向き合ってきた証です。",
  },
  {
    q: "燃え尽きのサインにはどんなものがありますか?",
    a: "①以前は丁寧に関われたのに業務をこなすことが優先になる(脱人格化)、②休日に何もできず疲れが取れない、③「自分だけが頑張っている」という孤立感、④利用者の状態悪化を「自分のせい」と強く自責する、⑤「辞めたい」が止まらないのに罪悪感で動けない。これらが2週間以上続いている場合は、立ち止まるサインです。",
  },
  {
    q: "燃え尽きているのに辞められません。どうすれば?",
    a: "「利用者に申し訳ない」「人手が足りなくなる」という罪悪感から動けないのは、責任感が強い介護職に非常に多い状態です。ただ、消耗したまま働き続けると、回復に必要な時間がかえって長くなります。まず「これ以上消耗を増やさない」ことを優先し、信頼できる人・専門家に状況を整理してもらうことから始めてください。辞めるかどうかの判断は、消耗が回復してからの方が後悔が少なくなります。",
  },
];

export default function CareWorkerBurnout() {
  return (
    <ArticleLayout
      title="介護職が燃え尽きる理由とサイン｜「好きな仕事なのに限界」の構造【公認心理師】"
      description="好きで選んだ仕事なのに、もう限界かもしれない。介護職が燃え尽きる理由・現れるサイン・消耗を生む5つの構造を、公認心理師が整理します。「介護者として失格」ではなく、誠実に関わってきた結果として理解するために。"
      url="https://www.ishizue-counseling.jp/articles/care-worker-burnout"
      date="2026-03-29"
      audio="/audio/care-worker-burnout.mp3"
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
        介護職の燃え尽き（バーンアウト）とは、利用者への誠実な関わりや強い使命感を持って働き続けた結果、
        心身のエネルギーが枯渇し、仕事への意欲・感情・関心が失われていく状態のことです。
        「介護の仕事が嫌いになった」のではなく、「好きだったからこそ、燃え尽きた」という逆説が、
        介護職のバーンアウトの核心にあります。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        バーンアウト全体の構造は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>に、回復にかかる期間は<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link>にまとめています。この記事は介護職に固有の構造に焦点を当てます。
      </p>

      <p>
        現場でこんな声を聞くことがあります。
      </p>
      <div className="card space-y-2">
        <p>「利用者さんのことは好きなのに、もう施設に行きたくない」</p>
        <p>「以前は感じていた喜びが、最近まったく感じられなくなった」</p>
        <p>「自分が冷たい人間になってしまったような気がして、怖い」</p>
        <p>「身体は動いているのに、心がついてきていない感じがする」</p>
      </div>
      <p>
        これらは、介護職として誠実に向き合い続けてきた人が経験しやすい、燃え尽きのサインです。
        意志の弱さや適性のなさではなく、介護という仕事が持つ構造的な特徴から生まれるものとして
        理解することが大切です。
      </p>

      <h2>介護職の燃え尽きとは：定義と背景</h2>
      <p>
        バーンアウト（Burnout）とは、長期にわたる過負荷によって心身のエネルギーが枯渇し、
        仕事への意欲・感情・達成感が失われていく状態のことです。
        心理学者マスラックの研究では、バーンアウトは以下の3つの中核症状として整理されています。
      </p>
      <ul className="space-y-2">
        <li>情緒的消耗感：感情的なエネルギーが枯渇した状態。「もう何も感じられない」「関わる気力がない」という感覚</li>
        <li>脱人格化：利用者や仕事に対して冷淡・無関心になる状態。業務を作業的にこなしている気がするという感覚</li>
        <li>個人的達成感の低下：「自分には何もできない」という無力感・自己効力感の喪失</li>
      </ul>
      <p>
        これらは「介護者として失格」の証拠ではなく、長期的な消耗によって生じる心理的・生理的な反応です。
      </p>
      <p>
        介護職がバーンアウトしやすい背景には、固有の構造があります。
        身体的な介助を行いながら同時に利用者の感情的なニーズにも応え続けるという、
        身体と感情の両方を同時に使い続ける複合的な消耗が生じます。
        また、利用者の「現在の生活の質を支える」ことが目標であるため成果が見えにくく、
        慢性的な人員不足と過重労働という業界全体の構造的問題も重なります。
      </p>

      <h2>現場で起こること：燃え尽きが形を変えて現れる場面</h2>
      <h3>■ 「作業的になっている自分」に気づく</h3>
      <p>
        以前は利用者一人ひとりに丁寧に関わっていたのに、最近は業務をこなすことが優先になっている。
        これは冷淡になったのではなく、感情的エネルギーが枯渇したことによる脱人格化のサインです。
      </p>
      <h3>■ 休日に何もできない</h3>
      <p>
        仕事が休みの日に、やりたいことが何もできないまま一日が終わる。
        横になっていても疲れが取れない。以前は楽しめた趣味に、まったく気力が向かない。
        これは身体的な疲労と感情的な消耗が重なった状態です。
      </p>
      <h3>■ 「自分だけが頑張っている」という感覚</h3>
      <p>
        同僚に「感情移入しすぎ」と言われて、自分の関わり方が間違っているのかと混乱する。
        一方で、「自分だけが本気でやっている」という孤立感が蓄積していくことがあります。
      </p>
      <h3>■ 利用者の状態の悪化を「自分のせい」と感じる</h3>
      <p>
        利用者の体調が悪化したり、認知症の症状が進んだりするとき、
        「もっとできることがあったのでは」と強く自責する。燃え尽きが進むと、
        すべてを自分の責任として引き受けてしまいやすくなります。
      </p>
      <h3>■ 「辞めたい」が止まらないのに、動けない</h3>
      <p>
        毎日のように「辞めたい」と思うのに、「利用者に申し訳ない」「人手が足りなくなる」という
        罪悪感から、一歩を踏み出せない。燃え尽きているのに辞められないという状態が続くことで、
        消耗がさらに深まっていきます。
      </p>

      <h2>心理的背景：介護職の燃え尽きを生む構造</h2>
      <h3>■ 感情労働の二重負荷</h3>
      <p>
        介護職は、利用者へのケアという直接の感情労働と、家族・同僚・上司との関係における
        間接的な感情労働を同時に担います。「つらくても笑顔で」「怒りを感じても穏やかに」という状態を
        複数の方向に対して維持し続けることは、目に見えない消耗を生み続けます。
        仕事が終わっても、利用者のことが頭から離れない・感情の切り替えができない、という状態は、
        感情労働が「完結していない」サインです。詳しくは<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link>を参照してください。
      </p>
      <h3>■ 共感疲労（二次受傷）の蓄積</h3>
      <p>
        利用者の苦痛・孤独・喪失への共感が積み重なることで、共感疲労（二次受傷）が生じることがあります。
        共感疲労が進むと、感情が麻痺したり（何も感じなくなる）、逆に些細なことで過剰反応したりすることが
        あります。これは「心が弱くなった」のではなく、長期間にわたる共感の蓄積が生んだ反応です。
        自分の状態は<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>で確認できます。
      </p>
      <h3>■ バウンダリー（境界線）の喪失</h3>
      <p>
        長期間関わることで「この人には自分が必要だ」という感覚が強まり、利用者の問題と自分の問題の
        区別がつきにくくなることがあります。バウンダリーが失われると、利用者の体調悪化・家族の不満・
        支援の限界をすべて「自分の責任」として引き受けてしまいます。
        適切なバウンダリーを保つことは、冷たさではなく、長く誠実に関わり続けるための技術です。
        詳しくは<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線（バウンダリー）とは</Link>を参照してください。
      </p>
      <h3>■ 「介護者らしさ」という文化的プレッシャー</h3>
      <p>
        「介護者は自己犠牲的であるべき」「利用者のために自分を後回しにするのが本物の介護者だ」という
        暗黙のプレッシャーが、職場文化や社会的なイメージの中に根付いていることがあります。
        このプレッシャーが、消耗を訴えることへの抵抗を生み、燃え尽きのサインを
        「根性で乗り越えるべきもの」として処理させてしまいます。
      </p>
      <h3>■ 身体的疲労と感情的消耗の相乗効果</h3>
      <p>
        身体的な負荷（腰への負担・夜勤・長時間立位）も大きい介護職では、身体が疲弊している状態では
        感情をコントロールするための心理的リソースも低下します。身体的疲労と感情的消耗の相乗効果が、
        介護職のバーンアウトを他の職種より深刻にしやすい構造的な背景になっています。
      </p>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>感情労働の二重負荷：利用者・家族・同僚への多方向の感情管理が、目に見えない消耗を積み重ねる</li>
        <li>共感疲労の蓄積：利用者の苦痛・孤独・喪失への継続的な共感が、支援者自身を二次的に傷つける</li>
        <li>バウンダリーの喪失：利用者の問題と自分の責任の区別がつきにくくなり、すべてを抱え込んでしまう</li>
        <li>「介護者らしさ」のプレッシャー：自己犠牲を美徳とする文化が、消耗のサインを見逃させる</li>
        <li>身体的疲労との相乗効果：夜勤・長時間労働による身体の消耗が、感情的な回復力を奪う</li>
      </ul>
      <p>
        介護職として燃え尽きを感じているなら、それはあなたが誠実に、真剣に仕事と向き合ってきた証でもあります。
        消耗を「弱さ」として処理するより、まず「今の自分にはどんなサポートが必要か」を問うことが、
        回復への第一歩になるかもしれません。
      </p>
      <p>
        一人で抱え込まず、信頼できる人や専門家に話す場所を持つことが、
        長く介護の仕事を続けるための土台になります。
        回復の具体的な方法は<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link>を参照してください。
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
          介護職の燃え尽きは「構造の整理」が回復の鍵になります。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「好きな仕事なのに限界」を感じている介護職の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          燃え尽きは「弱さ」ではなく、誠実に関わってきた結果です。消耗を生む構造を、構造を理解した専門家と一緒に整理することで、長く働き続けるための回復の道筋が見えてきます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/care-worker-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

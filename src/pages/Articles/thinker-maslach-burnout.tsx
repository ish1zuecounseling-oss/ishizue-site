import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "クリスティーナ・マスラックとは、どんな人ですか?",
    a: "アメリカの社会心理学者で、カリフォルニア大学バークレー校の名誉教授です。1970年代から対人援助職の燃え尽き(バーンアウト)を研究し、1981年に同僚とともに、燃え尽きを測る代表的な尺度「マスラック・バーンアウト・インベントリー(MBI)」を開発しました。燃え尽き研究の第一人者として知られています。",
  },
  {
    q: "バーンアウトの3つの側面とは何ですか?",
    a: "マスラックらは、燃え尽きを3つの側面からとらえました。心のエネルギーが尽きてしまう「情緒的消耗感」、相手を人としてではなく物のように扱ってしまう「脱人格化(冷笑的な態度)」、仕事をやり遂げている実感が持てなくなる「個人的達成感の低下」です。WHOの国際疾病分類(ICD-11)でも、ほぼ同じ3つの側面で燃え尽きが説明されています。",
  },
  {
    q: "燃え尽きは病気ですか?",
    a: "WHOの国際疾病分類(ICD-11)では、燃え尽きは病気ではなく、「うまく管理されていない慢性的な職場のストレスから生じる、職業上の現象」として位置づけられています。ただし、燃え尽きの状態が続くと、うつ病などの心身の病気につながることがあります。眠れない、食欲がない、気分の落ち込みが2週間以上続くといった場合は、医療機関に相談してください。",
  },
  {
    q: "職場を変えられない場合、どうすればいいですか?",
    a: "職場全体をすぐに変えることは難しくても、6つの領域のうち、どこにいちばんずれがあるかを知ることには意味があります。原因がわかれば、上司に相談する内容を具体的にできたり、自分で調整できる部分を見つけられたりします。一人で抱えきれないときは、産業医や外部の相談窓口、カウンセリングを利用することもできます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerMaslachBurnout() {
  return (
    <ArticleLayout
      title="燃え尽きは、あなたの弱さではない｜マスラックのバーンアウト研究から読む、支援職と職場の「6つのずれ」【公認心理師】"
      description="燃え尽き研究の第一人者クリスティーナ・マスラックは、燃え尽きを個人の弱さではなく、人と職場のミスマッチから生じるものだと考えました。自分が弱いから燃え尽きたと責めてしまう支援職に向けて、燃え尽きの3つの側面と、仕事量・裁量・報酬・人間関係・公平さ・価値観という6つのずれを公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-maslach-burnout"
      date="2026-10-24"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ クリスティーナ・マスラック
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
        あんなに好きだった仕事なのに、朝、体が動かない。
        利用者さんの話を聞いていても、心が何も感じなくなっている。
        「自分が弱いからだ」「ストレス管理が下手だからだ」と、自分を責めてしまう——。
      </p>
      <p>
        燃え尽きを、個人の弱さの問題として片づけない。
        その視点を、半世紀にわたる研究で示し続けてきた心理学者がいます。
        <strong>クリスティーナ・マスラック</strong>です。
      </p>

      <h2>クリスティーナ・マスラックとはどんな人か</h2>
      <p>
        マスラック(1946–)は、アメリカの社会心理学者で、カリフォルニア大学バークレー校の名誉教授です。
        1970年代、看護師、ソーシャルワーカー、教師など、人を支える仕事に就く人たちへの聞き取りを重ねる中で、
        熱意を持って働いていた人が、心のエネルギーを使い果たしてしまう現象に注目しました。
      </p>
      <p>
        1981年には、同僚のスーザン・ジャクソンとともに、燃え尽きを測る尺度
        「マスラック・バーンアウト・インベントリー(MBI)」を発表します。
        この尺度は、今も世界中の燃え尽き研究で使われています。
      </p>
      <p>
        彼女には、研究者としての原点とも言える出来事があります。
        大学院を出たばかりのころ、有名な「スタンフォード監獄実験」を見学した彼女は、
        看守役の学生たちが囚人役の学生を追いつめる様子に強く抗議しました。
        実験は、その翌日に打ち切られています。
        個人の性格ではなく、<strong>置かれた状況が人を変えてしまう</strong>という視点は、その後の燃え尽き研究にも通じています。
      </p>

      <h2>燃え尽きの3つの側面</h2>
      <p>
        マスラックらは、燃え尽きを単なる「疲れ」ではなく、3つの側面からとらえました。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 情緒的消耗感</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心のエネルギーが尽きて、もう何も出てこない感覚。休んでも回復しない疲れです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 脱人格化(冷笑的な態度)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手を一人の人としてではなく、「業務」や「ケース」としてしか見られなくなる。
          これ以上傷つかないための、心の防衛でもあります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 個人的達成感の低下</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何をしても意味がない、自分は役に立っていないと感じる。仕事への自信が失われていきます。
        </p>
      </div>
      <p>
        この3つの側面は、2019年にWHOが採択した国際疾病分類(ICD-11)でも、ほぼそのまま燃え尽きの説明に使われています。
      </p>

      <h2>燃え尽きは「人と職場のずれ」から起きる</h2>
      <p>
        マスラックの研究のもっとも大切なメッセージは、
        <strong>燃え尽きの原因は、個人の弱さよりも、人と職場の間のずれ(ミスマッチ)にある</strong>ということです。
        彼女は共同研究者のマイケル・ライターとともに、ずれが生じやすい職場の6つの領域を示しました。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 leading-[2] space-y-1">
          <li><strong className="text-stone-700">仕事量</strong>:こなしきれない量の仕事を、回復する間もなく抱えている</li>
          <li><strong className="text-stone-700">裁量</strong>:自分の判断で仕事の進め方を決められない</li>
          <li><strong className="text-stone-700">報酬</strong>:給与だけでなく、感謝や評価が得られない</li>
          <li><strong className="text-stone-700">人間関係</strong>:職場の中で支え合える関係がない</li>
          <li><strong className="text-stone-700">公平さ</strong>:評価や負担の配分が不公平だと感じる</li>
          <li><strong className="text-stone-700">価値観</strong>:自分が大切にしたい支援と、職場の方針が食い違っている</li>
        </ul>
      </div>
      <p>
        マスラックらは、燃え尽きる人を「炭鉱のカナリア」にたとえています。
        カナリアが弱ったとき、問題はカナリアではなく、炭鉱の空気のほうにある。
        燃え尽きた人を直そうとするだけでは、同じことが別の誰かに起こり続けるのです。
      </p>

      <h2>支援職に置き換えると——「自分が弱いから」と思い込む</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 職場の問題を、自分の問題として抱え込む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足で仕事が回らないのに、「自分の段取りが悪い」と考えてしまう。
          支援職は、構造の問題を個人の努力で埋めようとしがちです。
          (<Link to="/articles/burnout-causes" className={linkCls}>燃え尽き症候群の原因——「性格」ではなく構造から起きる</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「価値観のずれ」が、いちばん深く効く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          本当は一人ひとりに丁寧に関わりたいのに、職場は効率と数字を求める。
          支援への思いが強い人ほど、この価値観のずれに深く傷つきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 冷たくなった自分を、さらに責める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者さんに優しくできなくなった自分に気づき、「支援職失格だ」と思う。
          けれど、それは性格が変わったのではなく、燃え尽きの一つの側面として起きていることです。
          (<Link to="/articles/compassion-fatigue-vs-burnout" className={linkCls}>共感疲労とバーンアウトの違い</Link>も参考になります)
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">原因がわかっても、職場はすぐには変わらない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの原因が職場にあるとわかっても、一人の職員が職場の仕組みを変えるのは簡単ではありません。
          それでも、原因を正しく知ることで、自分を責める気持ちを減らし、相談や調整の糸口をつかむことができます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">セルフチェックは、診断ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          MBIは研究で広く使われている尺度ですが、病気を診断するためのものではありません。
          燃え尽きの状態が長く続き、眠れない、気分の落ち込みが続くといった場合は、
          うつ病などが隠れていることもあるため、医療機関に相談してください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 6つの領域で、いちばんのずれを探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事量、裁量、報酬、人間関係、公平さ、価値観。
          それぞれに10点満点で点数をつけ、いちばん低いものを一つ選びます。そこが、あなたの消耗の中心です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「自分の問題」と「職場の問題」を分けて書く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          つらいと感じていることを書き出し、自分で変えられることと、職場の仕組みの問題とに分けます。
          職場の問題を、自分の努力不足として抱え込まないための整理です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ ずれを、具体的な言葉で一人に伝える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「しんどい」ではなく、「仕事量が回復できる範囲を超えている」のように、ずれを具体的な言葉にして、
          信頼できる上司や同僚一人に伝えてみます。
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
        <p className="font-medium text-stone-700 mb-2">この記事とつながるテーマ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/burnout-syndrome-complete" className={linkCls}>燃え尽き症候群とは——症状・原因・回復まで構造から理解する完全ガイド</Link></li>
          <li>・<Link to="/articles/burnout-causes" className={linkCls}>燃え尽き症候群の原因——「性格」ではなく構造から起きる5つの要因</Link></li>
          <li>・<Link to="/articles/helper-burnout-check" className={linkCls}>支援職バーンアウト診断(20項目)</Link></li>
          <li>・<Link to="/articles/thinker-schmidbauer-helper-syndrome" className={linkCls}>ヘルパー・シンドローム(シュミットバウアーから読む)</Link></li>
          <li>・<Link to="/articles/thinker-hochschild-feeling-rules" className={linkCls}>「笑顔も仕事のうち」が心を削る理由(ホックシールドから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">燃え尽きた自分を責めている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          弱さではなく、ずれを一緒に見てみませんか
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何があなたを消耗させているのかを、職場の構造も含めて整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/thinker-maslach-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は、Maslach, C., & Jackson, S. E. (1981). The measurement of experienced burnout. Journal of Occupational Behavior, 2, 99–113. および Maslach, C., & Leiter, M. P. の一連の研究(The Burnout Challenge, 2022 ほか)の内容を筆者が要約したもので、原文の引用は含みません。MBIの質問項目は著作権で保護されているため掲載していません。本記事は医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

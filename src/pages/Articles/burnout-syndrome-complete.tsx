import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群とは何ですか?",
    a: "燃え尽き症候群(バーンアウト)とは、長期的なストレスや過剰な要求にさらされ続けた結果、心身のエネルギーが枯渇した状態を指します。1974年にアメリカの心理学者ハーバート・フロイデンバーガーが提唱し、その後クリスティーナ・マスラックが「情緒的消耗・脱人格化・達成感の低下」の3要素モデルを確立しました。2019年にはWHOが「職業に関連する症候群」として国際疾病分類(ICD-11)に追加しました。性格や弱さではなく、構造的な問題として理解することが重要です。",
  },
  {
    q: "燃え尽き症候群とうつ病の違いは?",
    a: "燃え尽きは「職業・役割との関連が強い」のが特徴で、仕事から離れると少し楽になる傾向があります。一方、うつ病は生活全般に気分の落ち込みが及び、休日でも症状が続きます。ただし両者は重なることが多く、燃え尽きが長期化するとうつ病に発展することもあります。気になる場合は心療内科・精神科で評価を受けてください。",
  },
  {
    q: "燃え尽き症候群の症状は?",
    a: "代表的な症状は、①身体症状(慢性疲労・不眠・頭痛・胃腸の不調)、②心理症状(意欲低下・無力感・感情の鈍化・イライラ)、③行動症状(欠勤の増加・集中力低下・対人回避)です。Maslachの3要素モデルでは「情緒的消耗(エネルギー枯渇)」「脱人格化(感情の鈍化)」「達成感の低下」が中核症状とされています。",
  },
  {
    q: "燃え尽き症候群の原因は?",
    a: "「個人の弱さ」ではなく、5つの構造的要因から起きます。①職場環境(人手不足・評価・組織文化)、②役割と自己の同一化(自己複雑性の低下)、③条件付き自己価値(成果と価値の紐付け)、④他人軸・境界線の薄さ、⑤感情労働の慢性的蓄積。これらが組み合わさって構造的に消耗が生じます。",
  },
  {
    q: "どのくらいで治りますか?",
    a: "個人差はありますが、軽度なら1〜3ヶ月、中度なら3〜6ヶ月、重度なら半年〜1年以上が一般的です。重要なのは「症状の改善」と「再発しない構造の整理」を両方進めることです。詳しくは「燃え尽き症候群はどれくらいで治る?」を参照してください。",
  },
  {
    q: "何科に行けばいいですか?",
    a: "心療内科または精神科がメインです。身体症状が強い場合は心療内科、気分の落ち込みが中心なら精神科が向いています。並行してカウンセラー(公認心理師など)による構造整理、産業医による職場調整も組み合わせることで、回復が早まります。詳しくは「燃え尽き症候群は何科に行くべき?」を参照してください。",
  },
  {
    q: "「自分は燃え尽きかな?」と思ったらどうすべきですか?",
    a: "セルフチェックで状態を確認することから始めます。本記事内のチェックリスト、または「バーンアウトチェック(20項目)」を活用してください。気になる項目が複数当てはまる場合は、医療機関への相談を検討してください。「受診するほどではないかも」と感じる初期段階での相談が、最も悪化を防ぎます。",
  },
]

export default function BurnoutSyndromeComplete() {
  return (
    <ArticleLayout
      title="燃え尽き症候群とは——症状・原因・回復まで構造から理解する完全ガイド【公認心理師】"
      description="燃え尽き症候群(バーンアウト)の症状・原因・回復までを構造から理解する完全ガイド。Maslachの3要素・Edelwich&Brodskyの4段階・5つの構造的原因を統合解説。「性格ではなく構造」の視点で、自分の状態を理解し、回復への道筋を見つけるための実用書。公認心理師監修。"
      url="https://www.ishizue-counseling.jp/articles/burnout-syndrome-complete"
      date="2026-05-27"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        燃え尽き症候群を「性格の問題」「弱さ」ではなく、構造から理解するための完全ガイドです。症状・原因・回復までを学術的な根拠に基づいて整理し、自分の状態を客観的に把握できるようにします。
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
        「最近疲れが取れない」
        「以前ほどのやる気が出ない」
        「これは燃え尽き症候群なんだろうか」
        「もし燃え尽きだとしたら、どうすればいいんだろう」——
      </p>

      <p>
        こうした問いを持つ方は、決して少なくありません。
        燃え尽き症候群(バーンアウト)は、現代社会で誰にでも起こりうる状態であり、特に対人援助職・教育職・医療職などの<strong>真面目で責任感のある方</strong>に多く見られます。
      </p>

      <p>
        この記事では、燃え尽き症候群を<strong>「性格の問題」ではなく「構造の問題」</strong>として、症状・原因・回復まで統合的に解説します。
        Maslach(マスラック)の3要素モデル・Edelwich & Brodsky(エーデルウィッチ&ブロドスキー)の4段階モデルなど、学術的な根拠に基づきつつ、構造整理型カウンセリングの視点で実用的にまとめます。
      </p>

      <p>
        この1記事で、燃え尽き症候群の<strong>全体像</strong>がわかるようにしました。
        さらに詳しく知りたい部分は、それぞれの専門記事へのリンクから深掘りできます。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・燃え尽き症候群とは何か(<strong>学術的定義</strong>)</li>
          <li>・Maslachの<strong>3要素モデル</strong>(情緒的消耗・脱人格化・達成感低下)</li>
          <li>・Edelwich&Brodskyの<strong>4段階モデル</strong></li>
          <li>・症状の全体像(身体・心理・行動)</li>
          <li>・<strong>5つの構造的原因</strong></li>
          <li>・燃え尽きやすい人の特徴</li>
          <li>・うつ病・適応障害との<strong>違い</strong></li>
          <li>・回復までの流れ(期間・方法・受診)</li>
        </ul>
      </nav>

      <h2>燃え尽き症候群とは——学術的定義</h2>
      <p>
        燃え尽き症候群(バーンアウト)は、長期的なストレスや過剰な要求にさらされ続けた結果、心身のエネルギーが枯渇した状態を指します。
        1974年にアメリカの心理学者<strong>ハーバート・フロイデンバーガー(Herbert Freudenberger)</strong>が、麻薬依存者の支援に携わるボランティアの心理的消耗を観察して提唱した概念です。
      </p>

      <p>
        その後、社会心理学者<strong>クリスティーナ・マスラック(Christina Maslach)</strong>が体系的な研究を行い、現在最も広く使われている「3要素モデル」を確立しました。
      </p>

      <p>
        2019年には<strong>WHO(世界保健機関)</strong>が、国際疾病分類(ICD-11)に「<strong>職業に関連する症候群</strong>」として燃え尽き症候群を追加。医学的にも公式に認められた状態となっています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">WHOの定義(2019年)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽き症候群は「<strong>慢性的な職場のストレスがうまく管理されなかった結果として概念化された症候群</strong>」とされ、以下の3つの次元で特徴づけられます:<br />
          ① エネルギーの枯渇または疲弊感<br />
          ② 自分の仕事に対する精神的距離・否定的感情の増加<br />
          ③ 職業的効力感の低下
        </p>
      </div>

      <p>
        重要なポイントは、燃え尽きは「<strong>個人の弱さ</strong>」ではなく「<strong>慢性的なストレス環境への自然な反応</strong>」だということです。
      </p>

      <h2>Maslachの3要素モデル——燃え尽きの中核</h2>
      <p>
        マスラックは燃え尽きを<strong>3つの要素</strong>で整理しました。これらは独立した症状ではなく、相互に関連し、進行するごとに深刻化します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 情緒的消耗(Emotional Exhaustion)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの中核症状で、最も早く現れます。
          「<strong>もう何も感じる余裕がない</strong>」「<strong>仕事のことを考えるだけで疲れる</strong>」という、エネルギーが完全に枯渇した感覚。
          身体的疲労とは異なり、休んでも回復しにくいのが特徴です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 脱人格化(Depersonalization)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者・顧客・同僚への共感的な関わりが失われ、機械的・冷淡な対応になる状態。
          「<strong>相手が人ではなく対象に見える</strong>」「<strong>以前のように優しくできない</strong>」という変化が起こります。
          これは「冷たい人になった」のではなく、消耗から自分を守るための<strong>防衛反応</strong>です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 達成感の低下(Reduced Personal Accomplishment)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の仕事に意義や成果を感じられなくなる状態。
          「<strong>何のためにやっているのかわからない</strong>」「<strong>自分は役に立っていない</strong>」という無力感が深まります。
          客観的には成果を出していても、本人は感じられなくなります。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        この3要素は、通常「情緒的消耗 → 脱人格化 → 達成感の低下」の順で進行します。
        ただし、進行スピードや組み合わせは人によって異なります。
      </p>

      <h2>Edelwich & Brodskyの4段階モデル——燃え尽きの進行</h2>
      <p>
        1980年に提唱された<strong>Edelwich & Brodsky(エーデルウィッチ&ブロドスキー)の4段階モデル</strong>は、燃え尽きが時間軸でどう進行するかを示しています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">4段階の概要</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li><strong>第1段階:熱心期(Enthusiasm)</strong> — 理想に燃え、高い意欲を持つ</li>
          <li><strong>第2段階:停滞期(Stagnation)</strong> — 理想と現実のギャップに気づき始める</li>
          <li><strong>第3段階:欲求不満期(Frustration)</strong> — 葛藤・怒り・無力感が前面に出る</li>
          <li><strong>第4段階:無関心期(Apathy)</strong> — 感情の麻痺・関心の喪失</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        各段階で症状・心理状態・対処法が異なるため、「<strong>今自分はどの段階か</strong>」を理解することで、適切な対処を選べるようになります。
        詳しくは<Link to="/articles/burnout-four-stages" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の4段階</Link>を参照してください。
      </p>

      <h2>燃え尽き症候群の症状——身体・心理・行動の3軸</h2>
      <p>
        燃え尽きの症状は、<strong>身体・心理・行動</strong>の3軸に分けて整理できます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">身体症状</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・慢性的な疲労感(休んでも取れない)</li>
          <li>・不眠・睡眠の質の低下</li>
          <li>・頭痛・肩こり・腰痛</li>
          <li>・胃腸の不調(食欲不振・胃痛・下痢など)</li>
          <li>・微熱・倦怠感</li>
          <li>・身体症状の慢性化</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">心理症状</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・意欲・モチベーションの低下</li>
          <li>・無力感・絶望感</li>
          <li>・感情の鈍化(脱人格化)</li>
          <li>・イライラ・怒りやすさ</li>
          <li>・不安・焦り</li>
          <li>・自己否定が強まる</li>
          <li>・「自分らしくない」感覚</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">行動症状</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>・遅刻・欠勤の増加</li>
          <li>・集中力の低下・ミスの増加</li>
          <li>・対人回避(同僚・友人・家族との関わりを避ける)</li>
          <li>・以前楽しめた活動から離れる</li>
          <li>・過剰飲酒・過食・喫煙の増加</li>
          <li>・「義務感だけで動く」機械的な業務遂行</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらの症状が<strong>2週間以上継続している</strong>場合、燃え尽き症候群が進行している可能性があります。
        初期段階での気づきが、回復を早めます。詳しくは<Link to="/articles/burnout-early-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の初期症状・前兆</Link>を参照してください。
      </p>

      <LineCtaCompassion />

      <h2>燃え尽き症候群の原因——5つの構造的要因</h2>
      <p>
        燃え尽きの原因は「<strong>個人の性格や弱さ</strong>」ではなく、<strong>5つの構造的要因</strong>が組み合わさって起きます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 職場環境の構造</p>
          <p className="text-stone-600 leading-[1.9]">人手不足・過重労働・評価制度の歪み・「弱音を吐けない」職場文化など、職場の構造的問題。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 役割と自己の同一化(<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>の低下)</p>
          <p className="text-stone-600 leading-[1.9]">「仕事の役割」が「自分の全部」になっている状態。役割でつまずくと「自分全部の否定」と感じる。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ <Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">条件付き自己価値</Link></p>
          <p className="text-stone-600 leading-[1.9]">成果・役割と自己価値が紐づき、条件が満たされない時に自己価値が消失する。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ <Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線</Link>の薄さ</p>
          <p className="text-stone-600 leading-[1.9]">自分の判断基準が他者の評価に偏り、相手の問題まで引き受けてしまう。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">⑤ <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>の慢性的蓄積</p>
          <p className="text-stone-600 leading-[1.9]">本来の感情を抑えて、相手に合わせた感情を表現し続ける状態が、業務外でも止まらない。</p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        詳しくは<Link to="/articles/burnout-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の原因</Link>を参照してください。
      </p>

      <h2>燃え尽きやすい人の特徴</h2>
      <p>
        燃え尽きやすい人には共通する<strong>6つの特徴</strong>があります。これらは「悪い性格」ではなく、構造的に消耗を加速させるパターンです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">6つの特徴</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>完璧主義</strong>:「ほどほど」が許せず、常に100%を目指す</li>
          <li>② <strong>自己犠牲</strong>:自分のニーズを後回しにすることが習慣化している</li>
          <li>③ <strong>他者優先</strong>:相手の反応・期待を常に優先する</li>
          <li>④ <strong>弱さを見せられない</strong>:疲れている・できないを言えない</li>
          <li>⑤ <strong>休むことに罪悪感</strong>:何もしない時間が苦痛</li>
          <li>⑥ <strong>成果と自己価値の紐付け</strong>:役に立てない自分に価値を感じられない</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは社会的には「誠実」「責任感がある」「優しい」と評価される特徴です。
        だからこそ止まらず、消耗を生み続けます。
      </p>

      <h2>うつ病・適応障害との違い</h2>
      <p>
        燃え尽きと類似する状態として、うつ病・適応障害があります。区別の目安を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">燃え尽き症候群 vs うつ病</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>燃え尽き</strong>:職業・役割との関連が強い・仕事から離れると少し楽になる・「働く能力」への絶望が中心<br />
          <strong>うつ病</strong>:生活全般に影響・休日でも症状が続く・意欲や興味の全般的喪失・身体症状が顕著
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">燃え尽き症候群 vs 適応障害</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>燃え尽き</strong>:長期的な慢性ストレスから起きる・徐々に進行・「真剣に向き合った結果」<br />
          <strong>適応障害</strong>:特定のストレス要因(異動・人間関係など)への反応・原因が明確・原因から離れれば改善
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは重なることも多く、特に燃え尽きが長期化するとうつ病に発展することがあります。
        気になる場合は心療内科・精神科で評価を受けてください。
      </p>

      <h2>「自分は燃え尽き?」セルフチェック</h2>
      <p>
        以下の項目で当てはまるものを数えてみてください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">セルフチェック(10項目)</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>□ 朝起きて「仕事に行きたくない」と強く感じる</li>
          <li>□ 休日に休んでも疲れが取れない</li>
          <li>□ 以前は楽しめた仕事が、ただの義務に感じる</li>
          <li>□ 同僚・利用者・顧客への感情が動かない</li>
          <li>□ 自分のミスを過剰に責めてしまう</li>
          <li>□ 「自分は役に立っていない」と感じる</li>
          <li>□ 身体症状(頭痛・胃痛・不眠など)が続いている</li>
          <li>□ 集中力が低下し、簡単なミスが増えた</li>
          <li>□ プライベートでも気持ちが切り替わらない</li>
          <li>□ 「もう辞めたい」「逃げ出したい」が口癖になっている</li>
        </ul>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          <strong>5項目以上</strong>当てはまる場合、燃え尽き症候群が進行している可能性があります。
          <strong>8項目以上</strong>なら、すでに中度以上の段階に達している可能性があります。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        より詳細なチェックは<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link>を活用してください。
      </p>

      <h2>回復までの流れ——期間と方法</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">回復期間の目安</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>軽度</strong>(疲労感・モチベーション低下):1〜3ヶ月</li>
          <li>・<strong>中度</strong>(身体症状・脱人格化が出始める):3〜6ヶ月</li>
          <li>・<strong>重度</strong>(出勤困難・希死念慮):半年〜1年以上</li>
        </ul>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          詳しくは<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link>を参照してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">回復の3つの方向</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>医療的アプローチ</strong>:心療内科・精神科で症状の管理</li>
          <li>② <strong>心理的アプローチ</strong>:カウンセリングで構造の整理</li>
          <li>③ <strong>セルフケア</strong>:日常的な身体ケア・離れる時間の確保</li>
        </ul>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          詳しくは<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link>を参照してください。
        </p>
      </div>

      <h2>受診のタイミング——何科に行くか</h2>
      <p>
        以下の場合、医療機関への受診を検討してください。
      </p>

      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p>・身体症状(不眠・頭痛・胃痛など)が2週間以上続いている</p>
        <p>・出勤前に動悸・吐き気が出る</p>
        <p>・休んでも回復しない感覚が続いている</p>
        <p>・「もう何もしたくない」が続いている</p>
        <p>・「消えてしまいたい」感覚がある</p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        受診先は心療内科または精神科が基本。詳しくは<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link>を参照してください。
      </p>

      <h2>「治らない」と感じている方へ</h2>
      <p>
        「何ヶ月経っても回復しない」「再発を繰り返している」と感じる方は、慢性化の可能性があります。
        これは「治らない」のではなく「<strong>治っても再発する</strong>」状態であることが多く、構造の整理が必要です。
        詳しくは<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link>を参照してください。
      </p>

      <h2>復職について</h2>
      <p>
        燃え尽きから復職する際は、症状の改善だけでなく「構造の変化」が重要です。
        症状だけ良くなって元の環境に戻ると、再発のリスクが高まります。
        詳しくは<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link>を参照してください。
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

      <h2>関連する記事——詳細を深掘りする</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">燃え尽き×実用シリーズ(8部作)</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/burnout-early-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の初期症状・前兆(10サイン)</Link></li>
          <li>・<Link to="/articles/burnout-four-stages" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の4段階</Link></li>
          <li>・<Link to="/articles/burnout-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の原因(5つの構造的要因)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?(期間)</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?(受診)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法(7アプローチ)</Link></li>
          <li>・<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link></li>
          <li>・<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない(慢性化)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">対人援助職特化</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/structural-counseling-method" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">構造整理型カウンセリングとは</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分の価値がわからない(条件付き自己価値)</Link></li>
          <li>・<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性とは</Link></li>
          <li>・<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸とは</Link></li>
          <li>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線(バウンダリー)とは</Link></li>
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          燃え尽きは「症状の改善」だけでなく「構造の整理」が必要です。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「自分は燃え尽きかも」と感じている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          燃え尽きは性格ではなく構造の問題です。あなたの状態を、構造を理解した専門家と一緒に整理することで、回復への道筋が見えてきます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-syndrome-complete"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

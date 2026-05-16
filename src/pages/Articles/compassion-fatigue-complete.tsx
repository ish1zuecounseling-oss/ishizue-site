import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

const FAQ_ITEMS = [
  {
    q: "共感疲労とは何ですか？",
    a: "共感疲労（Compassion Fatigue）とは、支援者が他者の苦しみ・トラウマ・困難に継続的に共感することで生じる、心理的・感情的・身体的な消耗状態のことです。心理学者チャールズ・フィグリー（Charles Figley, 1995）が提唱した概念で、二次受傷（Secondary Traumatic Stress）とも呼ばれます。看護師・介護士・社会福祉士・心理士など、対人援助職に起こりやすい状態です。",
  },
  {
    q: "共感疲労は病気ですか？",
    a: "共感疲労はDSM-5やICD-11の正式な医学的診断名ではありません。ただし、その状態が深刻な場合、医療機関では「適応障害」「うつ病」「PTSD」などとして診断されることがあります。診断名がつかないからといって「気のせい」ではなく、心理学的に確立された消耗状態です。",
  },
  {
    q: "バーンアウトとの違いは何ですか？",
    a: "共感疲労は「他者のトラウマへの共感」が主な原因で、侵入症状・回避・過覚醒が特徴です。バーンアウトは「長期的な職業上の過負荷」が主な原因で、情緒的消耗感・脱人格化・達成感の低下が中核症状です。両者は重なり合って現れることが多く、共感疲労が長期化するとバーンアウトに移行することもあります。",
  },
  {
    q: "共感疲労は自然に治りますか？",
    a: "軽度であれば休息と環境調整で回復することもあります。ただし中程度以上の場合、放置するほど回復に時間がかかる傾向があります。「ただ休む」だけでは不十分で、消耗の構造を理解したうえで取り組むことが回復を早めます。適切な対処をすれば回復は可能です。",
  },
  {
    q: "共感疲労は何科に相談すればいいですか？",
    a: "日常生活は送れている段階ならカウンセリング、不眠や身体症状が強い場合は心療内科、休職・診断書が必要な場合は精神科または心療内科が適しています。希死念慮がある場合は医療機関を優先してください。共感疲労の構造を理解しているカウンセラーであれば、医療機関と並行して相談することも可能です。",
  },
  {
    q: "共感疲労は甘えですか？",
    a: "甘えではありません。共感疲労は、支援構造上起きやすい心理的消耗として心理学的に認められています。真面目に利用者と向き合い、共感する力が高い人ほど起きやすい傾向があります。意志や根性の問題ではなく、仕事の構造の問題です。",
  },
  {
    q: "看護師や介護士で共感疲労になる人は多いですか？",
    a: "多いです。看護師・介護士・相談支援専門員・社会福祉士・心理士・保育士・教師など、他者の感情やトラウマに継続的に関わる職種で特に発生しやすいことが研究で示されています。日本国内でも、看護職・介護職を対象とした共感疲労の研究は多数あります。",
  },
  {
    q: "共感疲労はどうやって治しますか？",
    a: "「休息の種類を分ける（身体・感情・精神・感覚）」「話せる場所を持つ」「バウンダリーを意識する」「神経系を整える」「セルフコンパッションを育てる」など、複数の角度からの対処が必要です。一人でのセルフケアで限界を感じる場合、カウンセリングや専門家への相談が回復を早めます。",
  },
  {
    q: "共感疲労と二次受傷は同じですか？",
    a: "ほぼ同じ意味で使われることが多いですが、厳密には少し違います。二次受傷（Secondary Traumatic Stress）は、他者のトラウマ体験を聴くことで支援者にPTSDに類似した症状が現れる現象を指します。共感疲労はより広く、二次受傷を含む心理的消耗全般を指す概念として使われます。",
  },
]

export default function CompassionFatiguePillar() {
  return (
    <ArticleLayout
      title="共感疲労とは｜症状・原因・診断・治し方を公認心理師が解説【支援職15年の臨床経験】"
      description="共感疲労（Compassion Fatigue）とは、他者の苦しみに継続的に共感することで生じる心理的・身体的消耗です。症状・原因・バーンアウトとの違い・診断・治し方・何科に相談すべきかまで、公認心理師が支援職向けに総合解説します。"
      url="https://www.ishizue-counseling.jp/articles/compassion-fatigue-complete"
      date="2026-04-29"
      tags={["compassion", "burnout", "boundary"]}
      faq={FAQ_ITEMS}
    >
      {/* ▼ 打ち手C-5：監修者・臨床経験を視覚的に明示（E-E-A-T強化） */}
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

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「共感疲労という言葉は聞いたことがあるが、自分がそうなのかわからない」——そんな方のために、一つの記事で全体像を整理します。
      </p>

      <p>
        <strong>共感疲労（Compassion Fatigue）とは、支援者が他者の苦しみ・トラウマ・困難に継続的に共感することで生じる、心理的・身体的・感情的な消耗状態のことです。</strong>
        心理学者チャールズ・フィグリー（Charles Figley, 1995）が提唱した概念で、二次受傷（Secondary Traumatic Stress）とも呼ばれます。
      </p>
      <p>
        共感疲労は「向いていない」から起きるのではなく、むしろ真剣に関わろうとする人ほど起きやすい消耗です。
        意志の弱さや性格の問題ではありません。
      </p>
      <p>
        看護師・介護士・相談支援専門員・ケースワーカー・保育士・教師・心理士など、
        他者の苦しみに継続的に関わる仕事をしている人に起こりやすい状態です。
        この記事では、症状・原因・診断・治し方・回復・相談先まで、一つの記事で総合的に解説します。
      </p>

      {/* ▼ 打ち手B-2：ピラー記事としての位置づけを明示 */}
      <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-stone-50 to-white border border-stone-200">
        <p className="text-[11px] text-stone-500 mb-2 tracking-wide">この記事について</p>
        <p className="text-xs text-stone-600 leading-relaxed">
          本記事は「共感疲労」に関する<strong className="text-stone-800">総合解説（ピラー記事）</strong>です。
          症状・原因・診断・治し方の全体像を一つにまとめています。
          特定のテーマを深く知りたい方は、各セクションから関連記事へお進みください。
        </p>
      </div>

      <div className="card">
        <p className="text-xs font-medium text-[#8FAF9F] mb-2">この記事でわかること</p>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li>・共感疲労とは何か（定義・背景）</li>
          <li>・どんな症状が出るか</li>
          <li>・なぜ支援職がなりやすいのか</li>
          <li>・バーンアウト・うつ・二次受傷との違い</li>
          <li>・診断と専門家への相談のタイミング</li>
          <li>・治し方と回復の進め方</li>
          <li>・看護師・介護士など職種別のポイント</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 my-4">
        <p className="text-xs font-medium text-stone-600 mb-2">この記事の目次</p>
        <ol className="text-sm text-stone-500 space-y-1 list-none">
          <li><a href="#what" className="hover:text-stone-800 transition-colors">1. 共感疲労とは何か</a></li>
          <li><a href="#check" className="hover:text-stone-800 transition-colors">2. 共感疲労セルフチェック（3問・30秒）</a></li>
          <li><a href="#symptoms" className="hover:text-stone-800 transition-colors">3. 症状</a></li>
          <li><a href="#causes" className="hover:text-stone-800 transition-colors">4. 原因——なぜ支援職がなりやすいのか</a></li>
          <li><a href="#difference" className="hover:text-stone-800 transition-colors">5. バーンアウト・うつ・二次受傷との違い</a></li>
          <li><a href="#by-job" className="hover:text-stone-800 transition-colors">6. 職種別の共感疲労（看護師・介護士・心理士）</a></li>
          <li><a href="#diagnosis" className="hover:text-stone-800 transition-colors">7. 診断について</a></li>
          <li><a href="#coping" className="hover:text-stone-800 transition-colors">8. 治し方・対処法</a></li>
          <li><a href="#recovery" className="hover:text-stone-800 transition-colors">9. 回復について</a></li>
          <li><a href="#where" className="hover:text-stone-800 transition-colors">10. どこに相談すればいいか</a></li>
          <li><a href="#faq" className="hover:text-stone-800 transition-colors">11. よくある質問</a></li>
        </ol>
      </div>

      <h2 id="what">共感疲労とは何か</h2>
      <p>
        共感疲労（Compassion Fatigue）とは、支援者が他者の苦しみ・トラウマ・困難に継続的に共感することで生じる、
        心理的・感情的・身体的な消耗状態のことです。
        二次受傷（Secondary Traumatic Stress）とも呼ばれ、自分が直接体験したわけではなく、
        <strong>他者の苦しみへの共感を通じて生じる傷つき</strong>という点が特徴です。
      </p>
      <p>
        心理学者チャールズ・フィグリー（Charles Figley）は1995年に共感疲労を
        「他者の外傷的な体験への共感的な関与から生じる、自然な・予測可能な・治療可能な・そして予防可能な反応」
        と定義しました。つまり、<strong>共感疲労はなるべくしてなる状態であり、適切な対処で回復できる</strong>ものです。
      </p>
      <p>
        神経科学的に見ると、他者の苦痛に共感するとき、脳内では自分が苦痛を感じているときと類似した反応が起きます。
        支援職が感じる「休んでも回復しない」消耗の背景には、この神経系レベルの疲弊があります。
      </p>

      <h2 id="jobs">共感疲労になりやすい職種</h2>
      <p>共感疲労は、以下の職種で特に起きやすいとされています。</p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 columns-2">
          <li>・看護師・准看護師</li>
          <li>・介護福祉士・ホームヘルパー</li>
          <li>・相談支援専門員</li>
          <li>・社会福祉士・ケースワーカー</li>
          <li>・心理士・公認心理師</li>
          <li>・保育士・幼稚園教諭</li>
          <li>・小中高教師・養護教諭</li>
          <li>・スクールカウンセラー</li>
          <li>・救急救命士・消防士</li>
          <li>・医師・医療ソーシャルワーカー</li>
        </ul>
        <p className="text-xs text-stone-400 mt-3">共通するのは「他者の感情・苦痛・トラウマに継続的に関わる」という構造です。</p>
      </div>

      {/* ▼ 打ち手C-1：セルフチェック埋め込み（ProQOL参照） */}
      <h2 id="check">共感疲労セルフチェック（3問・30秒）</h2>
      <p>
        まず簡易チェックで現在の状態を確認します。下記3項目のうち「あてはまる」と感じる項目を数えてください。
      </p>
      <div className="my-5 rounded-2xl border border-stone-200 overflow-hidden">
        <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-100">
          <p className="text-[11px] text-stone-500 tracking-wider">簡易セルフチェック（Stamm, 2010 ProQOL を参照）</p>
        </div>
        <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-2 bg-white">
          <p>□ 仕事を離れた後も、利用者・患者・相談者のことが頭から離れない</p>
          <p>□ 以前感じていたやりがいや喜びが、薄れてきている</p>
          <p>□ 休んでも疲れが回復しない、または特定のケース・話題を避けたい気持ちがある</p>
        </div>
        <div className="px-4 py-3 bg-stone-50/60 border-t border-stone-100 text-xs text-stone-600 leading-relaxed">
          <p><strong className="text-stone-800">1つでも該当：</strong>共感疲労の入口にいる可能性があります</p>
          <p><strong className="text-stone-800">2つ以上該当：</strong>20項目の詳細チェックで確認することをおすすめします</p>
        </div>
      </div>
      <p className="text-sm text-stone-500">
        20項目の詳細チェックはこちら→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <h2 id="symptoms">共感疲労の症状</h2>
      <p>共感疲労は、以下のような形で現れることがあります。</p>

      <div className="card space-y-4">
        <div>
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">感情・思考の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・仕事後も利用者のことが頭から離れない（侵入症状）</li>
            <li>・以前感じていたやりがいや喜びが薄れた</li>
            <li>・感情が麻痺している、または些細なことで崩れやすい</li>
            <li>・「自分のせいだ」という思考が止まらない</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">身体・行動の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・休んでも疲れが回復しない</li>
            <li>・睡眠障害・頭痛・胃腸の不調</li>
            <li>・特定のケースや話題を避けたくなる（回避症状）</li>
            <li>・仕事へのモチベーションが低下した</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">深刻な段階のサイン</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・常に緊張しているような感覚（過覚醒）</li>
            <li>・「人を信じることが難しくなった」という感覚</li>
            <li>・世界の見え方が以前と変わった</li>
          </ul>
          <p className="text-xs text-stone-400 mt-2">※ PTSDに似た反応が、支援者側にも起きることがあります。これを二次受傷（Secondary Traumatic Stress）と呼びます。</p>
        </div>
      </div>

      <h2 id="causes">なぜ支援職がなりやすいのか：7つの原因</h2>
      <p>
        共感疲労は意志の弱さや適性不足が原因ではありません。
        支援職という仕事の構造そのものに、消耗を生み出す要因があります。
      </p>

      {[
        { title: "① 感情労働の継続的な負荷", desc: "怒りを抑えながら笑顔を作る、悲しみを押し込めながら寄り添う——感情を「仕事の道具」として使い続ける感情労働は、目に見えない消耗を積み重ねます。" },
        { title: "② 他者の苦しみを「自分ごと」として引き受ける構造", desc: "「相手の立場になって考える」ことが求められる支援職では、利用者の痛みを自分の中に引き受けやすくなります。" },
        { title: "③ バウンダリー（境界線）の曖昧さ", desc: "「どこまで関わるか」の境界が曖昧になりやすい職場環境が、利用者の問題を「自分の問題」として抱え込む消耗を生み出します。" },
        { title: "④ 「助ける側が助けを求めてはいけない」という規範", desc: "支援者が弱音を言うべきではないという職場文化が、消耗のサインに気づくことを妨げます。" },
        { title: "⑤ やりがいが消耗を隠す", desc: "「利用者の役に立てた」という充足感が、疲れの自覚を遅らせます。気づいたときには深く消耗しているというパターンが多い。" },
        { title: "⑥ 二次受傷の蓄積", desc: "虐待・暴力・死など深刻な体験に継続的に関わることで、支援者自身がその体験の影響を受けることがあります。" },
        { title: "⑦ 組織・環境の構造的な問題", desc: "人手不足・過重な業務量・スーパービジョンの不足など、個人の努力だけでは変えにくい環境要因が消耗を深めます。" },
      ].map(({ title, desc }) => (
        <div key={title} className="card">
          <p className="text-sm font-medium text-stone-700 mb-1">{title}</p>
          <p className="text-sm text-stone-600 leading-[1.9]">{desc}</p>
        </div>
      ))}

      <p className="text-sm text-stone-500">
        原因を詳しく知りたい方→ <Link to="/articles/compassion-fatigue-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労の原因7つ</Link>
      </p>

      {/* ▼ 打ち手C-2：競合に薄い「3者の違い」を明確化 */}
      <h2 id="difference">バーンアウト・うつ・二次受傷との違い</h2>
      <p>
        共感疲労は、関連する概念と混同されやすいですが、それぞれ原因と特徴が異なります。
        違いを理解することで、自分の状態に合った対処を選びやすくなります。
      </p>
      <div className="card">
        <div className="space-y-4 text-sm">
          {[
            { term: "共感疲労", desc: "他者のトラウマへの共感が主因。侵入症状・回避・過覚醒が特徴的。仕事を離れると少し楽になることが多い。" },
            { term: "二次受傷", desc: "他者のトラウマ体験を聴くことでPTSD様の症状が現れる現象。共感疲労に含まれるが、よりトラウマ反応に近い狭義の概念。" },
            { term: "バーンアウト", desc: "長期的な職業上の過負荷が主因。情緒的消耗感・脱人格化・達成感の低下が中核症状。職種を問わず起きうる。" },
            { term: "うつ病・適応障害", desc: "生活全般にわたる気分・意欲・機能の低下が特徴。医学的な診断・治療が必要な状態。休日でも回復しにくい。" },
          ].map(({ term, desc }) => (
            <div key={term} className="flex gap-3">
              <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-24 pt-0.5">{term}</span>
              <p className="text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          ※これらは明確に区別できないことが多く、重なり合って現れることが一般的です。共感疲労が長期化するとバーンアウトに移行することもあります。
        </p>
      </div>

      {/* ▼ 打ち手C-3：派生クエリ「共感疲労 看護師」「共感疲労 介護」を内部回答 */}
      <h2 id="by-job">職種別の共感疲労（看護師・介護士・心理士）</h2>
      <p>
        共感疲労は職種によって現れ方が異なります。代表的な3職種について、特徴と注意点を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">看護師の共感疲労</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          看護師は、患者の死・苦痛・家族の悲嘆に継続的に関わる職種です。とくに緩和ケア・救急・ICU・小児科で共感疲労の発生率が高いことが研究で示されています。「患者の前で泣けない」「夜勤明けでも患者のことが頭を離れない」「家族への対応で消耗する」といった訴えが多く、看護師特有の侵入症状として現れます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">介護士・介護福祉士の共感疲労</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護職は、認知症の方の不穏・看取り・家族との関係調整など、長期的な関わりの中で蓄積される共感疲労が特徴です。「腹が立つことがあっても感情を抑えなければならない」感情労働の負荷が大きく、「このままだと虐待してしまうのではないか」という不安を抱える方も少なくありません。これは個人の問題ではなく、構造的な消耗のサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">心理士・公認心理師の共感疲労</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心理士は、クライエントのトラウマや深い苦悩を継続的に聴く職業特性から、二次受傷を伴う共感疲労が起きやすい職種です。スーパービジョンを受けていない場合、リスクはさらに高まります。「セッション後に消耗が抜けない」「他のクライエントの話を聴くのがつらい」と感じたら、共感疲労の段階に入っているサインかもしれません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">相談支援専門員・社会福祉士の共感疲労</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相談支援専門員・社会福祉士は、利用者の生活全般・家族関係・経済問題まで関わる職種特性から、「ケースを抱え込んでしまう」共感疲労が特徴です。バウンダリーが曖昧になりやすく、「休みの日も利用者のことが気になる」「対応できなかったケースの自責が止まらない」といった訴えが多くあります。
        </p>
      </div>

      <h2 id="diagnosis">診断について</h2>
      <p>
        共感疲労はDSM-5やICD-11の正式な診断名ではありません。
        医療機関を受診した場合、「適応障害」「抑うつ状態」「PTSD」などとして診断されることがあります。
      </p>
      <p>
        「共感疲労かどうか」を確定させることより、「今の自分の状態はどうか」を理解することが先決です。
      </p>
      <p className="text-sm text-stone-500">
        診断について詳しく→ <Link to="/articles/compassion-fatigue-diagnosis" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労の診断——状態を理解するための視点</Link>
      </p>

      <h2 id="coping">共感疲労の治し方：7つの視点</h2>
      <p>共感疲労への対処は、段階に合わせて取り組むことが重要です。</p>

      {[
        { num: "①", title: "消耗を認める", desc: "「まだ大丈夫」を手放すことが回復の出発点。消耗を認識することが自己ケアへの入り口になります。" },
        { num: "②", title: "休息の「種類」を意識する", desc: "身体的休息だけでなく、感情的休息・精神的休息・感覚的休息が必要です。「休んでも回復しない」場合、どの種類が不足しているか確認を。" },
        { num: "③", title: "「話せる場所」を持つ", desc: "自分の消耗を安全に言語化できる場所が、孤立した消耗から回復する助けになります。" },
        { num: "④", title: "バウンダリーを意識的に引く", desc: "「今日の支援は終わった」という心理的な区切りを意識的に持つことが予防につながります。" },
        { num: "⑤", title: "神経系を整える小さな習慣", desc: "腹式呼吸・入浴・自然の中での散歩など、神経系を「安全モード」に戻す活動を日常に取り入れる。" },
        { num: "⑥", title: "セルフコンパッションを育てる", desc: "消耗している自分を責めるより、「よく続けてきた」と自分に向けて言葉をかけることが回復の土台になります。" },
        { num: "⑦", title: "限界を感じたら専門家に相談する", desc: "一人でのセルフケアで限界を感じる場合、カウンセリングや専門家への相談が回復を早めます。" },
      ].map(({ num, title, desc }) => (
        <div key={num} className="card">
          <p className="text-sm font-medium text-stone-700 mb-1">{num} {title}</p>
          <p className="text-sm text-stone-600 leading-[1.9]">{desc}</p>
        </div>
      ))}

      <p className="text-sm text-stone-500">
        対処法を詳しく→ <Link to="/articles/compassion-fatigue-coping" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労の対処法7つ</Link>
      </p>

      <h2 id="recovery">回復について</h2>
      <p>
        共感疲労は適切な休息・環境調整・心理的サポートによって、徐々に回復していくケースは少なくありません。
        ただし「ただ休む」だけでは不十分で、消耗の構造を理解したうえで取り組むことが重要です。
        支援現場では、早めに気づいて対処した方ほど回復が早い傾向があります。
      </p>
      <p className="text-sm text-stone-500">
        回復について詳しく→ <Link to="/articles/compassion-fatigue-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労からの回復方法</Link> ／ <Link to="/articles/compassion-fatigue-natural-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自然に治るのか</Link>
      </p>

      <h2 id="where">どこに相談すればいいか</h2>
      <div className="card">
        <ul className="text-sm text-stone-700 space-y-2">
          <li>・日常生活は送れている → <strong>カウンセリング</strong></li>
          <li>・不眠や身体症状が強い → <strong>心療内科</strong></li>
          <li>・休職・診断書が必要 → <strong>精神科／心療内科</strong></li>
          <li>・希死念慮がある → <strong>医療機関を優先</strong></li>
        </ul>
      </div>
      <p className="text-sm text-stone-500">
        詳しく→ <Link to="/articles/compassion-fatigue-medical-support" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労は何科に相談すべきか</Link>
      </p>

      <h2 id="faq">よくある質問</h2>
      <div className="space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <details key={i} className="rounded-xl border border-stone-200 overflow-hidden">
            <summary className="px-4 py-3 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50">{item.q}</summary>
            <div className="px-4 pb-4 pt-2 text-sm text-stone-600 leading-[1.9]">{item.a}</div>
          </details>
        ))}
      </div>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>共感疲労は支援職に起きやすい消耗状態であり、適切な対処で回復できる</li>
        <li>意志の弱さや適性不足ではなく、支援職という仕事の構造が原因</li>
        <li>バーンアウト・うつ・二次受傷と重なり合うことが多く、早期の気づきが重要</li>
        <li>「ただ休む」だけでは不十分。消耗の構造を理解した対処が必要</li>
        <li>看護師・介護士・心理士など、職種によって現れ方が異なる</li>
        <li>一人で限界を感じたら、カウンセリングや医療機関への相談を活用する</li>
      </ul>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「相談していいレベルかわからない」という段階からでも大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">消耗の構造を一緒に整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜこんなに疲れているのかわからない」「このまま続けていいのか迷っている」——
          その状態を言語化することが、回復の入口になります。
          支援職として働く中での消耗を前提にした相談を行っています。
        </p>
        <a
          href="/#contact"
          className="block text-center py-2.5 rounded-xl text-sm font-medium text-white"
          style={{ background: "#7EB8A4", textDecoration: "none" }}
        >
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      {/* 内部リンク */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">共感疲労クラスター——テーマ別に読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労チェック（20項目・3分）
          </Link>
          <Link to="/articles/compassion-fatigue-causes" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 原因7つ——なぜ支援職がなりやすいのか
          </Link>
          <Link to="/articles/compassion-fatigue-coping" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 対処法7つ——今日からできるケア
          </Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 回復方法——長期的な回復プロセス
          </Link>
          <Link to="/articles/compassion-fatigue-diagnosis" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 診断——状態を理解するための視点
          </Link>
          <Link to="/articles/compassion-fatigue-medical-support" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 何科に相談すべきか
          </Link>
          <Link to="/articles/compassion-fatigue-natural-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 自然に治るのか——回復期間と放置のリスク
          </Link>
          <Link to="/articles/compassion-fatigue-next-step" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → チェックで当てはまったら——次にすること
          </Link>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-100">
        <p className="text-sm text-stone-600 leading-relaxed mb-2">
          「なぜこんなに疲れるのか」を構造から整理すると、感情労働の見え方が変わってきます。
        </p>
        <a href="/articles/emotional-labor-what-pillar"
          className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
          → 感情労働とは？仕事で消耗する構造と回復の考え方
        </a>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100 leading-relaxed">
        参考文献：<br />
        ・Figley, C. R. (1995). <em>Compassion fatigue: Coping with secondary traumatic stress disorder in those who treat the traumatized.</em> Brunner/Mazel.<br />
        ・Stamm, B. H. (2010). <em>The Concise ProQOL Manual</em> (2nd Ed.). ProQOL.org.<br />
        ・Joinson, C. (1992). Coping with compassion fatigue. <em>Nursing</em>, 22(4), 116–121.<br />
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>

    </ArticleLayout>
  )
}

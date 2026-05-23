import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群は何科に行けばいいですか?",
    a: "基本は「心療内科」または「精神科」が適切です。身体症状(不眠・頭痛・動悸・胃痛など)が中心の場合は心療内科、強い気分の落ち込みや希死念慮がある場合は精神科が向いています。どちらか迷う場合は、まず心療内科を訪れて相談するのが現実的です。多くの場合、両方を扱える医療機関もあります。",
  },
  {
    q: "心療内科と精神科の違いは何ですか?",
    a: "心療内科は「ストレスからくる身体症状」を主に扱い、精神科は「心の症状」を主に扱います。ただし日本では両者の境界は曖昧で、同じ医療機関が両方を看板に掲げていることも多いです。「身体症状もあるが、気持ちの問題」というケースは、どちらでも対応可能です。",
  },
  {
    q: "「受診するほどでもないかも」と思っていますが、受診すべきですか?",
    a: "「受診するほどでもないかも」と思える段階での受診が、最も悪化を防ぎます。心身の症状が2週間以上続いている場合や、日常生活への支障を感じる場合は、早めの受診をおすすめします。受診=重症ではなく、早めの相談が重症化を防ぐ手段です。",
  },
  {
    q: "受診したら「うつ病」と診断されますか?",
    a: "必ずしもうつ病と診断されるわけではありません。燃え尽きの状態は、適応障害・抑うつ状態・自律神経失調症など、症状の組み合わせによって異なる診断名がつくことがあります。「バーンアウト」自体は日本では正式な診断名ではなく、症状に応じて他の診断名がつくのが一般的です。診断名にこだわるより、症状の改善のために必要な治療を受けることが重要です。",
  },
  {
    q: "受診すると会社に知られますか?",
    a: "本人の同意なしに医療機関から会社に情報が伝わることはありません。診察内容は守秘義務によって守られます。ただし、診断書を会社に提出する場合は、診断名や休職期間などが会社に知られます。心配な場合は「会社に知られたくない」と医師に伝えれば、書き方を相談できます。",
  },
  {
    q: "予約はすぐ取れますか?",
    a: "心療内科・精神科の初診予約は、一般的に1〜4週間先になることが多いです。人気のクリニックでは1〜3ヶ月待ちのことも珍しくありません。「受診するか迷う」段階でも、まず予約だけ取っておくことをおすすめします。予約日までに状態が変わったら、キャンセルすることもできます。",
  },
  {
    q: "受診とカウンセリングは何が違いますか?",
    a: "受診(医療機関)は医学的な診断・服薬・診断書発行が主な役割で、健康保険が使えます。カウンセリングは心理的な対話・整理が主で、医療行為ではなく自費が一般的です。両者は対立するものではなく、併用することで効果が高まることが多いです。「医療的ケア」と「心理的整理」の両方が回復には重要です。",
  },
]

export default function BurnoutWhichClinic() {
  return (
    <ArticleLayout
      title="燃え尽き症候群は何科に行くべき?——心療内科・精神科の使い分けと受診のタイミング【公認心理師】"
      description="バーンアウト(燃え尽き症候群)で受診を検討している方へ。心療内科と精神科の違い・使い分け・受診のタイミング・伝えるべきこと・診断書について公認心理師が解説します。「受診するほどでもない」と感じる段階こそ受診の好機です。"
      url="https://www.ishizue-counseling.jp/articles/burnout-which-clinic"
      date="2026-05-22"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「受診すべきか迷っている」その段階こそ、受診の好機です。心療内科と精神科の違い・受診のタイミング・伝えるべきことを実用的に整理します。
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
        「もう限界かもしれない」「身体がだるい」「眠れない」「仕事に行きたくない」——
        こうした症状が続いていて、医療機関への受診を検討している方は少なくないはずです。
      </p>

      <p>
        しかし「<strong>何科に行けばいいのか</strong>」「<strong>受診するほどでもないかもしれない</strong>」「<strong>診断書を出されたらどうしよう</strong>」と、踏み出せずにいる方も多いです。
        この記事では、燃え尽き症候群(バーンアウト)で受診を検討している方に向けて、実用的な情報を整理します。
      </p>

      <p>
        <strong>結論からお伝えすると、心療内科または精神科が適切です。</strong>
        どちらか迷う場合は、まず心療内科を訪れることをおすすめします。
        以下で詳しく解説します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への即時受診をご検討ください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・燃え尽き症候群は<strong>心療内科・精神科</strong>のどちらか</li>
          <li>・心療内科と精神科の<strong>使い分け</strong>(明確な比較表)</li>
          <li>・受診を検討する<strong>5つのタイミング</strong></li>
          <li>・受診時に<strong>伝えるべきこと</strong>(チェックリスト)</li>
          <li>・診断書・休職診断書について</li>
          <li>・受診とカウンセリングの<strong>違い・併用</strong>の考え方</li>
          <li>・「予約だけ取る」という選択肢</li>
        </ul>
      </nav>

      <h2>結論——燃え尽きは「心療内科」または「精神科」が基本</h2>
      <p>
        燃え尽き症候群(バーンアウト)で受診する場合、基本は<strong>「心療内科」または「精神科」</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">こんなときはこの科</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>・<strong>身体症状が中心</strong>(不眠・頭痛・動悸・胃痛・吐き気など) → 心療内科</li>
          <li>・<strong>気分の落ち込みが強い</strong>(抑うつ・意欲低下・希死念慮) → 精神科</li>
          <li>・<strong>身体症状も気分の問題もある</strong> → どちらでも可(まず心療内科がおすすめ)</li>
          <li>・<strong>パニック発作・強い不安</strong> → 精神科</li>
          <li>・<strong>どちらか迷う</strong> → まず心療内科</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        日本では、心療内科と精神科の境界は曖昧で、<strong>同じクリニックが両方を扱う</strong>ことも多いです。
        「精神科は重そうで行きづらい」と感じる方は、心療内科の方が心理的ハードルが低いと感じることが多いようです。
      </p>

      <h2>心療内科と精神科の違い——明確な使い分け表</h2>
      <p>
        本来、心療内科と精神科には明確な専門分野の違いがあります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">心療内科</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>「ストレスからくる身体症状」</strong>を主に扱う科です。胃潰瘍・過敏性腸症候群・緊張型頭痛・自律神経失調症・心身症など、ストレスが身体に出ている状態を治療します。「心」よりも「体の症状」が前面に出ている方に向いています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">精神科</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>「心の症状」</strong>を主に扱う科です。うつ病・適応障害・不安障害・パニック障害・統合失調症・睡眠障害など、心理的な症状全般を治療します。気分の落ち込み・希死念慮・強い不安が前面に出ている方に向いています。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">実際の使い分け(日本での実情)</p>
          <p className="text-stone-600 leading-[1.9]">
            ただし日本では、両者の境界は曖昧です。<strong>「心療内科・精神科」と両方を看板に掲げているクリニック</strong>が多く、扱う症状も重なります。「精神科」と聞くと敷居が高く感じる方も多いため、心療内科を入口にする方が現実的なケースが多いです。
          </p>
        </div>
      </div>

      <p>
        燃え尽き症候群は、<strong>身体症状と心の症状の両方が出る</strong>ことが多いです。
        そのため、どちらでも対応可能なケースが大半です。
        近所のクリニックや、予約が取りやすいクリニックから選ぶのが現実的です。
      </p>

      <h2>受診を検討する5つのタイミング</h2>
      <p>
        以下のいずれかに当てはまる場合、受診を検討してください。
        「受診するほどでもないかも」と思える段階での受診が、最も悪化を防ぎます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 身体症状が2週間以上続いている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          不眠・頭痛・動悸・胃痛・吐き気・倦怠感などの身体症状が2週間以上続いている場合、医療的な評価が必要な段階です。「気のせい」「疲れているだけ」と放置せず、まず受診を。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 朝の起床がつらく、出勤が困難</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          朝、起き上がれない・着替えるのもつらい・出勤前に動悸や吐き気が出る——これらは燃え尽きが進行しているサインです。「気合いで何とかしよう」とせず、受診を検討してください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 休日でも体調が回復しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休日にしっかり休んだはずなのに、月曜日には疲れが残っている状態が続いている場合、通常の休養では回復できない段階に来ている可能性があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 睡眠・食欲に明らかな変化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「眠れない」「途中で目が覚める」「過眠」「食欲がない」「過食」など、睡眠と食欲は心身の状態を反映しやすい指標です。明らかな変化があれば、医療的な評価が役立ちます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「消えてしまいたい」感覚がある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「消えてしまいたい」「いなくなりたい」「もう全部やめたい」という感覚が頻繁に出ている場合、<strong>緊急性の高いサイン</strong>です。即時に精神科または心療内科を受診してください。よりそいホットライン(0120-279-338・24時間無料)も併用できます。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>受診時に伝えるべきこと——チェックリスト</h2>
      <p>
        初診時、限られた時間で正確に状態を伝えることが、適切な診断と治療につながります。
        以下を事前に整理しておくと、伝え漏れを防げます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">伝えるべきこと(7項目)</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>主な症状</strong>(身体症状・心理症状)</li>
          <li>② <strong>症状が始まった時期</strong>(いつから・きっかけ)</li>
          <li>③ <strong>症状の頻度・強さ</strong>(毎日・週に数回など)</li>
          <li>④ <strong>日常生活への影響</strong>(出勤できない・家事ができない等)</li>
          <li>⑤ <strong>仕事の状況</strong>(職種・業務量・人間関係)</li>
          <li>⑥ <strong>既往歴・服薬中の薬</strong>(あれば)</li>
          <li>⑦ <strong>何を望んでいるか</strong>(休職・服薬・診断書・カウンセリング紹介など)</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        メモを持参するのが現実的です。緊張で話せない、と感じる方も多いので、「これを読んでください」と医師に渡すこともできます。
      </p>

      <h2>診断書・休職診断書について</h2>
      <p>
        燃え尽きの状態で休職が必要な場合、医師が「休職診断書」を発行します。
        診断書の取り扱いには、いくつかの実用的なポイントがあります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">診断書には何が書かれるか</p>
          <p className="text-stone-600 leading-[1.9]">基本的に、診断名・休職の必要性・休職期間(目安)・症状の概要が記載されます。詳細な症状や個人的な事情は記載されません。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">診断名は何になることが多いか</p>
          <p className="text-stone-600 leading-[1.9]">「バーンアウト」は日本では正式な診断名ではないため、症状に応じて<strong>適応障害・抑うつ状態・自律神経失調症</strong>などの診断名がつくことが多いです。これは「うつ病」とは異なります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">休職期間はどのくらいで書かれるか</p>
          <p className="text-stone-600 leading-[1.9]">初回は1〜3ヶ月で書かれることが多く、状態に応じて延長されます。「短すぎる」と感じても、まず1ヶ月で出し、再診で延長する流れが一般的です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">診断書を会社に出すと何が起きるか</p>
          <p className="text-stone-600 leading-[1.9]">休職制度の利用・傷病手当金の申請が可能になります。ただし会社に診断名が知られることになるため、心配な場合は医師に「書き方を工夫してほしい」と伝えれば対応してもらえます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">費用</p>
          <p className="text-stone-600 leading-[1.9]">診断書は健康保険対象外で、1通あたり3,000〜5,000円程度が一般的です。受診時に「診断書がほしい」と伝えてください。</p>
        </div>
      </div>

      <h2>受診とカウンセリングの違い・併用</h2>
      <p>
        「医療機関の受診」と「カウンセリング」は、対立するものではなく<strong>補完するもの</strong>です。
        両者の違いと併用の考え方を整理します。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">医療機関(心療内科・精神科)</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>得意分野</strong>:診断・服薬調整・診断書発行・身体症状の医学的評価<br />
            <strong>適している場合</strong>:身体症状が強い／休職が必要／診断書が要る／服薬が必要<br />
            <strong>費用</strong>:健康保険適用(3割負担)
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">カウンセリング</p>
          <p className="text-stone-600 leading-[1.9]">
            <strong>得意分野</strong>:対話による構造の整理・心理的サポート・対処パターンの見直し<br />
            <strong>適している場合</strong>:状態の整理がしたい／構造を理解したい／回復後の再発予防<br />
            <strong>費用</strong>:自費が一般的(1回5,000〜15,000円程度)
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">併用の考え方</p>
          <p className="text-stone-600 leading-[1.9]">
            「医療的ケア(医療機関)」と「心理的整理(カウンセリング)」は、両方あった方が回復が早いことが多いです。医療機関で診断・服薬を受けつつ、カウンセリングで構造の整理を進めるのが、複雑なケースでは有効です。
          </p>
        </div>
      </div>

      <h2>受診をためらう理由とその対処</h2>
      <p>
        受診を考えても、踏み出せない理由はいくつかあります。
        多くの方が抱える「ためらい」とその対処を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「受診するほどでもないかも」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          むしろ、その段階での受診が最も効果的です。重症化してからの受診より、軽症のうちに受診した方が回復が早く、休職期間も短くなる傾向があります。「念のため」で十分な動機です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「会社や周りに知られたくない」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          医師には守秘義務があり、本人の同意なしに情報が外部に伝わることはありません。受診したこと自体は誰にも知られません。診断書を会社に出すかどうかは、本人の選択です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「薬を出されるのが怖い」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          初診で必ず薬が処方されるわけではありません。症状の評価のみで終わるケースも多いです。「薬は飲みたくない」と医師に伝えれば、対応してもらえます。服薬を強制されることはありません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「予約が取れない・待ち時間が長い」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          多くのクリニックで初診は1〜4週間先、人気のところでは1〜3ヶ月先のことも珍しくありません。「迷う」段階でも、まず予約だけ取っておくのが現実的です。状態が変われば、キャンセル可能です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「医師と相性が悪かったらどうしよう」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          1回受診して合わないと感じれば、転院は自由です。「最初の医師がすべて」ではありません。複数のクリニックを試して、自分に合う医師を見つけることは普通のことです。
        </p>
      </div>

      <h2>「予約だけ取る」という選択肢</h2>
      <p>
        受診を決断できない方におすすめなのが、<strong>「予約だけ取っておく」</strong>という選択です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「予約だけ取る」の効果</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>・「相談先がある」という<strong>心の余裕</strong>が生まれる</li>
          <li>・予約日まで時間があるため、<strong>準備ができる</strong></li>
          <li>・予約日までに<strong>状態が変わったらキャンセル可能</strong></li>
          <li>・「受診する」という<strong>第一歩を踏み出した</strong>感覚が得られる</li>
          <li>・予約取得自体に<strong>料金はかからない</strong></li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        「行くか行かないかは、予約日に決める」というスタンスでも構いません。
        まず予約を取ることで、選択肢が広がります。
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
        <p className="font-medium text-stone-700 mb-2">バーンアウトを深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-depression-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職うつチェック(15項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">休職・回復について</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link></li>
          <li>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息に必要な7つの要素</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-medical-support" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労で何科に相談すべきか</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          受診と並行してカウンセリングを検討する方も多いです。
          いしずえカウンセリングが合うかどうかを、10項目で確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">受診と並行して整理したい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          医療機関での診断・服薬と並行して、カウンセリングで「構造の整理」を進めることで、回復が早まることがあります。受診とカウンセリングは、対立するものではなく、補完するものです。
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
          <li>・心療内科・精神科(初診予約は数日〜数週かかることがあります)</li>
        </ul>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-which-clinic"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断・治療は、医療機関での診察に基づきます。
      </div>
    </ArticleLayout>
  )
}

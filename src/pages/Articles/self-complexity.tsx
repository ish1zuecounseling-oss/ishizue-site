import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自己複雑性とは何ですか？",
    a: "自己複雑性とは、Patricia Linville（1987）が提唱した心理学的概念で、「自己概念が互いに独立した複数の側面を持つ程度」を指します。「支援者としての自分」「家族としての自分」「趣味人としての自分」など、独立した自己側面の数が多く、それぞれが重なり合っていない状態が「自己複雑性が高い」状態です。",
  },
  {
    q: "自己複雑性が高ければストレスに強くなるのですか？",
    a: "単純に「高ければ強い」とは言えません。近年の研究では、自己複雑性を「ポジティブな側面の自己複雑性」と「ネガティブな側面の自己複雑性」に分けて捉える必要があるとされています。ポジティブ自己複雑性が高い人は抑うつが低減しますが、ネガティブ自己複雑性が高い人はむしろ反芻思考が強まり抑うつが増えることがわかっています（Woolfolk et al., 2007）。",
  },
  {
    q: "自己複雑性は高めることができますか？",
    a: "高めることができます。川人ら（2010）の研究では、自身の多様な側面に目を向けることの効果を紹介するセミナーを受講した大学生で、肯定的自己複雑性のスコアが高まり、その後の抑うつ感情が低くなることが実証されています。意図的に「役割外の自分」を育てる活動が有効です。",
  },
  {
    q: "支援職はなぜ自己複雑性が低下しやすいのですか？",
    a: "支援職は「支援者としての自分」という側面が大きな比重を占めやすく、それ以外の自己側面（趣味人・家族・友人など）が後退しやすい構造があります。さらに、感情労働と共感疲労によって「感じる自分」「望む自分」「休む自分」といった内的な自己側面も縮小しやすく、結果として「支援者としての自分」だけに自己価値が集中する状態になります。",
  },
  {
    q: "自己複雑性は反芻思考と関係がありますか？",
    a: "関係があります。中島・丹野（2015）や金井・高橋（2017）の研究では、肯定的自己複雑性は「省察」（建設的な自己注目）と関連し、否定的自己複雑性は「反芻」（病的な自己注目）と関連することが示されています。つまり、ネガティブな自己側面が分化しているほど、ネガティブな出来事をぐるぐる考え続けやすくなります。",
  },
  {
    q: "自己複雑性は自己肯定感と違うのですか？",
    a: "違います。自己肯定感は「自分をどれだけ肯定的に評価しているか」という強度の概念です。一方、自己複雑性は「自分の側面がどれだけ多様に分化しているか」という構造の概念です。自己肯定感が低くても自己複雑性が高ければバッファ効果が働きますし、自己肯定感が高くても自己複雑性が低ければ一つの失敗で大きく揺らぐことがあります。",
  },
]

export default function SelfComplexity() {
  return (
    <ArticleLayout
      title="自己複雑性とは何か｜ポジティブ・ネガティブ自己複雑性の違いと支援職の消耗リスク【公認心理師監修】"
      description="自己複雑性とは、自己概念が複数の独立した側面を持つ程度のことです。ポジティブ自己複雑性とネガティブ自己複雑性の違い、反芻思考との関係、支援職特有の消耗パターン、自己複雑性の高め方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-complexity"
      date="2026-05-03"
      tags={["self-function", "self-complexity", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「自己複雑性が高い人はストレスに強い」——この概念が自己機能・役割依存と深くつながっています。
      </p>

      <p>
        <strong>自己複雑性（Self-complexity）とは、Patricia Linvilleが提唱した概念で、「自己概念が複数の独立した側面を持つ程度」</strong>を指します。
        「支援者としての自分」「親としての自分」「趣味人としての自分」など、
        複数の独立した自己側面を持っている状態が「自己複雑性が高い」状態です。
      </p>

      {/* ▼ 目次（滞在時間延長・スクロール深度改善） */}
      <div className="my-5 p-4 rounded-2xl bg-stone-50 border border-stone-100">
        <p className="text-[11px] text-stone-500 mb-2 tracking-wide">この記事の内容</p>
        <ol className="text-xs text-stone-600 space-y-1 leading-relaxed list-decimal list-inside">
          <li>自己複雑性が高いとなぜ強いのか（バッファリング効果）</li>
          <li>ポジティブ自己複雑性とネガティブ自己複雑性の違い</li>
          <li>反芻思考と自己複雑性の関係</li>
          <li>支援職に「自己複雑性の偏り」が起きやすい理由</li>
          <li>自己複雑性セルフチェック</li>
          <li>自己複雑性を高めるための実践</li>
          <li>よくある質問</li>
        </ol>
      </div>

      <h2>自己複雑性が高いとなぜ強いのか</h2>
      <p>
        Linvilleの研究では、<strong>自己複雑性が高い人ほど、一つの失敗や否定的な出来事がメンタルに与えるダメージが小さい</strong>とされています。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">例：仕事で失敗した場合</p>
        <div className="space-y-2 text-sm">
          <div>
            <p className="text-stone-500 text-xs mb-1">自己複雑性が低い場合</p>
            <p className="text-stone-600">「仕事でダメな自分＝全部ダメな自分」→ 全体的な自己価値が揺らぐ</p>
          </div>
          <div className="border-t border-stone-100 pt-2">
            <p className="text-stone-500 text-xs mb-1">自己複雑性が高い場合</p>
            <p className="text-stone-600">「仕事でダメだったが、家庭人・趣味人としての自分は別」→ ダメージが一側面に留まる</p>
          </div>
        </div>
      </div>
      <p>
        複数の独立した「自分」があることで、一つが揺らいでも他が支えになります。これを<strong>バッファリング効果（buffering effect）</strong>と呼びます。
      </p>

      {/* ▼ 新規セクション：ポジ/ネガ自己複雑性 */}
      <h2>ポジティブ自己複雑性とネガティブ自己複雑性——「高ければ良い」わけではない</h2>
      <p>
        重要なのは、自己複雑性は単純に「高ければストレスに強い」というものではない、という点です。
        近年の研究では、自己複雑性を<strong>「ポジティブな側面の自己複雑性」と「ネガティブな側面の自己複雑性」に分けて捉える必要がある</strong>とされています（Woolfolk et al., 2007）。
      </p>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <p className="text-[11px] text-stone-500 tracking-wider mb-0.5">ポジティブ自己複雑性</p>
            <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              自分の肯定的な側面が、多様に分化している
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p>例：「思いやりのある自分」「学ぶことが好きな自分」「友人を笑わせる自分」「自然を愛する自分」</p>
            <p className="pt-2 mt-2 border-t border-stone-100 text-stone-700">
              <strong className="text-stone-800">効果：</strong>抑うつを低減する。建設的な自己注目（省察）と関連する。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <p className="text-[11px] text-stone-600 tracking-wider mb-0.5 font-medium">ネガティブ自己複雑性</p>
            <p className="text-sm font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              自分の否定的な側面が、多様に分化している
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50/40">
            <p>例：「仕事ができない自分」「人付き合いが下手な自分」「だらしない自分」「価値がない自分」</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">効果：</strong>抑うつを促進する。病的な自己注目（<Link to="/articles/helper-rumination" className="underline underline-offset-2">反芻思考</Link>）と関連する。
            </p>
          </div>
        </div>
      </div>

      <p>
        つまり、<strong>ただ「自己側面が多い」だけでは不十分</strong>です。
        ネガティブな側面ばかりが細かく分化していくと、「どの側面でも自分はダメだ」という反芻が深まります。
        <strong>ポジティブな側面が分化していること</strong>が、バッファリング効果の鍵になります。
      </p>

      <h2>反芻思考と自己複雑性の関係</h2>
      <p>
        自己注目には、建設的な「省察（reflection）」と病的な「反芻（rumination）」の2タイプがあります。
        中島・丹野（2015）や金井・高橋（2017）の研究では、次のことが示されています。
      </p>

      <div className="card space-y-2 text-sm text-stone-600">
        <p>・<strong className="text-stone-800">肯定的自己複雑性</strong> → 「省察」と関連（建設的な自己理解につながる）</p>
        <p>・<strong className="text-stone-800">否定的自己複雑性</strong> → 「反芻」と関連（ネガティブな出来事を繰り返し考え続ける）</p>
      </div>

      <p>
        支援職に多い「考えすぎて止まらない」「眠れない」「自分の至らなさが頭から離れない」といった状態は、
        否定的自己複雑性が肥大化することで起きやすくなります。
        <Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>を止めるには、
        単に「考えないようにする」のではなく、<strong>肯定的な自己側面を意識的に育てる</strong>ことが重要です。
      </p>

      <h2>支援職に「自己複雑性の偏り」が起きやすい理由</h2>
      <p>
        支援職・対人援助職では、「支援者としての自分」が前面に出すぎることで、
        他の自己側面が後退しやすくなります。
        さらに支援職特有の構造として、<strong>「ポジティブ側面の縮小 × ネガティブ側面の肥大」</strong>という偏りが起きやすくなります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①「支援者」側面への過剰集中</p>
          <p className="text-stone-600 leading-[1.9]">仕事・役割・使命感が全ての自己概念を占めると、支援がうまくいかないときに「全部ダメな自分」という感覚が生まれやすくなります。<Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">役割を降りるのが怖い</Link>状態と深く関連します。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②「支援者以外の自分（ポジ側面）」が薄くなる</p>
          <p className="text-stone-600 leading-[1.9]">趣味・休暇・人間関係など「支援者役割の外」のポジティブな自己側面が消耗・後退することで、失敗や批判への心理的バッファが失われていきます。「役立たない時間」「役割と関係ない自分」が消えていくと、ポジティブ自己複雑性が縮小します。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③「ダメな自分（ネガ側面）」が分化していく</p>
          <p className="text-stone-600 leading-[1.9]">逆に「対応がまずかった自分」「先輩に怒られた自分」「利用者を不快にさせた自分」など、ネガティブな側面は支援職特有の状況で次々と分化していきます。これがネガティブ自己複雑性の肥大として反芻思考を強めます。</p>
        </div>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed mt-3">
        ※ この偏りパターンは、<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト</Link>や<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>と並行して進むことが多く、相互に強化しあいます。
      </p>

      <h2>自己複雑性と自己機能の関係</h2>
      <p>
        自己複雑性の低下は、<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>の重要なサインの一つです。
        「感じる自分・望む自分・休む自分」という多様な側面が失われると、
        「役割としての自分だけが残る」状態になります。
      </p>
      <p>
        逆に、<Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が回復</Link>するにつれて、
        「支援者以外の自分」も自然に戻ってきます。
        身体感覚・感情・小さな好みを取り戻す過程で、ポジティブ自己複雑性も高まっていきます。
      </p>

      {/* ▼ 新規セクション：セルフチェック */}
      <h2>自己複雑性セルフチェック（10項目）</h2>
      <p>
        現在の自己複雑性の状態を確認するためのチェックです。
        「あてはまる」と感じる項目の数を数えてみてください。
      </p>

      <div className="my-5 rounded-2xl border border-stone-200 overflow-hidden">
        <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-100">
          <p className="text-[11px] text-stone-500 tracking-wider">ポジティブ自己複雑性チェック（5項目）</p>
        </div>
        <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-2 bg-white">
          <p>□ 仕事以外の場面で「自分らしくいられる」場所がある</p>
          <p>□ 役割と関係ない、純粋に楽しめる趣味・活動がある</p>
          <p>□ 「役に立たない時間」「ぼーっとする時間」を持てている</p>
          <p>□ 仕事の評価とは無関係に、自分の好きなものがある</p>
          <p>□ 仕事を離れて会いたい人（家族・友人）がいる</p>
        </div>
      </div>

      <div className="my-5 rounded-2xl border border-stone-300 overflow-hidden">
        <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
          <p className="text-[11px] text-stone-600 tracking-wider font-medium">ネガティブ自己複雑性チェック（5項目）</p>
        </div>
        <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-2 bg-stone-50/40">
          <p>□ 自分のダメな点を、いくつもの場面で具体的に思い浮かべられる</p>
          <p>□ 「仕事ができない」「人付き合いが下手」など、欠点を複数の側面で意識する</p>
          <p>□ 一つ失敗すると、過去の失敗まで連鎖的に思い出す</p>
          <p>□ 寝る前に「あの場面のあの対応」が頭から離れないことが多い</p>
          <p>□ 「どこを切り取っても自分はダメだ」と感じることがある</p>
        </div>
      </div>

      <div className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-600 leading-relaxed">
        <p className="mb-2"><strong className="text-stone-800">読み方の目安：</strong></p>
        <p>・ポジが多くネガが少ない → バランス良好</p>
        <p>・ポジが少なくネガが多い → 反芻リスクが高い状態。ポジ側面の回復が必要</p>
        <p>・ポジもネガも少ない → 自己機能全体の低下。<Link to="/articles/self-function-decline" className="underline underline-offset-2">自己機能低下</Link>の段階。</p>
        <p>・ポジもネガも多い → 多面的だが消耗しやすい。整理が必要</p>
      </div>

      <LineCtaSmall />

      <h2>自己複雑性を高めるために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">①「ポジティブな役割外の自分」を意識的に育てる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">趣味・創作・自然・スポーツ・学びなど、「支援者」としての評価に関係しない活動がポジティブ自己複雑性を高めます。「役に立たなくてもいい時間」がバッファとして機能します。重要なのは「評価される/されない」を超えて、純粋に「自分が心地よいかどうか」を基準にすることです。なお自己複雑性の低下は<Link to="/articles/impostor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群</Link>とも深く関連します——一つの役割に自己価値が集中するほど、「その役割でバレることへの恐れ」が強まります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 失敗を「一側面の出来事」として扱う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「今日の支援がうまくいかなかった」は「支援者としての自分の一場面」であり、「全体としての自分の価値」ではありません。<Link to="/articles/helper-self-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自責のループ</Link>から抜け出すためにも、この視点が重要です。ネガ側面の連鎖（「仕事もダメ、人付き合いもダメ、私生活もダメ……」）が起きそうになったら、意識的に切り離す練習が役立ちます。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ ポジティブな複数の側面を言語化する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「自分には○○な側面もある」を書き出す練習が、肯定的自己複雑性を高めます。川人ら（2010）の研究では、多様な自己側面に意識を向けるセミナーを受講した群で、肯定的自己複雑性が高まり抑うつが低下しました。「支援者」「家族」「趣味人」「感じる人間」「過去にこれを楽しんだ自分」など、役割と感覚の両面を含めることが重要です。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ ネガ側面を「分解しすぎない」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「私はこういう点でもダメ、ああいう点でもダメ」と細かく分けすぎないことも重要です。ネガ側面の細分化は反芻を強めます。「今日のあの場面で対応がうまくいかなかった」を「自分のあらゆる側面の問題」に拡大しない訓練が、否定的自己複雑性の肥大を防ぎます。</p>
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

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「役割以外の自分がわからない」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己複雑性と自己機能を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">「支援者以外の自分がわからない」——ポジ側面の縮小とネガ側面の肥大が同時に起きているとき、一人で整理するのは難しくなります。外から整理することで、バッファとなる自己側面を取り戻す入口が見えてきます。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-complexity"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100 leading-relaxed">
        参考文献：<br />
        ・Linville, P. W. (1987). Self-complexity as a cognitive buffer against stress-related illness and depression. <em>Journal of Personality and Social Psychology</em>, 52(4), 663–676.<br />
        ・Woolfolk, R. L., Gara, M. A., Ambrose, T. K., Williams, J. E., Allen, L. A., Irvin, S. L., & Beaver, J. D. (2007). Self-complexity and the persistence of depression. <em>The Journal of Nervous and Mental Disease</em>, 195(6), 524–529.<br />
        ・川人潤子・大塚泰正・堂谷知香子・矢嶋裕樹（2010）. ポジティブな自己側面への注目が自己複雑性と抑うつに及ぼす影響.<br />
        ・中島・丹野（2015）、金井・高橋（2017）. 自己複雑性と省察・反芻の関連研究.<br />
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

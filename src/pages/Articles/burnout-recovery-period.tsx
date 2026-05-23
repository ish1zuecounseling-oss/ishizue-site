import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群はどれくらいで治りますか?",
    a: "状態の深さによって個人差が大きく、軽度であれば1〜3ヶ月、中度で3〜6ヶ月、重度では半年〜1年以上かかることもあります。バーンアウト研究の第一人者クリスティーナ・マスラックらによれば、十分な休養と構造的な対処があれば回復は可能ですが、「気合いで乗り切る」と長期化する傾向があります。一律の期間目安よりも、自分の状態に合わせた対処が回復を早めます。",
  },
  {
    q: "なぜ「個人差が大きい」のですか?",
    a: "回復期間には、①燃え尽きの深さ、②気づいたタイミング、③休養と専門サポートの有無、④職場環境の整備、⑤個人の対処パターン(完璧主義・抱え込み・自責傾向など)、という5つの要因が複合的に関わります。同じ「燃え尽き」でも、これらの組み合わせで期間が大きく変わります。",
  },
  {
    q: "「気合い」で乗り切ろうとするとどうなりますか?",
    a: "短期的にはしのげても、長期的にはバーンアウトが深刻化します。複数の研究で、「サインを無視して働き続ける」と回復期間が2〜3倍に延長することが示唆されています。早めに気づいて休養することが、最も早い回復につながります。",
  },
  {
    q: "「治った」はどう判断すればいいですか?",
    a: "「症状が消えた」ではなく「再発しない構造ができた」が真の回復の指標です。具体的には、①休息で疲れが取れるようになる、②感情が動き始める、③仕事への関心が戻る、④職場・関係性のパターンが変わった、の4点が判断軸です。「症状の消失」だけで判断すると、復職後に再発しやすくなります。",
  },
  {
    q: "復職までの一般的な期間は?",
    a: "ケースによりますが、軽度なら1〜2ヶ月、中度なら3〜6ヶ月、重度なら半年〜1年以上の休養が必要なことが多いです。重要なのは「復職可能」と「持続可能な復職」が違うという点です。早期復職で再発するケースが多く、医師・産業医・カウンセラーと相談しながら段階的に戻ることが推奨されます。",
  },
  {
    q: "再発はしやすいですか?",
    a: "残念ながら、対処を変えないと再発しやすいのが燃え尽きの特徴です。複数のメタ分析で、職場環境や個人の対処パターンが変わらない場合、1〜2年以内に再発するケースが多いことが示されています。「症状の改善」だけでなく「再発しない構造を作る」ことが、最も重要な回復課題です。",
  },
  {
    q: "短期で回復する人と長期化する人の違いは?",
    a: "短期で回復する人は、①早めに気づいて休んだ、②専門家のサポートを受けた、③職場環境を調整した、④個人の対処パターンを見直した、という共通点があります。長期化する人は、これらが揃わず「気合い」で乗り切ろうとしたケースが多いです。早期介入が最大の回復要因です。",
  },
]

export default function BurnoutRecoveryPeriod() {
  return (
    <ArticleLayout
      title="燃え尽き症候群はどれくらいで治る?——回復までの期間と要因【公認心理師】"
      description="バーンアウト(燃え尽き症候群)からの回復期間を、軽度・中度・重度の段階別に解説。「個人差が大きい」と言われる5つの要因・4フェーズの回復プロセス・「治った」の判断基準を公認心理師が整理します。気合いで乗り切るより、構造を理解した対処が最も早い回復への道です。"
      url="https://www.ishizue-counseling.jp/articles/burnout-recovery-period"
      date="2026-05-22"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「燃え尽き症候群はどれくらいで治るのだろう」——その問いには明確な答えがあります。ただし、それは平均値ではなく、5つの要因によって決まる「あなたの場合」の期間です。
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
        「燃え尽き症候群と診断された/言われた。一体いつ治るのだろう」——
        この問いは、休職中・休養中の方が最も切実に抱える疑問です。
        先が見えない不安は、回復をさらに遅らせる要因にもなります。
      </p>

      <p>
        結論からお伝えすると、<strong>軽度なら1〜3ヶ月、中度で3〜6ヶ月、重度では半年〜1年以上</strong>かかることが一般的です。
        ただしこれは「平均値」であって、実際は<strong>5つの要因</strong>によって個人差が大きく開きます。
      </p>

      <p>
        この記事では、燃え尽き症候群の回復期間について、研究知見と臨床経験から
        <strong>「どんな要因で期間が変わるのか」「どうすれば早く回復できるのか」</strong>を整理します。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・<strong>軽度・中度・重度別</strong>の回復期間の目安</li>
          <li>・回復期間に影響する<strong>5つの要因</strong></li>
          <li>・4フェーズの<strong>回復プロセス</strong>(期間目安付き)</li>
          <li>・早く回復する人の<strong>共通点</strong></li>
          <li>・「治った」の<strong>判断基準</strong>(4つの指標)</li>
          <li>・再発を防ぐために</li>
        </ul>
      </nav>

      <h2>結論——軽度・中度・重度別の回復期間</h2>
      <p>
        燃え尽き症候群(バーンアウト)の回復期間は、状態の深さによって以下のような目安があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">回復期間の目安</p>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-stone-700 mb-1">軽度のバーンアウト:<span className="text-stone-500">1〜3ヶ月</span></p>
            <p className="text-stone-600 leading-[1.9]">情緒的疲労が出始めた段階。休息と業務調整で比較的早く回復します。ただし「軽度のまま気合いで乗り切る」と中度に進行することが多いです。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700 mb-1">中度のバーンアウト:<span className="text-stone-500">3〜6ヶ月</span></p>
            <p className="text-stone-600 leading-[1.9]">脱人格化・達成感低下が明確に現れた段階。休職や業務縮小が必要なケースが多く、専門家のサポートを受けた方が回復が早まります。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700 mb-1">重度のバーンアウト:<span className="text-stone-500">半年〜1年以上</span></p>
            <p className="text-stone-600 leading-[1.9]">日常生活に支障が出ている段階。医療機関の受診・休職・専門カウンセリングが必要なケースが多いです。「治った」と感じるまで1年以上かかることも珍しくありません。</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        この期間は<strong>あくまで平均的な目安</strong>です。
        バーンアウト研究の第一人者である<strong>クリスティーナ・マスラック(Christina Maslach)</strong>らによる長年の臨床研究では、
        回復期間は個人によって大きく異なることが繰り返し示されてきました。
        次のセクションで、その「個人差」の要因を整理します。
      </p>

      <h2>なぜ「個人差が大きい」のか——回復期間に影響する5つの要因</h2>
      <p>
        燃え尽きの回復期間は、以下の5つの要因によって決まります。
        同じ「中度」でも、要因の組み合わせで2倍以上の差が出ることが珍しくありません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 燃え尽きの深さ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          最も基本的な要因です。情緒的消耗だけの段階(軽度)と、脱人格化・達成感低下を伴う段階(中度以上)では、回復に必要な時間がまったく異なります。
          Maslach Burnout Inventory(MBI)などの評価尺度で、現状の深さを把握することが回復計画の第一歩になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 気づいたタイミング</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          早期に気づいて対処を始めた人ほど回復が早い、というのは複数の研究で繰り返し示されている知見です。
          「まだ大丈夫」と気合いで乗り切ろうとすると、回復期間が<strong>2〜3倍に延長</strong>することがあります。
          逆に、軽度の段階で気づければ数週間〜1ヶ月で立て直せるケースもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 休養と専門サポートの有無</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          十分な休養を取れる環境があるか、医師・カウンセラー・産業医などの専門家のサポートを受けられるかで、回復速度が大きく変わります。
          一人で抱え込むほど、思考の反芻が止まらず、回復が長期化します。
          専門家との対話は、回復期間を平均で<strong>30〜50%短縮する</strong>可能性があるとの研究もあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 職場環境の整備</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          復職後の職場環境が同じままなら、再発のリスクが高くなります。
          業務量の調整・配置の変更・人間関係の調整など、構造的な対応がない場合、復職後数ヶ月で再発するケースが少なくありません。
          職場側の理解と整備が、持続可能な回復の前提条件です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 個人の対処パターン</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          完璧主義・抱え込み・自責傾向・「弱音を吐けない」といった<strong>個人の対処パターン</strong>が、回復を遅らせます。
          これらは「性格」ではなく、長年の経験から身についた認知・行動パターンです。
          このパターン自体を整理しないと、症状が改善しても再発しやすくなります。
          詳しくは<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト</Link>を参照してください。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>4フェーズの回復プロセス——期間目安付き</h2>
      <p>
        バーンアウトからの回復は、明確に<strong>4つのフェーズ</strong>を踏みます。
        各フェーズを飛ばさないことが、最も早い回復につながります。
      </p>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">PHASE 1</span>
              <span className="text-[11px] text-stone-500">1〜3ヶ月</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              休養・安定化フェーズ
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>身体と心を安定させる。「何もしない」が最重要タスク。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・仕事から完全に離れる(連絡も最小限)</p>
            <p>・睡眠・食事・身体の整え</p>
            <p>・「何かしなければ」と焦っても無理しない</p>
            <p>・医療機関の受診・服薬調整(必要に応じて)</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:この段階で復職を急ぐと再発リスクが高まります。「早く戻りたい」気持ちは正常な反応ですが、回復のプロセスを優先してください。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">PHASE 2</span>
              <span className="text-[11px] text-stone-500">2〜4ヶ月</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              振り返り・整理フェーズ
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>「なぜ燃え尽きに至ったのか」を構造的に整理する。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・職業構造・職場環境を整理する</p>
            <p>・個人の対処パターンを振り返る</p>
            <p>・カウンセラー・スーパーバイザーとの対話</p>
            <p>・複数の要因を「構造」として見える化</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:このフェーズを飛ばすと、再発しやすくなります。「症状が改善した」だけで終わらせず、原因を見つめることが重要です。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">PHASE 3</span>
              <span className="text-[11px] text-stone-500">3〜6ヶ月</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              再構築フェーズ
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>新しい働き方・関わり方を再構築する。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線</Link>の引き方を整える</p>
            <p>・<Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>を回復させる</p>
            <p>・セルフコンパッションを練習する</p>
            <p>・小さな実験(短時間業務・部分的復帰)を始める</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:このフェーズで「何が変わったか」を体感できることが、復職への準備になります。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">PHASE 4</span>
              <span className="text-[11px] text-stone-500">継続的</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              復職・維持フェーズ
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>持続可能な働き方を維持する。再発を防ぐ。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・段階的復職(時短・週数日から)</p>
            <p>・定期的なセルフチェック</p>
            <p>・産業医・カウンセラーとの継続的な対話</p>
            <p>・サイン(疲労・感情の麻痺)が出たら早めに止める</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:このフェーズは「終わり」がありません。一度燃え尽きを経験した人は、リスクが高い状態であり続けます。継続的な自己ケアが必要です。
            </p>
          </div>
        </div>
      </div>

      <h2>早く回復する人の共通点</h2>
      <p>
        臨床経験と研究知見から、回復が早い人には以下の共通点があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 早めに気づいて、早めに休んだ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          最も大きな要因です。軽度の段階で気づき、無理せず休養を取った人は、数週間〜1ヶ月程度で立て直せることが多いです。
          「もう少し頑張れる」と思ったタイミングが、最も早い回復の入口です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 一人で抱え込まなかった</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          医師・カウンセラー・産業医・信頼できる家族や友人など、複数のサポートを早期から活用した人は回復が早いです。
          特に「構造を整理してくれる第三者」の存在が、思考の反芻を止めるのに有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「治す」より「変える」に取り組んだ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          症状の改善だけを目標にした人より、「再発しない構造を作る」ことに取り組んだ人の方が、結果的に持続可能な回復に至っています。
          職場環境・対処パターン・関係性の整理が、長期的な回復の鍵です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 焦らずプロセスを踏んだ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「早く復職しなければ」「迷惑をかけている」という焦りで、フェーズ2・3を飛ばす人は再発しやすい傾向があります。
          逆に、十分な時間をかけてプロセスを踏んだ人は、復職後も安定して働き続けられています。
          「急がば回れ」がバーンアウト回復の鉄則です。
        </p>
      </div>

      <h2>「治った」はどう判断するか——4つの指標</h2>
      <p>
        「症状が消えた」だけでは、真の回復とは言えません。
        以下の<strong>4つの指標</strong>がすべて整って初めて、持続可能な回復と言えます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 休息で疲れが取れるようになる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの中核症状は「休んでも回復しない」状態です。休日に疲れが取れる感覚が戻ってきたら、身体の回復が進んでいる証拠です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情が動き始める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽き中は感情が平坦になります。喜怒哀楽が戻ってきた感覚があれば、心理的回復が進んでいるサインです。
          特に「楽しい」「興味深い」というポジティブな感情の回復は重要な指標です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事への関心が戻る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽き中は仕事のことを考えたくない状態が続きます。少しずつ「もう一度やってみたい」「あの仕事はどうなっただろう」という関心が戻ってきたら、復職への準備が整い始めています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 職場・関係性のパターンが変わった</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          これが最も重要な指標です。「断れるようになった」「自分の限界を伝えられる」「役割と自分を区別できる」など、<strong>パターンの変化</strong>が感じられれば、再発リスクが大きく下がります。
          この変化がないまま復職すると、数ヶ月で再発することが多いです。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        ①②③だけで「治った」と判断して復職すると、再発しやすくなります。
        ④の構造的変化があって初めて、真の回復と言えます。
      </p>

      <h2>再発を防ぐために</h2>
      <p>
        一度燃え尽きを経験した人は、<strong>リスクが高い状態</strong>であり続けます。
        再発を防ぐためには、以下の3つを継続することが重要です。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 定期的なセルフチェック</p>
          <p className="text-stone-600 leading-[1.9]">月1回程度、<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック</Link>などで自分の状態を確認します。早期発見が最大の予防です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② サインが出たら早めに止める</p>
          <p className="text-stone-600 leading-[1.9]">「疲れが取れない」「感情が平坦になってきた」「仕事への関心が薄れた」といったサインを察知したら、早めに対処します。一度燃え尽きを経験した人は、サインに気づきやすくなっているのが強みです。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 構造的な対処を継続する</p>
          <p className="text-stone-600 leading-[1.9]">境界線・休息・自己機能の維持を、習慣として続けます。「治ったから大丈夫」と元の働き方に戻ると、再発リスクが高まります。</p>
        </div>
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
        <p className="font-medium text-stone-700 mb-2">バーンアウトを深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/helper-burnout-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトのサインを見逃さないために</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">回復・対処について</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息に必要な7つの要素</Link></li>
          <li>・<Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link></li>
          <li>・<Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフケアが効かない理由</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          カウンセリングは「合う・合わない」がはっきり分かれます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">回復期間が見えなくて不安な方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          バーンアウトの回復は、「治す」より「再発しない構造を作る」プロセスです。一人で先が見えない不安と向き合うより、構造を理解した専門家と一緒に整理することで、回復への道筋が見えてきます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-recovery-period"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はバーンアウト研究の知見と臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。記載の期間目安は平均的なものであり、個人の状態によって異なります。医学的な診断は、医療機関での診察に基づきます。
      </div>
    </ArticleLayout>
  )
}

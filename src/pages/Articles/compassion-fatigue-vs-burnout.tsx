import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "共感疲労とバーンアウトの一番大きな違いは何ですか？",
    a: "原因の違いです。共感疲労は「他者のトラウマ・苦痛への共感」が主因で、相手の感情を引き受けることで生じます。バーンアウトは「長期的な職業上の過負荷」が主因で、業務量・組織問題・成果プレッシャーから生じます。共感疲労は対人援助職に特有ですが、バーンアウトは職種を問わず起こります。",
  },
  {
    q: "両方同時に起きることはありますか？",
    a: "あります。支援職では両方が同時に進行することが一般的です。共感疲労が長期化するとバーンアウトに移行することも多く、両者は重なり合って現れます。「自分はどちらか」と区別しようとするより、「両方が起きている可能性」を前提に整理するほうが現実に即しています。",
  },
  {
    q: "共感疲労とバーンアウトでは対処法が違いますか？",
    a: "対処の方向性が違います。共感疲労はバウンダリーの再設定・神経系の回復・共感の質の調整が中心になります。バーンアウトは業務量の削減・休息・職場環境の調整・価値観の整理が中心になります。両者が重なる場合は、まず急性の症状（不眠・身体症状）の安定を優先します。",
  },
  {
    q: "症状が似ているのですが、見分け方はありますか？",
    a: "見分けの一つは「仕事を離れた直後に、特定の利用者やケースの場面が頭から離れないか」です。離れない場合は共感疲労の側面が強い可能性があります。一方、「業務そのものへの意欲喪失」「成果が出ないことへの絶望」が中心であれば、バーンアウトの側面が強いと言えます。ただし両者が重なることが多いため、専門家による整理が助けになります。",
  },
  {
    q: "共感疲労がバーンアウトに進行することはありますか？",
    a: "進行することがあります。共感疲労が放置されると、徐々にバーンアウトへ移行する段階的な深刻化が起きることがあります。共感疲労の段階で気づいて対処することが、バーンアウトを予防する重要なステップになります。",
  },
  {
    q: "バーンアウトの方が深刻なのですか？",
    a: "「どちらが深刻か」を比較することにあまり意味はありません。共感疲労もバーンアウトも、放置すれば抑うつ・離職・身体疾患などの深刻な状態に進行する可能性があります。どちらの段階であっても、早めに整理することが回復への近道です。",
  },
]

export default function CompassionFatigueVsBurnout() {
  return (
    <ArticleLayout
      title="共感疲労とバーンアウトの違い｜支援職が「自分はどちら？」を整理する5つの視点【公認心理師】"
      description="共感疲労とバーンアウトは似ていますが、原因も対処法も異なります。「自分はどちらなのか」「両方が重なっているのか」を整理する5つの視点を、支援職15年・累計300名以上の公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/compassion-fatigue-vs-burnout"
      date="2026-05-17"
      tags={["compassion", "burnout"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        共感疲労とバーンアウトは似ていますが、原因も対処も異なります。整理することが回復の第一歩です。
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

      {/* ▼ カニバリ解消：ピラー記事への誘導 */}
      <div className="my-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-[11px] text-stone-500 mb-1.5 tracking-wide">この記事は「共感疲労」シリーズの一部です</p>
        <p className="text-xs text-stone-600 leading-relaxed">
          共感疲労の症状・原因・診断・治し方の全体像は
          <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-700 hover:text-stone-900 mx-1 font-medium">
            共感疲労とは（総合解説）
          </Link>
          にまとめています。本記事はそのうち「バーンアウトとの違い」を詳しく扱います。
        </p>
      </div>

      <p>
        「共感疲労なのか、バーンアウトなのか、よくわからない」——支援職の方からよく聞く声です。
        両者は症状が似ており、混同されがちですが、<strong>原因も対処法も異なる別の概念</strong>です。
        この記事では、両者を区別する5つの視点と、両方が同時に起きている場合の整理を解説します。
      </p>

      <h2>共感疲労とバーンアウト——まず一言で違いを整理</h2>
      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <p className="text-[11px] text-stone-500 tracking-wider mb-0.5">共感疲労（Compassion Fatigue）</p>
            <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「他者のトラウマへの共感」が主因
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed">
            <p>支援職が利用者・患者・相談者の苦しみに継続的に共感することで生じる消耗。チャールズ・フィグリー（1995）が提唱。侵入症状・回避・過覚醒が特徴で、PTSD的な反応に近い。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <p className="text-[11px] text-stone-600 tracking-wider mb-0.5 font-medium">バーンアウト（Burnout）</p>
            <p className="text-sm font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「長期的な職業上の過負荷」が主因
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50/40">
            <p>長期にわたる業務量・組織問題・成果プレッシャーによる消耗。マスラック（Maslach）の研究では、情緒的消耗感・脱人格化・達成感の低下の3要素で定義される。職種を問わず起こる。</p>
          </div>
        </div>
      </div>

      <h2>5つの視点で違いを整理する</h2>
      <p>
        以下の5つの視点が、両者を区別するための実用的な手がかりになります。
      </p>

      <h3>視点①：「何が原因か」——他者か、業務量か</h3>
      <p>
        共感疲労の原因は<strong>他者の苦痛への共感</strong>です。利用者のトラウマ・苦しみ・絶望を「自分の中に引き受ける」ことで起きます。
        一方、バーンアウトの原因は<strong>業務量と組織問題</strong>です。人手不足・長時間労働・成果プレッシャー・組織の理不尽から起きます。
      </p>

      <h3>視点②：「いつ強くなるか」——特定のケース後か、慢性的にか</h3>
      <p>
        共感疲労は<strong>特定のケース・場面の後</strong>に強く出ます。「あの利用者の話を聞いた後から眠れない」「あのケースのことが頭から離れない」など、対象がはっきりしています。
        バーンアウトは<strong>慢性的・全般的</strong>です。「特定のケースではなく、仕事全体に対する意欲が落ちている」「すべてがどうでもよく感じる」状態。
      </p>

      <h3>視点③：「症状の質」——侵入か、消耗か</h3>
      <p>
        共感疲労の症状は<strong>侵入症状・回避・過覚醒</strong>です。PTSDに近い反応で、利用者の話が頭から離れない・特定のケースを避けたい・常に警戒状態にある、などです。
        バーンアウトの症状は<strong>情緒的消耗感・脱人格化・達成感の低下</strong>です。「気力が出ない」「利用者を機械的に扱ってしまう」「何をやっても達成感がない」などです。
      </p>

      <h3>視点④：「仕事を離れたとき」——少し回復するか、変わらないか</h3>
      <p>
        共感疲労は<strong>仕事を離れると比較的回復する</strong>傾向があります。長期休暇中に少しずつ症状が落ち着くことが多いです。
        バーンアウトは<strong>仕事を離れてもなかなか回復しない</strong>ことが多くなります。休んでも気力が戻らず、職場復帰のたびに同じ消耗が繰り返されます。
      </p>

      <h3>視点⑤：「対処の方向」——バウンダリーか、業務調整か</h3>
      <p>
        共感疲労の対処は<strong>バウンダリーの再設定・神経系の回復・共感の質の調整</strong>が中心になります。
        バーンアウトの対処は<strong>業務量の削減・組織との交渉・職場環境の調整・価値観の整理</strong>が中心になります。
      </p>

      <LineCtaSmall />

      <h2>「両方同時に起きている」が支援職には一般的</h2>
      <p>
        ここまで違いを整理しましたが、実際の支援職では<strong>両方が同時に進行している</strong>ことが一般的です。
        共感疲労が長期化するとバーンアウトに移行することも多く、両者は段階的・複合的に重なります。
      </p>

      <p>
        「自分はどちらか」と二択で整理するより、<strong>「どの側面が強いか」</strong>を見ることが現実に即した整理になります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">支援職に典型的な進行パターン</p>
        <div className="space-y-2 text-xs text-stone-600 leading-relaxed mt-2">
          <p><strong className="text-stone-800">段階1：</strong>特定ケースへの共感疲労が始まる（侵入症状）</p>
          <p><strong className="text-stone-800">段階2：</strong>共感疲労が複数ケースに広がる（慢性化）</p>
          <p><strong className="text-stone-800">段階3：</strong>業務量との重なりで情緒的消耗が深まる（バーンアウト初期）</p>
          <p><strong className="text-stone-800">段階4：</strong>脱人格化・達成感低下が出る（バーンアウト本格化）</p>
          <p><strong className="text-stone-800">段階5：</strong>うつ・適応障害への進行リスク</p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed mt-3">
        早めに気づくほど、対処の選択肢が多く残ります。
        <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link> や
        <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link> で現在地を確認できます。
      </p>

      <h2>対処の優先順位——両方が起きているとき</h2>
      <p>
        両者が重なっている場合の対処の優先順位を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">優先1：急性症状の安定</p>
        <p className="text-sm text-stone-600 leading-[1.9]">不眠・身体症状・希死念慮など、急性の症状がある場合は、まずその安定を優先します。必要なら医療機関の利用も検討します。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">優先2：業務量の確保（バーンアウト側へのアプローチ）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">過剰な業務が続いている状況では、共感疲労の対処をしても効果が出にくくなります。まず業務量・休息時間の確保を優先します。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">優先3：共感疲労へのケア（バウンダリー・神経系）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">業務量が安定してきたら、共感疲労のケアに取り組みます。バウンダリーの再設定・神経系を整える小さな習慣・話せる場所の確保などです。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">優先4：構造の再点検</p>
        <p className="text-sm text-stone-600 leading-[1.9]">回復が安定してきたら、「なぜこの消耗が起きたか」の構造を整理します。再発予防の土台になります。</p>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「どちらかわからない」段階でも大丈夫です</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          共感疲労とバーンアウトの整理を一緒にしたい方へ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          支援職特有の「共感疲労×バーンアウトの重なり」を理解した上で、今の状態と対処の優先順位を整理します。「どちらか決めてから」ではなく「整理するために」相談していただけます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/compassion-fatigue-vs-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

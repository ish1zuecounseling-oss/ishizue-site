import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群からの復職タイミングはどう判断すればいいですか?",
    a: "「症状が消えた」だけでは不十分です。①休息で疲れが取れる、②感情が動き始める、③仕事への関心が戻る、④職場・関係性のパターンが変わった、の4つすべてが整って初めて復職可能と言えます。最も重要なのは④で、構造的な変化がないまま戻ると再発しやすくなります。主治医・産業医と相談しながら判断してください。",
  },
  {
    q: "復職までの一般的な期間は?",
    a: "状態の深さによって異なり、軽度なら1〜2ヶ月、中度で3〜6ヶ月、重度で半年〜1年以上の休養が必要なことが多いです。重要なのは「復職可能」と「持続可能な復職」が違う点です。早期復職で再発するケースが多いため、急がずプロセスを踏むことをおすすめします。",
  },
  {
    q: "復職は段階的に進めるべきですか?",
    a: "強くおすすめします。いきなり通常勤務に戻ると、心身への負担が大きく再発リスクが高まります。試運転(短時間勤務)→部分復帰→時短/業務調整→完全復帰、と段階的に戻ることで、回復を確実なものにできます。会社によって「リワーク」「試し出勤」などの制度があるため、確認してみてください。",
  },
  {
    q: "復職後の再発サインは?",
    a: "①疲れが翌日に持ち越される、②休日も気持ちが切り替わらない、③感情が平坦になってきた、④仕事への関心が薄れる、⑤身体症状(不眠・頭痛など)が出始める、が代表的な再発サインです。これらに気づいたら、早めに主治医・産業医に相談してください。早期対応が重症化を防ぎます。",
  },
  {
    q: "復職が怖い・自信がない場合はどうすればいいですか?",
    a: "「怖さ」は正常な反応です。むしろ怖くない方がリスクが高いとも言えます。①小さな成功体験を積む(短時間勤務から始める)、②主治医・カウンセラーと不安を整理する、③復職後の体制を事前に整える、ことで「準備された復職」になります。怖さを認めながら進むことが、最も安全な復職プロセスです。",
  },
  {
    q: "復職せずに転職する選択肢もありますか?",
    a: "あります。ただし、燃え尽き状態での判断は、後悔につながりやすい傾向があります。「同じ職場には戻りたくない」という気持ちが強い場合でも、まず状態を回復させ、判断力が戻ってから転職を考えるのが安全です。それでも転職を選ぶなら、構造を理解した上での選択になります。一人で決めず、専門家と相談しながら判断してください。",
  },
  {
    q: "上司や同僚にどう説明すればいいですか?",
    a: "細かい症状を説明する必要はありません。「療養していました」「主治医の指示で段階的に戻ります」程度で十分です。詳しく説明する義務はなく、診断名を明かす必要もありません。職場には診断書を提出することで、必要な配慮を依頼できます。会話のテンプレートが必要なら、主治医や産業医に相談してください。",
  },
]

export default function BurnoutBackToWork() {
  return (
    <ArticleLayout
      title="燃え尽き症候群からの復職——再発しないための段階的プロセスと判断軸【公認心理師】"
      description="バーンアウト(燃え尽き症候群)からの復職を、再発させない形で進めるためのガイド。復職判断の4つの軸・4段階の復帰プロセス・主治医や職場との連携方法・再発サインと対処を公認心理師が解説。「治った」だけで戻らないための実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/burnout-back-to-work"
      date="2026-05-22"
      tags={["burnout", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        復職で最も大事なのは「治った」より「再発しない構造」です。焦って戻った人ほど再発しやすく、段階を踏んだ人ほど持続可能に戻れます。
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
        休職して数ヶ月——「そろそろ復職を考える時期かもしれない」「でも怖い」「また同じことになったらどうしよう」。
        燃え尽き症候群(バーンアウト)からの復職は、休職そのもの以上に難しい判断と準備を必要とします。
      </p>

      <p>
        この記事では、燃え尽き症候群からの復職について、<strong>「再発しないための段階的プロセス」</strong>を実用的に整理します。
        最も大事なのは、「症状が消えた」で戻るのではなく、「<strong>再発しない構造ができた</strong>」で戻ることです。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 復職の最終判断は、主治医・産業医など医療専門家との相談に基づきます。本記事は実用的な参考情報です。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・復職判断の<strong>4つの軸</strong>(チェックリスト)</li>
          <li>・4フェーズの<strong>段階的復職プロセス</strong>(期間目安付き)</li>
          <li>・主治医・産業医・職場との<strong>連携方法</strong></li>
          <li>・復職前に整えておく<strong>5つのこと</strong></li>
          <li>・復職後の<strong>再発サインと対処</strong></li>
          <li>・「焦り」と「迷い」への対処</li>
        </ul>
      </nav>

      <h2>結論——「治った」だけで戻ると再発しやすい</h2>
      <p>
        多くの人は「症状が消えたから復職できる」と考えます。
        しかしこれは、復職後の再発を高確率で招く判断軸です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">なぜ「治った」だけでは不十分か</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの中核問題は「症状」ではなく「<strong>消耗を生む構造</strong>」です。職場環境・対処パターン・関係性が変わらないまま戻れば、同じ消耗パターンが繰り返されます。
          海外の研究では、構造的な対処をしないまま復職した場合、<strong>1〜2年以内の再発率が高い</strong>ことが示唆されています。
        </p>
      </div>

      <p>
        逆に、構造的な変化を伴って戻った人は、安定して働き続けられるケースが多いです。
        この記事では、その「構造的な変化」を含めた復職判断と段階的プロセスを解説します。
      </p>

      <h2>復職判断の4つの軸——チェックリスト</h2>
      <p>
        以下の4つすべてが整って初めて、復職可能な状態と言えます。
        ①②③だけで判断すると、復職後に再発しやすくなります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 休息で疲れが取れるようになっているか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの中核症状は「休んでも回復しない」状態です。十分な休養を取った後に「疲れが取れる」感覚が戻ってきたら、身体の回復が進んでいる証拠です。これが復職の最低条件です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情が動き始めているか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽き中は感情が平坦になります。「楽しい」「興味深い」「面白い」というポジティブな感情が戻ってきたら、心理的回復が進んでいるサインです。怒りや悲しみが感じられるようになることも、回復の指標です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事への関心が戻ってきているか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽き中は「仕事のことを考えたくない」状態が続きます。「もう一度やってみたい」「あの仕事はどうなっただろう」という関心が戻ってきたら、復職への準備が整い始めています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 職場・関係性のパターンが変わったか(最重要)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          これが<strong>最も重要</strong>な判断軸です。
          「断れるようになった」「自分の限界を伝えられる」「役割と自分を区別できる」など、<strong>構造的な変化</strong>が体感できれば、再発リスクが大きく下がります。
          この変化がないまま戻ると、数ヶ月で再発するケースが多いです。詳しくは<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link>を参照してください。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        ①②③が整っていても、④が伴わないなら復職は時期尚早です。
        ④を整えるためには、休養期間中にカウンセリング・自己分析・職場との対話などを進める必要があります。
      </p>

      <LineCtaCompassion />

      <h2>4フェーズの段階的復職プロセス</h2>
      <p>
        いきなり通常勤務に戻ると、心身への負担が大きく再発リスクが高まります。
        以下の4つのフェーズを踏むのが、最も安全な復職プロセスです。
      </p>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">PHASE 1</span>
              <span className="text-[11px] text-stone-500">2〜4週間</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              試運転——「働く感覚」を取り戻す
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>身体と心を「働く感覚」に慣らす。完全な業務ではなく試運転。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・短時間勤務(2〜4時間/日)から開始</p>
            <p>・週2〜3日勤務でスタート</p>
            <p>・新規業務は持たない・既存業務の確認程度</p>
            <p>・「リワークプログラム」「試し出勤」制度があれば活用</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:「もう大丈夫」と感じても、フェーズを飛ばさない。「試運転で疲れない」が次に進める条件です。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">PHASE 2</span>
              <span className="text-[11px] text-stone-500">1〜2ヶ月</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              部分復帰——業務量を段階的に増やす
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>本格的な業務に少しずつ戻り、ペースを見極める。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・勤務時間を5〜6時間/日に延長</p>
            <p>・週4〜5日勤務に増やす</p>
            <p>・既存業務を中心に再開・新規業務は限定的に</p>
            <p>・残業はせず・定時で必ず退勤</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:周囲が「もう戻った」と扱い始める時期。配慮を依頼し続けることが重要です。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">PHASE 3</span>
              <span className="text-[11px] text-stone-500">2〜4ヶ月</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              通常勤務(時短/業務調整)——持続可能な働き方の確立
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>通常勤務に戻りながら、業務量や役割を調整する。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・フルタイム勤務に戻る(必要に応じて時短継続)</p>
            <p>・業務量は復職前の60〜80%程度に調整</p>
            <p>・残業最小化・定時退勤の習慣を維持</p>
            <p>・部署異動・業務変更が必要なら早めに相談</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:このフェーズで「以前と同じペース」に戻すと再発しやすいです。「働き方そのもの」を変える必要があります。
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
              完全復帰——再発防止の仕組み化
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">目標</strong></p>
            <p>持続可能な働き方を維持する。再発を防ぐ。</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この時期にやること</strong>
            </p>
            <p>・月1回程度のセルフチェック(疲労・感情・関心)</p>
            <p>・産業医・カウンセラーとの定期面談を継続</p>
            <p>・「サインが出たら早めに止める」習慣化</p>
            <p>・長期休暇の確実な取得・生活リズムの維持</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">注意</strong>:このフェーズは「終わり」がありません。一度燃え尽きを経験した人は、リスクが高い状態が続きます。継続的な自己ケアが必要です。
            </p>
          </div>
        </div>
      </div>

      <h2>主治医・産業医・職場との連携方法</h2>
      <p>
        復職は一人で進めるのではなく、複数の専門家と連携することが、再発防止の鍵です。
        それぞれの役割と関わり方を整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">主治医(心療内科・精神科)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>役割</strong>:診断・服薬・診断書発行・医学的な復職判断<br />
          <strong>関わり方</strong>:復職前は月1〜2回、復職後も月1回程度の通院を継続。「復職可能」の診断書は主治医が発行します。状態の変化を正直に伝えることが重要。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">産業医・産業保健スタッフ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>役割</strong>:職場との橋渡し・配慮事項の調整・職場環境の評価<br />
          <strong>関わり方</strong>:会社に産業医がいる場合、復職前と復職後に必ず面談。守秘義務があるため安心して話せます。「業務量を減らしてほしい」「配置を変えてほしい」などの依頼を、産業医経由で職場に伝えてもらえます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">カウンセラー(公認心理師など)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>役割</strong>:構造の整理・対処パターンの見直し・心理的なサポート<br />
          <strong>関わり方</strong>:復職前は週1〜隔週で対話を継続。復職後も再発予防のため、月1回程度の継続が推奨されます。医療と並行して活用することで、回復が早まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">直属の上司・人事</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>役割</strong>:業務量の調整・配慮事項の実施<br />
          <strong>関わり方</strong>:診断書を提出することで配慮を依頼。詳しい症状を説明する義務はなく、「療養していました」「主治医の指示で段階的に戻ります」程度の説明で十分です。具体的な配慮(残業免除・業務量調整・配置変更)は産業医経由で伝えてもらうのが現実的。
        </p>
      </div>

      <h2>復職前に整えておく5つのこと</h2>
      <p>
        復職を成功させるためには、復職前の準備が重要です。以下の5つを整えておくことをおすすめします。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 生活リズムを「働く時の状態」に近づける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休養中は不規則な生活になりがちです。復職の2〜4週間前から、起床・就寝・食事の時間を「働く時のリズム」に近づけておきます。これが復職初日の負担を大きく軽減します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 体力を少しずつ回復させる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休養中に体力が落ちていることが多いです。散歩・軽い運動から始めて、徐々に身体を働ける状態に戻します。フルタイム勤務には、それなりの体力が必要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 復職後の「サポート体制」を確定させる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          復職後も主治医・産業医・カウンセラーと継続する体制を、復職前に確定させます。「困った時にすぐ連絡できる人がいる」という安心感が、復職の心理的負担を軽減します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 職場との「配慮事項」を明確にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          復職前に、職場との間で「何が許可されているか」を明確にしておきます。例:「残業免除」「特定業務の免除」「配置の変更」など。曖昧なまま戻ると、「以前と同じ」を期待されてしまいます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「再発サイン」を自分で言語化しておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分の場合、こうなったら危険」というサインを、事前に言語化しておきます。例:「眠れない日が3日続いたら」「朝、起きるのが極端につらくなったら」など。これを主治医・産業医とも共有しておくと、早期対応がしやすくなります。
        </p>
      </div>

      <h2>復職後の再発サインと対処</h2>
      <p>
        復職後、以下のサインが出たら早期対応が必要です。重症化する前に、主治医・産業医・カウンセラーに相談してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">注意したい再発サイン</p>
        <ul className="space-y-1 text-sm text-stone-600 leading-[1.9]">
          <li>① 疲れが翌日に持ち越されることが増えた</li>
          <li>② 休日も気持ちが切り替わらない</li>
          <li>③ 感情が平坦になってきた・喜怒哀楽が薄い</li>
          <li>④ 仕事への関心が薄れる</li>
          <li>⑤ 身体症状(不眠・頭痛・動悸など)が出始める</li>
          <li>⑥ 「以前と同じ消耗」を感じる場面が増えた</li>
          <li>⑦ 朝の出勤前に身体症状が出る</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        これらは「以前の状態に戻りつつある」サインです。<strong>「気のせい」と無視せず、早めに専門家に相談</strong>してください。
        早期対応で再発を防げるケースが多いです。逆に放置すると、最初の燃え尽きより重い状態になることがあります。
      </p>

      <h2>「焦り」と「迷い」への対処</h2>
      <p>
        復職プロセスには、必ず「焦り」と「迷い」が伴います。
        これらは正常な反応であり、消そうとせず、付き合う方法を考えるのが現実的です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「焦り」への対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「早く戻らなければ」「迷惑をかけている」という焦りは、誰もが感じます。しかし焦って早期復職すると再発リスクが高まります。
          <strong>「急がば回れ」が燃え尽き回復の鉄則</strong>。焦りを認めつつ、プロセスを優先することが、結果的に最も早い復職への道です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「迷い」への対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「本当に戻れるのか」「また同じことになったらどうしよう」という迷いも自然です。
          むしろ迷いがない方が、現実を直視できていない可能性があります。
          一人で抱えず、主治医・カウンセラーと迷いを言語化することで、判断軸が見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「同じ職場に戻りたくない」という気持ちへの対処</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの原因が職場環境にある場合、「戻りたくない」という気持ちが強いことがあります。これは大事な情報ですが、<strong>燃え尽き状態での判断は後悔につながりやすい</strong>のも事実です。
          まず状態を回復させ、判断力が戻ってから「戻る/離れる/転職」を選択することをおすすめします。
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
        <p className="font-medium text-stone-700 mb-2">バーンアウト関連シリーズ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">休職・復職について</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link></li>
          <li>・<Link to="/articles/helper-return-to-work-fear" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">復職への恐れ</Link></li>
          <li>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息に必要な7つの要素</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          復職前後の構造整理に、カウンセリングを使う方も多いです。
          いしずえカウンセリングが合うかどうかを、10項目で確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">復職を控えている方・復職後も整理が必要な方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          復職は「治った」より「再発しない構造ができた」が鍵です。一人で考え続けるより、構造を理解した専門家と一緒に整理することで、復職後の安定が現実的になります。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-back-to-work"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。復職判断は主治医・産業医など医療専門家との相談に基づきます。
      </div>
    </ArticleLayout>
  )
}

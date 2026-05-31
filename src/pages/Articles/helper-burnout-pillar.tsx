import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "支援職のバーンアウトとは何ですか?",
    a: "支援職のバーンアウト(燃え尽き症候群)とは、看護師・介護士・福祉職・心理職・教員など、人を支える仕事をする人に起こる慢性的な心身の消耗状態です。情緒的消耗・脱人格化・達成感の低下が3つの中核症状とされ、長期的なストレスと感情労働が背景にあります。一般のバーンアウトと異なり、対人援助職特有の構造(感情労働・共感疲労・「弱音を吐けない」文化)が関わるのが特徴です。",
  },
  {
    q: "バーンアウトは「ただの疲れ」と何が違いますか?",
    a: "一時的な疲労は休めば回復しますが、バーンアウトは「休んでも疲れが取れない」「以前の感覚が戻らない」という特徴があります。情緒の麻痺・相手への冷たさ・達成感の喪失が続き、生活や仕事のパフォーマンスが明らかに落ちます。「疲れた」ではなく「心が動かなくなった」感覚が近いです。",
  },
  {
    q: "「気合いで乗り切る」では本当にダメですか?",
    a: "短期的には可能でも、長期的にはバーンアウトを深刻化させます。バーンアウトの状態で気合いを入れて働き続けると、ある日突然動けなくなる「燃え尽き」状態に陥ります。「気合いで乗り切れた」と感じる人の多くは、実は別の形(身体症状・人間関係の破綻・うつ症状)で代償を払っています。早めの整理が結果的に最も効率的な対処です。",
  },
  {
    q: "受診のタイミングはいつですか?",
    a: "①身体症状(不眠・頭痛・動悸・吐き気)が2週間以上続いている、②朝の起床がつらく出勤が困難、③「消えてしまいたい」感覚がある、のいずれかに当てはまる場合は心療内科・精神科への受診を検討してください。「受診するほどではないかも」と思っている段階での受診が、重症化を防ぎます。",
  },
  {
    q: "休職は「逃げ」になりますか?",
    a: "なりません。むしろ、バーンアウトを放置して働き続けることが、利用者・同僚・自分自身にとってのリスクになります。休職は「キャリアの終わり」ではなく「継続するための一時停止」です。回復には3〜6ヶ月程度の休養が必要なケースもあり、早めに休んだ方が結果的に職場復帰が早くなります。",
  },
  {
    q: "バーンアウトから回復するまでどのくらいかかりますか?",
    a: "状態の深さによって個人差が大きく、軽度であれば数週間〜数ヶ月、中程度以上では半年〜1年以上かかることもあります。重要なのは「症状の改善」ではなく「再発しない構造を作ること」です。「治った」と感じても、職場環境や個人の対処パターンが変わっていないと再発します。回復期間中に構造の整理を進めることが、持続可能な回復につながります。",
  },
  {
    q: "支援職を辞めるべきかどうか、どう判断すればいいですか?",
    a: "バーンアウト状態では判断力が低下しているため、その状態で大きな決断をすると後悔につながりやすいです。まず休息と構造の整理を進め、状態が回復してから判断するのが安全です。また「辞めるか・続けるか」の二択ではなく、その間にも休職・部署異動・業務調整・転職など複数の選択肢があります。一人で決めず、専門家と一緒に整理することをおすすめします。",
  },
]

export default function HelperBurnoutPillar() {
  return (
    <ArticleLayout
      title="支援職のバーンアウト(燃え尽き症候群)——回復のために知っておきたい構造と対処【公認心理師】"
      description="看護師・介護士・福祉職・心理職など支援職のバーンアウト(燃え尽き症候群)を、現場目線で解説。3段階別の特徴・実践的な対処法・受診の目安・休職判断・回復までのロードマップを公認心理師が整理します。「気合いでは乗り切れない」消耗から回復するための実践ガイド。"
      url="https://www.ishizue-counseling.jp/articles/helper-burnout-pillar"
      date="2026-05-21"
      tags={["burnout", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「もしかして燃え尽きかも」と感じているあなたへ。気合いで乗り切るのではなく、構造を知って段階に応じた対処をすることが、回復への最短ルートです。
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
        「朝、仕事に行くのがつらい」「以前のように利用者に向き合えない」「休んでも疲れが取れない」「自分は支援職に向いていないのかもしれない」——
        こうした感覚が続いているなら、それは<strong>支援職のバーンアウト(燃え尽き症候群)</strong>が進行している可能性があります。
      </p>

      <p>
        バーンアウトは「気合い」で乗り切れる状態ではありません。
        無理を続けると、ある日突然動けなくなる本格的な燃え尽きに発展します。
        重要なのは、<strong>今がどの段階かを把握し、段階に応じた対処をする</strong>ことです。
      </p>

      <p>
        この記事では、支援職のバーンアウトについて<strong>現場で実際に使える形</strong>で整理しました。
        構造を知り、自分の段階を把握し、適切な行動を選ぶための実践ガイドです。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・バーンアウトとは何か(簡潔に)</li>
          <li>・支援職のバーンアウト<strong>3つの特徴</strong>(一般のバーンアウトとの違い)</li>
          <li>・バーンアウトの<strong>3段階</strong>(初期・中期・後期)と段階別対処法</li>
          <li>・「気合いで乗り切る」がなぜダメか</li>
          <li>・受診の目安・休職の判断軸</li>
          <li>・回復までの現実的なロードマップ</li>
        </ul>
      </nav>

      <h2>支援職のバーンアウトとは——「燃え尽き」のサイン</h2>
      <p>
        バーンアウト(burnout / 燃え尽き症候群)とは、長期的なストレスにより心身のエネルギーが枯渇した状態を指します。
        1974年に米国の心理学者ハーバート・フロイデンバーガーが提唱した概念で、
        その後マスラックらが3つの中核症状を整理しました。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">バーンアウトの3つの中核症状</p>
        <ul className="space-y-2 text-sm text-stone-600 leading-[1.9]">
          <li>① <strong>情緒的消耗感</strong>——感情のエネルギーが枯渇し、何も感じなくなる</li>
          <li>② <strong>脱人格化</strong>——利用者・同僚に対して冷たく機械的になる</li>
          <li>③ <strong>達成感の低下</strong>——「何をやっても変わらない」「意味がない」と感じる</li>
        </ul>
      </div>

      <p>
        この3つは独立して起きるのではなく、<strong>連動して進行する</strong>のが特徴です。
        情緒的消耗が進むと脱人格化が起き、達成感が低下する——という流れです。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        燃え尽き症候群そのものの定義・歴史・症状・うつ病との違いなど全体像は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>にまとめています。本記事は支援職の現場目線での対処に絞って解説します。
      </p>

      <h2>支援職のバーンアウト——3つの特徴</h2>
      <p>
        一般的なバーンアウト(オフィスワーカーや営業職など)と、支援職のバーンアウトには重要な違いがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情労働の蓄積が背景にある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は仕事中、利用者のために<strong>自分の感情を演じ続ける</strong>必要があります。
          疲れていても穏やかに、悲しくても笑顔で、苛立っていても共感的に。
          この<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>の蓄積が、バーンアウトの主要な要因です。
          一般のバーンアウトと違い、「がんばればなんとかなる」では解決しない理由がここにあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 共感疲労と複合する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は利用者の苦しみに共感し続ける仕事です。
          この<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>が、バーンアウトと重なって進行することが多いです。
          共感疲労単独でも辛いところに、バーンアウトが加わると<strong>2倍の負荷</strong>がかかります。
          だから一般のバーンアウトより回復に時間がかかります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「弱音を吐けない」職場文化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職の職場には「自分が頑張るべき」「弱音は禁物」という文化が残っています。
          結果、限界が来てもサインを無視し続け、<strong>身体が反応として表現するまで気づけない</strong>構造があります。
          「自分が辛い」と認めること自体が難しい——これが回復を遅らせる最大の要因の一つです。
        </p>
      </div>

      <h2>バーンアウトの3段階——今、自分はどこにいるか</h2>
      <p>
        バーンアウトは一気に起きるのではなく、<strong>段階的に進行</strong>します。
        段階によって対処法が異なるため、まず自分がどこにいるかを把握することが重要です。
      </p>

      {/* ▼ 段階表示ブロック */}
      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">STAGE 1</span>
              <span className="text-[11px] text-stone-500">初期段階</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「疲れているけど、まだ大丈夫」
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p><strong className="text-stone-700">サイン</strong></p>
            <p>・疲れが翌日に持ち越されることが増えた</p>
            <p>・以前より仕事への意欲が下がった</p>
            <p>・休日も仕事のことが頭から離れない</p>
            <p>・「自分は頑張れている」と思いたい気持ちが強い</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-700">この段階の対処</strong>:休息の質を上げる(<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">7つの要素</Link>)・業務量の調整・自分の限界を認める。早めに気づければ、ここで止められます。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-600 tracking-wider font-medium">STAGE 2</span>
              <span className="text-[11px] text-stone-600">中期段階</span>
            </div>
            <p className="text-sm font-medium text-stone-900 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「以前のように感じられない」
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50/40">
            <p><strong className="text-stone-800">サイン</strong></p>
            <p>・感情が平坦になった・喜怒哀楽が薄い</p>
            <p>・利用者を「面倒だ」と感じる</p>
            <p>・身体症状(頭痛・胃痛・不眠)が出始めた</p>
            <p>・休日も気持ちが切り替わらない</p>
            <p>・「自分は支援職に向いていない」と思う頻度が増えた</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-800">この段階の対処</strong>:個人レベルのセルフケアだけでは不十分。職場での業務調整・外部の専門家との対話(産業医・カウンセラー)を検討。受診を考えるタイミング。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-100 tracking-wider font-medium">STAGE 3</span>
              <span className="text-[11px] text-stone-200">後期段階</span>
            </div>
            <p className="text-sm font-medium text-white mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「もう動けない・続けられない」
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50">
            <p><strong className="text-stone-900">サイン</strong></p>
            <p>・朝、出勤前に動悸・吐き気・涙が出る</p>
            <p>・「消えてしまいたい」感覚がある</p>
            <p>・布団から出られない・身体が動かない</p>
            <p>・「何のために働いているのか」がわからない</p>
            <p>・利用者・同僚への感情が完全に麻痺している</p>
            <p className="pt-2 mt-2 border-t border-stone-200">
              <strong className="text-stone-900">この段階の対処</strong>:休職・受診を即時検討。一人で判断せず、医師・カウンセラーと相談しながら進めることが安全。「気合い」では絶対に乗り切れない段階です。
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        自分の段階をより詳しく確認したい場合は、<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link>もご活用ください。
        情緒的消耗・脱人格化・達成感の低下の3軸でスコアが見えます。
      </p>

      <LineCtaCompassion />

      <h2>「気合いで乗り切る」がなぜダメか</h2>
      <p>
        日本の職場文化では「気合いで乗り切れ」「皆そうやって乗り越えてきた」が美徳のように語られます。
        しかし、心理学的にこれは<strong>合理的な対処法ではない</strong>ことが明らかになっています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 限界サインを抑え込むほど、症状が深まる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          身体は「限界です」とサインを出しています。それを意志で抑え込んでも、限界自体は消えません。
          むしろ無理を続けることで、より大きな反応(動けなくなる・パニック発作)へと進みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「乗り越えた人」のサバイバーバイアス</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「皆乗り越えてきた」という言葉には、乗り越えられず辞めた・倒れた人の存在が含まれていません。
          「乗り越えた人だけが残っている」結果論で語られているため、自分にも当てはまるとは限りません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 急に動けなくなる「燃え尽き」のリスク</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気合いで抑え込み続けると、ある日突然「何もできない」状態に陥ることがあります。
          周囲には「いつも元気そうだったのに」と見えますが、内側では限界が蓄積し続けていた結果です。
          こうなると回復に半年〜1年以上かかることも珍しくありません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 利用者へのリスクも増える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バーンアウト状態で働き続けると、判断ミス・対応の質低下・利用者への冷淡な対応など、
          支援の質そのものが低下します。「自分が頑張る」ことが、結果的に利用者にとってのリスクになります。
          「休む」ことが、自分だけでなく利用者を守ることでもあります。
        </p>
      </div>

      <h2>受診の目安——心療内科・精神科に行くべきタイミング</h2>
      <p>
        「受診するほどではないかも」と思っている段階での受診が、最も悪化を防ぎます。
        以下に当てはまる場合は受診を検討してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">受診を検討する目安</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9] mt-2">
          <li>・身体症状(不眠・頭痛・動悸・吐き気)が2週間以上続いている</li>
          <li>・朝の起床がつらく、出勤が困難</li>
          <li>・休日でも体調が回復しない</li>
          <li>・睡眠・食欲に明らかな変化が出ている</li>
          <li>・「消えてしまいたい」「いなくなりたい」感覚がある</li>
          <li>・集中力・判断力が明らかに低下している</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        受診先は「心療内科」または「精神科」が適切です。初診予約は数日〜数週かかることがあるため、早めの予約をおすすめします。
        「予約だけ取って、行くかどうかは別」でも構いません。予約を取るだけでも心が少し楽になることがあります。
      </p>

      <h2>休職の判断軸</h2>
      <p>
        休職は「キャリアの終わり」ではなく「<strong>継続するための一時停止</strong>」です。
        以下に当てはまる場合は休職を検討するタイミングです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">休職を検討する目安</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9] mt-2">
          <li>・出勤が困難な状態が数日以上続いている</li>
          <li>・身体症状で日常生活に支障が出ている</li>
          <li>・医師が休養を推奨している</li>
          <li>・「このまま続けたら倒れる」と直感している</li>
          <li>・業務上のミスが増え、利用者への影響が出始めている</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        休職への抵抗には「迷惑をかける」「戻れなくなる」「評価が下がる」など複数の側面があります。
        しかし、限界を超えて働き続けることのリスクの方が、結果的には大きいことが多いです。
        判断は焦らず、医師・カウンセラー・産業医と相談しながら決めることをおすすめします。
        詳しくは<Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link>もご覧ください。
      </p>

      <h2>回復までのロードマップ</h2>
      <p>
        バーンアウトからの回復は、段階を踏んだプロセスです。「治す」というより「<strong>再発しない構造を作る</strong>」というイメージが正確です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">フェーズ1:休養・安定化(1〜3ヶ月)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          まずは身体と心を休めることが最優先。仕事のことを考えない時間を確保し、睡眠・食事・身体の整えを優先します。
          この段階では「何かしなければ」という焦りが出ますが、<strong>意図的に何もしない</strong>ことが回復を進めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">フェーズ2:振り返り・整理(2〜4ヶ月)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          体力が戻ってきたら、「なぜバーンアウトに至ったのか」を構造的に整理します。
          職業構造・職場環境・個人の対処パターン・関係性——複数の視点から原因を見つめ直します。
          この段階で専門家(カウンセラー・スーパーバイザー)との対話が特に有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">フェーズ3:再構築(3〜6ヶ月)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          振り返りで見えた構造を元に、新しい働き方・関わり方を再構築します。
          <Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線</Link>の引き方・<Link to="/articles/self-function-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能</Link>の回復・<Link to="/articles/self-compassion-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフコンパッション</Link>の練習など。
          ここで「何が変わったか」を実感できれば、再発リスクが大きく下がります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">フェーズ4:復職または転機(必要に応じて)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          回復したら、復職または転職・転機の判断をします。
          「戻る・離れる」の二択ではなく、「同じ職場で働き方を変える」「同職種で別職場」「同領域で別職種」「全く別の道」など複数の選択肢があります。
          判断は急がず、回復した状態で選ぶことが重要です。
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        重要なのは、<strong>各フェーズを飛ばさない</strong>こと。
        「早く復職しなければ」と焦ってフェーズ2・3を飛ばすと、再発しやすくなります。
        時間をかけることが、結果的に最も早い回復につながります。
      </p>

      <h2>一人で抱え込まないために</h2>
      <p>
        バーンアウトを一人で乗り越えるのは困難です。以下の選択肢を組み合わせて使うことをおすすめします。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">① 医師(心療内科・精神科)</p>
          <p className="text-stone-600 leading-[1.9]">身体症状・診断・服薬・休職診断書など、医療的な対応が必要な場合に。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">② カウンセラー(公認心理師など)</p>
          <p className="text-stone-600 leading-[1.9]">バーンアウトの構造整理・関係性の整理・再構築のサポートに。職場外の専門家を選ぶことで、安心して話せます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ 産業医・産業保健スタッフ</p>
          <p className="text-stone-600 leading-[1.9]">職場に産業医がいる場合、守秘義務があるため安心して相談できます。職場への配慮事項の伝達も依頼できます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④ スーパーバイザー(心理職など)</p>
          <p className="text-stone-600 leading-[1.9]">専門職としての悩みを、経験ある同職種から整理してもらえます。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">⑤ 同職種のピアサポート</p>
          <p className="text-stone-600 leading-[1.9]">同じ職種の人なら「あるある」を共有できます。SNS・コミュニティ・勉強会など。</p>
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
        <p className="font-medium text-stone-700 mb-2">概念を深く理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは(総合解説)</Link></li>
          <li>・<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">セルフチェック</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック(20項目)</Link></li>
          <li>・<Link to="/articles/helper-depression-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職うつチェック(15項目)</Link></li>
          <li>・<Link to="/articles/helper-stress-check-tool" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職ストレスチェック(20項目)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">回復・対処について</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/compassion-fatigue-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労からの回復方法</Link></li>
          <li>・<Link to="/articles/helper-rest-types" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休息に必要な7つの要素</Link></li>
          <li>・<Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフケアが効かない理由</Link></li>
          <li>・<Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link></li>
        </ul>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">バーンアウトに気づいた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          バーンアウトは「気合い」で乗り切るものではありません。安全な場で「今の状態」を言葉にすることが、回復の最初の一歩です。医療機関への受診と並行して、構造の整理についてはお手伝いできます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態をそのまま話してみる(初回無料)
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/helper-burnout-pillar"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "朝、仕事に行こうとすると涙が出るのは、なぜですか?",
    a: "涙は、心の限界が身体に出ているサインです。「行きたくない」という感情を頭では抑え込んでいても、身体が反応として表現しています。これは弱さや甘えではなく、心理的負荷が身体反応の閾値を超えている重要な信号です。一時的な現象ではなく、数日以上続いている場合は早めに対処することが望ましい状態です。",
  },
  {
    q: "「気合いで乗り切る」はダメですか?",
    a: "短期的には可能でも、長期的には消耗を深めます。涙が出るほどの状態を気合いで抑え込み続けると、心身がさらに過剰適応し、ある日突然動けなくなる『燃え尽き』につながります。「気合いで乗り切る」ことが美徳のように語られますが、心身の限界サインを無視し続けることは合理的な対処法ではありません。",
  },
  {
    q: "心療内科に行くべきタイミングはいつですか?",
    a: "①出勤前の涙・動悸・吐き気が1週間以上続いている、②休日に回復しない、③『消えてしまいたい』感覚がある、のいずれかに当てはまる場合は受診を検討してください。「受診するほどじゃないかも」と思っている段階での受診が、最も悪化を防ぎます。「もっとひどくなってから」と思って先延ばしにすると、回復に必要な期間が長くなります。",
  },
  {
    q: "休職するのが怖いです",
    a: "「迷惑をかける」「戻れなくなる」「評価が下がる」——休職への恐れには複数の側面があります。ただ、限界を超えて働き続けることのリスクの方が、結果的には大きいことが多いです。休職は『キャリアの終わり』ではなく、『継続するための一時停止』として捉える視点も助けになります。判断は焦らず、専門家(医師・カウンセラー)と相談しながら決めることをおすすめします。",
  },
  {
    q: "支援職に『朝に涙が出る』状態が多いのはなぜですか?",
    a: "支援職は感情労働・共感疲労・役割同一化など、心理的負荷が複合的に蓄積する職業構造の中にいます。さらに『弱音を吐けない』『相談しにくい』職場文化があると、限界まで抱え込んでから涙という形で表面化することが多くなります。これは個人の弱さではなく、職業構造の影響です。",
  },
  {
    q: "「行きたくないけど、行かなきゃ」がループしています",
    a: "これは内側の葛藤(『行きたくない自分』と『行かなければならない自分』)が同時に作動している状態です。どちらか一方を抑え込もうとするほど、葛藤が強まります。まず両方の声を否定せずに聞くこと——「行きたくないと感じている自分」「行かなければと思っている自分」の両方を認めることから、整理が始まります。",
  },
]

export default function CannotGoToWorkTears() {
  return (
    <ArticleLayout
      title="仕事に行きたくない・涙が出る——心と身体の限界サインと対処【公認心理師】"
      description="朝になると涙が出る・吐き気がする・出勤がつらい——これは心身の限界サインです。なぜ涙が出るのか・支援職に多い理由・受診の目安・休職の判断・「気合い」では乗り切れない理由を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/cannot-go-to-work-tears"
      date="2026-05-18"
      tags={["burnout", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        朝の涙は『弱さ』ではなく、心の限界が身体に出ている重要なサインです。
      </p>

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
        朝、目が覚めた瞬間に「行きたくない」が頭をめぐる。
        出勤の準備をしているのに、涙が出てくる。
        胃が痛い・吐き気がする・動悸がする・足が動かない——
      </p>

      <p>
        こうした状態は、性格や気合いの問題ではなく、<strong>心と身体が限界を伝えているサイン</strong>です。
        この記事では、なぜそうなるのか・どう対処すべきか・受診や休職の判断について整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」という感覚が続いている場合は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・朝に涙が出る理由(心理生理学的メカニズム)</li>
          <li>・「行きたくない」と「涙」のサインの段階</li>
          <li>・支援職に多い理由(構造的視点)</li>
          <li>・「気合いで乗り切る」がなぜダメなのか</li>
          <li>・受診・休職の判断軸</li>
          <li>・今、できる小さな一歩</li>
        </ul>
      </nav>

      <h2>なぜ朝に涙が出るのか——心身の限界サイン</h2>
      <p>
        朝の涙には、明確な心理生理学的メカニズムがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自律神経の調整不全</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          通常、朝は交感神経が活性化して『活動モード』に入ります。
          しかし慢性的なストレス状態では、副交感神経との切り替えがうまくいかず、身体は『戦闘・逃走反応』に入ります。
          動悸・吐き気・震え・涙はその表れです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「明日への予期不安」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          脳は『これから起きること』を予測し、不快な体験を予期すると同じレベルの反応を起こします。
          仕事への予期不安が強いと、まだ起きていないにもかかわらず、身体は『脅威に直面している』のと同じ反応をします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 抑え込まれた感情の表出</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          普段は「行きたくない」「つらい」という感情を理性で抑え込んでいても、心身が緩む瞬間(朝・夜・休日)に感情が表面化します。
          涙は『抑え込まれていた感情が身体から出てきている』反応で、自然な過程です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 心が出している『限界信号』</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頭では『行かなくちゃ』と思っていても、身体は限界を感じている——その乖離が大きすぎるとき、身体は涙という形で『これ以上はもたない』と伝えています。
          これは『弱さ』ではなく、心身が壊れる前のアラームです。
        </p>
      </div>

      <h2>「行きたくない」サインの3段階</h2>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">LEVEL 1</span>
              <span className="text-[11px] text-stone-500">一時的な「行きたくない」</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「今日はだるいな」「気が重いな」レベル
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p>・出勤までに気持ちが切り替わる</p>
            <p>・身体症状は強くない</p>
            <p>・休日は普通に過ごせる</p>
            <p>・週単位で気分の波がある程度</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-600 tracking-wider font-medium">LEVEL 2</span>
              <span className="text-[11px] text-stone-600">身体症状が出始める段階</span>
            </div>
            <p className="text-sm font-medium text-stone-900 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              出勤前に動悸・吐き気・涙が出る
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50/40">
            <p>・朝、涙が出ることがある</p>
            <p>・出勤前に動悸・吐き気・腹痛がある</p>
            <p>・職場が近づくと足が止まる</p>
            <p>・「行きたくない」が日常的になっている</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと:</strong>専門家(心療内科・カウンセラー)への相談を強くおすすめします。「気合い」では乗り切れる段階を超えています。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-100 tracking-wider font-medium">LEVEL 3</span>
              <span className="text-[11px] text-stone-200">心身の限界段階</span>
            </div>
            <p className="text-sm font-medium text-white mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              出勤できない・身体が動かない
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50">
            <p>・布団から出られない・身体が動かない</p>
            <p>・職場の建物が見えただけで強い反応が出る</p>
            <p>・「消えてしまいたい」感覚がある</p>
            <p>・休日もずっと体調が悪い</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと:</strong>休職・受診を即時検討してください。一人で判断せず、専門家とともに進めることが安全です。
            </p>
          </div>
        </div>
      </div>

      <h2>支援職に「朝の涙」が多い理由</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情を抑え込む職業構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は仕事中、利用者のために自分の感情を抑えます。
          抑え込まれた感情は消えるのではなく、身体に蓄積され、緩む瞬間(朝・夜・休日)に表出します。
          <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>の蓄積が、朝の涙として表面化します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「弱音を吐けない」文化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職には「自分が頑張るべき」「弱音は禁物」という文化が残っています。
          結果として、限界が来てもサインを無視し続け、身体が反応として『これ以上は無理』と表現するまで気づけない構造があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 役割同一化による過剰適応</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者としての自分」が中心になりすぎて、「個人としての自分」の声(行きたくない・つらい)を聞かなくなります。
          身体の反応(涙・動悸)は、抑え込まれた『個人としての自分』が無理やり出てきている状態です。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>「気合いで乗り切る」がなぜダメなのか</h2>
      <p>
        日本の職場文化では「気合いで乗り切れ」「皆そうやって乗り越えてきた」が美徳のように語られることがあります。
        しかし、心理学的にこれは<strong>合理的な対処法ではない</strong>ことが明らかになっています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 限界サインを抑え込むほど、深刻化する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          身体は『限界です』とサインを出しています。それを意志で抑え込んでも、限界自体は消えません。
          むしろ無理を続けることで、より大きな反応(動けなくなる・パニック発作)へと進みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「乗り越えた人」のサバイバーバイアス</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「皆乗り越えてきた」という言葉には、乗り越えられず辞めた・倒れた人の存在が含まれていません。
          『乗り越えた人だけが残っている』結果論で語られているため、自分にも当てはまるとは限りません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 急に動けなくなる『燃え尽き』のリスク</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気合いで抑え込み続けると、ある日突然『何もできない』状態に陥ることがあります。
          周囲には『いつも元気そうだったのに』と見えますが、内側では限界が蓄積し続けていた結果です。
          詳しくは<Link to="/articles/helper-burnout-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトの前兆</Link>もご覧ください。
        </p>
      </div>

      <h2>受診・休職を考えるタイミング</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">心療内科・精神科の受診を検討するタイミング</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9] mt-2">
          <li>・朝の身体症状(涙・動悸・吐き気)が1週間以上続いている</li>
          <li>・休日でも体調が回復しない</li>
          <li>・睡眠・食欲に明らかな変化が出ている</li>
          <li>・「消えてしまいたい」「いなくなりたい」感覚がある</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">休職を検討するタイミング</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9] mt-2">
          <li>・出勤が困難な状態が複数日続いている</li>
          <li>・身体症状で日常生活に支障が出ている</li>
          <li>・医師が休養を推奨している</li>
          <li>・「このまま続けたら倒れる」と直感している</li>
        </ul>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">
          ※ 休職は『キャリアの終わり』ではなく『継続するための一時停止』です。判断は専門家(医師・カウンセラー)と相談しながら進めることをおすすめします。<Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link>もご覧ください。
        </p>
      </div>

      <h2>今、できる小さな一歩</h2>
      <p>
        「全部を変えなければ」と思うと動けなくなります。今できる小さな一歩から始めることが現実的です。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 「今日だけ」で考える</p>
          <p className="text-stone-600 leading-[1.9]">「ずっとこのままなのか」と考えると絶望します。「今日1日をどうしのぐか」だけに視野を絞ると、行動しやすくなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 「行く/行かない」を二択にしない</p>
          <p className="text-stone-600 leading-[1.9]">「今日は午前だけ休む」「1時間遅れて行く」「半休を取る」——間の選択肢があります。0か100かで考えると動けなくなります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 誰か一人に状況を伝える</p>
          <p className="text-stone-600 leading-[1.9]">家族・パートナー・友人・産業医・カウンセラー——誰か一人に「今こんな状態」と伝えることで、孤立感が和らぎます。一人で抱えるほど、状況は悪化します。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">④ 受診の予約だけでも取る</p>
          <p className="text-stone-600 leading-[1.9]">「行くかどうかは別として、予約だけ取る」ことから始められます。予約があるだけで、自分の中に『逃げ道』が用意され、心が少し楽になることがあります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">⑤ 「無理しないと決める」を許可する</p>
          <p className="text-stone-600 leading-[1.9]">「無理してでも頑張る」が当たり前になっている状態では、「無理しない」を自分に許可することから始まります。これは『甘え』ではなく、健全な選択です。</p>
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">朝、涙が出るほど追い詰められている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え込まないでください
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          この状態は『気合い』で乗り切るものではありません。安全な場で『今の状態』を言葉にすることが、回復の最初の一歩です。医療機関への受診と並行して、構造の整理についてはお手伝いできます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/cannot-go-to-work-tears"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

const FAQ_ITEMS = [
  {
    q: "休みの日も仕事のことが頭から離れないのは、なぜですか?",
    a: "意志や根性の問題ではなく、神経系の慢性的な緊張が背景にあります。慢性的なストレス状態では、自律神経系が「緊張モード（交感神経優位）」のまま固まり、休日になってもオフに切り替わりません。さらに支援職は「いつでも利用者のことを考えられる」状態が続きやすく、意識的な切り替えの仕組みがないと、休日も脳が「まだ仕事中」と認識したまま過ごしてしまいます。",
  },
  {
    q: "寝ても・休んでも疲れが取れないのは、どうしてですか?",
    a: "身体的な休息（睡眠・横になる）だけでは、感情的・神経的な消耗は回復しないためです。支援職は感情を使う仕事で、身体だけでなく心も働き続けています。神経系が緊張モードのまま固まっていると、身体を休めても気持ちが回復しません。「休んでいるのに回復しない」のは、休み方が足りないのではなく、休息の種類が消耗に合っていない可能性があります。",
  },
  {
    q: "「休む」ことに罪悪感があります。どうすればいいですか?",
    a: "「休日もスキルアップしなければ」「休んでいる場合じゃない」という感覚は、本当の休息を妨げます。罪悪感を抱えながらの休息は、神経系の回復につながりません。まず「休んでいい」という許可を自分に出すことが最初の一手です。支援職として長く続けるために、休息は「サボり」ではなく必須の投資だと捉え直してみてください。",
  },
  {
    q: "どうすれば休日に回復できますか?",
    a: "①仕事終わりに「切り替え儀式」を作る（着替え・シャワー・決まった音楽など）、②感情を管理しなくていい時間を意識的に作る、③「何もしない5分」から始める、④散歩・入浴・料理など身体感覚に集中できる活動を選ぶ、⑤「休んでいい」と自分に許可を出す。スマートフォンを見ながらの休息は神経系を休めないため、意識的に手放す時間を作ることが助けになります。",
  },
  {
    q: "休んでも回復しない状態が続くときは?",
    a: "休日を過ごしても「全然回復しない」「むしろ疲れている」状態が続く場合は、一人のセルフケアだけでは限界があるサインです。中程度以上の消耗は「ただ休む」だけでは回復しにくく、消耗の構造を整理した上で取り組むことが重要です。信頼できる人や専門家と一緒に、何が消耗を生んでいるのかを整理することが、回復の入口になります。",
  },
]

export default function HelperCannotRestOnDaysOff() {
  return (
    <ArticleLayout
      title="支援職は休みの日も休まらない｜仕事が頭から離れない原因と対処法"
      description="休日なのに仕事のことが頭から離れない、休んでも疲れが取れない——支援職に多い「休まらない休日」の原因は神経系の慢性緊張と共感疲労です。今日からできる対処を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-cannot-rest-on-days-off"
      date="2026-05-03"
      tags={["compassion", "burnout", "check"]}
      faq={FAQ_ITEMS}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        休日なのに仕事のことが浮かぶ、身体は休んでいるのに気持ちが回復しない——それは消耗のサインです。
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
        支援職に多い悩みの一つが「休みの日も休まらない」という感覚です。
        <strong>身体は休んでいるのに気持ちが仕事モードのまま、休日が終わるころには「もう月曜日か」という感覚</strong>——
        これは意志や根性の問題ではなく、共感疲労・神経系の慢性的な緊張から起きています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな休日を過ごしていませんか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・休日なのに利用者のことが頭に浮かぶ</li>
          <li>・「あの対応で良かったのか」と考え続けてしまう</li>
          <li>・ゆっくりしようとしても落ち着かない</li>
          <li>・休日が終わる前から月曜日が憂鬱になる</li>
        </ul>
      </div>

      <h2>なぜ休みの日も休まらないのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 神経系が「緊張モード」のまま固まっている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          慢性的なストレス状態では、自律神経系が「緊張モード（交感神経優位）」のまま固まります。
          休日になっても神経系がオフにならないため、身体を休めても気持ちが回復しません。
          これは「気持ちの持ちよう」ではなく、神経系の生理的な変化です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「仕事モードのオフスイッチ」がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事と生活の切り替えが構造化されていないと、脳が「まだ仕事中」と認識したまま過ごします。
          支援職は「いつでも利用者のことを考えることができる」状態が続きやすく、
          意識的に切り替える仕組みがないと休日も仕事モードが続きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「何もしない」ことへの罪悪感</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休日もスキルアップしなければ」「休んでいる場合じゃない」という感覚が、
          本当の休息を妨げます。罪悪感を感じながらの休息は、回復につながりません。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>「休まらない休日」を変える対処法</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 仕事終わりに「切り替え儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事を終えるときに「今日の仕事はここで終わり」を身体に伝える儀式を作ります。
          着替え・シャワー・決まった音楽——何でも構いません。
          繰り返すことで、脳が「この儀式の後は休む時間」と学習します。
          仕事の書類・スマートフォンの仕事関連アプリは視界に入れないことも有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「感情規則のない時間」を設計する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事中は常に感情を管理しています。
          休日は「感情を管理しなくていい時間」を意識的に作ることが、
          感情的エネルギーの回復を助けます。
          泣いても、笑っても、ぼーっとしてもOKな時間です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「何もしない5分」から始める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「ちゃんと休まなければ」という焦りが逆効果になることがあります。
          まずスマートフォンを置いて、何もしない5分を作るだけでいい。
          神経系の回復は「何かをする」よりも「何もしない」から始まります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 身体感覚から入る活動を選ぶ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          散歩・入浴・料理など、思考ではなく身体感覚に集中できる活動が、
          神経系をリラックスモードに切り替えやすくします。
          スマートフォンを見ながらの「休息」は、神経系を休めません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「休むことを許可する」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休んでいる場合じゃない」という感覚がある場合、
          まず「休んでいい」という許可を自分に出すことが最初の一手です。
          支援職として長く続けるために、休息は必須の投資です。
        </p>
      </div>

      <h2>休んでも回復しない場合は</h2>
      <p>
        休日を過ごしても「全然回復しない」「むしろ疲れている」という状態が続く場合は、
        一人でのセルフケアだけでは限界があるサインです。
      </p>
      <p>
        <Link to="/articles/compassion-fatigue-natural-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労は自然に治るのか</Link>でも解説していますが、
        中程度以上の消耗は「ただ休む」だけでは回復しにくく、
        消耗の構造を整理した上で取り組むことが重要です。
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

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">相談するか迷っている段階でも大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">「休まらない」状態を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          休んでも回復しない背景にある消耗の構造を外から整理することが、回復の入口になります。
          支援職として働く中での消耗を前提にした相談を行っています。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-client-stuck-in-head" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 利用者の話が頭から離れない——侵入症状の原因と対処</Link>
          <Link to="/articles/helper-cannot-sleep" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 支援職が眠れない——仕事が頭から離れず眠れない原因</Link>
          <Link to="/articles/compassion-fatigue-natural-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労は自然に治るのか——回復期間と放置のリスク</Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 共感疲労からの回復方法</Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

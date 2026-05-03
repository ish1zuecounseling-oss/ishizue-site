import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function HelperCannotRestOnDaysOff() {
  return (
    <ArticleLayout
      title="支援職は休みの日も休まらない｜仕事が頭から離れない原因と対処法"
      description="休日なのに仕事のことが頭から離れない、休んでも疲れが取れない——支援職に多い「休まらない休日」の原因は神経系の慢性緊張と共感疲労です。今日からできる対処を解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-cannot-rest-on-days-off"
      date="2026-05-03"
      tags={["compassion", "burnout", "check"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        休日なのに仕事のことが浮かぶ、身体は休んでいるのに気持ちが回復しない——それは消耗のサインです。
      </p>

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

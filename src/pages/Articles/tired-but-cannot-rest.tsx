import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function TiredButCannotRest() {
  return (
    <ArticleLayout
      title="疲れているのに休めない｜止まれない・休むと罪悪感がある理由と対処"
      description="疲れているのに休めない・止まれない・休もうとすると罪悪感がある——これは自己機能の消耗と神経系の緊張から起きています。なぜ休めないのか、どう変えるかを解説します。"
      url="https://www.ishizue-counseling.jp/articles/tired-but-cannot-rest"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「疲れているとわかっているのに、止まれない」——それは意志の問題ではなく、構造の問題です。
      </p>

      <p>
        疲れているのに休めない・休もうとすると罪悪感がある・横になっても頭が働き続けている——
        これは「意志が弱い」「頑張りが足りない」の問題ではありません。
        <strong>疲れていても止まれない状態には、神経系・自己機能・責任感構造という明確な仕組みがあります。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「疲れた」と感じても「まだできる」と動き続けてしまう</li>
          <li>・休もうとすると「休んでいいのか」という罪悪感がある</li>
          <li>・横になっても頭が仕事モードのまま動いている</li>
          <li>・休日も「何かしなければ」という焦りがある</li>
          <li>・完全に休んだ後に「こんなに休んでしまった」と後悔する</li>
        </ul>
      </div>

      <h2>なぜ疲れているのに休めないのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 神経系が「緊張モード」から抜けられない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          慢性的なストレス状態では、自律神経系が交感神経優位（緊張モード）のまま固まります。
          「休もうとしても身体がオフにならない」状態です。
          これは意志の問題ではなく、神経系の生理的な変化です。
          <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>が深まるほどこの状態は顕著になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「疲れ」のシグナルへのアクセスが薄れている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>が続くと、身体感覚への気づきが薄れていきます。
          「疲れているかどうかわからない」という状態は、
          自己機能が消耗し、自分の身体感覚へのアクセスが後退しているサインです。
          疲れていても「疲れている」と気づけないため、止まるタイミングを逃します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「休む＝悪い」という信念</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休んでいる場合ではない」「まだできるのに休むのは甘え」「他の人は頑張っているのに」——
          これらの信念が、休むことを心理的に妨げます。
          <Link to="/articles/helper-responsibility-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">責任感が強い人</Link>・<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断れない人</Link>に多いパターンです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「休んでいる自分」が怖い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          動き続けることで「役に立っている自分」を確認している場合、
          止まることが「価値のない自分」に直面することへの恐れとなることがあります。
          休むと「自分が何者かわからない」という感覚が出てくる場合、
          <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能の消耗</Link>が深まっているサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ DMN過活動——横になっても頭が動く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          身体を横にしても、脳の思考系ネットワーク（DMN）が過活動のまま働き続けます。
          「休んでいるつもりでも脳は働いている」状態では、身体的休息が取れていても回復しません。
          <Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事のことが頭から離れない</Link>状態と深く関連しています。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaFatigue />

      <h2>「休めない」状態を変えるために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「休むことを許可する」を意識する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休んでいい」という許可を自分に出すことが最初の一手です。
          支援職・真面目な人ほど「休んでいい」を誰かに言ってもらう必要があることがあります。
          支援を長く続けるために、休息は必須の投資です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 神経系を「安全モード」に切り替える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「頑張って休もうとする」のではなく、神経系が自然にリラックスモードに切り替わる活動を使います。
          腹式呼吸・ぬるめのお風呂・自然の中の散歩・動物との接触——
          思考ではなく身体感覚に意識が向かう活動が神経系を整えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「切り替え儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          着替え・シャワー・決まった音楽——「今日の仕事はここで終わり」を身体に伝える儀式を作ります。
          繰り返すことで脳が「この後は休む時間」と学習します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「小さな休息」から始める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「完全に休む」のハードルが高い場合、「5分だけ何もしない」から始めます。
          大きな休息を目指すより、小さな休息を積み重ねることが神経系の回復を助けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「休息の種類」を意識する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          身体的休息・感情的休息・精神的休息・感覚的休息——休息には種類があります。
          スマートフォンを見ながらの「休憩」は精神的・感覚的には休めていません。
          <Link to="/articles/helper-mental-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休んでも回復しない理由</Link>も参照してください。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「休めない・止まれない」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">止まれない構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ止まれないのか」——消耗の構造を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/tired-but-cannot-rest"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

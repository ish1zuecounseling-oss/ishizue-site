import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function SafetyMakesSleepy() {
  return (
    <ArticleLayout
      title="安心すると眠くなる理由｜休日・帰宅後に急に疲れが出る現象の正体"
      description="「休日になると急に疲れが出る」「安心できる場所に来たとたん眠くなる」——これは怠けではなく神経系が緊張モードから解放されたサインです。その仕組みと休み方を解説します。"
      url="https://www.ishizue-counseling.jp/articles/safety-makes-sleepy"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        休日に急に疲れが出るのは、ようやく「緊張を手放せた」サインです。
      </p>

      <p>
        「平日は動けるのに、週末になると急に体が動かなくなる」「職場では元気なのに、家に帰るとぐったりする」「旅行先に着いたとたん眠くなる」——
        こんな経験はありますか？
      </p>
      <p>
        これは怠けでも、体が弱いからでもありません。
        <strong>神経系が「緊張モード」を解除し、ようやく本来の疲れを処理し始めているサイン</strong>です。
      </p>

      <h2>なぜ安心すると眠くなるのか——神経系の仕組み</h2>
      <p>
        慢性的なストレス・緊張状態では、自律神経の<strong>交感神経（緊張・戦闘モード）</strong>が優位になり続けます。
        交感神経が優位なとき、身体は「今は休めない」というモードを維持するためにアドレナリン等を分泌し、
        疲れを感じにくくさせます——これは生存のための適応反応です。
      </p>
      <p>
        しかし安全な場所・安心できる状況に入ると、交感神経の優位が解除され、
        副交感神経（休息・回復モード）に切り替わります。
        このとき、<strong>それまで「蓋をされていた疲れ」が一気に表面に出てきます。</strong>
        眠気・だるさ・何もしたくない感覚——これは疲れが「出た」のではなく、「やっと出せた」状態です。
      </p>

      <h2>「週末に疲れが出る人」のパターン</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">平日：交感神経優位のまま動き続ける</p>
          <p className="text-stone-600">責任感・役割・次々と来る課題が神経系を緊張モードに保つ。疲れを感じる余裕がない。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">週末：副交感神経への切り替えが起きる</p>
          <p className="text-stone-600">役割・緊張から解放されると、神経系が切り替わる。蓋をされていた疲れ・眠気・だるさが一気に出る。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">「週末に動けない自分」への自己批判</p>
          <p className="text-stone-600">「なぜ休日に何もできないのか」という<Link to="/articles/helper-self-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自責</Link>が追加の消耗になる。</p>
        </div>
      </div>

      <h2>これは「怠け」ではなく「回復の始まり」</h2>
      <p>
        「休日に動けない」「帰宅後ぐったりする」——これを「意志が弱い」「怠けている」と解釈すると、
        <Link to="/articles/helper-self-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自責</Link>が追加の消耗になります。
      </p>
      <p>
        正確には、<strong>「神経系がやっと回復モードに入れた」というサイン</strong>です。
        週末に疲れが出るほど、平日の消耗が深いということでもあります。
        <Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">疲れているのに止まれない</Link>状態が平日続いている場合、
        この現象が起きやすくなります。
      </p>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaFatigue />

      <h2>「安心したときの疲れ」との正しい付き合い方</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 眠くなることを許可する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休日に眠くなるのは当然」「帰宅後ぐったりするのは神経系が正しく機能している」——
          この理解が、眠気・だるさへの自己批判を緩めます。
          眠くなったら眠ることを「許可する」意識が重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「何もしない」を計画に入れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          週末の予定に「何もしない時間」を意図的に組み込むことが、
          神経系の回復を助けます。
          「もっと有意義に過ごさなければ」という思考が、回復の邪魔をすることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 平日の緊張を少しずつ緩める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「週末まで溜め込んで一気に解放」より、
          平日にも<Link to="/articles/always-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">緊張を少しずつ緩める時間</Link>を作ることが、
          週末の「どっと疲れる」を軽減します。
          短い呼吸・5分の一人時間・仕事後の切り替え儀式が有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「安心できる場所・関係」を増やす</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          疲れが「安心したときだけ出る」なら、<Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>が少ない状態です。
          「ここにいると落ち着く」場所・関係・習慣を増やすことが、
          緊張を長期間蓄積させない構造を作ります。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「週末に動けない」「帰宅後ぐったりする」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">神経系の消耗パターンを一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ安心すると疲れが出るのか」——消耗の蓄積パターンを外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/safety-makes-sleepy"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と自律神経・神経科学の知見をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

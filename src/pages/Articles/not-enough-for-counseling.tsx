import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function NotEnoughForCounseling() {
  return (
    <ArticleLayout
      title="カウンセリングを受けるほどではないと思っている方へ｜その「ほどではない」が消耗のサイン"
      description="「このくらいで相談は大げさ」「もっとひどくなってから」——その判断が消耗を深めます。どんな状態で相談していいのか、何が得られるのかを解説します。"
      url="https://www.ishizue-counseling.jp/articles/not-enough-for-counseling"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「このくらいでカウンセリングは大げさ」「もっとひどくなってから行けばいい」——そう思っていませんか？実は、<strong>「ほどではない」と感じるほど消耗が深まっている</strong>ことがあります。カウンセリングは深刻な人が使うものではなく、整理したい人が使うものです。
      </p>

      <p>
        「カウンセリングを受けるほどではない気がする」「病院に行くほどではないけれどつらい」「深刻じゃないと相談してはいけない気がする」——
        この思い込みが、相談を遅らせます。
      </p>
      <p>
        しかし<strong>カウンセリングは「深刻な症状がある人のもの」ではなく、「状態を整理したい人のもの」</strong>です。
      </p>

      <h2>「カウンセリングを受けるほどではない」という思い込みの正体</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">カウンセリング＝重篤な症状がある人のもの、という誤解</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「カウンセリングは精神的な病がある人が行くもの」という誤解は根強いです。
          しかし実際には、「なんとなく重い」「モヤモヤが続く」「消耗しているが原因がよくわからない」
          という段階でのカウンセリングが、最も効果的です。
          深刻になってからでは、回復により多くの時間が必要になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「自分の消耗を過小評価する」という支援職特有のパターン</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の苦しみを日常的に見ている支援職は、
          「自分の消耗は大したことない」と過小評価しやすいです。
          「相談するほどではない」という判断が、消耗の深さを見誤らせます。
          <Link to="/articles/why-support-workers-cannot-ask-for-help" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職が相談できない理由</Link>も参照してください。
        </p>
      </div>

      <h2>こんな状態でカウンセリングを使えます</h2>
      <div className="card space-y-2 text-sm text-stone-600">
        <p className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「なんとなくずっと重い気がする」</p>
        <p className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「最近疲れやすくなった気がする」</p>
        <p className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「自分のパターン（断れない・抱え込む）を整理したい」</p>
        <p className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「休職すべきか続けるべきか迷っている」</p>
        <p className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「感情がわからなくなってきた」</p>
        <p className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「仕事のことが頭から離れない」</p>
        <p className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「誰かに話を聞いてもらいたい」</p>
      </div>
      <p>
        これらはすべてカウンセリングを使える理由になります。
        <strong>「深刻でなければいけない」という基準はありません。</strong>
      </p>

      <h2>カウンセリングで何ができるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗の構造を「外から整理する」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜ自分はこうなるのか」「どこから変えればいいのか」——
          一人では見えにくい自分のパターンを、外から整理する機会を得られます。
          整理されるだけで、次の行動が見えやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「弱さを出しても大丈夫」という体験を積む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          カウンセリングは「評価されない場所で弱さを出す体験を積む場」です。
          <Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>として機能し、
          <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルの更新</Link>を助けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「今の状態を言語化する」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          漠然とした重さ・モヤモヤ・「なんとなくしんどい」——
          これらを言語化するだけで、消耗の正体が見えてきます。
          「うまく話せない」「何が問題かわからない」という状態でも大丈夫です。
        </p>
      </div>

      <h2>カウンセリングと医療機関の使い分け</h2>
      <div className="card">
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-28">カウンセリング</span>
            <p className="text-stone-600">「状態を整理したい」「パターンを理解したい」「話を聞いてもらいたい」段階で活用できます。</p>
          </div>
          <div className="flex gap-3 border-t border-stone-100 pt-3">
            <span className="text-xs font-medium text-stone-400 flex-shrink-0 w-28">医療機関</span>
            <p className="text-stone-600">「死にたい気持ち」「日常生活に支障がある」「2週間以上続く強い落ち込み」など医療的対処が必要な場合は医療機関優先です。</p>
          </div>
        </div>
        <p className="text-xs text-stone-400 mt-2">迷う場合は両方に相談することができます。</p>
      </div>

      <LineCtaCompassion />

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「相談するほどではないかも」と思っているあなたへ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「なんとなく重い」「整理したい」——それだけで十分です。いしずえのカウンセリングは支援職の消耗を前提にしています。状態を整理するだけでも、次が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white transition-all" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/not-enough-for-counseling"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。カウンセリングの効果は個人差があります。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自分の感情がわからないのは病気ですか？",
    a: "病気とは限りません。長期的な感情労働・過剰適応・脳疲労の蓄積によって、感情への気づきが薄れることがあります。ただし、感情のわからなさが長期間続き日常生活に影響している場合は、専門家への相談をおすすめします。",
  },
  {
    q: "感情がわからない状態は回復しますか？",
    a: "回復します。感情がわからない状態は、思考ではなく身体感覚・安全な対話・感情規則のない時間を通じて回復しやすいです。「感情を理解しよう」と頭で考え続けることより、身体感覚に戻ることが先決です。",
  },
  {
    q: "失感情症（アレキシサイミア）とは違いますか？",
    a: "失感情症（アレキシサイミア）は感情の認識・言語化が先天的・慢性的に困難な状態を指す概念です。本記事で扱う「感情がわからなくなる」は、消耗・感情労働・脳疲労によって後天的に起きる状態が中心です。ただし境界は曖昧で、気になる場合は専門家への相談が重要です。",
  },
]

export default function EmotionUnknown() {
  return (
    <ArticleLayout
      title="感情がわからない人の特徴｜自分の気持ちがわからなくなる原因と回復"
      description="「自分が何を感じているかわからない」「感情が麻痺している」——感情がわからない状態の原因・支援職に多い理由・感情労働・脳疲労との関係・回復方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/emotion-unknown"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「今どんな気持ち？」と聞かれて答えられない——それは自己機能が消耗しているサインかもしれません。
      </p>

      <p>
        「何を感じているのかわからない」「感情が平坦になってきた」「何も感じられない気がする」——
        これは冷たい性格や感情の乏しさではありません。
        <strong>感情がわからなくなる状態には、明確な仕組みがあります。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「今どんな気持ち？」と聞かれても答えられない</li>
          <li>・他人の感情はわかるのに、自分の感情がわからない</li>
          <li>・悲しいはずなのに涙が出ない</li>
          <li>・嬉しいはずなのに喜べない</li>
          <li>・「何が嫌なのか」「何がしたいのか」がわからない</li>
          <li>・感情が出てきても、すぐ押し込んでしまう</li>
        </ul>
      </div>

      <h2>なぜ感情がわからなくなるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情を「管理し続ける」ことの蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          本音と違う感情を出し続ける<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>が続くと、
          感情を「表に出すもの」と「抑えるもの」に仕分けする習慣が定着します。
          最終的に「自分が本当に何を感じているか」へのアクセスそのものが難しくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「考えること」が「感じること」を上回る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>や<Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>が深まると、
          思考系ネットワークが優位になりすぎます。
          「こうすべき」「あれをしなければ」という思考が常に働いていると、
          感情・身体感覚の信号が思考にかき消されます。
          「頭ではわかるのに感じられない」という状態はここから来ています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 脳の防御反応としての感情麻痺</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情的エネルギーが枯渇したとき、脳は「これ以上感じると壊れる」という判断で感情を遮断することがあります。
          <Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</Link>は弱さではなく、消耗への自然な適応反応です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 感情を「表現する場所」がない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「弱音を言えない」「感情を出すと迷惑」という環境が続くと、
          感情を抑圧することが習慣化されます。
          抑圧が続くと、感情は意識に上がる前に消えていくようになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 他者の感情に引っ張られすぎる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          共感能力が高く、他者の感情を読みすぎる人は、
          「相手が今どう感じているか」に常にアンテナを張っています。
          結果として「自分が今どう感じているか」への注意が薄れ、
          自己感覚が後退していきます。
        </p>
      </div>

      <h2>感情がわからない人に多い特徴</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">よくある状態・思考パターン</p>
        <div className="space-y-2 text-sm text-stone-600">
          <p>・「楽しいはずなのに楽しめない」という感覚がある</p>
          <p>・感情より先に「これは正しいのか」「どうすべきか」が出てくる</p>
          <p>・泣きたいのに泣けない・笑えない</p>
          <p>・「疲れてる？」と聞かれると「わからない」と答える</p>
          <p>・感情が出てきても、すぐ「でも…」と思考に切り替えてしまう</p>
          <p>・何かが嫌でも「嫌なのかどうかわからない」と思う</p>
        </div>
      </div>

      <h2>支援職に「感情がわからない」が多い理由</h2>
      <p>
        支援職・医療職・対人援助職は、構造的に自己感覚が消耗しやすいです。
      </p>
      <p>
        他者の感情を読む・共感する・空気を調整するという<strong>対人機能を使い続けることで、
        自分の感情を感じる・表現する・処理するという自己機能が後退していきます。</strong>
        「人の気持ちはわかるのに、自分の気持ちがわからない」という状態はここから来ています。
      </p>
      <p className="text-sm text-stone-500">
        自己機能について詳しく→ <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは何か——なぜ人は自分を見失うのか</Link>
      </p>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link>
      </p>

      <LineCtaSmall />

      <h2>感情を取り戻すために：回復のアプローチ</h2>
      <p>
        重要なのは、<strong>感情は「考えることで」取り戻せない</strong>ことです。
        「感情を理解しよう」と頭で考え続けることは、感情への回路をさらに思考化します。
        感情の回復には身体感覚からのアプローチが有効です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 身体感覚から入る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「感情がわからない」状態では、感情より先に身体感覚が回復しやすいです。
          温かいお風呂・好きな食べ物・散歩・自然との接触など、
          身体が「気持ちいい」「心地よい」と感じることから始めることが、感情系の回復につながります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「小さな感情」を拾う練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「嬉しい・悲しい」という大きな感情ではなく、
          「今日これ食べておいしかった」「あの話が少しつらかった」「この景色が好き」という
          小さな感覚を拾う練習が自己感覚を取り戻します。
          1日3行でいいので、気づいた感覚を書き出すことが有効です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「感情規則のない時間」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事中は常に感情を管理しています。
          「感情を管理しなくていい時間・場所」を意識的に作ることが、
          感情が自然に動く空間を回復させます。
          泣いても、笑っても、何も感じなくてもOKな時間です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 安全な場所で感情を出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情は安全な関係の中で少しずつ解凍されます。
          「うまく話せなくていい」「まとまっていなくていい」——
          信頼できる人・カウンセラーとの対話が、感情への回路を開く助けになります。
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

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「感情がわからない」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己感覚の回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「何を感じているかわからない」——感情がわからなくなった背景の構造を外から整理することで、
          回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/emotion-unknown"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と感情労働・共感疲労・脳疲労に関する心理学的知見をもとに作成しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function FeelingNothing() {
  return (
    <ArticleLayout
      title="何も感じない・感情が動かない｜空虚感の原因と感覚を取り戻す方法"
      description="「楽しいはずなのに楽しめない」「何も感じられない」——これは冷たさではなく自己機能の消耗サインです。なぜ起きるのか・どう取り戻すかを解説します。"
      url="https://www.ishizue-counseling.jp/articles/feeling-nothing"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「楽しいはずなのに楽しめない」「何も感じられない」——あなたにも心当たりはありませんか？これは冷たい性格でも感情が乏しいからでもなく、<strong>自己機能が消耗した状態</strong>から起きています。
      </p>

      <p>
        「楽しいはずなのに楽しめない」「悲しいはずなのに涙が出ない」「何かを達成しても何も感じない」——
        これは冷たさでも感情の乏しさでもありません。
        <strong>「何も感じない」状態は、感情的エネルギーが枯渇したとき・感情への回路が閉じたときに起きます。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・楽しいはずのことをしても、感情が動かない</li>
          <li>・以前は感じていたやりがい・喜びが薄れた</li>
          <li>・達成しても「だから何？」という感覚になる</li>
          <li>・感情が平坦で、嬉しいも悲しいも薄い</li>
          <li>・「感情がわからない」「何も感じていないような気がする」</li>
        </ul>
      </div>

      <h2>「何も感じない」の正体</h2>
      <p>
        「何も感じない」状態には大きく2つのパターンがあります。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 感情麻痺——脳の防御反応</p>
          <p className="text-stone-600 leading-[1.9]">感情的エネルギーが枯渇したとき、脳は「これ以上感じると壊れる」と判断して感情を遮断します。<Link to="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</Link>は弱さではなく、消耗への適応反応です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 感情への回路が閉じている</p>
          <p className="text-stone-600 leading-[1.9]">感情は感じるものですが、<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>や過剰適応が続くと「感情を表現・処理する回路」が閉じていきます。感情自体はあるのに、それが意識に上がってこない状態です。</p>
        </div>
      </div>

      <h2>なぜ「何も感じない」になるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情を「管理し続けた」結果</p>
        <p className="text-sm text-stone-600 leading-[1.9]">仕事中に感情を抑えて管理し続けると、感情へのアクセスそのものが薄れていきます。「感情を出さない」が習慣になると、感情が自然に動くことが難しくなります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② <Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>で動き続けた</p>
        <p className="text-sm text-stone-600 leading-[1.9]">他者の感情・期待を優先し続けると、「自分はどう感じているか」という内側への問いが後回しになります。自己感覚が薄れていき、「何を感じているかわからない」「何も感じていないような気がする」という状態になります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 思考過多——感覚が思考に埋もれる</p>
        <p className="text-sm text-stone-600 leading-[1.9]"><Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる</Link>状態では、思考系ネットワークが優位になりすぎています。感情・身体感覚の信号が思考にかき消され、感情が意識に届かなくなります。「頭ではわかるのに感じられない」という状態です。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>・エネルギー枯渇</p>
        <p className="text-sm text-stone-600 leading-[1.9]">脳疲労が深まると、感情処理に使えるエネルギーが残りません。「楽しいことをする気力がない」「感情を感じることすら疲れる」という状態が続くと、感情系が省エネモードに入ります。</p>
      </div>

      <p className="text-sm text-stone-500">
        状態を確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-emotional-numbness-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺チェック</Link>
      </p>

      <LineCtaSmall />

      <h2>感覚・感情を取り戻すために</h2>
      <p>
        「感情を感じよう」と思考で頑張ることは逆効果になることがあります。
        感情の回復には<strong>身体感覚・安全な時間・安全な関係</strong>が必要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 身体感覚から入る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「何も感じない」状態では感情より先に身体感覚が回復しやすいです。温かいお風呂・好きな食べ物・散歩・自然——身体が「気持ちいい」「心地よい」と感じることから始めることが感情系の回復につながります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「感情規則のない時間」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「感情を管理しなくていい時間・場所」を作ることが感情が自然に動くスペースを回復させます。何を感じてもいい・感じなくてもいい——この許可が感情への回路を少しずつ開きます。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「何も感じない自分」を責めない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">「感情がないのはおかしい」という自己批判がさらに感情への回路を閉じます。「今は感じにくい状態にある」という理解が、回復の土台になります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 安全な場所で少しずつ表現する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">感情は安全な関係の中で少しずつ解凍されます。「うまく話せなくていい」「まとまっていなくていい」——外に出す場所を持つことが感情系の回復を助けます。</p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「何も感じない」「空虚感が続く」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">感覚の回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">感情が動かなくなった背景にある消耗の構造を外から整理することで、回復の入口が見えてきます。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/feeling-nothing"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

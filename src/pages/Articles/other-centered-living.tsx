import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "他人軸で生きるのは悪いことですか？",
    a: "悪いことではありません。他者への配慮・共感・協調は大切な能力です。問題は「他人軸しかない」状態、つまり自分軸が消えていることです。他人軸と自分軸の両方を持てる状態が目標です。",
  },
  {
    q: "他人軸になるのはなぜですか？",
    a: "幼少期からの適応パターン・職場文化・感情労働の蓄積など複数の要因が絡みます。「他者の期待に応えることで居場所を確保してきた」という経緯を持つ方に多いです。性格の問題ではなく、後天的に形成されたパターンです。",
  },
  {
    q: "自分軸を取り戻すにはどうすればいいですか？",
    a: "思考的な「自己分析」より、身体感覚・小さな好み・感情規則のない時間を通じて回復しやすいです。「自分の感覚に正解はない」という許可を持つことが出発点になります。",
  },
]

export default function OtherCenteredLiving() {
  return (
    <ArticleLayout
      title="他人軸で生きてしまう｜「自分がない」状態の原因と自分軸を取り戻す方法"
      description="「自分がない」「いつも人の期待で動いている」——他人軸の状態はなぜ生まれるのか。自己機能低下・愛着との関係・自分軸を取り戻すための視点を解説します。"
      url="https://www.ishizue-counseling.jp/articles/other-centered-living"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「本当はどうしたい？」と聞かれて答えが出てこない。誰かに喜ばれると安心するが、一人になると空虚になる——そんな状態はありませんか？これは自己軸が消え、<strong>他人軸だけで生きている状態</strong>から起きています。
      </p>

      <p>
        「誰かに喜ばれると安心する」「期待に応えないと不安になる」「自分より相手を優先してしまう」——
        これは優しさや気遣いでもありますが、
        <strong>「他人軸しかない」状態になると、自分がわからなくなっていきます。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「本当はどうしたい？」と問われると答えられない</li>
          <li>・誰かに喜ばれると安心するが、一人になると空虚になる</li>
          <li>・相手の表情・反応を常に確認してしまう</li>
          <li>・「自分がない」と感じることがある</li>
          <li>・他者の評価が上がると自分の価値が上がった気がする</li>
          <li>・NOと言うと、相手が離れていく気がして怖い</li>
        </ul>
      </div>

      <h2>他人軸とは何か</h2>
      <p>
        <strong>他人軸とは「外側の基準（他者の期待・評価・感情）で自分を運用している状態」</strong>です。
        これは自己機能低下の核心的なパターンの一つです。
      </p>
      <div className="card">
        <div className="space-y-3 text-sm">
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-xs font-medium text-stone-400 mb-1">他人軸の状態</p>
              <ul className="text-stone-600 space-y-1">
                <li>・相手の期待に応えることで動く</li>
                <li>・評価されると価値を感じる</li>
                <li>・「どう思われるか」が判断基準</li>
                <li>・感情より役割が先に出る</li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-[#8FAF9F] mb-1">自分軸がある状態</p>
              <ul className="text-stone-600 space-y-1">
                <li>・自分のニーズ・価値観から動ける</li>
                <li>・他者の評価と切り離して自己評価できる</li>
                <li>・「自分はどうしたいか」を問える</li>
                <li>・役割と感情の両方を持てる</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xs text-stone-400 mt-3 pt-3 border-t border-stone-100">
          目標は「他人軸をなくす」ではなく「他人軸と自分軸の両方を持てる状態」です。
        </p>
      </div>

      <h2>なぜ他人軸になるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 役割適応の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援者・親・部下——役割に過剰適応し続けると「役割としての自分」が前面に出て、
          「感じる自分・望む自分」が後退します。
          「役割を降りると自分がなくなる」という感覚が出てくるのはこのパターンです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「喜ばれること」で自己価値を確認してきた</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役に立つこと」「期待に応えること」が自己価値の根拠になっていると、
          他者の評価なしには自分の価値がわからなくなります。
          支援職を選んだ背景にこのパターンがある場合、
          燃え尽きたときに「自分には何も残っていない」という感覚が出やすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 感情労働による感覚切断</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>が続くと、
          「自分の感情」より「相手に見せる感情」が優位になります。
          自分の内側の感覚へのアクセスが薄れ、
          他者の感情・反応だけが頼りになっていきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「断ると関係が壊れる」という恐れ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">NOと言えない</Link>状態の根底には、
          「断ったら嫌われる」「断ったら関係が終わる」という恐れがあることが多いです。
          この恐れが、他者の期待を常に優先させる動機になっています。
        </p>
      </div>

      <h2>他人軸が続くと起きること</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>→ <Link to="/articles/emotion-unknown" className="underline underline-offset-2">自分の感情がわからなくなる</Link></p>
        <p>→ <Link to="/articles/what-do-i-want" className="underline underline-offset-2">「何がしたいか」がわからなくなる</Link></p>
        <p>→ <Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2">疲れているのに止まれなくなる</Link></p>
        <p>→ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2">バーンアウト</Link>・空虚感・意味の喪失</p>
        <p>→ <Link to="/articles/self-function-decline" className="underline underline-offset-2">自己機能全般の低下</Link></p>
      </div>

      <p className="text-sm text-stone-500">
        愛着との関係→ <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルとは</Link> ／ <Link to="/articles/anxious-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">不安型愛着とNOが言えない</Link>
      </p>
      <p className="text-sm text-stone-500">
        自己機能について→ <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは何か</Link>
      </p>

      <LineCtaImpostor />

      <h2>自分軸を取り戻すために</h2>
      <p>
        「自分軸を取り戻す」ことは、「他者を無視する」ことではありません。
        <strong>「他者を大切にしながら、自分の感覚も失わない」状態を作ること</strong>が目標です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「小さな好み」を大切にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「今日これが少し気持ちよかった」「この食べ物が好き」「あの話が少しつらかった」——
          小さな感覚を無視せず、丁寧に拾う習慣が自分軸を回復させます。
          正解のない感覚を「自分の感覚として持っていい」という許可が出発点です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「他者評価」と「自己評価」を分ける練習</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「誰かに感謝された」「評価が上がった」という出来事と、
          「自分は今日どうだったか」という自己評価を分けて考える練習が有効です。
          他者の評価に関わらず「今日の自分」を一言で表現する習慣が、自己軸を育てます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 弱さを出せる場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他人軸が強い人ほど「弱さを出す場所」がありません。
          「弱さを出しても関係が壊れない」という体験が、
          他者への依存ではなく「自分を持ちながら関わる」能力を育てます。
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
        <p className="text-xs text-stone-500 mb-2">「自分がない」「人の期待で動いている」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">他人軸のパターンを一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜこんなに他者を優先してしまうのか」——消耗の構造を外から整理することで、自分軸への入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/other-centered-living"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

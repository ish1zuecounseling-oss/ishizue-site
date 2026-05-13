import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "他人軸とは何ですか？",
    a: "他人軸とは、自分の行動・感情・価値判断の基準が「相手がどう思うか」「期待に応えられるか」に偏っている状態です。自分の感覚や欲求より他者の反応を優先し続けることで、自己機能が消耗していきます。",
  },
  {
    q: "他人軸はなぜ抜け出せないのですか？",
    a: "他人軸は意志の問題ではなく、幼少期から形成されたワーキングモデル（内的作業モデル）という構造から来ています。「役に立つことで価値を保てる」「失望させると関係が終わる」というパターンが自動的に作動するため、意識的に変えようとしても難しいです。",
  },
  {
    q: "他人軸と自己肯定感の低さはどう関係しますか？",
    a: "他人軸が強いと、自己評価の基準が「相手の反応」に依存します。褒められると安心、批判されると全否定という不安定な状態が続き、自己肯定感が育ちにくくなります。自己肯定感を上げようとする前に、他人軸の構造を理解することが先決です。",
  },
  {
    q: "他人軸は変えられますか？",
    a: "変えられます。ただし「意識して自分を優先する」という努力より、他人軸になっている構造（ワーキングモデル）を外から整理することが有効です。構造が見えると、自然に変化の方向が見えてきます。",
  },
]

export default function OtherAxisWhat() {
  return (
    <ArticleLayout
      title="他人軸とは？抜け出せない理由と原因——自己肯定感が低くなる構造"
      description="「人の目が気になる」「断れない」「自分がわからない」——他人軸とは何か、なぜ抜け出せないのかを構造から解説。原因はワーキングモデルにあります。自己肯定感との関係も詳しく説明します。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/other-axis-what"
      date="2026-05-13"
      tags={["boundary", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「人の目が気になって仕方ない」「断れない」「自分がどうしたいかわからない」——それは他人軸という構造から起きています。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな状態はありますか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・人に嫌われることへの強い恐れがある</li>
          <li>・「NO」と言えず、あとで後悔する</li>
          <li>・褒められると安心するが、批判されると全否定された気になる</li>
          <li>・「本当はどうしたい？」と聞かれても答えが出ない</li>
          <li>・他人が怒っていると自分のせいかと感じる</li>
        </ul>
        <p className="text-xs mt-3" style={{ color: "#92400e" }}>→ これは他人軸の状態のサインかもしれません。</p>
      </div>

      <h2>他人軸とは何か</h2>
      <p>
        他人軸とは、<strong>自分の行動・感情・価値判断の基準が「相手がどう思うか」に偏っている状態</strong>です。
      </p>
      <p>
        「自分軸がない」「人の顔色ばかり見てしまう」という表現で語られることもあります。
        具体的には以下のような状態として現れます。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・相手が不機嫌だと自分のせいだと感じる</p>
        <p>・「迷惑をかけてはいけない」という感覚が強い</p>
        <p>・頼まれると断れない</p>
        <p>・褒められないと不安になる</p>
        <p>・自分の意見より「場の空気」を優先する</p>
      </div>

      <h2>他人軸はなぜ起きるのか——原因の構造</h2>
      <p>
        他人軸は「性格が弱い」「自信がない」からではありません。
        <strong>幼少期から形成された対人パターン——<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル（内的作業モデル）</Link>——が背景にあります。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ワーキングモデルとは</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          幼少期の養育者との関係から形成される「人との関係の前提」です。
          「役に立てる自分だけが受け入れてもらえる」「失望させると関係が終わる」という前提が無意識に作動すると、
          大人になっても他者の反応を常に確認し続ける他人軸になります。
        </p>
      </div>

      <div className="card mt-3">
        <p className="text-sm font-medium text-stone-700 mb-2">他人軸になる2つのパターン</p>
        <div className="space-y-3 text-sm text-stone-600">
          <div>
            <p className="font-medium">① <Link to="/articles/anxious-attachment" className="underline underline-offset-2">不安型愛着</Link>——「嫌われたら終わり」</p>
            <p className="leading-[1.9]">常に関係が壊れることを恐れ、相手の反応を監視し続ける。断ることへの強い恐れ。</p>
          </div>
          <div>
            <p className="font-medium">② <Link to="/articles/avoidant-attachment" className="underline underline-offset-2">回避型愛着</Link>——「弱さを見せたら終わり」</p>
            <p className="leading-[1.9]">「できる自分」でいることで価値を保とうとする。完璧主義・インポスター感につながりやすい。</p>
          </div>
        </div>
      </div>

      <h2>他人軸と自己肯定感の関係</h2>
      <p>
        「自己肯定感を上げたい」と感じている人の多くが、実は他人軸の状態にあります。
      </p>
      <p>
        他人軸が強いと、<strong>自己評価の基準が「相手の反応」になります</strong>。
        褒められれば高くなり、批判されれば低くなる——この不安定さが「自己肯定感が低い」という体験につながります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          自己肯定感を「上げよう」とする前に、<strong>「なぜ他者の評価に依存しているのか」という構造を見ること</strong>が先決です。
          構造が見えると、自己肯定感は努力しなくても少しずつ安定してきます。
        </p>
      </div>

      <h2>他人軸が支援職で強くなる理由</h2>
      <p>
        看護師・介護士・教員・福祉職など<Link to="/articles/why-support-workers-lose-themselves" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職</Link>では、他人軸がさらに強化されやすい構造があります。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・「利用者のために」という価値観が自己犠牲を正当化する</p>
        <p>・<Link to="/articles/helper-emotional-labor-what" className="underline underline-offset-2">感情労働</Link>で「感じないようにする」が習慣になる</p>
        <p>・「頑張らない自分には価値がない」という感覚が強まる</p>
        <p>・<Link to="/articles/impostor-syndrome" className="underline underline-offset-2">インポスター症候群</Link>——「本当の自分はバレてしまう」感覚が出る</p>
      </div>

      <h2>他人軸はなぜ抜け出せないのか</h2>
      <p>
        「もっと自分を大切に」「自分の気持ちを優先して」——このアドバイスを聞いても変わらないのはなぜか。
      </p>
      <p>
        それは<strong>他人軸が意志の問題ではなく、構造の問題</strong>だからです。
        ワーキングモデルは自動的に作動するため、「意識的に変えよう」だけでは難しいです。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「自分を優先しよう」→ 罪悪感が出る</p>
        <p>・「断ってみる」→ 強い不安が出る</p>
        <p>・「自信をつけよう」→ 次の評価が怖くなる</p>
      </div>
      <p>
        これはすべて、構造が変わっていないために起きます。
        構造を変えるには、<strong>外から整理する</strong>ことが有効です。
      </p>

      <h2>他人軸から抜け出す方向</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 構造を理解する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜ他人軸になっているのか」を<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>から整理することが最初の一歩です。
          構造が見えると、「自分の問題ではない」という感覚が生まれ、変化の余地ができます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>を育てる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「評価される自分」以外の自己側面を増やすことで、他者評価への依存が薄れます。
          趣味・関係・創作など、評価と関係ない場を持つことが助けになります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ <Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「失敗しても・弱くても受け入れてもらえる」体験の積み重ねが、ワーキングモデルを少しずつ更新します。
          安全な関係の中で「ありのまま」でいる時間が、他人軸の根本的な変化につながります。
        </p>
      </div>

      <p className="text-sm text-stone-500 mt-2">
        今の状態を確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/impostor-check-20" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">インポスター症候群チェック（20項目）</Link>
      </p>

      <LineCtaImpostor />

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
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          他人軸の構造を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「なぜ抜け出せないのか」を構造から整理することで、変化の方向が見えてきます。
          まだ決めなくていいです。整理するだけでOKです。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/other-axis-what"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
      </div>
    </ArticleLayout>
  )
}

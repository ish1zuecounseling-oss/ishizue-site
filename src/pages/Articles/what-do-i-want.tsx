import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "やりたいことがわからないのは甘えですか？",
    a: "甘えではありません。「やりたいことがわからない」状態は、役割適応・感情労働・脳疲労によって自己機能が消耗した結果として起きることが多いです。「わからなくなった」には理由があります。",
  },
  {
    q: "やりたいことは見つけようとすれば見つかりますか？",
    a: "「やりたいことを探す」という思考的アプローチは、消耗が深い状態では逆効果になることがあります。答えを探すより先に、身体感覚・感情・小さな好みを回復させることが先決です。",
  },
  {
    q: "支援職なのに自分のやりたいことがわからなくなりました",
    a: "支援職に多いパターンです。他者のニーズを優先し続けることで、自分のニーズ・欲求へのアクセスが後退していきます。「人のことはわかるのに自分のことがわからない」という状態です。",
  },
]

export default function WhatDoIWant() {
  return (
    <ArticleLayout
      title="自分が何をしたいかわからない｜「やりたいこと」が消える理由と取り戻し方"
      description="「自分が何をしたいかわからない」「やりたいことがわからない」——これは自己機能の消耗から起きています。なぜ「やりたいこと」が消えるのか、取り戻すために必要なことを解説します。"
      url="https://www.ishizue-counseling.jp/articles/what-do-i-want"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「本当はどうしたい？」と問われて、答えが出てこない——それは自己機能が消耗しているサインかもしれません。
      </p>

      <p>
        「やりたいことがわからない」「自分が何を望んでいるのかわからない」——
        これは意志の弱さや目標設定の問題ではありません。
        <strong>「やりたいこと」が消えるのには、明確な仕組みがあります。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「本当はどうしたい？」と聞かれても答えが出てこない</li>
          <li>・仕事・役割以外の「自分」がわからない</li>
          <li>・以前は好きだったことへの興味が薄れた</li>
          <li>・「やりたいことを探さなければ」と思うが見つからない</li>
          <li>・何かを達成しても「これがしたかったのか」という実感がない</li>
        </ul>
      </div>

      <h2>なぜ「やりたいこと」が消えるのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 役割に適応しすぎた結果</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援者・親・部下・上司——人は複数の役割を生きています。
          役割に過剰適応し続けると「役割としての自分」だけが機能し、
          「感じる自分・欲する自分」が後退していきます。
          「支援職として何が必要か」はわかるのに「自分として何がしたいか」が空白になるのはこのパターンです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 他者のニーズを優先し続けた</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「相手が今何を必要としているか」に常にアンテナを張り続けると、
          「自分が今何を必要としているか」という内側への問いが後回しになります。
          <Link to="/articles/helper-carrying-clients" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">利用者を背負いすぎる</Link>・<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断れない</Link>状態が続くと、
          自分のニーズへのアクセスが薄れていきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「やるべきこと」で動き続けた</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          義務・責任・「こうすべき」で動き続けると、
          「やりたい」という内発的な動機が感じられなくなっていきます。
          <Link to="/articles/helper-responsibility-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">責任感が強い人</Link>ほど、
          「やりたい」と「やるべき」の区別が曖昧になりやすいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 感覚が切れている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「やりたいこと」は思考から生まれるのではなく、身体感覚・感情・欲求から生まれます。
          <Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>や<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働の蓄積</Link>によって感覚が切れると、
          その源泉にアクセスできなくなります。
          「考えても答えが出ない」のは、感覚が閉じているからかもしれません。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        自己機能の消耗について→ <Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能とは何か</Link> ／ <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が低下するとどうなるか</Link>
      </p>

      <LineCtaImpostor />

      <h2>「答えを探す」より先に必要なこと</h2>
      <p>
        「やりたいことを見つけよう」と思考で探し続けることは、
        消耗が深い状態では逆効果になることがあります。
      </p>
      <p>
        <strong>「やりたいこと」は探すものではなく、感覚が回復したときに自然に現れてくるもの</strong>です。
        だから先にやるべきことは「答えを探す」ことではなく「感覚を回復させること」です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「小さな好み」を拾う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「やりたいことを見つける」という大きな問いではなく、
          「今日これが少し気持ちよかった」「この食べ物が好きだった」「この景色が心地よい」という
          小さな感覚を拾う練習から始めます。
          大きな欲求は小さな感覚の積み重ねから生まれます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 役割を脱ぐ時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者として」「親として」「社会人として」——
          これらの役割を意識的に脱いで、「ただの自分」でいられる時間を作ることが重要です。
          役割を脱いだときに残るものが、自己機能の核心に近いものです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 身体感覚から入る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは感覚です。</Link>
          散歩・自然・料理・運動・動物との接触など、思考ではなく感覚に意識が向かう活動が、
          「やりたいこと」の回路を回復させます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「やらなくていいこと」を減らす</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「やりたいことを増やす」より「やるべきことを減らす」方が先決なことがあります。
          義務・役割・他者の期待を少し手放すことで、
          空いたスペースに自分の感覚が戻ってきます。
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
        <p className="text-xs text-stone-500 mb-2">「自分が何をしたいかわからない」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">自己感覚の回復を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「やりたいことがわからない」背景にある消耗の構造を外から整理することで、
          回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/what-do-i-want"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

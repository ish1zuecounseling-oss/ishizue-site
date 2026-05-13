import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "境界線（バウンダリー）とは何ですか？",
    a: "境界線（バウンダリー）とは、「どこまでが自分で、どこからが他人か」を分ける心理的な感覚のことです。自分の感情・責任・エネルギーと、他者のそれとを区別する力です。これが機能しないと、相手の感情を抱え込んだり、断れなかったりする状態が続きます。",
  },
  {
    q: "境界線が弱くなるのはなぜですか？",
    a: "境界線の弱さは意志や性格の問題ではなく、幼少期から形成されたワーキングモデル（内的作業モデル）が関係しています。「断ると嫌われる」「相手に合わせないと関係が壊れる」という前提が無意識に作動し、境界線を引くことへの強い抵抗が生まれます。",
  },
  {
    q: "境界線と断れないことはどう関係しますか？",
    a: "断れない状態は、境界線が弱くなっているサインです。「相手の要求」と「自分の限界」の区別がつきにくくなり、断ることへの恐れや罪悪感が強くなります。断れない原因を解決するには、境界線の構造から理解することが先決です。",
  },
  {
    q: "支援職に境界線の問題が多いのはなぜですか？",
    a: "支援職では「相手のために」という価値観が強く、境界線を引くことが「冷たさ」に感じられやすい環境があります。感情労働で自分の感覚へのアクセスが薄れ、「どこまでが自分の責任か」がわからなくなることも多いです。これが共感疲労や燃え尽きにつながります。",
  },
]

export default function BoundaryWhat() {
  return (
    <ArticleLayout
      title="境界線とは？人間関係で疲れやすい人のためのバウンダリーの基本と構造"
      description="「断れない」「相手に合わせすぎて疲れる」「人の感情を抱え込む」——これらは境界線（バウンダリー）の問題から起きています。境界線とは何か・なぜ弱くなるのかを構造から解説します。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/boundary-what"
      date="2026-05-13"
      tags={["boundary", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「断れない」「相手に合わせすぎて疲れる」「人の感情を抱え込んでしまう」——これらに共通しているのが、境界線（バウンダリー）の問題です。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな状態はありますか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・人との距離感がうまく取れない</li>
          <li>・頼まれると断れない</li>
          <li>・相手が怒っていると自分のせいかと感じる</li>
          <li>・人の感情を受け取りすぎて疲れる</li>
          <li>・「ここまでが自分の責任」がわからなくなる</li>
        </ul>
      </div>

      <p>
        こうした状態に共通しているのが、<strong>境界線（バウンダリー）</strong>の問題です。
        境界線とは「どこまでが自分で、どこからが他人か」を分ける感覚のこと。
        この感覚がうまく機能しないと、人間関係の中で消耗しやすくなります。
      </p>

      <h2>境界線（バウンダリー）とは何か</h2>
      <p>
        境界線とは、<strong>自分の感情・責任・エネルギーと、他者のそれとを区別する心理的な感覚</strong>です。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <div>
          <p className="font-medium text-stone-700">境界線が機能している状態</p>
          <p className="leading-[1.9]">相手が怒っていても「相手の感情は相手のもの」と感じられる。断ることへの罪悪感が少ない。自分のペースで動ける。</p>
        </div>
        <div className="border-t border-stone-100 pt-2">
          <p className="font-medium text-stone-700">境界線が弱い状態</p>
          <p className="leading-[1.9]">相手の感情が自分に流れ込んでくる感覚がある。「NO」と言うと関係が壊れる気がする。相手の問題を自分の問題として抱え込む。</p>
        </div>
      </div>

      <h2>境界線が弱い人の特徴</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2">断れない・NOが言えない</Link></p>
        <p>・相手の機嫌を常にモニタリングしてしまう</p>
        <p>・「迷惑をかけてはいけない」という感覚が強い</p>
        <p>・自分の感情より相手の感情を優先する（<Link to="/articles/other-axis-what" className="underline underline-offset-2">他人軸</Link>）</p>
        <p>・<Link to="/articles/helper-carrying-clients" className="underline underline-offset-2">利用者・相手の問題を背負ってしまう</Link></p>
        <p>・人と関わった後、強い疲労感がある（<Link to="/articles/communication-fatigue" className="underline underline-offset-2">コミュニケーション疲れ</Link>）</p>
      </div>

      <h2>なぜ境界線が弱くなるのか</h2>
      <p>
        境界線の弱さは「意志が弱い」「性格の問題」ではありません。
        <strong>幼少期から形成された対人パターン——<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル（内的作業モデル）</Link>——が深く関係しています。</strong>
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">境界線が弱くなる背景</p>
        <div className="space-y-2 text-sm text-stone-600">
          <p>・「断ると嫌われる」「相手を傷つける」という強い恐れ（<Link to="/articles/anxious-attachment" className="underline underline-offset-2">不安型愛着</Link>）</p>
          <p>・「役に立てない自分には価値がない」という前提（<Link to="/articles/working-model" className="underline underline-offset-2">ワーキングモデル</Link>）</p>
          <p>・「素の自分では受け入れてもらえない」という感覚（<Link to="/articles/over-adaptation" className="underline underline-offset-2">過剰適応</Link>）</p>
        </div>
      </div>

      <p>
        これらの前提が無意識に作動しているため、
        「境界線を引こう」と意識しても強い罪悪感や不安が出てしまいます。
      </p>

      <h2>境界線とワーキングモデルの関係</h2>
      <p>
        <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>とは、幼少期の養育者との関係から形成される「人との関係の前提」です。
      </p>
      <p>
        「相手の感情に合わせることで関係を保ってきた」という経験が積み重なると、
        <strong>「自分の感情を優先すること＝関係を壊すこと」という前提</strong>が形成されます。
        これが境界線を引くことへの深い抵抗の正体です。
      </p>
      <div className="card text-sm text-stone-600 leading-[1.9]">
        境界線の問題は表面的な「断り方」を練習するより、
        この前提（ワーキングモデル）を理解することから変化が始まります。
      </div>

      <h2>支援職で境界線の問題が強くなる理由</h2>
      <p>
        看護師・介護士・福祉職・教員などの<Link to="/articles/why-support-workers-lose-themselves" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職</Link>では、境界線の問題がさらに強化されやすい構造があります。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・「相手のために」という価値観が境界線を引くことを「冷たさ」に感じさせる</p>
        <p>・<Link to="/articles/helper-emotional-labor-what" className="underline underline-offset-2">感情労働</Link>で「自分の感覚」へのアクセスが薄れる</p>
        <p>・「どこまでが自分の責任か」がわからなくなる</p>
        <p>・これが<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2">共感疲労</Link>・<Link to="/articles/helper-burnout" className="underline underline-offset-2">燃え尽き</Link>につながる</p>
      </div>

      <p className="text-sm text-stone-500">
        今の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link> ／ <Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線セルフチェック</Link>
      </p>

      <LineCtaCompassion />

      <h2>境界線を守るために必要なこと</h2>
      <p>
        境界線を「引けるようになる」ためには、HowToより先に<strong>構造を理解すること</strong>が重要です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① なぜ引けないのかを理解する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「断ると嫌われる」という前提がどこから来ているのかを
          <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>から整理します。
          原因が見えると、罪悪感の正体がわかってきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 他人軸から自分軸へ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          境界線を引くことは「相手を拒絶すること」ではなく、
          「自分の感覚に戻ること」です。
          <Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>の構造を理解することが変化の入口になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ <Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「断っても関係が続いた」「弱さを出しても受け入れてもらえた」という体験の積み重ねが、
          境界線を引くことへの恐れを少しずつ緩めます。
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          境界線の構造を外から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「断れない」「抱え込んでしまう」——その背景にある構造を整理することで、変化の方向が見えてきます。
          まだ決めなくていいです。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/boundary-what"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
      </div>
    </ArticleLayout>
  )
}

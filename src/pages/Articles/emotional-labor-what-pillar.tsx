import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "感情労働とは何ですか？",
    a: "感情労働とは、仕事の中で自分の感情をコントロールし、求められる感情を表現することです。看護・介護・福祉・教育・接客などの職種で特に強く求められます。本音と違う感情を出し続ける「内外のズレ」が積み重なることで、心身の消耗が起きやすくなります。",
  },
  {
    q: "感情労働はなぜつらくなるのですか？",
    a: "感情そのものより「ズレ」が消耗を生みます。本当は疲れているのに笑顔で対応する、違和感があるのに共感し続けるといった状態が続くと、自分の感覚がわからなくなり、消耗が蓄積します。これが共感疲労やバーンアウトにつながります。",
  },
  {
    q: "感情労働と共感疲労の違いは何ですか？",
    a: "感情労働は「仕事上の感情管理の要求」そのものを指します。共感疲労は、他者の苦しみに共感し続けることで生じる消耗状態です。感情労働が長期化すると共感疲労が起きやすくなります。感情労働が原因・共感疲労が結果、という関係です。",
  },
  {
    q: "感情労働による消耗はどう回復しますか？",
    a: "「頑張り方」を変えるだけでは回復しにくいです。なぜその状態になっているのかを構造から整理することが重要です。境界線・他人軸・ワーキングモデルという背景を理解することで、消耗のパターンが変わってきます。",
  },
]

export default function EmotionalLaborWhatPillar() {
  return (
    <ArticleLayout
      title="感情労働とは？仕事で消耗する人のための構造と回復の考え方"
      description="感情労働とは、仕事の中で感情をコントロールし続けることです。なぜ消耗するのか・共感疲労との関係・境界線・他人軸・ワーキングモデルとの構造的なつながりを解説します。看護師・介護・福祉・教員向け。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/emotional-labor-what-pillar"
      date="2026-05-13"
      tags={["emotional-labor", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「仕事だから仕方ない」と思いながら、感情を押し殺して働いていませんか？それは感情労働による消耗かもしれません。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな状態はありますか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・本当はつらいのに笑顔で対応している</li>
          <li>・イライラしても表に出せない</li>
          <li>・相手に合わせ続けて、仕事後に疲れ果てる</li>
          <li>・「なぜこんなに疲れるのか」自分でもわからない</li>
          <li>・休んでも気持ちが回復しない</li>
        </ul>
      </div>

      <p>
        こうした状態は、<strong>感情労働</strong>と呼ばれるものです。
        感情労働は、意識しないまま続けていると、
        <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>や
        <Link to="/articles/helper-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト</Link>につながります。
      </p>

      <h2>感情労働とは何か</h2>
      <p>
        感情労働とは、<strong>仕事の中で自分の感情をコントロールし、求められる感情を表現すること</strong>です。
        社会学者アーリー・ホックシールドが提唱した概念で、特に対人援助職で強く求められます。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <div>
          <p className="font-medium text-stone-700">感情労働が求められる場面（例）</p>
          <ul className="space-y-1 mt-1">
            <li>・利用者が怒っていても穏やかに対応する（介護・福祉）</li>
            <li>・患者の不安に共感しながら冷静に処置する（看護）</li>
            <li>・子どもの問題に感情的にならず対応する（教育）</li>
            <li>・クレームを受けながらも笑顔を保つ（接客）</li>
          </ul>
        </div>
      </div>
      <p>
        これらは仕事として必要なことです。ただし、
        <strong>「本音と外に出す感情のズレ」が積み重なること</strong>が消耗の原因になります。
      </p>

      <h2>なぜ感情労働はつらくなるのか</h2>
      <p>
        感情労働がつらくなるのは、感情そのものよりも<strong>「ズレ」が消耗を生む</strong>からです。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・本当は疲れているのに元気に振る舞う</p>
        <p>・違和感があるのに笑顔で対応する</p>
        <p>・怒りを感じても抑え込む</p>
        <p>・悲しみを感じても「仕事だから」と切り替える</p>
      </div>
      <p>
        この「内側と外側のズレ」が積み重なると、自分の感覚がわからなくなります。
        「なぜこんなに疲れているのか」「何が嫌なのか」がわからなくなる——
        これが<Link to="/articles/emotion-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情がわからなくなる</Link>状態の正体のひとつです。
      </p>

      <h2>感情労働と共感疲労の関係</h2>
      <p>
        感情労働が続くと、特に対人援助職では<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労</Link>が起きやすくなります。
      </p>
      <div className="card text-sm">
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="font-medium text-stone-700 mb-1">感情労働</p>
            <p className="text-stone-600 leading-relaxed">仕事の中で感情を管理し続ける「要求」</p>
          </div>
          <div className="text-stone-300 flex items-center">→</div>
          <div className="flex-1">
            <p className="font-medium text-stone-700 mb-1">共感疲労</p>
            <p className="text-stone-600 leading-relaxed">他者の苦しみへの共感による消耗状態（結果）</p>
          </div>
        </div>
      </div>
      <p>
        感情労働が長期化すると、
        利用者・患者・生徒への共感そのものが消耗源になっていきます。
        「以前より共感できなくなった」「感情が麻痺してきた気がする」——
        これは<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労の初期サイン</Link>かもしれません。
      </p>

      <LineCtaCompassion />

      <h2>感情労働と境界線の関係</h2>
      <p>
        感情労働の負担は、<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線（バウンダリー）</Link>の状態と強く関係しています。
      </p>
      <div className="card text-sm text-stone-600 leading-[1.9]">
        <p className="font-medium text-stone-700 mb-1">境界線が弱い状態では</p>
        <p>相手の感情をそのまま受け取りやすく、感情労働の負担が大きくなります。「どこまでが自分の責任か」がわからなくなり、抱え込みが止まらなくなります。</p>
      </div>
      <p>
        感情労働で消耗している場合、
        <Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線の構造</Link>を理解することが回復の入口になります。
      </p>

      <h2>感情労働と他人軸の関係</h2>
      <p>
        感情労働が続くと、<Link to="/articles/other-axis-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>が強化されやすくなります。
      </p>
      <p>
        「相手を優先すること」が習慣化すると、
        自分の感覚より他人の期待が優先されます。
        「どこまで頑張ればいいのか」がわからなくなり、消耗が止まりにくくなります。
      </p>
      <div className="card text-sm text-stone-600">
        感情労働 → 他人の感情・期待を優先 → 自分の感覚が後回し → <Link to="/articles/other-axis-what" className="underline underline-offset-2">他人軸の強化</Link> → さらに消耗
      </div>

      <h2>なぜその状態になるのか——構造的な理由</h2>
      <p>
        感情労働のしやすさには、
        これまでの対人関係の経験——<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル（内的作業モデル）</Link>——が関係しています。
      </p>
      <div className="card text-sm text-stone-600 leading-[1.9]">
        「こう振る舞わないと受け入れてもらえない」という前提が無意識に作動すると、
        仕事の中で感情を調整し続けるパターンが強くなります。
        これが感情労働の疲れやすさの構造的な理由です。
      </div>
      <p>
        <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>を理解することで、
        「なぜこんなに感情労働がしんどいのか」の原因が見えてきます。
      </p>

      <h2>感情労働による消耗のサイン</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・仕事後に感情が空っぽになる感覚がある</p>
        <p>・利用者・患者へのやりがいが薄れてきた</p>
        <p>・「笑顔で対応する」ことが苦痛になってきた</p>
        <p>・休日も仕事モードから切り替えられない</p>
        <p>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2">共感疲労チェック</Link>で高スコアが出る</p>
      </div>

      <h2>回復の考え方</h2>
      <p>
        感情労働による消耗は、<strong>「頑張り方」を変えるだけでは回復しにくい</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗の構造を理解する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜこんなに疲れるのか」を
          感情労働→境界線→他人軸→ワーキングモデルという構造から整理します。
          原因が見えると、消耗を減らす方向が見えてきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情の「ズレ」に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「本当は今どう感じているか」を確認する時間を持つことが、
          感情労働からの回復の基本です。
          感情がわからなくなっている場合は→ <Link to="/articles/recovering-feeling" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情・感覚を取り戻す方法</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 境界線を意識する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「相手の感情」と「自分の感情」を分ける練習が、
          感情労働の負担を減らす実践的な方向です。
          → <Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線とは何か</Link>
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
          感情労働の消耗を構造から整理したいとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「なぜこんなに疲れるのか」を構造から整理することで、消耗を減らす方向が見えてきます。
          まだ決めなくていいです。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/emotional-labor-what-pillar"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
      </div>
    </ArticleLayout>
  )
}

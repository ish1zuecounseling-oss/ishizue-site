import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import LineCta, { LineCtaSmall } from "../../components/LineCta"

export default function CompassionFatigueCauses() {
  return (
    <ArticleLayout
      title="共感疲労の原因とは｜支援職がなりやすい7つの構造的な理由"
      description="共感疲労はなぜ起きるのか。意志の弱さや性格の問題ではなく、支援職という仕事の構造に原因があります。7つの原因と、それぞれへの対処の入口を解説します。"
      url="https://www.ishizue-counseling.jp/articles/compassion-fatigue-causes"
      date="2026-04-29"
      tags={["compassion", "burnout", "boundary"]}
    >

      
      {/* カニバリ解消：ピラー記事への誘導 */}
      <div className="my-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-[11px] text-stone-500 mb-1.5 tracking-wide">この記事は「共感疲労」シリーズの一部です</p>
        <p className="text-xs text-stone-600 leading-relaxed">
          共感疲労の症状・原因・診断・治し方の全体像は
          <Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-700 hover:text-stone-900 mx-1 font-medium">
            共感疲労とは（総合解説）
          </Link>
          にまとめています。本記事はそのうち「原因」を詳しく扱います。
        </p>
      </div>

<p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「なぜこんなに疲れるのか、自分でもわからない」——その答えを探している方へ向けて書いています。
      </p>

      <p>
        共感疲労の原因は、意志の弱さでも、支援職への適性不足でもありません。
        支援職という仕事の<strong>構造そのものに、消耗を生み出す理由</strong>があります。
      </p>
      <p>
        原因が見えると、自分を責めるのをやめられます。そして初めて、適切な対処ができるようになります。
      </p>

      {/* まずチェック */}
      <h2>まずチェック：共感疲労の状態ですか？</h2>
      <ul className="space-y-1">
        <li>・仕事後も利用者のことが頭から離れない</li>
        <li>・以前より感情が動きにくくなった、または過敏になった</li>
        <li>・休んでも疲れが回復しない</li>
        <li>・支援へのモチベーションが落ちてきた</li>
      </ul>
      <p>→ 2つ以上当てはまる場合、共感疲労が進んでいる可能性があります。</p>
      <p className="text-sm text-stone-500">
        詳しく確認したい方は→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>共感疲労とは何か</h2>
      <p>
        共感疲労（Compassion Fatigue）とは、他者の苦しみや痛みに継続的に共感することで生じる、
        心理的・感情的・身体的な消耗状態です。
        直接的な体験ではなく、<strong>他者の苦しみへの共感を通じて生じる</strong>傷つきという点が特徴です。
      </p>
      <p>
        看護師・介護職・社会福祉士・保育士・教師など、人を支援することを仕事にしている人ほど
        なりやすいとされています。
      </p>

      <h2>共感疲労の原因：7つの構造的な理由</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情労働の継続的な負荷</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は感情を「仕事の道具」として使い続けます。
          怒りや悲しみを抑えながら、相手の感情に寄り添い続ける——
          これを感情労働と呼びます。
          感情労働は目に見えない消耗であるため、「普通に働いているだけ」に見えながら
          深く疲れていくという特徴があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 他者の苦しみを「自分ごと」として引き受ける構造</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職では「相手の立場になって考える」ことが求められます。
          神経科学の研究では、他者の苦痛に共感するとき、
          自分が苦痛を感じているときと類似した脳の反応が起きることがわかっています。
          共感し続けることは、ある意味で自分も苦痛を感じ続けることに近い状態です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ バウンダリー（境界線）の曖昧さ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バウンダリーとは、「他者と自分を分ける心理的な境界線」のことです。
          支援職では「どこまで関わるか」の境界線が曖昧になりやすく、
          利用者の問題を「自分の問題」として抱え込むことで消耗が加速します。
          「もっとできたはず」「自分の責任」という感覚が続く場合、
          バウンダリーが機能していないサインかもしれません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「助ける側が助けを求めてはいけない」という規範</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者が弱音を言うべきではない」「自分のことより相手のことを優先すべき」——
          こうした職場文化や内在化された規範が、消耗のサインに気づくことを妨げます。
          また、相談したいと思っても「この程度で」という感覚が相談を遠ざけます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ やりがいが消耗を隠す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「利用者の役に立てた」という充足感が、疲れの自覚を遅らせます。
          「やりがいがあるから大丈夫」と思っているうちに、
          気づいたときには深く消耗しているというパターンが多い。
          共感疲労は「やりがいがある人ほどなりやすい」とも言われます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑥ 二次受傷の蓄積</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          虐待・暴力・死・重篤な疾患など、
          利用者の深刻な体験に継続的に関わることで、
          支援者自身がその体験の影響を受けることがあります（二次受傷）。
          フラッシュバックのような反応・睡眠障害・過剰な警戒心などが現れることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑦ 組織・環境の構造的な問題</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人手不足・過重な業務量・スーパービジョンの不足・
          チームの孤立化——個人の努力だけでは変えにくい環境要因が、
          共感疲労のリスクを高めます。
          「自分が弱いから」ではなく、「環境が整っていない」という視点も重要です。
        </p>
      </div>

      <h2>なぜ「原因を知ること」が回復の出発点になるのか</h2>
      <p>
        共感疲労の原因が「自分の弱さ」ではなく「構造的な理由」だとわかると、
        自己批判から抜け出せます。
      </p>
      <p>
        自己批判が続く状態では、セルフケアに取り組む気力が湧きにくく、
        専門家に相談することへの抵抗も強くなります。
        「なぜそうなっているのか」を理解することが、
        適切な対処の入口になります。
      </p>

      <div className="my-6 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-xs font-medium text-stone-700 mb-2">共感疲労に気づいたときの次のステップ</p>
        <ul className="text-xs text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>1.</span>今の状態を確認する（チェック）</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>2.</span>原因の構造を理解する（この記事）</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>3.</span>自分に合った対処法を試す</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>4.</span>一人で難しければ専門家に相談する</li>
        </ul>
      </div>


      <LineCta />
      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-2">原因がわかっても、一人では変えにくいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「原因はわかった。でも職場環境が変わらない」「わかっていても消耗が止まらない」——
          そういった状態では、消耗の構造を外から整理することが回復を早めることがあります。
          支援職として働く中での消耗を前提にした相談を行っています。
        </p>
        <a
          href="/#contact"
          className="block text-center py-2.5 rounded-xl text-sm font-medium text-white"
          style={{ background: "#7EB8A4", textDecoration: "none" }}
        >
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      {/* 内部リンク（クラスター順番設計：チェック→原因→対処→回復） */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">共感疲労クラスター——あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ① 共感疲労チェック（20項目・3分）——まず今の状態を確認する
          </Link>
          <Link to="/articles/compassion-fatigue-coping" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ③ 共感疲労の対処法7つ——今日からできるケア
          </Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ④ 共感疲労からの回復方法——長期的な回復プロセス
          </Link>
          <Link to="/articles/helper-boundary" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → バウンダリー（境界線）とは——断れない支援職の対処法
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。
      </p>

      {/* 共感疲労クラスター導線 */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6">
        <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>
          共感疲労を深く知る
        </p>
        <div className="flex flex-col gap-2">
          <a href="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ← チェック——今の消耗度を確認する
          </a>
          <span className="text-sm text-stone-400 flex items-center gap-2">
            <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "#8FAF9F", color: "#fff" }}>今ここ</span>
            原因——なぜ支援職がなりやすいのか
          </span>
          <a href="/articles/compassion-fatigue-coping" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            次に読む → 共感疲労の対処法7つ——今日からできるケア
          </a>
          <a href="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労からの回復方法——長期的な視点で整える
          </a>
        </div>
      </div>

    </ArticleLayout>
  )
}

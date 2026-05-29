import ArticleLayout from "../../components/ArticleLayout";
import { Link } from "react-router-dom";
import ArticleFooterLinks from "../../components/ArticleFooterLinks";

const FAQ_ITEMS = [
  {
    q: "支援職がバーンアウトしやすいのはなぜですか?",
    a: "「疲れるから」だけではなく、構造的な要因があります。①感情労働の蓄積(自分の感情を管理しながら他者に関わり続ける)、②共感疲労・二次受傷(利用者の苦しみに深く関わることで自分も影響を受ける)、③境界線の曖昧さ(どこまでが自分の責任か揺らぐ)、④「支援者は強くあるべき」という信念。これらが重なって消耗が加速します。意志や能力の問題ではありません。",
  },
  {
    q: "バーンアウトは「弱さ」ですか?",
    a: "違います。バーンアウトになるのは、責任感が強く、真剣に仕事に向き合ってきた証です。いい加減に働いている人はバーンアウトしません。消耗しているのは、それだけ誠実に関わってきたから。ただし、誠実さと自己犠牲は別物で、消耗の放置は支援の質を下げることにつながります。",
  },
  {
    q: "バーンアウトと共感疲労・うつ病はどう違いますか?",
    a: "共感疲労は他者の苦痛に共感し続けることで起きる、より特異的な消耗です。うつ病は生活全般に影響が及び、医学的治療が必要な疾患です。バーンアウトはこれらと重なることもあり、長期化すると別の状態に発展することがあります。気になる場合は専門家への相談をおすすめします。",
  },
  {
    q: "回復には何が必要ですか?",
    a: "単に「休む」だけでは不十分なことがあります。消耗を生む構造(職場環境・対人パターン・自己否定・感情労働)を整理することが重要です。「なぜ消耗しているか」を言語化し、役割と責任の範囲を整理し、感情を安全に表現できる場を持ち、助けを求めることを自分に許可する。これらが回復の核になります。",
  },
];

export default function HelperBurnout() {
  return (
    <ArticleLayout
      title="支援職のバーンアウトとは｜燃え尽き症候群の構造と回復の視点"
      description="支援職に起こりやすいバーンアウト（燃え尽き症候群）の構造と心理的背景、回復に向けた視点を整理します。"
      url="https://www.ishizue-counseling.jp/articles/helper-burnout"
      date="2026-03-20"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >

      {/* ▼ 監修者ボックス */}
      <div className="my-4 p-4 rounded-2xl border border-stone-200 bg-white">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
            <span className="text-[10px] text-stone-500 tracking-wider">監修</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-stone-800 mb-0.5">公認心理師による解説</p>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              障害福祉15年・カウンセリング累計300名以上の臨床経験／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        バーンアウト（燃え尽き症候群）とは、長期的な心理的ストレスによって
        感情的・精神的・身体的なエネルギーが著しく消耗した状態を指します。
        対人援助職では特に起こりやすいとされており、
        その背景には支援という仕事特有の構造があります。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        この記事ではバーンアウトの基本的な構造を解説します。症状・原因・回復方法・期間など、
        より詳しく知りたい方は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>に全体像をまとめています。
      </p>

      <h2>バーンアウトとは何か</h2>
      <p>
        バーンアウトは、心理学者クリスティーナ・マスラックによって体系化された概念で、
        主に3つの要素で構成されています。
      </p>
      <div className="card space-y-4">
        <div>
          <p className="font-medium">① 情緒的消耗</p>
          <p>感情的なエネルギーが使い果たされた状態。感情が動かなくなったり、疲れ果てた感覚が続く。</p>
        </div>
        <div>
          <p className="font-medium">② 脱人格化（離人化）</p>
          <p>利用者や仕事に対して冷淡・無関心になっていく状態。「どうでもいい」という感覚が出てくることも。</p>
        </div>
        <div>
          <p className="font-medium">③ 個人的達成感の低下</p>
          <p>「自分は何もできていない」という無力感。以前は感じていたやりがいが感じられなくなる。</p>
        </div>
      </div>
      <p>
        この3つが重なった状態がバーンアウトであり、
        単なる「疲れ」とは異なる深刻な消耗です。
        進行には段階があり、詳しくは<Link to="/articles/burnout-four-stages" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の4段階</Link>で解説しています。
      </p>

      <h2>支援職がバーンアウトしやすい理由</h2>
      <p>
        支援職は、その仕事の性質上バーンアウトのリスクが高いとされています。
        理由は「疲れるから」だけではなく、構造的な問題があります。
        原因の全体像は<Link to="/articles/burnout-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の原因</Link>にまとめています。
      </p>

      <h3>感情労働の蓄積</h3>
      <p>
        自分の感情を管理しながら他者に関わり続けることで、
        内面とのズレが少しずつ積み重なります。
        この消耗は目に見えないため、気づかないうちに進行しやすいのです。
        詳しくは<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link>を参照してください。
      </p>

      <h3>共感疲労（二次受傷）</h3>
      <p>
        利用者の苦しみや困難に深く関わることで、
        支援者自身も心理的な影響を受けます。
        「この人を何とかしなければ」という強い責任感がある人ほど、
        この消耗は大きくなりやすいとされています。
        自分の状態は<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>で確認できます。
      </p>

      <h3>境界線（バウンダリー）の曖昧さ</h3>
      <p>
        「どこまでが自分の責任か」という境界が揺らぐと、
        利用者の問題を自分の問題のように抱え込みやすくなります。
        これが責任の過剰化につながり、消耗を加速させます。
        詳しくは<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線（バウンダリー）とは</Link>を参照してください。
      </p>

      <h3>「支援者は強くあるべき」という信念</h3>
      <p>
        「自分が弱音を吐いてはいけない」という信念が、
        助けを求めることを妨げます。
        消耗しているのに休めない、相談できないという状況が続くと、
        バーンアウトへと進みやすくなります。
      </p>

      <h2>バーンアウトは「弱さ」ではない</h2>
      <p>
        バーンアウトになるのは、責任感が強く、真剣に仕事に向き合ってきた証でもあります。
        いい加減に働いている人はバーンアウトしません。
      </p>
      <blockquote>
        <p>消耗しているのは、それだけ誠実に関わってきたからです。</p>
      </blockquote>
      <p>
        ただし、誠実さと自己犠牲は別物です。
        消耗を放置することは、支援の質を下げることにもつながります。
        自分の状態を整えることは、支援を続けるための必要な行為です。
      </p>

      <h2>バーンアウトからの回復に必要なこと</h2>
      <p>
        バーンアウトからの回復には、単に「休む」だけでは不十分なことがあります。
        消耗の構造そのものを整理することが重要になります。
      </p>
      <div className="card space-y-3">
        <p>自分がなぜ消耗しているかの「構造」を理解する</p>
        <p>役割と責任の範囲を言語化・整理する</p>
        <p>感情を安全に表現できる場所を持つ</p>
        <p>「助けを求めること」への許可を自分に与える</p>
        <p>持続可能なペースで働くための設計を見直す</p>
      </div>
      <p>
        これらは一人でできることと、誰かのサポートが必要なことが混在しています。
        カウンセリングはその整理を一緒に行う場として機能することがあります。
        具体的な回復方法は<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link>、
        回復にかかる期間は<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?</Link>を参照してください。
      </p>

      <h2>まとめ</h2>
      <div className="card space-y-2">
        <p>バーンアウトは感情的消耗・脱人格化・達成感の低下が重なった状態</p>
        <p>支援職は感情労働・共感疲労・境界線の曖昧さなどの構造的リスクがある</p>
        <p>バーンアウトは弱さではなく、誠実に関わってきた結果として起こる</p>
        <p>回復には休息だけでなく、消耗の構造を整理することが必要</p>
      </div>
      <p>
        「最近おかしいな」と感じている感覚は、大切なシグナルです。
        その感覚を無視せず、立ち止まるきっかけにしてください。
      </p>

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          バーンアウトの回復は「構造の整理」が鍵です。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">消耗の構造を整理したい支援職の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          バーンアウトは「弱さ」ではなく、誠実に関わってきた結果です。消耗を生む構造を、構造を理解した専門家と一緒に整理することで、回復への道筋が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/helper-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>

    </ArticleLayout>
  );
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "バーンアウトの前兆（サイン）にはどんなものがありますか?",
    a: "代表的な前兆は、①利用者の話に感情が動きにくくなる、②仕事が終わってもケースが頭から離れない、③断ることに強い罪悪感を感じる、④小さなミスに強く落ち込む、⑤朝起きること自体が負担、⑥やりがいを感じにくくなる、です。一つひとつは小さく見えても、積み重なることで大きな消耗につながります。2週間以上続いている場合は注意が必要です。",
  },
  {
    q: "なぜ支援職はバーンアウトの前兆に気づきにくいのですか?",
    a: "支援職は「相手を優先する」場面が多く、自分の状態を後回しにしやすいためです。また、責任感や使命感が強い人ほど「まだ大丈夫」と無理を続けてしまいます。その結果、気づいたときにはすでに大きく消耗している、という状況が起こりやすくなります。「少し疲れているかも」という段階で立ち止まることが重要です。",
  },
  {
    q: "前兆の段階で気づけると、何が違いますか?",
    a: "初期段階での対処なら、数週間〜1〜2ヶ月で回復できることが多く、仕事を続けながら対処できるケースもあります。中度・重度まで進むと、回復に3〜6ヶ月以上かかり、休職が必要になることもあります。前兆で気づくことは、回復にかかる時間・労力・負担のすべてを大きく減らします。",
  },
  {
    q: "前兆に気づいたら、まず何をすればいいですか?",
    a: "①消耗源から物理的に離れる時間を作る、②睡眠・食事を最優先する、③「断る」「手を抜く」を意識的に練習する、④信頼できる人に状況を話す、⑤産業医・心療内科に相談する、が基本です。「気合いで乗り越える」「もっと頑張る」は逆効果です。前兆の段階だからこそ、早めの対処が効きます。",
  },
];

export default function HelperBurnoutSigns() {
  return (
    <ArticleLayout
      title="バーンアウトの前兆（サイン）とは｜支援職が気づきたい心と体の変化"
      description="バーンアウトの前兆（サイン）とは、心身のエネルギーが徐々に消耗していく過程で現れる小さな変化の積み重ねです。支援職では気づきにくい形で進行することが多く、早めに違和感を捉えることが重要になります。"
      url="https://www.ishizue-counseling.jp/articles/helper-burnout-signs"
      date="2026-03-21"
      audio="/audio/helper-burnout-signs.mp3"
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
        バーンアウトの前兆（サイン）とは、心身のエネルギーが徐々に消耗していく過程で現れる小さな変化の積み重ねです。
        支援職では気づきにくい形で進行することが多く、早めに違和感を捉えることが重要になります。
      </p>

      <p>
        バーンアウトは突然起こるものではなく、徐々に進行していくプロセスの中で形成されます。
        特に対人援助職では、日常的に他者の問題や感情に関わるため、自分自身の疲労に気づきにくい傾向があります。
        そのため「少し疲れているかもしれない」という段階で立ち止まることが、長く支援を続けるための重要なポイントになります。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        この記事では前兆のサインに焦点を当てます。より詳しい初期症状の一覧は<Link to="/articles/burnout-early-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の初期症状・前兆（10サイン）</Link>、バーンアウト全体の構造は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>にまとめています。
      </p>

      <h2>バーンアウトの前兆として現れやすいサイン</h2>
      <p>現場では、次のような変化が見られることがあります。</p>
      <div className="card space-y-2">
        <p>利用者の話に対して感情が動きにくくなる</p>
        <p>仕事が終わっても頭の中でケースが離れない</p>
        <p>断ることに強い罪悪感を感じる</p>
        <p>小さなミスに強く落ち込む</p>
        <p>朝起きること自体が負担に感じる</p>
        <p>やりがいを感じにくくなる</p>
      </div>
      <p>
        これらは一つひとつは大きな問題に見えないかもしれませんが、
        積み重なることで大きな消耗へとつながります。
        自分の状態は<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック（20項目）</Link>で確認できます。
      </p>

      <h2>なぜ気づきにくいのか</h2>
      <p>
        支援職は「相手を優先する」ことが求められる場面が多く、
        自分の状態を後回しにしやすい傾向があります。
      </p>
      <p>
        また責任感の強さや使命感があるほど、
        「まだ大丈夫」と無理を続けてしまうことも少なくありません。
      </p>
      <p>
        その結果、気づいたときには
        すでに大きく消耗しているという状況が起こりやすくなります。
      </p>

      <h2>心理的な背景（構造）</h2>
      <div className="card space-y-4">
        <div>
          <p className="font-medium text-stone-900">感情労働</p>
          <p className="text-sm text-stone-600 leading-[1.9]">
            感情を調整しながら関わることで、内面とのズレが蓄積しやすくなります。
            詳しくは<Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働とは</Link>を参照してください。
          </p>
        </div>
        <div>
          <p className="font-medium text-stone-900">共感疲労（二次受傷）</p>
          <p className="text-sm text-stone-600 leading-[1.9]">
            他者の苦しみに触れ続けることで、自分自身の心理的負担も増加します。
            <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>で状態を確認できます。
          </p>
        </div>
        <div>
          <p className="font-medium text-stone-900">境界線（バウンダリー）の曖昧さ</p>
          <p className="text-sm text-stone-600 leading-[1.9]">
            相手の問題を自分の問題のように抱え込み、責任が過剰になりやすくなります。
            詳しくは<Link to="/articles/boundary-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線（バウンダリー）とは</Link>を参照してください。
          </p>
        </div>
      </div>
      <p>
        これらの要素が重なることで、徐々にエネルギーが消耗し、前兆として現れてきます。
        原因の全体像は<Link to="/articles/burnout-causes" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の原因</Link>にまとめています。
      </p>

      <h2>小さな違和感に気づくこと</h2>
      <p>
        バーンアウトは「ある日突然起こるもの」ではなく、
        小さな違和感の積み重ねの結果として現れます。
      </p>
      <p>
        そのため、「最近少し疲れているかもしれない」といった感覚を無視しないことが重要になります。
        自分の状態を振り返ることは、支援を長く続けるための基盤とも言えるでしょう。
      </p>

      <h2>前兆に気づいたら——早めの対処を</h2>
      <p>
        前兆の段階で気づけたら、以下の対処が効果的です。重症化する前だからこそ、早めの対処が効きます。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p>・消耗源から物理的に離れる時間を作る</p>
        <p>・睡眠・食事を最優先する</p>
        <p>・「断る」「手を抜く」を意識的に練習する</p>
        <p>・信頼できる人に状況を話す</p>
        <p>・産業医・心療内科に相談する</p>
      </div>
      <p>
        「気合いで乗り越える」「もっと頑張る」は逆効果です。
        具体的な回復方法は<Link to="/articles/burnout-recovery-methods" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群の回復方法</Link>を参照してください。
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
          「まだ大丈夫」と思える前兆の段階での相談が、最も悪化を防ぎます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">前兆に気づいた支援職の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          前兆の段階で立ち止まれることは、長く支援を続けるための大切な力です。「受診するほどではないかも」と感じる段階で整理しておくことで、重症化を防げます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/helper-burnout-signs"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

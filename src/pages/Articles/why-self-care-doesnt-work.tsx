import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function WhySelfCareDoesntWork() {
  return (
    <ArticleLayout
      title="支援職のセルフケアが効かない理由｜「頑張って休む」では回復しない"
      description="「ちゃんとセルフケアをしているのに回復しない」——これはセルフケアの量や方法の問題ではなく、消耗の種類と回復の方法がずれているからです。なぜ効かないのか・何が必要かを解説します。"
      url="https://www.ishizue-counseling.jp/articles/why-self-care-doesnt-work"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「頑張ってセルフケアをする」という発想自体が、回復を妨げていることがあります。
      </p>

      <p>
        「ちゃんと睡眠を取っている」「趣味の時間も作っている」「週末は休んでいる」——
        それでも回復しない。これはセルフケアが足りないのではなく、
        <strong>消耗の種類と回復の方法がずれているから</strong>起きています。
      </p>

      <h2>なぜセルフケアが効かないのか——3つの理由</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗の種類に合っていない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗には種類があります——身体的・感情的・精神的・社会的・感覚的消耗。
          支援職に多いのは<strong>感情的・精神的消耗</strong>ですが、
          身体的休息（寝る・横になる）しか取っていないと回復しません。
          「スマートフォンを見ながらの休息」は感覚的・精神的にはむしろ負荷です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「頑張るモード」のままセルフケアしている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「○○をしなければ回復できない」「週末にしっかり休まなければ」という思考で
          セルフケアをすると、セルフケアそのものが課題・義務になります。
          <strong>「頑張って休む」は休息ではありません。</strong>
          神経系が緊張モードのまま休息しても、脳はオフになりません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 消耗の根本原因が続いている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗の原因（<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断れない</Link>・<Link to="/articles/helper-carrying-clients" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">抱え込む</Link>・<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>）が続いたまま
          セルフケアで「補充」しようとしても、補充より消耗の速度が速ければ回復しません。
          「バケツの底に穴が開いたまま水を注いでいる」状態です。
        </p>
      </div>

      <h2>「セルフケア」では回復しない消耗の深さとは</h2>
      <p>
        消耗の深さによって、必要なアプローチが変わります。
      </p>
      <div className="card space-y-3 text-sm">
        {[
          { level: "軽度の消耗", approach: "セルフケア（睡眠・休息・趣味）で回復可能", color: "#8FAF9F" },
          { level: "中程度の消耗", approach: "セルフケア＋環境調整＋消耗構造の理解が必要", color: "#c4904a" },
          { level: "深刻な消耗", approach: "外部サポート（カウンセリング・医療）が必要。一人のセルフケアでは限界", color: "#9f3a3a" },
        ].map(({ level, approach, color }) => (
          <div key={level} className="flex gap-3">
            <span className="text-xs font-medium flex-shrink-0 w-28 mt-0.5" style={{ color }}>{level}</span>
            <p className="text-stone-600 leading-[1.9]">{approach}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-500">
        今の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link>
      </p>

      <LineCtaSmall />

      <h2>セルフケアが「効く」ようになるために</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 消耗の種類に合わせた回復を選ぶ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情的消耗には「感情を管理しない時間」、精神的消耗には「入力刺激を減らすこと」、
          社会的消耗には「一人でいる時間」が有効です。
          <Link to="/articles/helper-mental-recovery" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休んでも回復しない理由</Link>で詳しく解説しています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「義務としてのセルフケア」をやめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「○○しなければ」ではなく「○○したい・心地よい」から始まるセルフケアが
          神経系を回復させます。課題としてではなく、感覚として選ぶことが重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 消耗の根本に対処する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/helper-boundary-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">境界線を整える</Link>・<Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">断れるようになる</Link>・<Link to="/articles/self-function-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能を回復させる</Link>——
          消耗の根本原因に対処することで、セルフケアの効果が出始めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 外部サポートを活用する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          中程度以上の消耗では、一人のセルフケアには限界があります。
          <Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>としてのカウンセリング・医療的サポートを活用することが、
          回復を早めます。「一人でなんとかしなければ」という発想自体が消耗を深めることがあります。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「セルフケアをしているのに回復しない」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">消耗の種類と回復の方向を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          何が消耗していて、何が足りないのか——外から整理することで、効く回復方法が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/why-self-care-doesnt-work"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

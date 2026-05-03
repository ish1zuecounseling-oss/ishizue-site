import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function CompassionFatigueNextStep() {
  return (
    <ArticleLayout
      title="共感疲労チェックで当てはまったら｜次にすべきことを段階別に解説"
      description="共感疲労チェックで当てはまる項目が多かった方へ。今の状態の深さに合わせて、次に何をすべきかを段階別に整理します。一人で抱え込まずに済む入口をお伝えします。"
      url="https://www.ishizue-counseling.jp/articles/compassion-fatigue-next-step"
      date="2026-04-29"
      tags={["compassion", "check", "burnout"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        チェックで当てはまる項目があった方へ。「で、どうすればいいのか」を整理します。
      </p>

      <p>
        チェックで当てはまる項目が多かったとき、「じゃあ次に何をすればいいのか」がわからないまま
        終わってしまうことがあります。
      </p>
      <p>
        この記事では、<strong>今の状態の深さに合わせた「最初の一手」</strong>を整理します。
        いきなり大きく変える必要はありません。今できる一番小さな一歩から始めることが、回復への現実的な入口です。
      </p>

      <h2>まず：チェック結果をどう読むか</h2>
      <div className="card">
        <div className="space-y-3 text-sm">
          {[
            { range: "0〜5項目", label: "予防段階", desc: "今すぐ深刻な状態ではありませんが、支援職の消耗は気づかないまま進む特徴があります。今のうちに整えておくことが後から崩れないための分かれ目です。" },
            { range: "6〜10項目", label: "蓄積中", desc: "共感疲労が静かに進み始めている状態です。まだ日常は回せているかもしれませんが、この段階で気づけるかどうかがその後の消耗を大きく分けます。" },
            { range: "11〜15項目", label: "消耗が深い", desc: "一人でのセルフケアだけでは限界がある段階です。外部のサポートを活用することが回復を早めます。" },
            { range: "16〜20項目", label: "回復優先", desc: "このまま放置すると、消耗に慣れてしまうことがあります。早めに動くことが重要です。" },
          ].map(({ range, label, desc }) => (
            <div key={range} className="flex gap-3">
              <div className="flex-shrink-0 w-20">
                <p className="text-xs font-medium text-[#8FAF9F]">{range}</p>
                <p className="text-xs text-stone-500">{label}</p>
              </div>
              <p className="text-stone-600 leading-relaxed text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>段階別：次にすること</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">0〜5項目：今の状態を言語化しておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「まだ大丈夫」という段階でも、「なぜ支援職は消耗するのか」の構造を理解しておくことが予防になります。
          消耗が始まったときに「これだ」と気づける状態を作っておくことが大切です。
        </p>
        <p className="text-xs text-stone-400 mt-2">
          → <Link to="/articles/compassion-fatigue-causes" className="underline underline-offset-2">共感疲労の原因7つ——構造を理解する</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">6〜10項目：消耗の構造を整理する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜこんなに疲れているのか」を整理することが最初の一歩です。
          感情労働・境界線の曖昧さ・自己犠牲スキーマなど、
          消耗の構造が見えると「自分のせいではなかった」という理解につながります。
        </p>
        <p className="text-xs text-stone-400 mt-2">
          → <Link to="/articles/compassion-fatigue-coping" className="underline underline-offset-2">共感疲労の対処法7つ——今日からできるケア</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">11〜15項目：回復の入口を探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休んでも回復しない」段階では、一人でのセルフケアだけでは限界があります。
          消耗の構造を外から整理することが回復を早めます。
          カウンセリングや信頼できる人への相談を検討する段階です。
        </p>
        <p className="text-xs text-stone-400 mt-2">
          → <Link to="/articles/compassion-fatigue-recovery" className="underline underline-offset-2">共感疲労からの回復方法——長期的な回復プロセス</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">16〜20項目：外に出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          この段階では、「一人で整理する」より「外に出して整理してもらう」方が回復が早くなります。
          何をどう話せばいいかわからなくても大丈夫です。
          「今しんどい」という一言から始められます。
        </p>
        <p className="text-xs text-stone-400 mt-2">
          → <Link to="/articles/compassion-fatigue-medical-support" className="underline underline-offset-2">共感疲労は何科に相談すべきか</Link>
        </p>
      </div>

      <h2>「相談するほどではないかも」と感じている方へ</h2>
      <p>
        チェックで当てはまる項目があっても、「この程度で相談するのは大げさかも」と感じることがあります。
      </p>
      <p>
        その感覚自体が、支援職に多いパターンです。
        <strong>自分の消耗を後回しにしてきた結果</strong>として、「相談するほどではない」と感じやすくなっています。
      </p>
      <p>
        チェックで気になる項目があったなら、それはすでに整理を始めるサインです。
        完全に限界になる前に動くことが、回復を最も早くする選択です。
      </p>

      <h2>今日できる一番小さな一手</h2>
      <div className="my-4 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-sm font-medium text-stone-700 mb-3">チェック後にまずやること（1つだけ選ぶ）</p>
        <ul className="text-sm text-stone-600 space-y-2.5">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>A.</span>今日感じたしんどさを3行だけ書き出す</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>B.</span>「なぜしんどいのか」を1つだけ考えてみる</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>C.</span>誰か1人に「最近しんどい」と伝える</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>D.</span>カウンセリングに相談してみる</li>
        </ul>
      </div>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-1">「何を話せばいいかわからない」「相談していいレベルかわからない」という段階からでも大丈夫です。</p>
        <p className="text-xs text-stone-500 mb-2">うまく話せなくても大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">「次の一手」を一緒に整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          チェックで気になる項目があったなら、その状態を言語化することが回復の入口になります。
          「何がしんどいのかわからない」という状態からでも大丈夫です。
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


      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、共感疲労・二次受傷・感情労働に関する心理学的知見をもとに作成しています。
      </div>

      {/* 内部リンク */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">共感疲労クラスター——あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ① 共感疲労チェック（20項目・3分）——今の状態を確認する
          </Link>
          <Link to="/articles/compassion-fatigue-causes" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ② 共感疲労の原因7つ——なぜ支援職がなりやすいのか
          </Link>
          <Link to="/articles/compassion-fatigue-coping" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ③ 共感疲労の対処法7つ——今日からできるケア
          </Link>
          <Link to="/articles/compassion-fatigue-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            ④ 共感疲労からの回復方法——長期的な回復プロセス
          </Link>
          <Link to="/articles/compassion-fatigue-high-score" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → チェックの点数が高かった方へ——まず整理したいこと
          </Link>
        </div>
      </div>

    </ArticleLayout>
  )
}

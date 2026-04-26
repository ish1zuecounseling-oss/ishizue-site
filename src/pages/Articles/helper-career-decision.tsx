import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperCareerDecision() {
  return (
    <ArticleLayout
      title="このまま続けるか、離れるかで迷っているときに読むページ"
      description="「辞めたいほどではないけど、このままでいいのか」——そのモヤモヤに名前をつけます。続ける・距離を取る・離れる、3つの選択肢と判断軸を整理します。"
      url="https://www.ishizue-counseling.jp/articles/helper-career-decision"
      date="2026-04-26"
      tags={["quit", "burnout", "boundary"]}
    >

      {/* ① 共感（浅め・広め） */}
      <div className="mb-6 p-4 rounded-xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 leading-relaxed mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          このまま続けるか、離れるかで迷っている方へ。
        </p>
        <p className="text-xs text-stone-400 leading-relaxed">
          「辞めたいほどではないけれど、このままでいいのか分からない」<br />
          その感覚は、判断の前に整理が必要な状態かもしれません。
        </p>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        「今すぐ辞める」でも「このまま続ける」でもない。<br />
        その中間で止まっている方へ。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>こんな状態ですか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・辞めたいほどではないけど、このままでいいとも思えない</li>
          <li>・「もう少し頑張れば変わるかも」と思い続けて、何ヶ月も経っている</li>
          <li>・職場を変えるべきか、この仕事自体を変えるべきか分からない</li>
          <li>・「決める」ことが怖くて、ずっとモヤモヤしている</li>
        </ul>
      </div>

      <p>
        そのモヤモヤに名前をつけます。そして整理します。<br />
        答えを出すページではありません。<strong>判断材料を渡すページ</strong>です。
      </p>

      {/* ② 3つの選択肢 */}
      <h2 id="options">3つの選択肢——どれも「正解」です</h2>
      <p>
        「続けるか辞めるか」の二択で考えていませんか。<br />
        実際には、もう一つあります。
      </p>

      <div className="my-4 grid grid-cols-1 gap-3">
        {[
          {
            label: "A. 続ける",
            color: "#8FAF9F",
            bg: "#f0f7f4",
            border: "#c5ddd5",
            desc: "今の場所で、消耗の構造を変えながら続ける。環境・関わり方・自分のパターンを少しずつ変えていく選択。",
            condition: "回復の余地があり、環境に変えられる部分がある場合",
          },
          {
            label: "B. 距離を取る",
            color: "#d97706",
            bg: "#fffbeb",
            border: "#fde68a",
            desc: "休職・配置変更・時短・担当変更など、「完全に離れる」ではなく「一度引く」選択。判断が必要なときの時間稼ぎになる。",
            condition: "消耗が深いが、職場・職種自体への答えがまだ出ていない場合",
          },
          {
            label: "C. 離れる",
            color: "#9f3a3a",
            bg: "#fef2f2",
            border: "#fecaca",
            desc: "転職・退職・職種変更など、今の環境から完全に出る選択。「逃げ」ではなく、自分を守るための選択になることがある。",
            condition: "環境の問題が構造的で、続けることのコストが大きすぎる場合",
          },
        ].map(opt => (
          <div key={opt.label} className="p-4 rounded-xl" style={{ background: opt.bg, border: `1px solid ${opt.border}` }}>
            <p className="text-sm font-medium mb-1" style={{ color: opt.color }}>{opt.label}</p>
            <p className="text-sm text-stone-700 leading-relaxed mb-2">{opt.desc}</p>
            <p className="text-xs text-stone-500">向いているとき：{opt.condition}</p>
          </div>
        ))}
      </div>

      {/* ③ 判断軸 */}
      <h2 id="criteria">判断するための3つの軸</h2>
      <p>
        「正しい答え」はありません。ただ、判断の材料はあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">軸① 回復の余地があるか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「休めば戻れる感じがする」なら、まだ回復の余地があります。<br />
          「休んでも戻れる気がしない」「回復した記憶がない」なら、
          消耗が深くなっている可能性があります。<br /><br />
          <strong>確認の問い：</strong>「1週間完全に休んだら、少し戻る気がしますか？」
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">軸② 環境を変えられるか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗の原因が「今の職場の特定の問題」なら、環境を変えることで解決する可能性があります。<br />
          消耗の原因が「この仕事の構造そのもの」なら、職場を変えても同じことが起きやすい。<br /><br />
          <strong>確認の問い：</strong>「別の職場なら、今の消耗はなくなりそうですか？」
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">軸③ 心身の消耗度</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          考える力・判断力が落ちているとき、「続けるか離れるか」の判断は歪みやすくなります。<br />
          まず消耗度を確認することが、正確な判断への近道です。<br /><br />
          <strong>確認の問い：</strong>「今の状態で、冷静に判断できると思いますか？」
        </p>
        <p className="text-xs text-stone-500 mt-2">
          → <Link to="/articles/helper-fatigue-diagnosis" className="underline underline-offset-2 text-stone-600">疲れのタイプ診断で今の消耗度を確認する</Link>
        </p>
      </div>

      {/* ④ よくある罠 */}
      <h2 id="traps">やりがちな2つの罠</h2>

      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="p-4 rounded-xl" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
          <p className="text-xs font-medium mb-2" style={{ color: "#9f3a3a" }}>罠① 我慢し続ける</p>
          <p className="text-xs text-stone-600 leading-relaxed">
            「もう少し頑張れば変わるかも」が半年・1年と続く。
            消耗が深まるほど、判断力も回復力も落ちていきます。
            「我慢している」ことが目的になっている場合があります。
          </p>
        </div>
        <div className="p-4 rounded-xl" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
          <p className="text-xs font-medium mb-2" style={{ color: "#9f3a3a" }}>罠② 勢いで辞める</p>
          <p className="text-xs text-stone-600 leading-relaxed">
            限界のときの判断は、冷静でないことが多い。
            「辞めた後どうするか」が見えていない状態での退職は、
            次の職場でも同じパターンを繰り返しやすくなります。
          </p>
        </div>
      </div>

      <p>
        どちらも「決断しているようで、実は流されている」状態です。<br />
        大事なのは、<strong>自分の意志で選ぶ</strong>こと。そのために整理が必要です。
      </p>

      {/* ⑤ 分岐（全LPをつなぐハブ） */}
      <h2 id="next">今の状態に合った次の一歩</h2>

      <div className="flex flex-col gap-3 mb-6">
        <Link
          to="/articles/helper-fatigue-diagnosis"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
          style={{ textDecoration: "none" }}
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#8FAF9F" }}>
            まず消耗度を確認したい → 続けるか考える
          </p>
          <p className="text-sm font-medium text-stone-800">疲れのタイプ診断（10問）</p>
          <p className="text-xs text-stone-500 mt-1">脳疲労・感情疲労・バーンアウトのどれか判断する</p>
        </Link>

        <Link
          to="/articles/helper-consider-leave"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
          style={{ textDecoration: "none" }}
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#d97706" }}>
            一度引くことを考えている → 距離を取る
          </p>
          <p className="text-sm font-medium text-stone-800">休職を考えたとき｜判断するための5つのポイント</p>
          <p className="text-xs text-stone-500 mt-1">休職・配置変更の手順と、休む判断の基準</p>
        </Link>

        <Link
          to="/articles/helper-want-to-quit-landing"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
          style={{ textDecoration: "none" }}
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#9f3a3a" }}>
            離れることを考えている → 整理する
          </p>
          <p className="text-sm font-medium text-stone-800">仕事を辞めたいと思ったときに読むページ</p>
          <p className="text-xs text-stone-500 mt-1">辞めるべきかどうかを整理する3つの視点</p>
        </Link>
      </div>

      {/* ⑥ CTA（弱め） */}
      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で整理するのが難しいとき
        </p>
        <p className="text-xs text-stone-500 leading-relaxed mb-3">
          「続けるか・離れるか」は、消耗した状態では判断しにくい問いです。
          状態を整理してから判断することが、後悔のない選択につながります。
        </p>
        <a
          href="/#contact"
          style={{ display: "block", background: "#7EB8A4", color: "#fff", borderRadius: "8px", padding: "10px 16px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", textAlign: "center", marginBottom: "0.5rem" }}
        >
          今の状態を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center">
          支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK
        </p>
      </div>

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。
      </p>

    </ArticleLayout>
  )
}

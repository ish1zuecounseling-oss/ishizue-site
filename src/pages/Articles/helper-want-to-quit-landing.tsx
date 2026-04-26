import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperWantToQuitLanding() {
  return (
    <ArticleLayout
      title="支援職を辞めたいと思ったときに読むページ｜今の状態を整理するための3つの視点"
      description="「もう限界かもしれない」「辞めていいのかわからない」——辞めるべきかどうかを今すぐ決める必要はありません。今の状態を整理するための視点と、次の一歩を考えます。"
      url="https://www.ishizue-counseling.jp/articles/helper-want-to-quit-landing"
      date="2026-04-26"
      tags={["quit", "burnout", "boundary"]}
    >

      {/* ① 共感 */}
      <div className="mb-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-base font-medium text-stone-100 leading-relaxed mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「もう限界かもしれない」と感じながらも、<br />
          辞めていいのか分からない支援職の方へ。
        </p>
        <p className="text-sm text-stone-400 leading-relaxed">
          人のために働く仕事ほど、「自分が抜けたら困る」という思いが強くなります。<br />
          その中で「辞めたい」と感じているなら、それは甘えではなく<strong className="text-stone-300">状態のサイン</strong>かもしれません。
        </p>
        <p className="text-sm font-medium text-stone-200 mt-3">
          辞めるべきかどうかを、今すぐ決める必要はありません。
        </p>
      </div>

      {/* ② なぜそうなるか（構造） */}
      <h2 id="why">支援職が「辞めたい」と思うのは、弱さではない</h2>
      <p>
        支援職・医療職・福祉職が消耗しやすいのは、構造的な理由があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">消耗が蓄積する3つの構造</p>
        <ul className="text-sm text-stone-600 space-y-2 mt-1">
          <li className="flex items-start gap-2">
            <span style={{ color: "#8FAF9F" }}>①</span>
            <span><strong>感情労働の負荷</strong>——感情を管理し続けることが仕事の一部になっている。怒りや悲しみを抑えながら、他者の感情に寄り添い続ける。</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: "#8FAF9F" }}>②</span>
            <span><strong>「助ける人」という規範</strong>——「自分がいなければ」「ここで辞めたら利用者に申し訳ない」という感覚が、限界を超えても続けさせる。</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: "#8FAF9F" }}>③</span>
            <span><strong>消耗が見えにくい</strong>——「やりがい」が疲れを隠す。気づいたときには深く消耗している。</span>
          </li>
        </ul>
      </div>

      <p>
        「辞めたい」という気持ちが出てきたとき、
        それは<strong>あなたが弱いからではなく、限界まで頑張ってきた証拠</strong>です。
      </p>

      {/* ③ 辞める前の整理（3つの視点） */}
      <h2 id="three-views">辞める前に整理する3つの視点</h2>
      <p className="text-stone-500 text-sm leading-relaxed mb-4 pl-4 border-l-2 border-stone-200">
        「辞める・続ける」を今すぐ決めなくていい。まず今の状態を整理することが先です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">視点① 「今の職場」と「この仕事」を分けて考える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めたい」の中身は2種類あります。<br />
          <strong>A. 今の職場が合わない</strong>（上司・環境・体制の問題）<br />
          <strong>B. この仕事自体が消耗している</strong>（職種そのものの限界）<br /><br />
          Aなら転職で解決する可能性があります。
          Bなら休職・職種変更・カウンセリングで整理することが先です。
          今のあなたはどちらに近いですか？
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">視点② 「消耗した今の自分」で判断しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バーンアウトや深い消耗の状態では、判断力が落ちています。
          「向いていない」「もう無理」という感覚は、
          消耗が深まったことによる症状である場合があります。<br /><br />
          可能であれば、まず有給を取るか、負荷を減らしてから判断することをおすすめします。
          回復した後でも同じ気持ちなら、それが本当の判断です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">視点③ 「続けることのコスト」も計算する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めることのリスク」ばかりが見えていませんか？<br /><br />
          続けることにも、コストがあります——
          健康への影響、回復に必要な時間、家族への影響。
          消耗が深まるほど、回復に必要な時間は長くなります。
          「今辞める」と「もっと消耗してから辞める」は、別の選択肢です。
        </p>
      </div>

      {/* ④ よくある誤解 */}
      <h2 id="myths">「辞めたい」にまつわる3つの誤解</h2>

      <div className="my-4 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <div className="space-y-3">
          {[
            { myth: "辞めたいと思う自分は弱い", truth: "限界まで頑張ってきたからこそ出てくる気持ちです" },
            { myth: "辞めると利用者に申し訳ない", truth: "消耗したまま続けることが、長期的には利用者への影響が大きくなります" },
            { myth: "もう少し頑張れば気持ちが変わる", truth: "「もう少し」が積み重なって、ここまで来ています。同じことを繰り返しても変わりません" },
          ].map((item) => (
            <div key={item.myth} className="p-3 rounded-lg bg-white border border-stone-200">
              <p className="text-[10px] text-stone-400 mb-1">よくある誤解</p>
              <p className="text-xs text-stone-500 line-through mb-1">{item.myth}</p>
              <p className="text-xs font-medium text-stone-700">{item.truth}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ⑤ 小さなチェック */}
      <h2 id="check">今の状態を確認する</h2>
      <p>
        以下の項目で、今の状態の深さを確認してみてください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">今すぐ動くべきサイン</p>
        <ul className="text-sm text-stone-600 space-y-1 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>「消えてしまいたい」という気持ちが出てきている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>眠れない・食べられない状態が2週間以上続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>職場のことを考えるだけで身体症状が出る</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">→ まず医療機関への受診を優先してください。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">整理が必要なサイン</p>
        <ul className="text-sm text-stone-600 space-y-1 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#92400e" }}>・</span>休日も仕事のことが頭から離れない</li>
          <li className="flex items-start gap-2"><span style={{ color: "#92400e" }}>・</span>「辞めたい」と「申し訳ない」がぐるぐるしている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#92400e" }}>・</span>「もう少し頑張れば」が半年以上続いている</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">→ 一人で抱え込まず、状態を言語化することが次の一歩です。</p>
      </div>

      {/* 分岐：まだ頑張れる / 整理が必要 */}
      <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          to="/articles/helper-burnout-recovery"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#8FAF9F" }}>
            まだ回復できそうな方へ
          </p>
          <p className="text-sm font-medium text-stone-800 mb-1">バーンアウトからの回復方法</p>
          <p className="text-xs text-stone-500">続けるための土台を作り直す</p>
        </Link>
        <Link
          to="/articles/helper-consider-leave"
          className="block p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-sm transition-all"
        >
          <p className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1" style={{ color: "#9f3a3a" }}>
            限界を感じている方へ
          </p>
          <p className="text-sm font-medium text-stone-800 mb-1">休職を考えたときの判断ポイント</p>
          <p className="text-xs text-stone-500">休む選択肢を整理する</p>
        </Link>
      </div>

      {/* ⑥ CTA（1つだけ） */}
      <div className="my-8 p-6 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-base font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          辞めるかどうかを、一緒に整理しませんか
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-2">
          「辞める・続ける」の結論を出すためではなく、
          今の状態を言語化して、自分が何を感じているかを整理するための時間です。
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          支援職として15年・300名以上の相談経験から、
          消耗の構造を一緒に整理します。
        </p>

        <p className="text-xs text-stone-500 mb-3 text-center">
          ※辞めるべきかどうかを無理に決める必要はありません。<br />
          今の状態を言語化するだけでも、次が見えてきます。
        </p>

        <a
          href="/#contact"
          style={{ display: "block", background: "#7EB8A4", color: "#fff", borderRadius: "10px", padding: "14px 20px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", textAlign: "center", marginBottom: "0.5rem" }}
        >
          今の状態を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center">
          支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK ／ まだ決めなくていい
        </p>
      </div>

      <p className="text-xs text-stone-400 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。介護職・看護師・社会福祉士・保育士など対人援助職のバーンアウト・消耗への対応を専門としています。
      </p>

    </ArticleLayout>
  )
}

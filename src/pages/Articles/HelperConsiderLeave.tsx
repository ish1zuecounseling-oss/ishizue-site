import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperConsiderLeave() {
  return (
    <ArticleLayout
      title="休職を考えたとき｜支援職が休む判断をするための5つのポイント"
      description="「休職したほうがいいかも」「でも言い出せない」——支援職が休職を考えるとき、罪悪感や不安が邪魔をします。休む判断をするためのポイント、休職中の過ごし方、復職への不安まで解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-consider-leave"
      date="2026-04-20"
      tags={["burnout", "boundary", "absence"]}
    >

      <p className="text-xs text-stone-500 mb-4">
        ※この記事は支援職・医療職・福祉職の方が休職を検討している場合の参考情報です。実際の手続きや判断は、医師・職場・専門家にご相談ください。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>今、こんな状態ですか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・「休みたい」と思いながらも、言い出せずにいる</li>
          <li>・休もうとすると「甘えだ」「みんなに迷惑をかける」という気持ちが出る</li>
          <li>・眠れない・食欲がない・身体症状が出ている</li>
          <li>・「休んだら終わり」「戻れなくなる」という不安がある</li>
        </ul>
        <p className="text-xs mt-3" style={{ color: "#92400e" }}>
          → 「休みたい」という気持ちが出ているなら、それはすでに限界に近いサインです。
        </p>
      </div>

      <div className="mb-8 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>休職を検討すべきサイン（今すぐ・余裕があるうち）</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>休職への踏み出し方と、よくある不安への回答</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>休職中の過ごし方と復職への準備</li>
        </ul>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        休職は「敗北」でも「逃げ」でもありません。消耗した心身を回復させるための、正当な選択です。
      </p>

      <h2 id="when-to-rest">休職を検討すべきサイン</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">今すぐ動くべきサイン</p>
        <ul className="text-sm text-stone-600 space-y-1 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>「消えてしまいたい」「死にたい」という気持ちが出てきている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>眠れない・食べられない状態が2週間以上続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>職場のことを考えるだけで身体症状（動悸・過呼吸・吐き気）が出る</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>日常の判断・集中ができなくなっている</li>
        </ul>
        <p className="text-xs text-stone-500 mt-3">これらの状態にある場合、まず医療機関（精神科・心療内科）への受診を優先してください。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">早めに検討すべきサイン</p>
        <ul className="text-sm text-stone-600 space-y-1 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#92400e" }}>・</span>休日でも疲れが取れず、月曜が来るのが憂鬱</li>
          <li className="flex items-start gap-2"><span style={{ color: "#92400e" }}>・</span>仕事への意欲・共感力が著しく低下している</li>
          <li className="flex items-start gap-2"><span style={{ color: "#92400e" }}>・</span>「あと少し頑張れば」と思い続けて数ヶ月が経っている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#92400e" }}>・</span>同僚・家族から「様子がおかしい」と言われた</li>
        </ul>
      </div>

      <h2 id="guilt">「休んでいいのか」という罪悪感について</h2>
      <p>
        支援職が休職を躊躇する最大の理由のひとつが、罪悪感です。
        「利用者・患者に申し訳ない」「同僚に迷惑をかける」——
        この感覚は、支援職の多くが共有しています。
      </p>
      <p>
        しかし、以下のことを知っておいてください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">消耗した状態で続けることのリスク</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バーンアウトが進行した状態での支援は、
          ミスのリスクが高まり、利用者・患者への対応の質も低下します。
          「休まずに続ける」ことが、長期的には利用者・同僚・自分の全員にとって
          良くない結果をもたらす可能性があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「休む」は権利であり、治療でもある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          骨折したら固定して休むことが治療であるように、
          心身の消耗も、適切な休息が治療になります。
          罪悪感は大切な感覚ですが、
          それだけを根拠に「休まない」を選ぶのは、
          消耗した状態で判断している可能性があります。
        </p>
      </div>

      <h2 id="five-points">休む判断をするための5つのポイント</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① まず医師に相談する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休職の判断は、自分一人でする必要はありません。
          精神科・心療内科・かかりつけ医に「仕事がつらい」と伝えることから始めましょう。
          医師が「休職が必要」と判断すれば診断書が出ます。
          「大げさかな」と思わず、相談することが第一歩です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「完全に無理になってから」では遅い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗が深まるほど、回復に必要な時間が長くなります。
          「まだ動けるうちに休む」ことが、回復の早道です。
          「限界になる前に休む」という考え方を持ってください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 職場への伝え方を考える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          上司への申告が難しい場合は、
          産業医・人事担当者・組合などを経由することも可能です。
          診断書があれば、詳細な説明なしに手続きを進めることができます。
          「何と言えばいいかわからない」という場合は、カウンセラーや医師に相談を。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 経済的な不安を事前に確認する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休職中は傷病手当金（健康保険）が利用できる場合があります。
          給与の約2/3が最長1年6ヶ月受け取れる制度です。
          事前に会社の総務・健康保険組合に確認しておくと、
          経済的な不安が和らぎます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「休職＝キャリアの終わり」ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休職後に復職し、長く活躍している支援職の方は多くいます。
          回復してから「また仕事をしたい」という気持ちが戻ってきたとき、
          そこから改めてキャリアを考えることができます。
          今の状態での判断を、将来のすべてと同一視しないでください。
        </p>
      </div>

      <h2 id="during-leave">休職中の過ごし方</h2>
      <p>
        休職中に「何もしていない自分」に罪悪感を感じる方が多いですが、
        最初は「回復」そのものが仕事です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">回復の段階に応じた過ごし方</p>
        <ul className="text-sm text-stone-600 space-y-2 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>初期</span>とにかく休む。「何かしなければ」という焦りを手放す</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>中期</span>生活リズムを整える。散歩・食事・睡眠の安定を目指す</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>後期</span>消耗の構造を理解し、復職後の働き方を少しずつ考える</li>
        </ul>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「休んでいいか迷っている」状態の方へ
        </p>
        <p className="text-xs text-stone-500 leading-relaxed mb-4">
          「休むべきかどうか」を一人で決めようとしていませんか？
          支援職専門のカウンセリングで、今の状態を整理し、
          次のステップを一緒に考えることができます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white transition-all" style={{ background: "#7EB8A4" }}>
          今の状態を相談してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-burnout-scale-validity" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → バーンアウトとは？症状チェック・原因・回復方法
          </Link>
          <Link to="/articles/helper-want-to-quit" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 支援職を辞めたいと思ったとき
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 共感疲労チェック｜今の消耗度を確認する（3分）
          </Link>
          <Link to="/articles/helper-self-care-ability" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → セルフケア能力とは？「無理をしない」ための視点
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。
      </p>

      <ArticleBottomCTA
        links={[
          { label: "今の消耗度をチェックする（3分）",       path: "/articles/helper-empathy-check" },
          { label: "バーンアウトの症状・原因を知る",         path: "/articles/helper-burnout-scale-validity" },
          { label: "辞めたいと思ったときの視点",            path: "/articles/helper-want-to-quit" },
        ]}
      />
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleBottomCTA from "../../components/ArticleBottomCTA"

export default function HelperWantToQuit() {
  return (
    <ArticleLayout
      title="支援職を辞めたいと思ったとき｜その気持ちを整理するための5つの視点"
      description="「もう限界かもしれない」「辞めたいけど辞めていいのか」——支援職が辞めたいと感じるのは、消耗のサインです。後悔しない判断をするための視点と、今すぐできることを解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-want-to-quit"
      date="2026-04-20"
      tags={["burnout", "boundary", "quit"]}
    >

      <p className="text-xs text-stone-500 mb-4">
        ※この記事は、支援職・医療職・福祉職の方が「辞めたい」と感じたときの判断を整理するためのものです。医療的な診断や転職アドバイスの代替ではありません。
      </p>

      <div className="mb-6 p-4 rounded-xl" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
        <p className="text-sm font-medium mb-2" style={{ color: "#92400e" }}>今、こんな状態ですか？</p>
        <ul className="text-xs space-y-1.5" style={{ color: "#b45309" }}>
          <li>・「もうこの仕事を続けられない」と感じることが増えた</li>
          <li>・職場に行くのがつらく、朝が憂鬱</li>
          <li>・「辞めたい」と思いながらも、罪悪感で踏み切れない</li>
          <li>・「自分が弱いだけ」「もっと頑張れるはず」と責めてしまう</li>
        </ul>
        <p className="text-xs mt-3" style={{ color: "#92400e" }}>
          → 「辞めたい」という気持ちは、消耗が限界に近づいているサインです。
        </p>
      </div>

      <div className="mb-8 p-4 rounded-xl" style={{ background: "#f5f0eb", border: "1px solid #e8ddd4" }}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-3" style={{ color: "#8FAF9F" }}>この記事でわかること</p>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>「辞めたい」気持ちが消耗のどの段階にあるか</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>今すぐ辞めるべきか・待てるかを判断する視点</li>
          <li className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed"><span className="flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }}>✓</span>「辞める・続ける」以外の選択肢</li>
        </ul>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-stone-200">
        「辞めたい」という気持ちを、弱さや甘えと捉える必要はありません。それは、あなたが限界まで頑張ってきた証拠でもあります。
      </p>

      <h2 id="signal">「辞めたい」は消耗のサイン</h2>
      <p>
        支援職・医療職・福祉職は、感情を管理しながら他者を支え続ける仕事です。
        その消耗は少しずつ蓄積し、ある日突然「もう無理」という感覚として現れます。
      </p>
      <p>
        「辞めたい」という気持ちが出てきたとき、それは3つのどれかを意味している可能性があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 疲労による一時的な感覚</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休息が取れていない、連続した負荷が続いている状態での「辞めたい」です。
          休暇や負荷の軽減で回復することが多く、
          「辞めたい」よりも「休みたい」に近い状態です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② バーンアウトの進行</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          情緒的消耗感・脱人格化・達成感の低下が慢性化した状態での「辞めたい」です。
          休んでも回復しにくく、仕事への意欲や意味を感じられなくなっています。
          この段階では、環境を変えることや専門家への相談が必要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 職場・職種との不適合</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          特定の職場環境（ハラスメント・過重労働・人間関係）、
          または職種そのものが自分の価値観・特性と合っていない状態での「辞めたい」です。
          この場合、「今の職場」を変えることで解決するのか、
          「この仕事」を変えることが必要なのかを区別することが重要です。
        </p>
      </div>

      <h2 id="urgency">今すぐ辞めるべきサイン</h2>
      <p>
        「辞める・続ける」の判断は難しいですが、
        以下のような状態にある場合は、すぐに動くことを優先してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">身体・精神の限界サイン（すぐに対処が必要）</p>
        <ul className="text-sm text-stone-600 space-y-1 mt-1">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>眠れない・食欲がない状態が2週間以上続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>職場のことを考えるだけで身体症状（動悸・吐き気・頭痛）が出る</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>「消えてしまいたい」という気持ちが出てきている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>ハラスメントや違法な労働環境にさらされている</li>
        </ul>
        <p className="text-xs text-stone-500 mt-3">
          これらの状態にある場合、「辞める判断」より先に、今日の安全を確保することを優先してください。医療機関への受診や、信頼できる人への相談を。
        </p>
      </div>

      <h2 id="five-views">判断を整理するための5つの視点</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「今の職場」と「この仕事」を分けて考える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めたい」が今の職場特有の問題（上司・人間関係・職場の体制）から来ているのか、
          仕事の種類そのものへの疲弊から来ているのかを区別することが重要です。
          前者なら「転職」で解決する可能性があります。
          後者なら「休職」や「職種変更」を視野に入れる必要があります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「疲弊した今の自分」で判断しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          バーンアウトや深い消耗の状態では、判断力が低下します。
          「辞めたい」という気持ちが、回復した後でも同じかどうかを確認することが大切です。
          可能であれば、まず有給休暇を取るか、負荷を一時的に軽減してから判断することをおすすめします。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「続けることのコスト」を計算する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めることのリスク」ばかりに目が向きがちですが、
          「続けることのコスト」——健康への影響、人間関係への影響、将来的な回復コスト——も計算に入れてください。
          消耗が深まるほど、回復に必要な時間は長くなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「辞める・続ける」以外の選択肢を探す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休職・配置転換・時短勤務・担当変更——
          「今の状態のまま続ける」か「完全に辞める」かの二択ではなく、
          段階的な選択肢があります。
          これらを使える環境かどうかを確認することが、
          判断の選択肢を広げます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 「罪悪感」を判断の根拠にしない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「利用者に申し訳ない」「同僚に迷惑をかける」という罪悪感は、
          支援職の多くが感じるものです。
          しかし、消耗した状態で続けることは、
          長期的には利用者・同僚・自分のすべてにとって良くない結果を生みやすくなります。
          罪悪感は大切な感覚ですが、それだけで「辞めない」を決める根拠にはなりません。
        </p>
      </div>

      <h2 id="what-to-do-now">今すぐできること</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">まず「今の消耗度」を確認する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めたい」という気持ちの背景にある消耗の程度を把握することが第一歩です。
          共感疲労・バーンアウトの状態を確認してみてください。
        </p>
        <p className="text-xs text-stone-500 mt-2">
          → <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（3分）</Link>
          　 <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900 ml-2">バーンアウトチェック（3分）</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">一人で抱え込まず、話せる場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「辞めたい」という気持ちを一人で抱え込んでいると、
          判断が歪みやすくなります。
          信頼できる同僚・友人・家族、あるいは専門家（カウンセラー・医師）に
          今の状態を話すことが、判断を整理する助けになります。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「辞めるべきか」を一人で決めなくていい
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「辞めたい」という気持ちの背景には、消耗の構造があります。
          支援職専門のカウンセリングで、今の状態を整理し、
          後悔しない判断のための視点を一緒に作ることができます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white transition-all" style={{ background: "#7EB8A4" }}>
          今の状態を相談してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-consider-leave" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 休職を考えたとき｜判断するための5つのポイント
          </Link>
          <Link to="/articles/helper-burnout-scale-validity" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → バーンアウトとは？症状・原因・回復方法
          </Link>
          <Link to="/articles/helper-emotional-labor-what" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 感情労働とは？支援職が疲れる本当の理由
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 共感疲労チェック（3分）
          </Link>
          <Link to="/articles/helper-brain-fatigue-check" className="text-sm text-stone-600 hover:text-stone-900 hover:underline underline-offset-2 transition-colors">
            → 脳疲労チェック（3分）
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        ※筆者は支援職専門カウンセラーとして300名以上・6,000時間以上の相談対応経験があります。介護職・看護師・社会福祉士・保育士など対人援助職のバーンアウト・消耗への対応を専門としています。
      </p>

      <ArticleBottomCTA
        links={[
          { label: "今の消耗度をチェックする（3分）",       path: "/articles/helper-empathy-check" },
          { label: "脳疲労チェックをする（3分）",           path: "/articles/helper-brain-fatigue-check" },
          { label: "休職を考えたときの判断ポイント",         path: "/articles/helper-consider-leave" },
        ]}
      />
    </ArticleLayout>
  )
}

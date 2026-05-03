import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"

export default function CareWorkerCompassionFatigue() {
  return (
    <ArticleLayout
      title="介護士の共感疲労｜燃え尽きやすい理由・症状・辞めたい前に読む対処法"
      description="介護士に多い共感疲労の症状・原因・対処法を解説します。利用者の喪失・身体的負荷・感情労働が重なる介護職特有の消耗構造と、回復のための最初の一手。"
      url="https://www.ishizue-counseling.jp/articles/care-worker-compassion-fatigue"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
    >

      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「辞めたいわけじゃないのに、もう限界かもしれない」——介護職に多い共感疲労の状態を整理します。
      </p>

      <p>
        介護士は共感疲労・燃え尽き症候群の両方が起きやすい職種です。
        身体的な疲労に加えて、利用者の苦しみ・喪失・家族との関係など、
        感情的な負荷が複合的に重なります。
      </p>
      <p>
        「辞めたい」と感じているとき、それは「向いていない」のではなく、
        <strong>消耗が限界に近づいているサイン</strong>かもしれません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな介護士の方へ</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・利用者のことが気になって、休みの日も頭から離れない</li>
          <li>・以前は感じていたやりがいがなくなってきた</li>
          <li>・「もう限界かも」と思うことが増えた（<a href="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情麻痺</a>のサインかもしれません）</li>
          <li>・身体は動けるのに、気持ちが回復しない</li>
        </ul>
      </div>

      <h2>介護士が共感疲労になりやすい理由</h2>
      <p>
        介護という仕事には、共感疲労を深めやすい構造的な要因があります。
      </p>

      <div className="card">
        <div className="space-y-3 text-sm text-stone-600">
          <div>
            <p className="font-medium text-stone-700">① 利用者との「喪失」の繰り返し</p>
            <p className="leading-[1.9]">担当していた利用者の状態悪化・死・退所など、関係の終わりを繰り返し経験します。悼む時間を十分に取れないまま次の利用者を担当することが、消耗を深めます。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">② 身体的疲労と感情労働の二重負荷</p>
            <p className="leading-[1.9]">移乗・入浴介助などの身体的な負荷と、感情を管理しながら関わる感情労働が同時に課されます。どちらか一方でも消耗しますが、両方重なると回復が困難になります。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">③ 家族対応のストレス</p>
            <p className="leading-[1.9]">利用者本人だけでなく、家族の不安・要求・感情にも対応する必要があります。板挟みになる状況が消耗を深めます。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">④ 「助けたい」と「できない」の狭間</p>
            <p className="leading-[1.9]">人手不足や制度の制約の中で、「もっとしてあげたい」「でもできない」という無力感が蓄積します。使命感が強い人ほど、この消耗が深くなります。</p>
          </div>
          <div className="border-t border-stone-100 pt-3">
            <p className="font-medium text-stone-700">⑤ 低賃金・社会的評価の低さ</p>
            <p className="leading-[1.9]">これだけの感情的・身体的負荷に対して、社会的評価・賃金が見合っていないという感覚が、消耗を加速させることがあります。</p>
          </div>
        </div>
      </div>

      <h2>介護士に多い共感疲労の症状</h2>

      <div className="card space-y-3">
        <div>
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">感情・思考の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・<a href="/articles/helper-emotional-numbness" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">利用者への共感が薄れてきた</a>（または逆に抱え込みすぎる）</li>
            <li>・「もう介護はしたくない」と感じることがある</li>
            <li>・仕事のことを考えると憂鬱になる</li>
            <li>・小さなことでイライラしやすくなった</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">身体・回復の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・休んでも疲れが取れない</li>
            <li>・眠りが浅い・夢で仕事の場面が出てくる</li>
            <li>・出勤前に体が重い・気持ちが沈む</li>
          </ul>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-[#8FAF9F] mb-1">行動の変化</p>
          <ul className="text-sm text-stone-600 space-y-1">
            <li>・有給や休みを取ることに罪悪感がある</li>
            <li>・職場の人間関係が億劫になってきた</li>
            <li>・「辞めたい」が頭から離れなくなった</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-stone-500">
        今の状態を確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>
      </p>

      <LineCtaSmall />

      <h2>「辞めたい」と感じたとき——まず整理すること</h2>
      <p>
        「辞めたい」という気持ちが出てきたとき、すぐに決断する必要はありません。
        まず、<strong>「消耗しているから辞めたいのか」「仕事自体が合わないのか」</strong>を整理することが先決です。
      </p>
      <p>
        共感疲労の状態では、判断力・意欲・感情の処理機能すべてが低下しています。
        消耗が深い状態での決断は、後悔につながりやすいです。
        「消耗を回復させてから判断する」という順番が重要です。
      </p>

      <h2>今日からできる対処</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「休む」ことを許可する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          有給を「使っていいもの」として捉え直すことが最初の一歩です。
          休むことへの罪悪感自体が、消耗のサインです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「感情を管理しなくていい時間」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          介護中は常に感情を管理しています。
          仕事を離れたら「感情規則のない時間」を意識的に作ることが、
          感情的エネルギーの回復を助けます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「抱え込まない」を練習する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頼まれた瞬間に即答しないこと。「確認してから返事します」の一言だけでいい。
          少しずつ「止まる練習」をすることが、抱え込みのパターンを変えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「話せる場所」を一つ持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職場の人間関係の中で話しにくい場合は、外部のカウンセリングが選択肢になります。
          「うまく話せなくていい」「まとまっていなくていい」——外に出すことが回復の入口です。
        </p>
      </div>

      <h2>医療機関への相談を検討するサイン</h2>
      <div className="card" style={{ borderLeft: "3px solid #9f3a3a" }}>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>症状が2週間以上続いている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>休職・転職を真剣に考えている</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>死にたい・消えてしまいたいという気持ちがある</li>
          <li className="flex items-start gap-2"><span style={{ color: "#9f3a3a" }}>・</span>食欲がない・眠れない状態が続いている</li>
        </ul>
        <p className="text-xs text-stone-400 mt-2">
          該当する場合は、カウンセリングより先に心療内科・精神科の受診を優先してください。
        </p>
      </div>

      {/* CV導線 */}
      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「辞めたい」と思っている段階でも大丈夫です。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">介護職の消耗を整理したいとき</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「辞めたいのか、疲れているだけなのか、自分でもわからない」——
          その状態を外から整理することで、次の一歩が見えてきます。
          介護職・対人援助職の消耗を前提にした相談を行っています。
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

      {/* 内部リンク */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-600 mb-3">あわせて読む</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-empathy-check" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労チェック（20項目・3分）
          </Link>
          <Link to="/articles/compassion-fatigue-complete" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労とは｜症状・原因・診断・対処法・回復を総合解説
          </Link>
          <Link to="/articles/compassion-fatigue-coping" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労の対処法7つ
          </Link>
          <Link to="/articles/compassion-fatigue-natural-recovery" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労は自然に治るのか
          </Link>
          <Link to="/articles/compassion-fatigue-medical-support" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
            → 共感疲労は何科に相談すべきか
          </Link>
        </div>
      </div>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、
        共感疲労・感情労働に関する心理学的知見をもとに作成しています。
        医学的な診断ではありません。
      </div>

    </ArticleLayout>
  )
}

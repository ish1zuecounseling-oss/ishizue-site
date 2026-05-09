import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "仕事を辞める前にカウンセリングは必要ですか？",
    a: "必須ではありませんが、「辞めるかどうか判断できない」「感情が整理できない」状態であれば有効です。結論を急ぐ前に状況を整理することで、後悔の少ない選択につながります。",
  },
  {
    q: "相談したら辞める方向に勧められますか？",
    a: "一方的に方向を決められることはありません。カウンセリングは「辞める・続ける」を決める場ではなく、自分にとって納得できる選択を整理する場です。",
  },
  {
    q: "1回だけでも意味はありますか？",
    a: "あります。1回の対話でも思考や感情が整理され、「何に迷っているのか」「どこが限界なのか」が明確になることがあります。",
  },
]

export default function QuitJobCounseling() {
  return (
    <ArticleLayout
      title="仕事を辞めたいときカウンセリングは必要？｜限界サインと相談するべきタイミング"
      description="「辞めたいけど決めきれない」「誰にも言えない」——一人で抱えて動けなくなっているなら整理するタイミングかもしれません。限界サイン・相談で変わること・よくある誤解を解説します。"
      url="https://www.ishizue-counseling.jp/articles/quit-job-counseling"
      date="2026-05-09"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「辞めたい」のに決めきれないとき、すでに一人で抱えきれない状態かもしれません。
      </p>

      <p>
        「もう無理かもしれない」と思う一方で、本当に辞めていいのかわからない。
        誰かに相談したいけれど、こんなことで相談していいのか迷う——
      </p>
      <p>
        そんな状態が続いているとしたら、
        それは<strong>判断力が落ちるほど消耗しているサイン</strong>かもしれません。
      </p>

      <h2>「仕事を辞めたい」は異常ではない</h2>
      <p>
        まず前提として、「辞めたい」と感じること自体は問題ではありません。
        それは弱さではなく、<strong>限界に近づいていることを知らせるサイン</strong>です。
      </p>
      <p>
        特に次のような状態がある場合、無理に続けることで消耗がさらに深まる可能性があります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・<Link to="/articles/acting-fatigue" className="underline underline-offset-2">仕事で演じ続けて疲れている</Link></p>
        <p>・<Link to="/articles/communication-fatigue" className="underline underline-offset-2">人と関わるだけで消耗する</Link></p>
        <p>・<Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2">疲れているのに止まれない</Link></p>
        <p>・<Link to="/articles/self-value-unknown" className="underline underline-offset-2">自分の価値がわからなくなっている</Link></p>
      </div>

      <h2>カウンセリングが必要になりやすい状態</h2>
      <p>
        次のような状態がある場合、
        一人で判断し続けること自体が負担になっている可能性があります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・休んでも回復しない</p>
        <p>・感情がよくわからない（<Link to="/articles/emotion-unknown" className="underline underline-offset-2">感情がわからない</Link>）</p>
        <p>・考え続けてしまい決められない</p>
        <p>・何が正解かわからなくなっている</p>
        <p>・誰にも話せていない</p>
      </div>
      <p>
        これは「考えが足りない」のではなく、
        <strong>考えすぎて整理できなくなっている状態</strong>です。
        <Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>が続いているとき、
        一人でループから抜け出すのは難しくなります。
      </p>

      <p className="text-sm text-stone-500">
        今の消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目）</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaSmall />

      <h2>今すぐ休むことを優先したほうがいいサイン</h2>
      <p>
        次のような状態がある場合は、判断よりもまず回復を優先することが重要です。
        この段階では「辞めるかどうか」を考えること自体が負担になっています。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・睡眠が崩れている（<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2">眠れない</Link>）</p>
        <p>・日常生活に支障が出ている</p>
        <p>・強い無気力・<Link to="/articles/feeling-nothing" className="underline underline-offset-2">何も感じない</Link>状態が続いている</p>
        <p>・身体症状（頭痛・胃痛・動悸）が続いている</p>
      </div>
      <p className="text-xs text-stone-400">
        ※このような状態が続く場合は、カウンセリングと合わせて医療機関への相談もご検討ください。
      </p>

      <h2>カウンセリングで整理できること</h2>
      <p>
        カウンセリングは「答えを出す場」ではなく、<strong>整理するための場</strong>です。
        一方的に「辞める・続ける」を決められることはありません。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・今どの程度消耗しているのかを把握する</p>
        <p>・何がつらさの原因になっているのかを整理する</p>
        <p>・「続ける・辞める」以外の選択肢を検討する</p>
        <p>・感情と判断を分けて考えられるようにする</p>
      </div>
      <p>
        外から整理することで、頭の中でぐるぐる続いていたループが少し落ち着きます。
        <Link to="/articles/safe-base" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">安全基地</Link>として機能する対話の場が、整理を助けます。
      </p>

      <h2>よくある誤解</h2>
      <div className="card space-y-2 text-sm">
        {[
          { wrong: "辞める前じゃないと相談できない",     right: "続けながらの相談が最も多いです" },
          { wrong: "これくらいで相談するのは甘え",        right: "「このくらいで」と思うほど消耗が深まっていることがあります" },
          { wrong: "何度も通わないと意味がない",          right: "1回でも状況の整理につながります" },
          { wrong: "相談したら辞める方向に誘導される",    right: "方向性を決めるのはあなた自身です" },
        ].map(({ wrong, right }) => (
          <div key={wrong} className="flex gap-3">
            <span className="text-stone-300 text-xs flex-shrink-0 mt-0.5">❌</span>
            <div>
              <p className="text-stone-400 line-through text-xs">{wrong}</p>
              <p className="text-stone-700 text-xs mt-0.5">→ {right}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>よくある質問</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="card">
            <p className="font-medium text-stone-900 mb-2 text-sm">Q. {item.q}</p>
            <p className="text-stone-600 text-sm leading-[1.85]">A. {item.a}</p>
          </div>
        ))}
      </div>

      <div className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-100 text-sm text-stone-600">
        一人で考え続けるとループしやすいですが、外から整理すると数回で方向が見えることもあります。
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">まだ辞めると決めていない段階でも大丈夫です</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          辞めるか迷っている状態を整理したい方へ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「決めてから相談」ではなく「整理するために相談」でOKです。一人でループしている状態から抜け出す整理の場として活用していただけます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/quit-job-counseling"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

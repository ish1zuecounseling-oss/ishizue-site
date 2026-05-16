import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaQuit } from "../../components/LineCta"
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
  {
    q: "仕事を辞めるタイミングはいつが正しいですか？",
    a: "「辞めるタイミングがわからない」という状態そのものが、消耗のサインであることが多いです。明確な正解はありませんが、「判断できなくなっている」「感情がよくわからない」「休んでも回復しない」という状態が続いている場合は、判断の前に消耗を回復させることが先決です。",
  },
  {
    q: "支援職（看護師・介護士・社会福祉士）でカウンセリングを受けるのは甘えですか？",
    a: "甘えではありません。支援職は「感情労働」「共感疲労」という構造的な消耗が起きやすい職業です。消耗が深まると判断力が落ち、一人で考え続けてもループするだけになります。外から整理することは、弱さではなく合理的な選択です。",
  },
]

export default function QuitJobCounseling() {
  return (
    <ArticleLayout
      title="仕事を辞めたいときカウンセリングは必要？支援職の限界サインと相談するタイミング【公認心理師監修】"
      description="「辞めたいけど決めきれない」「誰にも言えない」——看護師・介護士・社会福祉士など支援職の方へ。一人で抱えて動けなくなっているなら整理するタイミングかもしれません。限界サイン3段階・判断フロー・相談で変わることを公認心理師が解説します。"
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

      {/* セルフチェック誘導ブロック */}
      <div className="my-5 p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
        <p className="text-[11px] text-stone-500 mb-1.5 tracking-wide">まず30秒で自分の状態を確認</p>
        <p className="text-sm font-medium text-stone-800 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          今、自分がどの段階にいるかわからない方へ
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-3">
          「辞めるかどうか」を考える前に、消耗の深さを確認するセルフチェックがあります。記事を読み進める前にチェックしておくと、自分にとって必要な情報を整理しやすくなります。
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            to="/articles/helper-empathy-check"
            className="flex-1 text-center py-2 px-3 rounded-xl text-xs font-medium bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 no-underline"
          >
            共感疲労チェック（20項目）→
          </Link>
          <Link
            to="/articles/helper-burnout-check"
            className="flex-1 text-center py-2 px-3 rounded-xl text-xs font-medium bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 no-underline"
          >
            バーンアウト診断 →
          </Link>
        </div>
      </div>

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

      <h2>仕事を辞めるタイミング——判断できない状態そのものが限界サイン</h2>
      <p>
        「辞めるタイミングがわからない」と感じているとき、
        それ自体が<strong>判断力が落ちるほど消耗しているサイン</strong>かもしれません。
        消耗が深まると「続ける」「辞める」どちらも決められなくなります。
        この状態でさらに一人で考え続けると、ループが深まるだけです。
      </p>

      {/* 3段階の限界サイン */}
      <h2>限界サインの3段階——今あなたはどの段階？</h2>
      <p>
        消耗には段階があります。段階によって必要なアクションが変わります。
        まず自分がどの段階にいるかを把握することが、判断の出発点になります。
      </p>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">LEVEL 1</span>
              <span className="text-[11px] text-stone-500">違和感の段階</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「なんとなく辞めたい」と感じ始めている
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p>・休日に仕事のことを考える時間が増えた</p>
            <p>・朝、出勤が少し億劫になってきた</p>
            <p>・以前ほどやりがいを感じない</p>
            <p className="pt-2 mt-2 border-t border-stone-100 text-stone-700">
              <strong className="text-stone-800">この段階で必要なこと：</strong>休息と環境調整。まだ自分で判断できる段階。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-600 tracking-wider font-medium">LEVEL 2</span>
              <span className="text-[11px] text-stone-600">判断が鈍る段階</span>
            </div>
            <p className="text-sm font-medium text-stone-900 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「辞めたいけど決められない」状態が続いている
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50/40">
            <p>・休んでも疲れが抜けない</p>
            <p>・「続ける」「辞める」どちらも決めきれない</p>
            <p>・<Link to="/articles/emotion-unknown" className="underline underline-offset-2">感情がよくわからない</Link></p>
            <p>・考えがループする（<Link to="/articles/helper-rumination" className="underline underline-offset-2">反芻思考</Link>）</p>
            <p>・誰にも話せていない</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと：</strong>一人で考え続けるとループが深まります。外から整理する場（カウンセリング）が有効。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-100 tracking-wider font-medium">LEVEL 3</span>
              <span className="text-[11px] text-stone-200">回復優先の段階</span>
            </div>
            <p className="text-sm font-medium text-white mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              判断より先に休む必要がある状態
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50">
            <p>・<Link to="/articles/helper-cannot-sleep" className="underline underline-offset-2">睡眠が崩れている</Link></p>
            <p>・日常生活に支障が出ている</p>
            <p>・強い無気力・<Link to="/articles/feeling-nothing" className="underline underline-offset-2">何も感じない</Link>状態が続く</p>
            <p>・身体症状（頭痛・胃痛・動悸）が続いている</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと：</strong>「辞めるかどうか」を考えること自体が負担になっています。判断より先に医療機関への相談と休息を優先してください。
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed">
        ※段階は固定ではなく、状況や時期によって行き来します。「自分はLevel 3だ」と気づくこと自体が、回復の第一歩になります。
      </p>

      <LineCtaQuit />

      {/* 判断フローチャート */}
      <h2>辞める判断フローチャート——一人で抱え込まないための5ステップ</h2>
      <p>
        「辞める・続ける」を判断する前に、整理しておきたい順番があります。
        いきなり結論を出そうとすると、消耗が深い状態では判断を誤りやすくなります。
      </p>

      <div className="my-5 space-y-2.5">
        {[
          {
            step: "STEP 1",
            title: "今の消耗の深さを把握する",
            desc: "上の3段階のうち、自分がどこにいるかを確認する。Level 3なら、まず回復が優先。",
          },
          {
            step: "STEP 2",
            title: "睡眠・身体症状の有無を確認する",
            desc: "眠れない・食欲がない・身体症状が続く場合は、医療機関への相談も並行して検討する。",
          },
          {
            step: "STEP 3",
            title: "「何がつらいのか」を分解する",
            desc: "業務内容なのか、人間関係なのか、職場環境なのか、職業そのものなのか。要因を切り分ける。",
          },
          {
            step: "STEP 4",
            title: "「続ける・辞める」以外の選択肢を出す",
            desc: "部署異動・時短勤務・休職・転職・職種変更など、二択以外の選択肢を広げる。",
          },
          {
            step: "STEP 5",
            title: "判断する（または、判断しないと決める）",
            desc: "整理した上で判断する。Level 2以上なら、判断を一旦保留にして回復を優先するのも一つの選択。",
          },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-3 p-3 rounded-xl bg-white border border-stone-100">
            <div className="flex-shrink-0">
              <span className="inline-block text-[10px] tracking-wider text-stone-500 bg-stone-100 px-2 py-1 rounded-md">{step}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-stone-800 mb-1">{title}</p>
              <p className="text-xs text-stone-600 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-600 leading-relaxed">
        このフローを一人で進めるのが難しいときに、カウンセリングが整理の場として機能します。STEP 3〜4で詰まることが多いです。
      </div>

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

      <h2>支援職こそ、外から整理する場が必要な理由</h2>
      <p>
        看護師・介護士・社会福祉士などの支援職は、
        <strong>感情労働と共感疲労という構造的な消耗</strong>が常に起きている職業です。
        他者の感情を受け止め続けること自体が、目に見えない疲労として蓄積していきます。
      </p>
      <p>
        さらに支援職は、職業柄「相談される側」であることが多く、
        自分が相談する側に回ることに抵抗を感じやすい傾向があります。
        「自分はまだ大丈夫」「もっと大変な人がいる」と感じるうちに、
        消耗が深まっていることに気づきにくくなります。
      </p>
      <p>
        だからこそ、支援職には<strong>支援職の構造を理解した相談者</strong>との対話が必要になります。
        一般的な「仕事を辞めたい相談」とは違う層の整理が必要だからです。
      </p>

      <h2>よくある誤解</h2>
      <div className="card space-y-2 text-sm">
        {[
          { wrong: "辞める前じゃないと相談できない",     right: "続けながらの相談が最も多いです" },
          { wrong: "これくらいで相談するのは甘え",        right: "「このくらいで」と思うほど消耗が深まっていることがあります" },
          { wrong: "何度も通わないと意味がない",          right: "1回でも状況の整理につながります" },
          { wrong: "相談したら辞める方向に誘導される",    right: "方向性を決めるのはあなた自身です" },
          { wrong: "支援職が相談するのは恥ずかしい",      right: "支援職こそ構造的に消耗しやすい職業です" },
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

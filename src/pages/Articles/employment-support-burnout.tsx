import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "福祉の仕事のはずなのに、企業開拓の営業がつらいです。おかしいですか?",
    a: "おかしくありません。就労支援員は、福祉職の中で唯一、日常的に「営業活動」を担う職種です。福祉を志して入った人が、企業に頭を下げ、断られ続ける役割を想定していたケースはまれで、そのギャップ自体が正当な消耗源です。ただ、見方を変えると、企業の論理と福祉の論理の両方を扱えることは、就労支援員にしかない専門性でもあります。「営業がつらい」と感じることと、その仕事に意味があることは、両立します。",
  },
  {
    q: "支援した人がすぐに離職すると、「自分の支援が悪かった」と感じてしまいます。",
    a: "定着の成否は、本人の状態・職場環境・マッチング・家庭状況・体調など多くの要因で決まり、支援員の関わりはその一部です。また、早期離職が常に「失敗」とも限りません。合わない職場を早く離れられたことが、本人にとって重要な学びや次の一歩になる場合もあります。「就職・定着＝成功、離職＝失敗」という単純な物差しを自分に当て続けると、コントロールできない結果で自分を罰し続けることになります。結果は本人と環境のもの、プロセスへの誠実さがあなたのもの——その線引きが、長く続けるための土台です。",
  },
  {
    q: "本人の希望(やりたい仕事)と現実(できる仕事)の間で、希望を「削る」役回りがつらいです。",
    a: "そのつらさは、あなたが本人の夢を尊重しているからこそ生じるものです。アセスメントに基づいて現実的な選択肢を示すことは、夢を壊す行為ではなく、本人が「実際に経験して選び直す」ための土台作りです。また、伝え方には幅があります。「無理です」と閉じるのではなく、「まずここから始めて、そこに近づく道を一緒に探す」と段階に翻訳する——それでも苦しさは残りますが、その苦しさは、あなたが誠実である証拠です。一人で抱えず、チームでケース検討の場に乗せてください。",
  },
  {
    q: "就職実績や利用率などの「数字」に追われて、支援が雑になっている気がして罪悪感があります。",
    a: "それは、制度の構造があなたの中に生んでいる葛藤です。就労支援の制度は、実績(就職者数・定着率・利用率)が事業所の報酬や存続に直結する設計になっており、「数字のための支援」と「本人のための支援」の間で現場が引き裂かれやすい構造を持っています。あなたの罪悪感は、支援観が生きている証拠であって、能力不足のサインではありません。この種の苦しさは「モラルインジャリー(道徳的負傷)」として整理できます。数字の責任は事業所と制度のもの、目の前の一人への誠実さがあなたのもの——と切り分けてください。",
  },
  {
    q: "就労支援に向いていないのでは、と思うことがあります。",
    a: "消耗した状態での「向いていない」は、適性の評価として正確でないことが多いものです。就労支援は、対人支援・営業・調整・事務・数字管理を一人で担う、構造的に消耗しやすい仕事です。「しんどい」のは、あなたの適性の問題ではなく、役割設計の問題である可能性が高い。まず消耗の回復を先に、適性の判断は回復してから。その順番を守ってください。",
  },
]

export default function EmploymentSupportBurnout() {
  return (
    <ArticleLayout
      title="就労支援員がしんどい理由｜福祉と企業の板挟みで消耗する構造【公認心理師】"
      description="就労支援員・ジョブコーチ・就労移行/継続支援の職員——企業開拓の営業疲れ、本人の希望と現実の間に立つ苦しさ、就職実績という数字のプレッシャー。福祉の中で唯一「企業の論理」と接続する仕事に固有の消耗構造を、就労支援の実務経験を持つ公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/employment-support-burnout"
      date="2026-06-11"
      tags={["burnout", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        福祉の論理と、企業の論理。その2つの世界の通訳を続けるのが、就労支援という仕事です。通訳は、どちらの世界からも消耗を受け取ります。
      </p>

      {/* ▼ 監修者ボックス */}
      <div className="my-4 p-4 rounded-2xl border border-stone-200 bg-white">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
            <span className="text-[10px] text-stone-500 tracking-wider">監修</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-stone-800 mb-0.5">公認心理師による解説</p>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              障害福祉15年・就労支援現場の実務経験／カウンセリング累計300名以上／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        企業に断られた帰り道、「自分は何の仕事をしているんだろう」と思った。
        会議では「今期の就職者数」が議題になる。
        夜、利用者さんから「やっぱり仕事辞めたいです」と連絡が来る。
        企業からは「ちょっと困っているので、何とかしてもらえませんか」と電話が鳴る。
      </p>

      <p>
        ——就労支援の現場で働くあなたの日常は、こんな景色ではないでしょうか。
      </p>

      <p>
        就労支援員・ジョブコーチ・就労移行や就労継続支援の職員には、
        看護や介護とも、相談支援とも違う、<strong>この仕事に固有の消耗の構造</strong>があります。
        それを言葉にして整理するのが、この記事です。
        しんどさの正体が見えると、「自分が向いていないからだ」という誤解を、手放せるようになります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・企業開拓で断られ続けて、訪問前に気が重くなる</li>
          <li>・「就職者数」「定着率」「利用率」の数字に追われている感覚がある</li>
          <li>・本人の希望と現実の間で、希望を「削る」役回りに疲れている</li>
          <li>・就職した人の職場トラブルで、企業と本人の板挟みになっている</li>
          <li>・急な欠席・不調・ドタキャンで、立てた計画が崩れ続ける</li>
          <li>・「福祉がやりたかったのに、やっているのは営業と事務」と感じる</li>
        </ul>
      </div>

      <h2>就労支援の消耗が特殊な理由——「2つの論理の通訳者」</h2>
      <p>
        福祉の仕事は数多くありますが、就労支援には、他のどの職種とも違う構造的な特徴があります。
        <strong>福祉の中で唯一、「企業」という福祉の外の論理と、日常的に接続する仕事</strong>だということです。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 福祉職なのに、営業を担う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          実習先・雇用先の開拓は、実質的に営業活動です。
          アポを取り、頭を下げ、断られ、また次の企業へ——
          福祉を志した人の多くは、この役割を想定していません。
          「人を支えたくて入った仕事で、なぜ営業の消耗をしているのか」というギャップ自体が、
          静かに意欲を削っていきます。断られ続けることは、誰にとっても消耗です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 福祉の論理と、企業の論理の間に立つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          福祉の論理は「本人のペース・特性の尊重」。企業の論理は「生産性・納期・職場の調和」。
          この2つは、しばしば衝突します。
          企業には本人の特性を翻訳して伝え、本人には職場の現実を翻訳して伝える——
          就労支援員は、<strong>両方の世界の通訳者</strong>です。
          通訳は、双方の不満と期待を一身に受け取ります。
          企業から「困っています」、本人から「つらいです」。その間で、あなたが消耗します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 成果が「数字」で測られる福祉</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          就職者数、定着率、利用率、（B型なら）工賃——
          就労支援は、制度上、<strong>実績の数字が事業所の報酬と存続に直結する</strong>設計になっています。
          数字を追えば「本人のための支援」が薄まる感覚に苦しみ、
          本人に寄り添えば数字が遠のく。
          この引き裂かれは、あなた個人の葛藤ではなく、制度が現場に埋め込んだ構造です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「就職」がゴールではない——終わらない支援</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          就職が決まった瞬間の喜びの直後から、定着支援が始まります。
          職場でのトラブル、本人の不調、企業からの相談——
          ゴールテープを切ったはずなのに、レースが続いている。
          達成感の区切りが構造的に来にくいことが、消耗の回収を難しくします。
        </p>
      </div>

      <h2>現場で起きやすい、消耗の場面</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 「夢を削る役」を引き受ける苦しさ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          本人の「やりたい仕事」と、アセスメント上の「今できること」の間に差があるとき、
          現実を伝える役回りは、就労支援員に来ます。
          本人の夢を尊重したい気持ちと、現実的な選択肢を示す責任——
          その間で言葉を選ぶたびに、心が削れます。
          このつらさは、あなたが本人を尊重している証拠です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 予定が崩れ続ける消耗</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          急な欠席、体調の波、面接当日のキャンセル——
          障害特性や体調による変動は支援の前提ですが、
          「立てた計画が崩れる」ことが日常になると、
          計画を立てること自体への無力感が蓄積します。
          これは段取り力の問題ではなく、不確実性の高い仕事に固有の認知的負荷です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">■ 離職の連絡が、自分の成績表に見える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援した人が早期離職したとき、「自分のマッチングが悪かったのか」
          「定着支援が足りなかったのか」と、結果を自分の通信簿のように受け取ってしまう。
          実績の数字がある分、この自責は他の福祉職より強く働きます。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>「あなたのせい」ではない、と言える理由</h2>
      <p>
        ここまでの構造を、一度まとめます。
        営業・支援・調整・事務・数字管理——これを一人の支援員が同時に担うのは、
        <strong>役割設計の問題</strong>であって、あなたの能力の問題ではありません
        （<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">キャパシティを超えた業務を「自分のせい」にしない</Link>）。
      </p>
      <p>
        そして、「数字のために本人を急かしている気がする」という罪悪感——
        それは、制度の二重基準（実績と理念）が現場に生む<strong>良心の傷</strong>であり、
        <Link to="/articles/moral-injury" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">モラルインジャリー（道徳的負傷）</Link>として整理できます。
        罪悪感が生じるのは、あなたの支援観が生きているからです。
      </p>

      <h2>自分を守るための視点</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 成果の物差しを、2本持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「数字の成果」（就職者数・定着率）と「支援の成果」（本人が経験から学んだこと、
          関係の中で生まれた小さな変化）を、意識的に分けて記録してください。
          数字に表れない成果を自分で認識できる支援員ほど、数字の波に飲まれずに済みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 結果と、プロセスを切り分ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          就職するか、続くか、辞めるか——結果の所有者は本人です。
          あなたが持てるのは、プロセスへの誠実さだけ。
          「支援した人の人生の結果」まで背負い始めたら、
          <Link to="/articles/messiah-complex" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">救う側の構造</Link>に入りかけているサインです。
          支えることと、救うことは、違います。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「企業の論理がわかる」を、汚れではなくスキルと捉える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          営業ができ、企業と話せ、数字を読める福祉職——それは「福祉の純粋さを失った」のではなく、
          <strong>2つの世界を翻訳できる、希少な専門性</strong>です。
          あなたの消耗の源である「間に立つ力」は、同時にあなたにしかない価値でもあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 板挟みの感情を、一人で抱えない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          企業対応のしんどさ、本人への申し訳なさ、数字へのプレッシャー——
          こうした感情は、ケース会議の「報告事項」には乗りません。
          だからこそ、意識的に言葉にする場（同僚との振り返り、スーパービジョン、外部の相談先）を
          確保してください。感情は、報告書に書けないものほど、蓄積します。
        </p>
      </div>

      <h2>相談支援専門員の負荷との違い</h2>
      <div className="card space-y-3 text-sm">
        {[
          { label: "就労支援員（本記事）", desc: "「企業」という福祉外の論理との接続が核。営業・実績数字・福祉と企業の通訳という固有の負荷。" },
          { label: "相談支援専門員", desc: "計画作成と多機関調整が核。利用者・家族・事業所・行政の間の役割過重。" },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-3">
            <span className="text-xs font-medium flex-shrink-0 w-32 mt-0.5 text-stone-700">{label}</span>
            <p className="text-stone-600 leading-[1.9]">{desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-600">
        多機関調整の負荷は<Link to="/articles/helper-case-manager-burden" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">相談支援専門員が抱える精神的負荷</Link>で扱っています。
        今の消耗度は<Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウトチェック（3分）</Link>で確認できます。
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">この消耗を構造から理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/moral-injury" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">モラルインジャリー——「これでいいのか」と思いながら働く傷</Link></li>
          <li>・<Link to="/articles/capacity-over-blame" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">キャパシティを超えた業務を「自分のせい」にしない</Link></li>
          <li>・<Link to="/articles/messiah-complex" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">メサイアコンプレックス——「救いたい」が止まらない心理</Link></li>
          <li>・<Link to="/articles/helper-case-manager-burden" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">相談支援専門員が抱える精神的負荷</Link></li>
          <li>・<Link to="/articles/helper-manager-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職の管理職がしんどい理由</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          就労支援の現場を実務で知る公認心理師が、「2つの論理の間に立つ消耗」を、現場の言葉のまま整理します。
          10項目で相性を確認できます（合わないと出たら別の選択肢も案内しています）。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「福祉と企業の間で、すり減っている」あなたへ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          通訳者の消耗を、現場を知る人と整理する
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          企業開拓のしんどさも、数字のプレッシャーも、「夢を削る役」の苦しさも——就労支援の現場を知っているからこそ、説明抜きで話せることがあります。あなたの支援観を守ったまま働き続けるために。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/employment-support-burnout"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)と、就労支援現場での実務経験をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

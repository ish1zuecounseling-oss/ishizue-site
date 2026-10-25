import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "「注意は、最も稀で、最も純粋な寛大さである」は誰の言葉ですか?",
    a: "フランスの哲学者シモーヌ・ヴェイユが、1942年に友人の詩人ジョー・ブスケに宛てた手紙の中で書いた言葉です。ヴェイユにとって「注意」とは、自分の考えをいったん脇に置き、目の前の相手をそのまま受け取ろうとする心の向け方のことでした。",
  },
  {
    q: "ヴェイユの言う「注意」とは、集中することですか?",
    a: "少し違います。ヴェイユは、注意は筋肉を緊張させるような努力ではないと述べています。自分の考えを一時的に止め、心を空けて、対象がそのまま入ってこられるようにしておくこと。力を入れて集中するというより、身構えずに受け取る準備をしておく状態に近いものです。",
  },
  {
    q: "「あなたは何に苦しんでいるのですか」と尋ねることが、なぜ大切なのですか?",
    a: "ヴェイユは、隣人への愛の完全な形は、ただ相手に「あなたの苦しみは何ですか」と問えることだと書きました。苦しんでいる人は、多くの場合、ひとまとめに「かわいそうな人」として扱われます。問いかけることは、相手を一人の人として見て、その人だけの経験に関心を向けることです。",
  },
  {
    q: "疲れていて、利用者の話に注意を向けられません。どうすればいいですか?",
    a: "注意を向ける力は、心と体に余裕があってこそ働きます。話に集中できない、相手の言葉が入ってこないという状態は、怠けではなく、共感疲労や燃え尽きが進んでいるサインのことがあります。まずは今の状態を確認し、休息や相談の場を確保してください。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerWeilAttention() {
  return (
    <ArticleLayout
      title="注意は、最も稀で純粋な寛大さ｜シモーヌ・ヴェイユから読む、支援の核にある「注意を向ける力」【公認心理師】"
      description="「注意は、最も稀で、最も純粋な寛大さである」——フランスの哲学者シモーヌ・ヴェイユは、不幸な人に本当に必要なのは、注意を向けてくれる人だと考えました。技法より先にある支援の核と、疲れた支援者から注意を向ける力が失われていく理由を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-weil-attention"
      date="2026-10-17"
      tags={["compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ シモーヌ・ヴェイユ
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
              障害福祉15年・カウンセリング累計300名以上の臨床経験／こころの相談室いしずえ運営
            </p>
          </div>
        </div>
      </div>

      <p>
        研修で、傾聴の技法を学んだ。うなずき、くり返し、開かれた質問。
        けれど現場では、次の予定が気になり、記録のことが頭をよぎり、
        相手の話を聞いているはずなのに、心がそこにない——。
      </p>
      <p>
        技法を知っていても、相手に届かない日がある。
        その理由を考えるとき、手がかりになる思想家がいます。
        20世紀フランスの哲学者、<strong>シモーヌ・ヴェイユ</strong>です。
      </p>

      <h2>シモーヌ・ヴェイユ——工場で働いた哲学者</h2>
      <p>
        ヴェイユ(1909–1943)は、パリに生まれた哲学者です。
        高校で哲学を教えていましたが、働く人々の現実を知るために教職を休み、
        1934年から翌年にかけて、自ら工場の作業員として働きました。
      </p>
      <p>
        単調で過酷な労働の中で、彼女は、疲れ果てた人間からは<strong>考える力そのものが奪われていく</strong>ことを身をもって知ります。
        この経験が、人間の「不幸」と、それに向き合う「注意」についての思索の土台になりました。
        ヴェイユは第二次世界大戦中、亡命先のイギリスで34歳の若さで亡くなっています。
      </p>

      <h2>「注意は、最も稀で、最も純粋な寛大さである」</h2>
      <p>
        ヴェイユは、友人に宛てた手紙にこう書いています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          注意は、最も稀で、最も純粋な寛大さである。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ヴェイユ、ジョー・ブスケ宛ての手紙(1942年、フランス語原文より筆者訳)
        </p>
      </div>
      <p>
        ここでいう「注意」は、力を入れて集中することではありません。
        ヴェイユによれば、注意とは<strong>自分の考えをいったん止め、心を空けて、相手がそのまま入ってこられるようにしておくこと</strong>です。
        「こう言おう」「こうしてあげよう」という自分の考えで心をいっぱいにしているうちは、相手は入ってこられません。
      </p>

      <h2>「不幸な人に必要なのは、注意を向けられる人だけ」</h2>
      <p>
        ヴェイユは、学生に向けて書いた文章の中で、さらにこう述べています(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          不幸な人たちがこの世で必要としているのは、自分に注意を向けてくれる人だけである。
          不幸な人に注意を向ける力は、とても稀で、とても難しい。それはほとんど奇跡であり、奇跡そのものである。<br />
          隣人への愛の完全な形とは、ただ相手に「あなたの苦しみは何ですか」と問えることだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ヴェイユ「神への愛のために学業を善用することについての省察」(1942年頃、フランス語原文より筆者訳・要約)
        </p>
      </div>
      <p>
        ヴェイユがここで言っているのは、<strong>何をしてあげられるか</strong>より前に、
        <strong>相手が何を経験しているのか</strong>に関心を向けることの大切さです。
        苦しんでいる人は、しばしば「かわいそうな人」として、ひとまとめに扱われます。
        「あなたの苦しみは何ですか」と問うことは、その人を一人の人として見ることです。
      </p>

      <h2>支援職に置き換えると——なぜ注意は難しいのか</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 苦しみを見続けるのは、つらい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ヴェイユは、不幸から人は目をそらしたくなるものだと考えました。
          支援者も同じです。相手の苦しみをそのまま受け取るのがつらいから、
          つい「こうすればいいですよ」と解決策に急いでしまう。
          助言は、ときに<strong>苦しみを見ないための方法</strong>にもなります。
          (<Link to="/articles/thinker-socrates-midwife" className={linkCls}>ソクラテスの回</Link>で扱った「答えを与えたくなる」葛藤とも重なります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 心がいっぱいだと、相手が入ってこない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          次の予定、記録、上司からの指示、自分の評価。
          心がほかのことで埋まっていると、ヴェイユの言う「空けておく」ができません。
          技法は使えていても、注意は向いていない状態です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 疲れは、注意を向ける力を奪う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ヴェイユが工場で知ったように、疲れ果てた人間からは考える力が奪われます。
          支援者も、疲れが限界に近づくと、相手の話が入ってこなくなります。
          これは心の冷たさではなく、<strong>注意を向ける力そのものが枯れている</strong>状態です。
          (<Link to="/articles/compassion-fatigue-complete" className={linkCls}>共感疲労の全体像</Link>もあわせてどうぞ)
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">相手の話が入ってこない日が増えているなら、消耗の度合いを確かめてみてください。</p>
        <Link to="/articles/helper-empathy-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ 共感疲労チェック20項目</Link>
      </div>

      <LineCtaCompassion />

      <h2>この思想の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ヴェイユの「注意」は、宗教的な文脈にある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ヴェイユにとって注意は、最終的には神への祈りと結びついたものでした。
          この記事では、その思想の中から、人に向ける注意の部分を取り出して読んでいます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ヴェイユの生き方を、手本にしなくていい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ヴェイユは、自分を厳しく削るような生き方をした人でもありました。
          支援職がその生き方まで真似る必要はありません。
          むしろ、注意を向ける力は、<strong>休息と余裕があってこそ保たれる</strong>ものです。
          自分を大切にすることは、相手に注意を向け続けるための条件です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 面談の前に、心を一つ空ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          部屋に入る前に一度深く息を吐き、「今から、この人の話を聞く」と心の中で言います。
          頭の中の予定や心配を、いったん脇に置く小さな儀式です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 解決策の前に、一つ問う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          助言したくなったら、その前に「今、いちばんつらいのはどんなことですか」と一つだけ聞いてみます。
          ヴェイユの言う「あなたの苦しみは何ですか」の、現場での形です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 注意が向かない日は、自分の疲れのサインと受け取る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          相手の話が入ってこない日が続いたら、自分を責める前に、自分の疲れを点検します。
          (<Link to="/articles/compassion-fatigue-coping" className={linkCls}>共感疲労の対処法と回復方法</Link>も参考になります)
        </p>
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">この記事とつながるテーマ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/compassion-fatigue-complete" className={linkCls}>共感疲労(コンパッション・ファティーグ)の全体像</Link></li>
          <li>・<Link to="/articles/helper-empathy-check" className={linkCls}>共感疲労チェック20項目</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-coping" className={linkCls}>共感疲労の対処法と回復方法</Link></li>
          <li>・<Link to="/articles/thinker-socrates-midwife" className={linkCls}>答えを与えるより、問いで引き出す(ソクラテスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>人類を愛するほど、隣の人を愛せない(ドストエフスキーから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">人の話を聴き続けてきた方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          今度は、あなたが注意を向けてもらう時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「あなたの苦しみは何ですか」と、あなた自身が問いかけられる場所です。解決を急がず、まずはそのまま聴きます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/thinker-weil-attention"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、日本で著作権の保護期間が満了しているフランス語原典(ヴェイユの書簡および「学業の善用についての省察」)から筆者が翻訳・要約したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

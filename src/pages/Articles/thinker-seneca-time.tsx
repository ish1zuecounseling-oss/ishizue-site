import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "セネカの『人生の短さについて』とは、どんな作品ですか?",
    a: "古代ローマの哲学者セネカが、友人パウリヌスに宛てて書いたとされる短い論考です。「人生は短い」と嘆く人々に対して、人生が短いのではなく、私たちが時間を浪費しているのだと説きます。2000年近く前の作品ですが、忙しさに追われる現代人に向けた本として、今も読み継がれています。",
  },
  {
    q: "セネカとマルクス・アウレリウスは、どんな関係ですか?",
    a: "どちらも古代ローマのストア派の哲学者です。セネカは1世紀、皇帝ネロの教育係や助言役を務めた人物で、マルクス・アウレリウスは2世紀の皇帝です。二人の間に直接の交流はありませんが、同じストア派の思想を受け継いでいます。",
  },
  {
    q: "人の頼みを断ると、冷たいと思われそうです。",
    a: "すべてを断る必要はありません。セネカが問題にしたのは、人のために時間を使うことそのものではなく、自分で選ばないまま、時間が人に持っていかれることでした。引き受けるかどうかを一度考えてから決めるだけでも、時間を「差し出す」のではなく「自分で使う」感覚に近づきます。",
  },
  {
    q: "自分の時間がまったく取れません。どこから始めればいいですか?",
    a: "まず、1週間の時間の使い方を書き出してみることをおすすめします。自分で選んだ時間と、頼まれて流れで使った時間を分けてみると、どこを少し取り戻せそうかが見えてきます。忙しさのあまり眠れない、食事がとれないといった状態が続いている場合は、心身の不調のサインのこともあります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerSenecaTime() {
  return (
    <ArticleLayout
      title="お金は分けないのに、人生は分け与えている｜セネカ『人生の短さについて』から読む、自分の時間を持てない支援職へ【公認心理師】"
      description="古代ローマの哲学者セネカは「人生が短いのではない、私たちが多くを浪費しているのだ」と書き、お金は守るのに自分の時間はたやすく人に分け与えてしまう人間の姿を描きました。頼まれごとや残業で自分の時間がなくなっている支援職に向けて、時間を取り戻す考え方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-seneca-time"
      date="2026-10-26"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ セネカ
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
        利用者さんの対応、急な電話、会議、記録、同僚からの「ちょっといい?」。
        気づけば一日が終わっていて、自分のために使った時間は一分もない。
        休みの日も、職場からの連絡を気にしている。
        「時間がない」が口ぐせになって、もう何年たつだろう——。
      </p>
      <p>
        自分の時間が、いつの間にか人に持っていかれている。
        その感覚を、2000年近く前に鋭く言い当てた人がいます。
        古代ローマの哲学者、<strong>セネカ</strong>です。
      </p>

      <h2>セネカとはどんな人か</h2>
      <p>
        ルキウス・アンナエウス・セネカ(紀元前4年ごろ–紀元65年)は、古代ローマの哲学者・政治家です。
        ストア派の哲学を学び、若き日の皇帝ネロの教育係を務め、のちには政治の中枢で助言役も担いました。
      </p>
      <p>
        つまりセネカ自身、権力の中心で、多くの人の要求に応え続ける忙しい日々を送っていた人です。
        晩年は政治から身を引き、執筆に打ち込みました。
        その中で、友人パウリヌスに宛てて書いたとされるのが<strong>『人生の短さについて』</strong>です。
      </p>

      <h2>「人生が短いのではない、私たちが浪費しているのだ」</h2>
      <p>
        この作品は、「人生は短い」と嘆く人々への反論から始まります(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          私たちは、わずかな時間しか持っていないのではない。その多くを、むだにしてしまったのだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          セネカ『人生の短さについて』第1章より(ラテン語原文から筆者訳)
        </p>
      </div>
      <p>
        人生は、うまく使えば十分に長い。
        短く感じるのは、気づかないうちに、時間を手放してしまっているからだ——とセネカは考えました。
      </p>

      <h2>お金は分けないのに、人生は分け与えている</h2>
      <p>
        では、時間はどこへ消えていくのか。セネカは、こう書いています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自分のお金を人に分け与えたがる者は、一人も見当たらない。
          それなのに、自分の人生となると、誰もがなんと多くの人に分け与えていることか。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          セネカ『人生の短さについて』第3章より(ラテン語原文から筆者訳)
        </p>
      </div>
      <p>
        人は、財産を守ることには熱心なのに、時間となると驚くほど簡単に人に渡してしまう。
        セネカは続けて、ケチであることが恥ではない唯一のものがあるとすれば、それは時間だ、とも述べています。
      </p>
      <p>
        さらにセネカは、忙しさに追われている人ほど、<strong>「生きること」から遠ざかっている</strong>と指摘しました。
        用事をこなすことと、自分の人生を生きることは、同じではないのです。
      </p>

      <h2>支援職に置き換えると——時間が「差し出され」ていく</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 頼まれると、時間を差し出してしまう</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「少しだけいい?」に応じ続けるうちに、自分の仕事は残業に回り、休憩もなくなる。
          一つひとつは小さな頼みでも、積み重なると一日の大半が人に分け与えられています。
          (<Link to="/articles/helper-cannot-say-no" className={linkCls}>支援職が断れない理由</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休みの日まで、職場に時間を渡している</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          体は休んでいても、職場からの連絡を待ち、仕事のことを考え続けている。
          それもまた、自分の時間を職場に分け与えている状態です。
          (<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link>で詳しく扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分のための時間に、罪悪感がある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人のために時間を使うことには慣れているのに、自分のために時間を使うと、なぜか後ろめたい。
          セネカの言葉を借りれば、時間についてだけは、ケチになってもいいのです。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">時間の使い方は、個人だけでは決められない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          セネカは晩年、政治から身を引くことができましたが、多くの支援職にとって、人手不足や業務量はすぐには変えられません。
          時間を取り戻す工夫と同時に、業務の配分を職場で見直すことも必要です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">人のために使う時間が、悪いわけではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の仕事は、人のために時間を使う仕事です。セネカの言葉を「人のために時間を使うな」と読む必要はありません。
          問題は、自分で選ばないまま、時間が流れ出ていくことです。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 時間の「行き先」を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          昨日一日の時間の使い方を書き出し、「自分で選んだ時間」と「流れで渡した時間」に色を分けてみます。
          どこで時間が流れ出ているかが見えるだけで、取り戻せる場所が見つかります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 頼まれたら「5分後に返事します」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          すぐに引き受けず、一度返事を保留します。
          その5分で「今、自分がすることか」を考えるだけで、時間を差し出すのではなく、自分で使う感覚が戻ってきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 誰にも渡さない時間を、予定に先に入れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          週に一度、30分だけでいいので、自分のための時間を先に予定表に入れます。
          仕事の予定と同じように、その時間は守るものとして扱います。
          (<Link to="/articles/thinker-holmes-time" className={linkCls}>いつも時間が足りない支援職へ(キャシー・ホームズから読む)</Link>も参考になります)
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
          <li>・<Link to="/articles/helper-cannot-say-no" className={linkCls}>支援職が断れない理由</Link></li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link></li>
          <li>・<Link to="/articles/thinker-holmes-time" className={linkCls}>いつも時間が足りない支援職へ(キャシー・ホームズから読む)</Link></li>
          <li>・<Link to="/articles/thinker-pascal-diversion" className={linkCls}>人は、部屋で静かに休んでいられない(パスカルから読む)</Link></li>
          <li>・<Link to="/articles/thinker-marcus-aurelius-role" className={linkCls}>「皇帝」の色に染まるな(マルクス・アウレリウスから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">自分の時間がなくなっている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          この時間だけは、あなたのために
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          誰かのために使い続けてきた時間を、少しだけ自分に戻す場所です。どこで時間が流れ出ているのかを、一緒に整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-seneca-time"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、著作権の保護期間が満了しているラテン語原典『人生の短さについて』(De Brevitate Vitae)から筆者が翻訳したものです。時間についてのケチの話と「生きること」についての指摘は筆者による要約です。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

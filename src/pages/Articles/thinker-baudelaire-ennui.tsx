import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "ボードレールの「酔え」は、どの作品に出てくる言葉ですか?",
    a: "散文詩集『パリの憂鬱』(1869年刊)に収められた「酔え(Enivrez-vous)」という短い作品です。「いつも酔っていなければならない」で始まり、酒にでも、詩にでも、美徳にでも、好きなものに酔えと続きます。お酒を勧める詩ではなく、「時間」の重さと空虚さから逃れようとする人間の姿を描いた作品として読まれています。",
  },
  {
    q: "ボードレールの「倦怠(アンニュイ)」とは何ですか?",
    a: "退屈や物憂さを指すフランス語で、ボードレールの詩の中心的なテーマです。詩集『悪の華』の冒頭の詩「読者に」では、あらゆる悪徳の中で最も醜いものとして描かれています。何をしても満たされず、世界全体が色あせて見える感覚で、現代の言葉でいえば「空虚感」に近いものです。",
  },
  {
    q: "空虚感を、仕事に打ち込むことで埋めるのは悪いことですか?",
    a: "仕事に打ち込むこと自体は悪いことではありません。問題になるのは、空虚さを感じないために止まれなくなっている場合です。休日に落ち着かない、何もしない時間が怖い、仕事がないと自分が空っぽに感じる、といった状態が続くなら、一度立ち止まって、空虚さそのものに目を向ける時期かもしれません。",
  },
  {
    q: "お酒で空虚さをまぎらわせている自覚があります。どうすればいいですか?",
    a: "空虚さやつらさを感じないために飲酒量が増えているなら、それ自体が心が限界に近いサインです。飲む量や頻度が増えている、飲まないと眠れない、といった状態があれば、早めに医療機関や地域の相談窓口に相談してください。責める必要はありません。それだけ耐えてきたということでもあります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerBaudelaireEnnui() {
  return (
    <ArticleLayout
      title="「いつも酔っていなければならない」｜ボードレールから読む、空虚感と「美徳に酔う」支援職【公認心理師】"
      description="「酒にでも、詩にでも、美徳にでも、とにかく酔え」——19世紀の詩人ボードレールは、倦怠(アンニュイ)と空虚さから逃れようとする人間を描きました。忙しさや役に立つことで空虚を埋め続ける支援職の心理と、空っぽの時間との付き合い方を公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-baudelaire-ennui"
      date="2026-10-16"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ボードレール
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
        平日は、目が回るほど忙しい。利用者のこと、記録、電話、会議。
        なのに、休みの日に予定が何もないと、急に落ち着かなくなる。
        ソファに座っていると、胸のあたりが空っぽになるような感覚がやってきて、
        結局、仕事のメールを開いてしまう——。
      </p>
      <p>
        忙しさが、何かから自分を守っている。
        この感覚を、150年以上前に一編の短い詩で言い当てた詩人がいます。
        フランスの<strong>シャルル・ボードレール</strong>です。
      </p>

      <h2>ボードレールと「倦怠」</h2>
      <p>
        ボードレール(1821–1867)は、近代詩の出発点とされるフランスの詩人です。
        代表作の詩集『悪の華』(1857年)は、都市の孤独や退廃を描いた内容が「風俗を乱す」とされ、
        出版直後に一部の詩が削除を命じられました。
      </p>
      <p>
        ボードレールが生涯をかけて描いたテーマの一つが、<strong>倦怠(アンニュイ)</strong>です。
        何をしても満たされず、世界が色あせて見える、重く沈んだ感覚。
        『悪の華』の冒頭に置かれた詩「読者に」で、彼はあらゆる悪徳の中で最も醜いものとして、それを名指しします(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          それは大地を好んで瓦礫に変え、<br />
          あくび一つで世界を呑みこむだろう。<br />
          それは「倦怠」だ!
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ボードレール『悪の華』「読者に」(フランス語原文より筆者訳)
        </p>
      </div>
      <p>
        激しい怒りや悲しみではなく、<strong>あくび一つで世界を呑みこむ</strong>ような、静かで重い空っぽさ。
        現代の言葉でいえば、<Link to="/articles/existential-emptiness" className={linkCls}>空虚感</Link>に近いものです。
      </p>

      <h2>「いつも酔っていなければならない」</h2>
      <p>
        では、この倦怠から人はどう逃れるのか。
        ボードレールは、散文詩集『パリの憂鬱』の中の「酔え」という短い作品で、こう書いています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いつも酔っていなければならない。すべてはそこにある。それが唯一の問題だ。
          あなたの肩を砕き、地面へと押し曲げる「時間」という恐ろしい重荷を感じないために、
          休みなく酔っていなければならない。<br />
          だが、何に?<br />
          酒に、詩に、あるいは美徳に。お好きなように。<br />
          とにかく、酔いなさい。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ボードレール『パリの憂鬱』「酔え」(フランス語原文より筆者訳)
        </p>
      </div>
      <p>
        ここで言う「酔う」とは、お酒のことだけではありません。
        <strong>何かに没頭して、時間の重さと空っぽさを感じないでいること</strong>です。
        そしてボードレールは、その対象として、酒や詩と並べて<strong>「美徳」</strong>を挙げています。
      </p>

      <h2>支援職に置き換えると——「美徳に酔う」ということ</h2>
      <p>
        支援の仕事は、まさに美徳の仕事です。
        人の役に立ち、困っている人を支え、感謝される。
        だからこそ、支援職は気づかないうちに<strong>美徳に酔う</strong>ことがあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 忙しさが、空っぽさを感じさせない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          次から次へとやることがあるうちは、空虚さを感じる暇がありません。
          忙しさそのものが、ボードレールの言う「休みなく酔っている」状態として働きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 酔いがさめると、空虚がやってくる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          休日や長期休暇、異動や退職で仕事が途切れたとき、急に自分が空っぽに感じられる。
          それは仕事が自分を満たしていたのではなく、<strong>仕事が空虚さを見えなくしていた</strong>のかもしれません。
          (<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>休みの日も休まらない</Link>の記事もあわせてどうぞ)
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 酔い続けるために、さらに働く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          空っぽさに触れたくないので、仕事を抱え込み、休みを削り、頼まれごとを断れなくなる。
          美徳に酔い続けることが、燃え尽きへの道になることがあります。
          (<Link to="/articles/helper-overwork" className={linkCls}>支援職が仕事を抱え込みやすい理由</Link>も参考になります)
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">空っぽな感じが続いているなら、その原因と抜け出す方向を整理した記事があります。</p>
        <Link to="/articles/existential-emptiness" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ 空虚感とは｜心が空っぽな感じが続く原因と、抜け出す方向</Link>
      </div>

      <LineCtaFatigue />

      <h2>何に酔うかを、選ぶ</h2>
      <p>
        ボードレールの詩は、「酔うな」とは言っていません。
        むしろ、時間の重さに押しつぶされないために、人は何かに酔わずにはいられない、と認めています。
        そのうえで、<strong>「何に?——お好きなように」</strong>と、選ぶ余地を残しています。
      </p>
      <p>
        支援職に必要なのは、美徳に酔うのをやめることではなく、
        <strong>酔う先を仕事だけにしないこと</strong>なのかもしれません。
        仕事のほかにも、時間を忘れて没頭できるもの——音楽、散歩、料理、手仕事、詩——があれば、
        仕事が途切れても、自分が空っぽになることはありません。
      </p>

      <h2>この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">ボードレールは、救いを示した人ではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ボードレール自身は、借金や病気に苦しみ、46歳で亡くなりました。
          彼は倦怠を鋭く描きましたが、そこから抜け出す方法を示したわけではありません。
          この記事は、彼の言葉を「自分の状態に気づくための鏡」として使っています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">お酒で空虚さを埋めている場合は、別の対応が必要</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          つらさを感じないために飲酒量が増えているなら、それは詩の話ではなく、心と体が限界に近いサインです。
          早めに医療機関や相談窓口に相談してください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分が「何に酔っているか」に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事、スマホ、買い物、お酒。時間の重さを感じないために、自分が何に没頭しているかを観察します。
          良い悪いを判断する必要はありません。<strong>気づくことが最初の一歩</strong>です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 空っぽの時間を、5分だけ味わってみる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何もしない時間に、どんな感覚がやってくるかを5分だけ観察します。
          落ち着かなさ、寂しさ、不安。空虚さは、目を向けると少しずつ形がわかってきます。
          つらすぎる場合は無理に続けないでください。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事以外に「酔える先」を一つ持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          役に立つかどうかと関係なく、時間を忘れられるものを一つ見つけます。
          ボードレールにとっての「詩」にあたるものです。
          (<Link to="/articles/what-do-i-want" className={linkCls}>自分は何をしたいのか</Link>がわからない場合は、こちらから)
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
          <li>・<Link to="/articles/existential-emptiness" className={linkCls}>空虚感とは</Link></li>
          <li>・<Link to="/articles/feeling-nothing" className={linkCls}>何も感じない</Link></li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link></li>
          <li>・<Link to="/articles/helper-wellbeing-not-from-contribution" className={linkCls}>「役に立つこと」以外から幸福を得る</Link></li>
          <li>・<Link to="/articles/thinker-rogers-conditions-of-worth" className={linkCls}>「役に立つ自分」にしか価値を感じられない理由(ロジャーズから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">仕事がないと、自分が空っぽに感じる方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          空っぽさの正体を、一緒に見ていく時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          忙しさで見えなくなっていた気持ちに、安全な場所で目を向けてみませんか。責めずに、ゆっくり整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-baudelaire-ennui"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインのフランス語原典(Les Fleurs du mal, 1857／Le Spleen de Paris, 1869)から筆者が翻訳したものです。本記事は文学作品を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

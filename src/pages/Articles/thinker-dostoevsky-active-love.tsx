import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "「人類を愛するほど、個々の人間を愛せなくなる」は、誰の言葉ですか?",
    a: "ドストエフスキーの長編小説『カラマーゾフの兄弟』(1880年)の第1部第2編第4章「信仰の薄い貴婦人」に出てくる言葉です。ゾシマ長老が、かつて出会ったある医者の告白として紹介するもので、ドストエフスキー本人の主張というより、登場人物の口を借りて描かれた人間の矛盾です。",
  },
  {
    q: "「実行的な愛」と「空想的な愛」の違いは何ですか?",
    a: "同じ章でゾシマ長老が語る対比です。空想的な愛は、すぐに報われる手柄と、人から見られることを求めます。実行的な愛は、目の前の一人と関わり続ける労働と忍耐であり、ときに「むごく恐ろしい」ものだと長老は言います。支援の現場に置き換えると、理想の支援像と、毎日の具体的な関わりの違いにあたります。",
  },
  {
    q: "利用者や患者を嫌いだと感じてしまう自分は、支援職に向いていないのでしょうか?",
    a: "向いていないということではありません。近くで関わり続ければ、苛立ちや嫌悪が生まれるのは人として自然な反応です。問題になるのは感情そのものではなく、それを「あってはならない」と押し込め、自分を責め続けることです。感情に気づき、言葉にし、扱い方を整えることが、長く続けられる支援につながります。",
  },
  {
    q: "支援がつらくなってきたとき、まず何をすればいいですか?",
    a: "まず、今の消耗の程度を知ることです。苛立ちや嫌悪が増えているときは、共感疲労や燃え尽きが進んでいるサインのことがあります。チェックリストで状態を確認し、休息や相談の場を確保してください。一人で抱えている感覚が強い場合は、スーパービジョンやカウンセリングで話すことが役立ちます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerDostoevskyActiveLove() {
  return (
    <ArticleLayout
      title="人類を愛するほど、隣の人を愛せない｜ドストエフスキー『カラマーゾフの兄弟』から読む、支援職の罪悪感【公認心理師】"
      description="「人類全体を愛するほど、個々の人間を愛せなくなる」——ドストエフスキー『カラマーゾフの兄弟』のゾシマ長老の章を手がかりに、利用者や患者に苛立ってしまう支援職の罪悪感と、「空想的な愛」と「実行的な愛」の違いを公認心理師が読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/thinker-dostoevsky-active-love"
      date="2026-10-15"
      tags={["self-function", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ 第1回 ドストエフスキー
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
        人の役に立ちたくて、この仕事を選んだ。
        困っている人の力になれる仕事に、誇りもある。
        それなのに、目の前の利用者に苛立つ。同じ話を繰り返されると、ため息が出る。
        帰り道で「あの人が苦手だ」と思ってしまい、そんな自分にぞっとする——。
      </p>
      <p>
        支援職の多くが、口には出さずにこの罪悪感を抱えています。
        そして、この矛盾を140年以上前に正確に書き留めた作家がいます。
        ロシアの作家、<strong>フョードル・ドストエフスキー</strong>です。
      </p>

      <h2>ドストエフスキーと『カラマーゾフの兄弟』</h2>
      <p>
        ドストエフスキー(1821–1881)は、『罪と罰』などで知られる19世紀ロシアの作家です。
        若いころ政治事件で死刑判決を受け、刑の執行直前に減刑されてシベリアで4年間の監獄生活を送りました。
        極限の環境で、さまざまな人間の弱さと尊さを間近に見た経験が、のちの作品の土台になっています。
      </p>
      <p>
        最後の長編『カラマーゾフの兄弟』(1880年)は、父と三人の息子をめぐる物語です。
        その序盤、修道院の<strong>ゾシマ長老</strong>のもとに、ある裕福な婦人が相談に訪れる場面があります。
        「信仰の薄い貴婦人」と題されたこの章が、今回の手がかりです。
      </p>

      <h2>「人類を愛するほど、個々の人間を愛せなくなる」</h2>
      <p>
        婦人は長老に打ち明けます。
        自分は人類を愛していて、すべてを捨てて病人の看護に身を捧げたいと夢見ることがある。
        傷の手当てをし、その傷に口づけさえできる気がする。
        ——でも、もしその病人が感謝せず、文句ばかり言ったらどうだろう。
        自分の愛は続かない気がする。自分は<strong>報酬を求めて働く人間</strong>なのだ、と。
      </p>
      <p>
        報酬とは、お金ではありません。
        感謝されること、ほめられること、愛に愛で応えてもらうことです。
      </p>
      <p>
        長老はこれを聞いて、昔ある医者が語った話を紹介します。要約すると、こういう告白です(拙訳)。
      </p>

      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          私は人類を愛している。けれど自分でも驚くのは、人類全体を愛すれば愛するほど、
          個々の人間、一人ひとりの人間を愛せなくなっていくことだ。
          空想の中では人類に奉仕する計画に熱くなり、必要なら十字架にかけられてもいいとさえ思う。
          なのに、誰かと同じ部屋で二日と暮らせない。
          一昼夜もたてば、どんなに立派な人でも憎みはじめる。
          ある人は食事に時間がかかりすぎるから、ある人は風邪をひいて鼻ばかりかんでいるから。
          そして、個々の人間を憎めば憎むほど、人類全体への愛はいっそう燃え上がる。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ドストエフスキー『カラマーゾフの兄弟』第1部第2編第4章より(英訳:Constance Garnett訳をもとに筆者が要約・翻訳)
        </p>
      </div>

      <p>
        理想としての「人類」は、苛立たせません。
        遅く食べたり、鼻をかんだり、同じ話を繰り返したりしないからです。
        苛立ちが生まれるのは、いつも<strong>具体的な、目の前の一人</strong>との間です。
      </p>

      <h2>支援職に置き換えると——理想と現場のあいだ</h2>
      <p>
        この告白は、支援の仕事にそのまま重なります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 理想が高い人ほど、目の前の人に苛立つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「誰もが尊厳をもって暮らせるように」という理想は、支援職を支える大切な原動力です。
          でも、理想の中の利用者は、約束を破りませんし、同じ質問を十回したりもしません。
          理想が鮮明であるほど、現実の一人とのズレが大きく感じられ、苛立ちが生まれやすくなります。
          苛立ちは、理想を持っていないからではなく、<strong>持っているからこそ</strong>生まれることがあるのです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「報酬」が途絶えると、愛が続かなくなる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          婦人の告白は、もう一つの真実を突いています。
          感謝や回復という「報酬」があるうちは、支援は続けられる。
          けれど、感謝されない、よくならない、むしろ責められる——そんな関わりが続くと、気持ちが急に冷えていきます。
          自分の価値を「役に立てたかどうか」で測っている人ほど、この落差は大きくなります。
          (この構造は<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群(救世主症候群)</Link>や
          <Link to="/articles/self-value-unknown" className={linkCls}>条件つき自己価値</Link>の記事で詳しく扱っています)
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 苛立ちを恥じて、押し込める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は「利用者を嫌いになってはいけない」と自分に課しがちです。
          すると苛立ちは言葉にされないまま押し込められ、罪悪感と疲労だけがたまっていきます。
          この状態が続くと、<Link to="/articles/compassion-fatigue-complete" className={linkCls}>共感疲労</Link>や燃え尽きにつながることがあります。
        </p>
      </div>

      <h2>「実行的な愛は、むごく恐ろしいもの」——長老の答え</h2>
      <p>
        では、ゾシマ長老は婦人を責めたのでしょうか。そうではありません。
        長老はまず、婦人が自分の弱さを正直に語ったことを認めます。
        そのうえで、<strong>空想的な愛</strong>と<strong>実行的な愛</strong>を区別します(拙訳)。
      </p>

      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          実行的な愛は、空想の愛にくらべて、むごく、恐ろしいものです。
          空想の愛は、すぐに果たせる手柄を欲しがり、みんなに見てもらうことを望みます。
          けれど実行的な愛は、労働であり、忍耐です。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同章より(英訳:Constance Garnett訳をもとに筆者が要約・翻訳)
        </p>
      </div>

      <p>
        ここで長老は、実行的な愛を「美しいもの」とは言っていません。<strong>むごく、恐ろしい</strong>と言っています。
        目の前の一人と関わり続けることは、きれいごとでは済まない。
        苛立ちも、嫌悪も、報われなさも、そこには最初から含まれている——という認め方です。
      </p>
      <p>
        さらに長老は、こうも語ります。
        どれだけ努力しても目標から遠ざかっていくように感じて、ぞっとする——
        まさにその瞬間に、あなたは目標にたどり着いているのだ、と。
      </p>
      <p>
        支援職に置き換えるなら、
        <strong>「こんな自分では支援者失格だ」と感じるその瞬間こそ、あなたが理想ではなく現実の一人と関わっている証拠</strong>
        だ、ということになります。
      </p>

      <LineCtaCompassion />

      <h2>よくある誤解と、この読み方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誤解:「苛立ってもいい」=「何をしてもいい」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          苛立ちを感じることと、それを相手にぶつけることは別の話です。
          感情を認めることは、感情のままに振る舞うことを許すものではありません。
          認めて言葉にできるからこそ、行動を選べるようになります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:「忍耐」を美化しすぎない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          長老の言う「労働と忍耐」は、宗教的な文脈から出てきた言葉です。
          これを「どんなにつらくても耐え続けるべき」と読むと、自己犠牲を正当化する読み方になってしまいます。
          現代の支援では、<strong>忍耐は休息と境界線とセットで初めて続く</strong>ものです。
          耐えることそのものを目的にしないでください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 苛立ちに「名前」をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「あの人が嫌い」ではなく、「同じ話を三回されて、時間が足りない焦りが出た」と具体的に言葉にします。
          人そのものではなく、<strong>場面と自分の反応</strong>に名前をつけると、嫌悪が少し小さくなります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「報酬」を相手の反応以外にも置く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感謝や回復だけを支えにすると、それが途絶えたときに崩れます。
          「今日は約束どおり話を聞けた」「記録を丁寧に書けた」など、<strong>自分の側で完結する手応え</strong>も持っておきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 話せる場所を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          婦人が長老に打ち明けたように、苛立ちや嫌悪を安全に話せる場所があるだけで、罪悪感は軽くなります。
          同僚、スーパーバイザー、カウンセラー——職場の外の相手でも構いません。
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">苛立ちや嫌悪が増えているときは、消耗が進んでいるサインのことがあります。</p>
        <Link to="/articles/helper-empathy-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ 共感疲労チェック(20項目・3分)</Link>
        <br />
        <Link to="/articles/messiah-complex-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900 mt-1">→ メサイアコンプレックス診断(20項目・3分)</Link>
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
          <li>・<Link to="/articles/messiah-complex" className={linkCls}>メサイア症候群(救世主症候群)とは</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className={linkCls}>共感疲労(コンパッション・ファティーグ)の全体像</Link></li>
          <li>・<Link to="/articles/self-value-unknown" className={linkCls}>自分の価値がわからない(条件つき自己価値)</Link></li>
          <li>・<Link to="/articles/helper-wellbeing-not-from-contribution" className={linkCls}>「役に立つこと」以外から幸福を得る</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「利用者を嫌いになる自分」を責めている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          言葉にできなかった気持ちを、安全に話せる時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          苛立ちや嫌悪は、話してはいけない感情ではありません。言葉にして整理すると、続けられる関わり方が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-dostoevsky-active-love"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインの英訳(Constance Garnett訳 The Brothers Karamazov, 1912)をもとに筆者が要約・翻訳したものです。本記事は文学作品を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

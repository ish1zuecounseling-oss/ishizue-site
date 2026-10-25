import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ウィリアム・ジェイムズの「自尊心=成功÷願望」とは何ですか?",
    a: "ジェイムズが『心理学原理』(1890年)で示した考え方で、自尊心は「実際にうまくいっていること(成功)」を「こうありたいと望んでいる水準(願望)」で割ったもので決まる、というものです。成功が同じでも、願望が高ければ自尊心は低くなります。自尊感情の研究の古典的な出発点として、今も引用されています。",
  },
  {
    q: "願望を下げるのは、あきらめることではないのですか?",
    a: "ジェイムズは、願望を手放すことは、願望が満たされるのと同じくらい大きな安らぎをもたらすと書いています。これは何もかもあきらめることではなく、「自分は何に自分を賭けるか」を選び直すことです。すべての領域で完璧を目指すのをやめ、本当に大切な領域に力を注ぐ、という意味で読むのが適切です。",
  },
  {
    q: "ジェイムズの「社会的自己」とは何ですか?",
    a: "ジェイムズは、人は自分を知っている人の数だけ社会的な自己を持つと考えました。職場での自分、家族の中の自分、友人といるときの自分は、それぞれ別の顔を持っています。この考え方は、のちの自己複雑性の研究などにもつながっています。",
  },
  {
    q: "どれだけ頑張っても自分に満足できません。どうすればいいですか?",
    a: "ジェイムズの式で考えると、成功(分子)を増やす努力だけでは追いつかないほど、願望(分母)が高くなっている可能性があります。自分が何を「当然できるべき」と思っているかを書き出し、その基準がどこから来たのかを見直してみてください。長年の基準は一人では見えにくいので、カウンセリングで整理するのも一つの方法です。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerJamesSelfEsteem() {
  return (
    <ArticleLayout
      title="頑張っても自分に満足できない理由｜ウィリアム・ジェイムズの「自尊心=成功÷願望」から読む、支援職の完璧主義【公認心理師】"
      description="アメリカ心理学の父ウィリアム・ジェイムズは、自尊心は「成功÷願望」で決まると考えました。どれだけ頑張っても自分に満足できない支援職の苦しさを、分母にあたる「願望」から読み解き、「何に自分を賭けるか」を選び直す方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-james-self-esteem"
      date="2026-10-16"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ウィリアム・ジェイムズ
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
        周りからは「よくやっている」と言われる。
        実際、大きなミスもなく、利用者や家族から感謝されることもある。
        それなのに、自分では少しも満足できない。
        できなかったこと、足りなかったことばかりが頭に残る——。
      </p>
      <p>
        なぜ、頑張っても自分を認められないのか。
        この問いに、130年以上前にシンプルな式で答えた心理学者がいます。
        「アメリカ心理学の父」と呼ばれる<strong>ウィリアム・ジェイムズ</strong>です。
      </p>

      <h2>ウィリアム・ジェイムズと『心理学原理』</h2>
      <p>
        ジェイムズ(1842–1910)は、ハーバード大学で教えたアメリカの心理学者・哲学者です。
        医学を学んだのち、心を科学的に研究する心理学をアメリカで切り開き、
        大著『心理学原理』(1890年)を著しました。
        若いころには自身も長く気分の落ち込みに苦しんだことが、日記や手紙から知られています。
      </p>
      <p>
        『心理学原理』の第10章「自己の意識」で、ジェイムズは自尊心について一つの式を示しました。
      </p>

      <h2>自尊心 = 成功 ÷ 願望</h2>
      <div className="card text-center">
        <p className="text-base text-stone-800 leading-[2] font-medium" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自尊心 ＝ 成功 ÷ 願望
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          W. ジェイムズ『心理学原理』第10章(英語原文 Self-esteem = Success / Pretensions より)
        </p>
      </div>
      <p>
        ここでの「願望」は、<strong>自分はこうあるべきだ、これくらいはできて当然だ</strong>という、自分に課している水準のことです。
        ジェイムズはこの式について、こう続けています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          この分数は、分子を大きくすることでも、分母を小さくすることでも、同じように大きくできる。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同章(英語原文より筆者訳)
        </p>
      </div>
      <p>
        つまり、自尊心を上げる方法は二つあります。
        もっと成功すること。あるいは、<strong>願望の水準を見直すこと</strong>です。
      </p>

      <h2>支援職に置き換えると——分母が大きすぎる</h2>
      <p>
        支援職が「頑張っても満足できない」とき、問題は分子(成功)ではなく、分母(願望)にあることが少なくありません。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">支援職が抱えがちな「分母」</p>
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・すべての利用者に、最善の支援をするべきだ</li>
          <li>・どんなときも、感情的にならずに対応できて当然だ</li>
          <li>・同僚にも、家族にも、迷惑をかけてはいけない</li>
          <li>・仕事も家庭も、手を抜かずにやるべきだ</li>
        </ul>
      </div>
      <p>
        これだけ分母が大きいと、どれだけ分子を積み上げても、分数はなかなか大きくなりません。
        周りから見れば十分な成果でも、本人の中では「まだ足りない」になってしまいます。
        (<Link to="/articles/helper-perfectionism" className={linkCls}>完璧主義が支援職を追い詰める理由</Link>もあわせてどうぞ)
      </p>
      <p>
        しかも支援の仕事には、終わりがありません。
        分子を増やそうと頑張るほど、新しい課題が見え、分母も一緒に大きくなっていく——。
        これが、真面目な支援職ほど燃え尽きやすい理由の一つです。
      </p>

      <h2>「願望を手放すことは、満たされるのと同じくらいの安らぎ」</h2>
      <p>
        ジェイムズは、分母を小さくすることについて、印象的な言葉を残しています(拙訳)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          願望を手放すことは、それが満たされるのと同じくらい、ありがたい安らぎをもたらす。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同章(英語原文より筆者訳)
        </p>
      </div>
      <p>
        そして、自分自身を例に、こう書いています(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          心理学者であることにすべてを賭けている私は、自分より心理学に詳しい人がいると悔しい。
          けれど、ギリシャ語についてはまったく無知でも平気だ。
          そこでの不足は、私に何の屈辱も感じさせない。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          同章(英語原文より筆者訳・要約)
        </p>
      </div>
      <p>
        人が傷つくのは、<strong>自分が賭けている領域</strong>での失敗だけです。
        何に自分を賭けるかを選べば、それ以外の領域での不足は、自尊心を削らなくなります。
        願望を手放すとは、何もかもあきらめることではなく、<strong>賭ける場所を選び直すこと</strong>なのです。
      </p>

      <LineCtaFatigue />

      <h2>人は、知っている人の数だけ自己を持つ</h2>
      <p>
        ジェイムズは同じ章で、人は自分を知っている人の数だけ「社会的な自己」を持つ、とも述べています。
        職員としての自分、親としての自分、友人といるときの自分。
      </p>
      <p>
        支援職は、このうち「職員としての自分」にすべてを賭けてしまいがちです。
        すると、仕事でのつまずきが、そのまま自分という人間全体の否定に感じられます。
        賭ける自己が一つしかないことの危うさは、のちの心理学で「自己複雑性」として研究されています。
        (<Link to="/articles/self-complexity" className={linkCls}>自己複雑性とは</Link>で詳しく扱っています)
      </p>

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">式は、心のすべてを説明しない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「成功÷願望」はわかりやすい式ですが、自尊心のすべてを説明するものではありません。
          たとえば、幼いころから「役に立てば価値がある」と学んできた人の場合、問題は願望の高さよりも、
          自分の価値が条件つきになっていること自体にあります。
          (この点は<Link to="/articles/thinker-rogers-conditions-of-worth" className={linkCls}>ロジャーズの「価値の条件」の回</Link>で扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">分母を下げても、職場の要求は下がらない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分の基準を見直しても、人手不足や過大なノルマなど、職場から求められる水準そのものが高すぎる場合は、
          それだけでは解決しません。環境の問題は、環境の側で扱う必要があります。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分の「分母」を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「〜できて当然」「〜するべき」と思っていることを、思いつくだけ書き出します。
          並べてみると、自分がどれだけ高い基準を当たり前にしてきたかが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「賭ける領域」を3つまでに絞る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          書き出した基準の中から、本当に大切にしたいものを3つだけ選びます。
          それ以外は、<strong>「ギリシャ語」の側</strong>——できなくても自分の価値は下がらない領域——に置いてみます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 仕事以外の「自己」に時間を渡す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          職員としての自分以外の顔を、意識して育てます。
          賭ける自己が複数あれば、一つの領域でのつまずきが、自分全体を揺るがさなくなります。
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">自分が何に自分の価値を置いているか、確かめてみませんか。</p>
        <Link to="/articles/self-value-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ 条件付き自己価値チェック(24問)</Link>
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
          <li>・<Link to="/articles/self-value-unknown" className={linkCls}>自分の価値がわからない(条件つき自己価値)</Link></li>
          <li>・<Link to="/articles/helper-perfectionism" className={linkCls}>完璧主義が支援職を追い詰める理由</Link></li>
          <li>・<Link to="/articles/self-complexity" className={linkCls}>自己複雑性とは</Link></li>
          <li>・<Link to="/articles/thinker-rogers-conditions-of-worth" className={linkCls}>「役に立つ自分」にしか価値を感じられない理由(ロジャーズから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">頑張っても、自分に満足できない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自分に課してきた基準を、一緒に見直す時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「できて当然」の基準がどこから来たのか。責めずに整理すると、本当に賭けたいものが見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-james-self-esteem"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインの英語原典(The Principles of Psychology, 1890)から筆者が翻訳・要約したものです。本記事は心理学の古典を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

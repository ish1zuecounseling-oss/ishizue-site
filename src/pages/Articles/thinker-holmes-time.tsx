import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "キャシー・ホームズとは、どんな人ですか?",
    a: "アメリカのカリフォルニア大学ロサンゼルス校(UCLA)で、時間の使い方と幸福の関係を研究している心理学者・行動科学者です。2022年の著書『Happier Hour』で、研究の成果をもとに、限られた時間の中で満足感を高める方法を紹介しています。",
  },
  {
    q: "「時間の貧困」とは何ですか?",
    a: "やるべきことに対して、時間が足りないと感じ続けている状態のことです。ホームズらの研究では、時間の貧困はお金の不足と同じように、幸福感の低下やストレスの高さと結びついていることが示されています。支援職のように、仕事も家庭も時間に追われやすい人は、とくに陥りやすい状態です。",
  },
  {
    q: "自由な時間は、多ければ多いほど幸せなのですか?",
    a: "そうとは限りません。ホームズらの研究では、自由に使える時間が1日2時間を下回ると幸福感が下がる一方、5時間を大きく超えると、かえって満足感が下がる傾向も見られました。時間の量だけでなく、その時間を自分にとって意味のあることに使えているかが大切だとされています。",
  },
  {
    q: "忙しくて、自分の時間がまったく取れません。どうすればいいですか?",
    a: "まず1週間、何にどれだけ時間を使い、そのときどう感じたかを記録してみてください。記録すると、満足感の低い時間や、少し減らせる時間が見えてきます。それでも時間がまったく取れない状態が続くなら、働き方そのものを見直す必要があるかもしれません。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerHolmesTime() {
  return (
    <ArticleLayout
      title="いつも時間が足りない支援職へ｜キャシー・ホームズ『Happier Hour』から読む、「時間の貧困」と時間の使い方【公認心理師】"
      description="時間と幸福の関係を研究する心理学者キャシー・ホームズは、時間が足りないと感じ続ける「時間の貧困」が幸福感を下げることを示しました。仕事にも家庭にも追われる支援職が、限られた時間の中で満足感を取り戻す方法を、研究をもとに公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-holmes-time"
      date="2026-10-21"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ キャシー・ホームズ
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
        朝は家族の支度、日中は利用者対応と記録、夕方は残業。
        帰宅すれば家事、気づけばもう寝る時間。
        「自分の時間」と呼べるものが、一日のどこにもない。
        休日も、たまった用事を片づけるうちに終わってしまう——。
      </p>
      <p>
        いつも時間が足りない。この感覚そのものが、私たちの幸福感を削っているとしたら。
        時間と幸福の関係を研究してきた心理学者がいます。
        アメリカの<strong>キャシー・ホームズ</strong>です。
      </p>

      <h2>キャシー・ホームズと『Happier Hour』</h2>
      <p>
        ホームズは、カリフォルニア大学ロサンゼルス校(UCLA)で、
        人が時間をどう使い、それが幸福感にどう影響するのかを研究している心理学者・行動科学者です。
        大学で人気の講義をもとに書かれた著書<strong>『Happier Hour』</strong>(2022年)で、
        研究の成果を一般向けに紹介しました。
      </p>
      <p>
        ホームズ自身も、仕事と子育てに追われ、時間が足りないと感じ続けていたことが、研究の出発点になったと語っています。
      </p>

      <h2>「時間の貧困」——時間が足りない感覚が、幸福を削る</h2>
      <p>
        ホームズらの研究が明らかにしたのは、<strong>時間が足りないと感じ続ける状態</strong>が、
        お金が足りない状態と同じように、幸福感を下げ、ストレスを高めるということでした。
        これは<strong>時間の貧困</strong>と呼ばれています。
      </p>
      <p>
        さらに興味深いのは、自由に使える時間についての研究です。
        ホームズらは大規模な調査から、<strong>自由な時間が1日2時間を下回ると幸福感が下がる</strong>ことを示しました。
        一方で、5時間を大きく超えると、かえって満足感が下がる傾向も見られました。
        大切なのは時間の量だけでなく、<strong>その時間を、自分にとって意味のあることに使えているか</strong>だったのです。
      </p>

      <h2>支援職に置き換えると——時間の貧困に陥りやすい仕事</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分の時間が、他人の時間で埋まる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の仕事は、利用者の予定、家族の都合、急な対応に合わせて動くことが多い仕事です。
          職場でも家庭でも、誰かのための時間が一日を埋め尽くし、自分のために使える時間がなくなっていきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休日も「用事」で終わる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          やっと取れた休日も、平日にできなかった家事や手続きで終わってしまう。
          体は休んでいても、心が満たされる時間にはなっていません。
          (<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link>もあわせてどうぞ)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 時間がないことが、当たり前になる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          忙しさが続くと、時間がないことに慣れてしまい、自分が時間の貧困に陥っていることにさえ気づかなくなります。
          (<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない</Link>も参考になります)
        </p>
      </div>

      <LineCtaFatigue />

      <h2>時間の満足感を取り戻す工夫</h2>
      <p>
        ホームズは、時間そのものを増やすのは難しくても、<strong>時間の使い方と受け止め方を変える</strong>ことで、
        満足感を高められると考えました。研究から導かれる工夫を、筆者の言葉で要約します。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 時間の使い方を記録する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          何にどれだけ時間を使い、そのときどう感じたかを記録すると、
          満足感の高い時間と低い時間がはっきりします。
          減らせる時間と、守るべき時間が見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 休日を「旅行のように」過ごす</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ホームズらの研究では、週末を旅行中のような気持ちで過ごすよう意識するだけで、
          休み明けの幸福感が高まることが報告されています。
          家事を少し減らし、目の前の時間を味わうことを優先する、という意識の切り替えです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 時間を「守る」予定として入れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分のための時間は、空いたら使うものではなく、予定として先に確保するものです。
          短くても、誰にも譲らない時間を一つ決めておきます。
        </p>
      </div>

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">工夫だけでは、時間は生まれない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          時間の使い方を工夫しても、業務量そのものが多すぎる職場では、自由な時間は生まれません。
          時間の貧困が続くなら、働き方や職場の体制を見直すことも必要です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">研究の数字は、目安にすぎない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「1日2時間」といった数字は、多くの人のデータから見えた傾向で、誰にでも当てはまる正解ではありません。
          自分にとってちょうどよい時間の量と使い方を、記録しながら探してみてください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 1日だけ、時間と気分を記録する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          1時間ごとに、何をしていたかと、そのときの気分を一言でメモします。
          1日分でも、自分の時間がどこへ消えているのかが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「やらなくていいこと」を一つ決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          記録の中から、満足感が低く、やめても困らないことを一つ選び、今週はやめてみます。
          空いた時間を、自分のための時間に回します。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 次の休日を、小さな旅行にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          近所の行ったことのない道を歩く、いつもと違う店でお茶を飲むなど、休日に小さな「旅気分」を取り入れます。
          (<Link to="/articles/thinker-vanderbilt-beginners" className={linkCls}>ヴァンダービルトの「初心者に戻る」の回</Link>もあわせてどうぞ)
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
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className={linkCls}>支援職は休みの日も休まらない</Link></li>
          <li>・<Link to="/articles/tired-but-cannot-rest" className={linkCls}>疲れているのに休めない</Link></li>
          <li>・<Link to="/articles/thinker-russell-fatigue" className={linkCls}>「自分がいないと回らない」は疲れのサイン(ラッセルから読む)</Link></li>
          <li>・<Link to="/articles/thinker-frankl-existential-vacuum" className={linkCls}>休日になると心が空っぽになる理由(フランクルから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">いつも時間に追われている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自分のための時間を、取り戻す相談を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何に時間を奪われ、何を大切にしたいのか。働き方も含めて、一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/thinker-holmes-time"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はホームズらの研究と著作の考え方を筆者が要約したもので、著作からの直接の引用は行っていません。本記事は心理学の研究を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

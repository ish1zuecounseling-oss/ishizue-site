import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ホーナイの「べき」の専制とは何ですか?",
    a: "精神分析家カレン・ホーナイが『神経症と人間の成長』(1950年)で示した考え方です。人が「理想の自分」に合わせて自分に課す、「〜すべき」「〜であるべき」という内なる命令が、現実にできるかどうかを無視して人を支配する状態を指します。命令に従えないと、人は自分を激しく責めるようになります。",
  },
  {
    q: "「人に向かう」タイプとは何ですか?",
    a: "ホーナイが『心の葛藤』(1945年)で示した、不安への対処の3つの方向の一つです。人に近づき、好かれ、受け入れられることで安心を得ようとする傾向で、従順さ、優しさ、自己主張の苦手さとして表れます。ほかに、人に対抗する方向、人から離れる方向があり、誰でもこの3つを持っていますが、どれか一つに偏ると苦しさが生まれるとされます。",
  },
  {
    q: "「べき」を持つこと自体がいけないのですか?",
    a: "いいえ。目標や価値観を持つことは大切です。ホーナイが問題にしたのは、現実にできるかどうかや、自分の本当の気持ちを無視して、理想の自分に合わせるよう自分を強制する「べき」です。その「べき」に従えないとき、自分を激しく責めてしまうかどうかが、見分けるポイントになります。",
  },
  {
    q: "自分の「べき」に気づくには、どうすればいいですか?",
    a: "疲れているのに休めない、断りたいのに断れない、という場面で、頭の中にどんな言葉が浮かんでいるかを書き出してみてください。「〜しなければ」「〜であるべき」という形の言葉が見つかったら、それが自分を動かしている「べき」です。一人で整理するのが難しい場合は、カウンセリングで一緒に言葉にしていくこともできます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerHorneyShoulds() {
  return (
    <ArticleLayout
      title="「〜すべき」に追い詰められる理由｜カレン・ホーナイの「べき」の専制から読む、優しすぎる支援職【公認心理師】"
      description="「いつも寛大であるべき」「誰のことも好きであるべき」「何にでも耐えられるべき」——精神分析家カレン・ホーナイは、理想の自分に合わせて自分に課す内なる命令を「べき」の専制と呼びました。優しすぎて壊れていく支援職の心の構造を、公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-horney-shoulds"
      date="2026-10-18"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ カレン・ホーナイ
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
        利用者に苛立ってはいけない。いつも笑顔でいなければ。
        同僚が困っていたら、自分の仕事を後回しにしてでも手伝うべきだ。
        疲れたなんて言ってはいけない——。
      </p>
      <p>
        誰に言われたわけでもないのに、頭の中で「〜すべき」が鳴りつづける。
        この内なる命令の正体を、鋭く描き出した精神分析家がいます。
        <strong>カレン・ホーナイ</strong>です。
      </p>

      <h2>カレン・ホーナイと「神経症と人間の成長」</h2>
      <p>
        ホーナイ(1885–1952)は、ドイツ生まれの精神分析家です。
        フロイトの理論を学びながらも、人の心の問題を生まれつきの本能ではなく、
        <strong>育った環境や文化、人間関係</strong>から理解しようとしました。
        1932年にアメリカへ渡り、独自の精神分析の学派を築いています。
      </p>
      <p>
        晩年の著書『神経症と人間の成長』(1950年)で、ホーナイは
        人が「理想の自分」を追い求めるうちに、本当の自分から離れていく過程を描きました。
        その中心にあるのが、<strong>「べき」の専制</strong>です。
      </p>

      <h2>理想の自分と、本当の自分</h2>
      <p>
        ホーナイによれば、不安な環境で育った人は、
        ありのままの自分では受け入れてもらえないと感じ、<strong>「こうあれば大丈夫」という理想の自分</strong>を心の中に作り上げます。
        そして、その理想の自分に近づこうと、自分に次々と命令を下すようになります。
      </p>
      <p>
        ホーナイは、そうした内なる命令の例を、こんなふうに並べています(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          最高に誠実で、寛大で、思いやり深く、公正で、勇敢で、無私であるべきだ。
          何にでも耐えられるべきだ。誰のことも好きであるべきだ。
          決して傷つかず、いつも穏やかで、動じないでいるべきだ。
          自分の問題も、他人の問題も、すべて解決できるべきだ。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          K. ホーナイ『神経症と人間の成長』第3章「べきの専制」より(英語原文をもとに筆者訳・要約)
        </p>
      </div>
      <p>
        こうして並べると、まるで支援職の理想像のようです。
        ホーナイは、こうした「べき」が<strong>現実にできるかどうかをまったく考慮しない</strong>点に、その危うさを見ました。
        人間である以上、すべてに耐え、誰のことも好きでいることはできません。
        それでも「べき」は命令をやめず、従えない自分を激しく責めさせます。
      </p>

      <h2>支援職に置き換えると——「べき」が支援職を壊していく</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 感情まで「べき」で縛る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「苛立つべきではない」「嫌いになるべきではない」と、感じることそのものを禁じてしまう。
          けれど、感情は命令では止められません。
          押し込めた感情は、疲労と罪悪感として積み重なっていきます。
          (<Link to="/articles/thinker-dostoevsky-active-love" className={linkCls}>ドストエフスキーの回</Link>でも、この罪悪感を扱っています)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② できないことまで「べき」にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「すべての利用者に最善を」「どんなときも穏やかに」。
          現実には不可能な水準を、当たり前のこととして自分に課してしまう。
          (<Link to="/articles/thinker-james-self-esteem" className={linkCls}>ジェイムズの「成功÷願望」の回</Link>で扱った、分母が大きすぎる状態です)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「べき」に従えない自分を憎む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ホーナイは、理想の自分に届かない本当の自分を、人が激しく責めるようになることを「自己憎悪」と呼びました。
          頑張っても自分を認められず、少しの失敗で自分を責め続けるのは、この働きです。
        </p>
      </div>

      <h2>「人に向かう」人——優しすぎる人の構造</h2>
      <p>
        ホーナイは、それより前の著書『心の葛藤』(1945年)で、
        人が不安に対処するときの3つの方向を示しています。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>人に向かう</strong>:好かれ、受け入れられることで安心を得ようとする</li>
          <li>・<strong>人に対抗する</strong>:強くなり、勝つことで安心を得ようとする</li>
          <li>・<strong>人から離れる</strong>:距離を置き、関わらないことで安心を得ようとする</li>
        </ul>
      </div>
      <p>
        支援職に多いのは、一つめの<strong>「人に向かう」</strong>傾向です。
        人の役に立ち、好かれ、衝突を避けることで、自分の居場所を確かめる。
        その傾向が強いと、「優しくあるべき」「断るべきではない」という「べき」が増え、
        自分の気持ちを後回しにし続けることになります。
        (<Link to="/articles/exhausted-by-being-nice" className={linkCls}>優しい人ほど壊れる理由</Link>で扱っている構造です)
      </p>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「べき」をすべて捨てる必要はない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の仕事には、守るべき倫理や手順があります。
          ホーナイが問題にしたのは、現実を無視し、自分を責める材料になる「べき」です。
          大切にしたい価値と、自分を縛る命令を見分けることが目的で、「べき」をすべてなくすことではありません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">タイプ分けは、人を決めつけるためのものではない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「人に向かう」「対抗する」「離れる」は、誰もが持つ3つの方向です。
          「自分はこのタイプだ」と決めつけるためではなく、今どの方向に偏っているかに気づくために使ってください。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 頭の中の「べき」を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          疲れているのに休めない場面、断りたいのに断れない場面で、頭に浮かんでいる言葉を書き出します。
          「〜すべき」「〜しなければ」が、自分を動かしている命令です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「べき」を「したい」「できたらいい」に言い換える</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いつも穏やかでいるべき」を「穏やかでいられたらいい」に言い換えてみます。
          命令が希望に変わると、できなかった日に自分を責める力が弱まります。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 本当の自分の声を聞く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「べき」を脇に置いたとき、本当はどうしたいのかを、小さなことから自分に聞いてみます。
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
          <li>・<Link to="/articles/exhausted-by-being-nice" className={linkCls}>優しい人ほど壊れる理由</Link></li>
          <li>・<Link to="/articles/helper-perfectionism" className={linkCls}>完璧主義が支援職を追い詰める理由</Link></li>
          <li>・<Link to="/articles/thinker-james-self-esteem" className={linkCls}>頑張っても自分に満足できない理由(ジェイムズから読む)</Link></li>
          <li>・<Link to="/articles/thinker-adler-inferiority" className={linkCls}>「役に立てない自分」が怖い理由(アドラーから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「〜すべき」に追い詰められている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          命令ではなく、本当の気持ちを聞く時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          自分を縛ってきた「べき」がどこから来たのか。責めずに整理すると、本当に大切にしたいものが見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-horney-shoulds"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、日本で著作権の保護期間が満了している英語原典(Neurosis and Human Growth, 1950)をもとに筆者が翻訳・要約したものです。本記事は心理学の理論を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

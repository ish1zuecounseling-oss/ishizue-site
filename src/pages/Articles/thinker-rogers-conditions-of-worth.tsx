import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ロジャーズの「価値の条件」とは何ですか?",
    a: "「こうであれば認められる」「こうでなければ愛されない」という条件のことです。子どもは大切な人に受け入れられるために、こうした条件を自分の中に取り込みます。すると大人になっても、条件を満たしているときだけ自分を価値ある存在だと感じるようになります。ロジャーズはこれを、人が本来の自分から離れていく大きな原因だと考えました。",
  },
  {
    q: "「無条件の肯定的関心」とは、相手を何でも肯定することですか?",
    a: "違います。無条件の肯定的関心は、相手の行動をすべて良いと認めることではなく、「どんな感情や考えを持っていても、その人の存在そのものは大切にする」という態度です。行動には意見を言うことがあっても、その人の価値を条件つきにしない、という点が核心です。",
  },
  {
    q: "条件つき自己価値は、カウンセリングで変わりますか?",
    a: "変わる可能性があります。ロジャーズの来談者中心療法は、まさに価値の条件を緩めることを目指した方法です。条件なしに受け止められる経験を重ねることで、人は自分の中の感情や経験を否定せずに受け入れられるようになっていきます。ただし長年かけて作られた構造なので、時間をかけて取り組むものです。",
  },
  {
    q: "ロジャーズとキルケゴールには、どんな関係がありますか?",
    a: "ロジャーズは著書『On Becoming a Person』(1961年)の中で、キルケゴールの「本当の自分自身であろうと欲することは、まさに絶望の反対である」という言葉を引用し、それを心理療法の目指す方向として説明しています。キルケゴールが哲学の言葉で語った「自分を見失う」という問題を、ロジャーズは心理学の言葉で説明し直したと言えます。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerRogersConditionsOfWorth() {
  return (
    <ArticleLayout
      title="「役に立つ自分」にしか価値を感じられない理由｜ロジャーズの「価値の条件」から読む、条件つき自己価値【公認心理師】"
      description="来談者中心療法の創始者カール・ロジャーズは、人は「こうであれば認められる」という価値の条件を取り込むことで、本来の自分から離れていくと考えました。役に立っているときだけ自分を許せる支援職の苦しさと、条件をゆるめていく方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-rogers-conditions-of-worth"
      date="2026-10-16"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ カール・ロジャーズ
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
        仕事で役に立てた日は、少しだけ自分を許せる。
        ミスをした日、誰かに迷惑をかけた日は、自分がここにいていいのかわからなくなる。
        休みの日に何もしないでいると、落ち着かない——。
      </p>
      <p>
        「役に立つ自分」でいるときしか、自分に価値を感じられない。
        この苦しさの仕組みを、心理学の言葉で最初に説明した一人が、アメリカの心理学者<strong>カール・ロジャーズ</strong>です。
      </p>

      <h2>カール・ロジャーズと来談者中心療法</h2>
      <p>
        ロジャーズ(1902–1987)は、20世紀の心理療法に最も大きな影響を与えた心理学者の一人です。
        それまでの心理療法は、専門家が問題を診断し、解決策を示すものが中心でした。
        ロジャーズはこれに対して、<strong>答えはクライエント本人の中にある</strong>と考え、
        カウンセラーは本人が自分を受け入れていく過程に寄り添う存在だとしました。
        これが「来談者中心療法(パーソンセンタード・アプローチ)」です。
      </p>
      <p>
        今日、日本のカウンセリングで当たり前に言われる「傾聴」「受容」「共感」は、
        多くがロジャーズの考えに由来しています。
      </p>

      <h2>「価値の条件」とは何か</h2>
      <p>
        ロジャーズは、人には誰でも「愛されたい、認められたい」という強い欲求があると考えました。
        子どもにとって、それを満たしてくれるのは親や周りの大人です。
      </p>
      <p>
        ところが大人の側は、しばしば<strong>条件つきで</strong>子どもを認めます。
        「いい子にしていれば」「泣かなければ」「お手伝いをすれば」「成績が良ければ」。
        子どもは愛されるために、この条件を自分の中に取り込んでいきます。
        ロジャーズはこれを<strong>価値の条件(conditions of worth)</strong>と呼びました。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">価値の条件が働く仕組み</p>
        <ol className="text-sm text-stone-600 space-y-1.5 leading-[1.9] list-decimal pl-5">
          <li>大切な人に認められるために、「こうであれば価値がある」という条件を取り込む</li>
          <li>条件に合う自分だけを「本当の自分」だと思うようになる</li>
          <li>条件に合わない感情や経験(怒り、疲れ、弱音、休みたい気持ち)は、見ないようにしたり、ゆがめて受け取ったりする</li>
          <li>自分のイメージと実際の経験がずれていき、不安や緊張が続く</li>
        </ol>
      </div>

      <p>
        ロジャーズは、この「自分のイメージ」と「実際の経験」のずれを<strong>不一致</strong>と呼びました。
        価値の条件が強いほど不一致は大きくなり、人は自分の本当の感覚から離れていきます。
      </p>

      <h2>支援職に置き換えると——「役に立てば」という条件</h2>
      <p>
        支援職を選ぶ人には、次のような価値の条件を持っている人が少なくありません。
      </p>
      <div className="card">
        <ul className="text-sm text-stone-600 space-y-1.5 leading-[1.9]">
          <li>・<strong>役に立てば</strong>、ここにいていい</li>
          <li>・<strong>迷惑をかけなければ</strong>、嫌われない</li>
          <li>・<strong>弱音を吐かなければ</strong>、頼りにされる</li>
          <li>・<strong>人の気持ちを優先すれば</strong>、受け入れてもらえる</li>
        </ul>
      </div>
      <p>
        こうした条件は、支援の現場ではむしろ評価されます。
        よく気がつき、断らず、弱音を吐かない人は「いい職員」だからです。
        けれど条件の裏側では、<strong>疲れ、怒り、休みたい気持ち</strong>が「あってはならないもの」として押し込められていきます。
        その結果、限界に近づいていることに自分で気づけなくなります。
      </p>
      <p>
        このサイトの<Link to="/articles/self-value-unknown" className={linkCls}>「自分の価値がわからない(条件つき自己価値)」</Link>で扱っている構造は、
        ロジャーズの価値の条件を、支援職の現場に当てはめて説明したものです。
      </p>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">自分がどんな条件で自分の価値を測っているか、確かめてみませんか。</p>
        <Link to="/articles/self-value-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ 条件付き自己価値チェック(24問)</Link>
      </div>

      <h2>「ありのままの自分を受け入れたとき、変わることができる」</h2>
      <p>
        では、価値の条件はどうすればゆるむのでしょうか。
        ロジャーズが重視したのは、<strong>無条件の肯定的関心</strong>です。
        どんな感情や考えを持っていても、その人の存在そのものを大切にする態度のことで、
        カウンセラーがクライエントに向ける基本的な姿勢とされています。
      </p>
      <p>
        条件なしに受け止められる経験を重ねると、人は押し込めていた感情を少しずつ自分のものとして認められるようになります。
        ロジャーズは著書の中で、自分自身の経験をこう書いています。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          不思議な逆説だが、ありのままの自分を受け入れたとき、私は変わることができる。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          C. R. Rogers, <i>On Becoming a Person</i>(1961)第1章より筆者訳。邦訳に『ロジャーズが語る自己実現の道』(岩崎学術出版社)
        </p>
      </div>
      <p>
        「変わらなければ」と自分を責めているうちは、人はなかなか変われません。
        責めることをやめ、今の自分を認めたときに、はじめて変化が始まる——。
        支援の現場で利用者に向けているこの姿勢を、<strong>自分自身にも向けてよい</strong>ということです。
      </p>

      <LineCtaFatigue />

      <h2>キルケゴールから受け継いだもの</h2>
      <p>
        ロジャーズは同じ著書の中で、デンマークの思想家キルケゴールの
        「本当の自分自身であろうと欲することは、まさに絶望の反対である」という言葉を引いています。
        キルケゴールが「自分を見失う絶望」として哲学の言葉で語ったものを、
        ロジャーズは「価値の条件」と「不一致」という心理学の言葉で説明し直したと言えます。
        (<Link to="/articles/thinker-kierkegaard-despair" className={linkCls}>キルケゴールの回</Link>もあわせてどうぞ)
      </p>

      <h2>よくある誤解と、この理論の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">誤解:「無条件の受容」=何でも肯定すること</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          無条件の肯定的関心は、行動をすべて認めることではありません。
          行動について意見を言うことはあっても、<strong>その人の価値を条件つきにしない</strong>という態度です。
          自分に向けるときも同じで、「何をしても自分は正しい」と思い込むことではありません。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">限界:個人の内面だけでは解決しないこともある</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ロジャーズの理論は、人の内側の成長する力を信頼する、楽観的な人間観に立っています。
          けれど、人手不足や過重な業務など、職場の構造が原因の消耗は、自分の受け止め方を変えるだけでは解決しません。
          内面の取り組みと、環境を変える取り組みの両方が必要です。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 自分の「価値の条件」を書き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「私は、〜であれば価値がある」の「〜」を、思いつくだけ書いてみます。
          書き出すと、自分がどんな条件で自分を採点しているかが見えてきます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 押し込めている感情に、名前をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          疲れた、腹が立った、休みたい——条件に合わないとして押し込めてきた感情を、評価せずに言葉にします。
          「感じてはいけない」ではなく、<strong>「今そう感じている」と認めるだけ</strong>で十分です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 役に立たない時間を、少しだけ持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          誰の役にも立たない時間を、意識して作ってみます。
          最初は落ち着かないはずです。その落ち着かなさこそが、価値の条件が働いている証拠です。
          (<Link to="/articles/helper-wellbeing-not-from-contribution" className={linkCls}>「役に立つこと」以外から幸福を得る</Link>も参考になります)
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
          <li>・<Link to="/articles/self-value-unknown" className={linkCls}>自分の価値がわからない(条件つき自己価値)</Link></li>
          <li>・<Link to="/articles/self-value-check" className={linkCls}>条件付き自己価値チェック(24問)</Link></li>
          <li>・<Link to="/articles/helper-self-effacement-family" className={linkCls}>家族の中で自分を消してきた支援職</Link></li>
          <li>・<Link to="/articles/thinker-kierkegaard-despair" className={linkCls}>「平気です」の奥にある絶望(キルケゴールから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">役に立つときしか、自分を許せない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          条件なしに話を聴いてもらう時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          役に立つかどうかとは関係なく、あなたの話をそのまま聴く時間です。価値の条件がどこから来たのかを、責めずに一緒に整理していきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-rogers-conditions-of-worth"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        ロジャーズの著作からの引用は、出典を明記したうえで筆者が翻訳した短い一節に限っています。本記事は心理学の理論を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

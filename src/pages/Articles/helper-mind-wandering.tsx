import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperMindWandering() {
  return (
    <ArticleLayout
      title="仕事中、頭が「どこか別の場所」にいる｜支援職のマインドワンダリングと消耗の関係"
      description="起きている時間の30〜50%、私たちの注意は目の前のことから離れています。支援職に多い「頭が離れられない」「別のことを考えてしまう」という状態を、マインドワンダリング研究から読み解きます。"
      url="https://www.ishizue-counseling.jp/articles/helper-mind-wandering"
      date="2026-04-18"
      tags={["burnout", "compassion", "boundary"]}
    >
      <p>
        記録を書きながら、さっきの利用者のことが頭から離れない。
        会議中なのに、昨日のケースのことを考えている。
        逆に、ぼんやりして今日何をしたかよく覚えていない——
      </p>
      <p>
        支援職として働く中で、こうした「頭が別の場所にいる」感覚を経験したことはありませんか。
        これは集中力の問題や気の緩みではなく、
        心理学で「マインドワンダリング」と呼ばれる現象として研究が進んでいます。
      </p>

      <h2>私たちの注意は、半分近くが「今ここ」にない</h2>
      <p>
        Killingsworth & Gilbert（2010）の研究によると、
        私たちは起きている時間の実に<strong>30〜50%</strong>を、
        目の前の状況とは直接関係のないことを考えながら過ごしています。
      </p>
      <p>
        マインドワンダリングとは、注意が現在の課題や状況から逸れ、
        別の思考や身体感覚（空腹・眠気・不快感など）に向いてしまう現象のことです
        （Smallwood & Schooler, 2015）。
        これは誰にでも起きる自然な現象ですが、過剰になると生活の質に悪影響を与えることが
        研究でわかってきました（Baird et al., 2014）。
      </p>

      <h2>マインドワンダリングには2種類ある</h2>
      <p>
        梶村・野村（2016）の研究では、一口に「頭が離れる」といっても、
        2つの異なる状態があることが示されています。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">① 自発的思考（空想傾向）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事とは無関係なことを考えたり、空想にふけったりする傾向。
          必ずしも悪いものではなく、創造性や自己の一貫性の維持など
          適応的な機能も持っています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">② マインドワンダリング（注意の逸脱）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          今行っている課題から注意が逸れ、集中できなくなる状態。
          人生満足感・自尊感情の低さ、ストレスの高さ、抑うつ・不安傾向と
          強く関連することが示されています（Mrazek et al., 2013）。
        </p>
      </div>

      <p>
        支援職の消耗と特に関係が深いのは、この2番目の「マインドワンダリング」です。
        集中しようとしているのに頭が離れてしまう、
        人の話を聞きながら別のことを考えてしまう——
        こうした状態が続くと、仕事の質への不安や自己嫌悪につながりやすくなります。
      </p>

      <h2>支援職でマインドワンダリングが起きやすい理由</h2>
      <p>
        マインドワンダリングは、単純・反復的な作業中や、
        精神的な疲弊が蓄積している状態で起きやすくなります。
        支援職の仕事にはこの両方が含まれています。
      </p>
      <p>
        記録業務・定型的な支援手順・繰り返しの会議——
        これらは注意が逸れやすい文脈です。
        さらに、共感疲労や燃え尽きによって心身が疲弊している状態では、
        今ここに注意をとどめる「マインドフルネス」の力が低下し、
        マインドワンダリングが起きやすくなることも研究で示されています
        （Mrazek et al., 2012）。
      </p>

      <h2>「頭から離れない」は別の問題かもしれない</h2>
      <p>
        支援職に多いのは、マインドワンダリングとは逆の状態——
        <strong>利用者のことが頭から離れない、仕事を終えても考え続けてしまう</strong>
        という「反すう」です。
      </p>
      <p>
        梶村・野村（2016）の研究では、自発的思考傾向（空想傾向）が
        反すう傾向と強く関連することが示されています。
        「頭の中で何かを考え続ける」という内的活動の多さが、
        共感疲労や二次受傷のリスクを高める一因になっている可能性があります。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          仕事が終わっても利用者のことを考え続ける。
          休もうとしても頭が休まらない。
          これは「仕事への責任感が強いから」ではなく、
          思考が自動的に動き続けてしまう状態——
          つまり心理的な消耗のサインである可能性があります。
        </p>
      </div>

      <h2>注意が「今ここ」にある状態を取り戻す</h2>
      <p>
        マインドワンダリングと反対の概念が、マインドフルネスです。
        マインドフルネスとは「今この瞬間に生じている出来事や経験に、
        気づきながら注意をとどめる傾向」のことです（藤野・梶村・野村, 2015）。
      </p>
      <p>
        研究では、マインドフルネス傾向が高いほど、
        マインドワンダリング傾向が低いという負の相関が示されています（梶村・野村, 2016）。
      </p>
      <p>
        ただしこれは「常に集中しなければならない」ということではありません。
        むしろ、「今ここにいない自分に気づくこと」そのものが、
        マインドフルネスの入口です。
      </p>
      <p>
        「また利用者のことを考えている」「ぼんやりしていた」に気づいたとき、
        それを自己批判の材料にするのではなく、
        「ああ、そういう状態だな」と観察するだけでよいのです。
      </p>

      <h2>「頭が別の場所にいる」ことへの新しい見方</h2>
      <p>
        マインドワンダリングは、集中力の欠如や怠慢の証拠ではありません。
        それは<strong>心が限界に近い状態にあるサイン</strong>かもしれません。
      </p>
      <p>
        記録中に手が止まる、利用者の話を聞きながら別のことを考えてしまう、
        帰宅しても頭が切り替わらない——
        こうした状態が続いているとしたら、
        それはあなたの注意が「今ここ」に安心して留まれない状態になっているサインです。
      </p>
      <p>
        消耗の構造を理解することが、その状態から抜け出す第一歩になります。
      </p>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-rumination" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援職の「思考の反すう」——頭から離れられない理由
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 共感疲労チェック｜支援職のための20項目診断
          </Link>
          <Link to="/articles/helper-rest-types" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援職に必要な「休み方」の種類
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：梶村昇吾・野村理朗（2016）「日本語版DDFSおよびMWQの作成」心理学研究，87(1), 79-88 ／ Killingsworth, M. A., & Gilbert, D. T.（2010）A wandering mind is an unhappy mind. Science, 330, 932 ／ Smallwood, J., & Schooler, J. W.（2015）The science of mind wandering. Annual Review of Psychology, 66, 487-518 ／ Mrazek, M. D., et al.（2013）Young and restless: Validation of the Mind-Wandering Questionnaire. Frontiers in Psychology ／ Mrazek, M. D., Smallwood, J., & Schooler, J. W.（2012）Mindfulness and mind-wandering. Emotion, 12, 442-448 ／ 藤野正寛・梶村昇吾・野村理朗（2015）日本語版Mindful Attention Awareness Scaleの開発 パーソナリティ研究，24, 61-76
      </p>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperSupervisionCompassionFatigue() {
  return (
    <ArticleLayout
title="スーパービジョンは共感疲労に本当に効くのか？｜研究から見た効果と限界"
description="「スーパービジョンを受ければ楽になる」は本当か。支援職の共感疲労に対するスーパービジョンの効果を研究から検証し、現場で活かせる条件と限界を解説します。"      url="https://www.ishizue-counseling.jp/articles/helper-supervision-compassion-fatigue"
      date="2026-04-18"
      tags={["compassion", "burnout", "boundary"]}
    >
      <p>
        「スーパービジョンを受けると、頭がいっぱいになってしまって、
        あえて受けないようにした」——
      </p>
      <p>
        これは、初心者セラピストへのインタビュー調査で実際に語られた言葉です（竹下, 2017）。
        支援者のサポートとして代表的なスーパービジョン（SV）ですが、
        その効果は受け方によって大きく異なることが、研究から見えてきています。
      </p>

      <h2>スーパービジョンとは何か</h2>
      <p>
        スーパービジョン（SV）とは、セラピストや支援者が担当するケースについて、
        より経験ある専門家（スーパーバイザー）から個別に指導を受けることです。
      </p>
      <p>
        鑪（2001）は、SVなしに臨床活動を行うことは「一般的な理論と特定の事例の間の溝を無視することであり、
        クライエントに不利益を与える危険がある」と述べています。
        特に初心者セラピストのSVでは、技術の習得よりも<strong>情緒的な支え</strong>が重要になると論じています。
      </p>

      <h2>SVで共感疲労は和らぐのか</h2>
      <p>
        竹下（2017）の初心者セラピストへのインタビュー調査では、
        SVと共感疲労の関係について興味深い両面が浮かび上がりました。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">SVが疲労を軽減したケース</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「SVがあるからこそ整理がついて前向きな思考になれ、疲労が軽減された」
          と語ったセラピストがいました。SVを受けることで、抱えていたものが言語化され、
          消耗が和らぐ体験が生まれています。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">SVが逆効果になったケース</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          一方で「SVを受けると全部それで頭がいっぱいになることが多くて、
          あえてSVを受けないようにした」と語ったセラピストもいました。
          SVの内容によっては、カウンセリングへの負の影響をもたらす場合もある
          ということが示されています。
        </p>
      </div>

      <p>
        この両面は、支援者へのサポートが「あればいい」ではなく、
        <strong>「その質と受け方が重要」</strong>であることを示しています。
      </p>

      <h2>「元気づけ」と「振り回される」の違い</h2>
      <p>
        樽澤（2016）の研究では、共感不全経験（うまく共感できなかった体験）に対して、
        SVでスーパーバイザーから「元気づけ」られることで共感経験が得られるように変化する場合があると示しています。
      </p>
      <p>
        しかし同時に、「スーパーバイザーに振り回される」ことによって、
        共感経験が逆に共感不全経験へと変化してしまう場合もあることが示されています。
      </p>
      <p>
        つまり、SVの場における<strong>スーパーバイザーとの関係性の質</strong>が、
        支援者の内的体験を大きく左右するということです。
      </p>

      <h2>初心者ほど共感疲労リスクが高い</h2>
      <p>
        Figley（1995）は、新人セラピストやトラウマ受傷経験を持つセラピストは、
        特に共感疲労を感じやすい傾向があることを指摘しています。
        そして、その危険についてこそ、訓練過程でSVを通じて伝えることの重要性を提唱しています。
      </p>
      <p>
        経験が少ないからこそ、自分の疲弊に気づきにくい。
        気づきにくいからこそ、消耗が積み重なりやすい。
        この構造を理解したうえでのサポートが必要です。
      </p>

      <h2>SVが普及していない現状</h2>
      <p>
        前回の記事でも触れましたが、日本の心理職においてSVは義務化されておらず、
        資格取得後に継続的なSVを受けている割合は低いのが現状です。
        また、SVのやり方・効果・評価方法が定型化されていないという問題も指摘されています（金沢, 2011）。
      </p>
      <p>
        これは心理職に限らず、支援職全般に言えることです。
        「振り返る場」「話せる場」「整理できる場」が組織的に保証されていない中で、
        多くの支援者が孤独に消耗を抱え込んでいます。
      </p>

      <h2>支援職として考えたいこと</h2>
      <p>
        SVや職場でのサポートを「受けている」だけでは不十分で、
        <strong>その場が本当に安心して話せる空間かどうか</strong>が重要です。
      </p>
      <p>
        形式的なサポートがあっても、そこで「評価される不安」「正しく話せない焦り」
        「振り回される感覚」があるとしたら、それはサポートではなく新たな消耗の源になりえます。
      </p>
      <p>
        逆に、SVでなくても——同僚との立ち話でも、信頼できる人との会話でも——
        「整理がつく」「前向きになれる」体験が生まれる場が、
        共感疲労の回復に本質的に必要なものかもしれません。
      </p>

      <div className="card">
        <p className="text-sm text-stone-700 font-medium leading-[1.9] mb-2">
          「話せる場」の質を問い直す
        </p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          あなたには今、「整理がつく」と感じられる話し相手や場所がありますか？
          それが職場の中でも外でも、あるいはカウンセリングであっても、
          「頭がいっぱいになる」ではなく「少し軽くなる」感覚があるかどうかが、
          良いサポートの一つの目安になるかもしれません。
        </p>
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-compassion-fatigue-social-support" className="text-sm text-[#7EB8A4] hover:underline">
            → 心理職の共感疲労とソーシャルサポート｜「期待」と「現実」のズレが消耗を深める
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 共感疲労チェック｜支援職のための20項目診断
          </Link>
          <Link to="/articles/helper-cannot-seek" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援者なのに、誰にも相談できない
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：竹下亜美（2017）「セラピストの共感疲労についての研究——スーパーヴィジョンの効果を中心に——」大妻女子大学大学院人間文化研究科 ／ Figley, C.R.（1995）Compassion fatigue as secondary traumatic stress disorder ／ 鑪幹八郎・滝口俊子（2001）スーパーヴィジョンを考える 誠信書房 ／ 樽澤百合（2016）カウンセラーの共感不全経験についての検討 ／ 黒川こころ（2017）初学者のスーパーヴィジョンプロセスについて ／ 金沢吉展（2011）スーパーヴィジョンに関する問題 ／ 竹下亜美（2017）初心者セラピストの共感疲労についての研究 日本心理臨床学会第36回大会発表論文
      </p>
    </ArticleLayout>
  )
}

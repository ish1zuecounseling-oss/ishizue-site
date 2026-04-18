import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperTeamCommunication() {
  return (
    <ArticleLayout
title="チームで働くほど疲れる理由と対処｜支援職のコミュニケーション消耗"
description="報告・連絡・相談・会議——チームワークそのものが消耗の原因になることがあります。なぜ関係疲れが起きるのか、心理学で構造を解説し、職場での消耗を減らすヒントを紹介します。"
      url="https://www.ishizue-counseling.jp/articles/helper-team-communication"
      date="2026-04-18"
      tags={["burnout", "boundary", "compassion"]}
    >
      <p>
        「自分だけ頑張っている気がする」<br />
        「チームなのに、誰も助けてくれない」<br />
        「報告・連絡・相談ができる雰囲気じゃない」——
      </p>
      <p>
        支援職の消耗は、個人の能力や感情の問題だけではありません。
        チームの構造そのものが消耗を生み出していることがあります。
        心理学のチームワーク研究から、その仕組みを見てみましょう。
      </p>

      <h2>チームパフォーマンスを決める2つの要素</h2>
      <p>
        縄田ら（2015）は、5社・161チーム・1,400名を対象に、
        どのようなチームプロセスが実際の業績向上につながるかを調査しました。
        その結果、チームワークには2つの側面があることが示されました。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① コミュニケーション</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          わからないことを気軽に聞ける、遠慮なく話せる、インフォーマルな声かけがある——
          こうした日常的なやりとりの質がチームの土台を作ります。
          研究では、これが「チーム活動全体を促進する潤滑油」として機能することが示されました。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 目標への協働</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          目標を共有する、お互いの状況を把握する、問題があれば指摘し合う、
          負担が偏らないよう気を配る——
          こうした具体的な協働行動が、実際の成果につながります。
        </p>
      </div>

      <p>
        そして重要なのは、この2つの関係です。
        研究が示したのは<strong>「コミュニケーションが目標への協働を高め、
        その結果としてパフォーマンスが高まる」</strong>という因果の連鎖でした。
        コミュニケーションが先にあって、協働が生まれ、成果が出る。
        この順序が崩れると、チームは機能しなくなります。
      </p>

      <h2>支援職の現場で起きていること</h2>
      <p>
        支援職の職場では、この構造が崩れていることが少なくありません。
      </p>
      <p>
        「相談しにくい雰囲気」「忙しそうで話しかけられない」「何を言っても変わらない」——
        こうした状態は、コミュニケーションの土台が壊れていることを示しています。
        土台がなければ、協働も生まれません。
        協働がなければ、仕事の負担は特定の人に集中し、消耗が深まります。
      </p>
      <p>
        さらに研究では、コミュニケーションの質が低い職場では、
        目標が不明確になり、お互いの状況が見えなくなり、
        問題があっても指摘できなくなることも示されています。
        これはまさに、多くの支援職の職場で起きている状況です。
      </p>

      <h2>「頑張り」では解決しない構造的な問題</h2>
      <p>
        この研究が重要なのは、チームパフォーマンスを
        定量的な業績指標（売上・利益）、上司評定、自己評定の3つで測定し、
        いずれにおいても同じ因果過程が確認された点です。
      </p>
      <p>
        つまり、個人が努力しても、
        <strong>チームのコミュニケーション構造が機能していなければ、
        パフォーマンスは上がらない</strong>ということです。
      </p>
      <p>
        支援職の消耗も同じです。
        「私が弱いから」「もっと頑張らないと」という自己批判の前に、
        チームのコミュニケーション構造を見直す必要があります。
        気軽に相談できるか、負担が偏っていないか、
        問題を指摘し合える雰囲気があるか——
        これらは個人の努力ではなく、チームの構造の問題です。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「職場の構造の問題」と頭ではわかっていても、
          その中で消耗し続けると、自分を責めるようになります。
          カウンセリングでは、「これは自分のせいなのか、構造の問題なのか」を
          一緒に整理することができます。
        </p>
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-organization-unsafe" className="text-sm text-[#7EB8A4] hover:underline">
            → 支援職が「やってはいけないとわかっていても」やってしまう理由
          </Link>
          <Link to="/articles/helper-self-criticism-culture" className="text-sm text-[#7EB8A4] hover:underline">
            → なぜ支援職は自分を責めやすいのか
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 共感疲労チェック｜支援職のための20項目診断
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：縄田健悟・山口裕幸・波多野徹・青島未佳（2015）「企業組織において高業績を導くチーム・プロセスの解明」心理学研究，85(6), 529-539 ／ Dickinson, T. L., & McIntyre, R. M.（1997）A conceptual framework for teamwork measurement. In Brannick, Salas, & Prince (Eds.), Team performance assessment and measurement. pp.19-43 ／ 三沢良・佐相邦英・山口裕幸（2009）看護師チームのチームワーク測定尺度の作成 社会心理学研究，24, 219-232
      </p>
    </ArticleLayout>
  )
}

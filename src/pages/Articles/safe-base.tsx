import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "安全基地とは何ですか？",
    a: "安全基地とは、愛着理論においてジョン・ボウルビィが提唱した概念で、「安心して弱さを出せる場所・関係」のことです。幼少期は養育者がその役割を担いますが、大人になっても「ここにいれば大丈夫」という感覚を持てる場所・関係が回復の基盤になります。",
  },
  {
    q: "支援職に安全基地が必要な理由は？",
    a: "支援職は常に「支える側」として機能するため、自分が弱さを出せる場所を持ちにくい構造があります。「安全基地なしの支援」は、消耗が蓄積しても補充されない状態です。支援を長く続けるために、自分自身の安全基地を意識的に作ることが重要です。",
  },
  {
    q: "安全基地は人間関係だけですか？",
    a: "人間関係が最も強力ですが、それだけではありません。自然・特定の場所・習慣・身体感覚の時間なども安全基地として機能します。「ここにいると落ち着く」「これをすると回復する」というものが安全基地になります。",
  },
]

export default function SafeBase() {
  return (
    <ArticleLayout
      title="安全基地とは何か｜回復に必要な「安心できる場所」の作り方"
      description="安全基地とは「安心して弱さを出せる場所・関係」のことです。支援職がなぜ安全基地を持ちにくいのか、どう作るのか。消耗した自己機能を回復させるための土台を解説します。"
      url="https://www.ishizue-counseling.jp/articles/safe-base"
      date="2026-05-03"
      tags={["compassion", "burnout", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        回復は「頑張ること」から始まりません。「安心できる場所に戻ること」から始まります。
      </p>

      <p>
        「頑張ってセルフケアをしよう」「もっと休もう」——しかし、なぜか回復しない。
        それは回復の<strong>土台</strong>が整っていないからかもしれません。
        その土台が「安全基地」です。
      </p>

      <h2>安全基地とは何か</h2>
      <p>
        <strong>安全基地（Secure Base）</strong>とは、愛着理論の提唱者ジョン・ボウルビィが提唱した概念で、
        「ここにいれば安心できる・弱さを出しても大丈夫」という感覚を持てる場所・関係を指します。
      </p>
      <p>
        幼少期には養育者がその役割を担います。
        「何かあっても戻れる場所がある」という安心感が、
        子どもが外の世界を探索する勇気の源になります。
      </p>
      <p>
        大人になっても、この安全基地の感覚は回復の基盤です。
        <strong>「弱さを出しても関係が壊れない場所」「評価されなくていい時間」「ただ存在できる空間」</strong>——
        これらが大人にとっての安全基地になります。
      </p>

      <h2>なぜ支援職は安全基地を持ちにくいのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 常に「支える側」に固定されている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職では「支える役割」が固定されやすいです。
          職場では支援者・家庭でも気を遣う役割——
          「自分が弱さを出す番」がどこにもない状態が続くと、安全基地が消えていきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「弱さを出すと信頼を失う」という職場文化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者が弱音を言うのは甘え」という文化がある職場では、
          <Link to="/articles/avoidant-attachment" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">弱さを出すことへの抵抗</Link>が強まります。
          職場が安全基地にならないとき、消耗は蓄積するだけで補充されません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>が安全基地への信頼を妨げる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「弱さを出すと拒絶される」「頼ると価値が下がる」というワーキングモデルが強い場合、
          安全基地となりうる関係があっても、そこに弱さを持ち込めません。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>
      </p>

      <LineCtaSmall />

      <h2>安全基地を作るために</h2>
      <p>
        安全基地は「見つけるもの」ではなく、少しずつ「育てるもの」です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「評価されない時間・場所」を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          成果・役割・他者の評価と切り離された時間が安全基地の基盤です。
          自然の中の散歩・趣味・何もしない時間——「ただ存在していい」感覚を育てます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「弱さを出しても関係が続く」体験を積む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「疲れた」「わからない」「しんどい」を少しずつ出せる相手との関係が安全基地になります。
          「弱さを出した後も関係が続いた」という体験の積み重ねが、
          <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデルを更新</Link>します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 身体感覚の安全基地を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          人間関係だけでなく、「この場所にいると落ち着く」「これをすると回復する」という
          身体・感覚レベルの安全基地も重要です。
          お風呂・特定の音楽・自然・動物との接触——身体が「安全」と感じる体験が神経系を整えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ カウンセリングを安全基地として活用する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          カウンセリングは「評価されない場所で弱さを出す体験を積む場」として機能します。
          特に安全基地を持つことが難しかった方にとって、
          カウンセリングはワーキングモデルの更新を意図的に行う安全基地になります。
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

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「安心できる場所がない」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">安全基地を一緒に作る</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          カウンセリングは「弱さを出しても関係が壊れない」という体験を安全に積む場所です。支援職の消耗を前提にした相談を行っています。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/safe-base"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        参考：Bowlby, J. (1988). A Secure Base. Basic Books.
        本記事は愛着理論と支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

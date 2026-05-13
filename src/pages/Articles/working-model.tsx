import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaImpostor } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "ワーキングモデルは変えられますか？",
    a: "変えられます。ただし「頭で理解する」だけでは変わりにくく、安全な関係の中で繰り返し異なる体験をすることで、少しずつ更新されていきます。カウンセリングや信頼できる対人関係がこの更新を助けます。",
  },
  {
    q: "ワーキングモデルと他人軸はどう関係しますか？",
    a: "「自分には価値がない」「他者の評価で自分の価値が決まる」というワーキングモデルは、他人軸と深く関連します。他者の評価・期待・反応を常に気にするパターンは、幼少期からのワーキングモデルが関与していることが多いです。",
  },
  {
    q: "支援職を選ぶこととワーキングモデルは関係しますか？",
    a: "関係することがあります。「人を助けることで価値を確認してきた」という経緯を持つ方が支援職を選ぶ場合、支援がうまくいかないときに自己価値が大きく揺らぎやすくなります。これはワーキングモデルと役割依存の交点で起きるパターンです。",
  },
]

export default function WorkingModel() {
  return (
    <ArticleLayout
      title="ワーキングモデルとは何か｜断れない・他人軸・自己否定が続く理由と変えられる可能性"
      description="ワーキングモデル（内的作業モデル）とは何か——幼少期の愛着から形成される「人との関係の前提」。断れない・他人軸・自己否定が続く理由と、大人になっても変えられる理由を解説。公認心理師・松本龍児監修。"
      url="https://www.ishizue-counseling.jp/articles/working-model"
      date="2026-05-03"
      tags={["burnout", "compassion", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「なぜ人間関係でいつも同じパターンになるのか」——それはワーキングモデルが関係しているかもしれません。
      </p>

      <p>
        「断ると嫌われる気がして断れない」「褒められても素直に受け取れない」「一人になると不安になる」——
        これらのパターンに、心当たりはありますか？
        これらは意志や性格の問題だけではなく、
        <strong>幼少期から形成された「人との関係の前提」＝ワーキングモデル</strong>が関与していることがあります。
      </p>

      <h2>ワーキングモデルとは何か</h2>
      <p>
        <strong>ワーキングモデル（内的作業モデル / Internal Working Model）</strong>とは、
        愛着理論の提唱者ジョン・ボウルビィが提唱した概念で、
        幼少期の養育者との愛着体験を通じて形成される「対人関係のテンプレート」です。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-3">ワーキングモデルの2軸</p>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-28">他者モデル</span>
            <div>
              <p className="text-stone-700 font-medium mb-0.5">「他者は信頼できるか」</p>
              <p className="text-stone-600">「困ったとき助けてもらえるか」「期待に応えないと関係が壊れるか」という他者への基本的な前提</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xs font-medium text-[#8FAF9F] flex-shrink-0 w-28">自己モデル</span>
            <div>
              <p className="text-stone-700 font-medium mb-0.5">「自分には価値があるか」</p>
              <p className="text-stone-600">「助けを求めていい存在か」「弱さを見せても受け入れられるか」という自己への基本的な前提</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        この2軸の組み合わせが、大人になってからの対人関係パターン・自己評価・感情調整のスタイルに
        深く影響し続けます。
      </p>

      <h2>ワーキングモデルの4つのパターン</h2>
      <div className="card space-y-4 text-sm">
        {[
          {
            type: "安定型",
            self: "自分には価値がある",
            other: "他者は信頼できる",
            pattern: "適切に助けを求め、断ることもでき、関係を安定して維持できる",
            color: "#8FAF9F",
          },
          {
            type: "不安型（とらわれ型）",
            self: "自分への不確信が強い",
            other: "他者を強く求める",
            pattern: "見捨てられることへの恐れが強く、他者の反応に敏感で過剰に気を使いやすい",
            color: "#c084fc",
          },
          {
            type: "回避型（軽視型）",
            self: "自己完結志向",
            other: "他者への過度な期待をしない",
            pattern: "感情・弱さを表現しにくく、一人で抱え込みやすい。助けを求めることへの抵抗が強い",
            color: "#60a5fa",
          },
          {
            type: "混乱型（未解決型）",
            self: "自己像が不安定",
            other: "他者が同時に安全でもあり脅威でもある",
            pattern: "関係パターンが一貫せず、対人関係や自己調整が難しくなりやすい",
            color: "#f87171",
          },
        ].map(({ type, self, other, pattern, color }) => (
          <div key={type} className="flex gap-3">
            <span className="text-xs font-medium flex-shrink-0 w-24 mt-0.5" style={{ color }}>{type}</span>
            <div>
              <p className="text-stone-700 text-xs mb-0.5">{self}・{other}</p>
              <p className="text-stone-600 leading-[1.9]">{pattern}</p>
            </div>
          </div>
        ))}
        <p className="text-xs text-stone-400 pt-2 border-t border-stone-100">
          ※これらは固定したカテゴリではなく傾向の理解のためのモデルです。混在することも多いです。
        </p>
      </div>

      <h2>ワーキングモデルと他人軸・自己機能の関係</h2>
      <p>
        「自分には価値がない」「他者の評価で価値が決まる」というワーキングモデルが強いとき、
        以下のパターンが起きやすくなります。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>→ <Link to="/articles/other-centered-living" className="underline underline-offset-2">他人軸</Link>——他者の反応・評価が常に自己価値の基準になる</p>
        <p>→ <Link to="/articles/helper-cannot-say-no" className="underline underline-offset-2">断れない</Link>——断ると関係が壊れるという前提から</p>
        <p>→ <Link to="/articles/impostor-check" className="underline underline-offset-2">インポスター現象</Link>——「本当の自分は価値がない」という自己モデルの表れ</p>
        <p>→ <Link to="/articles/tired-but-cannot-rest" className="underline underline-offset-2">疲れているのに休めない</Link>——「役立てている間だけ価値がある」という前提から</p>
        <p>→ <Link to="/articles/afraid-to-leave-role" className="underline underline-offset-2">役割を降りるのが怖い</Link>——役割なしの自分への価値感覚が薄い</p>
      </div>

      <p>
        これらは「悪い性格」ではなく、
        <strong>幼少期から積み上げてきた「生き延びるための適応パターン」</strong>です。
        そのパターンが大人の支援職という環境で作動し続けているとき、
        <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能の消耗</Link>が深まりやすくなります。
      </p>

      <h2>支援職とワーキングモデルの特別な関係</h2>
      <p>
        支援職を選ぶ経緯に、ワーキングモデルが関与していることがあります。
      </p>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          「人の役に立つことで自分の価値を確認してきた」「困っている人を助けることが自分の存在理由だった」——
          この経緯を持つ方が支援職を選んだ場合、支援という行為そのものがワーキングモデルの「価値確認」と結びついています。
        </p>
        <p className="text-sm text-stone-600 leading-[1.9] mt-2">
          支援がうまくいかないとき・休職・バーンアウト・利用者との別れ——
          これらが自己価値の大きな揺らぎとなりやすいのは、この構造があるからです。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link> ／ <Link to="/articles/helper-burnout-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">バーンアウト診断</Link>
      </p>

      <LineCtaImpostor />

      <h2>ワーキングモデルは変えられるのか</h2>
      <p>
        ワーキングモデルは幼少期に形成されますが、<strong>固定ではありません。</strong>
        成人後の体験、特に「安全な対人関係」の中で少しずつ更新されていきます。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">更新に必要なもの</p>
        <ul className="text-sm text-stone-600 space-y-1.5">
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「弱さを出しても関係が壊れない」という体験の積み重ね</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「助けを求めても価値は下がらない」という体験</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>「断っても関係が維持される」という体験</li>
          <li className="flex items-start gap-2"><span style={{ color: "#8FAF9F" }}>・</span>安全な場所での感情表現・言語化</li>
        </ul>
        <p className="text-xs text-stone-400 mt-3">
          「頭で理解する」だけでは変わりにくく、安全な関係の中での繰り返しの体験が必要です。カウンセリングはこの更新を意図的に行う場になります。
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
        <p className="text-xs text-stone-500 mb-2">「なぜいつも同じパターンになるのか」を整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">ワーキングモデルと消耗の構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ断れないのか」「なぜ休めないのか」——その背景にあるワーキングモデルを外から整理することで、パターンの変化が始まります。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="attachment" exclude={["/articles/working-model"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        参考：Bowlby, J. (1969). Attachment and Loss, Vol. 1. Basic Books. / Main, M. (1990). Cross-cultural studies of attachment organization. Human Development, 33, 48–61.
        本記事は愛着理論・自己機能に関する心理学的知見と支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

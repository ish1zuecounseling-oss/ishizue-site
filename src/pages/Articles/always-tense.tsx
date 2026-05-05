import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "「常に気が張っている」はなぜ起きますか？",
    a: "慢性的なストレス・感情労働・安全でない環境への長期適応によって、自律神経の交感神経が優位な状態で固まることで起きます。「危険に備え続ける状態」が解除されずに続いている状態です。",
  },
  {
    q: "意識的にリラックスしようとしても緊張が抜けないのはなぜですか？",
    a: "緊張は意識ではなく神経系（自律神経）によって制御されています。「頑張ってリラックスしよう」という思考では神経系はオフになりません。身体感覚・呼吸・安全な環境という神経系への直接的なアプローチが必要です。",
  },
  {
    q: "支援職に慢性緊張が多い理由は何ですか？",
    a: "利用者の状態を常にモニタリングする・感情を管理し続ける・予測不能な状況に備え続けるという支援職の構造が、神経系を「常に警戒モード」に置き続けます。これは意志の問題ではなく、職業的な神経系の適応です。",
  },
]

export default function AlwaysTense() {
  return (
    <ArticleLayout
      title="常に気が張っている｜慢性的な緊張が抜けない理由と神経系の回復"
      description="「いつも気が張っている」「リラックスしようとしても緊張が抜けない」——これは意志の問題ではなく神経系の慢性緊張です。なぜ起きるのか・支援職に多い理由・神経系から回復する方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/always-tense"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「リラックスしなければ」という思考では、神経系はオフになりません。
      </p>

      <p>
        「家に帰っても緊張が抜けない」「リラックスしようとしても体が固まったまま」「休日でも気が張っている」——
        これは意志の弱さでも、性格の問題でもありません。
        <strong>神経系が「常に警戒モード」で固まっている状態</strong>です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・肩・首・顎に常に力が入っている感じがある</li>
          <li>・「ゆっくりしよう」と思っても、体が落ち着かない</li>
          <li>・音に敏感・急な音でびくっとしやすい</li>
          <li>・休んでいるはずなのに疲れが取れない</li>
          <li>・「いつ何かが起きるか」という漠然とした緊張感がある</li>
        </ul>
      </div>

      <h2>「常に気が張っている」の正体</h2>
      <p>
        これは自律神経系の<strong>交感神経（緊張・戦闘・逃走モード）</strong>が、
        オフにならずに慢性的に優位になっている状態です。
      </p>
      <p>
        本来、交感神経は「危険・ストレス」に応じて活性化し、
        安全になると副交感神経（リラックスモード）に切り替わります。
        しかし慢性的なストレスが続くと、この切り替えが機能しにくくなります——
        <strong>「安全になっても、脳が安全を認識できない」</strong>状態になります。
      </p>

      <h2>なぜ支援職に慢性緊張が多いのか</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 他者の状態を常にモニタリングする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「利用者が今どういう状態か」「何かが起きそうか」という常時モニタリングが、
          神経系を「常に警戒モード」に置き続けます。
          このアンテナは仕事が終わっても自動的にはオフになりません。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情を「管理し続ける」緊張</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          本音の感情を抑えて管理し続ける<Link to="/articles/helper-emotional-labor-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>は、
          神経系への持続的な負荷です。
          「感情を表に出さないようにしている」状態は、常に緊張を要求します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 予測不能な状況への備え</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          クレーム・緊急対応・感情的な場面——
          「いつ何が起きるかわからない」という環境への長期適応が、
          神経系を「常に待機・警戒」の状態に固定させます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>による慢性的警戒</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「いつ何かが起きるか」「いつ批判されるか」「期待に応えられなければ」——
          こうした前提が強いと、客観的に安全な場面でも神経系が警戒を続けます。
        </p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>
      </p>

      <LineCtaSmall />

      <h2>神経系から回復するために</h2>
      <p>
        重要なのは「頑張ってリラックスしようとしない」ことです。
        神経系の緩和は<strong>思考ではなく、身体感覚・環境・安全感を通じて</strong>起きます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 呼吸から入る（最初の一手）</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          ゆっくりした長い呼気（息を吐くこと）が副交感神経を活性化します。
          4秒吸って・6〜8秒かけてゆっくり吐く——これだけで神経系が少し切り替わり始めます。
          「うまくやろう」とせず、ただ息を長く吐くことを意識します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「安全のサイン」を身体に送る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          温かい飲み物・ぬるめのお風呂・安心できる場所・穏やかな音楽——
          これらは神経系に「今は安全だ」というシグナルを送ります。
          思考で「安全だ」と言い聞かせるより、身体経由の方が神経系には届きやすいです。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「切り替え儀式」を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          着替え・シャワー・特定の音楽・散歩——
          仕事の終わりを神経系に知らせる儀式を繰り返すことで、
          脳が「これ以降は緊張しなくていい」と学習し始めます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「モニタリングのアンテナ」をオフにする時間</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          他者の状態を読まなくていい・気を遣わなくていい・評価されなくていい——
          こうした環境が神経系の緩和を助けます。
          一人の時間・自然・スマートフォンのない空間が、アンテナをオフにします。
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
        <p className="text-xs text-stone-500 mb-2">「緊張が抜けない」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">神経系の慢性緊張を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          「なぜ緊張が抜けないのか」——神経系の慢性緊張と消耗の構造を外から整理することで、回復の入口が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/always-tense"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と自律神経・神経科学の知見をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

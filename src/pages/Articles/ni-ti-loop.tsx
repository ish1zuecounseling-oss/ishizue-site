import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function NiTiLoop() {
  return (
    <ArticleLayout
      title="Ni-Tiループとは何か｜考えすぎて動けない・頭が止まらない状態の仕組み"
      description="Ni-Tiループとは、内向的直観と内向的思考が閉じたループを作り、考えすぎて動けなくなる状態です。脳疲労・自己機能低下との関係と、ループから抜け出す方法を解説します。"
      url="https://www.ishizue-counseling.jp/articles/ni-ti-loop"
      date="2026-05-03"
      tags={["burnout", "compassion"]}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「考えれば考えるほど答えが出ない」「頭の中だけで完結して動けない」——それがNi-Tiループです。
      </p>

      <p>
        Ni-Tiループとは、認知機能論における概念で、
        <strong>内向き直観（Ni）と内向き思考（Ti）が外界への出口なく閉じたループを形成する状態</strong>を指します。
        「深く考えているのに答えが出ない」「分析すればするほど動けなくなる」という体験をした方に、この概念が刺さることがあります。
      </p>

      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-500 mb-4">
        ※認知機能論はCaは Carl Jung のタイプ論から派生した自己理解モデルです。科学的性格検査ではなく、自分の傾向を理解するヒントとして活用してください。
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態に心当たりはありますか</p>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>・「もっと考えれば答えが出るはず」で止まり続ける</li>
          <li>・分析・整理はできるのに、行動に移れない</li>
          <li>・頭の中だけで問題が「完結」してしまう</li>
          <li>・一人でいると思考がどんどん深みにはまる</li>
          <li>・外からの情報（身体感覚・感情）が遮断されている感じがする</li>
        </ul>
      </div>

      <h2>Ni（内向き直観）とTi（内向き思考）とは</h2>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">Ni（内向き直観）</p>
          <p className="text-stone-600 leading-[1.9]">物事の本質・パターン・全体的な意味を内側で統合する機能。「なんとなくわかる」「全体像が直観的に見える」という傾向。深い洞察をもたらす一方、「答えを求めて内側に潜り続ける」ループになりやすい。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">Ti（内向き思考）</p>
          <p className="text-stone-600 leading-[1.9]">内側で論理構造を精密に組み立てる機能。「矛盾がないか確認する」「自分なりの体系を作る」という傾向。精緻な分析をもたらす一方、外向きのアクションより内側での検証が優先されやすい。</p>
        </div>
      </div>

      <h2>なぜループになるのか</h2>
      <p>
        NiとTiはどちらも「内向き」の機能です。
        両方が同時に強く働くと、思考が内側だけで完結しやすくなります。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>→ Ni：「この問題の本質は何か」と深く潜る</p>
        <p>→ Ti：「その答えは論理的に正しいか」と精査する</p>
        <p>→ Ni：「でもまだ見えていない部分がある」とさらに潜る</p>
        <p>→ Ti：「まだ矛盾がある、もっと整理が必要」と検証する</p>
        <p>→ <strong>外界への出口（行動・感覚・感情表現）なしにループが続く</strong></p>
      </div>
      <p>
        このループが深まるほど、<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">脳疲労</Link>が蓄積し、
        <Link to="/articles/helper-rumination" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>が止まらなくなります。
        また「考えているのに行動できない」という自己批判が深まり、
        <Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能が消耗</Link>していきます。
      </p>

      <h2>Ni-Tiループが起きやすい状況</h2>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・慢性的なストレス・消耗状態にあるとき</p>
        <p>・安全な外側への表現場所（対話・行動）がないとき</p>
        <p>・<Link to="/articles/other-centered-living" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">他人軸</Link>で生き、自分の感覚へのアクセスが薄れているとき</p>
        <p>・身体感覚・感情表現を長期間抑圧してきたとき</p>
      </div>

      <p className="text-sm text-stone-500">
        消耗の深さを確認→ <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック</Link>
      </p>

      <LineCtaCompassion />

      <h2>Ni-Tiループから抜け出すために</h2>
      <p>
        ループから抜け出すには、<strong>「考える」から「感じる・行動する」への切り替え</strong>が必要です。
        思考の中でさらに考え続けることはループを深めます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 外側への出口を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">話す・書き出す・行動する——内側に閉じた思考を外に出すことが、ループを切るきっかけになります。「完璧に整理してから話す」ではなく、「整理されていないまま外に出す」ことが重要です。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 身体感覚に意識を向ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">Ni-Tiループは「内側の思考系」に閉じた状態です。身体感覚（呼吸・足裏・温度）に意識を向けることが、思考系から感覚系への切り替えを促します。<Link to="/articles/overthinking-needs-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">考えすぎる人に必要なのは感覚</Link>を参照してください。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「完璧な答え」を手放す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">Ni-Tiループの根底には「完璧に理解してから動く」という前提があります。「今わかっている範囲で動く」という姿勢への転換が、ループから抜け出す出発点になります。</p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 安全な場所で感情を表現する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">感情表現（Fe）が抑圧されているとき、Ni-Tiループが深まりやすいです。信頼できる人との対話・書き出し・感情を表現することが、ループの圧力を解放します。</p>
      </div>

      <div className="my-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-xs text-stone-500 mb-2">「考えすぎて動けない」を外から整理したいとき。</p>
        <p className="text-sm font-medium text-stone-800 mb-2">思考ループの構造を一緒に整理する</p>
        <p className="text-xs text-stone-600 leading-relaxed mb-4">「なぜ考えてしまうのか」「どうすれば動けるのか」——消耗の構造を外から整理することで、ループから出る入口が見えてきます。</p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          支援職専門カウンセリングに相談する（初回無料）
        </a>
        <p className="text-[10px] text-stone-400 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="mbti" exclude={["/articles/ni-ti-loop"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事はMBTIの認知機能論を自己理解のモデルとして活用しています。認知機能論は科学的性格検査ではなく、自分の傾向を理解するためのヒントとして使用しています。公認心理師・障害福祉15年の臨床経験をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

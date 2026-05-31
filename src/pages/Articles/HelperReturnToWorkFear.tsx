import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

export default function HelperReturnToWorkFear() {
  return (
    <ArticleLayout
      title="支援職が復職を怖いと感じる理由とは｜「戻りたい気持ち」と「怖い気持ち」が同時にある状態を理解する"
      description="復職が怖いのは、弱さでも回復不足でもありません。「戻りたい」と「怖い」が同時に存在する状態の心理的な構造と、その恐れへの向き合い方を整理します。"
      url="https://www.ishizue-counseling.jp/articles/helper-return-to-work-fear"
      date="2026-03-29"
      audio="/audio/helper-return-to-work-fear.mp3"
      tags={["burnout", "self-function"]}
    >

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
        支援職が復職を怖いと感じる状態とは、休職・休養を経てある程度回復が進んでいるにもかかわらず、
        職場に戻ることへの強い不安・恐れ・抵抗感が続いている状態のことです。「戻りたい気持ちはある。
        でも怖い」という二つの感覚が同時に存在するこの状態は、意志の弱さや回復不足を示すものではありません。
        復職への恐れは、消耗した体験から自分を守ろうとする、自然な心理的反応です。
      </p>

      <p className="text-sm text-stone-600 leading-relaxed">
        この記事は「復職が怖い」という感覚そのものに焦点を当てます。復職を具体的に進める手順は<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link>、バーンアウト全体の構造は<Link to="/articles/burnout-syndrome-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群とは（完全ガイド）</Link>にまとめています。
      </p>

      <p>
        現場でこんな声を聞くことがあります。
      </p>
      <div className="card space-y-2">
        <p>「回復してきた気がするのに、復職を考えると途端に不安が強くなる」</p>
        <p>「また同じことになるのではないかという恐れが、頭から離れない」</p>
        <p>「職場の人たちにどんな顔をして会えばいいのかわからない」</p>
        <p>「休んでいる間に自分の居場所がなくなってしまったのではないかと思う」</p>
        <p>「復職したいのに、一歩が踏み出せないまま時間が過ぎていく」</p>
      </div>

      <h2>復職への恐れとは：定義と背景</h2>
      <p>
        支援職における復職への恐れとは、休職・療養期間を経た後、職場に戻ることに対して感じる、持続的な
        不安・回避感・恐怖のことです。「また同じ状態になるのではないか」という再発への恐れ、「職場での自分の
        立場がなくなったのではないか」という社会的な恐れ、「うまくやっていけるかどうかわからない」という
        自己効力感の低下、「休んだことを責められるかもしれない」という対人的な恐れが複合的に重なります。
      </p>
      <p>
        支援職の復職への恐れには固有の背景があります。バーンアウトや適応障害で休職した場合、その原因となった
        環境に再び戻るわけですから、恐れが生じることは自然な反応です。また「支援者なのに助けを必要とした」
        という感覚がアイデンティティへの傷つきとなり、「本当に回復したのかどうか」という回復の実感の不確かさも
        加わります。
      </p>

      <h2>現場で起こること：復職への恐れが形を変えて現れる場面</h2>
      <h3>■ 復職を考えると身体が反応する</h3>
      <p>
        復職のことを具体的に考えると、胸が苦しくなる・眠れなくなる・以前の場面が頭に浮かぶ。これは身体が
        「あの状況は危険だった」という記憶として保持していることから生じる反応であり、神経系が警告を
        発しているサインです。
      </p>
      <h3>■ 「また同じことになるかもしれない」という再発への恐れ</h3>
      <p>
        「一度崩れた自分は、また崩れやすいのではないか」という感覚が、復職への足取りを重くします。
        この再発への恐れは、回復が不十分であることを示すのではなく、以前の体験からの自然な学習反応として
        理解できます。「治ったのにまた戻ってしまうのではないか」という慢性化・再発への不安については
        <Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない</Link>もあわせてご覧ください。
      </p>
      <h3>■ 「休んでいた自分」を職場でどう説明するか</h3>
      <p>
        休職していた期間のことをどう説明すればいいのか・どんな顔をして職場に戻ればいいのか・同僚にどう
        思われているかわからない。この対人的な不安が、復職そのものへの恐れとして現れることがあります。
      </p>
      <h3>■ 「自分の居場所がなくなったのではないか」という不安</h3>
      <p>
        休んでいる間に担当ケースが変わった・新しいスタッフが入った。「戻っても自分の場所がないのではないか」
        という感覚が生まれることがあります。
      </p>
      <h3>■ 「完全に回復していないのに戻らなければならない」というプレッシャー</h3>
      <p>
        休職期間の上限が近づいている・経済的な理由で早めに復職しなければならない。このプレッシャーが
        「本当は怖い」という感覚を押し込め、十分な準備のないまま復職を迫られることがあります。
        そもそも休職に踏み切れない・ためらってしまうという段階の心理については
        <Link to="/articles/helper-leave-of-absence-hesitation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休職をためらう心理</Link>で扱っています。
      </p>

      <h2>心理的背景：復職への恐れを生む構造</h2>
      <h3>■ トラウマ記憶と身体の反応</h3>
      <p>
        バーンアウト・適応障害・深刻な消耗体験は、心理的なトラウマとして記憶に刻まれることがあります。
        復職を考えると身体が反応するのは、このトラウマ記憶への神経系の反応として理解できます。
        「また危険な状況に近づこうとしている」という警告として、身体が反応しているわけです。
        「気合いで乗り越える」ことには限界があります。
      </p>
      <h3>■ 自己効力感の低下と「できない」という予測</h3>
      <p>
        消耗・休職という体験を経た後、自己効力感（自分はできるという感覚）が大きく低下していることがあります。
        「戻ってもうまくやれないのではないか」という予測が、復職への恐れとして現れます。
        自己効力感の低下は回復の過程で起きやすい自然な現象であり、職場に戻ることを重ねることで
        少しずつ回復していくものですが、その「重ねる前」の段階での不確かさが復職を困難にします。
      </p>
      <h3>■ 再発への予期不安</h3>
      <p>
        「また同じことになるかもしれない」という予期不安は、以前の消耗体験から学んだ「自分は崩れうる」という
        認識から生まれます。しかし予期不安は実際のリスクを過大評価する傾向を持ちます。
        予期不安と実際のリスクを分けて考えることが、復職の判断を助けます。
      </p>
      <h3>■ アイデンティティの揺らぎと対人的な恥</h3>
      <p>
        「支援者が助けを必要とした」「休まなければならなかった」という体験への恥の感覚が、
        「どんな顔をして戻ればいいのか」という対人的な不安として現れます。この恥は、休職が「失敗」や
        「弱さ」ではなく限界まで頑張った結果であるという理解によって少しずつ和らいでいきます。
      </p>

      <h2>復職への恐れと向き合うための視点</h2>
      <h3>① 「怖い」という感覚を正当な情報として受け取る</h3>
      <p>
        復職への恐れは、「準備と条件整備が必要だ」という自分からの情報として受け取ることができます。
        回避すべき「弱さのサイン」ではなく、大切な警告として扱うことが出発点になります。
      </p>
      <h3>② 段階的な復職を検討する</h3>
      <p>
        最初から以前と同じ形で戻ろうとするのではなく、時短・軽減業務・慣らし勤務など、段階的に職場に
        慣れていくプロセスが、神経系の慣れと自己効力感の回復を助けます。
        段階的復職の具体的な進め方は<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職</Link>で詳しく解説しています。
      </p>
      <h3>③ 復職前に「何が変わったか」を整理する</h3>
      <p>
        「自分の何が変わったか」「環境の何が変わったか」「サポート体制がどう整うか」を整理することが、
        再発への予期不安を現実に基づいたものに修正する助けになります。
      </p>
      <h3>④ 復職後のサポート体制を事前に整える</h3>
      <p>
        主治医・産業医・スーパーバイザー・信頼できる同僚など、復職後に頼れる人・相談できる場所を
        事前に確認しておくことが、「また一人で抱えることになる」という恐れを緩めます。
      </p>
      <h3>⑤ 「怖いまま進む」という選択肢を知る</h3>
      <p>
        恐れが完全になくなってから復職するのではなく、「怖さを感じながらも、準備を整えて一歩踏み出す」
        という選択があります。恐れの消失を条件にすると、復職のタイミングが永遠に来ない可能性があります。
      </p>

      <h2>まとめ</h2>
      <ul className="space-y-2">
        <li>トラウマ記憶と神経系の反応：以前の消耗体験が記憶に刻まれ、職場に関連する刺激に身体が反応する</li>
        <li>自己効力感の低下：「戻ってもうまくやれないのではないか」という予測が、復職への恐れとして現れる</li>
        <li>再発への予期不安：過去の体験に基づく「また同じことになる」という恐れが、実際のリスクを過大評価させる</li>
        <li>アイデンティティの揺らぎと恥：休職体験への恥の感覚が、「どんな顔をして戻ればいいか」という対人的な不安を生む</li>
        <li>準備・条件整備の不足：段階的な復職やサポート体制が整っていないことが、恐れを強化する</li>
      </ul>
      <p>
        「復職が怖い」という感覚は、以前の体験から自分を守ろうとする自然な反応です。その恐れを「弱さ」として
        処理するより、「どんな準備と条件があれば戻れるか」を問う情報として受け取ることが、
        次の一歩につながるかもしれません。
      </p>
      <p>
        こころの相談室 いしずえ では、復職が怖い・休職からの回復途中にある支援職・対人援助職の方の
        ご相談を承っています。「戻りたいけど怖い」という状態でも、一緒に考える場所として活用していただけます。
      </p>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          「戻りたいけど怖い」という状態の整理は、相性によって進めやすさが変わります。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">復職が怖い支援職の方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「戻りたい」と「怖い」が同時にある状態は、弱さでも回復不足でもありません。どんな準備と条件があれば戻れるかを、構造を理解した専門家と一緒に整理することで、次の一歩が見えてきます。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">緊急時の相談窓口</p>
        <ul className="space-y-0.5 leading-relaxed">
          <li>・<strong>よりそいホットライン</strong>:0120-279-338(24時間・無料・年中無休)</li>
          <li>・<strong>いのちの電話</strong>:0570-783-556(10時〜22時)</li>
          <li>・お住まいの地域の<strong>精神保健福祉センター</strong></li>
          <li>・心療内科・精神科</li>
        </ul>
      </div>

      <ArticleFooterLinks type="burnout" exclude={["/articles/helper-return-to-work-fear"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        この記事は、こころの相談室 いしずえ(公認心理師・松本 龍児)が執筆しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

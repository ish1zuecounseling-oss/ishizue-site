import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "燃え尽き症候群の回復方法で最も大事なことは何ですか?",
    a: "「気合いで治す」「もっと頑張る」というアプローチをやめることです。燃え尽きは長期的な消耗から起きるもので、努力で乗り越えるものではありません。むしろ「離れる」「やめる」「休む」を意識的に選ぶことが、最も効果的な回復方法です。「何かをする」より「何をしないか」を決めることが鍵になります。",
  },
  {
    q: "セルフケアだけで治りますか?",
    a: "軽度なら可能ですが、中度以上はセルフケアだけでは難しいです。燃え尽きの中核問題は「消耗を生む構造」にあり、職場環境・対人パターン・自己否定など構造への対処が必要です。これは一人で見えにくいことが多く、医療機関・カウンセラー・産業医など、複数の専門家サポートを組み合わせることが現実的です。「セルフケアで何とかしよう」と粘りすぎると、慢性化のリスクが高まります。",
  },
  {
    q: "回復までどれくらいかかりますか?",
    a: "軽度なら1〜2ヶ月、中度で3〜6ヶ月、重度で半年〜1年以上が一般的です。ただし「症状の改善」と「持続可能な回復」は別で、症状が消えてもすぐ復職すると再発しやすいです。詳しくは「燃え尽き症候群はどれくらいで治る?」を参照してください。",
  },
  {
    q: "やってはいけない回復方法はありますか?",
    a: "あります。①「気合いで治す」精神論、②「セルフケアだけで何とかする」抱え込み、③「早く復職しよう」と焦る、④「休みすぎは怠け」と自分を責める、⑤「気分転換にもっと活動する」逆効果のアプローチ。これらは慢性化を最大化します。本記事内の「避けたい3つの罠」を参照してください。",
  },
  {
    q: "復職するまでに何をすべきですか?",
    a: "回復の確認ポイントは4つ。①休息で疲れが取れる、②感情が動き始める、③仕事への関心が戻る、④職場・関係性のパターンが変わった。特に④が重要で、構造的な変化なしに戻ると再発しやすいです。詳しくは「燃え尽き症候群からの復職」を参照してください。",
  },
  {
    q: "「治った」とどうやって判断しますか?",
    a: "①休日にちゃんと休めて、月曜にエネルギーが回復している、②楽しいと感じる時間が戻ってきた、③人と会うことが負担ではなくなった、④身体症状が解消している、⑤将来のことを考えられる、が代表的な回復のサインです。完全に消えるより「上手く付き合える」状態を目指すのが現実的です。",
  },
  {
    q: "「治らない」と感じる時はどうすればいいですか?",
    a: "「治らない」のではなく「治っても再発する」状態であることが多いです。構造を整理しないまま症状の改善だけを追っていることが原因の場合があります。詳しくは「燃え尽き症候群が治らない」を参照してください。一人で抱えず、専門家サポートを使うタイミングです。",
  },
]

export default function BurnoutRecoveryMethods() {
  return (
    <ArticleLayout
      title="燃え尽き症候群の回復方法——今日からできる7つのアプローチと避けたい3つの罠【公認心理師】"
      description="燃え尽き症候群(バーンアウト)の回復方法を、医療・心理・セルフケアの3方向から実用的に解説。今日からできる7つのアプローチ、避けたい3つの罠、段階別の回復方法を公認心理師がガイド。「気合いで治す」をやめ、構造を変えるための実用ガイド。"
      url="https://www.ishizue-counseling.jp/articles/burnout-recovery-methods"
      date="2026-05-27"
      tags={["burnout", "compassion", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        燃え尽き症候群の回復は、「何かをする」より「何をしないか」を決めることが鍵です。「気合いで治す」をやめ、構造を変えるための実用ガイド。
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
        「燃え尽き症候群だと言われた、でも何から始めればいいのかわからない」
        「ネットで検索すると情報が多すぎて、どれが本当に効くのかわからない」
        「セルフケアを試したけれど、効いている気がしない」——
      </p>

      <p>
        こうした状態の方は少なくありません。
        燃え尽き症候群(バーンアウト)の<strong>回復方法</strong>には実はパターンがあり、効果的な順序と組み合わせがあります。
      </p>

      <p>
        この記事では、燃え尽きの回復方法を、<strong>「医療」「心理」「セルフケア」の3方向</strong>から整理し、
        <strong>「今日からできる7つのアプローチ」</strong>と<strong>「避けたい3つの罠」</strong>を実用的にガイドします。
      </p>

      <p>
        結論からお伝えすると、回復の鍵は<strong>「何かをする」より「何をしないか」を決めること</strong>です。
        「気合いで治す」「もっと頑張る」というアプローチは、慢性化を最大化します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 「消えてしまいたい」「いなくなりたい」感覚が続いている方は、本記事の内容に関わらず、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・回復方法の<strong>3つの方向</strong>(医療・心理・セルフケア)</li>
          <li>・今日からできる<strong>7つの回復アプローチ</strong></li>
          <li>・避けたい<strong>3つの罠</strong>(慢性化の原因)</li>
          <li>・<strong>段階別</strong>の回復方法(軽度・中度・重度)</li>
          <li>・「回復した」のサイン</li>
          <li>・それでも回復しない時の対処</li>
        </ul>
      </nav>

      <h2>結論——「気合い」より「構造」を変える</h2>
      <p>
        燃え尽き症候群の回復で最も多い誤解が、「<strong>もっと頑張れば治る</strong>」「<strong>気合いで乗り越えられる</strong>」というアプローチです。
        これは慢性化を最大化する最大の要因です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">なぜ「気合い」では治らないか</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きは「努力不足」が原因ではありません。むしろ<strong>長年頑張り続けてきた結果</strong>として、エネルギーが枯渇した状態です。
          ここでさらに「頑張る」を加えても、消耗を深めるだけです。
          回復のためには、「<strong>頑張る</strong>」を意識的にやめて、「<strong>離れる</strong>」「<strong>休む</strong>」「<strong>構造を変える</strong>」を選ぶ必要があります。
        </p>
      </div>

      <h2>回復方法の3つの方向</h2>
      <p>
        燃え尽きの回復は、<strong>3つの方向</strong>を組み合わせることで効果が最大化します。
        どれか一つではなく、複数を並行することが基本です。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 医療的アプローチ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          心療内科・精神科での診断・服薬・診断書発行。<br />
          <strong>対象</strong>:身体症状が強い・睡眠障害・希死念慮・休職の検討<br />
          <strong>役割</strong>:症状の医学的管理・休職制度の活用<br />
          <strong>限界</strong>:消耗を生む構造そのものへのアプローチには限界があります
        </p>
        <p className="text-xs text-stone-500 mt-2">
          詳しくは→ <Link to="/articles/burnout-which-clinic" className="underline underline-offset-2">燃え尽き症候群は何科に行くべき?</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 心理的アプローチ(カウンセリング)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          カウンセラー(公認心理師など)による対話。<br />
          <strong>対象</strong>:構造を整理したい・対処パターンを見直したい・自己否定が強い<br />
          <strong>役割</strong>:消耗を生む構造の整理・対処パターンの見直し<br />
          <strong>重要性</strong>:中度以上の場合、心理的アプローチなしでの回復は難しいことが多いです
        </p>
        <p className="text-xs text-stone-500 mt-2">
          詳しくは→ <Link to="/articles/structural-counseling-method" className="underline underline-offset-2">構造整理型カウンセリングとは</Link>
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ セルフケア</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自分でできる日常的なケア。<br />
          <strong>対象</strong>:軽度〜中度・回復過程の維持<br />
          <strong>役割</strong>:身体の回復・日常的なエネルギー保持<br />
          <strong>注意</strong>:セルフケアだけで何とかしようとすると、慢性化のリスクが高まります
        </p>
        <p className="text-xs text-stone-500 mt-2">
          詳しくは→ <Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2">セルフケアが効かない理由</Link>
        </p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        この3つを<strong>並行して使う</strong>ことが、最も効果的な回復方法です。
        単独ではなく組み合わせで使うことで、症状の管理・構造の整理・日常のケアが同時に進みます。
      </p>

      <h2>今日からできる7つの回復アプローチ</h2>
      <p>
        ここからは、今日から実践できる具体的なアプローチを整理します。
        全部を一度にやる必要はありません。できそうなものから始めてください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「離れる」を最優先する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの最初の処方箋は「離れる」です。
          消耗源(職場・人間関係・過剰な責任)から、可能な範囲で物理的に離れます。
          休職・有給取得・業務調整・配置変更——どんな手段でも構いません。
          「離れる」が罪悪感を伴うのは正常な反応ですが、それに従わないでください。
          燃え尽きは「離れないと回復しない」状態です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 身体の回復を最優先する(睡眠・栄養)</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          回復の土台は<strong>身体</strong>です。睡眠・食事・水分摂取を最優先にします。<br />
          ・<strong>睡眠</strong>:眠れるだけ眠る。「眠りすぎ」を心配しなくていい時期です<br />
          ・<strong>食事</strong>:食べられる時に栄養のあるものを。無理に作らず、惣菜・宅配でOK<br />
          ・<strong>水分</strong>:こまめに摂る<br />
          複雑な健康法より、これらの基本が最重要です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「やめる」リストを作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「何を始めるか」より「<strong>何をやめるか</strong>」を決めます。<br />
          ・「全部完璧にやる」をやめる<br />
          ・「断らない」をやめる<br />
          ・「迷惑をかけない」をやめる<br />
          ・「自分で何とかする」をやめる<br />
          ・SNS・ニュースの過剰摂取をやめる<br />
          一つでもやめると、エネルギーの消耗が減ります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「ケアされる側」になる時間を作る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職や責任ある立場の方は、「ケアする側」が習慣化しています。
          意識的に「<strong>ケアされる側</strong>」になる時間を作ります。<br />
          ・マッサージ・整体に行く<br />
          ・カウンセリングを受ける<br />
          ・信頼できる人に話を聞いてもらう<br />
          ・家事を誰かにお願いする<br />
          「ケアされること」自体が、回復の最重要要素です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 感情を言葉にする習慣</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽き状態では「<strong>自分が何を感じているか</strong>」が見えにくくなっています。
          1日1回でいいので、感情を言葉にする時間を持ちます。<br />
          ・日記・メモアプリに書き出す<br />
          ・信頼できる人に話す<br />
          ・カウンセラーに話す<br />
          「正しく書く」必要はありません。「<strong>感じていることをそのまま出す</strong>」だけで、心の整理が進みます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑥ 「役に立たない時間」を意識的に持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          燃え尽きの方は「役に立てる自分」に価値を感じやすいです。
          意識的に「<strong>役に立たない時間</strong>」を作ることで、条件付き自己価値からの回復が進みます。<br />
          ・何もしない時間を持つ<br />
          ・「生産的でないこと」を罪悪感なくやる(漫画・ゲーム・昼寝)<br />
          ・「結果を出さない趣味」を始める<br />
          「価値がある自分」と「何もしない自分」の両方を持つことが、長期的な持続性を支えます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑦ 専門家サポートに繋がる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          中度以上の燃え尽きでは、一人で回復するのはほぼ不可能です。
          ためらわず専門家サポートに繋がります。<br />
          ・心療内科・精神科(症状管理・診断書)<br />
          ・カウンセラー(構造の整理)<br />
          ・産業医(職場との橋渡し)<br />
          「迷ったらまず受診」が安全です。詳しくは<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2">何科に行くべきか</Link>を参照してください。
        </p>
      </div>

      <LineCtaCompassion />

      <h2>避けたい3つの罠</h2>
      <p>
        善意でやっているのに、結果として慢性化を招くアプローチがあります。
        以下の3つは特に注意してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">罠① 「気合いで治す」精神論</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「もう少し頑張れば良くなる」「自分の意志で乗り越えよう」というアプローチは、最も慢性化を招きます。
          燃え尽きは「努力不足」ではなく「努力過多の結果」です。
          ここで「気合い」を入れると、消耗源が増えるだけです。
          むしろ「<strong>頑張らない</strong>」「<strong>気を抜く</strong>」を意識的に練習することが、回復への道です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">罠② 「セルフケアだけで何とかしよう」抱え込み</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「専門家に頼るのは申し訳ない」「自分で解決すべき」と思う方は多いです。
          しかし中度以上の燃え尽きは、セルフケアだけでは回復が難しいです。
          特に「<strong>構造の整理</strong>」は、一人では見えにくく、第三者の視点が必要です。
          一人で抱え込むことが「自立」ではありません。「<strong>適切に頼る</strong>」が本当の自立です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">罠③ 「早く復職しよう」の焦り</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「迷惑をかけている」「早く戻らなければ」という焦りが、早期復職→再発の悪循環を生みます。
          症状が一時改善しても、構造が変わっていないと再発します。
          「<strong>急がば回れ</strong>」が燃え尽き回復の鉄則。詳しくは<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2">燃え尽き症候群からの復職</Link>を参照してください。
        </p>
      </div>

      <h2>段階別の回復方法</h2>
      <p>
        燃え尽きの段階によって、適切なアプローチが変わります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">軽度(初期)の段階</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>症状</strong>:疲労感・少しのモチベーション低下・休日に回復できる<br />
          <strong>適切なアプローチ</strong>:セルフケア中心(睡眠・食事・離れる時間)+ 産業医面談<br />
          <strong>期間</strong>:1〜2ヶ月で回復可能<br />
          <strong>注意</strong>:この段階で気づけるかどうかが分かれ目です。「まだ大丈夫」と放置すると重症化します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">中度の段階</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>症状</strong>:慢性的疲労・出勤前の身体症状・脱人格化・達成感の低下<br />
          <strong>適切なアプローチ</strong>:医療機関の受診 + カウンセリング + セルフケア<br />
          <strong>期間</strong>:3〜6ヶ月<br />
          <strong>注意</strong>:休職の検討も視野に入れる段階です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">重度(深刻化)の段階</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <strong>症状</strong>:出勤困難・希死念慮・身体症状の長期化・感情麻痺<br />
          <strong>適切なアプローチ</strong>:即時の医療機関受診 + 休職 + カウンセリング<br />
          <strong>期間</strong>:半年〜1年以上<br />
          <strong>注意</strong>:一人で何とかしようとする時期ではありません。専門家サポートを最優先してください。
        </p>
      </div>

      <h2>「回復した」のサイン</h2>
      <p>
        どこまで回復したらOKか、判断のサインを整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">回復のサイン</p>
        <ul className="space-y-1.5 text-sm text-stone-600 leading-[1.9]">
          <li>① 休日にちゃんと休めて、月曜にエネルギーが回復している</li>
          <li>② 「楽しい」と感じる時間が戻ってきた</li>
          <li>③ 人と会うことが負担ではなくなった</li>
          <li>④ 身体症状(不眠・頭痛など)が解消している</li>
          <li>⑤ 将来のことを考えられる</li>
          <li>⑥ 「役に立たない自分」も受け入れられる感覚がある</li>
          <li>⑦ 仕事への関心が少し戻ってきた</li>
        </ul>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        完全に消えるより「<strong>上手く付き合える</strong>」状態を目指すのが現実的です。
        「症状ゼロ」を目標にすると、達成できずに焦りが生まれます。
        グラデーションで回復していることを認識する力が、回復への気力を支えます。
      </p>

      <h2>それでも回復しない時</h2>
      <p>
        ここまでのアプローチを試しても、回復が感じられないことがあります。
        その場合は、以下の可能性を検討してください。
      </p>

      <div className="card space-y-2 text-sm text-stone-600 leading-[1.9]">
        <p>・<strong>構造を整理しないまま症状だけ追っている</strong>:カウンセリングを検討</p>
        <p>・<strong>同じ職場・関係性に戻り続けている</strong>:環境的選択肢を視野に入れる</p>
        <p>・<strong>診断が他にもある可能性</strong>:うつ病・適応障害との重なり、医療機関で再評価</p>
        <p>・<strong>「気合いで治す」を繰り返している</strong>:アプローチそのものを見直す</p>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        詳しくは<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2">燃え尽き症候群が治らない</Link>を参照してください。
      </p>

      <h2>こんな状態なら早めの専門家相談を</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・身体症状(不眠・頭痛・胃痛など)が2週間以上続いている</p>
        <p>・出勤前に動悸・吐き気が出る</p>
        <p>・休日も回復できない感覚が続いている</p>
        <p>・「もう何もしたくない」が続いている</p>
        <p>・自分でケアできる限界を感じる</p>
        <p>・「消えてしまいたい」「いなくなりたい」感覚がある</p>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 特に「消えてしまいたい」「いなくなりたい」感覚が続いている場合は、心療内科・精神科への受診を優先してください。よりそいホットライン(0120-279-338・24時間無料)も利用できます。
      </p>

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
        <p className="font-medium text-stone-700 mb-2">燃え尽き関連シリーズ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-burnout-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のバーンアウト(回復ガイド)</Link></li>
          <li>・<Link to="/articles/burnout-recovery-period" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群はどれくらいで治る?(期間)</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群は何科に行くべき?(受診)</Link></li>
          <li>・<Link to="/articles/burnout-back-to-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群からの復職(段階的復職)</Link></li>
          <li>・<Link to="/articles/burnout-not-recovering" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽き症候群が治らない(慢性化)</Link></li>
          <li>・<Link to="/articles/human-service-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">対人援助職の燃え尽き(総合解説)</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">構造を理解する</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/structural-counseling-method" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">構造整理型カウンセリングとは</Link></li>
          <li>・<Link to="/articles/why-self-care-doesnt-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">セルフケアが効かない理由</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">関連する状態</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/exhausted-by-being-nice" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">優しい人が壊れる</Link></li>
          <li>・<Link to="/articles/emotional-labor-unaware" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自分は感情労働していない(気づかない構造)</Link></li>
          <li>・<Link to="/articles/parenting-burnout" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">育児バーンアウト</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          カウンセリングは「合う・合わない」がはっきり分かれます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「気合いで治そう」をやめて、構造を変えたい方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          一人で抱え続けるより、外から整理する場を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          燃え尽きの回復は「何かをする」より「何をしないか」を決めることが鍵です。一人で見えにくい構造を、専門家と整理することで、回復への道筋が見えてきます。
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

      <ArticleFooterLinks type="burnout" exclude={["/articles/burnout-recovery-methods"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は対人援助職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

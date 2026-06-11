import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "帰宅後、ぐったりして話しかけても上の空です。私(家族)に冷たくなったのでしょうか?",
    a: "多くの場合、愛情の問題ではなくエネルギーの問題です。支援職は一日中、人の感情を受け止め、自分の感情を管理しながら働いています（感情労働）。帰宅した時点で「感情の余力」が使い果たされていると、いちばん安心できる家族の前でこそ、無表情・無反応になりやすいのです。家であなたに気を遣わずにいられること自体が、信頼の証である場合も少なくありません。",
  },
  {
    q: "仕事のことを全然話してくれません。聞き出したほうがいいですか?",
    a: "無理に聞き出すのは、逆効果になりやすいです。守秘義務で話せない内容が多いこと、話すこと自体が「仕事の再体験」になって消耗することが理由です。おすすめは「話したくなったら聞くよ」と扉を開けておきつつ、話さない自由も保障することです。逆に、延々と仕事の話が止まらない場合は、頭が仕事から切り替えられていないサインなので、否定せずに聞きながら、一緒に別の活動（散歩・食事）に移るのが助けになります。",
  },
  {
    q: "正直、「そんなに辛いなら辞めれば?」と思ってしまいます。言ってもいいですか?",
    a: "その気持ちは自然なものですが、伝え方には注意が必要です。「辞めれば?」は、本人には「自分の苦しみ方が間違っている」「理解されていない」と響きやすく、心を閉ざす引き金になりがちです。伝えるなら「辞めるかどうかより、まずあなたの体と心が心配」という順番で。仕事を続けるか辞めるかの判断は、消耗しきった状態では正しくできないため、まず回復が先、という視点を共有するのが現実的です。",
  },
  {
    q: "どんなサインが出たら、危険だと考えるべきですか?",
    a: "目安は、①眠れていない・朝起きられない日が続く、②食欲の大きな変化、③好きだったことへの興味を失う、④感情の反応が極端に乏しくなる（笑わない・泣かない）、⑤「自分はダメだ」という発言が増える、⑥仕事の話題で涙が出る・体調を崩す——などです。複数が数週間続く場合は、専門的なサポート（医療機関・カウンセリング）を検討する段階です。本人が動けないときは、家族が情報を集めて選択肢を示すことが大きな助けになります。",
  },
  {
    q: "カウンセリングを勧めたいのですが、「大丈夫」と言って動いてくれません。",
    a: "「カウンセリングに行けば?」という直接の提案は、「弱っていると思われている」と受け取られて拒否されやすいものです。ハードルの低い順に、①記事を共有する（「これ、あなたのことかと思った」）、②セルフチェックを勧める（数分で自分の状態を客観視できます）、③その結果を見て本人が必要を感じたら、相談先を一緒に探す——という段階を踏むのが現実的です。本人の決定権を尊重しながら、選択肢を見えるところに置いておくのが家族にできることです。",
  },
]

export default function HelperFamilySupport() {
  return (
    <ArticleLayout
      title="支援職の家族にできること｜帰宅後ぐったりしているパートナーへの接し方【公認心理師】"
      description="看護師・介護士・福祉職・教員のパートナーや家族が、帰宅後ぐったりしている・イライラしている・話してくれない——それは愛情の問題ではなく、感情労働による消耗の構造です。家族がやりがちな逆効果と、本当に助けになる関わり方を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/helper-family-support"
      date="2026-06-11"
      tags={["compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        この記事は、支援職本人ではなく、その隣で心配しているご家族・パートナーに向けて書いています。
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
        看護師の妻が、帰宅すると別人のように無口になる。
        介護職の夫が、休みの日は寝てばかりいる。
        教員のパートナーが、最近ずっとイライラしている。
        心配で声をかけても、「大丈夫」としか返ってこない。
      </p>

      <p>
        ——そんな日々を、隣で見ていませんか。
      </p>

      <p>
        まず、いちばん大事なことから。
        家でのその姿は、<strong>あなたへの愛情が冷めたサインではありません</strong>。
        支援職という仕事の構造が生む、消耗の現れです。
        構造がわかると、「私への態度」と受け取って傷つく代わりに、
        本当に助けになる関わり方が見えてきます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">家で、こんな様子はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・帰宅後、ぐったりして話しかけても上の空</li>
          <li>・休みの日は寝てばかり、出かける気力がない</li>
          <li>・些細なことでイライラする・急に涙もろくなった</li>
          <li>・仕事の話を全くしない、または仕事の話が止まらない</li>
          <li>・「大丈夫」と言うが、明らかに大丈夫そうではない</li>
          <li>・笑顔が減った、好きだったことをしなくなった</li>
        </ul>
      </div>

      <h2>なぜ「家でこそ」消耗が現れるのか</h2>
      <p>
        支援職（看護・介護・福祉・教育など）は、一日中、人の感情を受け止め、
        自分の感情を管理しながら働く仕事です。
        どれだけ疲れていても、利用者や患者の前では穏やかな表情を保つ——
        これは<strong>感情労働</strong>と呼ばれ、身体の疲労とは別に「感情のエネルギー」を消費します。
      </p>
      <p>
        そして、感情のエネルギーを職場で使い果たすと、
        <strong>いちばん安心できる場所——つまり家庭で、感情の余力ゼロの状態が現れます</strong>。
        無口、無表情、上の空。それは「あなたに気を遣わなくていい」と感じている証拠でもあります。
        冷たくなったのではなく、空っぽなのです。
      </p>
      <p>
        また、人の不安や苦しみを受け取り続けることで生じる<strong>共感疲労</strong>という消耗もあります。
        休んでも取れない疲れ、休日も仕事が頭から離れない様子の背景には、
        多くの場合この構造があります
        （仕組みを知りたい方は<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは</Link>、<Link to="/articles/helper-cannot-rest-on-days-off" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休みの日も休まらない理由</Link>をご覧ください）。
      </p>

      <h2>家族がやりがちな、5つの逆効果</h2>
      <p>
        心配しているからこそ、良かれと思ってかけた言葉が、
        本人を追い詰めてしまうことがあります。代表的なものを挙げます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「そんなに辛いなら、辞めれば?」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          合理的な提案に聞こえますが、本人には「自分の苦しみ方が間違っている」と響きがちです。
          多くの支援職は、仕事に誇りと責任を持ったまま消耗しています。
          辞める/続けるの二択を迫るより、「まず、あなたの心と体が心配」を先に。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「頑張って」「あなたなら大丈夫」</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          すでに限界まで頑張っている人への「頑張って」は、
          「まだ足りない」というメッセージになり得ます。
          励ましより、「もう十分頑張ってるよ」のほうが、ずっと届きます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 解決策を畳みかける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「上司に言えば?」「こうすればいいのに」——
          疲れ切った人に必要なのは、解決策の前に「聞いてもらえた」という感覚です。
          アドバイスは、求められてからで間に合います。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「私だって疲れてる」の張り合い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          あなたの疲れも本物です。でも、疲れ比べになると、お互いに話せなくなります。
          「どっちが大変か」ではなく「お互い疲れてるね、どうしようか」へ。
          あなた自身のケアは、張り合いではなく別枠で確保してください（後述します）。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 無理に聞き出す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          守秘義務で話せないことも多く、話すこと自体が仕事の再体験になって消耗する場合もあります。
          「話したくなったら、いつでも聞くよ」と扉を開けて、話さない自由も保障する——
          それが、いちばん安心できる距離です。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>本当に助けになる、5つの関わり方</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 帰宅後の「回復時間」を、そっと確保する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          帰宅直後の30分〜1時間は、感情の充電時間です。
          話しかけずにそっとしておく、一人になれる時間を責めない——
          それだけで、回復の速度が変わります。
          「無視された」ではなく「充電中」と捉え直してみてください。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 聞くときは、解決せずに聞く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          話し始めたら、評価もアドバイスも挟まず、ただ聞く。
          「それは大変だったね」だけで十分です。
          支援職は職場で常に「聞く側」です。家で「聞いてもらえる側」になれることは、
          何よりの回復資源になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「あなたのせいじゃない」を、言葉にする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          消耗した支援職の多くは、「自分が弱いから」「自分の能力が足りないから」と自分を責めています。
          実際には、人手不足や感情労働といった<strong>仕事の構造</strong>が消耗を生んでいます。
          「それはあなたが弱いんじゃなくて、仕事がそういう構造なんだよ」——
          家族からのこの一言は、専門家の百の言葉より深く届くことがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 変化のサインに、気づいておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          眠れていない、食欲の変化、好きだったことへの無関心、感情の反応が乏しい、自分を責める発言の増加——
          こうしたサインが複数、数週間続くときは、疲労の範囲を超えています。
          いちばん近くで変化に気づけるのは、専門家ではなく家族です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ サポートへの橋を、低い段差でかける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「カウンセリングに行けば?」という直接の提案は、拒否されやすいものです。
          段差を下げてください。
          まず<strong>記事を共有する</strong>（「これ、あなたのことかと思って」）。
          次に<strong>セルフチェックを勧める</strong>——
          <Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）</Link>は、本人が自分の状態を客観視する入口になります。
          数字で見えると、人は動きやすくなります。
          その先は、本人の決定権に委ねる——選択肢を見えるところに置くまでが、家族の役割です。
        </p>
      </div>

      <h2>あなた自身のケアも、忘れずに</h2>
      <p>
        最後に、これを読んでいるあなたへ。
        消耗した人を支え続けることは、それ自体が消耗する営みです。
        パートナーの不機嫌や無反応を受け止め続けるうちに、
        <strong>あなた自身が「家庭内の支援職」になっている</strong>ことがあります。
      </p>
      <p>
        あなたが倒れたら、共倒れです。
        自分の楽しみ・友人・休息を、罪悪感なく確保してください。
        支える側に余力があることが、結局、本人のいちばんの安全網になります。
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

      <h2>本人に共有できる記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">「これ、あなたのことかと思って」と送れるもの</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/helper-empathy-check" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労チェック（20項目・3分）——まずはここから</Link></li>
          <li>・<Link to="/articles/helper-cannot-rest-on-days-off" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">休みの日も休まらない——仕事が頭から離れない原因</Link></li>
          <li>・<Link to="/articles/emotion-flooding" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情に飲まれやすい支援者へ</Link></li>
          <li>・<Link to="/articles/burnout-early-signs" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">燃え尽きの初期サイン</Link></li>
          <li>・<Link to="/articles/compassion-fatigue-complete" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">共感疲労とは（総合解説）</Link></li>
        </ul>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">大切な人が、なかなか動けないとき</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          まず、チェックをひとつ届けることから
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          いしずえは、支援職（看護・介護・福祉・教育など）専門のオンラインカウンセリングです。本人が「相談するほどじゃない」と感じている段階でも、セルフチェックや記事は気軽に使えます。橋をかけるのはあなた、渡るかを決めるのは本人——その距離感で大丈夫です。
        </p>
        <Link to="/articles/helper-empathy-check" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          共感疲労チェックを本人に共有する
        </Link>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">登録不要・無料・3分 ／ 公認心理師監修</p>
      </div>

      <ArticleFooterLinks type="compassion" exclude={["/articles/helper-family-support"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。ご本人の状態が深刻な場合は、医療機関への相談をご検討ください。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "空虚感とは何ですか？",
    a: "空虚感（emptiness）とは、「自分の中に何もない」「心が空っぽに感じる」「何をやっても満たされない」という主観的な感覚のことです。心理学的には、自己機能の低下・感情の麻痺・意味感覚の喪失などが複合的に起きている状態として理解されます。一時的な疲れとは違い、休んでも回復せず、生活全般に持続する点が特徴です。",
  },
  {
    q: "空虚感とうつの違いは何ですか？",
    a: "うつでは「強い悲しみ」「絶望感」「自責感」など、感情の方向性が下向きにはっきりしています。空虚感は感情そのものが薄くなり、悲しみすら感じない・何も感じない状態が特徴です。空虚感はうつの一症状として現れることもありますが、うつと診断されない状態でも長期的に続くことがあります。",
  },
  {
    q: "空虚感はいつから始まるものですか？",
    a: "個人差が大きいですが、支援職の場合は感情労働や共感疲労の蓄積、長期間の自己抑圧の結果として徐々に現れることが多いです。「気づいたら何も感じなくなっていた」と感じる方が多く、明確な始まりがないことが特徴です。",
  },
  {
    q: "空虚感を埋めるためにはどうすればいいですか？",
    a: "「何かで埋める」アプローチは長続きしないことが多いです。買い物・食べ物・SNS・お酒などで一時的に満たしても、すぐに戻ります。回復の方向は「埋める」ではなく「感覚を取り戻す」です。身体感覚・小さな好み・微細な感情を少しずつ取り戻していくプロセスが、空虚感を内側から薄めていきます。",
  },
  {
    q: "空虚感が続くのは病気ですか？",
    a: "空虚感そのものはDSMやICDの正式な診断名ではありませんが、長期間続く場合は抑うつ・解離・自己機能の重い低下などが背景にある可能性があります。日常生活に支障が出ている場合は、医療機関やカウンセリングへの相談を検討することが助けになります。",
  },
  {
    q: "支援職に空虚感が起きやすいのはなぜですか？",
    a: "支援職は「自分の感情を抑えて相手に寄り添う」感情労働を継続することが多く、自分の感情を抑え続けるうちに「自分が何を感じているか」がわからなくなりやすい構造があります。さらに、利用者のために動き続けることで「自分のための時間・感覚」が後退し、自己機能全体が縮小していきます。これが空虚感として現れます。",
  },
]

export default function ExistentialEmptiness() {
  return (
    <ArticleLayout
      title="空虚感とは｜「何も感じない」が続く状態の正体と回復の方向【公認心理師監修】"
      description="「心が空っぽ」「何をやっても満たされない」——空虚感は単なる疲れではなく、自己機能が縮小しているサインです。支援職15年・累計300名以上の公認心理師が、空虚感の構造・うつとの違い・回復の方向を解説します。"
      url="https://www.ishizue-counseling.jp/articles/existential-emptiness"
      date="2026-05-17"
      tags={["self-function", "burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「空虚感」は、性格や考え方の問題ではなく、自己機能が縮小しているサインかもしれません。
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
        「心が空っぽに感じる」「何をやっても満たされない」「何も感じない自分が怖い」——
        そんな感覚が続いているとしたら、それは<strong>性格や気の持ちようの問題ではなく、自己機能が縮小しているサイン</strong>です。
      </p>

      <p>
        空虚感は、悲しみや怒りのような「強い感情」とは違い、<strong>感情そのものが薄くなっている状態</strong>です。
        「悲しいわけでもない、苦しいわけでもない、ただ何も感じない」——この感覚の特異さが、空虚感を「単なる疲れ」と区別する大きな手がかりになります。
      </p>

      <h2>空虚感とは——「何も感じない」が続く状態</h2>
      <p>
        空虚感（emptiness）とは、「自分の中に何もない」「心が空っぽに感じる」「生きている実感が薄い」という主観的な感覚のことです。心理学的には、次のような要素が複合的に起きている状態として理解されます。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①感情の麻痺</p>
          <p className="text-stone-600 leading-[1.9]">喜び・悲しみ・怒りといった感情が薄くなる。以前は楽しかったことに反応が起きない。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②意味感覚の喪失</p>
          <p className="text-stone-600 leading-[1.9]">「何のためにやっているのか」がわからなくなる。日常の行為に意味が感じられない。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③身体感覚の希薄化</p>
          <p className="text-stone-600 leading-[1.9]">空腹・疲労・痛みなど、身体からのサインが届きにくくなる。「自分の体なのに、自分のものという感覚が薄い」状態。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④自己感覚の希薄化</p>
          <p className="text-stone-600 leading-[1.9]">「自分が何を望んでいるか」「何が好きか」がわからなくなる。「役割としての自分」だけが残る状態。</p>
        </div>
      </div>

      <h2>空虚感と「単なる疲れ」「うつ」との違い</h2>
      <p>
        空虚感は、関連する概念と混同されやすいですが、それぞれ異なる特徴を持ちます。
      </p>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <p className="text-[11px] text-stone-500 tracking-wider mb-0.5">単なる疲れ</p>
            <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              休めば回復する一時的な消耗
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed">
            <p>睡眠・休息で回復する。「疲れている」という感覚自体ははっきりある。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <p className="text-[11px] text-stone-600 tracking-wider mb-0.5 font-medium">うつ</p>
            <p className="text-sm font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              強い悲しみ・絶望が前面に出る
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50/40">
            <p>悲しみ・絶望・自責感などの「強い感情」がはっきり感じられる。感情の方向性が下向きに明確。</p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <p className="text-[11px] text-stone-100 tracking-wider mb-0.5 font-medium">空虚感</p>
            <p className="text-sm font-medium text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              感情そのものが薄い・「何もない」状態
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50">
            <p>悲しみすら感じない。「悲しいかどうかすらわからない」「何も感じない」が続く。休んでも回復しない。</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed">
        ※ 空虚感はうつの一症状として現れることもありますが、うつと診断されない状態でも長期的に続くことがあります。<Link to="/articles/feeling-nothing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">「何も感じない」状態</Link>も関連します。
      </p>

      <h2>支援職に空虚感が起きやすい3つの構造</h2>
      <p>
        支援職・対人援助職には、空虚感を生みやすい職業特性があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">①感情労働の蓄積による「感じる自分」の縮小</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は「相手のために自分の感情を抑える」感情労働を継続することが多く、自分の感情を抑え続けるうちに「自分が何を感じているか」がわからなくなります。「感じる自分」が機能しなくなる状態が、空虚感の入口です。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">②役割同一化による「役割外の自分」の消失</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「支援者としての自分」が中心になりすぎると、それ以外の自己側面（趣味人・家族・友人としての自分）が後退します。<Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己複雑性</Link>が低下し、「役割を降りた瞬間に何も残らない」感覚が空虚感として現れます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③自己機能の全体的な低下</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「感じる・望む・休む・選ぶ」という自己機能が長期にわたって縮小すると、自分の内側に「働いている部分」が残らなくなります。<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>が深まった段階で、空虚感として体験されます。
        </p>
      </div>

      <LineCtaSmall />

      <h2>空虚感を「埋めようとする」がうまくいかない理由</h2>
      <p>
        空虚感を感じると、人はそれを埋めようとします。買い物・食べ物・SNS・お酒・人間関係——「何かで満たそう」とします。しかし<strong>「埋める」アプローチは長続きしません</strong>。
      </p>

      <p>
        理由は単純です。空虚感は「外から何かを入れる」ことで解消する種類のものではなく、<strong>「内側の感じる機能が縮小している」状態</strong>だからです。受容器が機能していないところに何を入れても、感じることができません。結果として「もっと刺激を」「もっと満たそう」と探し続けるループに入ります。
      </p>

      <p>
        さらに支援職の場合、「埋めるための活動」自体が役割のように感じられ、新たな消耗を生むことがあります。「リラックスしなければ」「楽しまなければ」と頑張る空虚感は、より深い空虚感を生みます。
      </p>

      <h2>空虚感からの回復の方向——「埋める」ではなく「感覚を取り戻す」</h2>
      <p>
        回復のアプローチは「埋める」の反対方向、つまり<strong>「感じる機能を取り戻す」</strong>ことです。これは時間がかかるプロセスですが、確実に効果があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">①身体感覚から取り戻す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          感情の前に、身体感覚から取り戻すことが効果的です。お風呂の温度・足の裏が床に触れる感覚・お茶の味——「快・不快」レベルの小さな感覚に意識を向けることが、感じる機能の再起動につながります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">②「役割外の小さな好み」を拾う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「役に立つかどうか」と無関係に、「ちょっといいな」「気になる」という小さな好みを拾い直します。コーヒーの種類・歩く道・聴く音楽——どんな小さなことでも、「自分の好み」を取り戻す練習が、自己感覚を再構築します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③「考える」より「感じる」時間を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職は思考が過剰になりやすい職業です。「これをすべきか」「正しいか」と考え続けるうちに、感覚が遠ざかります。意識的に「考えない・ただ感じるだけ」の時間を持つことが、感じる機能の回復を促します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④「外から整理する」場を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          空虚感を一人で言語化するのは難しい状態です。「何が起きているか」「何を感じているか」を外から整理してもらう場（カウンセリング・スーパービジョン・信頼できる第三者）を持つことが、感覚を取り戻す速度を上げます。
        </p>
      </div>

      <h2>空虚感がこのレベルなら相談を検討</h2>
      <p>
        次のような状態が続く場合は、一人で抱え込まず、外からの整理を検討してください。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・「何も感じない」状態が2週間以上続いている</p>
        <p>・日常生活が「ただ流れていく」感覚が続く</p>
        <p>・以前楽しめたことに反応が起きない</p>
        <p>・身体感覚（空腹・疲労・痛み）が薄い</p>
        <p>・自分が何を望んでいるかわからない</p>
        <p>・「消えてしまいたい」「いなくなりたい」感覚がある</p>
      </div>
      <p className="text-xs text-stone-400 mt-3">
        ※特に最後の項目に該当する場合は、医療機関への相談を優先してください。
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「何も感じない」段階からでも大丈夫です</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          空虚感を埋めるのではなく、感覚を取り戻す対話を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          支援職特有の感情労働と自己機能低下を理解した上で、空虚感の構造を一緒に整理します。「何かを足す」のではなく、「縮んだ感じる機能を回復する」ためのカウンセリングです。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/existential-emptiness"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

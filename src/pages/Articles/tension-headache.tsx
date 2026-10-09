import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "緊張型頭痛とはどんな頭痛ですか?",
    a: "頭全体や後頭部、こめかみのあたりが、締めつけられるように・圧迫されるように痛む頭痛です。ズキンズキンと脈打つ痛みではなく、歩く・階段を上るといった日常の動作で悪化しにくいのが特徴です。吐き気はほとんどありません。頭痛の中で最も多いタイプです。",
  },
  {
    q: "緊張型頭痛の原因は何ですか?",
    a: "長時間同じ姿勢を続けること、首や肩の筋肉のこわばり、目の疲れ、睡眠不足、そして精神的なストレスや緊張が重なって起こると考えられています。体が緊張し続けると筋肉の血流が悪くなり、痛みを感じる神経も敏感になっていきます。",
  },
  {
    q: "片頭痛との違いは何ですか?",
    a: "片頭痛は、ズキンズキンと脈打つような痛みが多く、体を動かすと悪化し、吐き気や光・音への過敏を伴うことがあります。痛みの間は動けなくなることも少なくありません。緊張型頭痛は締めつけるような痛みで、動いても悪化しにくく、仕事を続けられる程度のことが多いです。両方を併せ持つ人もいるため、判断は医師に相談してください。",
  },
  {
    q: "市販の鎮痛薬を飲み続けても大丈夫ですか?",
    a: "注意が必要です。頭痛薬を月に10〜15日以上、3か月を超えて飲み続けると、薬そのものが頭痛を起こす「薬物乱用頭痛(薬剤の使用過多による頭痛)」になることがあります。薬を飲む日が増えてきたら、自己判断で続けずに、頭痛外来や脳神経内科などに相談してください。",
  },
  {
    q: "すぐに病院に行くべき頭痛はありますか?",
    a: "あります。突然の激しい頭痛、今までに経験したことのない頭痛、発熱やけいれん・意識の異常・手足のしびれやまひ・ろれつが回らないなどを伴う頭痛、どんどん悪化していく頭痛は、すぐに医療機関を受診してください。必要に応じて救急車を呼んでください。",
  },
  {
    q: "カウンセリングで頭痛は良くなりますか?",
    a: "頭痛の診断と治療は医師が行います。そのうえで、緊張型頭痛の背景にある「気を張り続ける働き方」や、休めない・頼れないといった心理的なパターンを整理することは、心理面からできる支援です。リラクセーションや認知行動療法などの心理的なアプローチが、頭痛の管理に役立つことも知られています。",
  },
]

export default function TensionHeadache() {
  return (
    <ArticleLayout
      title="緊張型頭痛とストレス｜夕方になると頭が締めつけられる支援職へ、原因と悪循環を公認心理師が解説"
      description="記録を書き終える夕方、頭全体がギューッと締めつけられる——緊張型頭痛は、姿勢・目の疲れ・ストレスによる体の緊張が重なって起こる、最も多い頭痛です。片頭痛との違い、すぐ受診すべき危険な頭痛、鎮痛薬の飲みすぎによる頭痛、気を張り続ける働き方との関係を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/tension-headache"
      date="2026-10-09"
      tags={["burnout", "compassion"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        夕方になると、頭がヘルメットで締めつけられるように重くなる。休日の朝には治っている——そんな頭痛が続いていませんか。
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
        利用者対応が続いた日の午後、頭の後ろからこめかみにかけて、じわじわと締めつけられる。
        記録を書き終えるころには、首も肩もガチガチ。
        鎮痛薬を飲めば少し楽になるけれど、気づけば飲む日が増えている——。
      </p>
      <p>
        <strong>緊張型頭痛</strong>は、頭痛の中で最も多いタイプです。
        長時間の同じ姿勢、目の疲れ、そして<strong>精神的な緊張で体がこわばり続けること</strong>が重なって起こります。
        この記事では、緊張型頭痛の特徴と片頭痛との違い、すぐに受診すべき危険な頭痛、
        そして「気を張り続ける働き方」との関係を整理します。
      </p>

      <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200 mt-2">
        ※ 頭痛が続く方は、まず内科・脳神経内科・頭痛外来などを受診してください。この記事は心理的な側面からの解説であり、診断や治療に代わるものではありません。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・<strong>すぐに受診すべき危険な頭痛</strong></li>
          <li>・緊張型頭痛の特徴と、片頭痛との違い</li>
          <li>・ストレスが頭痛になるしくみ</li>
          <li>・<strong>鎮痛薬の飲みすぎで起こる頭痛</strong></li>
          <li>・支援職に起きやすい理由と、心理面からできること</li>
        </ul>
      </nav>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんなことはありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・頭全体や後頭部が、締めつけられるように重く痛む</li>
          <li>・夕方や、パソコン作業・記録のあとにひどくなる</li>
          <li>・首や肩のこり、目の疲れがいつもある</li>
          <li>・痛くても、仕事は何とか続けられてしまう</li>
          <li>・休日やゆっくりした日は、比較的楽になる</li>
          <li>・鎮痛薬を飲む日が、前より増えている</li>
        </ul>
      </div>

      <h2>まず確かめたい、すぐに受診が必要な頭痛</h2>
      <p>
        頭痛の多くは命に関わらないものですが、中には<strong>脳の病気などのサインになっている頭痛</strong>があります。
        次のような場合は、セルフケアを考える前に、すぐに医療機関を受診してください。
      </p>
      <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-1.5 text-sm text-stone-700 my-4">
        <p>・突然起こった、激しい頭痛</p>
        <p>・今までに経験したことのない頭痛</p>
        <p>・発熱、けいれん、意識がぼんやりするなどを伴う</p>
        <p>・手足のしびれ・まひ、ろれつが回らない、物が二重に見えるなどを伴う</p>
        <p>・日に日に、どんどん悪化していく</p>
        <p>・頭を打ったあとに起きた</p>
        <p className="text-xs text-stone-500 pt-1">※ 症状が強いときは、ためらわず救急車を呼んでください。</p>
      </div>
      <p className="text-sm text-stone-600">
        これらに当てはまらなくても、頭痛が続く場合は一度受診し、頭痛のタイプを確かめておくことが、
        安心して心理面に取り組むための土台になります。
      </p>

      <h2>緊張型頭痛の特徴</h2>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・頭の両側や後頭部、頭全体が<strong>締めつけられる・圧迫される</strong>ように痛む</p>
        <p>・ズキンズキンと脈打つ痛みではない</p>
        <p>・歩く・階段を上るなど、<strong>日常の動作で悪化しにくい</strong></p>
        <p>・吐き気はほとんどない</p>
        <p>・痛みは軽〜中程度で、仕事や家事は続けられることが多い</p>
        <p>・首や肩のこり、目の疲れを伴いやすい</p>
      </div>
      <p>
        たまに起こる程度の人から、月の半分以上、ほぼ毎日続く人(慢性緊張型頭痛)までさまざまです。
        頻度が高くなるほど、ストレスや体の緊張との結びつきが強くなっていることがあります。
      </p>

      <h2>片頭痛との違い</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        <div className="card">
          <p className="text-sm font-medium text-stone-700 mb-2">緊張型頭痛</p>
          <ul className="text-sm text-stone-600 space-y-1 leading-[1.8]">
            <li>・締めつけられる痛み</li>
            <li>・頭の両側・全体</li>
            <li>・動いても悪化しにくい</li>
            <li>・吐き気はほとんどない</li>
            <li>・仕事は続けられることが多い</li>
          </ul>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-stone-700 mb-2">片頭痛</p>
          <ul className="text-sm text-stone-600 space-y-1 leading-[1.8]">
            <li>・ズキンズキンと脈打つ痛み</li>
            <li>・片側に出ることが多い</li>
            <li>・動くと悪化する</li>
            <li>・吐き気、光や音への過敏</li>
            <li>・寝込むほどになることも</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-stone-600">
        片頭痛は、ストレスから解放された週末に起こることもあります。
        両方を併せ持つ人もいて、治療法も異なるため、タイプの判断は医師に相談してください。
      </p>

      <h2>ストレスが頭痛になるしくみ</h2>
      <p>
        緊張型頭痛は、<strong>体の緊張と心の緊張が重なって</strong>起こると考えられています。
      </p>
      <div className="card space-y-1.5 text-sm text-stone-600">
        <p>・ストレスや緊張が続くと、首・肩・頭の周りの筋肉がこわばる</p>
        <p>・筋肉の血流が悪くなり、痛みを起こす物質がたまりやすくなる</p>
        <p>・緊張状態が長引くと、痛みを感じる神経そのものが敏感になっていく</p>
        <p>・痛みがあること自体がストレスになり、さらに体がこわばる</p>
      </div>
      <p>
        つまり、「頭痛がするのは気のせい」ではなく、<strong>緊張し続けた体が実際に出している痛み</strong>です。
        そして、痛みが慢性化するほど、体の側だけでなく、緊張を生み続けている生活や働き方の側にも目を向ける必要が出てきます。
        体の緊張が抜けにくくなるしくみは
        <Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link>
        でも解説しています。
      </p>

      <LineCtaFatigue />

      <h2>鎮痛薬の飲みすぎで起こる頭痛に注意</h2>
      <p>
        つらい頭痛に鎮痛薬を使うのは自然なことです。ただし、<strong>飲む日が増えすぎると、薬そのものが頭痛を起こす</strong>ことがあります。
        これを「薬物乱用頭痛(薬剤の使用過多による頭痛)」と呼びます。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">目安</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・もともと頭痛持ちの人が、頭痛のある日が月15日以上</li>
          <li>・市販の鎮痛薬を<strong>月15日以上</strong>、または複数の成分を含む鎮痛薬やトリプタンなどを<strong>月10日以上</strong>使っている</li>
          <li>・その状態が<strong>3か月を超えて</strong>続いている</li>
        </ul>
      </div>
      <p>
        「痛くなる前に念のため飲んでおく」が習慣になっていると、知らないうちにこの状態に近づいていることがあります。
        薬を飲む日が増えてきたら、自己判断で続けたり急にやめたりせず、頭痛外来や脳神経内科に相談してください。
      </p>

      <h2>支援職に起きやすい理由</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 気を張り続ける時間が長い</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者の変化を見逃さないよう、常に周囲に注意を向けている。いつ何が起きてもおかしくない現場では、
          体は休まず「警戒モード」のままになりがちです
          (<Link to="/articles/always-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">いつも気が張っている状態</Link>)。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情を抑えながら働いている</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          理不尽な場面でも笑顔を保ち、怒りや不安を表に出さない。感情を抑え込む働き方は、
          そのぶん体のこわばりとして残りやすくなります
          (<Link to="/articles/suppressing-emotions-at-work" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">仕事で感情を抑え続ける心理</Link>)。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 記録・事務作業で同じ姿勢が続く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の合間や終業後に、パソコンで記録を書き続ける。前かがみの姿勢と目の疲れは、
          それだけで緊張型頭痛の要因になります。脳の疲れも重なりやすい時間帯です
          (<Link to="/articles/helper-brain-fatigue" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職の脳疲労</Link>)。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 「この程度で休めない」と後回しにする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          緊張型頭痛は、仕事を続けられてしまう程度の痛みであることが多いぶん、我慢が続きやすい頭痛です。
          受診を後回しにし、薬でしのぎ続けるうちに、慢性化していくことがあります
          (<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link>)。
        </p>
      </div>

      <h2>心理面からできること</h2>
      <p>
        頭痛の診断と治療は医師の領分です。そのうえで、日常の中でできることがあります。
      </p>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 頭痛日記をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          いつ、どんな場面のあとに、どのくらい痛んだか。薬を飲んだ日はいつか。
          記録すると、頭痛が起こりやすい場面や、薬を使う頻度が見えてきます。受診の際にも役立ちます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 緊張を「ほどく」時間を、意図的に挟む</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          記録の合間に肩を回す、ゆっくり息を吐く、画面から目を離す。数十秒でも、体が緊張から抜ける時間を挟むことで、
          こわばりがたまり続けるのを防ぎます。筋肉に力を入れてから緩める「漸進的筋弛緩法」も、
          緊張を自覚しやすくする方法として知られています。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「力が入っている自分」に気づく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          歯を食いしばっている、肩が上がっている、呼吸が浅い。緊張が当たり前になっていると、
          力が入っていること自体に気づけなくなります。体の感覚に目を向ける練習は、
          頭痛の予防だけでなく、自分の限界に早く気づくことにもつながります
          (<Link to="/articles/body-sensation-unknown" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">体の感覚がわからない</Link>)。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 頭痛を「働き方のサイン」として受け取る</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          頭痛が毎日のように続くなら、それは体が「この働き方は限界に近い」と伝えているのかもしれません。
          痛みを薬で消すだけでなく、気を張り続ける状況そのものを見直すことが、根本的な対処になります。
        </p>
      </div>

      <div className="my-4 p-4 rounded-xl" style={{ background: "rgba(143,175,159,0.06)", border: "1px solid rgba(143,175,159,0.35)" }}>
        <p className="text-sm text-stone-700 leading-[1.9] mb-1.5">ストレスが体のどこに出ているか、20項目で確認できます。</p>
        <Link to="/articles/psychosomatic-check" className="inline-block text-sm font-medium underline underline-offset-2 text-stone-700 hover:text-stone-900">→ ストレスによる体の症状チェック(20項目・3分)</Link>
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">ストレスが体に出るしくみ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/psychosomatic-what" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">心身症とは——ストレスが体に出るしくみ</Link></li>
          <li>・<Link to="/articles/autonomic-dysfunction" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自律神経失調症とは</Link></li>
          <li>・<Link to="/articles/ibs-stress" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">過敏性腸症候群とストレス</Link></li>
          <li>・<Link to="/articles/globus-sensation" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">咽喉頭異常感症とストレス</Link></li>
          <li>・<Link to="/articles/body-stays-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">なぜ休んでも緊張が抜けないのか</Link></li>
        </ul>
        <p className="font-medium text-stone-700 mb-2 mt-4">気を張り続ける働き方</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/always-tense" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">いつも気が張っている状態</Link></li>
          <li>・<Link to="/articles/helper-self-neglect" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">支援職のセルフネグレクト</Link></li>
          <li>・<Link to="/articles/burnout-which-clinic" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">何科に相談すればいいか</Link></li>
        </ul>
      </div>

      {/* マッチング誘導ブロック */}
      <div className="p-4 rounded-xl mb-3 mt-6" style={{ background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
        <p className="text-[10px] font-medium mb-1.5 tracking-wider" style={{ color: "#c4904a" }}>カウンセリングを検討する前に</p>
        <p className="text-sm text-stone-700 leading-[1.9] mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          いしずえカウンセリングが、あなたに合うかどうか
        </p>
        <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
          体の治療と並行して、気を張り続ける働き方や、休めない・頼れないパターンを整理することができます。
          10項目で相性を確認できます(合わないと出たら別の選択肢も案内しています)。
        </p>
        <Link to="/articles/counseling-matching-check"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-stone-700 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all bg-white">
          合う人・合わない人チェック(10項目)を見る →
        </Link>
      </div>

      <ArticleFooterLinks type="symptom" exclude={["/articles/tension-headache"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに、国際頭痛分類・医学事典などの資料を参照して作成した一般向けの解説です。医学的な診断・治療ではありません。症状がある場合は、まず医療機関を受診してください。
      </div>
    </ArticleLayout>
  )
}

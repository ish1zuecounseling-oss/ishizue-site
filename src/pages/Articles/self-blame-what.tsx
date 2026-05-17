import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "自責感とは何ですか?",
    a: "自責感とは、自分を責める感情・感覚のことです。「自分がいけなかった」「自分のせいだ」という思考が繰り返される状態で、失敗・トラブル・他者の否定的な反応などをきっかけに強まります。一時的な自責感は誰にでも起きますが、慢性化すると消耗・抑うつ・自己機能低下につながることがあります。",
  },
  {
    q: "自責感が強いのはなぜですか?",
    a: "自責感が強くなりやすい背景には、幼少期から「自分が悪いから相手は怒る」「自分が頑張れば丸く収まる」というパターンを学習してきた歴史がある場合が多いです。これはワーキングモデル(内的作業モデル)として無意識に定着し、大人になっても「問題が起きたら自分のせい」という解釈パターンが自動的に作動します。",
  },
  {
    q: "自責感と罪悪感の違いは何ですか?",
    a: "罪悪感は「自分がした行動に問題があった」という感覚です。一方、自責感はより広く「自分という存在に問題がある」「自分がダメだから悪いことが起きた」という、行動ではなく存在全体への否定を含む感覚です。罪悪感は適切なら行動修正につながりますが、自責感は存在否定に向かいやすく、消耗が深くなりやすい傾向があります。",
  },
  {
    q: "支援職に自責感が強い人が多いのはなぜですか?",
    a: "支援職は「相手のために最善を尽くす」という職業倫理を強く持ちます。支援がうまくいかないとき・利用者に否定されたとき・問題が解決しないとき、「自分の力不足」「自分の判断が悪かった」という自責が起きやすい構造にあります。さらに感情労働によって自分の感情を抑制していると、その分だけ自責のループが内側に向かいやすくなります。",
  },
  {
    q: "自責感は変えられますか?",
    a: "変えられます。ただし「自分を責めないようにしよう」という意志力だけでは難しく、背景にある思考パターン(ワーキングモデル)を整理することが重要です。「問題が起きたとき、なぜ自分のせいだと感じるのか」という構造を理解することで、自動的な自責のループが和らいでいきます。",
  },
  {
    q: "自責感が強いときにやめた方がいいことは?",
    a: "「もっと頑張ろう」「次は失敗しないようにしよう」という方向に頑張ることは、自責感が強い状態ではかえって消耗を深めることがあります。また、自責の感情を一人で抱え込み続けることも悪化させやすい傾向があります。まず「自分を責めすぎている」ということに気づくこと、そして外から整理する場を持つことが優先になります。",
  },
]

export default function SelfBlameWhat() {
  return (
    <ArticleLayout
      title="自責感とは?強い自責感が止まらない理由と支援職に多い構造【公認心理師監修】"
      description="自責感とは「自分のせいだ」という感覚が繰り返される状態です。なぜ自責感が強くなるのか・支援職に多い理由・罪悪感との違い・止まらない自責ループの構造を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/self-blame-what"
      date="2026-05-18"
      tags={["self-function", "burnout", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「また自分のせいだ」「自分がいけなかった」——その感覚が止まらないとき、それは<strong>自責感</strong>という心理構造から起きています。
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

      {/* ▼ カニバリ解消:支援職特化記事への誘導 */}
      <div className="my-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-[11px] text-stone-500 mb-1.5 tracking-wide">この記事は「自責感」の一般的な解説です</p>
        <p className="text-xs text-stone-600 leading-relaxed">
          支援職特有の自責の構造については
          <Link to="/articles/helper-self-blame" className="underline underline-offset-2 text-stone-700 hover:text-stone-900 mx-1 font-medium">
            支援職の自責感(職業特性からの解説)
          </Link>
          にまとめています。本記事では自責感そのものの心理メカニズムを中心に解説します。
        </p>
      </div>

      <p>
        「あのとき自分がああすればよかった」「自分のせいでこうなった」「また自分のせいだ」——
        こうした思考が繰り返されることを<strong>自責感</strong>と呼びます。
      </p>
      <p>
        自責感は誰にでも起きますが、それが慢性化・強化されていくと、消耗・抑うつ・自己機能の低下につながることがあります。
        特に支援職・対人援助職は、自責感が強くなりやすい職業構造の中にいます。
      </p>

      <nav className="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
        <p className="font-medium text-stone-500 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-stone-600 list-none pl-0">
          <li>・自責感とは何か(罪悪感との違い)</li>
          <li>・なぜ自責感が止まらなくなるのか(心理メカニズム)</li>
          <li>・支援職に自責感が多い理由(構造的な視点)</li>
          <li>・自責感が深まるサイン(3段階)</li>
          <li>・自責ループから抜けるための整理の方向</li>
        </ul>
      </nav>

      <h2>自責感とは何か——罪悪感との違い</h2>
      <p>
        自責感と罪悪感は混同されやすいですが、心理的には異なります。
      </p>
      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">罪悪感(Guilt)</p>
          <p className="text-stone-600 leading-[1.9]">
            「自分がした<strong>行動</strong>に問題があった」という感覚です。
            「あの発言は傷つけてしまった」「もっと丁寧に対応すべきだった」——
            行動の修正につながる方向に機能することもあります。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">自責感(Self-blame)</p>
          <p className="text-stone-600 leading-[1.9]">
            「自分という<strong>存在</strong>に問題がある」という感覚です。
            「自分がダメだから悪いことが起きた」「自分さえいなければよかった」——
            行動ではなく存在全体への否定に向かいやすく、消耗が深くなりやすい傾向があります。
          </p>
        </div>
      </div>
      <p>
        自責感が慢性化すると、「何が起きても自分のせい」という認知パターンが固定化し、
        <Link to="/articles/zeigarnik-depression" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>と組み合わさってループが止まらなくなることがあります。
      </p>

      <h2>なぜ自責感は止まらなくなるのか</h2>
      <p>
        自責感が慢性化するのは、意志の弱さや性格の問題ではありません。
        背景には<strong>心理的な構造</strong>があります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① ワーキングモデルによる自動解釈</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          幼少期から「問題が起きたら自分のせい」というパターンを学習してきた場合、
          それが<Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル(内的作業モデル)</Link>として定着します。
          大人になっても、問題が起きた瞬間に「自分が悪い」という解釈が自動的に作動します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 反芻思考との悪循環</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分のせいだ」という思考が浮かぶ→それを繰り返し思い返す→答えが出ない→また考える、という
          <Link to="/articles/zeigarnik-depression" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">反芻思考</Link>のループに入ります。
          「次はどうすれば」と解決策を考えようとするほど、自責の材料が増えていきます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ ネガティブ自己複雑性の肥大</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自責感が積み重なると「対応が悪い自分」「判断力が低い自分」「役に立てない自分」など、
          否定的な自己側面が細かく分化していきます。
          <Link to="/articles/self-complexity" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ネガティブ自己複雑性</Link>が肥大すると、
          一つの失敗が「全部ダメな自分」として連鎖しやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自己機能の低下による悪化</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自責感が続くと「自分が何を感じているか」「何を望んでいるか」にアクセスしにくくなります。
          これは<Link to="/articles/self-function-decline" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">自己機能低下</Link>のサインで、
          この状態では自責を一人で整理することがさらに難しくなります。
        </p>
      </div>

      <h2>支援職に自責感が強い人が多い理由</h2>
      <p>
        支援職・対人援助職は、構造的に自責感が強まりやすい環境にあります。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「うまくいかなかった=自分の力不足」が刷り込まれやすい</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職では、支援の結果が利用者の状態として「見える化」されます。
          状態が改善しないとき・問題が起きたとき、「自分の対応が悪かった」という解釈に向かいやすい職業文化があります。
          本来は利用者の状況・環境・制度など多くの要因が絡むにもかかわらず、自分側の問題として引き受けてしまうことがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 感情労働が自責を内向きにする</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          <Link to="/articles/emotional-labor-what-pillar" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">感情労働</Link>によって感情を抑制している支援職は、
          怒り・不満・悲しみを外に出せない分、それが内側に向かいます。
          「利用者に怒りを感じた自分が悪い」「割り切れない自分がダメ」という自責が生まれやすくなります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 「弱音を言えない」文化が孤立を深める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援職には「自分が頑張るべき」という職場文化があります。
          自責感を誰かに話すことが「弱さ」として捉えられることへの恐れから、一人で抱え込み続けるパターンが定着しやすくなります。
          話せないまま自責が蓄積することで、消耗が深まっていきます。
        </p>
      </div>

      <h2>自責感が深まる3つの段階</h2>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500 tracking-wider">LEVEL 1</span>
              <span className="text-[11px] text-stone-500">一時的な自責</span>
            </div>
            <p className="text-sm font-medium text-stone-800 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「あのときどうすればよかったか」と一時的に考える
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed space-y-1.5">
            <p>・失敗した直後に「なぜこうしたのか」と振り返る</p>
            <p>・数日経てば気持ちが切り替わる</p>
            <p>・「次はこうしよう」と前向きな方向に向かえる</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-600 tracking-wider font-medium">LEVEL 2</span>
              <span className="text-[11px] text-stone-600">自責ループが定着する段階</span>
            </div>
            <p className="text-sm font-medium text-stone-900 mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「また自分のせいだ」が止まらない
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50/40">
            <p>・失敗した場面が繰り返し頭に浮かぶ</p>
            <p>・「自分がいけなかった」という結論が先に出る</p>
            <p>・他の可能性(環境・相手の状況)が見えにくくなる</p>
            <p>・「自分はダメだ」という感覚が強まっている</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと:</strong>自責の構造を外から整理する場が有効です。一人で考え続けるとループが深まりやすくなります。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-100 tracking-wider font-medium">LEVEL 3</span>
              <span className="text-[11px] text-stone-200">存在否定まで進んだ段階</span>
            </div>
            <p className="text-sm font-medium text-white mt-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「自分の存在自体が問題」という感覚
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed space-y-1.5 bg-stone-50">
            <p>・「自分がいるから迷惑をかける」という感覚</p>
            <p>・何もしていない状態でも「自分が悪い」と感じる</p>
            <p>・自分の感情・判断・感覚が信じられない</p>
            <p>・身体症状(不眠・食欲不振・頭痛)が出ている</p>
            <p className="pt-2 mt-2 border-t border-stone-200 text-stone-800">
              <strong className="text-stone-900">この段階で必要なこと:</strong>一人で整理することは難しい状態です。カウンセリングや医療機関への相談を検討してください。
            </p>
          </div>
        </div>
      </div>

      {/* ▼ 安全配慮ブロック(強化版) */}
      <div className="text-xs text-stone-700 mt-3 p-3.5 rounded-lg" style={{ background: "#FFF8E7", border: "1px solid #F0E0B0" }}>
        <p className="font-medium text-stone-800 mb-1">「消えたい」「いなくなりたい」という感覚が続く方へ</p>
        <p className="leading-relaxed">
          一人で抱え込まず、専門の窓口に相談できます。あなたの状態を判断するためではなく、ただ話を聞くために存在している場所です。
        </p>
        <ul className="mt-1.5 space-y-0.5 leading-relaxed">
          <li>・よりそいホットライン:<strong>0120-279-338</strong>(24時間・無料・年中無休)</li>
          <li>・いのちの電話:<strong>0570-783-556</strong>(10時〜22時)</li>
          <li>・精神科・心療内科への相談も選択肢です</li>
        </ul>
      </div>

      <LineCtaCompassion />

      <h2>「自分を責めないようにしよう」ではなぜ変わらないのか</h2>
      <p>
        自責感に気づいた人がよくやることが「自分を責めないようにしよう」と頑張ることですが、
        これは多くの場合うまくいきません。
      </p>
      <div className="card space-y-2 text-sm text-stone-600">
        <p>・「責めないようにしよう」と思うこと自体が自責の材料になる(「責めてしまった自分がダメ」)</p>
        <p>・意志力でパターンを変えようとしても、ワーキングモデルは無意識に作動するため届かない</p>
        <p>・強い自責感の状態では、判断力・思考の柔軟性が落ちている</p>
      </div>
      <p>
        自責感を和らげるには、「責めないようにする」ではなく、
        <strong>「なぜ自分を責めるパターンが作られたのか」という構造を理解する</strong>ことが先決です。
      </p>

      <h2>自責ループから抜けるための整理の方向</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「事実」と「解釈」を分ける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「Aさんが怒った」は事実ですが、「だから自分がいけなかった」は解釈です。
          まず「起きたこと」と「自分がそれをどう解釈しているか」を分けるだけで、
          自責の密度が少し下がることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「自分だけの問題か」を問い直す</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          問題が起きたとき、原因は複数あることがほとんどです。
          「自分の対応」以外に関係していた要因を書き出してみると、
          「全部自分のせい」という認知が少し緩むことがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自責の「背景の問い」を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「なぜ自分はこんなに自分を責めるのか」という問いを持つことで、
          自責感そのものを観察する距離が生まれます。
          <Link to="/articles/working-model" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">ワーキングモデル</Link>という概念で整理すると、
          「これは幼少期から身についたパターンだ」と客観視できることがあります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 自責感を外に出す場を持つ</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          自責感は一人で抱え込んでいるほど増幅しやすいものです。
          信頼できる第三者・カウンセリングなど、安全に「自責している自分」を言語化できる場を持つことが、
          回復の現実的な経路の一つになります。
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

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「また自分のせいだ」が止まらない方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          自責のループは、構造が見えると緩みます
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          自責感が強い状態は、意志力で変えようとするほど消耗します。まず「なぜそうなるのか」を外から整理することが、最も近い回復の経路です。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる(初回無料)
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/self-blame-what"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験(公認心理師・障害福祉15年・累計300名以上)をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

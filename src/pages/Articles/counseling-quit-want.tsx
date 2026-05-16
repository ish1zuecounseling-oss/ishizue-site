import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "カウンセリングをやめたいと感じるのは普通ですか？",
    a: "ごく自然な感覚です。「もうやめたい」と感じることは、カウンセリングを受けている方の多くが一度は経験します。これは「カウンセリングが合っていない」サインの場合もあれば、逆に「本質的な話に近づいている」サインの場合もあります。どちらかは状況によって異なるため、整理する価値があります。",
  },
  {
    q: "カウンセラーと合わない気がするのですが、伝えていいですか？",
    a: "伝えて大丈夫です。むしろ、率直に伝えることでカウンセリング関係が深まることが多くあります。「実は引っかかっていたことがあって」「この前の○○の発言が気になっていて」と切り出すと、カウンセラーが調整できることがあります。それでも変わらない場合は、別のカウンセラーを探す選択肢もあります。",
  },
  {
    q: "効果を感じないからやめたいのですが、続ける意味はありますか？",
    a: "「効果」の捉え方を一度整理することが助けになります。劇的な変化を期待していると効果が感じにくいですが、「ぐるぐる考えるループが少し止まった」「自分の状態を言語化できるようになった」など、小さな変化は起きていることがあります。カウンセラーに「効果を感じない」と直接伝えてみることも、対話を進める手がかりになります。",
  },
  {
    q: "話していて余計につらくなります。やめたほうがいいですか？",
    a: "状況により判断が分かれます。「カウンセラーの対応が原因でつらい」なら、カウンセラー変更を検討する価値があります。一方、「触れたくなかった話に触れていて、その過程でつらい」なら、それはカウンセリングが進んでいるサインで、続けることで先が見える可能性があります。この区別自体をカウンセラーに伝えると整理しやすくなります。",
  },
  {
    q: "「言いたいことがもうない」状態は、終結ですか？合っていないですか？",
    a: "両方の可能性があります。「相談したいことが整理できて、もう話したいことがない」なら健全な終結です。「カウンセラーに話しにくくて、話す気が起きない」なら相性の問題かもしれません。話さない時間にも価値があると感じるか、行くのが負担に感じるかが判断の手がかりになります。",
  },
  {
    q: "カウンセリング自体に意味を感じなくなりました。",
    a: "その感覚自体に意味があります。「カウンセリングに意味を感じない」という気持ちは、多くの場合「今の自分の状態にカウンセリングが合っていない」「今のカウンセラーとは合わない」「カウンセリング以外の支援が必要な段階」のいずれかのサインです。一度立ち止まって、何が必要な状態なのかを整理する価値があります。",
  },
]

export default function CounselingQuitWant() {
  return (
    <ArticleLayout
      title="カウンセリングをやめたい——合わない・効果を感じない・つらいときの整理【公認心理師】"
      description="「カウンセラーと合わない」「効果がない」「話していてつらい」——カウンセリングをやめたいと感じるのは自然なことです。続けるべきサイン・やめてもいいサインを、支援職15年・累計300名以上の公認心理師が整理します。"
      url="https://www.ishizue-counseling.jp/articles/counseling-quit-want"
      date="2026-05-17"
      tags={["counseling", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「やめたい」と感じる気持ちは、合わないサインの場合もあれば、進んでいるサインの場合もあります。
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
        「もうカウンセリングをやめたい」「効果を感じない」「カウンセラーと合わない気がする」「行くのが億劫で仕方ない」——
        そんな気持ちが続いているとしたら、立ち止まって整理する価値があります。
      </p>

      <p>
        この記事では、「カウンセリングをやめたい」が<strong>「合わないサイン」なのか「進んでいるサイン」なのか</strong>を区別し、どちらの場合にどう動けばいいかを整理します。
      </p>

      <p className="text-sm text-stone-500 leading-relaxed">
        ※「やめるタイミング」全般については
        <Link to="/articles/counseling-end-timing" className="underline underline-offset-2 text-stone-600 hover:text-stone-900">カウンセリングをやめるタイミング</Link>
        も参考にしてください。
      </p>

      <h2>「やめたい」には2つの種類がある</h2>
      <p>
        まず「やめたい気持ち」を2つに分けて捉えてみてください。
      </p>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <p className="text-[11px] text-stone-500 tracking-wider mb-0.5">タイプA</p>
            <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              合わないサインとしての「やめたい」
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed">
            <p>カウンセラーとの相性・専門性・進め方が今の自分に合っていないことを示すサイン。別のカウンセラー、または別の支援を検討する価値あり。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <p className="text-[11px] text-stone-600 tracking-wider mb-0.5 font-medium">タイプB</p>
            <p className="text-sm font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              進んでいるサインとしての「やめたい」
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50/40">
            <p>触れたくなかった話に近づいている、自己防衛の反応として「やめたい」気持ちが出ている可能性。続けることで先が見えることが多い。</p>
          </div>
        </div>
      </div>

      <h2>タイプAのサイン——合わない可能性が高い</h2>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①話したことが整理されている感覚がない</p>
          <p className="text-stone-600 leading-[1.9]">3〜5回受けても、話したことが言語化されたり整理されたりしている実感がない。「ただ話している」だけになっている。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②カウンセラーの言葉に違和感が継続する</p>
          <p className="text-stone-600 leading-[1.9]">カウンセラーの言葉・表情・対応に「なんか違う」という違和感が複数回続いている。それを伝えても改善しない、または伝えにくい雰囲気がある。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③自分の状況への理解が浅いと感じる</p>
          <p className="text-stone-600 leading-[1.9]">職業特性・家族構造・経済状況など、自分の状況の前提が伝わらない。説明し直す負担が大きい。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④話す内容が表面的になっていく</p>
          <p className="text-stone-600 leading-[1.9]">回数を重ねるごとに、深い話ができなくなっている。「話してもどうせ伝わらない」と感じて、表面的な話に終始している。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">⑤カウンセラーから「決めつけられる」感覚</p>
          <p className="text-stone-600 leading-[1.9]">自分の状況・気持ちを、カウンセラーが先回りして決めつけてくる。「いや、そうじゃない」と感じることが続いている。</p>
        </div>
      </div>

      <h2>タイプBのサイン——進んでいる可能性が高い</h2>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①話していて怖さ・抵抗が出てきた</p>
          <p className="text-stone-600 leading-[1.9]">今まで触れなかった話に近づいて、急に怖さや抵抗が出てきた。「これ以上話したくない」感覚が強い。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②カウンセラーへの急な怒り・反発</p>
          <p className="text-stone-600 leading-[1.9]">これまで問題なかったカウンセラーに対して、急に怒りや反発が湧いてきた。「あの人ムカつく」「もう会いたくない」感覚がある。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③最近、本質的な話に近づいてきている自覚</p>
          <p className="text-stone-600 leading-[1.9]">「これまで避けてきた話に踏み込みつつある」「過去や家族の話が出てきている」など、深まりつつあるという感覚がある。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④「逃げたい」が強い</p>
          <p className="text-stone-600 leading-[1.9]">「やめたい」というより「逃げたい」「もう関わりたくない」という、感情的な強さがある。</p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed mt-3">
        タイプBの場合、いきなりやめると、その先に進めなくなることがあります。<strong>「やめたい」という気持ち自体をカウンセラーに伝える</strong>ことが、転換点になることが多いです。
      </p>

      <LineCtaSmall />

      <h2>タイプ別の動き方</h2>

      <h3>タイプAの場合：別の選択肢を探す</h3>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①「合わない」感覚を一度伝えてみる</p>
          <p className="text-stone-600 leading-[1.9]">「実は引っかかっていたことがあって」と切り出してみる。カウンセラーが調整できる場合があります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②別のカウンセラーを探す</p>
          <p className="text-stone-600 leading-[1.9]">伝えても変わらない、伝えること自体が負担と感じる場合、別の方を探すのは自然な選択です。「合うカウンセラー」を探すことは、適切な医療機関を探すことと同じです。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③一旦終結する</p>
          <p className="text-stone-600 leading-[1.9]">今すぐ別を探す気力がない場合、一旦終結して時間を置くのも選択肢です。必要になればいつでも再開できます。</p>
        </div>
      </div>

      <h3>タイプBの場合：「やめたい気持ち」を持ち込んでみる</h3>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①「やめたい気持ち」自体を話題にする</p>
          <p className="text-stone-600 leading-[1.9]">「実は最近やめたいと思っているんですけど、聞いてもらえますか」と切り出してみる。これがカウンセリングを深める転換点になることがあります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②「何が怖いのか」を一緒に整理する</p>
          <p className="text-stone-600 leading-[1.9]">やめたい気持ちの裏には、たいてい「触れたくない何か」があります。それが何なのかを安全な場で整理することが、回復の核心になることがあります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③ペースを落とす提案をする</p>
          <p className="text-stone-600 leading-[1.9]">「もう少しゆっくり進めたい」と伝えるのも選択肢です。深まり方を調整することで、続けやすくなることがあります。</p>
        </div>
      </div>

      <h2>どちらか判断できないとき</h2>
      <p>
        「タイプAなのかBなのか自分でわからない」場合は、<strong>その判断自体をカウンセラーに持ち込む</strong>ことができます。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">伝え方の例</p>
        <div className="space-y-2 text-xs text-stone-600 leading-relaxed mt-2">
          <p>「最近やめたいなと思っていて、それが○○さん（カウンセラー）と合わないからなのか、別の理由があるのかわからないんです」</p>
          <p>「続けるべきかやめるべきか、自分で判断がつかないので、一度この気持ちを話してもいいですか」</p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        この伝え方は、カウンセラーにとって整理しやすい持ち込み方です。「やめたい気持ち」自体を扱うことができるからです。
      </p>

      <h2>「カウンセリング自体に意味を感じない」段階のとき</h2>
      <p>
        カウンセリングそのものに意味を感じなくなった場合、次のいずれかの段階の可能性があります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①カウンセリングが必要な段階を超えた</p>
          <p className="text-stone-600 leading-[1.9]">「もう自分で対処できる」「相談したいことが整理できた」と感じている。これは健全な終結に近い段階です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②今のカウンセラーと合っていない</p>
          <p className="text-stone-600 leading-[1.9]">カウンセリング全般ではなく、今の関係に意味を感じなくなっている。別のカウンセラーで状況が変わる可能性があります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③カウンセリングではなく別の支援が必要</p>
          <p className="text-stone-600 leading-[1.9]">医療的な支援、福祉的な支援、環境調整など、カウンセリングでは扱えない領域に課題が移っている。別の支援を組み合わせる時期かもしれません。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">④消耗が深く、整理する気力もない</p>
          <p className="text-stone-600 leading-[1.9]">話すこと自体が負担になっているほど消耗している段階。まず休息・医療的サポートが優先される可能性があります。</p>
        </div>
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
        <p className="text-[10px] text-stone-500 mb-1">「やめるか続けるか」を一人で決めなくて大丈夫です</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          現在のカウンセリングの整理を、別の場所で相談したい方へ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「今のカウンセリングをやめるべきか」「別のカウンセラーを探すべきか」を整理することも、カウンセリングの活用方法のひとつです。支援職特有の構造を理解した上で、現状を一緒に整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          現状を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/counseling-quit-want"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

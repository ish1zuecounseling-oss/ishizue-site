import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaSmall } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"

const FAQ_ITEMS = [
  {
    q: "カウンセリングをやめるタイミングはいつが正しいですか？",
    a: "明確な正解はありません。一般的には「相談したかったことが整理できた」「日常生活に支障がなくなった」「自分で対処できる手応えが出てきた」「カウンセラーに話したいことがなくなった」といったタイミングで終結を検討します。ただし支援職の場合、定期的なメンテナンス的な利用も有効な活用方法のひとつです。",
  },
  {
    q: "カウンセラーに「やめたい」と伝えるのは失礼ですか？",
    a: "失礼ではありません。むしろ、率直に伝えることはカウンセリング関係の健全な一部です。カウンセラーは終結を一緒に整理することに慣れています。「言いにくい」と感じる場合、その感覚自体をカウンセリングの場で話してみることも、対人関係パターンを理解する手がかりになります。",
  },
  {
    q: "カウンセラーと合わないと感じたらどうすればいいですか？",
    a: "「合わない」と感じることはカウンセリングの失敗ではありません。相性は個別性が高く、合う・合わないは自然に起こります。一度伝えてみる、別のカウンセラーを探すなどの選択肢があります。「合わない」感覚を伝えること自体が対話のきっかけになり、関係が深まることもあります。",
  },
  {
    q: "効果を感じないからやめたいです。続けるべきですか？",
    a: "「効果」の捉え方を一度整理することが助けになります。劇的な変化を期待していると効果が感じにくいですが、「ぐるぐる考えるループが少し止まった」「自分の状態を言語化できるようになった」など、小さな変化は起きていることがあります。カウンセラーに「効果を感じない」と直接伝えてみると、変化が見える場合もあります。",
  },
  {
    q: "途中でやめると意味がなくなりますか？",
    a: "意味がなくなることはありません。1回でも対話したことで得られた整理や気づきは、その後も残ります。「途中でやめた」と感じる必要はなく、「今の段階での区切り」と捉えることができます。必要になれば再開もできます。",
  },
  {
    q: "終結後に再開してもいいですか？",
    a: "もちろんです。状況が変わったとき、新しい課題が出てきたときに、再開することは自然な選択です。一度終結したカウンセラーに再開を相談することも、別のカウンセラーに新しく相談することも、どちらも可能です。",
  },
]

export default function CounselingEndTiming() {
  return (
    <ArticleLayout
      title="カウンセリングをやめるタイミングはいつ？終結・中断・再開の判断【公認心理師監修】"
      description="「カウンセリングをやめたい」「効果を感じない」「カウンセラーに伝えにくい」——終結・中断・再開のタイミングの考え方を、支援職15年・累計300名以上の公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/counseling-end-timing"
      date="2026-05-17"
      tags={["counseling", "boundary"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        「もうやめてもいいのか」と感じた時点で、終結のタイミングを考える価値があります。
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
        「もうカウンセリングをやめてもいいのか」「効果を感じないから続ける意味があるのか」「カウンセラーに伝えるのが申し訳ない」——
        受けているカウンセリングを終わらせるタイミングに迷っている方は少なくありません。
      </p>

      <p>
        この記事では、<strong>カウンセリングを「やめる」「中断する」「終結する」「再開する」</strong>という4つの選択肢それぞれの目安と、カウンセラーへの伝え方について整理します。
      </p>

      <h2>カウンセリングを「やめる」には4つのパターンがある</h2>
      <p>
        「やめる」と一言で言っても、実際には複数のパターンがあります。まず自分がどれに当てはまるかを整理することが、次の判断を楽にします。
      </p>

      <div className="my-5 space-y-3">
        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <p className="text-[11px] text-stone-500 tracking-wider mb-0.5">パターン①</p>
            <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              終結——相談したかったことが整理できた
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed">
            <p>「もう話したいことがない」「日常生活に支障がない」「自分で対処できそう」と感じる段階。健全な終わり方であり、カウンセリングの本来の到達点。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-100 border-b border-stone-200">
            <p className="text-[11px] text-stone-500 tracking-wider mb-0.5">パターン②</p>
            <p className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              中断——一旦休む・タイミングが合わない
            </p>
          </div>
          <div className="p-4 text-xs text-stone-600 leading-relaxed">
            <p>「忙しくて続けられない」「経済的な事情」「気持ちの整理が必要」など、外的な要因で一旦休む段階。再開を前提とした選択肢。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-200 border-b border-stone-300">
            <p className="text-[11px] text-stone-600 tracking-wider mb-0.5 font-medium">パターン③</p>
            <p className="text-sm font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              カウンセラー変更——相性・専門性が合わない
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50/40">
            <p>「このカウンセラーとは合わない」「自分の状況に専門性が合わない」と感じる段階。カウンセリング自体は続ける選択肢。別の方を探すことが助けになる。</p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-stone-400 overflow-hidden">
          <div className="px-4 py-2.5 bg-stone-700 border-b border-stone-700">
            <p className="text-[11px] text-stone-100 tracking-wider mb-0.5 font-medium">パターン④</p>
            <p className="text-sm font-medium text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              逃避——つらすぎてやめたい
            </p>
          </div>
          <div className="p-4 text-xs text-stone-700 leading-relaxed bg-stone-50">
            <p>「話していて余計につらくなる」「カウンセラーが嫌になった」「行くのが億劫」など、感情的な反応で離れたい段階。注意：これはカウンセリングが進んでいるサインの場合もある。一度カウンセラーに伝えて判断する価値がある。</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-stone-500 leading-relaxed">
        ※ 自分がどのパターンか曖昧な場合、それ自体をカウンセラーに伝えることが整理のきっかけになります。
      </p>

      <h2>パターン別：タイミングの目安</h2>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">①終結のサイン</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以下のサインが複数当てはまる場合、健全な終結が近い可能性があります。
        </p>
        <ul className="text-xs text-stone-600 mt-2 space-y-1">
          <li>・以前は気になっていたことが、気にならなくなった</li>
          <li>・自分の状態を自分で言語化できるようになった</li>
          <li>・つらい場面で「以前ならこうなっていた」と振り返れる</li>
          <li>・「次に話したいこと」が出てこなくなった</li>
          <li>・日常生活に支障がない状態が続いている</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">②中断を検討するサイン</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以下の状況では、終結ではなく一旦中断する選択肢が合うことがあります。
        </p>
        <ul className="text-xs text-stone-600 mt-2 space-y-1">
          <li>・経済的・時間的に続けるのが難しい</li>
          <li>・気持ちの整理を一人でしたい時期に入った</li>
          <li>・話したいことはあるが、今は話す気力がない</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③カウンセラー変更を検討するサイン</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以下のサインがある場合、カウンセラー側との相性・専門性のミスマッチの可能性があります。
        </p>
        <ul className="text-xs text-stone-600 mt-2 space-y-1">
          <li>・3〜5回受けても、話したことが整理されている感じがしない</li>
          <li>・カウンセラーの言葉や態度に違和感が継続する</li>
          <li>・自分の状況（職業特性・トラウマ等）への理解が浅いと感じる</li>
          <li>・話す内容が表面的になっていく</li>
        </ul>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④「やめたい」が反応かもしれないサイン</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          以下の場合、「やめたい」気持ちはカウンセリングが進んでいるサインの可能性があります。
        </p>
        <ul className="text-xs text-stone-600 mt-2 space-y-1">
          <li>・話していて怖さや抵抗が出てきた</li>
          <li>・カウンセラーに対して急に怒りや反発を感じた</li>
          <li>・最近、本質的な話に近づいてきている自覚がある</li>
          <li>・「逃げたい」感覚が強い</li>
        </ul>
        <p className="text-xs text-stone-500 mt-2">
          →この場合、いきなりやめる前に、その「やめたい気持ち」自体をカウンセラーに伝えることが、カウンセリングを深める転換点になることがあります。
        </p>
      </div>

      <LineCtaSmall />

      <h2>カウンセラーへの伝え方——「言いにくい」を超える</h2>
      <p>
        「やめる」と伝えることに罪悪感や言いにくさを感じる方は多くいます。これはカウンセリング関係において自然な感覚であり、特別なものではありません。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">伝え方の例</p>
        <div className="space-y-2 text-xs text-stone-600 leading-relaxed mt-2">
          <p><strong className="text-stone-800">終結の場合：</strong>「相談したかったことが整理できたので、一旦終わりにしたいと思っています」</p>
          <p><strong className="text-stone-800">中断の場合：</strong>「今は外の事情で続けるのが難しいので、一旦お休みさせてください」</p>
          <p><strong className="text-stone-800">変更の場合：</strong>「相性のことで悩んでいて、別のカウンセラーを探してみたいと思っています」</p>
          <p><strong className="text-stone-800">迷っている場合：</strong>「やめたい気持ちもあって、整理がついていません。一度この気持ちを話してもいいですか」</p>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        どの伝え方も、カウンセラーにとっては<strong>慣れた終結プロセスの一部</strong>です。「失礼ではないか」「がっかりさせないか」という心配は、ほとんどの場合不要です。終結を一緒に整理することはカウンセラーの仕事の一部です。
      </p>

      <h2>「合わない」と感じたときの選択肢</h2>
      <p>
        「カウンセラーと合わない」と感じることは、カウンセリングの失敗ではなく、人間関係の自然な現象です。以下の3つの選択肢があります。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">①「合わない」感覚を伝える</p>
          <p className="text-stone-600 leading-[1.9]">合わない感覚自体をカウンセラーに伝えてみると、関係が変わることがあります。「実は引っかかっていたことがあって」と切り出すことで、カウンセラーが調整できる場合もあります。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">②別のカウンセラーを探す</p>
          <p className="text-stone-600 leading-[1.9]">伝えても変わらない、伝えること自体が負担、と感じる場合は別の方を探すのが自然です。「合うカウンセラー」を探すことは、適切な医療機関を探すことと同じく、健全な行動です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">③一旦終結する</p>
          <p className="text-stone-600 leading-[1.9]">特に新しいカウンセラーを今すぐ探す気力がない場合、一旦終結して時間を置くのも選択肢です。必要になればいつでも再開できます。</p>
        </div>
      </div>

      <h2>終結後の「再開」もまた選択肢</h2>
      <p>
        カウンセリングを終結したあと、状況が変わって再びサポートが必要になることは珍しくありません。<strong>「一度終結したから再開できない」ということはありません</strong>。
      </p>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700">同じカウンセラーに再開を相談する</p>
          <p className="text-stone-600 leading-[1.9]">以前のカウンセリングで得た信頼関係をそのまま活用できます。状況の変化を一から説明する必要が少ないことが利点です。</p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700">別のカウンセラーに新しく相談する</p>
          <p className="text-stone-600 leading-[1.9]">新しい課題には新しい視点が必要な場合もあります。前のカウンセラーとは違う専門性を持つ方を選ぶことも有効です。</p>
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
          カウンセリングの整理を、別のカウンセラーに相談したい方へ
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          「今のカウンセリングをやめるべきか」「別の場所を探した方がいいか」を整理することも、カウンセリングの活用方法のひとつです。支援職特有の構造を理解した上で、現状を一緒に整理します。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          現状を整理してみる（初回無料）
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="concept" exclude={["/articles/counseling-end-timing"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）をもとに作成しています。
      </div>
    </ArticleLayout>
  )
}

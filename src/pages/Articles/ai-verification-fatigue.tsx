import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaCompassion } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST, CONTACT_HREF, CONTACT_LINK_PROPS, ctaText } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "AIを使うと、脳に悪い影響が出るのですか？",
    a: "この記事で扱う疲れは、AIそのものが脳を傷つけるという話ではありません。確認作業、同時並行、判断の回数の増加といった、デスクワーク一般で起こる負荷が、AIの速さによって増えることがある、という整理です。取材記事の中で脳神経内科の専門家は、PC作業で脳が物理的に傷つく症例は報告されておらず、AI固有の病態とは考えにくいとしたうえで、抑うつや集中力の低下は起こりうると述べています。",
  },
  {
    q: "「AIハイ」は正式な病名ですか？",
    a: "いいえ。「AIハイ」は、近畿大学の広報記事で使われた呼び方で、診断名や学術用語ではありません。この記事では、同じ状態を指す言葉としては使わず、「AI作業で生じる疲れ」として、研究が分かっている範囲で整理しています。",
  },
  {
    q: "AIの出力を、毎回すべて確認しないといけませんか？",
    a: "すべてを同じ深さで確認する必要はありません。重要度で分けるのが現実的です。利用者や家族に渡るもの、記録として残るもの、判断の根拠になるものは丁寧に確認し、下書き段階のものは軽く見る、というように、確認の深さを決めておくと負担が減ります。ただし最終的な責任は人にあるので、確認を完全になくすことはできません。",
  },
  {
    q: "利用者の情報をAIに入力して、記録を作ってもよいですか？",
    a: "職場の規則と、AIサービスの利用条件に従ってください。個人が特定できる情報を、許可されていない外部のAIサービスに入力すべきではありません。使ってよいかどうか分からないときは、先に職場の責任者に確認してください。",
  },
]

const LINK = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function AiVerificationFatigue() {
  return (
    <ArticleLayout
      title="AIを使うほど疲れるのはなぜ？｜「確認する疲れ」と判断の増加、支援職が気をつけたいこと"
      description="AIで仕事が速くなったのに、なぜか疲れる、頭が重い。その背景にある確認作業の負荷、同時並行の切り替え、判断の回数の増加を、研究をもとに整理し、記録や文書作成にAIを使う支援職が気をつけたい点と、休み方を解説します。"
      url="https://www.ishizue-counseling.jp/articles/ai-verification-fatigue"
      date="2026-11-12"
      tags={["burnout", "self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        作業は速く終わっているのに、一日の終わりの疲れ方が前より重い。
      </p>

      <p>
        記録の下書き、報告書の文面、研修資料の整理。AIを使うと、数時間かかっていた作業が数分で形になります。
        ところが、使い始めてから<strong>むしろ疲れやすくなった</strong>という声が、少しずつ聞かれるようになりました。
      </p>
      <p>
        近畿大学の広報メディアに載った取材記事（2026年10月）では、AIを使い続けた教員が、
        自分で書くより<strong>「確認すること」のほうが疲れた</strong>と話しています。
        この記事では、その体験を手がかりに、AIを使う仕事で疲れが増える仕組みを、
        <strong>これまでの研究で分かっていること</strong>に分けて整理します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">こんな状態はありませんか</p>
        <ul className="text-sm text-stone-600 space-y-1 leading-[1.9]">
          <li>・AIの出力が合っているか確認するたびに、頭が重くなる</li>
          <li>・待ち時間がもったいなくて、別の作業やAIを同時に動かしてしまう</li>
          <li>・何を、どのAIに頼んだか分からなくなる</li>
          <li>・速く進む分、判断することが増えて、夜に動けなくなる</li>
          <li>・AIを閉じたあとも、頭が仕事から離れない</li>
        </ul>
        <p className="text-xs text-stone-500 leading-relaxed mt-2">
          ※診断のためのチェックではありません。
        </p>
      </div>

      <h2>疲れが増える、3つの仕組み</h2>

      <div className="card space-y-3 text-sm">
        <div>
          <p className="font-medium text-stone-700 mb-1">① 「確認し続ける」ことは、思った以上に負荷が高い</p>
          <p className="text-stone-600 leading-[1.9]">
            Warmら（2008）は、注意を保って監視し続ける作業（警戒作業）が、
            「何もしていないように見えて、実は大きな精神的負荷を伴い、ストレスにもなる」ことを研究のまとめで示しました。
            AIの出力を疑いながら確かめる作業は、自分で作るのとは違う種類の負荷で、
            「間違いを見逃さないように見続ける」緊張が続きます。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">② 並行して動かすと、切り替えのたびに消耗する</p>
          <p className="text-stone-600 leading-[1.9]">
            Rubinsteinら（2001）の実験では、作業を切り替えるたびに、切り替えのコストがかかることが示されました。
            Leroy（2009）は、前の作業のことが頭に残り、次の作業への集中が落ちる「注意の残余」が起こることを報告しています。
            複数のAIや作業を行き来するほど、切り替えの回数が増えます。
          </p>
        </div>
        <div className="border-t border-stone-100 pt-3">
          <p className="font-medium text-stone-700 mb-1">③ 速くなる分、判断する回数が増える（見方の一つ）</p>
          <p className="text-stone-600 leading-[1.9]">
            AIで作業が速く進むと、進められる量が増え、その分「これでいいか」「次はどうするか」という判断の回数も増えます。
            取材記事の専門家も、この点が過重労働に近い負担になる可能性を述べています。
            ただし、これは専門家の見方であり、AIの利用で判断が増え、それが疲労を起こすことを直接示したデータは、
            この記事の時点では見つけられていません。
          </p>
        </div>
      </div>

      <p className="text-sm text-stone-500 leading-relaxed">
        ※①②は、AI利用ではなく、警戒作業や作業の切り替えについての実験・調査です。
        AIの利用にそのまま当てはまるかどうかは、これからの研究が必要です。
      </p>

      <h2>特別な病気ではなく、仕事の負荷の話として考える</h2>
      <p>
        取材記事に登場する脳神経内科の専門家は、PC作業で脳が物理的に傷つく症例は報告されておらず、
        AI固有の病態とは考えにくいとしたうえで、<strong>抑うつや集中力の低下は起こりうる</strong>と述べています。
        つまり、「AIだから特別」と構えすぎる必要はなく、
        <strong>長時間のデスクワークの疲れや、<Link to="/articles/helper-brain-fatigue" className={LINK}>脳の疲れ</Link>と同じ延長で、休み方と業務量を見直す</strong>のが現実的です。
      </p>

      <h2>支援職がAIを使うときに、重なりやすいこと</h2>
      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p>・記録や報告書、計画案の下書きにAIを使い、<strong>最終責任は自分に残る</strong></p>
        <p>・利用者や家族に渡る文書は、<strong>間違いや言い回しの確認を丁寧にする必要がある</strong></p>
        <p>・日中は<Link to="/articles/emotional-labor-what-pillar" className={LINK}>感情労働</Link>で消耗した上に、事務作業の確認負荷が上乗せされる</p>
        <p>・早く終わる分、<strong>空いた時間にさらに仕事が入る</strong>ことがある</p>
        <p>・利用者の個人情報を扱うため、<strong>どのAIに何を入力してよいか</strong>を気にし続ける緊張が加わる</p>
      </div>
      <p>
        支援職は、もともと<Link to="/articles/helper-cannot-switch-off" className={LINK}>仕事のスイッチが切れにくい</Link>人が多く、
        <Link to="/articles/tired-but-cannot-rest" className={LINK}>疲れていても休めない</Link>状態に陥りやすい面があります。
        AIで作業が速くなった分を、休むことではなく、さらに詰めることに使うと、疲れは増えやすくなります。
      </p>

      <h2>AIとの付き合い方を整える、5つの工夫</h2>
      <p>
        取材記事でも、似た方向の工夫が紹介されています。ここでは、支援職の仕事に合わせて整理し直します。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 待ち時間は、画面から離れる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          処理を待つあいだに別の作業を入れず、立つ、水を飲む、目を休める時間にします。
          「待ち時間を埋める」より、「待ち時間で回復する」ほうが、一日の後半が楽になります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 「AIなら一瞬」と見積もらない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          作成が速くても、確認と修正には時間がかかります。予定を組むときは、確認の時間も含めて見積もります。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 確認の深さを、重要度で決めておく</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          利用者・家族に渡るもの、記録として残るものは丁寧に、下書きや自分用のメモは軽く。
          すべてを同じ深さで確認し続けると、確認する側が先に消耗します。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">④ 同時に動かす数と、終わりの時刻を決める</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          並行して使うAIや作業は、自分が把握できる数に絞ります。
          また、「何時までにやめる」を先に決めておくと、速さに合わせて夜まで続けることを防げます。
        </p>
      </div>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">⑤ 個人情報の扱いは、使う前に職場で確認する</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          個人が特定できる情報を、許可のない外部サービスに入力しないでください。
          使ってよい範囲が分からないときは、先に責任者に確認します。
          迷い続ける緊張も、疲れの一つになります。
        </p>
      </div>

      <h2>疲れを感じたときの、見直しの順番</h2>
      <div className="card space-y-1.5 text-sm text-stone-600 leading-[1.9]">
        <p><strong>1.</strong> いったん立ち止まる。AIを使う量や、同時に動かす作業を減らす。</p>
        <p><strong>2.</strong> 一人で抱えず、同僚や上司に伝える。一人で作業する形態ほど、こじらせやすくなります。</p>
        <p><strong>3.</strong> 管理する立場なら、AIの導入で業務量が過多になっていないか、メンバーの様子を確認する。</p>
      </div>
      <p>
        <Link to="/articles/burnout-early-signs" className={LINK}>バーンアウトの初期サイン</Link>のような状態
        （眠れない、朝に体が動かない、何も感じにくい）が続くときは、AIとは別に、休息と受診を優先してください。
      </p>

      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">しんどさが強いときは、無理に続けない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気分の落ち込みや、集中できない状態が2週間以上続く、眠れない、食欲が落ちた、といったときは、
          医療機関に相談してください。
          「消えてしまいたい」「死にたい」という気持ちが出ているときは、話を聞いてくれる窓口につながってください。
          よりそいホットライン（0120-279-338・24時間）、こころの健康相談統一ダイヤル（0570-064-556）などがあります。
          急を要する場合は、医療機関や救急に連絡してください。
        </p>
      </div>

      <LineCtaCompassion />

      <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
        <p className="text-xs font-medium text-stone-500 mb-2">次に読む</p>
        <div className="flex flex-col gap-1.5">
          <a href="/articles/helper-brain-fatigue" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 支援職の脳疲労</a>
          <a href="/articles/helper-cannot-switch-off" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 仕事のスイッチが切れない</a>
          <a href="/articles/tired-but-cannot-rest" className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">→ 疲れているのに休めない</a>
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
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          仕事の速さに、自分が追いつかなくなってきたとき
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          何が負荷になっていて、どこで休めていないのか。
          診断ではなく、支援職の消耗の視点から一緒に整理します。
        </p>
        <a href={CONTACT_HREF} {...CONTACT_LINK_PROPS} className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          {ctaText("支援職専門カウンセリングに相談する" + FREE_FIRST)}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし</p>
      </div>

      <ArticleFooterLinks type="recovery" exclude={["/articles/ai-verification-fatigue"]} />

      <p className="text-xs text-stone-400 mt-4 leading-relaxed">
        参考文献：Warm, J. S., Parasuraman, R., &amp; Matthews, G. (2008). Vigilance requires hard mental work and is stressful. Human Factors, 50(3), 433–441.／
        Rubinstein, J. S., Meyer, D. E., &amp; Evans, J. E. (2001). Executive control of cognitive processes in task switching. Journal of Experimental Psychology: Human Perception and Performance, 27(4), 763–797.／
        Leroy, S. (2009). Why is it so hard to do my work? The challenge of attention residue when switching between work tasks. Organizational Behavior and Human Decision Processes, 109(2), 168–181.／
        近畿大学広報室（2026）「『AIハイ』の原因と対策」Kindai Picks（2026年10月30日公開）. https://kindaipicks.com/article/003409
        ※①②の研究は、AI利用ではなく、警戒作業や作業の切り替えについての実験・調査です。
        取材記事は専門家の経験と見解にもとづくもので、研究データを示したものではありません。
        本記事は研究と取材記事を支援職向けに整理したもので、医学的な診断や治療に代わるものではありません。
      </p>

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        本記事は支援職支援の臨床経験（公認心理師・障害福祉15年・累計300名以上）と、上記の文献をもとに作成しています。医学的な診断ではありません。
      </div>
    </ArticleLayout>
  )
}

import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"
import { LineCtaFatigue } from "../../components/LineCta"
import ArticleFooterLinks from "../../components/ArticleFooterLinks"
import { FREE_FIRST } from "../../data/siteStatus"

const FAQ_ITEMS = [
  {
    q: "ピュロンの「判断保留(エポケー)」とは何ですか?",
    a: "古代ギリシャの懐疑派の哲学者ピュロンにさかのぼる考え方で、物事について「これが真実だ」と決めつけずに、判断をいったん保留する態度のことです。懐疑派は、どんな主張にも同じくらい説得力のある反対の主張があると考え、判断を保留したとき、心の平静(アタラクシア)が訪れると説きました。",
  },
  {
    q: "「平静は影のようについてくる」とは、どういう意味ですか?",
    a: "懐疑派の思想を伝えたセクストス・エンペイリコスが『ピュロン主義哲学の概要』で述べた言葉です。心の平静を得ようと必死に正解を探しているうちは得られず、判断を保留したとき、平静が体についてくる影のように、自然とついてきた、という意味です。追いかけるのをやめたときに手に入るもの、として描かれています。",
  },
  {
    q: "判断を保留したら、仕事にならないのではないですか?",
    a: "そのとおり、仕事に必要な判断まで保留する必要はありません。古代の懐疑派も、日常生活では目の前の現れや習慣に従って行動していました。支援職が保留したいのは、「きっと嫌われた」「どうせうまくいかない」といった、確かめようのない推測や悲観的な決めつけのほうです。",
  },
  {
    q: "相手の気持ちを決めつけてしまう癖があります。どうすればいいですか?",
    a: "まず、起きた事実と、自分の解釈を分けて書き出してみてください。「返事がそっけなかった」は事実、「怒っている」は解釈です。解釈には「かもしれない」をつけて保留し、必要なら本人に確かめます。確かめられないことは、確かめられないまま置いておく練習が、心の平静につながります。",
  },
]

const linkCls = "underline underline-offset-2 text-stone-600 hover:text-stone-900"

export default function ThinkerPyrrhoEpoche() {
  return (
    <ArticleLayout
      title="「きっとこう思われている」を手放す｜ピュロンの「判断保留」から読む、決めつけで疲れる支援職【公認心理師】"
      description="古代ギリシャの懐疑派ピュロンは、判断を保留したとき、心の平静が「影のように」ついてくると説きました。「きっと嫌われた」「どうせうまくいかない」と確かめようのない推測で消耗する支援職が、決めつけを手放す方法を公認心理師が解説します。"
      url="https://www.ishizue-counseling.jp/articles/thinker-pyrrho-epoche"
      date="2026-10-19"
      tags={["self-function"]}
      faq={FAQ_ITEMS}
    >
      <p className="text-stone-600 text-sm leading-relaxed mb-2 pl-4 border-l-2 border-stone-200">
        偉人・学者から学ぶ ｜ ピュロン
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
        先輩の返事が、いつもよりそっけなかった。
        「何か気に障ることをしたかもしれない」「きっと嫌われている」。
        利用者の家族の表情が硬い。「不満に思われているに違いない」。
        確かめたわけでもないのに、頭の中では結論が出ていて、その結論に一日中振り回される——。
      </p>
      <p>
        確かめようのない推測で、心がすり減っていく。
        この消耗から抜け出す方法を、2300年前に説いた哲学者がいます。
        古代ギリシャの懐疑派、<strong>ピュロン</strong>です。
      </p>

      <h2>ピュロンと懐疑派</h2>
      <p>
        ピュロン(紀元前360年ごろ–270年ごろ)は、ギリシャのエリス出身の哲学者です。
        若いころ、アレクサンドロス大王の遠征に同行してインドまで旅し、そこで出会った思想にも影響を受けたと伝えられています。
        本人は著作を残していませんが、その考えは弟子たちを通して受け継がれ、
        のちにセクストス・エンペイリコスが『ピュロン主義哲学の概要』にまとめました。
      </p>
      <p>
        ピュロンにさかのぼる懐疑派の考え方の中心にあるのが、<strong>判断保留(エポケー)</strong>です。
      </p>

      <h2>判断を保留すると、平静が影のようについてくる</h2>
      <p>
        懐疑派の人々も、最初は心の平静を求めて、「何が真実か」を必死に見極めようとしました。
        けれど、どんな主張にも同じくらい説得力のある反対の主張があり、決着がつかない。
        そこで判断を保留したとき、思いがけないことが起こります(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          判断を保留したとき、心の平静が、あたかも影が体についてくるように、偶然ついてきた。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          セクストス・エンペイリコス『ピュロン主義哲学の概要』第1巻より(ギリシャ語原典をもとに筆者訳・要約)
        </p>
      </div>
      <p>
        セクストスは、このことを一人の画家の話にたとえています。
        馬の口の泡をどうしても描けなかった画家が、あきらめて絵筆をぬぐうスポンジを絵に投げつけたところ、
        スポンジの跡が、見事な泡の絵になっていた——。
        <strong>必死に追いかけているうちは得られず、手放したときに手に入るもの</strong>がある、という話です。
      </p>

      <h2>嵐の船の上の豚</h2>
      <p>
        ピュロンには、こんな逸話も伝えられています(拙訳・要約)。
      </p>
      <div className="card">
        <p className="text-sm text-stone-700 leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          船が嵐に遭い、乗客たちがみな恐れおののいていたとき、ピュロンは落ち着いたまま、
          船の上で平然と餌を食べている豚を指さして言った。
          賢い人は、このように動じないでいるべきだ、と。
        </p>
        <p className="text-[11px] text-stone-400 mt-2">
          ディオゲネス・ラエルティオス『ギリシア哲学者列伝』第9巻より(ギリシャ語原典をもとに筆者訳・要約)
        </p>
      </div>
      <p>
        豚は、嵐そのものの中にいても、「この先どうなるのか」「沈むに違いない」という判断を加えません。
        人間を苦しめているのは、嵐そのものに加えて、<strong>自分が付け加える推測と決めつけ</strong>なのかもしれません。
        (<Link to="/articles/thinker-epictetus-control" className={linkCls}>エピクテトスの「人を乱すのは物事ではなく、物事についての考え」</Link>とも通じる考え方です)
      </p>

      <h2>支援職に置き換えると——確かめようのない推測で消耗する</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 人の気持ちを決めつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          そっけない返事、硬い表情、既読のつかないメッセージ。
          わずかな手がかりから「嫌われた」「怒っている」と結論を出し、その結論を前提に一日を過ごしてしまう。
          (<Link to="/articles/naive-realism-what" className={linkCls}>ナイーブリアリズム</Link>で扱っている「自分の見方こそが現実」という思い込みとも重なります)
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 先のことを悲観的に決めつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「この利用者はきっと悪くなる」「来月の監査でまた指摘される」。
          まだ起きていない未来を確定したもののように扱い、先回りして消耗してしまう。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 自分について決めつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「自分はこの仕事に向いていない」「自分はダメな支援者だ」。
          一度の失敗から、自分全体についての結論を出してしまう。
          これも、確かめようのない判断の一つです。
        </p>
      </div>

      <LineCtaFatigue />

      <h2>この考え方の限界</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">すべての判断を保留することはできない</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          支援の現場では、安全の確認やリスクの見極めなど、すぐに判断すべきことがたくさんあります。
          古代の懐疑派も、日常生活では目の前の現れや習慣に従って行動していました。
          保留したいのは、<strong>確かめようのない推測と、悲観的な決めつけ</strong>のほうです。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">「何も信じない」こととは違う</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          判断保留は、すべてを疑ってかかる冷笑的な態度ではありません。
          「まだわからない」と認め、わからないまま置いておける心の余裕のことです。
        </p>
      </div>

      <h2>明日からできること</h2>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">① 「事実」と「解釈」を分けて書く</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          気になる出来事を、「事実」と「自分の解釈」の2列に分けて書きます。
          「返事が短かった」は事実、「怒っている」は解釈です。
          分けるだけで、解釈が事実のふりをしていたことに気づけます。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">② 解釈に「かもしれない」をつける</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          「怒っている」を「怒っているかもしれないし、ただ忙しかっただけかもしれない」と言い換えます。
          どちらとも決めない状態を、少しのあいだ保ってみる練習です。
        </p>
      </div>
      <div className="card">
        <p className="text-sm font-medium text-stone-700 mb-2">③ 確かめられることは、確かめる</p>
        <p className="text-sm text-stone-600 leading-[1.9]">
          推測で悩み続けるより、「さっきの件、何か気になることはありましたか」と本人に聞くほうが早いこともあります。
          確かめられないことは、確かめられないまま置いておく。その線引きが、心の平静を守ります。
          (<Link to="/articles/helper-rumination" className={linkCls}>仕事のことが頭から離れない</Link>もあわせてどうぞ)
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

      <h2>関連する記事</h2>
      <div className="card space-y-2 text-sm">
        <p className="font-medium text-stone-700 mb-2">この記事とつながるテーマ</p>
        <ul className="space-y-1.5 text-stone-600">
          <li>・<Link to="/articles/naive-realism-what" className={linkCls}>ナイーブリアリズムとは</Link></li>
          <li>・<Link to="/articles/helper-rumination" className={linkCls}>仕事のことが頭から離れない</Link></li>
          <li>・<Link to="/articles/thinker-epictetus-control" className={linkCls}>変えられないものに消耗しない(エピクテトスから読む)</Link></li>
          <li>・<Link to="/articles/thinker-diogenes-currency" className={linkCls}>「日陰になるからどいてくれ」(ディオゲネスから読む)</Link></li>
        </ul>
        <p className="text-xs text-stone-400 pt-2">
          「偉人・学者から学ぶ」シリーズは、<Link to="/articles" className={linkCls}>心理記事一覧</Link>の「知る・理解する」→「偉人・学者から」にまとめています。
        </p>
      </div>

      <div className="my-8 p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-[10px] text-stone-500 mb-1">「きっとこう思われている」で疲れている方へ</p>
        <p className="text-sm font-medium text-stone-100 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          頭の中の結論を、一緒にほどいていく時間を
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          一人で考えていると、推測が事実のように固まっていきます。話しながら、事実と解釈を一緒に分けていきましょう。
        </p>
        <a href="/#contact" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white" style={{ background: "#7EB8A4", textDecoration: "none" }}>
          今の状態を整理してみる{FREE_FIRST}
        </a>
        <p className="text-[10px] text-stone-500 text-center mt-1.5">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
      </div>

      <ArticleFooterLinks type="self-function" exclude={["/articles/thinker-pyrrho-epoche"]} />

      <div className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100">
        引用箇所は、パブリックドメインのギリシャ語原典(セクストス・エンペイリコス『ピュロン主義哲学の概要』、ディオゲネス・ラエルティオス『ギリシア哲学者列伝』)をもとに筆者が翻訳・要約したものです。本記事は思想を手がかりに支援職の心理を解説するもので、医学的な診断や治療に代わるものではありません。
      </div>
    </ArticleLayout>
  )
}

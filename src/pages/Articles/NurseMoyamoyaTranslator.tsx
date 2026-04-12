import { useState } from "react"
import ArticleLayout from "../../components/ArticleLayout"

const THOUGHTS = [
  {
    id:          "judgment",
    text:        "「あの判断で本当に良かったのかな…」と、自分のミスを探すように反芻してしまう。",
    translation: "それは「後悔」ではなく、命に対して誠実であろうとするあなたの臨床倫理そのものです。正解のない現場で考え抜いた事実は、何よりも尊い仕事です。",
    hint:        "今は「正しい・間違い」のジャッジを一度お休みして、「私は全力を尽くした」と自分を労う時間を。",
  },
  {
    id:          "family",
    text:        "ご家族から言われたあの言葉が、ずっと胸に刺さって抜けない。何かできたことがあったのではと自分を責めてしまう。",
    translation: "相手の心の叫びを、あなたがそれほどまでに深く受け止めた証拠です。あなたは言葉を「聞いた」だけでなく、その方の痛みを「共に持った」のですね。",
    hint:        "その痛みはあなたのせいではありません。冷たい水で手を洗い、その重荷をそっと置いて帰りましょう。",
  },
  {
    id:          "flashback",
    text:        "せっかくの休みの日なのに、急変場面やアラームの音が不意に蘇ってしまい、心が休まらない。",
    translation: "あなたの神経系が、命を守るために「戦闘モード」のまま必死にあなたを守ろうとしています。これは弱さではなく、支援職としての高い防衛本能です。",
    hint:        "温かい飲み物を飲んだり、重めの毛布にくるまったりして、身体の感覚を「今ここ」に呼び戻してください。",
  },
]

const SAGE = "#8FAF9F"

function TranslatorWidget() {
  const [selected, setSelected] = useState<string | null>(null)

  const current = THOUGHTS.find((t) => t.id === selected)

  return (
    <div className="my-8 space-y-4">
      {/* カード選択 */}
      <p className="text-xs text-stone-400 tracking-wide">今の気持ちに一番近いものをタップしてください</p>

      <div className="space-y-3">
        {THOUGHTS.map((thought) => {
          const isSelected = selected === thought.id
          return (
            <button
              key={thought.id}
              onClick={() => setSelected(isSelected ? null : thought.id)}
              className="w-full text-left p-4 rounded-xl border transition-all duration-200"
              style={{
                background:   isSelected ? "rgba(143,175,159,0.08)" : "#fff",
                borderColor:  isSelected ? "rgba(143,175,159,0.6)"  : "#e7e5e4",
                boxShadow:    isSelected ? "0 2px 10px rgba(143,175,159,0.15)" : "none",
              }}
            >
              <p className="text-sm text-stone-600 leading-relaxed">{thought.text}</p>
            </button>
          )
        })}
      </div>

      {/* 翻訳結果 */}
      {current && (
        <div
          className="p-5 rounded-xl"
          style={{
            background:  "rgba(143,175,159,0.07)",
            borderLeft:  `3px solid ${SAGE}`,
          }}
        >
          <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-2" style={{ color: SAGE }}>
            いしずえの翻訳
          </p>
          <p className="text-sm text-stone-700 leading-[2] mb-3">
            {current.translation}
          </p>
          <p className="text-xs text-stone-400 leading-relaxed border-t border-stone-100 pt-3">
            💭 {current.hint}
          </p>

          {/* CTA */}
          <div className="mt-4 pt-3 border-t border-stone-100">
            <p className="text-xs text-stone-400 mb-2">この感覚を、一緒に整理してみませんか</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full text-white transition-all"
              style={{ background: "#2C1F14" }}
            >
              初回メール相談（無料）
            </a>
            <p className="text-[10px] text-stone-300 mt-1.5">勧誘なし ／ 1回のみでもOK</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function NurseMoyamoyaTranslator() {
  return (
    <ArticleLayout
      title="夜勤明け、患者さんの表情が頭から離れない夜の翻訳｜看護師のためのモヤモヤ翻訳室"
      description="「あの判断で良かったのか」「家族の言葉が抜けない」——看護師が夜勤後に感じる自責やモヤモヤを、自己否定ではなく自己理解の言葉に翻訳するインタラクティブツールです。"
      url="https://www.ishizue-counseling.jp/articles/nurse-moyamoya-translator"
      date="2026-04-12"
      tags={["compassion", "burnout", "recovery"]}
    >
      <p>
        夜勤が明けても、あの患者さんの表情が頭から離れない。
        「自分の対応で良かったのか」と、帰り道も振り返ってしまう——
      </p>
      <p>
        そのモヤモヤは、あなたが弱いからではありません。
        命に真剣に向き合ってきたからこそ生まれる、誠実さの証です。
      </p>
      <p>
        今の気持ちに近いものをタップしてみてください。
        そのモヤモヤを、別の言葉に翻訳してみます。
      </p>

      <TranslatorWidget />

      <h2>なぜ、看護師は感情を「持ち帰り」やすいのか</h2>
      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          看護の現場では「感情労働」が常に求められます。
          患者さんやご家族の感情に寄り添いながら、自分の感情は後回しにする構造が続くと、
          仕事が終わっても感情の切り替えが難しくなります。
          これは意志が弱いのではなく、支援職に起こりやすい神経系の反応です。
        </p>
      </div>
      <p>
        感情の持ち帰りが続くと、次第に休みの日でも仕事が頭から離れなくなり、
        慢性的な消耗へとつながります。早めに気づき、自分を労う習慣をつけることが大切です。
      </p>

      <p className="check-disclaimer">
        このツールは診断ではなく、今の状態に気づくための目安です。
        気になることがあれば専門家への相談をおすすめします。
      </p>
    </ArticleLayout>
  )
}

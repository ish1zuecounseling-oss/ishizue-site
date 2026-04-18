/**
 * ArticleBottomCTA.tsx
 * 全記事の末尾に入れる固定導線コンポーネント（行動理由型）
 */

import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

type Props = {
  links?: { label: string; path: string }[]
}

const DEFAULT_LINKS = [
  { label: "共感疲労の対処法を見る",              path: "/articles/helper-compassion-fatigue-practice" },
  { label: "バウンダリー（境界線）の作り方を見る", path: "/articles/helper-boundary-how-to" },
  { label: "今の状態をチェックする",               path: "/articles/helper-empathy-check" },
]

export default function ArticleBottomCTA({ links = DEFAULT_LINKS }: Props) {
  return (
    <div className="mt-10 space-y-4">

      {/* 理解→対処ブリッジ */}
      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-800 mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          原因がわかっても、しんどさが残るとき
        </p>
        <p className="text-xs text-stone-500 leading-relaxed mb-4">
          「頭では理解できるけど、現場ではうまくできない」——そう感じている方も多いと思います。<br />
          共感疲労や思考のクセは、<strong>理解だけで変えるのが難しい領域</strong>でもあります。
        </p>
        <p className="text-[10px] text-stone-400 tracking-widest uppercase mb-2">次にできること</p>
        <div className="flex flex-col gap-2">
          {links.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="group inline-flex items-center gap-1.5 text-sm text-[#7EB8A4] hover:text-[#5a9986] transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* 行動理由型CTA */}
      <div className="p-5 rounded-2xl" style={{ background: "#2C1F14" }}>
        <p className="text-sm text-stone-200 leading-relaxed mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「まだ大丈夫」と思っているうちに、消耗は蓄積します
        </p>
        <p className="text-xs text-stone-400 leading-relaxed mb-4">
          共感疲労はじわじわと深まるため、気づいたときには回復に時間がかかることがあります。<br />
          今の状態を一度整理しておくことで、<strong>消耗が深くなる前に対処できる</strong>こともあります。<br />
          言葉にならなくても大丈夫です。
        </p>
        <Link
          to="/#contact"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#7EB8A4] text-white text-xs font-medium tracking-[0.08em] rounded-full hover:bg-[#5a9986] transition-all"
        >
          初回無料で相談する
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <p className="text-[10px] text-stone-500 mt-2">1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可</p>
      </div>

    </div>
  )
}

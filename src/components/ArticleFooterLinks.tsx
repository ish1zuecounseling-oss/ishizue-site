// src/components/ArticleFooterLinks.tsx
// 記事末尾の統一導線ブロック
//
// 使い方:
//   <ArticleFooterLinks type="check" exclude={["/articles/helper-empathy-check"]} />
//
// type:
//   "check"   → チェック記事（診断 + 症状 + 概念 + 回復）
//   "symptom" → 症状記事（診断 + 症状 + 概念 + 回復）
//   "concept" → 概念記事（診断 + 概念 + 回復 + 職種別）
//   "jobtype" → 職種別記事（診断 + 症状 + 概念 + 職種別）
//
// exclude: 自分自身のURLを渡すと該当リンクを非表示にする

import { Link } from "react-router-dom"

type Props = {
  type?: "check" | "concept" | "symptom" | "jobtype" | "self-function" | "mbti" | "attachment" | "mbti"
  exclude?: string[]
}

/* -------------------------------------------------------------------------- */
/*  リンク定義（優先順位順）                                                    */
/* -------------------------------------------------------------------------- */

// 「まず読むならこれ」固定（初めての方向け入口）
const FIRST_READ = {
  href: "/articles/helper-empathy-check",
  text: "共感疲労チェック（20項目・3分）——まずここから",
}

// 診断クラスター（FIRST_READを除く・優先度順）
const CHECKS = [
  { href: "/articles/helper-burnout-check",            text: "バーンアウト診断（20項目）" },
  { href: "/articles/helper-emotional-labor-check",    text: "感情労働チェック（20項目）" },
  { href: "/articles/helper-boundary-check",           text: "境界線セルフチェック（20項目）" },
  { href: "/articles/secondary-trauma-check",          text: "二次受傷チェック（15項目）" },
  { href: "/articles/helper-emotional-numbness-check", text: "感情麻痺チェック（15項目）" },
]

// 症状記事（体感語・CV近い順）
const SYMPTOMS = [
  { href: "/articles/helper-client-stuck-in-head",      text: "利用者の話が頭から離れない" },
  { href: "/articles/helper-emotional-numbness",        text: "感情が麻痺している" },
  { href: "/articles/helper-cannot-sleep",              text: "仕事のことが頭から離れず眠れない" },
  { href: "/articles/helper-cannot-rest-on-days-off",   text: "休日も休まらない" },
  { href: "/articles/helper-irritated-at-client",       text: "利用者にイライラしてしまう" },
  { href: "/articles/helper-cannot-say-no",             text: "断れない・NOと言えない" },
  { href: "/articles/helper-carrying-clients",          text: "利用者を背負ってしまう" },
  { href: "/articles/helper-cannot-switch-off",         text: "仕事と感情が切り離せない" },
  { href: "/articles/helper-responsibility-burnout",    text: "責任感が強すぎて潰れそう" },
  { href: "/articles/helper-pulled-by-client",          text: "利用者に引っ張られる" },
  { href: "/articles/helper-self-blame",                text: "「自分のせいだ」が止まらない" },
  { href: "/articles/helper-guilt-about-suffering",     text: "もっとできたはずという罪悪感" },
  { href: "/articles/helper-aptitude-doubt",            text: "支援職に向いていないと感じる" },
  { href: "/articles/helper-want-to-quit",              text: "支援職を辞めたい" },
  { href: "/articles/helper-consider-leave",            text: "休職したくなる" },
]

// 概念記事（テーマ理解）
const CONCEPTS = [
  { href: "/articles/compassion-fatigue-complete",          text: "共感疲労とは（総合解説・ピラー）" },
  { href: "/articles/helper-empathy-overload",              text: "共感しすぎて疲れる" },
  { href: "/articles/empathy-fatigue-vs-secondary-trauma",  text: "二次受傷とは？｜共感疲労・PTSDとの違い" },
  { href: "/articles/compassion-fatigue-vs-depression",     text: "共感疲労とうつ病の違い" },
]

// 回復・相談
const RECOVERY = [
  { href: "/articles/compassion-fatigue-recovery",        text: "共感疲労からの回復方法" },
  { href: "/articles/compassion-fatigue-recovery-period", text: "回復期間の目安" },
  { href: "/articles/compassion-fatigue-medical-support", text: "何科に相談すべきか" },
]

// 職種別


// MBTI・認知機能クラスター（流入→自己理解への変換）
const MBTI_CLUSTER = [
  { href: "/articles/infj-living",              text: "INFJは本当に生きづらいのか" },
  { href: "/articles/ni-ti-loop",               text: "Ni-Tiループとは何か" },
  { href: "/articles/empathy-brain-fatigue",    text: "共感しすぎる人はなぜ脳疲労しやすいのか" },
  { href: "/articles/beyond-mbti",              text: "MBTIを超えた自己理解（統合・到達点）" },
]

// 自己機能クラスター（Pillar → Hub → Cluster の循環）
const SELF_FUNCTION = [
  { href: "/articles/self-function-what",           text: "自己機能とは何か（ピラー）" },
  { href: "/articles/self-function-decline",        text: "自己機能が低下するとどうなるか（症状ハブ）" },
  { href: "/articles/other-centered-living",        text: "他人軸で生きてしまう" },
  { href: "/articles/emotion-unknown",              text: "感情がわからない" },
  { href: "/articles/what-do-i-want",               text: "やりたいことがわからない" },
  { href: "/articles/tired-but-cannot-rest",        text: "疲れているのに休めない" },
  { href: "/articles/feeling-nothing",              text: "何も感じない・感情が動かない" },
  { href: "/articles/overthinking-needs-sensation", text: "考えすぎる人に必要なのは感覚" },
  { href: "/articles/afraid-to-leave-role",         text: "役割を降りるのが怖い（到達点）" },
]

const JOBTYPES = [
  { href: "/articles/nurse-compassion-fatigue",            text: "看護師の共感疲労" },
  { href: "/articles/care-worker-compassion-fatigue",      text: "介護士の共感疲労" },
  { href: "/articles/school-counselor-compassion-fatigue", text: "スクールカウンセラーの共感疲労" },
]

/* -------------------------------------------------------------------------- */
/*  Helper                                                                     */
/* -------------------------------------------------------------------------- */

function LinkList({
  items,
  exclude,
  max,
}: {
  items: { href: string; text: string }[]
  exclude?: string[]
  max?: number
}) {
  let filtered = exclude ? items.filter((i) => !exclude.includes(i.href)) : items
  if (max) filtered = filtered.slice(0, max)
  if (filtered.length === 0) return null
  return (
    <>
      {filtered.map(({ href, text }) => (
        <Link
          key={href}
          to={href}
          className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2"
        >
          → {text}
        </Link>
      ))}
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ArticleFooterLinks({ type = "check", exclude = [] }: Props) {
  const isFirstReadExcluded = exclude.includes(FIRST_READ.href)

  return (
    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6 space-y-4">

      {/* 「まず読むならこれ」固定 */}
      {!isFirstReadExcluded && (
        <div>
          <p className="text-xs font-medium text-stone-600 mb-2">初めての方へ</p>
          <Link
            to={FIRST_READ.href}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[#8FAF9F]/30 bg-white text-sm font-medium text-stone-700 hover:border-[#8FAF9F]/60 transition-colors"
          >
            <span style={{ color: "#8FAF9F" }}>✓</span>
            {FIRST_READ.text}
          </Link>
        </div>
      )}

      {/* 診断クラスター */}
      <div className={!isFirstReadExcluded ? "border-t border-stone-100 pt-3" : ""}>
        <p className="text-xs font-medium text-stone-600 mb-2">今の状態を確認する</p>
        <div className="flex flex-col gap-1.5">
          <LinkList items={CHECKS} exclude={exclude} />
        </div>
      </div>

      {/* 症状記事 */}
      {(type === "check" || type === "symptom" || type === "jobtype" || type === "self-function" || type === "mbti" || type === "attachment") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">症状から読む</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={SYMPTOMS} exclude={exclude} max={5} />
          </div>
        </div>
      )}

      {/* 概念記事 */}
      <div className="border-t border-stone-100 pt-3">
        <p className="text-xs font-medium text-stone-600 mb-2">背景を理解する</p>
        <div className="flex flex-col gap-1.5">
          <LinkList items={CONCEPTS} exclude={exclude} />
        </div>
      </div>

      {/* 自己機能クラスター */}
      {(type === "concept" || type === "self-function" || type === "mbti" || type === "attachment") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">自己機能・自己理解</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={SELF_FUNCTION} exclude={exclude} />
          </div>
        </div>
      )}

      {/* MBTI・認知機能クラスター */}
      {(type === "self-function" || type === "mbti" || type === "concept") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">性格診断を超えた自己理解</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={MBTI_CLUSTER} exclude={exclude} />
          </div>
        </div>
      )}

      {/* 愛着・対人パターン */}
      {(type === "concept" || type === "self-function" || type === "attachment") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">愛着・対人パターン</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={ATTACHMENT} exclude={exclude} />
          </div>
        </div>
      )}

      {/* 回復・相談 */}
      {(type === "check" || type === "concept" || type === "symptom" || type === "self-function" || type === "mbti" || type === "attachment") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">回復・相談</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={RECOVERY} exclude={exclude} />
          </div>
        </div>
      )}

      {/* 職種別 */}
      {(type === "concept" || type === "jobtype" || type === "self-function") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">職種別</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={JOBTYPES} exclude={exclude} />
          </div>
        </div>
      )}

    </div>
  )
}

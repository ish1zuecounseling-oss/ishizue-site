// src/components/ArticleFooterLinks.tsx
// 記事末尾の統一導線ブロック
// 使い方: <ArticleFooterLinks type="check" /> または <ArticleFooterLinks type="concept" />
// typeは省略可（デフォルト: "check"）

import { Link } from "react-router-dom"

type Props = {
  /** 記事の種類に応じてブロックの構成を変える */
  type?: "check" | "concept" | "symptom" | "jobtype"
  /** 表示しないURLを除外する（自分自身の記事を除外するのに使う） */
  exclude?: string[]
}

const CHECKS = [
  { href: "/articles/helper-empathy-check",           text: "共感疲労チェック（20項目・3分）" },
  { href: "/articles/helper-burnout-check",            text: "バーンアウト診断（20項目）" },
  { href: "/articles/helper-emotional-labor-check",    text: "感情労働チェック（20項目）" },
  { href: "/articles/helper-boundary-check",           text: "境界線セルフチェック（20項目）" },
  { href: "/articles/secondary-trauma-check",          text: "二次受傷チェック（15項目）" },
  { href: "/articles/helper-emotional-numbness-check", text: "感情麻痺チェック（15項目）" },
]

const SYMPTOMS = [
  { href: "/articles/helper-client-stuck-in-head",     text: "利用者の話が頭から離れない" },
  { href: "/articles/helper-emotional-numbness",       text: "感情が麻痺している" },
  { href: "/articles/helper-cannot-sleep",             text: "仕事のことが頭から離れず眠れない" },
  { href: "/articles/helper-cannot-rest-on-days-off",  text: "休日も休まらない" },
  { href: "/articles/helper-irritated-at-client",      text: "利用者にイライラしてしまう" },
  { href: "/articles/helper-aptitude-doubt",           text: "支援職に向いていないと感じる" },
  { href: "/articles/helper-want-to-quit",             text: "支援職を辞めたい" },
]

const CONCEPTS = [
  { href: "/articles/compassion-fatigue-complete",          text: "共感疲労とは（ピラー記事）" },
  { href: "/articles/empathy-fatigue-vs-secondary-trauma",  text: "二次受傷とは？｜共感疲労・PTSDとの違い" },
  { href: "/articles/helper-empathy-overload",              text: "共感しすぎて疲れる" },
]

const RECOVERY = [
  { href: "/articles/compassion-fatigue-recovery",          text: "共感疲労からの回復方法" },
  { href: "/articles/compassion-fatigue-recovery-period",   text: "回復期間の目安" },
  { href: "/articles/compassion-fatigue-medical-support",   text: "何科に相談すべきか" },
]

const JOBTYPES = [
  { href: "/articles/nurse-compassion-fatigue",             text: "看護師の共感疲労" },
  { href: "/articles/care-worker-compassion-fatigue",       text: "介護士の共感疲労" },
  { href: "/articles/school-counselor-compassion-fatigue",  text: "スクールカウンセラーの共感疲労" },
]

function LinkList({ items, exclude }: { items: { href: string; text: string }[]; exclude?: string[] }) {
  const filtered = exclude ? items.filter(i => !exclude.includes(i.href)) : items
  if (filtered.length === 0) return null
  return (
    <>
      {filtered.map(({ href, text }) => (
        <Link key={href} to={href} className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
          → {text}
        </Link>
      ))}
    </>
  )
}

export default function ArticleFooterLinks({ type = "check", exclude = [] }: Props) {
  return (
    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6 space-y-4">

      {/* チェック系記事（常に表示） */}
      <div>
        <p className="text-xs font-medium text-stone-600 mb-2">今の状態を確認する</p>
        <div className="flex flex-col gap-1.5">
          <LinkList items={CHECKS} exclude={exclude} />
        </div>
      </div>

      {/* 症状記事（check・symptom・jobtypeで表示） */}
      {(type === "check" || type === "symptom" || type === "jobtype") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">症状から読む</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={SYMPTOMS} exclude={exclude} />
          </div>
        </div>
      )}

      {/* 概念記事（常に表示） */}
      <div className="border-t border-stone-100 pt-3">
        <p className="text-xs font-medium text-stone-600 mb-2">背景を理解する</p>
        <div className="flex flex-col gap-1.5">
          <LinkList items={CONCEPTS} exclude={exclude} />
        </div>
      </div>

      {/* 回復記事（check・concept・symptomで表示） */}
      {(type === "check" || type === "concept" || type === "symptom") && (
        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-medium text-stone-600 mb-2">回復・相談</p>
          <div className="flex flex-col gap-1.5">
            <LinkList items={RECOVERY} exclude={exclude} />
          </div>
        </div>
      )}

      {/* 職種別（concept・jobtypeで表示） */}
      {(type === "concept" || type === "jobtype") && (
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

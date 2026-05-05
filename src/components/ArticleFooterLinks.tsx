// src/components/ArticleFooterLinks.tsx
// 記事末尾の統一導線ブロック
//
// 使い方:
//   <ArticleFooterLinks type="check" exclude={["/articles/helper-empathy-check"]} />
//
// type一覧:
//   "check"       → チェック記事
//   "symptom"     → 症状記事
//   "concept"     → 概念記事
//   "self-function" → 自己機能クラスター
//   "mbti"        → MBTI流入クラスター
//   "attachment"  → 愛着・対人パターン
//   "recovery"    → 回復クラスター（将来追加予定）
//   "jobtype"     → 職種別記事

import { Link } from "react-router-dom"

type TypeKey = "check" | "concept" | "symptom" | "jobtype" | "self-function" | "mbti" | "attachment" | "recovery"

type Props = {
  type?: TypeKey
  exclude?: string[]
}

type LinkItem = { href: string; text: string }

/* -------------------------------------------------------------------------- */
/*  固定記事                                                                    */
/* -------------------------------------------------------------------------- */

const FIRST_READ: LinkItem = {
  href: "/articles/helper-empathy-check",
  text: "共感疲労チェック（20項目・3分）——まずここから",
}

/* -------------------------------------------------------------------------- */
/*  クラスター定義（追加はここに）                                               */
/* -------------------------------------------------------------------------- */

const CLUSTERS: Record<string, LinkItem[]> = {

  checks: [
    { href: "/articles/helper-burnout-check",            text: "バーンアウト診断（20項目）" },
    { href: "/articles/helper-emotional-labor-check",    text: "感情労働チェック（20項目）" },
    { href: "/articles/helper-boundary-check",           text: "境界線セルフチェック（20項目）" },
    { href: "/articles/secondary-trauma-check",          text: "二次受傷チェック（15項目）" },
    { href: "/articles/helper-emotional-numbness-check", text: "感情麻痺チェック（15項目）" },
  ],

  symptoms: [
    { href: "/articles/helper-client-stuck-in-head",    text: "利用者の話が頭から離れない" },
    { href: "/articles/helper-emotional-numbness",      text: "感情が麻痺している" },
    { href: "/articles/helper-cannot-sleep",            text: "仕事のことが頭から離れず眠れない" },
    { href: "/articles/helper-cannot-rest-on-days-off", text: "休日も休まらない" },
    { href: "/articles/helper-irritated-at-client",     text: "利用者にイライラしてしまう" },
    { href: "/articles/helper-cannot-say-no",           text: "断れない・NOと言えない" },
    { href: "/articles/helper-carrying-clients",        text: "利用者を背負ってしまう" },
    { href: "/articles/helper-cannot-switch-off",       text: "仕事と感情が切り離せない" },
    { href: "/articles/helper-responsibility-burnout",  text: "責任感が強すぎて潰れそう" },
    { href: "/articles/helper-pulled-by-client",        text: "利用者に引っ張られる" },
    { href: "/articles/helper-self-blame",              text: "「自分のせいだ」が止まらない" },
    { href: "/articles/helper-guilt-about-suffering",   text: "もっとできたはずという罪悪感" },
    { href: "/articles/helper-aptitude-doubt",          text: "支援職に向いていないと感じる" },
    { href: "/articles/helper-want-to-quit",            text: "支援職を辞めたい" },
    { href: "/articles/helper-consider-leave",          text: "休職したくなる" },
  ],

  concepts: [
    { href: "/articles/compassion-fatigue-complete",          text: "共感疲労とは（総合解説・ピラー）" },
    { href: "/articles/helper-empathy-overload",              text: "共感しすぎて疲れる" },
    { href: "/articles/empathy-fatigue-vs-secondary-trauma",  text: "二次受傷とは？｜共感疲労・PTSDとの違い" },
    { href: "/articles/compassion-fatigue-vs-depression",     text: "共感疲労とうつ病の違い" },
    { href: "/articles/why-support-workers-lose-themselves",  text: "なぜ支援職は自分を見失うのか（総合ピラー）" },
  ],

  recovery: [
    { href: "/articles/compassion-fatigue-recovery",        text: "共感疲労からの回復方法" },
    { href: "/articles/compassion-fatigue-recovery-period", text: "回復期間の目安" },
    { href: "/articles/compassion-fatigue-medical-support", text: "何科に相談すべきか" },
    { href: "/articles/helper-mental-recovery",             text: "休んでも回復しない理由" },
  ],

  selfFunction: [
    { href: "/articles/self-function-what",           text: "自己機能とは何か（ピラー）" },
    { href: "/articles/self-function-decline",        text: "自己機能が低下するとどうなるか（症状ハブ）" },
    { href: "/articles/other-centered-living",        text: "他人軸で生きてしまう" },
    { href: "/articles/emotion-unknown",              text: "感情がわからない" },
    { href: "/articles/what-do-i-want",               text: "やりたいことがわからない" },
    { href: "/articles/tired-but-cannot-rest",        text: "疲れているのに休めない" },
    { href: "/articles/feeling-nothing",              text: "何も感じない・感情が動かない" },
    { href: "/articles/overthinking-needs-sensation", text: "考えすぎる人に必要なのは感覚" },
    { href: "/articles/afraid-to-leave-role",         text: "役割を降りるのが怖い（到達点）" },
  ],

  mbti: [
    { href: "/articles/infj-living",           text: "INFJは本当に生きづらいのか" },
    { href: "/articles/ni-ti-loop",             text: "Ni-Tiループとは何か" },
    { href: "/articles/empathy-brain-fatigue",  text: "共感しすぎる人はなぜ脳疲労しやすいのか" },
    { href: "/articles/beyond-mbti",            text: "MBTIを超えた自己理解" },
  ],

  attachment: [
    { href: "/articles/working-model",       text: "ワーキングモデルとは何か" },
    { href: "/articles/avoidant-attachment", text: "回避型愛着と支援職" },
    { href: "/articles/anxious-attachment",  text: "不安型愛着とNOが言えない" },
    { href: "/articles/over-adaptation",     text: "過剰適応と見捨てられ不安" },
  ],

  jobtypes: [
    { href: "/articles/nurse-compassion-fatigue",            text: "看護師の共感疲労" },
    { href: "/articles/care-worker-compassion-fatigue",      text: "介護士の共感疲労" },
    { href: "/articles/school-counselor-compassion-fatigue", text: "スクールカウンセラーの共感疲労" },
  ],

  // 将来追加予定
  // nervousSystem: [...],
  // trauma: [...],
  // emotionalLabor: [...],
}

/* -------------------------------------------------------------------------- */
/*  表示ルール                                                                  */
/* -------------------------------------------------------------------------- */

// type ごとに表示するクラスターキーを定義
const SHOW_RULES: Record<TypeKey, string[]> = {
  "check":         ["checks", "symptoms", "concepts", "recovery"],
  "symptom":       ["checks", "symptoms", "concepts", "recovery"],
  "concept":       ["checks", "concepts", "selfFunction", "mbti", "attachment", "recovery", "jobtypes"],
  "self-function": ["checks", "symptoms", "selfFunction", "mbti", "attachment", "recovery", "jobtypes"],
  "mbti":          ["checks", "symptoms", "selfFunction", "mbti", "recovery"],
  "attachment":    ["checks", "symptoms", "selfFunction", "attachment", "recovery"],
  "recovery":      ["checks", "symptoms", "concepts", "recovery", "selfFunction"],
  "jobtype":       ["checks", "symptoms", "concepts", "jobtypes"],
}

const SECTION_LABELS: Record<string, string> = {
  checks:       "今の状態を確認する",
  symptoms:     "症状から読む",
  concepts:     "背景を理解する",
  recovery:     "回復・相談",
  selfFunction: "自己機能・自己理解",
  mbti:         "性格診断を超えた自己理解",
  attachment:   "愛着・対人パターン",
  jobtypes:     "職種別",
}

/* -------------------------------------------------------------------------- */
/*  Helper                                                                     */
/* -------------------------------------------------------------------------- */

function LinkList({ items, exclude, max }: { items: LinkItem[]; exclude?: string[]; max?: number }) {
  let filtered = exclude ? items.filter((i) => !exclude.includes(i.href)) : items
  if (max) filtered = filtered.slice(0, max)
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

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ArticleFooterLinks({ type = "check", exclude = [] }: Props) {
  const isFirstReadExcluded = exclude.includes(FIRST_READ.href)
  const sectionsToShow = SHOW_RULES[type] ?? SHOW_RULES["check"]

  return (
    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-6 space-y-4">

      {/* 「初めての方へ」固定ブロック */}
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

      {/* 動的セクション */}
      {sectionsToShow.map((key, i) => {
        const items = CLUSTERS[key]
        if (!items) return null
        const isFirst = i === 0
        return (
          <div key={key} className={isFirst && !isFirstReadExcluded ? "border-t border-stone-100 pt-3" : isFirst ? "" : "border-t border-stone-100 pt-3"}>
            <p className="text-xs font-medium text-stone-600 mb-2">{SECTION_LABELS[key]}</p>
            <div className="flex flex-col gap-1.5">
              <LinkList
                items={items}
                exclude={exclude}
                max={key === "symptoms" ? 5 : undefined}
              />
            </div>
          </div>
        )
      })}

    </div>
  )
}

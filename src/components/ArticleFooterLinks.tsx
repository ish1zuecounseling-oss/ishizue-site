// src/components/ArticleFooterLinks.tsx
// 記事末尾の統一導線ブロック
//
// 使い方:
//   <ArticleFooterLinks type="check" exclude={["/articles/helper-empathy-check"]} />
//
// type一覧:
//   "check"         → チェック記事
//   "symptom"       → 症状記事
//   "concept"       → 概念記事
//   "self-function" → 自己機能クラスター
//   "mbti"          → MBTI流入クラスター
//   "attachment"    → 愛着・対人パターン
//   "recovery"      → 回復クラスター
//   "jobtype"       → 職種別記事

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
/*  分岐ナビ定義                                                                */
/*  type ごとに「今の状態から近い記事」を3〜4本表示                              */
/*  読者の自己分類を促し、内部回遊を強化する                                     */
/* -------------------------------------------------------------------------- */

type BranchItem = { label: string; desc: string; href: string }

const BRANCH_NAV: Partial<Record<TypeKey, { title: string; items: BranchItem[] }>> = {
  "check": {
    title: "今の状態に近いのはどれですか？",
    items: [
      { label: "人と話すだけで疲れる",         desc: "コミュニケーション疲れ・感情労働",     href: "/articles/communication-fatigue" },
      { label: "仕事で演じている感覚がある",    desc: "感情労働・他人軸",                   href: "/articles/acting-fatigue" },
      { label: "休んでも回復しない",            desc: "脳疲労・セルフケアが効かない理由",    href: "/articles/why-self-care-doesnt-work" },
      { label: "辞めたいのに動けない",          desc: "退職の判断・ブロックの整理",          href: "/articles/quit-job-timing" },
    ],
  },
  "symptom": {
    title: "今の状態に近いのはどれですか？",
    items: [
      { label: "感情がわからない・動かない",    desc: "自己機能の消耗・感情麻痺",            href: "/articles/emotion-unknown" },
      { label: "常に気が張っている",            desc: "慢性緊張・神経系の過活動",            href: "/articles/always-tense" },
      { label: "自分がない・他人軸",            desc: "他人軸・自己喪失",                   href: "/articles/other-centered-living" },
      { label: "「いつかバレる」感覚がある",    desc: "インポスター症候群・役割依存",         href: "/articles/impostor-syndrome" },
    ],
  },
  "concept": {
    title: "背景を深く理解したい方へ",
    items: [
      { label: "なぜ支援職ほど消耗するのか",    desc: "構造的消耗の全体像",                  href: "/articles/why-support-workers-lose-themselves" },
      { label: "自己機能の低下とは何か",        desc: "感情・感覚・欲求が消える仕組み",      href: "/articles/self-function-what" },
      { label: "ワーキングモデルとの関係",      desc: "幼少期から続くパターン",              href: "/articles/working-model" },
      { label: "安全基地と回復の土台",          desc: "回復に何が必要か",                   href: "/articles/safe-base" },
    ],
  },
  "self-function": {
    title: "今の状態に近いのはどれですか？",
    items: [
      { label: "感情がわからない・空虚感がある", desc: "感情麻痺・何も感じない",             href: "/articles/feeling-nothing" },
      { label: "何がしたいかわからない",         desc: "欲求・動機の消失",                  href: "/articles/what-do-i-want" },
      { label: "「いつかバレる」が止まらない",   desc: "インポスター症候群・役割依存",        href: "/articles/impostor-check-20" },
      { label: "役割を降りることが怖い",         desc: "役割依存・自己価値の回復",           href: "/articles/afraid-to-leave-role" },
    ],
  },
  "mbti": {
    title: "MBTIの先にある自己理解へ",
    items: [
      { label: "「自分がない」感覚がある",       desc: "他人軸・自己機能の消耗",             href: "/articles/other-centered-living" },
      { label: "共感しすぎて消耗する",           desc: "共感疲労・感情労働との関係",          href: "/articles/hsp-compassion-fatigue" },
      { label: "考えすぎて疲れる",              desc: "脳疲労・反芻思考",                   href: "/articles/overthinking-needs-sensation" },
      { label: "「なぜこうなるのか」を知りたい", desc: "消耗の構造的理解",                   href: "/articles/why-support-workers-lose-themselves" },
    ],
  },
  "attachment": {
    title: "今の状態に近いのはどれですか？",
    items: [
      { label: "断れない・NOが言えない",         desc: "不安型愛着・境界線の消耗",            href: "/articles/anxious-attachment" },
      { label: "弱さを見せられない",             desc: "回避型愛着・相談できない理由",        href: "/articles/avoidant-attachment" },
      { label: "他人軸で生きてしまう",           desc: "過剰適応・役割依存",                 href: "/articles/over-adaptation" },
      { label: "「役に立たないと不安」がある",    desc: "条件付き自己価値・ワーキングモデル",  href: "/articles/self-value-unknown" },
    ],
  },
  "recovery": {
    title: "回復の入口——今どこにいますか？",
    items: [
      { label: "セルフケアをしても回復しない",   desc: "消耗の種類と回復方法のズレ",          href: "/articles/why-self-care-doesnt-work" },
      { label: "安心できる場所がない",           desc: "安全基地・弱さを出せる場所",          href: "/articles/safe-base" },
      { label: "感情・感覚が戻ってこない",        desc: "感覚から始まる回復プロセス",          href: "/articles/recovering-feeling" },
      { label: "身体が緊張したままほぐれない",   desc: "慢性緊張・神経系の回復",              href: "/articles/always-tense" },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/*  クラスター定義                                                               */
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
    { href: "/articles/why-self-care-doesnt-work",          text: "セルフケアが効かない理由" },
    { href: "/articles/safe-base",                          text: "安全基地とは——回復の土台" },
    { href: "/articles/recovering-feeling",                 text: "感情・感覚を取り戻す方法" },
    { href: "/articles/helper-mental-recovery",             text: "休んでも回復しない理由" },
    { href: "/articles/compassion-fatigue-medical-support", text: "何科に相談すべきか" },
  ],

  selfFunction: [
    { href: "/articles/impostor-syndrome",            text: "インポスター症候群とは（自信がない・バレる恐れ）" },
    { href: "/articles/impostor-check-20",            text: "インポスター症候群チェック（20項目）" },
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

  nervousSystem: [
    { href: "/articles/always-tense",           text: "常に気が張っている——慢性緊張の正体" },
    { href: "/articles/safety-makes-sleepy",    text: "安心すると眠くなる理由" },
    { href: "/articles/body-sensation-unknown", text: "身体感覚がわからない" },
    { href: "/articles/recovering-feeling",     text: "感情・感覚を取り戻す方法" },
  ],

  // 将来追加予定
  // trauma: [...],
  // emotionalLabor: [...],
}

/* -------------------------------------------------------------------------- */
/*  表示ルール                                                                  */
/* -------------------------------------------------------------------------- */

const SHOW_RULES: Record<TypeKey, string[]> = {
  "check":         ["checks", "symptoms", "concepts", "recovery"],
  "symptom":       ["checks", "symptoms", "concepts", "recovery"],
  "concept":       ["checks", "concepts", "selfFunction", "mbti", "attachment", "recovery", "jobtypes"],
  "self-function": ["checks", "symptoms", "selfFunction", "mbti", "attachment", "recovery", "jobtypes"],
  "mbti":          ["checks", "symptoms", "selfFunction", "mbti", "recovery"],
  "attachment":    ["checks", "symptoms", "selfFunction", "attachment", "recovery"],
  "recovery":      ["checks", "symptoms", "concepts", "recovery", "nervousSystem", "selfFunction"],
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
  nervousSystem: "神経系・身体感覚",
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
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
  const branchNav = BRANCH_NAV[type]

  return (
    <div className="mt-6 space-y-3">

      {/* ── 分岐ナビ（上部）──────────────────────────────── */}
      {branchNav && (
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <p className="text-xs font-medium text-stone-500 mb-3">{branchNav.title}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {branchNav.items
              .filter((item) => !exclude.includes(item.href))
              .map(({ label, desc, href }) => (
                <Link
                  key={href}
                  to={href}
                  className="group flex flex-col gap-0.5 px-3 py-2.5 rounded-lg border border-stone-100 bg-stone-50 hover:bg-white hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-medium text-stone-700 group-hover:text-stone-900 leading-snug">
                    {label}
                  </span>
                  <span className="text-[10px] text-stone-400 leading-relaxed">{desc}</span>
                </Link>
              ))}
          </div>
        </div>
      )}

      {/* ── クラスターリンク（下部）──────────────────────── */}
      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4">

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
    </div>
  )
}

// src/data/chronicleSafety.ts
// 成長の書 — 安全に関わる文言を1か所にまとめる(差し替え用)
//
// ここにある文言は、確認が済むまで「確定版」ではありません。
// - 窓口の一覧:#いのちSOS は 2026年11月28日時点で受付休止中。12月1日に伊藤さんが公式情報を確認する(未解決事項 U-10)。
// - 4-2 の台本と促し:資料B(B-v4.2)のとおり。石川さんのレビューの原文は手元で見つからず未照合。
//   確認できた出典は v4.1 統合修正指示(伊藤・石川・水野)E の「どちらの確認もなかった場合、1回だけ促す」。
//   促しの条件 both_missing は暫定(確定ではない)。片方でも欠けたら促す either_missing に切り替え可能。
// 確認の結果が出たら、このファイルの値だけを直す(試験官プロンプト・教材は、ここから文言を読む)。

export type ContactCategory = 'emergency' | 'child' | 'consult' | 'medical'

export interface CrisisContact {
  id: string
  category: ContactCategory
  label: string
  tel?: string
  /** false のものは、どの文言にも出さない */
  enabled: boolean
  /** 確認の状態(画面には出さない。差し替えの判断用) */
  status: 'existing' | 'suspended_unconfirmed'
  /** 受付時間(公式の情報で確かめたもの。未確認なら書かない)。「24時間」は確かめた窓口だけに書く */
  hours?: string
  memo?: string
}

// 受付時間は 2026-11-28 に確認(厚生労働省「まもろうよこころ」電話相談窓口、厚生労働省「こころの健康相談統一ダイヤル」、
// 大阪府「児童相談所虐待対応ダイヤル189」)。#いのちSOS は公式には24時間365日だが、受付休止中のため enabled: false。
export const CRISIS_CONTACTS: CrisisContact[] = [
  { id: 'tel119', category: 'emergency', label: '救急', tel: '119', enabled: true, status: 'existing', hours: '24時間' },
  { id: 'tel110', category: 'emergency', label: '警察', tel: '110', enabled: true, status: 'existing', hours: '24時間' },
  { id: 'tel189', category: 'child', label: '児童相談所', tel: '189', enabled: true, status: 'existing', hours: '24時間365日' },
  { id: 'kokoro', category: 'consult', label: 'こころの健康相談統一ダイヤル', tel: '0570-064-556', enabled: true, status: 'existing', hours: '都道府県・政令指定都市によって異なる' },
  { id: 'yorisoi', category: 'consult', label: 'よりそいホットライン', tel: '0120-279-338', enabled: true, status: 'existing', hours: '24時間' },
  {
    id: 'inochisos', category: 'consult', label: '#いのちSOS', tel: '0120-061-338', enabled: false, status: 'suspended_unconfirmed',
    memo: '2026年11月は受付休止。12月1日の確認の結果で enabled を決める(U-10)。確認できるまで「すぐに話せる窓口」に出さない',
  },
  { id: 'medical', category: 'medical', label: '精神科・心療内科', enabled: true, status: 'existing' },
]

const CATEGORY_LABEL: Record<ContactCategory, string> = {
  emergency: '緊急',
  child: '子どもの虐待の通告・相談',
  consult: '相談窓口',
  medical: '医療',
}

const fmt = (c: CrisisContact) => (c.tel ? `${c.label}(${c.tel})` : c.label)

/** 指定した用途の窓口を、用途ごとに分けて1行の文にする(enabled のものだけ) */
export function contactsByPurpose(categories: ContactCategory[]): string {
  return categories
    .map(cat => {
      const items = CRISIS_CONTACTS.filter(c => c.enabled && c.category === cat).map(fmt)
      return items.length ? `${CATEGORY_LABEL[cat]}：${items.join('、')}` : ''
    })
    .filter(Boolean)
    .join('。')
}

/** すぐに話せる窓口(試験官プロンプトの「守ること」で使う。enabled のものだけ。今の本番の並びと書き方のまま) */
const IMMEDIATE_IDS = ['tel119', 'kokoro', 'yorisoi', 'inochisos']
export function immediateContacts(): string {
  return IMMEDIATE_IDS.map(id => CRISIS_CONTACTS.find(c => c.id === id)!)
    .filter(c => c.enabled)
    .map(c => (c.id === 'tel119' ? '119番' : `${c.label}${c.id === 'inochisos' ? ' ' : ''}${c.tel}`))
    .join('、')
}

/** 試験官向け:窓口の受付時間の違い(CP5・Lv.5の安全計画で使う)。新しい評価項目ではなく、判定の補足 */
const HOURS_IDS = ['tel119', 'tel110', 'kokoro', 'yorisoi', 'inochisos']
export function contactHoursNote(): string {
  const list = HOURS_IDS.map(id => CRISIS_CONTACTS.find(c => c.id === id)!)
    .filter(c => c.enabled && c.hours)
    .map(c => `${c.label}(${c.tel})は${c.hours}`)
    .join('、')
  return `窓口の受付時間は窓口ごとに違う(${list})。すべての窓口が24時間とは限らない。受験者が受付時間を言えなかったことだけを理由に「未達」にしない。受付時間が限られる窓口を「24時間いつでもつながる」と案内した場合は、コメントで指摘する。`
}

// ── チェックポイント4-2(危機の情報)の標準台本と促し(資料B B-v4.2) ──

export const CP42 = {
  /** 確認の状態。'unconfirmed' のあいだは、試験では【試行】として扱う(合否に入れない) */
  reviewStatus: 'unconfirmed' as 'unconfirmed' | 'confirmed',
  firstCue: '「…実は最近、いなくなったほうが楽なのかなって思うことがあって。」',
  responses: [
    ['気持ちについて尋ねられた', '「死にたい、ってはっきりじゃないけど、消えたいなって思うことはあります。」'],
    ['切迫性(今、自傷・自殺に関する考えや行動があるか)を尋ねられた', '「今、何かしようとは思ってないです。何かしようとしたこともないです。」'],
    ['安全環境(今夜一人か、頼れる人がいるか)を尋ねられた', '「今日は家に一人です。」'],
    ['手段・計画・過去の企図など、詳しく尋ねられた', '「そこまでは考えたことないです。」(それ以上の情報は出さない)'],
    ['相談・受診・窓口を提案された', '「病院はやっぱり怖いけど…電話くらいなら、できるかもしれないです。」'],
    ['次の行動を一緒に決めようとされた', '提案に沿って短く同意する(例:「今夜つらくなったら、その番号に電話してみます」)'],
  ] as [string, string][],
  promptLine: '「実は、夜になると気持ちがつらくなることがあって……」',
  /** 暫定(確定ではない)。4-2を合否に入れる前(reviewStatus を 'confirmed' にする前)に再確認する。
   *  'both_missing' = 2ターンの中で切迫性も安全環境も確かめなかった場合だけ(資料Bの今の条件)。'either_missing' = 片方でも確かめなかった場合 */
  promptCondition: 'both_missing' as 'both_missing' | 'either_missing',
  promptTurns: 2,
  look: '危機の情報を聞き流さず気持ちを確かめたか。切迫性(今、自傷・自殺に関する考えや行動があるか)と安全環境(今夜一人か、頼れる人がいるか)の両方を確かめたか。一人で抱え込まないことを伝えたか。適切な資源・医療・SVなどへのつなぎを示したか。今日から次の接触までの具体的な行動を合意したか。過去の企図歴・手段や計画の体系的な評価・長期の安全計画はLv.1では求めない(加点もしない)。',
}

export function cp42PromptRule(): string {
  const cond = CP42.promptCondition === 'both_missing'
    ? '切迫性も安全環境も確かめなかった場合に限り'
    : '切迫性か安全環境のどちらか一方でも確かめなかった場合に'
  return `最初の提示のあと、受験者の発言を${CP42.promptTurns}回数える。その中で${cond}、1回だけ ${CP42.promptLine} と言う(この文は安全環境の情報を含まない)。促しは1回だけ。それ以降も確かめなければ、そのまま進める。台本にない質問には、設定と矛盾しない範囲で短く答え、新しい危険の情報は足さない。`
}

// ── 試験の前の予告と、中断(資料C C-3、本文 3章・7章) ──

export const EXAM_NOTICE = 'この試験には、相談者の安全に関わる話題が含まれます。負担を感じた場合は、試験を中断することができます。中断しても不利益な評価にはなりません。体調が整ったタイミングで再受験できます。'

export const INTERRUPT_RULE = '受験者が「中断」と送った場合は、ロールプレイと口頭試問をそこで止め、採点・判定はしない。結果には「中断(判定なし)」とだけ書き、不合格でも能力不足でもないこと、体調が整ったときにもう一度受けられることを伝える。'

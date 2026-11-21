/**
 * GA4イベント送信用ヘルパー関数
 *
 * チェックツールでのユーザー行動を計測するための関数群。
 * 「どのチェックが何回完了されているか」「どのスコア帯がLINE/カウンセリングに進むか」を可視化する。
 *
 * 使用例:
 *   import { trackCheckComplete, trackLineClickFromCheck } from "../../lib/analytics"
 *
 *   // チェック完了時
 *   useEffect(() => {
 *     if (level) {
 *       trackCheckComplete("abandonment-anxiety-check", score, level, 15)
 *     }
 *   }, [level])
 *
 *   // LINEクリック時
 *   <a onClick={() => trackLineClickFromCheck("abandonment-anxiety-check", level)} ...>
 */

/**
 * チェック完了時にGA4にイベントを送信
 * @param checkName チェック記事のpath末尾(例: "abandonment-anxiety-check")
 * @param score チェック項目で当てはまった数
 * @param level スコア帯("low" | "mid" | "high"など)
 * @param maxScore チェック項目の総数(15項目なら15)
 */
export function trackCheckComplete(
  checkName: string,
  score: number,
  level: string,
  maxScore: number
): void {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return

  gtag("event", "check_complete", {
    check_name: checkName,
    score: score,
    level: level,
    max_score: maxScore,
    score_ratio: Math.round((score / maxScore) * 100),
  })
}

/**
 * チェック結果ページからLINEクリックされたときにGA4にイベントを送信
 * @param checkName チェック記事のpath末尾
 * @param level クリック時点のスコア帯
 */
export function trackLineClickFromCheck(
  checkName: string,
  level: string
): void {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return

  gtag("event", "line_click_from_check", {
    check_name: checkName,
    level: level,
  })
}

/**
 * チェック結果ページからカウンセリングCTAクリックされたときにGA4にイベントを送信
 * @param checkName チェック記事のpath末尾
 * @param level クリック時点のスコア帯
 */
export function trackCounselingClickFromCheck(
  checkName: string,
  level: string
): void {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return

  gtag("event", "counseling_click_from_check", {
    check_name: checkName,
    level: level,
  })
}

/**
 * チェック結果ページから関連記事リンクがクリックされたときにGA4にイベントを送信
 * (Phase 1.5で追加機能)
 * @param checkName 元のチェック記事のpath末尾
 * @param level クリック時点のスコア帯
 * @param destination クリック先のpath
 */
export function trackRelatedClickFromCheck(
  checkName: string,
  level: string,
  destination: string
): void {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return

  gtag("event", "related_click_from_check", {
    check_name: checkName,
    level: level,
    destination: destination,
  })
}

/**
 * チェックで選ばれた項目を、項目ごとのイベントとしてGA4に送る(集計用)。
 * イベント名に項目番号を入れるので、GA4のカスタム定義の登録は不要。
 * 送るのは「何番の項目が選ばれたか」だけで、自由記述や個人を特定する情報は送らない。
 * @param prefix イベント名の頭(例: "cm_item_")
 * @param indices 選ばれた項目の番号(0始まり)
 */
export function trackCheckItems(prefix: string, indices: number[]): void {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return
  for (const i of indices) {
    gtag("event", prefix + String(i + 1).padStart(2, "0"))
  }
}

/* -------------------------------------------------------------------------- */
/*  記事末尾の推薦の計測(回遊再設計 フェーズ1。仕様は計画書の8章)              */
/* -------------------------------------------------------------------------- */

export type RecStructure = "new_3layer" | "legacy"
export type RecSlotType =
  | "primary" | "aux1" | "aux2" | "hub" | "explore"
  | "legacy_pillar" | "legacy_prev_next" | "legacy_random"
export type RecTargetType = "article" | "self_check" | "article_list" | "ai_assistant"

function recGtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === "undefined") return null
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  return typeof gtag === "function" ? gtag : null
}

/** 推薦ユニットが表示の条件を満たしたとき(1ページ表示につき1回) */
export function trackRecImpression(sourceId: string, recStructure: RecStructure, recCount: number): void {
  const gtag = recGtag()
  if (!gtag) return
  try {
    gtag("event", "article_rec_impression", { source_id: sourceId, rec_structure: recStructure, rec_count: recCount })
  } catch { /* 計測の失敗で画面を止めない */ }
}

/** 推薦ユニットの中のリンクを押したとき */
export function trackRecClick(sourceId: string, targetId: string, targetType: RecTargetType, slotType: RecSlotType): void {
  const gtag = recGtag()
  if (!gtag) return
  try {
    gtag("event", "article_rec_click", { source_id: sourceId, target_id: targetId, target_type: targetType, slot_type: slotType })
  } catch { /* noop */ }
}

/** 推薦から移った先で、アクティブ滞在30秒以上かつスクロール50%以上になったとき(1回の移動につき1回) */
export function trackPostRecEngagement(
  sourceId: string, targetId: string, targetType: RecTargetType, slotType: RecSlotType, engagedSec: number,
): void {
  const gtag = recGtag()
  if (!gtag) return
  try {
    gtag("event", "post_rec_engagement", {
      source_id: sourceId, target_id: targetId, target_type: targetType, slot_type: slotType, engaged_sec: engagedSec,
    })
  } catch { /* noop */ }
}

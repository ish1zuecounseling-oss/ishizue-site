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

/**
 * siteStatus.ts
 * サイト全体の受付ステータス。
 *
 * 新規相談の受付を再開するときは、ACCEPTING_NEW_CLIENTS を true にするだけで、
 * トップ・記事一覧・プロフィール・ヘッダー/メニュー/フッター・記事下CTAの表示がまとめて切り替わる。
 */

/** 新規相談を受け付けているか(休止中は false) */
export const ACCEPTING_NEW_CLIENTS = false;

/** 受付休止中に「再開のお知らせ」を受け取ってもらう LINE の URL */
export const PAUSED_LINE_URL = "https://lin.ee/6H8Pzo6";

/** 休止中 CTA のクリック計測(既存の line_cta_click と同じ形式) */
export function trackPausedLineClick(label: string) {
  try {
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    g?.("event", "line_cta_click", { event_category: "CTA", event_label: label });
  } catch { /* noop */ }
}

/**
 * siteStatus.ts
 * サイト全体の受付ステータス。
 *
 * 新規相談の受付を再開するときは、ACCEPTING_NEW_CLIENTS を true にするだけで、
 * トップ・記事一覧・プロフィール・ヘッダー/メニュー/フッター・記事下CTAの表示がまとめて切り替わる。
 */

/** 新規相談を受け付けているか(休止中は false) */
export const ACCEPTING_NEW_CLIENTS = false;

/** 記事内の相談ボタンなどに付ける「（初回無料）」表記。休止中は表示しない */
export const FREE_FIRST = ACCEPTING_NEW_CLIENTS ? "（初回無料）" : "";

/** 受付休止中に「再開のお知らせ」を受け取ってもらう LINE の URL */
export const PAUSED_LINE_URL = "https://lin.ee/6H8Pzo6";

/** チェック結果などの相談ボタンのリンク先。休止中は LINE に切り替える */
export const CONTACT_HREF = ACCEPTING_NEW_CLIENTS ? "/#contact" : PAUSED_LINE_URL;

/** 相談ボタンに付けるリンク属性。休止中は LINE を別タブで開く */
export const CONTACT_LINK_PROPS: { target?: string; rel?: string } = ACCEPTING_NEW_CLIENTS
  ? {}
  : { target: "_blank", rel: "noopener noreferrer" };

/** 相談ボタンの文言。休止中は LINE 用の文言に置き換える */
export function ctaText(text: string): string {
  return ACCEPTING_NEW_CLIENTS ? text : "LINEで状態別の解説と再開のお知らせを受け取る";
}

/** 相談ボタンの下の補足。休止中は受付状況を伝える */
export function ctaSub(text: string): string {
  return ACCEPTING_NEW_CLIENTS ? text : "新規相談は受付休止中です ／ 再開時にLINEでお知らせします";
}

/** 休止中 CTA のクリック計測(既存の line_cta_click と同じ形式) */
export function trackPausedLineClick(label: string) {
  try {
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    g?.("event", "line_cta_click", { event_category: "CTA", event_label: label });
  } catch { /* noop */ }
}

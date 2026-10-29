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

/** 受付中なら open、休止中なら paused を返す(文言の切り替え用) */
export function whenOpen<T>(open: T, paused: T): T {
  return ACCEPTING_NEW_CLIENTS ? open : paused;
}

/** 受付休止中に、チェック結果の案内ブロックで使う見出しと説明(状態の重さ別) */
export const PAUSED_COPY = {
  light: {
    heading: "崩れる前に、今の状態を知っておく",
    body: "消耗は静かに進みます。状態別の解説を、LINEで順に受け取れます。読むだけで大丈夫です。",
  },
  mid: {
    heading: "この段階で知っておくと、深くなる前に手を打てます",
    body: "今の段階で起きやすいことと、できることを、LINEで順に受け取れます。読むだけで大丈夫です。",
  },
  high: {
    heading: "一人で抱え続けなくていい段階です",
    body: "状態別の解説をLINEで受け取れます。ただ、つらさが強いときや2週間以上続くときは、医療機関への相談を優先してください。",
  },
} as const;

/** 休止中 CTA のクリック計測(既存の line_cta_click と同じ形式) */
export function trackPausedLineClick(label: string) {
  try {
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    g?.("event", "line_cta_click", { event_category: "CTA", event_label: label });
  } catch { /* noop */ }
}

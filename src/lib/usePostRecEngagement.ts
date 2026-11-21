/**
 * post_rec_engagement の計測(計画書 8-5・8-6)。ArticleLayout と /ai-assistant で使う。
 *
 * - 表示(location.key)が変わったときに1回だけ sessionStorage を読み、すぐ消す。
 *   StrictMode の再実行では読み直さない(1回目に ref へ移した値を使う)。
 * - アクティブ滞在 = visibilityState が visible の時間の合計。タブが隠れている時間は含めない。
 * - スクロール到達率 = scrollY ÷ (ページ全体の高さ − 画面の高さ)。0〜1 に収め、最大値を保つ。
 *   スクロールできる範囲が0以下(画面に収まる短いページ)は 1 とする。
 * - 30秒以上 かつ 50%以上 を両方満たしたときに1回だけ送る。
 */

import { useEffect, useRef } from "react";
import { trackPostRecEngagement } from "./analytics";
import { consumeRecContext, type RecContext } from "./recContext";

const ACTIVE_MS_REQUIRED = 30_000;
const SCROLL_RATIO_REQUIRED = 0.5;

export function scrollReachRatio(): number {
  const doc = document.documentElement;
  const height = Math.max(doc.scrollHeight, document.body ? document.body.scrollHeight : 0);
  const scrollable = height - window.innerHeight;
  if (scrollable <= 0) return 1;
  const y = window.scrollY || doc.scrollTop || 0;
  return Math.min(1, Math.max(0, y / scrollable));
}

type VisitState = {
  key: string | null;
  ctx: RecContext | null;
  sent: boolean;
  activeMs: number;
  maxRatio: number;
};

export function usePostRecEngagement(locationKey: string) {
  const visit = useRef<VisitState>({ key: null, ctx: null, sent: false, activeMs: 0, maxRatio: 0 });

  useEffect(() => {
    if (visit.current.key !== locationKey) {
      visit.current = {
        key: locationKey,
        ctx: consumeRecContext(window.location.pathname + window.location.search),
        sent: false,
        activeMs: 0,
        maxRatio: 0,
      };
    }
    const v = visit.current;
    if (!v.ctx || v.sent) return;
    const ctx = v.ctx;

    let visibleSince: number | null = document.visibilityState === "visible" ? Date.now() : null;
    let disposed = false;
    let interval = 0;

    const activeNow = () => v.activeMs + (visibleSince !== null ? Date.now() - visibleSince : 0);
    const updateRatio = () => { v.maxRatio = Math.max(v.maxRatio, scrollReachRatio()); };
    const teardown = () => {
      if (disposed) return;
      disposed = true;
      // ここまでのアクティブ時間を ref に残す(StrictMode の再実行でも数え続けられるように)
      if (visibleSince !== null) { v.activeMs += Date.now() - visibleSince; visibleSince = null; }
      window.clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
    const check = () => {
      if (disposed || v.sent) return;
      updateRatio();
      const active = activeNow();
      if (active >= ACTIVE_MS_REQUIRED && v.maxRatio >= SCROLL_RATIO_REQUIRED) {
        v.sent = true;
        trackPostRecEngagement(
          ctx.source_id, ctx.target_id,
          ctx.target_type, ctx.slot_type, Math.floor(active / 1000),
        );
        teardown();
      }
    };
    function onScroll() { check(); }
    function onVisibility() {
      if (document.visibilityState === "visible") {
        if (visibleSince === null) visibleSince = Date.now();
      } else if (visibleSince !== null) {
        v.activeMs += Date.now() - visibleSince;
        visibleSince = null;
      }
      check();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    interval = window.setInterval(check, 1000);
    check();

    return teardown;
  }, [locationKey]);
}

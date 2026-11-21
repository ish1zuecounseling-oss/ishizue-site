/**
 * article_rec_impression の計測(計画書 8-2・8-3・8-6)。
 *
 * - 推薦ユニット = root の中の [data-rec-region] すべて。どれか1つが条件を満たしていれば「表示中」。
 * - マウント直後・IntersectionObserver・scroll・visibilitychange の4か所から sync() を呼ぶ。
 * - 条件を満たしたら1秒のタイマーを始め、外れたらすぐ止める。1秒後に条件と未送信をもう一度確かめて送る。
 * - 1ページ表示(location.key)につき1回。同じ表示の再描画や StrictMode の再実行では二重に送らない。
 */

import { useEffect, useRef, type RefObject } from "react";
import { trackRecImpression, type RecStructure } from "./analytics";

export function evaluateImpressionCondition(el: Element | null): boolean {
  if (!el || typeof document === "undefined" || document.visibilityState !== "visible") return false;
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  if (!(visibleHeight > 0)) return false;
  const ratioOk = rect.height > 0 && visibleHeight / rect.height >= 0.3;
  const topOk = rect.top <= vh - 150 && rect.bottom > 0;
  return ratioOk || topOk;
}

/** 送るときの rec_count。new_3layer は第1層の本数、legacy は表示中の推薦リンクの合計 */
function countRecs(root: Element, structure: RecStructure): number {
  if (structure === "new_3layer") return root.querySelectorAll('[data-rec-region] a[data-rec-layer="1"]').length;
  return root.querySelectorAll("[data-rec-region] a[data-rec-slot]").length;
}

type Options = {
  sourceId: string;
  structure: RecStructure;
  locationKey: string;
  enabled?: boolean;
};

export function useRecImpression(rootRef: RefObject<Element | null>, { sourceId, structure, locationKey, enabled = true }: Options) {
  // 「今の表示の key と、その表示で送ったかどうか」だけを持つ(PUSH・POP どちらの再訪も新しい表示として数える)
  const shown = useRef<{ key: string | null; sent: boolean }>({ key: null, sent: false });

  useEffect(() => {
    if (!enabled) return;
    if (shown.current.key !== locationKey) shown.current = { key: locationKey, sent: false };
    const state = shown.current;
    if (state.sent) return;
    const root = rootRef.current;
    if (!root) return;

    let disposed = false;
    let timer: number | undefined;
    let frame = 0;
    let observer: IntersectionObserver | null = null;

    const regions = (): Element[] => Array.from(root.querySelectorAll<Element>("[data-rec-region]"));
    const inView = () => regions().some(evaluateImpressionCondition);
    const stopTimer = () => {
      if (timer !== undefined) { window.clearTimeout(timer); timer = undefined; }
    };
    const teardown = () => {
      disposed = true;
      stopTimer();
      if (frame) { window.cancelAnimationFrame(frame); frame = 0; }
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", sync);
      if (observer) { observer.disconnect(); observer = null; }
    };
    const onComplete = () => {
      timer = undefined;
      if (disposed || state.sent) return;
      if (!inView()) return; // 1秒たったときの確かめ直し
      state.sent = true;
      trackRecImpression(sourceId, structure, countRecs(root, structure));
      teardown();
    };
    function sync() {
      if (disposed || state.sent) return;
      if (inView()) {
        if (timer === undefined) timer = window.setTimeout(onComplete, 1000);
      } else {
        stopTimer();
      }
    }
    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => { frame = 0; sync(); });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", sync);
    if (typeof IntersectionObserver === "function") {
      observer = new IntersectionObserver(() => sync(), { threshold: [0, 0.1, 0.3] });
      for (const el of regions()) observer.observe(el);
    }
    sync();

    return teardown;
  }, [enabled, locationKey, sourceId, structure, rootRef]);
}

/**
 * ScrollToTop.tsx
 * ページ遷移時にスクロールをトップに戻す。
 * /#contact のような hash 付き URL の場合はスキップ
 * （Layout.tsx / ArticleLayout.tsx の MutationObserver に任せる）。
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // hash がある場合（例: /#contact）はスクロールしない
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

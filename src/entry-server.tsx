/**
 * entry-server.tsx
 *
 * ビルド時のプリレンダリング専用。
 * 各ページの本文と構造化データ(JSON-LD)を静的HTMLに書き込むために、
 * scripts/generateStaticHtml.ts から呼び出されます。ブラウザでは使われません。
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes } from "./App";

export function render(url: string): { html: string; ldJson: string; head: string } {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );
  // Helmet が出力した <script type="application/ld+json"> だけを取り出す
  const scripts = helmetContext.helmet?.script.toString() ?? "";
  const ldJson = (scripts.match(/<script[^>]*application\/ld\+json[^>]*>[\s\S]*?<\/script>/g) ?? []).join("\n");
  // title / meta / link(記事以外のページで、テンプレートの既定値を置き換えるのに使う)
  const h = helmetContext.helmet;
  const head = h ? [h.title.toString(), h.meta.toString(), h.link.toString()].join("\n") : "";
  return { html, ldJson, head };
}

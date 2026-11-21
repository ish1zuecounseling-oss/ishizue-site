/**
 * 推薦の計測で使う URL の正規化(計画書 8-5)。
 * クリック時に保存する target_path と、移動先で比べる今の URL の両方に、この関数を使う。
 *
 * 1. オリジンと # 以降を除く
 * 2. path の末尾の / を除く(「/」だけのときは残す)。大文字・小文字は変えない
 * 3. クエリは、移動先の意味を変えるものだけ残す(/articles の tab と q)
 * 4. 残したクエリはキーの順に並べる
 */

const KEEP_QUERY: Record<string, readonly string[]> = {
  "/articles": ["tab", "q"],
};

export function normalizeRecPath(input: string): string {
  let s = (input ?? "").trim().replace(/^[a-z][a-z0-9+.-]*:\/\/[^/?#]*/i, "");
  const hash = s.indexOf("#");
  if (hash >= 0) s = s.slice(0, hash);
  const q = s.indexOf("?");
  let p = q >= 0 ? s.slice(0, q) : s;
  const query = q >= 0 ? s.slice(q + 1) : "";
  if (!p.startsWith("/")) p = `/${p}`;
  if (p.length > 1) p = p.replace(/\/+$/, "") || "/";

  const keep = KEEP_QUERY[p];
  if (!keep || !query) return p;
  const params = new URLSearchParams(query);
  const kept: [string, string][] = [];
  for (const key of keep) {
    const v = params.get(key);
    if (v !== null && v !== "") kept.push([key, v]);
  }
  if (kept.length === 0) return p;
  kept.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  return `${p}?${new URLSearchParams(kept).toString()}`;
}

/** 推薦先のページの種類(記事か、セルフチェックか)。スラッグが -check で終わるか -check- を含むものをセルフチェックとする */
export function pageTypeOfPath(p: string): "article" | "self_check" {
  const slug = p.split("/articles/")[1] ?? "";
  return /-check(-|$)/.test(slug) ? "self_check" : "article";
}

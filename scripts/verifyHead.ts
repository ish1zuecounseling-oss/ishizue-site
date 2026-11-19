/**
 * verifyHead.ts
 *
 * ビルド後(generate:static-html / generate:search-index の後)に、dist の静的HTMLを検査する。
 * 違反があれば一覧を表示して終了コード 1 で終わる(npm run build が失敗する)。
 * 前提が満たされていない場合(dist や記事データが古いなど)は、終了コード 2 と原因を表示する。
 *
 * HTML は正規表現ではなく、HTML5 パーサー(parse5)で解析する。
 *  - コメント内のタグ・script 内の文字列は、タグとして数えない
 *  - 属性名・rel/name の大文字小文字、単一引用符/二重引用符の違いを吸収する
 *  - <head> と <body> を区別する(body 内の canonical は有効とみなさず、違反にする)
 *
 * 検査の区分
 *  - 公開ページ(noindex でないもの)
 *      canonical: head にちょうど1本。正規URL(https://www.ishizue-counseling.jp + パス)と完全一致
 *      description: head にちょうど1本(必須)
 *      robots: meta が重複していない / index と noindex(follow と nofollow)の矛盾がない / noindex ではない
 *      FAQPage: 1つ以下(@graph 内も数える) / JSON-LD がすべて正しいJSON
 *      h1: H1_REQUIRED の対象は1つ以上
 *  - noindex ページ(NOINDEX_PAGES にあるものだけ)
 *      noindex であること、canonical は0〜1本(あれば正規URLと一致)、description 1本以下、FAQPage 1つ以下
 *      h1 は検査しない
 *  - 上記以外のページが noindex になっていたら違反(意図しない noindex を見つけるため)
 *  - ページ構成: 想定するページ(/、固定ページ、記事すべて)の静的HTMLがあること。想定外の静的HTMLがないこと
 *  - sitemap(dist/sitemap.xml): URLの重複がない / 全URLが dist にある / noindex ページを含まない /
 *      公開ページがすべて載っている
 *  - 運営者用の静的HTML(dist/admin/**.html): すべて noindex であること
 *  - 404.html: 専用の検査(あること / noindex / canonical なし / アプリのシェルであること)
 *  - 対象外: dist/admin 内の JSON など(HTML以外)
 *
 * h1 を必須にするページ
 *  記事(/articles/*)すべて、/articles、/profile、/for-helpers、/ai-assistant
 *  ※ "/" は現状、本文なしのシェルなので対象外(プリレンダは別の段階)
 *
 * 使い方: npm run verify:head       (dist を検査)
 *         npx tsx scripts/verifyHead.ts <dist のパス>   (別の場所の dist を検査)
 * 単独で実行する場合は、先に npm run build を実行しておくこと(記事データ src/data/articles.ts は
 * ビルドの最初の工程で生成される。古いままだと、終了コード 2 で止まる)。
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, dirname, relative, resolve, sep } from "path";
import { fileURLToPath } from "url";
import { parse } from "parse5";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST_DIR = process.argv[2] ? resolve(process.argv[2]) : join(ROOT, "dist");
const SITE_URL = "https://www.ishizue-counseling.jp";

/** 固定ページ(静的HTMLがあるはずのもの) */
const FIXED_PAGES = ["/articles", "/profile", "/for-helpers", "/ai-assistant", "/privacy", "/tokusho", "/terms"];
/** noindex であるはずのページ。これ以外が noindex なら違反 */
const NOINDEX_PAGES = new Set(["/privacy", "/tokusho", "/terms"]);
/** h1 を必須にするページ(記事は /articles/ で始まるもの全部) */
const H1_REQUIRED_PAGES = new Set(["/articles", "/profile", "/for-helpers", "/ai-assistant"]);
/** ページ検査から除くファイル・フォルダ */
const ADMIN_DIR = "admin";
const SKIP_FILES = new Set(["404.html"]);

/* ----------------------------- 最小の型(parse5 の既定ツリー) ----------------------------- */

interface Attr { name: string; value: string }
interface N {
  nodeName: string;
  tagName?: string;
  attrs?: Attr[];
  childNodes?: N[];
  value?: string;
}

const violations: string[] = [];
const fail = (page: string, msg: string) => violations.push(page + " … " + msg);

function precondition(msg: string): never {
  console.error("❌ verifyHead: 前提が満たされていません");
  console.error("   " + msg);
  console.error("   → 先に `npm run build` を実行してください(単独実行用の前提チェックです。検査の違反ではありません)");
  process.exit(2);
}

/* ----------------------------- ファイル探索 ----------------------------- */

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

/** dist/a/b/index.html → /a/b  、dist/index.html → / */
function pagePath(file: string): string {
  const rel = relative(DIST_DIR, file).split(sep).join("/");
  return "/" + rel.replace(/(^|\/)index\.html$/, "");
}

function isAdminFile(file: string): boolean {
  return relative(DIST_DIR, file).split(sep)[0] === ADMIN_DIR;
}

/* ----------------------------- HTML 解析の補助 ----------------------------- */

function parseHtml(html: string): { head: N | null; body: N | null; doc: N } {
  const doc = parse(html) as unknown as N;
  const htmlEl = (doc.childNodes ?? []).find((n) => n.nodeName === "html");
  const head = htmlEl?.childNodes?.find((n) => n.nodeName === "head") ?? null;
  const body = htmlEl?.childNodes?.find((n) => n.nodeName === "body") ?? null;
  return { head, body, doc };
}

function descendants(node: N | null, out: N[] = []): N[] {
  if (!node) return out;
  for (const c of node.childNodes ?? []) {
    out.push(c);
    descendants(c, out);
  }
  return out;
}

const elements = (nodes: N[], tag: string): N[] => nodes.filter((n) => n.tagName === tag);

/** 属性値(属性名は大文字小文字を区別しない。parse5 は属性名を小文字にそろえて返す) */
function attr(el: N, name: string): string | null {
  const a = (el.attrs ?? []).find((x) => x.name.toLowerCase() === name);
  return a ? a.value : null;
}

const tokens = (v: string | null): string[] => (v ?? "").toLowerCase().split(/[\s,]+/).filter(Boolean);

function textOf(node: N): string {
  return (node.childNodes ?? []).map((c) => (c.nodeName === "#text" ? c.value ?? "" : "")).join("");
}

function countFaqPage(node: unknown): number {
  if (Array.isArray(node)) return node.reduce<number>((n, x) => n + countFaqPage(x), 0);
  if (node && typeof node === "object") {
    const o = node as Record<string, unknown>;
    const t = o["@type"];
    const self = t === "FAQPage" || (Array.isArray(t) && t.includes("FAQPage")) ? 1 : 0;
    return self + (o["@graph"] ? countFaqPage(o["@graph"]) : 0);
  }
  return 0;
}

/** robots / googlebot の meta から、noindex かどうかを返す(none は noindex, nofollow と同じ) */
function robotsInfo(headNodes: N[]) {
  const metas = elements(headNodes, "meta");
  const robots = metas.filter((m) => (attr(m, "name") ?? "").toLowerCase() === "robots");
  const bots = metas.filter((m) => ["robots", "googlebot"].includes((attr(m, "name") ?? "").toLowerCase()));
  const all = bots.flatMap((m) => tokens(attr(m, "content")));
  return {
    robotsCount: robots.length,
    noindex: all.includes("noindex") || all.includes("none"),
    conflicts:
      (all.includes("index") && all.includes("noindex")) || (all.includes("follow") && all.includes("nofollow"))
        ? all.join(",")
        : "",
  };
}

/* ----------------------------- 記事データ ----------------------------- */

function loadArticlePaths(): string[] {
  const file = join(ROOT, "src", "data", "articles.ts");
  if (!existsSync(file)) return [];
  const src = readFileSync(file, "utf-8");
  return [...src.matchAll(/path\s*:\s*["'](\/articles\/[^"']+)["']/g)].map((m) => m[1]);
}

function countArticleSources(): number {
  const dir = join(ROOT, "src", "pages", "Articles");
  return existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".tsx")).length : 0;
}

/* ----------------------------- メイン ----------------------------- */

function main() {
  // 単独実行のための前提チェック
  if (!existsSync(DIST_DIR)) precondition(DIST_DIR + " がありません。");
  const articlePaths = loadArticlePaths();
  const sourceCount = countArticleSources();
  if (articlePaths.length !== sourceCount) {
    precondition(
      "src/data/articles.ts の記事数(" + articlePaths.length + ")が、src/pages/Articles の記事ファイル数(" +
        sourceCount + ")と一致しません。記事データが古い可能性があります。"
    );
  }

  const allFiles = walk(DIST_DIR);
  const pageFiles = allFiles.filter((f) => !isAdminFile(f) && !SKIP_FILES.has(f.split(sep).pop() as string));
  const adminFiles = allFiles.filter((f) => isAdminFile(f));

  const expected = new Set<string>(["/", ...FIXED_PAGES, ...articlePaths]);
  const found = new Set<string>();
  const noindexPages = new Set<string>();
  const publicPages = new Set<string>();

  for (const file of pageFiles) {
    const page = pagePath(file);
    found.add(page);
    if (!expected.has(page)) fail(page, "想定外の静的HTMLです(期待するページ一覧にありません)");

    const html = readFileSync(file, "utf-8");
    const { head, body, doc } = parseHtml(html);
    if (!head || !body) {
      fail(page, "<head> または <body> が解析できません");
      continue;
    }
    const headNodes = descendants(head);
    const bodyNodes = descendants(body);

    // robots
    const ri = robotsInfo(headNodes);
    const noindex = ri.noindex;
    if (noindex) noindexPages.add(page); else publicPages.add(page);
    if (ri.robotsCount > 1) fail(page, "robots meta が " + ri.robotsCount + " 本あります(重複)");
    if (ri.conflicts) fail(page, "robots の指定が矛盾しています: " + ri.conflicts);
    if (noindex && !NOINDEX_PAGES.has(page)) fail(page, "想定外の noindex です(許可しているのは " + [...NOINDEX_PAGES].join(", ") + " だけ)");
    if (!noindex && NOINDEX_PAGES.has(page)) fail(page, "noindex が外れています");

    // canonical(head のものだけを有効とする。body 内にあれば違反)
    const canons = elements(headNodes, "link").filter((l) => tokens(attr(l, "rel")).includes("canonical"));
    const bodyCanons = elements(bodyNodes, "link").filter((l) => tokens(attr(l, "rel")).includes("canonical"));
    if (bodyCanons.length > 0) fail(page, "canonical が <body> 内にあります(" + bodyCanons.length + " 本。head 外は無効)");
    const expectedUrl = page === "/" ? SITE_URL + "/" : SITE_URL + page;
    const okValue = (href: string | null) => href === expectedUrl || (page === "/" && href === SITE_URL);
    if (noindex ? canons.length > 1 : canons.length !== 1) {
      fail(page, "canonical が head に " + canons.length + " 本です(" + (noindex ? "0〜1本" : "1本") + "が正)");
    }
    for (const c of canons) {
      const href = attr(c, "href");
      if (!okValue(href)) fail(page, "canonical が正規URLと一致しません: " + href + "(期待: " + expectedUrl + ")");
    }

    // description
    const descs = elements(headNodes, "meta").filter((m) => (attr(m, "name") ?? "").toLowerCase() === "description");
    if (descs.length > 1) fail(page, "description が " + descs.length + " 本です(重複)");
    if (!noindex && descs.length === 0) fail(page, "description がありません(公開ページは必須)");

    // JSON-LD / FAQPage
    let faq = 0;
    for (const s of elements(descendants(doc), "script")) {
      if ((attr(s, "type") ?? "").toLowerCase() !== "application/ld+json") continue;
      try {
        faq += countFaqPage(JSON.parse(textOf(s)));
      } catch {
        fail(page, "JSON-LD が正しいJSONではありません");
      }
    }
    if (faq > 1) fail(page, "FAQPage が " + faq + " つあります(1つ以下が正)");

    // h1(主要公開ページのみ)
    if (!noindex && (page.startsWith("/articles/") || H1_REQUIRED_PAGES.has(page))) {
      if (elements(bodyNodes, "h1").length < 1) fail(page, "h1 が静的HTMLにありません");
    }
  }

  // ページ構成(生成に失敗したページを見逃さない)
  for (const p of expected) if (!found.has(p)) fail(p, "静的HTMLが生成されていません");

  // sitemap
  const sitemapFile = join(DIST_DIR, "sitemap.xml");
  let sitemapCount = 0;
  if (!existsSync(sitemapFile)) {
    fail("/sitemap.xml", "dist/sitemap.xml がありません");
  } else {
    const locs = [...readFileSync(sitemapFile, "utf-8").matchAll(/<loc>\s*([^<]*?)\s*<\/loc>/g)].map((m) => m[1]);
    sitemapCount = locs.length;
    const seen = new Set<string>();
    const inSitemap = new Set<string>();
    for (const loc of locs) {
      if (seen.has(loc)) fail("/sitemap.xml", "URL が重複しています: " + loc);
      seen.add(loc);
      if (!loc.startsWith(SITE_URL)) {
        fail("/sitemap.xml", "正規ドメイン以外のURLがあります: " + loc);
        continue;
      }
      const path = loc.slice(SITE_URL.length) || "/";
      inSitemap.add(path);
      if (!found.has(path)) fail("/sitemap.xml", "dist に静的HTMLがないURLです: " + loc);
      if (noindexPages.has(path) || NOINDEX_PAGES.has(path)) fail("/sitemap.xml", "noindex のページが含まれています: " + loc);
    }
    for (const p of publicPages) if (!inSitemap.has(p)) fail("/sitemap.xml", "公開ページが載っていません: " + p);
  }

  // 404.html(Vercel が不明なURLに 404 ステータスで返す。アプリのシェルで、noindex・canonical なし)
  const file404 = join(DIST_DIR, "404.html");
  if (!existsSync(file404)) {
    fail("/404.html", "dist/404.html がありません(不明なURLが 404 になりません)");
  } else {
    const p404 = parseHtml(readFileSync(file404, "utf-8"));
    if (!p404.head || !p404.body) {
      fail("/404.html", "<head> または <body> が解析できません");
    } else {
      const h404 = descendants(p404.head);
      const all404 = descendants(p404.doc);
      if (!robotsInfo(h404).noindex) fail("/404.html", "noindex がありません");
      if (robotsInfo(h404).robotsCount !== 1) fail("/404.html", "robots meta が " + robotsInfo(h404).robotsCount + " 本です(1本が正)");
      if (elements(h404, "link").some((l) => tokens(attr(l, "rel")).includes("canonical"))) fail("/404.html", "canonical があります(404 には不要)");
      if (!all404.some((n) => n.tagName === "div" && attr(n, "id") === "root")) fail("/404.html", "アプリの <div id=\"root\"> がありません");
      if (!elements(all404, "script").some((x) => (attr(x, "type") ?? "").toLowerCase() === "module" && attr(x, "src"))) {
        fail("/404.html", "アプリの <script type=\"module\"> がありません(JavaScript が起動しません)");
      }
    }
  }

  // 運営者用の静的HTML(noindex 必須)
  for (const file of adminFiles) {
    const page = "/" + relative(DIST_DIR, file).split(sep).join("/");
    const { head } = parseHtml(readFileSync(file, "utf-8"));
    if (!head || !robotsInfo(descendants(head)).noindex) fail(page, "noindex がありません(運営者用ページは noindex 必須)");
  }

  console.log(
    "🔍 verifyHead: " + pageFiles.length + "ページを検査(公開 " + publicPages.size + " / noindex " + noindexPages.size +
      " / 記事 " + articlePaths.length + "本の存在確認)、sitemap " + sitemapCount + "件、運営者用HTML " + adminFiles.length + "本"
  );
  if (violations.length > 0) {
    console.error("❌ verifyHead: 違反 " + violations.length + " 件");
    for (const v of violations.slice(0, 50)) console.error("   - " + v);
    if (violations.length > 50) console.error("   …ほか " + (violations.length - 50) + " 件");
    process.exit(1);
  }
  console.log("✅ verifyHead: すべて合格");
}

main();

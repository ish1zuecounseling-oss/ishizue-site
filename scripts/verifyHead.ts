/**
 * verifyHead.ts
 *
 * ビルド後(generate:static-html の後)に、dist の静的HTMLの <head> を検査する。
 * 違反があれば一覧を表示して、終了コード 1 で終わる(npm run build が失敗する)。
 *
 * 検査の区分
 *  - 公開ページ(noindex でないもの)
 *      canonical: ちょうど1本。正規URL(https://www.ishizue-counseling.jp + パス)と完全一致
 *      description: 1本以下 / FAQPage: 1つ以下 / JSON-LD が正しいJSON
 *      h1: H1_REQUIRED の対象は1つ以上
 *  - noindex ページ(NOINDEX_PAGES にあるものだけ)
 *      noindex であること、canonical は0〜1本(あれば正規URLと一致)、description 1本以下、FAQPage 1つ以下
 *      h1 は検査しない
 *  - 上記以外のページが noindex になっていたら違反(意図しない noindex を見つけるため)
 *  - 存在確認: src/data/articles.ts の全記事と、固定ページの静的HTMLがあること
 *  - 対象外: dist/admin 以下(運営者用)、404.html
 *
 * h1 を必須にするページ(2026-11-18 の指示書で明示)
 *  記事(/articles/*)すべて、/articles、/profile、/for-helpers、/ai-assistant
 *  ※ "/" は現状、本文なしのシェルなので対象外(プリレンダは第3段階)
 *
 * 使い方: npm run verify:head       (dist を検査)
 *         npx tsx scripts/verifyHead.ts <dist のパス>   (別の場所の dist を検査)
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, dirname, relative, resolve, sep } from "path";
import { fileURLToPath } from "url";

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
/** 検査しないファイル・フォルダ */
const SKIP_DIRS = new Set(["admin"]);
const SKIP_FILES = new Set(["404.html"]);

/**
 * 既知の例外(第2段階で解消するまでの一時的なもの)。ページ単位・項目単位で限定し、毎回の実行で警告を出す。
 *  - /articles/boundary-check: 記事内の手書き FAQPage と ArticleLayout の faq が二重になっている(第2段階で解消予定)
 *    許容は 2 つまで。3 つ以上はビルドエラー。
 * 解消したら、ここから削除する。
 */
const KNOWN_EXCEPTIONS: Record<string, { rule: "faq"; max: number; reason: string }> = {
  "/articles/boundary-check": { rule: "faq", max: 2, reason: "FAQPage の二重定義(第2段階で解消予定)" },
};

const violations: string[] = [];
const warnings: string[] = [];
const fail = (page: string, msg: string) => violations.push(page + " … " + msg);

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (dir === DIST_DIR && SKIP_DIRS.has(name)) continue;
      walk(full, out);
    } else if (name.endsWith(".html") && !SKIP_FILES.has(name)) {
      out.push(full);
    }
  }
  return out;
}

/** dist/a/b/index.html → /a/b  、dist/index.html → / */
function pagePath(file: string): string {
  const rel = relative(DIST_DIR, file).split(sep).join("/");
  const dir = rel.replace(/(^|\/)index\.html$/, "");
  return "/" + dir;
}

function attr(tag: string, name: string): string | null {
  const m = tag.match(new RegExp("\\b" + name + "=\"([^\"]*)\""));
  return m ? m[1] : null;
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

function loadArticlePaths(): string[] {
  const file = join(ROOT, "src", "data", "articles.ts");
  if (!existsSync(file)) return [];
  const src = readFileSync(file, "utf-8");
  return [...src.matchAll(/path\s*:\s*["'](\/articles\/[^"']+)["']/g)].map((m) => m[1]);
}

function main() {
  if (!existsSync(DIST_DIR)) {
    console.error("❌ verifyHead: " + DIST_DIR + " がありません。");
    process.exit(1);
  }

  const files = walk(DIST_DIR);
  const found = new Set<string>();
  let nIndexed = 0;
  let nNoindex = 0;

  for (const file of files) {
    const page = pagePath(file);
    found.add(page);
    const html = readFileSync(file, "utf-8");
    const headEnd = html.indexOf("</head>");
    const head = headEnd >= 0 ? html.slice(0, headEnd) : html;
    const body = headEnd >= 0 ? html.slice(headEnd) : "";

    const robotsTag = (head.match(/<meta\b[^>]*\bname="robots"[^>]*>/) || [""])[0];
    const noindex = /noindex/i.test(attr(robotsTag, "content") ?? "");
    if (noindex) nNoindex++; else nIndexed++;

    // 意図しない noindex / noindex になっているはずのページが公開状態
    if (noindex && !NOINDEX_PAGES.has(page)) fail(page, "想定外の noindex です(noindex を許可しているのは " + [...NOINDEX_PAGES].join(", ") + " だけ)");
    if (!noindex && NOINDEX_PAGES.has(page)) fail(page, "noindex が外れています");

    // canonical
    const canons = head.match(/<link\b[^>]*\brel="canonical"[^>]*>/g) ?? [];
    const expected = page === "/" ? SITE_URL + "/" : SITE_URL + page;
    const okValue = (href: string | null) => href === expected || (page === "/" && href === SITE_URL);
    if (noindex ? canons.length > 1 : canons.length !== 1) {
      fail(page, "canonical が " + canons.length + " 本です(" + (noindex ? "0〜1本" : "1本") + "が正)");
    }
    for (const c of canons) {
      const href = attr(c, "href");
      if (!okValue(href)) fail(page, "canonical が正規URLと一致しません: " + href + "(期待: " + expected + ")");
    }

    // description
    const descs = head.match(/<meta\b[^>]*\bname="description"[^>]*>/g) ?? [];
    if (descs.length > 1) fail(page, "description が " + descs.length + " 本です(1本以下が正)");

    // JSON-LD / FAQPage
    let faq = 0;
    const scripts = html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g);
    for (const s of scripts) {
      try {
        faq += countFaqPage(JSON.parse(s[1]));
      } catch {
        fail(page, "JSON-LD が正しいJSONではありません");
      }
    }
    if (faq > 1) {
      const ex = KNOWN_EXCEPTIONS[page];
      if (ex && ex.rule === "faq" && faq <= ex.max) warnings.push(page + " … FAQPage が " + faq + " つ(既知の例外: " + ex.reason + ")");
      else fail(page, "FAQPage が " + faq + " つあります(1つ以下が正)");
    } else if (KNOWN_EXCEPTIONS[page]?.rule === "faq") {
      warnings.push(page + " … 既知の例外が不要になりました。verifyHead.ts の KNOWN_EXCEPTIONS から削除してください");
    }

    // h1(主要公開ページのみ)
    if (!noindex && (page.startsWith("/articles/") || H1_REQUIRED_PAGES.has(page))) {
      const h1 = (body.match(/<h1\b/g) ?? []).length;
      if (h1 < 1) fail(page, "h1 が静的HTMLにありません");
    }
  }

  // 存在確認(生成に失敗したページを見逃さない)
  if (!found.has("/")) fail("/", "dist/index.html がありません");
  for (const p of FIXED_PAGES) if (!found.has(p)) fail(p, "静的HTMLが生成されていません");
  const articlePaths = loadArticlePaths();
  if (articlePaths.length === 0) fail("src/data/articles.ts", "記事が1件も読み取れません");
  for (const p of articlePaths) if (!found.has(p)) fail(p, "静的HTMLが生成されていません");

  console.log(
    "🔍 verifyHead: " + files.length + "ページを検査(公開 " + nIndexed + " / noindex " + nNoindex +
      " / 記事 " + articlePaths.length + "本の存在確認)"
  );
  for (const w of warnings) console.warn("⚠️ verifyHead: " + w);
  if (violations.length > 0) {
    console.error("❌ verifyHead: 違反 " + violations.length + " 件");
    for (const v of violations.slice(0, 50)) console.error("   - " + v);
    if (violations.length > 50) console.error("   …ほか " + (violations.length - 50) + " 件");
    process.exit(1);
  }
  console.log("✅ verifyHead: すべて合格");
}

main();

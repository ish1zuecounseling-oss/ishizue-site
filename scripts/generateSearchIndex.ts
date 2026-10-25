/**
 * generateSearchIndex.ts
 * 運営者用の本文検索(/admin/search)で使う検索データを作る。
 *
 * - generate:static-html の後に実行し、プリレンダリング済みの記事HTMLから本文を抜き出す
 * - 出力先: dist/admin/search-index.json(一般ページからは読み込まれない)
 * - リンク文字列と、多くの記事に共通する定型文(CTA・フッター等)は除外する
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST_DIR = join(__dirname, "..", "dist");
const ARTICLES_DIR = join(DIST_DIR, "articles");
const OUT_DIR = join(DIST_DIR, "admin");
const OUT_PATH = join(OUT_DIR, "search-index.json");

// この数以上の記事に出てくる行は、定型文とみなして除外する
const BOILERPLATE_MIN_DOCS = 8;

const ENTITIES: Record<string, string> = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": "\"", "&#039;": "'", "&#x27;": "'", "&nbsp;": " ",
};

function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&[a-zA-Z#0-9]+;/g, (m) => ENTITIES[m] ?? m);
}

function extractTitle(html: string): string {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/);
  return m ? decodeEntities(m[1]).replace(/｜こころの相談室\s*いしずえ\s*$/, "").trim() : "";
}

function extractBodyLines(html: string): string[] {
  let start = html.indexOf('itemProp="articleBody"');
  if (start < 0) start = html.indexOf("<article");
  if (start < 0) return [];
  let body = html.slice(start);
  const endMarkers = ["監修情報", "</article>"];
  for (const mk of endMarkers) {
    const i = body.indexOf(mk);
    if (i > 0) { body = body.slice(0, i); break; }
  }
  body = body
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<a\b[\s\S]*?<\/a>/g, "")
    .replace(/<[^>]+>/g, "\n");
  return decodeEntities(body)
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter((l) => l.length >= 2);
}

function main() {
  if (!existsSync(ARTICLES_DIR)) {
    console.error("❌ " + ARTICLES_DIR + " がありません。generate:static-html の後に実行してください。");
    process.exit(1);
  }

  const docs: { p: string; t: string; lines: string[] }[] = [];
  for (const slug of readdirSync(ARTICLES_DIR)) {
    const file = join(ARTICLES_DIR, slug, "index.html");
    if (!existsSync(file)) continue;
    const html = readFileSync(file, "utf-8");
    const lines = extractBodyLines(html);
    if (lines.length === 0) continue;
    docs.push({ p: "/articles/" + slug, t: extractTitle(html), lines });
  }

  // 定型文の検出(同じ行が多くの記事に出てくるもの)
  const freq = new Map<string, number>();
  for (const d of docs) for (const l of new Set(d.lines)) freq.set(l, (freq.get(l) ?? 0) + 1);

  const index = docs
    .map((d) => ({
      p: d.p,
      t: d.t,
      b: d.lines.filter((l) => (freq.get(l) ?? 0) < BOILERPLATE_MIN_DOCS).join("\n"),
    }))
    .sort((a, b) => a.p.localeCompare(b.p));

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(index));
  const kb = Math.round(Buffer.byteLength(JSON.stringify(index)) / 1024);
  console.log("🔎 運営者用検索データ: " + index.length + "記事 / " + kb + "KB → dist/admin/search-index.json");
}

main();

/**
 * scripts/generateArticles.ts
 *
 * /src/pages/Articles/*.tsx を静的解析し、
 * ArticleLayout の props（title / description / url / date）を抽出して
 * /src/data/articles.ts を自動生成する。
 */

import fs   from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const ARTICLES_DIR = path.resolve(__dirname, "../src/pages/Articles");
const OUTPUT_FILE  = path.resolve(__dirname, "../src/data/articles.ts");

/* -------------------------------------------------------------------------- */
/*  ファイル名 → URL スラッグ変換（App.tsx と同一ロジック）                       */
/* -------------------------------------------------------------------------- */

function fileNameToSlug(fileName: string): string {
  const base = fileName.replace(/\.tsx$/, "");
  return base
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z0-9])([A-Z])/g,    "$1-$2")
    .toLowerCase();
}

/* -------------------------------------------------------------------------- */
/*  ArticleLayout props の静的抽出                                              */
/*                                                                              */
/*  対応パターン（複数行にまたがっていても取得できる）:                             */
/*    title="..."                                                               */
/*    title="                                                                   */
/*      複数行のタイトル"                                                        */
/*    description="..."                                                         */
/* -------------------------------------------------------------------------- */

function extractProp(src: string, propName: string): string {
  // 改行・スペースを含む値にも対応するため DOTALL フラグを使用
  // ダブルクォート形式: propName="value" （複数行対応）
  const dq = new RegExp(`${propName}="([^"]+)"`, "s");
  // バッククォート形式: propName={`value`}
  const bq = new RegExp(`${propName}=\\{\`([^\`]+)\`\\}`, "s");

  const dqMatch = src.match(dq);
  if (dqMatch) {
    // 複数行の場合は空白・改行を1スペースに正規化
    return dqMatch[1].replace(/\s+/g, " ").trim();
  }

  const bqMatch = src.match(bq);
  if (bqMatch) {
    return bqMatch[1].replace(/\s+/g, " ").trim();
  }

  return "";
}

function urlToPath(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
}

/* -------------------------------------------------------------------------- */
/*  メイン処理                                                                  */
/* -------------------------------------------------------------------------- */

function generate() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`❌ ディレクトリが見つかりません: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".tsx"))
    .sort();

  type Article = {
    title:       string;
    path:        string;
    description: string;
    updatedAt:   string;
  };

  const articles: Article[]    = [];
  const seenPaths = new Set<string>(); // 重複排除用
  const warnings: string[]     = [];

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const src      = fs.readFileSync(filePath, "utf-8");

    const title       = extractProp(src, "title");
    const description = extractProp(src, "description");
    const url         = extractProp(src, "url");
    const date        = extractProp(src, "date");

    const articlePath = url
      ? urlToPath(url)
      : `/articles/${fileNameToSlug(file)}`;

    if (!title || !description) {
      warnings.push(`⚠️  ${file}: title または description が見つかりません（スキップ）`);
      continue;
    }

    // 同じ path が既に登録済みの場合はスキップ（重複排除）
    if (seenPaths.has(articlePath)) {
      warnings.push(`⚠️  ${file}: ${articlePath} は既に登録済みです（スキップ）`);
      continue;
    }

    seenPaths.add(articlePath);
    articles.push({
      title,
      path:      articlePath,
      description,
      updatedAt: date || new Date().toISOString().split("T")[0],
    });
  }

  warnings.forEach((w) => console.warn(w));

  /* --- articles.ts を生成 ---
     注意: export type は generateSitemap.ts が
           import { articles } しか使わないため問題ないが、
           念のため型定義は別行に分けて出力する              */
  const lines: string[] = [
    "/**",
    " * src/data/articles.ts",
    " * ⚠️  このファイルは自動生成されます。直接編集しないでください。",
    ` * 生成日時: ${new Date().toISOString()}`,
    " * 生成スクリプト: scripts/generateArticles.ts",
    " */",
    "",
    "export type Article = {",
    "  title:       string;",
    "  path:        string;",
    "  description: string;",
    "  updatedAt:   string;",
    "};",
    "",
    "export const articles: Article[] = [",
  ];

  for (const a of articles) {
    lines.push("  {");
    lines.push(`    title:       ${JSON.stringify(a.title)},`);
    lines.push(`    path:        ${JSON.stringify(a.path)},`);
    lines.push(`    description: ${JSON.stringify(a.description)},`);
    lines.push(`    updatedAt:   ${JSON.stringify(a.updatedAt)},`);
    lines.push("  },");
  }

  lines.push("];");
  lines.push("");

  fs.writeFileSync(OUTPUT_FILE, lines.join("\n"), "utf-8");

  console.log(`✅ articles.ts generated (${articles.length} 件)`);
  articles.forEach((a) => console.log(`   ${a.path}`));
}

generate();

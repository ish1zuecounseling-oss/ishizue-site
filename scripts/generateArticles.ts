/**
 * scripts/generateArticles.ts
 *
 * /src/pages/Articles/*.tsx を静的解析し、
 * ArticleLayout の props（title / description / url / date）を抽出して
 * /src/data/articles.ts を自動生成する。
 *
 * 実行タイミング: npm run build の前処理として呼び出す
 *   "build": "tsx scripts/generateArticles.ts && tsx scripts/generateSitemap.ts && vite build"
 */

import fs   from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const ARTICLES_DIR = path.resolve(__dirname, "../src/pages/Articles");
const OUTPUT_FILE  = path.resolve(__dirname, "../src/data/articles.ts");

/* -------------------------------------------------------------------------- */
/*  型定義                                                                      */
/* -------------------------------------------------------------------------- */

type Article = {
  title:       string;
  path:        string;
  description: string;
  updatedAt:   string;
};

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
/* -------------------------------------------------------------------------- */

/**
 * TSX ファイルのソースから ArticleLayout の props を抽出する。
 *
 * 対応パターン:
 *   title="..."
 *   title={`...`}
 *   description="..."
 *   date="YYYY-MM-DD"
 *   url="https://..."  （url から path を生成）
 */
function extractProp(src: string, propName: string): string {
  // ダブルクォート形式: propName="value"
  const dq = new RegExp(`${propName}="([^"]+)"`);
  // バッククォート形式: propName={`value`}
  const bq = new RegExp(`${propName}=\\{\`([^\`]+)\`\\}`);

  const dqMatch = src.match(dq);
  if (dqMatch) return dqMatch[1].trim();

  const bqMatch = src.match(bq);
  if (bqMatch) return bqMatch[1].replace(/\s+/g, " ").trim();

  return "";
}

function urlToPath(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    // URL でなければそのまま返す
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
    .sort(); // ファイル名アルファベット順

  const articles: Article[] = [];
  const warnings: string[]  = [];

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const src      = fs.readFileSync(filePath, "utf-8");

    const title       = extractProp(src, "title");
    const description = extractProp(src, "description");
    const url         = extractProp(src, "url");
    const date        = extractProp(src, "date");

    // url が取れた場合はそこから path を生成、なければファイル名から生成
    const articlePath = url
      ? urlToPath(url)
      : `/articles/${fileNameToSlug(file)}`;

    // 必須フィールドが欠けているファイルは警告だけ出してスキップ
    if (!title || !description) {
      warnings.push(`⚠️  ${file}: title または description が見つかりません（スキップ）`);
      continue;
    }

    articles.push({
      title,
      path:        articlePath,
      description,
      updatedAt:   date || new Date().toISOString().split("T")[0],
    });
  }

  if (warnings.length > 0) {
    warnings.forEach((w) => console.warn(w));
  }

  /* --- articles.ts を生成 --- */
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
  if (articles.length > 0) {
    articles.forEach((a) => console.log(`   ${a.path}`));
  }
}

generate();

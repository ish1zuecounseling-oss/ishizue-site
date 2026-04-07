/**
 * scripts/generateArticles.ts
 *
 * /src/pages/Articles/*.tsx を静的解析し、
 * ArticleLayout の props または itemProp="headline" メタタグから
 * title / description / path / updatedAt を抽出して
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
/*  抽出ロジック                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * パターン1: ArticleLayout props 形式
 *   title="..."  description="..."  url="..."  date="..."
 */
function extractFromArticleLayout(src: string): {
  title: string; description: string; url: string; date: string;
} {
  const get = (prop: string) => {
    // ダブルクォート（複数行対応）
    const dq = src.match(new RegExp(`${prop}="([^"]+)"`, "s"));
    if (dq) return dq[1].replace(/\s+/g, " ").trim();
    // バッククォート
    const bq = src.match(new RegExp(`${prop}=\\{\`([^\`]+)\`\\}`, "s"));
    if (bq) return bq[1].replace(/\s+/g, " ").trim();
    return "";
  };
  return {
    title:       get("title"),
    description: get("description"),
    url:         get("url"),
    date:        get("date"),
  };
}

/**
 * パターン2: 独自実装形式（HelperBurnoutSigns.tsx など）
 *   itemProp="headline" content="..."
 *   itemProp="datePublished" content="..."
 *   description は <p> の最初のテキストから取得
 *   path は currentPath="..." または url から取得
 */
function extractFromLegacy(src: string): {
  title: string; description: string; url: string; date: string;
} {
  // headline
  const headlineMatch = src.match(/itemProp="headline"\s*content="([^"]+)"/s);
  const title = headlineMatch ? headlineMatch[1].replace(/\s+/g, " ").trim() : "";

  // datePublished
  const dateMatch = src.match(/itemProp="datePublished"\s*content="([^"]+)"/);
  const date = dateMatch ? dateMatch[1].trim() : "";

  // currentPath または url から path を取得
  const currentPathMatch = src.match(/currentPath="([^"]+)"/);
  const url = currentPathMatch ? currentPathMatch[1].trim() : "";

  // description: <p className="text-stone-600 ..."> の内容
  const descMatch = src.match(/<p\s+className="text-stone-600[^"]*"[^>]*>\s*([\s\S]+?)\s*<\/p>/);
  const description = descMatch
    ? descMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 120)
    : "";

  return { title, description, url, date };
}

function urlToPath(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url.startsWith("/") ? url : "";
  }
}


/* -------------------------------------------------------------------------- */
/*  タグ自動付与                                                                */
/*  ファイル名のキーワードからタグを自動生成する                                  */
/* -------------------------------------------------------------------------- */

const TAG_MAP: Array<{ keywords: string[]; tag: string }> = [
  { keywords: ["empathy", "compassion", "fatigue"],   tag: "compassion" },
  { keywords: ["burnout", "burn-out", "signs"],        tag: "burnout" },
  { keywords: ["emotional-labor", "emotional-fatigue", "labor"], tag: "emotional_labor" },
  { keywords: ["secondary", "trauma"],                 tag: "secondary_trauma" },
  { keywords: ["boundary", "overwork", "no-"],         tag: "boundary" },
  { keywords: ["quit", "resign", "career", "job"],     tag: "career_crisis" },
  { keywords: ["recovery", "rest", "self-care", "coping"], tag: "recovery" },
  { keywords: ["nurse"],                               tag: "nurse" },
  { keywords: ["nursery", "preschool", "childcare"],   tag: "nursery" },
  { keywords: ["teacher", "school", "educator"],       tag: "teacher" },
  { keywords: ["welfare", "social-worker", "sw-"],     tag: "welfare" },
  { keywords: ["check"],                               tag: "check" },
];

function getTagsFromPath(path: string): string[] {
  const p = path.toLowerCase();
  const tags: string[] = [];
  for (const { keywords, tag } of TAG_MAP) {
    if (keywords.some((kw) => p.includes(kw))) {
      if (!tags.includes(tag)) tags.push(tag);
    }
  }
  return tags;
}

function getSlugFromPath(path: string): string {
  return path.replace("/articles/", "");
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
    slug:        string;
    description: string;
    updatedAt:   string;
    tags:        string[];
  };

  const articles: Article[]   = [];
  const seenPaths = new Set<string>();
  const warnings:  string[]   = [];

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const src      = fs.readFileSync(filePath, "utf-8");

    // ArticleLayout を使っているか判定
    const usesArticleLayout = src.includes("ArticleLayout");

    let title = "", description = "", rawUrl = "", date = "";

    if (usesArticleLayout) {
      ({ title, description, url: rawUrl, date } = extractFromArticleLayout(src));
    } else {
      ({ title, description, url: rawUrl, date } = extractFromLegacy(src));
    }

    // path の決定: url props → currentPath → ファイル名から生成
    const articlePath = rawUrl
      ? urlToPath(rawUrl)
      : `/articles/${fileNameToSlug(file)}`;

    if (!title) {
      warnings.push(`⚠️  ${file}: title が見つかりません（スキップ）`);
      continue;
    }
    if (!description) {
      warnings.push(`⚠️  ${file}: description が見つかりません（スキップ）`);
      continue;
    }
    if (!articlePath) {
      warnings.push(`⚠️  ${file}: path が取得できませんでした（スキップ）`);
      continue;
    }

    // 重複排除
    if (seenPaths.has(articlePath)) {
      warnings.push(`⚠️  ${file}: ${articlePath} は既に登録済みです（スキップ）`);
      continue;
    }

    seenPaths.add(articlePath);
    articles.push({
      title,
      path:      articlePath,
      slug:      getSlugFromPath(articlePath),
      description,
      updatedAt: date || new Date().toISOString().split("T")[0],
      tags:      getTagsFromPath(articlePath),
    });
  }

  warnings.forEach((w) => console.warn(w));

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
    "  slug:        string;",
    "  description: string;",
    "  updatedAt:   string;",
    "  tags:        string[];",
    "};",
    "",
    "export const articles: Article[] = [",
  ];

  for (const a of articles) {
    lines.push("  {");
    lines.push(`    title:       ${JSON.stringify(a.title)},`);
    lines.push(`    path:        ${JSON.stringify(a.path)},`);
    lines.push(`    slug:        ${JSON.stringify(a.slug)},`);
    lines.push(`    description: ${JSON.stringify(a.description)},`);
    lines.push(`    updatedAt:   ${JSON.stringify(a.updatedAt)},`);
    lines.push(`    tags:        ${JSON.stringify(a.tags)},`);
    lines.push("  },");
  }

  lines.push("];");
  lines.push("");

  fs.writeFileSync(OUTPUT_FILE, lines.join("\n"), "utf-8");

  console.log(`✅ articles.ts generated (${articles.length} 件)`);
  articles.forEach((a) => console.log(`   ${a.path}`));
}

generate();

/**
 * generateStaticHtml.ts
 *
 * ビルド後に、記事ごとの静的HTMLファイルを生成します。
 * これにより、Google が各記事を正しく認識できるようになります。
 *
 * 動作：
 * 1. dist/index.html をテンプレートとして読み込む
 * 2. articles.ts から記事一覧を取得
 * 3. 各記事ごとに dist/articles/[slug]/index.html を生成
 * 4. 各HTMLには記事固有のメタタグ・canonical・OGPを埋め込む
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 設定
const SITE_URL = "https://www.ishizue-counseling.jp";
const SITE_NAME = "こころの相談室 いしずえ";
const OGP_IMAGE = `${SITE_URL}/ogp.jpg`;
const DIST_DIR = join(__dirname, "..", "dist");
const TEMPLATE_PATH = join(DIST_DIR, "index.html");

// articles.ts を読み込む（TypeScript の export を JavaScript として実行する代わりに、正規表現で抽出）
const articlesPath = join(__dirname, "..", "src", "data", "articles.ts");
const articlesContent = readFileSync(articlesPath, "utf-8");

// articles.ts から記事配列を抽出
interface Article {
  title: string;
  path: string;
  description: string;
  updatedAt?: string;
}

function extractArticles(content: string): Article[] {
  const articles: Article[] = [];
  // {title: "...", path: "...", description: "..."} のブロックを抽出
  const blockRegex = /\{\s*title:\s*"([^"]+)"\s*,\s*path:\s*"([^"]+)"\s*,\s*description:\s*"([^"]+)"\s*(?:,\s*updatedAt:\s*"([^"]+)")?\s*\}/g;
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    articles.push({
      title: match[1],
      path: match[2],
      description: match[3],
      updatedAt: match[4] || undefined,
    });
  }
  return articles;
}

const articles = extractArticles(articlesContent);
console.log(`📄 記事数: ${articles.length}`);

// テンプレート HTML を読み込む
if (!existsSync(TEMPLATE_PATH)) {
  console.error(`❌ ${TEMPLATE_PATH} が見つかりません。先に vite build を実行してください。`);
  process.exit(1);
}

const template = readFileSync(TEMPLATE_PATH, "utf-8");

// HTML エスケープ関数
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 各記事ごとに HTML を生成
let successCount = 0;
let errorCount = 0;

for (const article of articles) {
  try {
    const articleUrl = `${SITE_URL}${article.path}`;
    const safeTitle = escapeHtml(article.title);
    const safeDescription = escapeHtml(article.description);

    // テンプレートのメタタグを記事固有のものに置き換え
    let html = template;

    // title タグ置き換え
    html = html.replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${safeTitle}｜${SITE_NAME}</title>`
    );

    // description 置き換え
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/g,
      `<meta name="description" content="${safeDescription}" />`
    );

    // canonical 置き換え
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/g,
      `<link rel="canonical" href="${articleUrl}" />`
    );

    // OGP タグを記事ごとに上書き（既存のOGPタグを全部削除してから追加）
    html = html.replace(/<meta\s+property="og:[^"]+"\s+content="[^"]*"\s*\/?>/g, "");
    html = html.replace(/<meta\s+name="twitter:[^"]+"\s+content="[^"]*"\s*\/?>/g, "");

    // 記事固有の OGP タグを </head> の直前に挿入
    const ogpTags = `
    <meta property="og:title" content="${safeTitle}｜${SITE_NAME}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:url" content="${articleUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="${OGP_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="ja_JP" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}｜${SITE_NAME}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${OGP_IMAGE}" />
    <meta name="twitter:site" content="@ish1zue" />`;

    html = html.replace("</head>", `${ogpTags}\n  </head>`);

    // 出力先のディレクトリを作成
    const outputDir = join(DIST_DIR, article.path);
    mkdirSync(outputDir, { recursive: true });

    // HTML ファイルを書き出し
    const outputPath = join(outputDir, "index.html");
    writeFileSync(outputPath, html, "utf-8");
    successCount++;
  } catch (error) {
    console.error(`❌ ${article.path}: ${(error as Error).message}`);
    errorCount++;
  }
}

console.log(`✅ 静的HTMLを生成しました: ${successCount}件`);
if (errorCount > 0) {
  console.warn(`⚠️ エラー: ${errorCount}件`);
}

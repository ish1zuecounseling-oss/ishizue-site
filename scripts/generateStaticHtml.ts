/**
 * generateStaticHtml.ts
 *
 * ビルド後に、記事ごとの静的HTMLファイルを生成します。
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 設定
const SITE_URL = "https://www.ishizue-counseling.jp";
const SITE_NAME = "こころの相談室 いしずえ";
const OGP_IMAGE = SITE_URL + "/ogp.jpg";
const DIST_DIR = join(__dirname, "..", "dist");
const TEMPLATE_PATH = join(DIST_DIR, "index.html");

// 記事データ型
interface Article {
  title: string;
  path: string;
  description: string;
  updatedAt?: string;
}

// articles.ts から記事を抽出する
function loadArticles(): Article[] {
  const articlesPath = join(__dirname, "..", "src", "data", "articles.ts");
  const content = readFileSync(articlesPath, "utf-8");

  const articles: Article[] = [];

  // オブジェクトリテラル { ... } を1つずつ抽出
  const blockPattern = new RegExp("\\{([^{}]+)\\}", "g");
  let blockMatch;

  while ((blockMatch = blockPattern.exec(content)) !== null) {
    const block = blockMatch[1];

    // 各プロパティを抽出
    const titlePattern = new RegExp("title\\s*:\\s*[\"']([^\"']+)[\"']");
    const pathPattern = new RegExp("path\\s*:\\s*[\"']([^\"']+)[\"']");
    const descPattern = new RegExp("description\\s*:\\s*[\"']([^\"']+)[\"']");
    const updatedPattern = new RegExp("updatedAt\\s*:\\s*[\"']([^\"']+)[\"']");

    const titleMatch = block.match(titlePattern);
    const pathMatch = block.match(pathPattern);
    const descMatch = block.match(descPattern);
    const updatedMatch = block.match(updatedPattern);

    if (titleMatch && pathMatch && descMatch) {
      if (pathMatch[1].startsWith("/articles/")) {
        articles.push({
          title: titleMatch[1],
          path: pathMatch[1],
          description: descMatch[1],
          updatedAt: updatedMatch ? updatedMatch[1] : undefined,
        });
      }
    }
  }

  return articles;
}

// HTML エスケープ
function escapeHtml(str: string): string {
  return str
    .replace(new RegExp("&", "g"), "&amp;")
    .replace(new RegExp("<", "g"), "&lt;")
    .replace(new RegExp(">", "g"), "&gt;")
    .replace(new RegExp("\"", "g"), "&quot;")
    .replace(new RegExp("'", "g"), "&#039;");
}

// メイン処理
function main() {
  if (!existsSync(TEMPLATE_PATH)) {
    console.error("❌ " + TEMPLATE_PATH + " が見つかりません。");
    process.exit(1);
  }

  const articles = loadArticles();
  console.log("📄 記事数: " + articles.length);

  if (articles.length === 0) {
    console.error("⚠️ 記事が0件です。articles.ts のフォーマットを確認してください。");
    const articlesPath = join(__dirname, "..", "src", "data", "articles.ts");
    const content = readFileSync(articlesPath, "utf-8");
    console.log("--- articles.ts の最初の500文字 ---");
    console.log(content.substring(0, 500));
    console.log("--- ここまで ---");
    return;
  }

  const template = readFileSync(TEMPLATE_PATH, "utf-8");

  let successCount = 0;
  let errorCount = 0;

  const titleReplace = new RegExp("<title>[\\s\\S]*?</title>");
  const descReplace = new RegExp("<meta\\s+name=\"description\"[^>]*>", "g");
  const canonicalReplace = new RegExp("<link\\s+rel=\"canonical\"[^>]*>", "g");
  const ogpReplace = new RegExp("<meta\\s+property=\"og:[^\"]+\"[^>]*>", "g");
  const twitterReplace = new RegExp("<meta\\s+name=\"twitter:[^\"]+\"[^>]*>", "g");

  for (const article of articles) {
    try {
      const articleUrl = SITE_URL + article.path;
      const safeTitle = escapeHtml(article.title);
      const safeDescription = escapeHtml(article.description);
      const fullTitle = safeTitle + "｜" + SITE_NAME;

      let html = template;

      html = html.replace(titleReplace, "<title>" + fullTitle + "</title>");
      html = html.replace(descReplace, "<meta name=\"description\" content=\"" + safeDescription + "\" />");
      html = html.replace(canonicalReplace, "<link rel=\"canonical\" href=\"" + articleUrl + "\" />");
      html = html.replace(ogpReplace, "");
      html = html.replace(twitterReplace, "");

      const ogpTags = [
        "<meta property=\"og:title\" content=\"" + fullTitle + "\" />",
        "<meta property=\"og:description\" content=\"" + safeDescription + "\" />",
        "<meta property=\"og:url\" content=\"" + articleUrl + "\" />",
        "<meta property=\"og:type\" content=\"article\" />",
        "<meta property=\"og:image\" content=\"" + OGP_IMAGE + "\" />",
        "<meta property=\"og:image:width\" content=\"1200\" />",
        "<meta property=\"og:image:height\" content=\"630\" />",
        "<meta property=\"og:site_name\" content=\"" + SITE_NAME + "\" />",
        "<meta property=\"og:locale\" content=\"ja_JP\" />",
        "<meta name=\"twitter:card\" content=\"summary_large_image\" />",
        "<meta name=\"twitter:title\" content=\"" + fullTitle + "\" />",
        "<meta name=\"twitter:description\" content=\"" + safeDescription + "\" />",
        "<meta name=\"twitter:image\" content=\"" + OGP_IMAGE + "\" />",
        "<meta name=\"twitter:site\" content=\"@ish1zue\" />"
      ].join("\n    ");

      html = html.replace("</head>", "    " + ogpTags + "\n  </head>");

      const outputDir = join(DIST_DIR, article.path);
      mkdirSync(outputDir, { recursive: true });

      const outputPath = join(outputDir, "index.html");
      writeFileSync(outputPath, html, "utf-8");
      successCount++;
    } catch (error) {
      console.error("❌ " + article.path + ": " + (error as Error).message);
      errorCount++;
    }
  }

  console.log("✅ 静的HTMLを生成しました: " + successCount + "件");
  if (errorCount > 0) {
    console.warn("⚠️ エラー: " + errorCount + "件");
  }
}

try {
  main();
} catch (err) {
  console.error("❌ 予期しないエラー:", err);
  process.exit(1);
}

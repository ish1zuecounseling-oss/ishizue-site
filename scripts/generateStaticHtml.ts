/**
 * generateStaticHtml.ts
 *
 * ビルド後に、記事ごとの静的HTMLファイルを生成します。
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 設定
const SITE_URL = "https://www.ishizue-counseling.jp";
const SITE_NAME = "こころの相談室 いしずえ";
const OGP_IMAGE = SITE_URL + "/ogp.png"; // public/ogp.png に合わせる(ogp.jpg は存在しない)
const DIST_DIR = join(__dirname, "..", "dist");
const TEMPLATE_PATH = join(DIST_DIR, "index.html");
const SSR_ENTRY = join(__dirname, "..", "dist-server", "entry-server.js");

// プリレンダリング(本文とJSON-LDをHTMLに書き込む)
type RenderFn = (url: string) => { html: string; ldJson: string; head: string };
let render: RenderFn | null = null;

async function loadRenderer() {
  if (!existsSync(SSR_ENTRY)) {
    console.warn("⚠️ " + SSR_ENTRY + " が見つかりません。本文なしで生成します。");
    return;
  }
  const mod = await import(pathToFileURL(SSR_ENTRY).href);
  render = mod.render as RenderFn;
}

/** テンプレートの <div id="root"></div> に本文を、</head> の前に JSON-LD を入れる */
function prerender(html: string, path: string, useHelmetHead = false): string {
  if (!render) return html;
  let out: ReturnType<RenderFn>;
  try {
    out = render(path);
  } catch (error) {
    // 失敗しても、そのページは本文なし(従来どおり)で出力する
    console.warn("⚠️ プリレンダリング失敗(本文なしで出力): " + path + " — " + (error as Error).message);
    return html;
  }
  // ルートが見つからず 404 ページになった場合は、本文を入れない(URL とファイル名の食い違いなど)
  if (out.html.includes("ページが見つかりません")) {
    console.warn("⚠️ 404 として描画されたため本文なしで出力: " + path);
    return html;
  }
  if (useHelmetHead && out.head) {
    // テンプレートの既定 title / description / canonical を、そのページの Helmet の内容に置き換える
    html = html
      .replace(/<title>[\s\S]*?<\/title>/, "")
      .replace(/<meta\s+name="description"[\s\S]*?\/?>/g, "")
      .replace(/<link\s+rel="canonical"[^>]*>/g, "")
      .replace("</head>", "    " + out.head + "\n  </head>");
    // Helmet に canonical がないページは、自分自身の URL を canonical にする
    if (!/rel="canonical"/.test(out.head)) {
      html = html.replace("</head>", "    <link rel=\"canonical\" href=\"" + SITE_URL + path + "\" />\n  </head>");
    }
  }
  html = html.replace('<div id="root"></div>', '<div id="root">' + out.html + "</div>");
  if (out.ldJson) html = html.replace("</head>", "    " + out.ldJson + "\n  </head>");
  return html;
}

// 記事以外でプリレンダリングするページ(title / description / canonical は各ページの Helmet から取る)
const EXTRA_PAGES = ["/articles", "/profile", "/for-helpers", "/articles/about-matsumoto"];

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
async function main() {
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
  await loadRenderer();

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
      html = prerender(html, article.path);

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

  console.log("✅ 静的HTMLを生成しました: " + successCount + "件" + (render ? "(本文プリレンダリングあり)" : ""));

  // 記事一覧・プロフィールなど
  for (const page of EXTRA_PAGES) {
    try {
      const html = prerender(template, page, true);
      const outputDir = join(DIST_DIR, page);
      mkdirSync(outputDir, { recursive: true });
      writeFileSync(join(outputDir, "index.html"), html, "utf-8");
    } catch (error) {
      console.error("❌ " + page + ": " + (error as Error).message);
      errorCount++;
    }
  }
  if (errorCount > 0) {
    console.warn("⚠️ エラー: " + errorCount + "件");
  }
}

main().catch((err) => {
  console.error("❌ 予期しないエラー:", err);
  process.exit(1);
});

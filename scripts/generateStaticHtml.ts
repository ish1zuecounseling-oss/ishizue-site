/**
 * generateStaticHtml.ts
 *
 * ビルド後に、記事ごとの静的HTMLファイルを生成します。
 * これにより、Google が各記事を正しく認識できるようになります。
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

// 記事データ型
interface Article {
  title: string;
  path: string;
  description: string;
  updatedAt?: string;
}

// articles.ts を動的に読み込む（dynamic import を使う）
async function loadArticles(): Promise<Article[]> {
  const articlesPath = join(__dirname, "..", "src", "data", "articles.ts");
  const content = readFileSync(articlesPath, "utf-8");

  // パターン1: {title: "...", path: "...", description: "..."} 形式
  const articles: Article[] = [];

  // より柔軟な正規表現:オブジェクトリテラルの中身を1つずつ抽出
  // {} で囲まれたブロックを探す
  const blockRegex = /\{([^{}]+)\}/g;
  let blockMatch;

  while ((blockMatch = blockRegex.exec(content)) !== null) {
    const block = blockMatch[1];

    // 各プロパティを正規表現で抽出（順序問わず）
    const titleMatch = block.match(/title\s*:\s*["'`]([^"'`]+)["'`]/);
    const pathMatch = block.match(/path\s*:\s*["'`]([^"'`]+)["'`]/);
    const descMatch = block.match(/description\s*:\s*["'`]([^"'`]+)["'

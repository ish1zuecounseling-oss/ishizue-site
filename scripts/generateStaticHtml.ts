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

  //

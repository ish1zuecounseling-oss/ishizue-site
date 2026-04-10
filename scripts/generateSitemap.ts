import fs   from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { articles } from "../src/data/articles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const BASE_URL = "https://www.ishizue-counseling.jp";

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  // 固定ページ
  const staticPages = [
    { loc: `${BASE_URL}/`,         priority: 1.0, changefreq: "weekly",  lastmod: today },
    { loc: `${BASE_URL}/articles`, priority: 0.9, changefreq: "weekly",  lastmod: today },
    { loc: `${BASE_URL}/profile`,  priority: 0.6, changefreq: "monthly", lastmod: today },
  ];

  // 王様記事（優先度最高）
  const PILLAR_PATHS = new Set([
    "/articles/helper-empathy-check",
    "/articles/helper-burnout-check",
    "/articles/helper-emotional-labor-check",
    "/articles/helper-empathy-fatigue",
    "/articles/helper-burnout",
    "/articles/helper-quit-timing-check",
  ]);

  // 記事ページ — 王様記事は priority 0.9、通常記事は 0.7
  const articlePages = articles.map((article) => ({
    loc:        `${BASE_URL}${article.path}`,
    priority:   PILLAR_PATHS.has(article.path) ? 0.9 : 0.7,
    changefreq: PILLAR_PATHS.has(article.path) ? "weekly" : "monthly",
    lastmod:    article.updatedAt ?? today,
  }));

  const urls = [...staticPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("")}
</urlset>`;

  fs.writeFileSync(
    path.resolve(__dirname, "../public/sitemap.xml"),
    xml
  );

  console.log("✅ sitemap.xml generated");
}

generateSitemap();

import fs from "fs"
import path from "path"
import { articles } from "../data/articles"

const BASE_URL = "https://ishizue-site-ker9.vercel.app"

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0]

  // 固定ページ
  const staticPages = [
    {
      loc: `${BASE_URL}/`,
      priority: 1.0,
      changefreq: "weekly",
      lastmod: today,
    },
    {
      loc: `${BASE_URL}/articles`,
      priority: 0.9,
      changefreq: "weekly",
      lastmod: today,
    },
    {
      loc: `${BASE_URL}/profile`,
      priority: 0.6,
      changefreq: "monthly",
      lastmod: today,
    },
  ]

  // 記事ページ（ここが今回のコア）
  const articlePages = articles.map((article) => ({
    loc: `${BASE_URL}${article.path}`, // ← pathそのまま使う
    priority: 0.8,
    changefreq: "monthly",
    lastmod: today,
  }))

  const urls = [...staticPages, ...articlePages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`

  fs.writeFileSync(
    path.resolve(__dirname, "../../public/sitemap.xml"),
    xml
  )

  console.log("✅ sitemap.xml generated")
}

generateSitemap()

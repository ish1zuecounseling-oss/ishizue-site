import { Link } from "react-router-dom";

export default function RelatedArticles() {
  const articles = [
    {
      title: "支援職のバーンアウト",
      path: "/helper-burnout"
    },
    {
      title: "感情労働による疲労",
      path: "/emotional-labor"
    },
    {
      title: "支援者の境界線",
      path: "/helper-boundary"
    },
    {
      title: "支援者の二次受傷",
      path: "/helper-trauma"
    }
  ];

  return (
    <section className="mt-20 pt-10 border-t border-stone-200">
      <h3 className="text-xl font-medium mb-6">
        関連記事
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        {articles.map((article) => (
          <Link
            key={article.path}
            to={article.path}
            className="p-4 border border-stone-200 rounded-lg hover:bg-stone-50 transition"
          >
            {article.title}
          </Link>
        ))}

      </div>
    </section>
  );
}

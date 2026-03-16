import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function RelatedArticles({ currentPath }) {

  const related = articles.filter(
    (article) => article.path !== currentPath
  );

  return (
    <section className="mt-20 pt-10 border-t border-stone-200">

      <h3 className="text-xl font-medium mb-6">
        関連記事
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        {related.slice(0,4).map((article) => (
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

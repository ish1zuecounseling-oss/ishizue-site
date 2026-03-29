import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const CHECK_PATHS = new Set([
  "/articles/helper-empathy-check",
  "/articles/helper-burnout-check",
  "/articles/helper-emotional-labor-check",
  "/articles/helper-workplace-stress-check",
  "/articles/helper-quit-timing-check",
]);

type Props = {
  currentPath: string;
  count?: number;
};

export default function RandomArticles({ currentPath, count = 1 }: Props) {
  const recommended = articles
    .filter((a) => a.path !== currentPath && !CHECK_PATHS.has(a.path))
    .sort(() => 0.5 - Math.random())
    .slice(0, count);

  return (
    <div className="mt-16">
      <div className="mb-4">
        <p className="text-xs tracking-widest text-stone-400 uppercase">
          Recommendation
        </p>
        <h3 className="text-lg font-medium text-stone-900">
          あなたにおすすめの記事
        </h3>
      </div>
      <div className="space-y-4">
        {recommended.map((article) => (
          <Link
            key={article.path}
            to={article.path}
            className="group block bg-white border border-stone-200 rounded-2xl p-6 transition hover:shadow-lg hover:border-stone-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-stone-400 mb-2">
                  PICK UP
                </p>
                <h4 className="text-base font-medium text-stone-900 group-hover:underline">
                  {article.title}
                </h4>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  {article.description}
                </p>
              </div>
              <div className="text-stone-300 group-hover:translate-x-1 transition">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { articles } from "../data/articles";

type Props = {
  currentPath: string;
  count?: number;
};

export default function RandomArticles({ currentPath, count = 1 }: Props) {

  const recommended = articles
    .filter((a) => a.path !== currentPath)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);

  return (
    <div className="mb-10">
      {recommended.map((article) => (
        <Link
          key={article.path}
          to={article.path}
          className="block bg-white border border-stone-200 rounded-xl p-4 hover:shadow-md transition"
        >
          <p className="text-xs text-stone-400 mb-1">
            📌 あなたにおすすめ
          </p>
          <p className="font-medium text-stone-900">
            {article.title}
          </p>
          <p className="text-sm text-stone-600">
            {article.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

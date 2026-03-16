import { Link } from "react-router-dom";

export default function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav className="text-sm text-stone-500 mb-6">
      <Link to="/" className="hover:underline">ホーム</Link>
      {" > "}
      <Link to="/articles" className="hover:underline">心理記事</Link>
      {" > "}
      <span className="text-stone-700">{title}</span>
    </nav>
  );
}

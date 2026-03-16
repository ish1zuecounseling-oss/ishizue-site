export default function ArticleSchema({
  title,
  description,
  url,
  date
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: date,
    author: {
      "@type": "Person",
      name: "松本 龍児"
    },
    publisher: {
      "@type": "Organization",
      name: "いしずえカウンセリング",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}

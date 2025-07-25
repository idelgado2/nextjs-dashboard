import Parser from "rss-parser";

export default async function BlogPage() {
  const parser = new Parser();
  const feed = await parser.parseURL(
    "https://medium.com/feed/@isaacdelgado1994"
  );

  // Helper to extract image from content:encoded or content
  function extractImage(item: any) {
    // Try to find an <img> tag in content:encoded or content
    const html = item["content:encoded"] || item.content || "";
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br to-black py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
          Medium Blog Posts
        </h1>
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {feed.items.map((item) => {
            const imageUrl = extractImage(item);
            return (
              <li
                key={item.link}
                className="bg-white/10 border border-blue-500 rounded-xl p-0 shadow-lg hover:shadow-2xl transition-shadow flex flex-col overflow-hidden"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col p-6"
                >
                  <h2 className="text-2xl font-semibold text-blue-300 hover:text-blue-400 transition-colors mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-200 mb-4 line-clamp-3 flex-1">
                    {item.contentSnippet}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
                    <span>
                      {item.creator && (
                        <span className="font-medium text-blue-400">
                          {item.creator}
                        </span>
                      )}
                    </span>
                    <span>
                      {item.pubDate &&
                        new Date(item.pubDate).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

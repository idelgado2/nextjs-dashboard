import Parser from "rss-parser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
};

type FeedItem = {
  link?: string;
  title?: string;
  contentSnippet?: string;
  creator?: string;
  pubDate?: string;
};

export default async function BlogPage() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://medium.com/feed/@isaacdelgado1994");

  return (
    <div className="grid gap-8">
      <section className="section-card rounded-[36px] px-6 py-10 md:px-10 md:py-14">
        <p className="eyebrow">Writing</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <h1 className="section-title text-balance">
            Essays, observations, and music-adjacent internet thoughts.
          </h1>
          <p className="editorial-copy">
            I use writing to slow down and make sense of what I&apos;m noticing,
            whether that&apos;s a cultural shift, a product pattern, or a music
            industry idea worth testing.
          </p>
        </div>
      </section>

      <section className="grid gap-5">
        {feed.items.map((item) => {
          const typedItem = item as FeedItem;

          return (
            <a
              key={typedItem.link}
              href={typedItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="section-card group rounded-[28px] px-6 py-7 transition-transform duration-200 hover:-translate-y-1 md:px-8"
            >
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <p className="eyebrow">Article</p>
                  <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-[var(--text)]">
                    {typedItem.title}
                  </h2>
                  <p className="editorial-copy mt-4 max-w-3xl">
                    {typedItem.contentSnippet}
                  </p>
                </div>

                <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] md:pt-8">
                  {typedItem.pubDate
                    ? new Date(typedItem.pubDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </div>
              </div>
            </a>
          );
        })}
      </section>
    </div>
  );
}

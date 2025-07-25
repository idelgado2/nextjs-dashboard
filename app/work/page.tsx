import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "On The Record",
    description:
      "A music debate show inspired by First Take and Undisputed on ESPN. We intentionally take opposing sides on trending music topics to spark bold, entertaining, and opinion-driven discussions that explore different perspectives.",
    image: "/ontherecord-logo.png",
    link: "https://www.youtube.com/@OnTheRecordShows",
    tech: ["Final Cut Pro"],
  },
  {
    title: "Book Digest",
    description:
      "A web app designed for book worms and researchers to easily collect, categorize, and export their favorite quotes. Simply input quotes from any book, assign them to themes or custom categories, and effortlessly organize your collection. Bookdigest makes it easy to retrieve inspiration, reference key ideas, or share curated insights.",
    image: "/bookdigest_cover.png",
    github: "https://github.com/idelgado2/bookdigest",
    link: "https://idelgado2.github.io/bookdigest/",
    tech: ["Next.js", "Typescript", "React"],
  },
];

// Helper to fetch YouTube videos from a channel using RSS feed
async function fetchYouTubeVideos() {
  const res = await fetch(
    "https://www.youtube.com/feeds/videos.xml?user=isaacdelgado9",
    { next: { revalidate: 3600 } }
  );
  const xml = await res.text();
  // Simple XML parsing for demo (for production, use a robust XML parser)
  const entries = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g));
  return entries.map((entry) => {
    const idMatch = entry[1].match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const titleMatch = entry[1].match(/<title>(.*?)<\/title>/);
    const thumbMatch = entry[1].match(/<media:thumbnail url="(.*?)"/);
    return {
      id: idMatch ? idMatch[1] : "",
      title: titleMatch ? titleMatch[1] : "",
      thumbnail: thumbMatch ? thumbMatch[1] : "",
    };
  });
}
async function fetchLatestOnTheRecordVideo() {
  const res = await fetch(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCD4F_zbnLZfUP6AfmmXa0GA",
    { next: { revalidate: 3600 } }
  );
  const xml = await res.text();
  const entries = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g));
  for (const entryArr of entries) {
    const entry = entryArr[1];
    const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    // Exclude Shorts by checking for '/shorts/' in the link
    const linkMatch = entry.match(/<link rel="alternate" href="(.*?)"/);
    const link = linkMatch ? linkMatch[1] : "";
    if (!link.includes("/shorts/")) {
      return {
        id: idMatch ? idMatch[1] : "",
        title: titleMatch ? titleMatch[1] : "",
      };
    }
  }
  return null;
}

export default async function Page() {
  const youtubeVideos = await fetchYouTubeVideos();
  const latestOnTheRecord = await fetchLatestOnTheRecordVideo();

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Project Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 rounded-xl px-8 py-12 w-full max-w-screen-2xl">
        {/* Left Column: Name, Title, Socials, Contact */}
        <div className="flex-auto items-center md:items-start gap-4">
          <h1
            className={`${lusitana.className} text-4xl md:text-5xl font-bold text-white text-center`}
          >
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full py-20">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col bg-white/10 border-2 border-blue-400 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative w-full h-48 bg-black/30 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-white/90 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/20 border border-blue-400 text-blue-200 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-400 hover:underline"
                      >
                        Code
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-400 hover:underline"
                      >
                        Link
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* On The Record Latest Episode */}
      <section className="flex flex-col gap-8 rounded-xl px-8 py-12 w-full max-w-screen-2xl">
        <h1
          className={`${lusitana.className} text-3xl md:text-4xl font-bold text-white text-center mb-8`}
        >
          Latest{" "}
          <span className="text-blue-300 font-semibold">On The Record</span>{" "}
          Episode
        </h1>
        {latestOnTheRecord && latestOnTheRecord.id && (
          <div className="flex flex-col items-center bg-white/10 border-2 border-blue-400 rounded-xl shadow-lg p-6 max-w-5xl mx-auto">
            <div className="w-full aspect-video bg-black mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${latestOnTheRecord.id}`}
                title={latestOnTheRecord.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <h2 className="text-lg font-semibold text-white text-center">
              {latestOnTheRecord.title}
            </h2>
            <a
              href={`https://www.youtube.com/watch?v=${latestOnTheRecord.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 text-sm mt-2 hover:underline text-center"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </section>
      {/* Film Section */}
      <section className="flex flex-col gap-8 rounded-xl px-8 py-12 w-full max-w-screen-2xl">
        <h1
          className={`${lusitana.className} text-4xl md:text-5xl font-bold text-white text-center mb-8`}
        >
          Films
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="group rounded-xl overflow-hidden bg-white/10 border-2 border-blue-400 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 flex flex-col"
            >
              <div className="w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {video.title}
                </h2>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 text-sm mt-auto hover:underline"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

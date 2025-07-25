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

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* About Section */}
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
    </main>
  );
}

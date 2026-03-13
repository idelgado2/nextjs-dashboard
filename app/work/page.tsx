import Image from "next/image";
import type { Metadata } from "next";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Selected Work",
};

const projects = [
  {
    title: "On The Record",
    description:
      "A music debate show built to make hot takes more thoughtful, more entertaining, and more watchable. I help shape the concept, editing, and overall presentation.",
    image: "/ontherecord.png",
    href: "https://www.youtube.com/@OnTheRecordShows",
    tags: ["Media production", "Music culture", "Video editing"],
  },
  {
    title: "Book Digest",
    description:
      "A web app for capturing and organizing book quotes by theme so readers can build a searchable library of ideas and references.",
    image: "/bookdigest_cover.png",
    href: "https://idelgado2.github.io/bookdigest/",
    secondaryHref: "https://github.com/idelgado2/bookdigest",
    tags: ["Next.js", "TypeScript", "Product design"],
  },
];

export default function WorkPage() {
  return (
    <div className="grid gap-8">
      <section className="section-card rounded-[36px] px-6 py-10 md:px-10 md:py-14">
        <p className="eyebrow">Selected work</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="section-title text-balance">
            A mix of software projects and media experiments that reflect how I
            like to work.
          </h1>
          <p className="editorial-copy">
            I&apos;m drawn to projects with a strong premise and a clear point of
            view. Some are software-first, some are editorial-first, and the
            best ones sit somewhere in the middle.
          </p>
        </div>
      </section>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="section-card grid gap-6 rounded-[32px] p-4 md:grid-cols-[1.05fr_0.95fr] md:p-6"
          >
            <div className="image-panel min-h-[300px] rounded-[28px]">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-[24px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between px-2 py-3 md:px-4">
              <div>
                <p className="eyebrow">Project</p>
                <h2 className="section-title mt-3 text-[2.6rem]">
                  {project.title}
                </h2>
                <p className="editorial-copy mt-4">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link bg-[var(--text)] text-white"
                >
                  View project
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </a>
                {project.secondaryHref ? (
                  <a
                    href={project.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-link"
                  >
                    View code
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

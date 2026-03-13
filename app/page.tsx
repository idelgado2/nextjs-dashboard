import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Home",
};

const highlights = [
  "Software engineer with a systems mindset and a love for elegant product experiences.",
  "Co-creator of On The Record, a music debate show built for sharp opinions and even sharper editing.",
  "Writer and builder exploring where technology, storytelling, and music culture overlap.",
];

const featuredLinks = [
  {
    title: "Selected Work",
    href: "/work",
    description: "Projects spanning software, editorial thinking, and music media.",
  },
  {
    title: "About Isaac",
    href: "/about",
    description: "Background, perspective, and the through-line behind the work.",
  },
  {
    title: "Writing",
    href: "/blog",
    description: "Essays and observations on music, products, and the internet.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-8 pb-4">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="section-card rounded-[36px] px-6 py-10 md:px-10 md:py-14">
          <p className="eyebrow">Personal site</p>
          <h1 className="display-title mt-5 text-balance">Isaac Delgado</h1>
          <p className="lede mt-6 max-w-2xl">
            I build digital products, create music-centered media, and think a
            lot about how taste, systems, and storytelling shape the things we
            remember.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/work" className="pill-link bg-[var(--text)] text-white">
              View selected work
            </Link>
            <Link href="/about" className="pill-link">
              Read my story
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <p
                key={item}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-5 text-sm leading-7 text-[var(--muted)]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="image-panel min-h-[420px] rounded-[36px] p-4">
          <div className="relative h-full min-h-[390px] overflow-hidden rounded-[28px]">
            <Image
              src="/ontherecord.png"
              alt="On The Record production still"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute bottom-8 left-8 right-8 z-10 rounded-[24px] bg-[rgba(255,252,247,0.82)] p-5 backdrop-blur">
            <p className="eyebrow">Currently focused on</p>
            <p className="mt-2 text-lg leading-8 text-[var(--text)]">
              Building polished software by day and shaping music conversations,
              writing, and internet projects after hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-card rounded-[36px] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">A short introduction</p>
            <h2 className="section-title mt-4 text-balance">
              A career in software, pulled forward by a long-running obsession
              with music.
            </h2>
          </div>
          <div className="editorial-copy space-y-5">
            <p>
              I studied computer science, built a career as a programmer at
              Chevron, and kept finding myself most energized by the places
              where technical craft meets culture.
            </p>
            <p>
              That curiosity led to side projects, writing, and On The Record,
              a debate show created to make music conversations sharper, more
              entertaining, and more intentional.
            </p>
            <p>
              This site is designed as a home for that mix: product work, media
              experiments, and ideas still taking shape.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {featuredLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="section-card group rounded-[30px] px-6 py-8 transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="eyebrow">Explore</p>
            <div className="mt-5 flex items-start justify-between gap-4">
              <h2 className="section-title text-[2.4rem]">{item.title}</h2>
              <ArrowUpRightIcon className="mt-2 h-5 w-5 shrink-0 text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="editorial-copy mt-4">{item.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

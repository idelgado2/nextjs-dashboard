import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const principles = [
  "Build things that feel clear, human, and intentional.",
  "Treat music culture with curiosity instead of empty trend-chasing.",
  "Make room for both technical precision and strong points of view.",
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "C# / .NET",
  "SQL",
  "Azure",
  "Final Cut Pro",
  "Logic Pro",
  "Editorial strategy",
];

export default function AboutPage() {
  return (
    <div className="grid gap-8">
      <section className="section-card rounded-[36px] px-6 py-10 md:px-10 md:py-14">
        <p className="eyebrow">About</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <h1 className="section-title text-balance">
            I&apos;m a software engineer in San Jose, originally from San
            Antonio, building a career at the intersection of code and culture.
          </h1>

          <div className="editorial-copy space-y-5">
            <p>
              My academic path runs through computer science at USC, while my
              creative curiosity kept pulling me toward music business studies
              at UCLA and a deeper understanding of how artists, audiences, and
              platforms connect.
            </p>
            <p>
              Professionally, I&apos;ve spent the last several years working as
              a programmer at Chevron. Outside of work, I&apos;ve kept building:
              websites, media projects, essays, and formats that help me test
              ideas in public.
            </p>
            <p>
              The clearest example is On The Record, a music debate show I
              co-founded to channel strong opinions into something structured,
              entertaining, and worth revisiting.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="section-card rounded-[32px] px-6 py-8 md:px-8">
          <p className="eyebrow">How I work</p>
          <div className="list-divider mt-6">
            {principles.map((principle) => (
              <p
                key={principle}
                className="py-5 font-serif text-3xl leading-tight tracking-[-0.03em]"
              >
                {principle}
              </p>
            ))}
          </div>
        </div>

        <div className="section-card rounded-[32px] px-6 py-8 md:px-8">
          <p className="eyebrow">Capabilities</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm uppercase tracking-[0.14em] text-[var(--muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="editorial-copy mt-8">
            I&apos;m especially energized by projects that need both engineering
            discipline and creative judgment, whether that means polishing a
            product experience or shaping how a story gets packaged and shared.
          </p>
        </div>
      </section>
    </div>
  );
}

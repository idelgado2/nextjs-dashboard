import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const links = [
  {
    href: "https://github.com/isaacdelgado",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/isaac-delgado-881a8691",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://medium.com/@isaacdelgado1994",
    label: "Medium",
    icon: FaMedium,
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 pb-10">
      <div className="section-card flex flex-col gap-6 rounded-[32px] px-6 py-8 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-xl">
          <p className="eyebrow">Let&apos;s stay in touch</p>
          <h2 className="section-title mt-3">Building projects with taste and staying close to music culture.</h2>
          <p className="editorial-copy mt-3">
            Based in San Jose, California. Open to creative technology, product,
            and media collaborations.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-3">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="pill-link h-12 w-12 p-0 text-[var(--text)]"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Isaac Delgado
          </p>
        </div>
      </div>
    </footer>
  );
}

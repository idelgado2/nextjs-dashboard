"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Selected Work", href: "/work" },
  { name: "Writing", href: "/blog" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "rounded-full px-4 py-2 text-sm tracking-[0.18em] uppercase transition-colors",
            pathname === link.href
              ? "bg-[rgba(32,22,18,0.08)] text-[var(--text)]"
              : "text-[var(--muted)] hover:text-[var(--text)]",
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

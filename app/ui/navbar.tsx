"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinks from "@/app/ui/nav-links";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-8">
      <nav className="section-card rounded-[32px] px-5 py-4 md:px-8 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <p className="eyebrow">Isaac Delgado</p>
            <p className="font-serif text-2xl tracking-[-0.03em] md:text-3xl">
              Software, music, and thoughtful internet work
            </p>
          </Link>

          <button
            type="button"
            className="rounded-full border border-[var(--border)] p-3 text-[var(--text)] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <NavLinks />
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-4 flex flex-col gap-2 border-t border-[var(--border)] pt-4 md:hidden">
            <NavLinks />
          </div>
        ) : null}
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import { PowerIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-transparent mx-4 md:mx-64 relative">
      <Link className="flex items-center rounded-md p-3" href="/">
        <div className="flex items-center space-x-2">
          {/* Simple SVG logo */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600"
          >
            <circle cx="16" cy="16" r="16" fill="currentColor" />
            <text
              x="16"
              y="21"
              textAnchor="middle"
              fontSize="14"
              fill="white"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
            >
              I
            </text>
          </svg>
          <span className="text-white text-lg font-bold md:text-xl">Isaac</span>
        </div>
      </Link>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6 text-blue-600" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-blue-600" />
        )}
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-4">
        <NavLinks />
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-grey-500 flex flex-col items-start p-4 md:hidden z-50">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}

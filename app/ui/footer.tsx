import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-4  bg-opacity-60 text-white mt-8">
      <div className="text-sm mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} Isaac Delgado. All rights reserved.
      </div>
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <Link
          href="https://github.com/isaacdelgado"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 hover:text-blue-400 transition-colors" />
        </Link>
        <Link
          href="https://linkedin.com/in/isaacdelgado"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
        </Link>
        <Link
          href="https://twitter.com/isaacdelgado"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTwitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
        </Link>
      </div>
      <div className="text-xs text-gray-300 text-center md:text-right">
        Developed by Isaac Delgado.
      </div>
    </footer>
  );
}

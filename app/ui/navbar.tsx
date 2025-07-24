import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links-dashboard";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow">
      <Link className="flex items-center rounded-md bg-blue-600 p-3" href="/">
        <div className="w-32 text-white md:w-40">
          <p>My logo</p>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <NavLinks />
        <form>
          <button className="flex items-center gap-2 rounded-md bg-gray-50 p-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
            <PowerIcon className="w-6" />
            <span className="hidden md:inline">Sign Out</span>
          </button>
        </form>
      </div>
    </nav>
  );
}

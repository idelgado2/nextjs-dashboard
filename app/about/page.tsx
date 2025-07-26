import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import {
  FaVideo,
  FaReact,
  FaRegFileExcel,
  FaRecordVinyl,
  FaAngular,
} from "react-icons/fa";
import { TbFileTypeSql, TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

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
            Get To Know Me
          </h1>
          <div className="rounded overflow-hidden">
            <div className="px-6 py-4">
              <p className="text-gray-700 text-white text-2xl mb-4">
                My name is <span className="text-blue-500">Isaac Delgado</span>.
                I’m a software engineer at Chevron, based in San Jose,
                California, though I’m originally from San Antonio, Texas.
                <br />
                <br />I hold a Master’s degree in Computer Science from{" "}
                <span className="text-red-500">USC</span> and have also
                completed Music Business courses at{" "}
                <span className="text-blue-500">UCLA</span>.
                <br />
                <br />
                I’m a co-host of On The Record—the biggest music debate show on
                the internet—where we debate hot takes to drive converstation.
              </p>
            </div>
            <ul className="list-disc pl-8 text-white text-2xl">
              <li className="list-none flex items-center gap-2">
                <ArrowRightCircleIcon className="w-6" />
                Golfing
              </li>
              <li className="list-none flex items-center gap-2">
                <ArrowRightCircleIcon className="w-6" />
                Weight lifting
              </li>
              <li className="list-none flex items-center gap-2">
                <ArrowRightCircleIcon className="w-6" />
                Writing music related blogs
              </li>
              <li className="list-none flex items-center gap-2">
                <ArrowRightCircleIcon className="w-6" />
                Slowing down music (R.I.P. DJ Screw)
              </li>
            </ul>
          </div>
        </div>
        {/* Right Column: Profile Image */}

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/home-main.svg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/home-main.svg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col items-center gap-4 rounded-xl px-8 py-10 max-w-screen-2xl w-full mt-10">
        {/* <h1 className="text-6xl font-semibold text-white text-center py-14">
          My Skill Set
        </h1> */}
        <h1 className="text-6xl font-semibold text-white text-center py-14">
          My Skill Set
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full justify-items-center">
          {/* Skill Card */}
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-cyan-400 rounded-xl shadow-lg">
            <FaVideo className="w-12 h-12 text-cyan-400 mb-2" />
            <span className="text-white font-semibold mt-2">Final Cut Pro</span>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-cyan-400 rounded-xl shadow-lg">
            <FaRecordVinyl className="w-12 h-12 text-cyan-400 mb-2" />
            <span className="text-white font-semibold mt-2">Logic Pro</span>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-cyan-400 rounded-xl shadow-lg">
            <FaReact className="w-12 h-12 text-cyan-400 mb-2" />
            <span className="text-white font-semibold mt-2">React</span>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-blue-500 rounded-xl shadow-lg">
            <FaAngular className="w-12 h-12 text-blue-500 mb-2" />
            <span className="text-white font-semibold mt-2">Angular</span>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-green-500 rounded-xl shadow-lg">
            <TbFileTypeSql className="w-12 h-12 text-green-500 mb-2" />
            <span className="text-white font-semibold mt-2">SQL</span>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-blue-400 rounded-xl shadow-lg">
            <VscAzure className="w-12 h-12 text-blue-400 mb-2" />
            <span className="text-white font-semibold mt-2">Azure</span>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-sky-400 rounded-xl shadow-lg">
            <FaRegFileExcel className="w-12 h-12 text-sky-400 mb-2" />
            <span className="text-white font-semibold mt-2">Excel</span>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 border-2 border-sky-400 rounded-xl shadow-lg">
            <TbBrandCSharp className="w-12 h-12 text-sky-400 mb-2" />
            <span className="text-white font-semibold mt-2">C#</span>
          </div>
        </div>
      </section>
    </main>
  );
}

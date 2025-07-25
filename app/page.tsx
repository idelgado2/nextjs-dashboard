import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 rounded-xl px-8 py-12 w-full max-w-screen-2xl">
        {/* Left Column: Name, Title, Socials, Contact */}
        <div className="flex-auto items-center md:items-start gap-4">
          <h1
            className={`${lusitana.className} text-4xl md:text-5xl font-bold text-white text-center md:text-left`}
          >
            Hi!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1
            className={`${lusitana.className} text-4xl md:text-5xl font-bold text-white text-center md:text-left`}
          >
            I'M ISAAC DELGADO
          </h1>
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

      {/* About Section */}
      <section className="flex flex-col items-center gap-4 rounded-xl px-8 py-10 max-w-screen-2xl w-full mt-10">
        <h1 className="text-6xl font-semibold text-white text-center py-14">
          LET ME INTRODUCE MYSELF
        </h1>
        <p className="text-2xl text-white text-left">
          I’ve always loved music. I can't play an instrument to save my life,
          but I’m deeply passionate about listening to music, collecting it, and
          understanding how the industry works behind the scenes.
          <br />
          <br />
          With a background in computer science, I’ve spent the last five years
          working as a programmer at Chevron. Technology has always fascinated
          me—especially when it intersects with music.
          <br />
          <br />
          I’m still exploring exactly where I fit, but I know my calling lies in
          the music industry. Music has played a major role in my life, and I’m
          driven to help connect artists with the listeners who need to hear
          them—and vice versa.
          <br />
          <br />I also co-founded a music debate show called On The Record—come
          check it out!
        </p>
      </section>
    </main>
  );
}

import React from "react";
import { Syne } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

const Hero = () => {
  const heading = "NodeElites";
  const desc =
    "NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source";

  return (
    <main className="flex justify-center items-center w-full cxtr">
      <div className="flex flex-col justify-center items-center gap-3 px-2 py-40 lg:py-[200px] w-[95vw] lg:w-[80vw]">
        <h1 className="text-5xl lg:text-7xl font-bold text-center heading"><p className={syne.className}>{heading}</p></h1>
        <h2 className="text-xl lg:text-2xl font-medium text-center text-slate-300 lg:w-[60vw]">{desc}</h2>
        <Link href="#community" className="px-4 md:px-6 md:py-3 py-2 rounded-full mt-2 bg-slate-100 hover:bg-slate-300 transition ease-in-out md:text-xl text-zinc-900 font-semibold flex gap-2 items-center">Join Community <p><FaArrowRight /></p></Link>
      </div>
    </main>
  );
};

export default Hero;
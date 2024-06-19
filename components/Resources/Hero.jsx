import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const Hero = () => {
  const heading = "Resources";
  const desc =
    "Enhance your development skills with our curated list of resources. From tutorials and documentation to tools and libraries, we’ve got you covered";

  return (
    <main className="flex justify-center items-center w-full cxtr">
      <div className="flex flex-col justify-center items-center gap-3 px-2 py-40 lg:py-[200px] w-[95vw] lg:w-[80vw]">
        <h1 className="text-5xl lg:text-7xl font-bold text-center heading"><p className={syne.className}>{heading}</p></h1>
        <h2 className="text-xl lg:text-2xl font-medium text-center text-slate-300 lg:w-[60vw]">{desc}</h2>
      </div>
    </main>
  );
};

export default Hero;
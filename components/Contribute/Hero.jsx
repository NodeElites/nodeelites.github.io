import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const Hero = () => {
  const heading = "Projects You Can Contribute To";
  const desc =
    "Get involved in exciting projects within the NodeElites community. Whether you're a seasoned developer or just starting, there's a project for you. Join us in building innovative solutions and contributing to open-source software";

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
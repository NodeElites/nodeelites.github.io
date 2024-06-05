import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const Hero = () => {
  const heading = "NodeElites";
  const desc =
    "A community of developers driving innovation and excellence. Join us to collaborate on cutting-edge projects and elevate your skills to new heights";

  return (
    <main className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center gap-1 px-2 lg:py-46 py-36 w-[95vw] lg:w-[80vw]">
        <h1 className="text-5xl font-bold text-slate-200 text-center heading">
          <p className={syne.className}>{heading}</p>
        </h1>
        <h2 className="text-xl font-medium text-slate-300 text-center lg:w-[55vw] w-[90vw]">
          {desc}
        </h2>
      </div>
    </main>
  );
};

export default Hero;
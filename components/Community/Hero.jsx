import React from "react";

const Hero = () => {
  const heading = "Join The Community";
  const desc =
    "Connect with developers and designers to share knowledge, collaborate on projects, and enhance your skills in a supportive, open-source focused environment";

  return (
    <main className="flex justify-center items-center w-full cxtr">
      <div className="flex flex-col justify-center items-center gap-3 px-2 py-40 lg:py-[200px] w-[95vw] lg:w-[80vw]">
        <h1 className="text-5xl lg:text-7xl font-bold text-center heading">{heading}</h1>
        <h2 className="text-xl lg:text-2xl font-medium text-center text-slate-300 lg:w-[60vw]">{desc}</h2>
      </div>
    </main>
  );
};

export default Hero;
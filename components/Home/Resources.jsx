import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from "next/link";

const Resources = () => {
    const heading = "Resources";
    const desc1 = "Enhance your development skills with our curated list of resources. From tutorials and documentation to tools and libraries, we’ve got you covered";

    const resourxes = [
        {
            name: "Node.js Documentation",
            desc: "Official Node.js documentation to help you get started and master Node.js.",
            link: "https://nodejs.org/en/docs/"
          },
          {
            name: "JavaScript Info",
            desc: "Comprehensive guide to modern JavaScript, from basics to advanced topics.",
            link: "https://javascript.info/"
          },
          {
            name: "MDN Web Docs",
            desc: "A comprehensive resource for web developers, covering HTML, CSS, JavaScript, and more.",
            link: "https://developer.mozilla.org/"
          }
    ]

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading}</h1>
                <h1 className="font-medium text-xl lg:text-2xl text-slate-200 self-start">{desc1}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-2 w-full">
                {resourxes.map((resourxe , index)=>(
               <div key={index} className="flex flex-col justify-center items-center gap-2 p-5 rounded-lg wrapper">
                <h1 className="text-2xl text-slate-100 font-semibold">{resourxe.name}</h1>
                <h1 className="text-slate-300 font-semibold">{resourxe.desc}</h1>
                <Link href={resourxe.link} target="blank" className="px-3 py-2 font-semibold self-start mt-2 text-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out rounded-lg flex gap-1 items-center">Start Learning <FaArrowTrendUp /></Link>
               </div>
                ))}
                </div>
                <Link href='' target="blank" className="px-3 py-2 font-semibold text-center mt-2 text-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out rounded-lg">More Resources &rarr;</Link>
            </div>
        </main>
    );
};

export default Resources;
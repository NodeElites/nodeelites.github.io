import React from "react";
import { Syne } from "next/font/google";
import { FaLayerGroup } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

const Community = () => {
    const heading = "Join The Community";
    const desc1 = "NodeElites is a dynamic community of programmers committed to innovation and collaboration.";

    const communities = [
        {
            name: "Github",
            link: "https://github.com/NodeElites",
            icon: <IoLogoGithub />,
        },
        {
            name: "Discord",
            link: "",
            icon: <FaDiscord />,
        },
        {
            name: "Twitter",
            link: "",
            icon: <FaXTwitter />,
        },
    ]

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading} <p><FaLayerGroup /></p></h1>
                <h1 className="font-medium text-xl lg:text-2xl text-slate-200 self-start">{desc1}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-stretch gap-5 mt-2">
                {communities.map((communitie , index)=>(
               <div key={index} className="flex flex-col text-center justify-center items-center gap-2 p-5 rounded-lg wrapper">
                <h1 className="text-2xl text-slate-100 font-semibold">{communitie.name}</h1>
                <h1 className="text-4xl text-slate-200">{communitie.icon}</h1>
                <Link className="text-xl underline text-slate-300 hover:text-cyan-700" target="blank" href={communitie.link}>Go to {communitie.name}</Link>
               </div>
                ))}
                </div>
            </div>
        </main>
    );
};

export default Community;
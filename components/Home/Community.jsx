import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Community = () => {
    const heading = "Join The Community";
    const desc1 = "Connect with developers and designers to share knowledge, collaborate on projects, and enhance your skills in a supportive, open-source focused environment";

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
        {
            name: "Instagram",
            link: "",
            icon: <FaInstagram />,
        },
    ]

    return (
        <main className="flex justify-center items-center w-full" id="community">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading}</h1>
                <h1 className="font-medium text-xl lg:text-2xl text-slate-200 self-start">{desc1}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-stretch gap-5 mt-2 w-full">
                {communities.map((communitie , index)=>(
               <div key={index} className="flex flex-col text-center justify-center items-center gap-2 p-5 rounded-lg wrapper">
                <h1 className="text-2xl text-slate-200 font-semibold">{communitie.name}</h1>
                <h1 className="text-5xl text-slate-300">{communitie.icon}</h1>
                <Link className="text-xl font-semibold underline text-slate-300 hover:text-slate-500" target="blank" href={communitie.link}>Go to {communitie.name}</Link>
               </div>
                ))}
                </div>
            </div>
        </main>
    );
};

export default Community;
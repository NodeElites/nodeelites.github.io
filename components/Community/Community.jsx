import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Community = () => {

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
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-stretch gap-5 mt-2 w-full">
                    {communities.map((communitie, index) => (
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
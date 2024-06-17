import React from "react";
import { Syne } from "next/font/google";
import { FaRegUser } from "react-icons/fa";
import { SiCodersrank } from "react-icons/si";

const syne = Syne({ subsets: ["latin"] });

const Contributors = () => {
    const heading = "Meet Our Top Contributors";
    const desc1 = "These are the members who have made significant contributions to the NodeElites community.";

    const contrxs = [
        {
            name: "Priyanshu",
            desc: "MERN Stack Developer",
        },
        {
            name: "Priyanshu",
            desc: "MERN Stack Developer",
        },
        {
            name: "Priyanshu",
            desc: "MERN Stack Developer",
        },
        {
            name: "Priyanshu",
            desc: "MERN Stack Developer",
        },
    ]

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading} <p><SiCodersrank /></p></h1>
                <h1 className="font-medium text-xl lg:text-2xl text-slate-200 self-start">{desc1}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-stretch gap-5 mt-2">
                {contrxs.map((contrx , index)=>(
               <div key={index} className="flex flex-col text-center justify-center items-center gap-2 p-5 rounded-lg wrapper">
                <h1 className="text-2xl text-slate-100 font-semibold"><FaRegUser /></h1>
                <h1 className="text-2xl text-slate-100 font-semibold">{contrx.name}</h1>
                <h1 className="text-xl text-slate-300 font-semibold">{contrx.desc}</h1>
               </div>
                ))}
                </div>
            </div>
        </main>
    );
};

export default Contributors;
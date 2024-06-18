import React from "react";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Contributors = () => {
    const heading = "Meet Our Top Contributors";
    const desc1 = "These are the members who have made significant contributions to the NodeElites community";

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
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading}</h1>
                <h1 className="font-medium text-xl lg:text-2xl text-slate-200 self-start">{desc1}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-stretch gap-5 mt-2 w-full">
                {contrxs.map((contrx , index)=>(
               <div key={index} className="flex flex-col text-center justify-center items-center gap-2 p-5 rounded-lg wrapper">
                <h1 className="text-2xl text-slate-100 font-semibold"><FaRegUser /></h1>
                <h1 className="text-xl text-slate-100 font-semibold">{contrx.name}</h1>
                <h1 className="text-slate-300 font-semibold">{contrx.desc}</h1>
               </div>
                ))}
                </div>
                <Link href='' target="blank" className="px-3 py-2 font-semibold text-center mt-2 text-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out rounded-lg">More Contributors &rarr;</Link>
            </div>
        </main>
    );
};

export default Contributors;
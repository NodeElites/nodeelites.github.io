import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from "next/link";
import Resourxes from "@/data/resources";

const Resources = () => {

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-2 w-full">
                    {Resourxes.map((resourxe, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-2 p-5 rounded-lg wrapper">
                            <h1 className="text-2xl text-slate-100 font-semibold">{resourxe.name}</h1>
                            <h1 className="text-slate-300 font-semibold">{resourxe.desc}</h1>
                            <Link href={resourxe.link} target="blank" className="px-3 py-2 font-semibold self-start mt-2 text-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out rounded-lg flex gap-1 items-center">Start Learning <FaArrowTrendUp /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Resources;
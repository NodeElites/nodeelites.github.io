import React from "react";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import Projexts from "@/data/pcontribute";
import { FaArrowRight } from "react-icons/fa6";

const PContribute = () => {
    const heading = "Projects You Can Contribute To";
    const desc1 = "Get involved in exciting projects within the NodeElites community. Whether you're a seasoned developer or just starting, there's a project for you. Join us in building innovative solutions and contributing to open-source software";

    const displayProjexts = Projexts.slice(0,3);

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading}</h1>
                <h1 className="font-medium text-xl lg:text-2xl text-slate-200 self-start">{desc1}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-2 w-full">
                    {displayProjexts.map((projext, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-2 rounded-lg overflow-hidden wrapper">
                            <img src={projext.image} alt="" className="h-[150px] w-full object-cover"/>
                            <div className="flex flex-col justify-start items-center w-full gap-2 p-5">
                                <h1 className="text-2xl text-slate-100 font-semibold proj self-start">{projext.name}</h1>
                                <h1 className="text-slate-300 self-start font-semibold">{projext.desc}</h1>
                                <Link href={projext.link} target="blank" className="px-3 py-2 font-semibold self-start mt-2 text-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out rounded-lg flex gap-1 items-center">Contribute <FaArrowTrendUp /></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href='/contribute' className="px-3 py-2 font-semibold text-center mt-2 text-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out rounded-lg flex gap-1 items-center">More To Contribute <p><FaArrowRight /></p></Link>
            </div>
        </main>
    );
};

export default PContribute;
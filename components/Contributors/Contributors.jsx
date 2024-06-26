import React from "react";
import { FaRegUser } from "react-icons/fa";
import Contrxs from "@/data/contributors";

const Contributors = () => {

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-stretch gap-5 mt-2 w-full">
                    {Contrxs.map((contrx, index) => (
                        <div key={index} className="flex flex-col text-center justify-center items-center gap-2 p-5 rounded-lg bg-zinc-800">
                            <h1 className="text-2xl text-slate-100 font-semibold"><FaRegUser /></h1>
                            <h1 className="text-xl text-slate-100 font-semibold">{contrx.name}</h1>
                            <h1 className="text-slate-300 font-semibold">{contrx.desc}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Contributors;
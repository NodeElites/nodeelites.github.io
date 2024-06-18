import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const Introduction = () => {
    const heading = "About";
    const desc1 = "NodeElites is a dynamic community of programmers committed to innovation and collaboration. Whether crafting intricate encryption programs or elegant ciphers, we unite to document and create algorithmic marvels through code.";
    const desc2 = "As an open-source hub, all are welcome to contribute, fostering a culture of shared learning and growth. With rigorous peer review and adherence to contemporary coding standards, we ensure a welcoming environment while pushing the boundaries of possibility."
    const desc3 = "Join us in our journey to explore the intricacies of code and build a vibrant community where creativity thrives and innovation knows no bounds."

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading}</h1>
               <div className="flex flex-col justify-center items-center gap-2 p-5 rounded-lg wrapper">
                <h1 className="font-medium text-slate-200 self-start">{desc1}</h1>
                <h1 className="font-medium text-slate-200 self-start">{desc2}</h1>
                <h1 className="font-medium text-slate-200 self-start">{desc3}</h1>
               </div>
            </div>
        </main>
    );
};

export default Introduction;
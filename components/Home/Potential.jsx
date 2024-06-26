import React from "react";

const Potential = () => {
    const heading = "Unlock Your Potential";
    const desc1 = "As a member of the NodeElites community, you'll have access to a wealth of resources and opportunities to help you grow as a developer";

    const benefits = [
        {
            name: "Networking",
            desc: "Connect with other Node.js developers and industry experts, and build lasting professional relationships",
        },
        {
            name: "Learning Resources",
            desc: "Access a vast library of tutorials, workshops, and webinars to deepen your Node.js knowledge and skills",
        },
        {
            name: "Career Opportunities",
            desc: "Discover job postings, mentorship programs, and networking events to help you advance your career",
        },
    ]

    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-3 px-2 mb-20 w-[95vw] lg:w-[80vw]">
                <h1 className="flex gap-2 text-3xl font-semibold text-slate-200 self-start items-center">{heading}</h1>
                <h1 className="font-medium text-xl lg:text-2xl text-slate-200 self-start">{desc1}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-2 w-full">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-2 p-5 rounded-lg bg-zinc-800">
                            <h1 className="text-2xl text-center text-slate-100 font-semibold">{benefit.name}</h1>
                            <h1 className="text-slate-300 font-semibold">{benefit.desc}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Potential;
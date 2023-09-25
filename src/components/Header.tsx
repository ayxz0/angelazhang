import { useEffect, useState } from "react";

export const Header = ({activeSection = "main"} : {activeSection?: string}) => {  
    return(
        <>
            <div className="w-full flex justify-center backdrop-blur-lg pb-4 pt-4">
                <div className="text-zinc-400 text-lg flex justify-between space-x-10">
                    {activeSection !== "main" && <a className="hover:text-zinc-50" href="#main">Home</a>}
                    <a className={`hover:text-zinc-50 ${activeSection==="skills" && "text-teal-300"}`} href="#skills">Skills</a>
                    <a className={`hover:text-zinc-50 ${activeSection==="projects" && "text-teal-300"}`} href="#projects">Projects</a>
                </div>
            </div>     
        </>
    )
}
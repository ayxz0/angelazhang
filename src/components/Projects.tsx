import { Card } from "./Card";
import React, { useState, useEffect } from 'react';

export interface IProject {
    title?: string;
    subtitle?: string;
    date?: string;
    techstack?: string[];
    about?: string;
    github?: string;
    link?:string;
}

export const Projects = () => {
    const [activeSection, setActiveSection] = useState(-1);
    const projs = require("../projects.json");

    const handleSectionClick = (link: string | undefined) => {
        if (link) window.location.href = link;
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>, curIndex: number) => {
        e.stopPropagation();
        setActiveSection(curIndex);

        const section = document.querySelector(`.section:nth-child(${curIndex+1})`)!;
        const sectionTop = section?.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionTop - 45, behavior: 'smooth' });
    }

    const handleMouseEnter = (curIndex: number) => {
        setActiveSection(curIndex);
    };

    const handleMouseLeave = () => {
        setActiveSection(-1);
    };

    return (
        <div className="w-full lg:flex">
            <div className="lg:w-2/3">
                {projs.map((project: IProject, index: number) =>
                    <div key={`project_${project.title}`} 
                        className={`section ${project.link? "hover:bg-zinc-800 hover:cursor-pointer": ""} rounded-lg`}
                        onClick={() => handleSectionClick(project.link)}
                        onMouseEnter={()=>handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Card 
                            title={project.title}
                            subtitle={project.subtitle}
                            date={project.date}
                            techstack={project.techstack}
                            about={project.about}
                            github={project.github}
                            link={project.link}
                        />
                    </div>
                )}
            </div> 
            <div className="invisible lg:visible lg:w-1/3 ps-7">
                <div className="rounded-lg bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300 flex justify-center h-fit sticky top-[15vh]">
                    <div className="overflow-y-scroll p-1 m-[1px] w-full h-full rounded-lg bg-zinc-900" style={{height: "80vh"}}>
                    {projs.map((project: IProject, index: number) =>
                        <div key={`prjList_${project.title}`}
                            className="flex justify-center m-1"
                        >
                            <div className="flex justify-center w-full mx-1 rounded-md">
                                <div className={`font-light w-full ${activeSection === index ? 'text-emerald-400' : 'text-white'}`} 
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => handleLinkClick(e, index)} 
                                >
                                <div className="p-2 m-[1px] w-full h-11/12 rounded-md hover:bg-zinc-800 hover:cursor-pointer flex justify-center">
                                        {project.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div> 
            </div>
        </div> 
    );
};



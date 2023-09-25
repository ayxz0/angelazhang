import { Card } from "./Card";
import { ListLink } from "./ListLink";

export interface IProject {
    title?: string;
    subtitle?: string;
    date?: string;
    techstack?: string[];
    about?: string;
    github?: string;
    link?:string;
}

export const Projects = () =>{
    const projs = require("../projects.json");
    return (
        <div className="w-full">
        
            <div className="flex w-full">
                <div className="w-2/3 me-7 sm:w-full">
                    {projs.map((project: IProject) =>
                        <div key={`project_${project.title}`} id={project.title}>
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
                <div className="lg:visible invisible w-1/3 p-[1px] rounded-lg bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300 flex justify-center h-fit sticky top-[15vh]">
                    <div className="overflow-scroll p-1 m-[1px] w-full h-full rounded-lg bg-zinc-900" style={{height: "80vh"}}>
                    {projs.map((project: IProject) =>
                        <div key={`prjList_${project.title}`} className="flex justify-center m-1">
                            <ListLink 
                                title={project.title!}
                            />
                        </div>
                    )}
                    </div>
                </div> 
            </div> 
        </div>
    )
}

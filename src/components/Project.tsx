import { Card } from "./Card";
import { ListLink } from "./ListLink";

export const Project = ( { title, children, subtitle, date, techstack } : { children?: React.ReactNode, title?: string, subtitle?: string, date?: string, techstack?: string } ) =>{
    const projects = require("../projects.json");

    return (
        <>
            <div className="flex w-full">
                <div className="w-2/3 me-7 sm:w-full">
                    {projects.map((project: any) =>
                        <div id={project.title}>
                            <Card 
                                title={project.title}
                                subtitle={project.subtitle}
                                date={project.date}
                                techstack={project.techStack}
                                about={project.about}
                                github={project.github}
                                link={project.link}
                            />
                        </div>
                    )}
                </div>
                <div className="lg:visible invisible w-1/3 p-[1px] rounded-lg bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300 flex justify-center h-fit sticky top-[15vh]">
                    <div className="overflow-scroll p-1 m-[1px] w-full h-full rounded-lg bg-zinc-900" style={{height: "80vh"}}>
                    {projects.map((project: any) =>
                        <div className="flex justify-center m-1">
                            <ListLink 
                                title={project.title}
                            />
                            {/* <a href={`#${project.title}`} /> */}

                        </div>
                    )}
                    </div>
                </div>
            </div>
            
            

            
        </>
    )
}

import { Card } from "./Card";
import { ListLink } from "./ListLink";

export const Project = ( { title, children, subtitle, date, techstack } : { children?: React.ReactNode, title?: string, subtitle?: string, date?: string, techstack?: string } ) =>{
    const projects = require("../projects.json");

    return (
        <>
            <div className="flex w-full">
                <div className="w-3/4">
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
                <div className="w-1/4 p-2">
                    <div className="h-screen overflow-scroll ">
                    {projects.map((project: any) =>
                        <div className="">
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

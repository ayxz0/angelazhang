import { Card } from "./Card";

export const Project = ( { title, children, subtitle, date, techstack } : { children?: React.ReactNode, title?: string, subtitle?: string, date?: string, techstack?: string } ) =>{
    const projects = require("../projects.json");

    return (
        <>
            <div className="flex w-full">
                <div className="w-1/2">
                    {projects.map((project: any) =>
                        <div className="">
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
                <div className="w-1/2">
                    <div className="h-screen overflow-scroll ">
                    {projects.map((project: any) =>
                        <div className="">
                            <Card 
                                title={project.title}
                            />
                            <a href="#${project.title}"></a>

                        </div>
                    )}
                    </div>
                </div>
            </div>
            
            

            
        </>
    )
}

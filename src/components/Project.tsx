import { Card } from "./Card";

export const Project = ( { title, children, subtitle, date, techstack } : { children?: React.ReactNode, title?: string, subtitle?: string, date?: string, techstack?: string } ) =>{
    const projects = require("../projects.json");

    return (
        <>
            {projects.map((project: any) =>
                <div className="">
                    <Card 
                        title={project.title}
                        subtitle={project.subtitle}
                        date={project.date}
                        techstack={project.techStack}
                    />
                </div>
            )}

            
        </>
    )
}

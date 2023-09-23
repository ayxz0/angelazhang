import { Badge } from "./Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
interface IProject {
    title?: string;
    subtitle?: string;
    date?: string;
    techstack?: string[];
    about?: string;
    github?: string;
    link?:string;
}

//children?: React.ReactNode,
//{ title, subtitle, date, techstack } : {  title?: string, subtitle?: string, date?: string, techstack?: string } 
export const Card = ( props: IProject) =>{
    const {title, subtitle, date, techstack, about, github, link} = props;
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>

            {link ? <a className="" href={link}> 
                <div className="hover:bg-zinc-800 rounded-md">
                    <Content title={title} subtitle={subtitle} date={date} techstack={techstack} about={about} github={github}/>
                </div>            
            </a> : 
                <Content title={title} subtitle={subtitle} date={date} techstack={techstack} about={about} github={github}/>    
            }
            
        </>
    )
}

const Content = ( props: IProject ) => {
    const {title, subtitle, date, techstack, about, github} = props;
    return (
        <>
            <div className="justify-start group mx-5 py-4 pr-10 w-full text-white">
                <div className="ml-5 block w-11/12">
                    <span className="mb-1 text-md uppercase text-zinc-200 block group-hover:hidden"> {date} </span>
                    <span className="mb-1 text-md uppercase text-zinc-200 hidden group-hover:block"> { subtitle } </span>
                    <div className="mb-1 font-bold text-2xl"> {title}                         
                        <span className="ms-10">
                            {github ? <a href={github}> <i className="opacity-60 hover:opacity-100 devicon-github-original" /> </a> : null}
                        </span>
                    </div>
                    
                    <div className="mb-5 px-5 text-lg"> {about} </div>
                    <div className="pb-2 text-md text-zinc-200"> 
                        {
                            techstack ? 
                                techstack?.map((tech: string)=> 
                                    <Badge text={tech} />
                                )
                            : null
                        }
                    </div>
                </div>
                <div className="flex border-white border-2 inline-block w-1/12">
                    <FontAwesomeIcon className="hidden group-hover:block max-h-5"icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}} />
                </div>
            </div>
        </>
    )
}
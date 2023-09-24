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
                <div className="hover:bg-zinc-800 rounded-lg">
                    <Content title={title} subtitle={subtitle} date={date} techstack={techstack} about={about} github={github} link={link}/>
                </div>            
            </a> : 
                <Content title={title} subtitle={subtitle} date={date} techstack={techstack} about={about} github={github}/>    
            }
            
        </>
    )
}

const Content = ( props: IProject ) => {
    const {title, subtitle, date, techstack, about, github, link} = props;
    return (
        <>
            <div className="justify-start group mx-5 py-4 pr-10 w-full text-white flex">
                <div className="ml-5 block w-11/12">
                    <span className="mb-1 text-md uppercase text-zinc-200 block group-hover:hidden"> {date} </span>
                    <span className="mb-1 text-md uppercase text-zinc-200 hidden group-hover:block"> { subtitle } </span>
                    <div className="mb-1 font-bold text-2xl"> {title}</div>
                    
                    <div className="mb-5 py-2 px-5 text-lg"> {about} </div>
                    <div className="pb-2 max-w-full text-md text-zinc-200 auto invisible lg:visible"> 
                        {
                            techstack ? 
                                techstack?.map((tech: string)=> 
                                    <Badge key={tech.toString()}text={tech} />
                                )
                            : null
                        }
                    </div>
                </div>
                <div className="justify-center w-1/12">
                    <div className="h-1/2 w-full pt-1 flex justify-end">
                        {link ? <FontAwesomeIcon className="hidden group-hover:block max-h-5"icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}} /> : null}
                    </div>
                    <div className="flex justify-center items-end h-1/2 w-full pb-1">
                        {github ? <a href={github}> <i className="flex h-full w-full opacity-60 hover:opacity-100 devicon-github-original text-3xl" /></a> : null}
                    </div>
                </div>
            </div>
            <div className="invisible">
                <hr></hr>
            </div>
            
        </>
    )
}
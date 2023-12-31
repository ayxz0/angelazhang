import { Badge } from "./Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { IProject } from "./Projects";

export const Card = ( props: IProject) =>{
    const {title, subtitle, date, techstack, about, github, link} = props;
    return (
        <>
            {link ? <>
                <div>
                    <a target="_blank" href={link}/>
                    <Content title={title} subtitle={subtitle} date={date} techstack={techstack} about={about} github={github} link={link}/>
                </div> 
            </> : 
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
                                    <Badge key={`techstack_${tech}`} text={tech} />
                                )
                            : null
                        }
                    </div>
                </div>
                <div className="justify-center w-1/12">
                    <div className="h-1/2 w-full pt-1 flex justify-end">
                        {link ? <FontAwesomeIcon className="hidden group-hover:block max-h-5"icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}} /> : null}
                    </div>
                    <button></button>
                    <div className="flex justify-center items-end h-1/2 w-full pb-1">
                    </div>
                </div>
            </div>
            <div className="invisible">
                <hr></hr>
            </div>
            
        </>
    )
}
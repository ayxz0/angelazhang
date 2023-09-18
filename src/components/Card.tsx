import { Badge } from "./Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
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
            <div className="justify-start bg-opacity-10 bg-white group text-white mx-5 my-10 p-7 w-full text-white border border-solid border-slate-100 hover:border-white rounded-md hover:shadow-3xl">
                {/* <div className="mb-1 uppercase text-slate-100 block group-hover:hidden"> {date} </div>
                <div className="mb-1 uppercase text-slate-100 hidden group-hover:block hover:transition-all"> { subtitle } </div>
                <div className="mb-5 font-bold text-2xl"> {title} </div>
                <div className="text-lg"> {children} </div>
                {/* &nbsp; 
                <div className="">&nbsp;</div>
                <div className="mb-1 uppercase text-slate-100"> {techstack} </div> */}
                <div className="block">
                    <div className="mb-1 font-bold text-2xl"> {title} 
                        <span className="ms-10">
                            {github ? <a href={github}> <i className="opacity-60 hover:opacity-100 devicon-github-original" /> </a> : null}
                            {link ? <a className="ms-1" href={link}> <FontAwesomeIcon className="opacity-60 hover:opacity-100 max-h-5"icon={faLink} style={{color: "#ffffff",}} /> </a> : null}
                        </span>
                        
                    </div>
                    <span className="mb-5 text-md uppercase text-slate-200 block group-hover:hidden"> {date} </span>
                    <span className="mb-5 text-md uppercase text-slate-200 hidden group-hover:block"> { subtitle } </span>
                    <div className="mb-5 px-5 text-lg"> {about} </div>
                    <div className="text-md text-slate-200"> 
                        {
                            techstack ? 
                                techstack?.map((tech: string)=> 
                                    <Badge text={tech} />
                                )
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

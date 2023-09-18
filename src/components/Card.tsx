import { Badge } from "./Badge";

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
    const {title, subtitle, date, techstack, about} = props;
    return (
        <>
            <div className="row bg-opacity-10 bg-white group text-white mx-5 my-10 p-7 w-full text-white border border-solid border-slate-100 hover:border-white rounded-md hover:shadow-3xl">
                {/* <div className="mb-1 uppercase text-slate-100 block group-hover:hidden"> {date} </div>
                <div className="mb-1 uppercase text-slate-100 hidden group-hover:block hover:transition-all"> { subtitle } </div>
                <div className="mb-5 font-bold text-2xl"> {title} </div>
                <div className="text-lg"> {children} </div>
                {/* &nbsp; 
                <div className="">&nbsp;</div>
                <div className="mb-1 uppercase text-slate-100"> {techstack} </div> */}
                <div className="col-10 block">
                    <div className="mb-1 font-bold text-2xl"> {title} </div>
                    <span className="mb-5 text-md uppercase text-slate-200 block group-hover:hidden"> {date} </span>
                    <span className="mb-5 text-md uppercase text-slate-200 hidden group-hover:block"> { subtitle } </span>
                    <div className="mb-5 text-lg"> {about} </div>
                    <div className="text-md text-slate-200"> 
                        {
                            techstack?.map((tech: string)=> 
                                <Badge text={tech} />
                            )
                        }
                    </div>
                </div>
                <div className="col-2">
                    hi
                </div>
                

            </div>
        </>
    )
}

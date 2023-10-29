import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

const SCircle = ( {name, ability} : {name: string, ability: number} ) => {
    const size = 100;
    const strokeWidth = 1;
    return(
        <>
            <div className="w-full p-[1pt] aspect-square rounded-full bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300" >
                <div className="flex justify-center items-center w-full aspect-square bg-zinc-900 min-w-fit rounded-full" >{name}</div>
            </div>
        </>
    )
}

const Vr = () => {
    return(
        <>
            <div className="bg-zinc-800 h-full w-[1px] mx-10"></div>
        </>
    )
}

export const Skills = () => {
    const skills = require("../skills.json");
    return (
        <>
            <div className="w-full lg:flex">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:w-1/2 lg:grid-cols-3 gap-x-10 gap-y-3">
                    {skills.important.map((important : any) => 
                        <div key={`skill_${important.name}`} >
                            <SCircle 
                                name={important.name}
                                ability={important.ability}
                            />
                        </div>
                        
                    )}
                </div>
                <div className="w-1/12 my-10 invisible lg:visible"><Vr /></div>
                <div className="lg:w-1/2 lg:mt-10 flex">
                    <div className="w-2/3">
                        <div className="font-bold text-xl mb-4 flex text-emerald-400">
                            <FontAwesomeIcon className="me-3 h-6 opacity-70" icon={faScrewdriverWrench} />
                            Tools
                        </div>
                        <ul className="ms-1 pe-3">
                            <div className="grid grid-cols-2 gap-x-5">
                                {skills.tools.map((tool : any) => 
                                    <li key={`tool_${tool}`}>
                                        <div className="items-center">
                                            <i className={`me-2 w-full opacity-60 devicon-${tool.toLowerCase()}-plain`} />
                                            {tool}
                                        </div>
                                    </li>
                                )}
                            </div>
                            
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <div className="font-bold text-xl mb-4 flex text-emerald-400">
                            <FontAwesomeIcon className="me-3 h-6 opacity-70" icon={faBookOpen} />
                            Knowlege</div>
                        <ul className="ms-1">
                            {skills.knowledge.map((know : any) => 
                                <li key={`knowledge_${know}`}>{know}</li>
                            )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


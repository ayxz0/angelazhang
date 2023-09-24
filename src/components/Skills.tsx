import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

const SkillCircle = ( {name, ability} : {name: string, ability: number} ) => {
    const size = 100;
    const strokeWidth = 1;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (ability / 100) * circumference;
    
    return(
        <>
            <svg width={size} height={size}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    className="fill-zinc-900 stroke-white"
                />
                <circle
                    className={`fill-zinc-900 stroke-blue-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                <text className="text-center text-white font-bold"
                    x="25%"
                    y="50%"
                    dy=".3em">{name} 
                </text>
            </svg>

            
        </>
    )
}

const SCircle = ( {name, ability} : {name: string, ability: number} ) => {
    const size = 100;
    const strokeWidth = 1;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;    
    return(
        <>
            <div className="w-full p-[1pt] aspect-square rounded-full bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300">
                <div className="flex justify-center items-center w-full aspect-square bg-zinc-900 rounded-full">{name}</div>
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
            <div className="lg:flex w-full">
                <div className="w-1/3 lg:grid lg:grid-cols-3 lg:gap-x-10 gap-y-3">
                    {skills.important.map((important : any) => 
                        <div key={important.name.toString()}>
                            <SCircle 
                                name={important.name}
                                ability={important.ability}
                            />
                        </div>
                        
                    )}
                </div>
                <div className="w-1/12 my-10 invisible lg:visible"><Vr /></div>
                <div className="w-1/2 lg:flex mt-10">
                    <div className="w-2/3 me-5">
                        <div className="font-bold text-xl mb-2 flex justify-center">
                            <FontAwesomeIcon className="me-3 h-6 opacity-70" icon={faScrewdriverWrench} />
                            Tools
                        </div>
                        <ul className="ms-1">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-x-5">
                                {skills.tools.map((tool : any) => 
                                    <li key={tool.toString()}>
                                        <div className="items-center">
                                            <i className={`me-2 w-full opacity-60 devicon-${tool.toLowerCase()}-plain`} />
                                            {tool}
                                        </div>
                                    </li>
                                )}
                            </div>
                            
                        </ul>
                    </div>
                    <div className="w-1/3 mx-10">
                        <div className="font-bold text-xl mb-2 flex justify-center">
                            <FontAwesomeIcon className="me-3 h-6 opacity-70" icon={faBookOpen} />
                            Knowlege</div>
                        <ul className="ms-1">
                            {skills.knowledge.map((know : any) => 
                                <li key={know.toString()}>{know}</li>
                            )}
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}


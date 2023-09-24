/* import {
    Animate,
    initTE,
  } from "tw-elements";
  
  initTE({ Animate }); */

export const Introduction= () => {
    
    return (
        <>
            <div className="w-full justify-content space-y-10">
                <div className="items-center flex justify-center m-5 space-x-4 h-11">
                    <div className="name text-7xl text-white italic font-bold uppercase">
                        <span>Angela</span><span className="last">Zhang</span>
                    </div>
                </div>
                        
            </div>
        </>
    )
} 

export const Socials = () => {
    return (
        <>
            <div className="h-20 text-3xl space-x-4 flex justify-between items-center">
                <a href="https://linkedin/angelazhang">
                    <i className="opacity-60 hover:opacity-100 devicon-linkedin-plain"></i>
                </a>
                <a href="https://github/ayxz0">
                    <i className="opacity-60 hover:opacity-100 devicon-github-plain"></i>
                </a>
            </div>
            
        </>
    )
}
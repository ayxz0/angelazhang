/* import {
    Animate,
    initTE,
  } from "tw-elements";
  
  initTE({ Animate }); */

export const Introduction= () => {
    
    return (
        <>
            {/* <div 
                data-te-animation-init
                data-te-animation-start="onLoad"
                data-te-animation-reset="true"
                data-te-animation="[slide-right_1s_ease-in-out]"
                className="">

            </div> */}
            <div className="w-full justify-content space-y-10">
                <div className="items-center flex justify-center m-5 space-x-4 h-11">
                    <div className="name text-7xl text-white italic font-bold uppercase">
                        <span>Angela</span><span className="last">Zhang</span>
                    </div>
                </div>
                        
            </div>
            
            {/* <div className="w-full justify-content space-y-10">

                <div className="items-center flex row m-5 space-x-4 h-11">
                    <div className="text-5xl text-white font-semibold">Angela Zhang</div>
                    <div className="items-end flex h-full">
                        <a href="./" className="text-2xl font-mono font-thin text-slate-400 hover:text-slate-500">@ayxz0</a>
                    </div>
                </div>
                
                <div className="flex row items-center m-5">
                    <div className="mr-5 rounded-full bg-white" style={{height: 150, width: 150}}></div>
                    <div className="ml-5 w-7/12 inline align-middle">
                        <div className="text-xl text-white font-light space-y-4">
                            <p>Junior Developer @ MarketPush</p>
                            <p>Class of 2024 @ Lincoln High School</p>
                            <p className="pb-2">Portland, Oregon</p>
                        </div>
                        
                    </div>
                    
                </div>

            </div> */}
        </>
    )
} 

export const Socials = () => {
    return (
        <>
            <div className="h-10 w-full inline-block">
                <a href="https://linkedin/angelazhang">
                    <i className="devicon-linkedin-plain"></i>
                </a>
                <a href="https://github/ayxz0">
                    <i className="devicon-github-plain"></i>
                </a>
            </div>
            
        </>
    )
}
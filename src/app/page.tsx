import { Project } from "@/components/Project";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            <div id="main" className="bg-black">
                <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-zinc-950 via-zinc-500/20 to-black">
                    <nav className="my-2 animate-fade-in">
                        <div className="max-w-5xl w-full justify-center lg:flex">
                            <Header />
                        </div>
                    </nav>
                    <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300" />
                
                    <h1 className="italic font-bold z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-xl md:text-7xl whitespace-nowrap bg-clip-text name uppercase">
                        AngelaZhang
                    </h1>
                
                    <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300" />
                
                    <div className="my-2 text-center animate-fade-in">
                            <div className="flex text-white text-xl justify-center pt-[7vh] font-thin text-sm"> 
                                <div className="text-center space-y-1">
                                    <p>2024 @ Lincoln High School</p>
                                    <p>Jr Dev @ MarketPush </p>
                                </div>
                            </div>
                            <div className="text-white max-w-5xl w-full justify-center text-sm lg:flex">
                                <div className="h-20 text-3xl space-x-4 flex justify-between items-center">
                                    <a href="https://www.linkedin.com/in/angela-zhang-b1a141233/">
                                        <i className="opacity-70 hover:opacity-100 devicon-linkedin-plain"></i>
                                    </a>
                                    <a href="https://github.com/ayxz0">
                                        <i className="opacity-70 hover:opacity-100 devicon-github-plain"></i>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full">
                <div className="z-10 sticky top-0 justify-center lg:flex border-gray-800 border-b-[1px]">
                    <Header />
                </div>

                <div id="projects" className="pt-12 w-full text-white">
                    <div className="pe-14 ps-20">
                        <div className="mb-2 pt-5 pb-3 flex justify-center font-bold text-5xl">
                            Projects
                        </div>
                        <div className="flex">
                            <Project />
                        </div>
                    </div>
                </div>

                <div id="skills" className="pt-12 w-full h-screen text-white">
                    <div className="pe-14 ps-20">
                        <div className="pt-5 pb-12 flex justify-center font-bold text-5xl">
                            Skills
                        </div>
                        <div className="flex">
                            <Skills />
                        </div>
                    </div>
                    <div className="flex text-zinc-600 justify-center pt-[7vh] font-thin text-sm"> 
                        <div>
                            Angela Zhang &copy; 2023; 
                            Built with Next.js and Tailwind CSS, deployed with Vercel. 
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
        
    );
}

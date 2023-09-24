import { Introduction, Socials } from "@/components/Introduction";
import { Project } from "@/components/Project";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div id="main" className="h-screen py-16 px-24 inline-block flex items-center">
                <div>
                    <div className="max-w-5xl w-full justify-center lg:flex">
                        <Header />
                    </div>
                    <div className="max-w-5xl w-full justify-center text-sm lg:flex">
                        <Introduction />
                    </div>
                    <div className="flex text-white text-xl justify-center pt-[7vh] font-thin text-sm"> 
                        <div className="text-center space-y-1">
                            <p>2024 @ Lincoln High School</p>
                            <p>Jr Dev @ MarketPush </p>
                        </div>
                    </div>
                    <div className="text-white max-w-5xl w-full justify-center text-sm lg:flex">
                        <Socials />
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
                    {/* <div className="w-full h-20 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300">meow</div> */}
                </div>
            </div>
        </main>

    )
}

'use client'
import { Projects } from "@/components/Projects";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import LandingPage from "@/components/LandingPage";
import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";

export default function Home() {
    const [activeSection, setActiveSection] = useState("main");
    
    useEffect(() => {
      const handleScroll = () => {
        const skillsSection = document.querySelector('#skills')!;       
        const projsSection = document.querySelector('#projects')!;  
        const activeSec = projsSection?.getBoundingClientRect().top <=5 ? "projects" 
            : (skillsSection?.getBoundingClientRect().top <=0 ? "skills" : "main"); 
        setActiveSection(activeSec);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
        <main className="flex flex-col items-center">
            {activeSection !== "main" && 
            <div className={`w-full z-10 top-0 justify-center lg:flex border-cyan-900 border-b-[1px] sticky`}>
                <Header activeSection={activeSection}/>
            </div>}
            <section id="main" className="bg-black">
                <LandingPage />           
            </section>
            <section id="skills" className="bg-gradient-to-r from-zinc-900 from-60% to-zinc-800 to-100% pt-12 w-full text-white">
                <div className="pe-14 ps-20">
                    <div className="pt-5 pb-12 flex justify-center font-bold text-5xl">
                        Skills
                    </div>
                    <div className="flex">
                        <Skills />
                    </div>
                </div>
            </section>
            <section id="projects" className="pt-12 w-full text-white">
                <div className="pe-14 ps-20">
                    <div className="mb-2 pt-5 pb-3 flex justify-center font-bold text-5xl">
                        Projects
                    </div>
                    <Projects />
                </div>
            </section>
            <div id="footer" className="flex text-zinc-600 justify-center pt-[7vh] font-thin text-sm"> 
                <div>
                    <div className="flex justify-center">
                    Angela Zhang &copy; 2023; 
                    Built with Next.js and Tailwind CSS, deployed with Vercel. 
                </div>
                    <div className="flex justify-center">
                        Animation inspired by <a className="hover:text-zinc-300" href="https://chronark.com/"> &nbsp;chronark</a>.
                    </div> 
                </div>
            </div>
        </main>
    );
}

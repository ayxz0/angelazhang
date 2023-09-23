import { Introduction } from "@/components/Introduction";
import { Card } from "@/components/Card";
import { Project } from "@/components/Project";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";

const js = "";
const tsx = "";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div id="main" className="h-screen py-16 px-24">
                <div className="max-w-5xl w-full justify-center lg:flex">
                    <Header />
                </div>
                <div className="max-w-5xl w-full justify-center text-sm lg:flex">
                    <Introduction />    
                </div>
                <div className="w-9/12 justify-between items-stretch text-sm lg:flex">
                    
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
                        <div className="pt-5 pb-3 flex justify-center font-bold text-5xl">
                            Skills
                        </div>
                        <div className="flex">
                            <Skills />
                        </div>
                    </div>
                    {/* <div className="w-full h-20 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300">meow</div> */}
                </div>

            </div>
            
            
            {/* <div className="w-9/12 justify-between items-stretch text-sm lg:flex">
                <Card title="Languages" children={
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        
                    </ul>
                }/> 
                <Card title="Libraries" children={
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                        <li>idk</li>
                        
                    </ul>
                }/> 
                <Card title="Tools" children={
                    <ul>
                        <li>Git</li>
                        <li>Azure</li>
                        <li>Firebase</li>
                        <li>SquareSpace</li>
                        <li>Figma</li>
                        
                    </ul>
                }/> 
            </div> */}
            
            <div className="w-9/12 text-white justify-center font-mono text-sm lg:flex">
                {/* <div className="w-full">
                    <Project />
                </div> */}
            </div>
            <script
                type="text/javascript"
                src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js">
            </script>        
        </main>

    )
}

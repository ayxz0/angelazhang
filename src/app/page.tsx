import { Introduction } from "@/components/Introduction";
import { Card } from "@/components/Card";
import { Project } from "@/components/Project";
import { Header } from "@/components/Header";

const js = "";
const tsx = "";


export default function Home() {
    return (
        <main className="bg-opacity-10 bg-white flex min-h-screen flex-col items-center py-16 px-24">
            <div id="main" className="h-screen">
                <div className="z-10 max-w-5xl w-full justify-center font-mono text-sm lg:flex mb-5">
                    <Header />
                </div>
                <div className="z-10 max-w-5xl w-full justify-center font-mono text-sm lg:flex">
                    <Introduction />    
                </div>
                <div className="w-9/12 justify-between items-stretch text-sm lg:flex">

                </div>
            </div>
            <div id="projects" className="w-full text-white bg-red">
                <div className="flex">
                    <Project />
                </div>
                
            </div>
            <div id="skills" className="h-screen text-white bg-red">
                
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

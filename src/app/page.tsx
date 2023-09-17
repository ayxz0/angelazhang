import { Introduction } from "@/components/Introduction";
import { Card } from "@/components/Card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-16 px-24">
            <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex">
                <Introduction />    
            </div>
            <div className="w-9/12 justify-between items-stretch font-mono text-sm lg:flex">
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
            </div>
            <div className="w-9/12 text-white justify-center font-mono text-sm lg:flex">
                <div className="text-3xl font=bold">
                    <p>Projects</p>
                </div>
                
            </div>
                <div className="w-full">
                    <Card title="EcoMap" subtitle="web development" children={
                            <p>Ecomap is super cool</p>
                    }/>
                
            </div>
        </main>
    )
}

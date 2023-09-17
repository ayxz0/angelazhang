import { Card } from "@/components/Card";
import { Introduction } from "@/components/Introduction";
import { Skill } from "@/components/Skill";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-16 px-24">
            <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex">
                <Introduction />    
            </div>
            <div className="justify-between font-mono text-sm lg:flex">
                <Skill title="Languages" children={
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        
                    </ul>
                }/> 
                <Skill title="Libraries" children={
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                        <li>idk</li>
                        
                    </ul>
                }/> 
                <Skill title="Tools" children={
                    <ul>
                        <li>Git</li>
                        <li>Azure</li>
                        <li>Firebase</li>
                        <li>SquareSpace</li>
                        <li>Figma</li>
                        
                    </ul>
                }/> 
            </div>
        </main>
    )
}

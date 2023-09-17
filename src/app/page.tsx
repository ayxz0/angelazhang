import { Introduction } from "@/components/Introduction";
import { Card } from "@/components/Card";

export default function Home() {
    return (
        <html lang="en" className="home-bg">
            <main className="flex min-h-screen flex-col items-center py-16 px-24">
                <div className="z-10 max-w-5xl w-full justify-end font-mono text-sm lg:flex">
                    <Introduction />    
                </div>
                <div className="w-9/12 justify-between items-stretch text-sm lg:flex">
                    
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
                </div>
                <div className="w-9/12 text-white justify-center font-mono text-sm lg:flex">
                    <div className="text-3xl font=bold">
                        <p>Projects</p>
                    </div>
                    
                </div>
                    <div className="w-full justify-center items-stretch lg:flex">
                        <Card title="EcoMap" subtitle="Hackathon" children={
                                <p>Website</p>
                        }/>
                        <Card title="Bobo Tea House" subtitle="web design" children={
                                <p>Ecomap is super cool</p>
                        }/>
                        <Card title="Carbon Calculator" subtitle="Hackathon" children={
                                <p>Website</p>
                        }/>
                        <Card title="Mission:Citizen" subtitle="web editor" children={
                                <p>Ecomap is super cool</p>
                        }/>            
                    </div>
                    <div className="w-full justify-center items-stretch lg:flex">
                        <Card title="M:C Online" subtitle="Web Development" children={
                                <p>Website</p>
                        }/>
                        <Card title="Connect 4" subtitle="web editor" children={
                                <p>Ecomap is super cool</p>
                        }/>
                        <Card title="2021-2022" subtitle="Web Development" children={
                                <p>Website</p>
                        }/>
                        <Card title="2020-2021" subtitle="web editor" children={
                                <p>Ecomap is super cool</p>
                        }/>      
                    </div>
                    <div className="w-full justify-center items-stretch lg:flex">
                        <Card title="Riemann Sums" subtitle="Web Development" children={
                                <p>Website</p>
                        }/>
                        <Card title="Newton Raphson" subtitle="web editor" children={
                                <p>Ecomap is super cool</p>
                        }/>     
                    </div> */}
            </main>
        </html>
    )
}

import { Header } from "@/components/Header";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-zinc-950 via-zinc-500/20 to-black">
            <nav className="my-2 animate-fade-in">
                <div className="max-w-5xl w-full justify-center lg:flex">
                    <Header />
                </div>
            </nav>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-300" />
            <h1 className="italic font-bold px-1 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-xl md:text-7xl whitespace-nowrap bg-clip-text name uppercase">
                Angela Zhang
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
                        <a target="_blank" href="https://www.linkedin.com/in/angela-zhang-b1a141233/">
                            <i className="opacity-70 hover:opacity-100 devicon-linkedin-plain"></i>
                        </a>
                        <a target="_blank" href="https://github.com/ayxz0">
                            <i className="opacity-70 hover:opacity-100 devicon-github-plain"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>     
    );
}
export const Header = () => {
    return(
        <>
            <div className="w-full flex justify-center backdrop-blur-lg pb-4 pt-4">
                <div className="text-zinc-400 text-lg flex justify-between space-x-10">
                    <a className="hover:text-zinc-500" href="#top">Home</a>
                    <a className="hover:text-zinc-500" href="#projects">Projects</a>
                    <a className="hover:text-zinc-500" href="#skills">Skills</a>
                </div>
            </div>     
        </>
    )
}
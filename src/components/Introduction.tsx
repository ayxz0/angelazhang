export function Introduction() {
    return (
        <>
            <div className="z-10 max-w-xl w-full space-y-10">

                <div className="items-center flex row m-5 space-x-4 h-11">
                    <div className="text-5xl text-white font-sans font-semibold">Angela Zhang</div>
                    <div className="items-end flex h-full">
                        <a href="./" className="text-2xl font-mono font-thin text-slate-400 hover:text-slate-500">@ayxz0</a>
                    </div>
                </div>
                
                <div className="flex row items-center m-5">
                    <div className="mr-5 rounded-full bg-white" style={{height: 150, width: 150}}></div>
                    <div className="ml-5 w-7/12 inline align-middle">
                        <div className="text-xl text-white font-sans font-light space-y-4">
                            <p>Junior Developer @ MarketPush</p>
                            <p>Class of 2024 @ Lincoln High School</p>
                            <p className="pb-2">Portland, Oregon</p>
                        </div>
                        <hr className="mt-2"></hr>
                    </div>
                    
                </div>

            </div>
        </>
    )
} 
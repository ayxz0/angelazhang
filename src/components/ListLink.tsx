export const ListLink = ({ title }: { title: string }) => {
    return(
        <>
            <div className="flex justify-center w-full mx-1 rounded-md">
                <a className="text-white font-light w-full" href={`#${title}`} >
                    <div className="p-2 m-[1px] w-full h-11/12 rounded-md hover:bg-zinc-800 flex justify-center">
                        {title}
                    </div>
                </a>
                
            </div>
        </>
    )
}
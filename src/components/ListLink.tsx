export const ListLink = ({ title }: { title: string }) => {
    return(
        <>
            <div className="flex justify-center p-3 m-2 w-full rounded-md bg-white bg-opacity-10 hover:bg-opacity-5">
                <a className="text-white font-bold" href={`#${title}`} >{title}</a>
            </div>
        </>
    )
}
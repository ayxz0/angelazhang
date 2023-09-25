export const Badge = ({ text }:{ text?: string}) => {
    return(
        <span className="my-1 me-2 w-fit bg-opacity-10 bg-white text-zinc-200 rounded p-1 px-2 whitespace-nowrap">
            { text }
        </span>
    )
}
export const Card = ( { children, title, subtitle } : { children?: React.ReactNode, title?: string, subtitle?: string } ) =>{
    return (
        <>
            <div className="text-white my-10 p-7 w-3/12 text-white border border-solid border-white rounded-sm">
                <div className="mb-1 uppercase text-slate-400"> {subtitle} </div>
                <div className="mb-5 font-bold text-2xl"> {title} </div>
                <div className="text-lg"> {children} </div>
                
            </div>
        </>
    )
}

interface ISkill {
    title: string;
    children: any;
}

// destryct {title, children} = prop

export const Skill = ( { children, title, subtitle} : { children: React.ReactNode, title?: string, subtitle?: string } ) =>{
    return (
        <>
            <div className="text-white m-5 p-4 max-w-7xl text-white border border-solid border-slate-300 hover:border-white rounded-sm space-y-1">
                <div className="uppercase"> {subtitle} </div>
                <div className="font-bold text-2xl"> {title} </div>
                <div className="text-lg"> {children} </div>
                
            </div>
        </>
    )
}

import { JsxAttribute } from "typescript"

export function Card(children: any) {
    return (
        <div className="border border-white text-white p-2">
            {children}
        </div>
    )
}

export function CardContent(children: any) {
    return(
        <div>
            {children}
        </div>
    )
}
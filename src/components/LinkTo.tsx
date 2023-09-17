export const LinkTo = ( {to, display} : {to?: string, display?: string }) => {
    return (
        <div className="text-color-">
            <a href={to}>{display}</a>
        </div>
    )
}
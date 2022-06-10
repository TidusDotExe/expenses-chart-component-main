export default function Bar({ today, percentage, fullDay, amount }) {
    const barStart = 100 - percentage
    return (
        <>
            <div
                className={`rounded-sm flex cursor-pointer
                ${today === true ? "bg-cyan hover:bg-blue-200" : "bg-soft-red hover:bg-red-300"} `}
                style={{ gridRowStart: barStart, gridRowEnd: 100 }}
            />
            <span className="text-center text-2xs text-medium-brown" style={{ gridRowStart: 101, gridRowEnd: 101}}>{fullDay}</span>
            <span className="text-2xs text-medium-brown flex" style={{ gridRowStart: barStart - 1, gridRowEnd: barStart - 1}}>{amount}</span>
        </>
    )
}
import { useState } from "react"
export default function Bar({ today, percentage, fullDay, amount, col }) {
    const barStart = 100 - percentage
    const [isVisible, setVisible] = useState(false)

    return (
        <>
            <div
                className={`rounded-sm flex cursor-pointer
                ${today === true ? "bg-cyan hover:bg-blue-200" : "bg-soft-red hover:bg-red-300"} `}
                style={{ gridRowStart: barStart, gridRowEnd: 100 }}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            />
            <span 
                className="text-center text-2xs text-medium-brown" 
                style={{ gridRowStart: 101, gridRowEnd: 101 }}
            >{fullDay}</span>
            <span
                className={`text-2xs text-white bg-dark-brown rounded-sm min-w-fit p-1 mb-2
                ${isVisible ? "visible" : "invisible"}`}
                style={{ gridRowStart: barStart - 1, gridRowEnd: barStart - 1   , gridColumn: col }}
            >{amount}</span>
        </>
    )
}
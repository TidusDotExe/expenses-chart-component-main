import Bar from "./Bar"

export default function Graphics({ dates, biggest }) {
    let col = 0
    return (
        <div className="flex justify-center flex-col">
            <div className="h-50 p-4 grid grid-cols-7 grid-rows-100 gap-x-4 justify-between">
                {dates.map(date => {
                    col += 1
                    return (
                        <Bar today={new Date().getDay() === date.day} 
                        percentage={date.amount === biggest ? 98 : Math.round((date.amount / biggest) * 100)} 
                        fullDay={date.fullDay} 
                        amount={`$${date.amount}`}
                        col={col}
                        key={date.fullDay}
                        />
                    )
                    
                }
                )}
            </div>
        </div>

    )
}
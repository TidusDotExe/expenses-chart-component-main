import Bar from "./Bar"

export default function Graphics({ dates, biggest }) {
    return (
        <div className="flex justify-center flex-col">
            <div className="h-30 p-4 grid grid-cols-7 grid-rows-100 gap-x-4 justify-between">
                {dates.map(date => {
                    return (
                        <Bar today={new Date().getDay() === date.day} percentage={date.amount === biggest ? 98 : Math.round((date.amount / biggest) * 100)} fullDay={date.fullDay} amount={`$${date.amount}`}/>
                    )
                }
                )}
            </div>
        </div>

    )
}
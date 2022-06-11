import Graphics from "./Graphics/Graphics";

export default function MainCard({ data }) {
    let biggest = 0
    data.map(date => {
        if (date.amount > biggest) biggest = date.amount
    })
    data.biggest = biggest

    return (
        <>
            <div className="rounded-lg bg-white my-4 flex flex-col">
                <span className="text-dark-brown font-bold px-2 py-4 desktop:text-2xl   ">Spending - Last 7 days</span>
                <Graphics dates={data} biggest={biggest} />
                <span className="flex justify-center w-screen max-w-full">
                    <span className="bg-medium-brown w-11/12 mb-4" style={{height: "0.1px"}} />
                </span>
                <div className="flex pt-2 pb-6 px-4 justify-between">
                    <div className="flex flex-col">
                        <p className="text-xs text-medium-brown desktop:text-lg">Total this month</p>
                        <p className="font-bold text-dark-brown text-2xl desktop:text-4xl">$478.33</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-dark-brown text-right pt-2 desktop:text-lg">+2.4%</p>
                        <p className="text-xs text-medium-brown desktop:text-lg">from last month</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}
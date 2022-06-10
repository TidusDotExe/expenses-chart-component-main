import logo from "../images/logo.svg"

export default function MyBalance({ balance }) {
    return(
        <div className="bg-soft-red rounded-lg flex p-4 text-white justify-between">
            <div className="flex flex-col">
                <span className="text-xs py-2">My balance</span>
                <span className="text-lg font-bold">{ balance }</span>
            </div>
        <img src={ logo } className="w-14"></img>
        </div>
    )
}
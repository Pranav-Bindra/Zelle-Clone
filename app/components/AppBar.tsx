import Link from "next/link"

export function AppBar(){
    return <div className="mt-6 flex pb-2 justify-around border-b-2 border-black">
        <Link href = "/">
        <div className="text-4xl font-bold text-purple-600">
            Zelle
        </div>
        </Link>
        <div className="mt-4 text-xl">
            Transfer Money to Friends and Family
        </div>
    </div>
}
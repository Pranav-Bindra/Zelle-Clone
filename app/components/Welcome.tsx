import Link from "next/link"

export function Welcome(){
    return <div className="h-screen flex justify-between">
        <div className="flex flex-col mt-48 ml-48">
            <div className="text-3xl font-bold">
                Welcome to Zelle!
            </div>
            <Link href = "/user/signin">
                <button className="mt-4 ml-20 p-2 bg-purple-600 text-white w-24 rounded-md hover:bg-purple-900">
                Sign in</button>
            </Link>
            
            <Link href = "/user/signup">
                <button className="mt-4 ml-20 p-2 bg-purple-600 text-white w-24 rounded-md  hover:bg-purple-900">
                Sign up</button>
            </Link>
            
        </div>

        <div className="bg-purple-600 w-1/2 text-white">
            <div className="mt-48 ml-36 text-3xl font-bold">
                What's Zelle? Glad you asked!
            </div>
            <div className="ml-4 mt-4 mr-4 text-xl">
            Zelle® is a great way to send money to friends and family, even if they bank somewhere different than you do. That means it's super easy to get paid back, or split the costs of things like dinner. With Zelle®, the money goes directly into your bank account. And when money goes into your bank account directly, you can live delightfully. Zelle® is already in lots of banking apps, so look for it in yours today.
            </div>
        </div>
    </div>
}
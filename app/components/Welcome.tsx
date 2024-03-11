import Link from "next/link";

export function Welcome() {
    return (
        <div className="h-screen flex flex-col md:flex-row justify-center items-center md:justify-between">
            <div className="flex flex-col items-center md:items-start mt-12 md:mt-0 md:ml-48">
                <div className="text-2xl md:text-3xl font-bold text-center md:text-left">
                    Welcome to Zelle!
                </div>
                <Link href="/user/signin">
                    <button className="mt-4 p-2 bg-purple-600 text-white w-24 rounded-md hover:bg-purple-900">
                        Sign in
                    </button>
                </Link>

                <Link href="/user/signup">
                    <button className="mt-4 p-2 bg-purple-600 text-white w-24 rounded-md hover:bg-purple-900">
                        Sign up
                    </button>
                </Link>
            </div>

            <div className="hidden md:flex flex-col bg-purple-600 w-full md:w-1/2 h-full text-white p-12 text-center md:text-left">
                <div className="text-3xl font-bold">
                    What's Zelle? Glad you asked!
                </div>
                <div className="mt-4 text-xl">
                    Zelle® is a great way to send money to friends and family, even if they bank somewhere different than you do. That means it's super easy to get paid back, or split the costs of things like dinner. With Zelle®, the money goes directly into your bank account. And when money goes into your bank account directly, you can live delightfully. Zelle® is already in lots of banking apps, so look for it in yours today.
                </div>
            </div>
        </div>
    );
}

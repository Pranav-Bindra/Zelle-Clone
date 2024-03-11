"use client"

import { useRouter } from "next/navigation"; 
import { useEffect } from "react";// Import useRouter for navigation

export function AppBar() {
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        // Check for the token in localStorage
        const token = localStorage.getItem('token');
        
        // Redirect based on the presence of the token
        if (token) {
            // If token exists, redirect to the dashboard
            router.push('/main/dashboard');
        } else {
            // If no token, redirect to the homepage
            router.push('/');
        }
    }, [router]);

    const logout = () => {
        // Clear token and username from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        // Navigate to the homepage
        router.push('/');
    };

    return (
        <div className="mt-6 flex pb-2 justify-around border-b-2 border-black">
            <a href="/" className="text-4xl font-bold text-purple-600">Zelle</a>
            <div className="hidden md:block md:mt-4 text-xl">
                Transfer Money to Friends and Family
            </div>
            <button onClick={logout} aria-label="Logout">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>

                    </div>
                </div>
            </button>
        </div>
    );
}

"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "@/models/User"; // Adjust this import according to your project
import Link from "next/link";

export function Dashboard() {
    const [users, setUsers] = useState<User[]>([]);
    const [balance, setBalance] = useState(0);
    const [username, setUsername] = useState('');

    // Fetch users
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/signup');
            if (response.data && response.data.user) {
                setUsers(response.data.user);
            } else {
                console.log("No users found in the response");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Fetch balance
    const fetchBalance = async () => {
        if (!username) return; // Do not proceed if username is falsy
        try {
            const response = await axios.post('/api/account', { username });
            if (response.data && response.data.balance) {
                setBalance(response.data.balance);
            }
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    };

    useEffect(() => {
        // Load the username from localStorage and fetch users
        const storedUsername = localStorage.getItem('token');
        if (storedUsername) {
            setUsername(storedUsername); // Removed the [0].toUpperCase() to store the full username
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        // Fetch balance only when username is set
        fetchBalance();
    }, [username]);

    

    return (
        <div>
            <div className="flex ml-4 mt-4">
                <div className="font-bold text-lg ">Your balance : </div>
                <div className="font-semibold pl-2 text-lg"> USD {balance}</div>
            </div>
            <div>
                <div className="font-bold mt-6 ml-4 text-lg">Users</div>
                {users.map((user, index) => (
                    <div key={index} className="flex justify-between items-center my-4 mx-8">
                        <div className="flex items-center">
                            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mr-2">
                                {user.firstName[0]}
                            </div>
                            <div>
                                {user.firstName} {user.lastName}
                            </div>
    
                        </div>
                        <Link href = {`/main/send?name=${encodeURIComponent(user.firstName)}&username=${encodeURIComponent(user.username)}`}>
                            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-900 transition duration-150 ease-in-out">Send Money</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

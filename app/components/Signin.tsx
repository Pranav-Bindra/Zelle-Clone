"use client"

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export function Signin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="flex flex-col h-screen mt-12">
        <div className = "flex justify-center">
            <div className="p-4 border rounded-lg pb-4">
                <input onChange = {(e)=>{
                    setUsername(e.target.value)
                }} className="p-2 m-2 border-2 rounded-md" type = "text" placeholder="username"></input>
                <br />
                <input onChange = {(e)=>{
                    setPassword(e.target.value)
                }} className="p-2 m-2 border-2 rounded-md" type = "text" placeholder="password"></input>
                <br />
                <div className="flex justify-center mt-4 bg-purple-600 text-white mx-10 p-2 rounded-md hover:bg-purple-900">
                    <Link href = "/main">
                        <button onClick = {()=>{
                        axios.post("/api/signin",{
                            username,
                            password,
                        })
                        }}>Sign in</button>
                    </Link>
                </div>
                <div className="my-2 flex gap-2 text-gray-400">
                    <div>
                        Don't have an account yet?
                    </div>
                    <Link href = "/user/signup">
                        <div className="underline cursor-pointer">
                            Sign up 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}
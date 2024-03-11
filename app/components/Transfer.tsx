"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export function Transfer() {
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState(0);
  const searchParams = useSearchParams();
  const name = searchParams.get("name")
  const tousername = searchParams.get("username");

  useEffect(() => {
    // Load the username from localStorage after the component mounts
    // and update the username state. This code runs only on the client.
    const storedUsername = localStorage.getItem('token');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div
          className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-2xl text-white">X</span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor = "amount" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Amount (in USD)
                </label>
                <input
                    onChange={(e)=>{
                        //@ts-ignore
                        setAmount(e.target.value);
                    }}
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button onClick = {async() => {
                await axios.post("/api/transfer",{
                    amount: amount,
                    from: username,
                    to: tousername
                })
              }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-purple-600 text-white">
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

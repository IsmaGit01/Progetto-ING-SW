"use client"
import { SignUp } from "@clerk/nextjs";
import React, {useState} from "react";
 
export default function Page() {

  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    if (value.length <= 64) { // Numero max caratteri username
      setError('');
    } else {
      setError('Lo username deve avere massimo 64 caratteri.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <SignUp />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}


"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function SignUp() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    return(
    <div>
        <input type = "text" placeholder="username" onChange={(e)=> setUserName(e.target.value)}></input>
        <input type = "password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={async () => {
           await axios.post("http://localhost:3000/api/v1/signup",{
                userName,
                password
            });
            router.push("/auth/signin")
        }}> signup</button>
    </div>
    )
   
}
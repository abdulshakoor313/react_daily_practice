import { useState } from "react"


const Login = () => {
const [email, setEmail]= useState("");
const [passWord, setpassWord]= useState("");



  return (
    <div>
      <form>
        <h1>Log In</h1>
        <input 
        className="border border-black"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setpassWord(e.target.value)}
        />
        <h2>{email}</h2>
        <input 
        className="border border-black"
        type="passWord"
        placeholder="Enter password"
        value={passWord}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <h2>{passWord}</h2>
      </form>
    </div>
  )
}

export default Login

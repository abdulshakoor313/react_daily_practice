import { useState } from "react"

const Login = () => {
  const [Email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");

  return (
    <div>
      <h1>Log In here</h1>
      <input
      className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
      type="text"
      placeholder="Entr Email"
      value={Email}
      
      
      />

      <input
      className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
      type="password"
      placeholder="Password"
      value={passWord}
      />
    </div>
  )
}

export default Login

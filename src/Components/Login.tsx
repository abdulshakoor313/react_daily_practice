import { useState } from "react"

const Login = () => {
  const [Email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");

  return (
    <div>
      <input
      type="text"
      placeholder="Entr Email"
      value={Email}
      
      
      />

      <input
      type="text"
      placeholder="Password"
      value={passWord}
      />
    </div>
  )
}

export default Login

import { useState } from "react"

const Login = () => {
  const [Email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const submiithandler = (e:React.FormEvent.<HTMLFormElement>)=>{
    e.preventDefault();
  }


  return (
    <form onChange={submiithandler}>
          <div>
      <h1>Log In here</h1>
      <input
      className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
      type="text"
      placeholder="Entr Email"
      value={Email}
      onChange={(e) => setEmail(e.target.value)}
     
      
      />

      <input
      className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
      type="password"
      placeholder="Password"
      value={passWord}
      onChange={(e) => setEmail(e.target.value)}
      />

    </div>
    </form>
  )
}

export default Login


git add . 
git commit -am "......"
git push
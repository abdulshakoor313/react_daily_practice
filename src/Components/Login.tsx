import { useState } from "react"
const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (email === "" || passWord === "") {
      console.log("Email and Password are required");
      return;
    }

    console.log("Saved");
    console.log(email);
    console.log(passWord);

  };



  return (
    <div>
      <form 
      onSubmit={submitHandler}
      className="w-full max-w-md mx-auto bg-sky-100 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-5"
      >
         <h2 className="text-2xl font-bold text-center text-gray-700">
                    Welcome Back
                </h2>
                  <p className="text-center text-sm text-gray-500">
                    Please sign in to continue
                </p>


        <h1>Log In</h1>
        <input
          className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <h2>{email}</h2> */}

        <input
          className="border border-black"
          type="password"
          placeholder="Enter password"
          value={passWord}
          onChange={(e) => setpassWord(e.target.value)}
        />
        {/* <h2>{passWord}</h2> */}
        <button
          className="bg-black text-white p-2 mt-5 rounded-2xl font-bold"
          type="submit"
        >
          Submit the Data
        </button>
      </form>
    </div>
  )
}
export default Login

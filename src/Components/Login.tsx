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
      <form onSubmit={submitHandler}>
        <h1>Log In</h1>
        <input
          className="border border-black"
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

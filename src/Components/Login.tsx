import { useState } from "react"

const Login = () => {
  const [Email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");

const submiithandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (Email.trim() === "") {
    alert("Email is required");
    return;
  }

  if (!Email.includes("@")) {
    alert("Please enter a valid email");
    return;
  }

  if (passWord.trim() === "") {
    alert("Password is required");
    return;
  }

  if (passWord.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  alert("Login Successful");
  console.log(Email, passWord);
};

  return (
    <form onSubmit={submiithandler}>
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
          onChange={(e) => setpassWord(e.target.value)}
        />
        <button
          className="w-full bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-sky-600 active:scale-[0.98] transition"
          type="submit"
        >
          Submit
        </button>
      </div>

    </form>
  )
}

export default Login



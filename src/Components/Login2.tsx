import { useState } from "react";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Empty email validation
    if (email.trim() === "") {
      setMessage("❌ Email is required");
      setIsLoggedIn(false);
      return;
    }

    // Basic email validation
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email");
      setIsLoggedIn(false);
      return;
    }

    // Success
    setMessage("✅ Login Successful");
    setIsLoggedIn(true);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md mx-auto bg-sky-100 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Welcome
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

        <button
          className="w-full bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-sky-600 active:scale-[0.98] transition"
          type="submit"
        >
          Submit
        </button>

        <div className="text-center text-xs sm:text-sm text-gray-600">
          Don’t have an account?{" "}
          <span className="text-sky-600 font-medium cursor-pointer">
            Sign up
          </span>
        </div>
      </form>

      {isLoggedIn ? (
        <p className="mt-4 text-center text-green-600 font-bold">
          {message}
        </p>
      ) : (
        message && (
          <p className="mt-4 text-center text-red-600 font-bold">
            {message}
          </p>
        )
      )}
    </div>
  );
};

export default Login2;
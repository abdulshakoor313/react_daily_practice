import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const submithandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black"
          type="text"
          placeholder="Enter Email"
        />

        <button
          className="m-5 p-1 bg-gray-300 border border-black rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
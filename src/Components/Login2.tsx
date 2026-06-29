import { useState } from "react"



const Login2 = () => {
    const [email,setemail] = useState("");
    const [passWord, setpassWord] = useState("");
    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
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
                onChange={(e) => setemail(e.target.value)}
            />
            {/* <h2>{email}</h2> */}
            <input
                className="w-full border border-gray-300 p-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
                type="password"
                placeholder="Enter password"
                value={passWord}
                onChange={(e) => setpassWord(e.target.value)}
            />
            {/* <h2>{passWord}</h2> */}
            <button
                className="w-full bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-sky-600 active:scale-[0.98] transition"
                type="submit"
            >
                Submit
            </button>

            {/* Footer */}
            <div className="text-center text-xs sm:text-sm text-gray-600">
                Don’t have an account?{" "}
                <span className="text-sky-600 font-medium cursor-pointer">
                    Sign up
                </span>
            </div>
        </form>
    </div>
)
}

export default Login2


import { useState, useEffect } from "react"

const Login = () => {
    const [email, setemail] = useState("");
    const [passWrod, setpassWord] = useState("");
    useEffect(() => {
        console.log("Signd In successfully");
    }, [email, passWrod]);


    return (
        <div>
            <form>
           
                <input 
                type="text" 
                placeholder="Please inter Email" 
                className=" border border-black"
                />

                <input 
                type="password" 
                placeholder="Please inter password" 
                className="border border-black"
                />
            </form>

        </div>
    )
}

export default Login

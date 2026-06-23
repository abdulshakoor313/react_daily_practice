

const Login = () => {
    const submithandler=(e)=>{ 
        console.log("Form submitted")
        e.preventDefault()
    }
  return (
    <div>
        <form onClick={(e)=>submithandler(e)}>
                <input
                value=""
                className="border border-black-300"
                type="text"
                placeholder="Enter Email"
                />
                <input 
                 className="border border-black-300"
                type="password"
                placeholder="Enter password"
                />
                <button
                className="m-5 p-1 bg-gray-300 border border-black rounded"
                type="submit">
                Submit
                </button>
            </form>
    </div>
  )
}

export default Login

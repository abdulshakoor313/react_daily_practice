import { useState } from "react"


const Counter = () => {
  const [count,setcount]=useState(0);
  return (
    <div>

      <h1 className="text-6xl py-10">Counter</h1>
      <h1 className="text-6xl py-10">{count}</h1>

      <button className="bg-red-400 rounded-2xl p-10" onClick={()=>setcount(count+1)}>Increase</button>
      <button className="bg-red-400 rounded-2xl p-10" onClick={()=>setcount(count-1)}>Decrease</button>
      <button className="bg-red-400 rounded-2xl p-10" onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}

export default Counter

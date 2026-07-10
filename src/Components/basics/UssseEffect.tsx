import { useState, useEffect } from "react"

const UssseEffect = () => {
  const [Count, setCount]=useState(0);
  useEffect(()=>{
    console.log("Changed the value");
  },[Count]);
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>setCount(Count+1)}>Increase</button>
      <button onClick={()=>setCount(Count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default UssseEffect

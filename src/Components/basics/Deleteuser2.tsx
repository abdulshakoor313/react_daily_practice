import { useState } from "react"


const Deleteuser2 = () => {
    const [users, setusers] = useState([
        {id:1, name:"Mehran", age: 10, city:"Padidan"},
        {id:2, name:"Anas", age: 20, city:"Padidan"},
        {id:3, name:"Onais", age: 5, city:"Padidan"},
        {id:4, name:"Sagar", age: 9, city:"Padidan"},
    ]);
    const deleteUser = (id:number)=>{
        const updateUsers = users.filter((user)=>user.id !==id);
        setusers(updateUsers);
    }
  return (
    <div>
      <h1>User List</h1>
      {users.map((user)=>(
        <div key={user.id}>
            <h2> Name: {user.name}</h2>
            <p>Age: {user.age}</p>
            <span> City : {user.city}</span>
            <button onClick={()=>deleteUser(user.id)}> ......Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Deleteuser2

import { useState } from "react"


const Deleteuser2 = () => {
    const [users, setusers] = useState([
        {id:1, namae:"Mehran", age: 10, city:"Padidan"},
        {id:2, namae:"Anas", age: 20, city:"Padidan"},
        {id:3, namae:"Onais", age: 5, city:"Padidan"},
        {id:4, namae:"Sagar", age: 9, city:"Padidan"},
    ]);
    const deleteUser = (id:number)=>{
        const updateUsers = users.filter((user)=>user.id !==id);
        setusers(updateUsers);
    }
  return (
    <div>
      
    </div>
  )
}

export default Deleteuser2

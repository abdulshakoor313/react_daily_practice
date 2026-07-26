import { useState } from "react"


const AddUser = () => {
  const [name, setName] = useState("")
  const [users, setUsers] = useState([
    {id:1, name: "Anas", age: 8},
    {id:2, name: "Onai", age: 5},
  ]);
  const addUser = ()=>{
    const newUser = {
      id: users.length +1,
      name: name,
      age: 8,
    };
    setUsers([...users, newUser])
  }
  return (
    <div>
      <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e)=>{setName(e.target.value);
      }}
      />
      <button 
      onClick={addUser}
      >
        Add
      </button>
      {users.map((user)=>(
        <div key={id}>

        </div>
      ))}
    </div>
  )
}

export default AddUser
































































// import { useState } from 'react'

// const AddUser = () => {
//   const [name, setName] = useState("")
//   const [users, setUsers] = useState([
//     { id: 1, name: "Mehran", age: 10, },
//     { id: 2, name: "Sagar", age: 9, },
//   ]);
//   const addUser = () => {
//     const newUser = {
//       id: users.length + 1,
//       name: name,
//       age: 18,
//     };
//     setUsers([...users, newUser]);
//     setName("");
//   };
//   return (
//     <div>
//       <input
//         className='border-2'
//         type='text'
//         value={name}
//         placeholder='Name '
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button
//         onClick={addUser}
//       >
//         Add
//       </button>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.age}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default AddUser

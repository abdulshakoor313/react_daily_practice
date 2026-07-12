import { useState } from "react"


const AddUser = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Mehran", age: 10, },
    { id: 2, name: "Sagar", age: 9, },
  ]);
  const adduser = () =>{
    const newuseer = () =>{
      id: users.length +1,
      name: name,
      age: 18,
    };
    setUsers([...users, newUser]);
    
  setName("");
  }


  return (
    <div>
      <input
      type="text"
      value={name}
      onChange={}
      placeholder="Name"

      />
      <button onClick={AddUser}>Add Name</button>
      {users.map((users)
        <div key={users.id}>
          <p>{name}</p>
          <span>{age}</span>
        </div>
      )}
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

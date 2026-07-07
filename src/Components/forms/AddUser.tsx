import {useState} from 'react'

const AddUser = () => {
    const [name, setName] = useState("")
    const [users, setUsers] = useState([
        {id:1, name:"Mehran", age: 10, city:"Padidan"},
        {id:2, name:"Anas", age: 20, city:"Padidan"},
        {id:3, name:"Onais", age: 5, city:"Padidan"},
        {id:4, name:"Sagar", age: 9, city:"Padidan"},
    ]);
    const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: name,
      age: 18,
    };
    setUsers([...users, newUser]);

    setName("");
  };

  return (
    <div>
      <input 

      className='border-2'
      type='text'
      value={name}
      placeholder='Name '
       onChange={(e) => setName(e.target.value)}
      />
     <button
     onClick={addUser}
     >
        Add
        </button>
          {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default AddUser

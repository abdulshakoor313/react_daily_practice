import {useState} from 'react'

const ListRendering = () => {
    const [users] = useState([
        {id: 1, name:"Anas", age:10, city: "karachi"},
        {id: 2, name:"Onais", age:15, city: "Hyd"},
    ]);
  return (
    <div>
      <h1 className='font-bold text-3xl'>Usr List</h1>
      {users.map((user)=>(
        <div key={user.id}>
            <h2>Name :{user.name}</h2>
            <p> Age :{user.age}</p>
            <span>City : {user.city}</span>
        </div>
      ))}
    </div>
  )
}

export default ListRendering

import {useState} from 'react'

const AddUser = () => {
    const [addUser, setAdduser] = useState([
        {id:1, name:"Mehran", age: 10, city:"Padidan"},
        {id:2, name:"Anas", age: 20, city:"Padidan"},
        {id:3, name:"Onais", age: 5, city:"Padidan"},
        {id:4, name:"Sagar", age: 9, city:"Padidan"},
    ])
  return (
    <div>
      <input 
      className='border-2'
      type='text'/>
    </div>
  )
}

export default AddUser

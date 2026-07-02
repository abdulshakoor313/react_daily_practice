import { useState } from "react";

const DeleteUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Anas", age: 10 },
    { id: 2, name: "Onais", age: 15 },
    { id: 3, name: "Ali", age: 20 },
  ]);

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  

  return (
    <div>
      <h1 className="text-2xl">User List</h1>

      {users.map((user) => (
        <div key={user.id}
        className=" text-2xl bg-green"
        >
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>

          <button 
          className="p-4 text-2xl font-white border-2"
          onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteUser;
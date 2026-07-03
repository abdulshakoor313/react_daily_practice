import { useState } from "react";

const DeleteUser2 = () => {
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
      <h1>User List</h1>

      <p>Total Users: {users.length}</p>

      {users.length === 0 ? (
        <h2>No Users Available</h2>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>

            <p>Age: {user.age}</p>

            <button onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default DeleteUser2;
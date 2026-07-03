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
    <div className="max-w-md mx-auto mt-10 p-6 bg-sky-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
        User List
      </h1>

      <p className="text-lg font-semibold mb-5">
        Total Users: {users.length}
      </p>

      {users.length === 0 ? (
        <h2 className="text-center text-red-600 font-bold text-xl">
          No Users Available
        </h2>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow mb-4"
          >
            <h2 className="text-xl font-bold">{user.name}</h2>

            <p>Age: {user.age}</p>

            <button
              className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default DeleteUser;
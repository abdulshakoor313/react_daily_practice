type Counter={
    name: string;
    description: string;
    image: string;
    designation:string;
    email:string;
    
}

const Counter = ({name,description,image,designation,email}:Counter) => {
  return (
<div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg p-6 border-2 justify-around">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={image}alt= "Card"
      />

      <h2 className="text-2xl font-bold mt-4">{name}</h2>

      <p className="text-gray-600 mt-2">{description}</p>
      <h1>{designation}</h1>
      <p>{email}</p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Learn More
      </button>
    </div>
  )
}

export default Counter

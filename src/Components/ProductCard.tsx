type MyproductType={
  name:string;
  description: string;
  image:string;
  price:number;
  tax:number;
}


function ProductCard({name,description, image,price,tax}:MyproductType) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg p-6 border-2 justify-around">
      <img className="w-full h-48 object-cover rounded-lg"  
      src={image}/>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>{price}</h2>
      <span>{tax}</span>
    </div>
  )
}

export default ProductCard

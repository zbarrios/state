
function Body({ products, search, handleFavorite }) {

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          product={product}
          handleFavorite={handleFavorite}
        ></Card>
      ))}
    </div>
  );
}

function Card({ product, handleFavorite }) {

  const precioType = "$" + product.price;



  return (
    <div className={`flex flex-col bg-gray-200 p-4 gap-4 w-48 h-64 rounded-sm`}>
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-sm bg-gray-400">
        <p className="text-sm">{product.title.slice(0,10)}</p>
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <p className="text-xs">{product.description.slice(0,90)}</p>
        <span className="self-end text-xs">{precioType}</span>
        <button onClick={()=>handleFavorite(product.id)}
        className="absolute bottom-0 text-yellow-500">
          {product.isStarred ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}

export default Body;

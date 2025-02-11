function Body({ books,search}) {
  console.log("Se renderizo el componente Body");

  
  const filteredBooks = books.filter((book)=>book.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {filteredBooks.map((book) => (
        <Card
          key={book.name + book.price}
          name={book.name}
          description={book.description}
          price={book.price}
        ></Card>
      ))}
    </div>
  );
}

function Card({ name, description, price }) {
  let precioType = "$" + price;

  // console.log("Se renderizo el componente Card",name);

  return (
    <div className={`flex flex-col bg-gray-200 p-4 gap-4 w-48 h-64 rounded-sm`}>
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-sm bg-gray-400">
        <p className="text-sm">{name}</p>
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <p className="text-xs">{description}</p>
        <span className="self-end text-xs">{precioType}</span>
      </div>
    </div>
  );
}

export default Body;


function Body({ books, search, handleFavorite }) {

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {filteredBooks.map((book) => (
        <Card
          key={book.name + book.price}
          book={book}
          handleFavorite={handleFavorite}
        ></Card>
      ))}
    </div>
  );
}

function Card({ book, handleFavorite }) {

  const precioType = "$" + book.price;



  return (
    <div className={`flex flex-col bg-gray-200 p-4 gap-4 w-48 h-64 rounded-sm`}>
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-sm bg-gray-400">
        <p className="text-sm">{book.name}</p>
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <p className="text-xs">{book.description}</p>
        <span className="self-end text-xs">{precioType}</span>
        <button onClick={()=>handleFavorite(book.name)}
        className="absolute bottom-0 text-yellow-500">
          {book.isStarred ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}

export default Body;

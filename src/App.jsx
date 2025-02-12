import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { useEffect, useState } from "react";


async function fetchApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  console.log("Productos", products);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleFavorite(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, isStarred: !product.isStarred };
      }
      return product;
    });

    setProducts(newProducts);
  }

  useEffect(() => {
    const initProducts = async () => {
      
      const data = await fetchApi("https://fakestoreapi.com/products");
      const newProducts = data.map((p) => {
        return {
          ...p,
          isStarred: false,
        };
      });
      setProducts(newProducts);

    };

    initProducts();
  }, []);

  //loadSkeletons -> Cargar Esqueletos
  //Grid - Flex -> Importancia en el espacio a disponer

  return (
    <>
      <div>
        <Navbar
          search={search}
          handleSearchChange={handleSearchChange}
        ></Navbar>
        <Body
          products={products}
          search={search}
          handleFavorite={handleFavorite}
        ></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

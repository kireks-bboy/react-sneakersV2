import React from "react";
import "./App.scss";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";




export const AppContext = React.createContext({})




function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      try {
      const [cartResponse,favoritesResponse , itemsResponse] = await Promise.all([
          axios.get(
            "https://adda001e83c231e1.mokky.dev/cart"
          ),
          axios.get(
            "https://adda001e83c231e1.mokky.dev/favorites"
          ),
          axios.get(
            "https://adda001e83c231e1.mokky.dev/sneakers"
          ),
        ])
      
        setIsLoading(false)
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Error data')
      }
    }
    fetchData()
  }, []);

  const onAddToCard = async(obj) => {
   try {
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
    if (findItem) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(obj.id))
      );
      await axios.delete(`https://adda001e83c231e1.mokky.dev/cart/${findItem.id}`);
    } else {
      setCartItems((prev) => [...prev, data]);
     const {data} = await axios.post("https://adda001e83c231e1.mokky.dev/cart", obj);
     setCartItems((prev) => prev.map(item=> {
      if (item.parentId === data.parentId) {
        return {
          ...item,
          id: data.id,
        }
      }
      return item
     }));
    }
   } catch (error) {
    alert('Errror addtocard')
   }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://adda001e83c231e1.mokky.dev/favorites/${obj.id}`);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://adda001e83c231e1.mokky.dev/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
      console.error(error)
    }
  };

  const onRemoveItem = (id) => {
  try {
    axios.delete(`https://adda001e83c231e1.mokky.dev/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  } catch (error) {
    alert('OnRemoveItem Error')
    console.error(error)
  }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  const isItemAdded = (id)=>{
   return cartItems.some((obj)=> Number(obj.parentId) === Number(id))
  }

  return (
  <AppContext.Provider value={{cartItems, favorites, items, isItemAdded, onAddToCard, onAddToFavorite, setCartOpened, setCartItems}}>
      <div className="wrapper clear">

      <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              searchValue={searchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
              cartItems={cartItems}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites/>
          }
        />

<Route
          path="/orders"
          element={
            <Orders/>
          }
        />
      </Routes>
    </div>
  </AppContext.Provider>
  );
}

export default App;

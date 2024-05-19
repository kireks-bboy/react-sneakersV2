import React from "react";
import Card from "../components/Card";


const Home = ({
  items,
  searchValue,
  onAddToCard,
  onAddToFavorite,
  setSearchValue,
  onChangeSearchInput,
  isLoading
}) => {





   const renderItems = () =>{
    const filtredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    
    return (isLoading ? [...Array(10)] : filtredItems)
    .map((item, id) => (
      <Card
      loading={isLoading}
        key={id}
        {...item}
        onPlus={(obj) => onAddToCard(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
       
      />
    ))
   }


  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Search.."
          />
        </div>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {renderItems()}
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import Card from '../components/Card'
import { AppContext } from '../App'


const Favorites = () => {

  const {favorites, onAddToFavorite} = React.useContext(AppContext)

  return (
    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
      <h1>My favorites</h1>
      </div>

  <div className='sneakers d-flex flex-wrap'>
  
  {
    favorites.map((item, id)=> 
    <Card
    favorited={true}
    key={id}
    {...item}
      onFavorite={onAddToFavorite}
     />)
  }
  
  </div>
  
    </div>
  )
}

export default Favorites

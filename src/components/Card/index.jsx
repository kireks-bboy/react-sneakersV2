import React, { Fragment, useState } from 'react'
import ContentLoader from "react-content-loader"
import { AppContext } from "../../App";
import styles from './Card.module.scss'

const Card = ({id,  title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading=false}) => {


  const [isFavorite, setIsFavorite] = useState(favorited)


  const obj = {id, parentId: id, title, imageUrl, price}
 
  const onClickPlus = ()=>{
    onPlus(obj)

  };




  const onClickFavorite = () => {
    onFavorite(obj)
setIsFavorite(!isFavorite)
  }



  
  const {isItemAdded} = React.useContext(AppContext)

  return (
    <div className={styles.card}>
      {
        loading ?  <ContentLoader 
        speed={2}
        width={150}
        height={187}
        viewBox="0 0 150 187"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
        <rect x="0" y="105" rx="3" ry="3" width="150" height="15" /> 
        <rect x="0" y="134" rx="3" ry="3" width="93" height="15" /> 
        <rect x="0" y="163" rx="8" ry="8" width="80" height="24" /> 
        <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
      </ContentLoader> : <Fragment>
     {onFavorite &&  <div className={styles.favorite} onClick={onFavorite}>
    <img onClick={onClickFavorite} src={ isFavorite ? "/img/heart-active.svg" : "/img/heart.svg" } />
    </div>}
    <img  width={133} height={112} src={imageUrl} alt="" /> 
    <h5>{title}</h5>
    
    <div className='d-flex justify-between align-center'>
    <div className='card__bottom d-flex flex-column '>
      <span>Цена: </span>
      <b>{price} pуб</b>
    </div>
   { onPlus && <img onClick={onClickPlus} className={styles.plus} src={isItemAdded(id) ? "/img/check.svg"  : "/img/btn-plus.svg" } alt="Plus" /> }
    </div>
      </Fragment>
      }
   
    
    </div>
  )
}


export default Card

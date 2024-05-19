import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'


 const Header = ({onClickCart}) => {


  const {totalPrice} = useCart()


  return (
    <header className='header d-flex justify-between  align-center p-40'>
<Link to='/'>
<div className='d-flex align-center'>
    <img  width={40} height={40} src="/img/logo.png" alt="" />
<div className='ml-20'>
<h3 className='text-uppercase'>REACT SNEAKERS</h3>
<p>Магазин лучших кроссовок</p>
</div> 
    </div>
</Link>
     
     <ul className='header__right d-flex'>
<li className='cu-p' onClick={onClickCart}>
<img className='mr-5' width={18} height={18} src="/img/cart.svg" alt="" /> 
<span>{totalPrice} руб.</span>
</li>


<li className='cu-p'>
<Link to='/favorites'>
<img className='mr-5' width={18} height={18} src="/img/favourite.svg" alt="" /> 
<span>Закладки</span>
</Link> 
</li>

<li className='cu-p'>
<Link to='/orders'>
<img className='mr-5' width={18} height={18} src="/img/user.svg" alt="" /> 
 <span>Профиль</span>
</Link> 
</li>




     </ul>
    </header>
  )
}

export default Header

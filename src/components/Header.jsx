import React from 'react'

 const Header = () => {
  return (
    <header className='header d-flex justify-between  align-center p-40'>

    <div className='d-flex align-center'>
    <img  width={40} height={40} src="/img/logo.png" alt="" />

<div className='ml-20'>
<h3 className='text-uppercase'>REACT SNEAKERS</h3>
<p>Магазин лучших кроссовок</p>
</div> 
    </div>
     
     <ul className='header__right d-flex'>
<li>
<img width={18} height={18} src="/img/cart.svg" alt="" /> <span>1205 руб.</span>
</li>
<li>
<img width={18} height={18} src="/img/favourite.svg" alt="" />  <span>Закладки</span>
</li>
<li>
<img width={18} height={18} src="/img/user.svg" alt="" />  <span>Профиль</span>
</li>
     </ul>
    </header>
  )
}

export default Header

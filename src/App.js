import './App.scss';

function App() {
  return (
    <div className="wrapper clear">
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

  <div className='content p-40'>
    <h1 className='mb-40'>Все кроссовки</h1>


<div className='sneakers d-flex'>
  
<div className='card'>
<img  width={133} height={112} src="/img/sneakers/1.jpeg" alt="" /> 
<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

<div className='d-flex justify-between align-center'>
<div className='card__bottom d-flex flex-column '>
  <span>Цена: </span>
  <b>12 990p</b>
</div>
<button className='button'>
<img width={11} height={11} src="/img/plus.svg" alt="Plus" /> 
</button>
</div>

</div>
<div className='card'>
<img  width={133} height={112} src="/img/sneakers/2.jpeg" alt="" /> 
<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

<div className='d-flex justify-between align-center'>
<div className='card__bottom d-flex flex-column '>
  <span>Цена: </span>
  <b>12 990p</b>
</div>
<button className='button'>
<img width={11} height={11} src="/img/plus.svg" alt="Plus" /> 
</button>
</div>

</div>

</div>

  </div>
    </div>
  );
}

export default App;

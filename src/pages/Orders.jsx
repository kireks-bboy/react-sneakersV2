import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { AppContext } from '../App'



const Orders = () => {

  const {onAddToCard, onAddToFavorite} = React.useContext(AppContext)
  const [isLoading, setIsLoading] = React.useState(true)

  const [orders, setOrders] = React.useState([])

  React.useEffect(()=>{
    (async()=>{
     try {
      const {data} = await axios.get(
        "https://adda001e83c231e1.mokky.dev/orders"
      );
      setOrders(data.reduce((prev, obj)=> [...prev, obj.items], []))
      setIsLoading(false)
     } catch (error) {
      alert('Error')
     }
    })()
  }, [])

  return (
    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
      <h1>My Orders</h1>
      </div>

  <div className='sneakers d-flex flex-wrap'>
  
  {
   (isLoading ? [...Array(10)] : orders).map((item, id)=> 
    <Card
    loading={isLoading}
        key={id}
        {...item}
    />)
  }
  
  </div>
  
    </div>
  )
}

export default Orders

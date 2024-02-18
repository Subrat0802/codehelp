import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice'
import toast from 'react-hot-toast'

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item Removed Successfully")
  }
  return (
    <div>
      <div>
        <div>
          <img className='w-40' src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <button onClick={removeFromCart}>Remove Item</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
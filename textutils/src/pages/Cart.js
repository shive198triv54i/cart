import React from 'react'
import { UseSelector,useSelector} from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';
const Cart = () => {
  const product=useSelector(state=>state.cart)
  const dispatch=useDispatch();
  const handleRemove=(productId)=>{
       dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
    <div className='cartWrapper'>{

      product.map(product=>(
        <div className="cartCard">
          <img src={product.image} alt="" />
          <h6>{product.title}</h6>
          <h6>{product.price}</h6>
          <button onClick={()=>handleRemove(product.id)} className="btn">Remove</button>
        </div>
      ))
    }
      </div>
    </div>
  )
}

export default Cart

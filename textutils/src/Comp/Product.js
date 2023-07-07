import React, { useEffect, useState } from 'react'
import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
const Product = () => {
  const dispatch=useDispatch();
    const [product,setProduct]=useState([])
    useEffect(()=>{
        const fetchProduct=async()=>{
        const res=await fetch('https://fakestoreapi.com/products');
        const data=await res.json();
        console.log(data)
        setProduct(data);
        }
        fetchProduct();
    },[]
    )
    const handleAdd=(product)=>{
        dispatch(add(product));
    }
  return (
    <div className='productWrapper'>
      {
        product.map(product=>(
            <div className="card" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=>handleAdd(product)} className="btn">Add to cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Product

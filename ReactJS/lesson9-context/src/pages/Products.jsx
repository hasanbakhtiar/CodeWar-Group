import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
import axios from 'axios'

const Products = () => {

    const [product,setProduct] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProduct(res.data))
    },[])
  return (
    <div className='container  '>
            <h1 className='my-5 text-center'>Product List</h1>


            <div className="row g-5">
                {product.length===0?<img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" alt="err" />:product.map(item=>(
                    <SingleCard id={item.id}  photo={item.image} title={item.title} price={item.price} key={item.id}/>

                ))}
          
            </div>
            
    </div>
  )
}

export default Products
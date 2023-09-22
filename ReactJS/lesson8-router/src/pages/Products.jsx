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
                {product.map(item=>(
                    <SingleCard  photo={item.image} title={item.title} price={item.price} key={item.id}/>

                ))}
          
            </div>
            
    </div>
  )
}

export default Products
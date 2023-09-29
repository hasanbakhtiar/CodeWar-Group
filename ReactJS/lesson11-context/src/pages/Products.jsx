import React, { useContext, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';


const Products = () => {

  const [product] = useContext(ProductContext);
  
 
  return (
   <>
   <h1 className='text-center my-5'>Products</h1>
    <Row className='g-5'>
       {product.map(i=>(
        <SingleCard title={i.title} price={i.price} desc={i.description}  photo={i.images[0]} id={i.id}/>
       ))}

    </Row>
   </>
  )
}

export default Products
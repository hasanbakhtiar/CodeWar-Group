import React, { Component } from 'react'
import shoes from '../data/products';
import SingleCard from './SingleCard';
class ProductList extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>Shoes List</h1>
           <div className="row g-5">

            {shoes.map(item=>(
                <SingleCard propdata={item}/>

            ))}

           </div>
       
        
      </div>
    )
  }
}

export default ProductList
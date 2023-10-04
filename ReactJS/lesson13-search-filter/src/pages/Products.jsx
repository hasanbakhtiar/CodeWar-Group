import React, { useContext, useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';


const Products = () => {

  const [product] = useContext(ProductContext);
  const [filterData,setFilterData] = useState(product);

  const filterResult = (catItem)=>{
    const result = product.filter(i=>i.category === catItem);
    setFilterData(result)
  }
  

  return (
    <>
      <h1 className='text-center my-5'>Products</h1>
      <Row>
        <Col sm={12} md={3}>
          <ListGroup>

            <ListGroup.Item onClick={()=>{filterResult('smartphones')}}>smartphones</ListGroup.Item>
            <ListGroup.Item onClick={()=>{filterResult('laptops')}}>laptops</ListGroup.Item>
            <ListGroup.Item onClick={()=>{filterResult('fragrances')}}>fragrances</ListGroup.Item>
            <ListGroup.Item onClick={()=>{filterResult('skincare')}}>skincare</ListGroup.Item>
            <ListGroup.Item onClick={()=>{filterResult('groceries')}}>groceries</ListGroup.Item>
        
          </ListGroup>
        </Col>
        <Col sm={12} md={9}>
          <Row className='g-5'>
            {filterData.length === 0 ? product.map(i => (
              <SingleCard key={i.id} title={i.title} price={i.price} desc={i.description} photo={i.images[0]} id={i.id} />
            )) : filterData.map(i => (
              <SingleCard key={i.id} title={i.title} price={i.price} desc={i.description} photo={i.images[0]} id={i.id} />
            ))}

          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Products
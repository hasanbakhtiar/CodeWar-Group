import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'



const Home = () => {


  const [product] = useContext(ProductContext);
  
  return (

<>
<div className="p-5 text-center bg-image rounded-3" style={{"backgroundImage": 'url("https://queue-it.com/media/ppcp1twv/product-drop.jpg")', "height": "400px"}}>
  <div className="mask" style={{"backgroundColor": 'rgba(0, 0, 0, 0.6)',"height":"34vh" }}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Welcome</h1>
        <h4 className="mb-3">Amazon</h4>
        <Link className="btn btn-outline-light btn-lg" to="/products" role="button">Shop now</Link>
      </div>
    </div>
  </div>
</div>


<ol>
  {product.map(i=>(
    <li>{i.title}</li>
  ))}
</ol>

</>


  )
}

export default Home
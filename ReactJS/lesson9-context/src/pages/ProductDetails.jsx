import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {url} = useParams();
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProduct(res.data))
    },[])

    const productDetails = product.find(p=>p.id==url);
  return (
    <>
         {productDetails === undefined?<div className="d-flex justify-content-center"><img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" alt="err" /></div>:   <div className="container col-xxl-8 px-4 py-5">
         <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
             <div className="col-10 col-sm-8 col-lg-6">
             <img src={productDetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
             </div>
             <div className="col-lg-6">
             <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails.title}</h1>
             <p className="lead">{productDetails.description}</p>
             <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                 <button type="button" className="btn btn-outline-secondary btn-lg px-4">{productDetails.price}$</button>
             </div>
             </div>
         </div>
         </div>}
    </>

  )
}

export default ProductDetails
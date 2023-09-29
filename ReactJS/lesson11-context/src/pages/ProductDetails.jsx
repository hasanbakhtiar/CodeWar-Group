import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product] = useContext(ProductContext);
  const { url } = useParams();
  const productDetails = product.find(p => p.id.toString() === url);
  return (
    <div>
      {productDetails === undefined ? <h1>loading</h1> :
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-light lh-1 mb-3">{productDetails.title}</h1>
              <p className="lead">{productDetails.description}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">{productDetails.price}$</button>
                <Link to="/products" type="button" className="btn btn-outline-secondary btn-lg px-4">More</Link>
              </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
               
               {productDetails.images.map((i,c)=>(
                   <div className={`carousel-item ${productDetails.images[c]===productDetails.images[0] ? "active":""}`}>
                   <img height={300} src={productDetails.images[c]} className="d-block w-100" alt="..." />
                 </div>
               ))}
               
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      }
    </div>
  )
}

export default ProductDetails
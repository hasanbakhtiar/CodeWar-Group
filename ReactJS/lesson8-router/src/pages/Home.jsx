import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
          <div className="px-4 py-5 my-5 text-center" style={{"height":"70vh"}}>
          <h1 className="display-5 fw-bold text-body-emphasis">Best Products</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Our products is cheap</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/products" className="btn btn-primary btn-lg px-4 gap-3">Shop now</Link>
            </div>
          </div>
        </div>

  )
}

export default Home
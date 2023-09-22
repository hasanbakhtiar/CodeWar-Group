import React from 'react'

const SingleCard = ({ photo, title, price }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <img src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}$</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard
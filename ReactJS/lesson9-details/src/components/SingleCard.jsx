import { Link } from "react-router-dom"

const SingleCard = ({ photo, title, price,id }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <img height={300} src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,20)}...</h5>
                    <p className="card-text">{price}$</p>
                    <Link to={`/products/${id}`} className="btn btn-primary">Read more</Link>
                </div>
            </div>

        </div>
    )
}

export default SingleCard
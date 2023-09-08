import React, { Component } from 'react'

class SingleCard extends Component {
    render() {
        const {img,title,price,color,stock} = this.props.propdata;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                    <img src={img} height={500} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price}$</p>
                        <p className="card-text">{color} <span style={{"height":"30px","width":"30px","border":"1px solid #000","display":"inline-block","backgroundColor":color}}></span></p>
                        <p className="card-text">{stock<1?<span className='text-dark'>Mehsul bitmisdir</span>: stock<5?<span className='text-danger'>Mehsul bitmek uzredir.Son {stock} mehsul</span>:<span className='text-success'>Mehsul movcuddur</span>} </p>
                        <button onClick={()=>{alert(`${title} product add basket`)}} className={`btn btn-${stock<1?"danger":"success"} ${stock<1?"disabled":""}`}>Buy now</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default SingleCard
import React, { Component } from 'react'
import shoes from '../data/products';

class SingleCard extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }


    render() {
        const { img, title, price, color, stock } = this.props.propdata;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                    <img src={img} height={500} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{stock === 0 ? 0 : price * this.state.count}$</p>
                        <p className="card-text">{color} <span style={{ "height": "30px", "width": "30px", "border": "1px solid #000", "display": "inline-block", "backgroundColor": color }}></span></p>
                        <p className="card-text">{stock < 1 ? <span className='text-dark'>Mehsul bitmisdir</span> : stock < 5 ? <span className='text-danger'>Mehsul bitmek uzredir.Son {stock} mehsul</span> : <span className='text-success'>Mehsul movcuddur</span>} </p>
                        <button onClick={() => { alert(`${title} product add basket`) }} className={`btn btn-${stock < 1 ? "danger" : "success"} ${stock < 1 ? "disabled" : ""}`}>Buy now</button>
                        <span className='mx-5'>
                            <button onClick={this.decrement} className='btn btn-danger'>-</button>
                            <span className='mx-3'>{stock === 0 ?0:this.state.count}</span>
                            <button onClick={() => {
                                if (this.state.count < stock) {
                                    this.setState({
                                        count: this.state.count + 1
                                    })
                                }
                            }} className='btn btn-success'>+</button>
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}

export default SingleCard
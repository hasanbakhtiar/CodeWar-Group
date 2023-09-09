import React, { Component } from 'react'
import shoes from '../data/products';

class Counter extends Component {
  constructor() {
    super();
    // this.increment = this.increment.bind(this);
    this.state = {
      count: 0
    }
  }
  increment = () => {
  if (this.state.count < shoes[0].stock) {
    this.setState({
      count: this.state.count + 1
    })
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
    return (
      <div className='container mt-5'>
        <button onClick={this.decrement} className='btn btn-danger'>-</button>
        <span className='mx-3'>{this.state.count}</span>
        <button onClick={this.increment} className='btn btn-success'>+</button>
      </div>
    )
  }
}

export default Counter
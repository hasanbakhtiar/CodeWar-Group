import React, { Component } from 'react'

class Counter extends Component {
  constructor(){
    super();
    // this.increment = this.increment.bind(this);
    this.state={
      count:10
    }
  }
  increment=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }

  render() {
    return (
      <div className='container mt-5'>
        <button  className='btn btn-danger'>-</button>
        <span className='mx-3'>{this.state.count}</span>
        <button onClick={this.increment} className='btn btn-success'>+</button>
      </div>
    )
  }
}

export default Counter
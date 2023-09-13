import React, { Component } from 'react'

class List extends Component {
   componentWillUnmount() {
    alert('component deleted')
  }
  
  render() {
    return (
      <ol>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
      </ol>
    )
  }
}



 class AppComponentDidMount extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
    }
  }

 

  render() {

    let comp;
    
    if (this.state.display) {
     comp = <List />
    }

    return (
      <div>
    {comp}
    <button onClick={()=>{this.setState({display:false})}}>delete</button>
      </div>
    )
  }
}

export default AppComponentDidMount
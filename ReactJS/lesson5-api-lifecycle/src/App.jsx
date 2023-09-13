import axios from 'axios'
import  { Component } from 'react'

export class App extends Component {

  constructor(){
    super();
    this.state = {
      products:[]
    }
  }

  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
    .then(res=>this.setState({products:res.data}))
  }
  
  render() {
    return (
      <div>
        {this.state.products.map((i,count)=>(
          <li key={count}>{i.title}</li>
        ))}
      </div>
    )
  }
}

export default App
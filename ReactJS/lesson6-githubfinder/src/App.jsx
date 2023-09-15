import React, { Component } from 'react'
import Search from './components/Search'
import Users from './components/Users'
import Header from './components/Header'
import axios from 'axios';

class App extends Component {


  constructor(){
    super();
    this.state={
      users:[]
    }
  }

  searchUser=(keyword)=>{
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({users:res.data.items}))
  }
  
  render() {
    return (
      <div>
          <Header />
          <Search sendKeyword={this.searchUser}/>
          <Users comingusers = {this.state.users} />
      </div>
    )
  }
}

export default App
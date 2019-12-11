import React, { Component } from 'react'
import { log } from 'util';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data : {}
       
    }
  }
  componentDidMount(){   
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

    fetch('http://localhost:4000/api/hello')
    .then( res => {
      return res.json();
    })
    .then( data => {
      console.log(data);
      
      this.setState({
        data:data
      })
    })

  }
  
  render() {
    console.log(this.state.data ," the data from state");
    
    return (
      <div className="App">
        <h1> the fetched data is here : </h1>
      </div>
    )
  }
}
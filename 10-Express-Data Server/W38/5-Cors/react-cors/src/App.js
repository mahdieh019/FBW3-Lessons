import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data : {},
      fetched:false
       
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
        data:data, 
        fetched:true
      })
    })

  }
  
  render() {
    console.log(this.state.data ," the data from state");
    let message="no CORS, no party!"
    if(this.state.fetched){
      message=this.state.data.msg;
    }

    return (
      <div className="App">
        <h1> the fetched data is here : </h1>
        <h2>{this.state.data.msg}</h2>
      </div>
    )
  }
}
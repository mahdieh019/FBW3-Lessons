import React, { Component } from 'react'
const url="https://jsonplaceholder.typicode.com/users";

export default class App extends Component {

 constructor(props) {
   super(props)

   this.state = {
      users: [{
        name:'no name'
      }],
      index:0
   }
 }

nextEntry(){
  this.setState({
    index: ++this.state.index

  })
}


 componentDidMount() {
   fetch(url)
   .then(response => response.json())
   .then(json =>{
      this.setState({
        users:json
      })
   })
   //setInterval(nextEntry,2000);
 }
 render() {
   return (
     <div>
       {this.state.users[this.state.index].name}
       <button onClick={this.nextEntry.bind(this)}>Next</button>
     </div>
   )
 }
}
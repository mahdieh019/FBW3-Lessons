import React, { Component } from 'react'

export default class TitleHeader extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            title :''
       }
   }
   static getDerivedStateFromProps(props, state){
   
       if(state.title !== props.newTitle){
           return {
               title : props.newTitle
           }           
       }
       else{ return null

        }
   }

   componentDidMount(){
       console.log('component did mount ', this.state.title);
       let header = document.querySelector('h1');
       header.style.background="lightgreen";
   }
 
   shouldComponentUpdate(){
       
       console.log('updating ... shouldComponentUpdate');
       return true;
   }
   componentDidUpdate(){
       console.log("component did update " , this.state.title);
       let header = document.querySelector('h1');
       header.style.background='pink';
   }
   componentWillUnmount(){
       alert('Component will unmount Good By !!!!');
   }

    render() {
        return (
            <div className="App">
                <h1> {this.state.title} </h1>                
            </div>
        )
    }
}
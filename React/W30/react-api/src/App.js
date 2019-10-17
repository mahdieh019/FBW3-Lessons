import React, { Component } from 'react'
import Inputfield from './Components/Inputfield'

export default class App extends Component {
//rconst to create constructor
  constructor(props) {
    super(props)
  
    this.state = {
       root:'https://pixabay.com/api/',
       key:'13971430-a6f36c6d5b1a37450e2985508',
       query:'',
       url:'',
       letSearch:false,
       loadedImage:null
    }
  }
  
  saveQuery=(e)=>{
    this.setState(
                  {query:e.target.value,
                  letSearch:false}
                  );
  }

  // https://pixabay.com/api/?key=13971430-a6f36c6d5b1a37450e2985508&q=yellow+flowers&image_type=photo
    searchImages=()=>{
      let words=this.state.query.split(' ');
      let newURL=this.state.root+'?key='+this.state.key+'&q='
      words.forEach(word=>{
        newURL+=word+'+';
        console.log(newURL);
      })
    }



  render() {
    return (
      <div>
        <Inputfield change={this.saveQuery} click={this.searchImages}/>
      </div>
    )
  }
}

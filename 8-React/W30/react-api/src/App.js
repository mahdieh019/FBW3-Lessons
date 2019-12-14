import React, { Component } from 'react'
import Inputfield from './Components/Inputfield'
import Images from './Components/Images'
import "./App.css"

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
    this.setState({
      query:e.target.value,
      letSearch:false
    });
  }

  // https://pixabay.com/api/?key=13971430-a6f36c6d5b1a37450e2985508&q=yellow+flowers&image_type=photo
    searchImages=()=>{
      let words=this.state.query.split(' ');
      let newURL=this.state.root+'?key='+this.state.key+'&q='; 
      //'&per_page=50'+'&q='
      words.forEach(word=>{
        newURL+=word+'+';
        console.log(newURL);
      });
      this.setState({url:newURL,letSearch:true,loadedImages:null})
    }

    loadImage=()=>{
      let newImages=<Images url={this.state.url}/>;
      this.setState({loadedImages:newImages,letSearch:false})
    }


  render() {
    if(this.state.letSearch){
      this.loadImage();
    }
    return (
      <div>
        <Inputfield change={this.saveQuery} click={this.searchImages}/>
        {this.state.loadedImages}
    

      </div>
    )
  }
}

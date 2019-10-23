import React, { Component } from 'react';
import InputField from './Components/InputField';
import Videos from './Components/Videos';
import './App.css'

class App extends Component {
//rconst
  constructor(props) {
    super(props)
    this.state = {
      root:"https://pixabay.com/api/videos/",
      key:'13971430-a6f36c6d5b1a37450e2985508',
      query:'',
      url:'',
      letSearch:false,
      loadedVideos:null,
    }
  }

  saveQuery=(e)=>{
    this.setState({query:e.target.value,letSearch:false})
  }

  searchVideos=()=>{
    let words=this.state.query.split(' ');
    console.log(words);
    let newURL=this.state.root+'?key='+this.state.key+'&q=';
    console.log(newURL);
    words.forEach(word=>{
      newURL +=`${word}+`
      console.log(newURL);
    })
    console.log('the complete url is:', newURL);
    this.setState({url:newURL ,loadedVideos:null , letSearch:true})
  }

  loadVideo=()=>{
    let newVideos= <Videos url={this.state.url}/>
    this.setState({
      loadedVideos:newVideos,letSearch:false
    })
  }

  render() {
    if(this.state.letSearch){
      this.loadVideo();
    }
    return (
      <div>
        <InputField change={this.saveQuery} click={this.searchVideos}/>
      </div>
    )
  }
}

export default App

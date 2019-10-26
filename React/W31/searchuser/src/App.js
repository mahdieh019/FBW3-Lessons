import React ,{Component}from 'react';
import Header from './Components/Header';
import SearchResult from './Components/SearchResult';
import About from "./Components/About"
import './App.css';

class App extends Component {
  state={
    searchTerm:"",
    lastSearchTerm:"",
    currentPage:"search"
      
  }
  addUser=(e)=>{
    this.setState(
      {
        searchTerm:e.target.value
      }
    );
  }

  lastSearch=(e)=>{
    this.setState({
      lastSearchTerm:this.state.searchTerm
    });
  }

  navigate=(page)=>{
    this.setState({
      currentPage:page
    })
  }

  render(){
    let output = null;

    if(this.state.currentPage==="about"){
      output=<About/>
    }else{
      output=<SearchResult change={this.addUser} click={this.lastSearch} searchFor={this.state.lastSearchTerm}/>
    }

    console.log(this.state);
    return (
      <div className="App">

        <Header navigationHandler={this.navigate} />
{/* 
        <div><input onChange={this.addUser} type="text" className="input" placeholder="Enter Searchterm"/>
       
        <button onClick={this.lastSearch} className="btn" >Search</button></div>
        
         */}
         
         
        {output}
       
      
      </div>
    );
  }
}

export default App;

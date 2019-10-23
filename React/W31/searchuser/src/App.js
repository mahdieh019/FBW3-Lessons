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

  changeState(){
    
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
        <Header/>
        <div><input onChange={this.addUser} type="text" className="input" placeholder="Enter Searchterm"/>
        <button onClick={this.lastSearch} className="btn" >Search</button></div>
        <SearchResult searchFor={this.state.lastSearchTerm}/>
        <About />
      </div>
    );
  }
}

export default App;

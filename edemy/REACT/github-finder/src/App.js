import React ,{ Component } from 'react';
import Navbar from './Components/Layout/Navbar';
//import UserItem from './Components/Users/UserItem';
import Users from './Components/Users/Users';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
          {/* <Navbar title='Github Finder' icon='fab fa-github'/> */}
          <Navbar/> 
          <div className="container">
              <Users/>
          </div>
         {/* <UserItem/> */}
      </div>
    );
  }
}

export default App;

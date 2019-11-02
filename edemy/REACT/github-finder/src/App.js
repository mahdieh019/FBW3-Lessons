import React ,{ Component } from 'react';
import Navbar from './Components/Layout/Navbar';
//import UserItem from './Components/Users/UserItem';
import Users from './Components/Users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false
  }
  async componentDidMount(){
    this.setState({loading:true})
    const res=await axios.get('https://api.github.com/users')
    this.setState({users:res.data , loading:false})
  }


  render(){
    return (
      <div className="App">
          {/* <Navbar  icon='fab fa-github'   title='Github Finder' /> */}
          <Navbar/> 
          <div className="container">
              <Users loading={this.state.loading} users={this.state.users}/>
          </div>
         {/* <UserItem/> */}
      </div>
    );
  }
}

export default App;

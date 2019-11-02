import React, { Component } from 'react'
import Me from './Components/Me'
import Hobbies from './Components/Hobbies'
import Contact from './Components/Contact'
import  './App.css'
import img from "./index.jpeg"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className='header'>
            <img src={img} alt=""></img>
            {/* <h1>About Me</h1> */}
            <nav className='navbar'>
              <ul>
                    <li><Link to="/">Me</Link></li>

                    <li><Link to="/hobbies">Hobbies</Link></li>

                    <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
        </div>

        <div>
            <Switch>
                  <Route exact path='/'>
                    <Me/>
                  </Route>

                  <Route path='/hobbies'>
                    <Hobbies/>
                  </Route>
                  
                  <Route path='/contact'>
                    <Contact/>
                  </Route>
            </Switch>
            </div>

        
      </Router>
    )
  }
}

export default App

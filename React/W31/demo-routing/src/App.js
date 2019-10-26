import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Topics from './Components/Topics'

import  './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/topics">Topics</Link>
            </li>

          </ul>
        </nav>

        <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route  path="/about">
              <About />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route  path="/topics">
              <Topics />
            </Route>

        </Switch>

      </div>
    </Router>
    )
  }
}





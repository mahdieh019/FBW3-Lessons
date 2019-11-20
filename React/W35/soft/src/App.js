import './App.css';
import { softshadow } from 'mahsash'
import React, { Component } from 'react'

export default class App extends Component {
    componentDidMount() {
        softshadow({
            shadow_type: 'hard',
            padding: false
        })
    }
    render() {
        return ( 
          <div>
            <img src="https://picsum.photos/id/171/300/300" title="" className="softshadow" />
            <img src="https://picsum.photos/id/191/300/300" title="" className="softshadow" />
            <img src="https://picsum.photos/id/193/300/300" title="" className="softshadow" />
          </div>
        )
    }
}
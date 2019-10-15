import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0,
            message:"click Me"
        }
    }

    btnClick=()=>{
        this.setState({
            counter:this.state.counter +1,
            message:"Hallo"
       })
    }

    render() {
        return (
            <div className="App">
                <h5>{this.state.counter}</h5>
                <button className="btn btn-danger" onClick={this.btnClick}>
                    {this.state.message}
                </button>
            </div>
        )
    }
}

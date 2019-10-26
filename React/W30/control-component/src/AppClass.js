import React, { Component } from 'react'
import Input from './Input'
import './App.css';

class AppClass extends Component {
    
    constructor(props){
        super(props);
        this.state={
            todo:""
        }
    }

    handelInputChange=e=>{
        this.setState({
            todo:e.target.value,
        });
    }

    handelSubmit=(e)=>{
        e.preventDefault();
        alert(`the task is: ${this.state.todo}`);
    }

    isValid=()=>{
        if(this.state.todo===''){
            return false;
        }
        return true;
    }    
    render() {
        return (
            <div className="App">

                <h2>Controlled Component with React</h2>
                <form onSubmit={this.handelSubmit}>
                    <Input
                        onChange={this.handelInputChange}
                        id="todo"
                        errorMessage={this.isValid() ? '':'This field is required'}
                        type='text' 
                        placeholder="write some text" 
                        value={this.state.todo}
                    />
                    <button class="btn btn-warning" disabled={!this.isValid()} type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default AppClass

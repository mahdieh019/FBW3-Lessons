import React,{Component} from 'react';
import InputTodo from './inputTodo';
import ListTodo from './listTodo'
import './App.css';

let todoItems=[];
todoItems.push({id:1,task:"Learn React",done:false});
todoItems.push({id:2,task:"dinner with friends",done:false});
todoItems.push({id:1,task:"Go to gym",done:false});


class TodoList extends Component{
  state={
    todoValue:"",
    todoList:[]
  }
  changeTodoValue(e){
    this.setState({
      todoValue: e.target.value
    })
  }
  addToList(){
    let list=this.state.todoList;
    list.push(this.state.todoValue);

    this.setState({todoList: list, todoValue:'' })
    console.log(this.state.todoList);
  }
  render(){
    return(
      <div className='App'>
          {
            todoItems.map(item=>{
              return <h1>{item.task}</h1>})
          }
          {/*the input*/}
        <InputTodo todoValue={this.state.todoValue} changed={(e)=>this.changeTodoValue(e)}/>
        <button onClick={()=>this.addToList()}>add</button>
        <ListTodo list={this.state.todoList}/>
     </div>
     
      )
  }
}

export default TodoList ;

import React,{Component} from 'react';
import InputTodo from './inputTodo';
import ListTodo from './listTodo'
import './App.css';

let todoItems=[];
todoItems.push({id:1,task:"Learn React",done:false});
todoItems.push({id:2,task:"dinner with friends",done:false});
todoItems.push({id:3,task:"Go to gym",done:false});


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

  handleSubmit=(e)=>{
    e.preventDefault();
    alert(`This task is ${this.state.todoValue}`);
  }

  isValid=()=>{
    if(this.state.todoValue===''){
      return false;
    }
    return true;
  }


// removeElement=(name)=>{
//   this.setState({
//     this.state.todoList.filter(e=>e !==name)
//     })

//   }


removeElement=(item)=>{
  let myList=this.state.todoList;
  myList.splice(item,1);
  this.setState({
    todoList:myList
  })
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
          <button onClick={()=>this.addToList()} disabled={!this.isValid()}>add</button>
          <ListTodo list={this.state.todoList} remove={item=>this.removeElement(item)}/>
         
      </div>
     
      )
  }
}

export default TodoList ;

import React from'react'

const ListTodo=props=>{
    let listOfItems;
    if(props.list.length>0){
        // listOfItems=props.list.map((item,index)=> <h4 key={index}>{item}</h4>
        listOfItems=props.list.map((item,index)=> <li onClick={()=>props.remove(index)} key={index}>{item}</li>

        );
    }else{
        listOfItems=<p>Please add some tasks</p>
    }
    return(
        // <div>
        //     {listOfItems}
            
        // </div>
        <ul>
          {listOfItems}
        
         </ul>
    );
}
export default ListTodo;
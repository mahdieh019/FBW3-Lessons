import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle=() =>{
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ?'line-through':'none'
        }


        // if(this.props.todo.completed){
        //     return{
        //         textDecoration:'line-through'
        //     }
        // }else{
        //     return{
        //         textDecoration:'none'
        //     }
        // }
    }
//-------------------------------------------first way-------------------------------------------------------
    // markComplete(e){                         //onChange={this.markComplete.bind(this)} 
    //     console.log(this.props);
    // }

//------------------------------------------second way-----------------------------------------------------

    // markComplete=e =>{                          //onChange={this.markComplete}
    //     console.log(this.props);
    // }

 //-------------------------------------------------------------------------------------------------
 
 


    render() {
        const{id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)} />{' '}   */}
                    {/* {this.props.todo.title} */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />{' '}  
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
             </div>

            // <div style={itemstyle}>
            //     <p>{this.props.todo.title}</p>
            // </div>


            
        )
    }
}

//ProtoType
TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

// const itemstyle={
//     backgroundColor:'#f4f4f4'
// }
export default TodoItem

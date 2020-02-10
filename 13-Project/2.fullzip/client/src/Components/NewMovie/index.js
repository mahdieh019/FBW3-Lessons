import React, { Component } from 'react'
import apis from'../../api'


export default class NewMovie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             rating:0,
             comment:''
        }
    }
    
    handleInputTitle=e=>{
        const value = e.target.value;
        this.setState({title:value})
    }

    handleInputComment=e=>{
        const value = e.target.value;
        this.setState({comment:value})
       
    }

    handleInputRating=e=>{
        const value =e.target.validity.valid
         ? e.target.value
         : this.state.rating
         this.setState(({rating:value}))
    }

    handleSendData=async()=>{
        const data=this.state;
        await apis.sendMovie(data).then(response=>{
            window.alert("Rey Dude !!! New review added!!!!")
            this.setState({
                title:'',
                rating:0,
                comment:''
            })
        })
    }


    render() {
        return (
            <div className="container form-group">
                <h1>Add new review</h1>

                <label htmlFor="title">Title</label>
                <input type="text"
                       name="title"
                       className="form-control"
                       value={this.state.title}
                       onChange={this.handleInputTitle}
                />   

                <label htmlFor="rating">Rating</label>    
                <input type="text"
                        name="rating"
                        type="number"
                        min="0"
                        max="10"
                        className="form-control"
                        value={this.state.rating}
                        onChange={this.handleInputRating}                
                />      

                <label htmlFor="comment">Comment</label>
                <input type="text"
                       name="comment"
                       className="form-control"
                       value={this.state.comment}
                       onChange={this.handleInputComment}
                /> 
                <button className="btn btn-primary" 
                        onClick={this.handleSendData}>
                        Add Review
                </button>
            </div>
        )
    }
}

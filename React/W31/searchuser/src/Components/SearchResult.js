import React, { Component } from 'react';
import User from './User';

class SearchResult extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users:
            [
                {id:1,name:"Ali",age:29,email:"Ali@dci.com"},
                {id:2,name:"Andre",age:23,email:"Andre@dci.com"},
                {id:3,name:"Maria",age:26,email:"Maria@dci.com"},
                {id:4,name:"John",age:20,email:"John@dci.com"}
            ],
            lastSearchTerm:''
        }
    }

    shouldComponentUpdate(nextProps){
        if(this.state.lastSearchTerm==nextProps.searchFor){
            return false
        }else{
            return true
        }
    };

    componentDidUpdate(){
        console.log("updated");
        this.setState({
            lastSearchTerm:this.props.searchFor
        })
    }
 
    render() {
        const body=this.state.users.map(item=>{
            return(
                <User id={item.id} name={item.name} age= {item.age} email={item.email}/>
            )
        })

        const result= this.state.users.filter(user => 
            user.name.toLowerCase().includes(this.props.searchFor.toLowerCase()));

        const search=result.map(item=>{
            return(
                <User id={item.id} name={item.name} age= {item.age} email={item.email}/>
            )
        })

       

        return (
            <div>
                <table>
                    <thead><tr><th>id</th><th>name</th><th>age</th><th>email</th></tr></thead>
                    <tbody>
                        {/* <User users={this.state.users}/> */}
                        {/* {body} */}
                        {search}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchResult
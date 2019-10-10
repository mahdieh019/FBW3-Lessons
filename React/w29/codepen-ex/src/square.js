import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:null
        };
    }
    render(){
        return(
            <button className="square" onClick={()=>
                this.setState({value:'X'})
            }>
                {this.props.value}
            </button>
        );
    }
}

export default Square
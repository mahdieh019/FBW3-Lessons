import React from 'react'

export default function Input(props) {
    return (
        <div>
            <div className="errorMessage">{props.errorMessage}</div>
            
            <input onChange={props.onChange} id={props.id} type={props.type} 
            placeholder={props.placeholder} value={props.value}/>

        </div>
    )
}

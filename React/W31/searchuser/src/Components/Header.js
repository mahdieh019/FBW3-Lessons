import React from 'react'

export default function Header(props) {
    return (
        <div  className="header">
            <h2>User Search</h2>
            <p onClick={()=>props.navigationHandler("search")} >Search </p>
            <p onClick={()=>props.navigationHandler("about")} >About</p>
        </div>
    )
}

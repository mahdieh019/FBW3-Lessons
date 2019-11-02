import React from 'react'

export default function Header(props) {
    return (
        <div  className="header">
            <h2>User Search</h2>
            <p className='head' onClick={()=>props.navigationHandler("about")} >About</p>
            <p className='head' onClick={()=>props.navigationHandler("search")} >Search </p>
        </div>
    )
}

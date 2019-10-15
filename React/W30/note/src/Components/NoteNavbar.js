import React from 'react'
import {Navbar} from 'react-bootstrap'
export default function NoteNavbar(props) {
    return (
        <Navbar bg='warning' variant='dark'>
            <Navbar.Brand>Notes in React</Navbar.Brand>
            <input type='text' placeholder='Note name'
             onChange={props.save} value={props.value}></input>
             <button className="btn btn-success ml-2" onClick={props.create}>Add Note</button>
        </Navbar>
    )
}

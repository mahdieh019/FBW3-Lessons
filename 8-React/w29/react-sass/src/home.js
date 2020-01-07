import React from 'react'
import {Button ,ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
    return (
       
            <ButtonToolbar>
                <Button variant="danger">Danger Burron</Button>
                <Button variant="info">info Burron</Button>
                <Button variant="success">success Burron</Button>
            </ButtonToolbar>
       
    )
}

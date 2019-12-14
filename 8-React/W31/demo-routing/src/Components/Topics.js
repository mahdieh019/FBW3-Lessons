import React from 'react'

import {
 // BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function Topics() {
    let {path,url}=useRouteMatch(); //{path:'relative/path/topics' , url:'/topic'}

    return (
        <div>
            <ul >
                <li className="drop">
                    <Link to={`${url}/link1`}>Link1</Link>
                </li>

                <li className="drop">
                    <Link to={`${url}/link2`}>Link2</Link>
                </li>

                <li className="drop">
                    <Link to={`${url}/link3`}>Link3</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${path}/:topicId`}>
                    <Topic/>
                </Route>
            </Switch>
        </div>
    )
}

function Topic(){
    let {topicId}=useParams();
    return(
        <div>
            <h3>Topic {topicId}</h3>
        </div>
    )
}

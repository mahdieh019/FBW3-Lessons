import React from 'react'

// const User=props=> {
//     const body=props.list.map(user=>
//             <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.age}</td>
//                 <td>{user.email}</td>
//             </tr>
//        )
//     return body;
// }


const User=props=> {
  return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.email}</td>
        </tr>
        )
  
}


export default  User;
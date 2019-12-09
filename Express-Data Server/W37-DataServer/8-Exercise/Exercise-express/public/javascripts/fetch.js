//https://github.com/SebastianSalasDCI/Exercise_express

function obtain_data(){
    fetch("http://localhost:3000/api")
    .then(resp=>{
        return resp.json();
    })
    .then(data =>{
        console.log(data);
        create_table(data);
    })
}

function create_table(data){
    const header= Object.keys(data[0]);
    console.log(header);
    let thead_content ="";
    let tbody_content ="";
    let tb=document.getElementById('tb');
    const th=document.getElementById('th');
    var trheader = th.insertRow(0);
    for(let i=0;i<header.length;i++){
        let cell = trheader.insertCell(i)
        cell.innerHTML = header[i]
    };
    for (let i = 0; i < data.length; i++) {
        tr = tb.insertRow(i);
        for (let j = 0; j < header.length; j++) {
            let tabCell = tr.insertCell(j);
            tabCell.innerHTML = data[i][header[j]];
        }
    }
}

obtain_data();





//-----------------------------solution from sebastian-------------------------------------



// function obtain_data(){
        
//     fetch('/api')
//     .then( response =>{
//         console.log(response)
//         return response.json()
//     })
//     .then(data =>{
//         console.log(data)
//         create_table(data)
//     })
// }


// function create_table(raw_data){

//     let output = '';

//     let table_headers = Object.keys(raw_data[0])

//     output += '<thead>'
//     table_headers.forEach(element => {
//         output += `
            
//                 <th>${element}</th>
//         `
//     });
    
//     output += `
//         </thead>
//         <tbody>
//     `
    
//     raw_data.forEach(element => {
//         output += `
//             <tr>
//             <td onclick=delete_data(${element.id}) >${element.id}</td>
//             <td onclick=delete_data(${element.id}) >${element.name}</td>
//             </tr>   
//         ` 
//     });
    
//     output += "</tbody>"
    
//     document.getElementById("tabla").innerHTML = output;
    

// }

// function delete_data(id){

//     console.log(id)

//     data = {id: id}

//     fetch('/api/delete',{
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     })
//     obtain_data()
// }

// obtain_data()
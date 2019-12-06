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

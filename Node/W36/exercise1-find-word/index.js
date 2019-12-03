const fs=require('fs');
// let readable=fs.createReadStream(__dirname +'/data.txt',{encoding:'utf8'});
let [searchWord="localhost" , filepath="data.txt"]=process.argv.slice(2);
let i=0
let w=0;
// let word=process.argv[2];
// let copy=process.argv[3];
//----------------------------------new code------------------------------
if(!fs.existsSync(filepath)){
    filepath="data.txt"
}

let readable=fs.createReadStream(__dirname +'/'+filepath,{encoding:'utf8'});

//----------------------------------------------------------------------------
readable.on('data',function(piece){
    i++;
    console.log('reading... ' + i)
    if(piece.includes(word)){
        w++;
    }
    
})

readable.on('end',function(){
    process.stdout.write(`End of the Data \n`);
    process.stdout.write(`Number of chunk ${i} \n`);
    console.log(`we found the ${word} ${w} times`);

})






// const writeable=fs.createWriteStream(__dirname +'/datacopy.txt',{encoding:'utf8'});
// readable.on('data',function(piece){
//     writeable.write(piece);
// })

// let readcopy=fs.createReadStream(__dirname +'/datacopy.txt',{encoding:'utf8'});

// readcopy.on('data',function(piece){
//     i++;
//     console.log('reading... ' + i)
//     if(piece.includes(word)){
//         w++;
//     }
    
// })

// readcopy.on('end',function(){
//     process.stdout.write(`End of the Data \n`);
//     process.stdout.write(`Number of chunk ${i} \n`);
//     console.log(`we found the ${word} ${w} times`);

// })

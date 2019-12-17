const fs=require ('fs');
const file=fs.createWriteStream('file.txt');
 file.write('Hello world');


// for(let i=0;i<100;i++){
//     file.write("hello write"+ i + '\n')
// }
file.end(' the end ...');


const readable=fs.createReadStream(__dirname + '/file.txt',{encoding:'utf8',highWaterMark: 25*1024});
const writeable=fs.createWriteStream(__dirname + '/filecopy.txt');
readable.on('data', function(piece){
    console.log(piece.length);
    writeable.write(piece);
})
// readable.on('data', function(chunk){
//     console.log(chunk.length);
// });


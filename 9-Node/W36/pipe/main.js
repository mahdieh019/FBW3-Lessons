const fs=require ('fs');

let read=fs.createReadStream('test.txt');

let writeable=fs.createWriteStream('output.txt');

read.pipe(writeable);

console.log('programm Ended');

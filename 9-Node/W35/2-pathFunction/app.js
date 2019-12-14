const pathFunctions=require('./pathFunctions');
console.log('app: Live  Server !!!!!');
const path=require('path');

pathFunctions.getConstants();
//pathFunctions.getBaseName();

pathFunctions.getBaseName(__filename);
pathFunctions.getBaseName('./home/user/index.js');

pathFunctions.getDirName(__filename);
pathFunctions.getDirName('./home/user/index.js');

pathFunctions.getExtName(__filename);
pathFunctions.getExtName('./home/user/index.png');


// let res;
res=path.join('/home','user_folder','style.css');
console.log('join: '+res);

// res=path.join('/book_store','kite-runner','book.pdf');
// console.log('join: '+res);

// res=path.join('/book_store','kafka_on_the_beach','book.pdf');
// console.log('join: '+res);

// // //parse
console.log('parse function');
res=path.parse('/book_store/kafka_on_the_beach/book.pdf');
console.log(res);
console.log(typeof res);
console.log('dir: '+ res.dir);
console.log('base: '+ res.base);
console.log('ext: '+ res.ext);
console.log('name: '+ res.name);

// // //format 
console.log('\nformat function');
res=path.format({
    root:'/',
    dir: '/book_store/kafka_on_the_beach/',
    name: 'book',
    ext: '.pdf'
});

console.log('format: '+ res);

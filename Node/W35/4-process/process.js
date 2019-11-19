function run(){
    let counter=0;
    setInterval(()=>{
        counter ++;
        console.log(counter);
        if(counter ==10){
            process.exit()
        }
    },100)
}
run();
// console.log(process.argv[2]);
let command=process.argv[2];
if(command==='fly'){
    console.log('flying...')
}
else if(command==='drive'){
    console.log('driving')
}
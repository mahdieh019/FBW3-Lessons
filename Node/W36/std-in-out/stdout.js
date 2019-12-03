let questions=[
    "what is your name?",
    "what is your fav hobby?",
    "what is the prefered language?"
]
let answers=[];

function ask(i){
    process.stdout.write(`${questions[i]}`);
    process.stdout.write('>');
}
process.stdin.on('data',function(data){
    // process.stdout.write('\n' +data.toString().trim());
    answers.push(data.toString().trim()); //trim removes the blank space 
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
        
    }
    // for(let i=0;i<answers.length;i++){
    //     ask(answers.length);
    // }
    // process.exit();
});

process.on('exit',function(){
    process.stdout.write('\n\n\n');
    process.stdout.write(` Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`)
    process.stdout.write('\n\n\n');
})



ask(0)
// process.stdout.write('hello \t');
// process.stdout.write(' word'+'\n');
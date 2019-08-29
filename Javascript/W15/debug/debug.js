var person={
    fname:"John",
    lnamr:"snow",
    age: 250,
    ayecolor:"blue"

};
printPersonProps(person);
function printPersonProps(obj){
    // let text;
    // text="There was an user with the name " + obj.fname;
    // document.write(text);

    for(prop in obj){
     document.write(obj[prop] + '<br>');
    }
}
// let num=10;

// function count(number){
//     for(i=1;i<number;i++){
//     document.write('<br>');
//     document.write(i);
//     }
// }

// count(num);
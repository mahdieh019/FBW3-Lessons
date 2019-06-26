// let answer=prompt("do you like javascript?");
//         while(answer!=="yes"){
//         let answer=prompt("do you like javascript");
//         }
//         alert("thank you");

//////////////////////////////////////////////////////////

// let answer=prompt("do you like javascript?");
//     while(answer.indexOf("yes")==-1){
//         let answer=prompt("do you like javascript");
//     }
//     alert("thank you");

///////////////////////////////////////////////////////
// let i=0;
// while(i<=20){
//     console.log(i);
//     i=i+1;
// }
////////////////////////////////////////////////////////

// let j=0;
// while(j<=30){
//     j++;
//     if(j==10){
//         continue;
//     }
//     console.log(j);
// }
////////////////////////////////////////////////

// let drinklist=["water","tea","milk","coffee","cola","beer","milk"];
// let c=-1;
// while(c<drinklist.length-1){
//     c++;
//     if(drinklist[c]=="milk"){
//         continue;
//     }
//     alert(drinklist[c]);
// }
////////////////////////////////////////////////
// let drinklist=["water","tea","coffee","cola","beer"];
// let c=-1;
// while(c<drinklist.length-1){
//     c++;
//    function drink(milk);
//    alert(drinklist[c]);
// }
////////////////////////////////////////////////

// function delDrink(drink){
//     let drinklist=["water","tea","coffee","cola","beer"];
//     let c=-1;
//     while(c<drinklist.length-1){
//         c++;
//         if(drinklist[c]==drink){
//             continue;
//       }
//        alert(drinklist[c]);
//     }
// }
    
/////////////////////////////////////////////////
// let drinkList=["water","tea","coffee","cola","beer"];
// function addDrink(drinkName){
//     if(typeof(drinkName) !=="undefined"){
//         drinkList.push(drinkName);
//         console.log("the drinkList after insert is : ");
//         console.log( drinkList);
//     }
//  }

////////////////////add an element into an array at a specific index//////////////////////////////
// let drinklist=["water","tea","coffee","cola","beer"];
// function addDrink(drink,place){
//     let c=-1;
//     while(c<drinklist.length-1){
//         c++;
//         if(c==place){

//             drinklist.splice(c, 0, drink);
//       }
//     }
//     console.log(drinklist.join());
// }
/////////////////////////////////////////////////////
let list=["learn Javascript"];
let answer=prompt("What would you like to do?");
while(answer!=="quit"){
     if(answer=="list"){
        // console.log(list);
        printlist();
    }
    else if(answer=="new") {
        // let newelement= prompt("add new to do") ;
        //     list.push(newelement);
        // }
        // answer=prompt("What would you like to do?");
        addnew();
    }else if(answer=="delete"){
        delelement();
    } 
    
    

    
    answer=prompt("What would you like to do?");
} 
    console.log("close the app");


function printlist(){
    list.forEach(function(item){
        console.log(item);
        console.log('*********');
    });
}
function addnew(){
    let newelement= prompt("add new to do") ;
    list.push(newelement);
    console.log(newelement+"added the list");
}

function delelement(){
    let delIndex=prompt("which element do you want to delete");
    let del=list[delIndex];
    list.splice(delIndex,1); //it deletes only one element.
    console.log("the task"+ del+"is deleted.");
}
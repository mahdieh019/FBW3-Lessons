// 4. find
let food=["banana","mango","apple"];
function check1(foodName){
    return foodName=="banana";
}
console.log(food.find(function(foodName){
    return foodName=="banana";
}));



let person=[{name:"Anna",work:"doctor"},
            {name:"David", work:"web developer"},
            {name:"Eric", work:"Hair Dresser"},
            {name:"Mansour", work:"web developer"},
            [7],
            {
                number:[2,4]
            }
        ];

        //person[5].number[1]
//------------------------------------------------------------
        // person.find(function(item){
        //     if(item.work=="web developer"){
        //         return item.name;
        //     }
            
            
        //     })      find returns only the first element if it finds
        

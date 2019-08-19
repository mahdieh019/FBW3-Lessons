const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

//   for (let i=0;i<companies.length;i++){
//       console.log(companies[i]);
//   }

companies.forEach(function(company){
    console.log(company);
});


// to get names of company 
companies.forEach(function(company){
    console.log(company.name);
});

//////////////////////////////////////////////////
const ages = [81,33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i=0;i<ages.length;i++){
    if(ages[i]>=21){
        document.write(ages[i]+" ");
    }
}

//to put the result in an array
// let canDrive=[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrive.push(ages[i]);
//     }
// }
// console.log(canDrive); //[ 81, 33, 54, 21, 44, 61, 45, 25, 64, 32 ]
//////////////////////////////////////////////////////
let canDrive=ages.filter(function(age){
    if(age>=21){
        return true;
    }
});
console.log(canDrive);//[ 81, 33, 54, 21, 44, 61, 45, 25, 64, 32 ]

//////////////////////////Arrow Function/////////////////////////////
// let canDrive=ages.filter(age => age>=21);
// console.log(canDrive);
//////////////////////////////////////////////////////

// const retailCompanies=companies.filter(function(company){
//   if(company.category=="Retail"){
//     return true;
//   }
// });
// console.log(retailCompanies);

/////////////////////////////////////////////////
retailCompanies=companies.filter(company=>company.category=="Retail");
console.log(retailCompanies);

const eightiesCompanies=companies.filter(company=>company.start >=1980 && company.end<1990);
console.log(eightiesCompanies);

// //map
// const companyName=companies.map(function(company){
//   return company.name;
// });
// console.log(companyName); //[ "Company One", "Company Two", "Company Three", "Company Four", "Company Five",
                          // "Company Six", "Company Seven", "Company Eight", "Company Nine" ]

/////////////////////////////////////////
// const companyName=companies.map(function(company){
//   return company.name+" "+[company.end-company.start]+"years";
// });
// console.log(companyName);

////////////////////////////////////////////////////////
const companyName=companies.map(company=> `${company.name} ${company.end-company.start} years`);
console.log(companyName);

const agesMap=ages.map(age => Math.sqrt(age));
console.log(agesMap);

//////////////////////////////////////////////
let ageSort=ages.sort();
console.log( ageSort);//[5, 12, 13, 15, 16, 20, 21, 25, 32, 33, 44, … ]

//////////////////////////////////////
ageSort=ages.sort(function(a,b){
  return b-a;
});
console.log(ageSort); //[ 81, 64, 61, 54, 45, 44, 33, 32, 25, 21, … ]
console.log(ageSort.reverse()); //[ 5, 12, 13, 15, 16, 20, 21, 25, 32, 33, … ]

/////////////////////////////////////////
// const sortedCompanies=companies.sort(function(c1,c2){
//   if(c1.start > c2.start){
//     return -1;
//   }
//   else{
//     return 1;
//   }
// });
// console.log(sortedCompanies);

////////////////////////////////////////////////////
const sortedCompanies=companies.sort((c1,c2)=>(c1.start > c2.start ? 1 : -1));
console.log(sortedCompanies);

//////////////////////////////////
// let ageSum=0;
// for(let i=0;i<ages.length;i++){
//   ageSum+= ages[i];
// }
// console.log(`the sum of ages is ${ageSum}`);

/////////////////////////////////////////////////////
let ageSum=ages.reduce(function(total,age){
  return total + age;
});
console.log(`the sum of ages is ${ageSum}`);
ageSum=ages.reduce((total,age) => total + age);
//////////////////////////////////////////////////////
const totalYear= companies.reduce((total,company)=> total + (company.end - company.start),0);
console.log(totalYear);


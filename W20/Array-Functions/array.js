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
  const ages = [81,33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for (let i=0;i<companies.length;i++){
//       console.log(companies[i]);
//   }

companies.forEach(function(company){
    console.log(company);
});


// to get names of company 
// companies.forEach(function(company){
//     console.log(company.name);
// });

//////////////////////////////////////////////////
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         console.log(ages[i]);
//     }
// }

//to put the result in an array
// let canDrive=[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrive.push(ages[i]);
//     }
// }
// console.log(canDrive);
//////////////////////////////////////////////////////
// let canDrive=ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// });
// console.log(canDrive);

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
// retailCompanies=companies.filter((company)=>company.category=="Retail");
// console.log(retailCompanies);

// const eigtiesCompanies=companies.filter(company=>company.start >=1980 && company.end<1990);
// console.log(eigtiesCompanies);

// //map
// const companyName=companies.map(function(company){
//   return company.name;
// });
// console.log(companyName);

/////////////////////////////////////////
// const companyName=companies.map(function(company){
//   return company.name+" "+[company.end-company.start]+"years";
// });
// console.log(companyName);

////////////////////////////////////////////////////////
const companyName=companies.map(company=> '${company.name} ${company.end-company.start} years')
console.log(companyName);

const agesMap=ages.map(age => Math.sqrt(age));
console.log(agesMap);

//////////////////////////////////////////////
let ageSort=ages.sort();
console.log( ageSort);

//////////////////////////////////////
ageSort=ages.sort(function(a,b){
  return b-a;
});
console.log(ageSort);
console.log(ageSort.reverse());
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
//   ageSum=ageSum+ ages[i];
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



// import{greeting} from './user.js';
// import{hi} from './user.js';
//import{greeting,hi} from './user.js';

//--------------------------------------------------------


//import doubleNumber from './user.js';     no need to add{} after import because doubleNumber is export default
import {doubleNumber} from './user.js';
// //-----------------------------------------------------------

alert (greeting);
alert (doubleNumber(250));

console.log(hi(" Mahsa"));



//-------------------------------------------------------------------------
//  dom
// let div=document.createElement("div");
// div.append(hi("Mahsa"));
// div.style.background="pink";
// document.body.append(div);

//---------------------------------
import{greeting,hi,makeElement} from './user.js';

makeElement("div",hi("Mahsa"),"pink");
makeElement("div",hi("Mari"),"lightgreen");
makeElement("span",hi("Ali"),"red");
makeElement("section",hi("Dan"),"blue");